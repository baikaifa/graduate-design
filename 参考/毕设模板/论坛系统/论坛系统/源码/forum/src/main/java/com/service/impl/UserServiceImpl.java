package com.service.impl;

import java.util.List;

import org.apache.ibatis.type.IntegerTypeHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.UserMapper;
import com.model.User;
import com.service.UserService;
@Service("uservice")
public class UserServiceImpl implements UserService {
	private UserMapper userMapper;
	@Override
	public User getUserById(int id) {
		// TODO Auto-generated method stub
		return userMapper.selectByPrimaryKey(id);
	}
	public UserMapper getUserMapper() {
		return userMapper;
	}
	@Autowired
	public void setUserMapper(UserMapper userMapper) {
		this.userMapper = userMapper;
	}
	@Override
	public List<User> getUserList() {
		// TODO Auto-generated method stub
		return  userMapper.getUserList();
	}
	@Override
	public int addUser(User user) {
		
		return userMapper.insert(user);
	}
	@Override
	public int deleteUser(int id) {
		
		return userMapper.deleteByPrimaryKey(id);
	}
	@Override
	public User viewUser(int id) {
		
		return userMapper.selectByPrimaryKey(id);
	}
	@Override
	public int updateUser(User user) {
		
		return userMapper.updateByPrimaryKeySelective(user);
	}
	
	
	

}
