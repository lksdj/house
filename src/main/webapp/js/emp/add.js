var path;
var $;
var layui;
var form;
var flag1=0;
var flag2=0;
var flag3=0;
var exsit = 0;
layui.use(function(){
	$ = layui.$;
	form=layui.form;
	path=$("#path").val();
	getMydept1();//得到下拉框的值 
	getlogin();//失去焦点
	getetel();//失去焦点
	getname();//失去焦点
	getAdd();//新增
	getk();//下拉点击事件
	getXa();//判断经理是否存在
});

/********************************************得到部门下拉框**********************************************/
function getMydept1(){
	$("#pid").empty();
	$("#pid").append("<option value=0>--------------请选择-------------</option>");
	 $.ajax({
	    	url:path+"emp.do?method=addone1",
	    	data:'',
	    	dataType:'json',
	    	type:'post',
	    	success:function(mydata){
	    		 $.each(mydata,function(index,xx){
	    			 if(xx.pflag!=0){
	    				 $("#pid").append("<option value="+xx.pid+">"+xx.pname+"</option>");
	    			 }
	    		 });
	    		 form.render($("#pid"));
	    	}
	    });
}
function getk(){
	form.on('select(pid)', function(data){
		var p=data.value;
		getMydept2(p);//得到岗位下拉框的值 
	});
}
/*******************************************岗位下拉框******************************************/
function getMydept2(p){
	if(p>0){
		$("#jid").empty();
		$("#jid").append("<option value=0>--------------请选择-------------</option>");
		 $.ajax({
		    	url:path+"emp.do?method=addone2",
		    	data:'',
		    	dataType:'json',
		    	type:'post',
		    	success:function(mydata)
		    	{
		    		 $.each(mydata,function(index,xx){
		    			 if(xx.jid!=1){
		    				 $("#jid").append("<option value="+xx.jid+">"+xx.jname+"</option>");
		    			 }
		    			 
		    		 });
		    		 form.render($("#jid"));
		    	}
		 });
	}else{
		$("#jid").empty();
		form.render($("#jid"));
	}
}
/*****************************************判断所在部门中是否有经理****************************************/
function getXa(){
	form.on('select(jid)',function(data){
		var j=data.value;
		var p=$("#pid").val();
		var emp="pid="+p+"&jid="+j;
		$.post(path+"emp.do?method=Xa",emp,function(count){
			if(count>0){
				//关闭这个增加层
  		      	layer.msg('此部门已经有经理！', {icon : 2,time : 2000});
  		        exsit = 1;
			}
		},'json');
	});
}		
/**************************************************新增*********************************************************/
function getAdd(){
	$("#btn").click(function(){
	var pid=$("#pid").val();
	var jid=$("#jid").val();
	var ename=$("#ename").val();
	var epsw=$("#epsw").val();
	var erealname=$("#erealname").val();
	var etel=$("#etel").val();
	var eaddress=$("#eaddress").val();
	var eremark=$("#eremark").val();
	if(ename.length==0){
		layer.msg('员工账号不能为空!',{icon : 2,time : 2000});
	}else if(epsw.length==0){
		layer.msg('员工密码不能为空!',{icon : 2,time : 2000});
	}else if(pid==0){
		layer.msg('部门不能为空!',{icon : 2,time : 2000});
	}else if(jid==0){
		layer.msg('岗位不能为空!',{icon : 2,time : 2000});	
	}else if(erealname.length==0){
		layer.msg('真实姓名不能为空!',{icon : 2,time : 2000});	
	}else if(etel.length==0){
		layer.msg('员工电话不能为空!',{icon : 2,time : 2000});
	}else if(eaddress.length==0){
		layer.msg('员工地址不能为空!',{icon : 2,time : 2000});
	}else if(eremark.length==0){
		layer.msg('备注不能为空!',{icon : 2,time : 2000});
	}else if(flag1==1){
		layer.msg('员工账号重复!',{icon : 2,time : 2000});
	}else if(flag2==1){
		layer.msg('真实姓名重复!',{icon : 2,time : 2000});
	}else if(flag3==1){
		layer.msg('员工电话重复!',{icon : 2,time : 2000});
	}else if(jid==2){
		if(exsit==1){
			var emp1="pid="+pid+"&jid="+jid+"&ename="+ename+"&epsw="+epsw+"&erealname="+erealname+"&etel="+etel+"&eaddress="+eaddress+"&eremark="+eremark
			var emp2="pid="+pid+"&jid="+3+"&ename="+ename+"&epsw="+epsw+"&erealname="+erealname+"&etel="+etel+"&eaddress="+eaddress+"&eremark="+eremark
			getjili(jid,pid,emp1,emp2);
		}else{
			var emp="pid="+pid+"&jid="+jid+"&ename="+ename+"&epsw="+epsw+"&erealname="+erealname+"&etel="+etel+"&eaddress="+eaddress+"&eremark="+eremark
			$.post(path+"emp.do?method=add",emp,function(count){
				if(count>0){
					//关闭这个增加层
	  		      	layer.msg('添加成功！', {icon : 1,time : 2000});
	    		      var index = parent.layer.getFrameIndex(window.name); //获取窗口索引(真正的关 )
					  parent.layer.close(index);
				}
			},'json');
		}
	}else{
		var emp="pid="+pid+"&jid="+jid+"&ename="+ename+"&epsw="+epsw+"&erealname="+erealname+"&etel="+etel+"&eaddress="+eaddress+"&eremark="+eremark
		$.post(path+"emp.do?method=add",emp,function(count){
			if(count>0){
				//关闭这个增加层
  		      	layer.msg('添加成功！', {icon : 1,time : 2000});
    		      var index = parent.layer.getFrameIndex(window.name); //获取窗口索引(真正的关 )
				  parent.layer.close(index);
			}
		},'json');
	}
});
}	
/*********************************************新增时判断经理重复是否新增经理***********************************************/
function getjili(jid,pid,emp1,emp2){
	//弹出一个询问层
	 layer.confirm('你确定要添加经理吗？那么将会把原有的经理改为普通员工此部门将在新增以为经理!',{icon : 7},function(){
		 var emp11="pid="+pid+"&jid="+jid;
	     $.post(path+"emp.do?method=UpdJingLi",emp11,function(count){
	    	 if(count>0){
	    	      layer.msg('添加成功！', {icon : 1,time : 2000});
	    	      var index = parent.layer.getFrameIndex(window.name); //获取窗口索引(真正的关 )
				  parent.layer.close(index);
				  
				  $.post(path+"emp.do?method=add",emp1,function(count){
					  layer.msg('添加成功！', {icon : 1,time : 2000});
		    	      var index = parent.layer.getFrameIndex(window.name); //获取窗口索引(真正的关 )
					  parent.layer.close(index);
				  },'json');
	    	 }
		  },'json');
  },function(){
	   //空会自动取消
		  $.post(path+"emp.do?method=add",emp2,function(count){
			  if(count>0){
				  layer.msg('取消成功！', {icon : 1,time : 2000});
			      var index = parent.layer.getFrameIndex(window.name); //获取窗口索引(真正的关 )
				  parent.layer.close(index);
			  }
	  },'json');
  });
}
/**正则**/

