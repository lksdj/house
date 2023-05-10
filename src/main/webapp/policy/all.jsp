       <%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>

	<meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,user-scalable=yes, minimum-scale=0.4, initial-scale=0.8,target-densitydpi=low-dpi" />
        <link rel="shortcut icon" href="${pageContext.request.contextPath }/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="${pageContext.request.contextPath }/css/font.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath }/css/xadmin.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath }/layui/css/layui.css">
    <script type="text/javascript" src="${pageContext.request.contextPath }/js/jquery-3.6.0.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath }/layui/layui.js" charset="utf-8"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/policy/all.js"></script>
<input type="hidden" id="path" value="${pageContext.request.contextPath }/">

</head>
<body>
	<div class="x-nav">
      <span class="layui-breadcrumb">
        <a href="#">首页</a>
        <a href="#">公司政策管理</a>
        <a><cite>公司政策信息</cite></a>
      </span>
      <a class="layui-btn layui-btn-small" style="line-height:1.6em;margin-top:3px;float:right" href="javascript:location.replace(location.href);" title="刷新">
        <i class="layui-icon" style="line-height:30px">ဂ</i></a>
    </div>
    
    
    <div class="x-body">
        <button class="layui-btn" id="addbtn"><i class="layui-icon">&#xe654;</i>添加</button>            
      <div id="barDemo" style="display: none;">       		           
           <a title="查看"  href="javascript:;" lay-event="list">
             <i class="layui-icon">&#xe60a;</i>
           </a>                     
      </div>  
      
         
	      <!--  全查询 -->
	      <table id="test" lay-filter="demo"></table>
	      <!-- 底部分页 -->
	      <div  id="mypage"> </div>  <!-- class="page" -->
	      	         
    </div>
      
  </body>
</html>