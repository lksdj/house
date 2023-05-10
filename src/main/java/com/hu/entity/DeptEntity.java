package com.hu.entity;

import java.io.Serializable;
import com.hu.util.MyEntity;
@SuppressWarnings("serial")
public class DeptEntity extends MyEntity implements Serializable {

	private int pid;//部门编号
	private String pname;//部门名称
	private int pflag;//0/1
	private String premark;//备注说明
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public int getPflag() {
		return pflag;
	}
	public void setPflag(int pflag) {
		this.pflag = pflag;
	}
	public String getPremark() {
		return premark;
	}
	public void setPremark(String premark) {
		this.premark = premark;
	}


}
