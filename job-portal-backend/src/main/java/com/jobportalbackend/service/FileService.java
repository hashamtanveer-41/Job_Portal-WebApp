package com.jobportalbackend.service;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface FileService {
    String uploadImage(MultipartFile file) throws IOException;
    String uploadResumes(MultipartFile file) throws IOException;
}
