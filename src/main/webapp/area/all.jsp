<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>无标题文档</title>
     <link rel="shortcut icon" href="${pageContext.request.contextPath }/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="${pageContext.request.contextPath }/css/font.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath }/css/xadmin.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath }/layui/css/layui.css" >
	<script type="text/javascript" src="${pageContext.request.contextPath }/layui/layui.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/xadmin.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/area/all.js"></script>
	<input type="hidden" id="path" value="${pageContext.request.contextPath }/">
</head>
<body>
 <div class="x-nav">
      <span class="layui-breadcrumb">
        <a href="#">首页</a>
        <a href="#">片区管理</a>
        <a><cite>片区信息</cite></a>
      </span>
      <a class="layui-btn layui-btn-small" style="line-height:1.6em;margin-top:3px;float:right" href="javascript:location.replace(location.href);" title="刷新">
        <i class="layui-icon" style="line-height:30px">ဂ</i></a>
    </div>
    
    <div class="x-body">
      
        <button class="layui-btn" id="add"><i class="layui-icon layui-icon-add-circle"></i>添加</button>
        
      
      	<!-- 操作列 -->
		<div id="barDemo" style="display: none;">
			<a  lay-event="upd" title="修改" style="cursor: pointer">
				<i class="layui-icon">&#xe631;</i>
			</a> 
		</div>
		
      <table class="layui-table" id="test" lay-filter="demo"></table>
      <div id="mypage"></div>

    </div>
</body>
</html>
