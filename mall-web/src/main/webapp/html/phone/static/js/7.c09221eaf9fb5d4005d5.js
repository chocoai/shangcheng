webpackJsonp([7],{"1DU7":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"more-main",class:{"margin-bottom-clear":!e.$store.state.isShowFooter}},[i("p",{directives:[{name:"show",rawName:"v-show",value:2==e.isMore,expression:"isMore == 2"}]},[e._v("加载中，请稍等……")]),e._v(" "),i("p",{directives:[{name:"show",rawName:"v-show",value:3==e.isMore,expression:"isMore == 3"}]},[e._v("抱歉,没有更多了")])])},s=[],r={render:a,staticRenderFns:s};t.a=r},"3WVD":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"shop-wrapper sale-wrapper"},[i("div",{staticClass:"seller-top "},[i("div",{staticClass:"seller-nav fs48"},[i("i",{staticClass:"iconfont icon-jiantou-copy1",on:{click:e.back}}),e._v("自选商品\n      ")]),e._v(" "),i("div",{staticClass:"search-div"},[i("div",{staticClass:"v-div"},[i("i",{staticClass:"icon-sousuo iconfont",on:{click:e.search}}),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],attrs:{placeholder:"搜索商品"},domProps:{value:e.content},on:{input:function(t){t.target.composing||(e.content=t.target.value)}}})])])]),e._v(" "),i("div",{staticClass:"content-div"},[null!=e.classList?i("div",{staticClass:"left-div"},e._l(e.classList,function(t,a){return i("div",{key:a,staticClass:"cla-item ",class:{nav:e.selectGroupId==t.group_id},on:{click:function(i){e.selectGroup(t,1)}}},[e._v(e._s(t.group_name))])})):e._e(),e._v(" "),null!=e.childClaList&&e.childClaList.length>0?i("div",{staticClass:"right-div2"},e._l(e.childClaList,function(t,a){return i("div",{key:a,staticClass:"child-item",on:{click:function(i){e.selectGroup(t,0)}}},[i("default-img",{staticClass:"cla-img-div",attrs:{background:e.imgUrl+t.image_url,isHeadPortrait:0,size:"0.5"}}),e._v(" "),i("p",[e._v(e._s(t.group_name))])],1)})):e._e(),e._v(" "),null!=e.productList?i("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.loadDatas,expression:"loadDatas"}],staticClass:"right-div",attrs:{id:"aaa","infinite-scroll-distance":"200"}},[e._l(e.productList,function(t,a){return i("div",{key:a,staticClass:"pro-item"},[i("div",{staticClass:"pro-div",on:{click:function(i){e.toProductDetail(t)}}},[i("div",{staticClass:"img-divs"},[i("default-img",{staticClass:"img-div",attrs:{background:t.image_url,isHeadPortrait:0,size:"0.8"}})],1),e._v(" "),i("div",{staticClass:"con-div fs0"},[i("p",{staticClass:"fs40"},[e._v(e._s(t.pro_name))]),e._v(" "),i("p",{staticClass:"fs32 shop-font"},[e._v("价格：￥"+e._s(e._f("moneySplit1")(t.price))+"."),i("em",{staticClass:"fs28"},[e._v(e._s(e._f("moneySplit2")(t.price)))])]),e._v(" "),null!=t.hyPrice?i("p",{staticClass:"fs32 shop-font"},[e._v("会员：￥"+e._s(e._f("moneySplit1")(t.hyPrice))+"."),i("em",{staticClass:"fs28"},[e._v(e._s(e._f("moneySplit2")(t.hyPrice)))])]):e._e()])]),e._v(" "),i("div",{staticClass:"icon-div",on:{click:function(i){e.isCheck(t,a)}}},[i("i",{staticClass:"iconfont fs46",class:[t.isCheck?"icon-yes":"icon-yuangy"]})])])}),e._v(" "),i("more",{attrs:{"is-more":e.isMore}})],2):e._e()]),e._v(" "),i("section",{staticClass:"shop-footer-fixed"},[i("div",{staticClass:"div-button",on:{click:e.save}},[e._v("确认选择")])])])},s=[],r={render:a,staticRenderFns:s};t.a=r},Ccno:function(e,t,i){var a=i("xeBC");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("8bSs")("1eefe46a",a,!0)},F3s4:function(e,t,i){t=e.exports=i("BkJT")(!1),t.push([e.i,".upload-main-div[data-v-6e84d8ee]{width:100%;height:100%}.upload-main-div .img-upload[data-v-6e84d8ee]{position:relative;width:100%;height:100%;background-size:cover;background-position:50%;color:#999;border:2px dashed #999;border-radius:5px;text-align:center;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:center;-o-box-pack:center;box-pack:center;-webkit-box-orient:vertical;-o-box-orient:vertical;box-orient:vertical}.upload-main-div .img-upload i[data-v-6e84d8ee]{font-size:.58666667rem}.upload-main-div .img-upload p[data-v-6e84d8ee]{width:75%}.upload-main-div input[data-v-6e84d8ee]{position:absolute;width:100%;height:100%;display:block;top:0;left:0;opacity:0}.upload-main-div .update-div[data-v-6e84d8ee]{position:relative}",""])},Ih1W:function(e,t,i){"use strict";var a=i("BMa3"),s=i.n(a);t.a={props:["maxNums","imgURL","styles","index"],data:function(){return{imgData:[],maxNum:3,styleType:1}},mounted:function(){this.maxNums>0&&(this.maxNum=this.maxNums),this.imgData=this.imgURL,null!=this.styles&&(this.styleType=this.styles)},methods:{imageValidate:function(){if(null!=this.imgData&&this.imgData.length>=this.maxNum)return this.$store.commit("error_msg","图片最多上传"+this.maxNum+"张"),!1},readFile:function(e){var t=this,i=(e.srcElement||e.target).files,a=this;if(null!=this.imgData&&a.imgData.length+i.length>a.maxNum)return void a.$store.commit("error_msg","图片最多上传"+this.maxNum+"张");this.$store.commit("is_show_loading",!0),console.log(i,"file");var r=new FormData;if(r.append("busId",a.$store.state.busId),null!=i&&i.length>0)for(var o=0;o<i.length;o++)r.append("file",i[o]);r.append("file",i);var n={headers:{"Content-Type":"multipart/form-data"}},d=window.h5App.api+h5App.activeAPI.upload_image_post;s.a.post(d,r,n).then(function(e){t.$store.commit("is_show_loading",!1);var i=e.data;if(1001==i.code)return void(location.href=i.url);if(0!=i.code)return void a.$store.commit("error_msg",i.msg);var s=i.data;a.imgData=s.split(",");var r=[a.imgData];null!=a.index&&(r[r.length]=a.index),a.$emit("returnUrl",r)})}}}},JHeL:function(e,t,i){"use strict";function a(e){i("Ccno")}var s=i("mhRB"),r=i("mdOd"),o=i("0HdQ"),n=a,d=o(s.a,r.a,!1,n,"data-v-c9eb2cf0",null);t.a=d.exports},Kjsr:function(e,t,i){var a=i("Tjur");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("8bSs")("59983ba6",a,!0)},LVUN:function(e,t,i){var a=i("F3s4");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("8bSs")("191bc22b",a,!0)},"O+Ev":function(e,t,i){t=e.exports=i("BkJT")(!1),t.push([e.i,".sale-wrapper .seller-top[data-v-3912eefc]{position:fixed;top:0;z-index:2;width:100%}.sale-wrapper .seller-top .seller-nav[data-v-3912eefc]{height:.79333333rem;line-height:.79333333rem;padding-left:.33333333rem;background:#f0f2f5;font-size:.3rem}.sale-wrapper .seller-top .seller-nav i[data-v-3912eefc]{color:#b2b2b2;margin-right:.16666667rem}.sale-wrapper[data-v-3912eefc]{width:100%;position:relative}.sale-wrapper .seller-nav[data-v-3912eefc]{background:#fff!important;position:relative;border-bottom:1px solid #e0e0e0}.sale-wrapper .search-div[data-v-3912eefc]{background:#fff;height:.91333333rem;padding:.13333333rem .25333333rem}.sale-wrapper .search-div .v-div[data-v-3912eefc]{width:100%;height:100%;border:1px solid #d1d1d1;border-radius:10px;position:relative;padding-left:.57333333rem}.sale-wrapper .search-div .v-div i[data-v-3912eefc]{width:5%;margin-right:.06666667rem;position:absolute;left:.12rem;top:29%}.sale-wrapper .search-div .v-div input[data-v-3912eefc]{width:97%}.sale-wrapper .search-div .v-div i[data-v-3912eefc],.sale-wrapper .search-div .v-div input[data-v-3912eefc]{display:block}.sale-wrapper .content-div[data-v-3912eefc]{width:100%;height:77vh;position:relative;padding-top:1.7rem}.sale-wrapper .content-div .left-div[data-v-3912eefc],.sale-wrapper .content-div .right-div2[data-v-3912eefc],.sale-wrapper .content-div .right-div[data-v-3912eefc]{overflow:scroll;position:absolute;height:100%;-webkit-overflow-scrolling:touch}.sale-wrapper .content-div .left-div[data-v-3912eefc]{width:24%;left:0}.sale-wrapper .content-div .left-div .cla-item[data-v-3912eefc]{width:100%;height:1rem;line-height:1rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:.29333333rem;text-align:center;position:relative;border-bottom:1px solid #e0e0e0;border:1px solid #e5e5e5;background-color:#fff}.sale-wrapper .content-div .left-div .cla-item[data-v-3912eefc]::-moz-selection{color:#e4393c;border:0;background:none}.sale-wrapper .content-div .left-div .cla-item[data-v-3912eefc]::selection{color:#e4393c;border:0;background:none}.sale-wrapper .content-div .left-div .cla-item::-moz-selection em[data-v-3912eefc]{display:block!important}.sale-wrapper .content-div .left-div .cla-item::selection em[data-v-3912eefc]{display:block!important}.sale-wrapper .content-div .left-div .cla-item[data-v-3912eefc]:nth-child(2n){border-width:0 1px}.sale-wrapper .content-div .left-div .nav[data-v-3912eefc]{color:#e4393c;border:0;background:none}.sale-wrapper .content-div .left-div .nav em[data-v-3912eefc]{display:block!important}.sale-wrapper .content-div .right-div2[data-v-3912eefc],.sale-wrapper .content-div .right-div[data-v-3912eefc]{width:76%;padding:.2rem 0 0 .20666667rem;right:0}.sale-wrapper .content-div .right-div2 .pro-item[data-v-3912eefc],.sale-wrapper .content-div .right-div .pro-item[data-v-3912eefc]{position:relative;border-bottom:1px solid #e0e0e0;padding-left:.2rem;background-color:#fff;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify;-webkit-box-align:center;-o-box-align:center;box-align:center;font-size:0}.sale-wrapper .content-div .right-div2 .pro-item .pro-div[data-v-3912eefc],.sale-wrapper .content-div .right-div .pro-item .pro-div[data-v-3912eefc]{width:87%;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-pack:left;-o-box-pack:left;box-pack:left}.sale-wrapper .content-div .right-div2 .pro-item .pro-div .img-divs[data-v-3912eefc],.sale-wrapper .content-div .right-div .pro-item .pro-div .img-divs[data-v-3912eefc]{margin-right:.13333333rem}.sale-wrapper .content-div .right-div2 .pro-item .pro-div .img-div[data-v-3912eefc],.sale-wrapper .content-div .right-div .pro-item .pro-div .img-div[data-v-3912eefc]{width:1.45333333rem;height:1.45333333rem;margin:.06666667rem 0}.sale-wrapper .content-div .right-div2 .pro-item .pro-div .con-div[data-v-3912eefc],.sale-wrapper .content-div .right-div .pro-item .pro-div .con-div[data-v-3912eefc]{width:65%}.sale-wrapper .content-div .right-div2 .pro-item .pro-div .con-div p[data-v-3912eefc],.sale-wrapper .content-div .right-div .pro-item .pro-div .con-div p[data-v-3912eefc]{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.sale-wrapper .content-div .right-div2 .pro-item .pro-div .con-div p[data-v-3912eefc]:first-child,.sale-wrapper .content-div .right-div2 .pro-item .pro-div .con-div p[data-v-3912eefc]:nth-child(2),.sale-wrapper .content-div .right-div .pro-item .pro-div .con-div p[data-v-3912eefc]:first-child,.sale-wrapper .content-div .right-div .pro-item .pro-div .con-div p[data-v-3912eefc]:nth-child(2){height:.6rem;line-height:.6rem}.sale-wrapper .content-div .right-div2 .pro-item .pro-div .con-div .shop-font em[data-v-3912eefc],.sale-wrapper .content-div .right-div .pro-item .pro-div .con-div .shop-font em[data-v-3912eefc]{display:inline!important}.sale-wrapper .content-div .right-div2 .pro-item .icon-div[data-v-3912eefc],.sale-wrapper .content-div .right-div .pro-item .icon-div[data-v-3912eefc]{width:13%;text-align:center}.sale-wrapper .content-div .right-div2 .pro-item .icon-div .icon-yuangy[data-v-3912eefc],.sale-wrapper .content-div .right-div .pro-item .icon-div .icon-yuangy[data-v-3912eefc]{display:inline-block;width:.30666667rem;height:.30666667rem;border:1px solid #c9c9c9;border-radius:100%}.sale-wrapper .content-div .right-div2 .pro-item .icon-div .icon-yes[data-v-3912eefc],.sale-wrapper .content-div .right-div .pro-item .icon-div .icon-yes[data-v-3912eefc]{color:#2f99ff}.sale-wrapper .content-div .right-div2 .pro-item .icon-div .icon-yigouxuan[data-v-3912eefc],.sale-wrapper .content-div .right-div .pro-item .icon-div .icon-yigouxuan[data-v-3912eefc]{font-size:.30666667rem}.sale-wrapper .content-div .right-div[data-v-3912eefc]{z-index:1}.sale-wrapper .content-div .right-div2[data-v-3912eefc]{z-index:2;background-color:#fff}.sale-wrapper .content-div .right-div2 .child-item[data-v-3912eefc]{float:left;width:33.33333%;margin-bottom:.13333333rem;text-align:center}.sale-wrapper .content-div .right-div2 .child-item .cla-img-div[data-v-3912eefc]{width:1.1rem;height:1.1rem;margin:0 auto;background-color:#eee}.sale-wrapper .content-div .right-div2 .child-item p[data-v-3912eefc]{font-size:.26666667rem}.sale-wrapper .shop-footer-fixed[data-v-3912eefc]{width:100%;background-color:#fff;z-index:3}.sale-wrapper .shop-footer-fixed .div-button[data-v-3912eefc]{width:90%;height:.95333333rem;line-height:.95333333rem;color:#fff;background-color:#2f99ff;margin:.2rem .4rem;font-size:.38666667rem;border-radius:5px;text-align:center}input[data-v-3912eefc]{width:100%;height:100%;border:0;outline:0;word-wrap:break-word;font-size:.26666667rem}.more-main[data-v-3912eefc]{padding-bottom:0}",""])},OWAf:function(e,t){e.exports={props:["isMore"],data:function(){return{}}}},OmNo:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"upload-main-div"},[1==e.styleType?i("div",{staticClass:"img-upload"},[i("i",{staticClass:"iconfont icon-xiangji"}),e._v(" "),i("p",{staticClass:"fs36"},[e._v("\n              上传凭证(最多"+e._s(e.maxNum)+"张)\n      ")]),e._v(" "),i("input",{attrs:{type:"file",accept:"image/*"},on:{change:function(t){e.readFile(t)},click:e.imageValidate}})]):e._e(),e._v(" "),2==e.styleType?i("div",{staticClass:"update-div iconfont icon-jiaimg"},[i("input",{attrs:{type:"file",accept:"image/*"},on:{change:function(t){e.readFile(t)},click:e.imageValidate}})]):e._e()])},s=[],r={render:a,staticRenderFns:s};t.a=r},Tjur:function(e,t,i){t=e.exports=i("BkJT")(!1),t.push([e.i,".more-main{width:100%;font-size:.3rem;color:#737373;text-align:center;padding:.25rem 0;padding-bottom:60px}.more-main p{margin-bottom:.05rem;text-align:center}.margin-bottom-clear{margin-bottom:0!important}",""])},dDlH:function(e,t,i){"use strict";var a=i("JHeL"),s=i("l4l+"),r=i("uotU");t.a={data:function(){return{busId:this.$route.params.busId||sessionStorage.getItem("busId"),ids:this.$route.params.ids||null,productList:null,classList:null,imgUrl:null,selectGroupId:0,childClaList:[],curPage:1,pageCount:1,isMore:2,saleMemberId:0,selectList:[],content:null}},components:{headerNav:a.a,imgUpload:s.a,more:r.a},watch:{productList:function(){1==this.curPage&&null!=this.productList&&this.productList.length}},mounted:function(){this.commonFn.setTitle("自选商品"),this.$store.commit("show_footer",!1),"-"==this.ids&&(this.ids=null),null!=this.ids&&(this.selectList=this.ids.split(",")),this.loadDatas(),this.classAllAjax(0)},beforeDestroy:function(){this.$store.commit("show_footer",!0)},methods:{selectGroup:function(e,t){var i=e.group_id;i!=this.selectGroupId&&(1==t&&(this.selectGroupId=i,this.productList=null,this.curPage=1),this.selectGroupId=i,1==e.is_child?this.classAllAjax(i):(this.childClaList=null,this.loadDatas()))},isCheck:function(e,t){e.isCheck=!e.isCheck,this.$set(this.productList,t,e);var i=e.id;if(e.isCheck)this.$set(this.selectList,this.selectList.length,i);else for(var a=0;a<this.selectList.length;a++)if(this.selectList[a]==i){this.$delete(this.selectList,a);break}},loadDatas:function(){var e=this;if(3!=this.isMore&&1!=this.isMore){this.isMore=1;var t={busId:e.busId,url:location.href,browerType:e.$store.state.browerType,curPage:this.curPage,proName:this.content};this.selectGroupId>0&&(t.groupId=this.selectGroupId),e.ajaxRequest({url:h5App.activeAPI.seller_find_product_post,data:t,success:function(t){var i=t.data;e.imgUrl=t.imgUrl;var a=i.page;e.saleMemberId=i.saleMemberId,e.curPage=a.curPage,e.pageCount=a.pageCount;var s=a.subList;if(null==s||0==s.length)return void(e.isMore=3);var r=e.selectList;if(null!=r&&r.length>0&&s.forEach(function(e,t){for(var i=0;i<r.length;i++){if(r[i]==e.id){e.isCheck=!0;break}}}),1===e.curPage?e.productList=s:e.productList=e.productList.concat(s)||[],e.isMore=1,e.curPage>=e.pageCount)return void(e.isMore=3);e.isMore=2,e.curPage++}})}},classAllAjax:function(e){var t=this;this.ajaxRequest({url:h5App.activeAPI.phoneProduct_classAll_post,data:{shopId:0,busId:this.busId,groupId:e||0},success:function(i){if(t.isMore=1,e>0)return void(t.childClaList=i.data);if(null!=t.classList)t.classList=i.data;else{t.classList=i.data;var a={group_id:0,group_name:"全部",is_child:0,shop_id:""};t.classList.unshift(a)}}})},save:function(){var e=this.selectList;if(null==e||0==e.length)return void this.$store.commit("error_msg","请选择商品");this.$router.push("/seller/mallset/"+this.busId+"/2/"+e.toString())},search:function(){this.content;this.curPage=1,this.selectGroupId=0,this.loadDatas()},toProductDetail:function(e){var t=this.saleMemberId;this.$router.push("/goods/details/"+e.shop_id+"/"+e.user_id+"/0/"+e.id+"/0/"+t+"/0")},back:function(){var e=this.ids;null==e&&(e="-"),this.$router.push("/seller/mallset/"+this.busId+"/2/"+e)}}}},"l4l+":function(e,t,i){"use strict";function a(e){i("LVUN")}var s=i("Ih1W"),r=i("OmNo"),o=i("0HdQ"),n=a,d=o(s.a,r.a,!1,n,"data-v-6e84d8ee",null);t.a=d.exports},mdOd:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"shop-header"},[i("div",{staticClass:"header-nav fs42"},e._l(e.headers,function(t){return i("div",{key:t.id,staticClass:"header-itme",class:{"shop-font":t.id==e.selectNav||e.selectId==t.id},on:{click:function(i){e.selects(t.id)}}},[i("p",{domProps:{textContent:e._s(t.name)}}),e._v(" "),i("em",{staticClass:"shop-bg"})])}))])},s=[],r={render:a,staticRenderFns:s};t.a=r},mhRB:function(e,t,i){"use strict";t.a={props:["headers","status","selectId","isCanSelect"],data:function(){return{selectNav:""}},mounted:function(){this.selectNav=this.$route.params.type||0},watch:{$route:function(){this.selectNav=this.$route.params.type||0,this.onValue(this.selectNav)}},methods:{selects:function(e){if(-1!=e){if(!this.isCanSelect&&void 0!=this.isCanSelect)return void this.$emit("isCanSelect",e);this.selectNav=e,this.onValue(e)}},onValue:function(e){this.$emit("update:type",e),this.$emit("type-change",e)}}}},qQVQ:function(e,t,i){"use strict";function a(e){i("syIi")}Object.defineProperty(t,"__esModule",{value:!0});var s=i("dDlH"),r=i("3WVD"),o=i("0HdQ"),n=a,d=o(s.a,r.a,!1,n,"data-v-3912eefc",null);t.default=d.exports},syIi:function(e,t,i){var a=i("O+Ev");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("8bSs")("b0b66d6c",a,!0)},uotU:function(e,t,i){"use strict";function a(e){i("Kjsr")}var s=i("OWAf"),r=i.n(s),o=i("1DU7"),n=i("0HdQ"),d=a,c=n(r.a,o.a,!1,d,null,null);t.a=c.exports},xeBC:function(e,t,i){t=e.exports=i("BkJT")(!1),t.push([e.i,".shop-header[data-v-c9eb2cf0]{top:0}.shop-header .header-nav[data-v-c9eb2cf0]{height:.98666667rem}.shop-header .header-nav em[data-v-c9eb2cf0]{height:.04rem;width:100%;display:none}.shop-header[data-v-c9eb2cf0]{width:100%;background:#fff}.shop-header .header-nav .header-itme[data-v-c9eb2cf0],.shop-header .header-nav[data-v-c9eb2cf0]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.shop-header .header-nav .header-itme[data-v-c9eb2cf0]{position:relative;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:center;-o-box-pack:center;box-pack:center;-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-webkit-box-orient:vertical;-o-box-orient:vertical;box-orient:vertical}.shop-header .header-nav a[data-v-c9eb2cf0]{display:block;text-align:center}.shop-header .header-nav .shop-font[data-v-c9eb2cf0]{color:#4e95ef}.shop-header .header-nav .shop-bg[data-v-c9eb2cf0]{background:#4e95ef}",""])}});