var path;
var $;
var table;
var laypage;
var layer;
var begin=1;//查询第1页
var pages=5;//每一页显示5条
layui.use(function(){
	$ = layui.$;
	path=$("#path").val();
	table = layui.table;// 动态数据表格
	laypage = layui.laypage;//分页工具条
	layer = layui.layer;
	getAll(begin, pages);//分页查询
	
	myAdd();
	getLastAllAction();
	getAllDel();
});
/*****************************************************分页查询*******************************************/
function getAll(x,y){
	//第一步:构造动态表头
	table.render({
		elem:'#test',//要绑定数据的地方
		url:path+"dept.do?method=all&begin="+x+"&pages="+y,
		cellMinWidth:50,//最小列宽
		cols:[[
			{type:'checkbox'},//批量注销
			{field:'pid',title:'部门编号',sort:true,align:'center'},
			{field:'pname',title:'部门名称',align:'center'},
			{field:'premark',title:'备注说明',align:'center'},
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
			$.each(res.data, function (index, dept) {
				let tr = $(".layui-table tr[data-index=" + index + "]"); //选中行
				if (dept.pid == 1) {
					//禁用该行工具栏的按钮特效
					tr.find("a").prop('disabled', true);
					tr.prop('disabled',true);
					$('tr[data-index=' + index + '] input[type="checkbox"]').prop('disabled', true).attr("name","layTableCheckboxDisabled"); // 禁止部分选择
					tr.find("a").removeClass("layui-btn-normal").addClass("layui-btn-disabled");
				}
			});


		}
	});
}
/*************************************新增部门*************************************/
function myAdd(){
	$("#add").click(function(){
		layer.open({
			type:2,
			title:"新增部门",
			area:['40%','60%'],
			shadeClose:false,
			skin:'layui-layer-white',
			maxmin:true,
			content:[path+"dept/add.jsp"],
			end:function(){
				getAll(begin, pages);
			}
		});
	});
}
/**********************************(修改、注销)部门************************************/
function getLastAllAction(){
	table.on('tool(demo)',function(obj){
		//第一步:得到主键值，得到主键对象
		var pid=obj.data.pid;
		//第二步:区分动作(修改、注销)
		var action=obj.event;
		 if(action=='edit'){
			getUpp(pid);//修改
		}else{
			getDel(pid);//注销
		}
	});
}
/***********************************修改部门************************************/
function getUpp(pid){
		//弹出修改层
		layer.open({
			type:2,
			title:'修改部门',
			area:['40%','60%'],
			shadeClose:false,
			skin:'layui-layer-white',
			maxmin:true,
			content:[path+"dept/upd.jsp?pid="+pid],
			end:function(){
				getAll(begin, pages);
			}
		});
}
/*************************************批量注销*************************************************/
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
					 layer.confirm('确定注销这'+count+'个部门吗？部门下共有'+yg+'名员工将全部归档!',{icon : 7},function(){
					     $.post(path+"dept.do?method=deleteAll&pid="+delid,'',function(){
					    	      layer.msg('注销成功！', {icon : 1,time : 2000});
					    	      getAll(begin, pages);
			    		  },'json');
					   
				   },function(){
					   //空会自动取消
				   });
				}else{
					 layer.confirm('确定注销这'+count+'个部门吗？部门下没有员工!',{icon : 7},function(){
					     $.post(path+"dept.do?method=deleteAll&pid="+delid,'',function(){
					    	      layer.msg('注销成功！', {icon : 1,time : 2000});
					    	      getAll(begin, pages);
			    		  },'json');
					   
				   },function(){
					   //空会自动取消
				   });
				}
			});
			
			 layer.confirm('确定注销这'+count+'个部门吗？部门下共有'+yg+'名员工将全部归档!',{icon : 7},function(){
			     $.post(path+"dept.do?method=deleteAll&pid="+delid,'',function(){
			    	      layer.msg('注销成功！', {icon : 1,time : 2000});
			    	      getAll(begin, pages);
	    		  },'json');
			   
		   },function(){
			   //空会自动取消
		   });
		}
	});
}
/*************************************单个注销**********************************************/
function getDel(pid){
//弹出一个询问层
	$.post(path+"dept.do?method=selectEmpCount&pid="+pid,'',function(pid){
		if(pid>0){
			 layer.confirm('确定注销这1个部门吗？部门下共有'+pid+'名员工将全部归档!',{icon : 7},function(){
			     $.post(path+"dept.do?method=del&pid="+pid,'',function(){
			    	      layer.msg('注销成功！', {icon : 1,time : 2000});
			    	      getAll(begin, pages);
	    		  },'json');
			   
		   },function(){
			   //空会自动取消
		   });
		}else{
			 layer.confirm('确定注销这1个部门吗？部门下没有员工!',{icon : 7},function(){
			     $.post(path+"dept.do?dept.do?method=del&pid="+pid,'',function(){
			    	      layer.msg('注销成功！', {icon : 1,time : 2000});
			    	      getAll(begin, pages);
	    		  },'json');
			   
		   },function(){
			   //空会自动取消
		   });
		}
	});
}