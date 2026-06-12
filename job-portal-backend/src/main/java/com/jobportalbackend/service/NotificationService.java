package com.jobportalbackend.service;

import com.jobportalbackend.exceptions.JobPortalException;
import com.jobportalbackend.model.Notification;
import com.jobportalbackend.payload.NotificationDTO;

import java.util.List;

public interface NotificationService {
    void sendNotification(NotificationDTO notificationDTO) throws JobPortalException;
    List<Notification> getUnreadNotifications(Long userId);

    void readNotification(Long id) throws JobPortalException;
}
