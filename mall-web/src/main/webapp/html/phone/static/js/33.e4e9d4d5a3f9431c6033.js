webpackJsonp([33],{"3cXf":function(e,t,o){e.exports={default:o("I4CF"),__esModule:!0}},"5hYG":function(e,t,o){var a=o("iPPz");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);o("8bSs")("55ace124",a,!0)},"8VVC":function(e,t,o){"use strict";function a(e){o("5hYG")}Object.defineProperty(t,"__esModule",{value:!0});var i=o("GuNr"),n=o("CNRD"),r=o("0HdQ"),c=a,s=r(i.a,n.a,!1,c,"data-v-06c1242c",null);t.default=s.exports},CNRD:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"shop-wrapper sale-wrapper"},[o("div",{staticClass:"seller-top"},[o("div",{staticClass:"seller-nav"},[o("i",{staticClass:"iconfont icon-jiantou-copy1",on:{click:e.back}}),e._v("我的二维码\n      ")])]),e._v(" "),o("div",{staticClass:"index-nav clearfix"},[o("div",{staticClass:"index-title"},[e._v("我的二维码")]),e._v(" "),o("div",{staticClass:"image-div"},[o("img",{attrs:{src:e.qrCodePath}})]),e._v(" "),o("div",{staticClass:"index-msg"},[e._v("将此链接或二维码图片发送给您的好友，并且好友\n完成下单购买，您就可以获得商家设置的丰厚佣金哦")])]),e._v(" "),o("wx-share",{attrs:{shareData:e.shareObj}})],1)},i=[],n={render:a,staticRenderFns:i};t.a=n},GuNr:function(e,t,o){"use strict";var a=o("kr9m"),i=o("oU/z");t.a={data:function(){return{type:this.$route.params.type,busId:this.$route.params.busId||sessionStorage.getItem("busId"),saleMemberId:this.$route.params.saleMemberId,qrCodePath:null,imgUrl:null,shareObj:null}},components:{defaultImg:a.a,wxShare:i.a},mounted:function(){this.commonFn.setTitle("我的二维码"),this.$store.commit("show_footer",!1),this.loadDatas(),this.qrCodePath=h5App.activeAPI.generate_qr_code_get+"?url=/seller/mallindex/"+this.busId+"/"+this.saleMemberId},beforeDestroy:function(){this.$store.commit("show_footer",!0)},methods:{loadDatas:function(e){var t=this,o={busId:t.busId,url:location.href,browerType:t.$store.state.browerType};t.ajaxRequest({url:h5App.activeAPI.seller_two_code_post,data:o,success:function(e){var o=e.data;t.imgUrl=e.imgUrl,t.getWxShare(o)}})},getWxShare:function(e){var t=e.mallName||e.userName;1==t.split("的商城").length&&(t+="的商城");var o=e.mallIntroducation,a={title:t,desc:o,url:location.href,imgUrl:this.imgUrl+e.mallHeadPath,isOpenAllMenu:!0,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage"]};this.shareObj=a},back:function(){window.history.go(-1)}}}},Huuc:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"imgbox"},[o("div",{staticClass:"user-head-portrait",style:{backgroundImage:"url("+e.background+")"}}),e._v(" "),0==e.isHeadPortrait&&void 0==e.background?o("div",{staticClass:"default-img"},[o("i",{staticClass:"iconfont icon-tupianjiazaizhong-",staticStyle:{color:"#d6d6d6"}})]):e._e(),e._v(" "),1==e.isHeadPortrait&&void 0==e.background?o("div",{staticClass:"default-img"},[o("i",{staticClass:"iconfont icon-ren1"})]):e._e()])},i=[],n={render:a,staticRenderFns:i};t.a=n},I4CF:function(e,t,o){var a=o("0nnt"),i=a.JSON||(a.JSON={stringify:JSON.stringify});e.exports=function(e){return i.stringify.apply(i,arguments)}},MSfS:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},i=[],n={render:a,staticRenderFns:i};t.a=n},bQ04:function(e,t,o){"use strict";var a=o("3cXf"),i=o.n(a),n=o("fxnj"),r=o.n(n);t.a={props:{shareData:{default:{jsApiList:[],isOpenAllMenu:null}}},data:function(){return{wxObj:null,shareObj:null}},watch:{shareData:function(e,t){null!=e&&(this.shareObj=e,this.wxShare())}},beforeDestroy:function(){},beforeMount:function(){console.log(this.$store.state.browerType,"this.$store.state.browerType"),this.reloadUrl()},mounted:function(){this.getShareConfigData()},methods:{reloadUrl:function(){this.$store.state.firstUrl!=location.href&&1==this.$store.state.browerType&&location.reload()},getShareConfigData:function(){var e=this;e.ajaxRequest({url:h5App.activeAPI.wx_share_get,data:{url:location.href},type:"get",success:function(t){e.wxObj=t.data,console.log(e.wxObj,"_this.wxObj")}})},wxShare:function(){var e=this.shareData,t=this.wxObj;if(null==e||null==t)return null;console.log("---------",e,"------",t),r.a.config({debug:!0,appId:t.appid||null,timestamp:t.timestamp||null,nonceStr:t.nonce_str||null,signature:t.signature||null,jsApiList:e.jsApiList||["onMenuShareTimeline","onMenuShareAppMessage"]}),alert(" wx.config-------"+i()({debug:!0,appId:t.appid||null,timestamp:t.timestamp||null,nonceStr:t.nonce_str||null,signature:t.signature||null,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage"]})),r.a.ready(function(){r.a.onMenuShareAppMessage({title:e.title||"",desc:e.desc||"",link:e.url||"",imgUrl:e.imgUrl||"",success:function(){},cancel:function(){}}),alert("wx.onMenuShareAppMessage---"+i()({title:e.title||"",desc:e.desc||"",link:e.url||location.href,imgUrl:e.imgUrl||"",success:function(){},cancel:function(){}})),r.a.onMenuShareTimeline({title:e.title||"",link:e.url||location.href,imgUrl:e.imgUrl||"",success:function(){},cancel:function(){}})}),r.a.error(function(e){alert("error")})}}}},fxnj:function(e,t){!function(t,o){e.exports=function(e,t){function o(t,o,a){e.WeixinJSBridge?WeixinJSBridge.invoke(t,i(o),function(e){c(t,e,a)}):l(t,a)}function a(t,o,a){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){a&&a.trigger&&a.trigger(e),c(t,e,o)}):a?l(t,a):l(t,o)}function i(e){return e=e||{},e.appId=C.appId,e.verifyAppId=C.appId,e.verifySignType="sha1",e.verifyTimestamp=C.timestamp+"",e.verifyNonceStr=C.nonceStr,e.verifySignature=C.signature,e}function n(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function r(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function c(e,t,o){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var a=t.errMsg;a||(a=t.err_msg,delete t.err_msg,a=s(e,a),t.errMsg=a),o=o||{},o._complete&&(o._complete(t),delete o._complete),a=t.errMsg||"",C.debug&&!o.isInnerInvoke&&alert(JSON.stringify(t));var i=a.indexOf(":");switch(a.substring(i+1)){case"ok":o.success&&o.success(t);break;case"cancel":o.cancel&&o.cancel(t);break;default:o.fail&&o.fail(t)}o.complete&&o.complete(t)}function s(e,t){var o=e,a=g[o];a&&(o=a);var i="ok";if(t){var n=t.indexOf(":");i=t.substring(n+1),"confirm"==i&&(i="ok"),"failed"==i&&(i="fail"),-1!=i.indexOf("failed_")&&(i=i.substring(7)),-1!=i.indexOf("fail_")&&(i=i.substring(5)),i=i.replace(/_/g," "),i=i.toLowerCase(),("access denied"==i||"no permission to execute"==i)&&(i="permission denied"),"config"==o&&"function not exist"==i&&(i="ok"),""==i&&(i="fail")}return t=o+":"+i}function d(e){if(e){for(var t=0,o=e.length;o>t;++t){var a=e[t],i=h[a];i&&(e[t]=i)}return e}}function l(e,t){if(!(!C.debug||t&&t.isInnerInvoke)){var o=g[e];o&&(e=o),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function p(e){if(!(k||y||C.debug||"6.0.2">z||M.systemType<0)){var t=new Image;M.appId=C.appId,M.initTime=T.initEndTime-T.initStartTime,M.preVerifyTime=T.preVerifyEndTime-T.preVerifyStartTime,N.getNetworkType({isInnerInvoke:!0,success:function(e){M.networkType=e.networkType;var o="https://open.weixin.qq.com/sdk/report?v="+M.version+"&o="+M.isPreVerifyOk+"&s="+M.systemType+"&c="+M.clientVersion+"&a="+M.appId+"&n="+M.networkType+"&i="+M.initTime+"&p="+M.preVerifyTime+"&u="+M.url;t.src=o}})}}function f(){return(new Date).getTime()}function u(t){S&&(e.WeixinJSBridge?t():b.addEventListener&&b.addEventListener("WeixinJSBridgeReady",t,!1))}function m(){N.invoke||(N.invoke=function(t,o,a){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,i(o),a)},N.on=function(t,o){e.WeixinJSBridge&&WeixinJSBridge.on(t,o)})}if(!e.jWeixin){var h={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},g=function(){var e={};for(var t in h)e[h[t]]=t;return e}(),b=e.document,v=b.title,x=navigator.userAgent.toLowerCase(),w=navigator.platform.toLowerCase(),k=!(!w.match("mac")&&!w.match("win")),y=-1!=x.indexOf("wxdebugger"),S=-1!=x.indexOf("micromessenger"),_=-1!=x.indexOf("android"),I=-1!=x.indexOf("iphone")||-1!=x.indexOf("ipad"),z=function(){var e=x.match(/micromessenger\/(\d+\.\d+\.\d+)/)||x.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),T={initStartTime:f(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},M={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:I?1:_?2:-1,clientVersion:z,url:encodeURIComponent(location.href)},C={},A={_completes:[]},P={state:0,data:{}};u(function(){T.initEndTime=f()});var O=!1,V=[],N={config:function(e){C=e,l("config",e);var t=!1!==C.check;u(function(){if(t)o(h.config,{verifyJsApiList:d(C.jsApiList)},function(){A._complete=function(e){T.preVerifyEndTime=f(),P.state=1,P.data=e},A.success=function(e){M.isPreVerifyOk=0},A.fail=function(e){A._fail?A._fail(e):P.state=-1};var e=A._completes;return e.push(function(){p()}),A.complete=function(t){for(var o=0,a=e.length;a>o;++o)e[o]();A._completes=[]},A}()),T.preVerifyStartTime=f();else{P.state=1;for(var e=A._completes,a=0,i=e.length;i>a;++a)e[a]();A._completes=[]}}),C.beta&&m()},ready:function(e){0!=P.state?e():(A._completes.push(e),!S&&C.debug&&e())},error:function(e){"6.0.2">z||(-1==P.state?e(P.data):A._fail=e)},checkJsApi:function(e){var t=function(e){var t=e.checkResult;for(var o in t){var a=g[o];a&&(t[a]=t[o],delete t[o])}return e};o("checkJsApi",{jsApiList:d(e.jsApiList)},function(){return e._complete=function(e){if(_){var o=e.checkResult;o&&(e.checkResult=JSON.parse(o))}e=t(e)},e}())},onMenuShareTimeline:function(e){a(h.onMenuShareTimeline,{complete:function(){o("shareTimeline",{title:e.title||v,desc:e.title||v,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){a(h.onMenuShareAppMessage,{complete:function(){o("sendAppMessage",{title:e.title||v,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){a(h.onMenuShareQQ,{complete:function(){o("shareQQ",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){a(h.onMenuShareWeibo,{complete:function(){o("shareWeiboApp",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){a(h.onMenuShareQZone,{complete:function(){o("shareQZone",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){o("startRecord",{},e)},stopRecord:function(e){o("stopRecord",{},e)},onVoiceRecordEnd:function(e){a("onVoiceRecordEnd",e)},playVoice:function(e){o("playVoice",{localId:e.localId},e)},pauseVoice:function(e){o("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){o("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){a("onVoicePlayEnd",e)},uploadVoice:function(e){o("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){o("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){o("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){o("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},function(){return e._complete=function(e){if(_){var t=e.localIds;t&&(e.localIds=JSON.parse(t))}},e}())},getLocation:function(e){},previewImage:function(e){o(h.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){o("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){o("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===O?(O=!0,o("getLocalImgData",{localId:e.localId},function(){return e._complete=function(e){if(O=!1,V.length>0){var t=V.shift();wx.getLocalImgData(t)}},e}())):V.push(e)},getNetworkType:function(e){var t=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var o=e.subtype;if(delete e.subtype,o)e.networkType=o;else{var a=t.indexOf(":"),i=t.substring(a+1);switch(i){case"wifi":case"edge":case"wwan":e.networkType=i;break;default:e.errMsg="getNetworkType:fail"}}return e};o("getNetworkType",{},function(){return e._complete=function(e){e=t(e)},e}())},openLocation:function(e){o("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},o(h.getLocation,{type:e.type||"wgs84"},function(){return e._complete=function(e){delete e.type},e}())},hideOptionMenu:function(e){o("hideOptionMenu",{},e)},showOptionMenu:function(e){o("showOptionMenu",{},e)},closeWindow:function(e){e=e||{},o("closeWindow",{},e)},hideMenuItems:function(e){o("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){o("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){o("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){o("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){e=e||{},o("scanQRCode",{needResult:e.needResult||0,scanType:e.scanType||["qrCode","barCode"]},function(){return e._complete=function(e){if(I){var t=e.resultStr;if(t){var o=JSON.parse(t);e.resultStr=o&&o.scan_code&&o.scan_code.scan_result}}},e}())},openAddress:function(e){o(h.openAddress,{},function(){return e._complete=function(e){e=r(e)},e}())},openProductSpecificView:function(e){o(h.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,a=[],i=0,n=t.length;n>i;++i){var r=t[i],c={card_id:r.cardId,card_ext:r.cardExt};a.push(c)}o(h.addCard,{card_list:a},function(){return e._complete=function(e){var t=e.card_list;if(t){t=JSON.parse(t);for(var o=0,a=t.length;a>o;++o){var i=t[o];i.cardId=i.card_id,i.cardExt=i.card_ext,i.isSuccess=!!i.is_succ,delete i.card_id,delete i.card_ext,delete i.is_succ}e.cardList=t,delete e.card_list}},e}())},chooseCard:function(e){o("chooseCard",{app_id:C.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},function(){return e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e}())},openCard:function(e){for(var t=e.cardList,a=[],i=0,n=t.length;n>i;++i){var r=t[i],c={card_id:r.cardId,code:r.code};a.push(c)}o(h.openCard,{card_list:a},e)},consumeAndShareCard:function(e){o(h.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){o(h.chooseWXPay,n(e),e)},openEnterpriseRedPacket:function(e){o(h.openEnterpriseRedPacket,n(e),e)},startSearchBeacons:function(e){o(h.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){o(h.stopSearchBeacons,{},e)},onSearchBeacons:function(e){a(h.onSearchBeacons,e)},openEnterpriseChat:function(e){o("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)}},j=1,L={};return b.addEventListener("error",function(e){if(!_){var t=e.target,o=t.tagName,a=t.src;if("IMG"==o||"VIDEO"==o||"AUDIO"==o||"SOURCE"==o){if(-1!=a.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var i=t["wx-id"];if(i||(i=j++,t["wx-id"]=i),L[i])return;L[i]=!0,wx.getLocalImgData({localId:a,success:function(e){t.src=e.localData}})}}}},!0),b.addEventListener("load",function(e){if(!_){var t=e.target,o=t.tagName;if(t.src,"IMG"==o||"VIDEO"==o||"AUDIO"==o||"SOURCE"==o){var a=t["wx-id"];a&&(L[a]=!1)}}},!0),t&&(e.wx=e.jWeixin=N),N}}(t)}(window)},iPPz:function(e,t,o){t=e.exports=o("BkJT")(!1),t.push([e.i,".ik-box[data-v-06c1242c]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.box-sizing[data-v-06c1242c]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}body[data-v-06c1242c]{background:#f0f2f5;color:#333}.shop-wrapper[data-v-06c1242c]{width:100%;position:relative;max-width:1242px;margin:0 auto}.shop-main[data-v-06c1242c]{width:100%}.shop-main .shop-list[data-v-06c1242c]{padding:.26666667rem 0}.shop-main .shop-add-itme[data-v-06c1242c]{width:100%;background:#fff;padding-top:.33333333rem;padding-left:.46666667rem;height:2.46666667rem}.shop-main .shop-add-itme .shop-add-txt[data-v-06c1242c]{padding-bottom:.13333333rem}.shop-main .shop-add-itme .add-left[data-v-06c1242c]{float:left;width:93%}.shop-main .shop-add-itme .add-left p[data-v-06c1242c]{margin-bottom:.06666667rem}.shop-main .shop-add-itme .add-left p span[data-v-06c1242c]{margin-left:.26666667rem}.shop-main .shop-add-itme .add-right[data-v-06c1242c]{float:left;width:7%;color:#d1d2d4;height:100%;position:relative}.shop-main .shop-add-itme .add-right i[data-v-06c1242c]{font-size:.32rem;position:absolute;top:.33333333rem}.shop-main .shop-add-itme .shop-add-footer[data-v-06c1242c]{width:96%;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify}.shop-main .shop-add-itme .shop-add-footer .shop-add-button1[data-v-06c1242c]{padding:.18666667rem 0}.shop-main .shop-add-itme .shop-add-footer .shop-add-button1 i[data-v-06c1242c]{width:.35333333rem;height:.35333333rem;background:#d1d2d4;color:#fff;vertical-align:0}.shop-main .shop-add-itme .shop-add-footer .shop-add-button2 span[data-v-06c1242c]{display:inline-block;padding:.18666667rem 0}.shop-main .shop-add-itme .shop-add-footer .shop-add-button2 i[data-v-06c1242c]{margin-right:.06666667rem;font-size:.32rem;color:#d1d2d4}.em-tag[data-v-06c1242c]{background:#e4393c;margin-right:.06666667rem}.em-flag[data-v-06c1242c],.em-tag[data-v-06c1242c]{color:#fff;padding:3px 5px 2px;line-height:1;display:inline-block;border-radius:2px;font-size:.18666667rem}.em-flag[data-v-06c1242c]{background:-moz-linear-gradient(right,#f85e65,#e7242c)}.em-choice[data-v-06c1242c],.em-input[data-v-06c1242c],.em-search[data-v-06c1242c]{color:#333;padding:.17333333rem .25333333rem;line-height:1;margin-right:.24rem;display:inline-block;border-radius:2px;font-size:.18666667rem;background:#f3f2f8;border-radius:3px}.em-input[data-v-06c1242c]{width:.8rem;vertical-align:bottom;height:.6rem;border:0;margin-right:3px;padding:2px;text-align:center}.em-search[data-v-06c1242c]{margin-bottom:.18666667rem;background:#d7d9dc}.em-nav[data-v-06c1242c]{background:#fbd3d3;padding:.13333333rem .2rem;border-radius:3px}.shop-max-button[data-v-06c1242c]{width:100%;height:100%;border-radius:5px;color:hsla(0,0%,100%,.3);display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-align:center;-o-box-align:center;box-align:center;-webkit-box-pack:center;-o-box-pack:center;box-pack:center}.shop-footer-ab[data-v-06c1242c]{position:absolute}.shop-footer-ab[data-v-06c1242c],.shop-footer[data-v-06c1242c]{width:100%;bottom:0}.shop-footer-ab .shop-logo[data-v-06c1242c],.shop-footer .shop-logo[data-v-06c1242c]{margin:0 auto;width:3rem;height:.46666667rem;background:url("+o("DDBx")+');background-size:100%;margin-bottom:.24rem}.shop-footer-fixed[data-v-06c1242c]{position:fixed;bottom:0;left:0}.shop-footer-fixed .footer-nav[data-v-06c1242c]{border-top:1px solid #e2e2e2;height:1.05333333rem}.shop-footer-fixed .footer-nav i[data-v-06c1242c]{font-size:.4rem;margin-bottom:.06666667rem}.shop-header[data-v-06c1242c]{top:0;background:#fff;z-index:2}.shop-header .header-nav[data-v-06c1242c]{height:.98666667rem}.shop-header .header-nav em[data-v-06c1242c]{height:.04rem;width:100%;position:absolute;bottom:0;display:none}.shop-fl[data-v-06c1242c]{float:left}.shop-fr[data-v-06c1242c]{float:right}.shop-hide[data-v-06c1242c]{display:none}.shop-show[data-v-06c1242c]{display:block}.shop-box[data-v-06c1242c]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.shop-inblock[data-v-06c1242c]{display:inline-block}.shop-box-center[data-v-06c1242c],.shop-box-justify[data-v-06c1242c]{display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-pack:justify;-o-box-pack:justify;box-pack:justify}.shop-box-center[data-v-06c1242c]{-webkit-box-align:center;-o-box-align:center;box-align:center}.clearfix[data-v-06c1242c]{zoom:1;_zoom:1;clear:both}.clearfix[data-v-06c1242c]:after{clear:both;content:"";display:block;width:0;height:0;visibility:hidden}.overflow-x[data-v-06c1242c]{overflow:hidden;overflow-x:hidden}.shop-textl[data-v-06c1242c]{text-align:left}.shop-textr[data-v-06c1242c]{text-align:right}.shop-textc[data-v-06c1242c]{text-align:center}.text-overflow[data-v-06c1242c]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.text-force-wrap[data-v-06c1242c]{word-break:break-all;white-space:pre-wrap}.text-not-wrap[data-v-06c1242c]{white-space:nowrap}.text-more-overflow[data-v-06c1242c]{overflow:hidden;position:relative;text-align:justify}.text-more-overflow[data-v-06c1242c]:after{content:" ... ";position:absolute;bottom:1px;right:0;padding:0 1px 1px 2px;background:#fff}.border-radius[data-v-06c1242c],.border[data-v-06c1242c]{position:relative;border-bottom:1px solid #e0e0e0}@media (-webkit-min-device-pixel-ratio:2){.border[data-v-06c1242c]{border:none;background-image:-webkit-gradient(linear,left top,left bottom,from(0),color-stop(#fff),color-stop(50%,#d9d9d9),color-stop(50%,transparent));background-image:linear-gradient(0,#fff,#d9d9d9 50%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}.fs0[data-v-06c1242c]{font-size:0}.fs26[data-v-06c1242c]{font-size:.17333333rem}.fs28[data-v-06c1242c]{font-size:.18666667rem!important}.fs30[data-v-06c1242c]{font-size:.2rem!important}.fs32[data-v-06c1242c]{font-size:.21333333rem!important}.fs34[data-v-06c1242c]{font-size:.22666667rem!important}.fs36[data-v-06c1242c]{font-size:.24rem}.fs40[data-v-06c1242c]{font-size:.26666667rem}.fs42[data-v-06c1242c]{font-size:.28rem}.fs44[data-v-06c1242c]{font-size:.29333333rem}.fs45[data-v-06c1242c]{font-size:.3rem}.fs46[data-v-06c1242c]{font-size:.30666667rem}.fs48[data-v-06c1242c]{font-size:.32rem!important}.fs50[data-v-06c1242c]{font-size:.33333333rem}.fs52[data-v-06c1242c]{font-size:.34666667rem}.fs54[data-v-06c1242c]{font-size:.36rem}.fs56[data-v-06c1242c]{font-size:.37333333rem}.fs60[data-v-06c1242c]{font-size:.4rem}.fs64[data-v-06c1242c]{font-size:.42666667rem}.fs66[data-v-06c1242c]{font-size:.44rem}.fs76[data-v-06c1242c]{font-size:.50666667rem}.fs70[data-v-06c1242c]{font-size:.46666667rem}.fs100[data-v-06c1242c]{font-size:.66666667rem}.shop-bg[data-v-06c1242c]{background:#e4393c;color:#fff}.shop-font[data-v-06c1242c]{color:#e4393c}.shop-font em[data-v-06c1242c]{display:block!important}.shopRgba[data-v-06c1242c]{color:hsla(0,0%,100%,.5)!important}.shopGreen[data-v-06c1242c]{color:#25ae5f}.shopFont[data-v-06c1242c]{color:#e4393c}.shopBlue[data-v-06c1242c]{color:#378ae8}.shopBlue-bg[data-v-06c1242c]{background:#378ae8}.shopGray[data-v-06c1242c]{color:#87858f}.shopRose-bg[data-v-06c1242c]{background:#f63854}.shopFff[data-v-06c1242c]{color:hsla(0,0%,100%,.4)!important}.shop-yellow[data-v-06c1242c]{background:#ffb12e}.shopborder[data-v-06c1242c]{color:#e4393c;border:1px solid #e4393c}.shop-border[data-v-06c1242c]{color:#000;border:1px solid #87858f}.shop-switch[data-v-06c1242c]:checked{border-color:#e4393c!important;background-color:#e4393c!important}.icon-fenglei[data-v-06c1242c]{display:block;margin:0 auto;width:.32rem;height:.32rem;background:url('+o("EDvs")+") 0 0 no-repeat;background-size:100% 100%}.icon-fenglei2[data-v-06c1242c]{display:block;margin:0 auto;width:.32rem;height:.32rem;background:url("+o("5sCz")+') 0 0 no-repeat;background-size:100% 100%}.el-checkbox__inner input[data-v-06c1242c]{display:none}.el-checkbox__inner input:checked+span[data-v-06c1242c]:after{-webkit-box-sizing:content-box;box-sizing:content-box;content:"";border:2px solid #e4393c;border-left:0;border-top:0;height:8px;left:5px;position:absolute;top:2px;-webkit-transform:rotate(45deg) scaleY(1);transform:rotate(45deg) scaleY(1);width:4px;-webkit-transition:-webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transition:-webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transition:transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transition:transform .15s cubic-bezier(.71,-.46,.88,.6) .05s,-webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;-webkit-transform-origin:center;transform-origin:center}.el-checkbox__inner span[data-v-06c1242c]{display:inline-block;position:relative;border:1px solid #bfcbd9;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;width:18px;height:18px;background-color:#fff;z-index:1;-webkit-transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);vertical-align:middle}@keyframes dialogShow-data-v-06c1242c{0%{bottom:-100%}to{bottom:0}}@-webkit-keyframes dialogShow-data-v-06c1242c{0%{bottom:-100%}to{bottom:0}}.switch[data-v-06c1242c]{display:inline-block;text-align:start;text-indent:0;text-transform:none;text-shadow:none;word-spacing:normal;letter-spacing:normal;cursor:pointer;-webkit-tap-highlight-color:transparent;-webkit-rtl-ordering:logical;-webkit-user-select:text;text-rendering:auto;-webkit-writing-mode:horizontal-tb;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;outline:0;border:1px solid #d2d2d2;background-color:#d2d2d2;-webkit-appearance:none;-moz-appearance:none;appearance:none;vertical-align:middle}.small-switch[data-v-06c1242c]{width:45px;height:24px;border-radius:14px}.switch[data-v-06c1242c]:before{position:absolute;top:0;left:0;background-color:#d2d2d2;text-align:right;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.small-switch[data-v-06c1242c]:before{width:21px;height:21px;border-radius:15px;line-height:27px;padding-right:10px}.switch[data-v-06c1242c]:after{position:absolute;top:0;left:0;background-color:#fff;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.4);box-shadow:0 1px 3px rgba(0,0,0,.4);content:"";-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.small-switch[data-v-06c1242c]:after{width:21px;height:21px;border-radius:15px;line-height:22px;padding-right:10px}.small-switch[data-v-06c1242c]:checked:after{width:21px;height:21px;border-radius:20px;-webkit-transform:translateX(21px);transform:translateX(21px)}.style-main-bg[data-v-06c1242c]{background:#e4393c;color:#fff}.style-main-font[data-v-06c1242c]{color:#e4393c}.style-main-border[data-v-06c1242c]{color:#e4393c;border:1px solid #e4393c}.style-witch[data-v-06c1242c]:checked{border-color:#e4393c;background-color:#e4393c}.style-middle-bg[data-v-06c1242c]{background:#ffb12e;color:#fff}.style-middle-font[data-v-06c1242c]{color:#ffb12e}.style-right-bg[data-v-06c1242c]{background:#fff;color:#000}.style-right-font[data-v-06c1242c]{color:#fff}.dialog-input-main .dialog-input-box[data-v-06c1242c]{width:100%;font-size:0;padding:0 .53333333rem}.dialog-input-main .dialog-input-box .dialog-input[data-v-06c1242c]{width:100%;padding:.16666667rem;margin-bottom:.13333333rem;border:1px solid #e1e1e3;border-radius:3px}.dialog-input-main .dialog-input-box .dialog-input input[data-v-06c1242c]{width:100%;height:100%;border:0}.dialog-input-main .dialog-input-box .dialog-code input[data-v-06c1242c]{width:68%}.dialog-input-main .dialog-input-box .dialog-code span[data-v-06c1242c]{padding:.16666667rem 0}.dialog-input-main .dialog-bottom[data-v-06c1242c]{width:100%;font-size:0;display:-webkit-box}.dialog-input-main .dialog-bottom .dialog-button1[data-v-06c1242c]{text-align:center;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-flex:1;-o-box-flex:1;box-flex:1;-webkit-box-pack:center;-o-box-pack:center;box-pack:center;color:#25ae5f;padding:.3rem 0}.dialog-input-main .dialog-bottom .dialog-button2[data-v-06c1242c]{margin:8% auto;text-align:center;display:block;width:70%;background:#e4393c;color:#fff;padding:.2rem 0;border-radius:5px}.sale-wrapper[data-v-06c1242c]{width:100%;position:relative}.sale-wrapper .seller-top[data-v-06c1242c]{position:fixed;top:0;z-index:2;width:100%}.sale-wrapper .seller-top .seller-nav[data-v-06c1242c]{height:.79333333rem;line-height:.79333333rem;padding-left:.33333333rem;background:#f0f2f5;font-size:.3rem}.sale-wrapper .seller-top .seller-nav i[data-v-06c1242c]{color:#b2b2b2;margin-right:.16666667rem}.sale-wrapper .seller-top[data-v-06c1242c]{height:4vh}.sale-wrapper .index-nav[data-v-06c1242c]{margin-top:6vh;background:#fff;height:94vh}.sale-wrapper .index-nav .index-title[data-v-06c1242c]{font-size:.33333333rem;text-align:center;padding-top:.73333333rem}.sale-wrapper .index-nav .image-div[data-v-06c1242c]{width:4rem;height:4rem;margin:.8rem auto}.sale-wrapper .index-nav .index-msg[data-v-06c1242c]{font-size:.24rem;color:#666;width:74vw;margin:0 auto}',""])},kr9m:function(e,t,o){"use strict";function a(e){o("ydrn")}var i=o("lGvr"),n=o("Huuc"),r=o("0HdQ"),c=a,s=r(i.a,n.a,!1,c,"data-v-6bd4cf5e",null);t.a=s.exports},lGvr:function(e,t,o){"use strict";t.a={props:["background","isHeadPortrait"],data:function(){return{}},mounted:function(){}}},"oU/z":function(e,t,o){"use strict";var a=o("bQ04"),i=o("MSfS"),n=o("0HdQ"),r=n(a.a,i.a,!1,null,null,null);t.a=r.exports},pbdT:function(e,t,o){t=e.exports=o("BkJT")(!1),t.push([e.i,".ik-box[data-v-6bd4cf5e]{display:-webkit-box;display:-moz-box;display:-o-box;display:box}.box-sizing[data-v-6bd4cf5e]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.text-overflow[data-v-6bd4cf5e]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.imgbox[data-v-6bd4cf5e]{width:101%;height:101%;position:relative}.user-head-portrait[data-v-6bd4cf5e]{width:100%;height:100%;background-size:100%;background-repeat:no-repeat;background-position:50%;position:relative;z-index:1}.default-img[data-v-6bd4cf5e]{width:100%;height:100%;position:absolute;top:0;left:0;z-index:0;line-height:1;display:-webkit-box;display:-moz-box;display:-o-box;display:box;-webkit-box-pack:center;-o-box-pack:center;box-pack:center;-webkit-box-align:center;-o-box-align:center;box-align:center}.default-img .iconfont[data-v-6bd4cf5e]{font-size:1.33333333rem;color:#fff}",""])},ydrn:function(e,t,o){var a=o("pbdT");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);o("8bSs")("c8df441a",a,!0)}});