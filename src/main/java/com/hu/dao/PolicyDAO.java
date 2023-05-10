package com.hu.dao;

import java.util.List;

import com.hu.entity.PolicyEntity;

public interface PolicyDAO {

	// 统计
	public int count();

	// 全查询
	public List<PolicyEntity> all(PolicyEntity polic);

	// 新增
	public int add(PolicyEntity polic);

	// 查询单个
	public PolicyEntity one(int plid);

	// 修改
	public int upd(PolicyEntity polic);


}
