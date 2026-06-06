package com.jobportalbackend.service;

import com.jobportalbackend.exceptions.JobPortalException;
import com.jobportalbackend.model.OTP;
import com.jobportalbackend.model.User;
import com.jobportalbackend.repositories.OTPRepository;
import com.jobportalbackend.repositories.UserRepository;
import com.jobportalbackend.utils.Data;
import com.jobportalbackend.utils.Utilities;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSender;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class MailServiceImpl implements MailService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OTPRepository otpRepository;

    @Autowired
    private JavaMailSender javaMailSender;

    @Override
    public Boolean sendOTP(String email) throws Exception {
        User user = userRepository
                .findByEmail(email)
                .orElseThrow(
                        () -> new JobPortalException("USER_NOT_FOUND"));

        MimeMessage mm = javaMailSender.createMimeMessage();
        MimeMessageHelper message = new MimeMessageHelper(mm, true);
        message.setTo(email);
        message.setSubject("Your OTP code");
        String generatedOTP = Utilities.generateOTP();
        OTP otp = new OTP(email, generatedOTP, LocalDateTime.now());
        otpRepository.save(otp);
        message.setText(Data.getOtpEmailTemplate(generatedOTP, user.getName()), true);
        javaMailSender.send(mm);
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
