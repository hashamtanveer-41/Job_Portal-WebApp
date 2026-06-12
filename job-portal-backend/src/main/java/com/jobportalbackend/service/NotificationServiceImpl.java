package com.jobportalbackend.service;

import com.jobportalbackend.exceptions.JobPortalException;
import com.jobportalbackend.model.Notification;
import com.jobportalbackend.payload.NotificationDTO;
import com.jobportalbackend.payload.NotificationStatus;
import com.jobportalbackend.repositories.NotificationRepository;
import com.jobportalbackend.utils.Utilities;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service("notificationService")
public class NotificationServiceImpl implements NotificationService{

    @Autowired
    private NotificationRepository notificationRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public void sendNotification(NotificationDTO notificationDTO) throws JobPortalException {
        notificationDTO.setId(Utilities.getNextSequence("notification"));
        notificationDTO.setTimeStamp(LocalDateTime.now());
        notificationDTO.setStatus(NotificationStatus.UNREAD);
        notificationRepository.save(modelMapper.map(notificationDTO, Notification.class));
    }

    @Override
    public List<Notification> getUnreadNotifications(Long userId) {
        return notificationRepository.findByUserIdAndStatus(userId, NotificationStatus.UNREAD);
    }

    @Override
    public void readNotification(Long id) throws JobPortalException {
        Notification notification = notificationRepository.findById(id).orElseThrow(()->new JobPortalException("No Notification found."));
        notification.setStatus(NotificationStatus.READ);
        notificationRepository.save(notification);
    }
}
