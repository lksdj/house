package com.hu.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hu.dao.ExpendDAO;
import com.hu.entity.ExpendEntity;
import com.hu.service.ExpendService;
@Service
public class ExpendImpl implements ExpendService{

	@Autowired
	private ExpendDAO expendDAO;

	//查询
	@Override
	public List<ExpendEntity> all(ExpendEntity expendEntity) {
		// TODO Auto-generated method stub
		int x = expendEntity.getBegin();
		int y = (x - 1) * expendEntity.getPages();
		expendEntity.setBegin(y);
		return expendDAO.all(expendEntity);
	}
	//条数
	@Override
	public int Count() {
		// TODO Auto-generated method stub
		return expendDAO.Count();
	}
	//新增
	@Override
	public int add(ExpendEntity expendEntity) {
		// TODO Auto-generated method stub
		return expendDAO.add(expendEntity);
	}
	//单查询
	@Override
	public ExpendEntity one(int xid) {
		// TODO Auto-generated method stub
		return expendDAO.one(xid);
	}
	//修改
	@Override
	public int upd(ExpendEntity expendEntity) {
		// TODO Auto-generated method stub
		return expendDAO.upd(expendEntity);
	}





}
