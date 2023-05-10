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
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/emp/add.js"></script>
	<input type="hidden" id="path" value="${pageContext.request.contextPath }/">
</head>
<body>
<form class="layui-form" action="javascript:;"> 
   	<br>
    <div class="layui-form-item">
	    <div class="layui-inline">
	      <label class="layui-form-label">员工账号：</label>
	      <div class="layui-input-inline">
	        <input type="tel" id="ename" lay-verify="ename" autocomplete="off" class="layui-input">
	      </div>
	    </div>
	    <div class="layui-inline">
	      <label class="layui-form-label">员工密码：</label>&nbsp;
	      <div class="layui-input-inline">
	        <input type="text" id="epsw" lay-verify="email" autocomplete="off" class="layui-input">
	      </div>
	    </div>
  </div>
  
  <div class="layui-form-item">
    <div class="layui-inline">
      <label class="layui-form-label">所在部门：</label>
      <div class="layui-input-inline">
      	<select   lay-filter="pid" id="pid" name="pid">
      	</select>
      </div>
    </div>
    
    <div class="layui-inline">
      <label class="layui-form-label">所在岗位：</label>
      <div class="layui-input-inline">
		<select   lay-filter="jid" id="jid">
      	</select>
      </div>
    </div>
  </div>  
  
  <div class="layui-form-item">
    <div class="layui-inline">
      <label class="layui-form-label">真实姓名：</label>
      <div class="layui-input-inline">
        <input type="text" id="erealname" lay-verify="required|number" autocomplete="off" class="layui-input">
      </div>
    </div>
    <div class="layui-inline">
      <label class="layui-form-label">员工电话：</label>
      <div class="layui-input-inline">
        <input type="text" id="etel"  lay-verify="required|etel" placeholder="" autocomplete="off" class="layui-input">
      </div>
    </div>
  </div>  
  
  <div class="layui-form-item">
  	<div class="layui-inline">
      <label class="layui-form-label">员工地址：</label>
      <div class="layui-input-inline">
        <input type="text" id="eaddress"  lay-verify="date" placeholder="" autocomplete="off" class="layui-input">
      </div>
    </div>
  </div>
  
    <div class="layui-form-item layui-form-text">
	    <label class="layui-form-label">备注说明：</label>
	    <div class="layui-input-block">
	      	<textarea placeholder="请输入内容" class="layui-textarea" id="eremark" style="width:76% "></textarea>
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


