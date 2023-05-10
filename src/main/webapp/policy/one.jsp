<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="${pageContext.request.contextPath }/js/jquery-3.6.0.min.js"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath }/layui/css/layui.css">
<script type="text/javascript" src="${pageContext.request.contextPath }/layui/layui.js" charset="utf-8"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/js/policy/one.js"></script>
<input type="hidden" id="plid" value="<%=request.getParameter("plid")%>">
<input type="hidden" id="path" value="${pageContext.request.contextPath }/">
</head>
<body>

<table>
      <tr>
         <td><span id="plsource"></span></td>
      </tr>
      <tr>
         <td id="plremark" style="text-align: left;"></td>
      </tr>
   </table>

</body>
</html>