package com.hu.controller;

import java.text.SimpleDateFormat;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hu.entity.PolicyEntity;
import com.hu.service.PolicyService;

import net.sf.json.JSONObject;

@Controller
@RequestMapping("policy.do")
public class PolicyController {

	@Autowired
	private PolicyService policyService;

	@RequestMapping(params = "method=in")
	public String in()
	{
		return "policy/all";
	}

	@RequestMapping(params="method=all")
	@ResponseBody
	public String all(PolicyEntity polic){
		List<PolicyEntity> all = policyService.all(polic);
		int count = policyService.count();
		JSONObject obj=new JSONObject();
		obj.put("code", 0);
		obj.put("count", count);
		obj.put("data", all);
		return obj.toString();
	}

	@RequestMapping(params="method=add")
	public String add(PolicyEntity polic) {
		polic.setPlremark(polic.getContent().getBytes());
		Date date=new Date();
		SimpleDateFormat dateFormat= new SimpleDateFormat("yyyy-MM-dd");
		String pltime=dateFormat.format(date);
		polic.setPltime(pltime);
		int add = policyService.add(polic);
		return "policy/ok";
	}

	@RequestMapping(params="method=one")
	@ResponseBody
	public PolicyEntity one(int plid) {
		PolicyEntity one = policyService.one(plid);
		System.out.println("文件："+one.getPlremark());
		return one;
	}
}
