package com.gt.mall.controller;

import com.gt.mall.base.BaseController;
import com.gt.mall.cxf.service.WxShopService;
import com.gt.mall.util.MyConfigUtil;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * API 参考类
 *
 * @author zhangmz
 * @create 2017/7/8
 */
@Controller
public class TestController extends BaseController {

    @Autowired
    private WxShopService wxShopService;

    /**
     * 跳转index 页面
     *
     * @param map
     *
     * @return
     */
    @ApiOperation( value = "首页", notes = "首页" )
    @GetMapping( { "", "/", "/" } )
    public ModelAndView index( ModelAndView map ) {
	try {
	    System.out.println( "MyConfigUtil.getHomeUrl() = " + MyConfigUtil.getHomeUrl() );
	    map.addObject( "homeUrl", 22 );

	    map.addObject( "test", "hello zhangmz!" );

	/*WsWxShopInfo wxShopInfo = wxShopService.getShopById( 21 );
	map.addObject( "wxShop", JSONObject.toJSONString( wxShopInfo ));*/

	    map.setViewName( "index" );
	} catch ( Exception e ) {
	    e.printStackTrace();
	}
	return map;
    }

}
