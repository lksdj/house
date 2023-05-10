package com.hu.controller;


import java.io.FileInputStream;

import java.io.InputStream;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.hu.util.MyUpdate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hu.entity.ContractEntity;
import com.hu.service.ContractService;

import net.sf.json.JSONObject;

@Controller
@RequestMapping("contract.do")
public class ContractController {

	@Autowired
	private ContractService contractService;

	@RequestMapping(params = "method=index")
	public String index() {
		return "contract/all";
	}

	// 查询
	@RequestMapping(params = "method=all")
	@ResponseBody
	public String all(ContractEntity contractEntity) {
		List<ContractEntity> ar = contractService.all(contractEntity);
		int count = contractService.count();
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("code", 0);
		jsonObject.put("count", count);
		jsonObject.put("data", ar);
		return jsonObject.toString();
	}

	// 上传
	@RequestMapping(params = "method=add")
	@ResponseBody
	public int add(ContractEntity contractEntity, HttpServletRequest request) {
		String name = contractEntity.getFe().getOriginalFilename();
		String rename = MyUpdate.getRename(name);// 获得改名字后的名字
		System.out.println("rename"+rename+"name"+name);
		if (name.length() >0) {
			// 用户上传文件的位置
			String path = request.getSession().getServletContext().getRealPath("/upload/" + rename);
			MyUpdate.uploadAction(rename, path, contractEntity.getFe());
		}
		System.out.println("rename====="+rename);
		contractEntity.setTremark(rename);
		int count = contractService.add(contractEntity);
		return count;
	}

	// 下载
	@RequestMapping(params = "method=xz")
	@ResponseBody
	public void zx(int tid, HttpServletRequest request,HttpServletResponse response) {
		String path = request.getSession().getServletContext().getRealPath("/upload");

		System.out.println("path"+path);
		// 第一步：得到要下载的对象信息
		ContractEntity xz = contractService.xz(tid);
		// 第二步：得到下载字段的详细信息
		String oldname = xz.getTremark();
		//第三步：组装下载完整路径
		try {
			System.out.println("path:==="+path);
			InputStream in=new FileInputStream(path+"/"+oldname);
			/**********设置下载后的文件格式**************/
			response.reset();
			response.setContentType("bin");
			response.addHeader("Content-Disposition", "attachment;filename="+oldname+"");
			byte xx[]=new byte[1024];
			int len;
			while((len=in.read(xx))>0)
			{
				response.getOutputStream().write(xx,0,len);
			}
			in.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
