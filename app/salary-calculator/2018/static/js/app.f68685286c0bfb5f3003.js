webpackJsonp([1],{"AUn+":function(i,n){},NHnr:function(i,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),l=e("j5iW"),t=e("8OAG"),o=(e("wj+B"),e("VC+z"),e("VXnA"),e("5dBV")),g=e.n(o),s=e("M4fF"),r=e.n(s),h={data:function(){return{shuilv:[{l:-1/0,h:0,p:0,d:0},{l:0,h:1500,p:.03,d:0},{l:1500,h:4500,p:.1,d:105},{l:4500,h:9e3,p:.2,d:555},{l:9e3,h:35e3,p:.25,d:1005},{l:35e3,h:55e3,p:.3,d:2755},{l:55e3,h:8e4,p:.35,d:5505},{l:8e4,h:1/0,p:.45,d:13505}],kouchu:3500,base:{shenzhen:{yanglaoLow:2200,yanglaoHigh:25044,yiliaoLow:8348,yiliaoHigh:8348,yiliaoLow1:5009,yiliaoHigh1:25044,yiliaoLow23:8348,yiliaoHigh23:8348,shengyuLow:2200,shengyuHigh:25044,gongshangLow:2200,gongshangHigh:25044,shiyeLow:2200,shiyeHigh:2200,gongjijinLow:2130,gongjijinHigh:25044,blGeren:{yanglao1:.08,yanglao2:.08,yiliao1:.02,yiliao2:.002,yiliao3:.001,shengyu:0,shiye:.005,yanglaoCurrent:0,yiliaoCurrent:0,gongshangFactor:0,gongshangCurrent:0,gongjijinCurrent:0},blDanwei:{yanglao1:.14,yanglao2:.13,yiliao1:.062,yiliao2:.006,yiliao3:.0045,shengyu:.0045,shiye:.01,yanglaoCurrent:0,yiliaoCurrent:0,gongshangFactor:1,gongshangCurrent:0,gongjijinCurrent:0},blGongshang:[.0014,.0028,.0049,.0063,.0066,.0078,.0096,.0114],blGongjijin:[.05,.12]},guangzhou:{yanglaoLow:3469,yanglaoHigh:20004,yiliaoLow:4931,yiliaoHigh:24654,shengyuLow:4931,shengyuHigh:24654,gongshangLow:2100,gongshangHigh:24654,shiyeLow:2100,shiyeHigh:24654,gongjijinLow:2100,gongjijinHigh:24654,blGeren:{yanglao1:.08,yanglao2:0,yiliao1:.02,yiliao2:0,yiliao3:0,shengyu:0,shiye:.002,yanglaoCurrent:0,yiliaoCurrent:0,gongshangFactor:0,gongshangCurrent:0,gongjijinCurrent:0},blDanwei:{yanglao1:.14,yanglao2:0,yiliao1:.07,yiliao2:0,yiliao3:0,shengyu:.0085,shiye:.0064,yanglaoCurrent:0,yiliaoCurrent:0,gongshangFactor:1,gongshangCurrent:0,gongjijinCurrent:0},blGongshang:[.002,.004,.007,.009,.011,.012,.013,.014],blGongjijin:[.05,.12]},beijing:{yanglaoLow:3387,yanglaoHigh:25401,yiliaoLow:5080,yiliaoHigh:25401,shengyuLow:5080,shengyuHigh:25401,gongshangLow:5080,gongshangHigh:25401,shiyeLow:3387,shiyeHigh:25401,gongjijinLow:2120,gongjijinHigh:25401,blGeren:{yanglao1:.08,yanglao2:0,yiliao1:.02,yiliao2:0,yiliao3:0,shengyu:0,shiye:.002,yanglaoCurrent:0,yiliaoCurrent:0,gongshangFactor:0,gongshangCurrent:0,gongjijinCurrent:0},blDanwei:{yanglao1:.19,yanglao2:0,yiliao1:.1,yiliao2:0,yiliao3:0,shengyu:.008,shiye:.008,yanglaoCurrent:0,yiliaoCurrent:0,gongshangFactor:1,gongshangCurrent:0,gongjijinCurrent:0},blGongshang:[.002,.004,.007,.009,.011,.012,.013,.014],blGongjijin:[.05,.12]},shanghai:{yanglaoLow:4279,yanglaoHigh:21396,yiliaoLow:4279,yiliaoHigh:21396,shengyuLow:4279,shengyuHigh:21396,gongshangLow:4279,gongshangHigh:21396,shiyeLow:4279,shiyeHigh:21396,gongjijinLow:2420,gongjijinHigh:21396,blGeren:{yanglao1:.08,yanglao2:0,yiliao1:.02,yiliao2:0,yiliao3:0,shengyu:0,shiye:.005,yanglaoCurrent:0,yiliaoCurrent:0,gongshangFactor:0,gongshangCurrent:0,gongjijinCurrent:0},blDanwei:{yanglao1:.2,yanglao2:0,yiliao1:.095,yiliao2:0,yiliao3:0,shengyu:.01,shiye:.005,yanglaoCurrent:0,yiliaoCurrent:0,gongshangFactor:1,gongshangCurrent:0,gongjijinCurrent:0},blGongshang:[.002,.019],blGongjijin:[.05,.12]}},baseCurrent:{yanglaoLow:null,yanglaoHigh:null,yiliaoLow:null,yiliaoHigh:null,shengyuLow:null,shengyuHigh:null,gongshangLow:null,gongshangHigh:null,shiyeLow:null,shiyeHigh:null,gongjijinLow:null,gongjijinHigh:null,blGeren:null,blDanwei:null,blGongshang:null,blGongjijin:null},pickerChengshi:null,pickerYiliaodangci:null,pickerGongshangBl:null,yuexin:null,chengshi:"shenzhen",bendihukou:!1,yanglao:null,yiliaodangci:"two",yiliao:null,shengyu:null,shiye:null,gongshang:null,gongshangBl:null,gongjijin:null,gongjijinBl:null,gerenYingjiao:{yanglao:0,yiliao:0,shengyu:0,shiye:0,gongshang:0,gongjijin:0},danweiYingjiao:{yanglao:0,yiliao:0,shengyu:0,shiye:0,gongshang:0,gongjijin:0},sumGerenYingjiao:null,sumDanweiYingjiao:null,yingnashui:null,yingnashuiShuilv:null,jiaoshui:0,shifa:0}},methods:{onF7Ready:function(i){var n=this;this.initData(),this.pickerChengshi=i.picker.create({inputEl:"#picker-chengshi",cols:[{textAlign:"center",values:["beijing","shanghai","guangzhou","shenzhen"],displayValues:["北京","上海","广州","深圳"],onChange:function(i,e,a){n.chengshi=e,n.initData()}}],toolbarCloseText:"确认",formatValue:function(i,n){return n[0]},value:["shenzhen","深圳"]}),this.pickerYiliaodangci=i.picker.create({inputEl:"#picker-yiliaodangci",cols:[{textAlign:"center",values:["one","two","three"],displayValues:["一档","二档","三档"],onChange:function(i,e,a){n.updateYiliaodangci(e)}}],toolbarCloseText:"确认",rotateEffect:!0,formatValue:function(i,n){return n[0]},value:["two","二档"]})},initData:function(){r.a.extend(this.baseCurrent,this.base[this.chengshi]);var i=this.baseCurrent;i&&(this.bendihukou=!1,this.yanglao=i.yanglaoLow,this.yiliaodangci="two",this.pickerYiliaodangci&&this.pickerYiliaodangci.setValue(["two","二档"]),this.yiliao=i.yiliaoLow,this.shengyu=i.shengyuLow,this.shiye=i.shiyeLow,this.gongshang=i.gongshangLow,this.gongshangBl=i.blGongshang[0],this.gongjijin=i.gongjijinLow,this.gongjijinBl=i.blGongjijin[0],this.initPickerGongshangBl())},initPickerGongshangBl:function(){var i=this,n=i.baseCurrent.blGongshang,e=[n[0].toFixed(4),(100*n[0]).toFixed(2)+"%"];this.pickerGongshangBl&&this.$f7.picker.destroy(this.pickerGongshangBl),this.pickerGongshangBl=this.$f7.picker.create({inputEl:"#picker-gongshangBl",cols:[{textAlign:"center",values:n.map(function(i){return i.toFixed(4)}),displayValues:n.map(function(i){return(100*i).toFixed(2)+"%"}),onChange:function(n,e,a){i.gongshangBl=g()(e)}}],toolbarCloseText:"确认",rotateEffect:!0,formatValue:function(i,n){return n[0]},value:e})},changeBendihukou:function(i){this.bendihukou=i.target.checked,this.bendihukou&&(this.pickerYiliaodangci.setValue(["one","一档"]),this.updateYiliaodangci("one"))},updateYiliaodangci:function(i){this.yiliaodangci=i;var n=this.baseCurrent;"shenzhen"===this.chengshi&&(n.yiliaoLow="one"===this.yiliaodangci?n.yiliaoLow1:n.yiliaoLow23,n.yiliaoHigh="one"===this.yiliaodangci?n.yiliaoHigh1:n.yiliaoHigh23,this.yiliao=n.yiliaoLow,"one"!==i&&(this.bendihukou=!1))},changeGongjiBl:function(i){this.gongjijinBl=i},calculateAll:function(){var i=this;if(this.baseCurrent){var n=this.baseCurrent;this.calculate(this.gerenYingjiao,n.blGeren);var e=this.gerenYingjiao;for(var a in this.sumGerenYingjiao=0,e)e[a]=this.parseFloat(e[a]),this.sumGerenYingjiao+=e[a];for(var l in this.sumGerenYingjiao=this.parseFloat(this.sumGerenYingjiao),this.yingnashui=this.parseFloat(this.yuexin-this.sumGerenYingjiao-this.kouchu),this.yingnashuiShuilv=this.shuilv.find(function(n){return i.yingnashui>=n.l&&i.yingnashui<n.h}),this.jiaoshui=this.parseFloat(this.yingnashui*this.yingnashuiShuilv.p-this.yingnashuiShuilv.d),this.shifa=this.parseFloat(this.yuexin-this.sumGerenYingjiao-this.jiaoshui),this.calculate(this.danweiYingjiao,n.blDanwei),e=this.danweiYingjiao,this.sumDanweiYingjiao=0,e)e[l]=this.parseFloat(e[l]),this.sumDanweiYingjiao+=e[l];this.sumDanweiYingjiao=this.parseFloat(this.sumDanweiYingjiao)}},calculate:function(i,n){if("shenzhen"===this.chengshi)switch(n.yanglaoCurrent=this.bendihukou?n.yanglao1:n.yanglao2,this.yiliaodangci){case"one":n.yiliaoCurrent=n.yiliao1;break;case"two":n.yiliaoCurrent=n.yiliao2;break;case"three":n.yiliaoCurrent=n.yiliao3}else n.yanglaoCurrent=n.yanglao1,n.yiliaoCurrent=n.yiliao1;i.yanglao=this.yanglao*n.yanglaoCurrent,i.yiliao=this.yiliao*n.yiliaoCurrent,i.shengyu=this.shengyu*n.shengyu,i.shiye=this.shiye*n.shiye,n.gongshangCurrent=this.gongshangBl*n.gongshangFactor,i.gongshang=this.gongshang*n.gongshangCurrent,n.gongjijinCurrent=this.gongjijinBl,i.gongjijin=this.gongjijin*n.gongjijinCurrent},parseFloat:function(i){return g()(i.toFixed(2))}}},u={render:function(){var i=this,n=i.$createElement,e=i._self._c||n;return e("f7-page",[e("f7-navbar",[e("f7-nav-title",[i._v("个税计算器")])],1),i._v(" "),e("f7-list",{attrs:{"inline-labels":"","no-hairlines-md":""}},[e("f7-list-item",[e("f7-label",[i._v("月薪(元)")]),i._v(" "),e("f7-input",{attrs:{type:"number",value:i.yuexin,placeholder:"输入月薪","clear-button":""},on:{input:function(n){i.yuexin=n.target.value},"input:clear":function(n){i.yuexin=null}}})],1),i._v(" "),e("f7-list-item",[e("f7-label",[i._v("城市")]),i._v(" "),e("f7-input",{attrs:{type:"text",placeholder:"选择城市",id:"picker-chengshi"}})],1),i._v(" "),e("f7-list-item",{directives:[{name:"show",rawName:"v-show",value:"shenzhen"===i.chengshi,expression:"chengshi === 'shenzhen'"}]},[e("f7-label",[i._v("本地户口")]),i._v(" "),e("f7-checkbox",{attrs:{checked:i.bendihukou},on:{change:i.changeBendihukou}})],1),i._v(" "),e("f7-list-item",{attrs:{"accordion-item":"",title:"缴费基数"}},[e("f7-accordion-content",[e("f7-list",{attrs:{"inline-labels":"","no-hairlines-md":""}},[e("f7-list-item",[e("f7-label",[i._v("养老保险")]),i._v(" "),e("f7-input",{attrs:{type:"number",value:i.yanglao,placeholder:"输入缴费基数","error-message":"输入范围("+i.baseCurrent.yanglaoLow+"-"+i.baseCurrent.yanglaoHigh+")",required:"",validate:"","clear-button":"",min:i.baseCurrent.yanglaoLow,max:i.baseCurrent.yanglaoHigh},on:{input:function(n){i.yanglao=n.target.value},"input:clear":function(n){i.yanglao=null}}})],1),i._v(" "),e("f7-list-item",{directives:[{name:"show",rawName:"v-show",value:"shenzhen"===i.chengshi,expression:"chengshi === 'shenzhen'"}]},[e("f7-label",[i._v("医保档次")]),i._v(" "),e("f7-input",{attrs:{type:"text",placeholder:"选择档次",id:"picker-yiliaodangci"}})],1),i._v(" "),e("f7-list-item",[e("f7-label",[i._v("医疗保险")]),i._v(" "),e("f7-input",{attrs:{type:"number",value:i.yiliao,placeholder:"输入缴费基数","error-message":"输入范围("+i.baseCurrent.yiliaoLow+"-"+i.baseCurrent.yiliaoHigh+")",required:"",validate:"","clear-button":i.baseCurrent.yiliaoLow!==i.baseCurrent.yiliaoHigh,readonly:i.baseCurrent.yiliaoLow===i.baseCurrent.yiliaoHigh,min:i.baseCurrent.yiliaoLow,max:i.baseCurrent.yiliaoHigh},on:{input:function(n){i.yiliao=n.target.value},"input:clear":function(n){i.yiliao=null}}})],1),i._v(" "),e("f7-list-item",[e("f7-label",[i._v("生育保险")]),i._v(" "),e("f7-input",{attrs:{type:"number",value:i.shengyu,placeholder:"输入缴费基数","error-message":"输入范围("+i.baseCurrent.shengyuLow+"-"+i.baseCurrent.shengyuHigh+")",required:"",validate:"","clear-button":"",min:i.baseCurrent.shengyuLow,max:i.baseCurrent.shengyuHigh},on:{input:function(n){i.shengyu=n.target.value},"input:clear":function(n){i.shengyu=null}}})],1),i._v(" "),e("f7-list-item",[e("f7-label",[i._v("失业保险")]),i._v(" "),e("f7-input",{attrs:{type:"number",value:i.shiye,readonly:""}})],1),i._v(" "),e("f7-list-item",[e("f7-label",[i._v("工伤保险")]),i._v(" "),e("f7-input",{attrs:{type:"number",value:i.gongshang,placeholder:"输入缴费基数","error-message":"输入范围("+i.baseCurrent.gongshangLow+"-"+i.baseCurrent.gongshangHigh+")",required:"",validate:"","clear-button":"",min:i.baseCurrent.gongshangLow,max:i.baseCurrent.gongshangHigh},on:{input:function(n){i.gongshang=n.target.value},"input:clear":function(n){i.gongshang=null}}})],1),i._v(" "),e("f7-list-item",[e("f7-label",[i._v("工伤保险费率")]),i._v(" "),e("f7-input",{attrs:{type:"text",placeholder:"选择缴费比例",id:"picker-gongshangBl"}})],1),i._v(" "),e("f7-list-item",[e("f7-label",[i._v("公积金")]),i._v(" "),e("f7-input",{attrs:{type:"number",value:i.gongjijin,placeholder:"输入缴存基数","error-message":"输入范围("+i.baseCurrent.gongjijinLow+"-"+i.baseCurrent.gongjijinHigh+")",required:"",validate:"","clear-button":"",min:i.baseCurrent.gongjijinLow,max:i.baseCurrent.gongjijinHigh},on:{input:function(n){i.gongjijin=n.target.value},"input:clear":function(n){i.gongjijin=null}}})],1),i._v(" "),e("f7-list-item",[e("f7-label",[i._v("公积金费率("+i._s((100*i.gongjijinBl).toFixed(0)+"%")+")")]),i._v(" "),e("f7-range",{attrs:{min:.05,max:.12,step:.01,value:i.gongjijinBl},on:{"range:change":i.changeGongjiBl}})],1)],1)],1)],1)],1),i._v(" "),e("f7-block",[e("f7-row",[e("f7-col",[e("f7-button",{attrs:{fill:"",big:"",raised:""},on:{click:i.calculateAll}},[i._v("开始计算")])],1)],1)],1),i._v(" "),e("f7-block-title",[i._v("个人工资明细")]),i._v(" "),e("f7-list",{attrs:{"inline-labels":"","no-hairlines-md":""}},[e("f7-list-item",[e("f7-label",[i._v("适用税率")]),i._v(" "),e("f7-label",[i._v(i._s(null===i.yingnashuiShuilv?"":(100*i.yingnashuiShuilv.p).toFixed(0)+"%"))])],1),i._v(" "),e("f7-list-item",[e("f7-label",[i._v("个人所得税")]),i._v(" "),e("f7-label",[i._v(i._s(i.jiaoshui))])],1),i._v(" "),e("f7-list-item",[e("f7-label",[i._v("税后工资")]),i._v(" "),e("f7-label",[i._v(i._s(i.shifa))])],1),i._v(" "),e("f7-list-item",[e("f7-label",[i._v("养老保险金("+i._s((null===this.baseCurrent.blGeren?0:100*this.baseCurrent.blGeren.yanglaoCurrent).toFixed(2))+"%)")]),i._v(" "),e("f7-label",[i._v(i._s(i.gerenYingjiao.yanglao))])],1),i._v(" "),e("f7-list-item",[e("f7-label",[i._v("医疗保险金("+i._s((null===this.baseCurrent.blGeren?0:100*this.baseCurrent.blGeren.yiliaoCurrent).toFixed(2))+"%)")]),i._v(" "),e("f7-label",[i._v(i._s(i.gerenYingjiao.yiliao))])],1),i._v(" "),e("f7-list-item",[e("f7-label",[i._v("失业保险金("+i._s((null===this.baseCurrent.blGeren?0:100*this.baseCurrent.blGeren.shiye).toFixed(2))+"%)")]),i._v(" "),e("f7-label",[i._v(i._s(i.gerenYingjiao.shiye))])],1),i._v(" "),e("f7-list-item",[e("f7-label",[i._v("住房公积金("+i._s((null===this.baseCurrent.blGeren?0:100*this.baseCurrent.blGeren.gongjijinCurrent).toFixed(2))+"%)")]),i._v(" "),e("f7-label",[i._v(i._s(i.gerenYingjiao.gongjijin))])],1)],1),i._v(" "),e("f7-block-title",[i._v("单位应缴明细")]),i._v(" "),e("f7-list",{attrs:{"inline-labels":"","no-hairlines-md":""}},[e("f7-list-item",[e("f7-label",[i._v("养老保险金("+i._s((null===this.baseCurrent.blDanwei?0:100*this.baseCurrent.blDanwei.yanglaoCurrent).toFixed(2))+"%)")]),i._v(" "),e("f7-label",[i._v(i._s(i.danweiYingjiao.yanglao))])],1),i._v(" "),e("f7-list-item",[e("f7-label",[i._v("医疗保险金("+i._s((null===this.baseCurrent.blDanwei?0:100*this.baseCurrent.blDanwei.yiliaoCurrent).toFixed(2))+"%)")]),i._v(" "),e("f7-label",[i._v(i._s(i.danweiYingjiao.yiliao))])],1),i._v(" "),e("f7-list-item",[e("f7-label",[i._v("生育保险金("+i._s((null===this.baseCurrent.blDanwei?0:100*this.baseCurrent.blDanwei.shengyu).toFixed(2))+"%)")]),i._v(" "),e("f7-label",[i._v(i._s(i.danweiYingjiao.shengyu))])],1),i._v(" "),e("f7-list-item",[e("f7-label",[i._v("失业保险金("+i._s((null===this.baseCurrent.blDanwei?0:100*this.baseCurrent.blDanwei.shiye).toFixed(2))+"%)")]),i._v(" "),e("f7-label",[i._v(i._s(i.danweiYingjiao.shiye))])],1),i._v(" "),e("f7-list-item",[e("f7-label",[i._v("工伤保险金("+i._s((null===this.baseCurrent.blDanwei?0:100*this.baseCurrent.blDanwei.gongshangCurrent).toFixed(2))+"%)")]),i._v(" "),e("f7-label",[i._v(i._s(i.danweiYingjiao.gongshang))])],1),i._v(" "),e("f7-list-item",[e("f7-label",[i._v("住房公积金("+i._s((null===this.baseCurrent.blDanwei?0:100*this.baseCurrent.blDanwei.gongjijinCurrent).toFixed(2))+"%)")]),i._v(" "),e("f7-label",[i._v(i._s(i.danweiYingjiao.gongjijin))])],1)],1),i._v(" "),e("f7-block-title",{staticClass:"copyright"},[i._v("\n    Coding with\n    "),e("span",{staticClass:"heart"},[i._v("❤")]),i._v(" by\n    "),e("a",{staticClass:"link external website",attrs:{href:"http://www.wangdandong.com"}},[i._v("Wang Dandong")])])],1)},staticRenderFns:[]};var y=[{path:"/",component:e("VU/8")(h,u,!1,function(i){e("AUn+")},"data-v-7094bfcd",null).exports}],c={render:function(){var i=this.$createElement,n=this._self._c||i;return n("div",{attrs:{id:"app"}},[n("f7-statusbar"),this._v(" "),n("f7-view",{attrs:{id:"main-view",url:"/",main:""}})],1)},staticRenderFns:[]},b=e("VU/8")({},c,!1,null,null,null).exports;a.a.use(t.a,l.a),new a.a({el:"#app",template:"<app/>",framework7:{id:"com.wangdandong.tool.salarycalculator",name:"Salary Calculator",theme:"auto",routes:y},components:{app:b}})},"VC+z":function(i,n){},VXnA:function(i,n){},"wj+B":function(i,n){}},["NHnr"]);
//# sourceMappingURL=app.f68685286c0bfb5f3003.js.map