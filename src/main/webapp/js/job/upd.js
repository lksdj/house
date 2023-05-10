var path;
var flag=0;
var jid=0;
var oldname="";
$(function(){
	path=$("#path").val();
	jid=$("#jid").val();
	//根据主键id查询这个人的消息
	getOne();
	//判断岗位重复
	getNameBlur();
	//判断并提交修改
	getBtn();
});


/*************************根据ID查询单个********************************/
function getOne(){
	$.ajax({
		url:path+"job.do?method=one",
		data:{"jid":jid},
		dataType:'json',
		type:'post',
		success:function(job){
			//$("#jid").val(job.jid);
			$("#jname").val(job.jname);
			oldname=job.jname;
		}
	});
}

function getNameBlur(){
	$("#jname").blur(function(){
		var jname=$(this).val();
		if(jname.length==0){
			layer.msg('岗位名称不能为空!',{icon : 2,time : 2000});
		}else{
			if(jname!=oldname){
				//拦截----判断是否改成了别岗位的名字(数据库中是否存在)
				$.ajax({
					url:path+"job.do?method=ck",
					data:{'jname':jname},
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


/****************************判断完进行后台修改***************************************/
function getBtn(){
	$("#btn").click(function(){
		var jname=$("#jname").val();
		if(jname.length==0){
			layer.msg('岗位名称不能为空!',{icon : 2,time : 2000});
		}else if(flag==1){
			layer.msg('对不起此岗位已存在!',{icon : 2,time : 2000});
		}else{
			//访问后台的方式
			var job="jname="+jname+"&jid="+jid;
			$.post(path+"job.do?method=upd",job,function(count){
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


