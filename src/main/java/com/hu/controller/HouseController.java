package com.hu.controller;

import java.io.File;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import javax.servlet.http.HttpServletRequest;

import com.hu.util.MyUpdate;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import com.hu.entity.AreaEntity;
import com.hu.entity.HouseEntity;
import com.hu.entity.SortEntity;
import com.hu.service.AreaService;
import com.hu.service.HouseService;
import com.hu.service.SortService;
import net.sf.json.JSONObject;
import com.hu.util.MyEntity;
@Controller
@RequestMapping("house.do")
public class HouseController {

	@Autowired
	private SortService sortService;
	@Autowired
	private AreaService areaService;
	@Autowired
	private HouseService houseService;

	@RequestMapping(params = "method=index")
	public String index() {
		return "house/all";
	}


	// 房屋类别显示
	@RequestMapping(params = "method=sortAll")
	@ResponseBody
	public String sortAll() {
		List<SortEntity> selectSort = sortService.selectSort();
		 List<HashMap<String, Object>> child = new ArrayList<>(); //子菜单
	        //定义子菜单
	        for (SortEntity lease : selectSort) {
	            HashMap<String, Object> map = new HashMap<>();   //子菜单
	            map.put("id", lease.getSid());
	            map.put("title", lease.getSname());
	            child.add(map);
	        }
	        System.out.println(child);
	        //定义父菜单
	        JSONObject jsonObject = new JSONObject();
	        jsonObject.put("title", "房屋类型");
	        jsonObject.put("spread", "true");
	        jsonObject.put("children", child);
	        return jsonObject.toString();
	}

	//全查
	@RequestMapping(params = "method=allHid")
	@ResponseBody
	public String all(HouseEntity houseEntity) {
		List<HouseEntity> ar = houseService.selectHouse(houseEntity);
		System.out.println(houseEntity.getBegin()+"  "+houseEntity.getPages());
		int count = houseService.Count();
		System.out.println("条数："+count);
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("code", 0);
		jsonObject.put("count", count);
		jsonObject.put("data", ar);
		return jsonObject.toString();
	}

	
	
	
	// 查询每个都房屋类别
	@RequestMapping(params = "method=allbySid")
	@ResponseBody
	public String alls(HouseEntity houseEntity) {
		List<HouseEntity> ar = houseService.selectHouses(houseEntity);
		int count = houseService.Counts(houseEntity.getSid());
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("code", 0);
		jsonObject.put("count", count);
		jsonObject.put("data", ar);
		return jsonObject.toString();
	}

	
	// 房屋类别显示 片区显示下拉框
	@RequestMapping(params = "method=SortAreaAll")
	@ResponseBody
	public Map<String, Object> All() {
		List<SortEntity> selectSort = sortService.selectSort();
		List<AreaEntity> selectArea = areaService.selectArea();
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("selectSort", selectSort);
		map.put("selectArea", selectArea);
		return map;
	}

	// 新增
	@RequestMapping(params = "method=add")
	@ResponseBody
	public int add(HouseEntity houseEntity, HttpServletRequest request) {
		System.err.println("进入");
		// 第一步得到上传的文件的原名
		// 拿到第一张图片的名称
		String name1 = houseEntity.getHimg1().getOriginalFilename();
		// 拿到第二张图片的名称
		String name2 = houseEntity.getHimg2().getOriginalFilename();
		// 拿到第三张图片的名称
		String name3 = houseEntity.getHimg3().getOriginalFilename();
		String imgname = name1 + name2 + name3;
		System.out.println(imgname);
		// 改名
		String myNewName1 = getMyNewName(name1);
		String myNewName2 = getMyNewName(name2);
		String myNewName3 = getMyNewName(name3);
		try {
			// 第一张图片
			String realPath1 = request.getSession().getServletContext().getRealPath("/upload/" + myNewName1);
			File file1 = new File(realPath1);
			FileUtils.copyInputStreamToFile(houseEntity.getHimg1().getInputStream(), file1);
			// 第二张图片
			String realPath2 = request.getSession().getServletContext().getRealPath("/upload/" + myNewName2);
			File file2 = new File(realPath2);
			FileUtils.copyInputStreamToFile(houseEntity.getHimg2().getInputStream(), file2);
			// 第三张图片
			String realPath3 = request.getSession().getServletContext().getRealPath("/upload/" + myNewName3);
			File file3 = new File(realPath3);
			FileUtils.copyInputStreamToFile(houseEntity.getHimg3().getInputStream(), file3);

		} catch (Exception e) {
			// TODO: handle exception
		}

		String himg = myNewName1 + "," + myNewName2 + "," + myNewName3;
		houseEntity.setHimg(himg);
		int count = houseService.insertHouse(houseEntity);
		return count;
	}

