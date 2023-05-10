var path;
var flag=0;
var pid=0;
var oldname="";
$(function(){
	path=$("#path").val();
	pid=$("#pid").val();
	//根据主键id查询这个人的消息
	getOne();
	//判断部门重复
	getNameBlur();
	//判断并提交修改
	getBtn();
});
/*************************根据ID查询单个*****************************/
function getOne(){
	$.ajax({
		url:path+"dept.do?method=one",
		data:{"pid":pid},
		dataType:'json',
		type:'post',
		success:function(dept){
			$("#pname").val(dept.pname);
			$("#premark").val(dept.premark);
			oldname=dept.pname;
		}
	});
}
/*************************************判断部门**********************************/
function getNameBlur(){
	$("#pname").blur(function(){
		var pname=$(this).val();
		if(pname.length==0){
			layer.msg('部门名称不能为空!',{icon : 2,time : 2000});
		}else{
			if(pname!=oldname){
				//拦截----判断是否改成了别部门的名字(数据库中是否存在)
				$.ajax({
					url:path+"dept.do?method=ck",
					data:{'pname':pname},
					dataType:'json',
					type:'post',
					success:function(count){
						if(count>0){
							//重复
							layer.msg('对不起此部门已存在!',{icon : 2,time : 2000});
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
/*********************************修改***************************************/
function getBtn(){
	$("#btn").click(function(){
		var pname=$("#pname").val();
		var premark=$("#premark").val();
		if(pname.length==0){
			layer.msg('部门名称不能为空!',{icon : 2,time : 2000});
		}else if(flag==1){
			layer.msg('部门重复!',{icon : 2,time : 2000});
		}else if(premark.length==0){
			layer.msg('备注不能为空!',{icon : 2,time : 2000});
		}else{
			//访问后台的方式
			var dept="pname="+pname+"&premark="+premark+"&pid="+pid;
			$.post(path+"dept.do?method=upd",dept,function(count){
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
