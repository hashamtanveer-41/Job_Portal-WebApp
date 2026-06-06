package com.jobportalbackend.repositories;

import com.jobportalbackend.model.OTP;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OTPRepository extends MongoRepository<OTP, String> {
}
