var path;
var $;
var laydate;
var begin=1;//查询第一页
var pages=5;//每一页显示5条
var rid=0;
var rrent=0;//租金
layui.use(function(){
	$ = layui.$;
	laydate = layui.laydate;//时间显示
	layer = layui.layer;
	path=$("#path").val();
	rid=$("#rid").val();
	date();//显示时间
	
	getCha();
	getZu();
	getAdd();
});
/**************显示时间*****************/
function date(){
	laydate.render({
		elem:'#gnexttime'
	})
}
/***********************续费单查询******************************/
function getCha(){
	$.ajax({
		url:path+"charge.do?method=one",
		data:{"rid":rid},
		dataType:'json',
		type:'post',
		success:function(my){
			rrent=my.rrent;
			//$("#grent").val(rrent);
		}
	});
}

/****************查询之前租金与现在续租判断********************/
function getZu(){
	var money=/^([1-9]\d{0,9}|0)([.]?|(\.\d{1,2})?)$/;
		$("#grent").blur(function(){
			var grent=$(this).val();
			if(grent.length==0){
				layer.msg('预收租金不能为空!',{icon : 2,time : 2000});
			}else if(rrent>grent){
				layer.msg('不能低于最低租'+rrent+"元",{icon : 2,time : 2000});
			}else if(!money.test(grent)){
				layer.msg('租金格式不对,请重新输入!',{icon : 2,time : 2000});
			}
		
			
		});
}
//续租
function getAdd(){
	var money=/^([1-9]\d{0,9}|0)([.]?|(\.\d{1,2})?)$/;
	$("#btn").click(function(){
		var grent=$("#grent").val();
		var gnexttime=$("#gnexttime").val();
		var eid=$("#eid").val();
		if(grent.length==0){
			layer.msg('预收租金不能为空!',{icon : 2,time : 2000});
		}else if(rrent>grent){
			layer.msg('不能低于最低租'+rrent+"元",{icon : 2,time : 2000});
		}else if(!money.test(grent)){
			layer.msg('租金格式不对,请重新输入!',{icon : 2,time : 2000});
		}else if(gnexttime.length==0){
			layer.msg('下次收租日期不能空!',{icon : 2,time : 2000});
		}else{
			var charge="rid="+rid+"&eid="+eid+"&grent="+grent+"&gnexttime="+gnexttime+"&eid="+eid;
			$.post(path+"charge.do?method=insertCharge",charge,function(count){
				if(count>0){
					//关闭这个增加层
	  		      	layer.msg('续租成功！', {icon : 2,time : 2000});
	  		        var index = parent.layer.getFrameIndex(window.name); //获取窗口索引(真正的关 )
					parent.layer.close(index);
				}
			},'json');
		}
	});
	
}
