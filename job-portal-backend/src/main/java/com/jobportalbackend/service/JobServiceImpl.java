package com.jobportalbackend.service;

import com.jobportalbackend.exceptions.JobPortalException;
import com.jobportalbackend.model.Applicant;
import com.jobportalbackend.model.ApplicationStatus;
import com.jobportalbackend.model.Job;
import com.jobportalbackend.model.Profile;
import com.jobportalbackend.payload.ApplicantDTO;
import com.jobportalbackend.payload.JobDTO;
import com.jobportalbackend.payload.ProfileDTO;
import com.jobportalbackend.payload.ResponseDTO;
import com.jobportalbackend.repositories.JobRepository;
import com.jobportalbackend.utils.Utilities;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class JobServiceImpl implements JobService{

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private FileService fileService;

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

    @Override
    public ResponseDTO applyJob(ApplicantDTO applicantDTO, Long id, MultipartFile file)throws Exception {
        Job job = jobRepository.findById(id)
                .orElseThrow(() -> new JobPortalException("JOB_NOT_FOUND"));
        List<Applicant> applicants = job.getApplicants();
        if (applicants==null)applicants = new ArrayList<>();
        if (
                !applicants.stream()
                        .filter((x) -> x.getApplicantId().equals(applicantDTO.getApplicantId()))
                        .toList().isEmpty()
        ) throw new JobPortalException("JOB_ALREADY_APPLIED");
        ApplicantDTO applicantDTO1 = updateResume(applicantDTO, file);
        applicantDTO1.setApplicationStatus(ApplicationStatus.APPLIED);
        applicants.add(modelMapper.map(applicantDTO1, Applicant.class));
        job.setApplicants(applicants);
        jobRepository.save(job);
        return new ResponseDTO("You have successfully applied for the job.");
    }


    public ApplicantDTO updateResume(ApplicantDTO applicantDTO, MultipartFile resume) throws Exception {
        String filename = fileService.uploadResumes(resume);
        applicantDTO.setResume(filename);
        return applicantDTO;
    }
}
