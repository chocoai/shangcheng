webpackJsonp([40],{H701:function(e,t,a){var s=a("gbsh");t=e.exports=a("I71c")(!1),t.push([e.i,".sale-wrapper[data-v-21fcd732]{background:#fff;width:100%;height:100%;position:relative}.sale-wrapper .sale-header[data-v-21fcd732]{width:100%;height:3.46666667rem;background:url("+s(a("fQ5T"))+") no-repeat;background-size:cover;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-pack:center;-o-box-pack:center;box-pack:center;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-orient:vertical;-o-box-orient:vertical;box-orient:vertical;color:#fff}.sale-wrapper .sale-header .header-img[data-v-21fcd732]{width:1.36rem;height:1.36rem;background-position:50%;background-size:cover;border-radius:100%;overflow:hidden;margin-bottom:.13333333rem}.sale-wrapper .index-main[data-v-21fcd732]{width:100%;background:#fff}.sale-wrapper .index-main .index-msg[data-v-21fcd732]{width:100%;display:-webkit-box;display:-moz-box;display:-o-box;display:box;height:1.66666667rem;-webkit-box-shadow:0 0 5px 0 rgba(0,0,0,.2);box-shadow:0 0 5px 0 rgba(0,0,0,.2)}.sale-wrapper .index-main .index-msg-item[data-v-21fcd732]{width:33.33%;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:center;-o-box-pack:center;box-pack:center;-webkit-box-orient:vertical;-o-box-orient:vertical;box-orient:vertical;height:100%;display:-webkit-box;display:-moz-box;display:-o-box;display:box}.sale-wrapper .index-main .index-nav[data-v-21fcd732]{width:100%;padding:0 .52rem}.sale-wrapper .index-main .index-nav p[data-v-21fcd732]:first-child{font-weight:bolder;padding-top:.39333333rem}.sale-wrapper .index-main .index-nav p[data-v-21fcd732]{line-height:.53333333rem}",""])},byr0:function(e,t,a){"use strict";function s(e){a("taQt")}Object.defineProperty(t,"__esModule",{value:!0});var i=(a("b7Ca"),{data:function(){return{busId:this.$route.params.busId||sessionStorage.getItem("busId"),sellerSet:null,member:null,seller:null}},components:{},mounted:function(){this.commonFn.setTitle("销售规则"),this.$store.commit("show_footer",!1),this.loadDatas()},beforeDestroy:function(){this.$store.commit("show_footer",!0)},methods:{loadDatas:function(){var e=this,t={busId:e.busId,url:location.href,browerType:e.$store.state.browerType};e.ajaxRequest({url:h5App.activeAPI.seller_sale_rule_post,data:t,success:function(t){var a=t.data;e.seller=a.seller,e.member=a.member,e.sellerSet=a.sellerSet}})},back:function(){window.history.go(-1)}}}),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return null!=e.seller?a("div",{staticClass:"shop-wrapper sale-wrapper"},[null!=e.member?a("header",{staticClass:"sale-header"},[a("div",{staticClass:"header-img"},[a("default-img",{attrs:{background:e.member.headimgurl,isHeadPortrait:1}})],1),e._v(" "),a("p",{staticClass:"fs60"},[e._v(e._s(e.member.nickname))])]):e._e(),e._v(" "),a("div",{staticClass:"index-main"},[a("div",{staticClass:"index-msg border"},[a("div",{staticClass:"index-msg-item"},[a("p",{staticClass:"index-msg-title fs46"},[e._v("累计佣金(元)")]),e._v(" "),a("p",{staticClass:"index-msg-money fs70"},[e._v(e._s(e.seller.totalCommission||0))])]),e._v(" "),a("div",{staticClass:"index-msg-item"},[a("p",{staticClass:"index-msg-title fs46"},[e._v("积分")]),e._v(" "),a("p",{staticClass:"index-msg-money fs70"},[e._v(e._s(e.seller.incomeIntegral||0))])]),e._v(" "),a("div",{staticClass:"index-msg-item"},[a("p",{staticClass:"index-msg-title fs46"},[e._v("销售总额(元)")]),e._v(" "),a("p",{staticClass:"index-msg-money fs70"},[e._v(e._s(e.seller.saleMoney||0))])])]),e._v(" "),e._m(0)])]):e._e()},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"index-nav clearfix"},[a("p",{staticClass:"fs40"},[e._v("经纪人说明")]),e._v(" "),a("p",{staticClass:"fs40"},[e._v("1、当消费金额满2000元可申请成为全民经纪人。")]),e._v(" "),a("p",{staticClass:"fs40"},[e._v("2、当A消费达到规定金额成为全民经纪人后，B通过A推荐并进行消费，则A可获得相对应的佣金提成，而B消费达到规定金额后亦可申请成为全民经纪人；C通过B的推荐且进行消费，则B可获得相对应的佣金提成，而A无任何收入，以此类推，此过程为经纪人代理。")]),e._v(" "),a("p",{staticClass:"fs40"},[e._v("3、所获得佣金达到最低提现要求且满7天将自动提现到个人微信钱包。")])])}],n={render:r,staticRenderFns:o},l=n,d=a("X4nt"),c=s,p=d(i,l,!1,c,"data-v-21fcd732",null);t.default=p.exports},fQ5T:function(e,t,a){e.exports=a.p+"static/img/sale.938c462.jpg"},taQt:function(e,t,a){var s=a("H701");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("5ten")("dfe0fb40",s,!0,{})}});