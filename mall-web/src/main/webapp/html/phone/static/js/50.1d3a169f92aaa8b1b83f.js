webpackJsonp([50],{A3rb:function(t,o,e){var r=e("gRfc");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("8bSs")("f7285794",r,!0)},AkLY:function(t,o,e){"use strict";function r(t){e("A3rb")}Object.defineProperty(o,"__esModule",{value:!0});var n=e("FxdQ"),s=e("jK95"),l=e("0HdQ"),u=r,c=l(n.a,s.a,!1,u,null,null);o.default=c.exports},FxdQ:function(t,o,e){"use strict";e("b7Ca");o.a={components:{},data:function(){return{busId:this.$route.params.busId||sessionStorage.getItem("busId"),returnId:this.$route.params.returnId,returnArr:[],status:-1,errorMsg:"暂无协商详情"}},mounted:function(){this.loadDatas(),this.commonFn.setTitle("协商详情"),this.$store.commit("show_footer",!1)},beforeDestroy:function(){this.$store.commit("show_footer",!0)},methods:{loadDatas:function(){var t=this,o={busId:t.busId,url:location.href,browerType:t.$store.state.browerType,returnId:t.returnId};t.ajaxRequest({url:h5App.activeAPI.return_log_post,data:o,status:!1,success:function(o){if(null==o.data||0==o.data.length)return void(t.status=1);t.returnArr=o.data,console.log(t.returnArr,"_this.returnArr"),t.returnArr.forEach(function(t,o){console.log(t.remark,"remark"),2==t.retHandlingWay?t.refundType="退货并退款":t.refundType="仅退款"})}})},goReturnWuliu:function(t){sessionStorage.setItem("refundReturnUrl",location.href),this.$router.push("/return/logistics/"+this.busId+"/"+t)},updateReturn:function(t,o){sessionStorage.setItem("refundReturnUrl",location.href),this.$router.push("/return/apply/"+this.busId+"/"+t+"/-1/"+o)}}}},gRfc:function(t,o,e){o=t.exports=e("BkJT")(!1),o.push([t.i,'.consult-wrapper{width:100%;padding:.26666667rem .39333333rem;position:relative}.consult-wrapper .consult-main{width:100%}.consult-wrapper .consult-item{width:100%;margin-bottom:.26666667rem;position:relative}.consult-wrapper .consult-item .consult-time{margin:0 auto;background:#ededed;width:30%;text-align:center;border-radius:50px;color:#bdbdbd;margin-bottom:.26666667rem}.consult-wrapper .consult-item .consult-content{font-size:0;width:100%;padding:0 .26rem;position:relative}.consult-wrapper .consult-item .consult-content>div:last-child{border-bottom:0}.consult-wrapper .consult-item .consult-content .consult-title{padding:.25333333rem 0}.consult-wrapper .consult-item .consult-content .consult-txt{padding:.18666667rem 0}.consult-wrapper .consult-item .consult-content .consult-txt p{line-height:1.6em}.consult-wrapper .consult-item .consult-content .consult-txt2{margin:.13333333rem 0;border:2px dotted #fff;padding:0 .13333333rem;border-radius:3px}.consult-wrapper .consult-item .consult-content .consult-txt2 p{line-height:3em;border-bottom:1px dashed #fff;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify}.consult-wrapper .consult-item .consult-content .consult-txt2 p span{display:block}.consult-wrapper .consult-item .consult-content .consult-txt2>p:last-child{border-bottom:0}.consult-wrapper .consult-item .consult-content:before{content:"";position:absolute;display:block;top:0;width:0;height:0}.consult-wrapper .consult-item:after{content:"";position:absolute;display:block;top:.08666667rem;width:.17333333rem;height:.17333333rem;background:#dbdbdb;border-radius:100%}.consult-wrapper .consult-item:before{color:#dbdbdb;position:absolute;display:block;top:0;left:.26666667rem;font-size:.24rem}.consult-wrapper .consult-item .consult-footer{width:100%;text-align:right;border-top:1px solid rgba(0,0,0,.2);padding:.26666667rem 0}.consult-wrapper .consult-item .consult-footer .consult-botton{display:inline-block;padding:5px;border:1px solid #fff;color:#fff;border-radius:5px}.consult-wrapper .buy .consult-content{color:#666;background:#ededed}.consult-wrapper .buy .consult-content:before{right:-9px;border-top:10px solid #ededed;border-right:10px solid transparent}.consult-wrapper .buy .consult-title{border-bottom:1px solid #dbdbdb}.consult-wrapper .buy:after{display:none}.consult-wrapper .sell .consult-content,.consult-wrapper .system .consult-content{color:#fff}.consult-wrapper .sell .consult-content .consult-title,.consult-wrapper .system .consult-content .consult-title{border-bottom:1px solid #fff}.consult-wrapper .sell .consult-content:before,.consult-wrapper .system .consult-content:before{left:-9px;border-left:10px solid transparent}.consult-wrapper .sell .consult-content{background:#f18246}.consult-wrapper .sell .consult-content:before{border-top:10px solid #f18246}.consult-wrapper .sell:before{content:"\\5356\\5BB6"}.consult-wrapper .system .consult-content{background:#52a3cc}.consult-wrapper .system .consult-content:before{border-top:10px solid #52a3cc}.consult-wrapper .system:before{content:"\\7CFB\\7EDF\\6D88\\606F"}.consult-wrapper .m-right{margin-right:10px}',""])},jK95:function(t,o,e){"use strict";var r=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"shop-wrapper consult-wrapper",attrs:{id:"app"}},[null!=t.returnArr&&t.returnArr.length>0?e("div",{staticClass:"consult-main"},t._l(t.returnArr,function(o){return e("div",{staticClass:"consult-item buy",class:[{buy:0==o.operator},{sell:1==o.operator},{system:2==o.operator}]},[e("div",{staticClass:"consult-time fs32"},[t._v("\n               "+t._s(t._f("formatNotM")(o.createTime))+"\n            ")]),t._v(" "),e("div",{staticClass:"consult-content"},[e("div",{staticClass:"consult-title fs56"},[t._v("\n                    "+t._s(o.statusContent)+"\n                ")]),t._v(" "),0==o.getData&&null!=o.remark?e("div",[e("div",{staticClass:"consult-txt"},[e("p",{staticClass:"fs46",domProps:{innerHTML:t._s(o.remark)}})])]):t._e(),t._v(" "),o.getData>0&&null!=o.remark?e("div",[e("div",{staticClass:"consult-txt"},[t._v(t._s(o.remark)+"\n                        "),t._l(o.remark,function(o,r){return e("p",{staticClass:"fs46"},[t._v(t._s(r)+"："+t._s(o))])})],2)]):t._e(),t._v(" "),1==o.isShowApplyReturnButton||1==o.isShowReturnWuLiuButton?e("div",{staticClass:"consult-footer"},[1==o.isShowApplyReturnButton?e("div",{staticClass:"consult-botton fs46 m-right",on:{click:function(e){t.updateReturn(o.orderDetailId,o.returnId)}}},[t._v("修改退款申请")]):t._e(),t._v(" "),1==o.isShowReturnWuLiuButton?e("div",{staticClass:"consult-botton fs46 m-right",on:{click:function(e){t.goReturnWuliu(o.returnId)}}},[t._v("填写退款物流")]):t._e()]):t._e()])])})):t._e(),t._v(" "),null==t.returnArr||0==t.returnArr.length&&-1!=t.status?e("content-no",{attrs:{statu:t.status,errorMsg:t.errorMsg}}):t._e()],1)},n=[],s={render:r,staticRenderFns:n};o.a=s}});