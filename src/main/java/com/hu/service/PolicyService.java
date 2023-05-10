package com.hu.service;

import com.hu.entity.PolicyEntity;

import java.util.List;

public interface PolicyService {

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
