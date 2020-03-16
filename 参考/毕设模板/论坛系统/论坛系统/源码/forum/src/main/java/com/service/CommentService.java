package com.service;

import java.util.List;

import com.model.Comment;


public interface CommentService {
	
	List<Comment> getByArtId(int id);
	
	int insert(Comment record);

}
