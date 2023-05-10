<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath }/css/font.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath }/css/xadmin.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath }/layui/css/layui.css" >
   	<script type="text/javascript" src="${pageContext.request.contextPath }/js/jquery-3.6.0.min.js"></script>
   	<script type="text/javascript" src="${pageContext.request.contextPath }/layui/layui.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath }/js/xadmin.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/job/add.js"></script>
	<input type="hidden" id="path" value="${pageContext.request.contextPath }/">
</head>

<body>
<form class="layui-form" action="javascript:;"> 
        <div class="x-body">
          <div class="layui-form-item">
	              <label for="L_email" class="layui-form-label">岗位名称：</label>
	              <div class="layui-input-inline">
	                  <input type="text" id="jname"  class="layui-input">
	              </div>
             </div>	
          <div class="layui-form-item">
              <label for="L_repass" class="layui-form-label">
              </label>
              <button  class="layui-btn" id="btn"> 确定</button>
              <button type="reset" class="layui-btn layui-btn-primary">重置</button>
          </div>
    </div>
   </form> 
</body>

</html>


