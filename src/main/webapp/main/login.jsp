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
	<script type="text/javascript" src="${pageContext.request.contextPath }/layui/layui.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath }/js/xadmin.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath }/js/login/login.js"></script>

</head>
<body class="login-bg">
<input type="hidden" id="path" value="${pageContext.request.contextPath }/">
    <div class="login">
        <div class="message">管理登录</div>
        <div id="darkbannerwrap"></div>
            <input id="ename" placeholder="用户名"  type="text" lay-verify="required" value="admin" class="layui-input" >
            <hr class="hr15">
            <input id="epsw" lay-verify="required" placeholder="密码"  type="password"  value="123" class="layui-input">
            <hr class="hr15">
            <input value="登录" lay-submit lay-filter="login" style="width:100%;" type="button" id="btn" >
            <hr class="hr20" >
    	</div>
</div>
</body>
</html>