package com.hu.dao;

import java.util.List;

import com.hu.entity.ExpendEntity;

public interface ExpendDAO {


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
