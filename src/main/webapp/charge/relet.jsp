<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <meta charset="UTF-8">
    <title>欢迎页面-X-admin2.0</title>
     <link rel="stylesheet" href="${pageContext.request.contextPath }/css/font.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath }/css/xadmin.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath }/layui/css/layui.css" >
	<script type="text/javascript" src="${pageContext.request.contextPath }/layui/layui.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/charge/relet.js"></script>
  </head>
  <style>
  </style>
  <body>
  	<input id="path" value="${pageContext.request.contextPath}/" type="hidden">
  	<input id="eid" value="<%=request.getSession().getAttribute("eid") %>" type="hidden">
  	<input id="rid" value="<%=request.getParameter("rid") %>" type="hidden">
    <div class="x-body">
     <form class="layui-form" action="javascript:;">
          <div class="layui-form-item">
              <label class="layui-form-label">预收租金： </label>
              <div class="layui-input-inline" style="margin-left:10px">
                  <input type="text" placeholder="请输入预收租金" id="grent" name="grent"  lay-filter="grent" list="data" class="layui-input">
                  <datalist id="data"></datalist>
              </div>
          </div>
           <div class="layui-form-item" >
              <label style="width: 90px" class="layui-form-label">
                  	下次收租时间：
              </label>
              <div class="layui-input-inline">
                  <input type="text" id="gnexttime" placeholder="年/月/日" readonly="gnexttime" lay-filter="gnexttime" name="gnexttime"  autocomplete="off" class="layui-input">
              </div>
          </div>
             <div class="layui-form-item">
    			<div class="layui-input-block">
     			<button type="button" class="layui-btn"  lay-filter="demo" id="btn">确认</button>
      			<button type="reset" class="layui-btn layui-btn-primary">重置</button>
   			 	</div>
  			</div>
      </form>
    </div>
  </body>

</html>