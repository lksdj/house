package com.hu.entity;

import java.io.Serializable;
import com.hu.util.MyEntity;
public class PolicyEntity extends MyEntity implements Serializable {


	private int plid;
	private String plsource;

	private String pltime;
	// 要修改此字段!--与数据库中的byte对应(转----*Mapper.xml)
	private byte plremark[];

	//与页面上的富文本编辑器对应

	private String content;

	public int getPlid() {
		return plid;
	}

	public void setPlid(int plid) {
		this.plid = plid;
	}

	public String getPlsource() {
		return plsource;
	}

	public void setPlsource(String plsource) {
		this.plsource = plsource;
	}

	public String getPltime() {
		return pltime;
	}

	public void setPltime(String pltime) {
		this.pltime = pltime;
	}

	public byte[] getPlremark() {
		return plremark;
	}

	public void setPlremark(byte[] plremark) {
		this.plremark = plremark;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}



}
