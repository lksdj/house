var path;
var plid;
$(function() {
	path = $("#path").val();
	//初始化控件
	plid=$("#plid").val();
	//全查询
	getOne();
	
});

/*****************************/
function  getOne()
{
   $.ajax({
	  url:path+"policy.do?method=one",
	  data:{'plid':plid},
	  dataType:'json',
	  type:'post',
	  success:function(mydata)
	  {
		 $("#plsource").html(mydata.plsource);
		 $("#plremark").html(mydata.content);
	  }
   });
}