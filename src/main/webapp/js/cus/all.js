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
	
	myAdd();//新增
	getLastAllAction();//操作
});
/************************************************************公共*************************************************************************/
function getAll(x,y){
	//第一步:构造动态表头
	table.render({
		elem:'#test',//要绑定数据的地方
		url:path+"cus.do?method=all&begin="+x+"&pages="+y,
		cellMinWidth:50,//最小列宽
		cols:[[
			{field:'cid',title:'客户编号',sort:true,align:'center'},
			{field:'cname',title:'客户名称',align:'center'},
			{field:'csex',title:'客户性别',align:'center'},
			{field:'ctel',title:'客户电话 ',align:'center'},
			{field:'cteltwo',title:'备用电话',align:'center'},
			{field:'ccard',title:'身份证号',align:'center'},
			{field:'erealname',title:'经办人',align:'center'},
			{field:'right',title:'操作',align:'center',toolbar:'#barDemo'}
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

/*************************************************************************************************************************/

/*****************************新增按钮上的事件******************************/
function myAdd(){
	$("#add").click(function(){
		layer.open({
			type:2,
			title:"新增客户登陆信息",
			area:['60%','60%'],
			shadeClose:false,
			skin:'layui-layer-white',//加上边框颜色
			maxmin:true,
			content:[path+"cus/add.jsp"],
			end:function(){
				getAll(begin, pages);
			}
		});
	});
}
/**********************************(查看、修改、删除)************************************/
function getLastAllAction(){
	table.on('tool(demo)',function(obj){
		//第一步:得到主键值
		var cid=obj.data.cid;//得到主键对象
		//第二步:区分动作(查看、修改、删除)
		var action=obj.event;
		if(action=='upd'){
			getUpp(cid);
		}	
	});
}

/***********************************修改按钮上的时间************************************/
function getUpp(cid){
	//得到修改对象的主键值
		//弹出修改层
		layer.open({
			type:2,
			title:'修改客户登陆信息',
			area:['65%','60%'],
			shadeClose:false,
			skin:'layui-layer-white',
			maxmin:true,
			content:[path+"cus/upd.jsp?cid="+cid],
			end:function(){
				getAll(begin, pages);
			}
		});
}

