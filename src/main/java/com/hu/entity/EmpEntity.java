package com.hu.entity;

import java.io.Serializable;
import com.hu.util.MyEntity;
@SuppressWarnings("serial")
public class EmpEntity extends MyEntity implements Serializable {

	private int eid;//员工编号
	private int pid;//部门编号
	private int jid;//角色编号
	private String ename;//登陆名
	private String epsw;//登陆密码
	private String erealname;//真实姓名(经办人)
	private String etel;//员工电话
	private String eaddress;//员工地址
	private int eflag;//0/1
	private String eremark;//备注说明
	private String pname;//部门名称
	private String jname;//岗位名称
	public int getEid() {
		return eid;
	}
	public void setEid(int eid) {
		this.eid = eid;
	}
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public int getJid() {
		return jid;
	}
	public void setJid(int jid) {
		this.jid = jid;
	}
	public String getEname() {
		return ename;
	}
	public void setEname(String ename) {
		this.ename = ename;
	}
	public String getEpsw() {
		return epsw;
	}
	public void setEpsw(String epsw) {
		this.epsw = epsw;
	}
	public String getErealname() {
		return erealname;
	}
	public void setErealname(String erealname) {
		this.erealname = erealname;
	}
	public String getEtel() {
		return etel;
	}
	public void setEtel(String etel) {
		this.etel = etel;
	}
	public String getEaddress() {
		return eaddress;
	}
	public void setEaddress(String eaddress) {
		this.eaddress = eaddress;
	}
	public int getEflag() {
		return eflag;
	}
	public void setEflag(int eflag) {
		this.eflag = eflag;
	}
	public String getEremark() {
		return eremark;
	}
	public void setEremark(String eremark) {
		this.eremark = eremark;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public String getJname() {
		return jname;
	}
	public void setJname(String jname) {
		this.jname = jname;
	}

}
