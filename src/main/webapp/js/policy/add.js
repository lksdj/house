var path;
var eid;

var $;
var layer;
var laydate;
var form;

layui.use(function(){
	
	$=layui.$;
	layer=layui.layer;
	form=layui.form;
	path=$("#path").val();	
	//增加
	getAdd();

	
});




/*************增加****************/
function getAdd(){
	$("#btn").click(function() {
		let plsource = $("#plsource").val();
		if (plsource.length == 0) {
			layer.msg('标题不能为空!', {icon: 2, time: 2000});
		} else {
			UE.Editor.prototype._bkGetActionUrl = UE.Editor.prototype.getActionUrl;
			UE.Editor.prototype.getActionUrl = function (action) {
				if (action == '/upload') {
					return path + "up.do?method=myup"; // 指定文件上传路径(插入图片时要用的)
				} else {
					return this._bkGetActionUrl.call(this, action);
				}
			}
		}
	});
}


