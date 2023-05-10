var path;
var begin=1;
var pages=5;

var $;
var layer;
var table;
var laypage;
var form;

var hid;

layui.use(function(){
	
	$=layui.$;
	layer=layui.layer;
	table=layui.table;
	laypage=layui.laypage;
	form=layui.form;
	
	path=$("#path").val();
	
	//分页查询
	getAll(begin,pages);	
	//操作选项
	getAction();
	
	add();
});


/***************后面的相关事件(查看、修改、删除)****************** */
function getAction(){
	table.on('tool(demo)',function(obj){
		//第一步：得到主键值
		plid=obj.data.plid;//得到主键对象	
		// 第二步：区分动作(查看、修改、删除)
		var action = obj.event;
		 if (action == 'list') {									
		   window.location.href=path+"policy/one.jsp?plid="+plid;			   		  		   
		}
	});
}

/***************************新增文件*****************************/
function add(){
	$("#addbtn").click(function(){
		window.location.href=path+"policy/add.jsp";
	});			
}

/*******************全查询***********************/
function getAll(x,y){
	//构造虚拟表头
	table.render({
		elem:'#test',//绑定数据位置
		url:path+"policy.do?method=all",
		cellMinwidth:80,//最小列宽度
		where :{
			'begin':x,
			'pages':y,
		},
		cols:[[			
			{field:'plid',title:'编号',sort:true},						
			{field:'plsource',title:'标题'},
			{field:'pltime',title:'时间'},				
			{field:'right',title:'操作',align:'center',toolbar:'#barDemo'}
		]],		
		page:false,	//不显示默认的分页样式
		id:'yt',	//你要操作所选择的对象的主键值
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
