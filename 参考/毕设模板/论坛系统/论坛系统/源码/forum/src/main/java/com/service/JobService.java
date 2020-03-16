package com.service;

import java.util.List;

import com.model.Job;

public interface JobService {
	
	public List<Job> getJobList();
	
	public int deleteJob(int id);
	
	public Job getJob(int id);

}
