package com.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.ArticleMapper;
import com.model.Article;
import com.model.ArticleVo;
import com.service.ArticleService;
@Service("artservice")
public class ArticleServiceImpl implements ArticleService {
	
	private ArticleMapper articleMapper;

	

	@Override
	public List<Article> getArtList() {
		
		return articleMapper.getArtList();
	}



	public ArticleMapper getArticleMapper() {
		return articleMapper;
	}


	@Autowired
	public void setArticleMapper(ArticleMapper articleMapper) {
		this.articleMapper = articleMapper;
	}



	@Override
	public int deleteArt(int id) {
		
		return articleMapper.deleteByPrimaryKey(id);
	}



	@Override
	public Article viewArticle(int id) {
		
		return articleMapper.selectByPrimaryKey(id);
	}



	@Override
	public List<ArticleVo> getArtByUserName(String userName) {
		
		return articleMapper.selectByUserName(userName);
	}



	@Override
	public int addArt(Article record) {
		
		return articleMapper.insert(record);
	}



	



	@Override
	public List<Article> getBySectionId(int id) {
		
		return articleMapper.getBySectionId(id);
	}



	@Override
	public int pubComment(Article article) {
		
		return articleMapper.pubComment(article);
	}



	
	
	

}
