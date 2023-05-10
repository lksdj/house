var path;
var flag=0;
//新增
$(function() {
	path=$("#path").val();
	$("#aname").focus();//获取焦点
	getNameBlur();//失去焦点事件
	getBtn();//提交 事件
});
/*************************************失去焦点事件**************************************/
function getNameBlur(){
	$("#aname").blur(function(){
		var aname=$(this).val();
		if(aname.length==0){
			layer.msg('片区名称不能为空!',{icon : 2,time : 2000});
		}else{
			//判断是否有重复的去数据库里查一下
			$.ajax({
				url:path+"area.do?method=ck",
				data:{"aname":aname},
				dataType:'json',
				type:'post',
				success:function(count){
					if(count>0){
						//有重复的片区不能添加
						layer.msg('对不起片区已存在!',{icon : 2,time : 2000});
						flag=1;
					}else{
						flag=0;
					}
				}
			});
		}
	});
}
/**************************************新增****************************************/
function getBtn(){
	$("#btn").click(function(){
		var aname=$("#aname").val();
		if(aname.length==0){
			layer.msg('片区名称不能为空!',{icon : 2,time : 2000});
		}else if(flag==1){
			layer.msg('片区以重复!',{icon : 2,time : 2000});
		}else{
			//第二种访问后台的方式
			var job="aname="+aname;
			$.post(path+"area.do?method=add",job,function(count){
				if(count>0){
					//关闭这个增加子层
					layer.msg('添加成功!',{icon:1,time:3000});
					 var index = parent.layer.getFrameIndex(window.name); //获取窗口索引(真正的关 )
					 parent.layer.close(index);
				}
			},'json');
		}
	});
}
