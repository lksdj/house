var path;
var flag=0;
var aid=0;
var oldname="";
$(function(){
	path=$("#path").val();
	aid=$("#aid").val();
	getOne();//根据主键id查询这个人的消息
	getNameBlur();//判断岗位重复
	getBtn();//判断并提交修改
});

/*************************根据ID查询单个********************************/
function getOne(){
	$.ajax({
		url:path+"area.do?method=one",
		data:{"aid":aid},
		dataType:'json',
		type:'post',
		success:function(a){
			$("#aname").val(a.aname);
			oldname=a.aname;
		}
	});
}
/******************************失去焦点**********************************/
function getNameBlur(){
	$("#aname").blur(function(){
		var aname=$(this).val();
		if(aname.length==0){
			layer.msg('片区名称不能为空!',{icon : 2,time : 2000});
		}else{
			if(aname!=oldname){
				//拦截----判断是否改成了别岗位的名字(数据库中是否存在)
				$.ajax({
					url:path+"area.do?method=ck",
					data:{'aname':aname},
					dataType:'json',
					type:'post',
					success:function(count){
						if(count>0){
							//重复
							layer.msg('对不起此岗位已存在!',{icon : 2,time : 2000});
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
/***********************************修改***************************************/
function getBtn(){
	$("#btn").click(function(){
		var aname=$("#aname").val();
		if(aname.length==0){
			layer.msg('岗位名称不能为空!',{icon : 2,time : 2000});
		}else if(flag==1){
			layer.msg('岗位重复!',{icon : 2,time : 2000});
		}else{
			//访问后台的方式
			var area="aname="+aname+"&aid="+aid;
			$.post(path+"area.do?method=upd",area,function(count){
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
