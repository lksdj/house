package com.hu.impl;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hu.dao.EmpDAO;
import com.hu.entity.EmpEntity;
import com.hu.service.EmpService;
@Service
public class EmpImpl implements EmpService{

	@Autowired
	private EmpDAO empDAO;
	@Override
	public List<EmpEntity> selectEmp() {
		// TODO Auto-generated method stub
		return empDAO.selectEmp();
	}

	@Override
	public int insertEmp(EmpEntity empEntity) {
		// TODO Auto-generated method stub
		return empDAO.insertEmp(empEntity);
	}

	@Override
	public EmpEntity selectOne(int eid) {
		// TODO Auto-generated method stub
		return empDAO.selectOne(eid);
	}

	@Override
	public int updateEmp(EmpEntity empEntity) {
		// TODO Auto-generated method stub
		return empDAO.updateEmp(empEntity);
	}

	@Override
	public int deleteEmp(int eid) {
		// TODO Auto-generated method stub
		return empDAO.deleteEmp(eid);
	}

	@Override
	public int Count() {
		// TODO Auto-generated method stub
		return empDAO.Count();
	}

	@Override
	public List<EmpEntity> selectEmps(EmpEntity empEntity) {
		// TODO Auto-generated method stub
		int x=empEntity.getBegin();
		int y=(x-1)*empEntity.getPages();
		empEntity.setBegin(y);
		return empDAO.selectEmps(empEntity);
	}

	@Override
	public int selectLogin(EmpEntity empEntity) {
		// TODO Auto-generated method stub
		return empDAO.selectLogin(empEntity);
	}

	//判读前段值是否存在
	@Override
	public int selectName(EmpEntity empEntity) {
		// TODO Auto-generated method stub
		return empDAO.selectName(empEntity);
	}

	@Override
	public int selectLoginName(String ename) {
		// TODO Auto-generated method stub
		return empDAO.selectLoginName(ename);
	}

	@Override
	public List<EmpEntity> selectEmpche(EmpEntity empEntity) {
		// TODO Auto-generated method stub
		int x=empEntity.getBegin();
		int y=(x-1)*empEntity.getPages();
		empEntity.setBegin(y);
		return empDAO.selectEmpche(empEntity);
	}

	@Override
	public int Counts() {
		// TODO Auto-generated method stub
		return empDAO.Counts();
	}

	@Override
	public int deleteAll(String[] eid) {
		// TODO Auto-generated method stub
		return empDAO.deleteAll(eid);
	}

	@Override
	public int delectAlls(String[] eid) {
		// TODO Auto-generated method stub
		return empDAO.delectAlls(eid);
	}

	@Override
	public int selectManager(EmpEntity empEntity) {
		// TODO Auto-generated method stub
		return empDAO.selectManager(empEntity);
	}

	//查询经办人
	@Override
	public EmpEntity selecrtAgent(EmpEntity empEntity) {
		// TODO Auto-generated method stub
		return empDAO.selecrtAgent(empEntity);
	}
	//查询部门是否有经理
	@Override
	public int selectJingLi(EmpEntity empEntity) {
		// TODO Auto-generated method stub
		return empDAO.selectJingLi(empEntity);
	}
	// 新增时部门如果有经理就把原来的岗位里的经理改为普通员工
	@Override
	public int updateJingLi(EmpEntity empEntity) {
		// TODO Auto-generated method stub
		return empDAO.updateJingLi(empEntity);
	}

	//取消时新增
	@Override
	public int insertJingLi(EmpEntity empEntity) {
		// TODO Auto-generated method stub
		return empDAO.insertJingLi(empEntity);
	}
	//修改密码
	@Override
	public int updLogin(EmpEntity empEntity) {
		// TODO Auto-generated method stub
		return empDAO.updLogin(empEntity);
	}

}
