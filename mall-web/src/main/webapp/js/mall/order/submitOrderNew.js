function submitOrders() {
    var data = getSubmitParams();
    console.log(data);

    /*var flag = validateSubmit();
     if (!flag) {
     return false;
     }
     */
    var index = layer.open({
        title: "",
        content: "",
        type: 2,
        shadeClose: false
    });
    $.ajax({
        url: "/phoneOrder/79B4DE7C/submitOrder.do",
        type: "POST",
        data: data,
        timeout: 300000,
        dataType: "json",
        success: function (data) {
            if (data.code === 1) {
                //微信支付
                if (data.payWay === 1) {
                    location.href = "/wxPay/79B4DE7C/wxMallAnOrder.do?orderId=" + data.orderId;
                } else if (data.payWay === 9) {
                    var model = 3;
                    if (data.proTypeId === 2) {
                        model = 13;
                    }
                    //var return_url = "${path}/phoneOrder/79B4DE7C/orderList.do?isPayGive=1&&orderId="+data.orderId+"&&uId="+data.busId;
                    var alipaySubject = $("input.alipaySubject").val();
                    var return_url = "${http}/phoneOrder/" + data.orderId + "/" + data.busId + "/1/79B4DE7C/orderPaySuccess.do";
                    location.href = "/alipay/79B4DE7C/alipayApi.do?out_trade_no=" + data.out_trade_no + "&subject=" + alipaySubject + "&total_fee=" + data.orderMoney + "&busId=" + data.busId + "&model=" + model + "&businessUtilName=mallOrderAlipayNotifyUrlBuinessService&return_url=" + return_url;
                } else {
                    location.href = data.url;
                }
                layer.closeAll();

                return true;
            } else {

                if (data.isLogin != null && data.isLogin == 1) {
                    //location.reload(true);
                    /* var loginData = {
                     data : orderDetail,
                     payWayName : $(".paywaynames").text(),
                     orderPayWays: $("#orderPayWay").val()
                     }; */
                    toLogin(null);
                } else {
                    layer.closeAll();
                    var txt = "";
                    if (null != data.cardResult && data.cardResult != "") {
                        txt = data.cardResult.msg;
                        if (data.cardResult.code == -1) {
                            location.href = data.cardResult.url;
                        }
                    } else {
                        txt = data.msg;
                    }
                    gtcommonDialog(txt, null, "提交订单");
                }
                layer.closeAll();
                return false;
            }
        }, error: function () {
            gtcommonDialog("提交订单失败", null, "提交订单");
            layer.closeAll();
            return false;
        }
    });

}

function getSubmitParams() {
    var orderAllMoneys = 0;
    $("input[name='productAllMoney']").val($(".proMoneyAllOld").val());
    var orderArr = [];
    $(".couponDivs").each(function () {
        var shopId = $(this).attr("stoId");
        var obj = $(".orderDivForm").serializeObject();
        var detailArr = [];
        var isCoupons = 0;
        var orderMoney = $(this).find(".orderCountMoney").val() * 1;
        $(this).find(".mall-item").each(function () {
            var detailObj = $(this).next().serializeObject();
            if (detailObj.discount !== null && detailObj.discount !== "") {
                detailObj.discount = detailObj.discount * 1;
            }
            detailArr.push(detailObj);
        });
        var couponJson = $(this).find(".couponJson").val();
        if (couponJson !== null && couponJson !== "") {
            isCoupons = 1;
        }

        var orderObj = obj;

        orderObj.useCoupon = isCoupons;
        orderObj.shopId = shopId;
        orderObj.wxShopId = $(this).attr("wxShopId");
        orderObj.mallOrderDetail = detailArr;
        orderObj.orderMoney = orderMoney;
        var message = $(this).find(".remark-txt").val();
        if (message !== null && message !== "") {
            orderObj.orderBuyerMessage = message;
        }

        if (orderObj.deliveryMethod !== 2) {
            delete orderObj.appointmentName;
            delete orderObj.appointmentTelephone;
            delete orderObj.appointmentTime;
            delete orderObj.appointmentStartTime;
            delete orderObj.appointmentEndTime;
        }
        var proPrimaryPrice = $(this).find(".primaryPrice").val();
        if (proPrimaryPrice !== null && proPrimaryPrice !== "") {
            orderObj.orderOldMoney = proPrimaryPrice * 1;
        }
        if (freightMoney !== null && freightMoney !== "") {
            if (freightMoney[shopId] !== null && freightMoney[shopId] !== "") {
                orderObj.orderFreightMoney = freightMoney[shopId];
            }
        }
        orderAllMoneys += orderMoney;
        orderArr.push(orderObj);
    });
    var oldProductAll = $("#proMoneyAllOld").val();
    var useFenbi = $("#isFenbi").val();
    var userJifen = $("#isJifen").val();
    var couponJson = $("#couponList").val();
    var data = {
        "order": JSON.stringify(orderArr),
        "productAll": oldProductAll,
        "useFenbi": useFenbi,//是否使用粉币
        "useJifen": userJifen, //是否使用积分
        "couponArr": couponJson,
        "orderAllMoneys": orderAllMoneys.toFixed(2),
        "uId": $(".userid").val(),
        "type": $(".buyType").val()
    };
    if ($(".shopcards").val() !== null && $(".shopcards").val() !== "" && type === 1) {
        data["shopcards"] = $(".shopcards").val();
    }
    return data;
}

