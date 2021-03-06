<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<!DOCTYPE>
<html>
<base href="<%=basePath%>"/>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta id="meta" name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="format-detection" content="telephone=no"/>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="HandheldFriendly" content="true">
    <meta name="MobileOptimized" content="320">
    <meta name="screen-orientation" content="portrait">
    <meta name="x5-orientation" content="portrait">
    <meta name="full-screen" content="yes">
    <meta name="x5-fullscreen" content="true">
    <meta name="browsermode" content="application">
    <meta name="x5-page-mode" content="app">
    <meta name="msapplication-tap-highlight" content="no">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate"/>
    <meta http-equiv="Pragma" content="no-cache"/>
    <meta http-equiv="Expires" content="0"/>
    <title> 拍卖的商品</title>
    <link rel="stylesheet" type="text/css" href="/css/common/init.css?<%=System.currentTimeMillis()%>"/>
</head>

<body>
<section class="loading">
    <div class="load3">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
    </div>
</section>
<link rel="stylesheet" type="text/css" href="/css/mall/public.css"/>
<link rel="stylesheet" type="text/css" href="/css/mall/shoppingall/menu.css"/>
<link id="link1" rel="stylesheet" type="text/css" href="/css/mall/groupbuy/buy-index1.css"/>
<link id="link2" rel="stylesheet" type="text/css" href="/css/mall/shoppingall/indexModify2.css"/>
<script src="/js/plugin/jquery-1.8.3.min.js?<%=System.currentTimeMillis()%>"></script>
<script type="text/javascript" src="/js/plugin/html5shiv.min.js?<%= System.currentTimeMillis()%>"></script>
<div class="Warp">
    <!-- 头部分区结束 -->
    <header class="w header">
        <c:if test="${!empty groupName }">${groupName }</c:if>
        <c:if test="${empty groupName }">拍卖商品</c:if>
        <%-- <c:if test="${groupId eq null}">  拍卖商品</c:if>
          <c:forEach items="${groupList }" var="groL">
             <c:if test="${groL.group_id eq groupId }"> ${groL.group_name } </c:if>
            </c:forEach> --%>
    </header>

    <input type="hidden" class="rType" value="${rType }"/>
    <input type="hidden" class="type" value="${type }"/>
    <input type="hidden" class="shopid" value="${shopid }"/>
    <input type="hidden" class="groupId" value="${groupId }"/>
    <c:set var="urls" value="/mAuction/${shopid }/79B4DE7C/auctionall.do"></c:set>
    <input type="hidden" class="urls" value="${urls }"/>
    <!-- 搜索框开始 -->
    <input type="radio" name="" id="" value=""/>
    <section class="searBtn w">
        <input type="text" value="${proName}" class="input s-input" id="proName" onfocus="focusIn(this)" oninput="inputChange(this)"/>
        <i onclick="queryurl('${type}',0,'${groupId}',0)"></i>
    </section>
    <jsp:include page="/jsp/mall/pop_up/searchPopUp.jsp"></jsp:include>
    <!-- 搜索框结束 -->
    <!-- 列表标题 -->
    <section class="list-tit w" style="margin-bottom: 0px;">
        <ul class="flex">
            <li class="flex-1" onclick="queryurl(1,'${desc}','${groupId}',0)"><i class="<c:if test="${type eq 1 }">current </c:if>">最新</i></li>
            <li class="flex-1" onclick="queryurl(2,'${desc}','${groupId}',0)"><i class="<c:if test="${type eq 2 }">current </c:if>">销量</i></li>
            <li class="flex-1" onclick="queryurl(3,'${desc}','${groupId}',0)"><i class="<c:if test="${type eq 3 }">current </c:if>">价格<c:if test="${type eq 3 && desc eq 0 }"><i
                    class="arrow-down"></i></c:if><c:if test="${type eq 3 && desc eq 1}"><i class="arrow-up"></i></c:if></i></li>
            <li class="last-item flex-1"><a href="javascript:;"><img src="/images/mall/img/more.jpg" class="more-pic"/></a></li>
        </ul>
    </section>
    <div class="main flex">
        <div class="sort">
            <ul class="sortList">
                <li class="<c:if test='${empty groupId  && empty groupPId}'>sortCur</c:if>" onclick="queryurl('${type}','${desc}','')">全部商品</li>
                <c:forEach items="${groupList }" var="groL" varStatus="i">
                    <c:set var="isDefault" value="false"></c:set>
                    <c:if test='${!empty groupId && groupId == groL.group_id}'>
                        <c:set var="isDefault" value="true"></c:set>
                    </c:if>
                    <c:if test='${!empty groupPId && groupPId == groL.group_id}'>
                        <c:set var="isDefault" value="true"></c:set>
                    </c:if>
                    <li class="<c:if test='${isDefault}'>sortCur</c:if>"
                        onclick="
                        <c:if test='${groL.is_child == 1}'>groupChild(this,${groL.group_id });</c:if>
                        <c:if test='${groL.is_child == 0}'>queryurl('${type}','${desc}','${groL.group_id }');</c:if>">${groL.group_name }</li>
                </c:forEach>
            </ul>
        </div>
        <div class="product">
            <c:if test="${!empty productList }">
                <ul class="productList clearfix" id="sort1Main">
                    <!-- 列表标题结束 -->
                    <c:forEach items="${productList }" var="list">
                        <li class="">
                            <a href="/mAuction/${list.id}/${shopId}/${list.aucId }/79B4DE7C/auctiondetail.do">
                                <div class="product-pic">
                                        <%-- <span class="img-container" style="background: url(${imgHttp}${list.image_url}) no-repeat center center;background-size: contain;"></span> --%>
                                    <span class="img-container" data-original="${imgHttp}${list.image_url}"></span>
                                </div>
                                <div class="product-info">
                                    <div class="info-title">
                                        <c:if test="${!empty list.pro_label && list.pro_label != ''}">
                                            <i class="label_i">${list.pro_label }</i>
                                        </c:if>
                                            ${list.pro_name}
                                    </div>
                                    <div class="info-price flex">
                                        <div class="now-price">
                                            <!-- 当前价: -->￥<span class="now-price">${list.nowPrice}</span>
                                        </div>
                                    </div>
                                    <div class="info-price flex">
                                        <div class="info-price flex">
                                            <div class="old-price">￥<span>${list.old_price }</span></div>
                                        </div>
                                    </div>
                                    <div class="time-left flex <c:if test="${list.status ==0}">endFlex</c:if>">
                                        <div class="txt" style="padding: 0px 0.2rem;">
                                            <c:if test="${list.status ==1}">距离结束</c:if>
                                            <c:if test="${list.status ==0}">距离开始</c:if>
                                        </div>
                                        <div class="count-down time-item" status="${list.status }">
                                            <span id="day_show"></span>天<span id="hour_show"></span>时<span id="minute_show"></span>分<span id="second_show"></span>秒
                                            <input type="hidden" class="intDiff" value="${list.times }">
                                            <input type="hidden" class="startDiff" value="${list.startTimes }">
                                            <input type="hidden" class="aucType" value="${list.aucType }"/>
                                            <input type="hidden" class="lowestPrice" value="${list.lowestPrice }"/>
                                            <input type="hidden" class="lowerPriceTime" value="${list.lowerPriceTime }"/>
                                            <input type="hidden" class="lowerPrice" value="${list.lowerPrice }"/>
                                            <input type="hidden" class="nowPrice" value="${list.nowPrice }"/>
                                            <input type="hidden" class="times" value="0"/>
                                        </div>
                                    </div>
                                    <div class="flex text-info fRight">
                                        <c:if test="${list.aucType == 1 }">
                                            <span class="redInp">${list.bidSize } 次抢拍</span>
                                        </c:if>
                                        <c:if test="${list.aucType == 2 }">
                                            <span class="redInp">${list.offerSize } 次出价</span>
                                        </c:if>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </c:forEach>
                </ul>
            </c:if>
            <jsp:include page="/jsp/mall/pop_up/groupPopUp.jsp"></jsp:include>
        </div>
    </div>
