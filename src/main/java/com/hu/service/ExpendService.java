package com.hu.service;

import com.hu.entity.ExpendEntity;

import java.util.List;

public interface ExpendService {


	//查询
	public List<ExpendEntity> all(ExpendEntity expendEntity);


	//条数
	public int  Count();

	//新增
	public int add(ExpendEntity expendEntity);

	//单查询
	public ExpendEntity one(int xid);

	//修改
	public int upd(ExpendEntity expendEntity);

}
