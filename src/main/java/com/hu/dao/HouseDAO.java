package com.hu.dao;

import java.util.List;

import com.hu.entity.HouseEntity;

public interface HouseDAO {
	public List<HouseEntity> selectHouse(HouseEntity houseEntity);

	public int insertHouse(HouseEntity houseEntity);

	public HouseEntity selectOne(int hid);

	public int updateHouse(HouseEntity houseEntity);

	public int deleteHouse(int hid);

	public int Counts(int sid);

	public int Count();

	public List<HouseEntity> selectHouses(HouseEntity houseEntity);

	public String selectImg(int hid);//查询图片路径

	public int selectName(String hnumber);//房子房号
}
