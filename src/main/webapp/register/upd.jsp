<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/house.css">
	<link rel="stylesheet" href="${pageContext.request.contextPath }/layui/css/layui.css" >
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/jquery-3.6.0.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/ajaxfileupload.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/layui/layui.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/register/upd.js"></script>
	<input type="hidden" id="path" value="${pageContext.request.contextPath }/">
	<input type="hidden" id="rid" value="<%=request.getParameter("rid")%>">
<style type="text/css">
.p{width: 515px;height:38px;}
</style>
</head>
<body>

<form class="layui-form" action="javascript:;"> 
   	<br>
    <div class="layui-form-item">
	    <div class="layui-inline">
	      <label class="layui-form-label" >客户姓名：</label>
	      <div class="layui-input-inline">
	        <input type="text" id="cname" list="like" lay-verify="cname" autocomplete="off" class="layui-input" style="width: 515px;" readonly="readonly">
	          <datalist id="like">
	          
	          </datalist>
	      </div>
	    </div>
  </div>
  
  <div class="layui-form-item">
  		<div class="layui-inline">
	      		<label class="layui-form-label">房屋片区：</label>
	      		<div class="layui-input-inline">
	      			<select   lay-filter="aid" id="aid" name="aid" lay-verify="aid" disabled=""></select>
	      		</div>
    	</div>
  
	    <div class="layui-inline">
		      <label class="layui-form-label">房屋类型：</label>
		      <div class="layui-input-inline">
		      		<select   lay-filter="sid" id="sid" name="sid" lay-verify="sid" disabled=""></select>
		      </div>
	    </div>
  </div>  
  
  <div class="layui-form-item">
  		<div class="layui-inline">
	      <label class="layui-form-label">面积范围：</label>
		      <div class="layui-input-inline" style="width: 83px;">
		        	<input type="text" lay-filter="=h1"  name="h1" id="h1" placeholder="从" autocomplete="off" class="layui-input">
		      </div>
		      <div class="layui-form-mid">-</div>
		      <div class="layui-input-inline" style="width: 83px;">
	        		<input type="text"lay-filter="=h2"  name=h2 id="h2" placeholder="到" autocomplete="off" class="layui-input">
	      	  </div>
    	</div>
  
 		<div class="layui-inline">
		      <label class="layui-form-label">出租房屋：</label>
		      <div class="layui-input-inline">
		      		<select   lay-filter="hid" id="hid" name="hid"></select>
		      </div>
	    </div>
  </div>
    
  
  <div class="layui-form-item">
  		<div class="layui-inline">
	      <label class="layui-form-label">房屋押金：</label>
	      <div class="layui-input-inline">
	        <input type="text" id="rdeposit" name="rdeposit" lay-verify="required|etel" placeholder="" autocomplete="off" class="layui-input">
	      </div>
   	  </div>
   	  
   	  <div class="layui-inline">
		     <label class="layui-form-label">房屋租金：</label>
		     <div class="layui-input-inline">
		          <input type="text" id="rrent"  name="rrent" lay-verify="required|etel" placeholder="" autocomplete="off" class="layui-input">
		     </div>
   	  </div>
  </div>  
  
  <div class="layui-form-item">
	  	 <div class="layui-inline">
		      <label class="layui-form-label">收租时间：</label>
		      <div class="layui-input-inline">
		        	<input type="text" name="rnexttime" id="rnexttime" lay-verify="date" placeholder="yyyy-MM-dd" autocomplete="off" class="layui-input">
		      </div>
	    </div>
  </div>
  <div class="layui-form-item">
  	<label class="layui-form-label">合同图片：</label>
 	<div class="layui-input-block">
	 	<div id="upload-box">
              <input class=" upload" lay-verify="required" type="file" name="himg1" id="himg1">
        </div>
       <div id="img-box">
            <img src=""  id="img1" class="himg">
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


