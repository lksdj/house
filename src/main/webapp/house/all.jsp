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
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/house.css">
    <script type="text/javascript" src="${pageContext.request.contextPath }/js/jquery-3.6.0.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/layui/layui.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/xadmin.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/house/all.js"></script>
	
</head>
<body>
<input type="hidden" id="path" value="${pageContext.request.contextPath }/">
<input type="hidden" id="hid" value="<%=request.getParameter("hid")%>">
<input type="hidden" id="sid" value="<%=request.getParameter("sid")%>">
<div id="main">
    <div class="x-nav">
      <span class="layui-breadcrumb">
        <a href="#">首页</a>
        <a href="#">房屋管理</a>
        <a><cite></cite>房屋资料信息</a>
      </span>
        <a class="layui-btn layui-btn-small" style="line-height:1.6em;margin-top:3px;float:right"
           href="javascript:location.replace(location.href);" title="刷新">
            <i class="layui-icon" style="line-height:38px">&#xe669;</i></a>

    </div>

    <div id="content">
        <div id="left" style="background-color:#f5f5f5;">
            <h2 style="margin-bottom: 15px;font-weight:700;font-size: 16px">房屋类型管理</h2>
            <div id="tree"></div>
            <button id="spread"><i></i></button>
        </div>
		  <%-- <div id="tupian">
			<img alt="" src="${pageContext.request.contextPath }/images/fangwutup.jpg" style="width: 1000px; height: 525px;">
		</div>   --%>
		
        <div id="right"  >
            <div class="layui-btn-group">
                <button class="layui-btn" id="add"><i class="layui-icon layui-icon-add-circle"></i>添加</button>
               <%-- <button class="layui-btn" id="forRent"><i class="layui-icon layui-icon-username"></i>未出租房屋</button>
                <button class="layui-btn" id="rent"><i class="layui-icon layui-icon-user"></i>已出租房屋</button>
                <button class="layui-btn layui-btn-danger" id="repair"><i class="layui-icon layui-icon-util"></i>维修中房屋--%>
            </div>
            <div class="layui-btn-group" style="float: right">
                <a class="layui-btn layui-btn-small"
                   href="javascript:location.replace(location.href);" title="全查询">
                    <i class="layui-icon layui-icon-form"></i>全查询</a>
            </div>

             <div id="barDemo" style="display: none">
                <a title="详情" lay-event="details" style="cursor: pointer">
                    <i class="layui-icon " id="look">&#xe60a;</i>
                </a>
                
                <a title="修改" lay-event="edit" style="cursor: pointer">
                    <i class="layui-icon" id="edit">&#xe642;</i>
                </a>
                
                <a title="收入信息" lay-event="income"  style="cursor: pointer">
                    <i class="layui-icon" id="income">&#xe65f;</i>
                </a>
            </div>
             
             <table class="layui-table" id="test" lay-filter="demo"></table>
            <div id="mypage"></div>
        </div>

    </div>
</div>
</body>
</html>
    