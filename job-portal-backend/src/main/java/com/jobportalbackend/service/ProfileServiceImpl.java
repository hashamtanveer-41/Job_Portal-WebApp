package com.jobportalbackend.service;

import com.jobportalbackend.exceptions.JobPortalException;
import com.jobportalbackend.model.Profile;
import com.jobportalbackend.model.User;
import com.jobportalbackend.payload.ProfileDTO;
import com.jobportalbackend.payload.ResponseDTO;
import com.jobportalbackend.payload.UserDTO;
import com.jobportalbackend.payload.UserLoginDTO;
import com.jobportalbackend.repositories.ProfileRepository;
import com.jobportalbackend.repositories.UserRepository;
import com.jobportalbackend.utils.Utilities;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Optional;

@Service("profileService")
public class ProfileServiceImpl implements ProfileService{

    @Autowired
    private ProfileRepository profileRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private FileService fileService;

    @Override
    public Long createProfile(String email) throws JobPortalException {
        Profile profile = new Profile();
        profile.setId(Utilities.getNextSequence("profiles"));
        profile.setEmail(email);
        profile.setSkills(new ArrayList<>());
        profile.setExperiences(new ArrayList<>());
        profile.setCertifications(new ArrayList<>());
        profileRepository.save(profile);
        return profile.getId();
    }

    @Override
    public ProfileDTO getProfile(Long id) throws JobPortalException {
        Profile savedProfile = profileRepository.findById(id).orElseThrow(()->new JobPortalException("PROFILE_NOT_FOUND"));
        return modelMapper.map(savedProfile, ProfileDTO.class);
    }

    @Override
    public ProfileDTO updateProfile(ProfileDTO profileDTO) throws JobPortalException {
        profileRepository.findById(profileDTO.getId())
                .orElseThrow(
                        () -> new JobPortalException("PROFILE_NOT_FOUND"));
        Profile updatedProfile =profileRepository.save(modelMapper.map(profileDTO, Profile.class));
        return modelMapper.map(updatedProfile, ProfileDTO.class);
    }

    @Override
    public ProfileDTO updateProfileImage(Long id, MultipartFile image) throws Exception {
        Profile savedProfile = profileRepository
                .findById(id)
                .orElseThrow(()->new JobPortalException("PROFILE_NOT_FOUND"));

        String filename = fileService.uploadImage(image);
        savedProfile.setImage(filename);

        Profile updatedProfile =profileRepository.save(savedProfile);
        ProfileDTO profileDTO = modelMapper.map(updatedProfile, ProfileDTO.class);
        profileDTO.setImage(filename);
        return profileDTO;
    }
}
