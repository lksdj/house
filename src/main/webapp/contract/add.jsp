<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="${pageContext.request.contextPath }/layui/css/layui.css">
<script type="text/javascript" src="${pageContext.request.contextPath }/layui/layui.js" charset="utf-8"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/js/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/js/ajaxfileupload.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/js/contract/add.js"></script>
<input type="hidden" id="path" value="${pageContext.request.contextPath }/">
</head>
<body>
   <div class="x-body">
   <br>
    <form class="layui-form" action="javascript:;" name="form" method="post" lay-filter="input" >
      <div class="layui-form-item">
	      <label for="L_email" class="layui-form-label">文件名称：</label>
	          <div class="layui-input-inline">
	               <input type="text" id="tname"  class="layui-input">
	          </div>
      </div>	
      
      
      <div class="layui-form-item">
	      <label for="L_email" class="layui-form-label">上传合同：</label>
	          <div class="layui-input-inline">
	                <input class=" upload" lay-verify="required" type="file" name="fe" id="fe">  
	          </div>
      </div>	
      
      
             
      <div class="layui-form-item">
          <label for="L_repass" class="layui-form-label"></label>
              <button  class="layui-btn" id="btn">上传</button>
      </div>
      </form>
    </div>
   
   
   
</body>
</html>