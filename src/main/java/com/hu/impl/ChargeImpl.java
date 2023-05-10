package com.hu.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hu.dao.ChargeDAO;
import com.hu.entity.ChargeEntity;
import com.hu.entity.RegisterEntity;
import com.hu.service.ChargeService;

@Service
public class ChargeImpl implements ChargeService {

	@Autowired
	private ChargeDAO chargeDAO;

	// 查询续租详细
	@Override
	public List<ChargeEntity> selectAll(ChargeEntity chargeEntity) {
		// TODO Auto-generated method stub
		int x = chargeEntity.getBegin();
		int y = (x - 1) * chargeEntity.getPages();
		chargeEntity.setBegin(y);
		return chargeDAO.selectAll(chargeEntity);
	}

	// 查询续租详细条数
	@Override
	public int Count(int rid) {
		// TODO Auto-generated method stub
		return chargeDAO.Count(rid);
	}
	// 根据登记入住查询 且查到最大主键值 得到最大的下次收租日期
	@Override
	public List<RegisterEntity> selectCharge(RegisterEntity registerEntity) {
		// TODO Auto-generated method stub
		int x = registerEntity.getBegin();
		int y = (x - 1) * registerEntity.getPages();
		registerEntity.setBegin(y);
		return chargeDAO.selectCharge(registerEntity);
	}
	// 根据登记入住查询 且查到最大主键值 得到最大的下次收租日期///条数
	@Override
	public int countCharge() {
		// TODO Auto-generated method stub
		return chargeDAO.countCharge();
	}
	//续租单查询
	@Override
	public RegisterEntity selectOne(int rid) {
		// TODO Auto-generated method stub
		return chargeDAO.selectOne(rid);
	}

	//新增续费
	@Override
	public int insertCharge(ChargeEntity chargeEntity) {
		// TODO Auto-generated method stub
		return chargeDAO.insertCharge(chargeEntity);
	}
	//查询到期收入查询
	@Override
	public List<RegisterEntity> selectExpire(RegisterEntity registerEntity) {
		// TODO Auto-generated method stub
		int x = registerEntity.getBegin();
		int y = (x - 1) * registerEntity.getPages();
		registerEntity.setBegin(y);
		return chargeDAO.selectExpire(registerEntity);
	}
	//查询 到期收入查询条数
	@Override
	public int expireCount(RegisterEntity registerEntity) {
		// TODO Auto-generated method stub
		return chargeDAO.expireCount(registerEntity);
	}

}
