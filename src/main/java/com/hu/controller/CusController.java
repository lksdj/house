package com.hu.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.hu.entity.CusEntity;
import com.hu.service.CusService;
import net.sf.json.JSONObject;

@Controller
@RequestMapping("cus.do")
public class CusController {

	@Autowired
	private CusService cusService;

	@RequestMapping(params = "method=index")
	public String index1() {
		return "cus/all";
	}

	// 分页查询
	@RequestMapping(params = "method=all")
	@ResponseBody
	public String alls(CusEntity cusEntity, HttpServletRequest request) {
		Object eid1 = request.getSession().getAttribute("eid");
		int eid = Integer.parseInt(eid1.toString());
		cusEntity.setEid(eid);
		List<CusEntity> ar = cusService.selectAlls(cusEntity);
		int count = cusService.Count();
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("code", 0);
		jsonObject.put("count", count);
		jsonObject.put("data", ar);
		return jsonObject.toString();
	}

	// 判断重复
	@RequestMapping(params = "method=selectRepetition")
	@ResponseBody
	public int select(CusEntity cusEntity) {
		System.out.println("23");
		int count = cusService.selectRepetition(cusEntity);
		System.out.println("count:" + count);
		return count;
	}

	// 新增
	@RequestMapping(params = "method=insert")
	@ResponseBody
	public int insert(CusEntity cusEntity) {
		int count = cusService.insertCus(cusEntity);
		System.out.println("新增:" + count);
		return count;
	}

	// 修改单查询
	@RequestMapping(params = "method=selectOne")
	@ResponseBody
	public CusEntity selectOne(int cid) {
		CusEntity selectOne = cusService.selectOne(cid);
		return selectOne;
	}
	//修改
	@RequestMapping(params = "method=update")
	@ResponseBody
	public int update(CusEntity cusEntity) {
		int count = cusService.updateCus(cusEntity);
		return count;
	}

}
