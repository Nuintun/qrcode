"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80],{3701:function(e,n,l){l.d(n,{A:function(){return r}});var s=l(5832);function r(e){let n=(0,s.useRef)(e);return n.current=(0,s.useMemo)(()=>e,[e]),n}},318:function(e,n,l){l.d(n,{A:function(){return i}});var s=l(5832),r=l(3701);function i(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:128,l=(0,s.useRef)(),i=(0,r.A)(n),[t,c]=(0,s.useState)(e),a=(0,s.useCallback)(function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.current;clearTimeout(l.current),n<=0?c(e):l.current=setTimeout(()=>{c(e)},n)},[]);return(0,s.useEffect)(()=>()=>{clearTimeout(l.current)},[]),[t,a]}},7080:function(e,n,l){l.r(n),l.d(n,{default:function(){return C}});var s=l(9252),r=l(5832),i=l(318),t=l(3604),c=l(7729),a=l(897),u=l(1099),d=l(4783),o=l(1707),x=l(8669),h=l(8096),m=l(1474),j=l(3348),A=l(6978),f=l(4534),v=l(5566),p=l(8801);let{Option:b}=a.A,{TextArea:g}=u.A,{Item:I,useForm:y,useWatch:k}=d.A;function w(e){return"string"==typeof e?e:e.toHexString()}let S=(0,r.memo)(function(e){let{value:n}=e;if(n)switch(n.type){case"ok":return(0,s.jsx)(o.A,{src:n.payload,alt:"preview",className:"d52c0583"});case"error":return(0,s.jsx)(x.A,{type:"error",message:n.message,showIcon:!0});default:return(0,s.jsx)(x.A,{type:"error",message:"发生未知错误",showIcon:!0})}return null});var C=(0,r.memo)(function(){let e=(0,r.useRef)(!1),n=(0,r.useRef)(),[u]=y(),[o,x]=(0,i.A)(!1),[C,M]=(0,r.useState)(),T=(0,r.useMemo)(()=>({level:"L",fnc1:"None",mode:"Auto",moduleSize:4,quietZone:16,aimIndicator:0,version:"Auto",charset:"UTF_8",background:"#ffffff",foreground:"#000000",content:"WIFI:S:Gadget Hacks;T:WPA;P:1234567890;;"}),[]),L=(0,r.useMemo)(()=>{let e=[(0,s.jsx)(b,{value:"Auto",children:"Auto"},"Auto")];for(let n=1;n<=40;n++)e.push((0,s.jsx)(b,{value:n,children:n},n));return e},[]),F=(0,r.useCallback)(l=>{let s=n.current;if(s&&!e.current){x(!0),e.current=!0;let n={...l,background:w(l.background),foreground:w(l.foreground)};s.postMessage(n)}},[]),N=(0,r.useCallback)(()=>{let e=u.getFieldValue("moduleSize");u.setFieldsValue({quietZone:4*e})},[]),H=k("mode",u)??T.mode,z=k(["fnc1"],u)??T.fnc1,R=k("content",u)??T.content;return(0,r.useEffect)(()=>{let s=new Worker(new URL(l.p+l.u(456),l.b));return s.addEventListener("message",n=>{let{data:l}=n;M(l),x(!1),e.current=!1}),n.current=s,()=>{s.terminate()}},[]),(0,s.jsxs)("div",{className:"ui-page",children:[(0,s.jsx)(d.A,{form:u,layout:"vertical",onFinish:F,initialValues:T,children:(0,s.jsxs)(h.A,{gutter:24,children:[(0,s.jsx)(m.A,{span:24,children:(0,s.jsx)(I,{name:"content",children:(0,s.jsx)(g,{rows:8,allowClear:!0})})}),(0,s.jsx)(m.A,{md:6,sm:12,xs:24,children:(0,s.jsx)(I,{name:"mode",label:"编码模式",children:(0,s.jsxs)(a.A,{children:[(0,s.jsx)(b,{value:"Auto",selected:!0,children:"Auto"}),(0,s.jsx)(b,{value:"Alphanumeric",children:"Alphanumeric"}),(0,s.jsx)(b,{value:"Byte",children:"Byte"}),(0,s.jsx)(b,{value:"Hanzi",children:"Hanzi"}),(0,s.jsx)(b,{value:"Kanji",children:"Kanji"}),(0,s.jsx)(b,{value:"Numeric",children:"Numeric"})]})})}),(0,s.jsx)(m.A,{md:6,sm:12,xs:24,children:(0,s.jsx)(I,{name:"charset",label:"字符编码",children:(0,s.jsxs)(a.A,{disabled:"Auto"!==H&&"Byte"!==H,children:[(0,s.jsx)(b,{value:"ASCII",children:"ASCII"}),(0,s.jsx)(b,{value:"UTF_8",children:"UTF-8"}),(0,s.jsx)(b,{value:"ISO_8859_1",children:"ISO-8859-1"})]})})}),(0,s.jsx)(m.A,{md:6,sm:12,xs:24,children:(0,s.jsx)(I,{name:"version",label:"版本大小",children:(0,s.jsx)(a.A,{children:L})})}),(0,s.jsx)(m.A,{md:6,sm:12,xs:24,children:(0,s.jsx)(I,{name:"level",label:"纠错等级",children:(0,s.jsxs)(a.A,{children:[(0,s.jsx)(b,{value:"L",children:"Level L (7%)"}),(0,s.jsx)(b,{value:"M",children:"Level M (15%)"}),(0,s.jsx)(b,{value:"Q",children:"Level Q (25%)"}),(0,s.jsx)(b,{value:"H",children:"Level H (30%)"})]})})}),(0,s.jsx)(m.A,{md:6,sm:12,xs:24,children:(0,s.jsx)(I,{name:"fnc1",label:"支持 FNC1",children:(0,s.jsxs)(a.A,{children:[(0,s.jsx)(b,{value:"None",children:"否"}),(0,s.jsx)(b,{value:"AIM",children:"AIM"}),(0,s.jsx)(b,{value:"GS1",children:"GS1"})]})})}),(0,s.jsx)(m.A,{md:6,sm:12,xs:24,children:(0,s.jsx)(I,{name:"aimIndicator",label:"AIM 标识",children:(0,s.jsx)(j.A,{disabled:"AIM"!==z,min:0,max:255,precision:0,style:{width:"100%"}})})}),(0,s.jsx)(m.A,{md:6,sm:12,xs:24,children:(0,s.jsx)(I,{name:"moduleSize",label:"模块大小",children:(0,s.jsx)(j.A,{min:1,max:50,precision:0,style:{width:"100%"}})})}),(0,s.jsx)(m.A,{md:6,sm:12,xs:24,children:(0,s.jsx)(I,{name:"quietZone",label:"静区大小",tooltip:"推荐 4 倍模块大小",children:(0,s.jsx)(j.A,{min:0,max:200,precision:0,style:{width:"100%"},addonAfter:(0,s.jsx)(A.A,{title:"自动计算",children:(0,s.jsx)(t.A,{onClick:N})})})})}),(0,s.jsx)(m.A,{md:6,sm:12,xs:24,children:(0,s.jsx)(I,{name:"foreground",label:"前景颜色",children:(0,s.jsx)(f.A,{showText:!0,disabledAlpha:!0})})}),(0,s.jsx)(m.A,{md:6,sm:12,xs:24,children:(0,s.jsx)(I,{name:"background",label:"背景颜色",children:(0,s.jsx)(f.A,{showText:!0,disabledAlpha:!0})})}),(0,s.jsx)(m.A,{span:24,children:(0,s.jsx)(v.Ay,{type:"primary",htmlType:"submit",loading:o,disabled:!R,icon:(0,s.jsx)(c.A,{component:p.A}),children:"编码"})})]})}),(0,s.jsx)("div",{className:"ee1aa457",children:(0,s.jsx)(S,{value:C})})]})})}}]);