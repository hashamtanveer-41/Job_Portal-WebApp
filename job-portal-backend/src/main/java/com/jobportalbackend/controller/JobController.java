package com.jobportalbackend.controller;

import com.jobportalbackend.exceptions.JobPortalException;
import com.jobportalbackend.payload.ApplicantDTO;
import com.jobportalbackend.payload.Application;
import com.jobportalbackend.payload.JobDTO;
import com.jobportalbackend.payload.ResponseDTO;
import com.jobportalbackend.service.JobService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/jobs")

public class JobController {

    @Autowired
    private JobService jobService;

    @PostMapping("/post")
    public ResponseEntity<JobDTO> postJob(@RequestBody @Valid JobDTO jobDTO) throws JobPortalException {
        return new ResponseEntity<>(jobService.postJob(jobDTO), HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity<List<JobDTO>> getAllJobs() throws JobPortalException {
        return new ResponseEntity<>(jobService.getAllJobs(), HttpStatus.OK);
    }

    @GetMapping("/job/{id}")
    public ResponseEntity<JobDTO> getJob(@PathVariable Long id) throws JobPortalException {
        return new ResponseEntity<>(jobService.getJob(id), HttpStatus.OK);
    }

    @PostMapping(value = "/apply/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ResponseDTO> applyJob(@RequestPart("applicant") @Valid ApplicantDTO applicantDTO, @PathVariable Long id, @RequestPart("resume")MultipartFile file) throws Exception {
        return new ResponseEntity<>(jobService.applyJob(applicantDTO, id, file), HttpStatus.OK);
    }

    @GetMapping("/jobBy/{id}")
    public ResponseEntity<List<JobDTO>> getJobPostedBy(@PathVariable Long id) throws JobPortalException {
        return new ResponseEntity<>(jobService.getjobsPostedBy(id), HttpStatus.OK);
    }

    @PostMapping("/appStatus")
    public ResponseEntity<ResponseDTO> changeApplicationStatus(@RequestPart("applicant") @Valid Application application) throws JobPortalException {
        return new ResponseEntity<>(jobService.changeApplicationStatus(application), HttpStatus.OK);
    }

}
