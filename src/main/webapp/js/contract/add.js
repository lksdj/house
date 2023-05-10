var path="";
var eid;
var $;
var layer;
var laydate;
var form;
layui.use(function(){
	$=layui.$;
	layer=layui.layer;
	form=layui.form;
	path=$("#path").val();
	//增加
	getAdd();
});

/*************上传****************/
function getAdd(){
	$("#btn").click(function(){
		var tname=$("#tname").val();		
		var fe=$("#fe").val();	
		if(tname.length==0){
			 layer.msg('合同名称不能为空!',{icon : 2,time : 2000});
		}else if(fe.length==0){
			 layer.msg('上传文件不能为空!',{icon : 2,time : 2000});
		}else{			
			$.ajaxFileUpload({
				url:path+'contract.do?method=add',
				secureuri:false,
				fileElementId:['fe'],
				data:{
					"tname":tname,
				},
			dataType:'json', //数据格式
			type:'post',  //提交方式
			success:function(count){
				if(count>0){
					//关闭这个增加层,
					 layer.msg('上传成功!',{icon : 2,time : 2000});
					var index = parent.layer.getFrameIndex(window.name); //获取窗口索引(真正的关 )
					parent.layer.close(index);
				}
			}
			});
		}
	});
}


