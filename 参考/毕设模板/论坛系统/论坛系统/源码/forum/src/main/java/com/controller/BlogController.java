package com.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dao.UserMapper;
import com.model.Article;
import com.model.ArticleVo;
import com.model.User;
import com.service.ArticleService;


@Controller
@RequestMapping("blog")
public class BlogController {
	private ArticleService articleService;
	
	public ArticleService getArticleService() {
		return articleService;
	}
@Autowired
	public void setArticleService(ArticleService articleService) {
		this.articleService = articleService;
	}

	@RequestMapping("article")
	public  String toBlog(HttpServletRequest request){
		List<Article> artList = articleService.getArtList();

		request.setAttribute("artList", artList);
		return "front/article";
	}
	
	@RequestMapping("front")
	public  String front(HttpServletRequest request,HttpSession session){
		String name=(String) session.getAttribute("userName");
		List<ArticleVo> blog = (List<ArticleVo>) articleService.getArtByUserName(name);

		request.setAttribute("blogList", blog);
		return "front/blog";
	}

}
