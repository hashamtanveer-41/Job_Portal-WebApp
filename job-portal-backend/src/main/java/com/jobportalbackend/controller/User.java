package com.jobportalbackend.controller;

import com.jobportalbackend.payload.UserDTO;
import com.jobportalbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class User {
    private final UserService userService;

    public User(UserService userService) {
        this.userService = userService;
    }
    @PostMapping("/register")
    public ResponseEntity<UserDTO> registerUser(@RequestBody UserDTO userDTO){
        UserDTO userDTO1 = userService.registerUser(userDTO);
        return new ResponseEntity<>(userDTO1, HttpStatus.OK);
    }
}
