package com.hu.service;

import com.hu.entity.ContractEntity;

import java.util.List;

public interface ContractService {

	// 查询
	public List<ContractEntity> all(ContractEntity contractEntity);

	// 条数
	public int count();

	// 上传
	public int add(ContractEntity contractEntity);

	// 下载
	public ContractEntity xz(int tid);
}
