package com.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.model.User;
import com.service.UserService;

@Controller
@RequestMapping("/")
public class LoginController {
	private UserService userService;
	public UserService getUserService() {
		return userService;
	}
	@Autowired
	public void setUserService(UserService userService) {
		this.userService = userService;
	}
	@RequestMapping("login")
	public String Login(String userName,String userPwd,String userType,HttpSession session){
		
		List<User> userList =userService.getUserList();
		for (User user : userList) {
			if(userName.equals(user.getUserName())&&userPwd.equals(user.getUserPwd())){
				session.setAttribute("userName", userName);
				
				return "redirect:main/index.action";
			}
			
			
			
		}
		return "loginError";
			
		
		
	}
	
	@RequestMapping("login2")
	public String Login2(String userName,String userPwd,String userType,HttpSession session){
		
		List<User> userList =userService.getUserList();
		for (User user : userList) {
			if(userName.equals(user.getUserName())&&userPwd.equals(user.getUserPwd())){
				session.setAttribute("userName", userName);
				
				return "redirect:show/notice.action";
			}
			
			
			
		}
		return "front/loginError";
			
		
		
	}
	@RequestMapping("logout")
	public String logout(HttpSession session){
		
		session.removeAttribute("userName");
		return "redirect:show/notice.action";
	}

}
