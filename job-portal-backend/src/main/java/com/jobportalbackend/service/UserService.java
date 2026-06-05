package com.jobportalbackend.service;

import com.jobportalbackend.exceptions.JobPortalException;
import com.jobportalbackend.payload.UserDTO;

public interface UserService {
    public UserDTO registerUser(UserDTO userDTO) throws JobPortalException;
}
