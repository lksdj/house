package com.hu.dao;

import java.util.List;

import com.hu.entity.SortEntity;

public interface SortDAO {
	/**
	 * 查询 新增 单查询 修改 删除 条数 分页查询
	 **/
	public List<SortEntity> selectSort();

	public int insertSort(SortEntity sortEntity);

	public SortEntity selectOne(int sid);

	public int updateSort(SortEntity sortEntity);

	public int deleteSort(int sid);

	public int Count();

	public List<SortEntity> selectSorts(SortEntity sortEntity);

	public int  selectsname(String sname);
}
