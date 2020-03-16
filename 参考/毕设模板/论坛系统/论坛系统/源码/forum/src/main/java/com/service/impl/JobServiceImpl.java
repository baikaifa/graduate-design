package com.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.JobMapper;
import com.model.Job;
import com.service.JobService;
@Service("service")
public class JobServiceImpl implements JobService {
	
	private JobMapper jobMapper;

	public JobMapper getJobMapper() {
		return jobMapper;
	}
@Autowired
	public void setJobMapper(JobMapper jobMapper) {
		this.jobMapper = jobMapper;
	}

	@Override
	public List<Job> getJobList() {
		
		return jobMapper.getJobList();
	}

	@Override
	public int deleteJob(int id) {
		
		return jobMapper.deleteByPrimaryKey(id);
	}

	@Override
	public Job getJob(int id) {
		
		return jobMapper.selectByPrimaryKey(id);
	}

}
