package com.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.model.Article;
import com.model.Comment;
import com.model.User;
import com.service.ArticleService;
import com.service.CommentService;

@Controller
@RequestMapping("article")
public class ArticleController {

	private ArticleService articleService;
	private CommentService commentService;

	public CommentService getCommentService() {
		return commentService;
	}
@Autowired
	public void setCommentService(CommentService commentService) {
		this.commentService = commentService;
	}

	@RequestMapping("artList")
	public String ArtList(HttpServletRequest request) {

		List<Article> artList = articleService.getArtList();

		request.setAttribute("artList", artList);

		return "view/article/artList";
	}
	
	@RequestMapping("section")
	public String getBySecId(HttpServletRequest request,int id) {

		List<Article> artList = articleService.getBySectionId(id);

		request.setAttribute("artList", artList);

		return "front/section";
	}
	
	@RequestMapping("delete")
	public String deleteArt(int id){
		 articleService.deleteArt(id);
		 return "redirect:/article/artList.action";
	}
	
	@RequestMapping("view")
	public String viewUser(int id,HttpServletRequest request){
	
		Article art =articleService.viewArticle(id);
		request.setAttribute("art", art);
		
		
		
		return "view/article/viewArticle";
	}
	@RequestMapping("detail")
	public String toDetail(int id,HttpServletRequest request){
	
		Article art =articleService.viewArticle(id);
		
		List<Comment> comment=commentService.getByArtId(id);
		request.setAttribute("art", art);
		request.setAttribute("cmtlist", comment);
		
		
		return "front/articleDetail";
	}
	@RequestMapping("add")
	public String pubBlog(Article record){
		
		articleService.addArt(record);
		
		return "redirect:/blog/article.action"; 
	}
	@RequestMapping("comment")
	public String addComment(Article article,int artId ){
		
		
		
		
		articleService.pubComment(article);
		
		return "redirect:/article/detail.action?id="+artId; 
	}

	public ArticleService getArticleService() {

		return articleService;

	}
	@Autowired
	public void setArticleService(ArticleService articleService) {
		
		this.articleService = articleService;
		
	}

}
