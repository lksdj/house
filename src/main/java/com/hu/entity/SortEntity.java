package com.hu.entity;

import java.io.Serializable;
import com.hu.util.MyEntity;
@SuppressWarnings("serial")
public class SortEntity extends MyEntity implements Serializable {

	private int sid;
	private String sname;

	public int getSid() {
		return sid;
	}

	public void setSid(int sid) {
		this.sid = sid;
	}

	public String getSname() {
		return sname;
	}

	public void setSname(String sname) {
		this.sname = sname;
	}

}
