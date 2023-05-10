var path;
var $;
var form;
var layer;
var oldeCcard="";
var oldeCtel="";
var oldeCteltwo="";
var flag1=0;
var flag2=0;
var flag3=0;
layui.use(function(){
	$ = layui.$;
	layer = layui.layer;
	form=layui.form;
	path=$("#path").val();
	var cid=$("#cid").val();
	getOne(cid);//单查询
	getCcard();//判断身份证
	getCtel();//判断客户电话
	getCteltwo();//判断备用电话
	getUpd(cid);//修改
});

/*****************************单查询*******************************/
function getOne(cid){
	
	$.ajax({
		url:path+"cus.do?method=selectOne",
		data:{"cid":cid},
		dataType:'json',
		type:'post',
		success:function(cus){
			$("#cname").val(cus.cname);
			$("#ccard").val(cus.ccard);
			var sex=cus.csex;
			form.val('example',{
				'csex':cus.csex
			})
			$("#ctel").val(cus.ctel);
			$("#cteltwo").val(cus.cteltwo);
			oldeCcard=cus.ccard;
			oldeCtel=cus.ctel;
			oldeCteltwo=cus.cteltwo;
		}
	});
}

/****************************************************失去焦点事件**********************************************************/
function getCcard(){
	//身份证号
	$("#ccard").blur(function(){
		var ccard=$(this).val();
		if(ccard.length==0){
			layer.msg('身份证号不能为空!',{icon : 2,time : 2000});
		}else{
			if(oldeCcard!=ccard){
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
		}
	});
}

function getCtel(){
	//客户电话
	$("#ctel").blur(function(){
		var ctel=$(this).val();
		if(ctel.length==0){
			layer.msg('客户电话不能为空!',{icon : 2,time : 2000});
		}else{
			if(oldeCtel!=ctel){
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
		}
	});
}

function getCteltwo(){
	//备用电话
	$("#cteltwo").blur(function(){
		var cteltwo=$(this).val();
		if(cteltwo.length==0){
			layer.msg('备用电话不能为空!',{icon : 2,time : 2000});
		}else{
			if(oldeCteltwo!=cteltwo){
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
		}
	});
}

/********************************************************开始修改***********************************************/
function getUpd(cid){
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
	}else{
		var cus="cname="+cname+"&ccard="+ccard+"&csex="+csex+"&ctel="+ctel+"&cteltwo="+cteltwo+"&cid="+cid
		$.post(path+"cus.do?method=update",cus,function(count){
			if(count>0){
				//关闭这个增加层
  		      	layer.msg('修改成功！', {icon : 1,time : 2000});
    		      var index = parent.layer.getFrameIndex(window.name); //获取窗口索引(真正的关 )
				  parent.layer.close(index);
			}
		},'json');
	}
});	
}

