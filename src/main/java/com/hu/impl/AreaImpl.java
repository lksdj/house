package com.hu.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hu.dao.AreaDAO;
import com.hu.entity.AreaEntity;
import com.hu.service.AreaService;
@Service
public class AreaImpl implements AreaService{
	@Autowired
	private AreaDAO areaDAO;
	
	@Override
	public List<AreaEntity> selectArea() {
		// TODO Auto-generated method stub
		return areaDAO.selectArea();
	}

	@Override
	public int insertArea(AreaEntity areaEntity) {
		// TODO Auto-generated method stub
		return areaDAO.insertArea(areaEntity);
	}

	@Override
	public AreaEntity selectOne(int aid) {
		// TODO Auto-generated method stub
		return areaDAO.selectOne(aid);
	}

	@Override
	public int updateArea(AreaEntity areaEntity) {
		// TODO Auto-generated method stub
		return areaDAO.updateArea(areaEntity);
	}

	@Override
	public int deleteArea(int aid) {
		// TODO Auto-generated method stub
		return areaDAO.deleteArea(aid);
	}

	@Override
	public int Count() {
		// TODO Auto-generated method stub
		return areaDAO.Count();
	}

	@Override
	public List<AreaEntity> selectAreas(AreaEntity areaEntity) {
		// TODO Auto-generated method stub
		int x=areaEntity.getBegin();
		int y=(x-1)*areaEntity.getPages();
		areaEntity.setBegin(y);
		return areaDAO.selectAreas(areaEntity);
	}

	@Override
	public int selectAname(String aname) {
		// TODO Auto-generated method stub
		return areaDAO.selectAname(aname);
	}

}
