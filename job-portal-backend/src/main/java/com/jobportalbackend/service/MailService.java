package com.jobportalbackend.service;

import com.jobportalbackend.exceptions.JobPortalException;

public interface MailService {
    Boolean sendOTP(String email) throws Exception;

    Boolean verifyOTP(String email, String otp) throws JobPortalException;
}
