package com.hu.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hu.entity.DeptEntity;
import com.hu.entity.EmpEntity;
import com.hu.entity.JobEntity;
import com.hu.service.DeptService;
import com.hu.service.EmpService;
import com.hu.service.JobService;

import net.sf.json.JSONObject;


@Controller
@RequestMapping("emp.do")
public class EmpController {

	@Autowired
	private EmpService empService;
	@Autowired
	private DeptService deptService;
	@Autowired
	private JobService jobService;

	@RequestMapping(params = "method=ru")
	public String ru() {
		return "main/index";
	}

	@RequestMapping(params = "method=index")
	public String index() {
		return "emp/all";
	}

	@RequestMapping(params = "method=revocation")
	public String index2() {
		return "emp/revocation";
	}

	// 分页查询
	@RequestMapping(params = "method=all")
	@ResponseBody
	public String alls(EmpEntity empEntity) {
		// 第七步：分页查询
		List<EmpEntity> ar = empService.selectEmps(empEntity);
		int count = empService.Count();
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("code", 0);
		jsonObject.put("count", count);
		jsonObject.put("data", ar);
		return jsonObject.toString();
	}

	// 撤销员工查询
	@RequestMapping(params = "method=revocationsss")
	@ResponseBody
	public String allsss(EmpEntity empEntity) {
		// 第七步：分页查询
		List<EmpEntity> ar = empService.selectEmpche(empEntity);
		int count = empService.Counts();
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("code", 0);
		jsonObject.put("count", count);
		jsonObject.put("data", ar);
		return jsonObject.toString();
	}

	// 查询添加部门下拉框
	@RequestMapping(params = "method=addone1")
	@ResponseBody
	public List<DeptEntity> addone1() {
		List<DeptEntity> dept = deptService.selectDept();
		return dept;
	}

	// 查询添加岗位下拉框
	@RequestMapping(params = "method=addone2")
	@ResponseBody
	public List<JobEntity> addone2() {
		List<JobEntity> job = jobService.selectJob();
		return job;
	}

	// 判读前段页面数据是否在数据存在
	@RequestMapping(params = "method=addname")
	@ResponseBody
	public int addname(EmpEntity empEntity) {
		int count = empService.selectName(empEntity);
		return count;
	}

	// 增加
	@RequestMapping(params = "method=add")
	@ResponseBody
	public int add(EmpEntity empEntity) {
		int count = empService.insertEmp(empEntity);
		return count;
	}

	// 修改单查询
	@RequestMapping(params = "method=updone")
	@ResponseBody
	public EmpEntity updone(int eid) {
		EmpEntity selectOne = empService.selectOne(eid);
		return selectOne;
	}

	// 修改
	@RequestMapping(params = "method=upd")
	@ResponseBody
	public int upd(EmpEntity empEntity) {
		int eid = empEntity.getEid();
		int pid = empEntity.getPid();
		int jid = empEntity.getJid();
		// String ename = empEntity.getEname();
		// String epsw = empEntity.getEpsw();
		// String erealname = empEntity.getErealname();
		// String etel = empEntity.getEtel();
		// String eaddress = empEntity.getEaddress();
		// int eflag = empEntity.getEflag();
		// String eremark = empEntity.getEremark();
		// System.out.println(eid + " " + pid + " " + jid + ename + " " + epsw + " " +
		// erealname + " " + etel + " "
		// + eaddress + " " + eflag + eremark);
		int count = empService.updateEmp(empEntity);
		System.out.println(count);
		return count;
	}

	// 批量删除
	@RequestMapping(params = "method=deleteAll")
	@ResponseBody
	public String deleteAll(String eid) {
		System.out.println(eid);
		String[] split = eid.split(",");
		int count = empService.deleteAll(split);
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("count", count);
		return jsonObject.toString();
	}

	// 批量恢复
	@RequestMapping(params = "method=deleteAlls")
	@ResponseBody
	public String deleteAlls(String eid) {
		String[] split = eid.split(",");
		int count = empService.delectAlls(split);
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("count", count);
		return jsonObject.toString();
	}

	// 删除
	@RequestMapping(params = "method=del")
	@ResponseBody
	public int del(int eid) {
		int count = empService.deleteEmp(eid);
		return count;
	}

	//判断经理
	@RequestMapping(params="method=Xa")
	@ResponseBody
	public int Xa(EmpEntity empEntity) {
		int count = empService.selectJingLi(empEntity);
		return count;
	}

	//新增时候此部门以存在经理就把原来的经理改为普通员工
	@RequestMapping(params="method=UpdJingLi")
	@ResponseBody
	public int updateJingLi(EmpEntity empEntity) {
		System.out.println(empEntity.getPid());
		System.out.println(empEntity.getJid());
		int count = empService.updateJingLi(empEntity);
		System.out.println(count);
		return count;
	}

	//取消时新增和确认
	@RequestMapping(params="method=AddJingLi")
	@ResponseBody
	public int insertJingLi(EmpEntity empEntity) {
		int count = empService.insertJingLi(empEntity);
		return count;
	}
}
