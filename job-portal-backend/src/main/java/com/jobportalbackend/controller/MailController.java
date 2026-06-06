package com.jobportalbackend.controller;

import com.jobportalbackend.exceptions.JobPortalException;
import com.jobportalbackend.payload.EmailResponseDTO;
import com.jobportalbackend.service.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
@Validated
public class MailController {

    @Autowired
    private MailService mailService;

    @PostMapping("/sendOTP/{email}")
    public ResponseEntity<EmailResponseDTO> sendOTP(@PathVariable String email) throws Exception {
        mailService.sendOTP(email);
        return new ResponseEntity<>(new EmailResponseDTO("OTP sent successfully"), HttpStatus.OK);
    }
}
