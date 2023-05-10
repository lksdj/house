package com.hu.dao;

import java.util.List;

import com.hu.entity.HouseEntity;
import com.hu.entity.OperationEntity;

public interface OperationDAO {

	// 查询草表
	public List<OperationEntity> selectAll(OperationEntity operationEntity);

	// 条数
	public int Count();

	//查看
	public  List<OperationEntity> selectLook(OperationEntity operationEntity);

	//查看条数
	public int countLook(int rid);

	//拿到最后一条刻度
	public OperationEntity selectOne(int hid);

	//新增刻度
	public int insertKe(OperationEntity operationEntity);

	//修改刻度house
	public  int updateHo(OperationEntity operationEntity);

}
