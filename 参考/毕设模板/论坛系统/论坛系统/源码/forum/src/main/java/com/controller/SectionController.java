package com.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.omg.CORBA.PUBLIC_MEMBER;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.model.Section;
import com.model.User;
import com.service.SectionService;

@Controller
@RequestMapping("section")
public class SectionController {
	private SectionService sectionService;
	
	public SectionService getSectionService() {
		return sectionService;
	}
    @Autowired
	public void setSectionService(SectionService sectionService) {
		this.sectionService = sectionService;
	}

	@RequestMapping("sectionList")
	public String sectionList(HttpServletRequest request){
		
	    List<Section> sectionList=sectionService.getSectionList();
	    
	    request.setAttribute("sectionList", sectionList);
		return "view/section/sectionList";
	}
	
	 @RequestMapping("add")
     public String addSection(Section section){
		
	   sectionService.addSection(section);
		return "redirect:/section/sectionList.action";
	}
	 @RequestMapping("delete")
     public String deleteection(int id){
		
	   sectionService.deleteSection(id);
		return "redirect:/section/sectionList.action";
	}
	 @RequestMapping("update")
     public String updateSection(Section section){
		
	   sectionService.updateSection(section);
		return "redirect:/section/sectionList.action";
	}
	
	 @RequestMapping("toEdit")
		public String edit(int id,HttpServletRequest request){
		Section section=sectionService.viewSection(id);
		request.setAttribute("section", section);
			return "view/section/editSection";
		}
	 
	 @RequestMapping("toSave")
		public String toSave(){
			
			return "view/section/addSection";
		}


}
