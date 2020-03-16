package com.service;

import java.util.List;

import com.model.Article;
import com.model.ArticleVo;

public interface ArticleService {
     
	public List<Article> getArtList();
	public int deleteArt(int id);
	public Article viewArticle(int id);
	public List<ArticleVo> getArtByUserName(String userName);
	public int addArt(Article record);
	public int pubComment(Article article);
	public List<Article> getBySectionId(int id);
}
