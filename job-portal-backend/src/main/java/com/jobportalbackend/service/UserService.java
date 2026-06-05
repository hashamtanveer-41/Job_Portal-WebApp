package com.jobportalbackend.service;

import com.jobportalbackend.exceptions.JobPortalException;
import com.jobportalbackend.payload.UserDTO;
import com.jobportalbackend.payload.UserLoginDTO;

public interface UserService {
    UserDTO registerUser(UserDTO userDTO) throws JobPortalException;
    UserDTO loginUser(UserLoginDTO userLoginDTO) throws JobPortalException;
}
