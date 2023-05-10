package com.hu.entity;

import com.hu.util.MyEntity;

import java.io.Serializable;

public class AreaEntity extends MyEntity implements Serializable {

	private int aid;
	private String aname;
	public int getAid() {
		return aid;
	}
	public void setAid(int aid) {
		this.aid = aid;
	}
	public String getAname() {
		return aname;
	}
	public void setAname(String aname) {
		this.aname = aname;
	}
	
}
