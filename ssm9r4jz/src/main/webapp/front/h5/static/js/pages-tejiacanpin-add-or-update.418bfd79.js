(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tejiacanpin-add-or-update"],{"1b80":function(e,r,t){var i=t("8e6c");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=t("4f06").default;n("ee6a4856",i,!0,{sourceMap:!1,shadowMode:!1})},3466:function(e,r,t){"use strict";t.r(r);var i=t("c917"),n=t("6362");for(var a in n)"default"!==a&&function(e){t.d(r,e,(function(){return n[e]}))}(a);t("96ad");var o,l=t("f0c5"),s=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"8155e48a",null,!1,i["a"],o);r["default"]=s.exports},6362:function(e,r,t){"use strict";t.r(r);var i=t("7582"),n=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(r,e,(function(){return i[e]}))}(a);r["default"]=n.a},7582:function(e,r,t){"use strict";var i=t("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t("ac6a"),t("96cf");var n=i(t("3b8d")),a=i(t("e2b1")),o={data:function(){return{ruleForm:{canpinbianhao:this.getUUID(),canpinmingcheng:"",canpinfenlei:"",yuanjiage:"",huodongjiage:"",shuliang:"",tupian:"",xiangqing:"",reversetime:""},canpinfenleiOptions:[],canpinfenleiIndex:0,user:{}}},components:{wPicker:a.default},computed:{},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(r){var t,i,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(t);case 3:return i=e.sent,this.user=i.data,e.next=7,this.$api.option("canpinfenlei","canpinfenlei",{});case 7:if(i=e.sent,this.canpinfenleiOptions=i.data,this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid),!r.id){e.next=17;break}return this.ruleForm.id=r.id,e.next=15,this.$api.info("tejiacanpin",this.ruleForm.id);case 15:i=e.sent,this.ruleForm=i.data;case 17:if(!r.cross){e.next=51;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 20:if((e.t1=e.t0()).done){e.next=51;break}if(a=e.t1.value,"canpinbianhao"!=a){e.next=25;break}return this.ruleForm.canpinbianhao=n[a],e.abrupt("continue",20);case 25:if("canpinmingcheng"!=a){e.next=28;break}return this.ruleForm.canpinmingcheng=n[a],e.abrupt("continue",20);case 28:if("canpinfenlei"!=a){e.next=31;break}return this.ruleForm.canpinfenlei=n[a],e.abrupt("continue",20);case 31:if("yuanjiage"!=a){e.next=34;break}return this.ruleForm.yuanjiage=n[a],e.abrupt("continue",20);case 34:if("huodongjiage"!=a){e.next=37;break}return this.ruleForm.huodongjiage=n[a],e.abrupt("continue",20);case 37:if("shuliang"!=a){e.next=40;break}return this.ruleForm.shuliang=n[a],e.abrupt("continue",20);case 40:if("tupian"!=a){e.next=43;break}return this.ruleForm.tupian=n[a],e.abrupt("continue",20);case 43:if("xiangqing"!=a){e.next=46;break}return this.ruleForm.xiangqing=n[a],e.abrupt("continue",20);case 46:if("reversetime"!=a){e.next=49;break}return this.ruleForm.reversetime=n[a],e.abrupt("continue",20);case 49:e.next=20;break;case 51:this.styleChange();case 52:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},reversetimeConfirm:function(e){console.log(e),this.ruleForm.reversetime=e.result,this.$forceUpdate()},canpinfenleiChange:function(e){this.canpinfenleiIndex=e.target.value,this.ruleForm.canpinfenlei=this.canpinfenleiOptions[this.canpinfenleiIndex]},tupianTap:function(){var e=this;this.$api.upload((function(r){e.ruleForm.tupian=e.$base.url+"upload/"+r.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.yuanjiage||this.$validate.isIntNumer(this.ruleForm.yuanjiage)){e.next=3;break}return this.$utils.msg("原价格应输入整数"),e.abrupt("return");case 3:if(!this.ruleForm.huodongjiage||this.$validate.isIntNumer(this.ruleForm.huodongjiage)){e.next=6;break}return this.$utils.msg("活动价格应输入整数"),e.abrupt("return");case 6:if(!this.ruleForm.shuliang||this.$validate.isIntNumer(this.ruleForm.shuliang)){e.next=9;break}return this.$utils.msg("数量应输入整数"),e.abrupt("return");case 9:if(!this.ruleForm.id){e.next=14;break}return e.next=12,this.$api.update("tejiacanpin",this.ruleForm);case 12:e.next=16;break;case 14:return e.next=16,this.$api.add("tejiacanpin",this.ruleForm);case 16:this.$utils.msgBack("提交成功");case 17:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,t=r.getFullYear(),i=r.getMonth()+1,n=r.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(t,"-").concat(i,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};r.default=o},"8e6c":function(e,r,t){var i=t("24fb");r=i(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-8155e48a]{padding:%?20?%}.content[data-v-8155e48a]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20201207/18e60648bb684cf196230ae29d4e8f96.jpg);background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-8155e48a]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-8155e48a]{width:%?180?%}.avator[data-v-8155e48a]{width:%?150?%;height:%?60?%}.right-input[data-v-8155e48a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-8155e48a]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-8155e48a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-8155e48a]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-8155e48a]{border:0}.cu-form-group uni-input[data-v-8155e48a]{padding:0 %?30?%}.uni-input[data-v-8155e48a]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-8155e48a]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-8155e48a]::after{line-height:%?88?%}.select .uni-input[data-v-8155e48a]{line-height:%?88?%}.input .right-input[data-v-8155e48a]{line-height:%?88?%}',""]),e.exports=r},"96ad":function(e,r,t){"use strict";var i=t("1b80"),n=t.n(i);n.a},c917:function(e,r,t){"use strict";var i={"w-picker":t("e2b1").default},n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(0, 204, 0, 1)",margin:"0 0 20rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"180rpx",fontSize:"28rpx",color:"rgba(0, 204, 0, 1)",textAlign:"left"}},[e._v("餐品编号")]),t("v-uni-view",{staticClass:"right-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 204, 0, 1)",borderRadius:"16rpx",color:"rgba(247, 6, 6, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.canpinbianhao))])],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(0, 204, 0, 1)",margin:"0 0 20rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"180rpx",fontSize:"28rpx",color:"rgba(0, 204, 0, 1)",textAlign:"left"}},[e._v("餐品名称")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 204, 0, 1)",borderRadius:"16rpx",color:"rgba(247, 6, 6, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{placeholder:"餐品名称"},model:{value:e.ruleForm.canpinmingcheng,callback:function(r){e.$set(e.ruleForm,"canpinmingcheng",r)},expression:"ruleForm.canpinmingcheng"}})],1),t("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(0, 204, 0, 1)",margin:"0 0 20rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"180rpx",fontSize:"28rpx",color:"rgba(0, 204, 0, 1)",textAlign:"left"}},[e._v("餐品分类")]),t("v-uni-picker",{attrs:{value:e.canpinfenleiIndex,range:e.canpinfenleiOptions},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.canpinfenleiChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 204, 0, 1)",borderRadius:"16rpx",color:"rgba(242, 8, 8, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.canpinfenlei?e.ruleForm.canpinfenlei:"请选择餐品分类"))])],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(0, 204, 0, 1)",margin:"0 0 20rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"180rpx",fontSize:"28rpx",color:"rgba(0, 204, 0, 1)",textAlign:"left"}},[e._v("原价格")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 204, 0, 1)",borderRadius:"16rpx",color:"rgba(247, 6, 6, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{placeholder:"原价格"},model:{value:e.ruleForm.yuanjiage,callback:function(r){e.$set(e.ruleForm,"yuanjiage",r)},expression:"ruleForm.yuanjiage"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(0, 204, 0, 1)",margin:"0 0 20rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"180rpx",fontSize:"28rpx",color:"rgba(0, 204, 0, 1)",textAlign:"left"}},[e._v("活动价格")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 204, 0, 1)",borderRadius:"16rpx",color:"rgba(247, 6, 6, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{placeholder:"活动价格"},model:{value:e.ruleForm.huodongjiage,callback:function(r){e.$set(e.ruleForm,"huodongjiage",r)},expression:"ruleForm.huodongjiage"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(0, 204, 0, 1)",margin:"0 0 20rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"180rpx",fontSize:"28rpx",color:"rgba(0, 204, 0, 1)",textAlign:"left"}},[e._v("数量")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 204, 0, 1)",borderRadius:"16rpx",color:"rgba(247, 6, 6, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{placeholder:"数量"},model:{value:e.ruleForm.shuliang,callback:function(r){e.$set(e.ruleForm,"shuliang",r)},expression:"ruleForm.shuliang"}})],1),t("v-uni-view",{staticClass:"cu-form-group",class:"left"==e.left?"":"active",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(0, 204, 0, 1)",margin:"0 0 20rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.tupianTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(0, 204, 0, 1)",textAlign:"left"}},[e._v("图片")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[e.ruleForm.tupian?t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:e.ruleForm.tupian,mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 204, 0, 1)",margin:"0 0 20rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"308rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"180rpx",fontSize:"28rpx",color:"rgba(0, 204, 0, 1)",textAlign:"left"}},[e._v("详情")]),t("v-uni-textarea",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 204, 0, 1)",borderRadius:"16rpx",color:"rgba(255, 69, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"详情"},model:{value:e.ruleForm.xiangqing,callback:function(r){e.$set(e.ruleForm,"xiangqing",r)},expression:"ruleForm.xiangqing"}})],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"rgba(0, 204, 0, 1)",borderColor:"rgba(0, 204, 0, 1)",borderRadius:"8rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),t("w-picker",{ref:"reversetime",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(r){arguments[0]=r=e.$handleEvent(r),e.reversetimeConfirm.apply(void 0,arguments)}}})],1)},a=[];t.d(r,"b",(function(){return n})),t.d(r,"c",(function(){return a})),t.d(r,"a",(function(){return i}))}}]);