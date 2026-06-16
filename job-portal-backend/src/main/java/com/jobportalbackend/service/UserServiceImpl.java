package com.jobportalbackend.service;

import com.jobportalbackend.exceptions.JobPortalException;
import com.jobportalbackend.model.User;
import com.jobportalbackend.payload.NotificationDTO;
import com.jobportalbackend.payload.ResponseDTO;
import com.jobportalbackend.payload.UserDTO;
import com.jobportalbackend.payload.UserLoginDTO;
import com.jobportalbackend.repositories.NotificationRepository;
import com.jobportalbackend.repositories.UserRepository;
import com.jobportalbackend.utils.Utilities;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service(value = "userService")
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProfileService profileService;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private NotificationService notificationService;

    @Override
    public UserDTO registerUser(UserDTO userDTO) throws JobPortalException {
        Optional<User> existingUser = userRepository.findByEmail(userDTO.getEmail());
        if (existingUser.isPresent()) throw new JobPortalException("USER_FOUND");
        userDTO.setId(Utilities.getNextSequence("users"));
        userDTO.setProfileId(profileService.createProfile(userDTO.getEmail(), userDTO.getName()));
        userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        User user = modelMapper.map(userDTO, User.class);
        user = userRepository.save(user);
        return modelMapper.map(user, UserDTO.class);
    }

    @Override
    public UserDTO loginUser(UserLoginDTO userLoginDTO) throws JobPortalException {
        User user = userRepository
                .findByEmail(userLoginDTO.getEmail())
                .orElseThrow(
                        () -> new JobPortalException("USER_NOT_FOUND"));
        if (!passwordEncoder.matches(userLoginDTO.getPassword(),user.getPassword() )){
            throw new JobPortalException("INCORRECT_CREDENTIALS");
        }
        return modelMapper.map(user, UserDTO.class);
    }

    @Override
    public ResponseDTO changePassword(UserLoginDTO userLoginDTO) throws JobPortalException {
        User user = userRepository
                .findByEmail(userLoginDTO.getEmail())
                .orElseThrow(
                        () -> new JobPortalException("USER_NOT_FOUND"));
        user.setPassword(passwordEncoder.encode(userLoginDTO.getPassword()));
        userRepository.save(user);
        NotificationDTO notificationDTO = new NotificationDTO();
        notificationDTO.setUserId(user.getId());
        notificationDTO.setMessage("Password Reset Successfully!");
        notificationDTO.setAction("Password Reset");
        notificationService.sendNotification(notificationDTO);
        return new ResponseDTO("Password changed successfully!");
    }

    @Override
    public UserDTO getUserByEmail(String email) throws JobPortalException {
        return modelMapper.map(userRepository
                .findByEmail(email)
                .orElseThrow(
                        () -> new JobPortalException("USER_NOT_FOUND")), UserDTO.class);
    }
}
