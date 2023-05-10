package com.hu.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hu.entity.JobEntity;
import com.hu.service.JobService;

import net.sf.json.JSONObject;

@Controller
@RequestMapping("job.do")
public class JobController {

	@Autowired
	private JobService jobService;

	@RequestMapping(params = "method=index")
	public String index() {
		return "job/all";
	}

	// 全查询
	@RequestMapping(params = "method=all")
	@ResponseBody
	public String alls(JobEntity jobEntity) {
		List<JobEntity> ar = jobService.selectJobs(jobEntity);
		int count = jobService.Count();
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("code", 0);
		jsonObject.put("count", count);
		jsonObject.put("data", ar);
		return jsonObject.toString();
	}

	// 查询岗位名称是否重复
	@RequestMapping(params = "method=ck")
	@ResponseBody
	public int selectPname(String jname) {
		int count = jobService.selectJname(jname);
		return count;
	}

	// 新增
	@RequestMapping(params = "method=add")
	@ResponseBody
	public int add(JobEntity jobEntity) {
		int count = jobService.insertJob(jobEntity);
		return count;
	}

	// 单查询
	@RequestMapping(params = "method=one")
	@ResponseBody
	public JobEntity one(int jid) {
		JobEntity selectOne = jobService.selectOne(jid);
		return selectOne;
	}

	// 修改
	@RequestMapping(params = "method=upd")
	@ResponseBody
	public int upd(JobEntity jobEntity) {
		int count = jobService.updateJob(jobEntity);
		return count;
	}
}
