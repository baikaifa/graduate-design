package com.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.model.Notice;
import com.service.NoticeService;

@Controller
@RequestMapping("show")
public class ShowNoticeController {
	private NoticeService noticeService;
	@RequestMapping("notice")
	public String noticeList(HttpServletRequest request,HttpSession session){
		if(session.getAttribute("userName")!=null)
		{
			List<Notice> noticeList =noticeService.getNoticeList();
			
			request.setAttribute("noticeList", noticeList);
			
		}
		else
			session.setAttribute("userName", "сн©м");
		
		
		
		
		
		
		return "front/index";
	}
	@RequestMapping("detail")
	
	public String toDetail(HttpServletRequest request,int id){
		
		Notice notice=noticeService.viewNotice(id);
		
		request.setAttribute("notice", notice);
		
		return "front/noticeDetail";
	}
	
	
	public NoticeService getNoticeService() {
		return noticeService;
	}
	@Autowired
	public void setNoticeService(NoticeService noticeService) {
		this.noticeService = noticeService;
	}

}
