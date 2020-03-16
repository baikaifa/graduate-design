package com.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.model.Notice;
import com.service.NoticeService;

@Controller
@RequestMapping("notice")
public class NoticeController {
	private NoticeService noticeService;
	@RequestMapping("noticeList")
	public String noticeList(HttpServletRequest request){
		
		List<Notice> noticeList =noticeService.getNoticeList();
		
		request.setAttribute("noticeList", noticeList);
		
		
		return "view/notice/noticeList";
	}
	@RequestMapping("add")
	public String addNotice(Notice notice){
		noticeService.addNotice(notice);
		return "redirect:/notice/noticeList.action";
	}
	
	@RequestMapping("update")
	public String updateNotice(Notice notice){
		
		noticeService.updateNotice(notice);
		
		return "redirect:/notice/noticeList.action";
	}
	
	@RequestMapping("delete")
	public String deleteNotice(int id){
		
		noticeService.deleteNotice(id);
		
		return "redirect:/notice/noticeList.action";
	}
	
	@RequestMapping("publish")
	public String publishNotice(Notice notice){
		
		noticeService.pubNotice(notice);
		
		return "redirect:/notice/noticeList.action";
	}
	
	@RequestMapping("toEdit")
	public String toEdit(HttpServletRequest request,int id){
		
		Notice notice=noticeService.viewNotice(id);
		
		request.setAttribute("notice", notice);
		
		return "view/notice/editNotice";
	}
	
	@RequestMapping("toSave")
	public String toSave(){
		
		return "view/notice/addNotice";
	}
	
	@RequestMapping("toPublish")
	public String toPublish(HttpServletRequest request,int id){
		
        Notice notice=noticeService.viewNotice(id);
		
		request.setAttribute("notice", notice);
		
		return "view/notice/pubNotice";
	}
	
	
	public NoticeService getNoticeService() {
		return noticeService;
	}
	@Autowired
	public void setNoticeService(NoticeService noticeService) {
		this.noticeService = noticeService;
	}

}
