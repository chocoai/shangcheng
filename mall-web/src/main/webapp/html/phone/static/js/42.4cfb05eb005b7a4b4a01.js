webpackJsonp([42],{"71JD":function(e,t,a){var r=a("gbsh");t=e.exports=a("I71c")(!1),t.push([e.i,".sale-wrapper[data-v-13980fc8]{background:#fdecd2}.sale-wrapper .index-nav[data-v-13980fc8]{position:relative;width:100%;background:url("+r(a("pToG"))+");background-size:100%;background-repeat:no-repeat;background-position:top;background-color:#fdecd2}.sale-wrapper .p-scan[data-v-13980fc8]{height:12.41333333rem;padding:6.6rem 2.33333333rem 0 1.12rem}.sale-wrapper .p-scan img[data-v-13980fc8]{width:2.35333333rem;height:2.35333333rem}.sale-wrapper .p-scan .p-headicon[data-v-13980fc8]{width:.96666667rem;height:.96666667rem;vertical-align:top;margin-left:.28666667rem}.sale-wrapper .p-footer[data-v-13980fc8]{color:#333;background:#fff;height:1.03333333rem;line-height:1.03333333rem;width:100%;position:fixed;bottom:0;text-align:center;font-size:.26666667rem}",""])},lqXV:function(e,t,a){"use strict";function r(e){a("x+Ft")}Object.defineProperty(t,"__esModule",{value:!0});var s={data:function(){return{type:this.$route.params.type,busId:this.$route.params.busId||sessionStorage.getItem("busId"),qrCodePath:null,imageUrl:null,headImageUrl:null,imgUrl:null,shareObj:null}},components:{},mounted:function(){this.commonFn.setTitle("推广海报"),this.$store.commit("show_footer",!1),this.loadDatas()},beforeDestroy:function(){this.$store.commit("show_footer",!0)},methods:{loadDatas:function(e){var t=this,a={busId:t.busId,url:location.href,browerType:t.$store.state.browerType};t.ajaxRequest({url:h5App.activeAPI.seller_promotion_post,data:a,success:function(e){var a=e.data;t.imgUrl=e.imgUrl,t.imageUrl=a.imageUrl,t.qrCodePath=a.qrCodePath,t.headImageUrl=a.headImagePath,t.getWxShare(a)}})},getWxShare:function(e){},back:function(){window.history.go(-1)}}},o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"shop-wrapper sale-wrapper"},[null!=e.imageUrl?a("div",{staticClass:"index-nav clearfix"},[a("img",{staticClass:"p-code",attrs:{src:e.imageUrl}}),e._v(" "),a("div",{staticClass:"p-footer"},[e._v("\n          好友通过扫描海报购买商品，您将获得佣金\n      ")])]):a("div",{staticClass:"index-nav clearfix"},[a("div",{staticClass:"p-scan"},[null!=e.qrCodePath?a("img",{staticClass:"p-code",attrs:{src:e.qrCodePath}}):e._e(),null!=e.headImageUrl?a("img",{staticClass:"p-headicon",attrs:{src:e.headImageUrl}}):e._e()]),e._v(" "),a("div",{staticClass:"p-footer"},[e._v("\n          好友通过扫描海报购买商品，您将获得佣金\n      ")])])])},i=[],n={render:o,staticRenderFns:i},c=n,l=a("X4nt"),d=r,p=l(s,c,!1,d,"data-v-13980fc8",null);t.default=p.exports},pToG:function(e,t,a){e.exports=a.p+"static/img/tg-code.0557b9d.jpg"},"x+Ft":function(e,t,a){var r=a("71JD");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("5ten")("e6d74668",r,!0,{})}});