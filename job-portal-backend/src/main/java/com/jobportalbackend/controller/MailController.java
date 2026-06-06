package com.jobportalbackend.controller;

import com.jobportalbackend.exceptions.JobPortalException;
import com.jobportalbackend.payload.EmailResponseDTO;
import com.jobportalbackend.service.MailService;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@Validated
public class MailController {

    @Autowired
    private MailService mailService;

    @PostMapping("/sendOTP/{email}")
    public ResponseEntity<EmailResponseDTO> sendOTP(@PathVariable @Email(message =  "{user.email.invalid}") String email) throws Exception {
        mailService.sendOTP(email);
        return new ResponseEntity<>(new EmailResponseDTO("OTP sent successfully"), HttpStatus.OK);
    }

    @GetMapping("/verifyOTP/{email}/{otp}")
    public ResponseEntity<EmailResponseDTO> verifyOTP(@PathVariable @Email(message =  "{user.email.invalid}") String email, @PathVariable @Pattern(regexp = "^[0-9]{6}$" , message = "{otp.invalid}") String otp) throws JobPortalException {
        mailService.verifyOTP(email, otp);
        return new ResponseEntity<>(new EmailResponseDTO("OTP has been verified successfully"), HttpStatus.OK);
    }
}
