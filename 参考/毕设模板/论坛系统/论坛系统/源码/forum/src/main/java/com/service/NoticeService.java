package com.service;

import java.util.List;

import com.model.Notice;

public interface NoticeService {
	
	List<Notice> getNoticeList();
	
	int addNotice(Notice notice);
	
	Notice viewNotice(int id);
	
	int updateNotice(Notice notice);
	
	int deleteNotice(int id);
	
	int pubNotice(Notice notice);

}
