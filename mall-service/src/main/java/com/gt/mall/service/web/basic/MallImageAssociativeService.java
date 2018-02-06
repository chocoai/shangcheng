package com.gt.mall.service.web.basic;

import com.gt.mall.base.BaseService;
import com.gt.mall.entity.basic.MallImageAssociative;
import com.gt.mall.param.basic.ImageAssociativeDTO;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 图片中间表 服务类
 * </p>
 *
 * @author yangqian
 * @since 2017-07-20
 */
public interface MallImageAssociativeService extends BaseService< MallImageAssociative > {

    /**
     * 根据关联id来查询图片
     *
     * @param params isMainImages：是否是主图，assType：关联表类型，assId：关联id
     *
     * @return 图片列表
     */
    List< MallImageAssociative > selectByAssId( Map< String,Object > params );

    /**
     * 添加图片
     *
     * @Title: insertImage
     */
    //    Integer insertImage(MallImageAssociative image);

    /**
     * 修改图片
     *
     * @Title: updateById
     */
    //    void updateImageById(MallImageAssociative image);

    /**
     * 批量添加或修改图片
     *
     * @param map   delimageList：删除列表，imageList：图片列表
     * @param proId 关联id
     */
    void insertUpdBatchImage( Map< String,Object > map, Integer proId );

    /**
     * 批量添加或修改图片
     *
     * @param map   delimageList：删除列表，imageList：图片列表
     * @param proId 关联id
     */
    void newInsertUpdBatchImage( Map< String,Object > map, Integer proId, Integer assType );

    void newSaveImage( List< ImageAssociativeDTO > imageList, Integer proId, Integer assType );

    /**
     * 根据关联id来查询图片
     *
     * @param params isMainImages：是否是主图，assType：关联表类型，assId：关联id
     *
     * @return 图片
     */
    List< Map< String,Object > > selectImageByAssId( Map< String,Object > params );

    List< MallImageAssociative > getParamByProductId( Map< String,Object > params );

    /**
     * 根据单个的关联id查询图片集合
     *
     * @param isMainImages 是否是主图  不为空 才为条件
     * @param assType      关联表类型
     * @param assId        关联id
     *
     * @return 图片集合
     */
    List< MallImageAssociative > selectImageByAssId( Integer isMainImages, Integer assType, Integer assId );

    /**
     * 根据多个的关联id查询图片集合
     *
     * @param isMainImages 是否是主图  不为空 才为条件
     * @param assType      关联表类型 1商品
     * @param assIds       关联id集合
     *
     * @return 图片集合
     */
    List< MallImageAssociative > selectImageByAssIds( Integer isMainImages, Integer assType, List< Integer > assIds );
}
