package com.jobportalbackend.controller;

import com.jobportalbackend.exceptions.JobPortalException;
import com.jobportalbackend.payload.ProfileDTO;
import com.jobportalbackend.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/profiles")
public class ProfileController {
    @Autowired
    private ProfileService profileService;

    @GetMapping("/{id}")
    public ResponseEntity<ProfileDTO> getProfile(@PathVariable Long id) throws JobPortalException {
        return new ResponseEntity<>(profileService.getProfile(id), HttpStatus.OK);
    }

    @PutMapping("")
    public ResponseEntity<ProfileDTO> updateProfile(@RequestBody ProfileDTO profileDTO) throws JobPortalException {
        return new ResponseEntity<>(profileService.updateProfile(profileDTO), HttpStatus.OK);
    }

    @PutMapping("/{profileId}/image")
    public ResponseEntity<ProfileDTO> updateProductImage(@PathVariable Long profileId, @RequestParam("image") MultipartFile image) throws Exception {
        ProfileDTO profileDTO = profileService.updateProfileImage(profileId, image);
        return new ResponseEntity<>(profileDTO, HttpStatus.OK);
    }
}
