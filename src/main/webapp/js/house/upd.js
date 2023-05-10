var $;
var form;
var path="";
var a=0;
var b=0;
var hid=0;
var sids=0;
var aids=0;
var flag=0;
var reg=/^[+]{0,1}[1-9]\d*$|^[+]{0,1}(0\.\d*[1-9])$|^[+]{0,1}([1-9]\d*\.\d*[1-9])$/;//必须为正数
var reg1=/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;//必须为0和正数
layui.use(function (){
	$ = layui.$;
	form=layui.form;
	hid=$("#hid").val();
	path=$("#path").val();
	getOne();
	getSort();
	getUpd();
	getname();
	
	//hnumberBlur();
	haddressBlur();
	hareaBlur();
	hmoneyBlur();
	networkmoneyBlur();
	electricmoneyBlur();
	watermoneyBlur();
	gasmoneyBlur();
	electricnumberBlur();
	waternumberBlur();
	gesnumberBlur();
	gasmoneyBlur();
	hnameBlur();
	getimg();//显示图片
});

function getOne(){
	$.ajax({
		url:path+"house.do?method=one",
		data:{"hid":hid},
		dataType:'json',
		type:'post',
		success:function(my){
			 sids=my.sid;
			 aids=my.aid;
			 $("#sname").val(my.sname);
			 $("#aname").val(my.aname);
			 $("#haddress").val(my.haddress);
			 $("#hnumber").val(my.hnumber);
			 $("#htype").val(my.htype);//户型
			 form.render("select");
			 $("#direction").val(my.direction);
			 form.render("select");
			 $("#harea").val(my.harea);//朝向
			 $("#hmoney").val(my.hmoney);
			 $("#networkmoney").val(my.networkmoney);
			 $("#electricmoney").val(my.electricmoney);
			 $("#watermoney").val(my.watermoney);
			 $("#gasmoney").val(my.gasmoney);
			 $("#electricnumber").val(my.electricnumber);
			 $("#waternumber").val(my.waternumber);
			 $("#gesnumber").val(my.gesnumber);
			 $("#hname").val(my.hname);
			 $("#hremark").val(my.hremark);
			 $("#imgpath").val(my.imgpath);
			var himg=my.himg;
			img=himg.split(",");
			var list=[img[0],img[1],img[2]];
			
			$("#img1").attr("src",path+"upload/"+list[0])
			$("#img2").attr("src",path+"upload/"+list[1])
			$("#img3").attr("src",path+"upload/"+list[2])
		}
	});
}
//显示图片
function getimg(){
	var files=$("input[name='himg1']");
	$("#himg1").change(function(){
		const url=URL.createObjectURL(this.files[0]);
		$("#img1").attr("src",url);
		
		});
	$("#himg2").change(function(){
		const url=URL.createObjectURL(this.files[0]);
		$("#img2").attr("src",url);
		
		});
	$("#himg3").change(function(){
		const url=URL.createObjectURL(this.files[0]);
		$("#img3").attr("src",url);
		});
}
//查询下拉框
function getSort(){
	$("#sid").empty();
	$("#aid").empty();
	$("#sid").append("<option value=0>---请选择---</option>");
	$("#aid").append("<option value=0>---请选择---</option>");
	 $.ajax({
	    	url:path+"house.do?method=SortAreaAll",
	    	data:'',
	    	dataType:'json',
	    	type:'post',
	    	success:function(mydata){
	    		//房屋类型
	    		for(var e in mydata.selectSort){
	    			a++;
	    		}
	    		//片区
	    		for(var e in mydata.selectArea){
	    			b++
	    		}
	    			for(var i=0;i<a;i++){
	    				if(sids==mydata.selectSort[i].sid){
			    			 $("#sid").append("<option value="+mydata.selectSort[i].sid+" selected='selected'>"+mydata.selectSort[i].sname+"</option>");
	    				}else{
	    					 $("#sid").append("<option value="+mydata.selectSort[i].sid+" >"+mydata.selectSort[i].sname+"</option>");
	    				}
		    		}
	    		
	    			for(var i=0;i<b;i++){
	    				if(aids==mydata.selectArea[i].aid){
	    					$("#aid").append("<option value="+mydata.selectArea[i].aid+" selected='selected'>"+mydata.selectArea[i].aname+"</option>");
	    				}else{
	    					$("#aid").append("<option value="+mydata.selectArea[i].aid+" >"+mydata.selectArea[i].aname+"</option>");
	    				}
		    		} 
	    			form.render($("#sid"));
		    		form.render($("#aid"));
	    	}
	 			
	    });
}
function getUpd(){
	$("#btn").click(function(){
		var	sid=$("#sid").val();
		var	aid=$("#aid").val();
		var	haddress=$("#haddress").val();
		var	hnumber=$("#hnumber").val();
		var	htype=$("#htype").val();
		var	harea=$("#harea").val();
		var	direction=$("#direction").val();
		var	hmoney=$("#hmoney").val();
		var	networkmoney=$("#networkmoney").val();
		var	electricmoney=$("#electricmoney").val();
		var	watermoney=$("#watermoney").val();
		var	gasmoney=$("#gasmoney").val();
		var	electricnumber=$("#electricnumber").val();
		var	waternumber=$("#waternumber").val();
		var	gesnumber=$("#gesnumber").val();
		var	hname=$("#hname").val();
		var	hremark=$("#hremark").val();
		var	himg1=$("#himg1").val();
		var	himg2=$("#himg2").val();
		var	himg3=$("#himg3").val();
		var imgpath=$("#imgpath").val();
		if(sid==0){
			layer.msg('房屋类型不能为空!',{icon : 5,time : 2000});
		}else if(aid==0){
			layer.msg('片区名称不能为空!',{icon : 5,time : 5000});
		}else if(haddress.length==0){
			layer.msg('房子地址不能为空!',{icon : 5,time : 2000});
		}else if(hnumber.length==0){
			layer.msg('房号不能为空!',{icon : 5,time : 2000});
		}else if(flag==1){
			layer.msg('房号重复,请重新输入!',{icon : 5,time : 2000});
		}else if(htype.length==0){
			layer.msg('房子户型不能为空!',{icon : 5,time : 2000});
		}else if(harea.length==0){
			layer.msg('房子面积不能为空!',{icon : 5,time : 2000});
		}else if(direction.length==0){
			layer.msg('房子朝向不能为空!',{icon : 5,time : 2000});
		}else if(hmoney.length==0){
			layer.msg('房子租金不能为空!',{icon : 5,time : 2000});
		}else if(networkmoney.length==0){
			layer.msg('房子网费不能为空!',{icon : 5,time : 2000});
		}else if(electricmoney.length==0){
			layer.msg('电费单价不能为空!',{icon : 5,time : 2000});
		}else if(watermoney.length==0){
			layer.msg('水费单价不能为空!',{icon : 5,time : 2000});
		}else if(gasmoney.length==0){
			layer.msg('煤气单价不能为空!',{icon : 5,time : 2000});
		}else if(electricnumber.length==0){
			layer.msg('电表单价不能为空!',{icon : 5,time : 2000});
		}else if(waternumber.length==0){
			layer.msg('水表刻度不能为空!',{icon : 5,time : 2000});
		}else if(gesnumber.length==0){
			layer.msg('煤气刻度不能为空!',{icon : 5,time : 2000});
		}else if(hname.length==0){
			layer.msg('房子简称不能为空!',{icon : 5,time : 2000});
		}else if(hremark.length==0){
			layer.msg('备注说明不能为空!',{icon : 5,time : 2000});
		}else if(himg1.length==0){
			layer.msg('上传图片文件不能为空!',{icon : 5,time : 2000});
		}else if(himg2.length==0){
			layer.msg('上传图片文件不能为空!',{icon : 5,time : 2000});
		}else if(himg3.length==0){
			layer.msg('上传图片文件不能为空!',{icon : 5,time : 2000});
		}else if(!reg.test($("#harea").val())){
			layer.msg('面积必须大于零的数字!',{icon : 5,time : 2000});
		}else if(!reg.test($("#hmoney").val())){
			layer.msg('最低租金必须大于零的数字!',{icon : 5,time : 2000});
		}else if(!reg.test($("#networkmoney").val())){
			layer.msg('网费必须大于零的数字!',{icon : 5,time : 2000});
		}else if(!reg.test($("#electricmoney").val())){	
			layer.msg('电费单价必须大于零的数字!',{icon : 5,time : 2000});
		}else if(!reg.test($("#watermoney").val())){
			layer.msg('水费单价必须大于零的数字!',{icon : 5,time : 2000});
		}else if(!reg.test($("#gasmoney").val())){
			layer.msg('煤气单价必须大于零的数字!',{icon : 5,time : 2000});
		}else if(!reg.test($("#electricnumber").val())){
			layer.msg('电表单价必须大于零的数字!',{icon : 5,time : 2000});
		}else if(!reg.test($("#waternumber").val())){
			layer.msg('水表单价必须大于零的数字!',{icon : 5,time : 2000});
		}else if(!reg.test($("#gesnumber").val())){
			layer.msg('煤气刻度必须大于零的数字!',{icon : 5,time : 2000});	
		}else{
				$.ajaxFileUpload({
					url:path+'house.do?method=upd',
					secureuri:false,
					fileElementId:['himg1','himg2','himg3'],
						   data:{
							   	"hid":hid,
							   	"sid":sid,
								 "aid":aid,
								 "haddress":haddress,
								 "hnumber":hnumber,
								 "htype":htype,
								 "harea":harea,
								 "direction":direction,
								 "hmoney":hmoney,
								 "networkmoney":networkmoney,
								 "electricmoney":electricmoney,
								 "watermoney":watermoney,
								 "gasmoney":gasmoney,
								 "electricnumber":electricnumber,
								 "waternumber":waternumber,
								 "gesnumber":gesnumber,
								 "hname":hname,
								 "hremark":hremark,
								 "imgpath":imgpath
						   },
						   dataType: 'json',
						   type:'post',
						   success:function(mydata) {
							   if(mydata>0){
								       //关闭这个增加层
				        		       layer.msg('修改成功！', {icon : 1,time : 2000});
			  		    		       var index = parent.layer.getFrameIndex(window.name); //获取窗口索引(真正的关 )
			  						   parent.layer.close(index);
								   }
						   }
					   }); 
				   }
		});
}

