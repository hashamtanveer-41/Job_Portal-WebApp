package com.jobportalbackend.service;

import com.jobportalbackend.exceptions.JobPortalException;
import com.jobportalbackend.model.User;
import com.jobportalbackend.payload.UserDTO;
import com.jobportalbackend.payload.UserLoginDTO;
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
    private ModelMapper modelMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDTO registerUser(UserDTO userDTO) throws JobPortalException {
        Optional<User> existingUser = userRepository.findByEmail(userDTO.getEmail());
        if (existingUser.isPresent()) throw new JobPortalException("USER_FOUND");
        userDTO.setId(Utilities.getNextSequence("users"));
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

}
