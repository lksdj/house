<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
 	<link rel="stylesheet" href="${pageContext.request.contextPath }/css/font.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath }/css/xadmin.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath }/layui/css/layui.css" >
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/house.css">
   	<script type="text/javascript" src="${pageContext.request.contextPath }/js/jquery-3.6.0.min.js"></script>
   	<script type="text/javascript" src="${pageContext.request.contextPath }/js/ajaxfileupload.js"></script>
   	<script type="text/javascript" src="${pageContext.request.contextPath }/layui/layui.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/house/add.js"></script>
	<input type="hidden" id="path" value="${pageContext.request.contextPath }/">
	<%-- <input type="hidden" id="sid" value="<%=request.getParameter("sid")%>"> --%>
</head>
<body>
    <form class="layui-form" action="javascript:;" name="form" method="post" lay-filter="input">
        <input type="hidden" name="hid" id="hid" value="0">
        <input type="hidden" name="hflag" id="hflag" value="0">
        <input type="hidden" name="himg" id="himg" value="0">
        <div class="bottom">
            <div style="width: 33.3%;float: left">
                <div class="layui-form-item">
                    <label class="layui-form-label">房屋类别：</label>
                    <div class="layui-input-block">
                        <select name="sid" id="sid" lay-filter="sid"></select>
                    </div>
                </div>

            </div>
            <div style="width: 33.3%;float: left">
                <div class="layui-form-item">
                    <label class="layui-form-label">所在区域：</label>
                    <div class="layui-input-block">
                        <select name="aid" id="aid" lay-filter="aid"></select>
                    </div>
                </div>
            </div>
            <div style="width:  33.3%;float: right">
                <div class="layui-form-item">
                    <label class="layui-form-label">房屋户型：</label>
                    <div class="layui-input-block">
                        <select name="htype" id="htype" lay-filter="htype">
                            <option value=""></option>
                            <option value="一室一厅">一室一厅</option>
                            <option value="两室一厅">两室一厅</option>
                            <option value="三室一厅">三室一厅</option>
                            <option value="四室一厅">四室一厅</option>
                            <option value="四室两厅">四室两厅</option>
                        </select>
                    </div>
                </div>
            </div>

        </div>

        <div class="bottom">
            <div style="width: 33.3%;float: left">
                <div class="layui-form-item">
                    <label class="layui-form-label">房门牌号：</label>
                    <div class="layui-input-block">
                        <input type="text" name="hnumber" id="hnumber" lay-verify="required" autocomplete="off"
                               placeholder="请输入房门牌号" class="layui-input ">
                    </div>
                </div>

            </div>
            <div style="width: 33.3%;float: left">
                <div class="layui-form-item">
                    <label class="layui-form-label">房屋地址：</label>
                    <div class="layui-input-block">
                        <input type="text" name="haddress" id="haddress" lay-verify="required" autocomplete="off"
                               placeholder="请输入房屋地址" class="layui-input ">
                    </div>
                </div>
            </div>
            <div style="width:  33.3%;float: right">
                <div class="layui-form-item">
                    <label class="layui-form-label">房屋面积：</label>
                    <div class="layui-input-block">
                        <input type="text" name="harea" id="harea" lay-verify="required|operationCount" autocomplete="off"
                               placeholder="请输入房屋面积" class="layui-input ">
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom">
            <div style="width: 33.3%;float: left">
                <div class="layui-form-item">
                    <label class="layui-form-label">房屋朝向：</label>
                    <div class="layui-input-block">
                        <select name="direction" id="direction" lay-filter="direction">
                            <option value=""></option>
                            <option value="坐北朝南">坐北朝南</option>
                            <option value="坐东朝西">坐东朝西</option>
                            <option value="坐南朝北">坐南朝北</option>
                            <option value="坐西朝东">坐西朝东</option>
                        </select>
                    </div>
                </div>

            </div>
            <div style="width: 33.3%;float: left">
                <div class="layui-form-item">
                    <label class="layui-form-label">最低租金：</label>
                    <div class="layui-input-block">
                        <input type="text" name="hmoney" id="hmoney" lay-verify="required|operationCount"
                               placeholder="请输入最低租金" class="layui-input ">
                    </div>
                </div>
            </div>
            <div style="width:  33.3%;float: right">
                <div class="layui-form-item">
                    <label class="layui-form-label">房屋网费：</label>
                    <div class="layui-input-block">
                        <input type="text" name="networkmoney" id="networkmoney" lay-verify="required|operationCount"
                               autocomplete="off"
                               placeholder="请输入网费" class="layui-input ">
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom">
            <div style="width: 33.3%;float: left">
                <div class="layui-form-item">
                    <label class="layui-form-label">电费(单价)：</label>
                    <div class="layui-input-block">
                        <input type="text" name="electricmoney" id="electricmoney" lay-verify="required|operationCount"
                               autocomplete="off"
                               placeholder="请输入电费(单价)" class="layui-input ">
                    </div>
                </div>

            </div>
            <div style="width: 33.3%;float: left">
                <div class="layui-form-item">
                    <label class="layui-form-label">水费(单价)：</label>
                    <div class="layui-input-block">
                        <input type="text" name="watermoney" id="watermoney" lay-verify="required|operationCount"
                               autocomplete="off"
                               placeholder="请输入水费(单价)" class="layui-input ">
                    </div>
                </div>
            </div>
            <div style="width:  33.3%;float: right">
                <div class="layui-form-item">
                    <label class="layui-form-label">煤气(单价)：</label>
                    <div class="layui-input-block">
                        <input type="text" name="gasmoney" id="gasmoney" lay-verify="required|operationCount" autocomplete="off"
                               placeholder="请输入煤气费(单价)" class="layui-input ">
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom">
            <div style="width: 33.3%;float: left">
                <div class="layui-form-item">
                    <label class="layui-form-label">电表刻度：</label>
                    <div class="layui-input-block">
                        <input type="text" name="electricnumber" id="electricnumber" lay-verify="required|operationCount2"
                               autocomplete="off"
                               placeholder="请输入电表刻度" class="layui-input ">
                    </div>
                </div>

            </div>
            <div style="width: 33.3%;float: left">
                <div class="layui-form-item">
                    <label class="layui-form-label">水表刻度：</label>
                    <div class="layui-input-block">
                        <input type="text" name="waternumber" id="waternumber" lay-verify="required|operationCount2"
                               autocomplete="off"
                               placeholder="请输入水表刻度" class="layui-input ">
                    </div>
                </div>
            </div>
            <div style="width:  33.3%;float: right">
                <div class="layui-form-item">
                    <label class="layui-form-label">煤气刻度：</label>
                    <div class="layui-input-block">
                        <input type="text" name="gesnumber" id="gesnumber" lay-verify="required|operationCount2"
                               autocomplete="off"  placeholder="请输入煤气刻度" class="layui-input ">
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom">
            <div style="width: 33.3%;float: left">
                <div class="layui-form-item">
                    <label class="layui-form-label">房屋简称：</label>
                    <div class="layui-input-block">
                        <input type="text" name="hname" id="hname" lay-verify="required" autocomplete="off" placeholder="请输入房屋简称" class="layui-input ">
                    </div>
                </div>

            </div>
            <div style="width: 66.7%;float: left">
                <div class="layui-form-item">
                    <label class="layui-form-label">房间图片：</label>
                    <div class="layui-input-block">
                        <div id="upload-box">
                            <input class=" upload" lay-verify="required" type="file" name="himg1" id="himg1">
                            <input class=" upload" lay-verify="required" type="file" name="himg2" id="himg2">
                            <input class=" upload" lay-verify="required" type="file" name="himg3" id="himg3">
                        </div>
                        <div id="img-box">
                                <img src=""  id="img1" class="himg">
                                <img src=""  id="img2" class="himg">
                                <img src=""  id="img3" class="himg">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom">
            <div style="width: 100%;float: left">
                <div class="layui-form-item">
                    <label class="layui-form-label">备注说明：</label>
                    <div class="layui-input-block">
                        <textarea name="hremark" id="hremark" placeholder="请输入内容" style="height: 120px" class="layui-textarea"></textarea>
                    </div>
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


