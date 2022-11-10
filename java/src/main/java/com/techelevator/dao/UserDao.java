package com.techelevator.dao;

import com.techelevator.model.EmailAlreadyExistsException;
import com.techelevator.model.User;

import java.util.List;

public interface UserDao {

    List<User> findAll();

    String findEmail(String email);

    User getUserById(Long userId);

    User findByUsername(String username);

    int findIdByUsername(String username);

    User findByEmail(String email) throws EmailAlreadyExistsException;

    boolean create(String username, String password, String email, String role);
}
