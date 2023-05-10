package com.hu.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.hu.entity.DeptEntity;
import com.hu.service.DeptService;
import net.sf.json.JSONObject;

//部门
@Controller
@RequestMapping("dept.do")
public class DeptController {
	@Autowired
	private DeptService deptService;

	@RequestMapping(params = "method=index")
	public String index1() {
		return "dept/all";
	}




	@RequestMapping(params = "method=revocation")
	public String index2() {
		return "dept/revocation";
	}
	// 分页查询
	@RequestMapping(params = "method=all")
	@ResponseBody
	public String alls(DeptEntity deptEntity) {
		List<DeptEntity> ar = deptService.selectDepts(deptEntity);
		for (DeptEntity a:ar) {
			System.out.println(a.getPid()+"====>"+a.getPname());
		}
		int count = deptService.Count();
		System.out.println("count===="+count);
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("code", 0);
		jsonObject.put("count", count);
		jsonObject.put("data", ar);
		return jsonObject.toString();
	}
	//撤销查询
	@RequestMapping(params = "method=allss")
	@ResponseBody
	public String allss(DeptEntity deptEntity) {
		List<DeptEntity> ar = deptService.selectDeptss(deptEntity);
		int count = deptService.Counts();
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("code", 0);
		jsonObject.put("count", count);
		jsonObject.put("data", ar);
		return jsonObject.toString();
	}

	// 查询pname部门名称是否重复
	@RequestMapping(params = "method=ck")
	@ResponseBody
	public int selectPname(String pname) {

		int count = deptService.selectPname(pname);
		return count;
	}

	// 新增
	@RequestMapping(params = "method=add")
	@ResponseBody
	public int add(DeptEntity deptEntity) {
		int count = deptService.insertDept(deptEntity);
		return count;
	}

	// 单查询
	@RequestMapping(params = "method=one")
	@ResponseBody
	public DeptEntity one(String pid) {
		DeptEntity selectOne = deptService.selectOne(new Integer(pid));
		return selectOne;
	}

	// 修改
	@RequestMapping(params = "method=upd")
	@ResponseBody
	public int upd(DeptEntity deptEntity) {
		int count = deptService.updateDept(deptEntity);
		return count;
	}

	// 删除
	@RequestMapping(params = "method=del")
	@ResponseBody
	public int del(int pid) {
		int count = deptService.deleteDept(pid);
		return count;
	}

	// 批量删除
	@RequestMapping(params = "method=deleteAll")
	@ResponseBody
	public String deleteAll(String pid) {
		String[] split = pid.split(",");
		int count = deptService.deleteAll(split);
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("count", count);
		return jsonObject.toString();
	}

	// 批量撤回
	@RequestMapping(params = "method=deleteAlls")
	@ResponseBody
	public String deleteAlls(String pid) {

		String[] split = pid.split(",");
		int count = deptService.delectAlls(split);
		deptService.updateEmpPname(split);
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("count", count);
		return jsonObject.toString();
	}

	//查询员工条数
	@RequestMapping(params = "method=selectEmpCount")
	@ResponseBody
	public int selectEmpCount(String pid) {
		System.out.println(pid);
		String[] split = pid.split(",");
		int count = deptService.selectEmpCount(split);
		return count;
	}
}
