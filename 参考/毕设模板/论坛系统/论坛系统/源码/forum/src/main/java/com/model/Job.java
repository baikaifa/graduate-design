package com.model;

public class Job {
    private Integer jobId;

    private String jobName;

    private String jobPublisher;

    private String jobRequirement;

    public Integer getJobId() {
        return jobId;
    }

    public void setJobId(Integer jobId) {
        this.jobId = jobId;
    }

    public String getJobName() {
        return jobName;
    }

    public void setJobName(String jobName) {
        this.jobName = jobName == null ? null : jobName.trim();
    }

    public String getJobPublisher() {
        return jobPublisher;
    }

    public void setJobPublisher(String jobPublisher) {
        this.jobPublisher = jobPublisher == null ? null : jobPublisher.trim();
    }

    public String getJobRequirement() {
        return jobRequirement;
    }

    public void setJobRequirement(String jobRequirement) {
        this.jobRequirement = jobRequirement == null ? null : jobRequirement.trim();
    }
}