var path;
var $;
var begin=1;//查询第一页
var pages=5;//每一页显示5条
var table;
var laypage;
var layer;
layui.use(function(){
	$ = layui.$;
	path=$("#path").val();
	table = layui.table;// 动态数据表格
	laypage = layui.laypage;//分页工具条
	layer = layui.layer;
	getAll(begin, pages);//分页查询
	getAllDel();//批量归档
});
/************************************************************公共*************************************************************************/
function getAll(x,y){
	//第一步:构造动态表头
	table.render({
		elem:'#test',//要绑定数据的地方
		url:path+"emp.do?method=revocationsss&begin="+x+"&pages="+y,
		cellMinWidth:50,//最小列宽
		cols:[[
			{type:'checkbox'},//批量删除
			{field:'eid',title:'员工编号',sort:true},
			{field:'pname',title:'部门名称'},
			{field:'jname',title:'岗位名称'},
			{field:'erealname',title:'真实姓名 '},
			{field:'eaddress',title:'员工地址'},
			{field:'eflag',title:'是否在职',align:'center',toolbar:'#eflag',style:"color:red"},
			{field:'right',title:'操作',align:'center',toolbar:'#barDemo'}
		]],
		page : false,// 不显示默认的分页样式,
		id : 'hu',// 你要操作所选择的对象的主键值
		done : function(res, curr, count) {
			$("#label").text("共有数据:"+count+"条");
			laypage.render({
				elem : 'mypage', // 要邦定数据的地方(这地要注意一下，没有#)
				count : count,// 共有多少条记录
				curr : begin,// 当前是哪一页
				limit : pages,// 每一页多少条
				limits : [5,10,15,20], // 自己定义的下拉框的内容
				layout : [ 'count', 'prev', 'page', 'next', 'limit', 'refresh','skip' ],// 分页的格式
				jump : function(obj, first) {
					if (!first) {
						begin = obj.curr;
						pages = obj.limit;
						getAll(begin, pages);
					}
				}
			});
		}
	});
}
/*************************************批量恢复**************************************************/
function getAllDel(){
	$("#delall").bind("click",function(){
		var data=table.checkStatus('hu').data;
		var delid="";
		var count=data.length;
		$.each(data,function(index,xx){
			 delid+=xx.eid+",";
		});
		if(delid==""){
			layer.msg('最少要选择一个！', {icon : 7,time : 2000});
		}else{
			 layer.confirm('你确定要归档这'+count+'条员工信息吗？',{icon : 7},function(){
			     $.post(path+"emp.do?method=deleteAlls&eid="+delid,'',function(){
			    	      layer.msg('归档成功！', {icon : 1,time : 2000});
			    	      getAll(begin, pages);
	    		  },'json');
			   
		   },function(){
			   //空会自动取消
		   });
		}
	});
}