package com.hu.util;

import java.io.Serializable;

@SuppressWarnings("serial")
public class MyEntity implements Serializable {
	// 从哪一条开始
	private int begin;
	// 每一页多少条
	private int pages;
	public int getBegin() {
		return begin;
	}
	public void setBegin(int begin) {
		this.begin = begin;
	}
	public int getPages() {
		return pages;
	}
	public void setPages(int pages) {
		this.pages = pages;
	}


}
