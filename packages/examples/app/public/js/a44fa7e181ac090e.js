(self.webpackChunk=self.webpackChunk||[]).push([[176],{796:function(e,t,n){"use strict";var r=n(3498),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,i,l,o,c,s,u,d,m=!1;t||(t={}),l=t.debug||!1;try{if(c=r(),s=document.createRange(),u=document.getSelection(),(d=document.createElement("span")).textContent=e,d.ariaHidden="true",d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){l&&console.warn("unable to use e.clipboardData"),l&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=a[t.format]||a.default;window.clipboardData.setData(r,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(d),s.selectNodeContents(d),u.addRange(s),!document.execCommand("copy"))throw Error("copy command was unsuccessful");m=!0}catch(r){l&&console.error("unable to copy using execCommand: ",r),l&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),m=!0}catch(r){l&&console.error("unable to copy using clipboardData: ",r),l&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",i=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",o=n.replace(/#{\s*key\s*}/g,i),window.prompt(o,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(s):u.removeAllRanges()),d&&document.body.removeChild(d),c()}return m}},842:function(e,t,n){"use strict";n.d(t,{A:function(){return a}});var r=n(2860);function a(e){let t=(0,r.useRef)(e);return t.current=(0,r.useMemo)(()=>e,[e]),t}},4877:function(e,t,n){"use strict";n.d(t,{A:function(){return l}});var r=n(842),a=n(2860);function i(e){let{current:t}=e;null!=t&&(clearTimeout(t),e.current=null)}function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:128,n=(0,r.A)(t),l=(0,a.useRef)(null),[o,c]=(0,a.useState)(e),s=(0,a.useCallback)(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.current;i(l),t<=0?c(e):l.current=setTimeout(()=>{null!=l.current&&(c(e),l.current=null)},t)},[]);return(0,a.useEffect)(()=>()=>{i(l)},[]),[o,s]}},2568:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return e3}});var r=n(8048),a=n(6719),i=n(796),l=n.n(i),o=n(7567),c=n(3951),s=n(9235),u=n(8670),d=n(9877),m=n(8334),p=n(7074),f=n(8580),h=n(9573),g=n(1244),y=n(5259);let v=(e,t)=>new y.q(e).setAlpha(t).toRgbString(),b=(e,t)=>new y.q(e).lighten(t).toHexString(),w=e=>{let t=(0,h.cM)(e,{theme:"dark"});return{1:t[0],2:t[1],3:t[2],4:t[3],5:t[6],6:t[5],7:t[4],8:t[6],9:t[5],10:t[4]}},k=(e,t)=>{let n=e||"#000",r=t||"#fff";return{colorBgBase:n,colorTextBase:r,colorText:v(r,.85),colorTextSecondary:v(r,.65),colorTextTertiary:v(r,.45),colorTextQuaternary:v(r,.25),colorFill:v(r,.18),colorFillSecondary:v(r,.12),colorFillTertiary:v(r,.08),colorFillQuaternary:v(r,.04),colorBgSolid:v(r,.95),colorBgSolidHover:v(r,1),colorBgSolidActive:v(r,.9),colorBgElevated:b(n,12),colorBgContainer:b(n,8),colorBgLayout:b(n,0),colorBgSpotlight:b(n,26),colorBgBlur:v(r,.04),colorBorder:b(n,26),colorBorderSecondary:b(n,19)}};var x={defaultSeed:m.sb.token,useToken:function(){let[e,t,n]=(0,d.Ay)();return{theme:e,token:t,hashId:n}},defaultAlgorithm:c.A,darkAlgorithm:(e,t)=>{let n=Object.keys(s.r).map(t=>{let n=(0,h.cM)(e[t],{theme:"dark"});return Array(10).fill(1).reduce((e,r,a)=>(e[`${t}-${a+1}`]=n[a],e[`${t}${a+1}`]=n[a],e),{})}).reduce((e,t)=>e=Object.assign(Object.assign({},e),t),{});return Object.assign(Object.assign(Object.assign({},null!=t?t:(0,c.A)(e)),n),(0,g.A)(e,{generateColorPalettes:w,generateNeutralColorPalettes:k}))},compactAlgorithm:(e,t)=>{let n=null!=t?t:(0,c.A)(e),r=n.fontSizeSM,a=n.controlHeight-4;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},n),function(e){let{sizeUnit:t,sizeStep:n}=e,r=n-2;return{sizeXXL:t*(r+10),sizeXL:t*(r+6),sizeLG:t*(r+2),sizeMD:t*(r+2),sizeMS:t*(r+1),size:t*r,sizeSM:t*r,sizeXS:t*(r-1),sizeXXS:t*(r-1)}}(null!=t?t:e)),(0,f.A)(r)),{controlHeight:a}),(0,p.A)(Object.assign(Object.assign({},n),{controlHeight:a})))},getDesignToken:e=>{let t=(null==e?void 0:e.algorithm)?(0,o.an)(e.algorithm):(0,o.an)(c.A),n=Object.assign(Object.assign({},s.A),null==e?void 0:e.token);return(0,o.lO)(n,{override:null==e?void 0:e.token},t,u.A)},defaultConfig:m.sb,_internalContext:m.vG},A=n(3522),$=n(2860),j=n(3095),S=n(1124),C=n(2102),I={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},E=n(3538),O=$.forwardRef(function(e,t){return $.createElement(E.A,(0,C.A)({},e,{ref:t,icon:I}))});let{useToken:R}=x;var M=(0,$.memo)(function(e){let{text:t,debug:n,format:a,message:i}=e,{token:o}=R(),[c,s]=(0,$.useState)(0),u=(0,$.useCallback)(()=>{l()(t,{debug:n,format:a,message:i})?s(1):s(2),setTimeout(()=>{s(0)},3e3)},[t,n,a,i]);switch(c){case 1:return(0,r.jsx)(A.A,{title:"复制成功",children:(0,r.jsx)(j.A,{style:{color:o.colorSuccessActive}})});case 2:return(0,r.jsx)(A.A,{title:"复制失败",children:(0,r.jsx)(S.A,{style:{color:o.colorErrorActive}})});default:return(0,r.jsx)(A.A,{title:"复制",children:(0,r.jsx)(O,{onClick:u})})}}),P=n(4877),T=n(2559);let z=(()=>{if("undefined"==typeof self)return!1;if("top"in self&&self!==top)try{top.window.document._=0}catch(e){return!1}return"showOpenFilePicker"in self})(),L=z?Promise.resolve().then(function(){return H}):Promise.resolve().then(function(){return F});async function D(...e){return(await L).default(...e)}z?Promise.resolve().then(function(){return B}):Promise.resolve().then(function(){return V}),z?Promise.resolve().then(function(){return U}):Promise.resolve().then(function(){return X});let N=async e=>{let t=await e.getFile();return t.handle=e,t};var H={__proto__:null,default:async(e=[{}])=>{Array.isArray(e)||(e=[e]);let t=[];e.forEach((e,n)=>{t[n]={description:e.description||"Files",accept:{}},e.mimeTypes?e.mimeTypes.map(r=>{t[n].accept[r]=e.extensions||[]}):t[n].accept["*/*"]=e.extensions||[]});let n=await window.showOpenFilePicker({id:e[0].id,startIn:e[0].startIn,types:t,multiple:e[0].multiple||!1,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),r=await Promise.all(n.map(N));return e[0].multiple?r:r[0]}};function _(e){function t(e){if(Object(e)!==e)return Promise.reject(TypeError(e+" is not an object."));var t=e.done;return Promise.resolve(e.value).then(function(e){return{value:e,done:t}})}return(_=function(e){this.s=e,this.n=e.next}).prototype={s:null,n:null,next:function(){return t(this.n.apply(this.s,arguments))},return:function(e){var n=this.s.return;return void 0===n?Promise.resolve({value:e,done:!0}):t(n.apply(this.s,arguments))},throw:function(e){var n=this.s.return;return void 0===n?Promise.reject(e):t(n.apply(this.s,arguments))}},new _(e)}let q=async(e,t,n=e.name,r)=>{let a=[],i=[];var l,o=!1,c=!1;try{for(var s,u=function(e){var t,n,r,a=2;for("undefined"!=typeof Symbol&&(n=Symbol.asyncIterator,r=Symbol.iterator);a--;){if(n&&null!=(t=e[n]))return t.call(e);if(r&&null!=(t=e[r]))return new _(t.call(e));n="@@asyncIterator",r="@@iterator"}throw TypeError("Object is not async iterable")}(e.values());o=!(s=await u.next()).done;o=!1){let l=s.value,o=`${n}/${l.name}`;"file"===l.kind?i.push(l.getFile().then(t=>(t.directoryHandle=e,t.handle=l,Object.defineProperty(t,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>o})))):"directory"!==l.kind||!t||r&&r(l)||a.push(q(l,t,o,r))}}catch(e){c=!0,l=e}finally{try{o&&null!=u.return&&await u.return()}finally{if(c)throw l}}return[...(await Promise.all(a)).flat(),...await Promise.all(i)]};var B={__proto__:null,default:async(e={})=>{e.recursive=e.recursive||!1,e.mode=e.mode||"read";let t=await window.showDirectoryPicker({id:e.id,startIn:e.startIn,mode:e.mode});return(await (await t.values()).next()).done?[t]:q(t,e.recursive,void 0,e.skipDirectory)}},U={__proto__:null,default:async(e,t=[{}],n=null,r=!1,a=null)=>{Array.isArray(t)||(t=[t]),t[0].fileName=t[0].fileName||"Untitled";let i=[],l=null;if(e instanceof Blob&&e.type?l=e.type:e.headers&&e.headers.get("content-type")&&(l=e.headers.get("content-type")),t.forEach((e,t)=>{i[t]={description:e.description||"Files",accept:{}},e.mimeTypes?(0===t&&l&&e.mimeTypes.push(l),e.mimeTypes.map(n=>{i[t].accept[n]=e.extensions||[]})):l?i[t].accept[l]=e.extensions||[]:i[t].accept["*/*"]=e.extensions||[]}),n)try{await n.getFile()}catch(e){if(n=null,r)throw e}let o=n||await window.showSaveFilePicker({suggestedName:t[0].fileName,id:t[0].id,startIn:t[0].startIn,types:i,excludeAcceptAllOption:t[0].excludeAcceptAllOption||!1});!n&&a&&a(o);let c=await o.createWritable();if("stream"in e){let t=e.stream();return await t.pipeTo(c),o}return"body"in e?await e.body.pipeTo(c):(await c.write(await e),await c.close()),o}},F={__proto__:null,default:async(e=[{}])=>(Array.isArray(e)||(e=[e]),new Promise((t,n)=>{let r=document.createElement("input");r.type="file";let a=[...e.map(e=>e.mimeTypes||[]),...e.map(e=>e.extensions||[])].join();r.multiple=e[0].multiple||!1,r.accept=a||"",r.style.display="none",document.body.append(r);let i=e=>{"function"==typeof l&&l(),t(e)},l=e[0].legacySetup&&e[0].legacySetup(i,()=>l(n),r),o=()=>{window.removeEventListener("focus",o),r.remove()};r.addEventListener("click",()=>{window.addEventListener("focus",o)}),r.addEventListener("change",()=>{window.removeEventListener("focus",o),r.remove(),i(r.multiple?Array.from(r.files):r.files[0])}),"showPicker"in HTMLInputElement.prototype?r.showPicker():r.click()}))},V={__proto__:null,default:async(e=[{}])=>(Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise((t,n)=>{let r=document.createElement("input");r.type="file",r.webkitdirectory=!0;let a=e=>{"function"==typeof i&&i(),t(e)},i=e[0].legacySetup&&e[0].legacySetup(a,()=>i(n),r);r.addEventListener("change",()=>{let t=Array.from(r.files);e[0].recursive?e[0].recursive&&e[0].skipDirectory&&(t=t.filter(t=>t.webkitRelativePath.split("/").every(t=>!e[0].skipDirectory({name:t,kind:"directory"})))):t=t.filter(e=>2===e.webkitRelativePath.split("/").length),a(t)}),"showPicker"in HTMLInputElement.prototype?r.showPicker():r.click()}))},X={__proto__:null,default:async(e,t={})=>{Array.isArray(t)&&(t=t[0]);let n=document.createElement("a"),r=e;"body"in e&&(r=await async function(e,t){let n=e.getReader(),r=new Response(new ReadableStream({start:e=>(async function t(){return n.read().then(({done:n,value:r})=>{if(!n)return e.enqueue(r),t();e.close()})})()})),a=await r.blob();return n.releaseLock(),new Blob([a],{type:t})}(e.body,e.headers.get("content-type"))),n.download=t.fileName||"Untitled",n.href=URL.createObjectURL(await r);let a=()=>{"function"==typeof i&&i()},i=t.legacySetup&&t.legacySetup(a,()=>i(),n);return n.addEventListener("click",()=>{setTimeout(()=>URL.revokeObjectURL(n.href),3e4),a()}),n.click(),null}},W=n(842);function K(e){return"function"==typeof e}function Q(e){let{valuePropName:t="value"}=e;return t}let{useApp:G}=T.A;var Z=(0,$.memo)(function(e){let{message:t}=G(),n=(0,$.useRef)(),[a,i]=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=function(){let e=(0,$.useRef)(!1);return(0,$.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),(0,$.useCallback)(()=>e.current,[])}(),r=(0,W.A)(e),a=(0,W.A)(t),[i=t.defaultValue,l]=(0,$.useState)(()=>Q(t)in e?e[Q(t)]:e[function(e){let{defaultValuePropName:t="defaultValue"}=e;return t}(t)]),o=(0,W.A)(i),c=(0,$.useCallback)(function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),c=1;c<t;c++)i[c-1]=arguments[c];if(n()){let{current:t}=o,n=K(e)?e(t):e;if(n!==t){let{current:e}=r,{trigger:t="onChange"}=e,{current:o}=a;Q(o)in e||l(n),K(e[t])&&e[t](n,...i)}}},[]);return(0,$.useEffect)(()=>{if(Q(t)in e){let n=e[Q(t)];n!==i&&l(n)}}),[i,c]}(e),{children:l,disabled:o,preview:c,accept:s="image/*"}=e,u=(0,$.useCallback)(()=>{o||D({mimeTypes:[s]}).then(e=>{/^image\/.+$/i.test(e.type)?i(()=>(n.current&&URL.revokeObjectURL(n.current),n.current=URL.createObjectURL(e),n.current)):t.error("请选择图片格式文件")},()=>{})},[s,o]);return(0,r.jsxs)("div",{className:"a6678820",children:[(0,r.jsx)("div",{onClick:u,children:l}),c&&c(a)]})}),J={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"},Y=$.forwardRef(function(e,t){return $.createElement(E.A,(0,C.A)({},e,{ref:t,icon:J}))}),ee=n(5514),et=n(6091),en=n(31),er=n(3839),ea=n(3401),ei=n(4766),el=n(3471),eo=n(9400),ec=n.n(eo),es=n(5330),eu=n(3153),ed=n(6535),em=n(790),ep=n(9977),ef=n(1601),eh=n(8775),eg=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},ey=(0,eu.U)(e=>{let{prefixCls:t,className:n,closeIcon:r,closable:a,type:i,title:l,children:o,footer:c}=e,s=eg(e,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:u}=$.useContext(ed.QO),d=u(),m=t||u("modal"),p=(0,em.A)(d),[f,h,g]=(0,eh.Ay)(m,p),y=`${m}-confirm`,v={};return v=i?{closable:null!=a&&a,title:"",footer:"",children:$.createElement(ep.k,Object.assign({},e,{prefixCls:m,confirmPrefixCls:y,rootPrefixCls:d,content:o}))}:{closable:null==a||a,title:l,footer:null!==c&&$.createElement(ef.w,Object.assign({},e)),children:o},f($.createElement(es.Z,Object.assign({prefixCls:m,className:ec()(h,`${m}-pure-panel`,i&&y,i&&`${y}-${i}`,n,g,p)},s,{closeIcon:(0,ef.O)(m,r),closable:a},v)))}),ev=n(35);function eb(e){return(0,ea.Ay)((0,ea.fp)(e))}let ew=el.A;ew.useModal=ev.A,ew.info=function(e){return(0,ea.Ay)((0,ea.$D)(e))},ew.success=function(e){return(0,ea.Ay)((0,ea.Ej)(e))},ew.error=function(e){return(0,ea.Ay)((0,ea.jT)(e))},ew.warning=eb,ew.warn=eb,ew.confirm=function(e){return(0,ea.Ay)((0,ea.lr)(e))},ew.destroyAll=function(){for(;ei.A.length;){let e=ei.A.pop();e&&e()}},ew.config=ea.FB,ew._InternalPanelDoNotUseOrYouWillBeFired=ey;var ek=n(1701),ex=n(8022),eA=n(9264),e$=n(6642),ej=n(249),eS=n(1671),eC=n(6339),eI=n(2045),eE=n(4440),eO=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],eR=$.forwardRef(function(e,t){var n,r=e.prefixCls,a=void 0===r?"rc-switch":r,i=e.className,l=e.checked,o=e.defaultChecked,c=e.disabled,s=e.loadingIcon,u=e.checkedChildren,d=e.unCheckedChildren,m=e.onClick,p=e.onChange,f=e.onKeyDown,h=(0,eC.A)(e,eO),g=(0,eI.A)(!1,{value:l,defaultValue:o}),y=(0,eS.A)(g,2),v=y[0],b=y[1];function w(e,t){var n=v;return c||(b(n=e),null==p||p(n,t)),n}var k=ec()(a,i,(n={},(0,ej.A)(n,"".concat(a,"-checked"),v),(0,ej.A)(n,"".concat(a,"-disabled"),c),n));return $.createElement("button",(0,C.A)({},h,{type:"button",role:"switch","aria-checked":v,disabled:c,className:k,ref:t,onKeyDown:function(e){e.which===eE.A.LEFT?w(!1,e):e.which===eE.A.RIGHT&&w(!0,e),null==f||f(e)},onClick:function(e){var t=w(!v,e);null==m||m(t,e)}}),s,$.createElement("span",{className:"".concat(a,"-inner")},$.createElement("span",{className:"".concat(a,"-inner-checked")},u),$.createElement("span",{className:"".concat(a,"-inner-unchecked")},d)))});eR.displayName="Switch";var eM=n(4805),eP=n(5255),eT=n(7693),ez=n(2401),eL=n(8094),eD=n(2824);let eN=e=>{let{componentCls:t,trackHeightSM:n,trackPadding:r,trackMinWidthSM:a,innerMinMarginSM:i,innerMaxMarginSM:l,handleSizeSM:c,calc:s}=e,u=`${t}-inner`,d=(0,o.zA)(s(c).add(s(r).mul(2)).equal()),m=(0,o.zA)(s(l).mul(2).equal());return{[t]:{[`&${t}-small`]:{minWidth:a,height:n,lineHeight:(0,o.zA)(n),[`${t}-inner`]:{paddingInlineStart:l,paddingInlineEnd:i,[`${u}-checked, ${u}-unchecked`]:{minHeight:n},[`${u}-checked`]:{marginInlineStart:`calc(-100% + ${d} - ${m})`,marginInlineEnd:`calc(100% - ${d} + ${m})`},[`${u}-unchecked`]:{marginTop:s(n).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`${t}-handle`]:{width:c,height:c},[`${t}-loading-icon`]:{top:s(s(c).sub(e.switchLoadingIconSize)).div(2).equal(),fontSize:e.switchLoadingIconSize},[`&${t}-checked`]:{[`${t}-inner`]:{paddingInlineStart:i,paddingInlineEnd:l,[`${u}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${u}-unchecked`]:{marginInlineStart:`calc(100% - ${d} + ${m})`,marginInlineEnd:`calc(-100% + ${d} - ${m})`}},[`${t}-handle`]:{insetInlineStart:`calc(100% - ${(0,o.zA)(s(c).add(r).equal())})`}},[`&:not(${t}-disabled):active`]:{[`&:not(${t}-checked) ${u}`]:{[`${u}-unchecked`]:{marginInlineStart:s(e.marginXXS).div(2).equal(),marginInlineEnd:s(e.marginXXS).mul(-1).div(2).equal()}},[`&${t}-checked ${u}`]:{[`${u}-checked`]:{marginInlineStart:s(e.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:s(e.marginXXS).div(2).equal()}}}}}}},eH=e=>{let{componentCls:t,handleSize:n,calc:r}=e;return{[t]:{[`${t}-loading-icon${e.iconCls}`]:{position:"relative",top:r(r(n).sub(e.fontSize)).div(2).equal(),color:e.switchLoadingIconColor,verticalAlign:"top"},[`&${t}-checked ${t}-loading-icon`]:{color:e.switchColor}}}},e_=e=>{let{componentCls:t,trackPadding:n,handleBg:r,handleShadow:a,handleSize:i,calc:l}=e,c=`${t}-handle`;return{[t]:{[c]:{position:"absolute",top:n,insetInlineStart:n,width:i,height:i,transition:`all ${e.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:r,borderRadius:l(i).div(2).equal(),boxShadow:a,transition:`all ${e.switchDuration} ease-in-out`,content:'""'}},[`&${t}-checked ${c}`]:{insetInlineStart:`calc(100% - ${(0,o.zA)(l(i).add(n).equal())})`},[`&:not(${t}-disabled):active`]:{[`${c}::before`]:{insetInlineEnd:e.switchHandleActiveInset,insetInlineStart:0},[`&${t}-checked ${c}::before`]:{insetInlineEnd:0,insetInlineStart:e.switchHandleActiveInset}}}}},eq=e=>{let{componentCls:t,trackHeight:n,trackPadding:r,innerMinMargin:a,innerMaxMargin:i,handleSize:l,calc:c}=e,s=`${t}-inner`,u=(0,o.zA)(c(l).add(c(r).mul(2)).equal()),d=(0,o.zA)(c(i).mul(2).equal());return{[t]:{[s]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:i,paddingInlineEnd:a,transition:`padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,[`${s}-checked, ${s}-unchecked`]:{display:"block",color:e.colorTextLightSolid,fontSize:e.fontSizeSM,transition:`margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,pointerEvents:"none",minHeight:n},[`${s}-checked`]:{marginInlineStart:`calc(-100% + ${u} - ${d})`,marginInlineEnd:`calc(100% - ${u} + ${d})`},[`${s}-unchecked`]:{marginTop:c(n).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`&${t}-checked ${s}`]:{paddingInlineStart:a,paddingInlineEnd:i,[`${s}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${s}-unchecked`]:{marginInlineStart:`calc(100% - ${u} + ${d})`,marginInlineEnd:`calc(-100% + ${u} - ${d})`}},[`&:not(${t}-disabled):active`]:{[`&:not(${t}-checked) ${s}`]:{[`${s}-unchecked`]:{marginInlineStart:c(r).mul(2).equal(),marginInlineEnd:c(r).mul(-1).mul(2).equal()}},[`&${t}-checked ${s}`]:{[`${s}-checked`]:{marginInlineStart:c(r).mul(-1).mul(2).equal(),marginInlineEnd:c(r).mul(2).equal()}}}}}},eB=e=>{let{componentCls:t,trackHeight:n,trackMinWidth:r}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,ez.dF)(e)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:r,height:n,lineHeight:(0,o.zA)(n),verticalAlign:"middle",background:e.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${e.motionDurationMid}`,userSelect:"none",[`&:hover:not(${t}-disabled)`]:{background:e.colorTextTertiary}}),(0,ez.K8)(e)),{[`&${t}-checked`]:{background:e.switchColor,[`&:hover:not(${t}-disabled)`]:{background:e.colorPrimaryHover}},[`&${t}-loading, &${t}-disabled`]:{cursor:"not-allowed",opacity:e.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${t}-rtl`]:{direction:"rtl"}})}};var eU=(0,eL.OF)("Switch",e=>{let t=(0,eD.oX)(e,{switchDuration:e.motionDurationMid,switchColor:e.colorPrimary,switchDisabledOpacity:e.opacityLoading,switchLoadingIconSize:e.calc(e.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:`rgba(0, 0, 0, ${e.opacityLoading})`,switchHandleActiveInset:"-30%"});return[eB(t),eq(t),e_(t),eH(t),eN(t)]},e=>{let{fontSize:t,lineHeight:n,controlHeight:r,colorWhite:a}=e,i=t*n,l=r/2,o=i-4,c=l-4;return{trackHeight:i,trackHeightSM:l,trackMinWidth:2*o+8,trackMinWidthSM:2*c+4,trackPadding:2,handleBg:a,handleSize:o,handleSizeSM:c,handleShadow:`0 2px 4px 0 ${new y.q("#00230b").setAlpha(.2).toRgbString()}`,innerMinMargin:o/2,innerMaxMargin:o+2+4,innerMinMarginSM:c/2,innerMaxMarginSM:c+2+4}}),eF=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};let eV=$.forwardRef((e,t)=>{let{prefixCls:n,size:r,disabled:a,loading:i,className:l,rootClassName:o,style:c,checked:s,value:u,defaultChecked:d,defaultValue:m,onChange:p}=e,f=eF(e,["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"]),[h,g]=(0,eI.A)(!1,{value:null!=s?s:u,defaultValue:null!=d?d:m}),{getPrefixCls:y,direction:v,switch:b}=$.useContext(ed.QO),w=$.useContext(eP.A),k=(null!=a?a:w)||i,x=y("switch",n),A=$.createElement("div",{className:`${x}-handle`},i&&$.createElement(ee.A,{className:`${x}-loading-icon`})),[j,S,C]=eU(x),I=(0,eT.A)(r),E=ec()(null==b?void 0:b.className,{[`${x}-small`]:"small"===I,[`${x}-loading`]:i,[`${x}-rtl`]:"rtl"===v},l,o,S,C),O=Object.assign(Object.assign({},null==b?void 0:b.style),c);return j($.createElement(eM.A,{component:"Switch"},$.createElement(eR,Object.assign({},f,{checked:h,onChange:function(){g(arguments.length<=0?void 0:arguments[0]),null==p||p.apply(void 0,arguments)},prefixCls:x,className:E,style:O,disabled:k,ref:t,loadingIcon:A}))))});eV.__ANT_SWITCH=!0;var eX=n.p+"images/3db910008d877cd2.jpg",eW=n(8483),eK=n(6491);let eQ=(0,$.memo)(e=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 1024 1024",...e,children:[(0,r.jsx)("path",{d:"M341.331 512c0 94.26 76.416 170.669 170.669 170.669 94.26 0 170.669-76.416 170.669-170.669 0-94.26-76.416-170.669-170.669-170.669-94.26 0-170.669 76.416-170.669 170.669"}),(0,r.jsx)("path",{d:"M972.8 460.8h-54.784C894.509 275.443 748.556 129.491 563.2 105.984V51.2a51.2 51.2 0 1 0-102.4 0v54.784C275.443 129.491 129.491 275.444 105.984 460.8H51.2a51.2 51.2 0 1 0 0 102.4h54.784c23.507 185.357 169.46 331.309 354.816 354.816V972.8a51.2 51.2 0 1 0 102.4 0v-54.784c185.357-23.507 331.309-169.46 354.816-354.816H972.8a51.2 51.2 0 1 0 0-102.4M512 819.2c-169.664 0-307.2-137.536-307.2-307.2S342.336 204.8 512 204.8 819.2 342.336 819.2 512 681.664 819.2 512 819.2"})]})),eG=(0,$.memo)(e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 1024 1024",...e,children:(0,r.jsx)("path",{d:"M909 897H115a50 50 0 0 1-50-50V177a50 50 0 0 1 50-50h370a50 50 0 0 1 50 50v62a10 10 0 0 0 10 10h241a50 50 0 0 1 50 50v58h73a50 50 0 0 1 50 50v440a50 50 0 0 1-50 50M505 309a30 30 0 0 1-30-30v-72a20 20 0 0 0-20-20H145a20 20 0 0 0-20 20v610c0 11.046 9.377 20 20.422 20H209a20 20 0 0 0 20-20V407a50 50 0 0 1 50-50h497v-28a20 20 0 0 0-20-20H535m364 128a20 20 0 0 0-20-20H309a20 20 0 0 0-20 20v400h590a20 20 0 0 0 20-20zM650.659 615.8l-26.618-26.53V737a30 30 0 0 1-30 30h-.113a30 30 0 0 1-30-30V589.275L537.309 615.8a30.006 30.006 0 0 1-42.509-42.36l77.928-77.669a30.127 30.127 0 0 1 42.506 0l77.929 77.669a30.007 30.007 0 0 1-42.504 42.36"})})),{useApp:eZ}=T.A,{Item:eJ,useForm:eY,useWatch:e0}=et.A,e1=(0,$.memo)(function(e){let{state:t,currentRef:n}=e;if(t&&"ok"===t.type){let{payload:e}=t,{uid:i,image:l,items:o}=e;return(0,r.jsx)(e2,{uid:i,name:"概览",image:l,items:o,currentRef:n,trigger:(e,t)=>(0,r.jsx)(en.Ay,{loading:e,onClick:t,icon:(0,r.jsx)(a.A,{component:eQ}),children:"概览"})},i)}return null}),e2=(0,$.memo)(function(e){let{uid:t,name:a,items:i,image:l,trigger:o,currentRef:c}=e,s=(0,$.useRef)(!1),u=(0,$.useRef)(),{message:d}=eZ(),m=(0,$.useRef)(),[p,f]=(0,$.useState)(),[h,g]=(0,$.useState)(!1),[y,v]=(0,P.A)(!1),b=(0,$.useMemo)(()=>({src:p,visible:h,onVisibleChange(e){g(e)},toolbarRender(e){return(0,r.jsxs)("div",{className:"ee2649fa",children:[(0,r.jsx)("p",{children:a}),e]})}}),[p,a,h]),w=(0,$.useCallback)(()=>{if(c.current=t,m.current!==t){let e=u.current;if(e&&!s.current){v(!0),s.current=!0,m.current=t;let n=function(e){let t=new OffscreenCanvas(e.width,e.height);return t.getContext("2d").drawImage(e,0,0),t.transferToImageBitmap()}(l),r={image:n,items:i.map(e=>({finder:e.finder,timing:e.timing,corners:e.corners,alignment:e.alignment}))};e.postMessage(r,[n])}}else g(e=>!e)},[t,l,i]);return(0,$.useEffect)(()=>{let e=new Worker(new URL(n.p+n.u(284),n.b));return e.addEventListener("message",e=>{let{data:n}=e;switch(v(!1),s.current=!1,n.type){case"ok":f(n.payload);let{current:r}=c;r===t&&g(e=>!e);break;case"error":d.error(n.message);break;default:d.error("发生未知错误")}}),u.current=e,()=>{e.terminate()}},[t]),(0,r.jsxs)("div",{className:"decf7166",children:[o(y,w),(0,r.jsx)(er.A,{hidden:!0,src:eW,preview:b})]})}),e4=(0,$.memo)(function(e){let{name:t,item:n}=e,[a,i]=(0,$.useState)(!1),l=(0,$.useCallback)(()=>{i(!0)},[]),o=(0,$.useCallback)(()=>{i(!1)},[]),c=(0,$.useMemo)(()=>{let{content:e,...t}=n;return function(e){let{key:t="key",null:n="null",number:r="number",string:a="string",boolean:i="boolean"}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.replace(/[&<>]/gm,e=>{switch(e){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return e}}).replace(/"(?:\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(?:\s*:)?|\b(?:true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,e=>{let l=r;return/^"/.test(e)?l=/:$/.test(e)?t:a:/null/.test(e)?l=n:/true|false/.test(e)&&(l=i),`<span class="${l}">${e}</span>`})}(JSON.stringify(t,null,2),{key:"e2ff97cd",null:"a575629a",number:"a9fc8a1c",string:"d3599845",boolean:"c8ab7683"})},[n]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(A.A,{title:"详情",children:(0,r.jsx)(Y,{onClick:l})}),(0,r.jsx)(ew,{centered:!0,title:t,destroyOnClose:!0,open:a,onCancel:o,footer:()=>(0,r.jsx)(en.Ay,{type:"primary",onClick:o,children:"确定"}),children:(0,r.jsx)("code",{className:"e6fab091",dangerouslySetInnerHTML:{__html:c}})})]})}),e6=(0,$.memo)(function(e){let{state:t,currentRef:n}=e,i=(0,$.useMemo)(()=>{if(t&&"ok"===t.type){let{uid:e,image:i,items:l}=t.payload;return l.map((t,l)=>{let{content:o}=t,c=`${e}-${l}`,s=`解码结果【${l+1}】`;return{key:c,label:s,children:(0,r.jsx)("pre",{children:o.replace(/\r(?!\n)|\r\n/g,"\n")}),extra:(0,r.jsxs)("div",{onClick:e=>{e.stopPropagation()},className:"ed042f55",children:[(0,r.jsx)(M,{text:o}),(0,r.jsx)(e2,{uid:c,image:i,items:[t],name:`${s}定位`,currentRef:n,trigger:(e,t)=>e?(0,r.jsx)(ee.A,{}):(0,r.jsx)(A.A,{title:"定位",children:(0,r.jsx)(a.A,{component:eQ,onClick:t})})},c),(0,r.jsx)(e4,{name:`${s}详情`,item:t})]})}})}},[t]);if(t)switch(t.type){case"ok":return(0,r.jsx)(ek.A,{size:"small",items:i,className:"aaf4de2d",defaultActiveKey:`${t.payload.uid}-0`},t.payload.uid);case"error":return(0,r.jsx)(ex.A,{type:"error",message:t.message,showIcon:!0});default:return(0,r.jsx)(ex.A,{type:"error",message:"发生未知错误",showIcon:!0})}return null});var e3=(0,$.memo)(function(){let e=(0,$.useRef)(!1),t=(0,$.useRef)(),[i]=eY(),l=(0,$.useRef)(),[o,c]=(0,P.A)(!1),[s,u]=(0,$.useState)(),d=(0,$.useMemo)(()=>({image:eX,strict:!1,invert:!1}),[]),m=e0(["image"],i)??d.image,p=(0,$.useCallback)(n=>{let r=t.current;if(r&&!e.current){c(!0),e.current=!0;let{image:t}=n,a=new self.Image;a.crossOrigin="anonymous",a.addEventListener("error",()=>{c(!1)}),a.addEventListener("load",()=>{createImageBitmap(a).then(e=>{let a={...n,image:e,uid:t};r.postMessage(a,[e])})}),a.src=t}},[]),f=(0,$.useCallback)(e=>e?(0,r.jsx)(er.A,{src:e,alt:"preview",className:"f9962498"}):null,[]);return(0,$.useEffect)(()=>{let r=new Worker(new URL(n.p+n.u(767),n.b));return r.addEventListener("message",t=>{let{data:n}=t;u(n),c(!1),e.current=!1}),t.current=r,()=>{r.terminate()}},[]),(0,r.jsxs)("div",{className:"ui-page",children:[(0,r.jsx)(et.A,{form:i,onFinish:p,layout:"vertical",initialValues:d,children:(0,r.jsxs)(eA.A,{gutter:24,children:[(0,r.jsx)(e$.A,{span:24,children:(0,r.jsx)(eJ,{name:"image",children:(0,r.jsx)(Z,{preview:f,children:(0,r.jsx)(en.Ay,{icon:(0,r.jsx)(a.A,{component:eG}),children:"选择图片"})})})}),(0,r.jsx)(e$.A,{span:24,children:(0,r.jsx)(eJ,{name:"strict",label:"严格模式",valuePropName:"checked",tooltip:"可增加扫描速度，但会降低识别率",children:(0,r.jsx)(eV,{checkedChildren:"开",unCheckedChildren:"关"})})}),(0,r.jsx)(e$.A,{span:24,children:(0,r.jsx)(eJ,{name:"invert",label:"图片反色",valuePropName:"checked",children:(0,r.jsx)(eV,{checkedChildren:"开",unCheckedChildren:"关"})})}),(0,r.jsxs)(e$.A,{span:24,className:"a741f479",children:[(0,r.jsx)(en.Ay,{type:"primary",htmlType:"submit",loading:o,disabled:!m,icon:(0,r.jsx)(a.A,{component:eK.A}),children:"解码"}),(0,r.jsx)(e1,{state:s,currentRef:l})]})]})}),(0,r.jsx)("div",{className:"ebf18c46",children:(0,r.jsx)(e6,{state:s,currentRef:l})})]})})},3498:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}}]);