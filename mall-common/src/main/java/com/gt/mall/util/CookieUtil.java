package com.gt.mall.util;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

/**
 * 
 *	Cookie工具类
 *
 */
public class CookieUtil {
	
	/** 用户的购物车商品cookie key */
	public static String SHOP_CART_COOKIE_KEY = "mall:mall_shopCart_id" ;
	
	
	/**
	 * 设置cookie
	 * @param response response
	 * @param name  cookie名字
	 * @param value cookie值
	 * @param maxAge cookie生命周期  以秒为单位
	 */
	public static void addCookie(HttpServletResponse response,String name,String value,int maxAge){
		Cookie cookie = new Cookie(name,value);
	    cookie.setPath("/");
	    if(maxAge>0)  cookie.setMaxAge(maxAge);
	    response.addCookie(cookie);
	}
	
	
	public static String findCookieByName(HttpServletRequest request,String name){
	    Map<String,Cookie> cookieMap = ReadCookieMap(request);
	    if(cookieMap.containsKey(name)){
	        Cookie cookie = (Cookie)cookieMap.get(name);
//	        System.out.println("cookie:["+cookie.getName()+"] 的值为:"+cookie.getValue());  
	        return cookie.getValue();
	    }else{
	        return null;
	    }   
	}
	
	/**
	 * 根据名字获取cookie
	 * @param request request
	 * @param name cookie名字
	 * @return Cookie
	 */
	public static Cookie getCookieByName(HttpServletRequest request,String name){
	    Map<String,Cookie> cookieMap = ReadCookieMap(request);
	    if(cookieMap.containsKey(name)){
	        Cookie cookie = (Cookie)cookieMap.get(name);
//	        System.out.println("cookie:["+cookie.getName()+"] 的值为:"+cookie.getValue());  
	        return cookie;
	    }else{
	        return null;
	    }   
	}
	 
	/**
	 * 将cookie封装到Map里面
	 * @param request request
	 * @return 内容
	 */
	private static Map<String,Cookie> ReadCookieMap(HttpServletRequest request){  
	    Map<String,Cookie> cookieMap = new HashMap<String,Cookie>();
	    Cookie[] cookies = request.getCookies();
	    if(null!=cookies){
	        for(Cookie cookie : cookies){
	            cookieMap.put(cookie.getName(), cookie);
	        }
	    }
	    return cookieMap;
	}
	
	 /**
	  * 删除cookie
	  * @param request request
	  * @param response response
	  * @param name cookie 名称
	  */
	 public static void delCookie(HttpServletRequest request,HttpServletResponse response,String name){  
         Cookie[] cookies = request.getCookies();  
         if(null==cookies) {  
//             System.out.println("没有cookie==============");  
         }else{  
             for(Cookie cookie : cookies){  
                 if(cookie.getName().equals(name)){  
                     cookie.setValue(null);  
                     cookie.setMaxAge(0);// 立即销毁cookie  
                     cookie.setPath("/");  
//                     System.out.println("被删除的cookie名字为:"+cookie.getName());  
                     response.addCookie(cookie);  
                     break;  
                 }  
             }  
         }  
     }  

	
}
