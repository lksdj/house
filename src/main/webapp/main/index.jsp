<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
	<link rel="stylesheet" href="${pageContext.request.contextPath }/css/font.css">
	<link rel="stylesheet" href="${pageContext.request.contextPath }/css/xadmin.css">
	<link rel="stylesheet" href="${pageContext.request.contextPath }/layui/css/layui.css" >
 	<script type="text/javascript" src="${pageContext.request.contextPath }/js/jquery-3.6.0.min.js"></script> 
	<script type="text/javascript" src="${pageContext.request.contextPath }/layui/layui.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath }/js/xadmin.js"></script>
</head>

<body>
    <!-- 顶部开始 -->
    <div class="container">
        <div class="logo"><a href="#">房屋出租管理系统</a></div>
        <div class="left_open">
            <i title="展开左侧栏" class="iconfont">&#xe699;</i>
        </div>
    <%--    <ul class="layui-nav left fast-add" lay-filter="">
          <li class="layui-nav-item">
            <a href="javascript:;">+新增</a>
            <dl class="layui-nav-child"> <!-- 二级菜单 -->
              <dd><a onclick="x_admin_show('资讯','http://www.baidu.com')"><i class="iconfont">&#xe6a2;</i>资讯</a></dd>
              <dd><a onclick="x_admin_show('图片','http://www.baidu.com')"><i class="iconfont">&#xe6a8;</i>图片</a></dd>
               <dd><a onclick="x_admin_show('用户','http://www.baidu.com')"><i class="iconfont">&#xe6b8;</i>用户</a></dd>
            </dl>
          </li>
        </ul>--%>
        <ul class="layui-nav right" lay-filter="">
          <li class="layui-nav-item">
            <a href="javascript:;">${jname}</a>
            <dl class="layui-nav-child"> <!-- 二级菜单 -->
              <dd><a href="${pageContext.request.contextPath }/main/login.jsp">切换账号</a></dd>
              <dd><a href="${pageContext.request.contextPath }/main/login.jsp">退出</a></dd>
            </dl>
          </li>

        </ul>
        
    </div>
    <!-- 顶部结束 -->
    <!-- 中部开始 -->
     <!-- 左侧菜单开始 -->
    <div class="left-nav">
      <div id="side-nav">
        <ul id="nav">
            <li>
                <a href="javascript:;">
                    <i class="iconfont">&#xe6b8;</i>
                    <cite>综合管理</cite>
                    <i class="iconfont nav_right">&#xe697;</i>
                </a>
                <ul class="sub-menu">
                    <li>
                        <a _href="${pageContext.request.contextPath }/dept.do?method=index">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>部门管理</cite>
                        </a>
                    </li >
                    <li>
                        <a _href="${pageContext.request.contextPath }/job.do?method=index">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>岗位管理</cite>
                        </a>
                    </li>
                    
                    <li>
                        <a _href="${pageContext.request.contextPath }/emp.do?method=index">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>员工管理</cite>
                        </a>
                    </li>
                    
                    
                     <li>
                        <a _href="${pageContext.request.contextPath }/sort.do?method=index">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>房屋类别管理</cite>
                        </a>
                    </li>
                    
                     <li>
                        <a _href="${pageContext.request.contextPath }/area.do?method=index">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>片区管理</cite>
                        </a>
                    </li>
                    
                     <li>
                        <a _href="${pageContext.request.contextPath }/house.do?method=index">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>房屋管理</cite>
                        </a>
                    </li>
                    
                  <!--   <li>
                        <a href="javascript:;">
                            <i class="iconfont">&#xe70b;</i>
                            <cite>会员管理</cite>
                            <i class="iconfont nav_right">&#xe697;</i>
                        </a>
                        <ul class="sub-menu">
                            <li>
                                <a _href="xxx.html">
                                    <i class="iconfont">&#xe6a7;</i>
                                    <cite>会员列表</cite>
                                    
                                </a>
                            </li >
                            <li>
                                <a _href="xx.html">
                                    <i class="iconfont">&#xe6a7;</i>
                                    <cite>会员删除</cite>
                                    
                                </a>
                            </li>
                            <li>
                                <a _href="xx.html">
                                    <i class="iconfont">&#xe6a7;</i>
                                    <cite>等级管理</cite>
                                </a>
                            </li>
                        </ul>
                    </li> -->
                </ul>
            </li> 
            
            <li>
                <a href="javascript:;">
                    <i class="iconfont">&#xe723;</i>
                    <cite>业务管理</cite>
                    <i class="iconfont nav_right">&#xe697;</i>
                </a>
                <ul class="sub-menu">
                    <li>
                        <a _href="${pageContext.request.contextPath }/cus.do?method=index">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>客户登记</cite>
                        </a>
                    </li >
                    
                    <li>
                        <a _href="${pageContext.request.contextPath }/register.do?method=index">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>登记入住</cite>
                        </a>
                    </li >
                    
                    <li>
                        <a _href="${pageContext.request.contextPath }/charge.do?method=index">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>登记收费</cite>
                        </a>
                    </li >
                    
                    <li>
                        <a _href="${pageContext.request.contextPath }/check.do?method=index">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>登记退租</cite>
                        </a>
                    </li >
                    
                    <li>
                        <a _href="${pageContext.request.contextPath }/operation.do?method=index">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>登记抄表</cite>
                        </a>
                    </li >
                    
                       <li>
                        <a _href="${pageContext.request.contextPath }/repair.do?method=index">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>登记报损</cite>
                        </a>
                    </li >
                </ul>
            </li>
            <li>
                <a href="javascript:;">
                    <i class="iconfont">&#xe726;</i>
                    <cite>业务报表</cite>
                    <i class="iconfont nav_right">&#xe697;</i>
                </a>
                <ul class="sub-menu">
                    <li>
                        <a _href="${pageContext.request.contextPath }/income.do?method=index">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>现金收入流水</cite>
                        </a>
                    </li >
                    <li>
                        <a _href="${pageContext.request.contextPath }/expend.do?method=index">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>现金支出流水</cite>
                        </a>
                    </li >
                    <li>
                        <a _href="${pageContext.request.contextPath }/tu.do?method=index">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>地区统计图</cite>
                        </a>
                    </li >
                    <li>
                        <a _href="${pageContext.request.contextPath }/charge.do?method=gdate">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>到期收入查询</cite>
                        </a>
                    </li >
                </ul>
            </li>
            <li>
                <a href="javascript:;">
                    <i class="iconfont">&#xe6ce;</i>
                    <cite>个人中心</cite>
                    <i class="iconfont nav_right">&#xe697;</i>
                </a>
                <ul class="sub-menu">
                    <li>
                        <a _href="${pageContext.request.contextPath }/login/upd.jsp">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>修改密码</cite>
                        </a>
                    </li >
                   <%-- <li>
                        <a _href="${pageContext.request.contextPath }/policy.do?method=in">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>公司政策</cite>
                        </a>
                    </li>--%>
                    <li>
                        <a _href="${pageContext.request.contextPath }/contract.do?method=index">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>合同模板</cite>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
      </div>
    </div>
    <!-- <div class="x-slide_left"></div> -->
    <!-- 左侧菜单结束 -->
    <!-- 右侧主体开始 -->
    <div class="page-content">
        <div class="layui-tab tab" lay-filter="xbs_tab" lay-allowclose="false">
          <ul class="layui-tab-title">
            <li>我的桌面</li>
          </ul>
          <div class="layui-tab-content">
            <div class="layui-tab-item layui-show">
                <iframe src='${pageContext.request.contextPath }/login.do?method=index' frameborder="0" scrolling="yes" class="x-iframe"></iframe>
            </div>
          </div>
        </div>
    </div>
    <div class="page-content-bg"></div>
    <!-- 右侧主体结束 -->
    <!-- 中部结束 -->
    <!-- 底部开始 -->
    <div class="footer">
        <div class="copyright">Copyright ©2017 x-admin v2.3 All Rights Reserved</div>  
    </div> 

</body>
</html>