package com.dossiefolios.portfolio.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dossiefolios.portfolio.Repository.UserRepository;

import com.dossiefolios.portfolio.dao.UserDAO;
import com.dossiefolios.portfolio.domain.User;

@RestController
@RequestMapping(value="portfolio", produces = { "application/json", "application/xml" })

public class UserController {
	
	@Autowired
	UserDAO userDAO;
	UserRepository userRepository;
	/*Save an User to DB*/
	
	@PostMapping ("/users")
	//@CrossOrigin(origins = "http://localhost:3000")
	public User createUser(@Validated @RequestBody User user ) {
		System.out.println(user);
		return userDAO.save(user);
	}
	
	
	/*get all users*/

	@PostMapping ("/users/all")
	//@CrossOrigin(origins = "http://localhost:3000/")
	public List<User> getAllUsers() {
		return userDAO.findAll();
	}
	
	
	/*get user by userid*/
	@GetMapping("/users/all/{id}")
	public ResponseEntity<User> getUserById(@PathVariable(value="id") String username) {
		
		User user = userDAO.findOne(username);		
		if(user==null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(user);
		
	}
//	@GetMapping("/users/{id}")
//    public List<User> fetchByUserid(Long userid) {
//        return userRepository.fetchByUserid(userid);
//    }
//
//	@GetMapping("/users/all/{id}")
//	public User getUserById(@PathVariable(value="id") String username){	
//		return  userDAO.findByUsername(username);		
//	}
	
	
	/*Update an user by userid*/
	
	@PutMapping("/users/{id}")
	public ResponseEntity<User> UpdateUser(@PathVariable (value="id") Long userid,@Validated @RequestBody User userDetails){
		User user = userDAO.findOne(userid);
		if(user==null) {
			return ResponseEntity.notFound().build();
		}
		user.setUsername(userDetails.getUsername());
		user.setPassword(userDetails.getPassword());
		user.setPhone(userDetails.getPhone());
		user.setIsadmin(userDetails.isIsadmin());
		user.setEmail(userDetails.getEmail());
		User updateUser = userDAO.save(user);
		return ResponseEntity.ok().body(updateUser);
		
	}
	
	
	/*Delete an user*/
	
	@DeleteMapping("users/{id}")
	public ResponseEntity<User> deleteUser(@PathVariable(value="id") Long userid) {
		User user = userDAO.findOne(userid);
		
		if(user==null) {
			return ResponseEntity.notFound().build();
		}
		userDAO.delete(user);
		return ResponseEntity.ok().build();
	}	
}
