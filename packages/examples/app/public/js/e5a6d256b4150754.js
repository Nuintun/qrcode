"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40],{451:function(e,n,l){l.d(n,{A:function(){return r}});var s=l(2860);function r(e){let n=(0,s.useRef)(e);return n.current=(0,s.useMemo)(()=>e,[e]),n}},720:function(e,n,l){l.d(n,{A:function(){return i}});var s=l(451),r=l(2860);function t(e){let{current:n}=e;null!=n&&(clearTimeout(n),e.current=null)}function i(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:128,l=(0,s.A)(n),i=(0,r.useRef)(null),[c,u]=(0,r.useState)(e),a=(0,r.useCallback)(function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.current;t(i),n<=0?u(e):i.current=setTimeout(()=>{null!=i.current&&(u(e),i.current=null)},n)},[]);return(0,r.useEffect)(()=>()=>{t(i)},[]),[c,a]}},3040:function(e,n,l){l.r(n),l.d(n,{default:function(){return C}});var s=l(8048),r=l(720),t=l(9269),i=l(7666),c=l(2860),u=l(3086),a=l(8914),d=l(1353),o=l(7523),x=l(553),h=l(9129),m=l(7847),j=l(3518),A=l(1509),f=l(4206),v=l(2899),p=l(7441);let{Option:b}=u.A,{TextArea:g}=a.A,{Item:I,useForm:y,useWatch:k}=d.A;function w(e){return"string"==typeof e?e:e.toHexString()}let S=(0,c.memo)(function(e){let{value:n}=e;if(n)switch(n.type){case"ok":return(0,s.jsx)(o.A,{src:n.payload,alt:"preview",className:"d52c0583"});case"error":return(0,s.jsx)(x.A,{type:"error",message:n.message,showIcon:!0});default:return(0,s.jsx)(x.A,{type:"error",message:"发生未知错误",showIcon:!0})}return null});var C=(0,c.memo)(function(){let e=(0,c.useRef)(!1),n=(0,c.useRef)(),[a]=y(),[o,x]=(0,r.A)(!1),[C,M]=(0,c.useState)(),L=(0,c.useMemo)(()=>({level:"L",fnc1:"None",mode:"Auto",moduleSize:4,quietZone:16,aimIndicator:0,version:"Auto",charset:"UTF_8",background:"#ffffff",foreground:"#000000",content:"WIFI:S:Gadget Hacks;T:WPA;P:1234567890;;"}),[]),T=(0,c.useMemo)(()=>{let e=[(0,s.jsx)(b,{value:"Auto",children:"Auto"},"Auto")];for(let n=1;n<=40;n++)e.push((0,s.jsx)(b,{value:n,children:n},n));return e},[]),F=(0,c.useCallback)(l=>{let s=n.current;if(s&&!e.current){x(!0),e.current=!0;let n={...l,background:w(l.background),foreground:w(l.foreground)};s.postMessage(n)}},[]),N=(0,c.useCallback)(()=>{let e=a.getFieldValue("moduleSize");a.setFieldsValue({quietZone:4*e})},[]),H=k("mode",a)??L.mode,z=k(["fnc1"],a)??L.fnc1,R=k("content",a)??L.content;return(0,c.useEffect)(()=>{let s=new Worker(new URL(l.p+l.u(100),l.b));return s.addEventListener("message",n=>{let{data:l}=n;M(l),x(!1),e.current=!1}),n.current=s,()=>{s.terminate()}},[]),(0,s.jsxs)("div",{className:"ui-page",children:[(0,s.jsx)(d.A,{form:a,layout:"vertical",onFinish:F,initialValues:L,children:(0,s.jsxs)(h.A,{gutter:24,children:[(0,s.jsx)(m.A,{span:24,children:(0,s.jsx)(I,{name:"content",children:(0,s.jsx)(g,{rows:8,allowClear:!0})})}),(0,s.jsx)(m.A,{md:6,sm:12,xs:24,children:(0,s.jsx)(I,{name:"mode",label:"编码模式",children:(0,s.jsxs)(u.A,{children:[(0,s.jsx)(b,{value:"Auto",selected:!0,children:"Auto"}),(0,s.jsx)(b,{value:"Alphanumeric",children:"Alphanumeric"}),(0,s.jsx)(b,{value:"Byte",children:"Byte"}),(0,s.jsx)(b,{value:"Hanzi",children:"Hanzi"}),(0,s.jsx)(b,{value:"Kanji",children:"Kanji"}),(0,s.jsx)(b,{value:"Numeric",children:"Numeric"})]})})}),(0,s.jsx)(m.A,{md:6,sm:12,xs:24,children:(0,s.jsx)(I,{name:"charset",label:"字符编码",children:(0,s.jsxs)(u.A,{disabled:"Auto"!==H&&"Byte"!==H,children:[(0,s.jsx)(b,{value:"ASCII",children:"ASCII"}),(0,s.jsx)(b,{value:"UTF_8",children:"UTF-8"}),(0,s.jsx)(b,{value:"ISO_8859_1",children:"ISO-8859-1"})]})})}),(0,s.jsx)(m.A,{md:6,sm:12,xs:24,children:(0,s.jsx)(I,{name:"version",label:"版本大小",children:(0,s.jsx)(u.A,{children:T})})}),(0,s.jsx)(m.A,{md:6,sm:12,xs:24,children:(0,s.jsx)(I,{name:"level",label:"纠错等级",children:(0,s.jsxs)(u.A,{children:[(0,s.jsx)(b,{value:"L",children:"Level L (7%)"}),(0,s.jsx)(b,{value:"M",children:"Level M (15%)"}),(0,s.jsx)(b,{value:"Q",children:"Level Q (25%)"}),(0,s.jsx)(b,{value:"H",children:"Level H (30%)"})]})})}),(0,s.jsx)(m.A,{md:6,sm:12,xs:24,children:(0,s.jsx)(I,{name:"fnc1",label:"支持 FNC1",children:(0,s.jsxs)(u.A,{children:[(0,s.jsx)(b,{value:"None",children:"否"}),(0,s.jsx)(b,{value:"AIM",children:"AIM"}),(0,s.jsx)(b,{value:"GS1",children:"GS1"})]})})}),(0,s.jsx)(m.A,{md:6,sm:12,xs:24,children:(0,s.jsx)(I,{name:"aimIndicator",label:"AIM 标识",children:(0,s.jsx)(j.A,{disabled:"AIM"!==z,min:0,max:255,precision:0,style:{width:"100%"}})})}),(0,s.jsx)(m.A,{md:6,sm:12,xs:24,children:(0,s.jsx)(I,{name:"moduleSize",label:"模块大小",children:(0,s.jsx)(j.A,{min:1,max:50,precision:0,style:{width:"100%"}})})}),(0,s.jsx)(m.A,{md:6,sm:12,xs:24,children:(0,s.jsx)(I,{name:"quietZone",label:"静区大小",tooltip:"推荐 4 倍模块大小",children:(0,s.jsx)(j.A,{min:0,max:200,precision:0,style:{width:"100%"},addonAfter:(0,s.jsx)(A.A,{title:"自动计算",children:(0,s.jsx)(t.A,{onClick:N})})})})}),(0,s.jsx)(m.A,{md:6,sm:12,xs:24,children:(0,s.jsx)(I,{name:"foreground",label:"前景颜色",children:(0,s.jsx)(f.A,{showText:!0,disabledAlpha:!0})})}),(0,s.jsx)(m.A,{md:6,sm:12,xs:24,children:(0,s.jsx)(I,{name:"background",label:"背景颜色",children:(0,s.jsx)(f.A,{showText:!0,disabledAlpha:!0})})}),(0,s.jsx)(m.A,{span:24,children:(0,s.jsx)(v.Ay,{type:"primary",htmlType:"submit",loading:o,disabled:!R,icon:(0,s.jsx)(i.A,{component:p.A}),children:"编码"})})]})}),(0,s.jsx)("div",{className:"ee1aa457",children:(0,s.jsx)(S,{value:C})})]})})}}]);