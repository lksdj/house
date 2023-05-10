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
	layer = layui.layer;
	getAll(begin, pages);//分页查询
	myadd();//新增
	getLastAllAction();
});

/*********************************************分页查询**********************************************/
function getAll(x,y){
	//第一步:构造动态表头
	table.render({
		elem:'#test',//要绑定数据的地方
		url:path+"sort.do?method=all&begin="+x+"&pages="+y,
		cellMinWidth:50,//最小列宽
		cols:[[
			{field:'sid',title:'房屋类别编号',sort:true,align:'center'},
			{field:'sname',title:'房屋类别名称',align:'center'},
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
/**********************************(修改)************************************/
function getLastAllAction(){
	table.on('tool(demo)',function(obj){
		//第一步:得到主键值//得到主键对象
		var sid=obj.data.sid;
		//第二步:区分动作(修改)
		var action=obj.event;
		if(action=='upd'){
			getUpp(sid);//修改
		}
	});
}
/*****************************新增******************************/
function myadd(){
	$("#add").click(function(){
		layer.open({
			type:2,
			title:"新增房屋类别",
			area:['40%','40%'],
			shadeClose:false,
			skin:'layui-layer-white',//加上边框颜色
			maxmin:true,
			content:[path+"sort/add.jsp","no"],
			end:function(){
				getInit();
			}
		});
	});
}
/***********************************修改按钮上的事件************************************/
function getUpp(sid){
	//弹出修改层
	layer.open({
		type:2,
		title:'修改房屋类别',
		area:['40%','40%'],
		shadeClose:false,
		skin:'layui-layer-white',
		maxmin:true,
		content:[path+"sort/upd.jsp?sid="+sid,"no"],
		end:function(){
			getAll(begin, pages);
		}
	});
}
/***************************************删除事件**********************************************/
function getDel(){
	$("body").on("click","#tab #del",function(){
		//得到修改对象主键值
		var sid=$(this).parent().parent().find("td:eq(1)").text();
		//弹出一个询问层
		 layer.confirm('你确定要删除吗？',{btn : [ '确定', '取消' ]},function(){
		     $.post(path+"sort.do?method=del&sid="+sid,'',function(){
		    	      layer.msg('删除成功！', {icon : 1,time : 2000});
		    	      getInit();
    		  },'json');
		   
	   },function(){
		   //空会自动取消
	   });
	});
}

