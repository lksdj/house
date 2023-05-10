package com.hu.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hu.dao.HouseDAO;
import com.hu.entity.HouseEntity;
import com.hu.service.HouseService;
@Service
public class HouseImpl implements HouseService {

	@Autowired
	private HouseDAO houseDAO;
	@Override
	public List<HouseEntity> selectHouse(HouseEntity houseEntity) {
		// TODO Auto-generated method stub
		int x=houseEntity.getBegin();
		int y=(x-1)*houseEntity.getPages();
		houseEntity.setBegin(y);
		return houseDAO.selectHouse(houseEntity);
	}

	@Override
	public int insertHouse(HouseEntity houseEntity) {
		// TODO Auto-generated method stub
		return houseDAO.insertHouse(houseEntity);
	}

	@Override
	public HouseEntity selectOne(int hid) {
		// TODO Auto-generated method stub
		return houseDAO.selectOne(hid);
	}

	@Override
	public int updateHouse(HouseEntity houseEntity) {
		// TODO Auto-generated method stub

		return houseDAO.updateHouse(houseEntity);
	}

	@Override
	public int deleteHouse(int hid) {
		// TODO Auto-generated method stub
		return houseDAO.deleteHouse(hid);
	}

	@Override
	public int Counts(int sid) {
		// TODO Auto-generated method stub
		return houseDAO.Counts(sid);
	}

	@Override
	public List<HouseEntity> selectHouses(HouseEntity houseEntity) {
		// TODO Auto-generated method stub
		int x=houseEntity.getBegin();
		int y=(x-1)*houseEntity.getPages();
		houseEntity.setBegin(y);
		return houseDAO.selectHouses(houseEntity);
	}

	@Override
	public String selectImg(int hid) {
		// TODO Auto-generated method stub
		return houseDAO.selectImg(hid);
	}

	@Override
	public int selectName(String hnumber) {
		// TODO Auto-generated method stub
		return houseDAO.selectName(hnumber);
	}

	@Override
	public int Count() {
		// TODO Auto-generated method stub
		return houseDAO.Count();
	}

}
