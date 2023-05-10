package com.hu.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hu.entity.ExpendEntity;
import com.hu.service.ExpendService;
import net.sf.json.JSONObject;

@Controller
@RequestMapping("expend.do")
public class ExpendController {

	@Autowired
	private ExpendService expendService;


	@RequestMapping(params = "method=index")
	public String index1() {
		return "expend/all";
	}

	// 查询
	@RequestMapping(params = "method=all")
	@ResponseBody
	public String all(ExpendEntity expendEntity) {
		List<ExpendEntity> ar = expendService.all(expendEntity);
		int count = expendService.Count();
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("code", 0);
		jsonObject.put("count", count);
		jsonObject.put("data", ar);
		return jsonObject.toString();
	}
	//新增
	@RequestMapping(params = "method=add")
	@ResponseBody
	public int add(ExpendEntity expendEntity, HttpServletRequest request) {
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");// 当前时间
		Date date = new Date(System.currentTimeMillis());// 当前时间
		expendEntity.setXtime(formatter.format(date));// 时间放入对象
		Object eid1 = request.getSession().getAttribute("eid");
		int eid = Integer.parseInt(eid1.toString());
		expendEntity.setEid(eid);
		int count = expendService.add(expendEntity);
		return count;
	}
	//单查询
	@RequestMapping(params = "method=one")
	@ResponseBody
	public ExpendEntity one(int xid) {
		ExpendEntity one = expendService.one(xid);
		return one;
	}

	//修改
	@RequestMapping(params = "method=upd")
	@ResponseBody
	public int one(ExpendEntity expendEntity) {
		int count = expendService.upd(expendEntity);
		return count;
	}
}


