webpackJsonp([10],{"1DU7":function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"more-main",class:{"margin-bottom-clear":!t.$store.state.isShowFooter}},[r("p",{directives:[{name:"show",rawName:"v-show",value:2==t.isMore,expression:"isMore == 2"}]},[t._v("加载中，请稍等……")]),t._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:3==t.isMore,expression:"isMore == 3"}]},[t._v("抱歉,没有更多了")])])},i=[],a={render:o,staticRenderFns:i};e.a=a},"4jiG":function(t,e,r){"use strict";r("5vqR").default.mixin({methods:{showConfirmDialogs:function(t){var e=this,r={btnNum:"2",dialogMsg:"您确定已经到货？",btnOne:"确定",btnTow:"关闭",dialogTitle:"确认收货提示",callback:{btnOne:function(){e.confirmReceipts(t)}}};e.$parent.$refs.dialog.showDialog(r)},confirmReceipts:function(t){var e=this;e.ajaxRequest({url:h5App.activeAPI.confirm_receipt_post,data:{busId:e.busId,url:location.href,browerType:e.$store.state.browerType,orderId:t},success:function(t){null!=e.orderList?(e.orderList=null,e.getOrderList({curPage:1})):null!=e.order&&null!=e.orderDetailList&&e.loadOrderDetail()}})},showDeleteOrderDialog:function(t){var e=this;e.$parent.$refs.dialog.showDialog({btnNum:"2",dialogMsg:e.$t("delete_order_tip_msg"),btnOne:e.$t("confirm_msg"),btnTow:e.$t("close_msg"),dialogTitle:e.$t("delete_order_title_tip_msg"),callback:{btnOne:function(){e.deloteOrders(t)}}})},deloteOrders:function(t){var e=this,r={browerType:e.$store.state.browerType,busId:e.busId,url:location.href,orderId:this.orderId};e.ajaxRequest({url:h5App.activeAPI.delete_order_post,data:r,success:function(t){history.go(-1)}})},showCloseReturnDialog:function(t){var e=this,r={btnNum:"2",dialogMsg:e.$t("return_order_tip_msg"),btnOne:e.$t("confirm_msg"),btnTow:e.$t("close_msg"),dialogTitle:e.$t("close_return_title_msg"),callback:{btnOne:function(){e.closeReturn(t)}}};e.$parent.$refs.dialog.showDialog(r)},closeReturn:function(t){var e=this,r={browerType:e.$store.state.browerType,busId:e.busId,url:location.href,returnId:t};e.ajaxRequest({url:h5App.activeAPI.close_return_post,data:r,success:function(t){null!=e.orderList?(e.orderList=null,e.getOrderList({curPage:1})):null!=e.order&&null!=e.orderDetailList&&e.loadOrderDetail()}})}}})},"76iY":function(t,e,r){"use strict";var o=r("fOec"),i=r("a58N"),a=r("uotU");r("4jiG");e.a={name:"myorder",data:function(){return{homeNav:this.$t("order_nav_msg"),isNavshow:"my",isShowNav:!1,statu:1,bondStatu:2,isShow:!1,isShowNullContent:!1,background:null,busId:this.$route.params.busId||sessionStorage.getItem("busId"),type:this.$route.params.type||0,curPage:0,pageCount:1,orderId:0,orderList:[],isMore:2,imgUrl:"",errorMsg:"",clickOrderId:""}},mounted:function(){if(this.setTitle(),null!=this.homeNav&&this.homeNav.length>0)for(var t=0;t<this.homeNav.length;t++){var e=this.homeNav[t];if(e.id==this.type){this.isShowNav=!0;break}}},watch:{$route:function(t,e){this.type=this.$route.params.type,this.isMore=2,this.curPage=1,this.getOrderList(),this.setTitle()}},components:{headerNav:o.a,shopDialog:i.a,more:a.a},beforeDestroy:function(){this.isMore=-1},methods:{getOrderList:function(){var t=this;if(3!=this.isMore&&1!=this.isMore){this.isMore=1;var e={busId:t.busId,url:location.href,browerType:t.$store.state.browerType,type:t.type,curPage:t.curPage};t.ajaxRequest({status:!1,url:h5App.activeAPI.order_list_post,data:e,success:function(e){if(0!=e.code)return t.isMore=3,t.errorMsg=e.msg,void(t.isShowNullContent=!0);var r=e.data;t.orderData=r;var o=r.orderResultList;if(t.curPage=r.curPage,t.pageCount=r.pageCount,t.imgUrl=e.imgUrl,o.forEach(function(e,r){e.orderMoney=t.commonFn.moneySplit(e.orderMoney),e.detailResultList.forEach(function(e,r){e.productPrice=t.commonFn.moneySplit(e.productPrice)})}),1===t.curPage?t.orderList=o:t.orderList=t.orderList.concat(o)||[],t.isShowNullContent=!1,t.curPage>=t.pageCount)return void(t.isMore=3);t.isMore=2,t.curPage++}})}},sure_dialog:function(t){this.showConfirmDialogs(t)},revoke_dialog:function(){},returnApplyReturn:function(t){sessionStorage.setItem("refundReturnUrl",location.href),this.$router.push("/return/classify/"+this.busId+"/"+t)},returnToComment:function(t,e){this.$router.push("/comment/"+e+"/"+t)},returnToPay:function(t){var e=(t.orderPayWay,t.orderId),r=t.busId;sessionStorage.setItem("payUrl",location.href),this.$router.push("/order/settlement/"+r+"/3/"+e)},returnDaifu:function(t,e){this.$router.push("/daifu/"+e+"/"+t)},returnOrderDetail:function(t){this.$router.push("/order/detail/"+this.busId+"/"+t)},setTitle:function(){var t=this;this.commonFn.setTitle(this.$t("title.order_title_data_msg")[t.type].name)},jumpBus:function(t){this.$router.push("/stores/"+t.busId)},jumpShop:function(t){this.$parent.getPageId(t.busId,t.shopId,!0)}}}},"7tZa":function(t,e,r){e=t.exports=r("BkJT")(!1),e.push([t.i,".shop-header[data-v-15836fa4]{top:0}.shop-header .header-nav[data-v-15836fa4]{height:.98666667rem}.shop-header .header-nav em[data-v-15836fa4]{height:.04rem;width:100%;position:absolute;bottom:0;display:none}.shop-header[data-v-15836fa4]{position:fixed;width:100%;background:#fff}.shop-header .header-nav .header-itme[data-v-15836fa4],.shop-header .header-nav[data-v-15836fa4]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.shop-header .header-nav .header-itme[data-v-15836fa4]{position:relative;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:center;-o-box-pack:center;box-pack:center;-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-webkit-box-orient:vertical;-o-box-orient:vertical;box-orient:vertical}.shop-header .header-nav a[data-v-15836fa4]{display:block;text-align:center}.style-main-font em[data-v-15836fa4]{display:block!important}",""])},Kjsr:function(t,e,r){var o=r("Tjur");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);r("8bSs")("59983ba6",o,!0)},OWAf:function(t,e){t.exports={props:["isMore"],data:function(){return{}}}},SiEt:function(t,e,r){var o=r("7tZa");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);r("8bSs")("4a72fbb6",o,!0)},Tjur:function(t,e,r){e=t.exports=r("BkJT")(!1),e.push([t.i,".more-main{width:100%;font-size:.3rem;color:#737373;text-align:center;padding:.25rem 0;padding-bottom:60px}.more-main p{margin-bottom:.05rem;text-align:center}.margin-bottom-clear{margin-bottom:0!important}",""])},U5Rw:function(t,e,r){e=t.exports=r("BkJT")(!1),e.push([t.i,'.order-content[data-v-dfe1f67c]{width:100%;background:#fff}.order-content .logistics-title[data-v-dfe1f67c]{padding:.33333333rem .23333333rem;line-height:1}.order-content .logistics-title .logistics-img[data-v-dfe1f67c]{width:.4rem;height:.4rem;border-radius:100%;margin-right:.13333333rem;border:1px solid #ededed}.order-content .logistics-list[data-v-dfe1f67c]{width:100%;padding-left:.54666667rem;padding-right:.2rem;line-height:1;overflow:hidden}.order-content .logistics-list .logistics-item[data-v-dfe1f67c]{padding:.26666667rem 0 .26666667rem .54666667rem;position:relative;height:1.56666667rem}.order-content .logistics-list .logistics-item .logistics-txt[data-v-dfe1f67c]{line-height:.35rem;margin-bottom:.1rem}.order-content .logistics-list .logistics-item em[data-v-dfe1f67c]{position:absolute;width:.16666667rem;height:.16666667rem;background:#ddd;top:.33333333rem;left:-.09333333rem;border-radius:100%}.order-content .logistics-list .logistics-item[data-v-dfe1f67c]:after{content:"";position:relative;display:inline-block;width:.02rem;height:200%;background:#ddd;left:-.57333333rem;top:-.8rem}.order-content .logistics-list>div[data-v-dfe1f67c]:first-child{color:#0bb453}.order-content .logistics-list>div:first-child em[data-v-dfe1f67c]{background:#0bb453;-webkit-box-shadow:0 0 0 2px rgba(11,180,83,.3);box-shadow:0 0 0 2px rgba(11,180,83,.3)}.order-main[data-v-dfe1f67c]{padding:.98666667rem 0}.padding-bottom-clear[data-v-dfe1f67c]{padding-bottom:0!important}.order-main2[data-v-dfe1f67c]{padding-top:0}.deltails-main[data-v-dfe1f67c],.order-main[data-v-dfe1f67c]{position:relative}.deltails-main .order-box[data-v-dfe1f67c],.order-main .order-box[data-v-dfe1f67c]{width:100%}.deltails-main .order-item[data-v-dfe1f67c],.order-main .order-item[data-v-dfe1f67c]{width:100%;margin-bottom:.13333333rem;background:#fff}.deltails-main .order-item-title[data-v-dfe1f67c],.order-main .order-item-title[data-v-dfe1f67c]{padding:0 .26666667rem;background:#fafafa;height:.9rem;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-align:center;-o-box-align:center;box-align:center}.deltails-main .order-item-title .order-title-img[data-v-dfe1f67c],.order-main .order-item-title .order-title-img[data-v-dfe1f67c]{width:.53333333rem;height:.53333333rem;border-radius:100%;border:1px solid #efefef;background-size:cover;overflow:hidden}.deltails-main .order-item-title span[data-v-dfe1f67c],.order-main .order-item-title span[data-v-dfe1f67c]{margin-left:.13333333rem;font-weight:700}.deltails-main .order-shop[data-v-dfe1f67c],.order-main .order-shop[data-v-dfe1f67c]{width:100%;height:.77333333rem;padding-left:.26666667rem;padding-right:.2rem;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify;font-size:0}.deltails-main .order-shop-name span[data-v-dfe1f67c],.order-main .order-shop-name span[data-v-dfe1f67c]{margin:.2rem}.deltails-main .order-item-content[data-v-dfe1f67c],.order-main .order-item-content[data-v-dfe1f67c]{line-height:1;font-size:0}.deltails-main .order-item-content[data-v-dfe1f67c],.deltails-main .order-number-time[data-v-dfe1f67c],.order-main .order-item-content[data-v-dfe1f67c],.order-main .order-number-time[data-v-dfe1f67c]{display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify;width:100%;padding:.16rem .2rem .16rem .26666667rem}.deltails-main .order-item-content .order-item-img[data-v-dfe1f67c],.deltails-main .order-number-time .order-item-img[data-v-dfe1f67c],.order-main .order-item-content .order-item-img[data-v-dfe1f67c],.order-main .order-number-time .order-item-img[data-v-dfe1f67c]{width:1.76666667rem;height:1.76666667rem;background-size:cover}.deltails-main .order-item-content .order-item-txt[data-v-dfe1f67c],.deltails-main .order-number-time .order-item-txt[data-v-dfe1f67c],.order-main .order-item-content .order-item-txt[data-v-dfe1f67c],.order-main .order-number-time .order-item-txt[data-v-dfe1f67c]{width:73%}.deltails-main .order-item-content .order-item-txt p[data-v-dfe1f67c],.deltails-main .order-number-time .order-item-txt p[data-v-dfe1f67c],.order-main .order-item-content .order-item-txt p[data-v-dfe1f67c],.order-main .order-number-time .order-item-txt p[data-v-dfe1f67c]{margin-bottom:.13333333rem}.deltails-main .order-item-button[data-v-dfe1f67c],.deltails-main .order-item-total[data-v-dfe1f67c],.deltails-main .order-number-time[data-v-dfe1f67c],.order-main .order-item-button[data-v-dfe1f67c],.order-main .order-item-total[data-v-dfe1f67c],.order-main .order-number-time[data-v-dfe1f67c]{width:100%;padding:.25333333rem .2rem .25333333rem .26666667rem;text-align:right}.deltails-main .order-item-button .order-button[data-v-dfe1f67c],.deltails-main .order-item-total .order-button[data-v-dfe1f67c],.deltails-main .order-number-time .order-button[data-v-dfe1f67c],.order-main .order-item-button .order-button[data-v-dfe1f67c],.order-main .order-item-total .order-button[data-v-dfe1f67c],.order-main .order-number-time .order-button[data-v-dfe1f67c]{color:#fff;width:1.69333333rem;height:.58666667rem;line-height:.58666667rem;display:inline-block;border-radius:5px;text-align:center;margin-left:.13333333rem}.more-main[data-v-dfe1f67c]{padding-bottom:20px}',""])},czVm:function(t,e,r){var o=r("U5Rw");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);r("8bSs")("29108688",o,!0)},fOec:function(t,e,r){"use strict";function o(t){r("SiEt")}var i=r("rDzV"),a=r("sK4O"),s=r("0HdQ"),n=o,d=s(i.a,a.a,!1,n,"data-v-15836fa4",null);e.a=d.exports},g9Zl:function(t,e,r){"use strict";function o(t){r("czVm")}Object.defineProperty(e,"__esModule",{value:!0});var i=r("76iY"),a=r("xV/p"),s=r("0HdQ"),n=o,d=s(i.a,a.a,!1,n,"data-v-dfe1f67c",null);e.default=d.exports},rDzV:function(t,e,r){"use strict";e.a={props:["headers","status","selectColor","selectbg"],data:function(){return{selectNav:"",selectFontColor:"shop-font"}},mounted:function(){this.selectNav=this.$route.params.type||0,this.selectFontColor=this.selectColor||"shop-font",console.log(this.selectFontColor,"selectFontColor",this.selectNav)},watch:{$route:function(){this.selectNav=this.$route.params.type||0}},methods:{selects:function(t){if(-1!=t){this.selectNav=t;var e=this.$route.params.busId,r=this.$route.params.shopId;return"order"===this.status?void this.$router.push("/order/list/"+e+"/"+t):"cart"===this.status?(console.log("cart",t),void this.$router.push("/cart/"+r+"/"+e+"/"+t)):void this.onValue(t)}},onValue:function(t){this.$emit("change",t)}}}},sK4O:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"shop-header"},[r("div",{staticClass:"header-nav fs42"},t._l(t.headers,function(e){return r("div",{key:e.id,staticClass:"header-itme",class:[e.id==t.selectNav?t.selectFontColor:""],on:{click:function(r){t.selects(e.id)}}},[r("p",{domProps:{textContent:t._s(e.name)}}),t._v(" "),r("em",{class:[t.selectbg?t.selectbg:"shop-bg"]})])}))])},i=[],a={render:o,staticRenderFns:i};e.a=a},uotU:function(t,e,r){"use strict";function o(t){r("Kjsr")}var i=r("OWAf"),a=r.n(i),s=r("1DU7"),n=r("0HdQ"),d=o,l=n(a.a,s.a,!1,d,null,null);e.a=l.exports},"xV/p":function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"shop-wrapper  order-wrapper",attrs:{id:"app"}},[null!=t.homeNav&&t.homeNav.length>0&&t.isShowNav?r("header-nav",{attrs:{headers:t.homeNav,status:"order"}}):t._e(),t._v(" "),t.isShowNullContent?r("content-no",{attrs:{statu:t.statu,errorMsg:t.errorMsg}}):t._e(),t._v(" "),t.isShowNullContent||null==t.orderList?t._e():r("section",{staticClass:"shop-main order-main",class:{"order-main2":!t.isShowNav,"padding-bottom-clear":!t.$store.state.isShowFooter}},[r("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.getOrderList,expression:"getOrderList"}],staticClass:"order-box",attrs:{"infinite-scroll-distance":"100"}},t._l(t.orderList,function(e,o){return r("div",{key:o,staticClass:"order-item"},[r("div",{staticClass:"order-item-title fs40",on:{click:function(r){t.jumpBus(e)}}},[r("div",{staticClass:"order-title-img"},[r("default-img",{attrs:{background:e.busImageUrl,isHeadPortrait:1,size:"0.3"}})],1),t._v(" "),r("span",[t._v(t._s(e.busName))])]),t._v(" "),r("div",{staticClass:"order-shop border",on:{click:function(r){t.jumpShop(e)}}},[r("p",{staticClass:"order-shop-name"},[r("i",{staticClass:"iconfont icon-dianpu"}),t._v(" "),r("span",{staticClass:"fs36"},[t._v(t._s(e.shopName))]),t._v(" "),r("i",{staticClass:"iconfont icon-you"})]),t._v(" "),r("p",{staticClass:"shop-font fs42"},[t._v("\r\n                        "+t._s(e.orderStatusName)+"\r\n                    ")])]),t._v(" "),t._l(e.detailResultList,function(o,i){return 5!=e.orderPayWay?r("div",{key:i,staticClass:"order-item-box "},[r("div",{staticClass:"order-item-content  border",on:{click:function(r){t.returnOrderDetail(e.orderId)}}},[r("div",{staticClass:"order-item-img"},[r("default-img",{attrs:{background:t.imgUrl+o.productImageUrl,isHeadPortrait:0,size:"0.8"}})],1),t._v(" "),r("div",{staticClass:"order-item-txt"},[r("p",{staticClass:"fs42"},[t._v(t._s(o.productName))]),t._v(" "),r("p",{staticClass:"fs42 shop-font"},[null==e.unit?r("span",[t._v("¥")]):t._e(),t._v(t._s(o.productPrice[0])+"."),r("span",{staticClass:"fs32"},[t._v(t._s(o.productPrice[1]))]),t._v(" "),null!=e.unit?r("span",[t._v(t._s(e.unit))]):t._e()]),t._v(" "),r("p",{staticClass:"fs36 shopGray"},[null!=o.productSpecificaValue&&""!=o.productSpecificaValue?r("span",[t._v(t._s(o.productSpecificaValue)+"/")]):t._e(),t._v("\r\n                                "+t._s(o.productNum)+"件")])])]),t._v(" "),1==o.isShowApplyReturnButton||1==o.isShowCommentButton?r("div",{staticClass:"order-item-button fs42 border"},[1==o.isShowApplyReturnButton?r("div",{staticClass:"order-button shop-bg",on:{click:function(e){t.returnApplyReturn(o.orderDetailId)}}},[t._v("申请退款\r\n                        ")]):t._e(),t._v(" "),1==o.isShowCommentButton?r("div",{staticClass:"order-button shop-bg",on:{click:function(r){t.returnToComment(o.orderDetailId,e.busId)}}},[t._v("去评论\r\n                        ")]):t._e()]):t._e()]):t._e()}),t._v(" "),5==e.orderPayWay?r("div",{staticClass:"order-item-box"},[r("div",{staticClass:"order-item-content  border",staticStyle:{padding:"0.5rem"}},[r("span",{staticClass:"fs42"},[t._v("扫码支付")]),t._v(" "),r("span",{staticClass:"fs42",staticStyle:{"margin-left":"0.5rem"}},[t._v("订单金额：¥"+t._s(e.orderMoney[0])+"."+t._s(e.orderMoney[1]))])])]):t._e(),t._v(" "),r("div",{staticClass:"order-number-time border"},[r("div",{staticClass:"order-number fs42"},[t._v("\r\n                        订单号："),r("span",[t._v(t._s(e.orderNo))])]),t._v(" "),r("div",{staticClass:"order-time fs42"},[t._v("\r\n                        下单时间："),r("span",[t._v(t._s(e.orderCreateTime))])])]),t._v(" "),r("div",{staticClass:"order-item-total border fs42"},[t._v("\r\n                    共计"+t._s(e.totalNum)+"件商品 合计："),null==e.unit?r("span",[t._v("¥")]):t._e(),t._v(t._s(e.orderMoney[0])+"."+t._s(e.orderMoney[1])+"\r\n                    "),null!=e.unit?r("span",[t._v(t._s(e.unit))]):t._e()]),t._v(" "),1==e.isShowGoPayButton||1==e.isShowReceiveGoodButton||1==e.isShowDaifuButton?r("div",{staticClass:"order-item-button fs42"},[1==e.isShowGoPayButton?r("div",{staticClass:"order-button shop-bg",on:{click:function(r){t.returnToPay(e)}}},[t._v("去支付\r\n                    ")]):t._e(),t._v(" "),1==e.isShowReceiveGoodButton?r("div",{staticClass:"order-button shop-bg",on:{click:function(r){t.sure_dialog(e.orderId)}}},[t._v("确定收货\r\n                    ")]):t._e(),t._v(" "),1==e.isShowDaifuButton?r("div",{staticClass:"order-button shop-bg",on:{click:function(r){t.returnDaifu(e.orderId,e.busId)}}},[t._v("代付详情\r\n                    ")]):t._e()]):t._e()],2)})),t._v(" "),r("more",{attrs:{"is-more":t.isMore}})],1),t._v(" "),t.isShow?r("section",{staticClass:"shop-main-no fs40 my-bond"},[r("content-no",{attrs:{statu:t.bondStatu}})],1):t._e(),t._v(" "),r("shop-dialog",{ref:"dialog"})],1)},i=[],a={render:o,staticRenderFns:i};e.a=a}});