package com.service;

import java.util.List;
import java.util.Map;

import com.model.User;

public interface UserService {
     
     
	public User getUserById(int id);
	
	public List<User> getUserList();
	
	public int addUser(User user);
	
	public int deleteUser(int id);
	
	public User viewUser(int id) ;
	
	public int updateUser(User user);
	
}
