package com.gt.mall.controller;

/**
 * 公用Controller
 * User : yangqian
 * Date : 2017/8/26 0026
 * Time : 10:57
 */

import com.gt.mall.util.QRcodeKit;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.UnsupportedEncodingException;

@Controller
@RequestMapping( "/common" )
public class CommonController {

    /**
     * 下载提取链接二维码
     */
    @RequestMapping( "/downQr" )
    public void downQr( HttpServletRequest request, HttpServletResponse response, @RequestParam String url ) throws UnsupportedEncodingException {
	String filename = "二维码.jpg";
	response.addHeader( "Content-Disposition", "attachment;filename=" + new String( filename.replaceAll( " ", "" ).getBytes( "utf-8" ), "iso8859-1" ) );
	response.setContentType( "application/octet-stream" );
	QRcodeKit.buildQRcode( url, 450, 450, response );
    }
}
