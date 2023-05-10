package com.hu.dao;

import java.util.List;

import com.hu.entity.JobEntity;

public interface JobDAO {
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
