package com.hu.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hu.dao.OperationDAO;

import com.hu.entity.OperationEntity;
import com.hu.service.OperationService;

@Service
public class OperationImpl implements OperationService {

	@Autowired
	private OperationDAO operationDAO;

	// 查询退租
	@Override
	public List<OperationEntity> selectAll(OperationEntity operationEntity) {
		// TODO Auto-generated method stub
		int x = operationEntity.getBegin();
		int y = (x - 1) * operationEntity.getPages();
		operationEntity.setBegin(y);
		return operationDAO.selectAll(operationEntity);
	}

	// 条数
	@Override
	public int Count() {
		// TODO Auto-generated method stub
		return operationDAO.Count();
	}

	// 查看查询
	@Override
	public List<OperationEntity> selectLook(OperationEntity operationEntity) {
		// TODO Auto-generated method stub

		int x = operationEntity.getBegin();
		int y = (x - 1) * operationEntity.getPages();
		operationEntity.setBegin(y);
		List<OperationEntity> oper = operationDAO.selectLook(operationEntity);
		// 电费单价
		// 水费单价
		// 煤气单价
		System.out.println("oper" + oper.size());
		float electricmoney = oper.get(0).getElectricmoney();
		float watermoney = oper.get(0).getWatermoney();
		float gasmoney = oper.get(0).getGasmoney();
		System.out.println("electricmoney" + electricmoney);
		for (int i = 0; i < oper.size(); i++) {

			if (i - 1 >= 0) {
				float oelectricnumber = oper.get(i - 1).getOelectricnumber();// 上电刻度
				float owaternumber = oper.get(i - 1).getOwaternumber();// 上水刻度
				float ogesnumber = oper.get(i - 1).getOgesnumber();// 上煤气刻度

				float oelectricnumber1 = oper.get(i).getOelectricnumber();// 下电刻度
				float owaternumber1 = oper.get(i).getOwaternumber();// 下水刻度
				float ogesnumber1 = oper.get(i).getOgesnumber();// 下煤气刻度

				float electric = (oelectricnumber1 - oelectricnumber) * electricmoney;
				float water = (owaternumber1 - owaternumber) * watermoney;
				float gas = (ogesnumber1 - ogesnumber) * gasmoney;

				float total = electric + water + gas;

				oper.get(i).setElectric(electric);
				oper.get(i).setWater(water);
				oper.get(i).setGas(gas);
				oper.get(i).setTotal(total);
			}

			//
			// private float electric;//电费
			// private float water;//水费
			// private float gas;//煤气费
			// private float total;//合计
		}

		return oper;
	}

	// 查看条数
	@Override
	public int countLook(int rid) {
		// TODO Auto-generated method stub
		return operationDAO.countLook(rid);
	}

	// 拿到最后一条刻度
	@Override
	public OperationEntity selectOne(int hid) {
		// TODO Auto-generated method stub
		return operationDAO.selectOne(hid);
	}
	// 新增刻度

	@Override
	public int insertKe(OperationEntity operationEntity) {
		// TODO Auto-generated method stub
		return operationDAO.insertKe(operationEntity);
	}

	// 修改刻度house
	@Override
	public int updateHo(OperationEntity operationEntity) {
		// TODO Auto-generated method stub
		return operationDAO.updateHo(operationEntity);
	}

}
