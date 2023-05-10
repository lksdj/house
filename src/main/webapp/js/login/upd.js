var path;
var flag=0;
var $;
var layui;
var psw=0;
var eid=0;
layui.use(function(){
	$ = layui.$;
	layer = layui.layer;//提示
	$("#psw1").focus();//获取焦点
	path=$("#path").val();
	psw=$("#psw").val();
	eid=$("#eid").val();
	getClick();
});
function getClick(){
	$("#btn").click(function(){
	var	psw2=$("#psw2").val();//新密码
	var	psw3=$("#psw3").val();//确认密码
	 if(psw2.length==0){
		layer.msg('新密码不能为空!',{icon : 2,time : 2000});
	}else if(psw3.length==0){
		layer.msg('确认密码不能为空!',{icon : 2,time : 2000});
	}else if(psw2!=psw3){
		layer.msg('密码不一致,请重新输入!',{icon : 2,time : 2000});
	}else{
		var emp="epsw="+psw3+"&eid="+eid;
		$.post(path+"login.do?method=upd",emp,function(count){
			if(count>0){
				//关闭这个增加层
  		      	layer.msg('修改成功!', {icon : 1,time : 2000});
    		     top.location.href='http://localhost:8080/house/main/login.jsp';
			}else{
				layer.msg('密码错误!',{icon : 2,time : 2000});
			}
		},'json');
	}
	});
}