function getname(){
	//房子房号
	$("#hnumber").blur(function(){
		var hnumber=$(this).val();
		if(hnumber.length==0){
			layer.msg("房子房号不能为空!",{icon:5});
		}else{
			if(hnumber1!=hnumber){
			$.ajax({
				url:path+"house.do?method=addname",
				data:{"hnumber":hnumber},
				dataType:'json',
				type:'post',
				success:function(count){
					if(count>0){
						//判断重复
						layer.msg("房子房号重复,请重新输入!",{icon:5});
						flag=1;
					}else {
						flag=0;
					}
				}
			});
			}
		}
	});
}
//门牌号
//function hnumberBlur(){
//	$("#hnumber").blur(function(){
//		if(($("#hnumber").val()).length==0){
//			layer.msg("请输入门牌号!",{icon:5});
//		}
//	})
//}
//房屋地址
function haddressBlur(){
	$("#haddress").blur(function(){
		if(($("#haddress").val()).length==0){
			layer.msg("请输入房屋地址!",{icon:5});
		}
	})
}
//面积
function hareaBlur(){
	$("#harea").blur(function(){
		if(($("#harea").val()).length==0){
			layer.msg("请输入房屋面积!",{icon:5});
		}else{
			if(!reg.test($("#harea").val())){
				layer.msg("房屋面积应为大于零的数字!",{icon:5});
			}
		}
	})
}
//最低租金
function hmoneyBlur(){
	$("#hmoney").blur(function(){
		if(($("#hmoney").val()).length==0){
			layer.msg("请输入最低租金!",{icon:5});
		}else{
			if(!reg.test($("#hmoney").val())){
				layer.msg("房屋最低租金应为大于零的数字!",{icon:5});
			}
		}
	})
}
//网费
function networkmoneyBlur(){
	$("#networkmoney").blur(function(){
		if(($("#networkmoney").val()).length==0){
			layer.msg("请输入网费!",{icon:5});
		}else{
			if(!reg1.test($("#networkmoney").val())){
				layer.msg("网费应为大于等于零的数字!",{icon:5});
			}
		}
	})
}
//电费单价
function electricmoneyBlur(){
	$("#electricmoney").blur(function(){
		if(($("#electricmoney").val()).length==0){
			layer.msg("请输入电费单价!",{icon:5});
		}else{
			if(!reg1.test($("#electricmoney").val())){
				layer.msg("电费单价应为大于等于零的数字!",{icon:5});
			}
		}
	})
}
//水费单价
function watermoneyBlur(){
	$("#watermoney").blur(function(){
		if(($("#watermoney").val()).length==0){
			layer.msg("请输入水费单价!",{icon:5});
		}else{
			if(!reg1.test($("#watermoney").val())){
				layer.msg("水费单价应为大于等于零的数字!",{icon:5});
			}
		}
	})
}
//煤气单价
function gasmoneyBlur(){
	$("#gasmoney").blur(function(){
		if(($("#gasmoney").val()).length==0){
			layer.msg("请输入煤气单价!",{icon:5});
		}else{
			if(!reg1.test($("#gasmoney").val())){
				layer.msg("煤气单价应为大于等于零的数字!",{icon:5});
			}
		}
	})
}
//电表刻度
function electricnumberBlur(){
	$("#electricnumber").blur(function(){
		if(($("#electricnumber").val()).length==0){
			layer.msg("请输入电表刻度!",{icon:5});
		}else{
			if(!reg1.test($("#electricnumber").val())){
				layer.msg("电表刻度应为大于等于零的数字!",{icon:5});
			}
		}
	})
}
//水表刻度
function waternumberBlur(){
	$("#waternumber").blur(function(){
		if(($("#waternumber").val()).length==0){
			layer.msg("请输入水表刻度!",{icon:5});
		}else{
			if(!reg1.test($("#waternumber").val())){
				layer.msg("水表刻度应为大于等于零的数字!",{icon:5});
			}
		}
	})
}
//煤气刻度
function gesnumberBlur(){
	$("#gesnumber").blur(function(){
		if(($("#gesnumber").val()).length==0){
			layer.msg("请输入煤气刻度!",{icon:5});
		}else{
			if(!reg1.test($("#gesnumber").val())){
				layer.msg("煤气刻度应为大于等于零的数字!",{icon:5});
			}
		}
	})
}
//房屋简称
function hnameBlur(){
	$("#hname").blur(function(){
		if(($("#hname").val()).length==0){
			layer.msg("请输房屋简称!",{icon:5});
		}
	})
}