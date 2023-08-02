"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[457],{3566:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(2363);function r(e){let n=(0,i.useRef)(e);return n.current=(0,i.useMemo)(()=>e,[e]),n}},2517:function(e,n,t){t.d(n,{Z:function(){return a}});var i=t(2363),r=t(3566);function a(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:128,t=(0,i.useRef)(),a=(0,r.Z)(n),[c,l]=(0,i.useState)(e),s=(0,i.useCallback)(function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.current;clearTimeout(t.current),n<=0?l(e):t.current=setTimeout(()=>{l(e)},n)},[]);return(0,i.useEffect)(()=>()=>{clearTimeout(t.current)},[]),[c,s]}},7611:function(e,n,t){t.r(n),t.d(n,{default:function(){return eg}});var i=t(9980),r={preview:"f9962498",result:"ebf18c46",contents:"aaf4de2d"},a=t(2363),c=t(4541),l=t(2517);let s=(()=>{if("undefined"==typeof self)return!1;if("top"in self&&self!==top)try{top}catch(e){return!1}return"showOpenFilePicker"in self})(),o=s?Promise.resolve().then(function(){return h}):Promise.resolve().then(function(){return f});async function d(...e){return(await o).default(...e)}s?Promise.resolve().then(function(){return w}):Promise.resolve().then(function(){return y}),s?Promise.resolve().then(function(){return g}):Promise.resolve().then(function(){return v});let u=async e=>{let n=await e.getFile();return n.handle=e,n};var h={__proto__:null,default:async(e=[{}])=>{Array.isArray(e)||(e=[e]);let n=[];e.forEach((e,t)=>{n[t]={description:e.description||"Files",accept:{}},e.mimeTypes?e.mimeTypes.map(i=>{n[t].accept[i]=e.extensions||[]}):n[t].accept["*/*"]=e.extensions||[]});let t=await window.showOpenFilePicker({id:e[0].id,startIn:e[0].startIn,types:n,multiple:e[0].multiple||!1,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),i=await Promise.all(t.map(u));return e[0].multiple?i:i[0]}};function p(e){function n(e){if(Object(e)!==e)return Promise.reject(TypeError(e+" is not an object."));var n=e.done;return Promise.resolve(e.value).then(function(e){return{value:e,done:n}})}return(p=function(e){this.s=e,this.n=e.next}).prototype={s:null,n:null,next:function(){return n(this.n.apply(this.s,arguments))},return:function(e){var t=this.s.return;return void 0===t?Promise.resolve({value:e,done:!0}):n(t.apply(this.s,arguments))},throw:function(e){var t=this.s.return;return void 0===t?Promise.reject(e):n(t.apply(this.s,arguments))}},new p(e)}let m=async(e,n,t=e.name,i)=>{let r=[],a=[];var c,l=!1,s=!1;try{for(var o,d=function(e){var n,t,i,r=2;for("undefined"!=typeof Symbol&&(t=Symbol.asyncIterator,i=Symbol.iterator);r--;){if(t&&null!=(n=e[t]))return n.call(e);if(i&&null!=(n=e[i]))return new p(n.call(e));t="@@asyncIterator",i="@@iterator"}throw TypeError("Object is not async iterable")}(e.values());l=!(o=await d.next()).done;l=!1){let c=o.value,l=`${t}/${c.name}`;"file"===c.kind?a.push(c.getFile().then(n=>(n.directoryHandle=e,n.handle=c,Object.defineProperty(n,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>l})))):"directory"!==c.kind||!n||i&&i(c)||r.push(m(c,n,l,i))}}catch(e){s=!0,c=e}finally{try{l&&null!=d.return&&await d.return()}finally{if(s)throw c}}return[...(await Promise.all(r)).flat(),...await Promise.all(a)]};var w={__proto__:null,default:async(e={})=>{e.recursive=e.recursive||!1,e.mode=e.mode||"read";let n=await window.showDirectoryPicker({id:e.id,startIn:e.startIn,mode:e.mode});return(await (await n.values()).next()).done?[n]:m(n,e.recursive,void 0,e.skipDirectory)}},g={__proto__:null,default:async(e,n=[{}],t=null,i=!1,r=null)=>{Array.isArray(n)||(n=[n]),n[0].fileName=n[0].fileName||"Untitled";let a=[],c=null;if(e instanceof Blob&&e.type?c=e.type:e.headers&&e.headers.get("content-type")&&(c=e.headers.get("content-type")),n.forEach((e,n)=>{a[n]={description:e.description||"Files",accept:{}},e.mimeTypes?(0===n&&c&&e.mimeTypes.push(c),e.mimeTypes.map(t=>{a[n].accept[t]=e.extensions||[]})):c?a[n].accept[c]=e.extensions||[]:a[n].accept["*/*"]=e.extensions||[]}),t)try{await t.getFile()}catch(e){if(t=null,i)throw e}let l=t||await window.showSaveFilePicker({suggestedName:n[0].fileName,id:n[0].id,startIn:n[0].startIn,types:a,excludeAcceptAllOption:n[0].excludeAcceptAllOption||!1});!t&&r&&r(l);let s=await l.createWritable();if("stream"in e){let n=e.stream();return await n.pipeTo(s),l}return"body"in e?await e.body.pipeTo(s):(await s.write(await e),await s.close()),l}},f={__proto__:null,default:async(e=[{}])=>(Array.isArray(e)||(e=[e]),new Promise((n,t)=>{let i=document.createElement("input");i.type="file";let r=[...e.map(e=>e.mimeTypes||[]),...e.map(e=>e.extensions||[])].join();i.multiple=e[0].multiple||!1,i.accept=r||"",i.style.display="none",document.body.append(i);let a=e=>{"function"==typeof c&&c(),n(e)},c=e[0].legacySetup&&e[0].legacySetup(a,()=>c(t),i),l=()=>{window.removeEventListener("focus",l),i.remove()};i.addEventListener("click",()=>{window.addEventListener("focus",l)}),i.addEventListener("change",()=>{window.removeEventListener("focus",l),i.remove(),a(i.multiple?Array.from(i.files):i.files[0])}),"showPicker"in HTMLInputElement.prototype?i.showPicker():i.click()}))},y={__proto__:null,default:async(e=[{}])=>(Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise((n,t)=>{let i=document.createElement("input");i.type="file",i.webkitdirectory=!0;let r=e=>{"function"==typeof a&&a(),n(e)},a=e[0].legacySetup&&e[0].legacySetup(r,()=>a(t),i);i.addEventListener("change",()=>{let n=Array.from(i.files);e[0].recursive?e[0].recursive&&e[0].skipDirectory&&(n=n.filter(n=>n.webkitRelativePath.split("/").every(n=>!e[0].skipDirectory({name:n,kind:"directory"})))):n=n.filter(e=>2===e.webkitRelativePath.split("/").length),r(n)}),"showPicker"in HTMLInputElement.prototype?i.showPicker():i.click()}))},v={__proto__:null,default:async(e,n={})=>{Array.isArray(n)&&(n=n[0]);let t=document.createElement("a"),i=e;"body"in e&&(i=await async function(e,n){let t=e.getReader(),i=new ReadableStream({start:e=>(async function n(){return t.read().then(({done:t,value:i})=>{if(!t)return e.enqueue(i),n();e.close()})})()}),r=new Response(i),a=await r.blob();return t.releaseLock(),new Blob([a],{type:n})}(e.body,e.headers.get("content-type"))),t.download=n.fileName||"Untitled",t.href=URL.createObjectURL(await i);let r=()=>{"function"==typeof a&&a()},a=n.legacySetup&&n.legacySetup(r,()=>a(),t);return t.addEventListener("click",()=>{setTimeout(()=>URL.revokeObjectURL(t.href),3e4),r()}),t.click(),null}},S=t(3566);function x(e){return"function"==typeof e}function b(e){let{valuePropName:n="value"}=e;return n}function k(e,n){let t=b(n);return t in e}function $(e,n){let t=b(n);return e[t]}var I=(0,a.memo)(function(e){let n=(0,a.useRef)(),[t,r]=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=function(){let e=(0,a.useRef)(!1);return(0,a.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),(0,a.useCallback)(()=>e.current,[])}(),i=(0,S.Z)(e),r=(0,S.Z)(n),[c=n.defaultValue,l]=(0,a.useState)(()=>k(e,n)?$(e,n):function(e,n){let t=function(e){let{defaultValuePropName:n="defaultValue"}=e;return n}(n);return e[t]}(e,n)),s=(0,S.Z)(c),o=(0,a.useCallback)(function(e){for(var n=arguments.length,a=Array(n>1?n-1:0),c=1;c<n;c++)a[c-1]=arguments[c];if(t()){let{current:n}=s,t=x(e)?e(n):e;if(t!==n){let{current:e}=i,{trigger:n="onChange"}=e,{current:c}=r;k(e,c)||l(t),x(e[n])&&e[n](t,...a)}}},[]);return(0,a.useEffect)(()=>{if(k(e,n)){let t=$(e,n);t!==c&&l(t)}}),[c,o]}(e),{children:c,disabled:l,preview:s,accept:o="image/*"}=e,u=(0,a.useCallback)(()=>{l||d({mimeTypes:[o]}).then(e=>{r(()=>(n.current&&URL.revokeObjectURL(n.current),n.current=URL.createObjectURL(e),n.current))})},[o,l]);return(0,i.jsxs)("div",{className:"a6678820",children:[(0,i.jsx)("div",{onClick:u,children:c}),s&&s(t)]})}),M=t(4579),P=t(5836),j=t(9871),C=t(928),E=t(8297),z=t(6101),Z=t(8253),O=t(3688),L=t(8920),A=t.n(L),T=t(9276),H=t(8584),_=t(7123),R=t(6100),N=t(6802),D=t(5986),U=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],V=a.forwardRef(function(e,n){var t,i=e.prefixCls,r=void 0===i?"rc-switch":i,c=e.className,l=e.checked,s=e.defaultChecked,o=e.disabled,d=e.loadingIcon,u=e.checkedChildren,h=e.unCheckedChildren,p=e.onClick,m=e.onChange,w=e.onKeyDown,g=(0,R.Z)(e,U),f=(0,N.Z)(!1,{value:l,defaultValue:s}),y=(0,_.Z)(f,2),v=y[0],S=y[1];function x(e,n){var t=v;return o||(S(t=e),null==m||m(t,n)),t}var b=A()(r,c,(t={},(0,H.Z)(t,"".concat(r,"-checked"),v),(0,H.Z)(t,"".concat(r,"-disabled"),o),t));return a.createElement("button",(0,T.Z)({},g,{type:"button",role:"switch","aria-checked":v,disabled:o,className:b,ref:n,onKeyDown:function(e){e.which===D.Z.LEFT?x(!1,e):e.which===D.Z.RIGHT&&x(!0,e),null==w||w(e)},onClick:function(e){var n=x(!v,e);null==p||p(n,e)}}),d,a.createElement("span",{className:"".concat(r,"-inner")},a.createElement("span",{className:"".concat(r,"-inner-checked")},u),a.createElement("span",{className:"".concat(r,"-inner-unchecked")},h)))});V.displayName="Switch";var W=t(6034),F=t(3210),X=t(3298),B=t(6602),K=t(5172),Q=t(2040),q=t(5384),G=t(8928);let J=e=>{let{componentCls:n}=e,t=`${n}-inner`;return{[n]:{[`&${n}-small`]:{minWidth:e.switchMinWidthSM,height:e.switchHeightSM,lineHeight:`${e.switchHeightSM}px`,[`${n}-inner`]:{paddingInlineStart:e.switchInnerMarginMaxSM,paddingInlineEnd:e.switchInnerMarginMinSM,[`${t}-checked`]:{marginInlineStart:`calc(-100% + ${e.switchPinSizeSM+2*e.switchPadding}px - ${2*e.switchInnerMarginMaxSM}px)`,marginInlineEnd:`calc(100% - ${e.switchPinSizeSM+2*e.switchPadding}px + ${2*e.switchInnerMarginMaxSM}px)`},[`${t}-unchecked`]:{marginTop:-e.switchHeightSM,marginInlineStart:0,marginInlineEnd:0}},[`${n}-handle`]:{width:e.switchPinSizeSM,height:e.switchPinSizeSM},[`${n}-loading-icon`]:{top:(e.switchPinSizeSM-e.switchLoadingIconSize)/2,fontSize:e.switchLoadingIconSize},[`&${n}-checked`]:{[`${n}-inner`]:{paddingInlineStart:e.switchInnerMarginMinSM,paddingInlineEnd:e.switchInnerMarginMaxSM,[`${t}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${t}-unchecked`]:{marginInlineStart:`calc(100% - ${e.switchPinSizeSM+2*e.switchPadding}px + ${2*e.switchInnerMarginMaxSM}px)`,marginInlineEnd:`calc(-100% + ${e.switchPinSizeSM+2*e.switchPadding}px - ${2*e.switchInnerMarginMaxSM}px)`}},[`${n}-handle`]:{insetInlineStart:`calc(100% - ${e.switchPinSizeSM+e.switchPadding}px)`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${t}`]:{[`${t}-unchecked`]:{marginInlineStart:e.marginXXS/2,marginInlineEnd:-e.marginXXS/2}},[`&${n}-checked ${t}`]:{[`${t}-checked`]:{marginInlineStart:-e.marginXXS/2,marginInlineEnd:e.marginXXS/2}}}}}}},Y=e=>{let{componentCls:n}=e;return{[n]:{[`${n}-loading-icon${e.iconCls}`]:{position:"relative",top:(e.switchPinSize-e.fontSize)/2,color:e.switchLoadingIconColor,verticalAlign:"top"},[`&${n}-checked ${n}-loading-icon`]:{color:e.switchColor}}}},ee=e=>{let{componentCls:n,motion:t}=e,i=`${n}-handle`;return{[n]:{[i]:{position:"absolute",top:e.switchPadding,insetInlineStart:e.switchPadding,width:e.switchPinSize,height:e.switchPinSize,transition:`all ${e.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:e.colorWhite,borderRadius:e.switchPinSize/2,boxShadow:e.switchHandleShadow,transition:`all ${e.switchDuration} ease-in-out`,content:'""'}},[`&${n}-checked ${i}`]:{insetInlineStart:`calc(100% - ${e.switchPinSize+e.switchPadding}px)`},[`&:not(${n}-disabled):active`]:t?{[`${i}::before`]:{insetInlineEnd:e.switchHandleActiveInset,insetInlineStart:0},[`&${n}-checked ${i}::before`]:{insetInlineEnd:0,insetInlineStart:e.switchHandleActiveInset}}:{}}}},en=e=>{let{componentCls:n}=e,t=`${n}-inner`;return{[n]:{[t]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:e.switchInnerMarginMax,paddingInlineEnd:e.switchInnerMarginMin,transition:`padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,[`${t}-checked, ${t}-unchecked`]:{display:"block",color:e.colorTextLightSolid,fontSize:e.fontSizeSM,transition:`margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,pointerEvents:"none"},[`${t}-checked`]:{marginInlineStart:`calc(-100% + ${e.switchPinSize+2*e.switchPadding}px - ${2*e.switchInnerMarginMax}px)`,marginInlineEnd:`calc(100% - ${e.switchPinSize+2*e.switchPadding}px + ${2*e.switchInnerMarginMax}px)`},[`${t}-unchecked`]:{marginTop:-e.switchHeight,marginInlineStart:0,marginInlineEnd:0}},[`&${n}-checked ${t}`]:{paddingInlineStart:e.switchInnerMarginMin,paddingInlineEnd:e.switchInnerMarginMax,[`${t}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${t}-unchecked`]:{marginInlineStart:`calc(100% - ${e.switchPinSize+2*e.switchPadding}px + ${2*e.switchInnerMarginMax}px)`,marginInlineEnd:`calc(-100% + ${e.switchPinSize+2*e.switchPadding}px - ${2*e.switchInnerMarginMax}px)`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${t}`]:{[`${t}-unchecked`]:{marginInlineStart:2*e.switchPadding,marginInlineEnd:-(2*e.switchPadding)}},[`&${n}-checked ${t}`]:{[`${t}-checked`]:{marginInlineStart:-(2*e.switchPadding),marginInlineEnd:2*e.switchPadding}}}}}},et=e=>{let{componentCls:n}=e;return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,Q.Wf)(e)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:e.switchMinWidth,height:e.switchHeight,lineHeight:`${e.switchHeight}px`,verticalAlign:"middle",background:e.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${e.motionDurationMid}`,userSelect:"none",[`&:hover:not(${n}-disabled)`]:{background:e.colorTextTertiary}}),(0,Q.Qy)(e)),{[`&${n}-checked`]:{background:e.switchColor,[`&:hover:not(${n}-disabled)`]:{background:e.colorPrimaryHover}},[`&${n}-loading, &${n}-disabled`]:{cursor:"not-allowed",opacity:e.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${n}-rtl`]:{direction:"rtl"}})}};var ei=(0,q.Z)("Switch",e=>{let n=e.fontSize*e.lineHeight,t=e.controlHeight/2,i=n-4,r=t-4,a=(0,G.TS)(e,{switchMinWidth:2*i+8,switchHeight:n,switchDuration:e.motionDurationMid,switchColor:e.colorPrimary,switchDisabledOpacity:e.opacityLoading,switchInnerMarginMin:i/2,switchInnerMarginMax:i+2+4,switchPadding:2,switchPinSize:i,switchBg:e.colorBgContainer,switchMinWidthSM:2*r+4,switchHeightSM:t,switchInnerMarginMinSM:r/2,switchInnerMarginMaxSM:r+2+4,switchPinSizeSM:r,switchHandleShadow:`0 2px 4px 0 ${new K.C("#00230b").setAlpha(.2).toRgbString()}`,switchLoadingIconSize:.75*e.fontSizeIcon,switchLoadingIconColor:`rgba(0, 0, 0, ${e.opacityLoading})`,switchHandleActiveInset:"-30%"});return[et(a),en(a),ee(a),Y(a),J(a)]}),er=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>n.indexOf(i)&&(t[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)0>n.indexOf(i[r])&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(t[i[r]]=e[i[r]]);return t};let ea=a.forwardRef((e,n)=>{let{prefixCls:t,size:i,disabled:r,loading:c,className:l,rootClassName:s,style:o}=e,d=er(e,["prefixCls","size","disabled","loading","className","rootClassName","style"]),{getPrefixCls:u,direction:h,switch:p}=a.useContext(F.E_),m=a.useContext(X.Z),w=(null!=r?r:m)||c,g=u("switch",t),f=a.createElement("div",{className:`${g}-handle`},c&&a.createElement(O.Z,{className:`${g}-loading-icon`})),[y,v]=ei(g),S=(0,B.Z)(i),x=A()(null==p?void 0:p.className,{[`${g}-small`]:"small"===S,[`${g}-loading`]:c,[`${g}-rtl`]:"rtl"===h},l,s,v),b=Object.assign(Object.assign({},null==p?void 0:p.style),o);return y(a.createElement(W.Z,{component:"Switch"},a.createElement(V,Object.assign({},d,{prefixCls:g,className:x,style:b,disabled:w,ref:n,loadingIcon:f}))))});ea.__ANT_SWITCH=!0;var ec=t.p+"images/3db910008d877cd2.jpg",el=t(7790);let es=(0,a.memo)(e=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 1024 1024",...e,children:[(0,i.jsx)("path",{d:"M341.331 512c0 94.26 76.416 170.669 170.669 170.669 94.26 0 170.669-76.416 170.669-170.669 0-94.26-76.416-170.669-170.669-170.669-94.26 0-170.669 76.416-170.669 170.669z"}),(0,i.jsx)("path",{d:"M972.8 460.8h-54.784C894.509 275.443 748.556 129.491 563.2 105.984V51.2a51.2 51.2 0 1 0-102.4 0v54.784C275.443 129.491 129.491 275.444 105.984 460.8H51.2a51.2 51.2 0 1 0 0 102.4h54.784c23.507 185.357 169.46 331.309 354.816 354.816V972.8a51.2 51.2 0 1 0 102.4 0v-54.784c185.357-23.507 331.309-169.46 354.816-354.816H972.8a51.2 51.2 0 1 0 0-102.4zM512 819.2c-169.664 0-307.2-137.536-307.2-307.2S342.336 204.8 512 204.8 819.2 342.336 819.2 512 681.664 819.2 512 819.2z"})]})),eo=(0,a.memo)(e=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 1024 1024",...e,children:(0,i.jsx)("path",{d:"M909 897H115a50 50 0 0 1-50-50V177a50 50 0 0 1 50-50h370a50 50 0 0 1 50 50v62a10 10 0 0 0 10 10h241a50 50 0 0 1 50 50v58h73a50 50 0 0 1 50 50v440a50 50 0 0 1-50 50zM505 309a30 30 0 0 1-30-30v-72a20 20 0 0 0-20-20H145a20 20 0 0 0-20 20v610c0 11.046 9.377 20 20.422 20H209a20 20 0 0 0 20-20V407a50 50 0 0 1 50-50h497v-28a20 20 0 0 0-20-20H535m364 128a20 20 0 0 0-20-20H309a20 20 0 0 0-20 20v400h590a20 20 0 0 0 20-20V437zM650.659 615.8l-26.618-26.53V737a30 30 0 0 1-30 30h-.113a30 30 0 0 1-30-30V589.275L537.309 615.8a30.006 30.006 0 0 1-42.509-42.36l77.928-77.669a30.127 30.127 0 0 1 42.506 0l77.929 77.669a30.007 30.007 0 0 1-42.504 42.36z"})})),{Item:ed,useForm:eu,useWatch:eh}=M.default,ep=new Worker(new URL(t.p+t.u(40),t.b)),em=(0,a.memo)(function(e){let{item:n,image:t}=e,[r,l]=(0,a.useState)(!1),s=(0,a.useCallback)(()=>{console.log(n,t),l(e=>!e)},[]),o=(0,a.useCallback)(e=>{l(e)},[]),d=(0,a.useCallback)(e=>{e.stopPropagation()},[]);return(0,i.jsxs)("div",{onClick:d,children:[(0,i.jsx)(c.Z,{title:"查看位置",component:es,onClick:s}),(0,i.jsx)(P.Z,{src:ec,style:{display:"none"},preview:{visible:r,onVisibleChange:o}})]})}),ew=(0,a.memo)(function(e){let{value:n}=e,t=(0,a.useMemo)(()=>{if(n&&"ok"===n.type){let{uid:e,items:t}=n.payload;return t.map((t,r)=>({key:`${e}-${r}`,label:`解码结果【${r+1}】`,children:(0,i.jsx)("pre",{children:t.content}),extra:(0,i.jsx)(em,{item:t,image:n.payload.image})}))}},[n]);if(n)switch(n.type){case"ok":return(0,i.jsx)(j.Z,{size:"small",items:t,className:r.contents,defaultActiveKey:`${n.payload.uid}-0`},n.payload.uid);case"error":return(0,i.jsx)(C.Z,{type:"error",message:n.message,showIcon:!0});default:return(0,i.jsx)(C.Z,{type:"error",message:"unknown error",showIcon:!0})}return null});var eg=(0,a.memo)(function(){let e=(0,a.useRef)(!1),[n]=eu(),t=eh(["image"],n),[s,o]=(0,l.Z)(!1),[d,u]=(0,a.useState)(),h=(0,a.useMemo)(()=>({image:ec,strict:!1,invert:!1}),[]),p=(0,a.useCallback)(n=>{if(!e.current){o(!0),e.current=!0;let{image:t}=n,i=new self.Image;i.crossOrigin="anonymous",i.onerror=()=>{o(!1)},i.onload=()=>{createImageBitmap(i).then(e=>{let i={...n,image:e,uid:t};ep.postMessage(i,[e])})},i.src=t}},[]),m=(0,a.useCallback)(e=>e?(0,i.jsx)(P.Z,{className:r.preview,src:e,alt:"preview"}):null,[]);return(0,a.useEffect)(()=>{let n=n=>{let{data:t}=n;u(t),o(!1),e.current=!1};return ep.addEventListener("message",n),()=>{ep.removeEventListener("message",n)}},[]),(0,i.jsxs)("div",{className:"page",children:[(0,i.jsx)(M.default,{form:n,onFinish:p,layout:"vertical",initialValues:h,children:(0,i.jsxs)(E.Z,{gutter:24,children:[(0,i.jsx)(z.Z,{span:24,children:(0,i.jsx)(ed,{name:"image",children:(0,i.jsx)(I,{preview:m,children:(0,i.jsx)(Z.ZP,{icon:(0,i.jsx)(c.Z,{component:eo}),children:"选择图片"})})})}),(0,i.jsx)(z.Z,{span:24,children:(0,i.jsx)(ed,{name:"strict",label:"严格模式",valuePropName:"checked",tooltip:"可增加扫描速度，但会降低识别率",children:(0,i.jsx)(ea,{checkedChildren:"开",unCheckedChildren:"关"})})}),(0,i.jsx)(z.Z,{span:24,children:(0,i.jsx)(ed,{name:"invert",label:"图片反色",valuePropName:"checked",children:(0,i.jsx)(ea,{checkedChildren:"开",unCheckedChildren:"关"})})}),(0,i.jsx)(z.Z,{span:24,children:(0,i.jsx)(Z.ZP,{type:"primary",htmlType:"submit",loading:s,disabled:!t,icon:(0,i.jsx)(c.Z,{component:el.Z}),children:"解码"})})]})}),(0,i.jsx)("div",{className:r.result,children:(0,i.jsx)(ew,{value:d})})]})})}}]);