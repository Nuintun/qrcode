"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[628],{2441:function(e,n,l){l.d(n,{Z:function(){return s}});var r=l(2363);function s(e){let n=(0,r.useRef)(e);return n.current=(0,r.useMemo)(()=>e,[e]),n}},7653:function(e,n,l){l.d(n,{Z:function(){return t}});var r=l(2363),s=l(2441);function t(e,n=128){let l=(0,r.useRef)(),t=(0,s.Z)(n),[a,i]=(0,r.useState)(e),u=(0,r.useCallback)((e,n=t.current)=>{clearTimeout(l.current),n<=0?i(e):l.current=setTimeout(()=>{i(e)},n)},[]);return(0,r.useEffect)(()=>()=>{clearTimeout(l.current)},[]),[a,u]}},2628:function(e,n,l){l.r(n),l.d(n,{default:function(){return k}});var r=l(9980),s={result:"ee1aa457",preview:"d52c0583"},t=l(2363),a=l(677),i=l(7653),u=l(1768),c=l(6922),d=l(9392),o=l(3423),x=l(2577),h=l(2611),m=l(6317),j=l(89),f=l(6928),v=l(163),Z=l(1350);let{Option:p}=u.default,{TextArea:b}=c.default,{Item:g,useForm:w,useWatch:A}=d.default;function I(e){return"string"==typeof e?e:e.toHexString()}let y=(0,t.memo)(function({value:e}){if(e)switch(e.type){case"ok":return(0,r.jsx)(o.Z,{src:e.payload,alt:"preview",className:s.preview});case"error":return(0,r.jsx)(x.Z,{type:"error",message:e.message,showIcon:!0});default:return(0,r.jsx)(x.Z,{type:"error",message:"发生未知错误",showIcon:!0})}return null});var k=(0,t.memo)(function(){let e=(0,t.useRef)(!1),n=(0,t.useRef)(),[c]=w(),o=A(["fnc1"],c),x=A("content",c),[k,M]=(0,i.Z)(!1),[S,T]=(0,t.useState)(),C=(0,t.useMemo)(()=>({level:"M",fnc1:"None",mode:"Auto",moduleSize:4,quietZone:16,aimIndicator:0,version:"Auto",charset:"UTF_8",background:"#ffffff",foreground:"#000000",content:"https://github.com/nuintun/qrcode"}),[]),L=(0,t.useMemo)(()=>{let e=[(0,r.jsx)(p,{value:"Auto",children:"Auto"},"Auto")];for(let n=1;n<=40;n++)e.push((0,r.jsx)(p,{value:n,children:n},n));return e},[]),N=(0,t.useCallback)(l=>{let r=n.current;if(r&&!e.current){M(!0),e.current=!0;let n={...l,background:I(l.background),foreground:I(l.foreground)};r.postMessage(n)}},[]);return(0,t.useEffect)(()=>{let r=new Worker(new URL(l.p+l.u(738),l.b));return r.addEventListener("message",({data:n})=>{T(n),M(!1),e.current=!1}),n.current=r,()=>{r.terminate()}},[]),(0,r.jsxs)("div",{className:"ui-page",children:[(0,r.jsx)(d.default,{form:c,layout:"vertical",onFinish:N,initialValues:C,children:(0,r.jsxs)(h.Z,{gutter:24,children:[(0,r.jsx)(m.Z,{span:24,children:(0,r.jsx)(g,{name:"content",children:(0,r.jsx)(b,{rows:8,allowClear:!0})})}),(0,r.jsx)(m.Z,{md:6,sm:12,xs:24,children:(0,r.jsx)(g,{name:"fnc1",label:"支持 FNC1",children:(0,r.jsxs)(u.default,{children:[(0,r.jsx)(p,{value:"None",children:"否"}),(0,r.jsx)(p,{value:"AIM",children:"AIM"}),(0,r.jsx)(p,{value:"GS1",children:"GS1"})]})})}),(0,r.jsx)(m.Z,{md:6,sm:12,xs:24,children:(0,r.jsx)(g,{name:"aimIndicator",label:"AIM 标识",children:(0,r.jsx)(j.Z,{disabled:"AIM"!==o,min:0,max:255,style:{width:"100%"}})})}),(0,r.jsx)(m.Z,{md:6,sm:12,xs:24,children:(0,r.jsx)(g,{name:"version",label:"版本大小",children:(0,r.jsx)(u.default,{children:L})})}),(0,r.jsx)(m.Z,{md:6,sm:12,xs:24,children:(0,r.jsx)(g,{name:"level",label:"纠错等级",children:(0,r.jsxs)(u.default,{children:[(0,r.jsx)(p,{value:"L",children:"Level L (7%)"}),(0,r.jsx)(p,{value:"M",children:"Level M (15%)"}),(0,r.jsx)(p,{value:"Q",children:"Level Q (25%)"}),(0,r.jsx)(p,{value:"H",children:"Level H (30%)"})]})})}),(0,r.jsx)(m.Z,{md:6,sm:12,xs:24,children:(0,r.jsx)(g,{name:"mode",label:"编码模式",children:(0,r.jsxs)(u.default,{children:[(0,r.jsx)(p,{value:"Auto",selected:!0,children:"Auto"}),(0,r.jsx)(p,{value:"Alphanumeric",children:"Alphanumeric"}),(0,r.jsx)(p,{value:"Byte",children:"Byte"}),(0,r.jsx)(p,{value:"Hanzi",children:"Hanzi"}),(0,r.jsx)(p,{value:"Kanji",children:"Kanji"}),(0,r.jsx)(p,{value:"Numeric",children:"Numeric"})]})})}),(0,r.jsx)(m.Z,{md:6,sm:12,xs:24,children:(0,r.jsx)(g,{name:"charset",label:"字符编码",children:(0,r.jsxs)(u.default,{children:[(0,r.jsx)(p,{value:"ASCII",children:"ASCII"}),(0,r.jsx)(p,{value:"UTF_8",children:"UTF-8"}),(0,r.jsx)(p,{value:"ISO_8859_1",children:"ISO-8859-1"})]})})}),(0,r.jsx)(m.Z,{md:6,sm:12,xs:24,children:(0,r.jsx)(g,{name:"moduleSize",label:"模块大小",children:(0,r.jsx)(j.Z,{min:1,max:50,style:{width:"100%"}})})}),(0,r.jsx)(m.Z,{md:6,sm:12,xs:24,children:(0,r.jsx)(g,{name:"quietZone",label:"静区大小",tooltip:"推荐 4 倍模块大小",children:(0,r.jsx)(j.Z,{min:0,max:200,style:{width:"100%"}})})}),(0,r.jsx)(m.Z,{md:6,sm:12,xs:24,children:(0,r.jsx)(g,{name:"foreground",label:"前景颜色",children:(0,r.jsx)(f.Z,{showText:!0,disabledAlpha:!0})})}),(0,r.jsx)(m.Z,{md:6,sm:12,xs:24,children:(0,r.jsx)(g,{name:"background",label:"背景颜色",children:(0,r.jsx)(f.Z,{showText:!0,disabledAlpha:!0})})}),(0,r.jsx)(m.Z,{span:24,children:(0,r.jsx)(v.ZP,{type:"primary",htmlType:"submit",loading:k,disabled:!x,icon:(0,r.jsx)(a.Z,{component:Z.Z}),children:"编码"})})]})}),(0,r.jsx)("div",{className:s.result,children:(0,r.jsx)(y,{value:S})})]})})}}]);