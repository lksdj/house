<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
 <script type="text/javascript" src="${pageContext.request.contextPath }/js/jquery.js"></script>
 <script type="text/javascript" src="${pageContext.request.contextPath }/js/jquery.messager.js"></script>
<title>Insert title here</title>
<script type="text/javascript">
   $(function(){
	   $.messager.lays(250, 150);  //高度、宽度
	   var myt="<div id='tx'>";
	   var t=0;
	   $.ajax({
           url:'${pageContext.request.contextPath }/charge.do?method=count',
           type:'post',
           data:'',
           dataType:'json',
           async:false,
           success:function(data)
           {
        	  t=data;
           }
         });
	   if(t!=0)
		   {
		   
				   myt="<a href='${pageContext.request.contextPath }/charge.do?method=gdate'>你有"+t+"条消息！</a>";
			       $("#tx").append(myt);
				   $.messager.show('您有新的消息', myt, 0);
		   }
	  
	   
   });
</script>
</head>
<body style="background: url(${pageContext.request.contextPath }/images/bg.jpg);background-size:100% 100% ; background-attachment: fixed ">

</body>
</html>