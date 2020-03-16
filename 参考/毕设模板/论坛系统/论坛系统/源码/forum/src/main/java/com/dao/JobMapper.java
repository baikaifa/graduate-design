package com.dao;

import java.util.List;

import com.model.Job;

public interface JobMapper {
    int insert(Job job);

    int insertSelective(Job job);
    
    int deleteByPrimaryKey(Integer jobId);

   Job selectByPrimaryKey(Integer jobId);
    
    List<Job> getJobList();
    
    
}