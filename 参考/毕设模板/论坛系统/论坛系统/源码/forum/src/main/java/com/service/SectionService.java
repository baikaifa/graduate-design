package com.service;

import java.util.List;

import com.model.Section;

public interface SectionService {
	
	List<Section> getSectionList();
	public int addSection(Section section);
	
	public int deleteSection(int id);

	public int updateSection(Section section);

	public Section viewSection(int id);

	
	


}
