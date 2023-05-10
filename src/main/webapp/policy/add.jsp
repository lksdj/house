<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link href="../css/style.css" rel="stylesheet" type="text/css" />

<link rel="stylesheet" href="${pageContext.request.contextPath }/layui/css/layui.css">
<script type="text/javascript" src="${pageContext.request.contextPath }/layui/layui.js" charset="utf-8"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/js/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/js/ajaxfileupload.js"></script>

<script type="text/javascript" src="${pageContext.request.contextPath}/ueditor/ueditor.config.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/ueditor/ueditor.all.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/ueditor/zh-cn.js"></script>

<script type="text/javascript" src="${pageContext.request.contextPath }/js/policy/add.js"></script>
<input type="hidden" id="path" value="${pageContext.request.contextPath }/">

</head>
<body>

    
    <div class="formbody">
    
    <div class="formtitle"><span>基本信息</span></div>
   
    
    <form class="layui-form" action="${pageContext.request.contextPath }/policy.do?method=add" method="post">   
    <div class="x-body">
     
          <div class="layui-form-item">
              <label for="L_email" class="layui-form-label">
                  	文件名 :
              </label>
              <div class="layui-input-inline">
                  <input id="plsource" name="plsource" type="text" class="layui-input" />
              </div>             
          </div>
                                               
          <div class="layui-form-item">
			<label class="layui-form-label">内容：</label>
			<div class="layui-input-block">
				   <td>
                     <textarea name="content" id="content" style="height:300px;"></textarea>
				     <script type="text/javascript">
	                   UE.getEditor('content');
	                 </script>
                   </td>
			</div>
		</div>

          <div class="layui-form-item">
              <label for="L_repass" class="layui-form-label">
              </label>
              <button id="btn" type="submit"  class="layui-btn" lay-filter="add" lay-submit="">增加</button>
          </div>
          
    </div>    
    </form>     
   </div>
   
</body>
</html>