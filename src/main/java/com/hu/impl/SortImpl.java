package com.hu.impl;

import java.io.Serializable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hu.dao.SortDAO;
import com.hu.entity.SortEntity;
import com.hu.service.SortService;
@Service
public class SortImpl implements  SortService {

	@Autowired
	private SortDAO sortDAO;

	@Override
	public List<SortEntity> selectSort() {
		// TODO Auto-generated method stub
		return sortDAO.selectSort();
	}

	@Override
	public int insertSort(SortEntity sortEntity) {
		// TODO Auto-generated method stub
		return sortDAO.insertSort(sortEntity);
	}

	@Override
	public SortEntity selectOne(int sid) {
		// TODO Auto-generated method stub
		return sortDAO.selectOne(sid);
	}

	@Override
	public int updateSort(SortEntity sortEntity) {
		// TODO Auto-generated method stub
		return sortDAO.updateSort(sortEntity);
	}

	@Override
	public int deleteSort(int sid) {
		// TODO Auto-generated method stub
		return sortDAO.deleteSort(sid);
	}

	@Override
	public int Count() {
		// TODO Auto-generated method stub
		return sortDAO.Count();
	}

	@Override
	public List<SortEntity> selectSorts(SortEntity sortEntity) {
		// TODO Auto-generated method stub
		int x=sortEntity.getBegin();
		int y=(x-1)*sortEntity.getPages();
		sortEntity.setBegin(y);
		return sortDAO.selectSorts(sortEntity);
	}

	@Override
	public int selectsname(String sname) {
		// TODO Auto-generated method stub
		return sortDAO.selectsname(sname);
	}

}
