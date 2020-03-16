package com.dao;

import java.util.List;

import com.model.Article;
import com.model.ArticleVo;

public interface ArticleMapper {
    int deleteByPrimaryKey(Integer artId);

    int insert(Article record);

    int insertSelective(Article record);

    Article selectByPrimaryKey(Integer artId);

    int updateByPrimaryKeySelective(Article record);

    int updateByPrimaryKeyWithBLOBs(Article record);

    int updateByPrimaryKey(Article record);
    
    List<ArticleVo> selectByUserName(String userName); 
    
    List<Article> getArtList();
    
    List<Article> getBySectionId(int id);
    
    int pubComment(Article recotd );
}