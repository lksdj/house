package com.hu.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hu.dao.DeptDAO;
import com.hu.entity.DeptEntity;
import com.hu.entity.EmpEntity;
import com.hu.service.DeptService;

@Service
public class DeptImpl implements DeptService {

	@Autowired
	private DeptDAO deptDAO;

	@Override
	public List<DeptEntity> selectDept() {
		// TODO Auto-generated method stub
		return deptDAO.selectDept();
	}

	@Override
	public int insertDept(DeptEntity deptEntity) {
		// TODO Auto-generated method stub
		return deptDAO.insertDept(deptEntity);
	}

	@Override
	public DeptEntity selectOne(int pid) {
		// TODO Auto-generated method stub
		return deptDAO.selectOne(pid);
	}

	@Override
	public int updateDept(DeptEntity deptEntity) {
		// TODO Auto-generated method stub
		return deptDAO.updateDept(deptEntity);
	}

	@Override
	public int deleteDept(int pid) {
		// TODO Auto-generated method stub
		return deptDAO.deleteDept(pid);
	}

	// 分页查询1
	@Override
	public List<DeptEntity> selectDepts(DeptEntity deptEntity) {
		// TODO Auto-generated method stub
		int x = deptEntity.getBegin();
		int y = (x - 1) * deptEntity.getPages();
		deptEntity.setBegin(y);
		return deptDAO.selectDepts(deptEntity);
	}

	// 条数1
	@Override
	public int Count() {
		// TODO Auto-generated method stub
		return deptDAO.Count();
	}

	@Override
	public int selectPname(String pname) {
		// TODO Auto-generated method stub
		return deptDAO.selectPname(pname);
	}

	@Override
	public int updateHf() {
		// TODO Auto-generated method stub
		return deptDAO.updateHf();
	}

	// 批量删除
	@Override
	public int deleteAll(String[] pid) {
		// TODO Auto-generated method stub
		return deptDAO.deleteAll(pid);
	}

	// 批量恢复
	@Override
	public int delectAlls(String[] pid) {
		// TODO Auto-generated method stub
		return deptDAO.delectAlls(pid);
	}
	//查询2
	@Override
	public List<DeptEntity> selectDeptss(DeptEntity deptEntity) {
		// TODO Auto-generated method stub
		int x = deptEntity.getBegin();
		int y = (x - 1) * deptEntity.getPages();
		deptEntity.setBegin(y);
		return deptDAO.selectDeptss(deptEntity);
	}

	// 条数2
	@Override
	public int Counts() {
		// TODO Auto-generated method stub
		return deptDAO.Counts();
	}

	// 员工条数
	@Override
	public int selectEmpCount(String[] pid) {
		// TODO Auto-generated method stub
		return deptDAO.selectEmpCount(pid);
	}

	// 部门撤回后员工的部门将改为管理规划部
	@Override
	public int updateEmpPname(String[] pid) {
		// TODO Auto-generated method stub
		return deptDAO.updateEmpPname(pid);
	}

}
