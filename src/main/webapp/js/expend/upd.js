var path;
var $;
var layui;
var form;
var xid=0;
layui.use(function(){
	$ = layui.$;
	form=layui.form;
	path=$("#path").val();
	xid=$("#xid").val();
	getOne();//单查询
	getAdd();//修改
});
/***************************************************单查询**********************************************************/
function getOne(){
	$.post(path+"expend.do?method=one&xid="+xid,'',function(my){
		 $("#xmoney").val(my.xmoney);
		 $("#xremark").val(my.xremark);
		 $("#xsource").val(my.xsource);
		 form.render($("#xsource"));
	},'json');
}

/**************************************************修改*********************************************************/
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
			    	url:path+"expend.do?method=upd",
			    	data:{
			    		"xmoney":xmoney,
			    		"xsource":xsource,
			    		"xremark":xremark,
			    		"xid":xid,
			    	},
			    	dataType:'json',
			    	type:'post',
			    	success:function(count){
			    		if(count>0){
							//关闭这个增加层
			  		      	layer.msg('修改成功！', {icon : 1,time : 2000});
			    		      var index = parent.layer.getFrameIndex(window.name); //获取窗口索引(真正的关 )
							  parent.layer.close(index);
						}
			    	}
			 			
			    });
	}
});
}	
