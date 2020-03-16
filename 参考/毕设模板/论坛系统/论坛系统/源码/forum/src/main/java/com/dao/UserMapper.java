package com.dao;

import java.util.List;

import com.model.User;

public interface UserMapper {
    int deleteByPrimaryKey(Integer userId);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer userId);

   
    int updateByPrimaryKey(User record);
    
   int updateByPrimaryKeySelective(User record);

	List<User> getUserList();
	
	
}