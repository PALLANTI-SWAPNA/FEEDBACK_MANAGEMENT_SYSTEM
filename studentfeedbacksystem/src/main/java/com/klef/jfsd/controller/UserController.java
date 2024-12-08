package com.klef.jfsd.controller;

import com.klef.jfsd.model.User;
import com.klef.jfsd.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000") // Ensure this matches your React app's URL
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody User user) {
        try {
            userService.signup(user);
            return new ResponseEntity<>("Signup successful", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Signup failed: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/signin")
    public ResponseEntity<String> signin(@RequestParam String email, @RequestParam String password) {
        try {
            User user = userService.signin(email, password);
            return new ResponseEntity<>("Signin successful for user: " + user.getEmail(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Signin failed: " + e.getMessage(), HttpStatus.UNAUTHORIZED);
        }
    }
}
