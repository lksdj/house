var path;
var $;
var layui;
var form;
var exsit = 0;
layui.use(function(){
	$ = layui.$;
	form=layui.form;
	path=$("#path").val();
	getAdd();//新增
});

/**************************************************新增*********************************************************/
function getAdd(){
	$("#btn").click(function(){
	var nmoney=$("#nmoney").val();
	var nsource=$("#nsource").val();
	var nremark=$("#nremark").val();
	if(nmoney.length==0){
		layer.msg('收入金额不能为空!',{icon : 2,time : 2000});
	}else if(nsource.length==0){
		layer.msg('收入条目不能为空!',{icon : 2,time : 2000});
	}else if(nremark.lenght==0){
		layer.msg('备注不能为空!',{icon : 2,time : 2000});
	}else{
		 $.ajax({
		    	url:path+"income.do?method=add",
		    	data:{
		    		"nmoney":nmoney,
		    		"nsource":nsource,
		    		"nremark":nremark,
		    	},
		    	dataType:'json',
		    	type:'post',
		    	success:function(count){
		    		if(count>0){
						//关闭这个增加层
		  		      	layer.msg('添加成功！', {icon : 1,time : 2000});
		    		      var index = parent.layer.getFrameIndex(window.name); //获取窗口索引(真正的关 )
						  parent.layer.close(index);
					}
		    	}
		 			
		    });
	}
});
}	
