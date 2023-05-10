var path;
var $;
var table;
var laypage;
var layer;
var begin=1;//查询第一页
var pages=5;//每一页显示5条
layui.use(function(){
	$ = layui.$;
	path=$("#path").val();
	table = layui.table;// 动态数据表格
	laypage = layui.laypage;//分页工具条
	layer = layui.layer;
	getRevocation(begin, pages);
	getAllDel();//批量撤回
});

/***********************************已撤回部门*********************************/
function getRevocation(x,y){
	//第一步:构造动态表头
	table.render({
		elem:'#test',//要绑定数据的地方
		url:path+"dept.do?method=allss&begin="+x+"&pages="+y,
		cellMinWidth:50,//最小列宽
		cols:[[
			{type:'checkbox'},//批量撤回
			{field:'pid',title:'部门编号',sort:true},
			{field:'pname',title:'部门名称'},
			{field:'premark',title:'备注说明'},
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
						getRevocation(begin, pages);
					}
				}
			});
		}
	});
}
/*************************************批量撤回**************************************************/
function getAllDel(){
	$("#delall").bind("click",function(){
		var data=table.checkStatus('hu').data;
		var delid="";
		var count=data.length;
		$.each(data,function(index,xx){
			 delid+=xx.pid+",";
		});
		if(delid==""){
			layer.msg('最少要选择一个!', {icon : 7,time : 2000});
		}else{
			$.post(path+"dept.do?method=selectEmpCount&pid="+delid,'',function(yg){
				if(yg>0){
					 layer.confirm('确定撤回这'+count+'个部门吗？部门下共有'+yg+'名员工将全部归档!',{icon : 7},function(){
					     $.post(path+"dept.do?method=deleteAlls&pid="+delid,'',function(){
					    	      layer.msg('撤回成功！', {icon : 1,time : 2000});
					    	      getRevocation(begin, pages);
			    		  },'json');
					   
				   },function(){
					   //空会自动取消
				   });
				}else{
					 layer.confirm('确定撤回这'+count+'个部门吗？部门下没有员工!',{icon : 7},function(){
					     $.post(path+"dept.do?method=deleteAlls&pid="+delid,'',function(){
					    	      layer.msg('撤回成功！', {icon : 1,time : 2000});
					    	      getRevocation(begin, pages);
			    		  },'json');
					   
				   },function(){
					   //空会自动取消
				   });
				}
			});
			 layer.confirm('确定撤回这'+count+'个部门吗？部门下共有'+yg+'名员工将全部归档!',{icon : 7},function(){
			     $.post(path+"dept.do?method=deleteAlls&pid="+delid,'',function(){
			    	      layer.msg('撤回成功！', {icon : 1,time : 2000});
			    	      getRevocation(begin, pages);
	    		  },'json');
			   
		   },function(){
			   //空会自动取消
		   });
		}
	});
}



