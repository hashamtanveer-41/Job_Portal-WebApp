package com.jobportalbackend.controller;

import com.jobportalbackend.exceptions.JobPortalException;
import com.jobportalbackend.payload.UserDTO;
import com.jobportalbackend.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin
@Validated
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }
    @PostMapping("/register")
    public ResponseEntity<UserDTO> registerUser(@RequestBody @Valid UserDTO userDTO) throws JobPortalException {
        UserDTO userDTO1 = userService.registerUser(userDTO);
        return new ResponseEntity<>(userDTO1, HttpStatus.OK);
    }
}
