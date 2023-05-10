package com.hu.entity;

import java.io.Serializable;
import com.hu.util.MyEntity;
public class ExpendEntity extends MyEntity implements Serializable{

	private int xid;//编号
	private float xmoney;//支出金额
	private String xsource;//来源条目
	private String xtime;//时间
	private String xremark;//备注说明
	private int eid;//经办人
	private String erealname;//经办人姓名
	public int getXid() {
		return xid;
	}
	public void setXid(int xid) {
		this.xid = xid;
	}
	public float getXmoney() {
		return xmoney;
	}
	public void setXmoney(float xmoney) {
		this.xmoney = xmoney;
	}
	public String getXsource() {
		return xsource;
	}
	public void setXsource(String xsource) {
		this.xsource = xsource;
	}
	public String getXtime() {
		return xtime;
	}
	public void setXtime(String xtime) {
		this.xtime = xtime;
	}
	public String getXremark() {
		return xremark;
	}
	public void setXremark(String xremark) {
		this.xremark = xremark;
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
