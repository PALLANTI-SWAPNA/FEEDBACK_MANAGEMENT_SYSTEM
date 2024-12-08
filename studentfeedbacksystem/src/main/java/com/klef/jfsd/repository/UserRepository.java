package com.klef.jfsd.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.klef.jfsd.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}