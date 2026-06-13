package com.jobportalbackend.security;

import com.jobportalbackend.exceptions.JobPortalException;
import com.jobportalbackend.payload.UserDTO;
import com.jobportalbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserService userService;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        try {
            UserDTO userDTO = userService.getUserByEmail(email);
            return new CustomUserDetails(userDTO.getId(), userDTO.getEmail(), userDTO.getPassword(), userDTO.getAccountType(), new ArrayList<>());
        } catch (JobPortalException e) {
            e.printStackTrace();
        }
        return null;
    }
}
