package com.hu.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.hu.entity.EmpEntity;

public interface EmpDAO {
	/**
	 * 查询 新增 单查询 修改 删除 条数 分页查询 登陆判断
	 **/
	public List<EmpEntity> selectEmp();

	public int insertEmp(EmpEntity empEntity);

	public EmpEntity selectOne(int eid);

	public int updateEmp(EmpEntity empEntity);

	public int deleteEmp(int eid);

	public int Count();

	public int Counts();

	public List<EmpEntity> selectEmps(EmpEntity empEntity);

	public List<EmpEntity> selectEmpche(EmpEntity empEntity);

	public int selectLogin(EmpEntity empEntity);

	// 判读前段值是否存在
	public int selectName(EmpEntity empEntity);

	// 判断账号是否存在
	public int selectLoginName(String ename);

	// 批量删除
	public int deleteAll(@Param("eid") String[] eid);

	// 批量撤回
	public int delectAlls(@Param("eid") String[] eid);

	// 查询是否有有经理
	public int selectManager(EmpEntity empEntity);

	// 查询经办人
	public EmpEntity selecrtAgent(EmpEntity empEntity);

	// 查询部门是否有经理
	public int selectJingLi(EmpEntity empEntity);

	// 新增时部门如果有经理就把原来的岗位里的经理改为普通员工
	public int updateJingLi(EmpEntity empEntity);

	// 取消时候的新增
	public int insertJingLi(EmpEntity empEntity);


	//修改密码
	public int updLogin(EmpEntity empEntity);







}
