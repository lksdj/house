var path;
var $;
var form;
var flag=0;
var eid=0;
var oldename="";
var olderealname="";
var oldetel="";
var pid1=0;
var jid1=0;
var flag1=0;
var flag2=0;
var flag3=0;
var exsit=0;
var a;
layui.use(function(){
	$ = layui.$;
	path=$("#path").val();
	eid=$("#eid").val();
	form=layui.form;
	getOne();//单查询
	getMydept1();//部门下拉框
	getMydept2();//岗位下拉框
	getBuld();//判断重复和空值
	getUpd();//修改
	getXa();//判断此部门是否有经理
});

/*********************************************单查询*********************************************/
function getOne(){
	$.ajax({
		url:path+"emp.do?method=updone",
		data:{"eid":eid},
		dataType:'json',
		type:'post',
		success:function(emp){
			pid1=emp.pid;
			jid1=emp.jid;
			$("#eid").val(emp.eid);
			$("#ename").val(emp.ename);
			$("#epsw").val(emp.epsw);
			$("#erealname").val(emp.erealname);
			$("#etel").val(emp.etel);
			$("#eaddress").val(emp.eaddress);
			$("#eremark").val(emp.eremark);
			oldename=emp.ename;
			olderealname=emp.erealname;
			oldetel=emp.etel;
		}
	});
}
/********************************************得到下拉框的值**********************************************/
function getMydept1(){
	$("#pid").empty();
	//$("#pid").append("<option value=0>--------------请选择-------------</option>");
	 $.ajax({
	    	url:path+"emp.do?method=addone1",
	    	data:'',
	    	dataType:'json',
	    	type:'post',
	    	success:function(mydata){
	    		 $.each(mydata,function(index,xx){
	    			if(xx.pflag!=0){	    			 
	    				if(pid1==xx.pid){
	    				 $("#pid").append("<option value="+xx.pid+" selected>"+xx.pname+"</option>");
	    			 }else{
	    				 $("#pid").append("<option value="+xx.pid+">"+xx.pname+"</option>");
	    			 }
	    			} 
	    		 });
	    		 form.render("select");
	    	}
	    });
}
function getMydept2(){
	$("#jid").empty();
	//$("#jid").append("<option value=0>--------------请选择-------------</option>");
	 $.ajax({
	    	url:path+"emp.do?method=addone2",
	    	data:'',
	    	dataType:'json',
	    	type:'post',
	    	success:function(mydata){
	    		 $.each(mydata,function(index,xx){
	    			 if(xx.jid!=1){
		    			 if(jid1==xx.jid){
		    				 a=xx.jid
		    				 $("#jid").append("<option value="+xx.jid+" selected>"+xx.jname+"</option>");
		    			 }else{
		    				 $("#jid").append("<option value="+xx.jid+">"+xx.jname+"</option>");
		    			 }
	    			}
	    		 });
	    		 form.render("select");
	    	}
	    });
}
/***********************************************失去焦点事件***********************************************/
function getBuld(){
	//登录名
	$("#ename").blur(function(){
		var ename=$(this).val();
		if(ename.length==0){
			layer.msg('员工账号不能为空!',{icon : 2,time : 2000});
		}else{
			//判断登陆名称是否存在
			if(oldename!=ename){
			$.ajax({
				url:path+"emp.do?method=addname",
				data:{"ename":ename},
				dataType:'json',
				type:'post',
				success:function(count){
					if(count>0){
						//判断重复
						layer.msg('员工账号重复!',{icon : 2,time : 2000});
						flag=1;
					}else {
						flag=0;
					}
				}
			});
			}
		}
	});
	//真实姓名
	$("#erealname").blur(function(){
		var erealname=$(this).val();
		if(erealname.length==0){
			layer.msg('真实姓名不能为空!',{icon : 2,time : 2000});
		}else{
			//判断登陆名称是否存在
			if(olderealname!=erealname){
			$.ajax({
				url:path+"emp.do?method=addname",
				data:{"erealname":erealname},
				dataType:'json',
				type:'post',
				success:function(count){
					if(count>0){
						//判断重复
						layer.msg('真实姓名重复!',{icon : 2,time : 2000});
						flag=1;
					}else {
						flag=0;
					}
				}
			});
			}
		}
	});
	//员工电话
	$("#etel").blur(function(){
		var etel=$(this).val();
		let t=/^1\d{10}$/;
		if(etel.length==0){
			layer.msg('员工电话不能为空!',{icon : 2,time : 2000});
		}else if(!t.test(etel)){
			layer.msg('员工电话格式错误清重新输入!',{icon : 2,time : 2000});
		}else{
			//判断员工电话是否存在
			if(oldetel!=etel){
			$.ajax({
				url:path+"emp.do?method=addname",
				data:{"etel":etel},
				dataType:'json',
				type:'post',
				success:function(count){
					if(count>0){
						//判断重复
						layer.msg('员工电话重复!',{icon : 2,time : 2000});
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
/****************************判断员工信息此部门是否有经理**************************************/
function getXa(){
	form.on('select(jid)',function(data){
		var j=data.value;
		var p=$("#pid").val();
		var emp="pid="+p+"&jid="+j;
		if(a!=2){
			$.post(path+"emp.do?method=Xa",emp,function(count){
				if(count>0){
					//关闭这个增加层
	  		      	layer.msg('此部门已经有经理！', {icon : 2,time : 2000});
	  		        exsit = 1;
				}
			},'json');
		}
	});
}		
/**************************************************修改*******************************************/
function getUpd(){
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
				var empupd1="pid="+pid+"&jid="+jid;
				var empupd2="eid="+eid+"&pid="+pid+"&jid="+jid+"&ename="+ename+"&epsw="+epsw+"&erealname="+erealname+"&etel="+etel+"&eaddress="+eaddress+"&eremark="+eremark;
				getUpdJL(empupd1,empupd2);
			}else{
				var emp="eid="+eid+"&pid="+pid+"&jid="+jid+"&ename="+ename+"&epsw="+epsw+"&erealname="+erealname+"&etel="+etel+"&eaddress="+eaddress+"&eremark="+eremark;
				$.post(path+"emp.do?method=upd",emp,function(count){
					if(count>0){
						//关闭这个增加层
		  		      	layer.msg('修改成功!', {icon : 1,time : 2000});
		    		      var index = parent.layer.getFrameIndex(window.name); //获取窗口索引(真正的关 )
						  parent.layer.close(index);
						}
					},'json');
			}
		}else{
			var emp="eid="+eid+"&pid="+pid+"&jid="+jid+"&ename="+ename+"&epsw="+epsw+"&erealname="+erealname+"&etel="+etel+"&eaddress="+eaddress+"&eremark="+eremark;
			$.post(path+"emp.do?method=upd",emp,function(count){
				if(count>0){
					//关闭这个增加层
	  		      	layer.msg('修改成功!', {icon : 1,time : 2000});
	    		      var index = parent.layer.getFrameIndex(window.name); //获取窗口索引(真正的关 )
					  parent.layer.close(index);
					}
				},'json');
		}
	});	
}
/*******************************当要修改时，此部门已经有经理就把原来的经理改为普通员工********************************/
function getUpdJL(empupd1,empupd2){
	//弹出一个询问层
	 layer.confirm('你确定要修改为经理吗？那么将会把原有部门内的经理改为普通员工!',{icon : 7},function(){
		 
	     $.post(path+"emp.do?method=UpdJingLi",empupd1,function(count){
	    	 if(count>0){
	    	      layer.msg('添加成功！', {icon : 1,time : 2000});
	    	      var index = parent.layer.getFrameIndex(window.name); //获取窗口索引(真正的关 )
				  parent.layer.close(index);
				  
				  $.post(path+"emp.do?method=upd",empupd2,function(count){
					  layer.msg('添加成功！', {icon : 1,time : 2000});
		    	      var index = parent.layer.getFrameIndex(window.name); //获取窗口索引(真正的关 )
					  parent.layer.close(index);
				  },'json');
	    	 }
		  },'json');
 },function(){
	   //空会自动取消
 });
	
	
}


