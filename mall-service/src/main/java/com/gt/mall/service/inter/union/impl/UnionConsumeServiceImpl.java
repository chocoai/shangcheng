package com.gt.mall.service.inter.union.impl;

import com.gt.mall.service.inter.union.UnionConsumeService;
import org.springframework.stereotype.Service;

import java.util.Map;

/**
 * 调用联盟卡核销实现类
 * User : yangqian
 * Date : 2017/9/6 0006
 * Time : 17:33
 */
@Service
public class UnionConsumeServiceImpl implements UnionConsumeService {

    public static final String url = "/api/consume/8A5DA52E/";

    //    @Override
    //    public boolean unionConsume( UnionConsumeParam unionConsumeParam ) {
    //	RequestApiParam< UnionConsumeParam > requestApiParam = new RequestApiParam<>();
    //	requestApiParam.setReqdata( unionConsumeParam );
    //	Map< String,Object > result = HttpSignUtil.signHttpInsertOrUpdate( requestApiParam, url + "unionConsume", 3 );
    //	return result.get( "code" ).toString().equals( "1" );
    //    }
    //
    //    @Override
    //    public boolean unionRefund( UnionRefundParam unionRefundParam ) {
    //
    //	RequestApiParam< UnionRefundParam > requestApiParam = new RequestApiParam<>();
    //	requestApiParam.setReqdata( unionRefundParam );
    //	Map< String,Object > result = HttpSignUtil.signHttpInsertOrUpdate( requestApiParam, url + "unionRefund", 3 );
    //	return result.get( "code" ).toString().equals( "1" );
    //    }
}
