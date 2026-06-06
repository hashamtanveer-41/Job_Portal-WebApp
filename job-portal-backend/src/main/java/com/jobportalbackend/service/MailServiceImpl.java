package com.jobportalbackend.service;

import com.jobportalbackend.exceptions.JobPortalException;
import com.jobportalbackend.model.OTP;
import com.jobportalbackend.model.User;
import com.jobportalbackend.repositories.OTPRepository;
import com.jobportalbackend.repositories.UserRepository;
import com.jobportalbackend.utils.Utilities;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSender;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

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
        userRepository
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
        message.setText("Your Code is: "+generatedOTP, false);
        javaMailSender.send(mm);
        return true;
    }
}
