webpackJsonp([53],{EMpa:function(t,s,d){s=t.exports=d("BkJT")(!1),s.push([t.i,".ik-box[data-v-783f1d46]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.box-sizing[data-v-783f1d46]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.text-overflow[data-v-783f1d46]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.shop-main[data-v-783f1d46]{background:#fff;height:100%}.shop-main .shop-add-itme-1[data-v-783f1d46]{height:1.66666667rem;padding:.33333333rem .12666667rem .36666667rem .50666667rem}.shop-main .shop-add-itme-1 .i-add-left[data-v-783f1d46]{width:4%;text-align:right}.shop-main .shop-add-itme-1 .i-add-left .shop-pink[data-v-783f1d46]{color:#f63854}.shop-main .shop-add-itme-1 .i-add-left .shop-gray[data-v-783f1d46]{color:#c3c3c3}.shop-main .shop-add-itme-1 .i-add-right[data-v-783f1d46]{width:90%}.shop-main .shop-add-itme-1 .i-add-right .f_p[data-v-783f1d46]{max-height:.44666667rem;width:100%;padding-bottom:.06666667rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.shop-main .shop-add-itme-1 .i-add-right .ad-bottom div[data-v-783f1d46]:first-child{width:68%}.shop-main .shop-add-itme-1 .i-add-right .ad-bottom div:first-child span[data-v-783f1d46]:first-child{display:inline-block;margin-right:.26666667rem;max-width:50%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.shop-main .shop-add-itme-1 .i-add-right .ad-bottom div[data-v-783f1d46]:last-child{width:32%}.shop-main .shop-add-itme-1 .i-add-right .ad-bottom div:last-child span[data-v-783f1d46]:first-child{margin-right:.38666667rem}.shop-add-itme[data-v-783f1d46]{margin-bottom:.06666667rem}.address-div-2[data-v-783f1d46]{padding-bottom:.9rem}.address-div-2 .bottom-div[data-v-783f1d46]{position:fixed;bottom:1.06666667rem;width:100%;padding:0 .33333333rem}.address-div-2 .bottom-div .address-add-button[data-v-783f1d46]{width:100%;height:.97333333rem;line-height:.97333333rem;text-align:center;border-radius:5px}.address-div-2 .bottom-div .address-add-button .fs52[data-v-783f1d46]{font-size:.34666667rem;font-weight:700;margin-right:.13333333rem}.address-div-2 .add-address-div[data-v-783f1d46]{height:.88rem;line-height:.88rem;padding-left:.50666667rem}.address-div-2 .add-address-div i[data-v-783f1d46]{color:#c7c7cc;margin-right:.18rem;font-weight:bolder}.address-div-2 .add-address-div span[data-v-783f1d46]{color:#333}.rose_div .address-add-button[data-v-783f1d46]{background:#f63854;color:#fff}.rose_div .shop-font[data-v-783f1d46]{color:#f63855!important}",""])},KDK2:function(t,s,d){"use strict";s.a={name:"myAddress",data:function(){return{busId:this.$route.params.busId||sessionStorage.getItem("busId"),integralId:this.$route.params.integralId||0,addressArr:[],isShowBottom:!1,isShow:!0,bondStatu:2,error:this.$t("address_null_error_msg"),integralObj:sessionStorage.getItem("integralData")||null,roseColor:null}},mounted:function(){this.loadDatas(),this.commonFn.setTitle(this.$t("title.title_my_address_msg")),this.$store.commit("show_footer",!1),this.commonFn.isNotNull(sessionStorage.getItem("integralData"))&&(this.integralObj=JSON.parse(sessionStorage.getItem("integralData")),this.roseColor="rose_cla")},beforeDestroy:function(){this.$store.commit("show_footer",!0)},methods:{loadDatas:function(){var t=this,s={busId:t.busId,url:location.href,browerType:t.$store.state.browerType};t.ajaxRequest({url:h5App.activeAPI.address_list_post,data:s,success:function(s){var d=s.data;if(null==d||0==d.length)return void(t.isShowBottom=!0);t.imgUrl=s.imgUrl,t.addressArr=d,d.length<5&&(t.isShowBottom=!0),t.isShow=!1,console.log(d,"myData")}})},editAddress:function(t){var s=this.busId,d="/address/edit/"+s+"/"+t;this.commonFn.isNotNull(this.integralId)&&(d+="/"+this.integralId),this.$router.push(d)},defaultAddress:function(t,s,d){var a=this,i={busId:a.busId,url:location.href,browerType:a.$store.state.browerType,addressId:s.id,upMemberId:t};a.ajaxRequest({url:h5App.activeAPI.default_address_post,data:i,success:function(t){var d=(sessionStorage.getItem("addressBeforeUrl"),a.$store.state.orderData);null!=d&&(d.memberAddressDTO=s),a.addressArr.forEach(function(t,d){t.id==s.id?t.memberDefault=1:t.memberDefault=0,a.$set(a.addressArr,d,t)})}})},submitIntegralData:function(){var t=this.integralObj;if(null!=t){for(var s=0,d=0;d<this.addressArr.length;d++){var a=this.addressArr[d];if(1==a.memberDefault){s=a.id;break}}if(0==s)return void this.$parent.$refs.bubble.show_tips("请选择您的收货地址");var i=this,e={busId:i.busId,url:location.href,browerType:i.$store.state.browerType,productId:t.productId,integralId:t.integralId,productNum:t.productNum,receiveId:s};null!=t.productSpecificas&&(e.productSpecificas=t.productSpecificas),i.ajaxRequest({url:h5App.activeAPI.record_integral_post,loading:!0,data:e,success:function(t){i.$store.commit("is_show_loading",!1),i.$router.push("/integral/record/"+i.busId)}})}}}}},oQcV:function(t,s,d){var a=d("EMpa");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);d("8bSs")("4f543bd3",a,!0)},rTWz:function(t,s,d){"use strict";var a=function(){var t=this,s=t.$createElement,d=t._self._c||s;return d("section",{staticClass:"shop-main fs40 my-add"},[d("div",{staticClass:"address-div-2",class:{rose_div:null!=t.roseColor}},[t._l(t.addressArr,function(s,a){return null!=t.addressArr&&t.addressArr.length>0?d("div",{key:a,staticClass:"shop-add-itme-1 fs36",attrs:{itmeid:"1"}},[d("div",{staticClass:"shop-add-txt border clearfix shop-box-center"},[d("div",{staticClass:"i-add-left",on:{click:function(d){t.defaultAddress(s.memberId,s,a)}}},[d("i",{staticClass:"iconfont icon-yes fs52",class:[1==s.memberDefault?"shop-pink":"shop-gray"]})]),t._v(" "),d("div",{staticClass:"i-add-right fs36"},[d("div",{staticClass:"f_p "},[t._v(t._s(s.memberAddress))]),t._v(" "),d("div",{staticClass:"shop-box-center ad-bottom"},[d("div",[d("span",[t._v(t._s(s.memberName))]),d("span",[t._v(t._s(s.memberPhone))])]),t._v(" "),d("div",[d("span",{on:{click:function(d){t.editAddress(s.id)}}},[d("i",{staticClass:"iconfont icon-bianji"}),t._v("\n                         编辑\n                       ")]),t._v(" "),d("span",{on:{click:function(s){t.deleteItme(s)}}},[d("i",{staticClass:"iconfont icon-shanchu"}),t._v("\n                           删除\n                       ")])])])])])]):t._e()}),t._v(" "),d("div",{staticClass:"add-address-div",on:{click:function(s){t.editAddress(0)}}},[d("i",{staticClass:"iconfont icon-jiaimg fs52"}),d("span",{staticClass:"fs36"},[t._v("新增收货地址")])]),t._v(" "),t.isShow?d("section",{staticClass:"shop-main-no fs40 my-bond"},[d("content-no",{attrs:{statu:4,errorMsg:t.error}})],1):t._e(),t._v(" "),d("div",{staticClass:"bottom-div clearfix"},[d("div",{staticClass:"address-add-button fs52",on:{click:t.submitIntegralData}},[t._v("\n             立即兑换\n           ")])])],2)])},i=[],e={render:a,staticRenderFns:i};s.a=e},xUHs:function(t,s,d){"use strict";function a(t){d("oQcV")}Object.defineProperty(s,"__esModule",{value:!0});var i=d("KDK2"),e=d("rTWz"),r=d("0HdQ"),o=a,n=r(i.a,e.a,!1,o,"data-v-783f1d46",null);s.default=n.exports}});