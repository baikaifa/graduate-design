package com.test;

import java.util.List;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.model.Article;
import com.model.User;
import com.service.ArticleService;
import com.service.UserService;

public class TestMybatis {
	@Test
	public void Test1(){
		@SuppressWarnings("resource")
		ApplicationContext applicationContext=new ClassPathXmlApplicationContext(new String[]{"spring.xml","spring-mybatis.xml"});
		ArticleService articleService=(ArticleService)applicationContext.getBean("articleService");
		 List<Article> artList=articleService.getArtList();
		System.out.println(artList.get(0));
	}

}
