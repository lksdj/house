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
	getAllDel();
	getLastAllAction();
});
/***********************************************分页查询**********************************************/
function getAll(x,y){
	//第一步:构造动态表头
	table.render({
		elem:'#test',//要绑定数据的地方
		url:path+"emp.do?method=all&begin="+x+"&pages="+y,
		cellMinWidth:50,//最小列宽
		cols:[[
			{type:'checkbox'},//批量解雇
			{field:'eid',title:'员工编号',sort:true,align:'center'},
			{field:'pname',title:'部门名称',align:'center'},
			{field:'jname',title:'岗位名称',align:'center'},
			{field:'erealname',title:'真实姓名 ',align:'center'},
			{field:'eaddress',title:'员工地址',align:'center'},
			{field:'eflag',title:'是否在职',align:'center',toolbar:'#eflag',style:"color:#5FB878"},
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
			title:"新增员工",
			area:['50%','95%'],
			shadeClose:false,
			skin:'layui-layer-white',//加上边框颜色
			maxmin:true,
			content:[path+"emp/add.jsp"],
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
		var eid=obj.data.eid;//得到主键对象
		//第二步:区分动作(查看、修改、解雇)
		var action=obj.event;
		if(action=='look'){
			//查看
			getLook(eid);
		}else if(action=='upd'){
			//修改
			getUpp(eid);
		}else{
			getDel(eid);
		}
	});
}
/****************************************查看******************************************/
function getLook(eid){
	layer.open({
		type:2,
		title:'查看信息',
		area:['80%','80%'],
		shadeClose:false,
		skin:'layui-layer-white',
		maxmin:true,
		content:[path+"emp/alls.jsp?eid="+eid],
		end:function(){
			getAll(begin, pages);
		}
	});
}
/***************************************************修改**************************************************/
function getUpp(eid){
		//弹出修改层
		layer.open({
			type:2,
			title:'修改员工',
			area:['50%','95%'],
			shadeClose:false,
			skin:'layui-layer-white',
			maxmin:true,
			content:[path+"emp/upd.jsp?eid="+eid],
			end:function(){
				getAll(begin, pages);
			}
		});
}
/************************************************批量解雇**************************************************/
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
			 layer.confirm('你确定要解雇这'+count+'条员工信息吗？',{icon : 7},function(){
			     $.post(path+"emp.do?method=deleteAll&eid="+delid,'',function(){
			    	      layer.msg('解雇成功！', {icon : 1,time : 2000});
			    	      getAll(begin, pages);
	    		  },'json');
			   
		   },function(){
			   //空会自动取消
		   });
		}
	});
}
/*************************************删除事件**********************************************/
function getDel(eid){
		//弹出一个询问层
		 layer.confirm('你确定要解雇这条员工吗？',{icon : 7},function(){
		     $.post(path+"emp.do?method=del&eid="+eid,'',function(){
		    	      layer.msg('解雇成功！', {icon : 1,time : 2000});
		    	      getAll(begin, pages);
    		  },'json');
	   },function(){
		   //空会自动取消
	   });
}

