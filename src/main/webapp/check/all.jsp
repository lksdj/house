<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>无标题文档</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath }/css/font.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath }/css/xadmin.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath }/layui/css/layui.css" >
	<script type="text/javascript" src="${pageContext.request.contextPath }/layui/layui.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/check/all.js"></script>
	<input type="hidden" id="path" value="${pageContext.request.contextPath }/">
	<style type="text/css">
		input.layui-input.layui-unselect{
			width: 150px;
		}
		input#ctel.layui-input{
			width:150px;
		}
	</style>
</head>
<body>
 <div class="x-nav">
      <span class="layui-breadcrumb">
        <a href="#">首页</a>
        <a href="#">登记退租管理</a>
        <a><cite>登记退租信息</cite></a>
      </span>
      <a class="layui-btn layui-btn-small" style="line-height:1.6em;margin-top:3px;float:right" href="javascript:location.replace(location.href);" title="刷新">
        <i class="layui-icon" style="line-height:30px">ဂ</i></a>
    </div>
    
    <div class="x-body">
     <div class="layui-row">
              <div class="layui-row">
			  		  <form class="layui-form layui-col-md12 x-so" action="javascript:;">
			    <div class="layui-inline">
			      <label class="layui-form-label">区域名称：</label>
			      <div class="layui-input-inline">
			        <select id="aid" name="aid" lay-verify="aid">
			        </select>
			      </div>
			    </div>
			    <div class="layui-inline">
			      <label class="layui-form-label">房屋类型：</label>
			      <div class="layui-input-inline">
			        <select id="sid" name="sid" lay-verify="sid">
			        </select>
			      </div>
			    </div>
			    <div class="layui-inline">
			      <label class="layui-form-label">入住户型：</label>
			      <div class="layui-input-inline">
			        <select id="htype" name="htype" lay-verify="htype">
			        	<option value="">请选择</option>
                            <option value="一室一厅">一室一厅</option>
                            <option value="两室一厅">两室一厅</option>
                            <option value="三室一厅">三室一厅</option>
                            <option value="四室一厅">四室一厅</option>
                            <option value="四室两厅">四室两厅</option>
			        </select>
			      </div>
			    </div>
			    <div class="layui-inline">
			      <label class="layui-form-label">客户电话：</label>
			      <div class="layui-input-inline">
			        <input class="layui-input" placeholder="客户电话" name="ctel" id="ctel">
			      </div>
			    </div>
			    <div class="layui-inline">
			      <div class="layui-input-inline">
			        <button id="btnw" class="layui-btn"><i class="layui-icon">&#xe615;</i></button>
			      </div>
			    </div>
			  </form>
		</div>
        
      </div>
      		<!-- 操作列 -->
		<div id="barDemo" style="display: none;">
			<a  lay-event="details" title="详情"> <i class="layui-icon layui-icon-form" id="look"></i></a>
			<!-- <a  lay-event="log" title="记录"><i class="layui-icon layui-icon-log" ></i></a> 
			<a  lay-event="add" title="添加"> <i class="layui-icon layui-icon-addition"></i></a> -->
		</div>
		
      <table class="layui-table" id="test" lay-filter="demo"></table>
      <div id="mypage"></div>

    </div>
</body>
</html>
