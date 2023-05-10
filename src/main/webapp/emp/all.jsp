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
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/emp/all.js"></script>
	<input type="hidden" id="path" value="${pageContext.request.contextPath }/">
</head>
<body>
 <div class="x-nav">
      <span class="layui-breadcrumb">
        <a href="#">首页</a>
        <a href="#">员工管理</a>
        <a><cite>员工信息</cite></a>
      </span>
      <a class="layui-btn layui-btn-small" style="line-height:1.6em;margin-top:3px;float:right" href="javascript:location.replace(location.href);" title="刷新">
        <i class="layui-icon" style="line-height:30px">ဂ</i></a>
    </div>
    
    <div class="x-body">
    <!--   <div class="layui-row">
        <form class="layui-form layui-col-md12 x-so">
        <input type="text" id="pname"  placeholder="真实姓名" autocomplete="off" class="layui-input">
         <input type="text" id="pname"  placeholder="请输入部门名称" autocomplete="off" class="layui-input">
          <button class="layui-btn"  lay-submit="" lay-filter="sreach"><i class="layui-icon">&#xe615;</i></button>
        </form>
      </div> -->
		<div class="layui-btn-group">
	        <button class="layui-btn layui-btn-danger" id="delall"><i class="layui-icon"></i>批量删除</button>
	        <button class="layui-btn" id="add" ><i class="layui-icon layui-icon-add-circle"></i>添加</button>
	        <a href="${pageContext.request.contextPath }/emp.do?method=revocation" class="layui-btn layui-btn-primary">已撤销员工</a>
   	  	</div>
      
      		<!-- 操作列 -->
		<div id="barDemo" style="display: none;">
			<a  lay-event="upd"><i class="layui-icon" title="修改">&#xe631;</i></a> 
			<a  lay-event="del" title="删除"> <i class="layui-icon">&#xe640;</i></a>
		</div>
		
		<div id="eflag" style="display: none;">在职</div>
      <table class="layui-table" id="test" lay-filter="demo"></table>
      <div id="mypage"></div>

    </div>
</body>
</html>
