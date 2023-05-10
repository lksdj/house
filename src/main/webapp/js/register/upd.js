var $;
var laydate;
var form;
var path="";
var rid=0;
var sid=0;
var aid=0;
var hid1=0;//单查得到
var exsit = 0;
layui.use(function(){
	$=layui.$;
	path=$("#path").val();
	rid=$("#rid").val();
	laydate = layui.laydate;//时间显示
	form=layui.form;
	date();//时间
	getOne();//单查
	getChuZUFangWu();
	 getJudge();//判断空
	 getimg();//显示图片
	 getUpd();
	 getHflag();
})
/**************显示时间*****************/
function date(){
	laydate.render({
		elem:'#rnexttime'
	})
}

/*************************根据ID查询单个********************************/
function getOne(){
	$.ajax({
		url:path+"register.do?method=one",
		data:{"rid":rid},
		dataType:'json',
		type:'post',
		success:function(my){
			 $("#cname").val(my.cname+"---"+my.ctel+"---"+my.rid);
			 $("#sid").append("<option value="+my.sid+" selected='selected'>"+my.sname+"</option>");
			 $("#aid").append("<option value="+my.aid+" selected='selected'>"+my.aname+"</option>");
			 $("#hid").append("<option value="+my.hid+" selected='selected'>"+my.haddress+"-"+my.hnumber+"</option>");
			 form.render($("#hid"));
			 form.render($("#sid"));
			 form.render($("#aid"));
			 $("#rdeposit").val(my.rdeposit);
			 $("#rrent").val(my.rrent);
			 $("#rnexttime").val(my.rnexttime);
			// $("hid").val(my.haddress);
			 sid=my.sid;
			 aid=my.aid;
			 hid1=my.hid;
			var timg=my.timg;
			$("#img1").attr("src",path+"upload/"+timg);
		}
	});
}
//显示出租房屋
function getChuZUFangWu(){
	//alert("aid:"+aid+"sid:"+sid);
	var reg=/^\d{0,4}$|^\d{0,4}[\.]\d$/;//必须为0和正数
	$("#h2").keyup(function(event){
		var h1=$("#h1").val();
		var h2=$("#h2").val();
		//alert("h1:"+h1+"h2:"+h2+"sid:"+sid+"aid:"+aid);
		if(!reg.test(h2)){
			layer.msg('面积填写错误必须是数字且大于0,请重新输入!',{icon : 5,time : 2000});	
	}else{
		var register="h1="+h1+"&h2="+h2+"&aid="+aid+"&sid="+sid;
		//alert("h1="+h1+"&h2="+h2+"&aid="+aid+"&sid="+sid);
		$.post(path+"register.do?method=ChuZUFangWu",register,function(mydata){
			//房屋类型下拉框
			$("#hid").empty();
			$("#hid").append(`<option value="0">请选择</option>`);
			 $.each(mydata,function(index,xx){
				 $("#hid").append("<option value="+xx.hid+">"+xx.haddress+" "+xx.hnumber+""+xx.harea+"(平方)"+"</option>");
			 });
			 form.render($("#hid"));
		},'json');
		}
	});
	$("#h1").keyup(function(){
		var h1=$("#h1").val();
		var h2=$("#h2").val();
		//alert("h1:"+h1+"h2:"+h2);
		if(!reg.test(h1)){
			layer.msg('面积填写错误必须是数字且大于0,请重新输入!',{icon : 5,time : 2000});	
	}else{
		var register="h1="+h1+"&h2="+h2+"&aid="+aid+"&sid="+sid;
		//alert("h1="+h1+"&h2="+h2+"&aid="+aid+"&sid="+sid);
		$.post(path+"register.do?method=ChuZUFangWu",register,function(mydata){
			//房屋类型下拉框
			$("#hid").empty();
			$("#hid").append(`<option value="0">请选择</option>`);
			 $.each(mydata,function(index,xx){
				 $("#hid").append("<option value="+xx.hid+">"+xx.haddress+" "+xx.hnumber+""+xx.harea+"(平方)"+"</option>");
			 });
			 form.render($("#hid"));
		},'json');
	}
	});
}
//点击出租房屋触发
function getHflag(){
	form.on('select(hid)',function(data){
		var hid=data.value;
		var register="hid="+hid+"&hflag="+1;
		$.post(path+"register.do?method=selectHflag",register,function(count){
			if(hid1!=hid){
				if(count>0){
					//关闭这个增加层
	  		      	layer.msg('此房屋已被出租,请重新选择！', {icon : 2,time : 2000});
	  		        exsit = 1;
				}
			}
		},'json');
	});
}
//判断填写
function getJudge(){
	var money=/^([1-9]\d{0,9}|0)([.]?|(\.\d{1,2})?)$/;
	var reg=/^\d{0,4}$|^\d{0,4}[\.]\d$/;
	$("#cname").blur(function(){
		var cname=$(this).val();
		if(cname.length==0){
			layer.msg('客户姓名不能为空!',{icon : 5,time : 2000});	
		}
	});
	
	$("#h1").blur(function(){
		var h1=$(this).val();
		if(h1.length==0){
			layer.msg('面积范围不能为空!',{icon : 5,time : 2000});	
		}else if(!reg.test(h1)){
			layer.msg('面积格式错误,请重新输入!',{icon : 5,time : 2000});	
		}
	});
	
	$("#h2").blur(function(){
		var h2=$(this).val();
		if(h2.length==0){
			layer.msg('面积范围不能为空!',{icon : 5,time : 2000});	
		}else if(!reg.test(h2)){
			layer.msg('面积格式错误,请重新输入!',{icon : 5,time : 2000});	
		}
	});
	
	$("#rdeposit").blur(function(){
		var rdeposit=$(this).val();
		if(rdeposit.length==0){
			layer.msg('房屋押金不能为空!',{icon : 5,time : 2000});	
		}else if(!money.test(rdeposit)){
			layer.msg('房屋押金格式错误,请重新输入!',{icon : 5,time : 2000});	
		}
	});
	$("#rrent").blur(function(){
		var rrent=$(this).val();
		if(rrent.length==0){
			layer.msg('房屋租金不能为空!',{icon : 5,time : 2000});	
		}else if(!money.test(rrent)){
			layer.msg('房屋租金格式错误,请重新输入!',{icon : 5,time : 2000});
		}
	});
}
function getUpd(){
	$("#btn").click(function(){
		var cname=$("#cname").val();
		var cid=cname.charAt(cname.length-1);
		var hid=$("#hid").val();
		var aid=$("#aid").val();
		var sid=$("#sid").val();
		var rdeposit=$("#rdeposit").val();
		var rrent=$("#rrent").val();
		var rnexttime=$("#rnexttime").val();
		var	himg1=$("#himg1").val();
		if(cname.length==0){
			layer.msg('房屋姓名不能为空!',{icon : 5,time : 2000});
		}else if(aid.length==0){
			layer.msg('房屋片区不能为空!',{icon : 5,time : 2000});
		}else if(sid.length==0){
			layer.msg('房屋类型不能为空!',{icon : 5,time : 2000});
		}else if(hid.length==0){
			layer.msg('出租房屋不能为空!',{icon : 5,time : 2000});
		}else if(rdeposit.length==0){
			layer.msg('房屋押金不能为空!',{icon : 5,time : 2000});
		}else if(rrent.length==0){
			layer.msg('房屋租金不能为空!',{icon : 5,time : 2000});
		}else if(rnexttime.length==0){
			layer.msg('收租时间不能为空!',{icon : 5,time : 2000});
		}else if(himg1.length==0){
			layer.msg('未选择文件!',{icon : 5,time : 2000});
		}else if(exsit==1){
			layer.msg('此房屋已被出租,请重新选择！', {icon : 2,time : 2000});
		}else{
		 $.ajaxFileUpload({
			 url:path+"register.do?method=upd",
				secureuri:false,
				fileElementId:['himg1'],
					   data:{
						    "rid":rid,
							"cid":cid,
				    		"hid":hid,
				    		"rdeposit":rdeposit,
				    		"rrent":rrent,
				    		"rnexttime":rnexttime,
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
		 			//单查和  改变下拉框的值进行比较
				 	if(hid1!=hid){
				 		var register="hid="+hid+"&hflag="+1;
				 		$.post(path+"register.do?method=updFlag",register,function(mydata){
						},'json');
				 		var register1="hid="+hid1+"&hflag="+0;
				 		$.post(path+"register.do?method=updFlag",register1,function(mydata){
						},'json');
				 	}
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
}

