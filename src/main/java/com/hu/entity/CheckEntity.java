package com.hu.entity;

import java.io.Serializable;
import com.hu.util.MyEntity;
@SuppressWarnings("serial")
public class CheckEntity extends MyEntity implements Serializable{

	private int  kid;//编号
	private int krent;//退租
	private String ktime;//退租日期
	private String kremark;//备注说明
	private int kflag;//状态值

	// 登记入住表
	private int rid;// 入住编号
	private String rdate;//登记时间
	private String rnexttime;//下次收租时间
	private int rflag;//状态值
	// 客户表
	private int cid;// 客户编号
	private String cname;// 客户姓名
	private String ctel;// 客户电话
	private String cteltwo;//客户备用电话
	// 员工表
	private int eid;// 经办人编号
	private String erealname;// 真实姓名(经办人)

	// 房屋表
	private int hid;// 房屋编号
	private String haddress;// 房子地址
	private String hnumber;// 房号
	private int hflag;//状态值
	public int getKid() {
		return kid;
	}
	public void setKid(int kid) {
		this.kid = kid;
	}
	public int getKrent() {
		return krent;
	}
	public void setKrent(int krent) {
		this.krent = krent;
	}
	public String getKtime() {
		return ktime;
	}
	public void setKtime(String ktime) {
		this.ktime = ktime;
	}
	public String getKremark() {
		return kremark;
	}
	public void setKremark(String kremark) {
		this.kremark = kremark;
	}
	public int getRid() {
		return rid;
	}
	public void setRid(int rid) {
		this.rid = rid;
	}
	public String getRdate() {
		return rdate;
	}
	public void setRdate(String rdate) {
		this.rdate = rdate;
	}
	public String getRnexttime() {
		return rnexttime;
	}
	public void setRnexttime(String rnexttime) {
		this.rnexttime = rnexttime;
	}
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public String getCname() {
		return cname;
	}
	public void setCname(String cname) {
		this.cname = cname;
	}
	public String getCtel() {
		return ctel;
	}
	public void setCtel(String ctel) {
		this.ctel = ctel;
	}
	public String getCteltwo() {
		return cteltwo;
	}
	public void setCteltwo(String cteltwo) {
		this.cteltwo = cteltwo;
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
	public int getHid() {
		return hid;
	}
	public void setHid(int hid) {
		this.hid = hid;
	}
	public String getHaddress() {
		return haddress;
	}
	public void setHaddress(String haddress) {
		this.haddress = haddress;
	}
	public String getHnumber() {
		return hnumber;
	}
	public void setHnumber(String hnumber) {
		this.hnumber = hnumber;
	}
	public int getHflag() {
		return hflag;
	}
	public void setHflag(int hflag) {
		this.hflag = hflag;
	}
	public int getRflag() {
		return rflag;
	}
	public void setRflag(int rflag) {
		this.rflag = rflag;
	}
	public int getKflag() {
		return kflag;
	}
	public void setKflag(int kflag) {
		this.kflag = kflag;
	}





}
