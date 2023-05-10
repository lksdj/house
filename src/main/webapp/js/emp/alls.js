var eid=0;
var path;
var $;
layui.use(function(){
	$ = layui.$;
	eid=$("#eid").val();
	path=$("#path").val();
	getOne();
});
function getOne(){
	$.ajax({
		url:path+"emp.do?method=updone",
		data:{"eid":eid},
		dataType:'json',
		type:'post',
		success:function(my){
			$("#eids").val(my.eid);
			 $("#erealname").val(my.erealname);
			 $("#pname").val(my.pname);
			 $("#jname").val(my.jname);
			 $("#ename").val(my.ename);
			 $("#epsw").val(my.epsw);
			 $("#etel").val(my.etel);
			 $("#eaddress").val(my.eaddress);
			 $("#eremark").val(my.eremark);
		}
	});
}