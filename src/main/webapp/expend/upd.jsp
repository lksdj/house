<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/jquery-3.6.0.min.js"></script>
	<link rel="stylesheet" href="${pageContext.request.contextPath }/layui/css/layui.css" >
	<script type="text/javascript" src="${pageContext.request.contextPath }/layui/layui.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/expend/upd.js"></script>
	<input type="hidden" id="path" value="${pageContext.request.contextPath }/">
	<input type="hidden" id="xid" value="<%=request.getParameter("xid")%>">
</head>
<body>
<form class="layui-form" action="javascript:;"> 
   	<br>
    <div class="layui-form-item">
	    <div class="layui-inline">
	      <label class="layui-form-label">支出金额：</label>
	      <div class="layui-input-inline">
	        <input type="text" id="xmoney" lay-verify="xmoney" autocomplete="off" class="layui-input" placeholder="请输入内容">
	      </div>
	    </div>
  </div>
  <div class="layui-form-item">
    <div class="layui-inline">
      <label class="layui-form-label">来源条目：</label>
      <div class="layui-input-inline">
      	<select   lay-filter="xsource" id="xsource" name="xsource">
      		<option value="0">请选择</option>
      		<option value="房屋维修">房屋维修</option>
      		<option value="常用物件">常用物件</option>
      		<option value="其他">其他</option>
      	</select>
      </div>
    </div>
  </div>  
  
    <div class="layui-form-item layui-form-text">
	    <label class="layui-form-label">备注说明：</label>
	    <div class="layui-input-block">
	      	<textarea placeholder="请输入内容" class="layui-textarea" id="xremark" style="width:76% "></textarea>
   		</div>
 	</div>
 	
   <div class="layui-form-item">
    <div class="layui-input-block">
      <button type="button" class="layui-btn"  lay-filter="demo" id="btn">确认</button>
      <button type="reset" class="layui-btn layui-btn-primary">重置</button>
    </div>
  </div>
</form>	 
</body>

</html>


