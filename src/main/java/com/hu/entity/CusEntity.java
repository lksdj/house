package com.hu.entity;

import java.io.Serializable;
import com.hu.util.MyEntity;
@SuppressWarnings("serial")
public class CusEntity extends MyEntity implements Serializable{
	private int cid;//客户ID
	private String cname;//客户姓名
	private String csex;//客户性别
	private String ctel;//客户电话号
	private String cteltwo;//客户备用电话号
	private String ccard;//身份证
	private int eid;//员工ID
	private String ename;//员工账号登陆用的
	private String erealname;//员工真实姓名(经办人)
	public String getErealname() {
		return erealname;
	}
	public void setErealname(String erealname) {
		this.erealname = erealname;
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
	public String getCsex() {
		return csex;
	}
	public void setCsex(String csex) {
		this.csex = csex;
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
	public String getCcard() {
		return ccard;
	}
	public void setCcard(String ccard) {
		this.ccard = ccard;
	}
	public int getEid() {
		return eid;
	}
	public void setEid(int eid) {
		this.eid = eid;
	}
	public String getEname() {
		return ename;
	}
	public void setEname(String ename) {
		this.ename = ename;
	}

}