/***********************************************失去焦点判断*************************************************/
function getlogin(){
	//登录名
	$("#ename").blur(function(){
		var ename=$(this).val();
		if(ename.length==0){
			layer.msg('员工账号不能为空!',{icon : 2,time : 2000});
		}else{
			//判断登陆名称是否存在
			$.ajax({
				url:path+"emp.do?method=addname",
				data:{"ename":ename},
				dataType:'json',
				type:'post',
				success:function(count){
					if(count>0){
						//判断重复
						layer.msg('员工账号重复!',{icon : 2,time : 2000});
						flag1=1;
					}else {
						flag1=0;
					}
				}
			});
		}
	});
}

function getname(){
	//真实姓名
	$("#erealname").blur(function(){
		var erealname=$(this).val();
		if(erealname.length==0){
			layer.msg('真实姓名不能为空!',{icon : 2,time : 2000});
		}else {//判断登陆名称是否存在
			$.ajax({
				url:path+"emp.do?method=addname",
				data:{"erealname":erealname},
				dataType:'json',
				type:'post',
				success:function(count){
					if(count>0){
						//判断重复
						layer.msg('真实姓名重复!',{icon : 2,time : 2000});
						flag2=1;
					}else {
						flag2=0;
					}
				}
			});
		}
	});
}

function getetel(){
	//员工电话
	$("#etel").blur(function(){
		var etel=$(this).val();
		let t=/^1\d{10}$/;
		if(etel.length==0){
			layer.msg('员工电话不能为空!',{icon : 2,time : 2000});
		}else if(!t.test(etel)){
			layer.msg('员工电话格式错误清重新输入!',{icon : 2,time : 2000});
		}else{
			//判断登陆名称是否存在
			$.ajax({
				url:path+"emp.do?method=addname",
				data:{"etel":etel},
				dataType:'json',
				type:'post',
				success:function(count){
					if(count>0){
						//判断重复
						layer.msg('员工电话重复!',{icon : 2,time : 2000});
						flag3=1;
					}else {
						flag3=0;
					}
				}
			});
		}
	});
}
/*********************************正则**************************************/
function getzc(){
	$("#etel").blur(function(){
		var etel=$(this).val();
		var	t=/^1[3|4|5|7|8]\d{9}$/;
		if(!etel.test(t)){
			layer.msg('电话号码格式错误!',{icon : 2,time : 2000});
		}
	});
}