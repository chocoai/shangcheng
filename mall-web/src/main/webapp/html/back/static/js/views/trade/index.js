webpackJsonp([6],{275:function(e,t,a){a(571);var n=a(0)(a(432),a(704),null,null);e.exports=n.exports},340:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),s=a(20),r=a(275),o=a.n(r),i=[{path:"/",component:o.a}];n.default.use(s.a);var l=new s.a({routes:i});new n.default({router:l}).$mount("#app")},432:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(a(2),a(4)),s=a.n(n);a(50);t.default={components:{contentNo:s.a},data:function(){return{dataCount:{yesterCount:"",sevenCount:"",settlementCount:"",usableBalance:""},subList:[],page:{},searchData:{curPage:"",orderNo:"",status:"0",startTime:"",endTime:""},isShow:!0,isPage:!0,activeName:"index",activeName2:"0",pickerOptions2:{disabledDate:function(e){return e.getTime()>Date.now()},shortcuts:[{text:"近7天",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"近30天",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}}]},value7:"",loading:!0,path:""}},methods:{getTurnoverCount:function(){var e=this;this.ajaxRequest({url:DFshop.activeAPI.getTurnoverCount_post,success:function(t){e.dataCount=t.data,e.dataCount.yesterCount="¥ "+t.data.yesterCount,e.dataCount.sevenCount="¥ "+t.data.sevenCount,e.dataCount.settlementCount="¥ "+t.data.settlementCount,e.dataCount.usableBalance="¥ "+t.data.usableBalance}})},search:function(){var e=this;e.searchData.curPage=1,e.activeName2=e.searchData.status,e.tradeList(e.searchData)},changePicker:function(e){var t=this;if(""!=e){var a=e.split(" - ");t.searchData.startTime=a[0],t.searchData.endTime=a[1]}else t.searchData.startTime="",t.searchData.endTime=""},exportTrade:function(){var e=this;e.tradeList(e.searchData);var t="?1=1";""!=e.searchData.orderNo&&(t+="&orderNo="+e.searchData.orderNo),""!=e.searchData.status&&(t+="&status="+e.searchData.status),null!=e.searchData.startTime&&(t+="&startTime="+e.searchData.startTime),null!=e.searchData.endTime&&(t+="&endTime="+e.searchData.endTime),window.open(DFshop.activeAPI.exportTradeOrder_get+t)},tradeList:function(e){var t=this;t.loading=!0,t.ajaxRequest({url:DFshop.activeAPI.tradeList_post,data:e,success:function(e){t.subList=e.data.page.subList,t.page={curPage:e.data.page.curPage,pageCount:e.data.page.pageCount,pageSize:e.data.page.pageSize,rowCount:e.data.page.rowCount},t.loading=!1}})},handleClick:function(e){var t=this;t.searchData.curPage=1,t.searchData.status=e,t.tradeList(t.searchData)},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e),this.searchData.curPage=e,this.tradeList(this.searchData)}},mounted:function(){var e=this,t=window.location.href;e.path=t.split("views")[0],e.isAdminUser({success:function(t){-1!=t.code&&(e.getTurnoverCount(),e.searchData.curPage=1,e.tradeList(e.searchData))}})}}},571:function(e,t){},704:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"index-wrapper"},[e.isShow?a("div",{staticClass:"index-main"},[a("div",{staticClass:"index-msg"},[a("div",{staticClass:"index-item"},[a("div",[a("p",{staticClass:"index-item-money",staticStyle:{color:"#ff4949"},domProps:{textContent:e._s(e.dataCount.yesterCount)}},[e._v("￥1971.00\r\n                ")]),e._v(" "),a("p",[e._v("昨日营业额（截止至今日0点）")])])]),e._v(" "),a("div",{staticClass:"index-item"},[a("div",[a("p",{staticClass:"index-item-money",domProps:{textContent:e._s(e.dataCount.sevenCount)}},[e._v("￥8958.00\r\n                ")]),e._v(" "),a("p",[e._v("7日营业额（截止至今日0点）")])])])]),e._v(" "),a("div",{staticClass:"index-shopInfo"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.searchData}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"订单号"},model:{value:e.searchData.orderNo,callback:function(t){e.$set(e.searchData,"orderNo","string"==typeof t?t.trim():t)},expression:"searchData.orderNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"订单状态 :"}},[a("el-select",{attrs:{placeholder:"全部"},model:{value:e.searchData.status,callback:function(t){e.$set(e.searchData,"status",t)},expression:"searchData.status"}},[a("el-option",{attrs:{label:"全部",value:"0"}}),e._v(" "),a("el-option",{attrs:{label:"成功",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"进行中",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"退款",value:"3"}}),e._v(" "),a("el-option",{attrs:{label:"失败",value:"4"}})],1)],1),e._v(" "),a("el-form-item",[a("span",{staticClass:"demonstration",staticStyle:{"font-size":"13px"}},[e._v("下单时间 :")]),e._v(" "),a("el-date-picker",{attrs:{type:"daterange",align:"right",placeholder:"选择日期范围","value-format":"yyyy-MM-dd","picker-options":e.pickerOptions2},on:{change:e.changePicker},model:{value:e.value7,callback:function(t){e.value7=t},expression:"value7"}})],1),e._v(" "),a("div"),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.search()}}},[e._v("筛选")]),e._v(" "),a("el-button",{attrs:{type:"primary",disabled:null==e.subList},on:{click:function(t){e.exportTrade()}}},[e._v("批量导出")])],1)],1),e._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticClass:"index-content",attrs:{"element-loading-text":"拼命加载中"}},[a("el-tabs",{attrs:{type:"card"},on:{"tab-click":function(t){e.handleClick(e.activeName2)}},model:{value:e.activeName2,callback:function(t){e.activeName2=t},expression:"activeName2"}},[a("el-tab-pane",{attrs:{label:"全部",name:"0"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"成功",name:"1"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"进行中",name:"2"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"退款",name:"3"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"失败",name:"4"}})],1),e._v(" "),a("div",{staticClass:"index-from"},[a("el-table",{attrs:{data:e.subList}},[a("el-table-column",{attrs:{prop:"createTime",label:"时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(e._s(e._f("format")(t.row.createTime)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"proName",label:"商品名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"orderNo",label:"订单号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"memberName",label:"买方"}}),e._v(" "),a("el-table-column",{attrs:{prop:"orderMoney",label:"支付金额(元)"}}),e._v(" "),a("el-table-column",{attrs:{label:"状态","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.status?a("span",[e._v("\r\n                      成功\r\n                    ")]):e._e(),e._v(" "),2==t.row.status?a("span",[e._v("\r\n                      进行中\r\n                    ")]):e._e(),e._v(" "),3==t.row.status?a("span",[e._v("\r\n                      退款\r\n                    ")]):e._e(),e._v(" "),4==t.row.status?a("span",[e._v("\r\n                      失败\r\n                    ")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("a",{attrs:{href:e.path+"views/order/index.html#/detail/"+t.row.id}},[e._v("查看")])]}}])})],1)],1),e._v(" "),e.page.pageCount>0?a("div",{staticClass:"block shop-textr"},[a("el-pagination",{attrs:{"current-page":e.page.curPage,"page-size":e.page.pageSize,layout:"prev, pager, next, jumper",total:e.page.rowCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1):e._e()],1)]):a("contentNo",{attrs:{show:"trade"}})],1)},staticRenderFns:[]}}},[340]);