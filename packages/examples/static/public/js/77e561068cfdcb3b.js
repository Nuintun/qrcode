(self.webpackChunk=self.webpackChunk||[]).push([[923],{796:function(e,t,n){"use strict";var r=n(3498),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,i,l,o,c,s,u,d,m=!1;t||(t={}),l=t.debug||!1;try{if(c=r(),s=document.createRange(),u=document.getSelection(),(d=document.createElement("span")).textContent=e,d.ariaHidden="true",d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){l&&console.warn("unable to use e.clipboardData"),l&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=a[t.format]||a.default;window.clipboardData.setData(r,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(d),s.selectNodeContents(d),u.addRange(s),!document.execCommand("copy"))throw Error("copy command was unsuccessful");m=!0}catch(r){l&&console.error("unable to copy using execCommand: ",r),l&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),m=!0}catch(r){l&&console.error("unable to copy using clipboardData: ",r),l&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",i=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",o=n.replace(/#{\s*key\s*}/g,i),window.prompt(o,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(s):u.removeAllRanges()),d&&document.body.removeChild(d),c()}return m}},5122:function(e,t,n){"use strict";n.d(t,{A:function(){return a}});var r=n(5832);function a(e){let t=(0,r.useRef)(e);return t.current=(0,r.useMemo)(()=>e,[e]),t}},4949:function(e,t,n){"use strict";n.d(t,{A:function(){return i}});var r=n(5832),a=n(5122);function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:128,n=(0,r.useRef)(),i=(0,a.A)(t),[l,o]=(0,r.useState)(e),c=(0,r.useCallback)(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.current;clearTimeout(n.current),t<=0?o(e):n.current=setTimeout(()=>{o(e)},t)},[]);return(0,r.useEffect)(()=>()=>{clearTimeout(n.current)},[]),[l,c]}},1533:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eV}});var r=n(9252),a={preview:"f9962498",actions:"a741f479",result:"ebf18c46",contents:"aaf4de2d",extra:"ed042f55",locate:"decf7166",locatedToolbar:"ee2649fa"},i=n(5832),l=n(936),o=n(796),c=n.n(o),s=n(7081),u=n(7201),d=n(1865),m=n(5356),h=n(3611),p=n(340),f=n(2620),g=n(8466),y=n(1298),v=n(6474),w=n(5259);let b=(e,t)=>new w.q(e).setAlpha(t).toRgbString(),k=(e,t)=>new w.q(e).lighten(t).toHexString(),x=e=>{let t=(0,y.cM)(e,{theme:"dark"});return{1:t[0],2:t[1],3:t[2],4:t[3],5:t[6],6:t[5],7:t[4],8:t[6],9:t[5],10:t[4]}},A=(e,t)=>{let n=e||"#000",r=t||"#fff";return{colorBgBase:n,colorTextBase:r,colorText:b(r,.85),colorTextSecondary:b(r,.65),colorTextTertiary:b(r,.45),colorTextQuaternary:b(r,.25),colorFill:b(r,.18),colorFillSecondary:b(r,.12),colorFillTertiary:b(r,.08),colorFillQuaternary:b(r,.04),colorBgElevated:k(n,12),colorBgContainer:k(n,8),colorBgLayout:k(n,0),colorBgSpotlight:k(n,26),colorBgBlur:b(r,.04),colorBorder:k(n,26),colorBorderSecondary:k(n,19)}};var $={defaultConfig:p.sb,defaultSeed:p.sb.token,useToken:function(){let[e,t,n]=(0,h.Ay)();return{theme:e,token:t,hashId:n}},defaultAlgorithm:u.A,darkAlgorithm:(e,t)=>{let n=Object.keys(d.r).map(t=>{let n=(0,y.cM)(e[t],{theme:"dark"});return Array(10).fill(1).reduce((e,r,a)=>(e[`${t}-${a+1}`]=n[a],e[`${t}${a+1}`]=n[a],e),{})}).reduce((e,t)=>e=Object.assign(Object.assign({},e),t),{});return Object.assign(Object.assign(Object.assign({},null!=t?t:(0,u.A)(e)),n),(0,v.A)(e,{generateColorPalettes:x,generateNeutralColorPalettes:A}))},compactAlgorithm:(e,t)=>{let n=null!=t?t:(0,u.A)(e),r=n.fontSizeSM,a=n.controlHeight-4;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},n),function(e){let{sizeUnit:t,sizeStep:n}=e,r=n-2;return{sizeXXL:t*(r+10),sizeXL:t*(r+6),sizeLG:t*(r+2),sizeMD:t*(r+2),sizeMS:t*(r+1),size:t*r,sizeSM:t*r,sizeXS:t*(r-1),sizeXXS:t*(r-1)}}(null!=t?t:e)),(0,g.A)(r)),{controlHeight:a}),(0,f.A)(Object.assign(Object.assign({},n),{controlHeight:a})))},getDesignToken:e=>{let t=(null==e?void 0:e.algorithm)?(0,s.an)(e.algorithm):(0,s.an)(u.A),n=Object.assign(Object.assign({},d.A),null==e?void 0:e.token);return(0,s.lO)(n,{override:null==e?void 0:e.token},t,m.A)}},S=n(9352),j=n(2086),C=n(1713),I=n(1476),E={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},O=n(4907),R=i.forwardRef(function(e,t){return i.createElement(O.A,(0,I.A)({},e,{ref:t,icon:E}))});let{useToken:T}=$;var M=(0,i.memo)(function(e){let{text:t,debug:n,format:a,message:l}=e,{token:o}=T(),[s,u]=(0,i.useState)(0),d=(0,i.useCallback)(()=>{c()(t,{debug:n,format:a,message:l})?u(1):u(2),setTimeout(()=>{u(0)},3e3)},[t,n,a,l]);switch(s){case 1:return(0,r.jsx)(S.A,{title:"复制成功",children:(0,r.jsx)(j.A,{style:{color:o.colorSuccessActive}})});case 2:return(0,r.jsx)(S.A,{title:"复制失败",children:(0,r.jsx)(C.A,{style:{color:o.colorErrorActive}})});default:return(0,r.jsx)(S.A,{title:"复制",children:(0,r.jsx)(R,{onClick:d})})}}),L=n(4949),P=n(295);let D=(()=>{if("undefined"==typeof self)return!1;if("top"in self&&self!==top)try{top.window.document._=0}catch(e){return!1}return"showOpenFilePicker"in self})(),z=D?Promise.resolve().then(function(){return _}):Promise.resolve().then(function(){return F});async function N(...e){return(await z).default(...e)}D?Promise.resolve().then(function(){return V}):Promise.resolve().then(function(){return X}),D?Promise.resolve().then(function(){return B}):Promise.resolve().then(function(){return W});let H=async e=>{let t=await e.getFile();return t.handle=e,t};var _={__proto__:null,default:async(e=[{}])=>{Array.isArray(e)||(e=[e]);let t=[];e.forEach((e,n)=>{t[n]={description:e.description||"Files",accept:{}},e.mimeTypes?e.mimeTypes.map(r=>{t[n].accept[r]=e.extensions||[]}):t[n].accept["*/*"]=e.extensions||[]});let n=await window.showOpenFilePicker({id:e[0].id,startIn:e[0].startIn,types:t,multiple:e[0].multiple||!1,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),r=await Promise.all(n.map(H));return e[0].multiple?r:r[0]}};function q(e){function t(e){if(Object(e)!==e)return Promise.reject(TypeError(e+" is not an object."));var t=e.done;return Promise.resolve(e.value).then(function(e){return{value:e,done:t}})}return(q=function(e){this.s=e,this.n=e.next}).prototype={s:null,n:null,next:function(){return t(this.n.apply(this.s,arguments))},return:function(e){var n=this.s.return;return void 0===n?Promise.resolve({value:e,done:!0}):t(n.apply(this.s,arguments))},throw:function(e){var n=this.s.return;return void 0===n?Promise.reject(e):t(n.apply(this.s,arguments))}},new q(e)}let U=async(e,t,n=e.name,r)=>{let a=[],i=[];var l,o=!1,c=!1;try{for(var s,u=function(e){var t,n,r,a=2;for("undefined"!=typeof Symbol&&(n=Symbol.asyncIterator,r=Symbol.iterator);a--;){if(n&&null!=(t=e[n]))return t.call(e);if(r&&null!=(t=e[r]))return new q(t.call(e));n="@@asyncIterator",r="@@iterator"}throw TypeError("Object is not async iterable")}(e.values());o=!(s=await u.next()).done;o=!1){let l=s.value,o=`${n}/${l.name}`;"file"===l.kind?i.push(l.getFile().then(t=>(t.directoryHandle=e,t.handle=l,Object.defineProperty(t,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>o})))):"directory"!==l.kind||!t||r&&r(l)||a.push(U(l,t,o,r))}}catch(e){c=!0,l=e}finally{try{o&&null!=u.return&&await u.return()}finally{if(c)throw l}}return[...(await Promise.all(a)).flat(),...await Promise.all(i)]};var V={__proto__:null,default:async(e={})=>{e.recursive=e.recursive||!1,e.mode=e.mode||"read";let t=await window.showDirectoryPicker({id:e.id,startIn:e.startIn,mode:e.mode});return(await (await t.values()).next()).done?[t]:U(t,e.recursive,void 0,e.skipDirectory)}},B={__proto__:null,default:async(e,t=[{}],n=null,r=!1,a=null)=>{Array.isArray(t)||(t=[t]),t[0].fileName=t[0].fileName||"Untitled";let i=[],l=null;if(e instanceof Blob&&e.type?l=e.type:e.headers&&e.headers.get("content-type")&&(l=e.headers.get("content-type")),t.forEach((e,t)=>{i[t]={description:e.description||"Files",accept:{}},e.mimeTypes?(0===t&&l&&e.mimeTypes.push(l),e.mimeTypes.map(n=>{i[t].accept[n]=e.extensions||[]})):l?i[t].accept[l]=e.extensions||[]:i[t].accept["*/*"]=e.extensions||[]}),n)try{await n.getFile()}catch(e){if(n=null,r)throw e}let o=n||await window.showSaveFilePicker({suggestedName:t[0].fileName,id:t[0].id,startIn:t[0].startIn,types:i,excludeAcceptAllOption:t[0].excludeAcceptAllOption||!1});!n&&a&&a(o);let c=await o.createWritable();if("stream"in e){let t=e.stream();return await t.pipeTo(c),o}return"body"in e?await e.body.pipeTo(c):(await c.write(await e),await c.close()),o}},F={__proto__:null,default:async(e=[{}])=>(Array.isArray(e)||(e=[e]),new Promise((t,n)=>{let r=document.createElement("input");r.type="file";let a=[...e.map(e=>e.mimeTypes||[]),...e.map(e=>e.extensions||[])].join();r.multiple=e[0].multiple||!1,r.accept=a||"",r.style.display="none",document.body.append(r);let i=e=>{"function"==typeof l&&l(),t(e)},l=e[0].legacySetup&&e[0].legacySetup(i,()=>l(n),r),o=()=>{window.removeEventListener("focus",o),r.remove()};r.addEventListener("click",()=>{window.addEventListener("focus",o)}),r.addEventListener("change",()=>{window.removeEventListener("focus",o),r.remove(),i(r.multiple?Array.from(r.files):r.files[0])}),"showPicker"in HTMLInputElement.prototype?r.showPicker():r.click()}))},X={__proto__:null,default:async(e=[{}])=>(Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise((t,n)=>{let r=document.createElement("input");r.type="file",r.webkitdirectory=!0;let a=e=>{"function"==typeof i&&i(),t(e)},i=e[0].legacySetup&&e[0].legacySetup(a,()=>i(n),r);r.addEventListener("change",()=>{let t=Array.from(r.files);e[0].recursive?e[0].recursive&&e[0].skipDirectory&&(t=t.filter(t=>t.webkitRelativePath.split("/").every(t=>!e[0].skipDirectory({name:t,kind:"directory"})))):t=t.filter(e=>2===e.webkitRelativePath.split("/").length),a(t)}),"showPicker"in HTMLInputElement.prototype?r.showPicker():r.click()}))},W={__proto__:null,default:async(e,t={})=>{Array.isArray(t)&&(t=t[0]);let n=document.createElement("a"),r=e;"body"in e&&(r=await async function(e,t){let n=e.getReader(),r=new Response(new ReadableStream({start:e=>(async function t(){return n.read().then(({done:n,value:r})=>{if(!n)return e.enqueue(r),t();e.close()})})()})),a=await r.blob();return n.releaseLock(),new Blob([a],{type:t})}(e.body,e.headers.get("content-type"))),n.download=t.fileName||"Untitled",n.href=URL.createObjectURL(await r);let a=()=>{"function"==typeof i&&i()},i=t.legacySetup&&t.legacySetup(a,()=>i(),n);return n.addEventListener("click",()=>{setTimeout(()=>URL.revokeObjectURL(n.href),3e4),a()}),n.click(),null}},K=n(5122);function Q(e){return"function"==typeof e}function G(e){let{valuePropName:t="value"}=e;return t}let{useApp:J}=P.A;var Y=(0,i.memo)(function(e){let{message:t}=J(),n=(0,i.useRef)(),[a,l]=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=function(){let e=(0,i.useRef)(!1);return(0,i.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),(0,i.useCallback)(()=>e.current,[])}(),r=(0,K.A)(e),a=(0,K.A)(t),[l=t.defaultValue,o]=(0,i.useState)(()=>G(t) in e?e[G(t)]:e[function(e){let{defaultValuePropName:t="defaultValue"}=e;return t}(t)]),c=(0,K.A)(l),s=(0,i.useCallback)(function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),l=1;l<t;l++)i[l-1]=arguments[l];if(n()){let{current:t}=c,n=Q(e)?e(t):e;if(n!==t){let{current:e}=r,{trigger:t="onChange"}=e,{current:l}=a;G(l) in e||o(n),Q(e[t])&&e[t](n,...i)}}},[]);return(0,i.useEffect)(()=>{if(G(t) in e){let n=e[G(t)];n!==l&&o(n)}}),[l,s]}(e),{children:o,disabled:c,preview:s,accept:u="image/*"}=e,d=(0,i.useCallback)(()=>{c||N({mimeTypes:[u]}).then(e=>{/^image\/.+$/i.test(e.type)?l(()=>(n.current&&URL.revokeObjectURL(n.current),n.current=URL.createObjectURL(e),n.current)):t.error("请选择图片格式文件")},()=>{})},[u,c]);return(0,r.jsxs)("div",{className:"a6678820",children:[(0,r.jsx)("div",{onClick:d,children:o}),s&&s(a)]})}),Z=n(4800),ee=n(7141),et=n(3256),en=n(4449),er=n(3451),ea=n(8274),ei=n(1168),el=n(2671),eo=n(9400),ec=n.n(eo),es=n(4975),eu=n(6165),ed=n(2725),em=n(9395),eh=n(4082),ep=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],ef=i.forwardRef(function(e,t){var n,r=e.prefixCls,a=void 0===r?"rc-switch":r,l=e.className,o=e.checked,c=e.defaultChecked,s=e.disabled,u=e.loadingIcon,d=e.checkedChildren,m=e.unCheckedChildren,h=e.onClick,p=e.onChange,f=e.onKeyDown,g=(0,ed.A)(e,ep),y=(0,em.A)(!1,{value:o,defaultValue:c}),v=(0,eu.A)(y,2),w=v[0],b=v[1];function k(e,t){var n=w;return s||(b(n=e),null==p||p(n,t)),n}var x=ec()(a,l,(n={},(0,es.A)(n,"".concat(a,"-checked"),w),(0,es.A)(n,"".concat(a,"-disabled"),s),n));return i.createElement("button",(0,I.A)({},g,{type:"button",role:"switch","aria-checked":w,disabled:s,className:x,ref:t,onKeyDown:function(e){e.which===eh.A.LEFT?k(!1,e):e.which===eh.A.RIGHT&&k(!0,e),null==f||f(e)},onClick:function(e){var t=k(!w,e);null==h||h(t,e)}}),u,i.createElement("span",{className:"".concat(a,"-inner")},i.createElement("span",{className:"".concat(a,"-inner-checked")},d),i.createElement("span",{className:"".concat(a,"-inner-unchecked")},m)))});ef.displayName="Switch";var eg=n(3763),ey=n(337),ev=n(4353),ew=n(2723),eb=n(2099),ek=n(2653),ex=n(6);let eA=e=>{let{componentCls:t,trackHeightSM:n,trackPadding:r,trackMinWidthSM:a,innerMinMarginSM:i,innerMaxMarginSM:l,handleSizeSM:o,calc:c}=e,u=`${t}-inner`,d=(0,s.zA)(c(o).add(c(r).mul(2)).equal()),m=(0,s.zA)(c(l).mul(2).equal());return{[t]:{[`&${t}-small`]:{minWidth:a,height:n,lineHeight:(0,s.zA)(n),[`${t}-inner`]:{paddingInlineStart:l,paddingInlineEnd:i,[`${u}-checked`]:{marginInlineStart:`calc(-100% + ${d} - ${m})`,marginInlineEnd:`calc(100% - ${d} + ${m})`},[`${u}-unchecked`]:{marginTop:c(n).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`${t}-handle`]:{width:o,height:o},[`${t}-loading-icon`]:{top:c(c(o).sub(e.switchLoadingIconSize)).div(2).equal(),fontSize:e.switchLoadingIconSize},[`&${t}-checked`]:{[`${t}-inner`]:{paddingInlineStart:i,paddingInlineEnd:l,[`${u}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${u}-unchecked`]:{marginInlineStart:`calc(100% - ${d} + ${m})`,marginInlineEnd:`calc(-100% + ${d} - ${m})`}},[`${t}-handle`]:{insetInlineStart:`calc(100% - ${(0,s.zA)(c(o).add(r).equal())})`}},[`&:not(${t}-disabled):active`]:{[`&:not(${t}-checked) ${u}`]:{[`${u}-unchecked`]:{marginInlineStart:c(e.marginXXS).div(2).equal(),marginInlineEnd:c(e.marginXXS).mul(-1).div(2).equal()}},[`&${t}-checked ${u}`]:{[`${u}-checked`]:{marginInlineStart:c(e.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:c(e.marginXXS).div(2).equal()}}}}}}},e$=e=>{let{componentCls:t,handleSize:n,calc:r}=e;return{[t]:{[`${t}-loading-icon${e.iconCls}`]:{position:"relative",top:r(r(n).sub(e.fontSize)).div(2).equal(),color:e.switchLoadingIconColor,verticalAlign:"top"},[`&${t}-checked ${t}-loading-icon`]:{color:e.switchColor}}}},eS=e=>{let{componentCls:t,trackPadding:n,handleBg:r,handleShadow:a,handleSize:i,calc:l}=e,o=`${t}-handle`;return{[t]:{[o]:{position:"absolute",top:n,insetInlineStart:n,width:i,height:i,transition:`all ${e.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:r,borderRadius:l(i).div(2).equal(),boxShadow:a,transition:`all ${e.switchDuration} ease-in-out`,content:'""'}},[`&${t}-checked ${o}`]:{insetInlineStart:`calc(100% - ${(0,s.zA)(l(i).add(n).equal())})`},[`&:not(${t}-disabled):active`]:{[`${o}::before`]:{insetInlineEnd:e.switchHandleActiveInset,insetInlineStart:0},[`&${t}-checked ${o}::before`]:{insetInlineEnd:0,insetInlineStart:e.switchHandleActiveInset}}}}},ej=e=>{let{componentCls:t,trackHeight:n,trackPadding:r,innerMinMargin:a,innerMaxMargin:i,handleSize:l,calc:o}=e,c=`${t}-inner`,u=(0,s.zA)(o(l).add(o(r).mul(2)).equal()),d=(0,s.zA)(o(i).mul(2).equal());return{[t]:{[c]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:i,paddingInlineEnd:a,transition:`padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,[`${c}-checked, ${c}-unchecked`]:{display:"block",color:e.colorTextLightSolid,fontSize:e.fontSizeSM,transition:`margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,pointerEvents:"none"},[`${c}-checked`]:{marginInlineStart:`calc(-100% + ${u} - ${d})`,marginInlineEnd:`calc(100% - ${u} + ${d})`},[`${c}-unchecked`]:{marginTop:o(n).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`&${t}-checked ${c}`]:{paddingInlineStart:a,paddingInlineEnd:i,[`${c}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${c}-unchecked`]:{marginInlineStart:`calc(100% - ${u} + ${d})`,marginInlineEnd:`calc(-100% + ${u} - ${d})`}},[`&:not(${t}-disabled):active`]:{[`&:not(${t}-checked) ${c}`]:{[`${c}-unchecked`]:{marginInlineStart:o(r).mul(2).equal(),marginInlineEnd:o(r).mul(-1).mul(2).equal()}},[`&${t}-checked ${c}`]:{[`${c}-checked`]:{marginInlineStart:o(r).mul(-1).mul(2).equal(),marginInlineEnd:o(r).mul(2).equal()}}}}}},eC=e=>{let{componentCls:t,trackHeight:n,trackMinWidth:r}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,eb.dF)(e)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:r,height:n,lineHeight:`${(0,s.zA)(n)}`,verticalAlign:"middle",background:e.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${e.motionDurationMid}`,userSelect:"none",[`&:hover:not(${t}-disabled)`]:{background:e.colorTextTertiary}}),(0,eb.K8)(e)),{[`&${t}-checked`]:{background:e.switchColor,[`&:hover:not(${t}-disabled)`]:{background:e.colorPrimaryHover}},[`&${t}-loading, &${t}-disabled`]:{cursor:"not-allowed",opacity:e.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${t}-rtl`]:{direction:"rtl"}})}};var eI=(0,ek.OF)("Switch",e=>{let t=(0,ex.h1)(e,{switchDuration:e.motionDurationMid,switchColor:e.colorPrimary,switchDisabledOpacity:e.opacityLoading,switchLoadingIconSize:e.calc(e.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:`rgba(0, 0, 0, ${e.opacityLoading})`,switchHandleActiveInset:"-30%"});return[eC(t),ej(t),eS(t),e$(t),eA(t)]},e=>{let{fontSize:t,lineHeight:n,controlHeight:r,colorWhite:a}=e,i=t*n,l=r/2,o=i-4,c=l-4;return{trackHeight:i,trackHeightSM:l,trackMinWidth:2*o+8,trackMinWidthSM:2*c+4,trackPadding:2,handleBg:a,handleSize:o,handleSizeSM:c,handleShadow:`0 2px 4px 0 ${new w.q("#00230b").setAlpha(.2).toRgbString()}`,innerMinMargin:o/2,innerMaxMargin:o+2+4,innerMinMarginSM:c/2,innerMaxMarginSM:c+2+4}}),eE=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};let eO=i.forwardRef((e,t)=>{let{prefixCls:n,size:r,disabled:a,loading:l,className:o,rootClassName:c,style:s,checked:u,value:d,defaultChecked:m,defaultValue:h,onChange:p}=e,f=eE(e,["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"]),[g,y]=(0,em.A)(!1,{value:null!=u?u:d,defaultValue:null!=m?m:h}),{getPrefixCls:v,direction:w,switch:b}=i.useContext(ey.QO),k=i.useContext(ev.A),x=(null!=a?a:k)||l,A=v("switch",n),$=i.createElement("div",{className:`${A}-handle`},l&&i.createElement(el.A,{className:`${A}-loading-icon`})),[S,j,C]=eI(A),I=(0,ew.A)(r),E=ec()(null==b?void 0:b.className,{[`${A}-small`]:"small"===I,[`${A}-loading`]:l,[`${A}-rtl`]:"rtl"===w},o,c,j,C),O=Object.assign(Object.assign({},null==b?void 0:b.style),s);return S(i.createElement(eg.A,{component:"Switch"},i.createElement(ef,Object.assign({},f,{checked:g,onChange:function(){y(arguments.length<=0?void 0:arguments[0]),null==p||p.apply(void 0,arguments)},prefixCls:A,className:E,style:O,disabled:x,ref:t,loadingIcon:$}))))});eO.__ANT_SWITCH=!0;var eR=n.p+"images/3db910008d877cd2.jpg",eT=n(8483),eM=n(3872);let eL=(0,i.memo)(e=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 1024 1024",...e,children:[(0,r.jsx)("path",{d:"M341.331 512c0 94.26 76.416 170.669 170.669 170.669 94.26 0 170.669-76.416 170.669-170.669 0-94.26-76.416-170.669-170.669-170.669-94.26 0-170.669 76.416-170.669 170.669"}),(0,r.jsx)("path",{d:"M972.8 460.8h-54.784C894.509 275.443 748.556 129.491 563.2 105.984V51.2a51.2 51.2 0 1 0-102.4 0v54.784C275.443 129.491 129.491 275.444 105.984 460.8H51.2a51.2 51.2 0 1 0 0 102.4h54.784c23.507 185.357 169.46 331.309 354.816 354.816V972.8a51.2 51.2 0 1 0 102.4 0v-54.784c185.357-23.507 331.309-169.46 354.816-354.816H972.8a51.2 51.2 0 1 0 0-102.4M512 819.2c-169.664 0-307.2-137.536-307.2-307.2S342.336 204.8 512 204.8 819.2 342.336 819.2 512 681.664 819.2 512 819.2"})]})),eP=(0,i.memo)(e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 1024 1024",...e,children:(0,r.jsx)("path",{d:"M909 897H115a50 50 0 0 1-50-50V177a50 50 0 0 1 50-50h370a50 50 0 0 1 50 50v62a10 10 0 0 0 10 10h241a50 50 0 0 1 50 50v58h73a50 50 0 0 1 50 50v440a50 50 0 0 1-50 50M505 309a30 30 0 0 1-30-30v-72a20 20 0 0 0-20-20H145a20 20 0 0 0-20 20v610c0 11.046 9.377 20 20.422 20H209a20 20 0 0 0 20-20V407a50 50 0 0 1 50-50h497v-28a20 20 0 0 0-20-20H535m364 128a20 20 0 0 0-20-20H309a20 20 0 0 0-20 20v400h590a20 20 0 0 0 20-20zM650.659 615.8l-26.618-26.53V737a30 30 0 0 1-30 30h-.113a30 30 0 0 1-30-30V589.275L537.309 615.8a30.006 30.006 0 0 1-42.509-42.36l77.928-77.669a30.127 30.127 0 0 1 42.506 0l77.929 77.669a30.007 30.007 0 0 1-42.504 42.36"})})),{useApp:eD}=P.A,{Item:ez,useForm:eN,useWatch:eH}=Z.A,e_=(0,i.memo)(function(e){let{uid:t,name:l,items:o,image:c,trigger:s,currentRef:u}=e,d=(0,i.useRef)(!1),m=(0,i.useRef)(),{message:h}=eD(),p=(0,i.useRef)(),[f,g]=(0,i.useState)(),[y,v]=(0,i.useState)(!1),[w,b]=(0,L.A)(!1),k=(0,i.useMemo)(()=>({src:f,visible:y,onVisibleChange(e){v(e)},toolbarRender(e){return(0,r.jsxs)("div",{className:a.locatedToolbar,children:[(0,r.jsx)("p",{children:l}),e]})}}),[f,l,y]),x=(0,i.useCallback)(()=>{if(u.current=t,p.current!==t){let e=m.current;if(e&&!d.current){b(!0),d.current=!0,p.current=t;let n=function(e){let t=new OffscreenCanvas(e.width,e.height);return t.getContext("2d").drawImage(e,0,0),t.transferToImageBitmap()}(c),r={image:n,items:o.map(e=>({finder:e.finder,timing:e.timing,corners:e.corners,alignment:e.alignment}))};e.postMessage(r,[n])}}else v(e=>!e)},[t,c,o]);return(0,i.useEffect)(()=>{let e=new Worker(new URL(n.p+n.u(68),n.b));return e.addEventListener("message",e=>{let{data:n}=e;switch(b(!1),d.current=!1,n.type){case"ok":g(n.payload);let{current:r}=u;r===t&&v(e=>!e);break;case"error":h.error(n.message);break;default:h.error("发生未知错误")}}),m.current=e,()=>{e.terminate()}},[t]),(0,r.jsxs)("div",{className:a.locate,children:[s(w,x),(0,r.jsx)(ee.A,{hidden:!0,src:eT,preview:k})]})}),eq=(0,i.memo)(function(e){let{state:t,currentRef:n}=e;if(t&&"ok"===t.type){let{payload:e}=t,{uid:a,image:i,items:o}=e;return(0,r.jsx)(e_,{uid:a,name:"概览",image:i,items:o,currentRef:n,trigger:(e,t)=>(0,r.jsx)(et.Ay,{loading:e,onClick:t,icon:(0,r.jsx)(l.A,{component:eL}),children:"概览"})},a)}return null}),eU=(0,i.memo)(function(e){let{state:t,currentRef:n}=e,o=(0,i.useMemo)(()=>{if(t&&"ok"===t.type){let{uid:e,image:i,items:o}=t.payload;return o.map((t,o)=>{let{content:c}=t,s=`${e}-${o}`,u=`解码结果【${o+1}】`;return{key:s,label:u,children:(0,r.jsx)("pre",{children:c}),extra:(0,r.jsxs)("div",{onClick:e=>{e.stopPropagation()},className:a.extra,children:[(0,r.jsx)(M,{text:c}),(0,r.jsx)(e_,{uid:s,image:i,items:[t],name:`${u}定位`,currentRef:n,trigger:(e,t)=>e?(0,r.jsx)(el.A,{}):(0,r.jsx)(S.A,{title:"定位",children:(0,r.jsx)(l.A,{component:eL,onClick:t})})},s)]})}})}},[t]);if(t)switch(t.type){case"ok":return(0,r.jsx)(en.A,{size:"small",items:o,className:a.contents,defaultActiveKey:`${t.payload.uid}-0`},t.payload.uid);case"error":return(0,r.jsx)(er.A,{type:"error",message:t.message,showIcon:!0});default:return(0,r.jsx)(er.A,{type:"error",message:"发生未知错误",showIcon:!0})}return null});var eV=(0,i.memo)(function(){let e=(0,i.useRef)(!1),t=(0,i.useRef)(),[o]=eN(),c=(0,i.useRef)(),[s,u]=(0,L.A)(!1),[d,m]=(0,i.useState)(),h=(0,i.useMemo)(()=>({image:eR,strict:!1,invert:!1}),[]),p=eH(["image"],o)??h.image,f=(0,i.useCallback)(n=>{let r=t.current;if(r&&!e.current){u(!0),e.current=!0;let{image:t}=n,a=new self.Image;a.crossOrigin="anonymous",a.addEventListener("error",()=>{u(!1)}),a.addEventListener("load",()=>{createImageBitmap(a).then(e=>{let a={...n,image:e,uid:t};r.postMessage(a,[e])})}),a.src=t}},[]),g=(0,i.useCallback)(e=>e?(0,r.jsx)(ee.A,{src:e,alt:"preview",className:a.preview}):null,[]);return(0,i.useEffect)(()=>{let r=new Worker(new URL(n.p+n.u(653),n.b));return r.addEventListener("message",t=>{let{data:n}=t;m(n),u(!1),e.current=!1}),t.current=r,()=>{r.terminate()}},[]),(0,r.jsxs)("div",{className:"ui-page",children:[(0,r.jsx)(Z.A,{form:o,onFinish:f,layout:"vertical",initialValues:h,children:(0,r.jsxs)(ea.A,{gutter:24,children:[(0,r.jsx)(ei.A,{span:24,children:(0,r.jsx)(ez,{name:"image",children:(0,r.jsx)(Y,{preview:g,children:(0,r.jsx)(et.Ay,{icon:(0,r.jsx)(l.A,{component:eP}),children:"选择图片"})})})}),(0,r.jsx)(ei.A,{span:24,children:(0,r.jsx)(ez,{name:"strict",label:"严格模式",valuePropName:"checked",tooltip:"可增加扫描速度，但会降低识别率",children:(0,r.jsx)(eO,{checkedChildren:"开",unCheckedChildren:"关"})})}),(0,r.jsx)(ei.A,{span:24,children:(0,r.jsx)(ez,{name:"invert",label:"图片反色",valuePropName:"checked",children:(0,r.jsx)(eO,{checkedChildren:"开",unCheckedChildren:"关"})})}),(0,r.jsxs)(ei.A,{span:24,className:a.actions,children:[(0,r.jsx)(et.Ay,{type:"primary",htmlType:"submit",loading:s,disabled:!p,icon:(0,r.jsx)(l.A,{component:eM.A}),children:"解码"}),(0,r.jsx)(eq,{state:d,currentRef:c})]})]})}),(0,r.jsx)("div",{className:a.result,children:(0,r.jsx)(eU,{state:d,currentRef:c})})]})})},3498:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}}]);