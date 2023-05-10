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
	myAdd();//新增
	getLastAllAction();
});
/***********************************************分页查询**********************************************/
function getAll(x,y){
	//第一步:构造动态表头
	table.render({
		elem:'#test',//要绑定数据的地方
		url:path+"expend.do?method=all&begin="+x+"&pages="+y,
		cellMinWidth:50,//最小列宽
		cols:[[
			{field:'xid',title:'编号',sort:true,align:'center'},
			{field:'xmoney',title:'支出金额',align:'center'},
			{field:'xsource',title:'来源条目',align:'center'},
			{field:'xtime',title:'时间 ',align:'center'},
			{field:'xremark',title:'备注时间',align:'center'},
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
/**********************************************新增************************************************/
function myAdd(){
	$("#add").click(function(){
		layer.open({
			type:2,
			title:"新增现金收入流水",
			area:['50%','70%'],
			shadeClose:false,
			skin:'layui-layer-white',//加上边框颜色
			maxmin:true,
			content:[path+"expend/add.jsp"],
			end:function(){
				getAll(begin, pages);
			}
		});
	});
}
/**********************************(查看、修改、解雇)************************************/
function getLastAllAction(){
	table.on('tool(demo)',function(obj){
		//第一步:得到主键值
		var xid=obj.data.xid;//得到主键对象
		//第二步:区分动作(修改)
		var action=obj.event;
		if(action=='upd'){
			//修改
			getUpp(xid);
		}
	});
}
/***************************************************修改**************************************************/
function getUpp(xid){
		//弹出修改层
		layer.open({
			type:2,
			title:'修改现金收入流水',
			area:['50%','70%'],
			shadeClose:false,
			skin:'layui-layer-white',
			maxmin:true,
			content:[path+"expend/upd.jsp?xid="+xid],
			end:function(){
				getAll(begin, pages);
			}
		});
}

