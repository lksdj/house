var path;
var $;
var layer;
var table;
var laypage;
var form;
var begin=1;
var pages=5;
layui.use(function(){
	$=layui.$;
	layer=layui.layer;
	table=layui.table;
	laypage=layui.laypage;
	form=layui.form;
	path=$("#path").val();
	getAll(begin,pages);//分页查询	
	getAction();//下载
	
	getAdd();//新增
});


/*******************全查询***********************/
function getAll(x,y){
	//构造虚拟表头
	table.render({
		elem:'#test',//绑定数据位置
		url:path+"contract.do?method=all",
		cellMinwidth:50,//最小列宽度
		where :{
			'begin':x,
			'pages':y,
		},
		cols:[[			
			{field:'tid',title:'编号',sort:true,align:'center'},						
			{field:'tname',title:'合同名称',align:'center'},			
			{field:'right',title:'操作',align:'center',toolbar:'#barDemo'}
		]],		
		page:false,	//不显示默认的分页样式
		id:'hu',	//你要操作所选择的对象的主键值
		done:function(res,curr,count){
			laypage.render({
				elem:'mypage', // 要邦定数据的地方(这地要注意一下，没有#)
				count:count, // 共有多少条记录
				curr:begin, // 当前是哪一页
				limit : pages,// 每一页多少条
				limits:[5,10,15], // 每一页多少条
				layout:['count','prev','page','next','limit','refresh','skip'],//分页格式
				
				jump : function(obj, first) {
					if (!first) {
						begin = obj.curr;
						pages = obj.limit;
						getAll(begin, pages);
					}
				}				
			});				
			$.each(res.data, function (index, house) {
	              let td = $(".layui-table tr[data-index=" + index + "]").find("td").eq(6).find("div");//选中行	              
	                  td.css('color', '#0a840a');	                  
	          });
			
		}		
	});	    
}
/***************************新增文件*****************************/
function getAdd(){
	$("#add").click(function(){
		layer.open({
			type:2,
			title:"上传文件",	//弹窗头子
			area:['35%','45%'],	//弹窗大小
			shadeClose:false,	//弹窗后不受其他地方影响默认--false
			skin:'layui-layer-bai',	//边框加颜色
			maxmin:true,
			content:path+"contract/add.jsp",
			end:function(){	//执行完后进行
				getAll(begin,pages);
			}			
		});	
	});			
}
/***************(下载)*******************/
function getAction(){
	table.on('tool(demo)',function(obj){
		//第一步：得到主键值
		var tid=obj.data.tid;//得到主键对象	
		// 第二步：区分动作(查看)
		var action = obj.event;
		 if (action == 'xz') {									
		   window.location.href=path+"contract.do?method=xz&tid="+tid;															
		}
	});
}