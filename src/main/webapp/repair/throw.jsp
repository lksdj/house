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
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/repair/throw.js"></script>
  </head>
  <body>
  	<input id="path" value="${pageContext.request.contextPath}/" type="hidden">
  	<input id="eid" value="<%=request.getSession().getAttribute("eid") %>" type="hidden">
  	<input id="qid" value="<%=request.getParameter("qid") %>" type="hidden">
  	<input id="hid" value="<%=request.getParameter("hid") %>" type="hidden">
  	<input id="hnumber" value="<%=request.getParameter("hnumber") %>" type="hidden">
    <div class="x-body">
     <form class="layui-form" action="javascript:;" lay-filter="fm">
         <!-- <div class="layui-form-item">
              <label class="layui-form-label">退租金额： </label>
              <div class="layui-input-inline" style="margin-left:10px">
                  <input type="text" id="krent" name="krent"  lay-filter="krent" class="layui-input">
              </div>
          </div>
            <div class="layui-form-item" >
              <label style="width: 90px;margin-left:-10px" class="layui-form-label">
                  	退租日期：
              </label>
              <div class="layui-input-inline" style="margin-left:10px">
                  <input type="text" id="ktime" placeholder="年/月/日"  lay-filter="ktime" name="ktime"  autocomplete="off" class="layui-input">
              </div>
          </div> -->
          <div class="layui-form-item">
              <label class="layui-form-label">退租备注： </label>
              <div class="layui-input-inline" style="margin-left:10px">
                  <textarea  placeholder="请输入备注" id="qremark" name="qremark"  lay-filter="qremark" class="layui-textarea"></textarea>
              </div>
          </div>
       <!--    <div class="layui-form-item" style="margin-left:10px">
		    <label style="margin-left:-10px" class="layui-form-label">是否维修： </label>
			    <div class="layui-input-block">
			      <input type="checkbox" name="close" id="close" lay-filter="close"  lay-skin="switch" lay-text="是|否">
			    </div>
		    </div> -->
              <div class="layui-form-item">
    			<div class="layui-input-block">
	     			&nbsp;&nbsp;
	     			<button type="button" class="layui-btn"  lay-filter="demo" id="btn">确认</button>
	      			<button type="reset" class="layui-btn layui-btn-primary">重置</button>
   			 	</div>
  			</div>
      </form>
    </div>
  </body>

</html>