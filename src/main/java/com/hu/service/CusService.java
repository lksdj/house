package com.hu.service;

import com.hu.entity.CusEntity;

import java.util.List;

public interface CusService {

	// 分页查询
	public List<CusEntity> selectAlls(CusEntity cusEntity);

	// 条数
	public int Count();

	// 新增
	public int insertCus(CusEntity cusEntity);

	// 判断是否重复
	public int selectRepetition(CusEntity cusEntity);

	// 修改单查询
	public CusEntity selectOne(int cid);

	// 修改
	public int updateCus(CusEntity cusEntity);
}
