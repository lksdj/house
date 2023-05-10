package com.hu.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hu.dao.CusDAO;
import com.hu.entity.CusEntity;
import com.hu.service.CusService;

@Service
public class CusImpl implements CusService {

	@Autowired
	private CusDAO cusDAO;
	// 分页查询
	@Override
	public List<CusEntity> selectAlls(CusEntity cusEntity) {
		// TODO Auto-generated method stub
		int x=cusEntity.getBegin();
		int y=(x-1)*cusEntity.getPages();
		cusEntity.setBegin(y);
		return cusDAO.selectAlls(cusEntity);
	}

	// 条数
	@Override
	public int Count() {
		// TODO Auto-generated method stub
		return cusDAO.Count();
	}

	//新增客户
	@Override
	public int insertCus(CusEntity cusEntity) {
		// TODO Auto-generated method stub
		return cusDAO.insertCus(cusEntity);
	}
	//查询判断是否有重复
	@Override
	public int selectRepetition(CusEntity cusEntity) {
		// TODO Auto-generated method stub
		return cusDAO.selectRepetition(cusEntity);
	}

	//修改单查询
	@Override
	public CusEntity selectOne(int cid) {
		// TODO Auto-generated method stub
		return cusDAO.selectOne(cid);
	}
	//修改
	@Override
	public int updateCus(CusEntity cusEntity) {
		// TODO Auto-generated method stub
		return cusDAO.updateCus(cusEntity);
	}

}
