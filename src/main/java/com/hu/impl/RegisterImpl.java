package com.hu.impl;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hu.dao.RegisterDAO;
import com.hu.entity.CusEntity;
import com.hu.entity.HouseEntity;
import com.hu.entity.OperationEntity;
import com.hu.entity.RegisterEntity;
import com.hu.service.RegisterService;

//登记入住
@Service
public class RegisterImpl implements RegisterService {
	@Autowired
	private RegisterDAO registerDAO;

	// 查询
	@Override
	public List<RegisterEntity> selectAll(RegisterEntity registerEntity) {
		// TODO Auto-generated method stub
		int x = registerEntity.getBegin();
		int y = (x - 1) * registerEntity.getPages();
		registerEntity.setBegin(y);
		return registerDAO.selectAll(registerEntity);
	}

	// 查询条数
	@Override
	public int Count() {
		// TODO Auto-generated method stub
		return registerDAO.Count();
	}

	// 新增
	@Override
	public int insertAll(RegisterEntity registerEntity) {
		// TODO Auto-generated method stub
		return registerDAO.insertAll(registerEntity);
	}

	// 修改
	@Override
	public int update(RegisterEntity registerEntity) {
		// TODO Auto-generated method stub
		return registerDAO.update(registerEntity);
	}

	// 客户姓名模拟百度
	@Override
	public List<CusEntity> selectCusBaiDu(CusEntity cusEntity) {
		// TODO Auto-generated method stub
		return registerDAO.selectCusBaiDu(cusEntity);
	}

	// 通过片区ID查到房屋类别
	@Override
	public List<RegisterEntity> LeiBie(int aid) {
		// TODO Auto-generated method stub
		return registerDAO.LeiBie(aid);
	}

	// 查出出租房屋
	@Override
	public List<RegisterEntity> ChuZUFangWu(RegisterEntity registerEntity) {
		// TODO Auto-generated method stub
		return registerDAO.ChuZUFangWu(registerEntity);
	}


	// 修改房屋状态显示
	@Override
	public int updateF(RegisterEntity registerEntity) {
		// TODO Auto-generated method stub
		return registerDAO.updateF(registerEntity);
	}

	// 修改单查询
	@Override
	public RegisterEntity selectOne(int rid) {
		// TODO Auto-generated method stub
		return registerDAO.selectOne(rid);
	}

	// 新增前查询rid
	@Override
	public int selectRid(RegisterEntity registerEntity) {
		// TODO Auto-generated method stub
		return registerDAO.selectRid(registerEntity);
	}

	// 新增时判断是否出租房屋已被出租
	@Override
	public int selectHflag(RegisterEntity registerEntity) {
		// TODO Auto-generated method stub
		return registerDAO.selectHflag(registerEntity);
	}

	// 新增登记收费
	@Override
	public int insertCharge(RegisterEntity registerEntity) {
		// TODO Auto-generated method stub
		return registerDAO.insertCharge(registerEntity);
	}
	// 新增拿到hid登记抄表拿到house表内费用值
	@Override
	public HouseEntity selectHid(int hid) {
		// TODO Auto-generated method stub
		return registerDAO.selectHid(hid);
	}
	//新增登记抄表
	@Override
	public int insertOperation(OperationEntity operationEntity) {
		// TODO Auto-generated method stub
		return registerDAO.insertOperation(operationEntity);
	}
	// 登记入住时判断金额是否小于房子的金额
	@Override
	public HouseEntity selectHouse(int hid) {
		// TODO Auto-generated method stub
		return registerDAO.selectHouse(hid);
	}
	//图形图
	@Override
	public List<RegisterEntity> pictorial() {
		// TODO Auto-generated method stub
		return registerDAO.pictorial();
	}


}
