package com.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.CommentMapper;
import com.model.Comment;
import com.service.CommentService;


@Service("comment")

public class CommentServiceImpl implements CommentService {
	
	private CommentMapper commentMapper;

	@Override
	public List<Comment> getByArtId(int id) {
		
		return commentMapper.selectByArtId(id);
	}

	@Override
	public int insert(Comment record) {
		
		return commentMapper.insert(record);
	}

	public CommentMapper getCommentMapper() {
		return commentMapper;
	}
@Autowired
	public void setCommentMapper(CommentMapper commentMapper) {
		this.commentMapper = commentMapper;
	}

	

}
