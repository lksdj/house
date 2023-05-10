<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>

<head>
    <meta charset="UTF-8">
    <title>欢迎页面-X-admin2.0</title>
    <meta name="renderer" content="webkit">
    <link rel="stylesheet" href="../css/font.css">
    <link rel="stylesheet" href="../css/xadmin.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath }/layui/css/layui.css">
    <script type="text/javascript" src="${pageContext.request.contextPath }/js/xadmin.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath }/layui/layui.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/charge/record.js"></script>
</head>
<style>
    img{
        width: 100px;
        height: 120px;
    }
</style>
<body style="height: 1000px">
<div class="x-body">
 	<input type="hidden" id="path" value="${pageContext.request.contextPath}/">
    <input type="hidden" id="rid" value="<%=request.getParameter("rid")%>">
    <div class="layui-row">
        <div class="layui-col-md12">
            <div class="layui-panel" style="padding: 15px;margin-top: 20px">
                <h2>出租详细信息：</h2>
                <table class="layui-table" lay-skin="line row" id="test1" lay-size="lg">
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
                        <th>地址：</th>
                        <td id="haddress" colspan="5">0</td>
                    </tr>
                    <tr>
                        <th>房屋编号：</th>
                        <td id="hnumber">0</td>
                        <th>房屋简称：</th>
                        <td id="hname" colspan="4">0</td>
                    </tr>
                    <tr>
                        <th>房屋户型：</th>
                        <td id="htype">0</td>
                        <th>房屋面积：</th>
                        <td id="harea">0</td>
                        <th>房屋朝向：</th>
                        <td id="direction">0</td>
                    </tr>
                    <tr>
                        <th>电费单价：</th>
                        <td id="electricmoney">0</td>
                        <th>水费单价：</th>
                        <td id="watermoney">0</td>
                        <th>煤气单价：</th>
                        <td id="gasmoney">0</td>
                    </tr>
                    <tr>
                        <th>电表刻度：</th>
                        <td id="electricnumber">0</td>
                        <th>水表刻度：</th>
                        <td id="waternumber">0</td>
                        <th>煤气刻度：</th>
                        <td id="gasnumber">0</td>
                    </tr>
                    <tr>
                        <th>网费：</th>
                        <td id="networkmoney">0</td>
                        <th>租金：</th>
                        <td id="rrent">0</td>
                        <th>押金：</th>
                        <td id="rdeposit">0</td>
                    </tr>
                    <tr>
                        <th>备注：</th>
                        <td colspan="5" id="hremark">0</td>
                    </tr>
                    <tr>
                        <th>图片：</th>
                        <td colspan="5" id="himg">
                            <img id="img1" src="">
                            <img id="img2" src="">
                            <img id="img3" src="">
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="layui-row">
        <div class="layui-col-md12">
            <div class="layui-panel" style="padding: 15px;margin-top: 20px">
                <h2>当前客户信息：</h2>
                <table class="layui-table" lay-skin="line row" id="test2" lay-size="lg">
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
                        <th>身份证号：</th>
                        <td colspan="3" id="ccard">0</td>
                    </tr>
                    <tr>
                        <th>客户名：</th>
                        <td id="cname">0</td>
                        <th>客户性别：</th>
                        <td id="csex">0</td>
                    </tr>
                    <tr>
                        <th>电话：</th>
                        <td id="ctel">0</td>
                        <th>备用电话：</th>
                        <td id="cteltwo">0</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</body>
</body>
</html>
