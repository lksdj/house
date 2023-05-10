package com.hu.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.hu.entity.SortEntity;
import com.hu.service.SortService;

import net.sf.json.JSONObject;

@Controller
@RequestMapping("sort.do")
public class SortController {
	@Autowired
	private SortService sortService;

	@RequestMapping(params = "method=index")
	public String index() {
		return "sort/all";
	}

	// 全查询
	@RequestMapping(params = "method=all")
	@ResponseBody
	public String alls(SortEntity sortEntity) {
		List<SortEntity> ar = sortService.selectSorts(sortEntity);
		int count = sortService.Count();
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("code", 0);
		jsonObject.put("count", count);
		jsonObject.put("data", ar);
		return jsonObject.toString();
	}

	// 判断前段查询sname是否存在重复
	@RequestMapping(params = "method=ck")
	@ResponseBody
	public int selectadd(String sname) {
		int count = sortService.selectsname(sname);
		return count;
	}

	// 新增
	@RequestMapping(params = "method=add")
	@ResponseBody
	public int add(SortEntity sortEntity) {
		int count = sortService.insertSort(sortEntity);
		return count;
	}

	// 单查询
	@RequestMapping(params = "method=one")
	@ResponseBody
	public SortEntity one(int sid) {
		SortEntity selectOne = sortService.selectOne(sid);
		return selectOne;
	}

	// 修改
	@RequestMapping(params = "method=upd")
	@ResponseBody
	public int upd(SortEntity sortEntity) {
		int count = sortService.updateSort(sortEntity);
		return count;
	}
}
