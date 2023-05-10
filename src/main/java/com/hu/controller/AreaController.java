package com.hu.controller;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hu.entity.AreaEntity;
import com.hu.service.AreaService;

import net.sf.json.JSONObject;
@Controller
@RequestMapping("area.do")
public class AreaController {

	@Autowired
	private AreaService areaService;
	
	@RequestMapping(params = "method=index")
	public String index() {
		return "area/all";
	}
	//全查询
	@RequestMapping(params = "method=all")
	@ResponseBody
	public String alls(AreaEntity areaEntity) {
		List<AreaEntity> ar = areaService.selectAreas(areaEntity);
		int count = areaService.Count();
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("code", 0);  
		jsonObject.put("count", count);  
		jsonObject.put("data", ar); 
		return jsonObject.toString();
	}
	
	//查询新增判断
	@RequestMapping(params = "method=ck")
	@ResponseBody
	public int selectadd(String aname) {
		int count = areaService.selectAname(aname);
		return count;
	}
	
	//新增
	@RequestMapping(params = "method=add")
	@ResponseBody
	public int add(AreaEntity areaEntity) {
		int count = areaService.insertArea(areaEntity);
		return count;
	}
	//单查询
	@RequestMapping(params = "method=one")
	@ResponseBody
	public AreaEntity one(int aid) {
		AreaEntity selectOne = areaService.selectOne(aid);
		return  selectOne;
	}
	//修改
	@RequestMapping(params = "method=upd")
	@ResponseBody
	public int upd(AreaEntity areaEntity) {
		int count = areaService.updateArea(areaEntity);
		return count;
	}
}
