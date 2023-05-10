package com.hu.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hu.entity.RegisterEntity;
import com.hu.service.RegisterService;

@Controller
@RequestMapping("tu.do")
public class TuController {

	@Autowired
	private RegisterService registerService;

	@RequestMapping(params = "method=index")
	public String index1() {
		return "tu/tu1";
	}

	@RequestMapping(params = "method=tu1")
	@ResponseBody
	public List<RegisterEntity> all1() {
		List<RegisterEntity> ar = registerService.pictorial();
		return ar;
	}
}
