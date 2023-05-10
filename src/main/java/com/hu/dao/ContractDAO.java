package com.hu.dao;

import java.util.List;

import com.hu.entity.ContractEntity;

public interface ContractDAO {

	// 查询
	public List<ContractEntity> all(ContractEntity contractEntity);

	// 条数
	public int count();

	// 上传
	public int add(ContractEntity contractEntity);

	// 下载
	public ContractEntity xz(int tid);
}
