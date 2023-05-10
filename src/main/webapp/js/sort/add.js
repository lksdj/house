var path;
var flag=0;
$(function() {
	path=$("#path").val();
	$("#sname").focus();//获取焦点
	getNameBlur();//失去焦点事件
	getBtn();//提交 事件
});

/***********************************失去焦点事件***************************************/
function getNameBlur(){
	$("#sname").blur(function(){
		var sname=$(this).val();
		if(sname.length==0){
			layer.msg('房屋类别不能为空!',{icon : 2,time : 2000});
		}else{
			//判断是否有重复的去数据库里查一下
			$.ajax({
				url:path+"sort.do?method=ck",
				data:{"sname":sname},
				dataType:'json',
				type:'post',
				success:function(count){
					//alert(count)
					if(count>0){
						//有重复的片区不能添加
						layer.msg('对不起房屋类别已存在!',{icon : 2,time : 2000});
						flag=1;
					}else{
						flag=0;
					}
				}
			});
		}
	});
}
/************************************修改******************************/
function getBtn(){
	$("#btn").click(function(){
		var sname=$("#sname").val();
		if(sname.length==0){
			layer.msg('房屋类别不能为空!',{icon : 2,time : 2000});
		}else if(flag==1){
			layer.msg('房屋类别以重复!',{icon : 2,time : 2000});
		}else{
			//第二种访问后台的方式
			var job="sname="+sname;
			$.post(path+"sort.do?method=add",job,function(count){
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

