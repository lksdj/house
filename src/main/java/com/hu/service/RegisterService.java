package com.hu.service;
//登记入住

import com.hu.entity.CusEntity;
import com.hu.entity.HouseEntity;
import com.hu.entity.OperationEntity;
import com.hu.entity.RegisterEntity;

import java.util.List;

public interface RegisterService {

	// 分页查询
	public List<RegisterEntity> selectAll(RegisterEntity registerEntity);

	// 查询条数
	public int Count();

	// 新增
	public int insertAll(RegisterEntity registerEntity);

	// 修改
	public int update(RegisterEntity registerEntity);

	// 客户姓名模拟百度
	public List<CusEntity> selectCusBaiDu(CusEntity cusEntity);

	// 通过片区查到房屋类型
	public List<RegisterEntity> LeiBie(int aid);

	// 查出出租房屋
	public List<RegisterEntity> ChuZUFangWu(RegisterEntity registerEntity);

	// 新增前查询rid
	public int selectRid(RegisterEntity registerEntity);

	// 新增时判断是否出租房屋已被出租
	public int selectHflag(RegisterEntity registerEntity);

	// 登记入住时判断金额是否小于房子的金额
	public HouseEntity selectHouse(int hid);

	// 新增登记收费
	public int insertCharge(RegisterEntity registerEntity);

	// 新增拿到hid登记抄表拿到house表内费用值
	public HouseEntity selectHid(int hid);

	// 新增登记抄表
	public int insertOperation(OperationEntity operationEntity);

	// 修改房屋状态显示
	public int updateF(RegisterEntity registerEntity);

	// 修改单查询
	public RegisterEntity selectOne(int rid);

	//图形图
	public List<RegisterEntity> pictorial();



}