</div>
<!-- 页脚开始 -->
<input type="hidden" class="memberId" value="${memberId }"/>
<input type="hidden" class="userid" value="${userid }"/>
<input type="hidden" class="shopid" value="${shopid }"/>
<jsp:include page="/jsp/mall/phoneFooterMenu.jsp"></jsp:include>

<jsp:include page="/jsp/mall/customer.jsp"></jsp:include>

<script type='text/javascript' src='/js/plugin/lazyload/jquery.lazyload.min.js'></script>
<script type="text/javascript" src="/js/mall/phone/phone_public.js"></script>
<script type="text/javascript" src="/js/mall/product/shoppingall.js"></script>
<!-- 页脚结束 -->
<%--<script src="/js/plugin/jquery.min.js" type="text/javascript"></script>--%>
<script type="text/javascript">
    $(window).load(function () {
        $(".loading").hide();
    });
    window.setInterval(function () {
        $(".time-item").each(function () {
            var intDiff = $(this).find(".intDiff").val() * 1;
            var status = $(this).attr("status");
            if (status == 0) {
                if ($(this).find(".startDiff").val() > 0) {
                    intDiff = $(this).find(".startDiff").val() * 1;
                } else {
                    $(this).parents(".endFlex").removeClass("endFlex");
                    $("div.time-left .txt").html("距离结束仅剩");
                }
            }
            var times = timer(intDiff);

            $(this).find('#day_show').html(times[0]);
            $(this).find('#hour_show').html(times[1]);
            $(this).find('#minute_show').html(times[2]);
            $(this).find('#second_show').html(times[3]);

            if (status == 0 && $(this).find(".startDiff").val() > 0) {
                $(this).find(".startDiff").val(intDiff - 1);
            } else {
                $(this).find(".intDiff").val(intDiff - 1);
            }

            var aucType = $(this).find(".aucType").val() * 1;
            var lowerPriceTime = $(this).find(".lowerPriceTime").val() * 1;
            var nowPrice = $(this).find(".nowPrice").val() * 1;//当前价格
            if (lowerPriceTime > 0 && aucType == 1 && nowPrice > 0) {
                var timeSec = $(this).find(".times").val() * 1;
                if (timeSec == 0) {
                    timeSec = 60 - times[3] * 1;
                }
                var lowerPrice = $(this).find(".lowerPrice").val() * 1;//每分钟降低多少元
                var lowestPrice = $(this).find(".lowestPrice").val() * 1;//最低金额
                nowPrice = (nowPrice - lowerPrice).toFixed(2);
                //console.log(timeSec+"---"+nowPrice)
                if (timeSec / 60 == lowerPriceTime) {
                    if (nowPrice > lowestPrice) {
                        //nowPrice = Math.ceil(nowPrice*100)/100;

                        $(this).find(".nowPrice").val(nowPrice);
                        $(this).parents("div.text").find("span.now-price").html(nowPrice);
                        timeSec = 0;
                    }
                } else {
                    timeSec++;
                }
                $(this).find(".times").val(timeSec);
            }
        });
    }, 1000);

    function timer(intDiff) {
        var day = 0,
            hour = 0,
            minute = 0,
            second = 0;
        if (intDiff > 0) {
            day = Math.floor(intDiff / (60 * 60 * 24));
            hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
            minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
            second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
        } else {

        }
        if (minute <= 9) minute = '0' + minute;
        if (second <= 9) second = '0' + second;


        var times = Array();
        times[0] = day;
        times[1] = hour;
        times[2] = minute;
        times[3] = second;
        return times;
    }

    $(function () {

        $("div.fixRig a").css({
            "width": "1.12rem",
            "height": "1.12rem",
            "background-size": "auto 0.6rem"
        });

        $(".last-item").click(function () {
            var _href = $("#link1").attr("href");
            if (_href === "/css/mall/groupbuy/buy-index1.css") {
                $("#link1").attr("href", "/css/mall/groupbuy/buy-index2.css");
                $("#link2").attr("href", "css/mall/shoppingall/indexModify1.css");
            }
            else {
                $("#link1").attr("href", "/css/mall/groupbuy/buy-index1.css");
                $("#link2").attr("href", "css/mall/shoppingall/indexModify2.css");
            }
        });
        $(".sort-div").click(function () {
            $(this).find("ul").toggle();
        })
    });
    //店面跳转
    function pageclick(obj) {
        if (obj == '' || obj == null || obj == undefined || obj == 0 || obj == '0') {
            alert("店面未设置微商城主页面或者微商城主页面已删除");
        } else {
            window.location.href = "/mallPage/" + obj + "/79B4DE7C/pageIndex.do";
        }
    }
    function queryurl(type, desc, style, status) {
        if (type == 3) {
            if (desc == 1) {
                desc = 0;
            } else {
                desc = 1;
            }
        }
        var url = "/mAuction/${shopId}/79B4DE7C/auctionall.do?type=" + type + "&desc=" + desc;
        if (style != '') {
            url += "&groupId=" + style;
        }
        if (status == 0) {
            var proName = $("#proName").val();
        }
        if (proName != null && proName != "" && proName != undefined) {
            url += "&proName=" + proName;
        }
        window.location.href = url;
    }
</script>

</body>
</html>