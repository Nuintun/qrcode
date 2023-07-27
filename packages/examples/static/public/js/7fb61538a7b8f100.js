"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[515],{7515:function(e,l,n){n.r(l),n.d(l,{default:function(){return A}});var s=n(9980),r={result:"ee1aa457",qrcode:"eac52862"},t=n(2363),a=n(9882),i=n(2942),c=n(6976),u=n(5294),d=n(4188),o=n(7571),x=n(3963),h=n(9738),m=n(1599),j=n(872),f=n(438),v=n(590);let{Option:Z}=i.default,{TextArea:b}=c.default,{Item:p,useForm:g,useWatch:w}=u.default,I=new Worker(new URL(n.p+n.u(598),n.b));function y(e){return"string"==typeof e?e:e.toHexString()}let k=(0,t.memo)(function(e){let{value:l}=e;if(l){let{data:e}=l;switch(l.type){case"ok":return(0,s.jsx)(d.Z,{className:r.qrcode,src:e,alt:"qrcode"});case"error":return(0,s.jsx)(o.Z,{type:"error",message:e,showIcon:!0});default:return(0,s.jsx)(o.Z,{type:"error",message:"unknown error",showIcon:!0})}}return null});var A=(0,t.memo)(function(){let[e]=g(),l=w(["fnc1"],e),n=w("content",e),c=(0,t.useMemo)(()=>{let e=[(0,s.jsx)(Z,{value:"auto",children:"Auto"},"auto")];for(let l=1;l<=40;l++)e.push((0,s.jsx)(Z,{value:l,children:l},l));return e},[]),d=(0,t.useMemo)(()=>({level:"M",fnc1:"None",mode:"Auto",moduleSize:4,quietZone:16,aimIndicator:0,version:"auto",charset:"UTF_8",background:"#ffffff",foreground:"#000000",content:"https://github.com/nuintun/qrcode"}),[]),[o,A]=function(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:128,n=(0,t.useRef)(),s=function(e){let l=(0,t.useRef)(e);return l.current=(0,t.useMemo)(()=>e,[e]),l}(l),[r,a]=(0,t.useState)(e),i=(0,t.useCallback)(function(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.current;clearTimeout(n.current),l<=0?a(e):n.current=setTimeout(()=>{a(e)},l)},[]);return(0,t.useEffect)(()=>()=>{clearTimeout(n.current)},[]),[r,i]}(!1),[M,S]=(0,t.useState)();(0,t.useEffect)(()=>{let e=e=>{let{data:l}=e;S(l),A(!1)};return I.addEventListener("message",e),()=>{I.removeEventListener("message",e)}},[]);let L=(0,t.useCallback)(e=>{A(!0);let{background:l,foreground:n}=e;I.postMessage({...e,background:y(l),foreground:y(n)})},[]);return(0,s.jsxs)("div",{className:"page",children:[(0,s.jsx)(u.default,{form:e,onFinish:L,layout:"vertical",initialValues:d,children:(0,s.jsxs)(x.Z,{gutter:24,children:[(0,s.jsx)(h.Z,{span:24,children:(0,s.jsx)(p,{name:"content",children:(0,s.jsx)(b,{rows:8,allowClear:!0})})}),(0,s.jsx)(h.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(p,{name:"fnc1",label:"支持 FNC1",children:(0,s.jsxs)(i.default,{children:[(0,s.jsx)(Z,{value:"None",children:"否"}),(0,s.jsx)(Z,{value:"AIM",children:"AIM"}),(0,s.jsx)(Z,{value:"GS1",children:"GS1"})]})})}),(0,s.jsx)(h.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(p,{name:"aimIndicator",label:"AIM 标识",children:(0,s.jsx)(m.Z,{disabled:"AIM"!==l,min:0,max:255,style:{width:"100%"}})})}),(0,s.jsx)(h.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(p,{name:"version",label:"版本大小",children:(0,s.jsx)(i.default,{children:c})})}),(0,s.jsx)(h.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(p,{name:"level",label:"纠错等级",children:(0,s.jsxs)(i.default,{children:[(0,s.jsx)(Z,{value:"L",children:"Level L (7%)"}),(0,s.jsx)(Z,{value:"M",children:"Level M (15%)"}),(0,s.jsx)(Z,{value:"Q",children:"Level Q (25%)"}),(0,s.jsx)(Z,{value:"H",children:"Level H (30%)"})]})})}),(0,s.jsx)(h.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(p,{name:"mode",label:"编码方式",children:(0,s.jsxs)(i.default,{children:[(0,s.jsx)(Z,{value:"Auto",selected:!0,children:"Auto"}),(0,s.jsx)(Z,{value:"Alphanumeric",children:"Alphanumeric"}),(0,s.jsx)(Z,{value:"Byte",children:"Byte"}),(0,s.jsx)(Z,{value:"Hanzi",children:"Hanzi"}),(0,s.jsx)(Z,{value:"Kanji",children:"Kanji"}),(0,s.jsx)(Z,{value:"Numeric",children:"Numeric"})]})})}),(0,s.jsx)(h.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(p,{name:"charset",label:"字符集",children:(0,s.jsxs)(i.default,{children:[(0,s.jsx)(Z,{value:"ASCII",children:"ASCII"}),(0,s.jsx)(Z,{value:"UTF_8",children:"UTF-8"}),(0,s.jsx)(Z,{value:"ISO_8859_1",children:"ISO-8859-1"})]})})}),(0,s.jsx)(h.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(p,{name:"moduleSize",label:"模块大小",children:(0,s.jsx)(m.Z,{min:1,max:50,style:{width:"100%"}})})}),(0,s.jsx)(h.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(p,{name:"quietZone",label:"静区大小",children:(0,s.jsx)(m.Z,{min:0,max:200,style:{width:"100%"}})})}),(0,s.jsx)(h.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(p,{name:"foreground",label:"前景颜色",children:(0,s.jsx)(j.Z,{showText:!0,format:"hex"})})}),(0,s.jsx)(h.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(p,{name:"background",label:"背景颜色",children:(0,s.jsx)(j.Z,{showText:!0,format:"hex"})})}),(0,s.jsx)(h.Z,{span:24,children:(0,s.jsx)(f.ZP,{type:"primary",htmlType:"submit",loading:o,disabled:!n,icon:(0,s.jsx)(a.Z,{component:v.Z}),children:"编码"})})]})}),(0,s.jsx)("div",{className:r.result,children:(0,s.jsx)(k,{value:M})})]})})}}]);