webpackJsonp([15],{"13px":function(t,e,o){"use strict";e.a={props:["background","isHeadPortrait"],data:function(){return{}},mounted:function(){}}},"23Jn":function(t,e,o){"use strict";function a(t){o("NQLv")}var r=o("PFbz"),i=o("u1k7"),s=o("8AGX"),n=a,d=s(r.a,i.a,!1,n,"data-v-940b8da6",null);e.a=d.exports},"4jiG":function(t,e,o){"use strict";o("VCXJ").default.mixin({methods:{showConfirmDialogs:function(t){var e=this,o={btnNum:"2",dialogMsg:"您确定已经到货？",btnOne:"确定",btnTow:"关闭",dialogTitle:"确认收货提示",callback:{btnOne:function(){e.confirmReceipts(t)}}};e.$parent.$refs.dialog.showDialog(o)},confirmReceipts:function(t){var e=this;e.ajaxRequest({url:h5App.activeAPI.confirm_receipt_post,data:{busId:e.busId,url:location.href,browerType:e.$store.state.browerType,orderId:t},success:function(t){null!=e.orderList?(e.orderList=null,e.getOrderList({curPage:1})):null!=e.order&&null!=e.orderDetailList&&e.loadOrderDetail()}})},showDeleteOrderDialog:function(t){var e=this;e.$parent.$refs.dialog.showDialog({btnNum:"2",dialogMsg:Language.delete_order_tip_msg,btnOne:Language.confirm_msg,btnTow:Language.close_msg,dialogTitle:Language.delete_order_title_tip_msg,callback:{btnOne:function(){e.deloteOrders(t)}}})},deloteOrders:function(t){var e=this,o={browerType:e.$store.state.browerType,busId:e.busId,url:location.href,orderId:this.orderId};e.ajaxRequest({url:h5App.activeAPI.delete_order_post,data:o,success:function(t){history.go(-1)}})},showCloseReturnDialog:function(t){var e=this,o={btnNum:"2",dialogMsg:Language.return_order_tip_msg,btnOne:Language.confirm_msg,btnTow:Language.close_msg,dialogTitle:Language.close_return_title_msg,callback:{btnOne:function(){e.closeReturn(t)}}};e.$parent.$refs.dialog.showDialog(o)},closeReturn:function(t){var e=this,o={browerType:e.$store.state.browerType,busId:e.busId,url:location.href,returnId:t};e.ajaxRequest({url:h5App.activeAPI.close_return_post,data:o,success:function(t){null!=e.orderList?(e.orderList=null,e.getOrderList({curPage:1})):null!=e.order&&null!=e.orderDetailList&&e.loadOrderDetail()}})}}})},"9k5c":function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"more-main",class:{"margin-bottom-clear":!t.$store.state.isShowFooter}},[o("p",{directives:[{name:"show",rawName:"v-show",value:2==t.isMore,expression:"isMore == 2"}]},[t._v("加载中，请稍等……")]),t._v(" "),o("p",{directives:[{name:"show",rawName:"v-show",value:3==t.isMore,expression:"isMore == 3"}]},[t._v("抱歉,没有更多了")])])},r=[],i={render:a,staticRenderFns:r};e.a=i},"Ap/d":function(t,e,o){var a=o("GgqZ");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o("8bSs")("f1ca8520",a,!0)},GgqZ:function(t,e,o){e=t.exports=o("BkJT")(!1),e.push([t.i,".ik-box[data-v-e02577ec]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.box-sizing[data-v-e02577ec]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.text-overflow[data-v-e02577ec]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.imgbox[data-v-e02577ec],.user-head-portrait[data-v-e02577ec]{width:100%;height:100%;position:relative}.user-head-portrait[data-v-e02577ec]{background-size:100%;background-repeat:no-repeat;background-position:50%;z-index:1}.default-img1[data-v-e02577ec],.default-img2[data-v-e02577ec]{width:100%;height:100%;position:absolute;top:0;left:0;z-index:0;line-height:1;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-pack:center;-o-box-pack:center;box-pack:center;-webkit-box-align:center;-o-box-align:center;box-align:center}.default-img1 .iconfont[data-v-e02577ec],.default-img2 .iconfont[data-v-e02577ec]{font-size:1.33333333rem;color:#d6d6d6}.default-img2 .iconfont[data-v-e02577ec]{font-size:1rem;color:#fff}",""])},IALW:function(t,e,o){var a=o("SPAC");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o("8bSs")("9ffbd314",a,!0)},MH3W:function(t,e,o){e=t.exports=o("BkJT")(!1),e.push([t.i,'.ik-box[data-v-72f2a3ba]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.box-sizing[data-v-72f2a3ba]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.text-overflow[data-v-72f2a3ba]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.order-content[data-v-72f2a3ba]{width:100%;background:#fff}.order-content .logistics-title[data-v-72f2a3ba]{padding:.33333333rem .23333333rem;line-height:1}.order-content .logistics-title .logistics-img[data-v-72f2a3ba]{width:.4rem;height:.4rem;border-radius:100%;margin-right:.13333333rem;border:1px solid #ededed}.order-content .logistics-list[data-v-72f2a3ba]{width:100%;padding-left:.54666667rem;padding-right:.2rem;line-height:1;overflow:hidden}.order-content .logistics-list .logistics-item[data-v-72f2a3ba]{padding:.26666667rem 0 .26666667rem .54666667rem;position:relative;height:1.56666667rem}.order-content .logistics-list .logistics-item .logistics-txt[data-v-72f2a3ba]{line-height:.35rem;margin-bottom:.1rem}.order-content .logistics-list .logistics-item em[data-v-72f2a3ba]{position:absolute;width:.16666667rem;height:.16666667rem;background:#ddd;top:.33333333rem;left:-.09333333rem;border-radius:100%}.order-content .logistics-list .logistics-item[data-v-72f2a3ba]:after{content:"";position:relative;display:inline-block;width:.02rem;height:200%;background:#ddd;left:-.57333333rem;top:-.8rem}.order-content .logistics-list>div[data-v-72f2a3ba]:first-child{color:#0bb453}.order-content .logistics-list>div:first-child em[data-v-72f2a3ba]{background:#0bb453;-webkit-box-shadow:0 0 0 2px rgba(11,180,83,.3);box-shadow:0 0 0 2px rgba(11,180,83,.3)}.order-main[data-v-72f2a3ba]{padding:.98666667rem 0}.padding-bottom-clear[data-v-72f2a3ba]{padding-bottom:0!important}.order-main2[data-v-72f2a3ba]{padding-top:0}.deltails-main[data-v-72f2a3ba],.order-main[data-v-72f2a3ba]{position:relative}.deltails-main .order-box[data-v-72f2a3ba],.order-main .order-box[data-v-72f2a3ba]{width:100%}.deltails-main .order-item[data-v-72f2a3ba],.order-main .order-item[data-v-72f2a3ba]{width:100%;margin-bottom:.13333333rem;background:#fff}.deltails-main .order-item-title[data-v-72f2a3ba],.order-main .order-item-title[data-v-72f2a3ba]{padding:0 .26666667rem;background:#fafafa;height:.9rem;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-align:center;-o-box-align:center;box-align:center}.deltails-main .order-item-title .order-title-img[data-v-72f2a3ba],.order-main .order-item-title .order-title-img[data-v-72f2a3ba]{width:.53333333rem;height:.53333333rem;border-radius:100%;border:1px solid #efefef;background-size:cover;overflow:hidden}.deltails-main .order-item-title span[data-v-72f2a3ba],.order-main .order-item-title span[data-v-72f2a3ba]{margin-left:.13333333rem;font-weight:700}.deltails-main .order-shop[data-v-72f2a3ba],.order-main .order-shop[data-v-72f2a3ba]{width:100%;height:.77333333rem;padding-left:.26666667rem;padding-right:.2rem;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify;font-size:0}.deltails-main .order-shop-name span[data-v-72f2a3ba],.order-main .order-shop-name span[data-v-72f2a3ba]{margin:.2rem}.deltails-main .order-item-content[data-v-72f2a3ba],.order-main .order-item-content[data-v-72f2a3ba]{line-height:1;font-size:0}.deltails-main .order-item-content[data-v-72f2a3ba],.deltails-main .order-number-time[data-v-72f2a3ba],.order-main .order-item-content[data-v-72f2a3ba],.order-main .order-number-time[data-v-72f2a3ba]{display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify;width:100%;padding:.16rem .2rem .16rem .26666667rem}.deltails-main .order-item-content .order-item-img[data-v-72f2a3ba],.deltails-main .order-number-time .order-item-img[data-v-72f2a3ba],.order-main .order-item-content .order-item-img[data-v-72f2a3ba],.order-main .order-number-time .order-item-img[data-v-72f2a3ba]{width:1.76666667rem;height:1.76666667rem;background-size:cover}.deltails-main .order-item-content .order-item-txt[data-v-72f2a3ba],.deltails-main .order-number-time .order-item-txt[data-v-72f2a3ba],.order-main .order-item-content .order-item-txt[data-v-72f2a3ba],.order-main .order-number-time .order-item-txt[data-v-72f2a3ba]{width:73%}.deltails-main .order-item-content .order-item-txt p[data-v-72f2a3ba],.deltails-main .order-number-time .order-item-txt p[data-v-72f2a3ba],.order-main .order-item-content .order-item-txt p[data-v-72f2a3ba],.order-main .order-number-time .order-item-txt p[data-v-72f2a3ba]{margin-bottom:.13333333rem}.deltails-main .order-item-button[data-v-72f2a3ba],.deltails-main .order-item-total[data-v-72f2a3ba],.deltails-main .order-number-time[data-v-72f2a3ba],.order-main .order-item-button[data-v-72f2a3ba],.order-main .order-item-total[data-v-72f2a3ba],.order-main .order-number-time[data-v-72f2a3ba]{width:100%;padding:.25333333rem .2rem .25333333rem .26666667rem;text-align:right}.deltails-main .order-item-button .order-button[data-v-72f2a3ba],.deltails-main .order-item-total .order-button[data-v-72f2a3ba],.deltails-main .order-number-time .order-button[data-v-72f2a3ba],.order-main .order-item-button .order-button[data-v-72f2a3ba],.order-main .order-item-total .order-button[data-v-72f2a3ba],.order-main .order-number-time .order-button[data-v-72f2a3ba]{color:#fff;width:1.69333333rem;height:.58666667rem;line-height:.58666667rem;display:inline-block;border-radius:5px;text-align:center;margin-left:.13333333rem}.more-main[data-v-72f2a3ba]{padding-bottom:0}',""])},MgKc:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"shop-header"},[o("div",{staticClass:"header-nav fs42"},t._l(t.headers,function(e){return o("div",{key:e.id,staticClass:"header-itme",class:[e.id==t.selectNav?t.selectFontColor:""],on:{click:function(o){t.selects(e.id)}}},[o("p",{domProps:{textContent:t._s(e.name)}}),t._v(" "),o("em",{class:[t.selectbg?t.selectbg:"shop-bg"]})])}))])},r=[],i={render:a,staticRenderFns:r};e.a=i},NQLv:function(t,e,o){var a=o("ar7S");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o("8bSs")("bd79f474",a,!0)},PFbz:function(t,e,o){"use strict";e.a={props:["statu","errorMsg"],data:function(){return{msg:"您还没有相关的订单"}},mounted:function(){null!=this.errorMsg&&(this.msg=this.errorMsg)},methods:{lockMall:function(){var t=this.$route.params.busId;this.$parent.getMemberCenter(t,1)}}}},R7Cr:function(t,e,o){var a=o("MH3W");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o("8bSs")("755a317a",a,!0)},SPAC:function(t,e,o){e=t.exports=o("BkJT")(!1),e.push([t.i,".more-main{width:100%;font-size:.3rem;color:#737373;text-align:center;padding:.25rem 0;padding-bottom:60px}.more-main p{margin-bottom:.05rem;text-align:center}.margin-bottom-clear{margin-bottom:0!important}",""])},U2lE:function(t,e,o){var a=o("izCW");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o("8bSs")("4bf8c310",a,!0)},YuAX:function(t,e){t.exports={props:["isMore"],data:function(){return{}}}},ar7S:function(t,e,o){e=t.exports=o("BkJT")(!1),e.push([t.i,".ik-box[data-v-940b8da6]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.box-sizing[data-v-940b8da6]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.text-overflow[data-v-940b8da6]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.shop-main-no[data-v-940b8da6]{padding:2.65333333rem 0 1.66666667rem}.shop-main-no .shop-no-content[data-v-940b8da6]{width:100%;text-align:center;line-height:1;font-size:0}.shop-main-no .shop-no-content .shop-no-icon[data-v-940b8da6]{width:1.43333333rem;height:1.43333333rem;border-radius:100%;background:#d1d2d4;margin:0 auto;margin-bottom:.66666667rem;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:center;-o-box-pack:center;box-pack:center}.shop-main-no .shop-no-content .shop-no-icon i[data-v-940b8da6]{color:#fff;font-size:1rem}.shop-main-no .shop-no-content .shop-no-icon2[data-v-940b8da6]{width:1.43333333rem;height:1.43333333rem;margin:0 auto;margin-bottom:.66666667rem;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:center;-o-box-pack:center;box-pack:center}.shop-main-no .shop-no-content .shop-no-icon2 i[data-v-940b8da6]{color:#d1d2d4!important;font-size:1.18666667rem}.shop-main-no .shop-no-content p[data-v-940b8da6]{margin-bottom:.33333333rem}.shop-main-no .shop-no-content a[data-v-940b8da6]{color:#999}.shop-main-no .shop-no-content .no-button[data-v-940b8da6]{display:inline-block;padding:.13333333rem .2rem;border-radius:6px}.shop-main-no .shop-no-content .no-shopcart[data-v-940b8da6]{width:100%}.shop-main-no .shop-no-content .no-shopcart .shop-no-icon[data-v-940b8da6]{background:0;border:1px solid #7a7e83}.shop-main-no .shop-no-content .no-shopcart i[data-v-940b8da6]{color:#7a7e83;font-weight:100}",""])},brkI:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"shop-wrapper  order-wrapper",attrs:{id:"app"}},[null!=t.homeNav&&t.homeNav.length>0&&t.isShowNav?o("header-nav",{attrs:{headers:t.homeNav,status:"order"}}):t._e(),t._v(" "),t.isShowNullContent?o("content-no",{attrs:{statu:t.statu,errorMsg:t.errorMsg}}):t._e(),t._v(" "),t.isShowNullContent||null==t.orderList?t._e():o("section",{staticClass:"shop-main order-main",class:{"order-main2":!t.isShowNav,"padding-bottom-clear":!t.$store.state.isShowFooter}},[o("div",{staticClass:"order-box"},t._l(t.orderList,function(e,a){return o("div",{key:a,staticClass:"order-item"},[o("div",{staticClass:"order-item-title fs40",on:{click:function(o){t.jumpBus(e)}}},[o("div",{staticClass:"order-title-img"},[o("default-img",{attrs:{background:e.busImageUrl,isHeadPortrait:1}})],1),t._v(" "),o("span",[t._v(t._s(e.busName))])]),t._v(" "),o("div",{staticClass:"order-shop border",on:{click:function(o){t.jumpShop(e)}}},[o("p",{staticClass:"order-shop-name"},[o("i",{staticClass:"iconfont icon-dianpu"}),t._v(" "),o("span",{staticClass:"fs36"},[t._v(t._s(e.shopName))]),t._v(" "),o("i",{staticClass:"iconfont icon-you"})]),t._v(" "),o("p",{staticClass:"shop-font fs42"},[t._v("\r\n                        "+t._s(e.orderStatusName)+"\r\n                    ")])]),t._v(" "),t._l(e.detailResultList,function(a,r){return 5!=e.orderPayWay?o("div",{key:r,staticClass:"order-item-box "},[o("div",{staticClass:"order-item-content  border",on:{click:function(o){t.returnOrderDetail(e.orderId)}}},[o("div",{staticClass:"order-item-img"},[o("default-img",{attrs:{background:t.imgUrl+a.productImageUrl,isHeadPortrait:0}})],1),t._v(" "),o("div",{staticClass:"order-item-txt"},[o("p",{staticClass:"fs42"},[t._v(t._s(a.productName))]),t._v(" "),o("p",{staticClass:"fs42 shop-font"},[t._v("¥"+t._s(a.productPrice[0])+"."),o("span",{staticClass:"fs32"},[t._v(t._s(a.productPrice[1]))])]),t._v(" "),o("p",{staticClass:"fs36 shopGray"},[""!=a.productSpecificaValue?o("span",[t._v(t._s(a.productSpecificaValue)+"/")]):t._e(),t._v("\r\n                                "+t._s(a.productNum)+"件")])])]),t._v(" "),1==a.isShowApplyReturnButton||1==a.isShowCommentButton?o("div",{staticClass:"order-item-button fs42 border"},[1==a.isShowApplyReturnButton?o("div",{staticClass:"order-button shop-bg",on:{click:function(e){t.returnApplyReturn(a.orderDetailId)}}},[t._v("\r\n                            申请退款\r\n                        ")]):t._e(),t._v(" "),1==a.isShowCommentButton?o("div",{staticClass:"order-button shop-bg",on:{click:function(o){t.returnToComment(a.orderDetailId,e.busId)}}},[t._v("\r\n                            去评论\r\n                        ")]):t._e()]):t._e()]):t._e()}),t._v(" "),5==e.orderPayWay?o("div",{staticClass:"order-item-box"},[o("div",{staticClass:"order-item-content  border",staticStyle:{padding:"0.5rem"}},[o("span",{staticClass:"fs42"},[t._v("扫码支付")]),t._v(" "),o("span",{staticClass:"fs42",staticStyle:{"margin-left":"0.5rem"}},[t._v("订单金额："+t._s(e.orderMoney[0])+"."+t._s(e.orderMoney[1]))])])]):t._e(),t._v(" "),o("div",{staticClass:"order-number-time border"},[o("div",{staticClass:"order-number fs42"},[t._v("\r\n                        订单号："),o("span",[t._v(t._s(e.orderNo))])]),t._v(" "),o("div",{staticClass:"order-time fs42"},[t._v("\r\n                        下单时间："),o("span",[t._v(t._s(e.orderCreateTime))])])]),t._v(" "),o("div",{staticClass:"order-item-total border fs42"},[t._v("\r\n                    共计"+t._s(e.totalNum)+"件商品 合计：￥"+t._s(e.orderMoney[0])+"."+t._s(e.orderMoney[1])+"\r\n                ")]),t._v(" "),1==e.isShowGoPayButton||1==e.isShowReceiveGoodButton||1==e.isShowDaifuButton?o("div",{staticClass:"order-item-button fs42"},[1==e.isShowGoPayButton?o("div",{staticClass:"order-button shop-bg",on:{click:function(o){t.returnToPay(e)}}},[t._v("\r\n                        去支付\r\n                    ")]):t._e(),t._v(" "),1==e.isShowReceiveGoodButton?o("div",{staticClass:"order-button shop-bg",on:{click:function(o){t.sure_dialog(e.orderId)}}},[t._v("\r\n                        确定收货\r\n                    ")]):t._e(),t._v(" "),1==e.isShowDaifuButton?o("div",{staticClass:"order-button shop-bg",on:{click:function(o){t.returnDaifu(e.orderId,e.busId)}}},[t._v("\r\n                        代付详情\r\n                    ")]):t._e()]):t._e()],2)})),t._v(" "),o("more",{attrs:{"is-more":t.isMore}})],1),t._v(" "),t.isShow?o("section",{staticClass:"shop-main-no fs40 my-bond"},[o("content-no",{attrs:{statu:t.bondStatu}})],1):t._e(),t._v(" "),o("shop-dialog",{ref:"dialog"})],1)},r=[],i={render:a,staticRenderFns:r};e.a=i},fOec:function(t,e,o){"use strict";function a(t){o("U2lE")}var r=o("fYv0"),i=o("MgKc"),s=o("8AGX"),n=a,d=s(r.a,i.a,!1,n,"data-v-91ea153c",null);e.a=d.exports},fYv0:function(t,e,o){"use strict";e.a={props:["headers","status","selectColor","selectbg"],data:function(){return{selectNav:"",selectFontColor:"shop-font"}},mounted:function(){this.selectNav=this.$route.params.type||0,this.selectFontColor=this.selectColor||"shop-font",console.log(this.selectFontColor,"selectFontColor",this.selectNav)},watch:{$route:function(){this.selectNav=this.$route.params.type||0}},methods:{selects:function(t){if(-1!=t){this.selectNav=t;var e=this.$route.params.busId,o=this.$route.params.shopId;return"order"===this.status?void this.$router.push("/order/list/"+e+"/"+t):"cart"===this.status?(console.log("cart",t),void this.$router.push("/cart/"+o+"/"+e+"/"+t)):void this.onValue(t)}},onValue:function(t){this.$emit("change",t)}}}},g9Zl:function(t,e,o){"use strict";function a(t){o("R7Cr")}Object.defineProperty(e,"__esModule",{value:!0});var r=o("v98X"),i=o("brkI"),s=o("8AGX"),n=a,d=s(r.a,i.a,!1,n,"data-v-72f2a3ba",null);e.default=d.exports},izCW:function(t,e,o){e=t.exports=o("BkJT")(!1),e.push([t.i,".ik-box[data-v-91ea153c]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.box-sizing[data-v-91ea153c]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.text-overflow[data-v-91ea153c]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.shop-header[data-v-91ea153c]{top:0}.shop-header .header-nav[data-v-91ea153c]{height:.98666667rem}.shop-header .header-nav em[data-v-91ea153c]{height:.04rem;width:100%;position:absolute;bottom:0;display:none}.shop-header[data-v-91ea153c]{position:fixed;width:100%;background:#fff}.shop-header .header-nav .header-itme[data-v-91ea153c],.shop-header .header-nav[data-v-91ea153c]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.shop-header .header-nav .header-itme[data-v-91ea153c]{position:relative;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:center;-o-box-pack:center;box-pack:center;-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-webkit-box-orient:vertical;-o-box-orient:vertical;box-orient:vertical}.shop-header .header-nav a[data-v-91ea153c]{display:block;text-align:center}.style-main-font em[data-v-91ea153c]{display:block!important}",""])},kr9m:function(t,e,o){"use strict";function a(t){o("Ap/d")}var r=o("13px"),i=o("yGhU"),s=o("8AGX"),n=a,d=s(r.a,i.a,!1,n,"data-v-e02577ec",null);e.a=d.exports},u1k7:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"shop-main-no"},[o("div",{staticClass:"shop-no-content"},[1==t.statu?o("div",{staticClass:"no-order"},[t._m(0),t._v(" "),o("p",{staticClass:"fs52"},[t._v(t._s(t.msg))]),t._v(" "),o("a",{staticClass:"fs36",on:{click:t.lockMall}},[t._v(" 可以去逛逛哦~")])]):t._e(),t._v(" "),2==t.statu?o("div",{staticClass:"no-news"},[t._m(1),t._v(" "),o("a",{staticClass:"fs36"},[t._v(" 暂无相关信息")])]):t._e(),t._v(" "),3==t.statu?o("div",{staticClass:"no-shopcart"},[t._m(2),t._v(" "),o("p",{staticClass:"fs36 shopGray shop-textc"},[t._v("您的购物车还没有任何商品")]),t._v(" "),o("span",{staticClass:"no-button shopborder fs36",on:{click:t.lockMall}},[t._v("去逛逛")])]):t._e(),t._v(" "),4==t.statu?o("div",{staticClass:"no-shopcart"},[t._m(3),t._v(" "),o("a",{staticClass:"fs42",staticStyle:{color:"#333"}},[t._v(" "+t._s(t.errorMsg||"暂无相关信息"))])]):t._e()])])},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"shop-no-icon"},[o("i",{staticClass:"iconfont icon-order"})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"shop-no-icon"},[o("i",[t._v("!")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"shop-no-icon"},[o("i",[t._v("!")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"shop-no-icon2"},[o("i",{staticClass:"icon-zanwudizhi iconfont"})])}],i={render:a,staticRenderFns:r};e.a=i},uotU:function(t,e,o){"use strict";function a(t){o("IALW")}var r=o("YuAX"),i=o.n(r),s=o("9k5c"),n=o("8AGX"),d=a,l=n(i.a,s.a,!1,d,null,null);e.default=l.exports},v98X:function(t,e,o){"use strict";var a=o("23Jn"),r=o("fOec"),i=o("a58N"),s=o("kr9m"),n=o("uotU");o("4jiG");e.a={name:"myorder",data:function(){return{homeNav:Language.order_nav_msg,isNavshow:"my",isShowNav:!1,statu:1,bondStatu:2,isShow:!1,isShowNullContent:!1,background:null,busId:this.$route.params.busId||sessionStorage.getItem("busId"),type:this.$route.params.type,curPage:0,pageCount:1,orderId:0,orderList:[],isMore:2,imgUrl:"",errorMsg:"",clickOrderId:""}},mounted:function(){var t=this;if(this.getOrderList({curPage:1}),$(window).bind("scroll",function(){$(window).scrollTop()>0&&$(window).scrollTop()>=$(document).height()-$(window).height()-1e3&&t.loadMore()}),t.setTitle(),console.log("this.homeNav",this.homeNav),null!=this.homeNav&&this.homeNav.length>0)for(var e=0;e<this.homeNav.length;e++){var o=this.homeNav[e];if(o.id==this.type){this.isShowNav=!0;break}}},watch:{$route:function(t,e){this.type=this.$route.params.type,this.getOrderList({curPage:1,type:this.type}),this.setTitle()}},components:{headerNav:r.a,contentNo:a.a,shopDialog:i.a,defaultImg:s.a,more:n.default},beforeDestroy:function(){this.isMore=-1},methods:{loadMore:function(){var t=this.pageCount;if(this.curPage>=t)return void(this.isMore=3);2!=this.isMore&&(this.curPage++,this.isMore=2,this.getOrderList({curPage:this.curPage}),this.setTitle())},getOrderList:function(t){var e=this,o={busId:e.busId,url:location.href,browerType:e.$store.state.browerType,type:t.type>=0?t.type:e.type,curPage:t.curPage>0?t.curPage:1};e.ajaxRequest({status:!1,url:h5App.activeAPI.order_list_post,data:o,success:function(t){if(0!=t.code)return e.errorMsg=t.msg,void(e.isShowNullContent=!0);var o=t.data;e.orderData=o;var a=o.orderResultList;e.curPage=o.curPage,e.pageCount=o.pageCount,e.imgUrl=t.imgUrl,a.forEach(function(t,o){t.orderMoney=e.commonFn.moneySplit(t.orderMoney),t.detailResultList.forEach(function(t,o){t.productPrice=e.commonFn.moneySplit(t.productPrice)})}),1===e.curPage?e.orderList=a:e.orderList=e.orderList.concat(a)||[],e.isShowNullContent=!1,e.isMore=1,e.curPage>=e.pageCount&&(e.isMore=3)}})},order_ulShow:function(){$(".orderTotal-ul").toggleClass("shop-hide"),$(".icon-up").toggleClass("shop-hide"),$(".icon-jiantou").toggleClass("shop-hide")},sure_dialog:function(t){this.showConfirmDialogs(t)},revoke_dialog:function(){},returnApplyReturn:function(t){sessionStorage.setItem("refundReturnUrl",location.href),this.$router.push("/return/classify/"+this.busId+"/"+t)},returnToComment:function(t,e){this.$router.push("/comment/"+e+"/"+t)},returnToPay:function(t){var e=(t.orderPayWay,t.orderId),o=t.busId;sessionStorage.setItem("payUrl",location.href),this.$router.push("/order/settlement/"+o+"/3/"+e)},returnDaifu:function(t,e){this.$router.push("/daifu/"+e+"/"+t)},returnOrderDetail:function(t){this.$router.push("/order/detail/"+this.busId+"/"+t)},setTitle:function(){var t=this;this.commonFn.setTitle(Language.order_title_data_msg[t.type].name)},jumpBus:function(t){this.$router.push("/stores/"+t.busId)},jumpShop:function(t){this.$parent.getPageId(t.busId,t.shopId,!0)}}}},yGhU:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"imgbox"},[o("div",{staticClass:"user-head-portrait",style:{backgroundImage:"url("+t.background+")"}}),t._v(" "),0==t.isHeadPortrait?o("div",{staticClass:"default-img1"},[o("i",{staticClass:"iconfont icon-tupianjiazaizhong-"})]):t._e(),t._v(" "),1==t.isHeadPortrait?o("div",{staticClass:"default-img2"},[o("i",{staticClass:"iconfont icon-ren1"})]):t._e()])},r=[],i={render:a,staticRenderFns:r};e.a=i}});