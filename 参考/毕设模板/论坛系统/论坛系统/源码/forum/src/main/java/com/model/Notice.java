package com.model;

import java.text.ParseException;
import java.util.Date;

import com.tools.FormDate;

public class Notice {
    private Integer noticeId;

    private String noticeTopic;

    private Integer userId;

    private Date noticePubtime;

    private String noticeState;

    private String noticeContent;
    

    public Integer getNoticeId() {
        return noticeId;
    }

    public void setNoticeId(Integer noticeId) {
        this.noticeId = noticeId;
    }

    public String getNoticeTopic() {
        return noticeTopic;
    }

    public void setNoticeTopic(String noticeTopic) {
        this.noticeTopic = noticeTopic == null ? null : noticeTopic.trim();
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getNoticePubtime()  {
    	
        return FormDate.formDate(noticePubtime);
    }

    public void setNoticePubtime(Date noticePubtime) {
        this.noticePubtime = noticePubtime;
    }

    public String getNoticeState() {
        return noticeState;
    }

    public void setNoticeState(String noticeState) {
        this.noticeState = noticeState == null ? null : noticeState.trim();
    }

    public String getNoticeContent() {
        return noticeContent;
    }

    public void setNoticeContent(String noticeContent) {
        this.noticeContent = noticeContent == null ? null : noticeContent.trim();
    }
}