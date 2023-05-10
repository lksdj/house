package com.hu.dao;

import java.util.List;

import com.hu.entity.AreaEntity;

public interface AreaDAO {
	/**
	 * 查询 新增 单查询 修改 删除 条数 分页查询
	 **/

	public List<AreaEntity> selectArea();

	public int insertArea(AreaEntity areaEntity);

	public AreaEntity selectOne(int aid);

	public int updateArea(AreaEntity areaEntity);

	public int deleteArea(int aid);

	public int Count();

	public List<AreaEntity> selectAreas(AreaEntity areaEntity);
	
	public int selectAname(String aname);
}
