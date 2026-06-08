package com.jobportalbackend.service;

import com.jobportalbackend.exceptions.JobPortalException;
import com.jobportalbackend.payload.JobDTO;
import jakarta.validation.Valid;

import java.util.List;

public interface JobService {
    JobDTO postJob(@Valid JobDTO jobDTO) throws JobPortalException;

    List<JobDTO> getAllJobs() throws JobPortalException;

    JobDTO getJob(Long id) throws JobPortalException;
}
