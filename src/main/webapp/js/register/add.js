var $;
var laydate;
var form;
var path="";
var a=0;
var b=0;
var aid=0;
var sid=0;
var flag=0;
var exsit = 0;
var hids=0;
layui.use(function(){
	$=layui.$;
	path=$("#path").val();
	laydate = layui.laydate;//时间显示
	form=layui.form;
	getLike();//模拟百度查询
	date();//显示时间
	
	getSort();//显示片区下拉框
	getChuZUFangWu();
	getAid();//点击片区
	getSid()//房屋类型
	getHflag();//房屋出租是否出租
	
	
	getJudge();//判断值
	getAdd();//新增
	getimg();//显示图片
	
})

/**************显示时间*****************/
function date(){
	laydate.render({
		elem:'#rnexttime'
	})
}
/*************模拟百度***************/
function getLike(){
   $("#cname").keyup(function(event){
	   var cname=$(this).val();
	   $("#like").empty();
	   if((event.keyCode==13)||(event.keyCode==49)||(event.keyCode==50)||(event.keyCode==51)||(event.keyCode==52)||(event.keyCode==53)||(event.keyCode==32)){
			   //去后台查询
			   $.ajax({
				   url:path+"register.do?method=BaiDu",
				   data:{"cname":cname},
				   dataType:'json',
				   type:'post',
				   success:function(mydata){
					    $.each(mydata,function(index,xx){
							$('#like').append('<option class="p" value='+xx.cname+'---'+xx.ctel+'---'+xx.cid+'>'+xx.cname+'---'+xx.ctel+'---'+xx.cid+'</option>');
						})
				   }
			   });
		   }
   });
}
//查询下拉框
function getSort(){
	$("#sid").empty();
	$("#aid").empty();
	$("#sid").append("<option value=0>请选择</option>");
	$("#aid").append("<option value=0>请选择</option>");
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
	    			 $("#sid").append("<option value="+mydata.selectSort[i].sid+">"+mydata.selectSort[i].sname+"</option>");
	    		}
	    		for(var i=0;i<b;i++){
	    			 $("#aid").append("<option value="+mydata.selectArea[i].aid+">"+mydata.selectArea[i].aname+"</option>");
	    		} 
	    		form.render($("#sid"));
	    		form.render($("#aid"));
	    	}
	    });
}

//点击片区触发房屋类别
function getAid(){
	form.on('select(aid)', function(data){
		 aid=data.value;
		//alert("aid:"+aid);
		getChuZUFangWu();
	});
}
function getSid(){
	form.on('select(sid)', function(data){
		 sid=data.value;
		//alert("sid:"+sid);
		getChuZUFangWu();
	});
}
//显示出租房屋
function getChuZUFangWu(){
	//alert("aid:"+aid+"sid:"+sid);
	var reg=/^\d{0,4}$|^\d{0,4}[\.]\d$/;//必须为0和正数
	$("#h2").keyup(function(event){
		var h1=$("#h1").val();
		var h2=$("#h2").val();
		//alert("h1:"+h1+"h2:"+h2);
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
	var h1=$("#h1").val();
	var h2=$("#h2").val();
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
//点击出租房屋触发
function getHflag(){
	form.on('select(hid)',function(data){
		var hid=data.value;
		hids=hid;
		alert("hids"+hids)
		var register="hid="+hid+"&hflag="+1;
		$.post(path+"register.do?method=selectHflag",register,function(count){
			if(count>0){
				//关闭这个增加层
  		      	layer.msg('此房屋已被出租,请重新选择！', {icon : 2,time : 2000});
  		        exsit = 1;
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
		}else {
			alert("hids"+hids);
			$.post(path+"register.do?method=selectHouse&hid="+hids,'',function(my){
				var hmoney=my.hmoney;
				alert("hmoney:"+hmoney);
				if(rrent<hmoney){
					//关闭这个增加层
	  		      	layer.msg('房屋租金不能小于!'+hmoney+"元", {icon : 2,time : 2000});
				}
			},'json');
		}
	});
}




function getAdd(){
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
			layer.msg('客户姓名不能为空!',{icon : 5,time : 2000});
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
			 url:path+"register.do?method=add",
				secureuri:false,
				fileElementId:['himg1'],
					   data:{
						   	"hflag":1,
							"cid":cid,
				    		"hid":hid,
				    		"rdeposit":rdeposit,//收租押金
				    		"rrent":rrent,//预收租金
				    		"rnexttime":rnexttime,//下次收租日期
				    		
				    		//新增登记收费
				    		"grent":rrent,//预收租金
				    		"gnexttime":rnexttime,//下次收租日期
				    		
					   },
					   dataType: 'json',
					   type:'post',
					   success:function(mydata){
						   if(mydata>0){
							       //关闭这个增加层
			        		       layer.msg('添加成功！', {icon : 1,time : 2000});
		  		    		       var index = parent.layer.getFrameIndex(window.name); //获取窗口索引(真正的关 )
		  						   parent.layer.close(index);
							   }
					   }
				   }); 
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



