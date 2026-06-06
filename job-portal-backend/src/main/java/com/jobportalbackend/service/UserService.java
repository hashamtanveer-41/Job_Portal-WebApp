package com.jobportalbackend.service;

import com.jobportalbackend.exceptions.JobPortalException;
import com.jobportalbackend.payload.ResponseDTO;
import com.jobportalbackend.payload.UserDTO;
import com.jobportalbackend.payload.UserLoginDTO;
import jakarta.validation.Valid;

public interface UserService {
    UserDTO registerUser(UserDTO userDTO) throws JobPortalException;
    UserDTO loginUser(UserLoginDTO userLoginDTO) throws JobPortalException;
    ResponseDTO changePassword(@Valid UserLoginDTO userLoginDTO) throws JobPortalException;
}
