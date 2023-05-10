var path;
var $;
var form;
var flag1=0;
var flag2=0;
var flag3=0;
var eid=0;
var cc=/(^\d{15}$)|(^\d{17}(x|X|\d)$)/;//身份证
var ctelz=/^1\d{10}$/;//客户电话号
layui.use(function(){
	eid=$("#eid").val();
	path=$("#path").val();
	form=layui.form
	layer = layui.layer;
	$ = layui.$;
	getCcard();//判断身份证
	getCtel();//判断客户电话
	getCteltwo();//判断备用电话
	//增加
	getAdd();
	
});

function getAdd(){
	$("#btn").click(function(){
	var cname=$("#cname").val();
	var ccard=$("#ccard").val();
	var csex=$("[name='csex']:checked").val();
	var ctel=$("#ctel").val();
	var cteltwo=$("#cteltwo").val();
	if(cname.length==0){
		layer.msg('客户名称不能为空!',{icon : 2,time : 2000});
	}else if(ccard.length==0){
		layer.msg('身份证号不能为空!',{icon : 2,time : 2000});
	}else if(ctel.length==0){
		layer.msg('客户电话不能为空!',{icon : 2,time : 2000});	
	}else if(cteltwo.length==0){
		layer.msg('备用电话不能为空!',{icon : 2,time : 2000});
	}else if(flag1==1){
		layer.msg('身份证号重复!',{icon : 2,time : 2000});
	}else if(flag2==1){
		layer.msg('客户电话重复!',{icon : 2,time : 2000});
	}else if(flag3==1){
		layer.msg('备用电话重复!',{icon : 2,time : 2000});
	}else if(!cc.test($("#ccard").val())){
		layer.msg('身份证号格式错误,请重新输入!',{icon : 2,time : 2000});
	}else if(!ctelz.test($("#ctel").val())){
		layer.msg('客户电话格式错误,请重新输入!',{icon : 2,time : 2000});
	}else if(!ctelz.test($("#cteltwo").val())){
		layer.msg('备用电话格式错误,请重新输入!',{icon : 2,time : 2000});
	}else{
		var cus="cname="+cname+"&ccard="+ccard+"&csex="+csex+"&ctel="+ctel+"&cteltwo="+cteltwo+"&eid="+eid
		$.post(path+"cus.do?method=insert",cus,function(count){
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

/***********************************************失去焦点判断*************************************************/
function getCcard(){
	//身份证号
	
	$("#ccard").blur(function(){
		var ccard=$(this).val();
		if(ccard.length==0){
			layer.msg('身份证号不能为空!',{icon : 2,time : 2000});
		}else if(!cc.test(ccard)){
			layer.msg('身份证号格式错误,请重新输入!',{icon : 2,time : 2000});
		}else{
			//判断登陆名称是否存在
			$.ajax({
				url:path+"cus.do?method=selectRepetition",
				data:{"ccard":ccard},
				dataType:'json',
				type:'post',
				success:function(count){
					if(count>0){
						//判断重复
						layer.msg('身份证号重复!',{icon : 2,time : 2000});
						flag1=1;
					}else {
						flag1=0;
					}
				}
			});
		}
	});
}

function getCtel(){
	//客户电话
	
	$("#ctel").blur(function(){
		var ctel=$(this).val();
		if(ctel.length==0){
			layer.msg('客户电话不能为空!',{icon : 2,time : 2000});
		}else if(!ctelz.test(ctel)){
			layer.msg('客户电话格式错误,请重新输入!',{icon : 2,time : 2000});
		}else{
			//判断登陆名称是否存在
			$.ajax({
				url:path+"cus.do?method=selectRepetition",
				data:{"ctel":ctel},
				dataType:'json',
				type:'post',
				success:function(count){
					if(count>0){
						//判断重复
						layer.msg('客户电话重复!',{icon : 2,time : 2000});
						flag2=1;
					}else {
						flag2=0;
					}
				}
			});
		}
	});
}

function getCteltwo(){
	//备用电话
	var cteltwoz=/^1\d{10}$/;
	$("#cteltwo").blur(function(){
		var cteltwo=$(this).val();
		if(cteltwo.length==0){
			layer.msg('备用电话不能为空!',{icon : 2,time : 2000});
		}else if(!cteltwoz.test(cteltwo)){
			layer.msg('备用电话格式错误,请重新输入!',{icon : 2,time : 2000});
		}else{
			//判断登陆名称是否存在
			$.ajax({
				url:path+"cus.do?method=selectRepetition",
				data:{"cteltwo":cteltwo},
				dataType:'json',
				type:'post',
				success:function(count){
					if(count>0){
						//判断重复
						layer.msg('备用电话重复!',{icon : 2,time : 2000});
						flag3=1;
					}else {
						flag3=0;
					}
				}
			});
		}
	});
}
