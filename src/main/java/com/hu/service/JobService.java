package com.hu.service;

import com.hu.entity.JobEntity;

import java.util.List;

public interface JobService {
	/**
	 * 查询 新增 单查询 修改 删除 条数 分页查询
	 **/
	public List<JobEntity> selectJob();

	public int insertJob(JobEntity jobEntity);

	public JobEntity selectOne(int jid);

	public int updateJob(JobEntity jobEntity);

	public int deleteJob(int jid);

	public int Count();

	public List<JobEntity> selectJobs(JobEntity jobEntity);

	public int selectJname(String jname);
}