function validateSubmit() {
    var receiveId = $('#receiveId').val();
    var deliveryMethod = $('#deliveryMethod').val();
    var orderPayWay = $("#orderPayWay").val();

    if (orderPayWay == null || orderPayWay == "") {
        alert("请选择支付方式");
        return false;
    }
    if (deliveryMethod == 2) {
        var appointName = $("#appointName").val();
        var appointTel = $("#appointTelphone").val();
        var deliveryAddress = $("#deliveryAddress").html();
        var deliveryTime = $("#deliveryTime").html();
        var reg = /^0?(13[0-9]|15[012356789]|17[0678]|18[0123456789]|14[57])[0-9]{8}$/;
        if (appointName == "") {
            alert("提货人姓名不能为空");
            return false;
        }
        if (appointTel == "") {
            alert("手机号码不能为空");
            return false;
        } else if (!reg.test(appointTel)) {
            alert("手机号码有误");
            return false;
        } else {
            $("#appointTel").val(appointTel);
        }
        if (deliveryAddress == "") {
            alert("请选择提货地址");
            return false;
        }
        if (deliveryTime == "") {
            alert("请选择提货时间");
            return false;
        }
        $("#appointmentName").val(appointName);//提货人
        $("#appointTel").val(appointTel);
        $("#appointTime").val(deliveryTime);
    }
    var proTypeId = $("#proTypeId").val();
    if (proTypeId > 0) {
        receiveId = "0";
    }
    var isJuliFreight = $(".isJuliFreight").val();
    var mem_latitude = $(".mem_latitude").val();
    var mem_longitude = $(".mem_longitude").val();
    var isKm = $(".isKm").val();
    if ((receiveId == undefined || receiveId == '') && deliveryMethod == 1) {
        alert("请选择收货地址");
        return false;
    } else {
        if (isJuliFreight != null && isJuliFreight != "" && typeof(isJuliFreight) != "undefined" && isJuliFreight == 1 && deliveryMethod == 1) {
            if ((mem_latitude == null || mem_latitude == "" || mem_longitude == null || mem_longitude == "" || isKm == 1) && proTypeId == 0) {
                alert("请重新编辑您的收货地址");
                return false;
            }
        }
        var flowCzPhone = $(".flowCzPhone").val();
        var isFlow = $(".isFlow").val();
        var flowPhone = $("#flowPhone").val();
        if (isFlow != null && isFlow != "" && typeof(isFlow) != "undefined" && (flowCzPhone == "" || flowCzPhone == null || typeof(flowCzPhone) == "undefined")) {
            if (flowPhone == "" || flowPhone == null || typeof(flowPhone) == "undefined") {
                showFlow();
                return false;
            } else {
                $(".flowCzPhone").val(flowPhone);
            }
        }

        if ($("#orderPayWay").val() == 7 && $("#orderMoney").val() * 1 == 0) {
            alert("您的实付金额为0元，无需找人代付，请重新选择支付方式");
            return false;
        }
    }
    $("input[name='receiveId']").val(receiveId);
    $("input[name='orderPayWay']").val(orderPayWay);
    $("input[name='deliveryMethod']").val(deliveryMethod);
    return true;
}