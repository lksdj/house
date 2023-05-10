package com.hu.entity;

import java.io.Serializable;

import org.springframework.web.multipart.MultipartFile;
import com.hu.util.MyEntity;
@SuppressWarnings("serial")
public class HouseEntity extends MyEntity implements Serializable {
	private int hid;// 房子出租信息表
	private int sid;// 出租编号
	private int aid;// 区域编号
	private String haddress;// 房子地址
	private String hnumber;// 房号
	private String htype;// 房子户型
	private String harea;// 面积
	private String direction;// 朝向
	private float hmoney;// 原定最低租金
	private float networkmoney;// 网费
	private float electricmoney;// 电费电价
	private float watermoney;// 水费单价
	private float gasmoney;// 煤气单价
	private float electricnumber;// 电刻度
	private float waternumber;// 水刻度
	private float gesnumber;// 煤刻度
	private String hname;// 房子简拼
	private String hremark;// 备注说明
	private String himg;// 房子图片
	private int hflag;// 0/1
	private String sname;// 出租类别名称
	private String aname;// 区域名称
	private MultipartFile himg1;// 文件获取对象
	private MultipartFile himg2;// 文件获取对象
	private MultipartFile himg3;// 文件获取对象
	private String imgpath;// 接收


	private String myimg1;
	private String myimg2;
	private String myimg3;

	public int getHid() {
		return hid;
	}

	public void setHid(int hid) {
		this.hid = hid;
	}

	public int getSid() {
		return sid;
	}

	public void setSid(int sid) {
		this.sid = sid;
	}

	public int getAid() {
		return aid;
	}

	public void setAid(int aid) {
		this.aid = aid;
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

	public String getHtype() {
		return htype;
	}

	public void setHtype(String htype) {
		this.htype = htype;
	}

	public String getHarea() {
		return harea;
	}

	public void setHarea(String harea) {
		this.harea = harea;
	}

	public String getDirection() {
		return direction;
	}

	public void setDirection(String direction) {
		this.direction = direction;
	}

	public float getHmoney() {
		return hmoney;
	}

	public void setHmoney(float hmoney) {
		this.hmoney = hmoney;
	}

	public float getNetworkmoney() {
		return networkmoney;
	}

	public void setNetworkmoney(float networkmoney) {
		this.networkmoney = networkmoney;
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

	public String getHname() {
		return hname;
	}

	public void setHname(String hname) {
		this.hname = hname;
	}

	public String getHremark() {
		return hremark;
	}

	public void setHremark(String hremark) {
		this.hremark = hremark;
	}

	public String getHimg() {
		return himg;
	}

	public void setHimg(String himg) {
		this.himg = himg;
	}

	public int getHflag() {
		return hflag;
	}

	public void setHflag(int hflag) {
		this.hflag = hflag;
	}

	public String getSname() {
		return sname;
	}

	public void setSname(String sname) {
		this.sname = sname;
	}

	public String getAname() {
		return aname;
	}

	public void setAname(String aname) {
		this.aname = aname;
	}

	public MultipartFile getHimg1() {
		return himg1;
	}

	public void setHimg1(MultipartFile himg1) {
		this.himg1 = himg1;
	}

	public MultipartFile getHimg2() {
		return himg2;
	}

	public void setHimg2(MultipartFile himg2) {
		this.himg2 = himg2;
	}

	public MultipartFile getHimg3() {
		return himg3;
	}

	public void setHimg3(MultipartFile himg3) {
		this.himg3 = himg3;
	}

	public String getImgpath() {
		return imgpath;
	}

	public void setImgpath(String imgpath) {
		this.imgpath = imgpath;
	}
	public String getMyimg1() {
		return myimg1;
	}

	public void setMyimg1(String myimg1) {
		this.myimg1 = myimg1;
	}

	public String getMyimg2() {
		return myimg2;
	}

	public void setMyimg2(String myimg2) {
		this.myimg2 = myimg2;
	}

	public String getMyimg3() {
		return myimg3;
	}

	public void setMyimg3(String myimg3) {
		this.myimg3 = myimg3;
	}

}
