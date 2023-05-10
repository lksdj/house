package com.hu.entity;

import java.io.Serializable;
import com.hu.util.MyEntity;
public class RepairEntity extends MyEntity implements Serializable{


	private int qid;//编号
	private int hid;//房屋编号
	private int kid;//登记退房编号
	private String qtime;//报损时间
	private String qremark;//备注说明
	private int eid;//经办人

	private int hflag;//房屋状态
	private String aname;//房屋片区
	private String haddress;//房屋地址
	private String hnumber;//房屋房号
	private String erealname;//经办人
	public int getQid() {
		return qid;
	}
	public void setQid(int qid) {
		this.qid = qid;
	}
	public int getHid() {
		return hid;
	}
	public void setHid(int hid) {
		this.hid = hid;
	}
	public int getKid() {
		return kid;
	}
	public void setKid(int kid) {
		this.kid = kid;
	}
	public String getQtime() {
		return qtime;
	}
	public void setQtime(String qtime) {
		this.qtime = qtime;
	}
	public String getQremark() {
		return qremark;
	}
	public void setQremark(String qremark) {
		this.qremark = qremark;
	}
	public int getEid() {
		return eid;
	}
	public void setEid(int eid) {
		this.eid = eid;
	}
	public String getAname() {
		return aname;
	}
	public void setAname(String aname) {
		this.aname = aname;
	}
	public String getHnumber() {
		return hnumber;
	}
	public void setHnumber(String hnumber) {
		this.hnumber = hnumber;
	}
	public String getErealname() {
		return erealname;
	}
	public void setErealname(String erealname) {
		this.erealname = erealname;
	}
	public String getHaddress() {
		return haddress;
	}
	public void setHaddress(String haddress) {
		this.haddress = haddress;
	}
	public int getHflag() {
		return hflag;
	}
	public void setHflag(int hflag) {
		this.hflag = hflag;
	}




}
