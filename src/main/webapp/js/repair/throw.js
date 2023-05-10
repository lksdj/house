var path;
var $;
var layer;
var laydate;
var form;
var hid=0;
var qid=0;
layui.use(function(){
	$ = layui.$;
	laydate = layui.laydate;//时间显示
	layer = layui.layer;
	form = layui.form;
	path=$("#path").val();
	getAdd();//退租
	hid=$("#hid").val();
	qid=$("#qid").val();
});
/**************显示时间*****************/
/*function date(){
	laydate.render({
		elem:'#ktime'
	})
}*/
function getAdd(){
	$("#btn").click(function(){
		
		var qremark=$("#qremark").val();
		alert("hid--"+hid+"qid--"+qid+"qremark--"+qremark);
		if(qremark.length==0){
			layer.msg('维修备注不能为空!',{icon : 2,time : 2000});
		}else{
				var repair="hid="+hid+"&qid="+qid+"&qremark="+qremark+"&hflag="+0;
				$.post(path+"repair.do?method=upd",repair,function(count){
					if(count>0){
						//关闭这个增加层
		  		      	layer.msg('维修成功！', {icon : 2,time : 2000});
		  		        var index = parent.layer.getFrameIndex(window.name); //获取窗口索引(真正的关 )
						parent.layer.close(index);
					}
				},'json');
		}
	});
	
}
