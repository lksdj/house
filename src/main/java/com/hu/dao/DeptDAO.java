package com.hu.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import com.hu.entity.DeptEntity;

public interface DeptDAO {
	/**
	 * 查询 新增 单查询 修改 删除 条数 分页查询
	 **/
	public List<DeptEntity> selectDept();

	public int insertDept(DeptEntity deptEntity);

	public DeptEntity selectOne(int pid);

	public int updateDept(DeptEntity deptEntity);

	public int deleteDept(int pid);

	public int Count();

	public int Counts();

	public List<DeptEntity> selectDepts(DeptEntity deptEntity);

	public int selectPname(String pname);

	public int updateHf();

	// 批量删除
	public int deleteAll(@Param("pid") String[] pid);

	// 批量撤回
	public int delectAlls(@Param("pid") String[] pid);

	// 查询员工条数
	public int selectEmpCount(@Param("pid") String[] pid);

	// 撤销部门
	public List<DeptEntity> selectDeptss(DeptEntity deptEntity);

	// 部门撤回后员工的部门将改为管理规划部
	public int updateEmpPname(@Param("pid") String[] pid);
}
