(self.webpackChunkeasyoc_antadmin=self.webpackChunkeasyoc_antadmin||[]).push([[3012],{22452:function(Y,M,e){"use strict";var p=e(22122),c=e(28991),r=e(81253),E=e(67294),P=e(66758),F=e(97519),S=["fieldProps","proFieldProps"],Z="dateTime",L=E.forwardRef(function(g,K){var h=g.fieldProps,N=g.proFieldProps,O=(0,r.Z)(g,S),l=(0,E.useContext)(P.Z);return E.createElement(F.Z,(0,p.Z)({ref:K,mode:"edit",fieldProps:(0,c.Z)({getPopupContainer:l.getPopupContainer},h),valueType:Z,proFieldProps:N,filedConfig:{valueType:Z,customLightMode:!0}},O))});M.Z=L},64317:function(Y,M,e){"use strict";var p=e(22122),c=e(28991),r=e(81253),E=e(96202),P=e(67294),F=e(66758),S=e(97519),Z=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],L=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],g=P.forwardRef(function(l,x){var re=l.fieldProps,J=l.children,z=l.params,ne=l.proFieldProps,w=l.mode,Q=l.valueEnum,_=l.request,a=l.showSearch,s=l.options,o=(0,r.Z)(l,Z),n=(0,P.useContext)(F.Z);return P.createElement(S.Z,(0,p.Z)({mode:"edit",valueEnum:(0,E.h)(Q),request:_,params:z,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,c.Z)({options:s,mode:w,showSearch:a,getPopupContainer:n.getPopupContainer},re),ref:x,proFieldProps:ne},o),J)}),K=P.forwardRef(function(l,x){var re=l.fieldProps,J=l.children,z=l.params,ne=l.proFieldProps,w=l.mode,Q=l.valueEnum,_=l.request,a=l.options,s=(0,r.Z)(l,L),o=(0,c.Z)({options:a,mode:w||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},re),n=(0,P.useContext)(F.Z);return P.createElement(S.Z,(0,p.Z)({mode:"edit",valueEnum:(0,E.h)(Q),request:_,params:z,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,c.Z)({getPopupContainer:n.getPopupContainer},o),ref:x,proFieldProps:ne},s),J)}),h=g,N=K,O=h;O.SearchSelect=N,O.displayName="ProFormComponent",M.Z=O},5966:function(Y,M,e){"use strict";var p=e(22122),c=e(81253),r=e(67294),E=e(97519),P=["fieldProps","proFieldProps"],F=["fieldProps","proFieldProps"],S="text",Z=function(h){var N=h.fieldProps,O=h.proFieldProps,l=(0,c.Z)(h,P);return r.createElement(E.Z,(0,p.Z)({mode:"edit",valueType:S,fieldProps:N,filedConfig:{valueType:S},proFieldProps:O},l))},L=function(h){var N=h.fieldProps,O=h.proFieldProps,l=(0,c.Z)(h,F);return r.createElement(E.Z,(0,p.Z)({mode:"edit",valueType:"password",fieldProps:N,proFieldProps:O,filedConfig:{valueType:S}},l))},g=Z;g.Password=L,g.displayName="ProFormComponent",M.Z=g},90672:function(Y,M,e){"use strict";var p=e(22122),c=e(81253),r=e(67294),E=e(97519),P=["fieldProps","proFieldProps"],F=function(Z,L){var g=Z.fieldProps,K=Z.proFieldProps,h=(0,c.Z)(Z,P);return r.createElement(E.Z,(0,p.Z)({ref:L,mode:"edit",valueType:"textarea",fieldProps:g,proFieldProps:K},h))};M.Z=r.forwardRef(F)},7763:function(Y){Y.exports={standardList:"standardList___pRhsd",headerInfo:"headerInfo___3KrKX",listContent:"listContent___weIUQ",listContentItem:"listContentItem___S_LBX",extraContentSearch:"extraContentSearch___1lMSQ",listCard:"listCard___1aWw-",standardListForm:"standardListForm___1KJ6f",formResult:"formResult___1XdZP"}},70347:function(){},68348:function(Y,M,e){"use strict";e.r(M),e.d(M,{BasicList:function(){return pe},default:function(){return De}});var p=e(57663),c=e(71577),r=e(54421),E=e(38272),P=e(94233),F=e(51890),S=e(58024),Z=e(91894),L=e(13062),g=e(71230),K=e(89032),h=e(15746),N=e(59250),O=e(13013),l=e(30887),x=e(18515),re=e(71194),J=e(50146),z=e(2824),ne=e(34669),w=e(3074),Q=e(47673),_=e(4107),a=e(88983),s=e(47933),o=e(67294),n=e(57254),i=e(49101),k=e(75362),T=e(11996),V=e(30381),X=e.n(V),q=e(57106),I=e(99683),$=e(3182),ee=e(94043),y=e.n(ee),le=e(37476),se=e(5966),ie=e(22452),de=e(64317),Ee=e(90672),Pe=e(7763),b=e.n(Pe),t=e(85893),xe=function(v){var f=v.done,d=v.visible,R=v.current,H=v.onDone,G=v.onSubmit,he=v.children;return d?(0,t.jsx)(le.Y,{visible:d,title:f?null:"\u4EFB\u52A1".concat(R?"\u7F16\u8F91":"\u6DFB\u52A0"),className:b().standardListForm,width:640,onFinish:function(){var B=(0,$.Z)(y().mark(function U(j){return y().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:G(j);case 1:case"end":return oe.stop()}},U)}));return function(U){return B.apply(this,arguments)}}(),initialValues:R,submitter:{render:function(U,j){return f?null:j}},trigger:(0,t.jsx)(t.Fragment,{children:he}),modalProps:{onCancel:function(){return H()},destroyOnClose:!0,bodyStyle:f?{padding:"72px 0"}:{}},children:f?(0,t.jsx)(I.ZP,{status:"success",title:"\u64CD\u4F5C\u6210\u529F",subTitle:"\u4E00\u7CFB\u5217\u7684\u4FE1\u606F\u63CF\u8FF0\uFF0C\u5F88\u77ED\u540C\u6837\u4E5F\u53EF\u4EE5\u5E26\u6807\u70B9\u3002",extra:(0,t.jsx)(c.Z,{type:"primary",onClick:H,children:"\u77E5\u9053\u4E86"}),className:b().formResult}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(se.Z,{name:"title",label:"\u4EFB\u52A1\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EFB\u52A1\u540D\u79F0"}],placeholder:"\u8BF7\u8F93\u5165"}),(0,t.jsx)(ie.Z,{name:"createdAt",label:"\u5F00\u59CB\u65F6\u95F4",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4"}],fieldProps:{style:{width:"100%"}},placeholder:"\u8BF7\u9009\u62E9"}),(0,t.jsx)(de.Z,{name:"owner",label:"\u4EFB\u52A1\u8D1F\u8D23\u4EBA",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4EFB\u52A1\u8D1F\u8D23\u4EBA"}],options:[{label:"\u4ED8\u6653\u6653",value:"xiao"},{label:"\u5468\u6BDB\u6BDB",value:"mao"}],placeholder:"\u8BF7\u9009\u62E9\u7BA1\u7406\u5458"}),(0,t.jsx)(Ee.Z,{name:"subDescription",label:"\u4EA7\u54C1\u63CF\u8FF0",rules:[{message:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26\u7684\u4EA7\u54C1\u63CF\u8FF0\uFF01",min:5}],placeholder:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26"})]})}):null},Ce=xe,W=e(11849);function te(C){return ue.apply(this,arguments)}function ue(){return ue=(0,$.Z)(y().mark(function C(v){return y().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,T.WY)("/api/get_list",{params:v}));case 1:case"end":return d.stop()}},C)})),ue.apply(this,arguments)}function ye(C){return ce.apply(this,arguments)}function ce(){return ce=(0,$.Z)(y().mark(function C(v){return y().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,T.WY)("/api/post_fake_list",{method:"POST",data:(0,W.Z)((0,W.Z)({},v),{},{method:"delete"})}));case 1:case"end":return d.stop()}},C)})),ce.apply(this,arguments)}function Ze(C){return ve.apply(this,arguments)}function ve(){return ve=(0,$.Z)(y().mark(function C(v){return y().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,T.WY)("/api/post_fake_list",{method:"POST",data:(0,W.Z)((0,W.Z)({},v),{},{method:"post"})}));case 1:case"end":return d.stop()}},C)})),ve.apply(this,arguments)}function Fe(C){return me.apply(this,arguments)}function me(){return me=(0,$.Z)(y().mark(function C(v){return y().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,T.WY)("/api/post_fake_list",{method:"POST",data:(0,W.Z)((0,W.Z)({},v),{},{method:"update"})}));case 1:case"end":return d.stop()}},C)})),me.apply(this,arguments)}var fe=s.ZP.Button,m=s.ZP.Group,ge=_.Z.Search,D=function(v){var f=v.title,d=v.value,R=v.bordered;return(0,t.jsxs)("div",{className:b().headerInfo,children:[(0,t.jsx)("span",{children:f}),(0,t.jsx)("p",{children:d}),R&&(0,t.jsx)("em",{})]})},Oe=function(v){var f=v.data,d=f.owner,R=f.createdAt,H=f.percent,G=f.status;return(0,t.jsxs)("div",{className:b().listContent,children:[(0,t.jsxs)("div",{className:b().listContentItem,children:[(0,t.jsx)("span",{children:"Owner"}),(0,t.jsx)("p",{children:d})]}),(0,t.jsxs)("div",{className:b().listContentItem,children:[(0,t.jsx)("span",{children:"\u5F00\u59CB\u65F6\u95F4"}),(0,t.jsx)("p",{children:X()(R).format("YYYY-MM-DD HH:mm")})]}),(0,t.jsx)("div",{className:b().listContentItem,children:(0,t.jsx)(w.Z,{percent:H,status:G,strokeWidth:6,style:{width:180}})})]})},pe=function(){var v=(0,o.useState)(!1),f=(0,z.Z)(v,2),d=f[0],R=f[1],H=(0,o.useState)(!1),G=(0,z.Z)(H,2),he=G[0],B=G[1],U=(0,o.useState)(void 0),j=(0,z.Z)(U,2),Te=j[0],oe=j[1],je=(0,T.QT)(function(){return te({count:50})}),Me=je.data,Le=je.loading,Ie=je.mutate,Re=(0,T.QT)(function(A,u){return A==="remove"?ye(u):A==="update"?Fe(u):Ze(u)},{manual:!0,onSuccess:function(u){Ie(u)}}),be=Re.run,Be=(Me==null?void 0:Me.list)||[],Ke={showSizeChanger:!0,showQuickJumper:!0,pageSize:5,total:Be.length},Ae=function(u){B(!0),oe(u)},Ne=function(u){be("remove",{id:u})},We=function(u,ae){u==="edit"?Ae(ae):u==="delete"&&J.Z.confirm({title:"\u5220\u9664\u4EFB\u52A1",content:"\u786E\u5B9A\u5220\u9664\u8BE5\u4EFB\u52A1\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:function(){return Ne(ae.id)}})},Ue=(0,t.jsxs)("div",{className:b().extraContent,children:[(0,t.jsxs)(m,{defaultValue:"all",children:[(0,t.jsx)(fe,{value:"all",children:"\u5168\u90E8"}),(0,t.jsx)(fe,{value:"progress",children:"\u8FDB\u884C\u4E2D"}),(0,t.jsx)(fe,{value:"waiting",children:"\u7B49\u5F85\u4E2D"})]}),(0,t.jsx)(ge,{className:b().extraContentSearch,placeholder:"\u8BF7\u8F93\u5165",onSearch:function(){return{}}})]}),ze=function(u){var ae=u.item;return(0,t.jsx)(O.Z,{overlay:(0,t.jsxs)(x.Z,{onClick:function(Ye){var Qe=Ye.key;return We(Qe,ae)},children:[(0,t.jsx)(x.Z.Item,{children:"\u7F16\u8F91"},"edit"),(0,t.jsx)(x.Z.Item,{children:"\u5220\u9664"},"delete")]}),children:(0,t.jsxs)("a",{children:["\u66F4\u591A ",(0,t.jsx)(n.Z,{})]})})},$e=function(){R(!1),B(!1),oe({})},Ge=function(u){R(!0);var ae=u!=null&&u.id?"update":"add";be(ae,u)};return(0,t.jsxs)("div",{children:[(0,t.jsx)(k.ZP,{children:(0,t.jsxs)("div",{className:b().standardList,children:[(0,t.jsx)(Z.Z,{bordered:!1,children:(0,t.jsxs)(g.Z,{children:[(0,t.jsx)(h.Z,{sm:8,xs:24,children:(0,t.jsx)(D,{title:"\u6211\u7684\u5F85\u529E",value:"8\u4E2A\u4EFB\u52A1",bordered:!0})}),(0,t.jsx)(h.Z,{sm:8,xs:24,children:(0,t.jsx)(D,{title:"\u672C\u5468\u4EFB\u52A1\u5E73\u5747\u5904\u7406\u65F6\u95F4",value:"32\u5206\u949F",bordered:!0})}),(0,t.jsx)(h.Z,{sm:8,xs:24,children:(0,t.jsx)(D,{title:"\u672C\u5468\u5B8C\u6210\u4EFB\u52A1\u6570",value:"24\u4E2A\u4EFB\u52A1"})})]})}),(0,t.jsx)(Z.Z,{className:b().listCard,bordered:!1,title:"\u57FA\u672C\u5217\u8868",style:{marginTop:24},bodyStyle:{padding:"0 32px 40px 32px"},extra:Ue,children:(0,t.jsx)(E.ZP,{size:"large",rowKey:"id",loading:Le,pagination:Ke,dataSource:Be,renderItem:function(u){return(0,t.jsxs)(E.ZP.Item,{actions:[(0,t.jsx)("a",{onClick:function(Se){Se.preventDefault(),Ae(u)},children:"\u7F16\u8F91"},"edit"),(0,t.jsx)(ze,{item:u},"more")],children:[(0,t.jsx)(E.ZP.Item.Meta,{avatar:(0,t.jsx)(F.C,{src:u.logo,shape:"square",size:"large"}),title:(0,t.jsx)("a",{href:u.href,children:u.title}),description:u.subDescription}),(0,t.jsx)(Oe,{data:u})]})}})})]})}),(0,t.jsxs)(c.Z,{type:"dashed",onClick:function(){B(!0)},style:{width:"100%",marginBottom:8},children:[(0,t.jsx)(i.Z,{}),"\u6DFB\u52A0"]}),(0,t.jsx)(Ce,{done:d,visible:he,current:Te,onDone:$e,onSubmit:Ge})]})},De=pe},91894:function(Y,M,e){"use strict";e.d(M,{Z:function(){return _}});var p=e(22122),c=e(96156),r=e(67294),E=e(94184),P=e.n(E),F=e(65632),S=function(a,s){var o={};for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&s.indexOf(n)<0&&(o[n]=a[n]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(a);i<n.length;i++)s.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(a,n[i])&&(o[n[i]]=a[n[i]]);return o},Z=function(s){var o=s.prefixCls,n=s.className,i=s.hoverable,k=i===void 0?!0:i,T=S(s,["prefixCls","className","hoverable"]);return r.createElement(F.C,null,function(V){var X=V.getPrefixCls,q=X("card",o),I=P()("".concat(q,"-grid"),n,(0,c.Z)({},"".concat(q,"-grid-hoverable"),k));return r.createElement("div",(0,p.Z)({},T,{className:I}))})},L=Z,g=function(a,s){var o={};for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&s.indexOf(n)<0&&(o[n]=a[n]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(a);i<n.length;i++)s.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(a,n[i])&&(o[n[i]]=a[n[i]]);return o},K=function(s){return r.createElement(F.C,null,function(o){var n=o.getPrefixCls,i=s.prefixCls,k=s.className,T=s.avatar,V=s.title,X=s.description,q=g(s,["prefixCls","className","avatar","title","description"]),I=n("card",i),$=P()("".concat(I,"-meta"),k),ee=T?r.createElement("div",{className:"".concat(I,"-meta-avatar")},T):null,y=V?r.createElement("div",{className:"".concat(I,"-meta-title")},V):null,le=X?r.createElement("div",{className:"".concat(I,"-meta-description")},X):null,se=y||le?r.createElement("div",{className:"".concat(I,"-meta-detail")},y,le):null;return r.createElement("div",(0,p.Z)({},q,{className:$}),ee,se)})},h=K,N=e(98423),O=e(16004),l=e(71230),x=e(15746),re=e(97647),J=function(a,s){var o={};for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&s.indexOf(n)<0&&(o[n]=a[n]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(a);i<n.length;i++)s.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(a,n[i])&&(o[n[i]]=a[n[i]]);return o};function z(a){var s=a.map(function(o,n){return r.createElement("li",{style:{width:"".concat(100/a.length,"%")},key:"action-".concat(n)},r.createElement("span",null,o))});return s}var ne=r.forwardRef(function(a,s){var o,n,i=r.useContext(F.E_),k=i.getPrefixCls,T=i.direction,V=r.useContext(re.Z),X=function(U){var j;(j=a.onTabChange)===null||j===void 0||j.call(a,U)},q=function(){var U;return r.Children.forEach(a.children,function(j){j&&j.type&&j.type===L&&(U=!0)}),U},I=a.prefixCls,$=a.className,ee=a.extra,y=a.headStyle,le=y===void 0?{}:y,se=a.bodyStyle,ie=se===void 0?{}:se,de=a.title,Ee=a.loading,Pe=a.bordered,b=Pe===void 0?!0:Pe,t=a.size,xe=a.type,Ce=a.cover,W=a.actions,te=a.tabList,ue=a.children,ye=a.activeTabKey,ce=a.defaultActiveTabKey,Ze=a.tabBarExtraContent,ve=a.hoverable,Fe=a.tabProps,me=Fe===void 0?{}:Fe,fe=J(a,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),m=k("card",I),ge=ie.padding===0||ie.padding==="0px"?{padding:24}:void 0,D=r.createElement("div",{className:"".concat(m,"-loading-block")}),Oe=r.createElement("div",{className:"".concat(m,"-loading-content"),style:ge},r.createElement(l.Z,{gutter:8},r.createElement(x.Z,{span:22},D)),r.createElement(l.Z,{gutter:8},r.createElement(x.Z,{span:8},D),r.createElement(x.Z,{span:15},D)),r.createElement(l.Z,{gutter:8},r.createElement(x.Z,{span:6},D),r.createElement(x.Z,{span:18},D)),r.createElement(l.Z,{gutter:8},r.createElement(x.Z,{span:13},D),r.createElement(x.Z,{span:9},D)),r.createElement(l.Z,{gutter:8},r.createElement(x.Z,{span:4},D),r.createElement(x.Z,{span:3},D),r.createElement(x.Z,{span:16},D))),pe=ye!==void 0,De=(0,p.Z)((0,p.Z)({},me),(o={},(0,c.Z)(o,pe?"activeKey":"defaultActiveKey",pe?ye:ce),(0,c.Z)(o,"tabBarExtraContent",Ze),o)),C,v=te&&te.length?r.createElement(O.Z,(0,p.Z)({size:"large"},De,{className:"".concat(m,"-head-tabs"),onChange:X}),te.map(function(B){return r.createElement(O.Z.TabPane,{tab:B.tab,disabled:B.disabled,key:B.key})})):null;(de||ee||v)&&(C=r.createElement("div",{className:"".concat(m,"-head"),style:le},r.createElement("div",{className:"".concat(m,"-head-wrapper")},de&&r.createElement("div",{className:"".concat(m,"-head-title")},de),ee&&r.createElement("div",{className:"".concat(m,"-extra")},ee)),v));var f=Ce?r.createElement("div",{className:"".concat(m,"-cover")},Ce):null,d=r.createElement("div",{className:"".concat(m,"-body"),style:ie},Ee?Oe:ue),R=W&&W.length?r.createElement("ul",{className:"".concat(m,"-actions")},z(W)):null,H=(0,N.Z)(fe,["onTabChange"]),G=t||V,he=P()(m,(n={},(0,c.Z)(n,"".concat(m,"-loading"),Ee),(0,c.Z)(n,"".concat(m,"-bordered"),b),(0,c.Z)(n,"".concat(m,"-hoverable"),ve),(0,c.Z)(n,"".concat(m,"-contain-grid"),q()),(0,c.Z)(n,"".concat(m,"-contain-tabs"),te&&te.length),(0,c.Z)(n,"".concat(m,"-").concat(G),G),(0,c.Z)(n,"".concat(m,"-type-").concat(xe),!!xe),(0,c.Z)(n,"".concat(m,"-rtl"),T==="rtl"),n),$);return r.createElement("div",(0,p.Z)({ref:s},H,{className:he}),C,f,d,R)}),w=ne,Q=w;Q.Grid=L,Q.Meta=h;var _=Q},58024:function(Y,M,e){"use strict";var p=e(38663),c=e.n(p),r=e(70347),E=e.n(r),P=e(18106),F=e(13062),S=e(89032)}}]);
