package com.gt.mall.utils;

import com.alibaba.fastjson.JSONArray;
import com.gt.mall.bean.member.Coupons;
import com.gt.mall.bean.member.JifenAndFenbBean;
import com.gt.mall.bean.member.JifenAndFenbiRule;
import com.gt.mall.constant.Constants;
import com.gt.mall.entity.basic.MallPaySet;
import com.gt.mall.param.phone.order.PhoneOrderUserDTO;
import com.gt.mall.param.phone.order.PhoneOrderWayDTO;
import com.gt.mall.param.phone.order.PhoneToOrderDTO;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * 进入提交订单页面的工具类
 * User : yangqian
 * Date : 2017/10/24 0024
 * Time : 14:29
 */
public class ToOrderUtil {

    /**
     * 获取商家的支付方式
     *
     * @param browerType      浏览器类型
     * @param userDTOList     商家返回结果
     * @param phoneToOrderDTO 页面传参
     * @param isStorePay      商家是否开启了到店支付
     * @param mallPaySetList  商城设置
     * @param proTypeId       商品类型 参考t_mall_product表
     * @param type            订单类型
     *
     * @return 支付方式集合
     */
    public static List< PhoneOrderWayDTO > getPayWay( int browerType, List< PhoneOrderUserDTO > userDTOList, PhoneToOrderDTO phoneToOrderDTO,
		    Integer isStorePay, List< MallPaySet > mallPaySetList, int proTypeId, Integer type ) {
	List< PhoneOrderWayDTO > payWayList = new ArrayList<>();

	int isHavePublic = 0;
	int memberCtId = 0;
	for ( PhoneOrderUserDTO orderUserDTO : userDTOList ) {
	    if ( CommonUtil.isNotEmpty( orderUserDTO.getPublicId() ) && orderUserDTO.getPublicId() > 0 ) {
		isHavePublic = 1;
	    } else {
		isHavePublic = 0;
	    }
	    if ( CommonUtil.isNotEmpty( orderUserDTO.getMemberCtId() ) && orderUserDTO.getMemberCtId() > 0 ) {
		memberCtId = orderUserDTO.getMemberCtId();
	    } else {
		memberCtId = 0;
	    }
	}

	if ( browerType == 1 && isHavePublic == 1 ) {
	    PhoneOrderWayDTO result = new PhoneOrderWayDTO( 1, "微信支付", "weixinzhifu" );
	    payWayList.add( result );
	} else {
	    PhoneOrderWayDTO result = new PhoneOrderWayDTO( 9, "支付宝支付", "alipay" );
	    payWayList.add( result );
	}
	if ( memberCtId == 3 ) {
	    PhoneOrderWayDTO result = new PhoneOrderWayDTO( 3, "储值卡支付", "chuzhika" );
	    payWayList.add( result );
	}
	int isHuodao = 0;//是否显示货到付款
	int isDaifu = 0;//是否允许代付
	if ( mallPaySetList != null && mallPaySetList.size() > 0 ) {
	    for ( MallPaySet mallPaySet : mallPaySetList ) {
		if ( CommonUtil.isNotEmpty( mallPaySet.getIsDeliveryPay() ) && "1".equals( mallPaySet.getIsDeliveryPay().toString() ) ) {
		    isHuodao = 1;//允许货到付款
		} else {
		    isHuodao = 0;
		}
		if ( CommonUtil.isNotEmpty( mallPaySet.getIsDaifu() ) && "1".equals( mallPaySet.getIsDaifu().toString() ) ) {
		    isDaifu = 1;//允许代付
		} else {
		    isDaifu = 0;
		}
	    }
	}
	if ( isHuodao == 1 && proTypeId == 0 ) {
	    PhoneOrderWayDTO result = new PhoneOrderWayDTO( 2, "货到付款", "huodaofukuan" );
	    payWayList.add( result );
	}
	if ( CommonUtil.isNotEmpty( type ) ) {
	    if ( type == 2 ) {//积分支付
		//	    PhoneOrderWayDTO result = new PhoneOrderWayDTO( 4, "积分支付" ,"jifen");
		//	    payWayList.add( result );
	    } else if ( type == 5 ) {//粉币支付
		PhoneOrderWayDTO result = new PhoneOrderWayDTO( 8, "粉币支付", "fenbizhifu" );
		payWayList.add( result );
	    }
	}
	if ( CommonUtil.isNotEmpty( isStorePay ) && isStorePay == 1 ) {
	    PhoneOrderWayDTO result = new PhoneOrderWayDTO( 6, "到店支付", "daodianzhifu" );
	    payWayList.add( result );
	}
	if ( isDaifu == 1 ) {
	    PhoneOrderWayDTO result = new PhoneOrderWayDTO( 7, "找人代付", "daifukuan" );
	    payWayList.add( result );
	}
	return payWayList;
    }

