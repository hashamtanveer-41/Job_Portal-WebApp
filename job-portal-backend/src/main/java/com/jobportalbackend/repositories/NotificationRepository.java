package com.jobportalbackend.repositories;

import com.jobportalbackend.model.Notification;
import com.jobportalbackend.payload.NotificationStatus;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Repository
public interface NotificationRepository extends MongoRepository<Notification, Long> {
    List<Notification> findByUserIdAndStatus(Long userId, NotificationStatus status);
}
