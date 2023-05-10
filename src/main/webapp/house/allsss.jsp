<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>查询房屋所有信息</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath }/layui/css/layui.css" >
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/house.css">
	<script type="text/javascript" src="${pageContext.request.contextPath }/layui/layui.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/house/allsss.js"></script>
	<input type="hidden" id="path" value="${pageContext.request.contextPath }/">
	<input type="hidden" id="hid" value="<%=request.getParameter("hid")%>">
<style type="text/css">
	.ddd{float: left;margin-top: 5px}
	.bbb{margin: auto;}
</style>
</head>
<body>    
    <div id="detailsWindow" >
    <div class="layui-row bo">
        <div class="layui-col-md12">
            <div class="layui-panel" style="padding: 15px;">
                <div class="grid-demo grid-demo-bg1">
                    <div class="layui-carousel" id="lunBo" lay-filter="lunBo">
                        <div carousel-item="">
                            <div><img class="tupian" id="img1"></div>
                            <div><img class="tupian" id="img2"></div>
                            <div><img class="tupian" id="img3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="layui-row">
        <div class="layui-col-md12">
            <div class="layui-panel" style="padding: 15px;margin-top: 20px">
                <h2>基本信息：</h2>
                <table class="layui-table" lay-skin="line row" id="details" lay-size="lg">
                    <colgroup>
                        <col width="150">
                        <col width="200">
                        <col width="150">
                        <col width="200">
                        <col width="150">
                        <col width="200">
                    </colgroup>
                    <tbody>
                    <tr>
                        <th>所在区域：</th>
                        <td id="tAid"></td>
                        <th>房屋类别：</th>
                        <td id="tSid"></td>
                        <th>房屋户型：</th>
                        <td id="tHtype"></td>
                    </tr>
                    <tr>
                        <th>房屋简称：</th>
                        <td id="tHname"></td>
                        <th>房屋面积：</th>
                        <td id="tHarea"></td>
                        <th>房屋朝向：</th>
                        <td id="tDirection"></td>
                    </tr>
                    <tr>
                        <th>地址：</th>
                        <th id="tHaddress" colspan="5"></th>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div class="layui-row">
        <div class="layui-col-md12">
            <div class="layui-panel" style="padding: 15px;margin-top: 20px">
                <h2>费用信息：</h2>
                <table class="layui-table" lay-skin="line row" lay-size="lg">
                    <colgroup>
                        <col width="150">
                        <col width="200">
                        <col width="150">
                        <col width="200">
                        <col width="150">
                        <col width="200">
                    </colgroup>
                    <tbody>
                    <tr>
                        <th>房门牌号：</th>
                        <td id="tHnumber"></td>
                        <th>最低租金：</th>
                        <td id="tHmoney"></td>
                        <th>网费(单价)：</th>
                        <td id="tNetworkmoney"></td>
                    </tr>
                    <tr>
                        <th>电费(单价)：</th>
                        <td id="tElectricmoney"></td>
                        <th>水费(单价)：</th>
                        <td id="tWatermoney"></td>
                        <th>煤气(单价)：</th>
                        <td id="tGasmoney"></td>
                    </tr>
                    <tr>
                        <th>电表刻度：</th>
                        <td id="tElectricnumber"></td>
                        <th>水表刻度：</th>
                        <td id="tWaternumber"></td>
                        <th>煤气刻度：</th>
                        <td id="tGesnumber"></td>
                    </tr>
                    <tr>
                        <th>备注：</th>
                        <th id="tHremark" colspan="5"></th>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</body>

</html>



