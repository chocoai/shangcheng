webpackJsonp([3],{"13/U":function(s,t,i){"use strict";var e=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("transition",{attrs:{name:"sidebar"}},[i("div",{staticClass:"sidebar-goods"},[i("div",{staticClass:"Slide"},[i("div",{staticClass:"classify-title "},[s._v("\n                "+s._s(s.name)+"分类\n            ")]),s._v(" "),i("div",{staticClass:"classify-goods clearfix"},s._l(s.goodsData,function(t,e){return i("div",{key:e,staticClass:"goods-item",on:{click:function(i){s.goods_jump(t.group_name)}}},[i("div",{staticClass:"goods-img"},[i("default-img",{attrs:{background:s.imgurl+t.image_url,isHeadPortrait:0,size:"0.8"}})],1),s._v(" "),i("p",{staticClass:"fs36",domProps:{textContent:s._s(t.group_name)}})])}))]),s._v(" "),i("more",{attrs:{"is-more":s.isMore}})],1)])},a=[],o={render:e,staticRenderFns:a};t.a=o},"1DU7":function(s,t,i){"use strict";var e=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("section",{staticClass:"more-main",class:{"margin-bottom-clear":!s.$store.state.isShowFooter}},[i("p",{directives:[{name:"show",rawName:"v-show",value:2==s.isMore,expression:"isMore == 2"}]},[s._v("加载中，请稍等……")]),s._v(" "),i("p",{directives:[{name:"show",rawName:"v-show",value:3==s.isMore,expression:"isMore == 3"}]},[s._v("抱歉,没有更多了")])])},a=[],o={render:e,staticRenderFns:a};t.a=o},"1Ql9":function(s,t,i){var e=i("oo7R");"string"==typeof e&&(e=[[s.i,e,""]]),e.locals&&(s.exports=e.locals);i("8bSs")("734788a1",e,!0)},"416G":function(s,t,i){t=s.exports=i("BkJT")(!1),t.push([s.i,'.sidebar-goods[data-v-3b6bad02]{right:0;height:100%;width:76.24799%;float:right;padding:.2rem .21333333rem 0;position:relative;overflow:hidden;background:#f0f2f5}.sidebar-goods .Slide[data-v-3b6bad02]{width:100%;height:97%;overflow-y:auto;overflow-x:hidden;margin-bottom:1.2rem;-webkit-overflow-scrolling:touch}.sidebar-goods .classify-title[data-v-3b6bad02]{width:100%;font-size:.28rem;font-weight:700;padding:.16666667rem 0}.sidebar-goods .classify-goods[data-v-3b6bad02],.sidebar-goods .whole-goods[data-v-3b6bad02]{width:93%;background:#fff;padding:.16666667rem;position:relative}.sidebar-goods .classify-goods[data-v-3b6bad02]:before,.sidebar-goods .whole-goods[data-v-3b6bad02]:before{content:"";display:block;width:100%;position:absolute;bottom:.16666667rem;left:0;height:3px;background:#fff}.sidebar-goods .classify-goods .goods-item[data-v-3b6bad02],.sidebar-goods .classify-goods .whole-item[data-v-3b6bad02],.sidebar-goods .whole-goods .goods-item[data-v-3b6bad02],.sidebar-goods .whole-goods .whole-item[data-v-3b6bad02]{font-size:0;float:left;width:33.333%;padding:.13333333rem;border-bottom:1px solid #f3f5f7;border-right:1px solid #f3f5f7}.sidebar-goods .classify-goods .goods-item p[data-v-3b6bad02],.sidebar-goods .classify-goods .whole-item p[data-v-3b6bad02],.sidebar-goods .whole-goods .goods-item p[data-v-3b6bad02],.sidebar-goods .whole-goods .whole-item p[data-v-3b6bad02]{text-align:center;padding:.06666667rem 0}.sidebar-goods .classify-goods .goods-img[data-v-3b6bad02],.sidebar-goods .classify-goods .whole-img[data-v-3b6bad02],.sidebar-goods .whole-goods .goods-img[data-v-3b6bad02],.sidebar-goods .whole-goods .whole-img[data-v-3b6bad02]{margin:0 auto;height:1.4rem;display:block;background-size:cover;background-position:50%;margin-bottom:.06666667rem}.sidebar-goods .classify-goods>div[data-v-3b6bad02]:nth-child(3n){border-right:0}.sidebar-goods .whole-goods .whole-item[data-v-3b6bad02]{width:50%}.sidebar-goods .whole-goods .whole-item p[data-v-3b6bad02]{text-align:left}.sidebar-goods .whole-goods .whole-img[data-v-3b6bad02]{width:2.2rem;height:2.2rem;overflow:hidden}.sidebar-goods .whole-goods>div[data-v-3b6bad02]:nth-child(2n){border-right:0}.sidebar-enter-active[data-v-3b6bad02]{-webkit-transition:all .3s ease;transition:all .3s ease}.sidebar-leave-active[data-v-3b6bad02]{-webkit-transition:all .8s cubic-bezier(1,.5,.8,1);transition:all .8s cubic-bezier(1,.5,.8,1)}.sidebar-enter[data-v-3b6bad02],.sidebar-leave-to[data-v-3b6bad02]{-webkit-transform:translateX(10px);transform:translateX(10px);opacity:0}',""])},"6/uz":function(s,t,i){var e=i("kMsG");"string"==typeof e&&(e=[[s.i,e,""]]),e.locals&&(s.exports=e.locals);i("8bSs")("36f64560",e,!0)},"6yee":function(s,t,i){"use strict";var e=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"classify-main"},[i("header",{staticClass:"classify-header"},[i("div",{staticClass:"header-search",on:{click:s.search}},[i("input",{directives:[{name:"model",rawName:"v-model",value:s.keyWord,expression:"keyWord"}],staticClass:"fs40",attrs:{placeholder:"搜索商品"},domProps:{value:s.keyWord},on:{input:function(t){t.target.composing||(s.keyWord=t.target.value)}}}),s._v(" "),i("i",{staticClass:"iconfont icon-sousuo shop"})]),s._v(" "),i("div",{staticClass:"header-nav fs40"},[i("div",{on:{click:function(t){s.showNav()}}},[s._v("\r\n                分类\r\n                "),i("i",{staticClass:"iconfont icon-fenlei2",staticStyle:{"font-size":"14px"}})]),s._v(" "),i("div",{class:["new"==s.sort?"shop-font":""],on:{click:function(t){s.switchProduc("new")}}},[s._v("\r\n                最新\r\n            ")]),s._v(" "),i("div",{class:["sale"==s.sort?"shop-font":""],on:{click:function(t){s.switchProduc("sale")}}},[s._v(" \r\n                销量\r\n            ")]),s._v(" "),i("div",{staticClass:"price",on:{click:function(t){s.switchProduc("price")}}},[i("span",{class:["price"==s.sort?"shop-font":""]},[s._v("价格")]),s._v(" "),i("span",{staticStyle:{color:"#ccc"}},[i("i",{staticClass:"iconfont icon-paixu2",class:{"shop-font":0==s.desc_num&&"price"==s.sort}}),s._v(" "),i("i",{staticClass:"iconfont icon-paixu",class:{"shop-font":1==s.desc_num&&"price"==s.sort}})])]),s._v(" "),i("div",[s.isList?i("i",{staticClass:"icon-fenglei",on:{click:s.listToggle}}):i("i",{staticClass:"icon-fenglei2",on:{click:function(t){s.listToggle("isList")}}})])])]),s._v(" "),s.isNav?i("section",{staticClass:"classify-content-nav",class:{"padding-bottom-clear":!s.$store.state.isShowFooter}},[i("ul",{staticClass:"classify-nav",class:{navshow:s.isNav}},s._l(s.classNav,function(t,e){return i("li",{key:e,staticClass:"fs42 ",class:[s.selectedClass==e?"selected":""],domProps:{textContent:s._s(t.group_name)},on:{click:function(i){s.selected(e,t.group_id,t.is_child,t.group_name)}}})})),s._v(" "),s.isGoods?i("sidebar-b",{attrs:{imgurl:s.imgUrl,goodsData:s.classGoods,name:s.group_name},on:{isContentNav:s.ContentNav}}):s._e()],1):s._e(),s._v(" "),""!==s.subList?i("section",{staticClass:"clearfix",class:[s.isList?"classify-content1":"classify-content2"]},s._l(s.subList,function(t,e){return i("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:s.loadMore,expression:"loadMore"}],key:e,staticClass:"classify-item",attrs:{"infinite-scroll-distance":"100"},on:{click:function(i){s.goods_jump(t)}}},[i("div",{staticClass:"classify-img"},[i("default-img",{attrs:{background:t.image_url,isHeadPortrait:0,size:"0.8"}})],1),s._v(" "),i("div",{staticClass:"classify-txt"},[i("p",{staticClass:"fs42 ",class:[s.isList?"text-overflow":"",t.pro_name.length>30?"text-more-overflow":""]},[t.pro_label?i("em",{staticClass:"em-tag"},[s._v(s._s(t.pro_label))]):s._e(),s._v(s._s(t.pro_name)+"\r\n                ")]),s._v(" "),i("div",{staticClass:"classify-money"},[i("p",{staticClass:"fs32 shop-font"},[1==s.type?i("span",[s._v("团购:￥")]):4==s.type?i("span",[s._v("当前价:￥")]):6==s.type?i("span",[s._v("预售:￥")]):7==s.type?i("span",[s._v("批发:￥")]):i("span",[s._v("￥")]),s._v(" "),i("span",{staticClass:"fs42"},[s._v(s._s(t.price[0]))]),s._v("."+s._s(t.price[1])+"\r\n                        "),5==s.type?i("span",[s._v("粉币")]):s._e()]),s._v(" "),i("p",{staticClass:"fs32 shopGray"},[s._v("销量 :"+s._s(t.sale_total))])]),s._v(" "),i("count-down",{attrs:{times:t.times}})],1)])})):s._e(),s._v(" "),""==s.subList?i("goods-no"):s._e(),s._v(" "),i("more",{attrs:{"is-more":s.isMore}})],1)},a=[],o={render:e,staticRenderFns:a};t.a=o},"72cz":function(s,t,i){"use strict";var e=i("uotU"),a=i("dp0q"),o=i("8Hv/"),r=i("8eqz");t.a={components:{more:e.a,goodsNo:a.a,sidebarB:o.a,countDown:r.a},data:function(){return{productList:{},path:"",webPath:"",imgUrl:"",subList:[],type:0,isList:!0,sort:"new",desc_num:-1,isMore:1,curPage:1,keyWord:"",classNav:{},isNav:!1,selectedClass:-1,classGoods:{},footershow:"classify",isGoods:!1,saleMemberId:0,groupId:null}},watch:{},methods:{loadMore:function(){var s=this.productList.pageCount;if(this.curPage>=s)return void(this.isMore=3);if(2!=this.isMore){var t=this.$store.state.scrollTopData;if(t.scrollTop>0)return this.curPage=t.curPage,void this.$store.commit("isScrollTop",{scrollTop:0});this.isMore=2,this.curPage++,console.log("加载更多",this.curPage),this.productAjax({sort:this.sort,curPage:this.curPage,type:this.$route.params.type,groupId:this.groupId})}},listToggle:function(s){if("isList"===s)return this.isList=!0;this.isList=!1},search:function(){var s=this.$route.params.type,t=(this.$route.params.shopId||this.$store.state.shopId,this.$route.params.busId||this.$store.state.shopId),i=this.keyWord||this.$store.state.keywords||this.$route.params.keywords,e="/search/"+t+"/"+s+"/"+i,a=this.$route.params.desc;this.commonFn.isNotNull(a)&&(e+="/"+a),this.$router.push(e)},showNav:function(){if(!this.isNav)return this.isNav=!0,void $(".wrapper").css({overflow:"hidden"});this.isNav=!1,$(".wrapper").removeAttr("style")},productAjax:function(s){var t=this,i={url:t.$store.state.loginDTO_URL,browerType:t.$store.state.browerType,ucLogin:1,shopId:t.$store.state.shopId,busId:t.$store.state.busId,groupId:s.groupId||"",sort:s.sort||"new",isDesc:s.isDesc||"",searchContent:s.searchContent||"",type:s.type||t.$route.params.type||0,curPage:s.curPage||""};this.commonFn.isNotNull(this.saleMemberId)&&this.saleMemberId>0&&(i.saleMemberId=this.saleMemberId,this.$parent.setSaleMemberId(this.saleMemberId)),this.ajaxRequest({status:!1,url:h5App.activeAPI.phoneProduct_productAll_post,data:i,success:function(s){if(1==s.code)return void(t.subList=[]);t.isMore=1,t.productList=s.data.productList;var i=s.data.productList.subList;i.forEach(function(s,i){s.price=t.commonFn.moneySplit(s.price)}),1===t.curPage?t.subList=i:t.subList=t.subList.concat(i)||[],t.path=s.path,t.imgUrl=s.imgUrl,t.webPath=s.webPath}})},switchProduc:function(s){var t=this;t.isNav=!1,"price"===s?(this.desc_num,this.desc_num>0?this.desc_num=0:this.desc_num=1):this.desc_num=-1,this.sort=s,this.productAjax({sort:this.sort,isDesc:t.desc_num,curPage:1,type:t.$route.params.type,groupId:t.groupId}),this.curPage=1},setTitle:function(){var s=this;this.type=s.$route.params.type;var t={1:"团购",3:"秒杀",4:"拍卖",5:"粉币",6:"预售",7:"批发"};s.commonFn.setTitle(t[this.type]||"分类详情");var i=this.$route.params.keywords||this.$store.state.keywords;s.keyWord="k=k"===i?"":i||"",this.$store.state.scrollTopData.scrollTop>0||(s.curPage=1,s.productAjax({sort:"new",curPage:s.curPage,type:s.$route.params.type,searchContent:s.keyWord}))},classAllAjax:function(s){var t=this;this.ajaxRequest({url:h5App.activeAPI.phoneProduct_classAll_post,data:{shopId:t.$store.state.shopId,busId:t.$store.state.busId,groupId:s||""},success:function(i){if(t.isMore=1,s)t.classGoods=i.data;else{t.classNav=i.data;var e={group_id:"",group_name:"全部",is_child:0,shop_id:""};t.classNav.unshift(e)}t.path=i.path,t.imgUrl=i.imgUrl,t.webPath=i.webPath}})},selected:function(s,t,i,e){var a=this;a.selectedClass=s,a.isGoods=!1,a.group_name=e,i?(a.isGoods=!0,a.classAllAjax(t)):(a.classGoods="",a.isNav=!1,$(".wrapper").removeAttr("style"),""==t&&a.$router.push("/classify/"+this.$route.params.shopId+"/"+this.$route.params.busId+"/"+this.$route.params.type+"/k=k"),a.sort="new",a.productAjax({groupId:t,type:a.$route.params.type}))},goods_jump:function(s){console.log(s,"跳转数据"),null!=s.activityId&&""!=s.activityId&&void 0!==s.activityId||(s.activityId=0);var t=$(window).scrollTop();this.$store.commit("isScrollTop",{scrollTop:t,curPage:this.curPage}),this.isMore=2;var i=s.shop_id||this.$store.state.shopId||this.$store.state.shopId||this.$route.params.shopId,e=this.$store.state.busId||this.$route.params.busId,a=this.$store.state.type||this.$route.params.type;this.$store.commit("mutationData",{shopId:i,busId:e,type:a});var o="/goods/details/"+i+"/"+e+"/"+a+"/"+s.id+"/"+s.activityId;this.commonFn.isNotNull(this.saleMemberId)&&this.saleMemberId>0&&(o+="/"+this.saleMemberId+"/0"),this.$router.push(o)},ContentNav:function(s){this.showNav()}},created:function(){var s=this,t=this.$store.state.keywords||this.$route.params.keywords;s.keyWord="k=k"===t?"":t||"",s.curPage=1;var i=this.$route.params.desc;if(i="-"==i?null:i,this.commonFn.isNotNull(i)){var e=i.split("-");null!=e[0]&&0!=e[0]&&(this.saleMemberId=e[0],this.$parent.setSaleMemberId(this.saleMemberId))}this.sort="new",s.setTitle(),s.classAllAjax()}}},"7JhD":function(s,t,i){"use strict";var e=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},a=[function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("section",{staticClass:"goods-no"},[i("i",{staticClass:"iconfont icon-zanwushuju"}),s._v(" "),i("p",[s._v("没有找到相关的商品")])])}],o={render:e,staticRenderFns:a};t.a=o},"80/d":function(s,t,i){"use strict";function e(s){i("1Ql9")}Object.defineProperty(t,"__esModule",{value:!0});var a=i("72cz"),o=i("6yee"),r=i("0HdQ"),n=e,c=r(a.a,o.a,!1,n,null,null);t.default=c.exports},"8Hv/":function(s,t,i){"use strict";function e(s){i("NTZM")}var a=i("rB+i"),o=i("13/U"),r=i("0HdQ"),n=e,c=r(a.a,o.a,!1,n,"data-v-3b6bad02",null);t.a=c.exports},"8eqz":function(s,t,i){"use strict";function e(s){i("6/uz")}var a=i("luH4"),o=i("AZvr"),r=i("0HdQ"),n=e,c=r(a.a,o.a,!1,n,"data-v-36f4a728",null);t.a=c.exports},AZvr:function(s,t,i){"use strict";var e=function(){var s=this,t=s.$createElement,i=s._self._c||t;return s.isShow?i("div",[1==s.type?i("div",{staticClass:"fs36 classify-time shopGray"},[s._v("\n          距结束"),i("span",[s._v(s._s(s.time.DD)+"天")]),s._v(" "),i("em",{class:[""!=s.countBg?s.countBg:""],domProps:{textContent:s._s(s.time.HH)}}),s._v(" :\n          "),i("em",{class:[""!=s.countBg?s.countBg:""],domProps:{textContent:s._s(s.time.mm)}}),s._v(" :\n          "),i("em",{class:[""!=s.countBg?s.countBg:""],domProps:{textContent:s._s(s.time.ss)}})]):s._e(),s._v(" "),2==s.type?i("div",{staticClass:"group-goods-time"},[i("span",{staticClass:"fs36"},[s._v("距离结束")]),s._v(" "),i("span",{staticClass:"fs36"},[i("em",{class:[""!=s.countBg?s.countBg:""],domProps:{textContent:s._s(s.time.DD)}}),s._v(" 天\n      "),i("em",{class:[""!=s.countBg?s.countBg:""],domProps:{textContent:s._s(s.time.HH)}}),s._v("时\n      "),i("em",{class:[""!=s.countBg?s.countBg:""],domProps:{textContent:s._s(s.time.mm)}}),s._v("分\n      "),i("em",{class:[""!=s.countBg?s.countBg:""],domProps:{textContent:s._s(s.time.ss)}}),s._v("秒\n      ")])]):s._e(),s._v(" "),3==s.type?i("div",{staticClass:"group-time fs40 border"},[s._v("\n    剩余  "),i("em",{domProps:{textContent:s._s(s.time.DD)}}),s._v(" 天\n      "),i("em",{domProps:{textContent:s._s(s.time.HH)}}),s._v("时\n      "),i("em",{domProps:{textContent:s._s(s.time.mm)}}),s._v("分\n      "),i("em",{domProps:{textContent:s._s(s.time.ss)}}),s._v("秒\n  ")]):s._e(),s._v(" "),4==s.type?i("p",{staticClass:"fs42"},[s._v("\n    剩余"+s._s(s.time.DD)+"天 "+s._s(s.time.HH)+"时 "+s._s(s.time.mm)+"分 "+s._s(s.time.ss)+"秒 结束\n  ")]):s._e()]):s._e()},a=[],o={render:e,staticRenderFns:a};t.a=o},Kjsr:function(s,t,i){var e=i("Tjur");"string"==typeof e&&(e=[[s.i,e,""]]),e.locals&&(s.exports=e.locals);i("8bSs")("59983ba6",e,!0)},NTZM:function(s,t,i){var e=i("416G");"string"==typeof e&&(e=[[s.i,e,""]]),e.locals&&(s.exports=e.locals);i("8bSs")("17434280",e,!0)},OWAf:function(s,t){s.exports={props:["isMore"],data:function(){return{}}}},QnGV:function(s,t,i){var e=i("vIIf");"string"==typeof e&&(e=[[s.i,e,""]]),e.locals&&(s.exports=e.locals);i("8bSs")("7a4c1f04",e,!0)},Tjur:function(s,t,i){t=s.exports=i("BkJT")(!1),t.push([s.i,".more-main{width:100%;font-size:.3rem;color:#737373;text-align:center;padding:.25rem 0;padding-bottom:60px}.more-main p{margin-bottom:.05rem;text-align:center}.margin-bottom-clear{margin-bottom:0!important}",""])},dp0q:function(s,t,i){"use strict";function e(s){i("QnGV")}var a=i("opU1"),o=i("7JhD"),r=i("0HdQ"),n=e,c=r(a.a,o.a,!1,n,"data-v-1907a78f",null);t.a=c.exports},kMsG:function(s,t,i){t=s.exports=i("BkJT")(!1),t.push([s.i,".classify-time[data-v-36f4a728]{margin-top:.06666667rem}.classify-time span[data-v-36f4a728]{color:#333;margin:3px}.classify-time em[data-v-36f4a728]{font-size:.21333333rem;display:inline-block;background:#fc0;color:#333;padding:1px 2px;border-radius:3px}.group-goods-time[data-v-36f4a728]{font-size:0;border:1px solid #e4393c;height:.46666667rem;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify;overflow:hidden;margin-top:.1rem;border-radius:3px}.group-goods-time span[data-v-36f4a728]{display:block;line-height:.46666667rem;height:.46666667rem;text-align:center}.group-goods-time>span[data-v-36f4a728]:first-child{width:32%;height:.46666667rem;color:#fff;background:#e4393c;text-align:center}.group-goods-time>span[data-v-36f4a728]:last-child{width:68%;color:#e4393c}.group-time[data-v-36f4a728]{text-align:center;height:1.33333333rem;padding:.41333333rem 0;color:#fff;background:url("+i("v4VG")+") no-repeat;background-size:100% 100%}.group-time em[data-v-36f4a728]{background:#cb080b;display:inline-block;width:.41333333rem;height:.41333333rem;text-align:center;line-height:.44rem;border-radius:5px}",""])},luH4:function(s,t,i){"use strict";t.a={props:{times:{type:Number,default:0,required:!0},type:{type:Number,default:1,required:!1},countBg:{type:String,default:""}},data:function(){return{time:{},isShow:!1,Interval:"",isShowHtml:!0}},watch:{times:function(s,t){var i=this;i.time="",i.time=s,i.Interval&&clearInterval(i.Interval),0===s&&(this.isShow=!1),i.setTiming(s)}},mounted:function(){void 0!==this.show&&(this.isShowHtml=this.show),this.setTiming(this.times)},methods:{setTiming:function(s){var t=this,i=this,e=i.times;i.time="",this.Interval=setInterval(function(){0===e?(clearInterval(i.Interval),i.time=i.timer(0)):(e--,i.time=i.timer(e),t.isShow=!0)},1e3)},timer:function(s){var t=0,i=0,e=0,a=0;s>0&&(t=Math.floor(s/86400),i=Math.floor(s/3600)-24*t,e=Math.floor(s/60)-24*t*60-60*i,a=Math.floor(s)-24*t*60*60-60*i*60-60*e),i<=9&&(i="0"+i),e<=9&&(e="0"+e),a<=9&&(a="0"+a);var o={};return o.DD=t,o.HH=i,o.mm=e,o.ss=a,o}}}},oo7R:function(s,t,i){t=s.exports=i("BkJT")(!1),t.push([s.i,".classify-main{width:100%}.classify-main .classify-header{width:100%;font-size:0;background:#fff;position:fixed;top:0;z-index:3;max-width:8.28rem}.classify-main .classify-header .price span{position:relative;margin:0 .5px}.classify-main .classify-header .price span i{position:absolute;left:0;font-size:.14666667rem}.classify-main .classify-header .price span .icon-paixu{bottom:0}.classify-main .classify-header .price span .icon-paixu2{top:1px}.classify-main .header-search{width:100%;padding:.16666667rem;position:relative}.classify-main .header-search i{position:absolute;top:38%;left:.37777778rem;color:#87858f}.classify-main .header-search input{width:100%;border:0;background:#f1f1f4;padding:.13333333rem .63333333rem;padding-right:0;border-radius:10px}.classify-main .header-nav{width:100%;display:-webkit-box;display:-moz-box;display:-o-box;display:box;line-height:1}.classify-main .header-nav>div{-webkit-box-flex:1;-o-box-flex:1;box-flex:1;padding:.16666667rem 0;text-align:center}.classify-main .header-nav>div:last-child{padding:.16666667rem 0}.classify-main .header-nav>div:last-child i{background-position:50%}.classify-main .classify-conten2,.classify-main .classify-content1{-webkit-overflow-scrolling:touch}.classify-main .classify-content1{width:100%;position:relative;background:#fff;padding-top:1.53333333rem}.classify-main .classify-content1 .classify-item{width:50%;float:left;padding:.13333333rem}.classify-main .classify-content1 .classify-item .classify-img{width:3.8rem;height:3.8rem;background-size:cover;background-position:50%;margin-bottom:.13333333rem;margin:0 auto}.classify-main .classify-content1 .classify-item .classify-txt{width:100%}.classify-main .classify-content1 .classify-item .classify-txt>p{min-height:1.5em}.classify-main .classify-content1 .classify-item .classify-txt .classify-money{margin-top:.13333333rem;width:100%;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify;font-size:0}.classify-main .classify-content1 .classify-item .classify-txt .classify-money p{vertical-align:bottom}.classify-main .classify-content2{width:100%;position:relative;background:#fff;padding-top:1.53333333rem}.classify-main .classify-content2 .classify-item{width:100%;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify;padding:.06666667rem .2rem}.classify-main .classify-content2 .classify-item .classify-img{width:2.2rem;height:2.2rem;background-size:cover;background-position:50%}.classify-main .classify-content2 .classify-item .classify-txt{width:66%}.classify-main .classify-content2 .classify-item .classify-txt>p{min-height:1em;max-height:.76666667rem;margin-bottom:.06666667rem}.classify-main .classify-content2 .classify-item .classify-txt .classify-money{margin-bottom:.16666667rem}.classify-main .classify-content2 .classify-item .classify-time{margin-top:.06666667rem;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify}.classify-main .classify-content2 .classify-item .classify-time span{color:#333;margin:3px}.classify-main .classify-content2 .classify-item .classify-time em{font-size:.21333333rem;display:inline-block;background:#fc0;color:#333;padding:1px 2px;border-radius:3px}.classify-main .classify-content-nav{width:100%;height:100%;background:rgba(0,0,0,.5);position:absolute;padding-top:1.53333333rem;z-index:2;padding-bottom:1rem}.classify-main .classify-content-nav .classify-nav{height:100%;width:23.75201%;float:left;overflow-y:auto;overflow-x:hidden;position:relative;left:0;background:#fff;-webkit-overflow-scrolling:touch}.classify-main .classify-content-nav .classify-nav li{width:100%;height:1rem;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:center;-o-box-pack:center;box-pack:center;border-bottom:1px solid #e5e5e5;background:#fff}.classify-main .classify-content-nav .classify-nav .selected{background:#f0f2f5;border-right:0;color:#e73622;position:relative}.classify-main .padding-bottom-clear{padding-bottom:0!important}.navshow{-webkit-animation:.5s ease wrap_kf forwards}@-webkit-keyframes wrap_kf{0%{height:0}to{height:100%}}",""])},opU1:function(s,t,i){"use strict";t.a={props:["statu"],data:function(){return{}},mounted:function(){}}},"rB+i":function(s,t,i){"use strict";var e=i("uotU");t.a={components:{more:e.a},props:["imgurl","goodsData","name"],data:function(){return{path:"",imgUrl:"",webPath:"",isMore:1,background:""}},mounted:function(){},methods:{goods_jump:function(s){var t=this.$store.state.type||this.$route.params.type||0,i=this.$store.state.shopId||"shopId",e=this.$store.state.busId||"busId";this.$store.commit("mutationData",{keywords:s}),this.$router.push("/classify/"+i+"/"+e+"/"+t+"/"+s),this.$emit("isContentNav",s)}}}},uotU:function(s,t,i){"use strict";function e(s){i("Kjsr")}var a=i("OWAf"),o=i.n(a),r=i("1DU7"),n=i("0HdQ"),c=e,d=n(o.a,r.a,!1,c,null,null);t.a=d.exports},v4VG:function(s,t,i){s.exports=i.p+"static/img/tuangou_bg2.dcba580.jpg"},vIIf:function(s,t,i){t=s.exports=i("BkJT")(!1),t.push([s.i,".goods-no[data-v-1907a78f]{width:100%;color:#ccc;text-align:center;margin-top:.78666667rem}.goods-no i[data-v-1907a78f]{font-size:2.4rem;margin-left:.36666667rem}.goods-no p[data-v-1907a78f]{font-size:.28rem;text-align:center}",""])}});