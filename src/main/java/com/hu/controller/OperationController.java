package com.hu.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;


import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hu.entity.OperationEntity;
import com.hu.service.OperationService;
import net.sf.json.JSONObject;

@Controller
@RequestMapping("operation.do")
public class OperationController {

	@Autowired
	private OperationService operationService;

	@RequestMapping(params = "method=index")
	public String index1() {
		return "operation/all";
	}

	// 查看查询
	@RequestMapping(params = "method=all")
	@ResponseBody
	public String all(OperationEntity operationEntity, HttpServletRequest request) {
		Object eid1 = request.getSession().getAttribute("eid");
		int eid = Integer.parseInt(eid1.toString());
		operationEntity.setEid(eid);
		List<OperationEntity> ar = operationService.selectLook(operationEntity);// 插叙
		System.out.println("contr" + ar.size());
		int count = operationService.countLook(operationEntity.getRid());// 条数
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("code", 0);
		jsonObject.put("count", count);
		jsonObject.put("data", ar);
		return jsonObject.toString();
	}

	// 查看最后一条刻度
	@RequestMapping(params = "method=selectOne")
	@ResponseBody
	public OperationEntity selectOne(int hid) {
		OperationEntity selectOne = operationService.selectOne(hid);
		return selectOne;
	}


	//新增
	@RequestMapping(params = "method=add")
	@ResponseBody
	public int add(OperationEntity operationEntity, HttpServletRequest request) {
		Object eid1 = request.getSession().getAttribute("eid");
		int eid = Integer.parseInt(eid1.toString());
		operationEntity.setEid(eid);

		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");// 当前时间
		Date date = new Date(System.currentTimeMillis());// 当前时间
		operationEntity.setOtime(formatter.format(date));// 时间放入对象
		int count = operationService.insertKe(operationEntity);
		if(count>0) {
			operationService.updateHo(operationEntity);
		}
		return count;
	}
}
