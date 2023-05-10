package com.hu.entity;

import java.io.Serializable;
import com.hu.util.MyEntity;
@SuppressWarnings("serial")
public class JobEntity extends MyEntity implements Serializable{

	private int jid;//角色编号
	private String jname;//角色名称
	public int getJid() {
		return jid;
	}
	public void setJid(int jid) {
		this.jid = jid;
	}
	public String getJname() {
		return jname;
	}
	public void setJname(String jname) {
		this.jname = jname;
	}

}
