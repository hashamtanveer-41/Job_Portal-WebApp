package com.jobportalbackend.service;

import com.jobportalbackend.exceptions.JobPortalException;
import com.jobportalbackend.payload.ApplicantDTO;
import com.jobportalbackend.payload.Application;
import com.jobportalbackend.payload.JobDTO;
import com.jobportalbackend.payload.ResponseDTO;
import jakarta.validation.Valid;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface JobService {
    JobDTO postJob(@Valid JobDTO jobDTO) throws JobPortalException;

    List<JobDTO> getAllJobs() throws JobPortalException;

    JobDTO getJob(Long id) throws JobPortalException;

    ResponseDTO applyJob(@Valid ApplicantDTO applicantDTO, Long id, MultipartFile file) throws Exception;

    List<JobDTO> getjobsPostedBy(Long id);

    ResponseDTO changeApplicationStatus(@Valid Application application) throws JobPortalException;
}
