package com.model;

public class Section {
    private Integer sectionId;

    private String sectionName;

    private Integer sectionMaster;

    private Integer sectionParentid;

    private Integer artCount;

    public Integer getSectionId() {
        return sectionId;
    }

    public void setSectionId(Integer sectionId) {
        this.sectionId = sectionId;
    }

    public String getSectionName() {
        return sectionName;
    }

    public void setSectionName(String sectionName) {
        this.sectionName = sectionName == null ? null : sectionName.trim();
    }

    public Integer getSectionMaster() {
        return sectionMaster;
    }

    public void setSectionMaster(Integer sectionMaster) {
        this.sectionMaster = sectionMaster;
    }

    public Integer getSectionParentid() {
        return sectionParentid;
    }

    public void setSectionParentid(Integer sectionParentid) {
        this.sectionParentid = sectionParentid;
    }

    public Integer getArtCount() {
        return artCount;
    }

    public void setArtCount(Integer artCount) {
        this.artCount = artCount;
    }
}