package com.hu.controller;

import java.io.UnsupportedEncodingException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hu.entity.CheckEntity;
import com.hu.entity.RegisterEntity;
import com.hu.entity.RepairEntity;
import com.hu.service.CheckService;

import net.sf.json.JSONObject;

@Controller
@RequestMapping("check.do")
public class CheckController {

	@Autowired
	private CheckService checkService;

	@RequestMapping(params = "method=index")
	public String index1() {
		return "check/all";
	}

	@RequestMapping(params = "method=all")
	@ResponseBody
	public String all(RegisterEntity registerEntity) {
		List<RegisterEntity> ar = checkService.selectCheck(registerEntity);
		int count = checkService.Count(registerEntity.getRflag());
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("code", 0);
		jsonObject.put("count", count);
		jsonObject.put("data", ar);
		return jsonObject.toString();

	}

	@RequestMapping(params = "method=update")
	@ResponseBody
	public int update(CheckEntity checkEntity,RepairEntity repairEntity) throws UnsupportedEncodingException {
		String hnumber = new String(checkEntity.getHnumber().getBytes("ISO8859_1"),"utf-8");
		System.out.println(hnumber);
		int hid = checkService.selectHid(hnumber);
		System.out.println("hid:"+hid);
		System.out.println("hflag:"+checkEntity.getHflag());
		checkEntity.setHid(hid);
		System.out.println("rid:"+checkEntity.getRid()+"eid:"+checkEntity.getEid());
		checkService.updateRflag(checkEntity.getRid());//修改入住rflag状态值0
		checkService.updateHflag(checkEntity);//修改房屋hflag状态值0/1/2
		checkService.insertTu(checkEntity);//新增退租

		if(checkEntity.getHflag()==2) {//2维修状态值
			int kid = checkService.selectKid(checkEntity);//查出kid
			repairEntity.setHid(hid);//hid
			repairEntity.setKid(kid);//kid
			repairEntity.setQtime(checkEntity.getKtime());//qtime：时间
			repairEntity.setQremark(checkEntity.getKremark());//qremark：备注
			repairEntity.setEid(checkEntity.getEid());//eid：经办人
			checkService.insertRepair(repairEntity);//新增报损表
		}

		return 1;
	}





}
