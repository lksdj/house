var path;
var $;
var table;
var laypage;
var layer;
var tree;  //树形组件
var begin=1;//查询第一页
var pages=5;//每一页显示5条
var s=0;//新增判断X的退出
layui.use(function(){
	path=$("#path").val();
	$ = layui.$;
	table = layui.table;// 动态数据表格
	laypage = layui.laypage;//分页工具条
	layer = layui.layer;
	 tree = layui.tree;
	 getAllHid(begin, pages);
	 myAdd();//新增
	spread();//左右拉扯
	getTree();//树形
	getLastAllAction();//查看/修改 /收入
});
/************************************************************公共*************************************************************************/
function getAll(x,y,sid){
	//第一步:构造动态表头
	table.render({
		elem:'#test',//要绑定数据的地方
		url:path+"house.do?method=allbySid&begin="+x+"&pages="+y+"&sid="+sid,
		cellMinWidth:50,//最小列宽
		cols:[[
			{field: 'hid', title: '房屋编号',align: 'center'},
			{field: 'sname', title: '房屋类型',align: 'center'},
            {field: 'aname', title: '所在区域',align: 'center'},
            {field: 'htype', title: '户型名称',align: 'center'},
            {field: 'haddress', title: '房屋地址',align: 'center'},
            {field: 'harea', title: '房屋面积',align: 'center'},
            {field: 'hmoney', title: '最低租金',align: 'center'},
            {field: 'hflag', title: '出租状态',align: 'center'},
            {field: 'right', title: '操作', toolbar: '#barDemo', align: 'center', colspan: 1}
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
						getAll(begin, pages,sid);
					}
				}
			});
			 $.each(res.data, function (index, house) {
	                let td = $(".layui-table tr[data-index=" + index + "]").find("td").eq(7).find("div");//选中行
	                if (td.text() == 0) {
	                    td.css('color', '#0a840a');
	                    td.text("待出租");
	                } else if (td.text() == 1) {
	                    td.css('color', 'rgb(253,167,11)');
	                    td.text("已出租");
	                } else {
	                    td.css('color', 'rgba(252,85,85,0.83)');
	                    td.text("维修中");
	                }
	            });
		}
	
	
	});
}
/*****************************新增按钮上的事件******************************/
function myAdd(){
	$("#add").click(function(){
		layer.open({
			type:2,
			title:"新增房屋信息",
			area:['80%','95%'],
			shadeClose:false,
			skin:'layui-layer-white',//加上边框颜色
			maxmin:true,
			content:path+"house/add.jsp?",
			end:function(){
				if(s!=0){					
					getAll(begin, pages,s);
				}else{
					getAllHid(begin, pages);
				}
			}
		});
	});
}
//查看/修改 /收入
function getLastAllAction(){
	table.on('tool(demo)',function(obj){
		//第一步:得到主键值，得到主键对象
		var aid=obj.data.aid;
		 var sid=obj.data.sid;
		var hid=obj.data.hid;
		//第二步:区分动作(修改、注销)
		var action=obj.event;
		 if(action=='details'){
			 getOne(sid,hid);
		}else if(action=='edit'){
			getUpp(sid,hid);
		}else{
			
		}
	});
}
/********************************查看********************************************/
function getOne(sid,hid){
		layer.open({
			type:2,
			title:"房屋详细",
			area:['80%','95%'],
			shadeClose:false,
			skin:'layui-layer-white',//加上边框颜色
			maxmin:true,
			content:path+"house/allsss.jsp?hid="+hid,
			end:function(){
				if(s!=0){		
					getAll(begin, pages,sid);
				}else{
					getAllHid(begin, pages);
					
				}
			}
		});
}

/***********************************修改按钮上的事件************************************/
function getUpp(sid,hid){
	//得到修改对象的主键值
		layer.open({
			type:2,
			title:'修改房屋信息',
			area:['80%','95%'],
			shadeClose:false,
			skin:'layui-layer-white',
			maxmin:true,
			content:path+"house/upd.jsp?sid="+sid+"&hid="+hid,
			end:function(){			
				if(s!=0){		
					getAll(begin, pages,sid);
				}else{
					getAllHid(begin, pages);
					
				}
			}
		});
}
/*************************************删除事件**********************************************/
function getDel(){
	$("body").on("click","#tab #del",function(){
		//得到修改对象主键值
		var sid=$(this).parent().parent().find("td:eq(1)").text();
		//弹出一个询问层
		 layer.confirm('你确定要删除吗？',{btn : [ '确定', '取消' ]},function(){
		     $.post(path+"house.do?method=del&sid="+sid,'',function(){
		    	      layer.msg('删除成功！', {icon : 1,time : 2000});
		    	      getAllHid(begin, pages);;//分页查询
    		  },'json');
		   
	   },function(){
		   //空会自动取消
	   });
	});
	
}
//渲染树形结构
function getTree() {
    var data;
    $.ajax({
        url: path + "house.do?method=sortAll",
        data: '',
        dataType: 'json',
        type: 'post',
        async: false,
        success: function (mydata) {
            data = mydata;
        }
    });
    tree.render({
        elem: '#tree', //绑定元素
        data: [data],
        click: function (obj) {
           // hflag = 0;
            var data = obj.data;
            if (data.id != null) {
               var sid = data.id;
               s=data.id;
                //alert("sid:"+sid);
                //$("#tupian").hide();//隐藏
                //$("#right").show();//显示表格
                getAll(begin, pages,sid);//分页查询
            }
        }
    });
}
//左边属性图导航栏展开、关闭
function spread() {
    $("#spread").click(function () {
        let box = $("#left");
        if (box.css('left') == '0px') {
            box.animate({left: '-221px'}, 0);
            $("#right").animate({left: '10px'}, 0, function () {
                $(".layui-icon-refresh").click();
            });
            $(this).css('background', 'url(./images/gray_2_03.gif) no-repeat 50%');
        } else {
            box.animate({left: '0px'}, 0);
            $("#right").animate({left: '235px'}, 0, function () {
                $(".layui-icon-refresh").click();
            });
            $(this).css('background', 'url(./images/gray_03.gif) no-repeat 50%');
        }
    });
}







function getAllHid(x, y){
	//第一步:构造动态表头
	table.render({
		elem:'#test',//要绑定数据的地方
		url:path+"house.do?method=allHid&begin="+x+"&pages="+y,
		cellMinWidth:50,//最小列宽
		cols:[[
			{field: 'hid', title: '房屋编号',align: 'center'},
			{field: 'sname', title: '房屋类型',align: 'center'},
            {field: 'aname', title: '所在区域',align: 'center'},
            {field: 'htype', title: '户型名称',align: 'center'},
            {field: 'haddress', title: '房屋地址',align: 'center'},
            {field: 'harea', title: '房屋面积',align: 'center'},
            {field: 'hmoney', title: '最低租金',align: 'center'},
            {field: 'hflag', title: '出租状态',align: 'center'},
            {field: 'right', title: '操作', toolbar: '#barDemo', align: 'center', colspan: 1}
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
						getAllHid(begin, pages);
					}
				}
			});
			$.each(res.data, function (index, house) {
                let td = $(".layui-table tr[data-index=" + index + "]").find("td").eq(7).find("div");//选中行
                if (td.text() == 0) {
                    td.css('color', '#0a840a');
                    td.text("待出租");
                } else if (td.text() == 1) {
                    td.css('color', 'rgb(253,167,11)');
                    td.text("已出租");
                } else {
                    td.css('color', 'rgba(252,85,85,0.83)');
                    td.text("维修中");
                }
            });
		}
	});
}