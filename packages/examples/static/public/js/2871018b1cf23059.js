(self.webpackChunk=self.webpackChunk||[]).push([[641],{9522:function(e,t,n){"use strict";var i=n(8456),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,c,l,o,s,d,u,h=!1;t||(t={}),c=t.debug||!1;try{if(o=i(),s=document.createRange(),d=document.getSelection(),(u=document.createElement("span")).textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){c&&console.warn("unable to use e.clipboardData"),c&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=r[t.format]||r.default;window.clipboardData.setData(i,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(u),s.selectNodeContents(u),d.addRange(s),!document.execCommand("copy"))throw Error("copy command was unsuccessful");h=!0}catch(i){c&&console.error("unable to copy using execCommand: ",i),c&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),h=!0}catch(i){c&&console.error("unable to copy using clipboardData: ",i),c&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",a=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",l=n.replace(/#{\s*key\s*}/g,a),window.prompt(l,e)}}finally{d&&("function"==typeof d.removeRange?d.removeRange(s):d.removeAllRanges()),u&&document.body.removeChild(u),o()}return h}},8967:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(2363);function r(e){let t=(0,i.useRef)(e);return t.current=(0,i.useMemo)(()=>e,[e]),t}},1932:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(2363),r=n(8967);function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:128,n=(0,i.useRef)(),a=(0,r.Z)(t),[c,l]=(0,i.useState)(e),o=(0,i.useCallback)(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.current;clearTimeout(n.current),t<=0?l(e):n.current=setTimeout(()=>{l(e)},t)},[]);return(0,i.useEffect)(()=>()=>{clearTimeout(n.current)},[]),[c,o]}},9888:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eR}});var i,r,a=n(9980),c={preview:"f9962498",actions:"a741f479",result:"ebf18c46",contents:"aaf4de2d",extra:"ed042f55",locate:"decf7166",locatedToolbar:"ee2649fa"},l=n(2363),o=n(6623),s=n(9522),d=n.n(s),u=n(8849),h=n(4575),p=n(9108),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},f=n(7437),g=l.forwardRef(function(e,t){return l.createElement(f.Z,(0,p.Z)({},e,{ref:t,icon:m}))});let{useToken:w}=o.default;(i=r||(r={}))[i.initial=0]="initial",i[i.success=1]="success",i[i.failure=2]="failure";var y=(0,l.memo)(function(e){let{text:t,debug:n,format:i,message:r}=e,{token:c}=w(),[o,s]=(0,l.useState)(0),p=(0,l.useCallback)(()=>{d()(t,{debug:n,format:i,message:r})?s(1):s(2),setTimeout(()=>{s(0)},3e3)},[t,n,i,r]);switch(o){case 1:return(0,a.jsx)(u.Z,{style:{color:c.colorSuccessActive},title:"复制成功"});case 2:return(0,a.jsx)(h.Z,{style:{color:c.colorErrorActive},title:"复制失败"});default:return(0,a.jsx)(g,{title:"复制",onClick:p})}}),v=n(1932);let x=(()=>{if("undefined"==typeof self)return!1;if("top"in self&&self!==top)try{top}catch(e){return!1}return"showOpenFilePicker"in self})(),b=x?Promise.resolve().then(function(){return I}):Promise.resolve().then(function(){return j});async function S(...e){return(await b).default(...e)}x?Promise.resolve().then(function(){return C}):Promise.resolve().then(function(){return E}),x?Promise.resolve().then(function(){return P}):Promise.resolve().then(function(){return R});let k=async e=>{let t=await e.getFile();return t.handle=e,t};var I={__proto__:null,default:async(e=[{}])=>{Array.isArray(e)||(e=[e]);let t=[];e.forEach((e,n)=>{t[n]={description:e.description||"Files",accept:{}},e.mimeTypes?e.mimeTypes.map(i=>{t[n].accept[i]=e.extensions||[]}):t[n].accept["*/*"]=e.extensions||[]});let n=await window.showOpenFilePicker({id:e[0].id,startIn:e[0].startIn,types:t,multiple:e[0].multiple||!1,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),i=await Promise.all(n.map(k));return e[0].multiple?i:i[0]}};function $(e){function t(e){if(Object(e)!==e)return Promise.reject(TypeError(e+" is not an object."));var t=e.done;return Promise.resolve(e.value).then(function(e){return{value:e,done:t}})}return($=function(e){this.s=e,this.n=e.next}).prototype={s:null,n:null,next:function(){return t(this.n.apply(this.s,arguments))},return:function(e){var n=this.s.return;return void 0===n?Promise.resolve({value:e,done:!0}):t(n.apply(this.s,arguments))},throw:function(e){var n=this.s.return;return void 0===n?Promise.reject(e):t(n.apply(this.s,arguments))}},new $(e)}let M=async(e,t,n=e.name,i)=>{let r=[],a=[];var c,l=!1,o=!1;try{for(var s,d=function(e){var t,n,i,r=2;for("undefined"!=typeof Symbol&&(n=Symbol.asyncIterator,i=Symbol.iterator);r--;){if(n&&null!=(t=e[n]))return t.call(e);if(i&&null!=(t=e[i]))return new $(t.call(e));n="@@asyncIterator",i="@@iterator"}throw TypeError("Object is not async iterable")}(e.values());l=!(s=await d.next()).done;l=!1){let c=s.value,l=`${n}/${c.name}`;"file"===c.kind?a.push(c.getFile().then(t=>(t.directoryHandle=e,t.handle=c,Object.defineProperty(t,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>l})))):"directory"!==c.kind||!t||i&&i(c)||r.push(M(c,t,l,i))}}catch(e){o=!0,c=e}finally{try{l&&null!=d.return&&await d.return()}finally{if(o)throw c}}return[...(await Promise.all(r)).flat(),...await Promise.all(a)]};var C={__proto__:null,default:async(e={})=>{e.recursive=e.recursive||!1,e.mode=e.mode||"read";let t=await window.showDirectoryPicker({id:e.id,startIn:e.startIn,mode:e.mode});return(await (await t.values()).next()).done?[t]:M(t,e.recursive,void 0,e.skipDirectory)}},P={__proto__:null,default:async(e,t=[{}],n=null,i=!1,r=null)=>{Array.isArray(t)||(t=[t]),t[0].fileName=t[0].fileName||"Untitled";let a=[],c=null;if(e instanceof Blob&&e.type?c=e.type:e.headers&&e.headers.get("content-type")&&(c=e.headers.get("content-type")),t.forEach((e,t)=>{a[t]={description:e.description||"Files",accept:{}},e.mimeTypes?(0===t&&c&&e.mimeTypes.push(c),e.mimeTypes.map(n=>{a[t].accept[n]=e.extensions||[]})):c?a[t].accept[c]=e.extensions||[]:a[t].accept["*/*"]=e.extensions||[]}),n)try{await n.getFile()}catch(e){if(n=null,i)throw e}let l=n||await window.showSaveFilePicker({suggestedName:t[0].fileName,id:t[0].id,startIn:t[0].startIn,types:a,excludeAcceptAllOption:t[0].excludeAcceptAllOption||!1});!n&&r&&r(l);let o=await l.createWritable();if("stream"in e){let t=e.stream();return await t.pipeTo(o),l}return"body"in e?await e.body.pipeTo(o):(await o.write(await e),await o.close()),l}},j={__proto__:null,default:async(e=[{}])=>(Array.isArray(e)||(e=[e]),new Promise((t,n)=>{let i=document.createElement("input");i.type="file";let r=[...e.map(e=>e.mimeTypes||[]),...e.map(e=>e.extensions||[])].join();i.multiple=e[0].multiple||!1,i.accept=r||"",i.style.display="none",document.body.append(i);let a=e=>{"function"==typeof c&&c(),t(e)},c=e[0].legacySetup&&e[0].legacySetup(a,()=>c(n),i),l=()=>{window.removeEventListener("focus",l),i.remove()};i.addEventListener("click",()=>{window.addEventListener("focus",l)}),i.addEventListener("change",()=>{window.removeEventListener("focus",l),i.remove(),a(i.multiple?Array.from(i.files):i.files[0])}),"showPicker"in HTMLInputElement.prototype?i.showPicker():i.click()}))},E={__proto__:null,default:async(e=[{}])=>(Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise((t,n)=>{let i=document.createElement("input");i.type="file",i.webkitdirectory=!0;let r=e=>{"function"==typeof a&&a(),t(e)},a=e[0].legacySetup&&e[0].legacySetup(r,()=>a(n),i);i.addEventListener("change",()=>{let t=Array.from(i.files);e[0].recursive?e[0].recursive&&e[0].skipDirectory&&(t=t.filter(t=>t.webkitRelativePath.split("/").every(t=>!e[0].skipDirectory({name:t,kind:"directory"})))):t=t.filter(e=>2===e.webkitRelativePath.split("/").length),r(t)}),"showPicker"in HTMLInputElement.prototype?i.showPicker():i.click()}))},R={__proto__:null,default:async(e,t={})=>{Array.isArray(t)&&(t=t[0]);let n=document.createElement("a"),i=e;"body"in e&&(i=await async function(e,t){let n=e.getReader(),i=new ReadableStream({start:e=>(async function t(){return n.read().then(({done:n,value:i})=>{if(!n)return e.enqueue(i),t();e.close()})})()}),r=new Response(i),a=await r.blob();return n.releaseLock(),new Blob([a],{type:t})}(e.body,e.headers.get("content-type"))),n.download=t.fileName||"Untitled",n.href=URL.createObjectURL(await i);let r=()=>{"function"==typeof a&&a()},a=t.legacySetup&&t.legacySetup(r,()=>a(),n);return n.addEventListener("click",()=>{setTimeout(()=>URL.revokeObjectURL(n.href),3e4),r()}),n.click(),null}},Z=n(8967);function z(e){return"function"==typeof e}function A(e){let{valuePropName:t="value"}=e;return t}function T(e,t){let n=A(t);return n in e}function L(e,t){let n=A(t);return e[n]}var D=(0,l.memo)(function(e){let t=(0,l.useRef)(),[n,i]=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=function(){let e=(0,l.useRef)(!1);return(0,l.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),(0,l.useCallback)(()=>e.current,[])}(),i=(0,Z.Z)(e),r=(0,Z.Z)(t),[a=t.defaultValue,c]=(0,l.useState)(()=>T(e,t)?L(e,t):function(e,t){let n=function(e){let{defaultValuePropName:t="defaultValue"}=e;return t}(t);return e[n]}(e,t)),o=(0,Z.Z)(a),s=(0,l.useCallback)(function(e){for(var t=arguments.length,a=Array(t>1?t-1:0),l=1;l<t;l++)a[l-1]=arguments[l];if(n()){let{current:t}=o,n=z(e)?e(t):e;if(n!==t){let{current:e}=i,{trigger:t="onChange"}=e,{current:l}=r;T(e,l)||c(n),z(e[t])&&e[t](n,...a)}}},[]);return(0,l.useEffect)(()=>{if(T(e,t)){let n=L(e,t);n!==a&&c(n)}}),[a,s]}(e),{children:r,disabled:c,preview:o,accept:s="image/*"}=e,d=(0,l.useCallback)(()=>{c||S({mimeTypes:[s]}).then(e=>{i(()=>(t.current&&URL.revokeObjectURL(t.current),t.current=URL.createObjectURL(e),t.current))},()=>{})},[s,c]);return(0,a.jsxs)("div",{className:"a6678820",children:[(0,a.jsx)("div",{onClick:d,children:r}),o&&o(n)]})}),H=n(1378),N=n(7341),O=n(5867),_=n(5806),U=n(1762),V=n(1940),W=n(3823),F=n(2653),B=n(2652),X=n(5118),K=n(8920),Q=n.n(K),q=n(8760),G=n(5458),J=n(1015),Y=n(5440),ee=n(7277),et=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],en=l.forwardRef(function(e,t){var n,i=e.prefixCls,r=void 0===i?"rc-switch":i,a=e.className,c=e.checked,o=e.defaultChecked,s=e.disabled,d=e.loadingIcon,u=e.checkedChildren,h=e.unCheckedChildren,m=e.onClick,f=e.onChange,g=e.onKeyDown,w=(0,J.Z)(e,et),y=(0,Y.Z)(!1,{value:c,defaultValue:o}),v=(0,G.Z)(y,2),x=v[0],b=v[1];function S(e,t){var n=x;return s||(b(n=e),null==f||f(n,t)),n}var k=Q()(r,a,(n={},(0,q.Z)(n,"".concat(r,"-checked"),x),(0,q.Z)(n,"".concat(r,"-disabled"),s),n));return l.createElement("button",(0,p.Z)({},w,{type:"button",role:"switch","aria-checked":x,disabled:s,className:k,ref:t,onKeyDown:function(e){e.which===ee.Z.LEFT?S(!1,e):e.which===ee.Z.RIGHT&&S(!0,e),null==g||g(e)},onClick:function(e){var t=S(!x,e);null==m||m(t,e)}}),d,l.createElement("span",{className:"".concat(r,"-inner")},l.createElement("span",{className:"".concat(r,"-inner-checked")},u),l.createElement("span",{className:"".concat(r,"-inner-unchecked")},h)))});en.displayName="Switch";var ei=n(579),er=n(2543),ea=n(3744),ec=n(5354),el=n(134),eo=n(4370),es=n(9050),ed=n(2790);let eu=e=>{let{componentCls:t}=e,n=`${t}-inner`;return{[t]:{[`&${t}-small`]:{minWidth:e.switchMinWidthSM,height:e.switchHeightSM,lineHeight:`${e.switchHeightSM}px`,[`${t}-inner`]:{paddingInlineStart:e.switchInnerMarginMaxSM,paddingInlineEnd:e.switchInnerMarginMinSM,[`${n}-checked`]:{marginInlineStart:`calc(-100% + ${e.switchPinSizeSM+2*e.switchPadding}px - ${2*e.switchInnerMarginMaxSM}px)`,marginInlineEnd:`calc(100% - ${e.switchPinSizeSM+2*e.switchPadding}px + ${2*e.switchInnerMarginMaxSM}px)`},[`${n}-unchecked`]:{marginTop:-e.switchHeightSM,marginInlineStart:0,marginInlineEnd:0}},[`${t}-handle`]:{width:e.switchPinSizeSM,height:e.switchPinSizeSM},[`${t}-loading-icon`]:{top:(e.switchPinSizeSM-e.switchLoadingIconSize)/2,fontSize:e.switchLoadingIconSize},[`&${t}-checked`]:{[`${t}-inner`]:{paddingInlineStart:e.switchInnerMarginMinSM,paddingInlineEnd:e.switchInnerMarginMaxSM,[`${n}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${n}-unchecked`]:{marginInlineStart:`calc(100% - ${e.switchPinSizeSM+2*e.switchPadding}px + ${2*e.switchInnerMarginMaxSM}px)`,marginInlineEnd:`calc(-100% + ${e.switchPinSizeSM+2*e.switchPadding}px - ${2*e.switchInnerMarginMaxSM}px)`}},[`${t}-handle`]:{insetInlineStart:`calc(100% - ${e.switchPinSizeSM+e.switchPadding}px)`}},[`&:not(${t}-disabled):active`]:{[`&:not(${t}-checked) ${n}`]:{[`${n}-unchecked`]:{marginInlineStart:e.marginXXS/2,marginInlineEnd:-e.marginXXS/2}},[`&${t}-checked ${n}`]:{[`${n}-checked`]:{marginInlineStart:-e.marginXXS/2,marginInlineEnd:e.marginXXS/2}}}}}}},eh=e=>{let{componentCls:t}=e;return{[t]:{[`${t}-loading-icon${e.iconCls}`]:{position:"relative",top:(e.switchPinSize-e.fontSize)/2,color:e.switchLoadingIconColor,verticalAlign:"top"},[`&${t}-checked ${t}-loading-icon`]:{color:e.switchColor}}}},ep=e=>{let{componentCls:t,motion:n}=e,i=`${t}-handle`;return{[t]:{[i]:{position:"absolute",top:e.switchPadding,insetInlineStart:e.switchPadding,width:e.switchPinSize,height:e.switchPinSize,transition:`all ${e.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:e.colorWhite,borderRadius:e.switchPinSize/2,boxShadow:e.switchHandleShadow,transition:`all ${e.switchDuration} ease-in-out`,content:'""'}},[`&${t}-checked ${i}`]:{insetInlineStart:`calc(100% - ${e.switchPinSize+e.switchPadding}px)`},[`&:not(${t}-disabled):active`]:n?{[`${i}::before`]:{insetInlineEnd:e.switchHandleActiveInset,insetInlineStart:0},[`&${t}-checked ${i}::before`]:{insetInlineEnd:0,insetInlineStart:e.switchHandleActiveInset}}:{}}}},em=e=>{let{componentCls:t}=e,n=`${t}-inner`;return{[t]:{[n]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:e.switchInnerMarginMax,paddingInlineEnd:e.switchInnerMarginMin,transition:`padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,[`${n}-checked, ${n}-unchecked`]:{display:"block",color:e.colorTextLightSolid,fontSize:e.fontSizeSM,transition:`margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,pointerEvents:"none"},[`${n}-checked`]:{marginInlineStart:`calc(-100% + ${e.switchPinSize+2*e.switchPadding}px - ${2*e.switchInnerMarginMax}px)`,marginInlineEnd:`calc(100% - ${e.switchPinSize+2*e.switchPadding}px + ${2*e.switchInnerMarginMax}px)`},[`${n}-unchecked`]:{marginTop:-e.switchHeight,marginInlineStart:0,marginInlineEnd:0}},[`&${t}-checked ${n}`]:{paddingInlineStart:e.switchInnerMarginMin,paddingInlineEnd:e.switchInnerMarginMax,[`${n}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${n}-unchecked`]:{marginInlineStart:`calc(100% - ${e.switchPinSize+2*e.switchPadding}px + ${2*e.switchInnerMarginMax}px)`,marginInlineEnd:`calc(-100% + ${e.switchPinSize+2*e.switchPadding}px - ${2*e.switchInnerMarginMax}px)`}},[`&:not(${t}-disabled):active`]:{[`&:not(${t}-checked) ${n}`]:{[`${n}-unchecked`]:{marginInlineStart:2*e.switchPadding,marginInlineEnd:-(2*e.switchPadding)}},[`&${t}-checked ${n}`]:{[`${n}-checked`]:{marginInlineStart:-(2*e.switchPadding),marginInlineEnd:2*e.switchPadding}}}}}},ef=e=>{let{componentCls:t}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,eo.Wf)(e)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:e.switchMinWidth,height:e.switchHeight,lineHeight:`${e.switchHeight}px`,verticalAlign:"middle",background:e.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${e.motionDurationMid}`,userSelect:"none",[`&:hover:not(${t}-disabled)`]:{background:e.colorTextTertiary}}),(0,eo.Qy)(e)),{[`&${t}-checked`]:{background:e.switchColor,[`&:hover:not(${t}-disabled)`]:{background:e.colorPrimaryHover}},[`&${t}-loading, &${t}-disabled`]:{cursor:"not-allowed",opacity:e.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${t}-rtl`]:{direction:"rtl"}})}};var eg=(0,es.Z)("Switch",e=>{let t=e.fontSize*e.lineHeight,n=e.controlHeight/2,i=t-4,r=n-4,a=(0,ed.TS)(e,{switchMinWidth:2*i+8,switchHeight:t,switchDuration:e.motionDurationMid,switchColor:e.colorPrimary,switchDisabledOpacity:e.opacityLoading,switchInnerMarginMin:i/2,switchInnerMarginMax:i+2+4,switchPadding:2,switchPinSize:i,switchBg:e.colorBgContainer,switchMinWidthSM:2*r+4,switchHeightSM:n,switchInnerMarginMinSM:r/2,switchInnerMarginMaxSM:r+2+4,switchPinSizeSM:r,switchHandleShadow:`0 2px 4px 0 ${new el.C("#00230b").setAlpha(.2).toRgbString()}`,switchLoadingIconSize:.75*e.fontSizeIcon,switchLoadingIconColor:`rgba(0, 0, 0, ${e.opacityLoading})`,switchHandleActiveInset:"-30%"});return[ef(a),em(a),ep(a),eh(a),eu(a)]}),ew=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)0>t.indexOf(i[r])&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n};let ey=l.forwardRef((e,t)=>{let{prefixCls:n,size:i,disabled:r,loading:a,className:c,rootClassName:o,style:s}=e,d=ew(e,["prefixCls","size","disabled","loading","className","rootClassName","style"]),{getPrefixCls:u,direction:h,switch:p}=l.useContext(er.E_),m=l.useContext(ea.Z),f=(null!=r?r:m)||a,g=u("switch",n),w=l.createElement("div",{className:`${g}-handle`},a&&l.createElement(N.Z,{className:`${g}-loading-icon`})),[y,v]=eg(g),x=(0,ec.Z)(i),b=Q()(null==p?void 0:p.className,{[`${g}-small`]:"small"===x,[`${g}-loading`]:a,[`${g}-rtl`]:"rtl"===h},c,o,v),S=Object.assign(Object.assign({},null==p?void 0:p.style),s);return y(l.createElement(ei.Z,{component:"Switch"},l.createElement(en,Object.assign({},d,{prefixCls:g,className:b,style:S,disabled:f,ref:t,loadingIcon:w}))))});ey.__ANT_SWITCH=!0;var ev=n.p+"images/3db910008d877cd2.jpg",ex=n(1047),eb=n(8884);let eS=(0,l.memo)(e=>(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 1024 1024",...e,children:[(0,a.jsx)("path",{d:"M341.331 512c0 94.26 76.416 170.669 170.669 170.669 94.26 0 170.669-76.416 170.669-170.669 0-94.26-76.416-170.669-170.669-170.669-94.26 0-170.669 76.416-170.669 170.669z"}),(0,a.jsx)("path",{d:"M972.8 460.8h-54.784C894.509 275.443 748.556 129.491 563.2 105.984V51.2a51.2 51.2 0 1 0-102.4 0v54.784C275.443 129.491 129.491 275.444 105.984 460.8H51.2a51.2 51.2 0 1 0 0 102.4h54.784c23.507 185.357 169.46 331.309 354.816 354.816V972.8a51.2 51.2 0 1 0 102.4 0v-54.784c185.357-23.507 331.309-169.46 354.816-354.816H972.8a51.2 51.2 0 1 0 0-102.4zM512 819.2c-169.664 0-307.2-137.536-307.2-307.2S342.336 204.8 512 204.8 819.2 342.336 819.2 512 681.664 819.2 512 819.2z"})]})),ek=(0,l.memo)(e=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 1024 1024",...e,children:(0,a.jsx)("path",{d:"M909 897H115a50 50 0 0 1-50-50V177a50 50 0 0 1 50-50h370a50 50 0 0 1 50 50v62a10 10 0 0 0 10 10h241a50 50 0 0 1 50 50v58h73a50 50 0 0 1 50 50v440a50 50 0 0 1-50 50zM505 309a30 30 0 0 1-30-30v-72a20 20 0 0 0-20-20H145a20 20 0 0 0-20 20v610c0 11.046 9.377 20 20.422 20H209a20 20 0 0 0 20-20V407a50 50 0 0 1 50-50h497v-28a20 20 0 0 0-20-20H535m364 128a20 20 0 0 0-20-20H309a20 20 0 0 0-20 20v400h590a20 20 0 0 0 20-20V437zM650.659 615.8l-26.618-26.53V737a30 30 0 0 1-30 30h-.113a30 30 0 0 1-30-30V589.275L537.309 615.8a30.006 30.006 0 0 1-42.509-42.36l77.928-77.669a30.127 30.127 0 0 1 42.506 0l77.929 77.669a30.007 30.007 0 0 1-42.504 42.36z"})})),{useApp:eI}=O.default,{Item:e$,useForm:eM,useWatch:eC}=_.default,eP=(0,l.memo)(function(e){let{uid:t,name:i,items:r,image:o,trigger:s,currentRef:d}=e,u=(0,l.useRef)(!1),h=(0,l.useRef)(),{message:p}=eI(),m=(0,l.useRef)(),[f,g]=(0,l.useState)(),[w,y]=(0,l.useState)(!1),[x,b]=(0,v.Z)(!1),S=(0,l.useMemo)(()=>({src:f,visible:w,onVisibleChange(e){y(e)},toolbarRender(e){return(0,a.jsxs)("div",{className:c.locatedToolbar,children:[(0,a.jsx)("p",{children:i}),e]})}}),[f,i,w]),k=(0,l.useCallback)(()=>{if(d.current=t,m.current!==t){let e=h.current;if(e&&!u.current){b(!0),u.current=!0,m.current=t;let n=function(e){let t=new OffscreenCanvas(e.width,e.height),n=t.getContext("2d");return n.drawImage(e,0,0),t.transferToImageBitmap()}(o),i={image:n,items:r.map(e=>({finder:e.finder,timing:e.timing,corners:e.corners,alignment:e.alignment}))};e.postMessage(i,[n])}}else y(e=>!e)},[t,o,r]);return(0,l.useEffect)(()=>{let e=new Worker(new URL(n.p+n.u(167),n.b));return e.addEventListener("message",e=>{let{data:n}=e;switch(b(!1),u.current=!1,n.type){case"ok":g(n.payload);let{current:i}=d;i===t&&y(e=>!e);break;case"error":p.error(n.message);break;default:p.error("发生未知错误")}}),h.current=e,()=>{e.terminate()}},[t]),(0,a.jsxs)("div",{className:c.locate,children:[s(x,k),(0,a.jsx)(U.Z,{hidden:!0,src:ex,preview:S})]})}),ej=(0,l.memo)(function(e){let{state:t,currentRef:n}=e;if(t&&"ok"===t.type){let{payload:e}=t,{uid:i,image:r,items:c}=e;return(0,a.jsx)(eP,{uid:i,name:"概览",image:r,items:c,currentRef:n,trigger:(e,t)=>(0,a.jsx)(V.ZP,{loading:e,onClick:t,icon:(0,a.jsx)(H.Z,{component:eS}),children:"概览"})},i)}return null}),eE=(0,l.memo)(function(e){let{state:t,currentRef:n}=e,i=(0,l.useMemo)(()=>{if(t&&"ok"===t.type){let{uid:e,image:i,items:r}=t.payload;return r.map((t,r)=>{let{content:l}=t,o=`${e}-${r}`,s=`解码结果【${r+1}】`;return{key:o,label:s,children:(0,a.jsx)("pre",{children:l}),extra:(0,a.jsxs)("div",{onClick:e=>{e.stopPropagation()},className:c.extra,children:[(0,a.jsx)(y,{text:l}),(0,a.jsx)(eP,{uid:o,name:s,image:i,items:[t],currentRef:n,trigger:(e,t)=>e?(0,a.jsx)(N.Z,{}):(0,a.jsx)(H.Z,{title:"查看位置",component:eS,onClick:t})},o)]})}})}},[t]);if(t)switch(t.type){case"ok":return(0,a.jsx)(W.Z,{size:"small",items:i,className:c.contents,defaultActiveKey:`${t.payload.uid}-0`},t.payload.uid);case"error":return(0,a.jsx)(F.Z,{type:"error",message:t.message,showIcon:!0});default:return(0,a.jsx)(F.Z,{type:"error",message:"发生未知错误",showIcon:!0})}return null});var eR=(0,l.memo)(function(){let e=(0,l.useRef)(!1),t=(0,l.useRef)(),[i]=eM(),r=eC(["image"],i),o=(0,l.useRef)(),[s,d]=(0,v.Z)(!1),[u,h]=(0,l.useState)(),p=(0,l.useMemo)(()=>({image:ev,strict:!1,invert:!1}),[]),m=(0,l.useCallback)(n=>{let i=t.current;if(i&&!e.current){d(!0),e.current=!0;let{image:t}=n,r=new self.Image;r.crossOrigin="anonymous",r.addEventListener("error",()=>{d(!1)}),r.addEventListener("load",()=>{createImageBitmap(r).then(e=>{let r={...n,image:e,uid:t};i.postMessage(r,[e])})}),r.src=t}},[]),f=(0,l.useCallback)(e=>e?(0,a.jsx)(U.Z,{src:e,alt:"preview",className:c.preview}):null,[]);return(0,l.useEffect)(()=>{let i=new Worker(new URL(n.p+n.u(603),n.b));return i.addEventListener("message",t=>{let{data:n}=t;h(n),d(!1),e.current=!1}),t.current=i,()=>{i.terminate()}},[]),(0,a.jsxs)("div",{className:"ui-page",children:[(0,a.jsx)(_.default,{form:i,onFinish:m,layout:"vertical",initialValues:p,children:(0,a.jsxs)(B.Z,{gutter:24,children:[(0,a.jsx)(X.Z,{span:24,children:(0,a.jsx)(e$,{name:"image",children:(0,a.jsx)(D,{preview:f,children:(0,a.jsx)(V.ZP,{icon:(0,a.jsx)(H.Z,{component:ek}),children:"选择图片"})})})}),(0,a.jsx)(X.Z,{span:24,children:(0,a.jsx)(e$,{name:"strict",label:"严格模式",valuePropName:"checked",tooltip:"可增加扫描速度，但会降低识别率",children:(0,a.jsx)(ey,{checkedChildren:"开",unCheckedChildren:"关"})})}),(0,a.jsx)(X.Z,{span:24,children:(0,a.jsx)(e$,{name:"invert",label:"图片反色",valuePropName:"checked",children:(0,a.jsx)(ey,{checkedChildren:"开",unCheckedChildren:"关"})})}),(0,a.jsxs)(X.Z,{span:24,className:c.actions,children:[(0,a.jsx)(V.ZP,{type:"primary",htmlType:"submit",loading:s,disabled:!r,icon:(0,a.jsx)(H.Z,{component:eb.Z}),children:"解码"}),(0,a.jsx)(ej,{state:u,currentRef:o})]})]})}),(0,a.jsx)("div",{className:c.result,children:(0,a.jsx)(eE,{state:u,currentRef:o})})]})})},8456:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],i=0;i<e.rangeCount;i++)n.push(e.getRangeAt(i));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}}]);