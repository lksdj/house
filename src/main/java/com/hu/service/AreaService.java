package com.hu.service;

import com.hu.entity.AreaEntity;

import java.util.List;

public interface AreaService {
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
