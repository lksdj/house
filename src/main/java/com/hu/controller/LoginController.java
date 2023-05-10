package com.hu.controller;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.hu.entity.EmpEntity;
import com.hu.service.EmpService;

@Controller
@RequestMapping("login.do")
public class LoginController {

	@Autowired
	private EmpService empService;

	// @RequestMapping(params="method=ru")
	// public String ru() {
	// return "main";
	// }

	@RequestMapping(params = "method=index")
	public String index() {
		return "main/welcome";
	}

	@RequestMapping(params = "method=index1")
	public String index1() {
		return "main/login";
	}

	// 只判断账号是否在数据库里有
	@RequestMapping(params = "method=ename")
	@ResponseBody
	public int ename(String ename) {
		int count = empService.selectLoginName(ename);

		return count;
	}

	// 判断登陆账号和密码同时进行
	@RequestMapping(params = "method=login")
	@ResponseBody
	public int login(EmpEntity empEntity, HttpServletRequest request) {
		EmpEntity selecrtAgent = empService.selecrtAgent(empEntity);
		int count = empService.selectLogin(empEntity);
		if (count > 0) {
			// 保存到了session中
			request.getSession().setAttribute("ename", selecrtAgent.getEname());
			request.getSession().setAttribute("erealname", selecrtAgent.getErealname());
			request.getSession().setAttribute("eid", selecrtAgent.getEid());
			request.getSession().setAttribute("jname", selecrtAgent.getJname());
			request.getSession().setAttribute("psw",selecrtAgent.getEpsw());
			request.getSession().setAttribute("count", count);
			return count;
		} else {
			return 0;
		}
	}
	//修改密码
	@RequestMapping(params = "method=upd")
	@ResponseBody
	public int upd(EmpEntity empEntity, HttpServletRequest request) {
		int count = empService.updLogin(empEntity);
		return count;
	}



}
