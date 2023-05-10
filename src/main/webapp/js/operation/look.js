var path;
var $;
var table;
var laypage;
var layer;
var begin=1;//查询第一页
var pages=5;//每一页显示5条
var rid=0;
var hid=0;
layui.use(function(){
	$ = layui.$;
	table = layui.table;// 动态数据表格
	laypage = layui.laypage;//分页工具条
	layer = layui.layer;
	path=$("#path").val();
	rid=$("#rid").val();
	hid=$("#hid").val();
	getAll(begin, pages);//分页查询
});
/***********************************************分页查询**********************************************/
function getAll(x,y){
	//第一步:构造动态表头
	table.render({
		elem:'#test',//要绑定数据的地方
		url:path+"operation.do?method=all&begin="+x+"&pages="+y+"&rid="+rid+"&hid="+hid,
		cellMinWidth:50,//最小列宽
		cols:[[
			{field:'haddress',title:'房号',align:'center'},
			{field:'hnumber',title:'客户姓名',align:'center'},
			{field:'oelectricnumber',title:'电表刻度',align:'center'},
			{field:'owaternumber',title:'水表刻度',align:'center'},
			{field:'ogesnumber',title:'煤气刻度',align:'center'},
			{field:'electric',title:'电费(￥)',align:'center'},
			{field:'water',title:'水费(￥)',align:'center'},
			{field:'gas',title:'煤气费(￥)',align:'center'},
			{field:'total',title:'小计',align:'center'},
			{field:'otime',title:'记录时间',align:'center',style:"color:#FFB800"},
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
				layout : [ 'count', 'prev', 'page', 'next', 'limit', 'refresh','skip' ],//分页的格式
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