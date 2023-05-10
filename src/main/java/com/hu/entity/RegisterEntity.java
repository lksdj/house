package com.hu.entity;

import java.io.Serializable;

import org.springframework.web.multipart.MultipartFile;
import com.hu.util.MyEntity;
@SuppressWarnings("serial")
public class RegisterEntity extends MyEntity implements Serializable {

	// 登记入住表
	private int rid;// 登记入住编号
	private String rdate;// 登记时间
	private String timg;// 合同图片

	private int rdeposit;// 押金
	private int rrent;// 预收租金
	private int rflag;// 正在出租中为1 退租2
	private String rnexttime;// 下次收租日期

	// 客户表
	private int cid;// 客户编号
	private String cname;// 客户姓名
	private String ctel;// 客户电话
	// 员工表
	private int eid;// 经办人编号
	private String erealname;// 真实姓名(经办人)

	// 房屋表
	private int hid;// 房屋编号
	private String haddress;// 房子地址
	private String hnumber;// 房号
	private int harea;//房屋面积
	private String htype;//户型
	private int h1;//从
	private int h2;//到
	private int hflag;// 0/1
	//房屋片区表
	private int aid;//片区ID
	private String aname;// 区域名称

	//房屋类型表
	private int sid;//房屋类别ID
	private String sname;//房屋类别名称

	//登记收费表
	private int gid;//编号
	private int grent;//预收租金
	private String gnexttime;//下次收租日期
	private MultipartFile himg1;// 文件获取对象




	//登记退房表
	private int krent;//退租租金
	private String ktime;//退租日期
	private String kremark;//备注说明

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
	public String getTimg() {
		return timg;
	}
	public int getHarea() {
		return harea;
	}
	public void setHarea(int harea) {
		this.harea = harea;
	}
	public int getH1() {
		return h1;
	}
	public void setH1(int h1) {
		this.h1 = h1;
	}
	public int getH2() {
		return h2;
	}
	public void setH2(int h2) {
		this.h2 = h2;
	}
	public void setTimg(String timg) {
		this.timg = timg;
	}
	public int getRdeposit() {
		return rdeposit;
	}
	public void setRdeposit(int rdeposit) {
		this.rdeposit = rdeposit;
	}
	public int getRrent() {
		return rrent;
	}
	public void setRrent(int rrent) {
		this.rrent = rrent;
	}
	public int getRflag() {
		return rflag;
	}
	public void setRflag(int rflag) {
		this.rflag = rflag;
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
	public int getAid() {
		return aid;
	}
	public void setAid(int aid) {
		this.aid = aid;
	}
	public String getAname() {
		return aname;
	}
	public void setAname(String aname) {
		this.aname = aname;
	}
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
	public MultipartFile getHimg1() {
		return himg1;
	}
	public void setHimg1(MultipartFile himg1) {
		this.himg1 = himg1;
	}
	public int getGid() {
		return gid;
	}
	public void setGid(int gid) {
		this.gid = gid;
	}
	public int getGrent() {
		return grent;
	}
	public void setGrent(int grent) {
		this.grent = grent;
	}
	public String getGnexttime() {
		return gnexttime;
	}
	public void setGnexttime(String gnexttime) {
		this.gnexttime = gnexttime;
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
	public String getHtype() {
		return htype;
	}
	public void setHtype(String htype) {
		this.htype = htype;
	}

}
