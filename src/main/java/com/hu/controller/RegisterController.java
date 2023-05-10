package com.hu.controller;
import java.io.File;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

import com.hu.util.MyUpdate;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hu.entity.CusEntity;
import com.hu.entity.HouseEntity;
import com.hu.entity.OperationEntity;
import com.hu.entity.RegisterEntity;
import com.hu.service.RegisterService;

import net.sf.json.JSONObject;
//登记入住
@Controller
@RequestMapping("register.do")
public class RegisterController {

	@Autowired
	private RegisterService registerService;

	@RequestMapping(params = "method=index")
	public String index1() {
		return "register/all";
	}

	@RequestMapping(params = "method=alls")
	public String index2() {
		return "register/alls";
	}

	// 查询
	@RequestMapping(params = "method=all")
	@ResponseBody
	public String all(RegisterEntity registerEntity, HttpServletRequest request) {
		Object eid1 = request.getSession().getAttribute("eid");
		int eid = Integer.parseInt(eid1.toString());
		registerEntity.setEid(eid);
		List<RegisterEntity> ar = registerService.selectAll(registerEntity);
		int count = registerService.Count();
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("code", 0);
		jsonObject.put("count", count);
		jsonObject.put("data", ar);
		return jsonObject.toString();
	}

	// 模糊查询
	@RequestMapping(params = "method=like")
	@ResponseBody
	public String like(RegisterEntity registerEntity, HttpServletRequest request) {
		Object eid1 = request.getSession().getAttribute("eid");
		int eid = Integer.parseInt(eid1.toString());
		registerEntity.setEid(eid);
		List<RegisterEntity> ar = registerService.selectAll(registerEntity);
		int count = registerService.Count();
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("code", 0);
		jsonObject.put("count", count);
		jsonObject.put("data", ar);
		return jsonObject.toString();
	}

	// 查询客户姓名模拟百度
	@RequestMapping(params = "method=BaiDu")
	@ResponseBody
	public List<CusEntity> selectBaiDu(CusEntity cusEntity, HttpServletRequest request) {
		Object eid1 = request.getSession().getAttribute("eid");
		int eid = Integer.parseInt(eid1.toString());
		cusEntity.setEid(eid);
		List<CusEntity> selectCusBaiDu = registerService.selectCusBaiDu(cusEntity);
		return selectCusBaiDu;
	}

	// 通过片区id查询房屋类别
	// @RequestMapping(params="method=LeiBie")
	// @ResponseBody
	// public List<RegisterEntity> LeiBie(int aid){
	// List<RegisterEntity> leiBie = registerService.LeiBie(aid);
	// return leiBie;
	// }
	// 得到出租房屋下拉框
	@RequestMapping(params = "method=ChuZUFangWu")
	@ResponseBody
	public List<RegisterEntity> ChuZUFangWu(RegisterEntity registerEntity) {
		List<RegisterEntity> chuZUFangWu = registerService.ChuZUFangWu(registerEntity);
		return chuZUFangWu;
	}

	// 新增时判断房屋出租是否已出租
	@RequestMapping(params = "method=selectHflag")
	@ResponseBody
	public int SelectHflag(RegisterEntity registerEntity) {
		int count = registerService.selectHflag(registerEntity);
		return count;
	}

	// 登记入住时判断金额是否小于房子的金额
	@RequestMapping(params = "method=selectHouse")
	@ResponseBody
	public HouseEntity selectHouse(int hid) {
		HouseEntity selectHouse = registerService.selectHouse(hid);
		return selectHouse;
	}
	// 新增
	@RequestMapping(params = "method=add")
	@ResponseBody
	public int add(RegisterEntity registerEntity, OperationEntity operationEntity, HttpServletRequest request) {
		Object eid1 = request.getSession().getAttribute("eid");
		int eid = Integer.parseInt(eid1.toString());
		registerEntity.setEid(eid);// 拿到登陆的是谁eid

		String name1 = registerEntity.getHimg1().getOriginalFilename();// 第一步得到上传的文件的原名

		String myNewName1 = MyUpdate.getRename(name1);// 改名
		try {
			// 第一张图片
			String realPath1 = request.getSession().getServletContext().getRealPath("/upload/" + myNewName1);
			File file1 = new File(realPath1);
			FileUtils.copyInputStreamToFile(registerEntity.getHimg1().getInputStream(), file1);// 新增图片放到服务器
		} catch (Exception e) {
			// TODO: handle exception
		}
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");// 当前时间
		Date date = new Date(System.currentTimeMillis());// 当前时间
		registerEntity.setRdate(formatter.format(date));// 时间放入对象
		registerEntity.setTimg(myNewName1);
		int count = registerService.insertAll(registerEntity);

		// 查出rid插入登陆收费
		int rid = registerService.selectRid(registerEntity);
		System.out.println("rid:" + rid);
		registerEntity.setRid(rid);
		// 修改房屋状态显示
		registerService.updateF(registerEntity);
		// 新增登记收费
		registerService.insertCharge(registerEntity);

		// 拿到hid查出house表中费用值
		HouseEntity houseEntity = registerService.selectHid(registerEntity.getHid());
		// 新增登记抄表
		operationEntity.setHid(registerEntity.getHid());
		operationEntity.setOelectricnumber((float) houseEntity.getElectricnumber());
		operationEntity.setOwaternumber((float) houseEntity.getWaternumber());
		operationEntity.setOgesnumber((float) houseEntity.getGesnumber());
		operationEntity.setOtime(formatter.format(date));
		operationEntity.setEid(eid);
		registerService.insertOperation(operationEntity);
		return count;
	}

	// 修改单查询
	@RequestMapping(params = "method=one")
	@ResponseBody
	public RegisterEntity selectOne(int rid) {
		RegisterEntity selectOne = registerService.selectOne(rid);
		return selectOne;
	}

	// 修改
	@RequestMapping(params = "method=upd")
	@ResponseBody
	public int upd(RegisterEntity registerEntity, HttpServletRequest request) {
		// 查询图片
		RegisterEntity selectOne = registerService.selectOne(registerEntity.getRid());
		System.out.println(selectOne.getTimg());
		String path1 = request.getSession().getServletContext().getRealPath("/upload/" + selectOne.getTimg());// 拿到路径
		File file = new File(path1);// 创建
		file.delete();// 调用file的方法删除
		// 第一步获取前段的选中要上传的图片
		String name1 = registerEntity.getHimg1().getOriginalFilename();
		String myNewName1 = MyUpdate.getRename(name1);// 改名
		try {
			// 第一张图片
			String realPath1 = request.getSession().getServletContext().getRealPath("/upload/" + myNewName1);
			File file1 = new File(realPath1);
			FileUtils.copyInputStreamToFile(registerEntity.getHimg1().getInputStream(), file1);
		} catch (Exception e) {
			// TODO: handle exception
		}
		registerEntity.setTimg(myNewName1);
		int count = registerService.update(registerEntity);
		return count;
	}

	// 修改操作 改变房屋状态
	@RequestMapping(params = "method=updFlag")
	@ResponseBody
	public int updFlag(RegisterEntity registerEntity) {
		int count = registerService.updateF(registerEntity);
		return count;
	}

}