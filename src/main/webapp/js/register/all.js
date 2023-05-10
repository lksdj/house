var path;
var $;
var table;
var laypage;
var layer;
var begin=1;//查询第一页
var pages=5;//每一页显示5条
layui.use(function(){
	path=$("#path").val();
	$ = layui.$;
	table = layui.table;// 动态数据表格
	laypage = layui.laypage;//分页工具条
	layer = layui.layer;//弹出提示
	getAll(begin, pages);//查询
	myAdd();//新增
	getLastAllAction();//操作
	myLook();
});
/***********************************************分页查询**********************************************/
function getAll(x,y){
	//第一步:构造动态表头
	table.render({
		elem:'#test',//要绑定数据的地方
		url:path+"register.do?method=all&begin="+x+"&pages="+y+"&rflag="+1,
		cellMinWidth:50,//最小列宽
		cols:[[
			{field:'rid',title:'编号',sort:true,align:'center'},
			{field:'haddress',title:'房屋地址',align:'center'},
			{field:'hnumber',title:'房屋房号',align:'center'},
			{field:'cname',title:'客户姓名 ',align:'center'},
			{field:'ctel',title:'客户电话',align:'center'},
			{field:'erealname',title:'经办人',align:'center',},
			{field:'rdate',title:'登记时间',align:'center',},
			{field:'rdeposit',title:'押金',align:'center',},
			{field:'rrent',title:'预收租金',align:'center',},
			/*{field:'rnexttime',title:'下次收租日期',align:'center',},*/
			{field:'rflag',title:'房屋状态',align:'center',},
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
			$.each(res.data, function (index, house) {
                let td = $(".layui-table tr[data-index=" + index + "]").find("td").eq(9).find("div");//选中行
                if (td.text() == 1) {
                	 td.css('color', '#5FB878');
                     td.text("已出租");
                } else if (td.text() == 0) {
                    td.css('color', '#d2d2d2');
                    td.text("已退租");
                } else {
                }
			});
		}
	});
}




/*******************************新增***********************************/
function myAdd(){
	$("#add").click(function(){
		layer.open({
			type:2,
			title:"新增登记入住信息",
			area:['60%','95%'],
			shadeClose:false,
			skin:'layui-layer-white',//加上边框颜色
			maxmin:true,
			content:path+"register/add.jsp",
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
		var rid=obj.data.rid;//得到主键对象
		//第二步:区分动作(查看、修改、删除)
		var action=obj.event;
		if(action=='upd'){
			myUpd(rid);
		}	
	});
}
/********************************修改**************************************/
function myUpd(rid){
		layer.open({
			type:2,
			title:"修改登记入住信息",
			area:['60%','95%'],
			shadeClose:false,
			skin:'layui-layer-white',//加上边框颜色
			maxmin:true,
			content:path+"register/upd.jsp?rid="+rid,
			end:function(){
				getAll(begin, pages);
			}
		});
}
/********************************修改**************************************/
function myLook(){
	$("#look").click(function(){
		layer.open({
			type:2,
			title:"查看已退租信息",
			area:['50%','95%'],
			shadeClose:false,
			skin:'layui-layer-white',//加上边框颜色
			maxmin:true,
			content:path+"register/alls.jsp",
			end:function(){
				getAll(begin, pages);
			}
		});
	});
}