    /**
     * 获取商家的配送方式
     */
    public static List< PhoneOrderWayDTO > getDeliveryWay( PhoneToOrderDTO params, int proTypeId, Integer isShowTake, Integer toShop ) {
	List< PhoneOrderWayDTO > wayResultList = new ArrayList<>();
	int toshop = 0;
	if ( CommonUtil.isNotEmpty( toShop ) ) {
	    toshop = toShop;
	}
	if ( toshop == 1 ) {
	    PhoneOrderWayDTO result = new PhoneOrderWayDTO( 3, "到店购买", "daodian" );
	    wayResultList.add( result );
	} else {
	    PhoneOrderWayDTO result = new PhoneOrderWayDTO( 1, "快递配送", "miankuaidi" );
	    wayResultList.add( result );
	}
	if ( proTypeId == 0 && CommonUtil.isNotEmpty( isShowTake ) && isShowTake > 0 ) {
	    PhoneOrderWayDTO result = new PhoneOrderWayDTO( 2, "到店自提", "daodianziti" );
	    wayResultList.add( result );
	}

	return wayResultList;
    }

    /**
     * 重组微信优惠券
     */
    public static List< Coupons > getWxCouponsResult( Object couponObj, List< Coupons > couponsList ) {
	if ( couponsList == null || couponsList.size() == 0 ) {
	    couponsList = new ArrayList<>();
	}
	if ( CommonUtil.isEmpty( couponObj ) ) {
	    return couponsList;
	}
	List< Map > wxList = JSONArray.parseArray( couponObj.toString(), Map.class );
	if ( wxList == null || wxList.size() == 0 ) {
	    return couponsList;
	}
	for ( Map map : wxList ) {
	    Coupons coupons = new Coupons();
	    coupons.setId( CommonUtil.toInteger( map.get( "id" ) ) );//优惠券id
	    coupons.setCouponsFrom( 1 );//优惠券来源（ 1 微信优惠券  2多粉优惠券 ）.
	    coupons.setImage( CommonUtil.toString( map.get( "image" ) ) );
	    String cardType = CommonUtil.toString( map.get( "card_type" ) );// DISCOUNT 折扣券   CASH 满减券
	    String couponsName = "";//卡券名称
	    int cardTypes = -1;
	    if ( "DISCOUNT".equals( cardType ) ) {//折扣券
		cardTypes = 0;
		double discount = CommonUtil.toDouble( map.get( "discount" ) );
		discount = CommonUtil.div( discount, 10, 2 );
		coupons.setDiscount( discount );
		couponsName = map.get( "discount" ) + "折";
	    } else if ( "CASH".equals( cardType ) ) {//满减券
		cardTypes = 1;
		coupons.setCashLeastCost( CommonUtil.toDouble( map.get( "cash_least_cost" ) ) );
		coupons.setReduceCost( CommonUtil.toDouble( map.get( "reduce_cost" ) ) );
		couponsName = "满" + coupons.getCashLeastCost() + "减" + coupons.getReduceCost();
	    }
	    coupons.setCouponsName( couponsName );
	    coupons.setCardType( cardTypes );//卡券类型 0折扣券 1减免券
	    couponsList.add( coupons );
	}
	return couponsList;
    }

