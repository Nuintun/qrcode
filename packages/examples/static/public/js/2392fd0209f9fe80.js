(self.webpackChunk=self.webpackChunk||[]).push([[371],{9522:function(e,t,n){"use strict";var r=n(8456),i={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,l,o,c,s,u,d,p=!1;t||(t={}),l=t.debug||!1;try{if(c=r(),s=document.createRange(),u=document.getSelection(),(d=document.createElement("span")).textContent=e,d.ariaHidden="true",d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){l&&console.warn("unable to use e.clipboardData"),l&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=i[t.format]||i.default;window.clipboardData.setData(r,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(d),s.selectNodeContents(d),u.addRange(s),!document.execCommand("copy"))throw Error("copy command was unsuccessful");p=!0}catch(r){l&&console.error("unable to copy using execCommand: ",r),l&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(r){l&&console.error("unable to copy using clipboardData: ",r),l&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",a=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",o=n.replace(/#{\s*key\s*}/g,a),window.prompt(o,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(s):u.removeAllRanges()),d&&document.body.removeChild(d),c()}return p}},9770:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(2363);function i(e){let t=(0,r.useRef)(e);return t.current=(0,r.useMemo)(()=>e,[e]),t}},4144:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(2363),i=n(9770);function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:128,n=(0,r.useRef)(),a=(0,i.Z)(t),[l,o]=(0,r.useState)(e),c=(0,r.useCallback)(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.current;clearTimeout(n.current),t<=0?o(e):n.current=setTimeout(()=>{o(e)},t)},[]);return(0,r.useEffect)(()=>()=>{clearTimeout(n.current)},[]),[l,c]}},462:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eB}});var r=n(9980),i={preview:"f9962498",actions:"a741f479",result:"ebf18c46",contents:"aaf4de2d",extra:"ed042f55",locate:"decf7166",locatedToolbar:"ee2649fa"},a=n(2363),l=n(3913),o=n(9210),c=n(3247),s=n(7684),u=n(4076),d=n(479),p=n(3653),m=n(6188),h=n(2564),f=n(4598),g=n(134);let y=(e,t)=>new g.C(e).setAlpha(t).toRgbString(),v=(e,t)=>{let n=new g.C(e);return n.lighten(t).toHexString()},w=e=>{let t=(0,h.R_)(e,{theme:"dark"});return{1:t[0],2:t[1],3:t[2],4:t[3],5:t[6],6:t[5],7:t[4],8:t[6],9:t[5],10:t[4]}},b=(e,t)=>{let n=e||"#000",r=t||"#fff";return{colorBgBase:n,colorTextBase:r,colorText:y(r,.85),colorTextSecondary:y(r,.65),colorTextTertiary:y(r,.45),colorTextQuaternary:y(r,.25),colorFill:y(r,.18),colorFillSecondary:y(r,.12),colorFillTertiary:y(r,.08),colorFillQuaternary:y(r,.04),colorBgElevated:v(n,12),colorBgContainer:v(n,8),colorBgLayout:v(n,0),colorBgSpotlight:v(n,26),colorBgBlur:y(r,.04),colorBorder:v(n,26),colorBorderSecondary:v(n,19)}};var x={defaultConfig:d.u_,defaultSeed:d.u_.token,useToken:function(){let[e,t,n]=(0,u.Z)();return{theme:e,token:t,hashId:n}},defaultAlgorithm:o.Z,darkAlgorithm:(e,t)=>{let n=Object.keys(c.M).map(t=>{let n=(0,h.R_)(e[t],{theme:"dark"});return Array(10).fill(1).reduce((e,r,i)=>(e[`${t}-${i+1}`]=n[i],e[`${t}${i+1}`]=n[i],e),{})}).reduce((e,t)=>e=Object.assign(Object.assign({},e),t),{}),r=null!=t?t:(0,o.Z)(e);return Object.assign(Object.assign(Object.assign({},r),n),(0,f.Z)(e,{generateColorPalettes:w,generateNeutralColorPalettes:b}))},compactAlgorithm:(e,t)=>{let n=null!=t?t:(0,o.Z)(e),r=n.fontSizeSM,i=n.controlHeight-4;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},n),function(e){let{sizeUnit:t,sizeStep:n}=e,r=n-2;return{sizeXXL:t*(r+10),sizeXL:t*(r+6),sizeLG:t*(r+2),sizeMD:t*(r+2),sizeMS:t*(r+1),size:t*r,sizeSM:t*r,sizeXS:t*(r-1),sizeXXS:t*(r-1)}}(null!=t?t:e)),(0,m.Z)(r)),{controlHeight:i}),(0,p.Z)(Object.assign(Object.assign({},n),{controlHeight:i})))},getDesignToken:e=>{let t=(null==e?void 0:e.algorithm)?(0,l.jG)(e.algorithm):(0,l.jG)(o.Z),n=Object.assign(Object.assign({},c.Z),null==e?void 0:e.token);return(0,l.t2)(n,{override:null==e?void 0:e.token},t,s.Z)}},k=n(9522),$=n.n(k),S=n(3060),j=n(6822),C=n(8176),I={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},E=n(3298),Z=a.forwardRef(function(e,t){return a.createElement(E.Z,(0,C.Z)({},e,{ref:t,icon:I}))});let{useToken:R}=x;var O=(0,a.memo)(function(e){let{text:t,debug:n,format:i,message:l}=e,{token:o}=R(),[c,s]=(0,a.useState)(0),u=(0,a.useCallback)(()=>{$()(t,{debug:n,format:i,message:l})?s(1):s(2),setTimeout(()=>{s(0)},3e3)},[t,n,i,l]);switch(c){case 1:return(0,r.jsx)(S.Z,{style:{color:o.colorSuccessActive},title:"复制成功"});case 2:return(0,r.jsx)(j.Z,{style:{color:o.colorErrorActive},title:"复制失败"});default:return(0,r.jsx)(Z,{title:"复制",onClick:u})}}),T=n(4144);let A=(()=>{if("undefined"==typeof self)return!1;if("top"in self&&self!==top)try{top.window.document._=0}catch(e){return!1}return"showOpenFilePicker"in self})(),P=A?Promise.resolve().then(function(){return D}):Promise.resolve().then(function(){return U});async function M(...e){return(await P).default(...e)}A?Promise.resolve().then(function(){return _}):Promise.resolve().then(function(){return B}),A?Promise.resolve().then(function(){return H}):Promise.resolve().then(function(){return V});let L=async e=>{let t=await e.getFile();return t.handle=e,t};var D={__proto__:null,default:async(e=[{}])=>{Array.isArray(e)||(e=[e]);let t=[];e.forEach((e,n)=>{t[n]={description:e.description||"Files",accept:{}},e.mimeTypes?e.mimeTypes.map(r=>{t[n].accept[r]=e.extensions||[]}):t[n].accept["*/*"]=e.extensions||[]});let n=await window.showOpenFilePicker({id:e[0].id,startIn:e[0].startIn,types:t,multiple:e[0].multiple||!1,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),r=await Promise.all(n.map(L));return e[0].multiple?r:r[0]}};function N(e){function t(e){if(Object(e)!==e)return Promise.reject(TypeError(e+" is not an object."));var t=e.done;return Promise.resolve(e.value).then(function(e){return{value:e,done:t}})}return(N=function(e){this.s=e,this.n=e.next}).prototype={s:null,n:null,next:function(){return t(this.n.apply(this.s,arguments))},return:function(e){var n=this.s.return;return void 0===n?Promise.resolve({value:e,done:!0}):t(n.apply(this.s,arguments))},throw:function(e){var n=this.s.return;return void 0===n?Promise.reject(e):t(n.apply(this.s,arguments))}},new N(e)}let z=async(e,t,n=e.name,r)=>{let i=[],a=[];var l,o=!1,c=!1;try{for(var s,u=function(e){var t,n,r,i=2;for("undefined"!=typeof Symbol&&(n=Symbol.asyncIterator,r=Symbol.iterator);i--;){if(n&&null!=(t=e[n]))return t.call(e);if(r&&null!=(t=e[r]))return new N(t.call(e));n="@@asyncIterator",r="@@iterator"}throw TypeError("Object is not async iterable")}(e.values());o=!(s=await u.next()).done;o=!1){let l=s.value,o=`${n}/${l.name}`;"file"===l.kind?a.push(l.getFile().then(t=>(t.directoryHandle=e,t.handle=l,Object.defineProperty(t,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>o})))):"directory"!==l.kind||!t||r&&r(l)||i.push(z(l,t,o,r))}}catch(e){c=!0,l=e}finally{try{o&&null!=u.return&&await u.return()}finally{if(c)throw l}}return[...(await Promise.all(i)).flat(),...await Promise.all(a)]};var _={__proto__:null,default:async(e={})=>{e.recursive=e.recursive||!1,e.mode=e.mode||"read";let t=await window.showDirectoryPicker({id:e.id,startIn:e.startIn,mode:e.mode});return(await (await t.values()).next()).done?[t]:z(t,e.recursive,void 0,e.skipDirectory)}},H={__proto__:null,default:async(e,t=[{}],n=null,r=!1,i=null)=>{Array.isArray(t)||(t=[t]),t[0].fileName=t[0].fileName||"Untitled";let a=[],l=null;if(e instanceof Blob&&e.type?l=e.type:e.headers&&e.headers.get("content-type")&&(l=e.headers.get("content-type")),t.forEach((e,t)=>{a[t]={description:e.description||"Files",accept:{}},e.mimeTypes?(0===t&&l&&e.mimeTypes.push(l),e.mimeTypes.map(n=>{a[t].accept[n]=e.extensions||[]})):l?a[t].accept[l]=e.extensions||[]:a[t].accept["*/*"]=e.extensions||[]}),n)try{await n.getFile()}catch(e){if(n=null,r)throw e}let o=n||await window.showSaveFilePicker({suggestedName:t[0].fileName,id:t[0].id,startIn:t[0].startIn,types:a,excludeAcceptAllOption:t[0].excludeAcceptAllOption||!1});!n&&i&&i(o);let c=await o.createWritable();if("stream"in e){let t=e.stream();return await t.pipeTo(c),o}return"body"in e?await e.body.pipeTo(c):(await c.write(await e),await c.close()),o}},U={__proto__:null,default:async(e=[{}])=>(Array.isArray(e)||(e=[e]),new Promise((t,n)=>{let r=document.createElement("input");r.type="file";let i=[...e.map(e=>e.mimeTypes||[]),...e.map(e=>e.extensions||[])].join();r.multiple=e[0].multiple||!1,r.accept=i||"",r.style.display="none",document.body.append(r);let a=e=>{"function"==typeof l&&l(),t(e)},l=e[0].legacySetup&&e[0].legacySetup(a,()=>l(n),r),o=()=>{window.removeEventListener("focus",o),r.remove()};r.addEventListener("click",()=>{window.addEventListener("focus",o)}),r.addEventListener("change",()=>{window.removeEventListener("focus",o),r.remove(),a(r.multiple?Array.from(r.files):r.files[0])}),"showPicker"in HTMLInputElement.prototype?r.showPicker():r.click()}))},B={__proto__:null,default:async(e=[{}])=>(Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise((t,n)=>{let r=document.createElement("input");r.type="file",r.webkitdirectory=!0;let i=e=>{"function"==typeof a&&a(),t(e)},a=e[0].legacySetup&&e[0].legacySetup(i,()=>a(n),r);r.addEventListener("change",()=>{let t=Array.from(r.files);e[0].recursive?e[0].recursive&&e[0].skipDirectory&&(t=t.filter(t=>t.webkitRelativePath.split("/").every(t=>!e[0].skipDirectory({name:t,kind:"directory"})))):t=t.filter(e=>2===e.webkitRelativePath.split("/").length),i(t)}),"showPicker"in HTMLInputElement.prototype?r.showPicker():r.click()}))},V={__proto__:null,default:async(e,t={})=>{Array.isArray(t)&&(t=t[0]);let n=document.createElement("a"),r=e;"body"in e&&(r=await async function(e,t){let n=e.getReader(),r=new ReadableStream({start:e=>(async function t(){return n.read().then(({done:n,value:r})=>{if(!n)return e.enqueue(r),t();e.close()})})()}),i=new Response(r),a=await i.blob();return n.releaseLock(),new Blob([a],{type:t})}(e.body,e.headers.get("content-type"))),n.download=t.fileName||"Untitled",n.href=URL.createObjectURL(await r);let i=()=>{"function"==typeof a&&a()},a=t.legacySetup&&t.legacySetup(i,()=>a(),n);return n.addEventListener("click",()=>{setTimeout(()=>URL.revokeObjectURL(n.href),3e4),i()}),n.click(),null}},X=n(9770);function F(e){return"function"==typeof e}function W(e){let{valuePropName:t="value"}=e;return t}function G(e,t){let n=W(t);return n in e}function K(e,t){let n=W(t);return e[n]}var Q=(0,a.memo)(function(e){let t=(0,a.useRef)(),[n,i]=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=function(){let e=(0,a.useRef)(!1);return(0,a.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),(0,a.useCallback)(()=>e.current,[])}(),r=(0,X.Z)(e),i=(0,X.Z)(t),[l=t.defaultValue,o]=(0,a.useState)(()=>G(e,t)?K(e,t):function(e,t){let n=function(e){let{defaultValuePropName:t="defaultValue"}=e;return t}(t);return e[n]}(e,t)),c=(0,X.Z)(l),s=(0,a.useCallback)(function(e){for(var t=arguments.length,a=Array(t>1?t-1:0),l=1;l<t;l++)a[l-1]=arguments[l];if(n()){let{current:t}=c,n=F(e)?e(t):e;if(n!==t){let{current:e}=r,{trigger:t="onChange"}=e,{current:l}=i;G(e,l)||o(n),F(e[t])&&e[t](n,...a)}}},[]);return(0,a.useEffect)(()=>{if(G(e,t)){let n=K(e,t);n!==l&&o(n)}}),[l,s]}(e),{children:l,disabled:o,preview:c,accept:s="image/*"}=e,u=(0,a.useCallback)(()=>{o||M({mimeTypes:[s]}).then(e=>{i(()=>(t.current&&URL.revokeObjectURL(t.current),t.current=URL.createObjectURL(e),t.current))},()=>{})},[s,o]);return(0,r.jsxs)("div",{className:"a6678820",children:[(0,r.jsx)("div",{onClick:u,children:l}),c&&c(n)]})}),q=n(677),J=n(9519),Y=n(3596),ee=n(7817),et=n(4326),en=n(8720),er=n(3935),ei=n(1377),ea=n(6761),el=n(1057),eo=n(8920),ec=n.n(eo),es=n(4503),eu=n(4536),ed=n(8235),ep=n(9931),em=n(2666),eh=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],ef=a.forwardRef(function(e,t){var n,r=e.prefixCls,i=void 0===r?"rc-switch":r,l=e.className,o=e.checked,c=e.defaultChecked,s=e.disabled,u=e.loadingIcon,d=e.checkedChildren,p=e.unCheckedChildren,m=e.onClick,h=e.onChange,f=e.onKeyDown,g=(0,ed.Z)(e,eh),y=(0,ep.Z)(!1,{value:o,defaultValue:c}),v=(0,eu.Z)(y,2),w=v[0],b=v[1];function x(e,t){var n=w;return s||(b(n=e),null==h||h(n,t)),n}var k=ec()(i,l,(n={},(0,es.Z)(n,"".concat(i,"-checked"),w),(0,es.Z)(n,"".concat(i,"-disabled"),s),n));return a.createElement("button",(0,C.Z)({},g,{type:"button",role:"switch","aria-checked":w,disabled:s,className:k,ref:t,onKeyDown:function(e){e.which===em.Z.LEFT?x(!1,e):e.which===em.Z.RIGHT&&x(!0,e),null==f||f(e)},onClick:function(e){var t=x(!w,e);null==m||m(t,e)}}),u,a.createElement("span",{className:"".concat(i,"-inner")},a.createElement("span",{className:"".concat(i,"-inner-checked")},d),a.createElement("span",{className:"".concat(i,"-inner-unchecked")},p)))});ef.displayName="Switch";var eg=n(3579),ey=n(2726),ev=n(3510),ew=n(6102),eb=n(6638),ex=n(1037),ek=n(7328);let e$=e=>{let{componentCls:t,trackHeightSM:n,trackPadding:r,trackMinWidthSM:i,innerMinMarginSM:a,innerMaxMarginSM:l,handleSizeSM:o}=e,c=`${t}-inner`;return{[t]:{[`&${t}-small`]:{minWidth:i,height:n,lineHeight:`${n}px`,[`${t}-inner`]:{paddingInlineStart:l,paddingInlineEnd:a,[`${c}-checked`]:{marginInlineStart:`calc(-100% + ${o+2*r}px - ${2*l}px)`,marginInlineEnd:`calc(100% - ${o+2*r}px + ${2*l}px)`},[`${c}-unchecked`]:{marginTop:-n,marginInlineStart:0,marginInlineEnd:0}},[`${t}-handle`]:{width:o,height:o},[`${t}-loading-icon`]:{top:(o-e.switchLoadingIconSize)/2,fontSize:e.switchLoadingIconSize},[`&${t}-checked`]:{[`${t}-inner`]:{paddingInlineStart:a,paddingInlineEnd:l,[`${c}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${c}-unchecked`]:{marginInlineStart:`calc(100% - ${o+2*r}px + ${2*l}px)`,marginInlineEnd:`calc(-100% + ${o+2*r}px - ${2*l}px)`}},[`${t}-handle`]:{insetInlineStart:`calc(100% - ${o+r}px)`}},[`&:not(${t}-disabled):active`]:{[`&:not(${t}-checked) ${c}`]:{[`${c}-unchecked`]:{marginInlineStart:e.marginXXS/2,marginInlineEnd:-e.marginXXS/2}},[`&${t}-checked ${c}`]:{[`${c}-checked`]:{marginInlineStart:-e.marginXXS/2,marginInlineEnd:e.marginXXS/2}}}}}}},eS=e=>{let{componentCls:t,handleSize:n}=e;return{[t]:{[`${t}-loading-icon${e.iconCls}`]:{position:"relative",top:(n-e.fontSize)/2,color:e.switchLoadingIconColor,verticalAlign:"top"},[`&${t}-checked ${t}-loading-icon`]:{color:e.switchColor}}}},ej=e=>{let{componentCls:t,motion:n,trackPadding:r,handleBg:i,handleShadow:a,handleSize:l}=e,o=`${t}-handle`;return{[t]:{[o]:{position:"absolute",top:r,insetInlineStart:r,width:l,height:l,transition:`all ${e.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:i,borderRadius:l/2,boxShadow:a,transition:`all ${e.switchDuration} ease-in-out`,content:'""'}},[`&${t}-checked ${o}`]:{insetInlineStart:`calc(100% - ${l+r}px)`},[`&:not(${t}-disabled):active`]:n?{[`${o}::before`]:{insetInlineEnd:e.switchHandleActiveInset,insetInlineStart:0},[`&${t}-checked ${o}::before`]:{insetInlineEnd:0,insetInlineStart:e.switchHandleActiveInset}}:{}}}},eC=e=>{let{componentCls:t,trackHeight:n,trackPadding:r,innerMinMargin:i,innerMaxMargin:a,handleSize:l}=e,o=`${t}-inner`;return{[t]:{[o]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:a,paddingInlineEnd:i,transition:`padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,[`${o}-checked, ${o}-unchecked`]:{display:"block",color:e.colorTextLightSolid,fontSize:e.fontSizeSM,transition:`margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,pointerEvents:"none"},[`${o}-checked`]:{marginInlineStart:`calc(-100% + ${l+2*r}px - ${2*a}px)`,marginInlineEnd:`calc(100% - ${l+2*r}px + ${2*a}px)`},[`${o}-unchecked`]:{marginTop:-n,marginInlineStart:0,marginInlineEnd:0}},[`&${t}-checked ${o}`]:{paddingInlineStart:i,paddingInlineEnd:a,[`${o}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${o}-unchecked`]:{marginInlineStart:`calc(100% - ${l+2*r}px + ${2*a}px)`,marginInlineEnd:`calc(-100% + ${l+2*r}px - ${2*a}px)`}},[`&:not(${t}-disabled):active`]:{[`&:not(${t}-checked) ${o}`]:{[`${o}-unchecked`]:{marginInlineStart:2*r,marginInlineEnd:-(2*r)}},[`&${t}-checked ${o}`]:{[`${o}-checked`]:{marginInlineStart:-(2*r),marginInlineEnd:2*r}}}}}},eI=e=>{let{componentCls:t,trackHeight:n,trackMinWidth:r}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,eb.Wf)(e)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:r,height:n,lineHeight:`${n}px`,verticalAlign:"middle",background:e.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${e.motionDurationMid}`,userSelect:"none",[`&:hover:not(${t}-disabled)`]:{background:e.colorTextTertiary}}),(0,eb.Qy)(e)),{[`&${t}-checked`]:{background:e.switchColor,[`&:hover:not(${t}-disabled)`]:{background:e.colorPrimaryHover}},[`&${t}-loading, &${t}-disabled`]:{cursor:"not-allowed",opacity:e.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${t}-rtl`]:{direction:"rtl"}})}};var eE=(0,ex.Z)("Switch",e=>{let t=(0,ek.TS)(e,{switchDuration:e.motionDurationMid,switchColor:e.colorPrimary,switchDisabledOpacity:e.opacityLoading,switchLoadingIconSize:.75*e.fontSizeIcon,switchLoadingIconColor:`rgba(0, 0, 0, ${e.opacityLoading})`,switchHandleActiveInset:"-30%"});return[eI(t),eC(t),ej(t),eS(t),e$(t)]},e=>{let{fontSize:t,lineHeight:n,controlHeight:r,colorWhite:i}=e,a=t*n,l=r/2,o=a-4,c=l-4;return{trackHeight:a,trackHeightSM:l,trackMinWidth:2*o+8,trackMinWidthSM:2*c+4,trackPadding:2,handleBg:i,handleSize:o,handleSizeSM:c,handleShadow:`0 2px 4px 0 ${new g.C("#00230b").setAlpha(.2).toRgbString()}`,innerMinMargin:o/2,innerMaxMargin:o+2+4,innerMinMarginSM:c/2,innerMaxMarginSM:c+2+4}}),eZ=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};let eR=a.forwardRef((e,t)=>{let{prefixCls:n,size:r,disabled:i,loading:l,className:o,rootClassName:c,style:s}=e,u=eZ(e,["prefixCls","size","disabled","loading","className","rootClassName","style"]),{getPrefixCls:d,direction:p,switch:m}=a.useContext(ey.E_),h=a.useContext(ev.Z),f=(null!=i?i:h)||l,g=d("switch",n),y=a.createElement("div",{className:`${g}-handle`},l&&a.createElement(J.Z,{className:`${g}-loading-icon`})),[v,w]=eE(g),b=(0,ew.Z)(r),x=ec()(null==m?void 0:m.className,{[`${g}-small`]:"small"===b,[`${g}-loading`]:l,[`${g}-rtl`]:"rtl"===p},o,c,w),k=Object.assign(Object.assign({},null==m?void 0:m.style),s);return v(a.createElement(eg.Z,{component:"Switch"},a.createElement(ef,Object.assign({},u,{prefixCls:g,className:x,style:k,disabled:f,ref:t,loadingIcon:y}))))});eR.__ANT_SWITCH=!0;var eO=n.p+"images/3db910008d877cd2.jpg",eT=n(1047),eA=n(7642);let eP=(0,a.memo)(e=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 1024 1024",...e,children:[(0,r.jsx)("path",{d:"M341.331 512c0 94.26 76.416 170.669 170.669 170.669 94.26 0 170.669-76.416 170.669-170.669 0-94.26-76.416-170.669-170.669-170.669-94.26 0-170.669 76.416-170.669 170.669z"}),(0,r.jsx)("path",{d:"M972.8 460.8h-54.784C894.509 275.443 748.556 129.491 563.2 105.984V51.2a51.2 51.2 0 1 0-102.4 0v54.784C275.443 129.491 129.491 275.444 105.984 460.8H51.2a51.2 51.2 0 1 0 0 102.4h54.784c23.507 185.357 169.46 331.309 354.816 354.816V972.8a51.2 51.2 0 1 0 102.4 0v-54.784c185.357-23.507 331.309-169.46 354.816-354.816H972.8a51.2 51.2 0 1 0 0-102.4zM512 819.2c-169.664 0-307.2-137.536-307.2-307.2S342.336 204.8 512 204.8 819.2 342.336 819.2 512 681.664 819.2 512 819.2z"})]})),eM=(0,a.memo)(e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 1024 1024",...e,children:(0,r.jsx)("path",{d:"M909 897H115a50 50 0 0 1-50-50V177a50 50 0 0 1 50-50h370a50 50 0 0 1 50 50v62a10 10 0 0 0 10 10h241a50 50 0 0 1 50 50v58h73a50 50 0 0 1 50 50v440a50 50 0 0 1-50 50zM505 309a30 30 0 0 1-30-30v-72a20 20 0 0 0-20-20H145a20 20 0 0 0-20 20v610c0 11.046 9.377 20 20.422 20H209a20 20 0 0 0 20-20V407a50 50 0 0 1 50-50h497v-28a20 20 0 0 0-20-20H535m364 128a20 20 0 0 0-20-20H309a20 20 0 0 0-20 20v400h590a20 20 0 0 0 20-20V437zM650.659 615.8l-26.618-26.53V737a30 30 0 0 1-30 30h-.113a30 30 0 0 1-30-30V589.275L537.309 615.8a30.006 30.006 0 0 1-42.509-42.36l77.928-77.669a30.127 30.127 0 0 1 42.506 0l77.929 77.669a30.007 30.007 0 0 1-42.504 42.36z"})})),{useApp:eL}=Y.default,{Item:eD,useForm:eN,useWatch:ez}=ee.default,e_=(0,a.memo)(function(e){let{uid:t,name:l,items:o,image:c,trigger:s,currentRef:u}=e,d=(0,a.useRef)(!1),p=(0,a.useRef)(),{message:m}=eL(),h=(0,a.useRef)(),[f,g]=(0,a.useState)(),[y,v]=(0,a.useState)(!1),[w,b]=(0,T.Z)(!1),x=(0,a.useMemo)(()=>({src:f,visible:y,onVisibleChange(e){v(e)},toolbarRender(e){return(0,r.jsxs)("div",{className:i.locatedToolbar,children:[(0,r.jsx)("p",{children:l}),e]})}}),[f,l,y]),k=(0,a.useCallback)(()=>{if(u.current=t,h.current!==t){let e=p.current;if(e&&!d.current){b(!0),d.current=!0,h.current=t;let n=function(e){let t=new OffscreenCanvas(e.width,e.height),n=t.getContext("2d");return n.drawImage(e,0,0),t.transferToImageBitmap()}(c),r={image:n,items:o.map(e=>({finder:e.finder,timing:e.timing,corners:e.corners,alignment:e.alignment}))};e.postMessage(r,[n])}}else v(e=>!e)},[t,c,o]);return(0,a.useEffect)(()=>{let e=new Worker(new URL(n.p+n.u(355),n.b));return e.addEventListener("message",e=>{let{data:n}=e;switch(b(!1),d.current=!1,n.type){case"ok":g(n.payload);let{current:r}=u;r===t&&v(e=>!e);break;case"error":m.error(n.message);break;default:m.error("发生未知错误")}}),p.current=e,()=>{e.terminate()}},[t]),(0,r.jsxs)("div",{className:i.locate,children:[s(w,k),(0,r.jsx)(et.Z,{hidden:!0,src:eT,preview:x})]})}),eH=(0,a.memo)(function(e){let{state:t,currentRef:n}=e;if(t&&"ok"===t.type){let{payload:e}=t,{uid:i,image:a,items:l}=e;return(0,r.jsx)(e_,{uid:i,name:"概览",image:a,items:l,currentRef:n,trigger:(e,t)=>(0,r.jsx)(en.ZP,{loading:e,onClick:t,icon:(0,r.jsx)(q.Z,{component:eP}),children:"概览"})},i)}return null}),eU=(0,a.memo)(function(e){let{state:t,currentRef:n}=e,l=(0,a.useMemo)(()=>{if(t&&"ok"===t.type){let{uid:e,image:a,items:l}=t.payload;return l.map((t,l)=>{let{content:o}=t,c=`${e}-${l}`,s=`解码结果【${l+1}】`;return{key:c,label:s,children:(0,r.jsx)("pre",{children:o}),extra:(0,r.jsxs)("div",{onClick:e=>{e.stopPropagation()},className:i.extra,children:[(0,r.jsx)(O,{text:o}),(0,r.jsx)(e_,{uid:c,name:s,image:a,items:[t],currentRef:n,trigger:(e,t)=>e?(0,r.jsx)(J.Z,{}):(0,r.jsx)(q.Z,{title:"查看位置",component:eP,onClick:t})},c)]})}})}},[t]);if(t)switch(t.type){case"ok":return(0,r.jsx)(er.Z,{size:"small",items:l,className:i.contents,defaultActiveKey:`${t.payload.uid}-0`},t.payload.uid);case"error":return(0,r.jsx)(ei.Z,{type:"error",message:t.message,showIcon:!0});default:return(0,r.jsx)(ei.Z,{type:"error",message:"发生未知错误",showIcon:!0})}return null});var eB=(0,a.memo)(function(){let e=(0,a.useRef)(!1),t=(0,a.useRef)(),[l]=eN(),o=ez(["image"],l),c=(0,a.useRef)(),[s,u]=(0,T.Z)(!1),[d,p]=(0,a.useState)(),m=(0,a.useMemo)(()=>({image:eO,strict:!1,invert:!1}),[]),h=(0,a.useCallback)(n=>{let r=t.current;if(r&&!e.current){u(!0),e.current=!0;let{image:t}=n,i=new self.Image;i.crossOrigin="anonymous",i.addEventListener("error",()=>{u(!1)}),i.addEventListener("load",()=>{createImageBitmap(i).then(e=>{let i={...n,image:e,uid:t};r.postMessage(i,[e])})}),i.src=t}},[]),f=(0,a.useCallback)(e=>e?(0,r.jsx)(et.Z,{src:e,alt:"preview",className:i.preview}):null,[]);return(0,a.useEffect)(()=>{let r=new Worker(new URL(n.p+n.u(852),n.b));return r.addEventListener("message",t=>{let{data:n}=t;p(n),u(!1),e.current=!1}),t.current=r,()=>{r.terminate()}},[]),(0,r.jsxs)("div",{className:"ui-page",children:[(0,r.jsx)(ee.default,{form:l,onFinish:h,layout:"vertical",initialValues:m,children:(0,r.jsxs)(ea.Z,{gutter:24,children:[(0,r.jsx)(el.Z,{span:24,children:(0,r.jsx)(eD,{name:"image",children:(0,r.jsx)(Q,{preview:f,children:(0,r.jsx)(en.ZP,{icon:(0,r.jsx)(q.Z,{component:eM}),children:"选择图片"})})})}),(0,r.jsx)(el.Z,{span:24,children:(0,r.jsx)(eD,{name:"strict",label:"严格模式",valuePropName:"checked",tooltip:"可增加扫描速度，但会降低识别率",children:(0,r.jsx)(eR,{checkedChildren:"开",unCheckedChildren:"关"})})}),(0,r.jsx)(el.Z,{span:24,children:(0,r.jsx)(eD,{name:"invert",label:"图片反色",valuePropName:"checked",children:(0,r.jsx)(eR,{checkedChildren:"开",unCheckedChildren:"关"})})}),(0,r.jsxs)(el.Z,{span:24,className:i.actions,children:[(0,r.jsx)(en.ZP,{type:"primary",htmlType:"submit",loading:s,disabled:!o,icon:(0,r.jsx)(q.Z,{component:eA.Z}),children:"解码"}),(0,r.jsx)(eH,{state:d,currentRef:c})]})]})}),(0,r.jsx)("div",{className:i.result,children:(0,r.jsx)(eU,{state:d,currentRef:c})})]})})},8456:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}}]);