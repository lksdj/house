<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
    <link rel="shortcut icon" href="${pageContext.request.contextPath }/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="${pageContext.request.contextPath }/css/font.css">
	<link rel="stylesheet" href="${pageContext.request.contextPath }/css/xadmin.css">
	<link rel="stylesheet" href="${pageContext.request.contextPath }/layui/css/layui.css" >
   	<script type="text/javascript" src="${pageContext.request.contextPath }/js/jquery-3.6.0.min.js"></script> 
   	<script type="text/javascript" src="${pageContext.request.contextPath }/js/xadmin.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/layui/layui.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath }/js/login/upd.js"></script>
	<input type="hidden" id="path" value="${pageContext.request.contextPath }/">
	<input type="hidden" id="psw" value="<%=request.getSession().getAttribute("psw")%>">
	<input type="hidden" id="eid" value="<%=request.getSession().getAttribute("eid")%>">
</head>
<body>
<body class="login-bg">
    <div class="login">
        <div class="message">修改密码</div>
        <div id="darkbannerwrap"></div>
            <input id="psw2" lay-verify="required" placeholder="新密码"  type="password" class="layui-input">
            <hr class="hr15">
            <input id="psw3" lay-verify="required" placeholder="确认密码"  type="password" class="layui-input">
            <hr class="hr15">
            <input value="确认" lay-submit lay-filter="login" style="width:100%;" type="button" id="btn" >
            <hr class="hr20" >
    	</div>

</body>
</html>