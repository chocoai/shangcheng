package com.gt.mall.service.web.store;

import com.gt.mall.base.BaseService;
import com.gt.mall.entity.store.MallStoreCertification;

import java.util.Map;

/**
 * <p>
 * 店铺认证表 服务类
 * </p>
 *
 * @author yangqian
 * @since 2017-09-19
 */
public interface MallStoreCertificationService extends BaseService< MallStoreCertification > {

    /**
     * 根据店铺id 获取认证信息
     *
     * @param storeId
     *
     * @return
     */
    MallStoreCertification selectByStoreId( Integer storeId );

    /**
     * 获取手机验证码
     *
     * @param mobile
     * @param busId
     *
     * @return
     */
    boolean getValCode( String mobile, Integer busId );

}