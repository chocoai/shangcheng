webpackJsonp([36],{"/O5Q":function(t,o,e){o=t.exports=e("BkJT")(!1),o.push([t.i,".ik-box[data-v-4f60247a]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.box-sizing[data-v-4f60247a]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.text-overflow[data-v-4f60247a]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.shop-main-no[data-v-4f60247a]{padding:2.65333333rem 0 1.66666667rem}.shop-main-no .shop-no-content[data-v-4f60247a]{width:100%;text-align:center;line-height:1;font-size:0}.shop-main-no .shop-no-content .shop-no-icon[data-v-4f60247a]{width:1.43333333rem;height:1.43333333rem;border-radius:100%;background:#d1d2d4;margin:0 auto;margin-bottom:.66666667rem;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:center;-o-box-pack:center;box-pack:center}.shop-main-no .shop-no-content .shop-no-icon i[data-v-4f60247a]{color:#fff;font-size:1rem}.shop-main-no .shop-no-content .shop-no-icon2[data-v-4f60247a]{width:1.43333333rem;height:1.43333333rem;margin:0 auto;margin-bottom:.66666667rem;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:center;-o-box-pack:center;box-pack:center}.shop-main-no .shop-no-content .shop-no-icon2 i[data-v-4f60247a]{color:#d1d2d4!important;font-size:1.18666667rem}.shop-main-no .shop-no-content p[data-v-4f60247a]{margin-bottom:.33333333rem}.shop-main-no .shop-no-content a[data-v-4f60247a]{color:#999}.shop-main-no .shop-no-content .no-button[data-v-4f60247a]{display:inline-block;padding:.13333333rem .2rem;border-radius:6px}.shop-main-no .shop-no-content .no-shopcart[data-v-4f60247a]{width:100%}.shop-main-no .shop-no-content .no-shopcart .shop-no-icon[data-v-4f60247a]{background:0;border:1px solid #7a7e83}.shop-main-no .shop-no-content .no-shopcart i[data-v-4f60247a]{color:#7a7e83;font-weight:100}",""])},"23Jn":function(t,o,e){"use strict";function n(t){e("72jE")}var r=e("rXBv"),s=e("sTn/"),a=e("0HdQ"),i=n,c=a(r.a,s.a,!1,i,"data-v-4f60247a",null);o.a=c.exports},"6lin":function(t,o,e){var n=e("MwDU");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("8bSs")("79ac193f",n,!0)},"72jE":function(t,o,e){var n=e("/O5Q");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("8bSs")("1464d608",n,!0)},AkLY:function(t,o,e){"use strict";function n(t){e("6lin")}Object.defineProperty(o,"__esModule",{value:!0});var r=e("FxdQ"),s=e("uByA"),a=e("0HdQ"),i=n,c=a(r.a,s.a,!1,i,null,null);o.default=c.exports},FxdQ:function(t,o,e){"use strict";var n=e("kr9m"),r=e("23Jn");e("b7Ca");o.a={components:{defaultImg:n.a,contentNo:r.a},data:function(){return{busId:this.$route.params.busId||sessionStorage.getItem("busId"),returnId:this.$route.params.returnId,returnArr:[],status:-1,errorMsg:"暂无协商详情"}},mounted:function(){this.loadDatas(),this.commonFn.setTitle("协商详情"),this.$store.commit("show_footer",!1)},beforeDestroy:function(){this.$store.commit("show_footer",!0)},methods:{loadDatas:function(){var t=this,o={busId:t.busId,url:location.href,browerType:t.$store.state.browerType,returnId:t.returnId};t.ajaxRequest({url:h5App.activeAPI.return_log_post,data:o,status:!1,success:function(o){if(null==o.data||0==o.data.length)return void(t.status=1);t.returnArr=o.data,console.log(t.returnArr,"_this.returnArr"),t.returnArr.forEach(function(t,o){console.log(t.remark,"remark"),2==t.retHandlingWay?t.refundType="退货并退款":t.refundType="仅退款"})}})},goReturnWuliu:function(t){sessionStorage.setItem("refundReturnUrl",location.href),this.$router.push("/return/logistics/"+this.busId+"/"+t)},updateReturn:function(t,o){sessionStorage.setItem("refundReturnUrl",location.href),this.$router.push("/return/apply/"+this.busId+"/"+t+"/-1/"+o)}}}},Huuc:function(t,o,e){"use strict";var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"imgbox"},[e("div",{staticClass:"user-head-portrait",style:{backgroundImage:"url("+t.background+")"}}),t._v(" "),0==t.isHeadPortrait&&void 0==t.background?e("div",{staticClass:"default-img"},[e("i",{staticClass:"iconfont icon-tupianjiazaizhong-",staticStyle:{color:"#d6d6d6"}})]):t._e(),t._v(" "),1==t.isHeadPortrait&&void 0==t.background?e("div",{staticClass:"default-img"},[e("i",{staticClass:"iconfont icon-ren1"})]):t._e()])},r=[],s={render:n,staticRenderFns:r};o.a=s},MwDU:function(t,o,e){o=t.exports=e("BkJT")(!1),o.push([t.i,'.ik-box{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.box-sizing{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.text-overflow{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.consult-wrapper{width:100%;padding:.26666667rem .39333333rem;position:relative}.consult-wrapper .consult-main{width:100%}.consult-wrapper .consult-item{width:100%;margin-bottom:.26666667rem;position:relative}.consult-wrapper .consult-item .consult-time{margin:0 auto;background:#ededed;width:30%;text-align:center;border-radius:50px;color:#bdbdbd;margin-bottom:.26666667rem}.consult-wrapper .consult-item .consult-content{font-size:0;width:100%;padding:0 .26rem;position:relative}.consult-wrapper .consult-item .consult-content>div:last-child{border-bottom:0}.consult-wrapper .consult-item .consult-content .consult-title{padding:.25333333rem 0}.consult-wrapper .consult-item .consult-content .consult-txt{padding:.18666667rem 0}.consult-wrapper .consult-item .consult-content .consult-txt p{line-height:1.6em}.consult-wrapper .consult-item .consult-content .consult-txt2{margin:.13333333rem 0;border:2px dotted #fff;padding:0 .13333333rem;border-radius:3px}.consult-wrapper .consult-item .consult-content .consult-txt2 p{line-height:3em;border-bottom:1px dashed #fff;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify}.consult-wrapper .consult-item .consult-content .consult-txt2 p span{display:block}.consult-wrapper .consult-item .consult-content .consult-txt2>p:last-child{border-bottom:0}.consult-wrapper .consult-item .consult-content:before{content:"";position:absolute;display:block;top:0;width:0;height:0}.consult-wrapper .consult-item:after{content:"";position:absolute;display:block;top:.08666667rem;width:.17333333rem;height:.17333333rem;background:#dbdbdb;border-radius:100%}.consult-wrapper .consult-item:before{color:#dbdbdb;position:absolute;display:block;top:0;left:.26666667rem;font-size:.24rem}.consult-wrapper .consult-item .consult-footer{width:100%;text-align:right;border-top:1px solid rgba(0,0,0,.2);padding:.26666667rem 0}.consult-wrapper .consult-item .consult-footer .consult-botton{display:inline-block;padding:5px;border:1px solid #fff;color:#fff;border-radius:5px}.consult-wrapper .buy .consult-content{color:#666;background:#ededed}.consult-wrapper .buy .consult-content:before{right:-9px;border-top:10px solid #ededed;border-right:10px solid transparent}.consult-wrapper .buy .consult-title{border-bottom:1px solid #dbdbdb}.consult-wrapper .buy:after{display:none}.consult-wrapper .sell .consult-content,.consult-wrapper .system .consult-content{color:#fff}.consult-wrapper .sell .consult-content .consult-title,.consult-wrapper .system .consult-content .consult-title{border-bottom:1px solid #fff}.consult-wrapper .sell .consult-content:before,.consult-wrapper .system .consult-content:before{left:-9px;border-left:10px solid transparent}.consult-wrapper .sell .consult-content{background:#f18246}.consult-wrapper .sell .consult-content:before{border-top:10px solid #f18246}.consult-wrapper .sell:before{content:"\\5356\\5BB6"}.consult-wrapper .system .consult-content{background:#52a3cc}.consult-wrapper .system .consult-content:before{border-top:10px solid #52a3cc}.consult-wrapper .system:before{content:"\\7CFB\\7EDF\\6D88\\606F"}.consult-wrapper .m-right{margin-right:10px}',""])},b7Ca:function(t,o,e){"use strict";var n=e("5vqR");n.default.filter("currency",function(t){var o=parseFloat(t);if(isNaN(t))return console.log("传递参数错误，请检查！"),!1;o=Math.round(100*t)/100;var e=o.toString(),n=e.indexOf(".");for(e=parseFloat(e).toLocaleString(),n<0&&(n=e.length,e+=".");e.length<=n+2;)e+="0";return e}),n.default.filter("format",function(t){var o=function(t){return t<10?"0"+t:t},e=new Date(t),n=e.getFullYear(),r=e.getMonth()+1,s=e.getDate(),a=e.getHours(),i=e.getMinutes(),c=e.getSeconds();return n+"-"+o(r)+"-"+o(s)+" "+o(a)+":"+o(i)+":"+o(c)}),n.default.filter("formatNot",function(t){var o=function(t){return t<10?"0"+t:t},e=new Date(t),n=e.getFullYear(),r=e.getMonth()+1,s=e.getDate();return n+"-"+o(r)+"-"+o(s)}),n.default.filter("formatNotM",function(t){var o=function(t){return t<10?"0"+t:t},e=new Date(t),n=e.getFullYear(),r=e.getMonth()+1,s=e.getDate(),a=e.getHours(),i=e.getMinutes();return n+"-"+o(r)+"-"+o(s)+" "+o(a)+":"+o(i)}),n.default.filter("moneySplit1",function(t){var o=[],e=t+"";return o=-1==e.indexOf(".")?[t,"00"]:e.split("."),o[0]=parseFloat(o[0]).toLocaleString(),o[0]}),n.default.filter("moneySplit2",function(t){var o=[],e=t+"";return o=-1==e.indexOf(".")?[t,"00"]:e.split("."),o[0]=parseFloat(o[0]).toLocaleString(),o[1]}),n.default.filter("toString",function(t){return void 0===t||"undefined"==t?"":t}),n.default.filter("toInteger",function(t){return void 0===t||"undefined"==t||null==t||""==t?0:1*t})},kr9m:function(t,o,e){"use strict";function n(t){e("ydrn")}var r=e("lGvr"),s=e("Huuc"),a=e("0HdQ"),i=n,c=a(r.a,s.a,!1,i,"data-v-6bd4cf5e",null);o.a=c.exports},lGvr:function(t,o,e){"use strict";o.a={props:["background","isHeadPortrait"],data:function(){return{}},mounted:function(){}}},pbdT:function(t,o,e){o=t.exports=e("BkJT")(!1),o.push([t.i,".ik-box[data-v-6bd4cf5e]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.box-sizing[data-v-6bd4cf5e]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.text-overflow[data-v-6bd4cf5e]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.imgbox[data-v-6bd4cf5e]{width:101%;height:101%;position:relative}.user-head-portrait[data-v-6bd4cf5e]{width:100%;height:100%;background-size:100%;background-repeat:no-repeat;background-position:50%;position:relative;z-index:1}.default-img[data-v-6bd4cf5e]{width:100%;height:100%;position:absolute;top:0;left:0;z-index:0;line-height:1;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-pack:center;-o-box-pack:center;box-pack:center;-webkit-box-align:center;-o-box-align:center;box-align:center}.default-img .iconfont[data-v-6bd4cf5e]{font-size:1.33333333rem;color:#fff}",""])},rXBv:function(t,o,e){"use strict";o.a={props:["statu","errorMsg"],data:function(){return{msg:"您还没有相关的订单"}},mounted:function(){null!=this.errorMsg&&(this.msg=this.errorMsg)},methods:{lockMall:function(){var t=this.$route.params.busId;this.$parent.getMemberCenter(t,type)}}}},"sTn/":function(t,o,e){"use strict";var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"shop-main-no"},[e("div",{staticClass:"shop-no-content"},[1==t.statu?e("div",{staticClass:"no-order"},[t._m(0),t._v(" "),e("p",{staticClass:"fs52"},[t._v(t._s(t.msg))]),t._v(" "),e("a",{staticClass:"fs36",on:{click:t.lockMall}},[t._v(" 可以去逛逛哦~")])]):t._e(),t._v(" "),2==t.statu?e("div",{staticClass:"no-news"},[t._m(1),t._v(" "),e("a",{staticClass:"fs36"},[t._v(" 暂不相关信息")])]):t._e(),t._v(" "),3==t.statu?e("div",{staticClass:"no-shopcart"},[t._m(2),t._v(" "),e("p",{staticClass:"fs36 shopGray text-c"},[t._v("您的购物车还没有任何商品")]),t._v(" "),e("span",{staticClass:"no-button shopborder fs36",on:{click:t.lockMall}},[t._v("去逛逛")])]):t._e(),t._v(" "),4==t.statu?e("div",{staticClass:"no-shopcart"},[t._m(3),t._v(" "),e("a",{staticClass:"fs42",staticStyle:{color:"#333"}},[t._v(" "+t._s(t.errorMsg||"暂无相关信息"))])]):t._e()])])},r=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"shop-no-icon"},[e("i",{staticClass:"iconfont icon-order"})])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"shop-no-icon"},[e("i",[t._v("!")])])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"shop-no-icon"},[e("i",[t._v("!")])])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"shop-no-icon2"},[e("i",{staticClass:"icon-zanwudizhi iconfont"})])}],s={render:n,staticRenderFns:r};o.a=s},uByA:function(t,o,e){"use strict";var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"shop-wrapper consult-wrapper",attrs:{id:"app"}},[null!=t.returnArr&&t.returnArr.length>0?e("div",{staticClass:"consult-main"},t._l(t.returnArr,function(o){return e("div",{staticClass:"consult-item buy",class:[{buy:0==o.operator},{sell:1==o.operator},{system:2==o.operator}]},[e("div",{staticClass:"consult-time fs32"},[t._v("\n               "+t._s(t._f("formatNotM")(o.createTime))+"\n            ")]),t._v(" "),e("div",{staticClass:"consult-content"},[e("div",{staticClass:"consult-title fs56"},[t._v("\n                    "+t._s(o.statusContent)+"\n                ")]),t._v(" "),0==o.getData&&null!=o.remark?e("div",[e("div",{staticClass:"consult-txt"},[e("p",{staticClass:"fs46",domProps:{innerHTML:t._s(o.remark)}})])]):t._e(),t._v(" "),o.getData>0&&null!=o.remark?e("div",[e("div",{staticClass:"consult-txt"},[t._v(t._s(o.remark)+"\n                        "),t._l(o.remark,function(o,n){return e("p",{staticClass:"fs46"},[t._v(t._s(n)+"："+t._s(o))])})],2)]):t._e(),t._v(" "),1==o.isShowApplyReturnButton||1==o.isShowReturnWuLiuButton?e("div",{staticClass:"consult-footer"},[1==o.isShowApplyReturnButton?e("div",{staticClass:"consult-botton fs46 m-right",on:{click:function(e){t.updateReturn(o.orderDetailId,o.returnId)}}},[t._v("修改退款申请")]):t._e(),t._v(" "),1==o.isShowReturnWuLiuButton?e("div",{staticClass:"consult-botton fs46 m-right",on:{click:function(e){t.goReturnWuliu(o.returnId)}}},[t._v("填写退款物流")]):t._e()]):t._e()])])})):t._e(),t._v(" "),null==t.returnArr||0==t.returnArr.length&&-1!=t.status?e("content-no",{attrs:{statu:t.status,errorMsg:t.errorMsg}}):t._e()],1)},r=[],s={render:n,staticRenderFns:r};o.a=s},ydrn:function(t,o,e){var n=e("pbdT");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("8bSs")("c8df441a",n,!0)}});