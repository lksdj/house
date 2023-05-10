package com.hu.controller;

import java.io.File;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.hu.util.MyUpdate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hu.entity.UpEntity;

@Controller
@RequestMapping("up.do")
public class UpController {

	private Map<String, String> map = new HashMap<String, String>();
	String newname = "";

	@RequestMapping(params = "method=myup")
	@ResponseBody
	public Map myup(UpEntity up, HttpServletRequest request) {
		try {
			// 判断文件是否为空，空则返回失败页面
			if (up.getUpfile().isEmpty()) {
				return null;
			}
			// 获取文件存储路径（绝对路径）
			String path = request.getSession().getServletContext().getRealPath("/upload");
			// 获取原文件名
			String fileName = up.getUpfile().getOriginalFilename();
			// 改名
			newname = MyUpdate.getRename(fileName);
			// 创建文件实例
			File filePath = new File(path, newname);
			// 如果文件目录不存在，创建目录
			if (!filePath.getParentFile().exists()) {
				filePath.getParentFile().mkdirs();
			}
			// 写入文件
			up.getUpfile().transferTo(filePath);
		} catch (Exception e) {
			e.printStackTrace();
		}
		map.put("name", newname);
		map.put("originalName", newname);
		map.put("size", "");
		map.put("state", "SUCCESS");
		// System.out.println("路径："+request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath()+"/upload/"+newname);
		map.put("url", request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
				+ request.getContextPath() + "/upload/" + newname);// 展示图片的请求url

		return map;
	}

}
