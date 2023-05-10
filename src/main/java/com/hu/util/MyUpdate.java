package com.hu.util;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

import org.apache.commons.io.FileUtils;
import org.springframework.web.multipart.MultipartFile;

public class MyUpdate {
	/***************** 改文件名 *****************/
	public static String getRename(String oldname) {
		String result = "";
		// 获取文件后缀.jsp
		String suffix = oldname.substring(oldname.indexOf("."));
		String newname = UUID.randomUUID().toString();
		result = newname + suffix;
		return result;
	}
	/**************** 上传动作 ******************/
	public static void uploadAction(String oldname, String path, MultipartFile in) {
		try {
			// 第一小步：改名
			String rename = MyUpdate.getRename(oldname);
			// 第二小步：指定文件上传的路径
			File f = new File(path);
			FileUtils.copyInputStreamToFile(in.getInputStream(), f);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
