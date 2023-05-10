var path;
var flag=0;
var $;
var layui;
var layer;
layui.use(function(){
	$ = layui.$;
	layer = layui.layer;//提示
	$("#ename").focus();
	path=$("#path").val();
	getlogin();
	getClick();
});
function getlogin(){
	$("#ename").blur(function(){

		var ename=$(this).val();
		if(ename.length==0){
			layer.msg('账号不能为空!',{icon : 2,time : 2000});
		}else{
				//拦截----判断是否改成了别部门的名字(数据库中是否存在)
				$.ajax({
					url:path+"login.do?method=ename",
					data:{'ename':ename},
					dataType:'json',
					type:'post',
					success:function(count){
						if(count>0){
							layer.msg('账号输入正确!',{icon : 1,time : 2000});

							flag=0;//再次赋值来判断
						}else{
							layer.msg('账号不存在，请输入正确的账号!',{icon : 2,time : 2000});
							flag=1;
						}
					}
				});
		}
	});
}
function getClick(){
	$("#btn").click(function(){
	var	ename=$("#ename").val();
	var	epsw=$("#epsw").val();
	if(flag==1){
		layer.msg('账号不存在，请输入正确的账号!',{icon : 2,time : 2000});
	}else if(epsw.length==0){
		layer.msg('密码不能为空!',{icon : 2,time : 2000});
	}else{
		var emp="ename="+ename+"&epsw="+epsw;
		$.post(path+"login.do?method=login",emp,function(count){
			if(count>0){
				//关闭这个增加层
  		      	layer.msg('登陆成功!', {icon : 1,time : 2000});
    		     window.location.href=path+"emp.do?method=ru";
			}else{
				layer.msg('密码错误!',{icon : 2,time : 2000});
			}
		},'json');
	}
	});
}
