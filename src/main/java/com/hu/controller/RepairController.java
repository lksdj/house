package com.hu.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hu.entity.CheckEntity;
import com.hu.entity.RepairEntity;
import com.hu.service.CheckService;
import com.hu.service.RepairService;
import net.sf.json.JSONObject;

@Controller
@RequestMapping("repair.do")
public class RepairController {
	@Autowired
	private RepairService repairService;

	@Autowired
	private CheckService checkService;

	// 进入repair页面
	@RequestMapping(params="method=index")
	public String index1() {
		return "repair/all";
	}

	// 全查
	@RequestMapping(params = "method=all")
	@ResponseBody
	public String all(RepairEntity repairEntity) {
		List<RepairEntity> ar = repairService.selectAll(repairEntity);
		int count = repairService.Count();
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("code", 0);
		jsonObject.put("count", count);
		jsonObject.put("data", ar);
		return jsonObject.toString();
	}


	@RequestMapping(params = "method=upd")
	@ResponseBody
	public int  upd(RepairEntity repairEntity,CheckEntity checkEntity ) {
		checkEntity.setHid(repairEntity.getHid());
		checkEntity.setHflag(repairEntity.getHflag());

		checkService.updateHflag(checkEntity);//改房屋状态

		repairService.updateQremark(repairEntity);//改备注

		return 1;
	}

}
