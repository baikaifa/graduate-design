package com.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.model.User;
import com.service.UserService;

@Controller
@RequestMapping("user")
public class UserController {
	private UserService userService;
	
	@RequestMapping("userList")
	public String UserList(HttpServletRequest request ){
		
		List<User> userList =userService.getUserList();
		
		request.setAttribute("userList", userList);
		
		return "view/user/userList";
	}
	@RequestMapping("add")
	public String addUser(User user){
	
		userService.addUser(user);
		
		
		return "redirect:/user/userList.action";
	}
	@RequestMapping("delete")
	public String deleteUser(int id){
	
		userService.deleteUser(id);
		
		
		return "redirect:/user/userList.action";
	}
	@RequestMapping("update")
	public String updateUser(User user){
	    
		userService.updateUser(user);
		
		
		return "redirect:/user/userList.action";
	}
	@RequestMapping("view")
	public String viewUser(int id,HttpServletRequest request){
	
		User user =userService.viewUser(id);
		request.setAttribute("user", user);
		
		
		
		return "jsp/user/userDetail";
	}
	@RequestMapping("toEdit")
	public String edit(int id,HttpServletRequest request){
		User user =userService.viewUser(id);
	    request.setAttribute("user", user);
		return "view/user/editUser";
	}
	@RequestMapping("toSave")
	public String toSave(){
		
		return "view/user/addUser";
	}
	
	public UserService getUserService() {
		return userService;
	}
	@Autowired
	public void setUserService(UserService userService) {
		this.userService = userService;
	}

}
