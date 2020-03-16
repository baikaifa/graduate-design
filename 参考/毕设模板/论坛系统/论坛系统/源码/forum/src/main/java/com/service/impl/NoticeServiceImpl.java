package com.service.impl;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.NoticeMapper;
import com.model.Notice;
import com.service.NoticeService;
@Service("notice")
public class NoticeServiceImpl implements NoticeService {

	private NoticeMapper noticeMapper;
	
	public NoticeMapper getNoticeMapper() {
		return noticeMapper;
	}
	@Autowired
	public void setNoticeMapper(NoticeMapper noticeMapper) {
		this.noticeMapper = noticeMapper;
	}

	@Override
	public List<Notice> getNoticeList() {
		
		return noticeMapper.getNoticeList();
	}
	
	@Override
	public int addNotice(Notice notice) {
		
		return noticeMapper.insert(notice);
	}
	
	@Override
	public Notice viewNotice(int id) {
		
		return noticeMapper.selectByPrimaryKey(id);
	}
	
	
	@Override
	public int updateNotice(Notice notice) {

		return noticeMapper.updateByPrimaryKeyWithBLOBs(notice);
				
	}
	@Override
	public int deleteNotice(int id) {
		 
		return noticeMapper.deleteByPrimaryKey(id);
	}
	@Override
	public int pubNotice(Notice notice) {
		
		
		return noticeMapper.pubNotice(notice);
	}

	

}
