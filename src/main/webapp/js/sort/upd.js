var path;
var flag=0;
var sid=0;
var oldname="";
$(function(){
	path=$("#path").val();
	sid=$("#sid").val();
	getOne();//根据主键id查询这个人的消息
	getNameBlur();//判断房屋类别名称重复
	getBtn();//判断并提交修改
});
/*************************根据ID查询单个********************************/
function getOne(){
	$.ajax({
		url:path+"sort.do?method=one",
		data:{"sid":sid},
		dataType:'json',
		type:'post',
		success:function(a){
			$("#sname").val(a.sname);
			oldname=a.sname;
		}
	});
}
/*****************************失去焦点*********************************/
function getNameBlur(){
	$("#sname").blur(function(){
		var sname=$(this).val();
		if(sname.length==0){
			layer.msg('房屋类别不能为空!',{icon : 2,time : 2000});
		}else{
			if(sname!=oldname){
				//拦截----判断是否改成了别房屋类别名称的名字(数据库中是否存在)
				$.ajax({
					url:path+"sort.do?method=ck",
					data:{'sname':sname},
					dataType:'json',
					type:'post',
					success:function(count){
						if(count>0){
							//重复
							layer.msg('对不起此房屋类别已存在!',{icon : 2,time : 2000});
							flag=1;//再次赋值来判断
						}else{
							flag=0;
						}
					}
				});
			}
		}
	});
}


/****************************判断完进行后台修改***************************************/
function getBtn(){
	$("#btn").click(function(){
		var sname=$("#sname").val();
		if(sname.length==0){
			layer.msg('房屋类别不能为空!',{icon : 2,time : 2000});
		}else if(flag==1){
			layer.msg('房屋类别重复!',{icon : 2,time : 2000});
		}else{
			//访问后台的方式
			var job="sname="+sname+"&sid="+sid;
			$.post(path+"sort.do?method=upd",job,function(count){
				if(count>0){
					//关闭修改层
					layer.msg('修改成功!',{icon:1,time:100000});
					var index = parent.layer.getFrameIndex(window.name); //获取窗口索引(关 )
					parent.layer.close(index);
				}
			},'json');
		}
	});
	
}


