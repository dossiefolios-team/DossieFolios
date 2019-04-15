package com.dossiefolios.portfolio.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.dossiefolios.portfolio.domain.User;
import com.dossiefolios.portfolio.Repository.UserRepository;
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
//	public User findOne(String username) {
//		return userRepository.findOne(username);
//	}
//	
	public User findOne(Long userid) {
		return userRepository.getOne(userid);
	}
	public List<User> fetchByUsername(String username){
		return userRepository.fetchByUsername(username);
	}
	//@Override
//	public User findByUsername(String username) {
//		User byname = userRepository.findByUsername(username);	
//		return byname;
//	}
	
	
	/*Delete an user*/
	public void delete(User user) {
		userRepository.delete(user);
	}
}
