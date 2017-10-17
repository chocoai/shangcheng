package com.gt.mall.result.phone;

import com.gt.mall.entity.basic.MallImageAssociative;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

/**
 * 商品详情返回结果
 * User : yangqian
 * Date : 2017/10/12 0012
 * Time : 20:11
 */
@ApiModel( value = "PhoneGroupDTO", description = "商品详情" )
@Getter
@Setter
public class PhoneProductDetailResult implements Serializable {

    private static final long serialVersionUID = -1254979092945866546L;

    @ApiModelProperty( name = "productName", value = "商品名称" )
    private String productName;

    @ApiModelProperty( name = "productLabel", value = "商品标签" )
    private String productLabel = "";

    @ApiModelProperty( name = "productPrice", value = "商品价格" )
    private double productPrice;

    @ApiModelProperty( name = "productCostPrice", value = "商品原价" )
    private double productCostPrice;

    @ApiModelProperty( name = "hyPrice", value = "会员价" )
    private double hyPrice;

    @ApiModelProperty( name = "freightMoney", value = "运费" )
    private double freightMoney;

    @ApiModelProperty( name = "productCode", value = "商品编号" )
    private String productCode;

    @ApiModelProperty( name = "unit", value = "单位" )
    private String unit;//单位

    @ApiModelProperty( name = "maxBuyNum", value = "限购，买家最多购买的数量" )
    private int maxBuyNum = 0;//限购，买家最多购买的数量

    @ApiModelProperty( name = "productStockTotal", value = "商品库存" )
    private int productStockTotal;

    @ApiModelProperty( name = "productSaleTotal", value = "商品销量" )
    private int productSaleTotal;

    @ApiModelProperty( name = "isSpecifica", value = "是否是规格  1有规格 0没有" )
    private int isSpecifica;

    @ApiModelProperty( name = "productDetail", value = "商品详情" )
    private String productDetail = "";

    @ApiModelProperty( name = "productMessage", value = "商品信息栏" )
    private Object productMessage = "";

    @ApiModelProperty( name = "shopName", value = "店铺名称" )
    private String shopName;

    @ApiModelProperty( name = "shopImageUrl", value = "店铺图片" )
    private String shopImageUrl;

    @ApiModelProperty( name = "shopAddress", value = "店铺地址" )
    private String shopAddress;

    @ApiModelProperty( name = "isCollect", value = "是否已收藏  1已收藏" )
    private int isCollect;

    @ApiModelProperty( name = "isSecuritytrade", value = "是否开通了担保交易 true开通了 false未开通" )
    private boolean isSecuritytrade;

    @ApiModelProperty( name = "stoType", value = "个人认证 或 企业认证" )
    private String stoType;

    @ApiModelProperty( name = "categoryName", value = "店铺类型" )
    private String categoryName;

    @ApiModelProperty( name = "isAdvert", value = "是否显示技术支持 1显示 0不显示" )
    private int isAdvert;

    @ApiModelProperty( name = "isShowAddShopButton", value = "是否显示加入购物车按钮 1显示" )
    private int isShowAddShopButton = 1;

    @ApiModelProperty( name = "isShowLiJiBuyButton", value = "是否显示立即购买的按钮 1显示" )
    private int isShowLiJiBuyButton = 1;

    @ApiModelProperty( name = "imageList", value = "图片集合" )
    private List< MallImageAssociative > imageList;

    @ApiModelProperty( name = "invId", value = "库存id" )
    private int invId;

    /*************************************************** 以下参数活动商品需要 ***************************************************/
    @ApiModelProperty( name = "type", value = "活动类型" )
    private int type;//活动类型

    @ApiModelProperty( name = "invList", value = "库存id集合" )
    private List< Integer > invIdList;

    @ApiModelProperty( name = "activityId", value = "活动id" )
    private int activityId;//活动id

    @ApiModelProperty( name = "activityStatus", value = "活动状态 0未开始 1进行中 -1已结束" )
    private Integer activityStatus;

    /*********************************** 以下参数团购商品需要 ***********************************/

    @ApiModelProperty( name = "joinList", value = "参团集合" )
    private List< Map< String,Object > > joinList;

    /*********************************** 以下参数预售商品需要 ***********************************/

    @ApiModelProperty( name = "presaleResult", value = "预售结果" )
    private PhonePresaleProductDetailResult presaleResult;

    /*********************************** 以下参数批发商品需要 ***********************************/

    @ApiModelProperty( name = "pifaResult", value = "批发结果" )
    private PhonePifaProductDetailResult pifaResult;

    /**
     * 拍卖返回结果
     */
    private PhoneAuctionProductDetailResult auctionResult;

    /**
     * 是否允许退款 1允许
     */
    @ApiModelProperty( name = "isReturn", value = "是否允许退款 1允许" )
    private int isReturn = 1;

    /*********************************** 以下参数销售商品需要 ***********************************/

    /**
     * 是否显示佣金 1显示
     */
    @ApiModelProperty( name = "isShowCommission", value = "是否显示佣金 1显示" )
    private int isShowCommission = 0;

    /**
     * 是否显示我要分享
     */
    @ApiModelProperty( name = "isShowShare", value = "是否显示我要分享 1显示" )
    private int isShowShare = -1;

    /**
     * 销售员状态  1审核通过  -1审核不通过 -2 待申请销售员，审核中 -3 暂停使用  -4不用判断
     */
    @ApiModelProperty( name = "sellerStatus", value = "销售员状态  1审核通过  -1审核不通过 -2 待申请销售员，审核中 -3 暂停使用  -4不用判断" )
    private int sellerStatus = -4;

    /**
     * 不能分享说明
     */
    @ApiModelProperty( name = "shareErrorMsg", value = "不能分享说明" )
    private String shareErrorMsg;

    /**
     * 佣金
     */
    @ApiModelProperty( name = "commissionMoney", value = "佣金" )
    private double commissionMoney = -1;

    /**
     * 销售员id
     */
    @ApiModelProperty( name = "saleMemberId", value = "销售员id" )
    private int saleMemberId = 0;

}