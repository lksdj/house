var path;
var flag=0;
//新增
$(function() {
	path=$("#path").val();
	//获取焦点
	$("#jname").focus();
	//失去焦点事件
	getNameBlur();
	//提交 事件
	getBtn();
});

/************************************************************************************************************************/
//失去焦点事件
function getNameBlur(){
	$("#jname").blur(function(){
		var jname=$(this).val();
		if(jname.length==0){
			layer.msg('岗位名称不能为空!',{icon : 2,time : 2000});
		}else{
			//判断是否有重复的去数据库里查一下
			$.ajax({
				url:path+"job.do?method=ck",
				data:{"jname":jname},
				dataType:'json',
				type:'post',
				success:function(count){
					//alert(count)
					if(count>0){
						//有重复的岗位不能添加
						layer.msg('对不起岗位已存在!',{icon : 2,time : 2000});
						flag=1;
					}else{
						flag=0;
					}
				}
			});
		}
	});
}
function getBtn(){
	$("#btn").click(function(){
		var jname=$("#jname").val();
		if(jname.length==0){
			layer.msg('岗位名称不能为空!',{icon : 2,time : 2000});
		}else if(flag==1){
			layer.msg('对不起岗位已存在!',{icon : 2,time : 2000});
		}else{
			//第二种访问后台的方式
			var job="jname="+jname;
			$.post(path+"job.do?method=add",job,function(count){
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





