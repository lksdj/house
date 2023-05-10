var path;
var $;
var table;
var laypage;
var layer;
var begin=1;//查询第一页
var pages=5;//每一页显示5条
var rid=0;
layui.use(function(){
	$ = layui.$;
	table = layui.table;// 动态数据表格
	laypage = layui.laypage;//分页工具条
	layer = layui.layer;
	path=$("#path").val();
	rid=$("#rid").val();
	getAll(begin, pages);//分页查询
});
/***********************************************分页查询**********************************************/
function getAll(x,y){
	
	
	//第一步:构造动态表头
	table.render({
		elem:'#test',//要绑定数据的地方
		url:path+"charge.do?method=detail&begin="+x+"&pages="+y+"&rid="+rid,
		cellMinWidth:50,//最小列宽
		cols:[[
			{field:'gid',title:'编号',sort:true,align:'center'},
			{field:'haddress',title:'房屋地址',align:'center'},
			{field:'hnumber',title:'房屋房号',align:'center'},
			{field:'cname',title:'客户姓名 ',align:'center'},
			{field:'ctel',title:'客户电话',align:'center'},
			{field:'grent',title:'收费记录',align:'center'},
			{field:'gnexttime',title:'下次收租日期',align:'center',style:"color:#FFB800"},
			{field:'erealname',title:'经办人',align:'center'},
		]], 
		page : false,// 不显示默认的分页样式,
		id : 'hu',// 你要操作所选择的对象的主键值
		data:[],
		done : function(res, curr, count) {
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