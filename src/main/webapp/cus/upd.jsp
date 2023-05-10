<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
	<link rel="stylesheet" href="${pageContext.request.contextPath }/layui/css/layui.css" >
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/jquery-3.6.0.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/layui/layui.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/cus/upd.js"></script>
	<input type="hidden" id="path" value="${pageContext.request.contextPath }/">
	<input type="hidden" id="cid" value="<%=request.getParameter("cid")%>">
</head>
<body>
 <form class="layui-form"  lay-filter="example"> 
   	<br>
    <div class="layui-form-item">
	    <div class="layui-inline">
	      <label class="layui-form-label">客户名称：</label>
	      <div class="layui-input-inline">
	        <input type="tel" id="cname" lay-verify="cname" placeholder="请输入客户名称"  autocomplete="off" class="layui-input">
	      </div>
	    </div>
	    
	    <div class="layui-inline">
      <label class="layui-form-label">身份证号：</label>
      <div class="layui-input-inline">
        <input type="text" id="ccard"  lay-verify="ccard" placeholder="请输入身份证号" autocomplete="off" class="layui-input">
      </div>
    </div>
  </div>
  
    <div class="layui-form-item" >
	    <label class="layui-form-label">客户性别：</label>
	    <div class="layui-input-block">
	      <input type="radio" id="csex" name="csex" value="男" title="男" lay-verify="csex">
	      <input type="radio" id="csex" name="csex" value="女" title="女" lay-verify="csex">
	    </div>
  	</div>
    <div class="layui-form-item">
    <div class="layui-inline">
      <label class="layui-form-label">客户电话：</label>
      <div class="layui-input-inline">
        <input type="text" id="ctel" lay-verify="ctel" placeholder="请输入客户电话" autocomplete="off" class="layui-input">
      </div>
    </div>
    <div class="layui-inline">
      <label class="layui-form-label">备用电话：</label>
      <div class="layui-input-inline">
        <input type="text" id="cteltwo"  lay-verify="cteltwo" placeholder="请输入备用电话" autocomplete="off" class="layui-input">
      </div>
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


