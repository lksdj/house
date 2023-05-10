package com.hu.util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class Mylntercepter extends HandlerInterceptorAdapter {

	// 拦截方法
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		// 判断session是否有东西
		Object obj = request.getSession().getAttribute("count");
		System.out.println("obj:" + obj);
		// 获取请求的url
		String url = request.getRequestURI();// 获取网页地址
		System.out.println("网页 地址:" + url);
		// 用户登陆的入口要放行
		if (url.indexOf("/house/login.do") >= 0) {
			return true;
		}
		if (obj == null) {
			request.getRequestDispatcher("/nologin.jsp").forward(request, response);
			return false;
		}
		return true;

	}

}