	// @RequestMapping(params = "method=updone")
	// @ResponseBody// 查询修改 信息
	// public Map<String, Object> updone() {
	// List<SortEntity> selectSort = sortService.selectSort();
	// List<AreaEntity> selectArea = areaService.selectArea();
	// Map<String, Object> map = new HashMap<String, Object>();
	// map.put("selectSort", selectSort);
	// map.put("selectArea", selectArea);
	// return map;
	// }

	// 单查询
	@RequestMapping(params = "method=one")
	@ResponseBody
	public HouseEntity one(int hid) {
		HouseEntity selectOne = houseService.selectOne(hid);
		String himg = selectOne.getHimg();
		System.out.println("路径--》himg:" + himg);
		return selectOne;
	}

	// 修改
	@RequestMapping(params = "method=upd")
	@ResponseBody
	public int upd(HouseEntity houseEntity, HttpServletRequest request, int hid) {
		// 第一步获取前段的选中要上传的图片
		String name1 = houseEntity.getHimg1().getOriginalFilename();// 图片1
		String name2 = houseEntity.getHimg2().getOriginalFilename();// 图片2
		String name3 = houseEntity.getHimg3().getOriginalFilename();// 图片3
		// 第二步获取数据库原来的图片名称
		String himg = houseService.selectImg(hid);

		String split[] = himg.split(",");
		String names[] = { name1, name2, name3 };
		MultipartFile imgs[] = { houseEntity.getHimg1(), houseEntity.getHimg2(), houseEntity.getHimg3() };// 获取图片存储对象
		String r = "";
		if ((names[0] + names[1] + names[2]).length() > 0) {

			for (int i = 0; i < names.length; i++) {
				System.out.println(i);
				if (names[i].length() > 0) {
					String path1 = request.getSession().getServletContext().getRealPath("/upload/" + split[i]);// 拿到路径
					File file1 = new File(path1);// 创建
					file1.delete();// 调用file1的方法删除
					// 第三步改名字
					String newname = getMyNewName(names[i]);// 修改名字
					String path2 = request.getSession().getServletContext().getRealPath("/upload/" + newname);// 获取路径
					// 第四步上传
					MyUpdate.uploadAction(names[i],path2, imgs[i]);
					if (i == names.length - 1) {
						r += newname;
					} else {
						r += newname + ",";
					}
				} else {
					if (i == names.length - 1) {
						r += split[i];
					} else {
						r += split[i] + ",";
					}
				}
			}
		} else {
			r = himg;
		}
		houseEntity.setHimg(r);
		int count = houseService.updateHouse(houseEntity);
		System.out.println(count);
		return count;
	}

	// 修改名字方法
	private String getMyNewName(String oldname) {
		String result = "";
		// 获取文件后缀.jsp
		String suffix = oldname.substring(oldname.indexOf("."));
		String newname = UUID.randomUUID().toString();
		result = newname + suffix;
		return result;
	}

	@RequestMapping(params = "method=addname")
	@ResponseBody
	public int selectName(String hnumber) {
		int count = houseService.selectName(hnumber);
		return count;
	}

	@RequestMapping(params = "method=split")
	@ResponseBody
	public String[] split(int hid) {
		HouseEntity selectOne = houseService.selectOne(hid);
		String himg = selectOne.getHimg();
		String[] split = himg.split(",");
		return split;
	}

}