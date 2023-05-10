package com.hu.service;

import com.hu.entity.IncomeEntity;

import java.util.List;

public interface IncomeService {

	// 查询
	public List<IncomeEntity> selectAll(IncomeEntity incomeEntity);

	// 条数
	public int Count();

	// 新增
	public int add(IncomeEntity incomeEntity);

	// 单查询
	public IncomeEntity one(int nid);

	// 修改
	public int upd(IncomeEntity incomeEntity);
}
