webpackJsonp([30],{"+lXE":function(t,e,a){e=t.exports=a("I71c")(!1),e.push([t.i,".auction-wrapper[data-v-5f9fa555]{width:100%;position:relative}.agreement-main[data-v-5f9fa555]{width:100%;position:relative;padding-bottom:1.06666667rem}.agreement-main .agreement-content[data-v-5f9fa555]{width:100%;height:85vh;background-color:#fff}.agreement-main .agreement-content .agreement-h1[data-v-5f9fa555]{width:100%;margin:.33333333rem 0}.agreement-main .agreement-content .agreement-top[data-v-5f9fa555]{padding:.98666667rem .2rem}.agreement-main .agreement-content .agreement-top .agreement-txt[data-v-5f9fa555]{text-align:justify;margin-bottom:.33333333rem}.agreement-main .agreement-top2[data-v-5f9fa555]{width:100%;padding-top:.98666667rem}.agreement-main .agreement-top2 .bid-div[data-v-5f9fa555]{width:100%;background-color:#ccc;line-height:1;padding:.2rem}.agreement-main .agreement-top2 .bid-div .p-20[data-v-5f9fa555]{width:20%}.agreement-main .agreement-top2 .bid-div .p-40[data-v-5f9fa555]{width:38%}.agreement-main .agreement-top2 .bg-white[data-v-5f9fa555]{background-color:#fff!important}.agreement-main .shop-footer[data-v-5f9fa555]{width:100%}",""])},"/KLf":function(t,e,a){var s=a("+lXE");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("5ten")("a3bee630",s,!0,{})},B5GA:function(t,e,a){"use strict";function s(t){a("/KLf")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("fOec"),n=(a("b7Ca"),{name:"agreement",data:function(){return{homeNav:[{id:1,name:"抢拍记录"},{id:2,name:"卖家承诺"},{id:3,name:"保证金须知"}],busId:this.$route.params.busId||sessionStorage.getItem("busId"),aucId:this.$route.params.aucId,type:this.$route.params.type,bidArr:null,statu:2,isShowNo:!1}},components:{headerNav:i.a},mounted:function(){this.$store.commit("show_footer",!1),this.load()},beforeDestroy:function(){this.$store.commit("show_footer",!0)},watch:{$route:function(){this.load()}},methods:{load:function(){var t=this.$route.params.type;this.type=t,1==t&&this.loadBind(),this.commonFn.setTitle(this.homeNav[this.type-1].name)},handleChange:function(t){var e=this.busId,a=this.aucId;this.type=t,this.$router.push("/auction/notice/"+e+"/"+a+"/"+t)},loadBind:function(){var t=this,e={busId:t.busId,url:location.href,browerType:t.$store.state.browerType,auctionId:this.aucId,ucLogin:1};t.ajaxRequest({url:h5App.activeAPI.get_bid_post,data:e,success:function(e){var a=e.data;return null==a?void(t.isShowNo=!0):null==a.offerList||0==a.offerList.length?void(t.isShowNo=!0):void(t.bidArr=a.offerList)}})}}}),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shop-wrapper  auction-wrapper"},[a("div",{staticClass:"agreement-main"},[a("section",{staticClass:"agreement-content"},[a("header-nav",{staticStyle:{"z-index":"3"},attrs:{headers:t.homeNav},on:{change:t.handleChange}}),t._v(" "),1==t.type&&null!=t.bidArr?a("div",{staticClass:"agreement-top2"},[t._m(0),t._v(" "),t._l(t.bidArr,function(e,s){return a("div",{key:s,staticClass:"bid-div border  shop-box-center bg-white"},[a("p",{staticClass:"fs40 p-20 text-overflow"},[t._v(t._s(e.id))]),t._v(" "),a("p",{staticClass:"fs40 p-20 text-overflow"},[t._v("￥"+t._s(e.offerMoney))]),t._v(" "),a("p",{staticClass:"fs40 p-20 text-overflow"},[t._v(t._s(e.nickname))]),t._v(" "),a("p",{staticClass:"fs40 p-40 text-overflow"},[t._v(t._s(t._f("formatNotM")(e.createTime)))])])})],2):t._e(),t._v(" "),2==t.type?a("div",{staticClass:"agreement-top"},[a("p",{staticClass:"agreement-h1 fs40 "},[t._v("卖家承诺：")]),t._v(" "),a("div",{staticClass:"agreement-txt fs40"},[t._v("\r\n                一、服务承诺\r\n                ")]),t._v(" "),a("div",{staticClass:"agreement-txt fs40"},[t._v("\r\n                A.商家承诺\r\n                ")]),t._v(" "),a("p",{staticClass:"agreement-txt fs40"},[t._v("\r\n                1.卖家承诺所发拍品均为真品。\r\n                ")]),t._v(" "),a("div",{staticClass:"agreement-txt fs40"},[t._v("\r\n               2.卖家成交不卖，卖家应将保证金退一赔一给竞买成功人\r\n                ")]),t._v(" "),a("div",{staticClass:"agreement-txt fs40"},[t._v("\r\n                二、竞拍活动基础服务\r\n                ")]),t._v(" "),a("div",{staticClass:"agreement-txt fs40"},[t._v("\r\n                1.保证金保障，卖家入驻竞拍平台需缴纳较高的经营保证金，\r\n买家维权有保障\r\n                ")]),t._v(" "),a("p",{staticClass:"agreement-txt fs40"},[t._v("\r\n                三、拍卖特色服务\r\n                ")]),t._v(" "),a("div",{staticClass:"agreement-txt fs40"},[t._v("\r\n               A、支持线下预览\r\n                ")]),t._v(" "),a("div",{staticClass:"agreement-txt fs40"},[t._v("\r\n               支持线下预览是指卖家已选定场地预展拍品。竞买人可在竞\r\n拍结束前，亲自或委托他人查看竞拍品实物\r\n                ")])]):t._e(),t._v(" "),3==t.type?a("div",{staticClass:"agreement-top"},[a("p",{staticClass:"agreement-h1 fs40 "},[t._v("保证金须知：")]),t._v(" "),a("div",{staticClass:"agreement-txt fs40"},[t._v("\r\n                一、凡是2015年1月1日后进入交易中心进行招投标活动的 项目，投标保证金的缴纳、退还全部实行网上提交。\r\n                ")]),t._v(" "),a("div",{staticClass:"agreement-txt fs40"},[t._v("\r\n                    二、招标代理机构及招标人在编制公告时必须将《保证金管 理系统使用指南》作为公告内容之一，并提示投标人通过保 证金管理系统进行网\r\n                ")]),t._v(" "),a("p",{staticClass:"agreement-txt fs40"},[t._v("\r\n                三、投标人应认真阅读《保证金管理系统使用指南》，熟悉 系统操作流程，以免因错误操作造成投标无效，《保证金管 理系统使用指南》详\r\n\r\n                ")]),t._v(" "),a("div",{staticClass:"agreement-txt fs40"},[t._v("\r\n                四、为提高保证金管理系统的保密性、安全性与公正性，系 统登陆与使用采用数字证书CA认证方式。因此，各投标人 在使用系统前应先行\r\n保证金须知：\r\n                ")])]):t._e(),t._v(" "),t.isShowNo?a("content-no",{attrs:{statu:t.statu}}):t._e()],1),t._v(" "),a("section",{staticClass:"shop-footer  shop-footer-fixed"},[1==t.$store.state.isAdvert?a("technical-support"):t._e()],1)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bid-div border  shop-box-center"},[a("p",{staticClass:"fs40 p-20"},[t._v("状态")]),t._v(" "),a("p",{staticClass:"fs40 p-20"},[t._v("价格")]),t._v(" "),a("p",{staticClass:"fs40 p-20"},[t._v("竞拍人")]),t._v(" "),a("p",{staticClass:"fs40 p-40"},[t._v("时间")])])}],d={render:o,staticRenderFns:r},c=d,v=a("X4nt"),l=s,h=v(n,c,!1,l,"data-v-5f9fa555",null);e.default=h.exports},CFWE:function(t,e,a){var s=a("T1s/");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("5ten")("2604cc15",s,!0,{})},"T1s/":function(t,e,a){e=t.exports=a("I71c")(!1),e.push([t.i,".ik-box[data-v-91ea153c]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.box-sizing[data-v-91ea153c]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.text-overflow[data-v-91ea153c]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.shop-header[data-v-91ea153c]{top:0}.shop-header .header-nav[data-v-91ea153c]{height:.98666667rem}.shop-header .header-nav em[data-v-91ea153c]{height:.04rem;width:100%;position:absolute;bottom:0;display:none}.shop-header[data-v-91ea153c]{position:fixed;width:100%;background:#fff}.shop-header .header-nav .header-itme[data-v-91ea153c],.shop-header .header-nav[data-v-91ea153c]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.shop-header .header-nav .header-itme[data-v-91ea153c]{position:relative;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:center;-o-box-pack:center;box-pack:center;-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-webkit-box-orient:vertical;-o-box-orient:vertical;box-orient:vertical}.shop-header .header-nav a[data-v-91ea153c]{display:block;text-align:center}.style-main-font em[data-v-91ea153c]{display:block!important}",""])},fOec:function(t,e,a){"use strict";function s(t){a("CFWE")}var i={props:["headers","status","selectColor","selectbg"],data:function(){return{selectNav:"",selectFontColor:"shop-font"}},mounted:function(){this.selectNav=this.$route.params.type||0,this.selectFontColor=this.selectColor||"shop-font"},watch:{$route:function(){this.selectNav=this.$route.params.type||0}},methods:{selects:function(t){if(-1!=t){this.selectNav=t;var e=this.$route.params.busId,a=this.$route.params.shopId;return"order"===this.status?void this.$router.push("/order/list/"+e+"/"+t):"cart"===this.status?void this.$router.push("/cart/"+a+"/"+e+"/"+t):void this.onValue(t)}},onValue:function(t){this.$emit("change",t)}}},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shop-header"},[a("div",{staticClass:"header-nav fs42"},t._l(t.headers,function(e){return a("div",{key:e.id,staticClass:"header-itme",class:[e.id==t.selectNav?t.selectFontColor:""],on:{click:function(a){t.selects(e.id)}}},[a("p",{domProps:{textContent:t._s(e.name)}}),t._v(" "),a("em",{class:[t.selectbg?t.selectbg:"shop-bg"]})])}))])},o=[],r={render:n,staticRenderFns:o},d=r,c=a("X4nt"),v=s,l=c(i,d,!1,v,"data-v-91ea153c",null);e.a=l.exports}});