package com.hu.service;

import com.hu.entity.ChargeEntity;
import com.hu.entity.RegisterEntity;

import java.util.List;

public interface ChargeService {

	// 根据登记入住查询 且查到最大主键值 得到最大的下次收租日期
	public List<RegisterEntity> selectCharge(RegisterEntity registerEntity);

	// 根据登记入住查询 且查到最大主键值 得到最大的下次收租日期 //////// 查询条数
	public int countCharge();

	// 查询续租详细
	public List<ChargeEntity> selectAll(ChargeEntity chargeEntity);

	// 查询续租详细条数
	public int Count(int rid);


	//续租单查询
	public RegisterEntity selectOne(int rid);

	//新增续费
	public int insertCharge(ChargeEntity chargeEntity);

	//查询 到期收入查询
	public List<RegisterEntity> selectExpire(RegisterEntity registerEntity);

	//查询 到期收入查询条数，小弹框
	public int expireCount(RegisterEntity registerEntity);

}
