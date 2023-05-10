<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>无标题文档</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath }/layui/css/layui.css" >
	<script type="text/javascript" src="${pageContext.request.contextPath }/layui/layui.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/operation/look.js"></script>
	<input type="hidden" id="path" value="${pageContext.request.contextPath }/">
	<input type="hidden" id="rid" value="<%=request.getParameter("rid")%>">
	<input type="hidden" id="hid" value="<%=request.getParameter("hid")%>">
</head>
<body>
		<div class="x-body" style="margin: 10px">
		    <div class="layui-panel" > 
			      <table class="layui-table" id="test" lay-filter="demo"></table>
			      <div id="mypage"></div>
		    </div>
	    </div>
</body>
</html>
