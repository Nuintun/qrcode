(self.webpackChunk=self.webpackChunk||[]).push([[540],{9522:function(e,t,n){"use strict";var r=n(8456),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,i,l,o,c,s,u,d,m=!1;t||(t={}),l=t.debug||!1;try{if(c=r(),s=document.createRange(),u=document.getSelection(),(d=document.createElement("span")).textContent=e,d.ariaHidden="true",d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){l&&console.warn("unable to use e.clipboardData"),l&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=a[t.format]||a.default;window.clipboardData.setData(r,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(d),s.selectNodeContents(d),u.addRange(s),!document.execCommand("copy"))throw Error("copy command was unsuccessful");m=!0}catch(r){l&&console.error("unable to copy using execCommand: ",r),l&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),m=!0}catch(r){l&&console.error("unable to copy using clipboardData: ",r),l&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",i=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",o=n.replace(/#{\s*key\s*}/g,i),window.prompt(o,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(s):u.removeAllRanges()),d&&document.body.removeChild(d),c()}return m}},7419:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(2363);function a(e){let t=(0,r.useRef)(e);return t.current=(0,r.useMemo)(()=>e,[e]),t}},5423:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(2363),a=n(7419);function i(e,t=128){let n=(0,r.useRef)(),i=(0,a.Z)(t),[l,o]=(0,r.useState)(e),c=(0,r.useCallback)((e,t=i.current)=>{clearTimeout(n.current),t<=0?o(e):n.current=setTimeout(()=>{o(e)},t)},[]);return(0,r.useEffect)(()=>()=>{clearTimeout(n.current)},[]),[l,c]}},1809:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eU}});var r=n(9980),a={preview:"f9962498",actions:"a741f479",result:"ebf18c46",contents:"aaf4de2d",extra:"ed042f55",locate:"decf7166",locatedToolbar:"ee2649fa"},i=n(2363),l=n(677),o=n(9522),c=n.n(o),s=n(5243),u=n(3428),d=n(5839),m=n(6293),h=n(517),p=n(2496),f=n(7958),g=n(6502),y=n(617),v=n(2417),w=n(134);let b=(e,t)=>new w.C(e).setAlpha(t).toRgbString(),k=(e,t)=>new w.C(e).lighten(t).toHexString(),x=e=>{let t=(0,y.R_)(e,{theme:"dark"});return{1:t[0],2:t[1],3:t[2],4:t[3],5:t[6],6:t[5],7:t[4],8:t[6],9:t[5],10:t[4]}},$=(e,t)=>{let n=e||"#000",r=t||"#fff";return{colorBgBase:n,colorTextBase:r,colorText:b(r,.85),colorTextSecondary:b(r,.65),colorTextTertiary:b(r,.45),colorTextQuaternary:b(r,.25),colorFill:b(r,.18),colorFillSecondary:b(r,.12),colorFillTertiary:b(r,.08),colorFillQuaternary:b(r,.04),colorBgElevated:k(n,12),colorBgContainer:k(n,8),colorBgLayout:k(n,0),colorBgSpotlight:k(n,26),colorBgBlur:b(r,.04),colorBorder:k(n,26),colorBorderSecondary:k(n,19)}};var S={defaultConfig:p.u_,defaultSeed:p.u_.token,useToken:function(){let[e,t,n]=(0,h.ZP)();return{theme:e,token:t,hashId:n}},defaultAlgorithm:u.Z,darkAlgorithm:(e,t)=>{let n=Object.keys(d.M).map(t=>{let n=(0,y.R_)(e[t],{theme:"dark"});return Array(10).fill(1).reduce((e,r,a)=>(e[`${t}-${a+1}`]=n[a],e[`${t}${a+1}`]=n[a],e),{})}).reduce((e,t)=>e=Object.assign(Object.assign({},e),t),{});return Object.assign(Object.assign(Object.assign({},null!=t?t:(0,u.Z)(e)),n),(0,v.Z)(e,{generateColorPalettes:x,generateNeutralColorPalettes:$}))},compactAlgorithm:(e,t)=>{let n=null!=t?t:(0,u.Z)(e),r=n.fontSizeSM,a=n.controlHeight-4;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},n),function(e){let{sizeUnit:t,sizeStep:n}=e,r=n-2;return{sizeXXL:t*(r+10),sizeXL:t*(r+6),sizeLG:t*(r+2),sizeMD:t*(r+2),sizeMS:t*(r+1),size:t*r,sizeSM:t*r,sizeXS:t*(r-1),sizeXXS:t*(r-1)}}(null!=t?t:e)),(0,g.Z)(r)),{controlHeight:a}),(0,f.Z)(Object.assign(Object.assign({},n),{controlHeight:a})))},getDesignToken:e=>{let t=(null==e?void 0:e.algorithm)?(0,s.jG)(e.algorithm):(0,s.jG)(u.Z),n=Object.assign(Object.assign({},d.Z),null==e?void 0:e.token);return(0,s.t2)(n,{override:null==e?void 0:e.token},t,m.Z)}},j=n(2127),C=n(7426),I=n(2901),E=n(7228),Z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},R=n(3298),O=i.forwardRef(function(e,t){return i.createElement(R.Z,(0,E.Z)({},e,{ref:t,icon:Z}))});let{useToken:T}=S;var P=(0,i.memo)(function({text:e,debug:t,format:n,message:a}){let{token:l}=T(),[o,s]=(0,i.useState)(0),u=(0,i.useCallback)(()=>{c()(e,{debug:t,format:n,message:a})?s(1):s(2),setTimeout(()=>{s(0)},3e3)},[e,t,n,a]);switch(o){case 1:return(0,r.jsx)(j.Z,{title:"复制成功",children:(0,r.jsx)(C.Z,{style:{color:l.colorSuccessActive}})});case 2:return(0,r.jsx)(j.Z,{title:"复制失败",children:(0,r.jsx)(I.Z,{style:{color:l.colorErrorActive}})});default:return(0,r.jsx)(j.Z,{title:"复制",children:(0,r.jsx)(O,{onClick:u})})}}),A=n(5423),M=n(3959);let L=(()=>{if("undefined"==typeof self)return!1;if("top"in self&&self!==top)try{top.window.document._=0}catch(e){return!1}return"showOpenFilePicker"in self})(),D=L?Promise.resolve().then(function(){return H}):Promise.resolve().then(function(){return B});async function N(...e){return(await D).default(...e)}L?Promise.resolve().then(function(){return U}):Promise.resolve().then(function(){return X}),L?Promise.resolve().then(function(){return V}):Promise.resolve().then(function(){return F});let _=async e=>{let t=await e.getFile();return t.handle=e,t};var H={__proto__:null,default:async(e=[{}])=>{Array.isArray(e)||(e=[e]);let t=[];e.forEach((e,n)=>{t[n]={description:e.description||"Files",accept:{}},e.mimeTypes?e.mimeTypes.map(r=>{t[n].accept[r]=e.extensions||[]}):t[n].accept["*/*"]=e.extensions||[]});let n=await window.showOpenFilePicker({id:e[0].id,startIn:e[0].startIn,types:t,multiple:e[0].multiple||!1,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),r=await Promise.all(n.map(_));return e[0].multiple?r:r[0]}};function z(e){function t(e){if(Object(e)!==e)return Promise.reject(TypeError(e+" is not an object."));var t=e.done;return Promise.resolve(e.value).then(function(e){return{value:e,done:t}})}return(z=function(e){this.s=e,this.n=e.next}).prototype={s:null,n:null,next:function(){return t(this.n.apply(this.s,arguments))},return:function(e){var n=this.s.return;return void 0===n?Promise.resolve({value:e,done:!0}):t(n.apply(this.s,arguments))},throw:function(e){var n=this.s.return;return void 0===n?Promise.reject(e):t(n.apply(this.s,arguments))}},new z(e)}let q=async(e,t,n=e.name,r)=>{let a=[],i=[];var l,o=!1,c=!1;try{for(var s,u=function(e){var t,n,r,a=2;for("undefined"!=typeof Symbol&&(n=Symbol.asyncIterator,r=Symbol.iterator);a--;){if(n&&null!=(t=e[n]))return t.call(e);if(r&&null!=(t=e[r]))return new z(t.call(e));n="@@asyncIterator",r="@@iterator"}throw TypeError("Object is not async iterable")}(e.values());o=!(s=await u.next()).done;o=!1){let l=s.value,o=`${n}/${l.name}`;"file"===l.kind?i.push(l.getFile().then(t=>(t.directoryHandle=e,t.handle=l,Object.defineProperty(t,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>o})))):"directory"!==l.kind||!t||r&&r(l)||a.push(q(l,t,o,r))}}catch(e){c=!0,l=e}finally{try{o&&null!=u.return&&await u.return()}finally{if(c)throw l}}return[...(await Promise.all(a)).flat(),...await Promise.all(i)]};var U={__proto__:null,default:async(e={})=>{e.recursive=e.recursive||!1,e.mode=e.mode||"read";let t=await window.showDirectoryPicker({id:e.id,startIn:e.startIn,mode:e.mode});return(await (await t.values()).next()).done?[t]:q(t,e.recursive,void 0,e.skipDirectory)}},V={__proto__:null,default:async(e,t=[{}],n=null,r=!1,a=null)=>{Array.isArray(t)||(t=[t]),t[0].fileName=t[0].fileName||"Untitled";let i=[],l=null;if(e instanceof Blob&&e.type?l=e.type:e.headers&&e.headers.get("content-type")&&(l=e.headers.get("content-type")),t.forEach((e,t)=>{i[t]={description:e.description||"Files",accept:{}},e.mimeTypes?(0===t&&l&&e.mimeTypes.push(l),e.mimeTypes.map(n=>{i[t].accept[n]=e.extensions||[]})):l?i[t].accept[l]=e.extensions||[]:i[t].accept["*/*"]=e.extensions||[]}),n)try{await n.getFile()}catch(e){if(n=null,r)throw e}let o=n||await window.showSaveFilePicker({suggestedName:t[0].fileName,id:t[0].id,startIn:t[0].startIn,types:i,excludeAcceptAllOption:t[0].excludeAcceptAllOption||!1});!n&&a&&a(o);let c=await o.createWritable();if("stream"in e){let t=e.stream();return await t.pipeTo(c),o}return"body"in e?await e.body.pipeTo(c):(await c.write(await e),await c.close()),o}},B={__proto__:null,default:async(e=[{}])=>(Array.isArray(e)||(e=[e]),new Promise((t,n)=>{let r=document.createElement("input");r.type="file";let a=[...e.map(e=>e.mimeTypes||[]),...e.map(e=>e.extensions||[])].join();r.multiple=e[0].multiple||!1,r.accept=a||"",r.style.display="none",document.body.append(r);let i=e=>{"function"==typeof l&&l(),t(e)},l=e[0].legacySetup&&e[0].legacySetup(i,()=>l(n),r),o=()=>{window.removeEventListener("focus",o),r.remove()};r.addEventListener("click",()=>{window.addEventListener("focus",o)}),r.addEventListener("change",()=>{window.removeEventListener("focus",o),r.remove(),i(r.multiple?Array.from(r.files):r.files[0])}),"showPicker"in HTMLInputElement.prototype?r.showPicker():r.click()}))},X={__proto__:null,default:async(e=[{}])=>(Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise((t,n)=>{let r=document.createElement("input");r.type="file",r.webkitdirectory=!0;let a=e=>{"function"==typeof i&&i(),t(e)},i=e[0].legacySetup&&e[0].legacySetup(a,()=>i(n),r);r.addEventListener("change",()=>{let t=Array.from(r.files);e[0].recursive?e[0].recursive&&e[0].skipDirectory&&(t=t.filter(t=>t.webkitRelativePath.split("/").every(t=>!e[0].skipDirectory({name:t,kind:"directory"})))):t=t.filter(e=>2===e.webkitRelativePath.split("/").length),a(t)}),"showPicker"in HTMLInputElement.prototype?r.showPicker():r.click()}))},F={__proto__:null,default:async(e,t={})=>{Array.isArray(t)&&(t=t[0]);let n=document.createElement("a"),r=e;"body"in e&&(r=await async function(e,t){let n=e.getReader(),r=new ReadableStream({start:e=>(async function t(){return n.read().then(({done:n,value:r})=>{if(!n)return e.enqueue(r),t();e.close()})})()}),a=new Response(r),i=await a.blob();return n.releaseLock(),new Blob([i],{type:t})}(e.body,e.headers.get("content-type"))),n.download=t.fileName||"Untitled",n.href=URL.createObjectURL(await r);let a=()=>{"function"==typeof i&&i()},i=t.legacySetup&&t.legacySetup(a,()=>i(),n);return n.addEventListener("click",()=>{setTimeout(()=>URL.revokeObjectURL(n.href),3e4),a()}),n.click(),null}},W=n(7419);function G(e){return"function"==typeof e}function K(e){let{valuePropName:t="value"}=e;return t}let{useApp:Q}=M.default;var J=(0,i.memo)(function(e){let{message:t}=Q(),n=(0,i.useRef)(),[a,l]=function(e,t={}){let n=function(){let e=(0,i.useRef)(!1);return(0,i.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),(0,i.useCallback)(()=>e.current,[])}(),r=(0,W.Z)(e),a=(0,W.Z)(t),[l=t.defaultValue,o]=(0,i.useState)(()=>K(t) in e?e[K(t)]:e[function(e){let{defaultValuePropName:t="defaultValue"}=e;return t}(t)]),c=(0,W.Z)(l),s=(0,i.useCallback)((e,...t)=>{if(n()){let{current:n}=c,i=G(e)?e(n):e;if(i!==n){let{current:e}=r,{trigger:n="onChange"}=e,{current:l}=a;K(l) in e||o(i),G(e[n])&&e[n](i,...t)}}},[]);return(0,i.useEffect)(()=>{if(K(t) in e){let n=e[K(t)];n!==l&&o(n)}}),[l,s]}(e),{children:o,disabled:c,preview:s,accept:u="image/*"}=e,d=(0,i.useCallback)(()=>{c||N({mimeTypes:[u]}).then(e=>{/^image\/.+$/i.test(e.type)?l(()=>(n.current&&URL.revokeObjectURL(n.current),n.current=URL.createObjectURL(e),n.current)):t.error("请选择图片格式文件")},()=>{})},[u,c]);return(0,r.jsxs)("div",{className:"a6678820",children:[(0,r.jsx)("div",{onClick:d,children:o}),s&&s(a)]})}),Y=n(4175),ee=n(1289),et=n(4285),en=n(7556),er=n(625),ea=n(1024),ei=n(2931),el=n(7711),eo=n(8667),ec=n.n(eo),es=n(3991),eu=n(3946),ed=n(5807),em=n(2197),eh=n(7652),ep=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],ef=i.forwardRef(function(e,t){var n,r=e.prefixCls,a=void 0===r?"rc-switch":r,l=e.className,o=e.checked,c=e.defaultChecked,s=e.disabled,u=e.loadingIcon,d=e.checkedChildren,m=e.unCheckedChildren,h=e.onClick,p=e.onChange,f=e.onKeyDown,g=(0,ed.Z)(e,ep),y=(0,em.Z)(!1,{value:o,defaultValue:c}),v=(0,eu.Z)(y,2),w=v[0],b=v[1];function k(e,t){var n=w;return s||(b(n=e),null==p||p(n,t)),n}var x=ec()(a,l,(n={},(0,es.Z)(n,"".concat(a,"-checked"),w),(0,es.Z)(n,"".concat(a,"-disabled"),s),n));return i.createElement("button",(0,E.Z)({},g,{type:"button",role:"switch","aria-checked":w,disabled:s,className:x,ref:t,onKeyDown:function(e){e.which===eh.Z.LEFT?k(!1,e):e.which===eh.Z.RIGHT&&k(!0,e),null==f||f(e)},onClick:function(e){var t=k(!w,e);null==h||h(t,e)}}),u,i.createElement("span",{className:"".concat(a,"-inner")},i.createElement("span",{className:"".concat(a,"-inner-checked")},d),i.createElement("span",{className:"".concat(a,"-inner-unchecked")},m)))});ef.displayName="Switch";var eg=n(5994),ey=n(4246),ev=n(4306),ew=n(5435),eb=n(6327),ek=n(103),ex=n(4534);let e$=e=>{let{componentCls:t,trackHeightSM:n,trackPadding:r,trackMinWidthSM:a,innerMinMarginSM:i,innerMaxMarginSM:l,handleSizeSM:o,calc:c}=e,u=`${t}-inner`,d=(0,s.bf)(c(o).add(c(r).mul(2)).equal()),m=(0,s.bf)(c(l).mul(2).equal());return{[t]:{[`&${t}-small`]:{minWidth:a,height:n,lineHeight:(0,s.bf)(n),[`${t}-inner`]:{paddingInlineStart:l,paddingInlineEnd:i,[`${u}-checked`]:{marginInlineStart:`calc(-100% + ${d} - ${m})`,marginInlineEnd:`calc(100% - ${d} + ${m})`},[`${u}-unchecked`]:{marginTop:c(n).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`${t}-handle`]:{width:o,height:o},[`${t}-loading-icon`]:{top:c(c(o).sub(e.switchLoadingIconSize)).div(2).equal(),fontSize:e.switchLoadingIconSize},[`&${t}-checked`]:{[`${t}-inner`]:{paddingInlineStart:i,paddingInlineEnd:l,[`${u}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${u}-unchecked`]:{marginInlineStart:`calc(100% - ${d} + ${m})`,marginInlineEnd:`calc(-100% + ${d} - ${m})`}},[`${t}-handle`]:{insetInlineStart:`calc(100% - ${(0,s.bf)(c(o).add(r).equal())})`}},[`&:not(${t}-disabled):active`]:{[`&:not(${t}-checked) ${u}`]:{[`${u}-unchecked`]:{marginInlineStart:c(e.marginXXS).div(2).equal(),marginInlineEnd:c(e.marginXXS).mul(-1).div(2).equal()}},[`&${t}-checked ${u}`]:{[`${u}-checked`]:{marginInlineStart:c(e.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:c(e.marginXXS).div(2).equal()}}}}}}},eS=e=>{let{componentCls:t,handleSize:n,calc:r}=e;return{[t]:{[`${t}-loading-icon${e.iconCls}`]:{position:"relative",top:r(r(n).sub(e.fontSize)).div(2).equal(),color:e.switchLoadingIconColor,verticalAlign:"top"},[`&${t}-checked ${t}-loading-icon`]:{color:e.switchColor}}}},ej=e=>{let{componentCls:t,trackPadding:n,handleBg:r,handleShadow:a,handleSize:i,calc:l}=e,o=`${t}-handle`;return{[t]:{[o]:{position:"absolute",top:n,insetInlineStart:n,width:i,height:i,transition:`all ${e.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:r,borderRadius:l(i).div(2).equal(),boxShadow:a,transition:`all ${e.switchDuration} ease-in-out`,content:'""'}},[`&${t}-checked ${o}`]:{insetInlineStart:`calc(100% - ${(0,s.bf)(l(i).add(n).equal())})`},[`&:not(${t}-disabled):active`]:{[`${o}::before`]:{insetInlineEnd:e.switchHandleActiveInset,insetInlineStart:0},[`&${t}-checked ${o}::before`]:{insetInlineEnd:0,insetInlineStart:e.switchHandleActiveInset}}}}},eC=e=>{let{componentCls:t,trackHeight:n,trackPadding:r,innerMinMargin:a,innerMaxMargin:i,handleSize:l,calc:o}=e,c=`${t}-inner`,u=(0,s.bf)(o(l).add(o(r).mul(2)).equal()),d=(0,s.bf)(o(i).mul(2).equal());return{[t]:{[c]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:i,paddingInlineEnd:a,transition:`padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,[`${c}-checked, ${c}-unchecked`]:{display:"block",color:e.colorTextLightSolid,fontSize:e.fontSizeSM,transition:`margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,pointerEvents:"none"},[`${c}-checked`]:{marginInlineStart:`calc(-100% + ${u} - ${d})`,marginInlineEnd:`calc(100% - ${u} + ${d})`},[`${c}-unchecked`]:{marginTop:o(n).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`&${t}-checked ${c}`]:{paddingInlineStart:a,paddingInlineEnd:i,[`${c}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${c}-unchecked`]:{marginInlineStart:`calc(100% - ${u} + ${d})`,marginInlineEnd:`calc(-100% + ${u} - ${d})`}},[`&:not(${t}-disabled):active`]:{[`&:not(${t}-checked) ${c}`]:{[`${c}-unchecked`]:{marginInlineStart:o(r).mul(2).equal(),marginInlineEnd:o(r).mul(-1).mul(2).equal()}},[`&${t}-checked ${c}`]:{[`${c}-checked`]:{marginInlineStart:o(r).mul(-1).mul(2).equal(),marginInlineEnd:o(r).mul(2).equal()}}}}}},eI=e=>{let{componentCls:t,trackHeight:n,trackMinWidth:r}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,eb.Wf)(e)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:r,height:n,lineHeight:`${(0,s.bf)(n)}`,verticalAlign:"middle",background:e.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${e.motionDurationMid}`,userSelect:"none",[`&:hover:not(${t}-disabled)`]:{background:e.colorTextTertiary}}),(0,eb.Qy)(e)),{[`&${t}-checked`]:{background:e.switchColor,[`&:hover:not(${t}-disabled)`]:{background:e.colorPrimaryHover}},[`&${t}-loading, &${t}-disabled`]:{cursor:"not-allowed",opacity:e.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${t}-rtl`]:{direction:"rtl"}})}};var eE=(0,ek.I$)("Switch",e=>{let t=(0,ex.TS)(e,{switchDuration:e.motionDurationMid,switchColor:e.colorPrimary,switchDisabledOpacity:e.opacityLoading,switchLoadingIconSize:e.calc(e.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:`rgba(0, 0, 0, ${e.opacityLoading})`,switchHandleActiveInset:"-30%"});return[eI(t),eC(t),ej(t),eS(t),e$(t)]},e=>{let{fontSize:t,lineHeight:n,controlHeight:r,colorWhite:a}=e,i=t*n,l=r/2,o=i-4,c=l-4;return{trackHeight:i,trackHeightSM:l,trackMinWidth:2*o+8,trackMinWidthSM:2*c+4,trackPadding:2,handleBg:a,handleSize:o,handleSizeSM:c,handleShadow:`0 2px 4px 0 ${new w.C("#00230b").setAlpha(.2).toRgbString()}`,innerMinMargin:o/2,innerMaxMargin:o+2+4,innerMinMarginSM:c/2,innerMaxMarginSM:c+2+4}}),eZ=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};let eR=i.forwardRef((e,t)=>{let{prefixCls:n,size:r,disabled:a,loading:l,className:o,rootClassName:c,style:s,checked:u,value:d,defaultChecked:m,defaultValue:h,onChange:p}=e,f=eZ(e,["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"]),[g,y]=(0,em.Z)(!1,{value:null!=u?u:d,defaultValue:null!=m?m:h}),{getPrefixCls:v,direction:w,switch:b}=i.useContext(ey.E_),k=i.useContext(ev.Z),x=(null!=a?a:k)||l,$=v("switch",n),S=i.createElement("div",{className:`${$}-handle`},l&&i.createElement(el.Z,{className:`${$}-loading-icon`})),[j,C,I]=eE($),E=(0,ew.Z)(r),Z=ec()(null==b?void 0:b.className,{[`${$}-small`]:"small"===E,[`${$}-loading`]:l,[`${$}-rtl`]:"rtl"===w},o,c,C,I),R=Object.assign(Object.assign({},null==b?void 0:b.style),s);return j(i.createElement(eg.Z,{component:"Switch"},i.createElement(ef,Object.assign({},f,{checked:g,onChange:function(){y(arguments.length<=0?void 0:arguments[0]),null==p||p.apply(void 0,arguments)},prefixCls:$,className:Z,style:R,disabled:x,ref:t,loadingIcon:S}))))});eR.__ANT_SWITCH=!0;var eO=n.p+"images/3db910008d877cd2.jpg",eT=n(1047),eP=n(3293);let eA=(0,i.memo)(e=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 1024 1024",...e,children:[(0,r.jsx)("path",{d:"M341.331 512c0 94.26 76.416 170.669 170.669 170.669 94.26 0 170.669-76.416 170.669-170.669 0-94.26-76.416-170.669-170.669-170.669-94.26 0-170.669 76.416-170.669 170.669"}),(0,r.jsx)("path",{d:"M972.8 460.8h-54.784C894.509 275.443 748.556 129.491 563.2 105.984V51.2a51.2 51.2 0 1 0-102.4 0v54.784C275.443 129.491 129.491 275.444 105.984 460.8H51.2a51.2 51.2 0 1 0 0 102.4h54.784c23.507 185.357 169.46 331.309 354.816 354.816V972.8a51.2 51.2 0 1 0 102.4 0v-54.784c185.357-23.507 331.309-169.46 354.816-354.816H972.8a51.2 51.2 0 1 0 0-102.4M512 819.2c-169.664 0-307.2-137.536-307.2-307.2S342.336 204.8 512 204.8 819.2 342.336 819.2 512 681.664 819.2 512 819.2"})]})),eM=(0,i.memo)(e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 1024 1024",...e,children:(0,r.jsx)("path",{d:"M909 897H115a50 50 0 0 1-50-50V177a50 50 0 0 1 50-50h370a50 50 0 0 1 50 50v62a10 10 0 0 0 10 10h241a50 50 0 0 1 50 50v58h73a50 50 0 0 1 50 50v440a50 50 0 0 1-50 50M505 309a30 30 0 0 1-30-30v-72a20 20 0 0 0-20-20H145a20 20 0 0 0-20 20v610c0 11.046 9.377 20 20.422 20H209a20 20 0 0 0 20-20V407a50 50 0 0 1 50-50h497v-28a20 20 0 0 0-20-20H535m364 128a20 20 0 0 0-20-20H309a20 20 0 0 0-20 20v400h590a20 20 0 0 0 20-20zM650.659 615.8l-26.618-26.53V737a30 30 0 0 1-30 30h-.113a30 30 0 0 1-30-30V589.275L537.309 615.8a30.006 30.006 0 0 1-42.509-42.36l77.928-77.669a30.127 30.127 0 0 1 42.506 0l77.929 77.669a30.007 30.007 0 0 1-42.504 42.36"})})),{useApp:eL}=M.default,{Item:eD,useForm:eN,useWatch:e_}=Y.default,eH=(0,i.memo)(function({uid:e,name:t,items:l,image:o,trigger:c,currentRef:s}){let u=(0,i.useRef)(!1),d=(0,i.useRef)(),{message:m}=eL(),h=(0,i.useRef)(),[p,f]=(0,i.useState)(),[g,y]=(0,i.useState)(!1),[v,w]=(0,A.Z)(!1),b=(0,i.useMemo)(()=>({src:p,visible:g,onVisibleChange(e){y(e)},toolbarRender(e){return(0,r.jsxs)("div",{className:a.locatedToolbar,children:[(0,r.jsx)("p",{children:t}),e]})}}),[p,t,g]),k=(0,i.useCallback)(()=>{if(s.current=e,h.current!==e){let t=d.current;if(t&&!u.current){w(!0),u.current=!0,h.current=e;let n=function(e){let t=new OffscreenCanvas(e.width,e.height);return t.getContext("2d").drawImage(e,0,0),t.transferToImageBitmap()}(o),r={image:n,items:l.map(e=>({finder:e.finder,timing:e.timing,corners:e.corners,alignment:e.alignment}))};t.postMessage(r,[n])}}else y(e=>!e)},[e,o,l]);return(0,i.useEffect)(()=>{let t=new Worker(new URL(n.p+n.u(211),n.b));return t.addEventListener("message",({data:t})=>{switch(w(!1),u.current=!1,t.type){case"ok":f(t.payload);let{current:n}=s;n===e&&y(e=>!e);break;case"error":m.error(t.message);break;default:m.error("发生未知错误")}}),d.current=t,()=>{t.terminate()}},[e]),(0,r.jsxs)("div",{className:a.locate,children:[c(v,k),(0,r.jsx)(ee.Z,{hidden:!0,src:eT,preview:b})]})}),ez=(0,i.memo)(function({state:e,currentRef:t}){if(e&&"ok"===e.type){let{payload:n}=e,{uid:a,image:i,items:o}=n;return(0,r.jsx)(eH,{uid:a,name:"概览",image:i,items:o,currentRef:t,trigger:(e,t)=>(0,r.jsx)(et.ZP,{loading:e,onClick:t,icon:(0,r.jsx)(l.Z,{component:eA}),children:"概览"})},a)}return null}),eq=(0,i.memo)(function({state:e,currentRef:t}){let n=(0,i.useMemo)(()=>{if(e&&"ok"===e.type){let{uid:n,image:i,items:o}=e.payload;return o.map((e,o)=>{let{content:c}=e,s=`${n}-${o}`,u=`解码结果【${o+1}】`;return{key:s,label:u,children:(0,r.jsx)("pre",{children:c}),extra:(0,r.jsxs)("div",{onClick:e=>{e.stopPropagation()},className:a.extra,children:[(0,r.jsx)(P,{text:c}),(0,r.jsx)(eH,{uid:s,image:i,items:[e],name:`${u}定位`,currentRef:t,trigger:(e,t)=>e?(0,r.jsx)(el.Z,{}):(0,r.jsx)(j.Z,{title:"定位",children:(0,r.jsx)(l.Z,{component:eA,onClick:t})})},s)]})}})}},[e]);if(e)switch(e.type){case"ok":return(0,r.jsx)(en.Z,{size:"small",items:n,className:a.contents,defaultActiveKey:`${e.payload.uid}-0`},e.payload.uid);case"error":return(0,r.jsx)(er.Z,{type:"error",message:e.message,showIcon:!0});default:return(0,r.jsx)(er.Z,{type:"error",message:"发生未知错误",showIcon:!0})}return null});var eU=(0,i.memo)(function(){let e=(0,i.useRef)(!1),t=(0,i.useRef)(),[o]=eN(),c=e_(["image"],o),s=(0,i.useRef)(),[u,d]=(0,A.Z)(!1),[m,h]=(0,i.useState)(),p=(0,i.useMemo)(()=>({image:eO,strict:!1,invert:!1}),[]),f=(0,i.useCallback)(n=>{let r=t.current;if(r&&!e.current){d(!0),e.current=!0;let{image:t}=n,a=new self.Image;a.crossOrigin="anonymous",a.addEventListener("error",()=>{d(!1)}),a.addEventListener("load",()=>{createImageBitmap(a).then(e=>{let a={...n,image:e,uid:t};r.postMessage(a,[e])})}),a.src=t}},[]),g=(0,i.useCallback)(e=>e?(0,r.jsx)(ee.Z,{src:e,alt:"preview",className:a.preview}):null,[]);return(0,i.useEffect)(()=>{let r=new Worker(new URL(n.p+n.u(514),n.b));return r.addEventListener("message",({data:t})=>{h(t),d(!1),e.current=!1}),t.current=r,()=>{r.terminate()}},[]),(0,r.jsxs)("div",{className:"ui-page",children:[(0,r.jsx)(Y.default,{form:o,onFinish:f,layout:"vertical",initialValues:p,children:(0,r.jsxs)(ea.Z,{gutter:24,children:[(0,r.jsx)(ei.Z,{span:24,children:(0,r.jsx)(eD,{name:"image",children:(0,r.jsx)(J,{preview:g,children:(0,r.jsx)(et.ZP,{icon:(0,r.jsx)(l.Z,{component:eM}),children:"选择图片"})})})}),(0,r.jsx)(ei.Z,{span:24,children:(0,r.jsx)(eD,{name:"strict",label:"严格模式",valuePropName:"checked",tooltip:"可增加扫描速度，但会降低识别率",children:(0,r.jsx)(eR,{checkedChildren:"开",unCheckedChildren:"关"})})}),(0,r.jsx)(ei.Z,{span:24,children:(0,r.jsx)(eD,{name:"invert",label:"图片反色",valuePropName:"checked",children:(0,r.jsx)(eR,{checkedChildren:"开",unCheckedChildren:"关"})})}),(0,r.jsxs)(ei.Z,{span:24,className:a.actions,children:[(0,r.jsx)(et.ZP,{type:"primary",htmlType:"submit",loading:u,disabled:!c,icon:(0,r.jsx)(l.Z,{component:eP.Z}),children:"解码"}),(0,r.jsx)(ez,{state:m,currentRef:s})]})]})}),(0,r.jsx)("div",{className:a.result,children:(0,r.jsx)(eq,{state:m,currentRef:s})})]})})},8456:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}}]);