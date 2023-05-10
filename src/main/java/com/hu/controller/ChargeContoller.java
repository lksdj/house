package com.hu.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hu.entity.ChargeEntity;
import com.hu.entity.RegisterEntity;
import com.hu.service.ChargeService;

import net.sf.json.JSONObject;

@Controller
@RequestMapping("charge.do")
public class ChargeContoller {

	@Autowired
	private ChargeService chargeService;

	@RequestMapping(params = "method=index")
	public String index1() {
		return "charge/all";
	}

	@RequestMapping(params = "method=gdate")
	public String index2() {
		return "expire/all";
	}

	// 根据登记入住查询 且查到最大主键值 得到最大的下次收租日期
	@RequestMapping(params = "method=selectCharge")
	@ResponseBody
	public String selectCharge(RegisterEntity registerEntity) {


		List<RegisterEntity> ar = chargeService.selectCharge(registerEntity);
		int count = chargeService.countCharge();
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("code", 0);
		jsonObject.put("count", count);
		jsonObject.put("data", ar);
		return jsonObject.toString();
	}

	// 续租详细
	@RequestMapping(params = "method=detail")
	@ResponseBody
	public String all(ChargeEntity chargeEntity, HttpServletRequest request) {



		List<ChargeEntity> ar = chargeService.selectAll(chargeEntity);
		int count = chargeService.Count(chargeEntity.getRid());
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("code", 0);
		jsonObject.put("count", count);
		jsonObject.put("data", ar);
		return jsonObject.toString();
	}

	// 续租单查询
	@RequestMapping(params = "method=one")
	@ResponseBody
	public RegisterEntity one(int rid) {
		RegisterEntity selectOne = chargeService.selectOne(rid);
		return selectOne;
	}

	// 新增续租
	@RequestMapping(params = "method=insertCharge")
	@ResponseBody
	public int insertCharge(ChargeEntity chargeEntity) {
		int insertCharge = chargeService.insertCharge(chargeEntity);
		return insertCharge;
	}

	// 到期收入查询
	@RequestMapping(params = "method=selectExpire")
	@ResponseBody
	public String selectExpire(RegisterEntity registerEntity,HttpServletRequest request) {
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");// 当前时间
		Date date = new Date(System.currentTimeMillis());// 当前时间
		registerEntity.setGnexttime(formatter.format(date));// 时间放入对象gnexttime
		Object eid1 = request.getSession().getAttribute("eid");
		int eid = Integer.parseInt(eid1.toString());
		registerEntity.setEid(eid);
		List<RegisterEntity> ar = chargeService.selectExpire(registerEntity);




		int count = chargeService.expireCount(registerEntity);
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("code", 0);
		jsonObject.put("count", count);
		jsonObject.put("data", ar);
		return jsonObject.toString();
	}
	@RequestMapping(params = "method=count")
	@ResponseBody
	public int count(RegisterEntity registerEntity,HttpServletRequest request) {
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");// 当前时间
		Date date = new Date(System.currentTimeMillis());// 当前时间
		registerEntity.setGnexttime(formatter.format(date));// 时间放入对象gnexttime
		Object eid1 = request.getSession().getAttribute("eid");
		int eid = Integer.parseInt(eid1.toString());
		registerEntity.setEid(eid);
		int count = chargeService.expireCount(registerEntity);
		return count;
	}

}
