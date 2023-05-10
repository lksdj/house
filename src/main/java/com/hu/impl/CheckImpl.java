package com.hu.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hu.dao.CheckDAO;
import com.hu.entity.CheckEntity;
import com.hu.entity.RegisterEntity;
import com.hu.entity.RepairEntity;
import com.hu.service.CheckService;

@Service
public class CheckImpl implements CheckService {

	@Autowired
	private CheckDAO checkDAO;

	// 查询退租表
	@Override
	public List<RegisterEntity> selectCheck(RegisterEntity registerEntity) {
		// TODO Auto-generated method stub
		int x = registerEntity.getBegin();
		int y = (x - 1) * registerEntity.getPages();
		registerEntity.setBegin(y);
		return checkDAO.selectCheck(registerEntity);
	}

	// 条数
	@Override
	public int Count(int rflag) {
		// TODO Auto-generated method stub
		return checkDAO.Count(rflag);
	}

	// 前提查出hid，根据房屋房号查出
	@Override
	public int selectHid(String hnumber) {
		// TODO Auto-generated method stub
		return checkDAO.selectHid(hnumber);
	}

	// 第一步退租 根据rid修改登记入住 rflag状态值
	@Override
	public int updateRflag(int rid) {
		// TODO Auto-generated method stub
		return checkDAO.updateRflag(rid);
	}

	// 第二步退租 根据hid修改房子的hflag状态值
	@Override
	public int updateHflag(CheckEntity checkEntity) {
		// TODO Auto-generated method stub
		return checkDAO.updateHflag(checkEntity);
	}

	// 第三步退租时房子要维修将房屋状态值改为2 正在维修中
	@Override
	public int updateHflagWei(int hid) {
		// TODO Auto-generated method stub
		return checkDAO.updateHflagWei(hid);
	}

	// 第四步在退租表里新增退租数据
	@Override
	public int insertTu(CheckEntity checkEntity) {
		// TODO Auto-generated method stub
		return checkDAO.insertTu(checkEntity);
	}

	// 获得kid
	@Override
	public int selectKid(CheckEntity checkEntity) {
		// TODO Auto-generated method stub
		return checkDAO.selectKid(checkEntity);
	}

	// 新增维修时就需要在登记报损里插一条数据
	@Override
	public int insertRepair(RepairEntity repairEntity) {
		// TODO Auto-generated method stub
		return checkDAO.insertRepair(repairEntity);
	}

}
