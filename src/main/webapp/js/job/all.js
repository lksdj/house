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
	getLastAllAction();
	myAdd();
});


/************************************************************分页*************************************************************************/
function getAll(x,y){
	//第一步:构造动态表头
	table.render({
		elem:'#test',//要绑定数据的地方
		url:path+"job.do?method=all&begin="+x+"&pages="+y,
		cellMinWidth:50,//最小列宽
		cols:[[
			//{type:'checkbox'},//批量删除
			{field:'jid',title:'岗位编号',sort:true,align:'center'},
			{field:'jname',title:'岗位名称',align:'center'},
			{field:'right',title:'操作',align:'center',toolbar:'#barDemo'}
		]],
		page : false,// 不显示默认的分页样式,
		id : 'hu',// 你要操作所选择的对象的主键值
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
			$.each(res.data, function (index, job) {
				 let tr = $(".layui-table tr[data-index=" + index + "]"); //选中行
                if (job.jid==1){
                    //禁用该行工具栏的按钮特效
                    tr.find("a").prop('disabled', true);
                    tr.find("a").removeClass("layui-btn-normal").addClass("layui-btn-disabled");
                }
                if (job.jid==2){
                    //禁用该行工具栏的按钮特效
                    tr.find("a").prop('disabled', true);
                    tr.find("a").removeClass("layui-btn-normal").addClass("layui-btn-disabled");
                }
                if (job.jid==3){
                    //禁用该行工具栏的按钮特效
                    tr.find("a").prop('disabled', true);
                    tr.find("a").removeClass("layui-btn-normal").addClass("layui-btn-disabled");
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
			title:"新增岗位",
			area:['40%','40%'],
			shadeClose:false,
			skin:'layui-layer-white',//加上边框颜色
			maxmin:true,
			content:[path+"job/add.jsp"],
			end:function(){
				getAll(begin, pages);
			}
		});
	});
}
/***********************************修改按钮上的时间************************************/
function getUpp(jid){
		//弹出修改层
		layer.open({
			type:2,
			title:'修改岗位',
			area:['40%','40%'],
			shadeClose:false,
			skin:'layui-layer-white',
			maxmin:true,
			content:[path+"job/upd.jsp?jid="+jid],
			end:function(){
				getAll(begin, pages);
			}
		});
}
/**********************************(查看、修改、删除)************************************/
function getLastAllAction(){
	table.on('tool(demo)',function(obj){
		//第一步:得到主键值
		var jid=obj.data.jid;//得到主键对象
		var jname=obj.data.jname;
//		if(jname=="经理"){
//			layer.msg("默认岗位不能修改!"),
//			{icon:2,time:"2000"}
//		}else if(jname=="普通员工"){
//			layer.msg("默认岗位不能修改!"),
//			{icon:2,time:"2000"}
//		}else if(jname=="系统管理员"){
//			layer.msg("默认岗位不能修改!"),
//			{icon:2,time:"2000"}
//		}else{
		//第二步:区分动作(查看、修改、删除)
		var action=obj.event;
		if(action=='look'){
			//查看
			getLook(jid);
		}else if(action=='edit'){
			//修改
			getUpp(jid);
		}else{
			getDel(jid);
		}
	});
	
}

/*************************************删除事件**********************************************/
function getDel(jid){
		//弹出一个询问层
		 layer.confirm('你确定要删除吗？',{btn : [ '确定', '取消' ]},function(){
		     $.post(path+"job.do?method=del&jid="+jid,'',function(){
		    	      layer.msg('删除成功！', {icon : 1,time : 2000});
		    	      getAll(begin, pages);
    		  },'json');
		   
	   },function(){
		   //空会自动取消
	   });
}

