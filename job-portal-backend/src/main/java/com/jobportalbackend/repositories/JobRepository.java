package com.jobportalbackend.repositories;

import com.jobportalbackend.model.Job;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobRepository extends MongoRepository<Job, Long> {
}
