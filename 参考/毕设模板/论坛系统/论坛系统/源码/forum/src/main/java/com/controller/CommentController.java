package com.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.model.Comment;
import com.service.CommentService;


@Controller
@RequestMapping("comment")
public class CommentController {
	private CommentService commentService;
	@RequestMapping("add")
	public String insert(Comment record,int articleId){
		
	    commentService.insert(record);
	    return "redirect:/article/detail.action?id="+articleId;
		
	}
	
	@RequestMapping("list")
	public String commentList(HttpServletRequest request,int articleId){
		
		List<Comment> comment=commentService.getByArtId(articleId);
		request.setAttribute("cmtlist", comment);
		request.setAttribute("articleId", articleId);
	   
	    return "front/articleDetail";
		
	}

	public CommentService getCommentService() {
		return commentService;
	}
@Autowired
	public void setCommentService(CommentService commentService) {
		this.commentService = commentService;
	}

}
