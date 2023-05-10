package com.hu.entity;

import java.io.Serializable;
import com.hu.util.MyEntity;
@SuppressWarnings("serial")
public class OperationEntity extends MyEntity implements Serializable{

	private int oid;// 编号
	//private int hid;// 房子编号
	private float oelectricnumber;// 电刻度
	private float owaternumber;// 水刻度
	private float ogesnumber;// 煤刻度
	private String otime;// 操表时间
	private float electric;//电费
	private	float water;//水费
	private float gas;//煤气费
	private float total;//合计

	// 登记入住表
	private int rid;// 入住编号
	private String rdate;// 登记时间
	private String rnexttime;// 下次收租时间
	// 客户表
	private int cid;// 客户编号
	private String cname;// 客户姓名
	private String ctel;// 客户电话
	private String cteltwo;// 客户备用电话
	// 员工表
	private int eid;// 经办人编号
	private String erealname;// 真实姓名(经办人)

	// 房屋表
	private int hid;// 房屋编号
	private String haddress;// 房子地址
	private String hnumber;// 房号
	private float electricmoney;//电费单价
	private float watermoney;//水费单价
	private float gasmoney;//煤气费单价
	private float electricnumber;//电刻度
	private float waternumber;//水刻度
	private float gesnumber;//煤刻度

	public int getOid() {
		return oid;
	}
	public void setOid(int oid) {
		this.oid = oid;
	}
	public float getOelectricnumber() {
		return oelectricnumber;
	}
	public void setOelectricnumber(float oelectricnumber) {
		this.oelectricnumber = oelectricnumber;
	}
	public float getOwaternumber() {
		return owaternumber;
	}
	public void setOwaternumber(float owaternumber) {
		this.owaternumber = owaternumber;
	}
	public float getOgesnumber() {
		return ogesnumber;
	}
	public void setOgesnumber(float ogesnumber) {
		this.ogesnumber = ogesnumber;
	}
	public String getOtime() {
		return otime;
	}
	public void setOtime(String otime) {
		this.otime = otime;
	}

	public float getElectric() {
		return electric;
	}
	public void setElectric(float electric) {
		this.electric = electric;
	}
	public float getWater() {
		return water;
	}
	public void setWater(float water) {
		this.water = water;
	}
	public float getGas() {
		return gas;
	}
	public void setGas(float gas) {
		this.gas = gas;
	}
	public float getTotal() {
		return total;
	}
	public void setTotal(float total) {
		this.total = total;
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
	public float getElectricmoney() {
		return electricmoney;
	}
	public void setElectricmoney(float electricmoney) {
		this.electricmoney = electricmoney;
	}

	public float getWatermoney() {
		return watermoney;
	}
	public void setWatermoney(float watermoney) {
		this.watermoney = watermoney;
	}
	public float getGasmoney() {
		return gasmoney;
	}
	public void setGasmoney(float gasmoney) {
		this.gasmoney = gasmoney;
	}
	public float getElectricnumber() {
		return electricnumber;
	}
	public void setElectricnumber(float electricnumber) {
		this.electricnumber = electricnumber;
	}
	public float getWaternumber() {
		return waternumber;
	}
	public void setWaternumber(float waternumber) {
		this.waternumber = waternumber;
	}
	public float getGesnumber() {
		return gesnumber;
	}
	public void setGesnumber(float gesnumber) {
		this.gesnumber = gesnumber;
	}



}
