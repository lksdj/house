package com.hu.dao;

import java.util.List;

import com.hu.entity.CheckEntity;
import com.hu.entity.RegisterEntity;
import com.hu.entity.RepairEntity;

public interface CheckDAO {
	// 查询退租表
	public List<RegisterEntity> selectCheck(RegisterEntity registerEntity);

	// 查询条数
	public int Count(int rflag);

	//前提查出hid，根据房屋房号查出
	public int selectHid(String hnumber);

	// 第一步退租 根据rid修改登记入住 rflag状态值
	public int updateRflag(int rid);

	// 第二步退租 根据hid修改房子的hflag状态值
	public int updateHflag(CheckEntity checkEntity);

	//第三步退租时房子要维修将房屋状态值改为2 正在维修中
	public int updateHflagWei(int hid);


	//第四步在退租表里新增退租数据
	public int insertTu(CheckEntity checkEntity);

	//获得kid
	public int selectKid(CheckEntity checkEntity);

	//新增维修时就需要在登记报损里插一条数据
	public int insertRepair(RepairEntity repairEntity);


}
