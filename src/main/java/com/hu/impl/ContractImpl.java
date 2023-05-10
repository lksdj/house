package com.hu.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hu.dao.ContractDAO;
import com.hu.entity.ContractEntity;
import com.hu.service.ContractService;
@Service
public class ContractImpl implements ContractService{
	@Autowired
	private ContractDAO contractDAO;
	//查询
	@Override
	public List<ContractEntity> all(ContractEntity contractEntity) {
		// TODO Auto-generated method stub
		int x = contractEntity.getBegin();
		int y = (x - 1) * contractEntity.getPages();
		contractEntity.setBegin(y);
		return contractDAO.all(contractEntity);
	}
	//条数
	@Override
	public int count() {
		// TODO Auto-generated method stub
		return contractDAO.count();
	}
	//上传
	@Override
	public int add(ContractEntity contractEntity) {
		// TODO Auto-generated method stub
		return contractDAO.add(contractEntity);
	}
	//下载
	@Override
	public ContractEntity xz(int tid) {
		// TODO Auto-generated method stub
		return contractDAO.xz(tid);
	}



}
