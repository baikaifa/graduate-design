package com.model;

import java.util.Date;

import com.tools.FormDate;

public class Article {
    private Integer artId;

    private Integer sectionId;

    private Integer userId;

    private String artTopic;

    private Integer artReplycount;

    private Integer artClickcount;

    private Date artPubtime;

    private Date artModtime;

    private String artState;

    private String artContent;
    
    private String artComment;

    public String getArtComment() {
		return artComment;
	}

	public void setArtComment(String artComment) {
		this.artComment = artComment == null ? null : artComment.trim();
	}

	public Integer getArtId() {
        return artId;
    }

    public void setArtId(Integer artId) {
        this.artId = artId;
    }

    public Integer getSectionId() {
        return sectionId;
    }

    public void setSectionId(Integer sectionId) {
        this.sectionId = sectionId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getArtTopic() {
        return artTopic;
    }

    public void setArtTopic(String artTopic) {
        this.artTopic = artTopic == null ? null : artTopic.trim();
    }

    public Integer getArtReplycount() {
        return artReplycount;
    }

    public void setArtReplycount(Integer artReplycount) {
        this.artReplycount = artReplycount;
    }

    public Integer getArtClickcount() {
        return artClickcount;
    }

    public void setArtClickcount(Integer artClickcount) {
        this.artClickcount = artClickcount;
    }

    public String getArtPubtime() {
        return FormDate.formDate(artPubtime);
    }

    public void setArtPubtime(Date artPubtime) {
        this.artPubtime = artPubtime;
    }

    public String getArtModtime() {
        return FormDate.formDate(artModtime);
    }

    public void setArtModtime(Date artModtime) {
        this.artModtime = artModtime;
    }

    public String getArtState() {
        return artState;
    }

    public void setArtState(String artState) {
        this.artState = artState == null ? null : artState.trim();
    }

    public String getArtContent() {
        return artContent;
    }

    public void setArtContent(String artContent) {
        this.artContent = artContent == null ? null : artContent.trim();
    }
}