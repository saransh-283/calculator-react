(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{23:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},28:function(t,e){var n,a,c=document.getElementById("top-pane"),r=document.getElementById("calc-inner");document.getElementsByTagName("body")[0];function o(t){var e=[t.clientX,t.clientY];r.style.top="".concat(a[1]+(e[1]-n[1]),"px"),r.style.left="".concat(a[0]+(e[0]-n[0]),"px")}function s(){document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",s)}c.addEventListener("mousedown",(function(t){n=[t.clientX,t.clientY],a=[r.getBoundingClientRect().left,r.getBoundingClientRect().top],document.addEventListener("mousemove",o),document.addEventListener("mouseup",s)}))},29:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(8),o=n.n(r),s=n(2),i=n(3),u=n(5),p=n(4),l=n(12),j=n(6),b=n(7),d=(n(23),n(1)),m=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"display",id:this.props.name,style:{gridArea:this.props.area},children:this.props.text})}}]),n}(c.a.Component),O={HistDisp:function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)(m,{name:"histdisp",text:this.props.hist,area:this.props.area})}}]),n}(c.a.Component),MainDisp:function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)(m,{text:this.props.main,name:"maindisp",area:this.props.area})}}]),n}(c.a.Component)},v=(n(25),function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{onClick:this.props.click,className:"".concat(this.props.group," btn component"),id:this.props.name,style:{gridArea:this.props.area},children:this.props.value})}}]),n}(c.a.Component)),h=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(d.jsx)(v,{click:function(){return t.props.clrPress()},name:"ac",area:this.props.area,value:this.props.value})}}]),n}(c.a.Component),f=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(d.jsx)(v,{click:function(){return t.props.numPress(t.props.value)},group:"num",area:this.props.area,value:this.props.value})}}]),n}(c.a.Component),C=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(d.jsx)(v,{click:function(){return t.props.decPress()},name:"decimal",area:this.props.area,value:this.props.value})}}]),n}(c.a.Component),B=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(d.jsx)(v,{click:function(){return t.props.opPress(t.props.value)},group:"op",area:this.props.area,value:this.props.value})}}]),n}(c.a.Component),x=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(d.jsx)(v,{click:function(){return t.props.eqPress(parseFloat(t.props.hist),parseFloat(t.props.main),t.props.op)},name:"equal",area:this.props.area,value:this.props.value})}}]),n}(c.a.Component),y={BackButton:function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(d.jsx)(v,{click:function(){return t.props.backPress()},name:"back",area:this.props.area,value:this.props.value})}}]),n}(c.a.Component),ClearButton:h,NumButton:f,OpButton:B,EqualButton:x,DecimalButton:C},g=function(t){return{main:t.main,hist:t.hist,op:t.op}},k=function(t){return{numPress:function(e){t(b.a.numAction(e))},clrPress:function(){t(b.a.clrAction())},decPress:function(){t(b.a.decAction())},opPress:function(e){t(b.a.opPress(e))},eqPress:function(e,n,a){t(b.a.eqPress(e,n,a))},backPress:function(){t(b.a.backPress())}}},A={store:l.a(b.a.reducer),HistDispConnected:Object(j.b)(g)(O.HistDisp),MainDispConnected:Object(j.b)(g)(O.MainDisp),ClearButtonConnected:Object(j.b)(null,k)(y.ClearButton),NumButtonConnected:Object(j.b)(null,k)(y.NumButton),OpButtonConnected:Object(j.b)(null,k)(y.OpButton),EqualButtonConnected:Object(j.b)(g,k)(y.EqualButton),DecimalButtonConnected:Object(j.b)(null,k)(y.DecimalButton),BackButtonConnected:Object(j.b)(null,k)(y.BackButton)},E=(n(26),function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{id:"calc",children:Object(d.jsxs)(j.a,{store:A.store,children:[Object(d.jsx)(A.HistDispConnected,{area:"histDisp"}),Object(d.jsx)(A.MainDispConnected,{area:"mainDisp"}),Object(d.jsx)(A.ClearButtonConnected,{value:"AC",area:"ac"}),Object(d.jsx)(A.NumButtonConnected,{value:"1",area:"one"}),Object(d.jsx)(A.NumButtonConnected,{value:"2",area:"two"}),Object(d.jsx)(A.NumButtonConnected,{value:"3",area:"three"}),Object(d.jsx)(A.NumButtonConnected,{value:"4",area:"four"}),Object(d.jsx)(A.NumButtonConnected,{value:"5",area:"five"}),Object(d.jsx)(A.NumButtonConnected,{value:"6",area:"six"}),Object(d.jsx)(A.NumButtonConnected,{value:"7",area:"seven"}),Object(d.jsx)(A.NumButtonConnected,{value:"8",area:"eight"}),Object(d.jsx)(A.NumButtonConnected,{value:"9",area:"nine"}),Object(d.jsx)(A.NumButtonConnected,{value:"0",area:"zero"}),Object(d.jsx)(A.OpButtonConnected,{value:"+",area:"add"}),Object(d.jsx)(A.OpButtonConnected,{value:"-",area:"minus"}),Object(d.jsx)(A.OpButtonConnected,{value:"*",area:"multiply"}),Object(d.jsx)(A.OpButtonConnected,{value:"/",area:"divide"}),Object(d.jsx)(A.BackButtonConnected,{value:[Object(d.jsx)("i",{className:"fa fa-backspace"})],area:"back"}),Object(d.jsx)(A.DecimalButtonConnected,{value:".",area:"decimal"}),Object(d.jsx)(A.EqualButtonConnected,{value:"=",area:"equal"})]})})}}]),n}(c.a.Component));n(27),n(28);o.a.render(Object(d.jsx)(E,{}),document.getElementById("root"));var P=document.getElementById("calc-inner"),N=document.getElementsByTagName("body")[0];P.style.top="".concat((N.getBoundingClientRect().height-P.getBoundingClientRect().height)/2,"px"),P.style.left="".concat((N.getBoundingClientRect().width-P.getBoundingClientRect().width)/2,"px")},7:function(module,__webpack_exports__,__webpack_require__){"use strict";var defaultState={main:"0",operation:"",hist:"0",decimal:!1,answer:0},NUMPRESS="NUMPRESS",CLEAR="CLEAR",DECIMAL="DECIMAL",OPERATION="OPERATION",EQUAL="EQUAL",BACK="BACK",numAction=function(t){return{type:NUMPRESS,txt:t}},clrAction=function(){return{type:CLEAR}},decAction=function(){return{type:DECIMAL}},opPress=function(t){return{type:OPERATION,op:t}},eqPress=function(t,e,n){return{type:EQUAL,n1:t,n2:e,op:n}},backPress=function(){return{type:BACK}};function reducer(){var state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:defaultState,action=arguments.length>1?arguments[1]:void 0;switch(action.type){case NUMPRESS:return Object.assign({},state,{main:"".concat(Boolean(parseInt(state.main))?state.main:"").concat(action.txt)});case CLEAR:return defaultState;case DECIMAL:return Object.assign({},state,{main:state.decimal?state.main:"".concat(state.main,"."),decimal:!0});case OPERATION:var obj={operation:action.op,hist:"".concat(Boolean(parseInt(state.hist))?state.hist:"").concat(state.main).concat(action.op),main:"0",decimal:!1};return Object.assign({},state,state.main?obj:state);case EQUAL:return obj={operation:"",hist:"0",main:"".concat(state.main?eval("".concat(state.hist).concat(state.main)):eval("".concat(state.hist.slice(0,state.hist.length-1))))},Object.assign({},state,state.main?obj:state,{decimal:!(obj.main==parseInt(obj.main))});case BACK:return Object.assign({},state,{main:"".concat(state.main.slice(0,state.main.length-1))});default:return state}}__webpack_exports__.a={reducer:reducer,numAction:numAction,clrAction:clrAction,decAction:decAction,opPress:opPress,eqPress:eqPress,backPress:backPress}}},[[29,1,2]]]);
//# sourceMappingURL=main.57510453.chunk.js.map