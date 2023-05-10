var $;
var form;
var hid=0;
var path="";
var carousel;
layui.use(function (){
	$ = layui.$;
	form=layui.form;
	carousel=layui.carousel;
	hid=$("#hid").val();
	path=$("#path").val();
	getOne();
	getLunBo();
});

function getOne(){
	$.ajax({
		url:path+"house.do?method=one",
		data:{"hid":hid},
		dataType:'json',
		type:'post',
		success:function(my){
			   $("#tAid").text(my.aname);
			    $("#tSid").text(my.sname);
			    $("#tHtype").text(my.htype);
			    $("#tHname").text(my.hname);
			    $("#tHarea").text(my.harea);
			    $("#tDirection").text(my.direction);
			    $("#tHaddress").text(my.haddress);
			    $("#tNetworkmoney").text(my.networkmoney);
			    $("#tHnumber").text(my.hnumber);
			    $("#tHmoney").text(my.hmoney);
			    $("#tElectricmoney").text(my.electricmoney);
			    $("#tWatermoney").text(my.watermoney);
			    $("#tGasmoney").text(my.gasmoney);
			    $("#tElectricnumber").text(my.electricnumber);
			    $("#tWaternumber").text(my.waternumber);
			    $("#tGesnumber").text(my.gesnumber);
			    $("#tHremark").text(my.hremark);
			var himg=my.himg;
			img=himg.split(",");
			var list=[img[0],img[1],img[2]];
			$("#img1").attr("src",path+"upload/"+list[0]);
			$("#img2").attr("src",path+"upload/"+list[1]);
			$("#img3").attr("src",path+"upload/"+list[2]);
		}
	});
}


function getLunBo() {
    //改变轮播时间间隔、动画类型、高度
    carousel.render({
        elem: '#lunBo'
        , interval: 1800
        , width: '100%'
        , height: '300px'
        , anim: 'fade'
    });
}