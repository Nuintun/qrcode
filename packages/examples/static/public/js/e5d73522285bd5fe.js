(self.webpackChunk=self.webpackChunk||[]).push([[94],{9522:function(e,t,n){"use strict";var r=n(8456),i={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,l,o,c,s,u,d,p=!1;t||(t={}),l=t.debug||!1;try{if(c=r(),s=document.createRange(),u=document.getSelection(),(d=document.createElement("span")).textContent=e,d.ariaHidden="true",d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){l&&console.warn("unable to use e.clipboardData"),l&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=i[t.format]||i.default;window.clipboardData.setData(r,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(d),s.selectNodeContents(d),u.addRange(s),!document.execCommand("copy"))throw Error("copy command was unsuccessful");p=!0}catch(r){l&&console.error("unable to copy using execCommand: ",r),l&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(r){l&&console.error("unable to copy using clipboardData: ",r),l&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",a=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",o=n.replace(/#{\s*key\s*}/g,a),window.prompt(o,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(s):u.removeAllRanges()),d&&document.body.removeChild(d),c()}return p}},13:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(2363);function i(e){let t=(0,r.useRef)(e);return t.current=(0,r.useMemo)(()=>e,[e]),t}},8538:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(2363),i=n(13);function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:128,n=(0,r.useRef)(),a=(0,i.Z)(t),[l,o]=(0,r.useState)(e),c=(0,r.useCallback)(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.current;clearTimeout(n.current),t<=0?o(e):n.current=setTimeout(()=>{o(e)},t)},[]);return(0,r.useEffect)(()=>()=>{clearTimeout(n.current)},[]),[l,c]}},7898:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eB}});var r,i,a=n(9980),l={preview:"f9962498",actions:"a741f479",result:"ebf18c46",contents:"aaf4de2d",extra:"ed042f55",locate:"decf7166",locatedToolbar:"ee2649fa"},o=n(2363),c=n(3640),s=n(9186),u=n(3915),d=n(9430),p=n(3051),m=n(7528),h=n(7737),f=n(8356),g=n(2564),y=n(5998),v=n(134);let w=(e,t)=>new v.C(e).setAlpha(t).toRgbString(),b=(e,t)=>{let n=new v.C(e);return n.lighten(t).toHexString()},x=e=>{let t=(0,g.R_)(e,{theme:"dark"});return{1:t[0],2:t[1],3:t[2],4:t[3],5:t[6],6:t[5],7:t[4],8:t[6],9:t[5],10:t[4]}},k=(e,t)=>{let n=e||"#000",r=t||"#fff";return{colorBgBase:n,colorTextBase:r,colorText:w(r,.85),colorTextSecondary:w(r,.65),colorTextTertiary:w(r,.45),colorTextQuaternary:w(r,.25),colorFill:w(r,.18),colorFillSecondary:w(r,.12),colorFillTertiary:w(r,.08),colorFillQuaternary:w(r,.04),colorBgElevated:b(n,12),colorBgContainer:b(n,8),colorBgLayout:b(n,0),colorBgSpotlight:b(n,26),colorBorder:b(n,26),colorBorderSecondary:b(n,19)}};var $={defaultConfig:m.u_,defaultSeed:m.u_.token,useToken:function(){let[e,t,n]=(0,p.Z)();return{theme:e,token:t,hashId:n}},defaultAlgorithm:s.Z,darkAlgorithm:(e,t)=>{let n=Object.keys(u.M).map(t=>{let n=(0,g.R_)(e[t],{theme:"dark"});return Array(10).fill(1).reduce((e,r,i)=>(e[`${t}-${i+1}`]=n[i],e[`${t}${i+1}`]=n[i],e),{})}).reduce((e,t)=>e=Object.assign(Object.assign({},e),t),{}),r=null!=t?t:(0,s.Z)(e);return Object.assign(Object.assign(Object.assign({},r),n),(0,y.Z)(e,{generateColorPalettes:x,generateNeutralColorPalettes:k}))},compactAlgorithm:(e,t)=>{let n=null!=t?t:(0,s.Z)(e),r=n.fontSizeSM,i=n.controlHeight-4;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},n),function(e){let{sizeUnit:t,sizeStep:n}=e,r=n-2;return{sizeXXL:t*(r+10),sizeXL:t*(r+6),sizeLG:t*(r+2),sizeMD:t*(r+2),sizeMS:t*(r+1),size:t*r,sizeSM:t*r,sizeXS:t*(r-1),sizeXXS:t*(r-1)}}(null!=t?t:e)),(0,f.Z)(r)),{controlHeight:i}),(0,h.Z)(Object.assign(Object.assign({},n),{controlHeight:i})))},getDesignToken:e=>{let t=(null==e?void 0:e.algorithm)?(0,c.jG)(e.algorithm):(0,c.jG)(s.Z),n=Object.assign(Object.assign({},u.Z),null==e?void 0:e.token);return(0,c.t2)(n,{override:null==e?void 0:e.token},t,d.Z)}},S=n(9522),j=n.n(S),C=n(3060),I=n(6822),E=n(5076),Z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},R=n(3298),O=o.forwardRef(function(e,t){return o.createElement(R.Z,(0,E.Z)({},e,{ref:t,icon:Z}))});let{useToken:T}=$;(r=i||(i={}))[r.initial=0]="initial",r[r.success=1]="success",r[r.failure=2]="failure";var A=(0,o.memo)(function(e){let{text:t,debug:n,format:r,message:i}=e,{token:l}=T(),[c,s]=(0,o.useState)(0),u=(0,o.useCallback)(()=>{j()(t,{debug:n,format:r,message:i})?s(1):s(2),setTimeout(()=>{s(0)},3e3)},[t,n,r,i]);switch(c){case 1:return(0,a.jsx)(C.Z,{style:{color:l.colorSuccessActive},title:"复制成功"});case 2:return(0,a.jsx)(I.Z,{style:{color:l.colorErrorActive},title:"复制失败"});default:return(0,a.jsx)(O,{title:"复制",onClick:u})}}),P=n(8538);let M=(()=>{if("undefined"==typeof self)return!1;if("top"in self&&self!==top)try{top}catch(e){return!1}return"showOpenFilePicker"in self})(),L=M?Promise.resolve().then(function(){return z}):Promise.resolve().then(function(){return X});async function D(...e){return(await L).default(...e)}M?Promise.resolve().then(function(){return U}):Promise.resolve().then(function(){return B}),M?Promise.resolve().then(function(){return V}):Promise.resolve().then(function(){return F});let N=async e=>{let t=await e.getFile();return t.handle=e,t};var z={__proto__:null,default:async(e=[{}])=>{Array.isArray(e)||(e=[e]);let t=[];e.forEach((e,n)=>{t[n]={description:e.description||"Files",accept:{}},e.mimeTypes?e.mimeTypes.map(r=>{t[n].accept[r]=e.extensions||[]}):t[n].accept["*/*"]=e.extensions||[]});let n=await window.showOpenFilePicker({id:e[0].id,startIn:e[0].startIn,types:t,multiple:e[0].multiple||!1,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),r=await Promise.all(n.map(N));return e[0].multiple?r:r[0]}};function _(e){function t(e){if(Object(e)!==e)return Promise.reject(TypeError(e+" is not an object."));var t=e.done;return Promise.resolve(e.value).then(function(e){return{value:e,done:t}})}return(_=function(e){this.s=e,this.n=e.next}).prototype={s:null,n:null,next:function(){return t(this.n.apply(this.s,arguments))},return:function(e){var n=this.s.return;return void 0===n?Promise.resolve({value:e,done:!0}):t(n.apply(this.s,arguments))},throw:function(e){var n=this.s.return;return void 0===n?Promise.reject(e):t(n.apply(this.s,arguments))}},new _(e)}let H=async(e,t,n=e.name,r)=>{let i=[],a=[];var l,o=!1,c=!1;try{for(var s,u=function(e){var t,n,r,i=2;for("undefined"!=typeof Symbol&&(n=Symbol.asyncIterator,r=Symbol.iterator);i--;){if(n&&null!=(t=e[n]))return t.call(e);if(r&&null!=(t=e[r]))return new _(t.call(e));n="@@asyncIterator",r="@@iterator"}throw TypeError("Object is not async iterable")}(e.values());o=!(s=await u.next()).done;o=!1){let l=s.value,o=`${n}/${l.name}`;"file"===l.kind?a.push(l.getFile().then(t=>(t.directoryHandle=e,t.handle=l,Object.defineProperty(t,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>o})))):"directory"!==l.kind||!t||r&&r(l)||i.push(H(l,t,o,r))}}catch(e){c=!0,l=e}finally{try{o&&null!=u.return&&await u.return()}finally{if(c)throw l}}return[...(await Promise.all(i)).flat(),...await Promise.all(a)]};var U={__proto__:null,default:async(e={})=>{e.recursive=e.recursive||!1,e.mode=e.mode||"read";let t=await window.showDirectoryPicker({id:e.id,startIn:e.startIn,mode:e.mode});return(await (await t.values()).next()).done?[t]:H(t,e.recursive,void 0,e.skipDirectory)}},V={__proto__:null,default:async(e,t=[{}],n=null,r=!1,i=null)=>{Array.isArray(t)||(t=[t]),t[0].fileName=t[0].fileName||"Untitled";let a=[],l=null;if(e instanceof Blob&&e.type?l=e.type:e.headers&&e.headers.get("content-type")&&(l=e.headers.get("content-type")),t.forEach((e,t)=>{a[t]={description:e.description||"Files",accept:{}},e.mimeTypes?(0===t&&l&&e.mimeTypes.push(l),e.mimeTypes.map(n=>{a[t].accept[n]=e.extensions||[]})):l?a[t].accept[l]=e.extensions||[]:a[t].accept["*/*"]=e.extensions||[]}),n)try{await n.getFile()}catch(e){if(n=null,r)throw e}let o=n||await window.showSaveFilePicker({suggestedName:t[0].fileName,id:t[0].id,startIn:t[0].startIn,types:a,excludeAcceptAllOption:t[0].excludeAcceptAllOption||!1});!n&&i&&i(o);let c=await o.createWritable();if("stream"in e){let t=e.stream();return await t.pipeTo(c),o}return"body"in e?await e.body.pipeTo(c):(await c.write(await e),await c.close()),o}},X={__proto__:null,default:async(e=[{}])=>(Array.isArray(e)||(e=[e]),new Promise((t,n)=>{let r=document.createElement("input");r.type="file";let i=[...e.map(e=>e.mimeTypes||[]),...e.map(e=>e.extensions||[])].join();r.multiple=e[0].multiple||!1,r.accept=i||"",r.style.display="none",document.body.append(r);let a=e=>{"function"==typeof l&&l(),t(e)},l=e[0].legacySetup&&e[0].legacySetup(a,()=>l(n),r),o=()=>{window.removeEventListener("focus",o),r.remove()};r.addEventListener("click",()=>{window.addEventListener("focus",o)}),r.addEventListener("change",()=>{window.removeEventListener("focus",o),r.remove(),a(r.multiple?Array.from(r.files):r.files[0])}),"showPicker"in HTMLInputElement.prototype?r.showPicker():r.click()}))},B={__proto__:null,default:async(e=[{}])=>(Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise((t,n)=>{let r=document.createElement("input");r.type="file",r.webkitdirectory=!0;let i=e=>{"function"==typeof a&&a(),t(e)},a=e[0].legacySetup&&e[0].legacySetup(i,()=>a(n),r);r.addEventListener("change",()=>{let t=Array.from(r.files);e[0].recursive?e[0].recursive&&e[0].skipDirectory&&(t=t.filter(t=>t.webkitRelativePath.split("/").every(t=>!e[0].skipDirectory({name:t,kind:"directory"})))):t=t.filter(e=>2===e.webkitRelativePath.split("/").length),i(t)}),"showPicker"in HTMLInputElement.prototype?r.showPicker():r.click()}))},F={__proto__:null,default:async(e,t={})=>{Array.isArray(t)&&(t=t[0]);let n=document.createElement("a"),r=e;"body"in e&&(r=await async function(e,t){let n=e.getReader(),r=new ReadableStream({start:e=>(async function t(){return n.read().then(({done:n,value:r})=>{if(!n)return e.enqueue(r),t();e.close()})})()}),i=new Response(r),a=await i.blob();return n.releaseLock(),new Blob([a],{type:t})}(e.body,e.headers.get("content-type"))),n.download=t.fileName||"Untitled",n.href=URL.createObjectURL(await r);let i=()=>{"function"==typeof a&&a()},a=t.legacySetup&&t.legacySetup(i,()=>a(),n);return n.addEventListener("click",()=>{setTimeout(()=>URL.revokeObjectURL(n.href),3e4),i()}),n.click(),null}},W=n(13);function G(e){return"function"==typeof e}function K(e){let{valuePropName:t="value"}=e;return t}function Q(e,t){let n=K(t);return n in e}function q(e,t){let n=K(t);return e[n]}var J=(0,o.memo)(function(e){let t=(0,o.useRef)(),[n,r]=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=function(){let e=(0,o.useRef)(!1);return(0,o.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),(0,o.useCallback)(()=>e.current,[])}(),r=(0,W.Z)(e),i=(0,W.Z)(t),[a=t.defaultValue,l]=(0,o.useState)(()=>Q(e,t)?q(e,t):function(e,t){let n=function(e){let{defaultValuePropName:t="defaultValue"}=e;return t}(t);return e[n]}(e,t)),c=(0,W.Z)(a),s=(0,o.useCallback)(function(e){for(var t=arguments.length,a=Array(t>1?t-1:0),o=1;o<t;o++)a[o-1]=arguments[o];if(n()){let{current:t}=c,n=G(e)?e(t):e;if(n!==t){let{current:e}=r,{trigger:t="onChange"}=e,{current:o}=i;Q(e,o)||l(n),G(e[t])&&e[t](n,...a)}}},[]);return(0,o.useEffect)(()=>{if(Q(e,t)){let n=q(e,t);n!==a&&l(n)}}),[a,s]}(e),{children:i,disabled:l,preview:c,accept:s="image/*"}=e,u=(0,o.useCallback)(()=>{l||D({mimeTypes:[s]}).then(e=>{r(()=>(t.current&&URL.revokeObjectURL(t.current),t.current=URL.createObjectURL(e),t.current))},()=>{})},[s,l]);return(0,a.jsxs)("div",{className:"a6678820",children:[(0,a.jsx)("div",{onClick:u,children:i}),c&&c(n)]})}),Y=n(677),ee=n(9519),et=n(3303),en=n(7380),er=n(1853),ei=n(5466),ea=n(7674),el=n(9879),eo=n(5715),ec=n(5634),es=n(8920),eu=n.n(es),ed=n(2866),ep=n(4723),em=n(8848),eh=n(5440),ef=n(7277),eg=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],ey=o.forwardRef(function(e,t){var n,r=e.prefixCls,i=void 0===r?"rc-switch":r,a=e.className,l=e.checked,c=e.defaultChecked,s=e.disabled,u=e.loadingIcon,d=e.checkedChildren,p=e.unCheckedChildren,m=e.onClick,h=e.onChange,f=e.onKeyDown,g=(0,em.Z)(e,eg),y=(0,eh.Z)(!1,{value:l,defaultValue:c}),v=(0,ep.Z)(y,2),w=v[0],b=v[1];function x(e,t){var n=w;return s||(b(n=e),null==h||h(n,t)),n}var k=eu()(i,a,(n={},(0,ed.Z)(n,"".concat(i,"-checked"),w),(0,ed.Z)(n,"".concat(i,"-disabled"),s),n));return o.createElement("button",(0,E.Z)({},g,{type:"button",role:"switch","aria-checked":w,disabled:s,className:k,ref:t,onKeyDown:function(e){e.which===ef.Z.LEFT?x(!1,e):e.which===ef.Z.RIGHT&&x(!0,e),null==f||f(e)},onClick:function(e){var t=x(!w,e);null==m||m(t,e)}}),u,o.createElement("span",{className:"".concat(i,"-inner")},o.createElement("span",{className:"".concat(i,"-inner-checked")},d),o.createElement("span",{className:"".concat(i,"-inner-unchecked")},p)))});ey.displayName="Switch";var ev=n(6309),ew=n(515),eb=n(8940),ex=n(7777),ek=n(8626),e$=n(7218),eS=n(6689);let ej=e=>{let{componentCls:t,trackHeightSM:n,trackPadding:r,trackMinWidthSM:i,innerMinMarginSM:a,innerMaxMarginSM:l,handleSizeSM:o}=e,c=`${t}-inner`;return{[t]:{[`&${t}-small`]:{minWidth:i,height:n,lineHeight:`${n}px`,[`${t}-inner`]:{paddingInlineStart:l,paddingInlineEnd:a,[`${c}-checked`]:{marginInlineStart:`calc(-100% + ${o+2*r}px - ${2*l}px)`,marginInlineEnd:`calc(100% - ${o+2*r}px + ${2*l}px)`},[`${c}-unchecked`]:{marginTop:-n,marginInlineStart:0,marginInlineEnd:0}},[`${t}-handle`]:{width:o,height:o},[`${t}-loading-icon`]:{top:(o-e.switchLoadingIconSize)/2,fontSize:e.switchLoadingIconSize},[`&${t}-checked`]:{[`${t}-inner`]:{paddingInlineStart:a,paddingInlineEnd:l,[`${c}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${c}-unchecked`]:{marginInlineStart:`calc(100% - ${o+2*r}px + ${2*l}px)`,marginInlineEnd:`calc(-100% + ${o+2*r}px - ${2*l}px)`}},[`${t}-handle`]:{insetInlineStart:`calc(100% - ${o+r}px)`}},[`&:not(${t}-disabled):active`]:{[`&:not(${t}-checked) ${c}`]:{[`${c}-unchecked`]:{marginInlineStart:e.marginXXS/2,marginInlineEnd:-e.marginXXS/2}},[`&${t}-checked ${c}`]:{[`${c}-checked`]:{marginInlineStart:-e.marginXXS/2,marginInlineEnd:e.marginXXS/2}}}}}}},eC=e=>{let{componentCls:t,handleSize:n}=e;return{[t]:{[`${t}-loading-icon${e.iconCls}`]:{position:"relative",top:(n-e.fontSize)/2,color:e.switchLoadingIconColor,verticalAlign:"top"},[`&${t}-checked ${t}-loading-icon`]:{color:e.switchColor}}}},eI=e=>{let{componentCls:t,motion:n,trackPadding:r,handleBg:i,handleShadow:a,handleSize:l}=e,o=`${t}-handle`;return{[t]:{[o]:{position:"absolute",top:r,insetInlineStart:r,width:l,height:l,transition:`all ${e.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:i,borderRadius:l/2,boxShadow:a,transition:`all ${e.switchDuration} ease-in-out`,content:'""'}},[`&${t}-checked ${o}`]:{insetInlineStart:`calc(100% - ${l+r}px)`},[`&:not(${t}-disabled):active`]:n?{[`${o}::before`]:{insetInlineEnd:e.switchHandleActiveInset,insetInlineStart:0},[`&${t}-checked ${o}::before`]:{insetInlineEnd:0,insetInlineStart:e.switchHandleActiveInset}}:{}}}},eE=e=>{let{componentCls:t,trackHeight:n,trackPadding:r,innerMinMargin:i,innerMaxMargin:a,handleSize:l}=e,o=`${t}-inner`;return{[t]:{[o]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:a,paddingInlineEnd:i,transition:`padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,[`${o}-checked, ${o}-unchecked`]:{display:"block",color:e.colorTextLightSolid,fontSize:e.fontSizeSM,transition:`margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,pointerEvents:"none"},[`${o}-checked`]:{marginInlineStart:`calc(-100% + ${l+2*r}px - ${2*a}px)`,marginInlineEnd:`calc(100% - ${l+2*r}px + ${2*a}px)`},[`${o}-unchecked`]:{marginTop:-n,marginInlineStart:0,marginInlineEnd:0}},[`&${t}-checked ${o}`]:{paddingInlineStart:i,paddingInlineEnd:a,[`${o}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${o}-unchecked`]:{marginInlineStart:`calc(100% - ${l+2*r}px + ${2*a}px)`,marginInlineEnd:`calc(-100% + ${l+2*r}px - ${2*a}px)`}},[`&:not(${t}-disabled):active`]:{[`&:not(${t}-checked) ${o}`]:{[`${o}-unchecked`]:{marginInlineStart:2*r,marginInlineEnd:-(2*r)}},[`&${t}-checked ${o}`]:{[`${o}-checked`]:{marginInlineStart:-(2*r),marginInlineEnd:2*r}}}}}},eZ=e=>{let{componentCls:t,trackHeight:n,trackMinWidth:r}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,ek.Wf)(e)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:r,height:n,lineHeight:`${n}px`,verticalAlign:"middle",background:e.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${e.motionDurationMid}`,userSelect:"none",[`&:hover:not(${t}-disabled)`]:{background:e.colorTextTertiary}}),(0,ek.Qy)(e)),{[`&${t}-checked`]:{background:e.switchColor,[`&:hover:not(${t}-disabled)`]:{background:e.colorPrimaryHover}},[`&${t}-loading, &${t}-disabled`]:{cursor:"not-allowed",opacity:e.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${t}-rtl`]:{direction:"rtl"}})}};var eR=(0,e$.Z)("Switch",e=>{let t=(0,eS.TS)(e,{switchDuration:e.motionDurationMid,switchColor:e.colorPrimary,switchDisabledOpacity:e.opacityLoading,switchLoadingIconSize:.75*e.fontSizeIcon,switchLoadingIconColor:`rgba(0, 0, 0, ${e.opacityLoading})`,switchHandleActiveInset:"-30%"});return[eZ(t),eE(t),eI(t),eC(t),ej(t)]},e=>{let{fontSize:t,lineHeight:n,controlHeight:r,colorWhite:i}=e,a=t*n,l=r/2,o=a-4,c=l-4;return{trackHeight:a,trackHeightSM:l,trackMinWidth:2*o+8,trackMinWidthSM:2*c+4,trackPadding:2,handleBg:i,handleSize:o,handleSizeSM:c,handleShadow:`0 2px 4px 0 ${new v.C("#00230b").setAlpha(.2).toRgbString()}`,innerMinMargin:o/2,innerMaxMargin:o+2+4,innerMinMarginSM:c/2,innerMaxMarginSM:c+2+4}}),eO=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};let eT=o.forwardRef((e,t)=>{let{prefixCls:n,size:r,disabled:i,loading:a,className:l,rootClassName:c,style:s}=e,u=eO(e,["prefixCls","size","disabled","loading","className","rootClassName","style"]),{getPrefixCls:d,direction:p,switch:m}=o.useContext(ew.E_),h=o.useContext(eb.Z),f=(null!=i?i:h)||a,g=d("switch",n),y=o.createElement("div",{className:`${g}-handle`},a&&o.createElement(ee.Z,{className:`${g}-loading-icon`})),[v,w]=eR(g),b=(0,ex.Z)(r),x=eu()(null==m?void 0:m.className,{[`${g}-small`]:"small"===b,[`${g}-loading`]:a,[`${g}-rtl`]:"rtl"===p},l,c,w),k=Object.assign(Object.assign({},null==m?void 0:m.style),s);return v(o.createElement(ev.Z,{component:"Switch"},o.createElement(ey,Object.assign({},u,{prefixCls:g,className:x,style:k,disabled:f,ref:t,loadingIcon:y}))))});eT.__ANT_SWITCH=!0;var eA=n.p+"images/3db910008d877cd2.jpg",eP=n(1047),eM=n(4680);let eL=(0,o.memo)(e=>(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 1024 1024",...e,children:[(0,a.jsx)("path",{d:"M341.331 512c0 94.26 76.416 170.669 170.669 170.669 94.26 0 170.669-76.416 170.669-170.669 0-94.26-76.416-170.669-170.669-170.669-94.26 0-170.669 76.416-170.669 170.669z"}),(0,a.jsx)("path",{d:"M972.8 460.8h-54.784C894.509 275.443 748.556 129.491 563.2 105.984V51.2a51.2 51.2 0 1 0-102.4 0v54.784C275.443 129.491 129.491 275.444 105.984 460.8H51.2a51.2 51.2 0 1 0 0 102.4h54.784c23.507 185.357 169.46 331.309 354.816 354.816V972.8a51.2 51.2 0 1 0 102.4 0v-54.784c185.357-23.507 331.309-169.46 354.816-354.816H972.8a51.2 51.2 0 1 0 0-102.4zM512 819.2c-169.664 0-307.2-137.536-307.2-307.2S342.336 204.8 512 204.8 819.2 342.336 819.2 512 681.664 819.2 512 819.2z"})]})),eD=(0,o.memo)(e=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 1024 1024",...e,children:(0,a.jsx)("path",{d:"M909 897H115a50 50 0 0 1-50-50V177a50 50 0 0 1 50-50h370a50 50 0 0 1 50 50v62a10 10 0 0 0 10 10h241a50 50 0 0 1 50 50v58h73a50 50 0 0 1 50 50v440a50 50 0 0 1-50 50zM505 309a30 30 0 0 1-30-30v-72a20 20 0 0 0-20-20H145a20 20 0 0 0-20 20v610c0 11.046 9.377 20 20.422 20H209a20 20 0 0 0 20-20V407a50 50 0 0 1 50-50h497v-28a20 20 0 0 0-20-20H535m364 128a20 20 0 0 0-20-20H309a20 20 0 0 0-20 20v400h590a20 20 0 0 0 20-20V437zM650.659 615.8l-26.618-26.53V737a30 30 0 0 1-30 30h-.113a30 30 0 0 1-30-30V589.275L537.309 615.8a30.006 30.006 0 0 1-42.509-42.36l77.928-77.669a30.127 30.127 0 0 1 42.506 0l77.929 77.669a30.007 30.007 0 0 1-42.504 42.36z"})})),{useApp:eN}=et.default,{Item:ez,useForm:e_,useWatch:eH}=en.default,eU=(0,o.memo)(function(e){let{uid:t,name:r,items:i,image:c,trigger:s,currentRef:u}=e,d=(0,o.useRef)(!1),p=(0,o.useRef)(),{message:m}=eN(),h=(0,o.useRef)(),[f,g]=(0,o.useState)(),[y,v]=(0,o.useState)(!1),[w,b]=(0,P.Z)(!1),x=(0,o.useMemo)(()=>({src:f,visible:y,onVisibleChange(e){v(e)},toolbarRender(e){return(0,a.jsxs)("div",{className:l.locatedToolbar,children:[(0,a.jsx)("p",{children:r}),e]})}}),[f,r,y]),k=(0,o.useCallback)(()=>{if(u.current=t,h.current!==t){let e=p.current;if(e&&!d.current){b(!0),d.current=!0,h.current=t;let n=function(e){let t=new OffscreenCanvas(e.width,e.height),n=t.getContext("2d");return n.drawImage(e,0,0),t.transferToImageBitmap()}(c),r={image:n,items:i.map(e=>({finder:e.finder,timing:e.timing,corners:e.corners,alignment:e.alignment}))};e.postMessage(r,[n])}}else v(e=>!e)},[t,c,i]);return(0,o.useEffect)(()=>{let e=new Worker(new URL(n.p+n.u(687),n.b));return e.addEventListener("message",e=>{let{data:n}=e;switch(b(!1),d.current=!1,n.type){case"ok":g(n.payload);let{current:r}=u;r===t&&v(e=>!e);break;case"error":m.error(n.message);break;default:m.error("发生未知错误")}}),p.current=e,()=>{e.terminate()}},[t]),(0,a.jsxs)("div",{className:l.locate,children:[s(w,k),(0,a.jsx)(er.Z,{hidden:!0,src:eP,preview:x})]})}),eV=(0,o.memo)(function(e){let{state:t,currentRef:n}=e;if(t&&"ok"===t.type){let{payload:e}=t,{uid:r,image:i,items:l}=e;return(0,a.jsx)(eU,{uid:r,name:"概览",image:i,items:l,currentRef:n,trigger:(e,t)=>(0,a.jsx)(ei.ZP,{loading:e,onClick:t,icon:(0,a.jsx)(Y.Z,{component:eL}),children:"概览"})},r)}return null}),eX=(0,o.memo)(function(e){let{state:t,currentRef:n}=e,r=(0,o.useMemo)(()=>{if(t&&"ok"===t.type){let{uid:e,image:r,items:i}=t.payload;return i.map((t,i)=>{let{content:o}=t,c=`${e}-${i}`,s=`解码结果【${i+1}】`;return{key:c,label:s,children:(0,a.jsx)("pre",{children:o}),extra:(0,a.jsxs)("div",{onClick:e=>{e.stopPropagation()},className:l.extra,children:[(0,a.jsx)(A,{text:o}),(0,a.jsx)(eU,{uid:c,name:s,image:r,items:[t],currentRef:n,trigger:(e,t)=>e?(0,a.jsx)(ee.Z,{}):(0,a.jsx)(Y.Z,{title:"查看位置",component:eL,onClick:t})},c)]})}})}},[t]);if(t)switch(t.type){case"ok":return(0,a.jsx)(ea.Z,{size:"small",items:r,className:l.contents,defaultActiveKey:`${t.payload.uid}-0`},t.payload.uid);case"error":return(0,a.jsx)(el.Z,{type:"error",message:t.message,showIcon:!0});default:return(0,a.jsx)(el.Z,{type:"error",message:"发生未知错误",showIcon:!0})}return null});var eB=(0,o.memo)(function(){let e=(0,o.useRef)(!1),t=(0,o.useRef)(),[r]=e_(),i=eH(["image"],r),c=(0,o.useRef)(),[s,u]=(0,P.Z)(!1),[d,p]=(0,o.useState)(),m=(0,o.useMemo)(()=>({image:eA,strict:!1,invert:!1}),[]),h=(0,o.useCallback)(n=>{let r=t.current;if(r&&!e.current){u(!0),e.current=!0;let{image:t}=n,i=new self.Image;i.crossOrigin="anonymous",i.addEventListener("error",()=>{u(!1)}),i.addEventListener("load",()=>{createImageBitmap(i).then(e=>{let i={...n,image:e,uid:t};r.postMessage(i,[e])})}),i.src=t}},[]),f=(0,o.useCallback)(e=>e?(0,a.jsx)(er.Z,{src:e,alt:"preview",className:l.preview}):null,[]);return(0,o.useEffect)(()=>{let r=new Worker(new URL(n.p+n.u(174),n.b));return r.addEventListener("message",t=>{let{data:n}=t;p(n),u(!1),e.current=!1}),t.current=r,()=>{r.terminate()}},[]),(0,a.jsxs)("div",{className:"ui-page",children:[(0,a.jsx)(en.default,{form:r,onFinish:h,layout:"vertical",initialValues:m,children:(0,a.jsxs)(eo.Z,{gutter:24,children:[(0,a.jsx)(ec.Z,{span:24,children:(0,a.jsx)(ez,{name:"image",children:(0,a.jsx)(J,{preview:f,children:(0,a.jsx)(ei.ZP,{icon:(0,a.jsx)(Y.Z,{component:eD}),children:"选择图片"})})})}),(0,a.jsx)(ec.Z,{span:24,children:(0,a.jsx)(ez,{name:"strict",label:"严格模式",valuePropName:"checked",tooltip:"可增加扫描速度，但会降低识别率",children:(0,a.jsx)(eT,{checkedChildren:"开",unCheckedChildren:"关"})})}),(0,a.jsx)(ec.Z,{span:24,children:(0,a.jsx)(ez,{name:"invert",label:"图片反色",valuePropName:"checked",children:(0,a.jsx)(eT,{checkedChildren:"开",unCheckedChildren:"关"})})}),(0,a.jsxs)(ec.Z,{span:24,className:l.actions,children:[(0,a.jsx)(ei.ZP,{type:"primary",htmlType:"submit",loading:s,disabled:!i,icon:(0,a.jsx)(Y.Z,{component:eM.Z}),children:"解码"}),(0,a.jsx)(eV,{state:d,currentRef:c})]})]})}),(0,a.jsx)("div",{className:l.result,children:(0,a.jsx)(eX,{state:d,currentRef:c})})]})})},8456:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}}]);