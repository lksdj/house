var path;
$(function(){
	path=$("#path").val();
	getAll();
});

function getAll(){
	$.ajax({
		url:path+"house.do?method=sortAll",//要去哪儿
		data:{}, //带参数x:分页参数
		dataType:'json',//数据交换格式
		type:'post',//提交方式
		success:function(mydata){//回调
			$.each(mydata,function(index,xx){
				   $(".pagin").append(`
						<li>
							<span class="file"> 
								<a href="`+path+`house/all.jsp?sid=${xx.sid}"  target="userframe">${xx.sname}</a>
							</span>
						</li>
						   	
				   `);
			});
		}
	});
}