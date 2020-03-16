package com.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.SectionMapper;
import com.model.Section;
import com.service.SectionService;
@Service("sectionService")
public class SectionServiceImpl implements SectionService {
    private SectionMapper sectionMapper;
	public SectionMapper getSectionMapper() {
		return sectionMapper;
	}
	@Autowired
	public void setSectionMapper(SectionMapper sectionMapper) {
		this.sectionMapper = sectionMapper;
	}
	@Override
	public List<Section> getSectionList() {
		
		return sectionMapper.getSectionList();
	}
	@Override
	public int addSection(Section section) {
		
		return sectionMapper.insertSelective(section);
	}
	@Override
	public int deleteSection(int id) {
		
		return sectionMapper.deleteByPrimaryKey(id);
	}
	@Override
	public int updateSection(Section section) {
		
		return sectionMapper.updateByPrimaryKeySelective(section);
	}
	@Override
	public Section viewSection(int id) {
		
		return sectionMapper.selectByPrimaryKey(id);
	}
	

}
