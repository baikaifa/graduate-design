package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.service.JobService;

@Controller
@RequestMapping("job")
public class JobController {
	private JobService jobService;

	public JobService getJobService() {
		return jobService;
	}
@Autowired
	public void setJobService(JobService jobService) {
		this.jobService = jobService;
	}

}
