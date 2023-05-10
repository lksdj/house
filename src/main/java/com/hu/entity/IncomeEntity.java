package com.hu.entity;

import java.io.Serializable;
import com.hu.util.MyEntity;
public class IncomeEntity extends MyEntity implements Serializable{

	private int nid;//编号
	private float nmoney;//收入金额
	private String nsource;//来源条目
	private String ntime;//收入时间
	private String	nremark;//备注
	private int eid;//经办人
	private String erealname;//经办人姓名
	public int getNid() {
		return nid;
	}
	public void setNid(int nid) {
		this.nid = nid;
	}
	public float getNmoney() {
		return nmoney;
	}
	public void setNmoney(float nmoney) {
		this.nmoney = nmoney;
	}
	public String getNsource() {
		return nsource;
	}
	public void setNsource(String nsource) {
		this.nsource = nsource;
	}
	public String getNtime() {
		return ntime;
	}
	public void setNtime(String ntime) {
		this.ntime = ntime;
	}
	public String getNremark() {
		return nremark;
	}
	public void setNremark(String nremark) {
		this.nremark = nremark;
	}
	public int getEid() {
		return eid;
	}
	public void setEid(int eid) {
		this.eid = eid;
	}
	public String getErealname() {
		return erealname;
	}
	public void setErealname(String erealname) {
		this.erealname = erealname;
	}

}
