package com.hu.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hu.dao.RepairDAO;
import com.hu.entity.RepairEntity;
import com.hu.service.RepairService;
@Service
public class RepairImpl implements RepairService{
	@Autowired
	private RepairDAO repairDAO;
	//全查
	@Override
	public List<RepairEntity> selectAll(RepairEntity repairEntity) {
		// TODO Auto-generated method stub
		int x=repairEntity.getBegin();
		int y=(x-1)*repairEntity.getPages();
		repairEntity.setBegin(y);
		return repairDAO.selectAll(repairEntity);
	}
	//条数
	@Override
	public int Count() {
		// TODO Auto-generated method stub
		return repairDAO.Count();
	}
	//修改报损的备注
	@Override
	public int updateQremark(RepairEntity repairEntity) {
		// TODO Auto-generated method stub
		return repairDAO.updateQremark(repairEntity);
	}

}
