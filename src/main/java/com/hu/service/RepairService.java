package com.hu.service;

import com.hu.entity.RepairEntity;

import java.util.List;

public interface RepairService {

	// 全查
	public List<RepairEntity> selectAll(RepairEntity repairEntity);

	// 条数
	public int Count();


	//修改报损的备注
	public int updateQremark(RepairEntity repairEntity);
}
