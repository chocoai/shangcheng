package com.gt.mall.util;

import com.alibaba.fastjson.JSONObject;
import com.gt.api.exception.SignException;
import com.gt.api.util.sign.SignHttpUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.Map;

/**
 * 调用会员接口的工具类
 * User : yangqian
 * Date : 2017/8/14 0014
 * Time : 15:50
 */
public class MemberInterUtil {

    private static Logger logger = LoggerFactory.getLogger( MemberInterUtil.class );

    private static JSONObject SignHttpJson( Object obj, String url ) {
	url = PropertiesUtil.getMemberDomain() + url;
	String signKey = PropertiesUtil.getMemberSignKey();
	try {
	    String result = SignHttpUtils.postByHttp( url, obj, signKey );
	    logger.info( "result:" + result );

	    if ( CommonUtil.isNotEmpty( result ) ) {
		return JSONObject.parseObject( result );
	    }
	} catch ( SignException e ) {
	    e.printStackTrace();
	}
	return null;
    }

    /**
     * 查询 接口
     *
     * @param params 参数
     * @param url    地址
     *
     * @return 返回
     */
    public static String SignHttpSelect( Object params, String url ) {
	JSONObject resultObj = SignHttpJson( params, url );

	if ( resultObj.getInteger( "code" ) == 0 ) {
	    logger.info( "data = " + resultObj.getString( "data" ) );
	    return resultObj.getString( "data" );
	} else {
	    logger.info( "调用会员接口异常：" + resultObj.getString( "msg" ) );
	}
	return null;
    }

    /**
     * 新增和修改接口
     *
     * @param params 参数
     * @param url    地址
     *
     * @return 返回
     */
    public static Map< String,Object > SignHttpInsertOrUpdate( Object params, String url ) {
	Map< String,Object > resultMap = new HashMap<>();
	JSONObject resultObj = SignHttpJson( params, url );
	int code = resultObj.getInteger( "code" );
	if ( code == 0 ) {
	    logger.info( "data = " + resultObj.getString( "data" ) );
	    resultMap.put( "code", 1 );//成功
	} else if ( code == 5005 ) {//5005 非会员
	    resultMap.put( "code", 0 );
	} else {//失败的将会回滚
	    resultMap.put( "code", -1 );//失败
	    resultMap.put( "errorMsg", resultObj.getString( "msg" ) );
	    logger.info( "调用会员接口异常：" + resultObj.getString( "msg" ) );
	}
	return resultMap;
    }
}
