package com.jobportalbackend.repositories;

import com.jobportalbackend.model.Profile;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface ProfileRepository extends MongoRepository<Profile,Long > {
}
