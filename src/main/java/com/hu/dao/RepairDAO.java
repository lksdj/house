package com.hu.dao;

import java.util.List;

import com.hu.entity.RepairEntity;

public interface RepairDAO {

	// 全查
	public List<RepairEntity> selectAll(RepairEntity repairEntity);

	// 条数
	public int Count();


	//修改报损的备注
	public int updateQremark(RepairEntity repairEntity);
}
