package com.hu.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hu.dao.IncomeDAO;
import com.hu.entity.IncomeEntity;
import com.hu.service.IncomeService;
@Service
public class IncomeImpl implements IncomeService {
	@Autowired
	private IncomeDAO incomeDAO;
	// 查询
	@Override
	public List<IncomeEntity> selectAll(IncomeEntity incomeEntity) {
		// TODO Auto-generated method stub
		int x = incomeEntity.getBegin();
		int y = (x - 1) * incomeEntity.getPages();
		incomeEntity.setBegin(y);
		return incomeDAO.selectAll(incomeEntity);
	}
	// 条数
	@Override
	public int Count() {
		// TODO Auto-generated method stub
		return incomeDAO.Count();
	}

	// 新增
	@Override
	public int add(IncomeEntity incomeEntity) {
		// TODO Auto-generated method stub
		return incomeDAO.add(incomeEntity);
	}

	// 修改
	@Override
	public int upd(IncomeEntity incomeEntity) {
		// TODO Auto-generated method stub
		return incomeDAO.upd(incomeEntity);
	}
	// 单查询
	@Override
	public IncomeEntity one(int nid) {
		// TODO Auto-generated method stub
		return incomeDAO.one(nid);
	}

}
