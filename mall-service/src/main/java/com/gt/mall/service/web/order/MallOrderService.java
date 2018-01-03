package com.gt.mall.service.web.order;

import com.gt.api.bean.session.BusUser;
import com.gt.api.bean.session.Member;
import com.gt.api.bean.session.WxPublicUsers;
import com.gt.mall.base.BaseService;
import com.gt.mall.entity.order.MallDaifu;
import com.gt.mall.entity.order.MallOrder;
import com.gt.mall.entity.order.MallOrderDetail;
import com.gt.mall.entity.order.MallOrderReturn;
import com.gt.mall.result.order.OrderResult;
import com.gt.mall.utils.PageUtil;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

/**
 * <p>
 * 商城订单 服务类
 * </p>
 *
 * @author yangqian
 * @since 2017-07-20
 */
public interface MallOrderService extends BaseService< MallOrder > {

    /**
     * 根据状态统计总数
     *
     * @param params
     *
     * @return
     */
    Integer count( Map< String,Object > params );

    /**
     * 统计各状态下的数量
     *
     * @param params
     *
     * @return
     */
    Map< String,Object > countStatus( Map< String,Object > params );

    /**
     * 分页管理
     */
    public PageUtil findByPage( Map< String,Object > params, List< Map< String,Object > > shoplist );

    /**
     * 重组订单列表
     *
     * @param list 订单集合
     *
     * @return 订单集合
     */
    List< MallOrder > getOrderListParams( List< MallOrder > list );

    /**
     * 交易记录分页管理
     */
    public PageUtil findByTradePage( Map< String,Object > params );

    /**
     * 添加卖家备注、修改订单金额
     */
    public int upOrderNoOrRemark( Map< String,Object > params );

    /**
     * 查询订单信息
     */
    public OrderResult selectOrderList( Integer orderId, List< Map< String,Object > > shoplist );

    /**
     * 支付成功后修改订单状态、库存、销量、规格
     */
    public int paySuccessModified( Map< String,Object > params, Member member );

    /**
     * 修改申请退款
     */
    public Map< String,Object > updateOrderReturn( MallOrderReturn orderReturn, Object oObj, WxPublicUsers pUser ) throws Exception;

    /**
     * 同意退款（用于支付宝退款）
     */
    public void agreanOrderReturn( Map< String,Object > params );

    /**
     * 根据规格值Id查询规格Id
     */
    public Integer selectSpeBySpeValueId( Map< String,Object > params );

    /**
     * 找人代付成功的回调方法
     */
    public int paySuccessDaifu( Map< String,Object > params );

    /**
     * 找人代付
     */
    public Map< String,Object > addMallDaifu( MallDaifu daifu ) throws Exception;

    /**
     * 查询代付信息
     */
    public boolean getDaiFu( MallOrder order, int orderId, int memberId, HttpServletRequest request );

    /**
     * 导出订单
     *
     * @return
     */
    public HSSFWorkbook exportExcel( Map< String,Object > params, String[] titles, int type, List< Map< String,Object > > shoplist );

    /**
     * 导出订单
     *
     * @return
     */
    public HSSFWorkbook exportTradeExcel( Map< String,Object > params, String[] titles, int type, List< Map< String,Object > > shoplist );

    /**
     * 支付有礼
     */
    public String payGive( String result, Map< String,Object > params, Member member );

    /**
     * 发送消息模板
     */
    public void sendMsg( MallOrder order, int type, WxPublicUsers publicUser );

    /**
     * 同步订单
     */
    public Map< String,Object > syncOrderbyPifa( Map< String,Object > params );

    /**
     * 修改订单详情
     */
    int updateOrderDetail( MallOrderDetail detail );

    /**
     * 修改订单价
     */
    int updateOrderMoney( Map< String,Object > params );

    /**
     * 查询会员的消费金额
     *
     * @param buyerUserId 买家id
     *
     * @return 消费金额
     */
    Map< String,Object > selectSumSaleMoney( int buyerUserId );

    /**
     * 重新生成订单号
     */
    MallOrder againOrderNo( int orderId );

    /**
     * 钱包撤销订单
     */
    void walletReturnOrder( String orderNo ) throws Exception;

    /**
     * 获取打印订单的数据
     */
    Map< String,Object > printOrder( Map< String,Object > params, BusUser user );

    /**
     * 查询买家的账号参数
     */
    Map< String,Object > getMemberParams( Member member, Map< String,Object > params );

    /**
     * 运费是否按照距离来算
     *
     * @param shopIds 店铺id
     *
     * @return 是否按照距离来算
     */
    public boolean isJuliByFreight( String shopIds );

    /**
     * 查询积分订单
     */
    PageUtil selectIntegralOrder( Map< String,Object > params );

    /**
     * 统计累计积分数量
     *
     * @param params
     *
     * @return
     */
    List< MallOrder > selectIntegeralOrder( Map< String,Object > params );

    /**
     * 计算库存是否足够
     *
     * @param proId         商品id
     * @param proSpecificas 规格ids
     * @param proNum        购买数量
     *
     * @return result=true 成功
     */
    Map< String,Object > calculateInventory( String proId, Object proSpecificas, String proNum );

    boolean isReturnSuccess( MallOrder order );
}
