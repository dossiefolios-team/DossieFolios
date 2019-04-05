package com.dossiefolios.portfolio.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dossiefolios.portfolio.domain.User;

import com.dossiefolios.Repository.UserRepository;


import java.util.*;

@Service
public class UserDAO {
	
	@Autowired 
	UserRepository userRepository ;
	
	/*To save an user*/
	public User save(User user) {
		return userRepository.save(user);
	}
	
	/*Search All User*/
	
	public List<User> findAll(){
		return (List<User>) userRepository.findAll();
	}
	/*get an user by id*/
	public User findOne(Long userid) {
		return userRepository.getOne(userid);
	}
	
	/*Delete an user*/
	public void delete(User user) {
		userRepository.delete(user);
	}
}
