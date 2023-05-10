var path;
var $;
var laypage;
var layer;
var rid=0;
var hid=0;
var oelectricnumber;
var owaternumber;
var ogesnumber;
layui.use(function(){
	$ = layui.$;
	layer = layui.layer;
	path=$("#path").val();
	rid=$("#rid").val();
	hid=$("#hid").val();
	getOne();
	getAdd();
});


function getOne(){
	alert("hid----"+hid);
	$.ajax({
		url:path+"operation.do?method=selectOne",
		data:{"hid":hid},
		dataType:'json',
		type:'post',
		success:function(e){
			$("#oelectricnumber").prop('placeholder',"刻度不能小于"+e.oelectricnumber);
			$("#owaternumber").prop('placeholder',"刻度不能小于"+e.owaternumber);
			$("#ogesnumber").prop('placeholder',"刻度不能小于"+e.ogesnumber);
			 oelectricnumber=e.oelectricnumber;
			 owaternumber=e.owaternumber;
			 ogesnumber=e.ogesnumber;
		}
	});
}
function getAdd(){
	$("#btn").click(function(){
	var oelectricnumbers=$("#oelectricnumber").val();
	var owaternumbers=$("#owaternumber").val();
	var ogesnumbers=$("#ogesnumber").val();
	
	if(oelectricnumber>oelectricnumbers){
		layer.msg('电表刻度不能小于!'+oelectricnumber+"上次抄表刻度", {icon : 2,time : 2000});
	}else if(owaternumber>owaternumbers){
		layer.msg('水表刻度不能小于!'+owaternumber+"上次抄表刻度", {icon : 2,time : 2000});
	}else if(ogesnumber>ogesnumbers){
		layer.msg('水表刻度不能小于!'+ogesnumber+"上次抄表刻度", {icon : 2,time : 2000});
	}else if(oelectricnumbers.length==0){
		layer.msg('电表刻度不能为空!', {icon : 2,time : 2000});
	}else if(owaternumbers.length==0){
		layer.msg('水表刻度不能为空!', {icon : 2,time : 2000});
	}else if(ogesnumbers.length==0){
		layer.msg('煤气刻度不能为空!', {icon : 2,time : 2000});
	}else{
		$.ajax({
			url:path+"operation.do?method=add", 
			data:{
				"hid":hid,
				"oelectricnumber":oelectricnumbers,
				"owaternumber":owaternumbers,
				"ogesnumber":ogesnumbers
			},
			dataType:'json',
			type:'post',
			success:function(e){
				$("#oelectricnumber").val(e.oelectricnumber);
				$("#owaternumber").val(e.owaternumber);
				$("#ogesnumber").val(e.ogesnumber);
				 oelectricnumber=e.oelectricnumber;
				 owaternumber=e.owaternumber;
				 ogesnumber=e.ogesnumber;
			}
		});
		
	}
		
	});
}