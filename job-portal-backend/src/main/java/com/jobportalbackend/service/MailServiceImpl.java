package com.jobportalbackend.service;

import com.jobportalbackend.exceptions.JobPortalException;
import com.jobportalbackend.model.OTP;
import com.jobportalbackend.model.User;
import com.jobportalbackend.repositories.OTPRepository;
import com.jobportalbackend.repositories.UserRepository;
import com.jobportalbackend.utils.Data;
import com.jobportalbackend.utils.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import sendinblue.ApiClient;
import sendinblue.ApiException;
import sendinblue.Configuration;
import sendinblue.auth.ApiKeyAuth;
import sibApi.TransactionalEmailsApi;
import sibModel.SendSmtpEmail;
import sibModel.SendSmtpEmailSender;
import sibModel.SendSmtpEmailTo;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;

@Service
public class MailServiceImpl implements MailService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OTPRepository otpRepository;

    @Value("${brevo.api.key}")
    String apiKey;

    @Override
    public Boolean sendOTP(String email) throws Exception {
        User user = userRepository
                .findByEmail(email)
                .orElseThrow(
                        () -> new JobPortalException("USER_NOT_FOUND"));
        String generatedOTP = Utilities.generateOTP();
        OTP otp = new OTP(email, generatedOTP, LocalDateTime.now());
        otpRepository.save(otp);

        ApiClient defaultApiClient = Configuration.getDefaultApiClient();
        ApiKeyAuth apiKeyAuth = (ApiKeyAuth) defaultApiClient.getAuthentication("api-key");
        apiKeyAuth.setApiKey(apiKey);
        TransactionalEmailsApi apiInstance = new TransactionalEmailsApi();

        SendSmtpEmailSender sender = new SendSmtpEmailSender();
        sender.setEmail("hashamtanvr41@gmail.com");
        sender.setName("Job Portal");

        SendSmtpEmailTo to = new SendSmtpEmailTo();
        to.setEmail(email);

        SendSmtpEmail sendSmtpEmail = new SendSmtpEmail();
        sendSmtpEmail.setSender(sender);
        sendSmtpEmail.setTo(Collections.singletonList(to));
        sendSmtpEmail.setSubject("Your OTP code");
        sendSmtpEmail.setHtmlContent(Data.getOtpEmailTemplate(generatedOTP, user.getName()));

        try {
            apiInstance.sendTransacEmail(sendSmtpEmail);
        } catch (ApiException e) {
            System.err.println("Brevo error: " + e.getResponseBody());
            throw new Exception("Failed to send OTP email");
        }

        return true;
    }


    @Override
    public Boolean verifyOTP(String email, String otp) throws JobPortalException {
        OTP savedOTP = otpRepository
                .findById(email)
                .orElseThrow(
                        () -> new JobPortalException("OTP_NOT_FOUND"));
        if (!savedOTP.getOtp().equals(otp))throw new JobPortalException("OTP_Incorrect");
        return true;
    }

    @Scheduled(fixedRate = 60000)
    public void removeExpiredOTPs(){
        LocalDateTime expiry = LocalDateTime.now().minusMinutes(5);
        List<OTP> expiredOTPs = otpRepository.findByCreationTimeBefore(expiry);
        if (!expiredOTPs.isEmpty()){
            otpRepository.deleteAll(expiredOTPs);
        }
    }
}
