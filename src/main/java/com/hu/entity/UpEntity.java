package com.hu.entity;

import java.io.Serializable;

import org.springframework.web.multipart.MultipartFile;

public class UpEntity implements Serializable
{
	// 上传
	private MultipartFile upfile;

	public MultipartFile getUpfile()
	{
		return upfile;
	}
	public void setUpfile(MultipartFile upfile)
	{
		this.upfile = upfile;
	}
}