    /**
     * 重组多粉优惠券
     */
    public static List< Coupons > getDuofenCouponsResult( Object couponObj, List< Coupons > couponsList ) {
	if ( couponsList == null || couponsList.size() == 0 ) {
	    couponsList = new ArrayList<>();
	}
	if ( CommonUtil.isEmpty( couponObj ) ) {
	    return couponsList;
	}
	List< Map > duofenList = JSONArray.parseArray( couponObj.toString(), Map.class );
	if ( duofenList == null || duofenList.size() == 0 ) {
	    return couponsList;
	}
	for ( Map map : duofenList ) {
	    Coupons coupons = new Coupons();
	    coupons.setId( CommonUtil.toInteger( map.get( "gId" ) ) );//优惠券id
	    coupons.setCouponsFrom( 1 );//优惠券来源（ 1 微信优惠券  2多粉优惠券 ）.
	    coupons.setImage( CommonUtil.toString( map.get( "image" ) ) );
	    String cardType = CommonUtil.toString( map.get( "card_type" ) );// 0 折扣券   1 满减券
	    String couponsName = "";//卡券名称
	    int cardTypes = -1;
	    if ( "0".equals( cardType ) ) {//折扣券
		cardTypes = 0;
		double discount = CommonUtil.toDouble( map.get( "discount" ) );
		discount = CommonUtil.div( discount, 10, 2 );
		coupons.setDiscount( discount );
		couponsName = map.get( "discount" ) + "折";
	    } else if ( "1".equals( cardType ) ) {//满减券
		cardTypes = 1;
		coupons.setCashLeastCost( CommonUtil.toDouble( map.get( "cash_least_cost" ) ) );
		coupons.setReduceCost( CommonUtil.toDouble( map.get( "reduce_cost" ) ) );
		couponsName = "满" + coupons.getCashLeastCost() + "减" + coupons.getReduceCost();

		if ( "1".equals( map.get( "addUser" ).toString() ) && CommonUtil.isNotEmpty( map.get( "countId" ) ) ) {//1 允许叠加
		    coupons.setAddUser( 1 );
		    coupons.setCouponNum( CommonUtil.toInteger( map.get( "countId" ) ) );//卡券数量
		}
	    }
	    coupons.setCouponsName( couponsName );
	    couponsList.add( coupons );
	    coupons.setCardType( cardTypes );//卡券类型 0折扣券 1减免券
	}

	return couponsList;
    }

    /**
     * 获取积分粉币最终兑换的金额
     *
     * @param jifenFenbiRule    积分粉币规则
     * @param jifenProductMoney 能使用积分的商品金额
     * @param fenbiProductMoney 能使用粉币的商品金额
     * @param cardMap           会员对象
     *
     * @return 积分和粉币
     */
    public static JifenAndFenbBean getJifenFenbiParams( JifenAndFenbiRule jifenFenbiRule, double jifenProductMoney, double fenbiProductMoney, Map cardMap ) {
	if ( CommonUtil.isEmpty( jifenFenbiRule ) ) {
	    return null;
	}
	JifenAndFenbBean bean = new JifenAndFenbBean();
	if ( CommonUtil.isNotEmpty( jifenFenbiRule ) && jifenFenbiRule.getJifenStartMoney() > 0 && jifenFenbiRule.getJifenStartMoney() < jifenProductMoney
			&& jifenProductMoney > 0 ) {//显示粉币抵扣的按钮
	    if ( CommonUtil.isNotEmpty( cardMap.get( "integral" ) ) ) {
		bean.setJifenNum( CommonUtil.toDouble( cardMap.get( "integral" ) ) );
	    }
	    if ( CommonUtil.isNotEmpty( cardMap.get( "jifenMoeny" ) ) ) {
		bean.setJifenMoney( CommonUtil.toDouble( cardMap.get( "jifenMoeny" ) ) );
	    }
	    if ( jifenProductMoney < bean.getJifenMoney() && bean.getJifenMoney() > 0 ) {//起兑的商品金额小于
		bean.setJifenNum( CommonUtil.multiply( jifenFenbiRule.getJifenRatio(), jifenProductMoney ) );
		bean.setJifenMoney( jifenProductMoney );
	    }
	}
	//粉币起兑金额  小于 能兑换粉币的商品金额  且 能兑换粉币的商品金额  小于 会员传来的粉币
	if ( jifenFenbiRule.getFenbiStartMoney() > 0 && jifenFenbiRule.getFenbiStartMoney() < fenbiProductMoney && fenbiProductMoney > 0 ) {//显示积分抵扣的按钮
	    if ( CommonUtil.isNotEmpty( cardMap.get( "fans_currency" ) ) ) {
		bean.setFenbiNum( CommonUtil.toDouble( cardMap.get( "fans_currency" ) ) );
	    }
	    if ( CommonUtil.isNotEmpty( cardMap.get( "fenbiMoeny" ) ) ) {
		bean.setFenbiMoney( CommonUtil.toDouble( cardMap.get( "fenbiMoeny" ) ) );
	    }
	    if ( bean.getFenbiMoney() > 0 ) {
		if ( fenbiProductMoney < Constants.FENBI_RUL_MULTIPLE ) {
		    fenbiProductMoney = Constants.FENBI_RUL_MULTIPLE;
		}
		double fenbiMoney = CommonUtil.getDecimal( fenbiProductMoney / Constants.FENBI_RUL_MULTIPLE ).intValue();
		bean.setFenbiNum( CommonUtil.multiply( jifenFenbiRule.getFenbiRatio(), fenbiMoney ) );
		bean.setFenbiMoney( fenbiMoney * Constants.FENBI_RUL_MULTIPLE );
	    }
	}
	return bean;
    }

}
