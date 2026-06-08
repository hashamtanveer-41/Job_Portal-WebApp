package com.jobportalbackend.service;

import com.jobportalbackend.exceptions.JobPortalException;
import com.jobportalbackend.payload.ProfileDTO;
import org.springframework.security.core.parameters.P;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface ProfileService {
    Long createProfile(String email) throws JobPortalException;
    ProfileDTO getProfile(Long id) throws JobPortalException;
    ProfileDTO updateProfile(ProfileDTO profileDTO) throws JobPortalException;
    ProfileDTO updateProfileImage(Long id, MultipartFile image) throws Exception;
}
