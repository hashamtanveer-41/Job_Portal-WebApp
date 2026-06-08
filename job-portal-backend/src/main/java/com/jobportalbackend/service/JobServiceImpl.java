package com.jobportalbackend.service;

import com.jobportalbackend.exceptions.JobPortalException;
import com.jobportalbackend.model.Job;
import com.jobportalbackend.payload.JobDTO;
import com.jobportalbackend.repositories.JobRepository;
import com.jobportalbackend.utils.Utilities;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class JobServiceImpl implements JobService{

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private JobRepository jobRepository;

    @Override
    public JobDTO postJob(JobDTO jobDTO) throws JobPortalException {
        jobDTO.setId(Utilities.getNextSequence("jobs"));
        jobDTO.setPostTime(LocalDateTime.now());
        Job savedJob = jobRepository.save(modelMapper.map(jobDTO, Job.class));
        return modelMapper.map(savedJob, JobDTO.class);
    }

    @Override
    public List<JobDTO> getAllJobs() throws JobPortalException {
        List<Job> jobs = jobRepository.findAll();
        return  jobs
                .stream()
                .map(
                        (job)->modelMapper.map(job, JobDTO.class)).toList();
    }

    @Override
    public JobDTO getJob(Long id) throws JobPortalException {
        Job job = jobRepository.findById(id)
                .orElseThrow(() -> new JobPortalException("JOB_NOT_FOUND"));
        return modelMapper.map(job, JobDTO.class);
    }
}
