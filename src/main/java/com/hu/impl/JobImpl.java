package com.hu.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hu.dao.JobDAO;
import com.hu.entity.JobEntity;
import com.hu.service.JobService;
@Service
public class JobImpl implements JobService {
	/**
	 * 查询 新增 单查询 修改 删除 条数 分页查询
	 **/

	@Autowired
	private JobDAO jobDAO  ;

	@Override
	public List<JobEntity> selectJob() {
		// TODO Auto-generated method stub
		return jobDAO.selectJob();
	}

	@Override
	public int insertJob(JobEntity jobEntity) {
		// TODO Auto-generated method stub
		return jobDAO.insertJob(jobEntity);
	}

	@Override
	public JobEntity selectOne(int jid) {
		// TODO Auto-generated method stub
		return jobDAO.selectOne(jid);
	}

	@Override
	public int updateJob(JobEntity jobEntity) {
		// TODO Auto-generated method stub
		return jobDAO.updateJob(jobEntity);
	}

	@Override
	public int deleteJob(int jid) {
		// TODO Auto-generated method stub


		return jobDAO.deleteJob(jid);
	}

	@Override
	public int Count() {
		// TODO Auto-generated method stub
		return jobDAO.Count();
	}

	@Override
	public List<JobEntity> selectJobs(JobEntity jobEntity) {
		// TODO Auto-generated method stub
		int x=jobEntity.getBegin();
		int y=(x-1)*jobEntity.getPages();
		jobEntity.setBegin(y);
		return jobDAO.selectJobs(jobEntity);
	}

	@Override
	public int selectJname(String jname) {
		// TODO Auto-generated method stub
		return jobDAO.selectJname(jname);
	}

}
