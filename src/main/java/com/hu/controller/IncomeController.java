package com.hu.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hu.entity.IncomeEntity;
import com.hu.service.IncomeService;

import net.sf.json.JSONObject;

@Controller
@RequestMapping("income.do")
public class IncomeController {

	@Autowired
	private IncomeService incomeService;

	@RequestMapping(params = "method=index")
	public String index1() {
		return "income/all";
	}

	// 查询
	@RequestMapping(params = "method=all")
	@ResponseBody
	public String all(IncomeEntity incomeEntity) {
		List<IncomeEntity> ar = incomeService.selectAll(incomeEntity);
		int count = incomeService.Count();
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("code", 0);
		jsonObject.put("count", count);
		jsonObject.put("data", ar);
		return jsonObject.toString();
	}

	// 新增
	@RequestMapping(params = "method=add")
	@ResponseBody
	public int add(IncomeEntity incomeEntity, HttpServletRequest request) {
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");// 当前时间
		Date date = new Date(System.currentTimeMillis());// 当前时间
		incomeEntity.setNtime(formatter.format(date));// 时间放入对象
		Object eid1 = request.getSession().getAttribute("eid");
		int eid = Integer.parseInt(eid1.toString());
		incomeEntity.setEid(eid);
		int count = incomeService.add(incomeEntity);
		return count;
	}

	//单查询
	@RequestMapping(params = "method=one")
	@ResponseBody
	public IncomeEntity add(int nid) {
		IncomeEntity one = incomeService.one(nid);
		return one;
	}



	//修改
	@RequestMapping(params = "method=upd")
	@ResponseBody
	public int upd(IncomeEntity incomeEntity) {
		int count = incomeService.upd(incomeEntity);
		return count;
	}
}
