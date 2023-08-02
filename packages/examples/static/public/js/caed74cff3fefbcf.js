"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[766],{3566:function(e,n,l){l.d(n,{Z:function(){return r}});var s=l(2363);function r(e){let n=(0,s.useRef)(e);return n.current=(0,s.useMemo)(()=>e,[e]),n}},2517:function(e,n,l){l.d(n,{Z:function(){return t}});var s=l(2363),r=l(3566);function t(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:128,l=(0,s.useRef)(),t=(0,r.Z)(n),[i,a]=(0,s.useState)(e),u=(0,s.useCallback)(function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.current;clearTimeout(l.current),n<=0?a(e):l.current=setTimeout(()=>{a(e)},n)},[]);return(0,s.useEffect)(()=>()=>{clearTimeout(l.current)},[]),[i,u]}},7766:function(e,n,l){l.r(n),l.d(n,{default:function(){return M}});var s=l(9980),r={result:"ee1aa457",preview:"d52c0583"},t=l(2363),i=l(4541),a=l(2517),u=l(6880),c=l(3389),d=l(4579),o=l(5836),x=l(928),h=l(8297),m=l(6101),j=l(8546),f=l(2200),v=l(8253),Z=l(97);let{Option:p}=u.default,{TextArea:b}=c.default,{Item:g,useForm:w,useWatch:A}=d.default;function I(e){return"string"==typeof e?e:e.toHexString()}let y=(0,t.memo)(function(e){let{value:n}=e;if(n)switch(n.type){case"ok":return(0,s.jsx)(o.Z,{src:n.payload,alt:"preview",className:r.preview});case"error":return(0,s.jsx)(x.Z,{type:"error",message:n.message,showIcon:!0});default:return(0,s.jsx)(x.Z,{type:"error",message:"发生未知错误",showIcon:!0})}return null});var M=(0,t.memo)(function(){let[e]=w(),n=(0,t.useRef)(!1),c=A(["fnc1"],e),o=A("content",e),[x,M]=(0,a.Z)(!1),[k,S]=(0,t.useState)(),T=(0,t.useMemo)(()=>new Worker(new URL(l.p+l.u(365),l.b)),[]),C=(0,t.useMemo)(()=>({level:"M",fnc1:"None",mode:"Auto",moduleSize:4,quietZone:16,aimIndicator:0,version:"Auto",charset:"UTF_8",background:"#ffffff",foreground:"#000000",content:"https://github.com/nuintun/qrcode"}),[]),L=(0,t.useMemo)(()=>{let e=[(0,s.jsx)(p,{value:"Auto",children:"Auto"},"Auto")];for(let n=1;n<=40;n++)e.push((0,s.jsx)(p,{value:n,children:n},n));return e},[]),N=(0,t.useCallback)(e=>{if(!n.current){M(!0),n.current=!0;let{background:l,foreground:s}=e;T.postMessage({...e,background:I(l),foreground:I(s)})}},[]);return(0,t.useEffect)(()=>(T.addEventListener("message",e=>{let{data:l}=e;S(l),M(!1),n.current=!1}),()=>{T.terminate()}),[]),(0,s.jsxs)("div",{className:"ui-page",children:[(0,s.jsx)(d.default,{form:e,layout:"vertical",onFinish:N,initialValues:C,children:(0,s.jsxs)(h.Z,{gutter:24,children:[(0,s.jsx)(m.Z,{span:24,children:(0,s.jsx)(g,{name:"content",children:(0,s.jsx)(b,{rows:8,allowClear:!0})})}),(0,s.jsx)(m.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(g,{name:"fnc1",label:"支持 FNC1",children:(0,s.jsxs)(u.default,{children:[(0,s.jsx)(p,{value:"None",children:"否"}),(0,s.jsx)(p,{value:"AIM",children:"AIM"}),(0,s.jsx)(p,{value:"GS1",children:"GS1"})]})})}),(0,s.jsx)(m.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(g,{name:"aimIndicator",label:"AIM 标识",children:(0,s.jsx)(j.Z,{disabled:"AIM"!==c,min:0,max:255,style:{width:"100%"}})})}),(0,s.jsx)(m.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(g,{name:"version",label:"版本大小",children:(0,s.jsx)(u.default,{children:L})})}),(0,s.jsx)(m.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(g,{name:"level",label:"纠错等级",children:(0,s.jsxs)(u.default,{children:[(0,s.jsx)(p,{value:"L",children:"Level L (7%)"}),(0,s.jsx)(p,{value:"M",children:"Level M (15%)"}),(0,s.jsx)(p,{value:"Q",children:"Level Q (25%)"}),(0,s.jsx)(p,{value:"H",children:"Level H (30%)"})]})})}),(0,s.jsx)(m.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(g,{name:"mode",label:"编码模式",children:(0,s.jsxs)(u.default,{children:[(0,s.jsx)(p,{value:"Auto",selected:!0,children:"Auto"}),(0,s.jsx)(p,{value:"Alphanumeric",children:"Alphanumeric"}),(0,s.jsx)(p,{value:"Byte",children:"Byte"}),(0,s.jsx)(p,{value:"Hanzi",children:"Hanzi"}),(0,s.jsx)(p,{value:"Kanji",children:"Kanji"}),(0,s.jsx)(p,{value:"Numeric",children:"Numeric"})]})})}),(0,s.jsx)(m.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(g,{name:"charset",label:"字符编码",children:(0,s.jsxs)(u.default,{children:[(0,s.jsx)(p,{value:"ASCII",children:"ASCII"}),(0,s.jsx)(p,{value:"UTF_8",children:"UTF-8"}),(0,s.jsx)(p,{value:"ISO_8859_1",children:"ISO-8859-1"})]})})}),(0,s.jsx)(m.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(g,{name:"moduleSize",label:"模块大小",children:(0,s.jsx)(j.Z,{min:1,max:50,style:{width:"100%"}})})}),(0,s.jsx)(m.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(g,{name:"quietZone",label:"静区大小",tooltip:"推荐 4 倍模块大小",children:(0,s.jsx)(j.Z,{min:0,max:200,style:{width:"100%"}})})}),(0,s.jsx)(m.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(g,{name:"foreground",label:"前景颜色",children:(0,s.jsx)(f.Z,{showText:!0,disabledAlpha:!0})})}),(0,s.jsx)(m.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(g,{name:"background",label:"背景颜色",children:(0,s.jsx)(f.Z,{showText:!0,disabledAlpha:!0})})}),(0,s.jsx)(m.Z,{span:24,children:(0,s.jsx)(v.ZP,{type:"primary",htmlType:"submit",loading:x,disabled:!o,icon:(0,s.jsx)(i.Z,{component:Z.Z}),children:"编码"})})]})}),(0,s.jsx)("div",{className:r.result,children:(0,s.jsx)(y,{value:k})})]})})}}]);