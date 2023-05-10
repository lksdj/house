var path;
var $;
var table;
var laypage;
var layer;
var begin=1;//查询第一页
var pages=5;//每一页显示5条
layui.use(function(){
	$ = layui.$;
	table = layui.table;// 动态数据表格
	laypage = layui.laypage;//分页工具条
	layer = layui.layer;
	path=$("#path").val();
	getAll(begin, pages);//分页查询
	getLastAllAction();//维修
});
/***********************************************分页查询**********************************************/
function getAll(x,y){
	//第一步:构造动态表头
	table.render({
		elem:'#test',//要绑定数据的地方
		url:path+"repair.do?method=all&begin="+x+"&pages="+y,
		cellMinWidth:50,//最小列宽
		cols:[[
			{field:'qid',title:'编号',sort:true,align:'center'},
			{field:'aname',title:'房屋片区',align:'center'},
			{field:'haddress',title:'房屋地址',align:'center'},
			{field:'hnumber',title:'房屋房号',align:'center'},
			{field:'qtime',title:'报损时间',align:'center'},
			{field:'qremark',title:'备注说明',align:'center'},
			{field:'erealname',title:'经办人',align:'center',},
			//{field:'gnexttime',title:'下次收租日期',align:'center',style:"color:#FFB800"},
			{field:'right',title:'操作',align:'center',toolbar:'#barDemo'}
		]], 
		page : false,// 不显示默认的分页样式,
		id : 'hu',// 你要操作所选择的对象的主键值
		data:[],
		done : function(res, curr, count) {
			$(".layui-table-box").find("[data-field='hid']").css("display","none");
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
/**********************************(退租)************************************/
function getLastAllAction(){
	table.on('tool(demo)',function(obj){
		//第一步:得到主键值
		var hid=obj.data.hid;//得到hid
		alert("hid:"+hid);
		var qid=obj.data.qid;//得到qid
		//第二步:区分动作(查看、修改、解雇)
		var action=obj.event;
		if(action=='add'){
			//查看
			getLook(hid,qid);
		}
	});
}
/****************************************退租******************************************/
function getLook(hid,qid){
	alert("hid   "+hid+"   qid"+qid);
	layer.open({
		type:2,
		title:'维修',
		area:['40%','80%'],
		shadeClose:false,
		skin:'layui-layer-white',
		maxmin:true,
		content:[path+"repair/throw.jsp?qid="+qid+"&hid="+hid],
		end:function(){
			getAll(begin, pages);
		}
	});
}

