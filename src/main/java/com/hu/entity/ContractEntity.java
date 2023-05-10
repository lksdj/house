package com.hu.entity;

import java.io.Serializable;

import org.springframework.web.multipart.MultipartFile;
import com.hu.util.MyEntity;
@SuppressWarnings("serial")
public class ContractEntity extends MyEntity implements Serializable{

	private int tid;//合同编号
	private String tname;//合同名称
	private String tremark;//文件名
	private MultipartFile fe;//文件

	public int getTid() {
		return tid;
	}
	public void setTid(int tid) {
		this.tid = tid;
	}
	public String getTname() {
		return tname;
	}
	public void setTname(String tname) {
		this.tname = tname;
	}
	public String getTremark() {
		return tremark;
	}
	public void setTremark(String tremark) {
		this.tremark = tremark;
	}
	public MultipartFile getFe() {
		return fe;
	}
	public void setFe(MultipartFile fe) {
		this.fe = fe;
	}


}
