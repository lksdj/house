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
	var xmoney=$("#xmoney").val();
	var xsource=$("#xsource").val();
	var xremark=$("#xremark").val();
	if(xmoney.length==0){
		layer.msg('支出金额不能为空!',{icon : 2,time : 2000});
	}else if(xsource.length==0){
		layer.msg('来源条目不能为空!',{icon : 2,time : 2000});
	}else if(xremark.lenght==0){
		layer.msg('备注不能为空!',{icon : 2,time : 2000});
	}else{
		 $.ajax({
		    	url:path+"expend.do?method=add",
		    	data:{
		    		"xmoney":xmoney,
		    		"xsource":xsource,
		    		"xremark":xremark,
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
