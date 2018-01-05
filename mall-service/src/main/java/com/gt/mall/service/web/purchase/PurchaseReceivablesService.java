package com.gt.mall.service.web.purchase;

import com.gt.mall.base.BaseService;
import com.gt.mall.entity.purchase.PurchaseReceivables;
import com.gt.mall.utils.PageUtil;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

/**
 * <p>
 * 服务类
 * </p>
 *
 * @author yangqian
 * @since 2017-07-31
 */
public interface PurchaseReceivablesService extends BaseService<PurchaseReceivables> {



    /**
     * 采购模块手机支付
     *
     * @param memberId
     * @param busId
     * @param termId
     * @param money
     * @param discountmoney
     * @param fenbi
     * @param jifen
     * @param discount
     * @param paymentType
     * @param orderId
     * @param dvId
     * @param disCountdepict
     * @return
     * @throws Exception
     */
    public void aliCgPay(Integer memberId, Integer busId, String termId, Double money, Double discountmoney,
                    Double fenbi, Integer jifen, Double discount, String paymentType, Integer orderId,
                    Integer dvId, String disCountdepict,Integer judgeBrowser) throws Exception;


    /**
     * 订单支付后回调此处进行后续操作
     *
     * @param receivablesNumber
     */
    void addReceivables(@RequestParam String receivablesNumber) throws Exception;

    /**
     * 新增收款记录
     * @param request
     * @param memberId
     * @param orderId
     * @param busId
     * @param buyMode
     * @param money
     * @param fansCurrency
     * @param integral
     * @param coupon
     * @param termId
     * @param discount
     */
    String addReceivables( HttpServletRequest request, Integer memberId, Integer orderId, Integer busId, String buyMode, Double money, Double fansCurrency, Double integral,
                    String coupon, String termId, Double discount );

    /**
     * 分页查询数据
     *
     * @param parms
     * @return
     */
    PageUtil findList(Map<String, Object> parms);
}
