<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
	<link href="${pageContext.request.contextPath }/css/style.css" rel="stylesheet" type="text/css" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="${pageContext.request.contextPath }/css/font.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath }/css/xadmin.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath }/layui/css/layui.css" >
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/jquery-3.6.0.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/layui/layui.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/xadmin.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/sort/upd.js"></script>
	<input type="hidden" id="path" value="${pageContext.request.contextPath }/">
	<input type="hidden" id="sid" value="<%=request.getParameter("sid")%>">
</head>

<body>

	
    
 <!--    <div class="formbody">
    <div class="formtitle"><span>基本信息</span></div>
	    <ul class="forminfo">
		    <li><label>出租类别名称:</label><input id="jname" type="text" class="dfinput" /><i></i></li>
		    <li><label>&nbsp;</label><input  id="btn" type="button" class="btn" value="新增"/></li>
	    </ul>
    </div> -->
    
        <div class="x-body">
          <div class="layui-form-item">
	              <label for="L_email" class="layui-form-label">
	                 	房屋类别：
	              </label>
	              <div class="layui-input-inline">
	                  <input type="text" id="sname"  class="layui-input">
	              </div>
             </div>	
          <div class="layui-form-item">
              <label for="L_repass" class="layui-form-label">
              </label>
              <button  class="layui-btn" id="btn">
                 	 确定
              </button>
          </div>
    </div>
    
    
</body>

</html>


