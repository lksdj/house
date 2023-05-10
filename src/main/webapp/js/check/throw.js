var path;
var $;
var layer;
var laydate;
var form;
var hflag=0;
var kflag=0;
var eid=0;
var rid=0;
layui.use(function(){
	$ = layui.$;
	laydate = layui.laydate;//时间显示
	layer = layui.layer;
	form = layui.form;
	path=$("#path").val();
	 rid=$("#rid").val();
	 eid=$("#eid").val();
	date();//时间
	
	getW();
	getAdd();//退租
});
/**************显示时间*****************/
function date(){
	laydate.render({
		elem:'#ktime'
	})
}

function getW(){
	form.on('switch(close)',function(mydata){
		var close=this.checked;
		if(close==true){
			hflag=2;//维修中
			kflag=2;
		}else{
			hflag=0;//待出租
			kflag=0;
		}
	})
}

function getAdd(){
	
	$("#btn").click(function(){
		var money=/^([1-9]\d{0,9}|0)([.]?|(\.\d{1,2})?)$/;
		var krent=$("#krent").val();
		var ktime=$("#ktime").val();
		var kremark=$("#kremark").val();
		var hnumber=$("#hnumber").val();
		if(krent.length==0){
			layer.msg('退租金额不能为空!',{icon : 2,time : 2000});
		}else if(ktime.length==0){
			layer.msg('退租日期不能为空!',{icon : 2,time : 2000});
		}else if(kremark.length==0){
			layer.msg('退租备注不能为空!',{icon : 2,time : 2000});
		}else{
				var charge="rid="+rid+"&eid="+eid+"&krent="+krent+"&ktime="+ktime+"&kremark="+kremark+"&kflag="+kflag+"&hnumber="+hnumber+"&hflag="+hflag;
				$.post(path+"check.do?method=update",charge,function(count){
					if(count>0){
						//关闭这个增加层
		  		      	layer.msg('退租成功！', {icon : 2,time : 2000});
		  		        var index = parent.layer.getFrameIndex(window.name); //获取窗口索引(真正的关 )
						parent.layer.close(index);
					}
				},'json');
		}
	});
	
}
