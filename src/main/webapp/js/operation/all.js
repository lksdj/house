var path;
var $;
var table;
var laypage;
var layer;
var begin=1;//查询第一页
var pages=5;//每一页显示5条
var a=0;
var b=0;
var sid=0;
var aid=0;
var htype="";
var ctel="";
layui.use(function(){
	$ = layui.$;
	table = layui.table;// 动态数据表格
	laypage = layui.laypage;//分页工具条
	layer = layui.layer;
	form=layui.form;
	path=$("#path").val();
	getSort();
	getAll(begin,pages,sid,aid,htype,ctel);//分页查询
	getMoHu();
	getLastAllAction();//查看 抄表
});
/***********************************************分页查询**********************************************/
function getMoHu(){
	//第一步:构造动态表头
	//alert("sid:"+sid+" aid:"+aid+" htype:"+htype+" ctel:"+ctel);
	$("#btnw").click(function(){
		var sid1=$("#sid").val();
		var aid1=$("#aid").val();
		var htype1=$("#htype").val();
		var ctel1=$("#ctel").val();
		//alert("!!!!!sid:"+sid1+" aid:"+aid1+" htype:"+htype1+" ctel:"+ctel1);
		getAll(begin,pages,sid1,aid1,htype1,ctel1);
	});
}
/***********************************************分页查询**********************************************/
function getAll(x,y,sid,aid,htype,ctel){
	//第一步:构造动态表头
	table.render({
		elem:'#test',//要绑定数据的地方
		url:path+"charge.do?method=selectCharge&begin="+x+"&pages="+y+"&sid="+sid+"&aid="+aid+"&htype="+htype+"&ctel="+ctel,
		cellMinWidth:50,//最小列宽
		cols:[[
			{field:'rid',title:'编号',sort:true,align:'center'},
			{field:'haddress',title:'房屋地址',align:'center'},
			{field:'hnumber',title:'房屋房号',align:'center'},
			{field:'cname',title:'客户姓名 ',align:'center'},
			{field:'ctel',title:'客户电话',align:'center'},
			{field:'rdate',title:'登记时间',align:'center',},
			{field:'gnexttime',title:'下次收租日期',align:'center',style:"color:#FFB800"},
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
						getAll(begin,pages,sid,aid,htype,ctel);			
					}
				}
			});
		}
	});
}
/**********************************(查看 抄表)************************************/
function getLastAllAction(){
	table.on('tool(demo)',function(obj){
		//第一步:得到主键值
		var rid=obj.data.rid;//得到主键对象
		var hid=obj.data.hid;
		alert("hid"+hid);
		//第二步:区分动作(查看、修改、解雇)
		var action=obj.event;
		if(action=='look'){
			//查看
			getLook(rid,hid);
		}else if(action=='upd'){
			//抄表
			getUpp(rid,hid);
		}
	});
}
/****************************************查看******************************************/
function getLook(rid,hid){
	alert("rid:"+rid);
	layer.open({
		type:2,
		title:'查看信息',
		area:['80%','85%'],
		shadeClose:false,
		skin:'layui-layer-white',
		maxmin:true,
		content:[path+"operation/look.jsp?rid="+rid+"&hid="+hid],
		end:function(){
			getAll(begin,pages,sid,aid,htype,ctel);			
		}
	});
}
/***************************************************抄表**************************************************/
function getUpp(rid,hid){
		//弹出修改层
		layer.open({
			type:2,
			title:'费用抄表',
			area:['35%','60%'],
			shadeClose:false,
			skin:'layui-layer-white',
			maxmin:true,
			content:[path+"operation/upd.jsp?rid="+rid+"&hid="+hid],
			end:function(){
				getAll(begin,pages,sid,aid,htype,ctel);			
			}
		});
}
//查询下拉框
function getSort(){
	$("#sid").empty();
	$("#aid").empty();
	$("#sid").append("<option value=0>请选择</option>");
	$("#aid").append("<option value=0>请选择</option>");
	 $.ajax({
	    	url:path+"house.do?method=SortAreaAll",
	    	data:'',
	    	dataType:'json',
	    	type:'post',
	    	success:function(mydata){
	    		//房屋类型
	    		for(var e in mydata.selectSort){
	    			a++;
	    		}
	    		//片区
	    		for(var e in mydata.selectArea){
	    			b++;
	    		}
	    		
	    		for(var i=0;i<a;i++){
	    			 $("#sid").append("<option value="+mydata.selectSort[i].sid+">"+mydata.selectSort[i].sname+"</option>");
	    		}
	    		
	    		for(var i=0;i<b;i++){
	    			 $("#aid").append("<option value="+mydata.selectArea[i].aid+">"+mydata.selectArea[i].aname+"</option>");
	    		} 
	    		form.render($("#sid"));
	    		form.render($("#aid"));
	    	}
	    });
}
