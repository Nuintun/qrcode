"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[991],{7419:function(e,l,n){n.d(l,{Z:function(){return r}});var s=n(2363);function r(e){let l=(0,s.useRef)(e);return l.current=(0,s.useMemo)(()=>e,[e]),l}},5423:function(e,l,n){n.d(l,{Z:function(){return t}});var s=n(2363),r=n(7419);function t(e,l=128){let n=(0,s.useRef)(),t=(0,r.Z)(l),[i,a]=(0,s.useState)(e),u=(0,s.useCallback)((e,l=t.current)=>{clearTimeout(n.current),l<=0?a(e):n.current=setTimeout(()=>{a(e)},l)},[]);return(0,s.useEffect)(()=>()=>{clearTimeout(n.current)},[]),[i,u]}},6991:function(e,l,n){n.r(l),n.d(l,{default:function(){return C}});var s=n(9980),r={result:"ee1aa457",preview:"d52c0583"},t=n(2363),i=n(5423),a=n(5529),u=n(677),c=n(5412),d=n(9163),o=n(4175),x=n(1289),h=n(625),m=n(1024),j=n(2931),f=n(9178),v=n(2127),Z=n(8974),p=n(4285),b=n(1417);let{Option:g}=c.default,{TextArea:A}=d.default,{Item:w,useForm:I,useWatch:k}=o.default;function y(e){return"string"==typeof e?e:e.toHexString()}let S=(0,t.memo)(function({value:e}){if(e)switch(e.type){case"ok":return(0,s.jsx)(x.Z,{src:e.payload,alt:"preview",className:r.preview});case"error":return(0,s.jsx)(h.Z,{type:"error",message:e.message,showIcon:!0});default:return(0,s.jsx)(h.Z,{type:"error",message:"发生未知错误",showIcon:!0})}return null});var C=(0,t.memo)(function(){let e=(0,t.useRef)(!1),l=(0,t.useRef)(),[d]=I(),x=k(["fnc1"],d),h=k("content",d),[C,M]=(0,i.Z)(!1),[T,L]=(0,t.useState)(),F=(0,t.useMemo)(()=>({level:"L",fnc1:"None",mode:"Auto",moduleSize:4,quietZone:16,aimIndicator:0,version:"Auto",charset:"UTF_8",background:"#ffffff",foreground:"#000000",content:"WIFI:S:Gadget Hacks;T:WPA;P:1234567890;;"}),[]),N=(0,t.useMemo)(()=>{let e=[(0,s.jsx)(g,{value:"Auto",children:"Auto"},"Auto")];for(let l=1;l<=40;l++)e.push((0,s.jsx)(g,{value:l,children:l},l));return e},[]),H=(0,t.useCallback)(n=>{let s=l.current;if(s&&!e.current){M(!0),e.current=!0;let l={...n,background:y(n.background),foreground:y(n.foreground)};s.postMessage(l)}},[]),z=(0,t.useCallback)(()=>{let e=d.getFieldValue("moduleSize");d.setFieldsValue({quietZone:4*e})},[]);return(0,t.useEffect)(()=>{let s=new Worker(new URL(n.p+n.u(427),n.b));return s.addEventListener("message",({data:l})=>{L(l),M(!1),e.current=!1}),l.current=s,()=>{s.terminate()}},[]),(0,s.jsxs)("div",{className:"ui-page",children:[(0,s.jsx)(o.default,{form:d,layout:"vertical",onFinish:H,initialValues:F,children:(0,s.jsxs)(m.Z,{gutter:24,children:[(0,s.jsx)(j.Z,{span:24,children:(0,s.jsx)(w,{name:"content",children:(0,s.jsx)(A,{rows:8,allowClear:!0})})}),(0,s.jsx)(j.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(w,{name:"fnc1",label:"支持 FNC1",children:(0,s.jsxs)(c.default,{children:[(0,s.jsx)(g,{value:"None",children:"否"}),(0,s.jsx)(g,{value:"AIM",children:"AIM"}),(0,s.jsx)(g,{value:"GS1",children:"GS1"})]})})}),(0,s.jsx)(j.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(w,{name:"aimIndicator",label:"AIM 标识",children:(0,s.jsx)(f.Z,{disabled:"AIM"!==x,min:0,max:255,precision:0,style:{width:"100%"}})})}),(0,s.jsx)(j.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(w,{name:"version",label:"版本大小",children:(0,s.jsx)(c.default,{children:N})})}),(0,s.jsx)(j.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(w,{name:"level",label:"纠错等级",children:(0,s.jsxs)(c.default,{children:[(0,s.jsx)(g,{value:"L",children:"Level L (7%)"}),(0,s.jsx)(g,{value:"M",children:"Level M (15%)"}),(0,s.jsx)(g,{value:"Q",children:"Level Q (25%)"}),(0,s.jsx)(g,{value:"H",children:"Level H (30%)"})]})})}),(0,s.jsx)(j.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(w,{name:"mode",label:"编码模式",children:(0,s.jsxs)(c.default,{children:[(0,s.jsx)(g,{value:"Auto",selected:!0,children:"Auto"}),(0,s.jsx)(g,{value:"Alphanumeric",children:"Alphanumeric"}),(0,s.jsx)(g,{value:"Byte",children:"Byte"}),(0,s.jsx)(g,{value:"Hanzi",children:"Hanzi"}),(0,s.jsx)(g,{value:"Kanji",children:"Kanji"}),(0,s.jsx)(g,{value:"Numeric",children:"Numeric"})]})})}),(0,s.jsx)(j.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(w,{name:"charset",label:"字符编码",children:(0,s.jsxs)(c.default,{children:[(0,s.jsx)(g,{value:"ASCII",children:"ASCII"}),(0,s.jsx)(g,{value:"UTF_8",children:"UTF-8"}),(0,s.jsx)(g,{value:"ISO_8859_1",children:"ISO-8859-1"})]})})}),(0,s.jsx)(j.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(w,{name:"moduleSize",label:"模块大小",children:(0,s.jsx)(f.Z,{min:1,max:50,precision:0,style:{width:"100%"}})})}),(0,s.jsx)(j.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(w,{name:"quietZone",label:"静区大小",tooltip:"推荐 4 倍模块大小",children:(0,s.jsx)(f.Z,{min:0,max:200,precision:0,style:{width:"100%"},addonAfter:(0,s.jsx)(v.Z,{title:"自动计算",children:(0,s.jsx)(a.Z,{onClick:z})})})})}),(0,s.jsx)(j.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(w,{name:"foreground",label:"前景颜色",children:(0,s.jsx)(Z.Z,{showText:!0,disabledAlpha:!0})})}),(0,s.jsx)(j.Z,{md:6,sm:12,xs:24,children:(0,s.jsx)(w,{name:"background",label:"背景颜色",children:(0,s.jsx)(Z.Z,{showText:!0,disabledAlpha:!0})})}),(0,s.jsx)(j.Z,{span:24,children:(0,s.jsx)(p.ZP,{type:"primary",htmlType:"submit",loading:C,disabled:!h,icon:(0,s.jsx)(u.Z,{component:b.Z}),children:"编码"})})]})}),(0,s.jsx)("div",{className:r.result,children:(0,s.jsx)(S,{value:T})})]})})}}]);