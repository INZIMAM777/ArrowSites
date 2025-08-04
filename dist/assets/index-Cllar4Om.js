(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function ry(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Op={exports:{}},xu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function GA(){if(C_)return xu;C_=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,s,l){var c=null;if(l!==void 0&&(c=""+l),s.key!==void 0&&(c=""+s.key),"key"in s){l={};for(var d in s)d!=="key"&&(l[d]=s[d])}else l=s;return s=l.ref,{$$typeof:t,type:a,key:c,ref:s!==void 0?s:null,props:l}}return xu.Fragment=e,xu.jsx=n,xu.jsxs=n,xu}var I_;function $A(){return I_||(I_=1,Op.exports=GA()),Op.exports}var y=$A(),Mp={exports:{}},$e={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function YA(){if(N_)return $e;N_=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),w=Symbol.iterator;function T(P){return P===null||typeof P!="object"?null:(P=w&&P[w]||P["@@iterator"],typeof P=="function"?P:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,H={};function O(P,re,me){this.props=P,this.context=re,this.refs=H,this.updater=me||A}O.prototype.isReactComponent={},O.prototype.setState=function(P,re){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,re,"setState")},O.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function $(){}$.prototype=O.prototype;function ee(P,re,me){this.props=P,this.context=re,this.refs=H,this.updater=me||A}var X=ee.prototype=new $;X.constructor=ee,k(X,O.prototype),X.isPureReactComponent=!0;var ce=Array.isArray,ue={H:null,A:null,T:null,S:null,V:null},z=Object.prototype.hasOwnProperty;function N(P,re,me,he,be,Ve){return me=Ve.ref,{$$typeof:t,type:P,key:re,ref:me!==void 0?me:null,props:Ve}}function R(P,re){return N(P.type,re,void 0,void 0,void 0,P.props)}function C(P){return typeof P=="object"&&P!==null&&P.$$typeof===t}function V(P){var re={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(me){return re[me]})}var U=/\/+/g;function B(P,re){return typeof P=="object"&&P!==null&&P.key!=null?V(""+P.key):re.toString(36)}function I(){}function He(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(I,I):(P.status="pending",P.then(function(re){P.status==="pending"&&(P.status="fulfilled",P.value=re)},function(re){P.status==="pending"&&(P.status="rejected",P.reason=re)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function We(P,re,me,he,be){var Ve=typeof P;(Ve==="undefined"||Ve==="boolean")&&(P=null);var Ce=!1;if(P===null)Ce=!0;else switch(Ve){case"bigint":case"string":case"number":Ce=!0;break;case"object":switch(P.$$typeof){case t:case e:Ce=!0;break;case _:return Ce=P._init,We(Ce(P._payload),re,me,he,be)}}if(Ce)return be=be(P),Ce=he===""?"."+B(P,0):he,ce(be)?(me="",Ce!=null&&(me=Ce.replace(U,"$&/")+"/"),We(be,re,me,"",function($t){return $t})):be!=null&&(C(be)&&(be=R(be,me+(be.key==null||P&&P.key===be.key?"":(""+be.key).replace(U,"$&/")+"/")+Ce)),re.push(be)),1;Ce=0;var Dt=he===""?".":he+":";if(ce(P))for(var it=0;it<P.length;it++)he=P[it],Ve=Dt+B(he,it),Ce+=We(he,re,me,Ve,be);else if(it=T(P),typeof it=="function")for(P=it.call(P),it=0;!(he=P.next()).done;)he=he.value,Ve=Dt+B(he,it++),Ce+=We(he,re,me,Ve,be);else if(Ve==="object"){if(typeof P.then=="function")return We(He(P),re,me,he,be);throw re=String(P),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.")}return Ce}function W(P,re,me){if(P==null)return P;var he=[],be=0;return We(P,he,"","",function(Ve){return re.call(me,Ve,be++)}),he}function pe(P){if(P._status===-1){var re=P._result;re=re(),re.then(function(me){(P._status===0||P._status===-1)&&(P._status=1,P._result=me)},function(me){(P._status===0||P._status===-1)&&(P._status=2,P._result=me)}),P._status===-1&&(P._status=0,P._result=re)}if(P._status===1)return P._result.default;throw P._result}var ye=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var re=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(re))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function Ne(){}return $e.Children={map:W,forEach:function(P,re,me){W(P,function(){re.apply(this,arguments)},me)},count:function(P){var re=0;return W(P,function(){re++}),re},toArray:function(P){return W(P,function(re){return re})||[]},only:function(P){if(!C(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},$e.Component=O,$e.Fragment=n,$e.Profiler=s,$e.PureComponent=ee,$e.StrictMode=a,$e.Suspense=p,$e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ue,$e.__COMPILER_RUNTIME={__proto__:null,c:function(P){return ue.H.useMemoCache(P)}},$e.cache=function(P){return function(){return P.apply(null,arguments)}},$e.cloneElement=function(P,re,me){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var he=k({},P.props),be=P.key,Ve=void 0;if(re!=null)for(Ce in re.ref!==void 0&&(Ve=void 0),re.key!==void 0&&(be=""+re.key),re)!z.call(re,Ce)||Ce==="key"||Ce==="__self"||Ce==="__source"||Ce==="ref"&&re.ref===void 0||(he[Ce]=re[Ce]);var Ce=arguments.length-2;if(Ce===1)he.children=me;else if(1<Ce){for(var Dt=Array(Ce),it=0;it<Ce;it++)Dt[it]=arguments[it+2];he.children=Dt}return N(P.type,be,void 0,void 0,Ve,he)},$e.createContext=function(P){return P={$$typeof:c,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:l,_context:P},P},$e.createElement=function(P,re,me){var he,be={},Ve=null;if(re!=null)for(he in re.key!==void 0&&(Ve=""+re.key),re)z.call(re,he)&&he!=="key"&&he!=="__self"&&he!=="__source"&&(be[he]=re[he]);var Ce=arguments.length-2;if(Ce===1)be.children=me;else if(1<Ce){for(var Dt=Array(Ce),it=0;it<Ce;it++)Dt[it]=arguments[it+2];be.children=Dt}if(P&&P.defaultProps)for(he in Ce=P.defaultProps,Ce)be[he]===void 0&&(be[he]=Ce[he]);return N(P,Ve,void 0,void 0,null,be)},$e.createRef=function(){return{current:null}},$e.forwardRef=function(P){return{$$typeof:d,render:P}},$e.isValidElement=C,$e.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:pe}},$e.memo=function(P,re){return{$$typeof:g,type:P,compare:re===void 0?null:re}},$e.startTransition=function(P){var re=ue.T,me={};ue.T=me;try{var he=P(),be=ue.S;be!==null&&be(me,he),typeof he=="object"&&he!==null&&typeof he.then=="function"&&he.then(Ne,ye)}catch(Ve){ye(Ve)}finally{ue.T=re}},$e.unstable_useCacheRefresh=function(){return ue.H.useCacheRefresh()},$e.use=function(P){return ue.H.use(P)},$e.useActionState=function(P,re,me){return ue.H.useActionState(P,re,me)},$e.useCallback=function(P,re){return ue.H.useCallback(P,re)},$e.useContext=function(P){return ue.H.useContext(P)},$e.useDebugValue=function(){},$e.useDeferredValue=function(P,re){return ue.H.useDeferredValue(P,re)},$e.useEffect=function(P,re,me){var he=ue.H;if(typeof me=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return he.useEffect(P,re)},$e.useId=function(){return ue.H.useId()},$e.useImperativeHandle=function(P,re,me){return ue.H.useImperativeHandle(P,re,me)},$e.useInsertionEffect=function(P,re){return ue.H.useInsertionEffect(P,re)},$e.useLayoutEffect=function(P,re){return ue.H.useLayoutEffect(P,re)},$e.useMemo=function(P,re){return ue.H.useMemo(P,re)},$e.useOptimistic=function(P,re){return ue.H.useOptimistic(P,re)},$e.useReducer=function(P,re,me){return ue.H.useReducer(P,re,me)},$e.useRef=function(P){return ue.H.useRef(P)},$e.useState=function(P){return ue.H.useState(P)},$e.useSyncExternalStore=function(P,re,me){return ue.H.useSyncExternalStore(P,re,me)},$e.useTransition=function(){return ue.H.useTransition()},$e.version="19.1.0",$e}var D_;function iy(){return D_||(D_=1,Mp.exports=YA()),Mp.exports}var D=iy();const Mn=ry(D);var Pp={exports:{}},Au={},jp={exports:{}},kp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function KA(){return O_||(O_=1,function(t){function e(W,pe){var ye=W.length;W.push(pe);e:for(;0<ye;){var Ne=ye-1>>>1,P=W[Ne];if(0<s(P,pe))W[Ne]=pe,W[ye]=P,ye=Ne;else break e}}function n(W){return W.length===0?null:W[0]}function a(W){if(W.length===0)return null;var pe=W[0],ye=W.pop();if(ye!==pe){W[0]=ye;e:for(var Ne=0,P=W.length,re=P>>>1;Ne<re;){var me=2*(Ne+1)-1,he=W[me],be=me+1,Ve=W[be];if(0>s(he,ye))be<P&&0>s(Ve,he)?(W[Ne]=Ve,W[be]=ye,Ne=be):(W[Ne]=he,W[me]=ye,Ne=me);else if(be<P&&0>s(Ve,ye))W[Ne]=Ve,W[be]=ye,Ne=be;else break e}}return pe}function s(W,pe){var ye=W.sortIndex-pe.sortIndex;return ye!==0?ye:W.id-pe.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();t.unstable_now=function(){return c.now()-d}}var p=[],g=[],_=1,w=null,T=3,A=!1,k=!1,H=!1,O=!1,$=typeof setTimeout=="function"?setTimeout:null,ee=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function ce(W){for(var pe=n(g);pe!==null;){if(pe.callback===null)a(g);else if(pe.startTime<=W)a(g),pe.sortIndex=pe.expirationTime,e(p,pe);else break;pe=n(g)}}function ue(W){if(H=!1,ce(W),!k)if(n(p)!==null)k=!0,z||(z=!0,B());else{var pe=n(g);pe!==null&&We(ue,pe.startTime-W)}}var z=!1,N=-1,R=5,C=-1;function V(){return O?!0:!(t.unstable_now()-C<R)}function U(){if(O=!1,z){var W=t.unstable_now();C=W;var pe=!0;try{e:{k=!1,H&&(H=!1,ee(N),N=-1),A=!0;var ye=T;try{t:{for(ce(W),w=n(p);w!==null&&!(w.expirationTime>W&&V());){var Ne=w.callback;if(typeof Ne=="function"){w.callback=null,T=w.priorityLevel;var P=Ne(w.expirationTime<=W);if(W=t.unstable_now(),typeof P=="function"){w.callback=P,ce(W),pe=!0;break t}w===n(p)&&a(p),ce(W)}else a(p);w=n(p)}if(w!==null)pe=!0;else{var re=n(g);re!==null&&We(ue,re.startTime-W),pe=!1}}break e}finally{w=null,T=ye,A=!1}pe=void 0}}finally{pe?B():z=!1}}}var B;if(typeof X=="function")B=function(){X(U)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,He=I.port2;I.port1.onmessage=U,B=function(){He.postMessage(null)}}else B=function(){$(U,0)};function We(W,pe){N=$(function(){W(t.unstable_now())},pe)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return T},t.unstable_next=function(W){switch(T){case 1:case 2:case 3:var pe=3;break;default:pe=T}var ye=T;T=pe;try{return W()}finally{T=ye}},t.unstable_requestPaint=function(){O=!0},t.unstable_runWithPriority=function(W,pe){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ye=T;T=W;try{return pe()}finally{T=ye}},t.unstable_scheduleCallback=function(W,pe,ye){var Ne=t.unstable_now();switch(typeof ye=="object"&&ye!==null?(ye=ye.delay,ye=typeof ye=="number"&&0<ye?Ne+ye:Ne):ye=Ne,W){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=ye+P,W={id:_++,callback:pe,priorityLevel:W,startTime:ye,expirationTime:P,sortIndex:-1},ye>Ne?(W.sortIndex=ye,e(g,W),n(p)===null&&W===n(g)&&(H?(ee(N),N=-1):H=!0,We(ue,ye-Ne))):(W.sortIndex=P,e(p,W),k||A||(k=!0,z||(z=!0,B()))),W},t.unstable_shouldYield=V,t.unstable_wrapCallback=function(W){var pe=T;return function(){var ye=T;T=pe;try{return W.apply(this,arguments)}finally{T=ye}}}}(kp)),kp}var M_;function QA(){return M_||(M_=1,jp.exports=KA()),jp.exports}var Vp={exports:{}},In={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_;function XA(){if(P_)return In;P_=1;var t=iy();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(p,g,_){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:w==null?null:""+w,children:p,containerInfo:g,implementation:_}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,In.createPortal=function(p,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,_)},In.flushSync=function(p){var g=c.T,_=a.p;try{if(c.T=null,a.p=2,p)return p()}finally{c.T=g,a.p=_,a.d.f()}},In.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(p,g))},In.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},In.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var _=g.as,w=d(_,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,A=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?a.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:w,integrity:T,fetchPriority:A}):_==="script"&&a.d.X(p,{crossOrigin:w,integrity:T,fetchPriority:A,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},In.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=d(g.as,g.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(p)},In.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,w=d(_,g.crossOrigin);a.d.L(p,_,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},In.preloadModule=function(p,g){if(typeof p=="string")if(g){var _=d(g.as,g.crossOrigin);a.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(p)},In.requestFormReset=function(p){a.d.r(p)},In.unstable_batchedUpdates=function(p,g){return p(g)},In.useFormState=function(p,g,_){return c.H.useFormState(p,g,_)},In.useFormStatus=function(){return c.H.useHostTransitionStatus()},In.version="19.1.0",In}var j_;function dT(){if(j_)return Vp.exports;j_=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Vp.exports=XA(),Vp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_;function WA(){if(k_)return Au;k_=1;var t=QA(),e=iy(),n=dT();function a(r){var i="https://react.dev/errors/"+r;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+r+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var i=r,o=r;if(r.alternate)for(;i.return;)i=i.return;else{r=i;do i=r,(i.flags&4098)!==0&&(o=i.return),r=i.return;while(r)}return i.tag===3?o:null}function c(r){if(r.tag===13){var i=r.memoizedState;if(i===null&&(r=r.alternate,r!==null&&(i=r.memoizedState)),i!==null)return i.dehydrated}return null}function d(r){if(l(r)!==r)throw Error(a(188))}function p(r){var i=r.alternate;if(!i){if(i=l(r),i===null)throw Error(a(188));return i!==r?null:r}for(var o=r,u=i;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),r;if(m===u)return d(f),i;m=m.sibling}throw Error(a(188))}if(o.return!==u.return)o=f,u=m;else{for(var E=!1,S=f.child;S;){if(S===o){E=!0,o=f,u=m;break}if(S===u){E=!0,u=f,o=m;break}S=S.sibling}if(!E){for(S=m.child;S;){if(S===o){E=!0,o=m,u=f;break}if(S===u){E=!0,u=m,o=f;break}S=S.sibling}if(!E)throw Error(a(189))}}if(o.alternate!==u)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?r:i}function g(r){var i=r.tag;if(i===5||i===26||i===27||i===6)return r;for(r=r.child;r!==null;){if(i=g(r),i!==null)return i;r=r.sibling}return null}var _=Object.assign,w=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),ee=Symbol.for("react.consumer"),X=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),U=Symbol.iterator;function B(r){return r===null||typeof r!="object"?null:(r=U&&r[U]||r["@@iterator"],typeof r=="function"?r:null)}var I=Symbol.for("react.client.reference");function He(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===I?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case k:return"Fragment";case O:return"Profiler";case H:return"StrictMode";case ue:return"Suspense";case z:return"SuspenseList";case C:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case A:return"Portal";case X:return(r.displayName||"Context")+".Provider";case ee:return(r._context.displayName||"Context")+".Consumer";case ce:var i=r.render;return r=r.displayName,r||(r=i.displayName||i.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case N:return i=r.displayName||null,i!==null?i:He(r.type)||"Memo";case R:i=r._payload,r=r._init;try{return He(r(i))}catch{}}return null}var We=Array.isArray,W=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pe=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ye={pending:!1,data:null,method:null,action:null},Ne=[],P=-1;function re(r){return{current:r}}function me(r){0>P||(r.current=Ne[P],Ne[P]=null,P--)}function he(r,i){P++,Ne[P]=r.current,r.current=i}var be=re(null),Ve=re(null),Ce=re(null),Dt=re(null);function it(r,i){switch(he(Ce,i),he(Ve,r),he(be,null),i.nodeType){case 9:case 11:r=(r=i.documentElement)&&(r=r.namespaceURI)?n_(r):0;break;default:if(r=i.tagName,i=i.namespaceURI)i=n_(i),r=r_(i,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}me(be),he(be,r)}function $t(){me(be),me(Ve),me(Ce)}function _t(r){r.memoizedState!==null&&he(Dt,r);var i=be.current,o=r_(i,r.type);i!==o&&(he(Ve,r),he(be,o))}function Bt(r){Ve.current===r&&(me(be),me(Ve)),Dt.current===r&&(me(Dt),bu._currentValue=ye)}var nn=Object.prototype.hasOwnProperty,Ei=t.unstable_scheduleCallback,kn=t.unstable_cancelCallback,cs=t.unstable_shouldYield,ro=t.unstable_requestPaint,Vn=t.unstable_now,Rl=t.unstable_getCurrentPriorityLevel,hs=t.unstable_ImmediatePriority,aa=t.unstable_UserBlockingPriority,Ti=t.unstable_NormalPriority,jr=t.unstable_LowPriority,dr=t.unstable_IdlePriority,sa=t.log,oa=t.unstable_setDisableYieldValue,ht=null,Ke=null;function Rn(r){if(typeof sa=="function"&&oa(r),Ke&&typeof Ke.setStrictMode=="function")try{Ke.setStrictMode(ht,r)}catch{}}var Yt=Math.clz32?Math.clz32:$r,io=Math.log,mr=Math.LN2;function $r(r){return r>>>=0,r===0?32:31-(io(r)/mr|0)|0}var Yr=256,Kr=4194304;function Jn(r){var i=r&42;if(i!==0)return i;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function wi(r,i,o){var u=r.pendingLanes;if(u===0)return 0;var f=0,m=r.suspendedLanes,E=r.pingedLanes;r=r.warmLanes;var S=u&134217727;return S!==0?(u=S&~m,u!==0?f=Jn(u):(E&=S,E!==0?f=Jn(E):o||(o=S&~r,o!==0&&(f=Jn(o))))):(S=u&~m,S!==0?f=Jn(S):E!==0?f=Jn(E):o||(o=u&~r,o!==0&&(f=Jn(o)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,o=i&-i,m>=o||m===32&&(o&4194048)!==0)?i:f}function pr(r,i){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&i)===0}function la(r,i){switch(r){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Si(){var r=Yr;return Yr<<=1,(Yr&4194048)===0&&(Yr=256),r}function fs(){var r=Kr;return Kr<<=1,(Kr&62914560)===0&&(Kr=4194304),r}function gr(r){for(var i=[],o=0;31>o;o++)i.push(r);return i}function kr(r,i){r.pendingLanes|=i,i!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function ua(r,i,o,u,f,m){var E=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var S=r.entanglements,M=r.expirationTimes,K=r.hiddenUpdates;for(o=E&~o;0<o;){var ie=31-Yt(o),se=1<<ie;S[ie]=0,M[ie]=-1;var Z=K[ie];if(Z!==null)for(K[ie]=null,ie=0;ie<Z.length;ie++){var J=Z[ie];J!==null&&(J.lane&=-536870913)}o&=~se}u!==0&&Ln(r,u,0),m!==0&&f===0&&r.tag!==0&&(r.suspendedLanes|=m&~(E&~i))}function Ln(r,i,o){r.pendingLanes|=i,r.suspendedLanes&=~i;var u=31-Yt(i);r.entangledLanes|=i,r.entanglements[u]=r.entanglements[u]|1073741824|o&4194090}function Qr(r,i){var o=r.entangledLanes|=i;for(r=r.entanglements;o;){var u=31-Yt(o),f=1<<u;f&i|r[u]&i&&(r[u]|=i),o&=~f}}function Xr(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function ca(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function j(){var r=pe.p;return r!==0?r:(r=window.event,r===void 0?32:T_(r.type))}function q(r,i){var o=pe.p;try{return pe.p=r,i()}finally{pe.p=o}}var Q=Math.random().toString(36).slice(2),oe="__reactFiber$"+Q,de="__reactProps$"+Q,ve="__reactContainer$"+Q,Ae="__reactEvents$"+Q,Te="__reactListeners$"+Q,we="__reactHandles$"+Q,De="__reactResources$"+Q,Se="__reactMarker$"+Q;function xe(r){delete r[oe],delete r[de],delete r[Ae],delete r[Te],delete r[we]}function qe(r){var i=r[oe];if(i)return i;for(var o=r.parentNode;o;){if(i=o[ve]||o[oe]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(r=o_(r);r!==null;){if(o=r[oe])return o;r=o_(r)}return i}r=o,o=r.parentNode}return null}function ut(r){if(r=r[oe]||r[ve]){var i=r.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return r}return null}function At(r){var i=r.tag;if(i===5||i===26||i===27||i===6)return r.stateNode;throw Error(a(33))}function ft(r){var i=r[De];return i||(i=r[De]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Be(r){r[Se]=!0}var dt=new Set,$n={};function vn(r,i){cn(r,i),cn(r+"Capture",i)}function cn(r,i){for($n[r]=i,r=0;r<i.length;r++)dt.add(i[r])}var Un=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ha={},er={};function yr(r){return nn.call(er,r)?!0:nn.call(ha,r)?!1:Un.test(r)?er[r]=!0:(ha[r]=!0,!1)}function tr(r,i,o){if(yr(i))if(o===null)r.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(i);return;case"boolean":var u=i.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){r.removeAttribute(i);return}}r.setAttribute(i,""+o)}}function zn(r,i,o){if(o===null)r.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(i);return}r.setAttribute(i,""+o)}}function Ue(r,i,o,u){if(u===null)r.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}r.setAttributeNS(i,o,""+u)}}var jt,xi;function Bn(r){if(jt===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);jt=i&&i[1]||"",xi=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jt+r+xi}var It=!1;function Vr(r,i){if(!r||It)return"";It=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var se=function(){throw Error()};if(Object.defineProperty(se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(se,[])}catch(J){var Z=J}Reflect.construct(r,[],se)}else{try{se.call()}catch(J){Z=J}r.call(se.prototype)}}else{try{throw Error()}catch(J){Z=J}(se=r())&&typeof se.catch=="function"&&se.catch(function(){})}}catch(J){if(J&&Z&&typeof J.stack=="string")return[J.stack,Z.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],S=m[1];if(E&&S){var M=E.split(`
`),K=S.split(`
`);for(f=u=0;u<M.length&&!M[u].includes("DetermineComponentFrameRoot");)u++;for(;f<K.length&&!K[f].includes("DetermineComponentFrameRoot");)f++;if(u===M.length||f===K.length)for(u=M.length-1,f=K.length-1;1<=u&&0<=f&&M[u]!==K[f];)f--;for(;1<=u&&0<=f;u--,f--)if(M[u]!==K[f]){if(u!==1||f!==1)do if(u--,f--,0>f||M[u]!==K[f]){var ie=`
`+M[u].replace(" at new "," at ");return r.displayName&&ie.includes("<anonymous>")&&(ie=ie.replace("<anonymous>",r.displayName)),ie}while(1<=u&&0<=f);break}}}finally{It=!1,Error.prepareStackTrace=o}return(o=r?r.displayName||r.name:"")?Bn(o):""}function fa(r){switch(r.tag){case 26:case 27:case 5:return Bn(r.type);case 16:return Bn("Lazy");case 13:return Bn("Suspense");case 19:return Bn("SuspenseList");case 0:case 15:return Vr(r.type,!1);case 11:return Vr(r.type.render,!1);case 1:return Vr(r.type,!0);case 31:return Bn("Activity");default:return""}}function da(r){try{var i="";do i+=fa(r),r=r.return;while(r);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function Fn(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Cl(r){var i=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function kd(r){var i=Cl(r)?"checked":"value",o=Object.getOwnPropertyDescriptor(r.constructor.prototype,i),u=""+r[i];if(!r.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(r,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(r,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){r._valueTracker=null,delete r[i]}}}}function ao(r){r._valueTracker||(r._valueTracker=kd(r))}function Il(r){if(!r)return!1;var i=r._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return r&&(u=Cl(r)?r.checked?"true":"false":r.value),r=u,r!==o?(i.setValue(r),!0):!1}function ds(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var Vd=/[\n"\\]/g;function Kt(r){return r.replace(Vd,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function nr(r,i,o,u,f,m,E,S){r.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?r.type=E:r.removeAttribute("type"),i!=null?E==="number"?(i===0&&r.value===""||r.value!=i)&&(r.value=""+Fn(i)):r.value!==""+Fn(i)&&(r.value=""+Fn(i)):E!=="submit"&&E!=="reset"||r.removeAttribute("value"),i!=null?ma(r,E,Fn(i)):o!=null?ma(r,E,Fn(o)):u!=null&&r.removeAttribute("value"),f==null&&m!=null&&(r.defaultChecked=!!m),f!=null&&(r.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?r.name=""+Fn(S):r.removeAttribute("name")}function ms(r,i,o,u,f,m,E,S){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(r.type=m),i!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;o=o!=null?""+Fn(o):"",i=i!=null?""+Fn(i):o,S||i===r.value||(r.value=i),r.defaultValue=i}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,r.checked=S?r.checked:!!u,r.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(r.name=E)}function ma(r,i,o){i==="number"&&ds(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function Ai(r,i,o,u){if(r=r.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<r.length;o++)f=i.hasOwnProperty("$"+r[o].value),r[o].selected!==f&&(r[o].selected=f),f&&u&&(r[o].defaultSelected=!0)}else{for(o=""+Fn(o),i=null,f=0;f<r.length;f++){if(r[f].value===o){r[f].selected=!0,u&&(r[f].defaultSelected=!0);return}i!==null||r[f].disabled||(i=r[f])}i!==null&&(i.selected=!0)}}function Tt(r,i,o){if(i!=null&&(i=""+Fn(i),i!==r.value&&(r.value=i),o==null)){r.defaultValue!==i&&(r.defaultValue=i);return}r.defaultValue=o!=null?""+Fn(o):""}function ps(r,i,o,u){if(i==null){if(u!=null){if(o!=null)throw Error(a(92));if(We(u)){if(1<u.length)throw Error(a(93));u=u[0]}o=u}o==null&&(o=""),i=o}o=Fn(i),r.defaultValue=o,u=r.textContent,u===o&&u!==""&&u!==null&&(r.value=u)}function vr(r,i){if(i){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=i;return}}r.textContent=i}var gs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rc(r,i,o){var u=i.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?r.setProperty(i,""):i==="float"?r.cssFloat="":r[i]="":u?r.setProperty(i,o):typeof o!="number"||o===0||gs.has(i)?i==="float"?r.cssFloat=o:r[i]=(""+o).trim():r[i]=o+"px"}function Nl(r,i,o){if(i!=null&&typeof i!="object")throw Error(a(62));if(r=r.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||i!=null&&i.hasOwnProperty(u)||(u.indexOf("--")===0?r.setProperty(u,""):u==="float"?r.cssFloat="":r[u]="");for(var f in i)u=i[f],i.hasOwnProperty(f)&&o[f]!==u&&Rc(r,f,u)}else for(var m in i)i.hasOwnProperty(m)&&Rc(r,m,i[m])}function Dl(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ld=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ud=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function so(r){return Ud.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var Ri=null;function _r(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Ci=null,Ii=null;function Ol(r){var i=ut(r);if(i&&(r=i.stateNode)){var o=r[de]||null;e:switch(r=i.stateNode,i.type){case"input":if(nr(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),i=o.name,o.type==="radio"&&i!=null){for(o=r;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Kt(""+i)+'"][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==r&&u.form===r.form){var f=u[de]||null;if(!f)throw Error(a(90));nr(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<o.length;i++)u=o[i],u.form===r.form&&Il(u)}break e;case"textarea":Tt(r,o.value,o.defaultValue);break e;case"select":i=o.value,i!=null&&Ai(r,!!o.multiple,i,!1)}}}var Wr=!1;function Cc(r,i,o){if(Wr)return r(i,o);Wr=!0;try{var u=r(i);return u}finally{if(Wr=!1,(Ci!==null||Ii!==null)&&(Eh(),Ci&&(i=Ci,r=Ii,Ii=Ci=null,Ol(i),r)))for(i=0;i<r.length;i++)Ol(r[i])}}function ys(r,i){var o=r.stateNode;if(o===null)return null;var u=o[de]||null;if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(r=r.type,u=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!u;break e;default:r=!1}if(r)return null;if(o&&typeof o!="function")throw Error(a(231,i,typeof o));return o}var Lr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),br=!1;if(Lr)try{var vs={};Object.defineProperty(vs,"passive",{get:function(){br=!0}}),window.addEventListener("test",vs,vs),window.removeEventListener("test",vs,vs)}catch{br=!1}var Zr=null,pa=null,Ni=null;function Ml(){if(Ni)return Ni;var r,i=pa,o=i.length,u,f="value"in Zr?Zr.value:Zr.textContent,m=f.length;for(r=0;r<o&&i[r]===f[r];r++);var E=o-r;for(u=1;u<=E&&i[o-u]===f[m-u];u++);return Ni=f.slice(r,1<u?1-u:void 0)}function Jr(r){var i=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&i===13&&(r=13)):r=i,r===10&&(r=13),32<=r||r===13?r:0}function ei(){return!0}function Pl(){return!1}function hn(r){function i(o,u,f,m,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(o=r[S],this[S]=o?o(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ei:Pl,this.isPropagationStopped=Pl,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ei)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ei)},persist:function(){},isPersistent:ei}),i}var pt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oo=hn(pt),_s=_({},pt,{view:0,detail:0}),Ic=hn(_s),lo,uo,ti,bs=_({},_s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ws,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ti&&(ti&&r.type==="mousemove"?(lo=r.screenX-ti.screenX,uo=r.screenY-ti.screenY):uo=lo=0,ti=r),lo)},movementY:function(r){return"movementY"in r?r.movementY:uo}}),Er=hn(bs),Nc=_({},bs,{dataTransfer:0}),zd=hn(Nc),Es=_({},_s,{relatedTarget:0}),co=hn(Es),jl=_({},pt,{animationName:0,elapsedTime:0,pseudoElement:0}),ho=hn(jl),Dc=_({},pt,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),fo=hn(Dc),Bd=_({},pt,{data:0}),kl=hn(Bd),Ts={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Oc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vl(r){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(r):(r=Mc[r])?!!i[r]:!1}function ws(){return Vl}var Pc=_({},_s,{key:function(r){if(r.key){var i=Ts[r.key]||r.key;if(i!=="Unidentified")return i}return r.type==="keypress"?(r=Jr(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Oc[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ws,charCode:function(r){return r.type==="keypress"?Jr(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Jr(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),mo=hn(Pc),jc=_({},bs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ll=hn(jc),Di=_({},_s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ws}),kc=hn(Di),Vc=_({},pt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lc=hn(Vc),Uc=_({},bs,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),po=hn(Uc),Hn=_({},pt,{newState:0,oldState:0}),zc=hn(Hn),Bc=[9,13,27,32],ni=Lr&&"CompositionEvent"in window,h=null;Lr&&"documentMode"in document&&(h=document.documentMode);var v=Lr&&"TextEvent"in window&&!h,b=Lr&&(!ni||h&&8<h&&11>=h),x=" ",G=!1;function te(r,i){switch(r){case"keyup":return Bc.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ge(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var at=!1;function rn(r,i){switch(r){case"compositionend":return ge(i);case"keypress":return i.which!==32?null:(G=!0,x);case"textInput":return r=i.data,r===x&&G?null:r;default:return null}}function st(r,i){if(at)return r==="compositionend"||!ni&&te(r,i)?(r=Ml(),Ni=pa=Zr=null,at=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return b&&i.locale!=="ko"?null:i.data;default:return null}}var fn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function an(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i==="input"?!!fn[r.type]:i==="textarea"}function Oi(r,i,o,u){Ci?Ii?Ii.push(u):Ii=[u]:Ci=u,i=Rh(i,"onChange"),0<i.length&&(o=new oo("onChange","change",null,o,u),r.push({event:o,listeners:i}))}var _n=null,ri=null;function Ul(r){W1(r,0)}function Fc(r){var i=At(r);if(Il(i))return r}function v0(r,i){if(r==="change")return i}var _0=!1;if(Lr){var Fd;if(Lr){var Hd="oninput"in document;if(!Hd){var b0=document.createElement("div");b0.setAttribute("oninput","return;"),Hd=typeof b0.oninput=="function"}Fd=Hd}else Fd=!1;_0=Fd&&(!document.documentMode||9<document.documentMode)}function E0(){_n&&(_n.detachEvent("onpropertychange",T0),ri=_n=null)}function T0(r){if(r.propertyName==="value"&&Fc(ri)){var i=[];Oi(i,ri,r,_r(r)),Cc(Ul,i)}}function E2(r,i,o){r==="focusin"?(E0(),_n=i,ri=o,_n.attachEvent("onpropertychange",T0)):r==="focusout"&&E0()}function T2(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Fc(ri)}function w2(r,i){if(r==="click")return Fc(i)}function S2(r,i){if(r==="input"||r==="change")return Fc(i)}function x2(r,i){return r===i&&(r!==0||1/r===1/i)||r!==r&&i!==i}var rr=typeof Object.is=="function"?Object.is:x2;function zl(r,i){if(rr(r,i))return!0;if(typeof r!="object"||r===null||typeof i!="object"||i===null)return!1;var o=Object.keys(r),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!nn.call(i,f)||!rr(r[f],i[f]))return!1}return!0}function w0(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function S0(r,i){var o=w0(r);r=0;for(var u;o;){if(o.nodeType===3){if(u=r+o.textContent.length,r<=i&&u>=i)return{node:o,offset:i-r};r=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=w0(o)}}function x0(r,i){return r&&i?r===i?!0:r&&r.nodeType===3?!1:i&&i.nodeType===3?x0(r,i.parentNode):"contains"in r?r.contains(i):r.compareDocumentPosition?!!(r.compareDocumentPosition(i)&16):!1:!1}function A0(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var i=ds(r.document);i instanceof r.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)r=i.contentWindow;else break;i=ds(r.document)}return i}function qd(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i&&(i==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||i==="textarea"||r.contentEditable==="true")}var A2=Lr&&"documentMode"in document&&11>=document.documentMode,go=null,Gd=null,Bl=null,$d=!1;function R0(r,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;$d||go==null||go!==ds(u)||(u=go,"selectionStart"in u&&qd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Bl&&zl(Bl,u)||(Bl=u,u=Rh(Gd,"onSelect"),0<u.length&&(i=new oo("onSelect","select",null,i,o),r.push({event:i,listeners:u}),i.target=go)))}function Ss(r,i){var o={};return o[r.toLowerCase()]=i.toLowerCase(),o["Webkit"+r]="webkit"+i,o["Moz"+r]="moz"+i,o}var yo={animationend:Ss("Animation","AnimationEnd"),animationiteration:Ss("Animation","AnimationIteration"),animationstart:Ss("Animation","AnimationStart"),transitionrun:Ss("Transition","TransitionRun"),transitionstart:Ss("Transition","TransitionStart"),transitioncancel:Ss("Transition","TransitionCancel"),transitionend:Ss("Transition","TransitionEnd")},Yd={},C0={};Lr&&(C0=document.createElement("div").style,"AnimationEvent"in window||(delete yo.animationend.animation,delete yo.animationiteration.animation,delete yo.animationstart.animation),"TransitionEvent"in window||delete yo.transitionend.transition);function xs(r){if(Yd[r])return Yd[r];if(!yo[r])return r;var i=yo[r],o;for(o in i)if(i.hasOwnProperty(o)&&o in C0)return Yd[r]=i[o];return r}var I0=xs("animationend"),N0=xs("animationiteration"),D0=xs("animationstart"),R2=xs("transitionrun"),C2=xs("transitionstart"),I2=xs("transitioncancel"),O0=xs("transitionend"),M0=new Map,Kd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Kd.push("scrollEnd");function Ur(r,i){M0.set(r,i),vn(i,[r])}var P0=new WeakMap;function Tr(r,i){if(typeof r=="object"&&r!==null){var o=P0.get(r);return o!==void 0?o:(i={value:r,source:i,stack:da(i)},P0.set(r,i),i)}return{value:r,source:i,stack:da(i)}}var wr=[],vo=0,Qd=0;function Hc(){for(var r=vo,i=Qd=vo=0;i<r;){var o=wr[i];wr[i++]=null;var u=wr[i];wr[i++]=null;var f=wr[i];wr[i++]=null;var m=wr[i];if(wr[i++]=null,u!==null&&f!==null){var E=u.pending;E===null?f.next=f:(f.next=E.next,E.next=f),u.pending=f}m!==0&&j0(o,f,m)}}function qc(r,i,o,u){wr[vo++]=r,wr[vo++]=i,wr[vo++]=o,wr[vo++]=u,Qd|=u,r.lanes|=u,r=r.alternate,r!==null&&(r.lanes|=u)}function Xd(r,i,o,u){return qc(r,i,o,u),Gc(r)}function _o(r,i){return qc(r,null,null,i),Gc(r)}function j0(r,i,o){r.lanes|=o;var u=r.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=r.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(r=m.stateNode,r===null||r._visibility&1||(f=!0)),r=m,m=m.return;return r.tag===3?(m=r.stateNode,f&&i!==null&&(f=31-Yt(o),r=m.hiddenUpdates,u=r[f],u===null?r[f]=[i]:u.push(i),i.lane=o|536870912),m):null}function Gc(r){if(50<fu)throw fu=0,np=null,Error(a(185));for(var i=r.return;i!==null;)r=i,i=r.return;return r.tag===3?r.stateNode:null}var bo={};function N2(r,i,o,u){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ir(r,i,o,u){return new N2(r,i,o,u)}function Wd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Mi(r,i){var o=r.alternate;return o===null?(o=ir(r.tag,i,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o.alternate=r,r.alternate=o):(o.pendingProps=i,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,i=r.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o}function k0(r,i){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=i,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,i=o.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),r}function $c(r,i,o,u,f,m){var E=0;if(u=r,typeof r=="function")Wd(r)&&(E=1);else if(typeof r=="string")E=OA(r,o,be.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case C:return r=ir(31,o,i,f),r.elementType=C,r.lanes=m,r;case k:return As(o.children,f,m,i);case H:E=8,f|=24;break;case O:return r=ir(12,o,i,f|2),r.elementType=O,r.lanes=m,r;case ue:return r=ir(13,o,i,f),r.elementType=ue,r.lanes=m,r;case z:return r=ir(19,o,i,f),r.elementType=z,r.lanes=m,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case $:case X:E=10;break e;case ee:E=9;break e;case ce:E=11;break e;case N:E=14;break e;case R:E=16,u=null;break e}E=29,o=Error(a(130,r===null?"null":typeof r,"")),u=null}return i=ir(E,o,i,f),i.elementType=r,i.type=u,i.lanes=m,i}function As(r,i,o,u){return r=ir(7,r,u,i),r.lanes=o,r}function Zd(r,i,o){return r=ir(6,r,null,i),r.lanes=o,r}function Jd(r,i,o){return i=ir(4,r.children!==null?r.children:[],r.key,i),i.lanes=o,i.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},i}var Eo=[],To=0,Yc=null,Kc=0,Sr=[],xr=0,Rs=null,Pi=1,ji="";function Cs(r,i){Eo[To++]=Kc,Eo[To++]=Yc,Yc=r,Kc=i}function V0(r,i,o){Sr[xr++]=Pi,Sr[xr++]=ji,Sr[xr++]=Rs,Rs=r;var u=Pi;r=ji;var f=32-Yt(u)-1;u&=~(1<<f),o+=1;var m=32-Yt(i)+f;if(30<m){var E=f-f%5;m=(u&(1<<E)-1).toString(32),u>>=E,f-=E,Pi=1<<32-Yt(i)+f|o<<f|u,ji=m+r}else Pi=1<<m|o<<f|u,ji=r}function em(r){r.return!==null&&(Cs(r,1),V0(r,1,0))}function tm(r){for(;r===Yc;)Yc=Eo[--To],Eo[To]=null,Kc=Eo[--To],Eo[To]=null;for(;r===Rs;)Rs=Sr[--xr],Sr[xr]=null,ji=Sr[--xr],Sr[xr]=null,Pi=Sr[--xr],Sr[xr]=null}var qn=null,Ut=null,mt=!1,Is=null,ii=!1,nm=Error(a(519));function Ns(r){var i=Error(a(418,""));throw ql(Tr(i,r)),nm}function L0(r){var i=r.stateNode,o=r.type,u=r.memoizedProps;switch(i[oe]=r,i[de]=u,o){case"dialog":Je("cancel",i),Je("close",i);break;case"iframe":case"object":case"embed":Je("load",i);break;case"video":case"audio":for(o=0;o<mu.length;o++)Je(mu[o],i);break;case"source":Je("error",i);break;case"img":case"image":case"link":Je("error",i),Je("load",i);break;case"details":Je("toggle",i);break;case"input":Je("invalid",i),ms(i,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),ao(i);break;case"select":Je("invalid",i);break;case"textarea":Je("invalid",i),ps(i,u.value,u.defaultValue,u.children),ao(i)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||i.textContent===""+o||u.suppressHydrationWarning===!0||t_(i.textContent,o)?(u.popover!=null&&(Je("beforetoggle",i),Je("toggle",i)),u.onScroll!=null&&Je("scroll",i),u.onScrollEnd!=null&&Je("scrollend",i),u.onClick!=null&&(i.onclick=Ch),i=!0):i=!1,i||Ns(r)}function U0(r){for(qn=r.return;qn;)switch(qn.tag){case 5:case 13:ii=!1;return;case 27:case 3:ii=!0;return;default:qn=qn.return}}function Fl(r){if(r!==qn)return!1;if(!mt)return U0(r),mt=!0,!1;var i=r.tag,o;if((o=i!==3&&i!==27)&&((o=i===5)&&(o=r.type,o=!(o!=="form"&&o!=="button")||vp(r.type,r.memoizedProps)),o=!o),o&&Ut&&Ns(r),U0(r),i===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(a(317));e:{for(r=r.nextSibling,i=0;r;){if(r.nodeType===8)if(o=r.data,o==="/$"){if(i===0){Ut=Br(r.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++;r=r.nextSibling}Ut=null}}else i===27?(i=Ut,Da(r.type)?(r=Tp,Tp=null,Ut=r):Ut=i):Ut=qn?Br(r.stateNode.nextSibling):null;return!0}function Hl(){Ut=qn=null,mt=!1}function z0(){var r=Is;return r!==null&&(Qn===null?Qn=r:Qn.push.apply(Qn,r),Is=null),r}function ql(r){Is===null?Is=[r]:Is.push(r)}var rm=re(null),Ds=null,ki=null;function ga(r,i,o){he(rm,i._currentValue),i._currentValue=o}function Vi(r){r._currentValue=rm.current,me(rm)}function im(r,i,o){for(;r!==null;){var u=r.alternate;if((r.childLanes&i)!==i?(r.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),r===o)break;r=r.return}}function am(r,i,o,u){var f=r.child;for(f!==null&&(f.return=r);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;e:for(;m!==null;){var S=m;m=f;for(var M=0;M<i.length;M++)if(S.context===i[M]){m.lanes|=o,S=m.alternate,S!==null&&(S.lanes|=o),im(m.return,o,r),u||(E=null);break e}m=S.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(a(341));E.lanes|=o,m=E.alternate,m!==null&&(m.lanes|=o),im(E,o,r),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===r){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function Gl(r,i,o,u){r=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var S=f.type;rr(f.pendingProps.value,E.value)||(r!==null?r.push(S):r=[S])}}else if(f===Dt.current){if(E=f.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(r!==null?r.push(bu):r=[bu])}f=f.return}r!==null&&am(i,r,o,u),i.flags|=262144}function Qc(r){for(r=r.firstContext;r!==null;){if(!rr(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function Os(r){Ds=r,ki=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function Cn(r){return B0(Ds,r)}function Xc(r,i){return Ds===null&&Os(r),B0(r,i)}function B0(r,i){var o=i._currentValue;if(i={context:i,memoizedValue:o,next:null},ki===null){if(r===null)throw Error(a(308));ki=i,r.dependencies={lanes:0,firstContext:i},r.flags|=524288}else ki=ki.next=i;return o}var D2=typeof AbortController<"u"?AbortController:function(){var r=[],i=this.signal={aborted:!1,addEventListener:function(o,u){r.push(u)}};this.abort=function(){i.aborted=!0,r.forEach(function(o){return o()})}},O2=t.unstable_scheduleCallback,M2=t.unstable_NormalPriority,sn={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sm(){return{controller:new D2,data:new Map,refCount:0}}function $l(r){r.refCount--,r.refCount===0&&O2(M2,function(){r.controller.abort()})}var Yl=null,om=0,wo=0,So=null;function P2(r,i){if(Yl===null){var o=Yl=[];om=0,wo=up(),So={status:"pending",value:void 0,then:function(u){o.push(u)}}}return om++,i.then(F0,F0),i}function F0(){if(--om===0&&Yl!==null){So!==null&&(So.status="fulfilled");var r=Yl;Yl=null,wo=0,So=null;for(var i=0;i<r.length;i++)(0,r[i])()}}function j2(r,i){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return r.then(function(){u.status="fulfilled",u.value=i;for(var f=0;f<o.length;f++)(0,o[f])(i)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var H0=W.S;W.S=function(r,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&P2(r,i),H0!==null&&H0(r,i)};var Ms=re(null);function lm(){var r=Ms.current;return r!==null?r:Nt.pooledCache}function Wc(r,i){i===null?he(Ms,Ms.current):he(Ms,i.pool)}function q0(){var r=lm();return r===null?null:{parent:sn._currentValue,pool:r}}var Kl=Error(a(460)),G0=Error(a(474)),Zc=Error(a(542)),um={then:function(){}};function $0(r){return r=r.status,r==="fulfilled"||r==="rejected"}function Jc(){}function Y0(r,i,o){switch(o=r[o],o===void 0?r.push(i):o!==i&&(i.then(Jc,Jc),i=o),i.status){case"fulfilled":return i.value;case"rejected":throw r=i.reason,Q0(r),r;default:if(typeof i.status=="string")i.then(Jc,Jc);else{if(r=Nt,r!==null&&100<r.shellSuspendCounter)throw Error(a(482));r=i,r.status="pending",r.then(function(u){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=u}},function(u){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw r=i.reason,Q0(r),r}throw Ql=i,Kl}}var Ql=null;function K0(){if(Ql===null)throw Error(a(459));var r=Ql;return Ql=null,r}function Q0(r){if(r===Kl||r===Zc)throw Error(a(483))}var ya=!1;function cm(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hm(r,i){r=r.updateQueue,i.updateQueue===r&&(i.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function va(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function _a(r,i,o){var u=r.updateQueue;if(u===null)return null;if(u=u.shared,(bt&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,i=Gc(r),j0(r,null,o),i}return qc(r,u,i,o),Gc(r)}function Xl(r,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194048)!==0)){var u=i.lanes;u&=r.pendingLanes,o|=u,i.lanes=o,Qr(r,o)}}function fm(r,i){var o=r.updateQueue,u=r.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?f=m=i:m=m.next=i}else f=m=i;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=i:r.next=i,o.lastBaseUpdate=i}var dm=!1;function Wl(){if(dm){var r=So;if(r!==null)throw r}}function Zl(r,i,o,u){dm=!1;var f=r.updateQueue;ya=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var M=S,K=M.next;M.next=null,E===null?m=K:E.next=K,E=M;var ie=r.alternate;ie!==null&&(ie=ie.updateQueue,S=ie.lastBaseUpdate,S!==E&&(S===null?ie.firstBaseUpdate=K:S.next=K,ie.lastBaseUpdate=M))}if(m!==null){var se=f.baseState;E=0,ie=K=M=null,S=m;do{var Z=S.lane&-536870913,J=Z!==S.lane;if(J?(ot&Z)===Z:(u&Z)===Z){Z!==0&&Z===wo&&(dm=!0),ie!==null&&(ie=ie.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var Le=r,Me=S;Z=i;var xt=o;switch(Me.tag){case 1:if(Le=Me.payload,typeof Le=="function"){se=Le.call(xt,se,Z);break e}se=Le;break e;case 3:Le.flags=Le.flags&-65537|128;case 0:if(Le=Me.payload,Z=typeof Le=="function"?Le.call(xt,se,Z):Le,Z==null)break e;se=_({},se,Z);break e;case 2:ya=!0}}Z=S.callback,Z!==null&&(r.flags|=64,J&&(r.flags|=8192),J=f.callbacks,J===null?f.callbacks=[Z]:J.push(Z))}else J={lane:Z,tag:S.tag,payload:S.payload,callback:S.callback,next:null},ie===null?(K=ie=J,M=se):ie=ie.next=J,E|=Z;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;J=S,S=J.next,J.next=null,f.lastBaseUpdate=J,f.shared.pending=null}}while(!0);ie===null&&(M=se),f.baseState=M,f.firstBaseUpdate=K,f.lastBaseUpdate=ie,m===null&&(f.shared.lanes=0),Ra|=E,r.lanes=E,r.memoizedState=se}}function X0(r,i){if(typeof r!="function")throw Error(a(191,r));r.call(i)}function W0(r,i){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)X0(o[r],i)}var xo=re(null),eh=re(0);function Z0(r,i){r=qi,he(eh,r),he(xo,i),qi=r|i.baseLanes}function mm(){he(eh,qi),he(xo,xo.current)}function pm(){qi=eh.current,me(xo),me(eh)}var ba=0,Qe=null,wt=null,Qt=null,th=!1,Ao=!1,Ps=!1,nh=0,Jl=0,Ro=null,k2=0;function Ft(){throw Error(a(321))}function gm(r,i){if(i===null)return!1;for(var o=0;o<i.length&&o<r.length;o++)if(!rr(r[o],i[o]))return!1;return!0}function ym(r,i,o,u,f,m){return ba=m,Qe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,W.H=r===null||r.memoizedState===null?jv:kv,Ps=!1,m=o(u,f),Ps=!1,Ao&&(m=ev(i,o,u,f)),J0(r),m}function J0(r){W.H=lh;var i=wt!==null&&wt.next!==null;if(ba=0,Qt=wt=Qe=null,th=!1,Jl=0,Ro=null,i)throw Error(a(300));r===null||dn||(r=r.dependencies,r!==null&&Qc(r)&&(dn=!0))}function ev(r,i,o,u){Qe=r;var f=0;do{if(Ao&&(Ro=null),Jl=0,Ao=!1,25<=f)throw Error(a(301));if(f+=1,Qt=wt=null,r.updateQueue!=null){var m=r.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}W.H=H2,m=i(o,u)}while(Ao);return m}function V2(){var r=W.H,i=r.useState()[0];return i=typeof i.then=="function"?eu(i):i,r=r.useState()[0],(wt!==null?wt.memoizedState:null)!==r&&(Qe.flags|=1024),i}function vm(){var r=nh!==0;return nh=0,r}function _m(r,i,o){i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~o}function bm(r){if(th){for(r=r.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}th=!1}ba=0,Qt=wt=Qe=null,Ao=!1,Jl=nh=0,Ro=null}function Yn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?Qe.memoizedState=Qt=r:Qt=Qt.next=r,Qt}function Xt(){if(wt===null){var r=Qe.alternate;r=r!==null?r.memoizedState:null}else r=wt.next;var i=Qt===null?Qe.memoizedState:Qt.next;if(i!==null)Qt=i,wt=r;else{if(r===null)throw Qe.alternate===null?Error(a(467)):Error(a(310));wt=r,r={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Qt===null?Qe.memoizedState=Qt=r:Qt=Qt.next=r}return Qt}function Em(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function eu(r){var i=Jl;return Jl+=1,Ro===null&&(Ro=[]),r=Y0(Ro,r,i),i=Qe,(Qt===null?i.memoizedState:Qt.next)===null&&(i=i.alternate,W.H=i===null||i.memoizedState===null?jv:kv),r}function rh(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return eu(r);if(r.$$typeof===X)return Cn(r)}throw Error(a(438,String(r)))}function Tm(r){var i=null,o=Qe.updateQueue;if(o!==null&&(i=o.memoCache),i==null){var u=Qe.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),o===null&&(o=Em(),Qe.updateQueue=o),o.memoCache=i,o=i.data[i.index],o===void 0)for(o=i.data[i.index]=Array(r),u=0;u<r;u++)o[u]=V;return i.index++,o}function Li(r,i){return typeof i=="function"?i(r):i}function ih(r){var i=Xt();return wm(i,wt,r)}function wm(r,i,o){var u=r.queue;if(u===null)throw Error(a(311));u.lastRenderedReducer=o;var f=r.baseQueue,m=u.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}i.baseQueue=f=m,u.pending=null}if(m=r.baseState,f===null)r.memoizedState=m;else{i=f.next;var S=E=null,M=null,K=i,ie=!1;do{var se=K.lane&-536870913;if(se!==K.lane?(ot&se)===se:(ba&se)===se){var Z=K.revertLane;if(Z===0)M!==null&&(M=M.next={lane:0,revertLane:0,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),se===wo&&(ie=!0);else if((ba&Z)===Z){K=K.next,Z===wo&&(ie=!0);continue}else se={lane:0,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},M===null?(S=M=se,E=m):M=M.next=se,Qe.lanes|=Z,Ra|=Z;se=K.action,Ps&&o(m,se),m=K.hasEagerState?K.eagerState:o(m,se)}else Z={lane:se,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},M===null?(S=M=Z,E=m):M=M.next=Z,Qe.lanes|=se,Ra|=se;K=K.next}while(K!==null&&K!==i);if(M===null?E=m:M.next=S,!rr(m,r.memoizedState)&&(dn=!0,ie&&(o=So,o!==null)))throw o;r.memoizedState=m,r.baseState=E,r.baseQueue=M,u.lastRenderedState=m}return f===null&&(u.lanes=0),[r.memoizedState,u.dispatch]}function Sm(r){var i=Xt(),o=i.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=r;var u=o.dispatch,f=o.pending,m=i.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do m=r(m,E.action),E=E.next;while(E!==f);rr(m,i.memoizedState)||(dn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,u]}function tv(r,i,o){var u=Qe,f=Xt(),m=mt;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=i();var E=!rr((wt||f).memoizedState,o);E&&(f.memoizedState=o,dn=!0),f=f.queue;var S=iv.bind(null,u,f,r);if(tu(2048,8,S,[r]),f.getSnapshot!==i||E||Qt!==null&&Qt.memoizedState.tag&1){if(u.flags|=2048,Co(9,ah(),rv.bind(null,u,f,o,i),null),Nt===null)throw Error(a(349));m||(ba&124)!==0||nv(u,i,o)}return o}function nv(r,i,o){r.flags|=16384,r={getSnapshot:i,value:o},i=Qe.updateQueue,i===null?(i=Em(),Qe.updateQueue=i,i.stores=[r]):(o=i.stores,o===null?i.stores=[r]:o.push(r))}function rv(r,i,o,u){i.value=o,i.getSnapshot=u,av(i)&&sv(r)}function iv(r,i,o){return o(function(){av(i)&&sv(r)})}function av(r){var i=r.getSnapshot;r=r.value;try{var o=i();return!rr(r,o)}catch{return!0}}function sv(r){var i=_o(r,2);i!==null&&ur(i,r,2)}function xm(r){var i=Yn();if(typeof r=="function"){var o=r;if(r=o(),Ps){Rn(!0);try{o()}finally{Rn(!1)}}}return i.memoizedState=i.baseState=r,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:r},i}function ov(r,i,o,u){return r.baseState=o,wm(r,wt,typeof u=="function"?u:Li)}function L2(r,i,o,u,f){if(oh(r))throw Error(a(485));if(r=i.action,r!==null){var m={payload:f,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};W.T!==null?o(!0):m.isTransition=!1,u(m),o=i.pending,o===null?(m.next=i.pending=m,lv(i,m)):(m.next=o.next,i.pending=o.next=m)}}function lv(r,i){var o=i.action,u=i.payload,f=r.state;if(i.isTransition){var m=W.T,E={};W.T=E;try{var S=o(f,u),M=W.S;M!==null&&M(E,S),uv(r,i,S)}catch(K){Am(r,i,K)}finally{W.T=m}}else try{m=o(f,u),uv(r,i,m)}catch(K){Am(r,i,K)}}function uv(r,i,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){cv(r,i,u)},function(u){return Am(r,i,u)}):cv(r,i,o)}function cv(r,i,o){i.status="fulfilled",i.value=o,hv(i),r.state=o,i=r.pending,i!==null&&(o=i.next,o===i?r.pending=null:(o=o.next,i.next=o,lv(r,o)))}function Am(r,i,o){var u=r.pending;if(r.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=o,hv(i),i=i.next;while(i!==u)}r.action=null}function hv(r){r=r.listeners;for(var i=0;i<r.length;i++)(0,r[i])()}function fv(r,i){return i}function dv(r,i){if(mt){var o=Nt.formState;if(o!==null){e:{var u=Qe;if(mt){if(Ut){t:{for(var f=Ut,m=ii;f.nodeType!==8;){if(!m){f=null;break t}if(f=Br(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Ut=Br(f.nextSibling),u=f.data==="F!";break e}}Ns(u)}u=!1}u&&(i=o[0])}}return o=Yn(),o.memoizedState=o.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fv,lastRenderedState:i},o.queue=u,o=Ov.bind(null,Qe,u),u.dispatch=o,u=xm(!1),m=Dm.bind(null,Qe,!1,u.queue),u=Yn(),f={state:i,dispatch:null,action:r,pending:null},u.queue=f,o=L2.bind(null,Qe,f,m,o),f.dispatch=o,u.memoizedState=r,[i,o,!1]}function mv(r){var i=Xt();return pv(i,wt,r)}function pv(r,i,o){if(i=wm(r,i,fv)[0],r=ih(Li)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=eu(i)}catch(E){throw E===Kl?Zc:E}else u=i;i=Xt();var f=i.queue,m=f.dispatch;return o!==i.memoizedState&&(Qe.flags|=2048,Co(9,ah(),U2.bind(null,f,o),null)),[u,m,r]}function U2(r,i){r.action=i}function gv(r){var i=Xt(),o=wt;if(o!==null)return pv(i,o,r);Xt(),i=i.memoizedState,o=Xt();var u=o.queue.dispatch;return o.memoizedState=r,[i,u,!1]}function Co(r,i,o,u){return r={tag:r,create:o,deps:u,inst:i,next:null},i=Qe.updateQueue,i===null&&(i=Em(),Qe.updateQueue=i),o=i.lastEffect,o===null?i.lastEffect=r.next=r:(u=o.next,o.next=r,r.next=u,i.lastEffect=r),r}function ah(){return{destroy:void 0,resource:void 0}}function yv(){return Xt().memoizedState}function sh(r,i,o,u){var f=Yn();u=u===void 0?null:u,Qe.flags|=r,f.memoizedState=Co(1|i,ah(),o,u)}function tu(r,i,o,u){var f=Xt();u=u===void 0?null:u;var m=f.memoizedState.inst;wt!==null&&u!==null&&gm(u,wt.memoizedState.deps)?f.memoizedState=Co(i,m,o,u):(Qe.flags|=r,f.memoizedState=Co(1|i,m,o,u))}function vv(r,i){sh(8390656,8,r,i)}function _v(r,i){tu(2048,8,r,i)}function bv(r,i){return tu(4,2,r,i)}function Ev(r,i){return tu(4,4,r,i)}function Tv(r,i){if(typeof i=="function"){r=r();var o=i(r);return function(){typeof o=="function"?o():i(null)}}if(i!=null)return r=r(),i.current=r,function(){i.current=null}}function wv(r,i,o){o=o!=null?o.concat([r]):null,tu(4,4,Tv.bind(null,i,r),o)}function Rm(){}function Sv(r,i){var o=Xt();i=i===void 0?null:i;var u=o.memoizedState;return i!==null&&gm(i,u[1])?u[0]:(o.memoizedState=[r,i],r)}function xv(r,i){var o=Xt();i=i===void 0?null:i;var u=o.memoizedState;if(i!==null&&gm(i,u[1]))return u[0];if(u=r(),Ps){Rn(!0);try{r()}finally{Rn(!1)}}return o.memoizedState=[u,i],u}function Cm(r,i,o){return o===void 0||(ba&1073741824)!==0?r.memoizedState=i:(r.memoizedState=o,r=C1(),Qe.lanes|=r,Ra|=r,o)}function Av(r,i,o,u){return rr(o,i)?o:xo.current!==null?(r=Cm(r,o,u),rr(r,i)||(dn=!0),r):(ba&42)===0?(dn=!0,r.memoizedState=o):(r=C1(),Qe.lanes|=r,Ra|=r,i)}function Rv(r,i,o,u,f){var m=pe.p;pe.p=m!==0&&8>m?m:8;var E=W.T,S={};W.T=S,Dm(r,!1,i,o);try{var M=f(),K=W.S;if(K!==null&&K(S,M),M!==null&&typeof M=="object"&&typeof M.then=="function"){var ie=j2(M,u);nu(r,i,ie,lr(r))}else nu(r,i,u,lr(r))}catch(se){nu(r,i,{then:function(){},status:"rejected",reason:se},lr())}finally{pe.p=m,W.T=E}}function z2(){}function Im(r,i,o,u){if(r.tag!==5)throw Error(a(476));var f=Cv(r).queue;Rv(r,f,i,ye,o===null?z2:function(){return Iv(r),o(u)})}function Cv(r){var i=r.memoizedState;if(i!==null)return i;i={memoizedState:ye,baseState:ye,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:ye},next:null};var o={};return i.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:o},next:null},r.memoizedState=i,r=r.alternate,r!==null&&(r.memoizedState=i),i}function Iv(r){var i=Cv(r).next.queue;nu(r,i,{},lr())}function Nm(){return Cn(bu)}function Nv(){return Xt().memoizedState}function Dv(){return Xt().memoizedState}function B2(r){for(var i=r.return;i!==null;){switch(i.tag){case 24:case 3:var o=lr();r=va(o);var u=_a(i,r,o);u!==null&&(ur(u,i,o),Xl(u,i,o)),i={cache:sm()},r.payload=i;return}i=i.return}}function F2(r,i,o){var u=lr();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},oh(r)?Mv(i,o):(o=Xd(r,i,o,u),o!==null&&(ur(o,r,u),Pv(o,i,u)))}function Ov(r,i,o){var u=lr();nu(r,i,o,u)}function nu(r,i,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(oh(r))Mv(i,f);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,S=m(E,o);if(f.hasEagerState=!0,f.eagerState=S,rr(S,E))return qc(r,i,f,0),Nt===null&&Hc(),!1}catch{}finally{}if(o=Xd(r,i,f,u),o!==null)return ur(o,r,u),Pv(o,i,u),!0}return!1}function Dm(r,i,o,u){if(u={lane:2,revertLane:up(),action:u,hasEagerState:!1,eagerState:null,next:null},oh(r)){if(i)throw Error(a(479))}else i=Xd(r,o,u,2),i!==null&&ur(i,r,2)}function oh(r){var i=r.alternate;return r===Qe||i!==null&&i===Qe}function Mv(r,i){Ao=th=!0;var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}function Pv(r,i,o){if((o&4194048)!==0){var u=i.lanes;u&=r.pendingLanes,o|=u,i.lanes=o,Qr(r,o)}}var lh={readContext:Cn,use:rh,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useLayoutEffect:Ft,useInsertionEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useSyncExternalStore:Ft,useId:Ft,useHostTransitionStatus:Ft,useFormState:Ft,useActionState:Ft,useOptimistic:Ft,useMemoCache:Ft,useCacheRefresh:Ft},jv={readContext:Cn,use:rh,useCallback:function(r,i){return Yn().memoizedState=[r,i===void 0?null:i],r},useContext:Cn,useEffect:vv,useImperativeHandle:function(r,i,o){o=o!=null?o.concat([r]):null,sh(4194308,4,Tv.bind(null,i,r),o)},useLayoutEffect:function(r,i){return sh(4194308,4,r,i)},useInsertionEffect:function(r,i){sh(4,2,r,i)},useMemo:function(r,i){var o=Yn();i=i===void 0?null:i;var u=r();if(Ps){Rn(!0);try{r()}finally{Rn(!1)}}return o.memoizedState=[u,i],u},useReducer:function(r,i,o){var u=Yn();if(o!==void 0){var f=o(i);if(Ps){Rn(!0);try{o(i)}finally{Rn(!1)}}}else f=i;return u.memoizedState=u.baseState=f,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:f},u.queue=r,r=r.dispatch=F2.bind(null,Qe,r),[u.memoizedState,r]},useRef:function(r){var i=Yn();return r={current:r},i.memoizedState=r},useState:function(r){r=xm(r);var i=r.queue,o=Ov.bind(null,Qe,i);return i.dispatch=o,[r.memoizedState,o]},useDebugValue:Rm,useDeferredValue:function(r,i){var o=Yn();return Cm(o,r,i)},useTransition:function(){var r=xm(!1);return r=Rv.bind(null,Qe,r.queue,!0,!1),Yn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,i,o){var u=Qe,f=Yn();if(mt){if(o===void 0)throw Error(a(407));o=o()}else{if(o=i(),Nt===null)throw Error(a(349));(ot&124)!==0||nv(u,i,o)}f.memoizedState=o;var m={value:o,getSnapshot:i};return f.queue=m,vv(iv.bind(null,u,m,r),[r]),u.flags|=2048,Co(9,ah(),rv.bind(null,u,m,o,i),null),o},useId:function(){var r=Yn(),i=Nt.identifierPrefix;if(mt){var o=ji,u=Pi;o=(u&~(1<<32-Yt(u)-1)).toString(32)+o,i="«"+i+"R"+o,o=nh++,0<o&&(i+="H"+o.toString(32)),i+="»"}else o=k2++,i="«"+i+"r"+o.toString(32)+"»";return r.memoizedState=i},useHostTransitionStatus:Nm,useFormState:dv,useActionState:dv,useOptimistic:function(r){var i=Yn();i.memoizedState=i.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=o,i=Dm.bind(null,Qe,!0,o),o.dispatch=i,[r,i]},useMemoCache:Tm,useCacheRefresh:function(){return Yn().memoizedState=B2.bind(null,Qe)}},kv={readContext:Cn,use:rh,useCallback:Sv,useContext:Cn,useEffect:_v,useImperativeHandle:wv,useInsertionEffect:bv,useLayoutEffect:Ev,useMemo:xv,useReducer:ih,useRef:yv,useState:function(){return ih(Li)},useDebugValue:Rm,useDeferredValue:function(r,i){var o=Xt();return Av(o,wt.memoizedState,r,i)},useTransition:function(){var r=ih(Li)[0],i=Xt().memoizedState;return[typeof r=="boolean"?r:eu(r),i]},useSyncExternalStore:tv,useId:Nv,useHostTransitionStatus:Nm,useFormState:mv,useActionState:mv,useOptimistic:function(r,i){var o=Xt();return ov(o,wt,r,i)},useMemoCache:Tm,useCacheRefresh:Dv},H2={readContext:Cn,use:rh,useCallback:Sv,useContext:Cn,useEffect:_v,useImperativeHandle:wv,useInsertionEffect:bv,useLayoutEffect:Ev,useMemo:xv,useReducer:Sm,useRef:yv,useState:function(){return Sm(Li)},useDebugValue:Rm,useDeferredValue:function(r,i){var o=Xt();return wt===null?Cm(o,r,i):Av(o,wt.memoizedState,r,i)},useTransition:function(){var r=Sm(Li)[0],i=Xt().memoizedState;return[typeof r=="boolean"?r:eu(r),i]},useSyncExternalStore:tv,useId:Nv,useHostTransitionStatus:Nm,useFormState:gv,useActionState:gv,useOptimistic:function(r,i){var o=Xt();return wt!==null?ov(o,wt,r,i):(o.baseState=r,[r,o.queue.dispatch])},useMemoCache:Tm,useCacheRefresh:Dv},Io=null,ru=0;function uh(r){var i=ru;return ru+=1,Io===null&&(Io=[]),Y0(Io,r,i)}function iu(r,i){i=i.props.ref,r.ref=i!==void 0?i:null}function ch(r,i){throw i.$$typeof===w?Error(a(525)):(r=Object.prototype.toString.call(i),Error(a(31,r==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":r)))}function Vv(r){var i=r._init;return i(r._payload)}function Lv(r){function i(F,L){if(r){var Y=F.deletions;Y===null?(F.deletions=[L],F.flags|=16):Y.push(L)}}function o(F,L){if(!r)return null;for(;L!==null;)i(F,L),L=L.sibling;return null}function u(F){for(var L=new Map;F!==null;)F.key!==null?L.set(F.key,F):L.set(F.index,F),F=F.sibling;return L}function f(F,L){return F=Mi(F,L),F.index=0,F.sibling=null,F}function m(F,L,Y){return F.index=Y,r?(Y=F.alternate,Y!==null?(Y=Y.index,Y<L?(F.flags|=67108866,L):Y):(F.flags|=67108866,L)):(F.flags|=1048576,L)}function E(F){return r&&F.alternate===null&&(F.flags|=67108866),F}function S(F,L,Y,ae){return L===null||L.tag!==6?(L=Zd(Y,F.mode,ae),L.return=F,L):(L=f(L,Y),L.return=F,L)}function M(F,L,Y,ae){var Ee=Y.type;return Ee===k?ie(F,L,Y.props.children,ae,Y.key):L!==null&&(L.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===R&&Vv(Ee)===L.type)?(L=f(L,Y.props),iu(L,Y),L.return=F,L):(L=$c(Y.type,Y.key,Y.props,null,F.mode,ae),iu(L,Y),L.return=F,L)}function K(F,L,Y,ae){return L===null||L.tag!==4||L.stateNode.containerInfo!==Y.containerInfo||L.stateNode.implementation!==Y.implementation?(L=Jd(Y,F.mode,ae),L.return=F,L):(L=f(L,Y.children||[]),L.return=F,L)}function ie(F,L,Y,ae,Ee){return L===null||L.tag!==7?(L=As(Y,F.mode,ae,Ee),L.return=F,L):(L=f(L,Y),L.return=F,L)}function se(F,L,Y){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=Zd(""+L,F.mode,Y),L.return=F,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case T:return Y=$c(L.type,L.key,L.props,null,F.mode,Y),iu(Y,L),Y.return=F,Y;case A:return L=Jd(L,F.mode,Y),L.return=F,L;case R:var ae=L._init;return L=ae(L._payload),se(F,L,Y)}if(We(L)||B(L))return L=As(L,F.mode,Y,null),L.return=F,L;if(typeof L.then=="function")return se(F,uh(L),Y);if(L.$$typeof===X)return se(F,Xc(F,L),Y);ch(F,L)}return null}function Z(F,L,Y,ae){var Ee=L!==null?L.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Ee!==null?null:S(F,L,""+Y,ae);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case T:return Y.key===Ee?M(F,L,Y,ae):null;case A:return Y.key===Ee?K(F,L,Y,ae):null;case R:return Ee=Y._init,Y=Ee(Y._payload),Z(F,L,Y,ae)}if(We(Y)||B(Y))return Ee!==null?null:ie(F,L,Y,ae,null);if(typeof Y.then=="function")return Z(F,L,uh(Y),ae);if(Y.$$typeof===X)return Z(F,L,Xc(F,Y),ae);ch(F,Y)}return null}function J(F,L,Y,ae,Ee){if(typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint")return F=F.get(Y)||null,S(L,F,""+ae,Ee);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case T:return F=F.get(ae.key===null?Y:ae.key)||null,M(L,F,ae,Ee);case A:return F=F.get(ae.key===null?Y:ae.key)||null,K(L,F,ae,Ee);case R:var Xe=ae._init;return ae=Xe(ae._payload),J(F,L,Y,ae,Ee)}if(We(ae)||B(ae))return F=F.get(Y)||null,ie(L,F,ae,Ee,null);if(typeof ae.then=="function")return J(F,L,Y,uh(ae),Ee);if(ae.$$typeof===X)return J(F,L,Y,Xc(L,ae),Ee);ch(L,ae)}return null}function Le(F,L,Y,ae){for(var Ee=null,Xe=null,Ie=L,Pe=L=0,pn=null;Ie!==null&&Pe<Y.length;Pe++){Ie.index>Pe?(pn=Ie,Ie=null):pn=Ie.sibling;var ct=Z(F,Ie,Y[Pe],ae);if(ct===null){Ie===null&&(Ie=pn);break}r&&Ie&&ct.alternate===null&&i(F,Ie),L=m(ct,L,Pe),Xe===null?Ee=ct:Xe.sibling=ct,Xe=ct,Ie=pn}if(Pe===Y.length)return o(F,Ie),mt&&Cs(F,Pe),Ee;if(Ie===null){for(;Pe<Y.length;Pe++)Ie=se(F,Y[Pe],ae),Ie!==null&&(L=m(Ie,L,Pe),Xe===null?Ee=Ie:Xe.sibling=Ie,Xe=Ie);return mt&&Cs(F,Pe),Ee}for(Ie=u(Ie);Pe<Y.length;Pe++)pn=J(Ie,F,Pe,Y[Pe],ae),pn!==null&&(r&&pn.alternate!==null&&Ie.delete(pn.key===null?Pe:pn.key),L=m(pn,L,Pe),Xe===null?Ee=pn:Xe.sibling=pn,Xe=pn);return r&&Ie.forEach(function(ka){return i(F,ka)}),mt&&Cs(F,Pe),Ee}function Me(F,L,Y,ae){if(Y==null)throw Error(a(151));for(var Ee=null,Xe=null,Ie=L,Pe=L=0,pn=null,ct=Y.next();Ie!==null&&!ct.done;Pe++,ct=Y.next()){Ie.index>Pe?(pn=Ie,Ie=null):pn=Ie.sibling;var ka=Z(F,Ie,ct.value,ae);if(ka===null){Ie===null&&(Ie=pn);break}r&&Ie&&ka.alternate===null&&i(F,Ie),L=m(ka,L,Pe),Xe===null?Ee=ka:Xe.sibling=ka,Xe=ka,Ie=pn}if(ct.done)return o(F,Ie),mt&&Cs(F,Pe),Ee;if(Ie===null){for(;!ct.done;Pe++,ct=Y.next())ct=se(F,ct.value,ae),ct!==null&&(L=m(ct,L,Pe),Xe===null?Ee=ct:Xe.sibling=ct,Xe=ct);return mt&&Cs(F,Pe),Ee}for(Ie=u(Ie);!ct.done;Pe++,ct=Y.next())ct=J(Ie,F,Pe,ct.value,ae),ct!==null&&(r&&ct.alternate!==null&&Ie.delete(ct.key===null?Pe:ct.key),L=m(ct,L,Pe),Xe===null?Ee=ct:Xe.sibling=ct,Xe=ct);return r&&Ie.forEach(function(qA){return i(F,qA)}),mt&&Cs(F,Pe),Ee}function xt(F,L,Y,ae){if(typeof Y=="object"&&Y!==null&&Y.type===k&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case T:e:{for(var Ee=Y.key;L!==null;){if(L.key===Ee){if(Ee=Y.type,Ee===k){if(L.tag===7){o(F,L.sibling),ae=f(L,Y.props.children),ae.return=F,F=ae;break e}}else if(L.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===R&&Vv(Ee)===L.type){o(F,L.sibling),ae=f(L,Y.props),iu(ae,Y),ae.return=F,F=ae;break e}o(F,L);break}else i(F,L);L=L.sibling}Y.type===k?(ae=As(Y.props.children,F.mode,ae,Y.key),ae.return=F,F=ae):(ae=$c(Y.type,Y.key,Y.props,null,F.mode,ae),iu(ae,Y),ae.return=F,F=ae)}return E(F);case A:e:{for(Ee=Y.key;L!==null;){if(L.key===Ee)if(L.tag===4&&L.stateNode.containerInfo===Y.containerInfo&&L.stateNode.implementation===Y.implementation){o(F,L.sibling),ae=f(L,Y.children||[]),ae.return=F,F=ae;break e}else{o(F,L);break}else i(F,L);L=L.sibling}ae=Jd(Y,F.mode,ae),ae.return=F,F=ae}return E(F);case R:return Ee=Y._init,Y=Ee(Y._payload),xt(F,L,Y,ae)}if(We(Y))return Le(F,L,Y,ae);if(B(Y)){if(Ee=B(Y),typeof Ee!="function")throw Error(a(150));return Y=Ee.call(Y),Me(F,L,Y,ae)}if(typeof Y.then=="function")return xt(F,L,uh(Y),ae);if(Y.$$typeof===X)return xt(F,L,Xc(F,Y),ae);ch(F,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint"?(Y=""+Y,L!==null&&L.tag===6?(o(F,L.sibling),ae=f(L,Y),ae.return=F,F=ae):(o(F,L),ae=Zd(Y,F.mode,ae),ae.return=F,F=ae),E(F)):o(F,L)}return function(F,L,Y,ae){try{ru=0;var Ee=xt(F,L,Y,ae);return Io=null,Ee}catch(Ie){if(Ie===Kl||Ie===Zc)throw Ie;var Xe=ir(29,Ie,null,F.mode);return Xe.lanes=ae,Xe.return=F,Xe}finally{}}}var No=Lv(!0),Uv=Lv(!1),Ar=re(null),ai=null;function Ea(r){var i=r.alternate;he(on,on.current&1),he(Ar,r),ai===null&&(i===null||xo.current!==null||i.memoizedState!==null)&&(ai=r)}function zv(r){if(r.tag===22){if(he(on,on.current),he(Ar,r),ai===null){var i=r.alternate;i!==null&&i.memoizedState!==null&&(ai=r)}}else Ta()}function Ta(){he(on,on.current),he(Ar,Ar.current)}function Ui(r){me(Ar),ai===r&&(ai=null),me(on)}var on=re(0);function hh(r){for(var i=r;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Ep(o)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Om(r,i,o,u){i=r.memoizedState,o=o(u,i),o=o==null?i:_({},i,o),r.memoizedState=o,r.lanes===0&&(r.updateQueue.baseState=o)}var Mm={enqueueSetState:function(r,i,o){r=r._reactInternals;var u=lr(),f=va(u);f.payload=i,o!=null&&(f.callback=o),i=_a(r,f,u),i!==null&&(ur(i,r,u),Xl(i,r,u))},enqueueReplaceState:function(r,i,o){r=r._reactInternals;var u=lr(),f=va(u);f.tag=1,f.payload=i,o!=null&&(f.callback=o),i=_a(r,f,u),i!==null&&(ur(i,r,u),Xl(i,r,u))},enqueueForceUpdate:function(r,i){r=r._reactInternals;var o=lr(),u=va(o);u.tag=2,i!=null&&(u.callback=i),i=_a(r,u,o),i!==null&&(ur(i,r,o),Xl(i,r,o))}};function Bv(r,i,o,u,f,m,E){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(u,m,E):i.prototype&&i.prototype.isPureReactComponent?!zl(o,u)||!zl(f,m):!0}function Fv(r,i,o,u){r=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==r&&Mm.enqueueReplaceState(i,i.state,null)}function js(r,i){var o=i;if("ref"in i){o={};for(var u in i)u!=="ref"&&(o[u]=i[u])}if(r=r.defaultProps){o===i&&(o=_({},o));for(var f in r)o[f]===void 0&&(o[f]=r[f])}return o}var fh=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function Hv(r){fh(r)}function qv(r){console.error(r)}function Gv(r){fh(r)}function dh(r,i){try{var o=r.onUncaughtError;o(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function $v(r,i,o){try{var u=r.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Pm(r,i,o){return o=va(o),o.tag=3,o.payload={element:null},o.callback=function(){dh(r,i)},o}function Yv(r){return r=va(r),r.tag=3,r}function Kv(r,i,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;r.payload=function(){return f(m)},r.callback=function(){$v(i,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(r.callback=function(){$v(i,o,u),typeof f!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var S=u.stack;this.componentDidCatch(u.value,{componentStack:S!==null?S:""})})}function q2(r,i,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=o.alternate,i!==null&&Gl(i,o,f,!0),o=Ar.current,o!==null){switch(o.tag){case 13:return ai===null?ip():o.alternate===null&&zt===0&&(zt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===um?o.flags|=16384:(i=o.updateQueue,i===null?o.updateQueue=new Set([u]):i.add(u),sp(r,u,f)),!1;case 22:return o.flags|=65536,u===um?o.flags|=16384:(i=o.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=i):(o=i.retryQueue,o===null?i.retryQueue=new Set([u]):o.add(u)),sp(r,u,f)),!1}throw Error(a(435,o.tag))}return sp(r,u,f),ip(),!1}if(mt)return i=Ar.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,u!==nm&&(r=Error(a(422),{cause:u}),ql(Tr(r,o)))):(u!==nm&&(i=Error(a(423),{cause:u}),ql(Tr(i,o))),r=r.current.alternate,r.flags|=65536,f&=-f,r.lanes|=f,u=Tr(u,o),f=Pm(r.stateNode,u,f),fm(r,f),zt!==4&&(zt=2)),!1;var m=Error(a(520),{cause:u});if(m=Tr(m,o),hu===null?hu=[m]:hu.push(m),zt!==4&&(zt=2),i===null)return!0;u=Tr(u,o),o=i;do{switch(o.tag){case 3:return o.flags|=65536,r=f&-f,o.lanes|=r,r=Pm(o.stateNode,u,r),fm(o,r),!1;case 1:if(i=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ca===null||!Ca.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=Yv(f),Kv(f,r,o,u),fm(o,f),!1}o=o.return}while(o!==null);return!1}var Qv=Error(a(461)),dn=!1;function bn(r,i,o,u){i.child=r===null?Uv(i,null,o,u):No(i,r.child,o,u)}function Xv(r,i,o,u,f){o=o.render;var m=i.ref;if("ref"in u){var E={};for(var S in u)S!=="ref"&&(E[S]=u[S])}else E=u;return Os(i),u=ym(r,i,o,E,m,f),S=vm(),r!==null&&!dn?(_m(r,i,f),zi(r,i,f)):(mt&&S&&em(i),i.flags|=1,bn(r,i,u,f),i.child)}function Wv(r,i,o,u,f){if(r===null){var m=o.type;return typeof m=="function"&&!Wd(m)&&m.defaultProps===void 0&&o.compare===null?(i.tag=15,i.type=m,Zv(r,i,m,u,f)):(r=$c(o.type,null,u,i,i.mode,f),r.ref=i.ref,r.return=i,i.child=r)}if(m=r.child,!Fm(r,f)){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:zl,o(E,u)&&r.ref===i.ref)return zi(r,i,f)}return i.flags|=1,r=Mi(m,u),r.ref=i.ref,r.return=i,i.child=r}function Zv(r,i,o,u,f){if(r!==null){var m=r.memoizedProps;if(zl(m,u)&&r.ref===i.ref)if(dn=!1,i.pendingProps=u=m,Fm(r,f))(r.flags&131072)!==0&&(dn=!0);else return i.lanes=r.lanes,zi(r,i,f)}return jm(r,i,o,u,f)}function Jv(r,i,o){var u=i.pendingProps,f=u.children,m=r!==null?r.memoizedState:null;if(u.mode==="hidden"){if((i.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,r!==null){for(f=i.child=r.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;i.childLanes=m&~u}else i.childLanes=0,i.child=null;return e1(r,i,u,o)}if((o&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},r!==null&&Wc(i,m!==null?m.cachePool:null),m!==null?Z0(i,m):mm(),zv(i);else return i.lanes=i.childLanes=536870912,e1(r,i,m!==null?m.baseLanes|o:o,o)}else m!==null?(Wc(i,m.cachePool),Z0(i,m),Ta(),i.memoizedState=null):(r!==null&&Wc(i,null),mm(),Ta());return bn(r,i,f,o),i.child}function e1(r,i,o,u){var f=lm();return f=f===null?null:{parent:sn._currentValue,pool:f},i.memoizedState={baseLanes:o,cachePool:f},r!==null&&Wc(i,null),mm(),zv(i),r!==null&&Gl(r,i,u,!0),null}function mh(r,i){var o=i.ref;if(o===null)r!==null&&r.ref!==null&&(i.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(r===null||r.ref!==o)&&(i.flags|=4194816)}}function jm(r,i,o,u,f){return Os(i),o=ym(r,i,o,u,void 0,f),u=vm(),r!==null&&!dn?(_m(r,i,f),zi(r,i,f)):(mt&&u&&em(i),i.flags|=1,bn(r,i,o,f),i.child)}function t1(r,i,o,u,f,m){return Os(i),i.updateQueue=null,o=ev(i,u,o,f),J0(r),u=vm(),r!==null&&!dn?(_m(r,i,m),zi(r,i,m)):(mt&&u&&em(i),i.flags|=1,bn(r,i,o,m),i.child)}function n1(r,i,o,u,f){if(Os(i),i.stateNode===null){var m=bo,E=o.contextType;typeof E=="object"&&E!==null&&(m=Cn(E)),m=new o(u,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Mm,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=u,m.state=i.memoizedState,m.refs={},cm(i),E=o.contextType,m.context=typeof E=="object"&&E!==null?Cn(E):bo,m.state=i.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(Om(i,o,E,u),m.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Mm.enqueueReplaceState(m,m.state,null),Zl(i,u,m,f),Wl(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(r===null){m=i.stateNode;var S=i.memoizedProps,M=js(o,S);m.props=M;var K=m.context,ie=o.contextType;E=bo,typeof ie=="object"&&ie!==null&&(E=Cn(ie));var se=o.getDerivedStateFromProps;ie=typeof se=="function"||typeof m.getSnapshotBeforeUpdate=="function",S=i.pendingProps!==S,ie||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S||K!==E)&&Fv(i,m,u,E),ya=!1;var Z=i.memoizedState;m.state=Z,Zl(i,u,m,f),Wl(),K=i.memoizedState,S||Z!==K||ya?(typeof se=="function"&&(Om(i,o,se,u),K=i.memoizedState),(M=ya||Bv(i,o,M,u,Z,K,E))?(ie||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=K),m.props=u,m.state=K,m.context=E,u=M):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{m=i.stateNode,hm(r,i),E=i.memoizedProps,ie=js(o,E),m.props=ie,se=i.pendingProps,Z=m.context,K=o.contextType,M=bo,typeof K=="object"&&K!==null&&(M=Cn(K)),S=o.getDerivedStateFromProps,(K=typeof S=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==se||Z!==M)&&Fv(i,m,u,M),ya=!1,Z=i.memoizedState,m.state=Z,Zl(i,u,m,f),Wl();var J=i.memoizedState;E!==se||Z!==J||ya||r!==null&&r.dependencies!==null&&Qc(r.dependencies)?(typeof S=="function"&&(Om(i,o,S,u),J=i.memoizedState),(ie=ya||Bv(i,o,ie,u,Z,J,M)||r!==null&&r.dependencies!==null&&Qc(r.dependencies))?(K||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,J,M),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,J,M)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===r.memoizedProps&&Z===r.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===r.memoizedProps&&Z===r.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=J),m.props=u,m.state=J,m.context=M,u=ie):(typeof m.componentDidUpdate!="function"||E===r.memoizedProps&&Z===r.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===r.memoizedProps&&Z===r.memoizedState||(i.flags|=1024),u=!1)}return m=u,mh(r,i),u=(i.flags&128)!==0,m||u?(m=i.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,r!==null&&u?(i.child=No(i,r.child,null,f),i.child=No(i,null,o,f)):bn(r,i,o,f),i.memoizedState=m.state,r=i.child):r=zi(r,i,f),r}function r1(r,i,o,u){return Hl(),i.flags|=256,bn(r,i,o,u),i.child}var km={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vm(r){return{baseLanes:r,cachePool:q0()}}function Lm(r,i,o){return r=r!==null?r.childLanes&~o:0,i&&(r|=Rr),r}function i1(r,i,o){var u=i.pendingProps,f=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=r!==null&&r.memoizedState===null?!1:(on.current&2)!==0),E&&(f=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,r===null){if(mt){if(f?Ea(i):Ta(),mt){var S=Ut,M;if(M=S){e:{for(M=S,S=ii;M.nodeType!==8;){if(!S){S=null;break e}if(M=Br(M.nextSibling),M===null){S=null;break e}}S=M}S!==null?(i.memoizedState={dehydrated:S,treeContext:Rs!==null?{id:Pi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},M=ir(18,null,null,0),M.stateNode=S,M.return=i,i.child=M,qn=i,Ut=null,M=!0):M=!1}M||Ns(i)}if(S=i.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return Ep(S)?i.lanes=32:i.lanes=536870912,null;Ui(i)}return S=u.children,u=u.fallback,f?(Ta(),f=i.mode,S=ph({mode:"hidden",children:S},f),u=As(u,f,o,null),S.return=i,u.return=i,S.sibling=u,i.child=S,f=i.child,f.memoizedState=Vm(o),f.childLanes=Lm(r,E,o),i.memoizedState=km,u):(Ea(i),Um(i,S))}if(M=r.memoizedState,M!==null&&(S=M.dehydrated,S!==null)){if(m)i.flags&256?(Ea(i),i.flags&=-257,i=zm(r,i,o)):i.memoizedState!==null?(Ta(),i.child=r.child,i.flags|=128,i=null):(Ta(),f=u.fallback,S=i.mode,u=ph({mode:"visible",children:u.children},S),f=As(f,S,o,null),f.flags|=2,u.return=i,f.return=i,u.sibling=f,i.child=u,No(i,r.child,null,o),u=i.child,u.memoizedState=Vm(o),u.childLanes=Lm(r,E,o),i.memoizedState=km,i=f);else if(Ea(i),Ep(S)){if(E=S.nextSibling&&S.nextSibling.dataset,E)var K=E.dgst;E=K,u=Error(a(419)),u.stack="",u.digest=E,ql({value:u,source:null,stack:null}),i=zm(r,i,o)}else if(dn||Gl(r,i,o,!1),E=(o&r.childLanes)!==0,dn||E){if(E=Nt,E!==null&&(u=o&-o,u=(u&42)!==0?1:Xr(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==M.retryLane))throw M.retryLane=u,_o(r,u),ur(E,r,u),Qv;S.data==="$?"||ip(),i=zm(r,i,o)}else S.data==="$?"?(i.flags|=192,i.child=r.child,i=null):(r=M.treeContext,Ut=Br(S.nextSibling),qn=i,mt=!0,Is=null,ii=!1,r!==null&&(Sr[xr++]=Pi,Sr[xr++]=ji,Sr[xr++]=Rs,Pi=r.id,ji=r.overflow,Rs=i),i=Um(i,u.children),i.flags|=4096);return i}return f?(Ta(),f=u.fallback,S=i.mode,M=r.child,K=M.sibling,u=Mi(M,{mode:"hidden",children:u.children}),u.subtreeFlags=M.subtreeFlags&65011712,K!==null?f=Mi(K,f):(f=As(f,S,o,null),f.flags|=2),f.return=i,u.return=i,u.sibling=f,i.child=u,u=f,f=i.child,S=r.child.memoizedState,S===null?S=Vm(o):(M=S.cachePool,M!==null?(K=sn._currentValue,M=M.parent!==K?{parent:K,pool:K}:M):M=q0(),S={baseLanes:S.baseLanes|o,cachePool:M}),f.memoizedState=S,f.childLanes=Lm(r,E,o),i.memoizedState=km,u):(Ea(i),o=r.child,r=o.sibling,o=Mi(o,{mode:"visible",children:u.children}),o.return=i,o.sibling=null,r!==null&&(E=i.deletions,E===null?(i.deletions=[r],i.flags|=16):E.push(r)),i.child=o,i.memoizedState=null,o)}function Um(r,i){return i=ph({mode:"visible",children:i},r.mode),i.return=r,r.child=i}function ph(r,i){return r=ir(22,r,null,i),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function zm(r,i,o){return No(i,r.child,null,o),r=Um(i,i.pendingProps.children),r.flags|=2,i.memoizedState=null,r}function a1(r,i,o){r.lanes|=i;var u=r.alternate;u!==null&&(u.lanes|=i),im(r.return,i,o)}function Bm(r,i,o,u,f){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function s1(r,i,o){var u=i.pendingProps,f=u.revealOrder,m=u.tail;if(bn(r,i,u.children,o),u=on.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=i.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&a1(r,o,i);else if(r.tag===19)a1(r,o,i);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}u&=1}switch(he(on,u),f){case"forwards":for(o=i.child,f=null;o!==null;)r=o.alternate,r!==null&&hh(r)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),Bm(i,!1,f,o,m);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(r=f.alternate,r!==null&&hh(r)===null){i.child=f;break}r=f.sibling,f.sibling=o,o=f,f=r}Bm(i,!0,o,null,m);break;case"together":Bm(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function zi(r,i,o){if(r!==null&&(i.dependencies=r.dependencies),Ra|=i.lanes,(o&i.childLanes)===0)if(r!==null){if(Gl(r,i,o,!1),(o&i.childLanes)===0)return null}else return null;if(r!==null&&i.child!==r.child)throw Error(a(153));if(i.child!==null){for(r=i.child,o=Mi(r,r.pendingProps),i.child=o,o.return=i;r.sibling!==null;)r=r.sibling,o=o.sibling=Mi(r,r.pendingProps),o.return=i;o.sibling=null}return i.child}function Fm(r,i){return(r.lanes&i)!==0?!0:(r=r.dependencies,!!(r!==null&&Qc(r)))}function G2(r,i,o){switch(i.tag){case 3:it(i,i.stateNode.containerInfo),ga(i,sn,r.memoizedState.cache),Hl();break;case 27:case 5:_t(i);break;case 4:it(i,i.stateNode.containerInfo);break;case 10:ga(i,i.type,i.memoizedProps.value);break;case 13:var u=i.memoizedState;if(u!==null)return u.dehydrated!==null?(Ea(i),i.flags|=128,null):(o&i.child.childLanes)!==0?i1(r,i,o):(Ea(i),r=zi(r,i,o),r!==null?r.sibling:null);Ea(i);break;case 19:var f=(r.flags&128)!==0;if(u=(o&i.childLanes)!==0,u||(Gl(r,i,o,!1),u=(o&i.childLanes)!==0),f){if(u)return s1(r,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),he(on,on.current),u)break;return null;case 22:case 23:return i.lanes=0,Jv(r,i,o);case 24:ga(i,sn,r.memoizedState.cache)}return zi(r,i,o)}function o1(r,i,o){if(r!==null)if(r.memoizedProps!==i.pendingProps)dn=!0;else{if(!Fm(r,o)&&(i.flags&128)===0)return dn=!1,G2(r,i,o);dn=(r.flags&131072)!==0}else dn=!1,mt&&(i.flags&1048576)!==0&&V0(i,Kc,i.index);switch(i.lanes=0,i.tag){case 16:e:{r=i.pendingProps;var u=i.elementType,f=u._init;if(u=f(u._payload),i.type=u,typeof u=="function")Wd(u)?(r=js(u,r),i.tag=1,i=n1(null,i,u,r,o)):(i.tag=0,i=jm(null,i,u,r,o));else{if(u!=null){if(f=u.$$typeof,f===ce){i.tag=11,i=Xv(null,i,u,r,o);break e}else if(f===N){i.tag=14,i=Wv(null,i,u,r,o);break e}}throw i=He(u)||u,Error(a(306,i,""))}}return i;case 0:return jm(r,i,i.type,i.pendingProps,o);case 1:return u=i.type,f=js(u,i.pendingProps),n1(r,i,u,f,o);case 3:e:{if(it(i,i.stateNode.containerInfo),r===null)throw Error(a(387));u=i.pendingProps;var m=i.memoizedState;f=m.element,hm(r,i),Zl(i,u,null,o);var E=i.memoizedState;if(u=E.cache,ga(i,sn,u),u!==m.cache&&am(i,[sn],o,!0),Wl(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=r1(r,i,u,o);break e}else if(u!==f){f=Tr(Error(a(424)),i),ql(f),i=r1(r,i,u,o);break e}else{switch(r=i.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(Ut=Br(r.firstChild),qn=i,mt=!0,Is=null,ii=!0,o=Uv(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Hl(),u===f){i=zi(r,i,o);break e}bn(r,i,u,o)}i=i.child}return i;case 26:return mh(r,i),r===null?(o=h_(i.type,null,i.pendingProps,null))?i.memoizedState=o:mt||(o=i.type,r=i.pendingProps,u=Ih(Ce.current).createElement(o),u[oe]=i,u[de]=r,Tn(u,o,r),Be(u),i.stateNode=u):i.memoizedState=h_(i.type,r.memoizedProps,i.pendingProps,r.memoizedState),null;case 27:return _t(i),r===null&&mt&&(u=i.stateNode=l_(i.type,i.pendingProps,Ce.current),qn=i,ii=!0,f=Ut,Da(i.type)?(Tp=f,Ut=Br(u.firstChild)):Ut=f),bn(r,i,i.pendingProps.children,o),mh(r,i),r===null&&(i.flags|=4194304),i.child;case 5:return r===null&&mt&&((f=u=Ut)&&(u=_A(u,i.type,i.pendingProps,ii),u!==null?(i.stateNode=u,qn=i,Ut=Br(u.firstChild),ii=!1,f=!0):f=!1),f||Ns(i)),_t(i),f=i.type,m=i.pendingProps,E=r!==null?r.memoizedProps:null,u=m.children,vp(f,m)?u=null:E!==null&&vp(f,E)&&(i.flags|=32),i.memoizedState!==null&&(f=ym(r,i,V2,null,null,o),bu._currentValue=f),mh(r,i),bn(r,i,u,o),i.child;case 6:return r===null&&mt&&((r=o=Ut)&&(o=bA(o,i.pendingProps,ii),o!==null?(i.stateNode=o,qn=i,Ut=null,r=!0):r=!1),r||Ns(i)),null;case 13:return i1(r,i,o);case 4:return it(i,i.stateNode.containerInfo),u=i.pendingProps,r===null?i.child=No(i,null,u,o):bn(r,i,u,o),i.child;case 11:return Xv(r,i,i.type,i.pendingProps,o);case 7:return bn(r,i,i.pendingProps,o),i.child;case 8:return bn(r,i,i.pendingProps.children,o),i.child;case 12:return bn(r,i,i.pendingProps.children,o),i.child;case 10:return u=i.pendingProps,ga(i,i.type,u.value),bn(r,i,u.children,o),i.child;case 9:return f=i.type._context,u=i.pendingProps.children,Os(i),f=Cn(f),u=u(f),i.flags|=1,bn(r,i,u,o),i.child;case 14:return Wv(r,i,i.type,i.pendingProps,o);case 15:return Zv(r,i,i.type,i.pendingProps,o);case 19:return s1(r,i,o);case 31:return u=i.pendingProps,o=i.mode,u={mode:u.mode,children:u.children},r===null?(o=ph(u,o),o.ref=i.ref,i.child=o,o.return=i,i=o):(o=Mi(r.child,u),o.ref=i.ref,i.child=o,o.return=i,i=o),i;case 22:return Jv(r,i,o);case 24:return Os(i),u=Cn(sn),r===null?(f=lm(),f===null&&(f=Nt,m=sm(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),i.memoizedState={parent:u,cache:f},cm(i),ga(i,sn,f)):((r.lanes&o)!==0&&(hm(r,i),Zl(i,null,null,o),Wl()),f=r.memoizedState,m=i.memoizedState,f.parent!==u?(f={parent:u,cache:u},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),ga(i,sn,u)):(u=m.cache,ga(i,sn,u),u!==f.cache&&am(i,[sn],o,!0))),bn(r,i,i.pendingProps.children,o),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Bi(r){r.flags|=4}function l1(r,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!g_(i)){if(i=Ar.current,i!==null&&((ot&4194048)===ot?ai!==null:(ot&62914560)!==ot&&(ot&536870912)===0||i!==ai))throw Ql=um,G0;r.flags|=8192}}function gh(r,i){i!==null&&(r.flags|=4),r.flags&16384&&(i=r.tag!==22?fs():536870912,r.lanes|=i,Po|=i)}function au(r,i){if(!mt)switch(r.tailMode){case"hidden":i=r.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||r.tail===null?r.tail=null:r.tail.sibling=null:u.sibling=null}}function Vt(r){var i=r.alternate!==null&&r.alternate.child===r.child,o=0,u=0;if(i)for(var f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=u,r.childLanes=o,i}function $2(r,i,o){var u=i.pendingProps;switch(tm(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(i),null;case 1:return Vt(i),null;case 3:return o=i.stateNode,u=null,r!==null&&(u=r.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),Vi(sn),$t(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(r===null||r.child===null)&&(Fl(i)?Bi(i):r===null||r.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,z0())),Vt(i),null;case 26:return o=i.memoizedState,r===null?(Bi(i),o!==null?(Vt(i),l1(i,o)):(Vt(i),i.flags&=-16777217)):o?o!==r.memoizedState?(Bi(i),Vt(i),l1(i,o)):(Vt(i),i.flags&=-16777217):(r.memoizedProps!==u&&Bi(i),Vt(i),i.flags&=-16777217),null;case 27:Bt(i),o=Ce.current;var f=i.type;if(r!==null&&i.stateNode!=null)r.memoizedProps!==u&&Bi(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return Vt(i),null}r=be.current,Fl(i)?L0(i):(r=l_(f,u,o),i.stateNode=r,Bi(i))}return Vt(i),null;case 5:if(Bt(i),o=i.type,r!==null&&i.stateNode!=null)r.memoizedProps!==u&&Bi(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return Vt(i),null}if(r=be.current,Fl(i))L0(i);else{switch(f=Ih(Ce.current),r){case 1:r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?r.multiple=!0:u.size&&(r.size=u.size);break;default:r=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}r[oe]=i,r[de]=u;e:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)r.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break e;for(;f.sibling===null;){if(f.return===null||f.return===i)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=r;e:switch(Tn(r,o,u),o){case"button":case"input":case"select":case"textarea":r=!!u.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Bi(i)}}return Vt(i),i.flags&=-16777217,null;case 6:if(r&&i.stateNode!=null)r.memoizedProps!==u&&Bi(i);else{if(typeof u!="string"&&i.stateNode===null)throw Error(a(166));if(r=Ce.current,Fl(i)){if(r=i.stateNode,o=i.memoizedProps,u=null,f=qn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}r[oe]=i,r=!!(r.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||t_(r.nodeValue,o)),r||Ns(i)}else r=Ih(r).createTextNode(u),r[oe]=i,i.stateNode=r}return Vt(i),null;case 13:if(u=i.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(f=Fl(i),u!==null&&u.dehydrated!==null){if(r===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[oe]=i}else Hl(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Vt(i),f=!1}else f=z0(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(Ui(i),i):(Ui(i),null)}if(Ui(i),(i.flags&128)!==0)return i.lanes=o,i;if(o=u!==null,r=r!==null&&r.memoizedState!==null,o){u=i.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==r&&o&&(i.child.flags|=8192),gh(i,i.updateQueue),Vt(i),null;case 4:return $t(),r===null&&dp(i.stateNode.containerInfo),Vt(i),null;case 10:return Vi(i.type),Vt(i),null;case 19:if(me(on),f=i.memoizedState,f===null)return Vt(i),null;if(u=(i.flags&128)!==0,m=f.rendering,m===null)if(u)au(f,!1);else{if(zt!==0||r!==null&&(r.flags&128)!==0)for(r=i.child;r!==null;){if(m=hh(r),m!==null){for(i.flags|=128,au(f,!1),r=m.updateQueue,i.updateQueue=r,gh(i,r),i.subtreeFlags=0,r=o,o=i.child;o!==null;)k0(o,r),o=o.sibling;return he(on,on.current&1|2),i.child}r=r.sibling}f.tail!==null&&Vn()>_h&&(i.flags|=128,u=!0,au(f,!1),i.lanes=4194304)}else{if(!u)if(r=hh(m),r!==null){if(i.flags|=128,u=!0,r=r.updateQueue,i.updateQueue=r,gh(i,r),au(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!mt)return Vt(i),null}else 2*Vn()-f.renderingStartTime>_h&&o!==536870912&&(i.flags|=128,u=!0,au(f,!1),i.lanes=4194304);f.isBackwards?(m.sibling=i.child,i.child=m):(r=f.last,r!==null?r.sibling=m:i.child=m,f.last=m)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=Vn(),i.sibling=null,r=on.current,he(on,u?r&1|2:r&1),i):(Vt(i),null);case 22:case 23:return Ui(i),pm(),u=i.memoizedState!==null,r!==null?r.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(o&536870912)!==0&&(i.flags&128)===0&&(Vt(i),i.subtreeFlags&6&&(i.flags|=8192)):Vt(i),o=i.updateQueue,o!==null&&gh(i,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==o&&(i.flags|=2048),r!==null&&me(Ms),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Vi(sn),Vt(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Y2(r,i){switch(tm(i),i.tag){case 1:return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 3:return Vi(sn),$t(),r=i.flags,(r&65536)!==0&&(r&128)===0?(i.flags=r&-65537|128,i):null;case 26:case 27:case 5:return Bt(i),null;case 13:if(Ui(i),r=i.memoizedState,r!==null&&r.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Hl()}return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 19:return me(on),null;case 4:return $t(),null;case 10:return Vi(i.type),null;case 22:case 23:return Ui(i),pm(),r!==null&&me(Ms),r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 24:return Vi(sn),null;case 25:return null;default:return null}}function u1(r,i){switch(tm(i),i.tag){case 3:Vi(sn),$t();break;case 26:case 27:case 5:Bt(i);break;case 4:$t();break;case 13:Ui(i);break;case 19:me(on);break;case 10:Vi(i.type);break;case 22:case 23:Ui(i),pm(),r!==null&&me(Ms);break;case 24:Vi(sn)}}function su(r,i){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&r)===r){u=void 0;var m=o.create,E=o.inst;u=m(),E.destroy=u}o=o.next}while(o!==f)}}catch(S){Rt(i,i.return,S)}}function wa(r,i,o){try{var u=i.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&r)===r){var E=u.inst,S=E.destroy;if(S!==void 0){E.destroy=void 0,f=i;var M=o,K=S;try{K()}catch(ie){Rt(f,M,ie)}}}u=u.next}while(u!==m)}}catch(ie){Rt(i,i.return,ie)}}function c1(r){var i=r.updateQueue;if(i!==null){var o=r.stateNode;try{W0(i,o)}catch(u){Rt(r,r.return,u)}}}function h1(r,i,o){o.props=js(r.type,r.memoizedProps),o.state=r.memoizedState;try{o.componentWillUnmount()}catch(u){Rt(r,i,u)}}function ou(r,i){try{var o=r.ref;if(o!==null){switch(r.tag){case 26:case 27:case 5:var u=r.stateNode;break;case 30:u=r.stateNode;break;default:u=r.stateNode}typeof o=="function"?r.refCleanup=o(u):o.current=u}}catch(f){Rt(r,i,f)}}function si(r,i){var o=r.ref,u=r.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){Rt(r,i,f)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Rt(r,i,f)}else o.current=null}function f1(r){var i=r.type,o=r.memoizedProps,u=r.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){Rt(r,r.return,f)}}function Hm(r,i,o){try{var u=r.stateNode;mA(u,r.type,o,i),u[de]=i}catch(f){Rt(r,r.return,f)}}function d1(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Da(r.type)||r.tag===4}function qm(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||d1(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Da(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Gm(r,i,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,i?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,i):(i=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,i.appendChild(r),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ch));else if(u!==4&&(u===27&&Da(r.type)&&(o=r.stateNode,i=null),r=r.child,r!==null))for(Gm(r,i,o),r=r.sibling;r!==null;)Gm(r,i,o),r=r.sibling}function yh(r,i,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,i?o.insertBefore(r,i):o.appendChild(r);else if(u!==4&&(u===27&&Da(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(yh(r,i,o),r=r.sibling;r!==null;)yh(r,i,o),r=r.sibling}function m1(r){var i=r.stateNode,o=r.memoizedProps;try{for(var u=r.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Tn(i,u,o),i[oe]=r,i[de]=o}catch(m){Rt(r,r.return,m)}}var Fi=!1,Ht=!1,$m=!1,p1=typeof WeakSet=="function"?WeakSet:Set,mn=null;function K2(r,i){if(r=r.containerInfo,gp=jh,r=A0(r),qd(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else e:{o=(o=r.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,S=-1,M=-1,K=0,ie=0,se=r,Z=null;t:for(;;){for(var J;se!==o||f!==0&&se.nodeType!==3||(S=E+f),se!==m||u!==0&&se.nodeType!==3||(M=E+u),se.nodeType===3&&(E+=se.nodeValue.length),(J=se.firstChild)!==null;)Z=se,se=J;for(;;){if(se===r)break t;if(Z===o&&++K===f&&(S=E),Z===m&&++ie===u&&(M=E),(J=se.nextSibling)!==null)break;se=Z,Z=se.parentNode}se=J}o=S===-1||M===-1?null:{start:S,end:M}}else o=null}o=o||{start:0,end:0}}else o=null;for(yp={focusedElem:r,selectionRange:o},jh=!1,mn=i;mn!==null;)if(i=mn,r=i.child,(i.subtreeFlags&1024)!==0&&r!==null)r.return=i,mn=r;else for(;mn!==null;){switch(i=mn,m=i.alternate,r=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&m!==null){r=void 0,o=i,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var Le=js(o.type,f,o.elementType===o.type);r=u.getSnapshotBeforeUpdate(Le,m),u.__reactInternalSnapshotBeforeUpdate=r}catch(Me){Rt(o,o.return,Me)}}break;case 3:if((r&1024)!==0){if(r=i.stateNode.containerInfo,o=r.nodeType,o===9)bp(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":bp(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(a(163))}if(r=i.sibling,r!==null){r.return=i.return,mn=r;break}mn=i.return}}function g1(r,i,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Sa(r,o),u&4&&su(5,o);break;case 1:if(Sa(r,o),u&4)if(r=o.stateNode,i===null)try{r.componentDidMount()}catch(E){Rt(o,o.return,E)}else{var f=js(o.type,i.memoizedProps);i=i.memoizedState;try{r.componentDidUpdate(f,i,r.__reactInternalSnapshotBeforeUpdate)}catch(E){Rt(o,o.return,E)}}u&64&&c1(o),u&512&&ou(o,o.return);break;case 3:if(Sa(r,o),u&64&&(r=o.updateQueue,r!==null)){if(i=null,o.child!==null)switch(o.child.tag){case 27:case 5:i=o.child.stateNode;break;case 1:i=o.child.stateNode}try{W0(r,i)}catch(E){Rt(o,o.return,E)}}break;case 27:i===null&&u&4&&m1(o);case 26:case 5:Sa(r,o),i===null&&u&4&&f1(o),u&512&&ou(o,o.return);break;case 12:Sa(r,o);break;case 13:Sa(r,o),u&4&&_1(r,o),u&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(o=rA.bind(null,o),EA(r,o))));break;case 22:if(u=o.memoizedState!==null||Fi,!u){i=i!==null&&i.memoizedState!==null||Ht,f=Fi;var m=Ht;Fi=u,(Ht=i)&&!m?xa(r,o,(o.subtreeFlags&8772)!==0):Sa(r,o),Fi=f,Ht=m}break;case 30:break;default:Sa(r,o)}}function y1(r){var i=r.alternate;i!==null&&(r.alternate=null,y1(i)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(i=r.stateNode,i!==null&&xe(i)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var kt=null,Kn=!1;function Hi(r,i,o){for(o=o.child;o!==null;)v1(r,i,o),o=o.sibling}function v1(r,i,o){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(ht,o)}catch{}switch(o.tag){case 26:Ht||si(o,i),Hi(r,i,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Ht||si(o,i);var u=kt,f=Kn;Da(o.type)&&(kt=o.stateNode,Kn=!1),Hi(r,i,o),gu(o.stateNode),kt=u,Kn=f;break;case 5:Ht||si(o,i);case 6:if(u=kt,f=Kn,kt=null,Hi(r,i,o),kt=u,Kn=f,kt!==null)if(Kn)try{(kt.nodeType===9?kt.body:kt.nodeName==="HTML"?kt.ownerDocument.body:kt).removeChild(o.stateNode)}catch(m){Rt(o,i,m)}else try{kt.removeChild(o.stateNode)}catch(m){Rt(o,i,m)}break;case 18:kt!==null&&(Kn?(r=kt,s_(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),Su(r)):s_(kt,o.stateNode));break;case 4:u=kt,f=Kn,kt=o.stateNode.containerInfo,Kn=!0,Hi(r,i,o),kt=u,Kn=f;break;case 0:case 11:case 14:case 15:Ht||wa(2,o,i),Ht||wa(4,o,i),Hi(r,i,o);break;case 1:Ht||(si(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"&&h1(o,i,u)),Hi(r,i,o);break;case 21:Hi(r,i,o);break;case 22:Ht=(u=Ht)||o.memoizedState!==null,Hi(r,i,o),Ht=u;break;default:Hi(r,i,o)}}function _1(r,i){if(i.memoizedState===null&&(r=i.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{Su(r)}catch(o){Rt(i,i.return,o)}}function Q2(r){switch(r.tag){case 13:case 19:var i=r.stateNode;return i===null&&(i=r.stateNode=new p1),i;case 22:return r=r.stateNode,i=r._retryCache,i===null&&(i=r._retryCache=new p1),i;default:throw Error(a(435,r.tag))}}function Ym(r,i){var o=Q2(r);i.forEach(function(u){var f=iA.bind(null,r,u);o.has(u)||(o.add(u),u.then(f,f))})}function ar(r,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=r,E=i,S=E;e:for(;S!==null;){switch(S.tag){case 27:if(Da(S.type)){kt=S.stateNode,Kn=!1;break e}break;case 5:kt=S.stateNode,Kn=!1;break e;case 3:case 4:kt=S.stateNode.containerInfo,Kn=!0;break e}S=S.return}if(kt===null)throw Error(a(160));v1(m,E,f),kt=null,Kn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)b1(i,r),i=i.sibling}var zr=null;function b1(r,i){var o=r.alternate,u=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:ar(i,r),sr(r),u&4&&(wa(3,r,r.return),su(3,r),wa(5,r,r.return));break;case 1:ar(i,r),sr(r),u&512&&(Ht||o===null||si(o,o.return)),u&64&&Fi&&(r=r.updateQueue,r!==null&&(u=r.callbacks,u!==null&&(o=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=zr;if(ar(i,r),sr(r),u&512&&(Ht||o===null||si(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=r.memoizedState,o===null)if(u===null)if(r.stateNode===null){e:{u=r.type,o=r.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Se]||m[oe]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),Tn(m,u,o),m[oe]=r,Be(m),u=m;break e;case"link":var E=m_("link","href",f).get(u+(o.href||""));if(E){for(var S=0;S<E.length;S++)if(m=E[S],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(S,1);break t}}m=f.createElement(u),Tn(m,u,o),f.head.appendChild(m);break;case"meta":if(E=m_("meta","content",f).get(u+(o.content||""))){for(S=0;S<E.length;S++)if(m=E[S],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(S,1);break t}}m=f.createElement(u),Tn(m,u,o),f.head.appendChild(m);break;default:throw Error(a(468,u))}m[oe]=r,Be(m),u=m}r.stateNode=u}else p_(f,r.type,r.stateNode);else r.stateNode=d_(f,u,r.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?p_(f,r.type,r.stateNode):d_(f,u,r.memoizedProps)):u===null&&r.stateNode!==null&&Hm(r,r.memoizedProps,o.memoizedProps)}break;case 27:ar(i,r),sr(r),u&512&&(Ht||o===null||si(o,o.return)),o!==null&&u&4&&Hm(r,r.memoizedProps,o.memoizedProps);break;case 5:if(ar(i,r),sr(r),u&512&&(Ht||o===null||si(o,o.return)),r.flags&32){f=r.stateNode;try{vr(f,"")}catch(J){Rt(r,r.return,J)}}u&4&&r.stateNode!=null&&(f=r.memoizedProps,Hm(r,f,o!==null?o.memoizedProps:f)),u&1024&&($m=!0);break;case 6:if(ar(i,r),sr(r),u&4){if(r.stateNode===null)throw Error(a(162));u=r.memoizedProps,o=r.stateNode;try{o.nodeValue=u}catch(J){Rt(r,r.return,J)}}break;case 3:if(Oh=null,f=zr,zr=Nh(i.containerInfo),ar(i,r),zr=f,sr(r),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Su(i.containerInfo)}catch(J){Rt(r,r.return,J)}$m&&($m=!1,E1(r));break;case 4:u=zr,zr=Nh(r.stateNode.containerInfo),ar(i,r),sr(r),zr=u;break;case 12:ar(i,r),sr(r);break;case 13:ar(i,r),sr(r),r.child.flags&8192&&r.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Jm=Vn()),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,Ym(r,u)));break;case 22:f=r.memoizedState!==null;var M=o!==null&&o.memoizedState!==null,K=Fi,ie=Ht;if(Fi=K||f,Ht=ie||M,ar(i,r),Ht=ie,Fi=K,sr(r),u&8192)e:for(i=r.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(o===null||M||Fi||Ht||ks(r)),o=null,i=r;;){if(i.tag===5||i.tag===26){if(o===null){M=o=i;try{if(m=M.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{S=M.stateNode;var se=M.memoizedProps.style,Z=se!=null&&se.hasOwnProperty("display")?se.display:null;S.style.display=Z==null||typeof Z=="boolean"?"":(""+Z).trim()}}catch(J){Rt(M,M.return,J)}}}else if(i.tag===6){if(o===null){M=i;try{M.stateNode.nodeValue=f?"":M.memoizedProps}catch(J){Rt(M,M.return,J)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===r)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;o===i&&(o=null),i=i.return}o===i&&(o=null),i.sibling.return=i.return,i=i.sibling}u&4&&(u=r.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Ym(r,o))));break;case 19:ar(i,r),sr(r),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,Ym(r,u)));break;case 30:break;case 21:break;default:ar(i,r),sr(r)}}function sr(r){var i=r.flags;if(i&2){try{for(var o,u=r.return;u!==null;){if(d1(u)){o=u;break}u=u.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=qm(r);yh(r,m,f);break;case 5:var E=o.stateNode;o.flags&32&&(vr(E,""),o.flags&=-33);var S=qm(r);yh(r,S,E);break;case 3:case 4:var M=o.stateNode.containerInfo,K=qm(r);Gm(r,K,M);break;default:throw Error(a(161))}}catch(ie){Rt(r,r.return,ie)}r.flags&=-3}i&4096&&(r.flags&=-4097)}function E1(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var i=r;E1(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),r=r.sibling}}function Sa(r,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)g1(r,i.alternate,i),i=i.sibling}function ks(r){for(r=r.child;r!==null;){var i=r;switch(i.tag){case 0:case 11:case 14:case 15:wa(4,i,i.return),ks(i);break;case 1:si(i,i.return);var o=i.stateNode;typeof o.componentWillUnmount=="function"&&h1(i,i.return,o),ks(i);break;case 27:gu(i.stateNode);case 26:case 5:si(i,i.return),ks(i);break;case 22:i.memoizedState===null&&ks(i);break;case 30:ks(i);break;default:ks(i)}r=r.sibling}}function xa(r,i,o){for(o=o&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var u=i.alternate,f=r,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:xa(f,m,o),su(4,m);break;case 1:if(xa(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(K){Rt(u,u.return,K)}if(u=m,f=u.updateQueue,f!==null){var S=u.stateNode;try{var M=f.shared.hiddenCallbacks;if(M!==null)for(f.shared.hiddenCallbacks=null,f=0;f<M.length;f++)X0(M[f],S)}catch(K){Rt(u,u.return,K)}}o&&E&64&&c1(m),ou(m,m.return);break;case 27:m1(m);case 26:case 5:xa(f,m,o),o&&u===null&&E&4&&f1(m),ou(m,m.return);break;case 12:xa(f,m,o);break;case 13:xa(f,m,o),o&&E&4&&_1(f,m);break;case 22:m.memoizedState===null&&xa(f,m,o),ou(m,m.return);break;case 30:break;default:xa(f,m,o)}i=i.sibling}}function Km(r,i){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==o&&(r!=null&&r.refCount++,o!=null&&$l(o))}function Qm(r,i){r=null,i.alternate!==null&&(r=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==r&&(i.refCount++,r!=null&&$l(r))}function oi(r,i,o,u){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)T1(r,i,o,u),i=i.sibling}function T1(r,i,o,u){var f=i.flags;switch(i.tag){case 0:case 11:case 15:oi(r,i,o,u),f&2048&&su(9,i);break;case 1:oi(r,i,o,u);break;case 3:oi(r,i,o,u),f&2048&&(r=null,i.alternate!==null&&(r=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==r&&(i.refCount++,r!=null&&$l(r)));break;case 12:if(f&2048){oi(r,i,o,u),r=i.stateNode;try{var m=i.memoizedProps,E=m.id,S=m.onPostCommit;typeof S=="function"&&S(E,i.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(M){Rt(i,i.return,M)}}else oi(r,i,o,u);break;case 13:oi(r,i,o,u);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?oi(r,i,o,u):lu(r,i):m._visibility&2?oi(r,i,o,u):(m._visibility|=2,Do(r,i,o,u,(i.subtreeFlags&10256)!==0)),f&2048&&Km(E,i);break;case 24:oi(r,i,o,u),f&2048&&Qm(i.alternate,i);break;default:oi(r,i,o,u)}}function Do(r,i,o,u,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=r,E=i,S=o,M=u,K=E.flags;switch(E.tag){case 0:case 11:case 15:Do(m,E,S,M,f),su(8,E);break;case 23:break;case 22:var ie=E.stateNode;E.memoizedState!==null?ie._visibility&2?Do(m,E,S,M,f):lu(m,E):(ie._visibility|=2,Do(m,E,S,M,f)),f&&K&2048&&Km(E.alternate,E);break;case 24:Do(m,E,S,M,f),f&&K&2048&&Qm(E.alternate,E);break;default:Do(m,E,S,M,f)}i=i.sibling}}function lu(r,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var o=r,u=i,f=u.flags;switch(u.tag){case 22:lu(o,u),f&2048&&Km(u.alternate,u);break;case 24:lu(o,u),f&2048&&Qm(u.alternate,u);break;default:lu(o,u)}i=i.sibling}}var uu=8192;function Oo(r){if(r.subtreeFlags&uu)for(r=r.child;r!==null;)w1(r),r=r.sibling}function w1(r){switch(r.tag){case 26:Oo(r),r.flags&uu&&r.memoizedState!==null&&PA(zr,r.memoizedState,r.memoizedProps);break;case 5:Oo(r);break;case 3:case 4:var i=zr;zr=Nh(r.stateNode.containerInfo),Oo(r),zr=i;break;case 22:r.memoizedState===null&&(i=r.alternate,i!==null&&i.memoizedState!==null?(i=uu,uu=16777216,Oo(r),uu=i):Oo(r));break;default:Oo(r)}}function S1(r){var i=r.alternate;if(i!==null&&(r=i.child,r!==null)){i.child=null;do i=r.sibling,r.sibling=null,r=i;while(r!==null)}}function cu(r){var i=r.deletions;if((r.flags&16)!==0){if(i!==null)for(var o=0;o<i.length;o++){var u=i[o];mn=u,A1(u,r)}S1(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)x1(r),r=r.sibling}function x1(r){switch(r.tag){case 0:case 11:case 15:cu(r),r.flags&2048&&wa(9,r,r.return);break;case 3:cu(r);break;case 12:cu(r);break;case 22:var i=r.stateNode;r.memoizedState!==null&&i._visibility&2&&(r.return===null||r.return.tag!==13)?(i._visibility&=-3,vh(r)):cu(r);break;default:cu(r)}}function vh(r){var i=r.deletions;if((r.flags&16)!==0){if(i!==null)for(var o=0;o<i.length;o++){var u=i[o];mn=u,A1(u,r)}S1(r)}for(r=r.child;r!==null;){switch(i=r,i.tag){case 0:case 11:case 15:wa(8,i,i.return),vh(i);break;case 22:o=i.stateNode,o._visibility&2&&(o._visibility&=-3,vh(i));break;default:vh(i)}r=r.sibling}}function A1(r,i){for(;mn!==null;){var o=mn;switch(o.tag){case 0:case 11:case 15:wa(8,o,i);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:$l(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,mn=u;else e:for(o=r;mn!==null;){u=mn;var f=u.sibling,m=u.return;if(y1(u),u===o){mn=null;break e}if(f!==null){f.return=m,mn=f;break e}mn=m}}}var X2={getCacheForType:function(r){var i=Cn(sn),o=i.data.get(r);return o===void 0&&(o=r(),i.data.set(r,o)),o}},W2=typeof WeakMap=="function"?WeakMap:Map,bt=0,Nt=null,Ze=null,ot=0,Et=0,or=null,Aa=!1,Mo=!1,Xm=!1,qi=0,zt=0,Ra=0,Vs=0,Wm=0,Rr=0,Po=0,hu=null,Qn=null,Zm=!1,Jm=0,_h=1/0,bh=null,Ca=null,En=0,Ia=null,jo=null,ko=0,ep=0,tp=null,R1=null,fu=0,np=null;function lr(){if((bt&2)!==0&&ot!==0)return ot&-ot;if(W.T!==null){var r=wo;return r!==0?r:up()}return j()}function C1(){Rr===0&&(Rr=(ot&536870912)===0||mt?Si():536870912);var r=Ar.current;return r!==null&&(r.flags|=32),Rr}function ur(r,i,o){(r===Nt&&(Et===2||Et===9)||r.cancelPendingCommit!==null)&&(Vo(r,0),Na(r,ot,Rr,!1)),kr(r,o),((bt&2)===0||r!==Nt)&&(r===Nt&&((bt&2)===0&&(Vs|=o),zt===4&&Na(r,ot,Rr,!1)),li(r))}function I1(r,i,o){if((bt&6)!==0)throw Error(a(327));var u=!o&&(i&124)===0&&(i&r.expiredLanes)===0||pr(r,i),f=u?eA(r,i):ap(r,i,!0),m=u;do{if(f===0){Mo&&!u&&Na(r,i,0,!1);break}else{if(o=r.current.alternate,m&&!Z2(o)){f=ap(r,i,!1),m=!1;continue}if(f===2){if(m=i,r.errorRecoveryDisabledLanes&m)var E=0;else E=r.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;e:{var S=r;f=hu;var M=S.current.memoizedState.isDehydrated;if(M&&(Vo(S,E).flags|=256),E=ap(S,E,!1),E!==2){if(Xm&&!M){S.errorRecoveryDisabledLanes|=m,Vs|=m,f=4;break e}m=Qn,Qn=f,m!==null&&(Qn===null?Qn=m:Qn.push.apply(Qn,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){Vo(r,0),Na(r,i,0,!0);break}e:{switch(u=r,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Na(u,i,Rr,!Aa);break e;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Jm+300-Vn(),10<f)){if(Na(u,i,Rr,!Aa),wi(u,0,!0)!==0)break e;u.timeoutHandle=i_(N1.bind(null,u,o,Qn,bh,Zm,i,Rr,Vs,Po,Aa,m,2,-0,0),f);break e}N1(u,o,Qn,bh,Zm,i,Rr,Vs,Po,Aa,m,0,-0,0)}}break}while(!0);li(r)}function N1(r,i,o,u,f,m,E,S,M,K,ie,se,Z,J){if(r.timeoutHandle=-1,se=i.subtreeFlags,(se&8192||(se&16785408)===16785408)&&(_u={stylesheets:null,count:0,unsuspend:MA},w1(i),se=jA(),se!==null)){r.cancelPendingCommit=se(V1.bind(null,r,i,m,o,u,f,E,S,M,ie,1,Z,J)),Na(r,m,E,!K);return}V1(r,i,m,o,u,f,E,S,M)}function Z2(r){for(var i=r;;){var o=i.tag;if((o===0||o===11||o===15)&&i.flags&16384&&(o=i.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!rr(m(),f))return!1}catch{return!1}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Na(r,i,o,u){i&=~Wm,i&=~Vs,r.suspendedLanes|=i,r.pingedLanes&=~i,u&&(r.warmLanes|=i),u=r.expirationTimes;for(var f=i;0<f;){var m=31-Yt(f),E=1<<m;u[m]=-1,f&=~E}o!==0&&Ln(r,o,i)}function Eh(){return(bt&6)===0?(du(0),!1):!0}function rp(){if(Ze!==null){if(Et===0)var r=Ze.return;else r=Ze,ki=Ds=null,bm(r),Io=null,ru=0,r=Ze;for(;r!==null;)u1(r.alternate,r),r=r.return;Ze=null}}function Vo(r,i){var o=r.timeoutHandle;o!==-1&&(r.timeoutHandle=-1,gA(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),rp(),Nt=r,Ze=o=Mi(r.current,null),ot=i,Et=0,or=null,Aa=!1,Mo=pr(r,i),Xm=!1,Po=Rr=Wm=Vs=Ra=zt=0,Qn=hu=null,Zm=!1,(i&8)!==0&&(i|=i&32);var u=r.entangledLanes;if(u!==0)for(r=r.entanglements,u&=i;0<u;){var f=31-Yt(u),m=1<<f;i|=r[f],u&=~m}return qi=i,Hc(),o}function D1(r,i){Qe=null,W.H=lh,i===Kl||i===Zc?(i=K0(),Et=3):i===G0?(i=K0(),Et=4):Et=i===Qv?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,or=i,Ze===null&&(zt=1,dh(r,Tr(i,r.current)))}function O1(){var r=W.H;return W.H=lh,r===null?lh:r}function M1(){var r=W.A;return W.A=X2,r}function ip(){zt=4,Aa||(ot&4194048)!==ot&&Ar.current!==null||(Mo=!0),(Ra&134217727)===0&&(Vs&134217727)===0||Nt===null||Na(Nt,ot,Rr,!1)}function ap(r,i,o){var u=bt;bt|=2;var f=O1(),m=M1();(Nt!==r||ot!==i)&&(bh=null,Vo(r,i)),i=!1;var E=zt;e:do try{if(Et!==0&&Ze!==null){var S=Ze,M=or;switch(Et){case 8:rp(),E=6;break e;case 3:case 2:case 9:case 6:Ar.current===null&&(i=!0);var K=Et;if(Et=0,or=null,Lo(r,S,M,K),o&&Mo){E=0;break e}break;default:K=Et,Et=0,or=null,Lo(r,S,M,K)}}J2(),E=zt;break}catch(ie){D1(r,ie)}while(!0);return i&&r.shellSuspendCounter++,ki=Ds=null,bt=u,W.H=f,W.A=m,Ze===null&&(Nt=null,ot=0,Hc()),E}function J2(){for(;Ze!==null;)P1(Ze)}function eA(r,i){var o=bt;bt|=2;var u=O1(),f=M1();Nt!==r||ot!==i?(bh=null,_h=Vn()+500,Vo(r,i)):Mo=pr(r,i);e:do try{if(Et!==0&&Ze!==null){i=Ze;var m=or;t:switch(Et){case 1:Et=0,or=null,Lo(r,i,m,1);break;case 2:case 9:if($0(m)){Et=0,or=null,j1(i);break}i=function(){Et!==2&&Et!==9||Nt!==r||(Et=7),li(r)},m.then(i,i);break e;case 3:Et=7;break e;case 4:Et=5;break e;case 7:$0(m)?(Et=0,or=null,j1(i)):(Et=0,or=null,Lo(r,i,m,7));break;case 5:var E=null;switch(Ze.tag){case 26:E=Ze.memoizedState;case 5:case 27:var S=Ze;if(!E||g_(E)){Et=0,or=null;var M=S.sibling;if(M!==null)Ze=M;else{var K=S.return;K!==null?(Ze=K,Th(K)):Ze=null}break t}}Et=0,or=null,Lo(r,i,m,5);break;case 6:Et=0,or=null,Lo(r,i,m,6);break;case 8:rp(),zt=6;break e;default:throw Error(a(462))}}tA();break}catch(ie){D1(r,ie)}while(!0);return ki=Ds=null,W.H=u,W.A=f,bt=o,Ze!==null?0:(Nt=null,ot=0,Hc(),zt)}function tA(){for(;Ze!==null&&!cs();)P1(Ze)}function P1(r){var i=o1(r.alternate,r,qi);r.memoizedProps=r.pendingProps,i===null?Th(r):Ze=i}function j1(r){var i=r,o=i.alternate;switch(i.tag){case 15:case 0:i=t1(o,i,i.pendingProps,i.type,void 0,ot);break;case 11:i=t1(o,i,i.pendingProps,i.type.render,i.ref,ot);break;case 5:bm(i);default:u1(o,i),i=Ze=k0(i,qi),i=o1(o,i,qi)}r.memoizedProps=r.pendingProps,i===null?Th(r):Ze=i}function Lo(r,i,o,u){ki=Ds=null,bm(i),Io=null,ru=0;var f=i.return;try{if(q2(r,f,i,o,ot)){zt=1,dh(r,Tr(o,r.current)),Ze=null;return}}catch(m){if(f!==null)throw Ze=f,m;zt=1,dh(r,Tr(o,r.current)),Ze=null;return}i.flags&32768?(mt||u===1?r=!0:Mo||(ot&536870912)!==0?r=!1:(Aa=r=!0,(u===2||u===9||u===3||u===6)&&(u=Ar.current,u!==null&&u.tag===13&&(u.flags|=16384))),k1(i,r)):Th(i)}function Th(r){var i=r;do{if((i.flags&32768)!==0){k1(i,Aa);return}r=i.return;var o=$2(i.alternate,i,qi);if(o!==null){Ze=o;return}if(i=i.sibling,i!==null){Ze=i;return}Ze=i=r}while(i!==null);zt===0&&(zt=5)}function k1(r,i){do{var o=Y2(r.alternate,r);if(o!==null){o.flags&=32767,Ze=o;return}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!i&&(r=r.sibling,r!==null)){Ze=r;return}Ze=r=o}while(r!==null);zt=6,Ze=null}function V1(r,i,o,u,f,m,E,S,M){r.cancelPendingCommit=null;do wh();while(En!==0);if((bt&6)!==0)throw Error(a(327));if(i!==null){if(i===r.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Qd,ua(r,o,m,E,S,M),r===Nt&&(Ze=Nt=null,ot=0),jo=i,Ia=r,ko=o,ep=m,tp=f,R1=u,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,aA(Ti,function(){return F1(),null})):(r.callbackNode=null,r.callbackPriority=0),u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=W.T,W.T=null,f=pe.p,pe.p=2,E=bt,bt|=4;try{K2(r,i,o)}finally{bt=E,pe.p=f,W.T=u}}En=1,L1(),U1(),z1()}}function L1(){if(En===1){En=0;var r=Ia,i=jo,o=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||o){o=W.T,W.T=null;var u=pe.p;pe.p=2;var f=bt;bt|=4;try{b1(i,r);var m=yp,E=A0(r.containerInfo),S=m.focusedElem,M=m.selectionRange;if(E!==S&&S&&S.ownerDocument&&x0(S.ownerDocument.documentElement,S)){if(M!==null&&qd(S)){var K=M.start,ie=M.end;if(ie===void 0&&(ie=K),"selectionStart"in S)S.selectionStart=K,S.selectionEnd=Math.min(ie,S.value.length);else{var se=S.ownerDocument||document,Z=se&&se.defaultView||window;if(Z.getSelection){var J=Z.getSelection(),Le=S.textContent.length,Me=Math.min(M.start,Le),xt=M.end===void 0?Me:Math.min(M.end,Le);!J.extend&&Me>xt&&(E=xt,xt=Me,Me=E);var F=S0(S,Me),L=S0(S,xt);if(F&&L&&(J.rangeCount!==1||J.anchorNode!==F.node||J.anchorOffset!==F.offset||J.focusNode!==L.node||J.focusOffset!==L.offset)){var Y=se.createRange();Y.setStart(F.node,F.offset),J.removeAllRanges(),Me>xt?(J.addRange(Y),J.extend(L.node,L.offset)):(Y.setEnd(L.node,L.offset),J.addRange(Y))}}}}for(se=[],J=S;J=J.parentNode;)J.nodeType===1&&se.push({element:J,left:J.scrollLeft,top:J.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<se.length;S++){var ae=se[S];ae.element.scrollLeft=ae.left,ae.element.scrollTop=ae.top}}jh=!!gp,yp=gp=null}finally{bt=f,pe.p=u,W.T=o}}r.current=i,En=2}}function U1(){if(En===2){En=0;var r=Ia,i=jo,o=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||o){o=W.T,W.T=null;var u=pe.p;pe.p=2;var f=bt;bt|=4;try{g1(r,i.alternate,i)}finally{bt=f,pe.p=u,W.T=o}}En=3}}function z1(){if(En===4||En===3){En=0,ro();var r=Ia,i=jo,o=ko,u=R1;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?En=5:(En=0,jo=Ia=null,B1(r,r.pendingLanes));var f=r.pendingLanes;if(f===0&&(Ca=null),ca(o),i=i.stateNode,Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(ht,i,void 0,(i.current.flags&128)===128)}catch{}if(u!==null){i=W.T,f=pe.p,pe.p=2,W.T=null;try{for(var m=r.onRecoverableError,E=0;E<u.length;E++){var S=u[E];m(S.value,{componentStack:S.stack})}}finally{W.T=i,pe.p=f}}(ko&3)!==0&&wh(),li(r),f=r.pendingLanes,(o&4194090)!==0&&(f&42)!==0?r===np?fu++:(fu=0,np=r):fu=0,du(0)}}function B1(r,i){(r.pooledCacheLanes&=i)===0&&(i=r.pooledCache,i!=null&&(r.pooledCache=null,$l(i)))}function wh(r){return L1(),U1(),z1(),F1()}function F1(){if(En!==5)return!1;var r=Ia,i=ep;ep=0;var o=ca(ko),u=W.T,f=pe.p;try{pe.p=32>o?32:o,W.T=null,o=tp,tp=null;var m=Ia,E=ko;if(En=0,jo=Ia=null,ko=0,(bt&6)!==0)throw Error(a(331));var S=bt;if(bt|=4,x1(m.current),T1(m,m.current,E,o),bt=S,du(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(ht,m)}catch{}return!0}finally{pe.p=f,W.T=u,B1(r,i)}}function H1(r,i,o){i=Tr(o,i),i=Pm(r.stateNode,i,2),r=_a(r,i,2),r!==null&&(kr(r,2),li(r))}function Rt(r,i,o){if(r.tag===3)H1(r,r,o);else for(;i!==null;){if(i.tag===3){H1(i,r,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ca===null||!Ca.has(u))){r=Tr(o,r),o=Yv(2),u=_a(i,o,2),u!==null&&(Kv(o,u,i,r),kr(u,2),li(u));break}}i=i.return}}function sp(r,i,o){var u=r.pingCache;if(u===null){u=r.pingCache=new W2;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(o)||(Xm=!0,f.add(o),r=nA.bind(null,r,i,o),i.then(r,r))}function nA(r,i,o){var u=r.pingCache;u!==null&&u.delete(i),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,Nt===r&&(ot&o)===o&&(zt===4||zt===3&&(ot&62914560)===ot&&300>Vn()-Jm?(bt&2)===0&&Vo(r,0):Wm|=o,Po===ot&&(Po=0)),li(r)}function q1(r,i){i===0&&(i=fs()),r=_o(r,i),r!==null&&(kr(r,i),li(r))}function rA(r){var i=r.memoizedState,o=0;i!==null&&(o=i.retryLane),q1(r,o)}function iA(r,i){var o=0;switch(r.tag){case 13:var u=r.stateNode,f=r.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=r.stateNode;break;case 22:u=r.stateNode._retryCache;break;default:throw Error(a(314))}u!==null&&u.delete(i),q1(r,o)}function aA(r,i){return Ei(r,i)}var Sh=null,Uo=null,op=!1,xh=!1,lp=!1,Ls=0;function li(r){r!==Uo&&r.next===null&&(Uo===null?Sh=Uo=r:Uo=Uo.next=r),xh=!0,op||(op=!0,oA())}function du(r,i){if(!lp&&xh){lp=!0;do for(var o=!1,u=Sh;u!==null;){if(r!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var E=u.suspendedLanes,S=u.pingedLanes;m=(1<<31-Yt(42|r)+1)-1,m&=f&~(E&~S),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,K1(u,m))}else m=ot,m=wi(u,u===Nt?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||pr(u,m)||(o=!0,K1(u,m));u=u.next}while(o);lp=!1}}function sA(){G1()}function G1(){xh=op=!1;var r=0;Ls!==0&&(pA()&&(r=Ls),Ls=0);for(var i=Vn(),o=null,u=Sh;u!==null;){var f=u.next,m=$1(u,i);m===0?(u.next=null,o===null?Sh=f:o.next=f,f===null&&(Uo=o)):(o=u,(r!==0||(m&3)!==0)&&(xh=!0)),u=f}du(r)}function $1(r,i){for(var o=r.suspendedLanes,u=r.pingedLanes,f=r.expirationTimes,m=r.pendingLanes&-62914561;0<m;){var E=31-Yt(m),S=1<<E,M=f[E];M===-1?((S&o)===0||(S&u)!==0)&&(f[E]=la(S,i)):M<=i&&(r.expiredLanes|=S),m&=~S}if(i=Nt,o=ot,o=wi(r,r===i?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u=r.callbackNode,o===0||r===i&&(Et===2||Et===9)||r.cancelPendingCommit!==null)return u!==null&&u!==null&&kn(u),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||pr(r,o)){if(i=o&-o,i===r.callbackPriority)return i;switch(u!==null&&kn(u),ca(o)){case 2:case 8:o=aa;break;case 32:o=Ti;break;case 268435456:o=dr;break;default:o=Ti}return u=Y1.bind(null,r),o=Ei(o,u),r.callbackPriority=i,r.callbackNode=o,i}return u!==null&&u!==null&&kn(u),r.callbackPriority=2,r.callbackNode=null,2}function Y1(r,i){if(En!==0&&En!==5)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(wh()&&r.callbackNode!==o)return null;var u=ot;return u=wi(r,r===Nt?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u===0?null:(I1(r,u,i),$1(r,Vn()),r.callbackNode!=null&&r.callbackNode===o?Y1.bind(null,r):null)}function K1(r,i){if(wh())return null;I1(r,i,!0)}function oA(){yA(function(){(bt&6)!==0?Ei(hs,sA):G1()})}function up(){return Ls===0&&(Ls=Si()),Ls}function Q1(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:so(""+r)}function X1(r,i){var o=i.ownerDocument.createElement("input");return o.name=i.name,o.value=i.value,r.id&&o.setAttribute("form",r.id),i.parentNode.insertBefore(o,i),r=new FormData(r),o.parentNode.removeChild(o),r}function lA(r,i,o,u,f){if(i==="submit"&&o&&o.stateNode===f){var m=Q1((f[de]||null).action),E=u.submitter;E&&(i=(i=E[de]||null)?Q1(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var S=new oo("action","action",null,u,f);r.push({event:S,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Ls!==0){var M=E?X1(f,E):new FormData(f);Im(o,{pending:!0,data:M,method:f.method,action:m},null,M)}}else typeof m=="function"&&(S.preventDefault(),M=E?X1(f,E):new FormData(f),Im(o,{pending:!0,data:M,method:f.method,action:m},m,M))},currentTarget:f}]})}}for(var cp=0;cp<Kd.length;cp++){var hp=Kd[cp],uA=hp.toLowerCase(),cA=hp[0].toUpperCase()+hp.slice(1);Ur(uA,"on"+cA)}Ur(I0,"onAnimationEnd"),Ur(N0,"onAnimationIteration"),Ur(D0,"onAnimationStart"),Ur("dblclick","onDoubleClick"),Ur("focusin","onFocus"),Ur("focusout","onBlur"),Ur(R2,"onTransitionRun"),Ur(C2,"onTransitionStart"),Ur(I2,"onTransitionCancel"),Ur(O0,"onTransitionEnd"),cn("onMouseEnter",["mouseout","mouseover"]),cn("onMouseLeave",["mouseout","mouseover"]),cn("onPointerEnter",["pointerout","pointerover"]),cn("onPointerLeave",["pointerout","pointerover"]),vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),vn("onBeforeInput",["compositionend","keypress","textInput","paste"]),vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mu));function W1(r,i){i=(i&4)!==0;for(var o=0;o<r.length;o++){var u=r[o],f=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var E=u.length-1;0<=E;E--){var S=u[E],M=S.instance,K=S.currentTarget;if(S=S.listener,M!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=K;try{m(f)}catch(ie){fh(ie)}f.currentTarget=null,m=M}else for(E=0;E<u.length;E++){if(S=u[E],M=S.instance,K=S.currentTarget,S=S.listener,M!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=K;try{m(f)}catch(ie){fh(ie)}f.currentTarget=null,m=M}}}}function Je(r,i){var o=i[Ae];o===void 0&&(o=i[Ae]=new Set);var u=r+"__bubble";o.has(u)||(Z1(i,r,2,!1),o.add(u))}function fp(r,i,o){var u=0;i&&(u|=4),Z1(o,r,u,i)}var Ah="_reactListening"+Math.random().toString(36).slice(2);function dp(r){if(!r[Ah]){r[Ah]=!0,dt.forEach(function(o){o!=="selectionchange"&&(hA.has(o)||fp(o,!1,r),fp(o,!0,r))});var i=r.nodeType===9?r:r.ownerDocument;i===null||i[Ah]||(i[Ah]=!0,fp("selectionchange",!1,i))}}function Z1(r,i,o,u){switch(T_(i)){case 2:var f=LA;break;case 8:f=UA;break;default:f=Rp}o=f.bind(null,i,o,r),f=void 0,!br||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?r.addEventListener(i,o,{capture:!0,passive:f}):r.addEventListener(i,o,!0):f!==void 0?r.addEventListener(i,o,{passive:f}):r.addEventListener(i,o,!1)}function mp(r,i,o,u,f){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var S=u.stateNode.containerInfo;if(S===f)break;if(E===4)for(E=u.return;E!==null;){var M=E.tag;if((M===3||M===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;S!==null;){if(E=qe(S),E===null)return;if(M=E.tag,M===5||M===6||M===26||M===27){u=m=E;continue e}S=S.parentNode}}u=u.return}Cc(function(){var K=m,ie=_r(o),se=[];e:{var Z=M0.get(r);if(Z!==void 0){var J=oo,Le=r;switch(r){case"keypress":if(Jr(o)===0)break e;case"keydown":case"keyup":J=mo;break;case"focusin":Le="focus",J=co;break;case"focusout":Le="blur",J=co;break;case"beforeblur":case"afterblur":J=co;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=Er;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=zd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=kc;break;case I0:case N0:case D0:J=ho;break;case O0:J=Lc;break;case"scroll":case"scrollend":J=Ic;break;case"wheel":J=po;break;case"copy":case"cut":case"paste":J=fo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=Ll;break;case"toggle":case"beforetoggle":J=zc}var Me=(i&4)!==0,xt=!Me&&(r==="scroll"||r==="scrollend"),F=Me?Z!==null?Z+"Capture":null:Z;Me=[];for(var L=K,Y;L!==null;){var ae=L;if(Y=ae.stateNode,ae=ae.tag,ae!==5&&ae!==26&&ae!==27||Y===null||F===null||(ae=ys(L,F),ae!=null&&Me.push(pu(L,ae,Y))),xt)break;L=L.return}0<Me.length&&(Z=new J(Z,Le,null,o,ie),se.push({event:Z,listeners:Me}))}}if((i&7)===0){e:{if(Z=r==="mouseover"||r==="pointerover",J=r==="mouseout"||r==="pointerout",Z&&o!==Ri&&(Le=o.relatedTarget||o.fromElement)&&(qe(Le)||Le[ve]))break e;if((J||Z)&&(Z=ie.window===ie?ie:(Z=ie.ownerDocument)?Z.defaultView||Z.parentWindow:window,J?(Le=o.relatedTarget||o.toElement,J=K,Le=Le?qe(Le):null,Le!==null&&(xt=l(Le),Me=Le.tag,Le!==xt||Me!==5&&Me!==27&&Me!==6)&&(Le=null)):(J=null,Le=K),J!==Le)){if(Me=Er,ae="onMouseLeave",F="onMouseEnter",L="mouse",(r==="pointerout"||r==="pointerover")&&(Me=Ll,ae="onPointerLeave",F="onPointerEnter",L="pointer"),xt=J==null?Z:At(J),Y=Le==null?Z:At(Le),Z=new Me(ae,L+"leave",J,o,ie),Z.target=xt,Z.relatedTarget=Y,ae=null,qe(ie)===K&&(Me=new Me(F,L+"enter",Le,o,ie),Me.target=Y,Me.relatedTarget=xt,ae=Me),xt=ae,J&&Le)t:{for(Me=J,F=Le,L=0,Y=Me;Y;Y=zo(Y))L++;for(Y=0,ae=F;ae;ae=zo(ae))Y++;for(;0<L-Y;)Me=zo(Me),L--;for(;0<Y-L;)F=zo(F),Y--;for(;L--;){if(Me===F||F!==null&&Me===F.alternate)break t;Me=zo(Me),F=zo(F)}Me=null}else Me=null;J!==null&&J1(se,Z,J,Me,!1),Le!==null&&xt!==null&&J1(se,xt,Le,Me,!0)}}e:{if(Z=K?At(K):window,J=Z.nodeName&&Z.nodeName.toLowerCase(),J==="select"||J==="input"&&Z.type==="file")var Ee=v0;else if(an(Z))if(_0)Ee=S2;else{Ee=T2;var Xe=E2}else J=Z.nodeName,!J||J.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?K&&Dl(K.elementType)&&(Ee=v0):Ee=w2;if(Ee&&(Ee=Ee(r,K))){Oi(se,Ee,o,ie);break e}Xe&&Xe(r,Z,K),r==="focusout"&&K&&Z.type==="number"&&K.memoizedProps.value!=null&&ma(Z,"number",Z.value)}switch(Xe=K?At(K):window,r){case"focusin":(an(Xe)||Xe.contentEditable==="true")&&(go=Xe,Gd=K,Bl=null);break;case"focusout":Bl=Gd=go=null;break;case"mousedown":$d=!0;break;case"contextmenu":case"mouseup":case"dragend":$d=!1,R0(se,o,ie);break;case"selectionchange":if(A2)break;case"keydown":case"keyup":R0(se,o,ie)}var Ie;if(ni)e:{switch(r){case"compositionstart":var Pe="onCompositionStart";break e;case"compositionend":Pe="onCompositionEnd";break e;case"compositionupdate":Pe="onCompositionUpdate";break e}Pe=void 0}else at?te(r,o)&&(Pe="onCompositionEnd"):r==="keydown"&&o.keyCode===229&&(Pe="onCompositionStart");Pe&&(b&&o.locale!=="ko"&&(at||Pe!=="onCompositionStart"?Pe==="onCompositionEnd"&&at&&(Ie=Ml()):(Zr=ie,pa="value"in Zr?Zr.value:Zr.textContent,at=!0)),Xe=Rh(K,Pe),0<Xe.length&&(Pe=new kl(Pe,r,null,o,ie),se.push({event:Pe,listeners:Xe}),Ie?Pe.data=Ie:(Ie=ge(o),Ie!==null&&(Pe.data=Ie)))),(Ie=v?rn(r,o):st(r,o))&&(Pe=Rh(K,"onBeforeInput"),0<Pe.length&&(Xe=new kl("onBeforeInput","beforeinput",null,o,ie),se.push({event:Xe,listeners:Pe}),Xe.data=Ie)),lA(se,r,K,o,ie)}W1(se,i)})}function pu(r,i,o){return{instance:r,listener:i,currentTarget:o}}function Rh(r,i){for(var o=i+"Capture",u=[];r!==null;){var f=r,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=ys(r,o),f!=null&&u.unshift(pu(r,f,m)),f=ys(r,i),f!=null&&u.push(pu(r,f,m))),r.tag===3)return u;r=r.return}return[]}function zo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function J1(r,i,o,u,f){for(var m=i._reactName,E=[];o!==null&&o!==u;){var S=o,M=S.alternate,K=S.stateNode;if(S=S.tag,M!==null&&M===u)break;S!==5&&S!==26&&S!==27||K===null||(M=K,f?(K=ys(o,m),K!=null&&E.unshift(pu(o,K,M))):f||(K=ys(o,m),K!=null&&E.push(pu(o,K,M)))),o=o.return}E.length!==0&&r.push({event:i,listeners:E})}var fA=/\r\n?/g,dA=/\u0000|\uFFFD/g;function e_(r){return(typeof r=="string"?r:""+r).replace(fA,`
`).replace(dA,"")}function t_(r,i){return i=e_(i),e_(r)===i}function Ch(){}function St(r,i,o,u,f,m){switch(o){case"children":typeof u=="string"?i==="body"||i==="textarea"&&u===""||vr(r,u):(typeof u=="number"||typeof u=="bigint")&&i!=="body"&&vr(r,""+u);break;case"className":zn(r,"class",u);break;case"tabIndex":zn(r,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":zn(r,o,u);break;case"style":Nl(r,u,m);break;case"data":if(i!=="object"){zn(r,"data",u);break}case"src":case"href":if(u===""&&(i!=="a"||o!=="href")){r.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=so(""+u),r.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(i!=="input"&&St(r,i,"name",f.name,f,null),St(r,i,"formEncType",f.formEncType,f,null),St(r,i,"formMethod",f.formMethod,f,null),St(r,i,"formTarget",f.formTarget,f,null)):(St(r,i,"encType",f.encType,f,null),St(r,i,"method",f.method,f,null),St(r,i,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=so(""+u),r.setAttribute(o,u);break;case"onClick":u!=null&&(r.onclick=Ch);break;case"onScroll":u!=null&&Je("scroll",r);break;case"onScrollEnd":u!=null&&Je("scrollend",r);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(a(60));r.innerHTML=o}}break;case"multiple":r.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":r.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){r.removeAttribute("xlink:href");break}o=so(""+u),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""+u):r.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":u===!0?r.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,u):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?r.setAttribute(o,u):r.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?r.removeAttribute(o):r.setAttribute(o,u);break;case"popover":Je("beforetoggle",r),Je("toggle",r),tr(r,"popover",u);break;case"xlinkActuate":Ue(r,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Ue(r,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Ue(r,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Ue(r,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Ue(r,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Ue(r,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Ue(r,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Ue(r,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Ue(r,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":tr(r,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Ld.get(o)||o,tr(r,o,u))}}function pp(r,i,o,u,f,m){switch(o){case"style":Nl(r,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(a(60));r.innerHTML=o}}break;case"children":typeof u=="string"?vr(r,u):(typeof u=="number"||typeof u=="bigint")&&vr(r,""+u);break;case"onScroll":u!=null&&Je("scroll",r);break;case"onScrollEnd":u!=null&&Je("scrollend",r);break;case"onClick":u!=null&&(r.onclick=Ch);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$n.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),i=o.slice(2,f?o.length-7:void 0),m=r[de]||null,m=m!=null?m[o]:null,typeof m=="function"&&r.removeEventListener(i,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(i,u,f);break e}o in r?r[o]=u:u===!0?r.setAttribute(o,""):tr(r,o,u)}}}function Tn(r,i,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Je("error",r),Je("load",r);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var E=o[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:St(r,i,m,E,o,null)}}f&&St(r,i,"srcSet",o.srcSet,o,null),u&&St(r,i,"src",o.src,o,null);return;case"input":Je("invalid",r);var S=m=E=f=null,M=null,K=null;for(u in o)if(o.hasOwnProperty(u)){var ie=o[u];if(ie!=null)switch(u){case"name":f=ie;break;case"type":E=ie;break;case"checked":M=ie;break;case"defaultChecked":K=ie;break;case"value":m=ie;break;case"defaultValue":S=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(a(137,i));break;default:St(r,i,u,ie,o,null)}}ms(r,m,S,M,K,E,f,!1),ao(r);return;case"select":Je("invalid",r),u=E=m=null;for(f in o)if(o.hasOwnProperty(f)&&(S=o[f],S!=null))switch(f){case"value":m=S;break;case"defaultValue":E=S;break;case"multiple":u=S;default:St(r,i,f,S,o,null)}i=m,o=E,r.multiple=!!u,i!=null?Ai(r,!!u,i,!1):o!=null&&Ai(r,!!u,o,!0);return;case"textarea":Je("invalid",r),m=f=u=null;for(E in o)if(o.hasOwnProperty(E)&&(S=o[E],S!=null))switch(E){case"value":u=S;break;case"defaultValue":f=S;break;case"children":m=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(a(91));break;default:St(r,i,E,S,o,null)}ps(r,u,f,m),ao(r);return;case"option":for(M in o)if(o.hasOwnProperty(M)&&(u=o[M],u!=null))switch(M){case"selected":r.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:St(r,i,M,u,o,null)}return;case"dialog":Je("beforetoggle",r),Je("toggle",r),Je("cancel",r),Je("close",r);break;case"iframe":case"object":Je("load",r);break;case"video":case"audio":for(u=0;u<mu.length;u++)Je(mu[u],r);break;case"image":Je("error",r),Je("load",r);break;case"details":Je("toggle",r);break;case"embed":case"source":case"link":Je("error",r),Je("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in o)if(o.hasOwnProperty(K)&&(u=o[K],u!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:St(r,i,K,u,o,null)}return;default:if(Dl(i)){for(ie in o)o.hasOwnProperty(ie)&&(u=o[ie],u!==void 0&&pp(r,i,ie,u,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(u=o[S],u!=null&&St(r,i,S,u,o,null))}function mA(r,i,o,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,S=null,M=null,K=null,ie=null;for(J in o){var se=o[J];if(o.hasOwnProperty(J)&&se!=null)switch(J){case"checked":break;case"value":break;case"defaultValue":M=se;default:u.hasOwnProperty(J)||St(r,i,J,null,u,se)}}for(var Z in u){var J=u[Z];if(se=o[Z],u.hasOwnProperty(Z)&&(J!=null||se!=null))switch(Z){case"type":m=J;break;case"name":f=J;break;case"checked":K=J;break;case"defaultChecked":ie=J;break;case"value":E=J;break;case"defaultValue":S=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(a(137,i));break;default:J!==se&&St(r,i,Z,J,u,se)}}nr(r,E,S,M,K,ie,m,f);return;case"select":J=E=S=Z=null;for(m in o)if(M=o[m],o.hasOwnProperty(m)&&M!=null)switch(m){case"value":break;case"multiple":J=M;default:u.hasOwnProperty(m)||St(r,i,m,null,u,M)}for(f in u)if(m=u[f],M=o[f],u.hasOwnProperty(f)&&(m!=null||M!=null))switch(f){case"value":Z=m;break;case"defaultValue":S=m;break;case"multiple":E=m;default:m!==M&&St(r,i,f,m,u,M)}i=S,o=E,u=J,Z!=null?Ai(r,!!o,Z,!1):!!u!=!!o&&(i!=null?Ai(r,!!o,i,!0):Ai(r,!!o,o?[]:"",!1));return;case"textarea":J=Z=null;for(S in o)if(f=o[S],o.hasOwnProperty(S)&&f!=null&&!u.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:St(r,i,S,null,u,f)}for(E in u)if(f=u[E],m=o[E],u.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":Z=f;break;case"defaultValue":J=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&St(r,i,E,f,u,m)}Tt(r,Z,J);return;case"option":for(var Le in o)if(Z=o[Le],o.hasOwnProperty(Le)&&Z!=null&&!u.hasOwnProperty(Le))switch(Le){case"selected":r.selected=!1;break;default:St(r,i,Le,null,u,Z)}for(M in u)if(Z=u[M],J=o[M],u.hasOwnProperty(M)&&Z!==J&&(Z!=null||J!=null))switch(M){case"selected":r.selected=Z&&typeof Z!="function"&&typeof Z!="symbol";break;default:St(r,i,M,Z,u,J)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Me in o)Z=o[Me],o.hasOwnProperty(Me)&&Z!=null&&!u.hasOwnProperty(Me)&&St(r,i,Me,null,u,Z);for(K in u)if(Z=u[K],J=o[K],u.hasOwnProperty(K)&&Z!==J&&(Z!=null||J!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(a(137,i));break;default:St(r,i,K,Z,u,J)}return;default:if(Dl(i)){for(var xt in o)Z=o[xt],o.hasOwnProperty(xt)&&Z!==void 0&&!u.hasOwnProperty(xt)&&pp(r,i,xt,void 0,u,Z);for(ie in u)Z=u[ie],J=o[ie],!u.hasOwnProperty(ie)||Z===J||Z===void 0&&J===void 0||pp(r,i,ie,Z,u,J);return}}for(var F in o)Z=o[F],o.hasOwnProperty(F)&&Z!=null&&!u.hasOwnProperty(F)&&St(r,i,F,null,u,Z);for(se in u)Z=u[se],J=o[se],!u.hasOwnProperty(se)||Z===J||Z==null&&J==null||St(r,i,se,Z,u,J)}var gp=null,yp=null;function Ih(r){return r.nodeType===9?r:r.ownerDocument}function n_(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function r_(r,i){if(r===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&i==="foreignObject"?0:r}function vp(r,i){return r==="textarea"||r==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var _p=null;function pA(){var r=window.event;return r&&r.type==="popstate"?r===_p?!1:(_p=r,!0):(_p=null,!1)}var i_=typeof setTimeout=="function"?setTimeout:void 0,gA=typeof clearTimeout=="function"?clearTimeout:void 0,a_=typeof Promise=="function"?Promise:void 0,yA=typeof queueMicrotask=="function"?queueMicrotask:typeof a_<"u"?function(r){return a_.resolve(null).then(r).catch(vA)}:i_;function vA(r){setTimeout(function(){throw r})}function Da(r){return r==="head"}function s_(r,i){var o=i,u=0,f=0;do{var m=o.nextSibling;if(r.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var E=r.ownerDocument;if(o&1&&gu(E.documentElement),o&2&&gu(E.body),o&4)for(o=E.head,gu(o),E=o.firstChild;E;){var S=E.nextSibling,M=E.nodeName;E[Se]||M==="SCRIPT"||M==="STYLE"||M==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=S}}if(f===0){r.removeChild(m),Su(i);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);Su(i)}function bp(r){var i=r.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var o=i;switch(i=i.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":bp(o),xe(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function _A(r,i,o,u){for(;r.nodeType===1;){var f=o;if(r.nodeName.toLowerCase()!==i.toLowerCase()){if(!u&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(u){if(!r[Se])switch(i){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(m=r.getAttribute("rel"),m==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(m!==f.rel||r.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||r.getAttribute("title")!==(f.title==null?null:f.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(m=r.getAttribute("src"),(m!==(f.src==null?null:f.src)||r.getAttribute("type")!==(f.type==null?null:f.type)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(i==="input"&&r.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&r.getAttribute("name")===m)return r}else return r;if(r=Br(r.nextSibling),r===null)break}return null}function bA(r,i,o){if(i==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o||(r=Br(r.nextSibling),r===null))return null;return r}function Ep(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function EA(r,i){var o=r.ownerDocument;if(r.data!=="$?"||o.readyState==="complete")i();else{var u=function(){i(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),r._reactRetry=u}}function Br(r){for(;r!=null;r=r.nextSibling){var i=r.nodeType;if(i===1||i===3)break;if(i===8){if(i=r.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return r}var Tp=null;function o_(r){r=r.previousSibling;for(var i=0;r;){if(r.nodeType===8){var o=r.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return r;i--}else o==="/$"&&i++}r=r.previousSibling}return null}function l_(r,i,o){switch(i=Ih(o),r){case"html":if(r=i.documentElement,!r)throw Error(a(452));return r;case"head":if(r=i.head,!r)throw Error(a(453));return r;case"body":if(r=i.body,!r)throw Error(a(454));return r;default:throw Error(a(451))}}function gu(r){for(var i=r.attributes;i.length;)r.removeAttributeNode(i[0]);xe(r)}var Cr=new Map,u_=new Set;function Nh(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var Gi=pe.d;pe.d={f:TA,r:wA,D:SA,C:xA,L:AA,m:RA,X:IA,S:CA,M:NA};function TA(){var r=Gi.f(),i=Eh();return r||i}function wA(r){var i=ut(r);i!==null&&i.tag===5&&i.type==="form"?Iv(i):Gi.r(r)}var Bo=typeof document>"u"?null:document;function c_(r,i,o){var u=Bo;if(u&&typeof i=="string"&&i){var f=Kt(i);f='link[rel="'+r+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),u_.has(f)||(u_.add(f),r={rel:r,crossOrigin:o,href:i},u.querySelector(f)===null&&(i=u.createElement("link"),Tn(i,"link",r),Be(i),u.head.appendChild(i)))}}function SA(r){Gi.D(r),c_("dns-prefetch",r,null)}function xA(r,i){Gi.C(r,i),c_("preconnect",r,i)}function AA(r,i,o){Gi.L(r,i,o);var u=Bo;if(u&&r&&i){var f='link[rel="preload"][as="'+Kt(i)+'"]';i==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Kt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Kt(o.imageSizes)+'"]')):f+='[href="'+Kt(r)+'"]';var m=f;switch(i){case"style":m=Fo(r);break;case"script":m=Ho(r)}Cr.has(m)||(r=_({rel:"preload",href:i==="image"&&o&&o.imageSrcSet?void 0:r,as:i},o),Cr.set(m,r),u.querySelector(f)!==null||i==="style"&&u.querySelector(yu(m))||i==="script"&&u.querySelector(vu(m))||(i=u.createElement("link"),Tn(i,"link",r),Be(i),u.head.appendChild(i)))}}function RA(r,i){Gi.m(r,i);var o=Bo;if(o&&r){var u=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Kt(u)+'"][href="'+Kt(r)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Ho(r)}if(!Cr.has(m)&&(r=_({rel:"modulepreload",href:r},i),Cr.set(m,r),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(vu(m)))return}u=o.createElement("link"),Tn(u,"link",r),Be(u),o.head.appendChild(u)}}}function CA(r,i,o){Gi.S(r,i,o);var u=Bo;if(u&&r){var f=ft(u).hoistableStyles,m=Fo(r);i=i||"default";var E=f.get(m);if(!E){var S={loading:0,preload:null};if(E=u.querySelector(yu(m)))S.loading=5;else{r=_({rel:"stylesheet",href:r,"data-precedence":i},o),(o=Cr.get(m))&&wp(r,o);var M=E=u.createElement("link");Be(M),Tn(M,"link",r),M._p=new Promise(function(K,ie){M.onload=K,M.onerror=ie}),M.addEventListener("load",function(){S.loading|=1}),M.addEventListener("error",function(){S.loading|=2}),S.loading|=4,Dh(E,i,u)}E={type:"stylesheet",instance:E,count:1,state:S},f.set(m,E)}}}function IA(r,i){Gi.X(r,i);var o=Bo;if(o&&r){var u=ft(o).hoistableScripts,f=Ho(r),m=u.get(f);m||(m=o.querySelector(vu(f)),m||(r=_({src:r,async:!0},i),(i=Cr.get(f))&&Sp(r,i),m=o.createElement("script"),Be(m),Tn(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function NA(r,i){Gi.M(r,i);var o=Bo;if(o&&r){var u=ft(o).hoistableScripts,f=Ho(r),m=u.get(f);m||(m=o.querySelector(vu(f)),m||(r=_({src:r,async:!0,type:"module"},i),(i=Cr.get(f))&&Sp(r,i),m=o.createElement("script"),Be(m),Tn(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function h_(r,i,o,u){var f=(f=Ce.current)?Nh(f):null;if(!f)throw Error(a(446));switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(i=Fo(o.href),o=ft(f).hoistableStyles,u=o.get(i),u||(u={type:"style",instance:null,count:0,state:null},o.set(i,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){r=Fo(o.href);var m=ft(f).hoistableStyles,E=m.get(r);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(r,E),(m=f.querySelector(yu(r)))&&!m._p&&(E.instance=m,E.state.loading=5),Cr.has(r)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Cr.set(r,o),m||DA(f,r,o,E.state))),i&&u===null)throw Error(a(528,""));return E}if(i&&u!==null)throw Error(a(529,""));return null;case"script":return i=o.async,o=o.src,typeof o=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ho(o),o=ft(f).hoistableScripts,u=o.get(i),u||(u={type:"script",instance:null,count:0,state:null},o.set(i,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,r))}}function Fo(r){return'href="'+Kt(r)+'"'}function yu(r){return'link[rel="stylesheet"]['+r+"]"}function f_(r){return _({},r,{"data-precedence":r.precedence,precedence:null})}function DA(r,i,o,u){r.querySelector('link[rel="preload"][as="style"]['+i+"]")?u.loading=1:(i=r.createElement("link"),u.preload=i,i.addEventListener("load",function(){return u.loading|=1}),i.addEventListener("error",function(){return u.loading|=2}),Tn(i,"link",o),Be(i),r.head.appendChild(i))}function Ho(r){return'[src="'+Kt(r)+'"]'}function vu(r){return"script[async]"+r}function d_(r,i,o){if(i.count++,i.instance===null)switch(i.type){case"style":var u=r.querySelector('style[data-href~="'+Kt(o.href)+'"]');if(u)return i.instance=u,Be(u),u;var f=_({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(r.ownerDocument||r).createElement("style"),Be(u),Tn(u,"style",f),Dh(u,o.precedence,r),i.instance=u;case"stylesheet":f=Fo(o.href);var m=r.querySelector(yu(f));if(m)return i.state.loading|=4,i.instance=m,Be(m),m;u=f_(o),(f=Cr.get(f))&&wp(u,f),m=(r.ownerDocument||r).createElement("link"),Be(m);var E=m;return E._p=new Promise(function(S,M){E.onload=S,E.onerror=M}),Tn(m,"link",u),i.state.loading|=4,Dh(m,o.precedence,r),i.instance=m;case"script":return m=Ho(o.src),(f=r.querySelector(vu(m)))?(i.instance=f,Be(f),f):(u=o,(f=Cr.get(m))&&(u=_({},o),Sp(u,f)),r=r.ownerDocument||r,f=r.createElement("script"),Be(f),Tn(f,"link",u),r.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(u=i.instance,i.state.loading|=4,Dh(u,o.precedence,r));return i.instance}function Dh(r,i,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,E=0;E<u.length;E++){var S=u[E];if(S.dataset.precedence===i)m=S;else if(m!==f)break}m?m.parentNode.insertBefore(r,m.nextSibling):(i=o.nodeType===9?o.head:o,i.insertBefore(r,i.firstChild))}function wp(r,i){r.crossOrigin==null&&(r.crossOrigin=i.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=i.referrerPolicy),r.title==null&&(r.title=i.title)}function Sp(r,i){r.crossOrigin==null&&(r.crossOrigin=i.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=i.referrerPolicy),r.integrity==null&&(r.integrity=i.integrity)}var Oh=null;function m_(r,i,o){if(Oh===null){var u=new Map,f=Oh=new Map;f.set(o,u)}else f=Oh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(r))return u;for(u.set(r,null),o=o.getElementsByTagName(r),f=0;f<o.length;f++){var m=o[f];if(!(m[Se]||m[oe]||r==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=r+E;var S=u.get(E);S?S.push(m):u.set(E,[m])}}return u}function p_(r,i,o){r=r.ownerDocument||r,r.head.insertBefore(o,i==="title"?r.querySelector("head > title"):null)}function OA(r,i,o){if(o===1||i.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return r=i.disabled,typeof i.precedence=="string"&&r==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function g_(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var _u=null;function MA(){}function PA(r,i,o){if(_u===null)throw Error(a(475));var u=_u;if(i.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=Fo(o.href),m=r.querySelector(yu(f));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(u.count++,u=Mh.bind(u),r.then(u,u)),i.state.loading|=4,i.instance=m,Be(m);return}m=r.ownerDocument||r,o=f_(o),(f=Cr.get(f))&&wp(o,f),m=m.createElement("link"),Be(m);var E=m;E._p=new Promise(function(S,M){E.onload=S,E.onerror=M}),Tn(m,"link",o),i.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(i,r),(r=i.state.preload)&&(i.state.loading&3)===0&&(u.count++,i=Mh.bind(u),r.addEventListener("load",i),r.addEventListener("error",i))}}function jA(){if(_u===null)throw Error(a(475));var r=_u;return r.stylesheets&&r.count===0&&xp(r,r.stylesheets),0<r.count?function(i){var o=setTimeout(function(){if(r.stylesheets&&xp(r,r.stylesheets),r.unsuspend){var u=r.unsuspend;r.unsuspend=null,u()}},6e4);return r.unsuspend=i,function(){r.unsuspend=null,clearTimeout(o)}}:null}function Mh(){if(this.count--,this.count===0){if(this.stylesheets)xp(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var Ph=null;function xp(r,i){r.stylesheets=null,r.unsuspend!==null&&(r.count++,Ph=new Map,i.forEach(kA,r),Ph=null,Mh.call(r))}function kA(r,i){if(!(i.state.loading&4)){var o=Ph.get(r);if(o)var u=o.get(null);else{o=new Map,Ph.set(r,o);for(var f=r.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}f=i.instance,E=f.getAttribute("data-precedence"),m=o.get(E)||u,m===u&&o.set(null,f),o.set(E,f),this.count++,u=Mh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(f,r.firstChild)),i.state.loading|=4}}var bu={$$typeof:X,Provider:null,Consumer:null,_currentValue:ye,_currentValue2:ye,_threadCount:0};function VA(r,i,o,u,f,m,E,S){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=gr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gr(0),this.hiddenUpdates=gr(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function y_(r,i,o,u,f,m,E,S,M,K,ie,se){return r=new VA(r,i,o,E,S,M,K,se),i=1,m===!0&&(i|=24),m=ir(3,null,null,i),r.current=m,m.stateNode=r,i=sm(),i.refCount++,r.pooledCache=i,i.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:i},cm(m),r}function v_(r){return r?(r=bo,r):bo}function __(r,i,o,u,f,m){f=v_(f),u.context===null?u.context=f:u.pendingContext=f,u=va(i),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=_a(r,u,i),o!==null&&(ur(o,r,i),Xl(o,r,i))}function b_(r,i){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<i?o:i}}function Ap(r,i){b_(r,i),(r=r.alternate)&&b_(r,i)}function E_(r){if(r.tag===13){var i=_o(r,67108864);i!==null&&ur(i,r,67108864),Ap(r,67108864)}}var jh=!0;function LA(r,i,o,u){var f=W.T;W.T=null;var m=pe.p;try{pe.p=2,Rp(r,i,o,u)}finally{pe.p=m,W.T=f}}function UA(r,i,o,u){var f=W.T;W.T=null;var m=pe.p;try{pe.p=8,Rp(r,i,o,u)}finally{pe.p=m,W.T=f}}function Rp(r,i,o,u){if(jh){var f=Cp(u);if(f===null)mp(r,i,u,kh,o),w_(r,u);else if(BA(f,r,i,o,u))u.stopPropagation();else if(w_(r,u),i&4&&-1<zA.indexOf(r)){for(;f!==null;){var m=ut(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Jn(m.pendingLanes);if(E!==0){var S=m;for(S.pendingLanes|=2,S.entangledLanes|=2;E;){var M=1<<31-Yt(E);S.entanglements[1]|=M,E&=~M}li(m),(bt&6)===0&&(_h=Vn()+500,du(0))}}break;case 13:S=_o(m,2),S!==null&&ur(S,m,2),Eh(),Ap(m,2)}if(m=Cp(u),m===null&&mp(r,i,u,kh,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else mp(r,i,u,null,o)}}function Cp(r){return r=_r(r),Ip(r)}var kh=null;function Ip(r){if(kh=null,r=qe(r),r!==null){var i=l(r);if(i===null)r=null;else{var o=i.tag;if(o===13){if(r=c(i),r!==null)return r;r=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;r=null}else i!==r&&(r=null)}}return kh=r,null}function T_(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rl()){case hs:return 2;case aa:return 8;case Ti:case jr:return 32;case dr:return 268435456;default:return 32}default:return 32}}var Np=!1,Oa=null,Ma=null,Pa=null,Eu=new Map,Tu=new Map,ja=[],zA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function w_(r,i){switch(r){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":Ma=null;break;case"mouseover":case"mouseout":Pa=null;break;case"pointerover":case"pointerout":Eu.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tu.delete(i.pointerId)}}function wu(r,i,o,u,f,m){return r===null||r.nativeEvent!==m?(r={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},i!==null&&(i=ut(i),i!==null&&E_(i)),r):(r.eventSystemFlags|=u,i=r.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),r)}function BA(r,i,o,u,f){switch(i){case"focusin":return Oa=wu(Oa,r,i,o,u,f),!0;case"dragenter":return Ma=wu(Ma,r,i,o,u,f),!0;case"mouseover":return Pa=wu(Pa,r,i,o,u,f),!0;case"pointerover":var m=f.pointerId;return Eu.set(m,wu(Eu.get(m)||null,r,i,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,Tu.set(m,wu(Tu.get(m)||null,r,i,o,u,f)),!0}return!1}function S_(r){var i=qe(r.target);if(i!==null){var o=l(i);if(o!==null){if(i=o.tag,i===13){if(i=c(o),i!==null){r.blockedOn=i,q(r.priority,function(){if(o.tag===13){var u=lr();u=Xr(u);var f=_o(o,u);f!==null&&ur(f,o,u),Ap(o,u)}});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Vh(r){if(r.blockedOn!==null)return!1;for(var i=r.targetContainers;0<i.length;){var o=Cp(r.nativeEvent);if(o===null){o=r.nativeEvent;var u=new o.constructor(o.type,o);Ri=u,o.target.dispatchEvent(u),Ri=null}else return i=ut(o),i!==null&&E_(i),r.blockedOn=o,!1;i.shift()}return!0}function x_(r,i,o){Vh(r)&&o.delete(i)}function FA(){Np=!1,Oa!==null&&Vh(Oa)&&(Oa=null),Ma!==null&&Vh(Ma)&&(Ma=null),Pa!==null&&Vh(Pa)&&(Pa=null),Eu.forEach(x_),Tu.forEach(x_)}function Lh(r,i){r.blockedOn===i&&(r.blockedOn=null,Np||(Np=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,FA)))}var Uh=null;function A_(r){Uh!==r&&(Uh=r,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Uh===r&&(Uh=null);for(var i=0;i<r.length;i+=3){var o=r[i],u=r[i+1],f=r[i+2];if(typeof u!="function"){if(Ip(u||o)===null)continue;break}var m=ut(o);m!==null&&(r.splice(i,3),i-=3,Im(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function Su(r){function i(M){return Lh(M,r)}Oa!==null&&Lh(Oa,r),Ma!==null&&Lh(Ma,r),Pa!==null&&Lh(Pa,r),Eu.forEach(i),Tu.forEach(i);for(var o=0;o<ja.length;o++){var u=ja[o];u.blockedOn===r&&(u.blockedOn=null)}for(;0<ja.length&&(o=ja[0],o.blockedOn===null);)S_(o),o.blockedOn===null&&ja.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],E=f[de]||null;if(typeof m=="function")E||A_(o);else if(E){var S=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[de]||null)S=E.formAction;else if(Ip(f)!==null)continue}else S=E.action;typeof S=="function"?o[u+1]=S:(o.splice(u,3),u-=3),A_(o)}}}function Dp(r){this._internalRoot=r}zh.prototype.render=Dp.prototype.render=function(r){var i=this._internalRoot;if(i===null)throw Error(a(409));var o=i.current,u=lr();__(o,u,r,i,null,null)},zh.prototype.unmount=Dp.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var i=r.containerInfo;__(r.current,2,null,r,null,null),Eh(),i[ve]=null}};function zh(r){this._internalRoot=r}zh.prototype.unstable_scheduleHydration=function(r){if(r){var i=j();r={blockedOn:null,target:r,priority:i};for(var o=0;o<ja.length&&i!==0&&i<ja[o].priority;o++);ja.splice(o,0,r),o===0&&S_(r)}};var R_=e.version;if(R_!=="19.1.0")throw Error(a(527,R_,"19.1.0"));pe.findDOMNode=function(r){var i=r._reactInternals;if(i===void 0)throw typeof r.render=="function"?Error(a(188)):(r=Object.keys(r).join(","),Error(a(268,r)));return r=p(i),r=r!==null?g(r):null,r=r===null?null:r.stateNode,r};var HA={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:W,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bh.isDisabled&&Bh.supportsFiber)try{ht=Bh.inject(HA),Ke=Bh}catch{}}return Au.createRoot=function(r,i){if(!s(r))throw Error(a(299));var o=!1,u="",f=Hv,m=qv,E=Gv,S=null;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(S=i.unstable_transitionCallbacks)),i=y_(r,1,!1,null,null,o,u,f,m,E,S,null),r[ve]=i.current,dp(r),new Dp(i)},Au.hydrateRoot=function(r,i,o){if(!s(r))throw Error(a(299));var u=!1,f="",m=Hv,E=qv,S=Gv,M=null,K=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(M=o.unstable_transitionCallbacks),o.formState!==void 0&&(K=o.formState)),i=y_(r,1,!0,i,o??null,u,f,m,E,S,M,K),i.context=v_(null),o=i.current,u=lr(),u=Xr(u),f=va(u),f.callback=null,_a(o,f,u),o=u,i.current.lanes=o,kr(i,o),li(i),r[ve]=i.current,dp(r),new zh(i)},Au.version="19.1.0",Au}var V_;function ZA(){if(V_)return Pp.exports;V_=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Pp.exports=WA(),Pp.exports}var JA=ZA();/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var mT=t=>{throw TypeError(t)},eR=(t,e,n)=>e.has(t)||mT("Cannot "+n),Lp=(t,e,n)=>(eR(t,e,"read from private field"),n?n.call(t):e.get(t)),tR=(t,e,n)=>e.has(t)?mT("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),L_="popstate";function nR(t={}){function e(a,s){let{pathname:l,search:c,hash:d}=a.location;return Qu("",{pathname:l,search:c,hash:d},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(a,s){return typeof s=="string"?s:Za(s)}return iR(e,n,null,t)}function et(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function en(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function rR(){return Math.random().toString(36).substring(2,10)}function U_(t,e){return{usr:t.state,key:t.key,idx:e}}function Qu(t,e,n=null,a){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?as(e):e,state:n,key:e&&e.key||a||rR()}}function Za({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function as(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let a=t.indexOf("?");a>=0&&(e.search=t.substring(a),t=t.substring(0,a)),t&&(e.pathname=t)}return e}function iR(t,e,n,a={}){let{window:s=document.defaultView,v5Compat:l=!1}=a,c=s.history,d="POP",p=null,g=_();g==null&&(g=0,c.replaceState({...c.state,idx:g},""));function _(){return(c.state||{idx:null}).idx}function w(){d="POP";let O=_(),$=O==null?null:O-g;g=O,p&&p({action:d,location:H.location,delta:$})}function T(O,$){d="PUSH";let ee=Qu(H.location,O,$);g=_()+1;let X=U_(ee,g),ce=H.createHref(ee);try{c.pushState(X,"",ce)}catch(ue){if(ue instanceof DOMException&&ue.name==="DataCloneError")throw ue;s.location.assign(ce)}l&&p&&p({action:d,location:H.location,delta:1})}function A(O,$){d="REPLACE";let ee=Qu(H.location,O,$);g=_();let X=U_(ee,g),ce=H.createHref(ee);c.replaceState(X,"",ce),l&&p&&p({action:d,location:H.location,delta:0})}function k(O){return pT(O)}let H={get action(){return d},get location(){return t(s,c)},listen(O){if(p)throw new Error("A history only accepts one active listener");return s.addEventListener(L_,w),p=O,()=>{s.removeEventListener(L_,w),p=null}},createHref(O){return e(s,O)},createURL:k,encodeLocation(O){let $=k(O);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:T,replace:A,go(O){return c.go(O)}};return H}function pT(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),et(n,"No window.location.(origin|href) available to create URL");let a=typeof t=="string"?t:Za(t);return a=a.replace(/ $/,"%20"),!e&&a.startsWith("//")&&(a=n+a),new URL(a,n)}var ju,z_=class{constructor(t){if(tR(this,ju,new Map),t)for(let[e,n]of t)this.set(e,n)}get(t){if(Lp(this,ju).has(t))return Lp(this,ju).get(t);if(t.defaultValue!==void 0)return t.defaultValue;throw new Error("No value found for context")}set(t,e){Lp(this,ju).set(t,e)}};ju=new WeakMap;var aR=new Set(["lazy","caseSensitive","path","id","index","children"]);function sR(t){return aR.has(t)}var oR=new Set(["lazy","caseSensitive","path","id","index","unstable_middleware","children"]);function lR(t){return oR.has(t)}function uR(t){return t.index===!0}function Xu(t,e,n=[],a={},s=!1){return t.map((l,c)=>{let d=[...n,String(c)],p=typeof l.id=="string"?l.id:d.join("-");if(et(l.index!==!0||!l.children,"Cannot specify children on an index route"),et(s||!a[p],`Found a route id collision on id "${p}".  Route id's must be globally unique within Data Router usages`),uR(l)){let g={...l,...e(l),id:p};return a[p]=g,g}else{let g={...l,...e(l),id:p,children:void 0};return a[p]=g,l.children&&(g.children=Xu(l.children,e,d,a,s)),g}})}function za(t,e,n="/"){return lf(t,e,n,!1)}function lf(t,e,n,a){let s=typeof e=="string"?as(e):e,l=Or(s.pathname||"/",n);if(l==null)return null;let c=gT(t);hR(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let g=TR(l);d=bR(c[p],g,a)}return d}function cR(t,e){let{route:n,pathname:a,params:s}=t;return{id:n.id,pathname:a,params:s,data:e[n.id],handle:n.handle}}function gT(t,e=[],n=[],a=""){let s=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(et(p.relativePath.startsWith(a),`Absolute route path "${p.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(a.length));let g=hi([a,p.relativePath]),_=n.concat(p);l.children&&l.children.length>0&&(et(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),gT(l.children,e,_,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:vR(g,l.index),routesMeta:_})};return t.forEach((l,c)=>{if(l.path===""||!l.path?.includes("?"))s(l,c);else for(let d of yT(l.path))s(l,c,d)}),e}function yT(t){let e=t.split("/");if(e.length===0)return[];let[n,...a]=e,s=n.endsWith("?"),l=n.replace(/\?$/,"");if(a.length===0)return s?[l,""]:[l];let c=yT(a.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),s&&d.push(...c),d.map(p=>t.startsWith("/")&&p===""?"/":p)}function hR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:_R(e.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var fR=/^:[\w-]+$/,dR=3,mR=2,pR=1,gR=10,yR=-2,B_=t=>t==="*";function vR(t,e){let n=t.split("/"),a=n.length;return n.some(B_)&&(a+=yR),e&&(a+=mR),n.filter(s=>!B_(s)).reduce((s,l)=>s+(fR.test(l)?dR:l===""?pR:gR),a)}function _R(t,e){return t.length===e.length&&t.slice(0,-1).every((a,s)=>a===e[s])?t[t.length-1]-e[e.length-1]:0}function bR(t,e,n=!1){let{routesMeta:a}=t,s={},l="/",c=[];for(let d=0;d<a.length;++d){let p=a[d],g=d===a.length-1,_=l==="/"?e:e.slice(l.length)||"/",w=Rf({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},_),T=p.route;if(!w&&g&&n&&!a[a.length-1].route.index&&(w=Rf({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},_)),!w)return null;Object.assign(s,w.params),c.push({params:s,pathname:hi([l,w.pathname]),pathnameBase:AR(hi([l,w.pathnameBase])),route:T}),w.pathnameBase!=="/"&&(l=hi([l,w.pathnameBase]))}return c}function Rf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,a]=ER(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let l=s[0],c=l.replace(/(.)\/+$/,"$1"),d=s.slice(1);return{params:a.reduce((g,{paramName:_,isOptional:w},T)=>{if(_==="*"){let k=d[T]||"";c=l.slice(0,l.length-k.length).replace(/(.)\/+$/,"$1")}const A=d[T];return w&&!A?g[_]=void 0:g[_]=(A||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:t}}function ER(t,e=!1,n=!0){en(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let a=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(a.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(a.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),a]}function TR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return en(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Or(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,a=t.charAt(n);return a&&a!=="/"?null:t.slice(n)||"/"}function wR({basename:t,pathname:e}){return e==="/"?t:hi([t,e])}function SR(t,e="/"){let{pathname:n,search:a="",hash:s=""}=typeof t=="string"?as(t):t;return{pathname:n?n.startsWith("/")?n:xR(n,e):e,search:RR(a),hash:CR(s)}}function xR(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Up(t,e,n,a){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function vT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ay(t){let e=vT(t);return e.map((n,a)=>a===e.length-1?n.pathname:n.pathnameBase)}function sy(t,e,n,a=!1){let s;typeof t=="string"?s=as(t):(s={...t},et(!s.pathname||!s.pathname.includes("?"),Up("?","pathname","search",s)),et(!s.pathname||!s.pathname.includes("#"),Up("#","pathname","hash",s)),et(!s.search||!s.search.includes("#"),Up("#","search","hash",s)));let l=t===""||s.pathname==="",c=l?"/":s.pathname,d;if(c==null)d=n;else{let w=e.length-1;if(!a&&c.startsWith("..")){let T=c.split("/");for(;T[0]==="..";)T.shift(),w-=1;s.pathname=T.join("/")}d=w>=0?e[w]:"/"}let p=SR(s,d),g=c&&c!=="/"&&c.endsWith("/"),_=(l||c===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(g||_)&&(p.pathname+="/"),p}var hi=t=>t.join("/").replace(/\/\/+/g,"/"),AR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),RR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,CR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,Cf=class{constructor(t,e,n,a=!1){this.status=t,this.statusText=e||"",this.internal=a,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function sl(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var _T=["POST","PUT","PATCH","DELETE"],IR=new Set(_T),NR=["GET",..._T],DR=new Set(NR),OR=new Set([301,302,303,307,308]),MR=new Set([307,308]),zp={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},PR={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ru={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},jR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oy=t=>jR.test(t),kR=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),bT="remix-router-transitions",ET=Symbol("ResetLoaderData");function VR(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u";et(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let a=t.hydrationRouteProperties||[],s=t.mapRouteProperties||kR,l={},c=Xu(t.routes,s,void 0,l),d,p=t.basename||"/",g=t.dataStrategy||FR,_={unstable_middleware:!1,...t.future},w=null,T=new Set,A=null,k=null,H=null,O=t.hydrationData!=null,$=za(c,t.history.location,p),ee=!1,X=null,ce;if($==null&&!t.patchRoutesOnNavigation){let j=Ir(404,{pathname:t.history.location.pathname}),{matches:q,route:Q}=J_(c);ce=!0,$=q,X={[Q.id]:j}}else if($&&!t.hydrationData&&Ln($,c,t.history.location.pathname).active&&($=null),$)if($.some(j=>j.route.lazy))ce=!1;else if(!$.some(j=>j.route.loader))ce=!0;else{let j=t.hydrationData?t.hydrationData.loaderData:null,q=t.hydrationData?t.hydrationData.errors:null;if(q){let Q=$.findIndex(oe=>q[oe.route.id]!==void 0);ce=$.slice(0,Q+1).every(oe=>!gg(oe.route,j,q))}else ce=$.every(Q=>!gg(Q.route,j,q))}else{ce=!1,$=[];let j=Ln(null,c,t.history.location.pathname);j.active&&j.matches&&(ee=!0,$=j.matches)}let ue,z={historyAction:t.history.action,location:t.history.location,matches:$,initialized:ce,navigation:zp,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||X,fetchers:new Map,blockers:new Map},N="POP",R=!1,C,V=!1,U=new Map,B=null,I=!1,He=!1,We=new Set,W=new Map,pe=0,ye=-1,Ne=new Map,P=new Set,re=new Map,me=new Map,he=new Set,be=new Map,Ve,Ce=null;function Dt(){if(w=t.history.listen(({action:j,location:q,delta:Q})=>{if(Ve){Ve(),Ve=void 0;return}en(be.size===0||Q!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let oe=la({currentLocation:z.location,nextLocation:q,historyAction:j});if(oe&&Q!=null){let de=new Promise(ve=>{Ve=ve});t.history.go(Q*-1),pr(oe,{state:"blocked",location:q,proceed(){pr(oe,{state:"proceeding",proceed:void 0,reset:void 0,location:q}),de.then(()=>t.history.go(Q))},reset(){let ve=new Map(z.blockers);ve.set(oe,Ru),_t({blockers:ve})}});return}return kn(j,q)}),n){JR(e,U);let j=()=>e4(e,U);e.addEventListener("pagehide",j),B=()=>e.removeEventListener("pagehide",j)}return z.initialized||kn("POP",z.location,{initialHydration:!0}),ue}function it(){w&&w(),B&&B(),T.clear(),C&&C.abort(),z.fetchers.forEach((j,q)=>Yt(q)),z.blockers.forEach((j,q)=>wi(q))}function $t(j){return T.add(j),()=>T.delete(j)}function _t(j,q={}){j.matches&&(j.matches=j.matches.map(de=>{let ve=l[de.route.id],Ae=de.route;return Ae.element!==ve.element||Ae.errorElement!==ve.errorElement||Ae.hydrateFallbackElement!==ve.hydrateFallbackElement?{...de,route:ve}:de})),z={...z,...j};let Q=[],oe=[];z.fetchers.forEach((de,ve)=>{de.state==="idle"&&(he.has(ve)?Q.push(ve):oe.push(ve))}),he.forEach(de=>{!z.fetchers.has(de)&&!W.has(de)&&Q.push(de)}),[...T].forEach(de=>de(z,{deletedFetchers:Q,viewTransitionOpts:q.viewTransitionOpts,flushSync:q.flushSync===!0})),Q.forEach(de=>Yt(de)),oe.forEach(de=>z.fetchers.delete(de))}function Bt(j,q,{flushSync:Q}={}){let oe=z.actionData!=null&&z.navigation.formMethod!=null&&Wn(z.navigation.formMethod)&&z.navigation.state==="loading"&&j.state?._isRedirect!==!0,de;q.actionData?Object.keys(q.actionData).length>0?de=q.actionData:de=null:oe?de=z.actionData:de=null;let ve=q.loaderData?W_(z.loaderData,q.loaderData,q.matches||[],q.errors):z.loaderData,Ae=z.blockers;Ae.size>0&&(Ae=new Map(Ae),Ae.forEach((Se,xe)=>Ae.set(xe,Ru)));let Te=I?!1:ua(j,q.matches||z.matches),we=R===!0||z.navigation.formMethod!=null&&Wn(z.navigation.formMethod)&&j.state?._isRedirect!==!0;d&&(c=d,d=void 0),I||N==="POP"||(N==="PUSH"?t.history.push(j,j.state):N==="REPLACE"&&t.history.replace(j,j.state));let De;if(N==="POP"){let Se=U.get(z.location.pathname);Se&&Se.has(j.pathname)?De={currentLocation:z.location,nextLocation:j}:U.has(j.pathname)&&(De={currentLocation:j,nextLocation:z.location})}else if(V){let Se=U.get(z.location.pathname);Se?Se.add(j.pathname):(Se=new Set([j.pathname]),U.set(z.location.pathname,Se)),De={currentLocation:z.location,nextLocation:j}}_t({...q,actionData:de,loaderData:ve,historyAction:N,location:j,initialized:!0,navigation:zp,revalidation:"idle",restoreScrollPosition:Te,preventScrollReset:we,blockers:Ae},{viewTransitionOpts:De,flushSync:Q===!0}),N="POP",R=!1,V=!1,I=!1,He=!1,Ce?.resolve(),Ce=null}async function nn(j,q){if(typeof j=="number"){t.history.go(j);return}let Q=pg(z.location,z.matches,p,j,q?.fromRouteId,q?.relative),{path:oe,submission:de,error:ve}=F_(!1,Q,q),Ae=z.location,Te=Qu(z.location,oe,q&&q.state);Te={...Te,...t.history.encodeLocation(Te)};let we=q&&q.replace!=null?q.replace:void 0,De="PUSH";we===!0?De="REPLACE":we===!1||de!=null&&Wn(de.formMethod)&&de.formAction===z.location.pathname+z.location.search&&(De="REPLACE");let Se=q&&"preventScrollReset"in q?q.preventScrollReset===!0:void 0,xe=(q&&q.flushSync)===!0,qe=la({currentLocation:Ae,nextLocation:Te,historyAction:De});if(qe){pr(qe,{state:"blocked",location:Te,proceed(){pr(qe,{state:"proceeding",proceed:void 0,reset:void 0,location:Te}),nn(j,q)},reset(){let ut=new Map(z.blockers);ut.set(qe,Ru),_t({blockers:ut})}});return}await kn(De,Te,{submission:de,pendingError:ve,preventScrollReset:Se,replace:q&&q.replace,enableViewTransition:q&&q.viewTransition,flushSync:xe})}function Ei(){Ce||(Ce=t4()),oa(),_t({revalidation:"loading"});let j=Ce.promise;return z.navigation.state==="submitting"?j:z.navigation.state==="idle"?(kn(z.historyAction,z.location,{startUninterruptedRevalidation:!0}),j):(kn(N||z.historyAction,z.navigation.location,{overrideNavigation:z.navigation,enableViewTransition:V===!0}),j)}async function kn(j,q,Q){C&&C.abort(),C=null,N=j,I=(Q&&Q.startUninterruptedRevalidation)===!0,kr(z.location,z.matches),R=(Q&&Q.preventScrollReset)===!0,V=(Q&&Q.enableViewTransition)===!0;let oe=d||c,de=Q&&Q.overrideNavigation,ve=Q?.initialHydration&&z.matches&&z.matches.length>0&&!ee?z.matches:za(oe,q,p),Ae=(Q&&Q.flushSync)===!0;if(ve&&z.initialized&&!He&&KR(z.location,q)&&!(Q&&Q.submission&&Wn(Q.submission.formMethod))){Bt(q,{matches:ve},{flushSync:Ae});return}let Te=Ln(ve,oe,q.pathname);if(Te.active&&Te.matches&&(ve=Te.matches),!ve){let{error:ft,notFoundMatches:Be,route:dt}=Si(q.pathname);Bt(q,{matches:Be,loaderData:{},errors:{[dt.id]:ft}},{flushSync:Ae});return}C=new AbortController;let we=$o(t.history,q,C.signal,Q&&Q.submission),De=new z_(t.unstable_getContext?await t.unstable_getContext():void 0),Se;if(Q&&Q.pendingError)Se=[zs(ve).route.id,{type:"error",error:Q.pendingError}];else if(Q&&Q.submission&&Wn(Q.submission.formMethod)){let ft=await cs(we,q,Q.submission,ve,De,Te.active,Q&&Q.initialHydration===!0,{replace:Q.replace,flushSync:Ae});if(ft.shortCircuited)return;if(ft.pendingActionResult){let[Be,dt]=ft.pendingActionResult;if(hr(dt)&&sl(dt.error)&&dt.error.status===404){C=null,Bt(q,{matches:ft.matches,loaderData:{},errors:{[Be]:dt.error}});return}}ve=ft.matches||ve,Se=ft.pendingActionResult,de=Bp(q,Q.submission),Ae=!1,Te.active=!1,we=$o(t.history,we.url,we.signal)}let{shortCircuited:xe,matches:qe,loaderData:ut,errors:At}=await ro(we,q,ve,De,Te.active,de,Q&&Q.submission,Q&&Q.fetcherSubmission,Q&&Q.replace,Q&&Q.initialHydration===!0,Ae,Se);xe||(C=null,Bt(q,{matches:qe||ve,...Z_(Se),loaderData:ut,errors:At}))}async function cs(j,q,Q,oe,de,ve,Ae,Te={}){oa();let we=WR(q,Q);if(_t({navigation:we},{flushSync:Te.flushSync===!0}),ve){let xe=await Qr(oe,q.pathname,j.signal);if(xe.type==="aborted")return{shortCircuited:!0};if(xe.type==="error"){let qe=zs(xe.partialMatches).route.id;return{matches:xe.partialMatches,pendingActionResult:[qe,{type:"error",error:xe.error}]}}else if(xe.matches)oe=xe.matches;else{let{notFoundMatches:qe,error:ut,route:At}=Si(q.pathname);return{matches:qe,pendingActionResult:[At.id,{type:"error",error:ut}]}}}let De,Se=uf(oe,q);if(!Se.route.action&&!Se.route.lazy)De={type:"error",error:Ir(405,{method:j.method,pathname:q.pathname,routeId:Se.route.id})};else{let xe=Zo(s,l,j,oe,Se,Ae?[]:a,de),qe=await dr(j,xe,de,null);if(De=qe[Se.route.id],!De){for(let ut of oe)if(qe[ut.route.id]){De=qe[ut.route.id];break}}if(j.signal.aborted)return{shortCircuited:!0}}if(Bs(De)){let xe;return Te&&Te.replace!=null?xe=Te.replace:xe=K_(De.response.headers.get("Location"),new URL(j.url),p)===z.location.pathname+z.location.search,await jr(j,De,!0,{submission:Q,replace:xe}),{shortCircuited:!0}}if(hr(De)){let xe=zs(oe,Se.route.id);return(Te&&Te.replace)!==!0&&(N="PUSH"),{matches:oe,pendingActionResult:[xe.route.id,De,Se.route.id]}}return{matches:oe,pendingActionResult:[Se.route.id,De]}}async function ro(j,q,Q,oe,de,ve,Ae,Te,we,De,Se,xe){let qe=ve||Bp(q,Ae),ut=Ae||Te||tb(qe),At=!I&&!De;if(de){if(At){let jt=Vn(xe);_t({navigation:qe,...jt!==void 0?{actionData:jt}:{}},{flushSync:Se})}let Ue=await Qr(Q,q.pathname,j.signal);if(Ue.type==="aborted")return{shortCircuited:!0};if(Ue.type==="error"){let jt=zs(Ue.partialMatches).route.id;return{matches:Ue.partialMatches,loaderData:{},errors:{[jt]:Ue.error}}}else if(Ue.matches)Q=Ue.matches;else{let{error:jt,notFoundMatches:xi,route:Bn}=Si(q.pathname);return{matches:xi,loaderData:{},errors:{[Bn.id]:jt}}}}let ft=d||c,{dsMatches:Be,revalidatingFetchers:dt}=H_(j,oe,s,l,t.history,z,Q,ut,q,De?[]:a,De===!0,He,We,he,re,P,ft,p,t.patchRoutesOnNavigation!=null,xe);if(ye=++pe,!t.dataStrategy&&!Be.some(Ue=>Ue.shouldLoad)&&dt.length===0){let Ue=Yr();return Bt(q,{matches:Q,loaderData:{},errors:xe&&hr(xe[1])?{[xe[0]]:xe[1].error}:null,...Z_(xe),...Ue?{fetchers:new Map(z.fetchers)}:{}},{flushSync:Se}),{shortCircuited:!0}}if(At){let Ue={};if(!de){Ue.navigation=qe;let jt=Vn(xe);jt!==void 0&&(Ue.actionData=jt)}dt.length>0&&(Ue.fetchers=Rl(dt)),_t(Ue,{flushSync:Se})}dt.forEach(Ue=>{mr(Ue.key),Ue.controller&&W.set(Ue.key,Ue.controller)});let $n=()=>dt.forEach(Ue=>mr(Ue.key));C&&C.signal.addEventListener("abort",$n);let{loaderResults:vn,fetcherResults:cn}=await sa(Be,dt,j,oe);if(j.signal.aborted)return{shortCircuited:!0};C&&C.signal.removeEventListener("abort",$n),dt.forEach(Ue=>W.delete(Ue.key));let Un=Fh(vn);if(Un)return await jr(j,Un.result,!0,{replace:we}),{shortCircuited:!0};if(Un=Fh(cn),Un)return P.add(Un.key),await jr(j,Un.result,!0,{replace:we}),{shortCircuited:!0};let{loaderData:ha,errors:er}=X_(z,Q,vn,xe,dt,cn);De&&z.errors&&(er={...z.errors,...er});let yr=Yr(),tr=Kr(ye),zn=yr||tr||dt.length>0;return{matches:Q,loaderData:ha,errors:er,...zn?{fetchers:new Map(z.fetchers)}:{}}}function Vn(j){if(j&&!hr(j[1]))return{[j[0]]:j[1].data};if(z.actionData)return Object.keys(z.actionData).length===0?null:z.actionData}function Rl(j){return j.forEach(q=>{let Q=z.fetchers.get(q.key),oe=Cu(void 0,Q?Q.data:void 0);z.fetchers.set(q.key,oe)}),new Map(z.fetchers)}async function hs(j,q,Q,oe){mr(j);let de=(oe&&oe.flushSync)===!0,ve=d||c,Ae=pg(z.location,z.matches,p,Q,q,oe?.relative),Te=za(ve,Ae,p),we=Ln(Te,ve,Ae);if(we.active&&we.matches&&(Te=we.matches),!Te){Ke(j,q,Ir(404,{pathname:Ae}),{flushSync:de});return}let{path:De,submission:Se,error:xe}=F_(!0,Ae,oe);if(xe){Ke(j,q,xe,{flushSync:de});return}let qe=new z_(t.unstable_getContext?await t.unstable_getContext():void 0),ut=(oe&&oe.preventScrollReset)===!0;if(Se&&Wn(Se.formMethod)){await aa(j,q,De,Te,qe,we.active,de,ut,Se);return}re.set(j,{routeId:q,path:De}),await Ti(j,q,De,Te,qe,we.active,de,ut,Se)}async function aa(j,q,Q,oe,de,ve,Ae,Te,we){oa(),re.delete(j);let De=z.fetchers.get(j);ht(j,ZR(we,De),{flushSync:Ae});let Se=new AbortController,xe=$o(t.history,Q,Se.signal,we);if(ve){let It=await Qr(oe,new URL(xe.url).pathname,xe.signal,j);if(It.type==="aborted")return;if(It.type==="error"){Ke(j,q,It.error,{flushSync:Ae});return}else if(It.matches)oe=It.matches;else{Ke(j,q,Ir(404,{pathname:Q}),{flushSync:Ae});return}}let qe=uf(oe,Q);if(!qe.route.action&&!qe.route.lazy){let It=Ir(405,{method:we.formMethod,pathname:Q,routeId:q});Ke(j,q,It,{flushSync:Ae});return}W.set(j,Se);let ut=pe,At=Zo(s,l,xe,oe,qe,a,de),Be=(await dr(xe,At,de,j))[qe.route.id];if(xe.signal.aborted){W.get(j)===Se&&W.delete(j);return}if(he.has(j)){if(Bs(Be)||hr(Be)){ht(j,La(void 0));return}}else{if(Bs(Be))if(W.delete(j),ye>ut){ht(j,La(void 0));return}else return P.add(j),ht(j,Cu(we)),jr(xe,Be,!1,{fetcherSubmission:we,preventScrollReset:Te});if(hr(Be)){Ke(j,q,Be.error);return}}let dt=z.navigation.location||z.location,$n=$o(t.history,dt,Se.signal),vn=d||c,cn=z.navigation.state!=="idle"?za(vn,z.navigation.location,p):z.matches;et(cn,"Didn't find any matches after fetcher action");let Un=++pe;Ne.set(j,Un);let ha=Cu(we,Be.data);z.fetchers.set(j,ha);let{dsMatches:er,revalidatingFetchers:yr}=H_($n,de,s,l,t.history,z,cn,we,dt,a,!1,He,We,he,re,P,vn,p,t.patchRoutesOnNavigation!=null,[qe.route.id,Be]);yr.filter(It=>It.key!==j).forEach(It=>{let Vr=It.key,fa=z.fetchers.get(Vr),da=Cu(void 0,fa?fa.data:void 0);z.fetchers.set(Vr,da),mr(Vr),It.controller&&W.set(Vr,It.controller)}),_t({fetchers:new Map(z.fetchers)});let tr=()=>yr.forEach(It=>mr(It.key));Se.signal.addEventListener("abort",tr);let{loaderResults:zn,fetcherResults:Ue}=await sa(er,yr,$n,de);if(Se.signal.aborted)return;if(Se.signal.removeEventListener("abort",tr),Ne.delete(j),W.delete(j),yr.forEach(It=>W.delete(It.key)),z.fetchers.has(j)){let It=La(Be.data);z.fetchers.set(j,It)}let jt=Fh(zn);if(jt)return jr($n,jt.result,!1,{preventScrollReset:Te});if(jt=Fh(Ue),jt)return P.add(jt.key),jr($n,jt.result,!1,{preventScrollReset:Te});let{loaderData:xi,errors:Bn}=X_(z,cn,zn,void 0,yr,Ue);Kr(Un),z.navigation.state==="loading"&&Un>ye?(et(N,"Expected pending action"),C&&C.abort(),Bt(z.navigation.location,{matches:cn,loaderData:xi,errors:Bn,fetchers:new Map(z.fetchers)})):(_t({errors:Bn,loaderData:W_(z.loaderData,xi,cn,Bn),fetchers:new Map(z.fetchers)}),He=!1)}async function Ti(j,q,Q,oe,de,ve,Ae,Te,we){let De=z.fetchers.get(j);ht(j,Cu(we,De?De.data:void 0),{flushSync:Ae});let Se=new AbortController,xe=$o(t.history,Q,Se.signal);if(ve){let dt=await Qr(oe,new URL(xe.url).pathname,xe.signal,j);if(dt.type==="aborted")return;if(dt.type==="error"){Ke(j,q,dt.error,{flushSync:Ae});return}else if(dt.matches)oe=dt.matches;else{Ke(j,q,Ir(404,{pathname:Q}),{flushSync:Ae});return}}let qe=uf(oe,Q);W.set(j,Se);let ut=pe,At=Zo(s,l,xe,oe,qe,a,de),Be=(await dr(xe,At,de,j))[qe.route.id];if(W.get(j)===Se&&W.delete(j),!xe.signal.aborted){if(he.has(j)){ht(j,La(void 0));return}if(Bs(Be))if(ye>ut){ht(j,La(void 0));return}else{P.add(j),await jr(xe,Be,!1,{preventScrollReset:Te});return}if(hr(Be)){Ke(j,q,Be.error);return}ht(j,La(Be.data))}}async function jr(j,q,Q,{submission:oe,fetcherSubmission:de,preventScrollReset:ve,replace:Ae}={}){q.response.headers.has("X-Remix-Revalidate")&&(He=!0);let Te=q.response.headers.get("Location");et(Te,"Expected a Location header on the redirect Response"),Te=K_(Te,new URL(j.url),p);let we=Qu(z.location,Te,{_isRedirect:!0});if(n){let At=!1;if(q.response.headers.has("X-Remix-Reload-Document"))At=!0;else if(oy(Te)){const ft=pT(Te,!0);At=ft.origin!==e.location.origin||Or(ft.pathname,p)==null}if(At){Ae?e.location.replace(Te):e.location.assign(Te);return}}C=null;let De=Ae===!0||q.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:Se,formAction:xe,formEncType:qe}=z.navigation;!oe&&!de&&Se&&xe&&qe&&(oe=tb(z.navigation));let ut=oe||de;if(MR.has(q.response.status)&&ut&&Wn(ut.formMethod))await kn(De,we,{submission:{...ut,formAction:Te},preventScrollReset:ve||R,enableViewTransition:Q?V:void 0});else{let At=Bp(we,oe);await kn(De,we,{overrideNavigation:At,fetcherSubmission:de,preventScrollReset:ve||R,enableViewTransition:Q?V:void 0})}}async function dr(j,q,Q,oe){let de,ve={};try{de=await HR(g,j,q,oe,Q,!1)}catch(Ae){return q.filter(Te=>Te.shouldLoad).forEach(Te=>{ve[Te.route.id]={type:"error",error:Ae}}),ve}if(j.signal.aborted)return ve;for(let[Ae,Te]of Object.entries(de))if(QR(Te)){let we=Te.result;ve[Ae]={type:"redirect",response:$R(we,j,Ae,q,p)}}else ve[Ae]=await GR(Te);return ve}async function sa(j,q,Q,oe){let de=dr(Q,j,oe,null),ve=Promise.all(q.map(async we=>{if(we.matches&&we.match&&we.request&&we.controller){let Se=(await dr(we.request,we.matches,oe,we.key))[we.match.route.id];return{[we.key]:Se}}else return Promise.resolve({[we.key]:{type:"error",error:Ir(404,{pathname:we.path})}})})),Ae=await de,Te=(await ve).reduce((we,De)=>Object.assign(we,De),{});return{loaderResults:Ae,fetcherResults:Te}}function oa(){He=!0,re.forEach((j,q)=>{W.has(q)&&We.add(q),mr(q)})}function ht(j,q,Q={}){z.fetchers.set(j,q),_t({fetchers:new Map(z.fetchers)},{flushSync:(Q&&Q.flushSync)===!0})}function Ke(j,q,Q,oe={}){let de=zs(z.matches,q);Yt(j),_t({errors:{[de.route.id]:Q},fetchers:new Map(z.fetchers)},{flushSync:(oe&&oe.flushSync)===!0})}function Rn(j){return me.set(j,(me.get(j)||0)+1),he.has(j)&&he.delete(j),z.fetchers.get(j)||PR}function Yt(j){let q=z.fetchers.get(j);W.has(j)&&!(q&&q.state==="loading"&&Ne.has(j))&&mr(j),re.delete(j),Ne.delete(j),P.delete(j),he.delete(j),We.delete(j),z.fetchers.delete(j)}function io(j){let q=(me.get(j)||0)-1;q<=0?(me.delete(j),he.add(j)):me.set(j,q),_t({fetchers:new Map(z.fetchers)})}function mr(j){let q=W.get(j);q&&(q.abort(),W.delete(j))}function $r(j){for(let q of j){let Q=Rn(q),oe=La(Q.data);z.fetchers.set(q,oe)}}function Yr(){let j=[],q=!1;for(let Q of P){let oe=z.fetchers.get(Q);et(oe,`Expected fetcher: ${Q}`),oe.state==="loading"&&(P.delete(Q),j.push(Q),q=!0)}return $r(j),q}function Kr(j){let q=[];for(let[Q,oe]of Ne)if(oe<j){let de=z.fetchers.get(Q);et(de,`Expected fetcher: ${Q}`),de.state==="loading"&&(mr(Q),Ne.delete(Q),q.push(Q))}return $r(q),q.length>0}function Jn(j,q){let Q=z.blockers.get(j)||Ru;return be.get(j)!==q&&be.set(j,q),Q}function wi(j){z.blockers.delete(j),be.delete(j)}function pr(j,q){let Q=z.blockers.get(j)||Ru;et(Q.state==="unblocked"&&q.state==="blocked"||Q.state==="blocked"&&q.state==="blocked"||Q.state==="blocked"&&q.state==="proceeding"||Q.state==="blocked"&&q.state==="unblocked"||Q.state==="proceeding"&&q.state==="unblocked",`Invalid blocker state transition: ${Q.state} -> ${q.state}`);let oe=new Map(z.blockers);oe.set(j,q),_t({blockers:oe})}function la({currentLocation:j,nextLocation:q,historyAction:Q}){if(be.size===0)return;be.size>1&&en(!1,"A router only supports one blocker at a time");let oe=Array.from(be.entries()),[de,ve]=oe[oe.length-1],Ae=z.blockers.get(de);if(!(Ae&&Ae.state==="proceeding")&&ve({currentLocation:j,nextLocation:q,historyAction:Q}))return de}function Si(j){let q=Ir(404,{pathname:j}),Q=d||c,{matches:oe,route:de}=J_(Q);return{notFoundMatches:oe,route:de,error:q}}function fs(j,q,Q){if(A=j,H=q,k=Q||null,!O&&z.navigation===zp){O=!0;let oe=ua(z.location,z.matches);oe!=null&&_t({restoreScrollPosition:oe})}return()=>{A=null,H=null,k=null}}function gr(j,q){return k&&k(j,q.map(oe=>cR(oe,z.loaderData)))||j.key}function kr(j,q){if(A&&H){let Q=gr(j,q);A[Q]=H()}}function ua(j,q){if(A){let Q=gr(j,q),oe=A[Q];if(typeof oe=="number")return oe}return null}function Ln(j,q,Q){if(t.patchRoutesOnNavigation)if(j){if(Object.keys(j[0].params).length>0)return{active:!0,matches:lf(q,Q,p,!0)}}else return{active:!0,matches:lf(q,Q,p,!0)||[]};return{active:!1,matches:null}}async function Qr(j,q,Q,oe){if(!t.patchRoutesOnNavigation)return{type:"success",matches:j};let de=j;for(;;){let ve=d==null,Ae=d||c,Te=l;try{await t.patchRoutesOnNavigation({signal:Q,path:q,matches:de,fetcherKey:oe,patch:(Se,xe)=>{Q.aborted||q_(Se,xe,Ae,Te,s,!1)}})}catch(Se){return{type:"error",error:Se,partialMatches:de}}finally{ve&&!Q.aborted&&(c=[...c])}if(Q.aborted)return{type:"aborted"};let we=za(Ae,q,p);if(we)return{type:"success",matches:we};let De=lf(Ae,q,p,!0);if(!De||de.length===De.length&&de.every((Se,xe)=>Se.route.id===De[xe].route.id))return{type:"success",matches:null};de=De}}function Xr(j){l={},d=Xu(j,s,void 0,l)}function ca(j,q,Q=!1){let oe=d==null;q_(j,q,d||c,l,s,Q),oe&&(c=[...c],_t({}))}return ue={get basename(){return p},get future(){return _},get state(){return z},get routes(){return c},get window(){return e},initialize:Dt,subscribe:$t,enableScrollRestoration:fs,navigate:nn,fetch:hs,revalidate:Ei,createHref:j=>t.history.createHref(j),encodeLocation:j=>t.history.encodeLocation(j),getFetcher:Rn,deleteFetcher:io,dispose:it,getBlocker:Jn,deleteBlocker:wi,patchRoutes:ca,_internalFetchControllers:W,_internalSetRoutes:Xr,_internalSetStateDoNotUseOrYouWillBreakYourApp(j){_t(j)}},ue}function LR(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function pg(t,e,n,a,s,l){let c,d;if(s){c=[];for(let g of e)if(c.push(g),g.route.id===s){d=g;break}}else c=e,d=e[e.length-1];let p=sy(a||".",ay(c),Or(t.pathname,n)||t.pathname,l==="path");if(a==null&&(p.search=t.search,p.hash=t.hash),(a==null||a===""||a===".")&&d){let g=ly(p.search);if(d.route.index&&!g)p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index";else if(!d.route.index&&g){let _=new URLSearchParams(p.search),w=_.getAll("index");_.delete("index"),w.filter(A=>A).forEach(A=>_.append("index",A));let T=_.toString();p.search=T?`?${T}`:""}}return n!=="/"&&(p.pathname=wR({basename:n,pathname:p.pathname})),Za(p)}function F_(t,e,n){if(!n||!LR(n))return{path:e};if(n.formMethod&&!XR(n.formMethod))return{path:e,error:Ir(405,{method:n.formMethod})};let a=()=>({path:e,error:Ir(400,{type:"invalid-body"})}),l=(n.formMethod||"get").toUpperCase(),c=RT(e);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!Wn(l))return a();let w=typeof n.body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((T,[A,k])=>`${T}${A}=${k}
`,""):String(n.body);return{path:e,submission:{formMethod:l,formAction:c,formEncType:n.formEncType,formData:void 0,json:void 0,text:w}}}else if(n.formEncType==="application/json"){if(!Wn(l))return a();try{let w=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:e,submission:{formMethod:l,formAction:c,formEncType:n.formEncType,formData:void 0,json:w,text:void 0}}}catch{return a()}}}et(typeof FormData=="function","FormData is not available in this environment");let d,p;if(n.formData)d=vg(n.formData),p=n.formData;else if(n.body instanceof FormData)d=vg(n.body),p=n.body;else if(n.body instanceof URLSearchParams)d=n.body,p=Q_(d);else if(n.body==null)d=new URLSearchParams,p=new FormData;else try{d=new URLSearchParams(n.body),p=Q_(d)}catch{return a()}let g={formMethod:l,formAction:c,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:p,json:void 0,text:void 0};if(Wn(g.formMethod))return{path:e,submission:g};let _=as(e);return t&&_.search&&ly(_.search)&&d.append("index",""),_.search=`?${d}`,{path:Za(_),submission:g}}function H_(t,e,n,a,s,l,c,d,p,g,_,w,T,A,k,H,O,$,ee,X){let ce=X?hr(X[1])?X[1].error:X[1].data:void 0,ue=s.createURL(l.location),z=s.createURL(p),N;if(_&&l.errors){let I=Object.keys(l.errors)[0];N=c.findIndex(He=>He.route.id===I)}else if(X&&hr(X[1])){let I=X[0];N=c.findIndex(He=>He.route.id===I)-1}let R=X?X[1].statusCode:void 0,C=R&&R>=400,V={currentUrl:ue,currentParams:l.matches[0]?.params||{},nextUrl:z,nextParams:c[0].params,...d,actionResult:ce,actionStatus:R},U=c.map((I,He)=>{let{route:We}=I,W=null;if(N!=null&&He>N?W=!1:We.lazy?W=!0:We.loader==null?W=!1:_?W=gg(We,l.loaderData,l.errors):UR(l.loaderData,l.matches[He],I)&&(W=!0),W!==null)return yg(n,a,t,I,g,e,W);let pe=C?!1:w||ue.pathname+ue.search===z.pathname+z.search||ue.search!==z.search||zR(l.matches[He],I),ye={...V,defaultShouldRevalidate:pe},Ne=If(I,ye);return yg(n,a,t,I,g,e,Ne,ye)}),B=[];return k.forEach((I,He)=>{if(_||!c.some(me=>me.route.id===I.routeId)||A.has(He))return;let We=l.fetchers.get(He),W=We&&We.state!=="idle"&&We.data===void 0,pe=za(O,I.path,$);if(!pe){if(ee&&W)return;B.push({key:He,routeId:I.routeId,path:I.path,matches:null,match:null,request:null,controller:null});return}if(H.has(He))return;let ye=uf(pe,I.path),Ne=new AbortController,P=$o(s,I.path,Ne.signal),re=null;if(T.has(He))T.delete(He),re=Zo(n,a,P,pe,ye,g,e);else if(W)w&&(re=Zo(n,a,P,pe,ye,g,e));else{let me={...V,defaultShouldRevalidate:C?!1:w};If(ye,me)&&(re=Zo(n,a,P,pe,ye,g,e,me))}re&&B.push({key:He,routeId:I.routeId,path:I.path,matches:re,match:ye,request:P,controller:Ne})}),{dsMatches:U,revalidatingFetchers:B}}function gg(t,e,n){if(t.lazy)return!0;if(!t.loader)return!1;let a=e!=null&&t.id in e,s=n!=null&&n[t.id]!==void 0;return!a&&s?!1:typeof t.loader=="function"&&t.loader.hydrate===!0?!0:!a&&!s}function UR(t,e,n){let a=!e||n.route.id!==e.route.id,s=!t.hasOwnProperty(n.route.id);return a||s}function zR(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function If(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}function q_(t,e,n,a,s,l){let c;if(t){let g=a[t];et(g,`No route found to patch children into: routeId = ${t}`),g.children||(g.children=[]),c=g.children}else c=n;let d=[],p=[];if(e.forEach(g=>{let _=c.find(w=>TT(g,w));_?p.push({existingRoute:_,newRoute:g}):d.push(g)}),d.length>0){let g=Xu(d,s,[t||"_","patch",String(c?.length||"0")],a);c.push(...g)}if(l&&p.length>0)for(let g=0;g<p.length;g++){let{existingRoute:_,newRoute:w}=p[g],T=_,[A]=Xu([w],s,[],{},!0);Object.assign(T,{element:A.element?A.element:T.element,errorElement:A.errorElement?A.errorElement:T.errorElement,hydrateFallbackElement:A.hydrateFallbackElement?A.hydrateFallbackElement:T.hydrateFallbackElement})}}function TT(t,e){return"id"in t&&"id"in e&&t.id===e.id?!0:t.index===e.index&&t.path===e.path&&t.caseSensitive===e.caseSensitive?(!t.children||t.children.length===0)&&(!e.children||e.children.length===0)?!0:t.children.every((n,a)=>e.children?.some(s=>TT(n,s))):!1}var G_=new WeakMap,wT=({key:t,route:e,manifest:n,mapRouteProperties:a})=>{let s=n[e.id];if(et(s,"No route found in manifest"),!s.lazy||typeof s.lazy!="object")return;let l=s.lazy[t];if(!l)return;let c=G_.get(s);c||(c={},G_.set(s,c));let d=c[t];if(d)return d;let p=(async()=>{let g=sR(t),w=s[t]!==void 0&&t!=="hasErrorBoundary";if(g)en(!g,"Route property "+t+" is not a supported lazy route property. This property will be ignored."),c[t]=Promise.resolve();else if(w)en(!1,`Route "${s.id}" has a static property "${t}" defined. The lazy property will be ignored.`);else{let T=await l();T!=null&&(Object.assign(s,{[t]:T}),Object.assign(s,a(s)))}typeof s.lazy=="object"&&(s.lazy[t]=void 0,Object.values(s.lazy).every(T=>T===void 0)&&(s.lazy=void 0))})();return c[t]=p,p},$_=new WeakMap;function BR(t,e,n,a,s){let l=n[t.id];if(et(l,"No route found in manifest"),!t.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof t.lazy=="function"){let _=$_.get(l);if(_)return{lazyRoutePromise:_,lazyHandlerPromise:_};let w=(async()=>{et(typeof t.lazy=="function","No lazy route function found");let T=await t.lazy(),A={};for(let k in T){let H=T[k];if(H===void 0)continue;let O=lR(k),ee=l[k]!==void 0&&k!=="hasErrorBoundary";O?en(!O,"Route property "+k+" is not a supported property to be returned from a lazy route function. This property will be ignored."):ee?en(!ee,`Route "${l.id}" has a static property "${k}" defined but its lazy function is also returning a value for this property. The lazy route property "${k}" will be ignored.`):A[k]=H}Object.assign(l,A),Object.assign(l,{...a(l),lazy:void 0})})();return $_.set(l,w),w.catch(()=>{}),{lazyRoutePromise:w,lazyHandlerPromise:w}}let c=Object.keys(t.lazy),d=[],p;for(let _ of c){if(s&&s.includes(_))continue;let w=wT({key:_,route:t,manifest:n,mapRouteProperties:a});w&&(d.push(w),_===e&&(p=w))}let g=d.length>0?Promise.all(d).then(()=>{}):void 0;return g?.catch(()=>{}),p?.catch(()=>{}),{lazyRoutePromise:g,lazyHandlerPromise:p}}async function Y_(t){let e=t.matches.filter(s=>s.shouldLoad),n={};return(await Promise.all(e.map(s=>s.resolve()))).forEach((s,l)=>{n[e[l].route.id]=s}),n}async function FR(t){return t.matches.some(e=>e.route.unstable_middleware)?ST(t,!1,()=>Y_(t),(e,n)=>({[n]:{type:"error",result:e}})):Y_(t)}async function ST(t,e,n,a){let{matches:s,request:l,params:c,context:d}=t,p={handlerResult:void 0};try{let g=s.flatMap(w=>w.route.unstable_middleware?w.route.unstable_middleware.map(T=>[w.route.id,T]):[]),_=await xT({request:l,params:c,context:d},g,e,p,n);return e?_:p.handlerResult}catch(g){if(!p.middlewareError)throw g;let _=await a(p.middlewareError.error,p.middlewareError.routeId);return p.handlerResult?Object.assign(p.handlerResult,_):_}}async function xT(t,e,n,a,s,l=0){let{request:c}=t;if(c.signal.aborted)throw c.signal.reason?c.signal.reason:new Error(`Request aborted without an \`AbortSignal.reason\`: ${c.method} ${c.url}`);let d=e[l];if(!d)return a.handlerResult=await s(),a.handlerResult;let[p,g]=d,_=!1,w,T=async()=>{if(_)throw new Error("You may only call `next()` once per middleware");_=!0,await xT(t,e,n,a,s,l+1)};try{let A=await g({request:t.request,params:t.params,context:t.context},T);return _?A===void 0?w:A:T()}catch(A){throw a.middlewareError?a.middlewareError.error!==A&&(a.middlewareError={routeId:p,error:A}):a.middlewareError={routeId:p,error:A},A}}function AT(t,e,n,a,s){let l=wT({key:"unstable_middleware",route:a.route,manifest:e,mapRouteProperties:t}),c=BR(a.route,Wn(n.method)?"action":"loader",e,t,s);return{middleware:l,route:c.lazyRoutePromise,handler:c.lazyHandlerPromise}}function yg(t,e,n,a,s,l,c,d=null){let p=!1,g=AT(t,e,n,a,s);return{...a,_lazyPromises:g,shouldLoad:c,unstable_shouldRevalidateArgs:d,unstable_shouldCallHandler(_){return p=!0,d?typeof _=="boolean"?If(a,{...d,defaultShouldRevalidate:_}):If(a,d):c},resolve(_){return p||c||_&&!Wn(n.method)&&(a.route.lazy||a.route.loader)?qR({request:n,match:a,lazyHandlerPromise:g?.handler,lazyRoutePromise:g?.route,handlerOverride:_,scopedContext:l}):Promise.resolve({type:"data",result:void 0})}}}function Zo(t,e,n,a,s,l,c,d=null){return a.map(p=>p.route.id!==s.route.id?{...p,shouldLoad:!1,unstable_shouldRevalidateArgs:d,unstable_shouldCallHandler:()=>!1,_lazyPromises:AT(t,e,n,p,l),resolve:()=>Promise.resolve({type:"data",result:void 0})}:yg(t,e,n,p,l,c,!0,d))}async function HR(t,e,n,a,s,l){n.some(g=>g._lazyPromises?.middleware)&&await Promise.all(n.map(g=>g._lazyPromises?.middleware));let c={request:e,params:n[0].params,context:s,matches:n},p=await t({...c,fetcherKey:a,unstable_runClientMiddleware:g=>{let _=c;return ST(_,!1,()=>g({..._,fetcherKey:a,unstable_runClientMiddleware:()=>{throw new Error("Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler")}}),(w,T)=>({[T]:{type:"error",result:w}}))}});try{await Promise.all(n.flatMap(g=>[g._lazyPromises?.handler,g._lazyPromises?.route]))}catch{}return p}async function qR({request:t,match:e,lazyHandlerPromise:n,lazyRoutePromise:a,handlerOverride:s,scopedContext:l}){let c,d,p=Wn(t.method),g=p?"action":"loader",_=w=>{let T,A=new Promise((O,$)=>T=$);d=()=>T(),t.signal.addEventListener("abort",d);let k=O=>typeof w!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${g}" [routeId: ${e.route.id}]`)):w({request:t,params:e.params,context:l},...O!==void 0?[O]:[]),H=(async()=>{try{return{type:"data",result:await(s?s($=>k($)):k())}}catch(O){return{type:"error",result:O}}})();return Promise.race([H,A])};try{let w=p?e.route.action:e.route.loader;if(n||a)if(w){let T,[A]=await Promise.all([_(w).catch(k=>{T=k}),n,a]);if(T!==void 0)throw T;c=A}else{await n;let T=p?e.route.action:e.route.loader;if(T)[c]=await Promise.all([_(T),a]);else if(g==="action"){let A=new URL(t.url),k=A.pathname+A.search;throw Ir(405,{method:t.method,pathname:k,routeId:e.route.id})}else return{type:"data",result:void 0}}else if(w)c=await _(w);else{let T=new URL(t.url),A=T.pathname+T.search;throw Ir(404,{pathname:A})}}catch(w){return{type:"error",result:w}}finally{d&&t.signal.removeEventListener("abort",d)}return c}async function GR(t){let{result:e,type:n}=t;if(CT(e)){let a;try{let s=e.headers.get("Content-Type");s&&/\bapplication\/json\b/.test(s)?e.body==null?a=null:a=await e.json():a=await e.text()}catch(s){return{type:"error",error:s}}return n==="error"?{type:"error",error:new Cf(e.status,e.statusText,a),statusCode:e.status,headers:e.headers}:{type:"data",data:a,statusCode:e.status,headers:e.headers}}return n==="error"?eb(e)?e.data instanceof Error?{type:"error",error:e.data,statusCode:e.init?.status,headers:e.init?.headers?new Headers(e.init.headers):void 0}:{type:"error",error:new Cf(e.init?.status||500,void 0,e.data),statusCode:sl(e)?e.status:void 0,headers:e.init?.headers?new Headers(e.init.headers):void 0}:{type:"error",error:e,statusCode:sl(e)?e.status:void 0}:eb(e)?{type:"data",data:e.data,statusCode:e.init?.status,headers:e.init?.headers?new Headers(e.init.headers):void 0}:{type:"data",data:e}}function $R(t,e,n,a,s){let l=t.headers.get("Location");if(et(l,"Redirects returned/thrown from loaders/actions must have a Location header"),!oy(l)){let c=a.slice(0,a.findIndex(d=>d.route.id===n)+1);l=pg(new URL(e.url),c,s,l),t.headers.set("Location",l)}return t}function K_(t,e,n){if(oy(t)){let a=t,s=a.startsWith("//")?new URL(e.protocol+a):new URL(a),l=Or(s.pathname,n)!=null;if(s.origin===e.origin&&l)return s.pathname+s.search+s.hash}return t}function $o(t,e,n,a){let s=t.createURL(RT(e)).toString(),l={signal:n};if(a&&Wn(a.formMethod)){let{formMethod:c,formEncType:d}=a;l.method=c.toUpperCase(),d==="application/json"?(l.headers=new Headers({"Content-Type":d}),l.body=JSON.stringify(a.json)):d==="text/plain"?l.body=a.text:d==="application/x-www-form-urlencoded"&&a.formData?l.body=vg(a.formData):l.body=a.formData}return new Request(s,l)}function vg(t){let e=new URLSearchParams;for(let[n,a]of t.entries())e.append(n,typeof a=="string"?a:a.name);return e}function Q_(t){let e=new FormData;for(let[n,a]of t.entries())e.append(n,a);return e}function YR(t,e,n,a=!1,s=!1){let l={},c=null,d,p=!1,g={},_=n&&hr(n[1])?n[1].error:void 0;return t.forEach(w=>{if(!(w.route.id in e))return;let T=w.route.id,A=e[T];if(et(!Bs(A),"Cannot handle redirect results in processLoaderData"),hr(A)){let k=A.error;if(_!==void 0&&(k=_,_=void 0),c=c||{},s)c[T]=k;else{let H=zs(t,T);c[H.route.id]==null&&(c[H.route.id]=k)}a||(l[T]=ET),p||(p=!0,d=sl(A.error)?A.error.status:500),A.headers&&(g[T]=A.headers)}else l[T]=A.data,A.statusCode&&A.statusCode!==200&&!p&&(d=A.statusCode),A.headers&&(g[T]=A.headers)}),_!==void 0&&n&&(c={[n[0]]:_},n[2]&&(l[n[2]]=void 0)),{loaderData:l,errors:c,statusCode:d||200,loaderHeaders:g}}function X_(t,e,n,a,s,l){let{loaderData:c,errors:d}=YR(e,n,a);return s.filter(p=>!p.matches||p.matches.some(g=>g.shouldLoad)).forEach(p=>{let{key:g,match:_,controller:w}=p,T=l[g];if(et(T,"Did not find corresponding fetcher result"),!(w&&w.signal.aborted))if(hr(T)){let A=zs(t.matches,_?.route.id);d&&d[A.route.id]||(d={...d,[A.route.id]:T.error}),t.fetchers.delete(g)}else if(Bs(T))et(!1,"Unhandled fetcher revalidation redirect");else{let A=La(T.data);t.fetchers.set(g,A)}}),{loaderData:c,errors:d}}function W_(t,e,n,a){let s=Object.entries(e).filter(([,l])=>l!==ET).reduce((l,[c,d])=>(l[c]=d,l),{});for(let l of n){let c=l.route.id;if(!e.hasOwnProperty(c)&&t.hasOwnProperty(c)&&l.route.loader&&(s[c]=t[c]),a&&a.hasOwnProperty(c))break}return s}function Z_(t){return t?hr(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function zs(t,e){return(e?t.slice(0,t.findIndex(a=>a.route.id===e)+1):[...t]).reverse().find(a=>a.route.hasErrorBoundary===!0)||t[0]}function J_(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Ir(t,{pathname:e,routeId:n,method:a,type:s,message:l}={}){let c="Unknown Server Error",d="Unknown @remix-run/router error";return t===400?(c="Bad Request",a&&e&&n?d=`You made a ${a} request to "${e}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.`:s==="invalid-body"&&(d="Unable to encode submission body")):t===403?(c="Forbidden",d=`Route "${n}" does not match URL "${e}"`):t===404?(c="Not Found",d=`No route matches URL "${e}"`):t===405&&(c="Method Not Allowed",a&&e&&n?d=`You made a ${a.toUpperCase()} request to "${e}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.`:a&&(d=`Invalid request method "${a.toUpperCase()}"`)),new Cf(t||500,c,new Error(d),!0)}function Fh(t){let e=Object.entries(t);for(let n=e.length-1;n>=0;n--){let[a,s]=e[n];if(Bs(s))return{key:a,result:s}}}function RT(t){let e=typeof t=="string"?as(t):t;return Za({...e,hash:""})}function KR(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function QR(t){return CT(t.result)&&OR.has(t.result.status)}function hr(t){return t.type==="error"}function Bs(t){return(t&&t.type)==="redirect"}function eb(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function CT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function XR(t){return DR.has(t.toUpperCase())}function Wn(t){return IR.has(t.toUpperCase())}function ly(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function uf(t,e){let n=typeof e=="string"?as(e).search:e.search;if(t[t.length-1].route.index&&ly(n||""))return t[t.length-1];let a=vT(t);return a[a.length-1]}function tb(t){let{formMethod:e,formAction:n,formEncType:a,text:s,formData:l,json:c}=t;if(!(!e||!n||!a)){if(s!=null)return{formMethod:e,formAction:n,formEncType:a,formData:void 0,json:void 0,text:s};if(l!=null)return{formMethod:e,formAction:n,formEncType:a,formData:l,json:void 0,text:void 0};if(c!==void 0)return{formMethod:e,formAction:n,formEncType:a,formData:void 0,json:c,text:void 0}}}function Bp(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function WR(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Cu(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function ZR(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function La(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function JR(t,e){try{let n=t.sessionStorage.getItem(bT);if(n){let a=JSON.parse(n);for(let[s,l]of Object.entries(a||{}))l&&Array.isArray(l)&&e.set(s,new Set(l||[]))}}catch{}}function e4(t,e){if(e.size>0){let n={};for(let[a,s]of e)n[a]=[...s];try{t.sessionStorage.setItem(bT,JSON.stringify(n))}catch(a){en(!1,`Failed to save applied view transitions in sessionStorage (${a}).`)}}}function t4(){let t,e,n=new Promise((a,s)=>{t=async l=>{a(l);try{await n}catch{}},e=async l=>{s(l);try{await n}catch{}}});return{promise:n,resolve:t,reject:e}}var Zs=D.createContext(null);Zs.displayName="DataRouter";var lc=D.createContext(null);lc.displayName="DataRouterState";D.createContext(!1);var uy=D.createContext({isTransitioning:!1});uy.displayName="ViewTransition";var IT=D.createContext(new Map);IT.displayName="Fetchers";var n4=D.createContext(null);n4.displayName="Await";var _i=D.createContext(null);_i.displayName="Navigation";var sd=D.createContext(null);sd.displayName="Location";var bi=D.createContext({outlet:null,matches:[],isDataRoute:!1});bi.displayName="Route";var cy=D.createContext(null);cy.displayName="RouteError";function r4(t,{relative:e}={}){et(uc(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=D.useContext(_i),{hash:s,pathname:l,search:c}=hc(t,{relative:e}),d=l;return n!=="/"&&(d=l==="/"?n:hi([n,l])),a.createHref({pathname:d,search:c,hash:s})}function uc(){return D.useContext(sd)!=null}function ss(){return et(uc(),"useLocation() may be used only in the context of a <Router> component."),D.useContext(sd).location}var NT="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function DT(t){D.useContext(_i).static||D.useLayoutEffect(t)}function cc(){let{isDataRoute:t}=D.useContext(bi);return t?y4():i4()}function i4(){et(uc(),"useNavigate() may be used only in the context of a <Router> component.");let t=D.useContext(Zs),{basename:e,navigator:n}=D.useContext(_i),{matches:a}=D.useContext(bi),{pathname:s}=ss(),l=JSON.stringify(ay(a)),c=D.useRef(!1);return DT(()=>{c.current=!0}),D.useCallback((p,g={})=>{if(en(c.current,NT),!c.current)return;if(typeof p=="number"){n.go(p);return}let _=sy(p,JSON.parse(l),s,g.relative==="path");t==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:hi([e,_.pathname])),(g.replace?n.replace:n.push)(_,g.state,g)},[e,n,l,s,t])}var a4=D.createContext(null);function s4(t){let e=D.useContext(bi).outlet;return e&&D.createElement(a4.Provider,{value:t},e)}function hc(t,{relative:e}={}){let{matches:n}=D.useContext(bi),{pathname:a}=ss(),s=JSON.stringify(ay(n));return D.useMemo(()=>sy(t,JSON.parse(s),a,e==="path"),[t,s,a,e])}function o4(t,e,n,a){et(uc(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=D.useContext(_i),{matches:l}=D.useContext(bi),c=l[l.length-1],d=c?c.params:{},p=c?c.pathname:"/",g=c?c.pathnameBase:"/",_=c&&c.route;{let $=_&&_.path||"";PT(p,!_||$.endsWith("*")||$.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${$}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${$}"> to <Route path="${$==="/"?"*":`${$}/*`}">.`)}let w=ss(),T;T=w;let A=T.pathname||"/",k=A;if(g!=="/"){let $=g.replace(/^\//,"").split("/");k="/"+A.replace(/^\//,"").split("/").slice($.length).join("/")}let H=za(t,{pathname:k});return en(_||H!=null,`No routes matched location "${T.pathname}${T.search}${T.hash}" `),en(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),f4(H&&H.map($=>Object.assign({},$,{params:Object.assign({},d,$.params),pathname:hi([g,s.encodeLocation?s.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?g:hi([g,s.encodeLocation?s.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),l,n,a)}function l4(){let t=MT(),e=sl(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,a="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:a},l={padding:"2px 4px",backgroundColor:a},c=null;return console.error("Error handled by React Router default ErrorBoundary:",t),c=D.createElement(D.Fragment,null,D.createElement("p",null,"💿 Hey developer 👋"),D.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",D.createElement("code",{style:l},"ErrorBoundary")," or"," ",D.createElement("code",{style:l},"errorElement")," prop on your route.")),D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:s},n):null,c)}var u4=D.createElement(l4,null),c4=class extends D.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?D.createElement(bi.Provider,{value:this.props.routeContext},D.createElement(cy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function h4({routeContext:t,match:e,children:n}){let a=D.useContext(Zs);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),D.createElement(bi.Provider,{value:t},n)}function f4(t,e=[],n=null,a=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,l=n?.errors;if(l!=null){let p=s.findIndex(g=>g.route.id&&l?.[g.route.id]!==void 0);et(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),s=s.slice(0,Math.min(s.length,p+1))}let c=!1,d=-1;if(n)for(let p=0;p<s.length;p++){let g=s[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=p),g.route.id){let{loaderData:_,errors:w}=n,T=g.route.loader&&!_.hasOwnProperty(g.route.id)&&(!w||w[g.route.id]===void 0);if(g.route.lazy||T){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((p,g,_)=>{let w,T=!1,A=null,k=null;n&&(w=l&&g.route.id?l[g.route.id]:void 0,A=g.route.errorElement||u4,c&&(d<0&&_===0?(PT("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,k=null):d===_&&(T=!0,k=g.route.hydrateFallbackElement||null)));let H=e.concat(s.slice(0,_+1)),O=()=>{let $;return w?$=A:T?$=k:g.route.Component?$=D.createElement(g.route.Component,null):g.route.element?$=g.route.element:$=p,D.createElement(h4,{match:g,routeContext:{outlet:p,matches:H,isDataRoute:n!=null},children:$})};return n&&(g.route.ErrorBoundary||g.route.errorElement||_===0)?D.createElement(c4,{location:n.location,revalidation:n.revalidation,component:A,error:w,children:O(),routeContext:{outlet:null,matches:H,isDataRoute:!0}}):O()},null)}function hy(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function d4(t){let e=D.useContext(Zs);return et(e,hy(t)),e}function OT(t){let e=D.useContext(lc);return et(e,hy(t)),e}function m4(t){let e=D.useContext(bi);return et(e,hy(t)),e}function od(t){let e=m4(t),n=e.matches[e.matches.length-1];return et(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function p4(){return od("useRouteId")}function g4(){let t=OT("useLoaderData"),e=od("useLoaderData");return t.loaderData[e]}function MT(){let t=D.useContext(cy),e=OT("useRouteError"),n=od("useRouteError");return t!==void 0?t:e.errors?.[n]}function y4(){let{router:t}=d4("useNavigate"),e=od("useNavigate"),n=D.useRef(!1);return DT(()=>{n.current=!0}),D.useCallback(async(s,l={})=>{en(n.current,NT),n.current&&(typeof s=="number"?t.navigate(s):await t.navigate(s,{fromRouteId:e,...l}))},[t,e])}var nb={};function PT(t,e,n){!e&&!nb[t]&&(nb[t]=!0,en(!1,n))}var rb={};function ib(t,e){!t&&!rb[e]&&(rb[e]=!0,console.warn(e))}function v4(t){let e={hasErrorBoundary:t.hasErrorBoundary||t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&(t.element&&en(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(e,{element:D.createElement(t.Component),Component:void 0})),t.HydrateFallback&&(t.hydrateFallbackElement&&en(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(e,{hydrateFallbackElement:D.createElement(t.HydrateFallback),HydrateFallback:void 0})),t.ErrorBoundary&&(t.errorElement&&en(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(e,{errorElement:D.createElement(t.ErrorBoundary),ErrorBoundary:void 0})),e}var _4=["HydrateFallback","hydrateFallbackElement"],b4=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=a=>{this.status==="pending"&&(this.status="resolved",e(a))},this.reject=a=>{this.status==="pending"&&(this.status="rejected",n(a))}})}};function E4({router:t,flushSync:e}){let[n,a]=D.useState(t.state),[s,l]=D.useState(),[c,d]=D.useState({isTransitioning:!1}),[p,g]=D.useState(),[_,w]=D.useState(),[T,A]=D.useState(),k=D.useRef(new Map),H=D.useCallback((X,{deletedFetchers:ce,flushSync:ue,viewTransitionOpts:z})=>{X.fetchers.forEach((R,C)=>{R.data!==void 0&&k.current.set(C,R.data)}),ce.forEach(R=>k.current.delete(R)),ib(ue===!1||e!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let N=t.window!=null&&t.window.document!=null&&typeof t.window.document.startViewTransition=="function";if(ib(z==null||N,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!z||!N){e&&ue?e(()=>a(X)):D.startTransition(()=>a(X));return}if(e&&ue){e(()=>{_&&(p&&p.resolve(),_.skipTransition()),d({isTransitioning:!0,flushSync:!0,currentLocation:z.currentLocation,nextLocation:z.nextLocation})});let R=t.window.document.startViewTransition(()=>{e(()=>a(X))});R.finished.finally(()=>{e(()=>{g(void 0),w(void 0),l(void 0),d({isTransitioning:!1})})}),e(()=>w(R));return}_?(p&&p.resolve(),_.skipTransition(),A({state:X,currentLocation:z.currentLocation,nextLocation:z.nextLocation})):(l(X),d({isTransitioning:!0,flushSync:!1,currentLocation:z.currentLocation,nextLocation:z.nextLocation}))},[t.window,e,_,p]);D.useLayoutEffect(()=>t.subscribe(H),[t,H]),D.useEffect(()=>{c.isTransitioning&&!c.flushSync&&g(new b4)},[c]),D.useEffect(()=>{if(p&&s&&t.window){let X=s,ce=p.promise,ue=t.window.document.startViewTransition(async()=>{D.startTransition(()=>a(X)),await ce});ue.finished.finally(()=>{g(void 0),w(void 0),l(void 0),d({isTransitioning:!1})}),w(ue)}},[s,p,t.window]),D.useEffect(()=>{p&&s&&n.location.key===s.location.key&&p.resolve()},[p,_,n.location,s]),D.useEffect(()=>{!c.isTransitioning&&T&&(l(T.state),d({isTransitioning:!0,flushSync:!1,currentLocation:T.currentLocation,nextLocation:T.nextLocation}),A(void 0))},[c.isTransitioning,T]);let O=D.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:X=>t.navigate(X),push:(X,ce,ue)=>t.navigate(X,{state:ce,preventScrollReset:ue?.preventScrollReset}),replace:(X,ce,ue)=>t.navigate(X,{replace:!0,state:ce,preventScrollReset:ue?.preventScrollReset})}),[t]),$=t.basename||"/",ee=D.useMemo(()=>({router:t,navigator:O,static:!1,basename:$}),[t,O,$]);return D.createElement(D.Fragment,null,D.createElement(Zs.Provider,{value:ee},D.createElement(lc.Provider,{value:n},D.createElement(IT.Provider,{value:k.current},D.createElement(uy.Provider,{value:c},D.createElement(x4,{basename:$,location:n.location,navigationType:n.historyAction,navigator:O},D.createElement(T4,{routes:t.routes,future:t.future,state:n})))))),null)}var T4=D.memo(w4);function w4({routes:t,future:e,state:n}){return o4(t,void 0,n,e)}function S4(t){return s4(t.context)}function x4({basename:t="/",children:e=null,location:n,navigationType:a="POP",navigator:s,static:l=!1}){et(!uc(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=t.replace(/^\/*/,"/"),d=D.useMemo(()=>({basename:c,navigator:s,static:l,future:{}}),[c,s,l]);typeof n=="string"&&(n=as(n));let{pathname:p="/",search:g="",hash:_="",state:w=null,key:T="default"}=n,A=D.useMemo(()=>{let k=Or(p,c);return k==null?null:{location:{pathname:k,search:g,hash:_,state:w,key:T},navigationType:a}},[c,p,g,_,w,T,a]);return en(A!=null,`<Router basename="${c}"> is not able to match the URL "${p}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:D.createElement(_i.Provider,{value:d},D.createElement(sd.Provider,{children:e,value:A}))}var cf="get",hf="application/x-www-form-urlencoded";function ld(t){return t!=null&&typeof t.tagName=="string"}function A4(t){return ld(t)&&t.tagName.toLowerCase()==="button"}function R4(t){return ld(t)&&t.tagName.toLowerCase()==="form"}function C4(t){return ld(t)&&t.tagName.toLowerCase()==="input"}function I4(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function N4(t,e){return t.button===0&&(!e||e==="_self")&&!I4(t)}var Hh=null;function D4(){if(Hh===null)try{new FormData(document.createElement("form"),0),Hh=!1}catch{Hh=!0}return Hh}var O4=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Fp(t){return t!=null&&!O4.has(t)?(en(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${hf}"`),null):t}function M4(t,e){let n,a,s,l,c;if(R4(t)){let d=t.getAttribute("action");a=d?Or(d,e):null,n=t.getAttribute("method")||cf,s=Fp(t.getAttribute("enctype"))||hf,l=new FormData(t)}else if(A4(t)||C4(t)&&(t.type==="submit"||t.type==="image")){let d=t.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=t.getAttribute("formaction")||d.getAttribute("action");if(a=p?Or(p,e):null,n=t.getAttribute("formmethod")||d.getAttribute("method")||cf,s=Fp(t.getAttribute("formenctype"))||Fp(d.getAttribute("enctype"))||hf,l=new FormData(d,t),!D4()){let{name:g,type:_,value:w}=t;if(_==="image"){let T=g?`${g}.`:"";l.append(`${T}x`,"0"),l.append(`${T}y`,"0")}else g&&l.append(g,w)}}else{if(ld(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=cf,a=null,s=hf,c=t}return l&&s==="text/plain"&&(c=l,l=void 0),{action:a,method:n.toLowerCase(),encType:s,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function fy(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function P4(t,e,n){let a=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return a.pathname==="/"?a.pathname=`_root.${n}`:e&&Or(a.pathname,e)==="/"?a.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${n}`,a}async function j4(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function k4(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function V4(t,e,n){let a=await Promise.all(t.map(async s=>{let l=e.routes[s.route.id];if(l){let c=await j4(l,n);return c.links?c.links():[]}return[]}));return B4(a.flat(1).filter(k4).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function ab(t,e,n,a,s,l){let c=(p,g)=>n[g]?p.route.id!==n[g].route.id:!0,d=(p,g)=>n[g].pathname!==p.pathname||n[g].route.path?.endsWith("*")&&n[g].params["*"]!==p.params["*"];return l==="assets"?e.filter((p,g)=>c(p,g)||d(p,g)):l==="data"?e.filter((p,g)=>{let _=a.routes[p.route.id];if(!_||!_.hasLoader)return!1;if(c(p,g)||d(p,g))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(t,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function L4(t,e,{includeHydrateFallback:n}={}){return U4(t.map(a=>{let s=e.routes[a.route.id];if(!s)return[];let l=[s.module];return s.clientActionModule&&(l=l.concat(s.clientActionModule)),s.clientLoaderModule&&(l=l.concat(s.clientLoaderModule)),n&&s.hydrateFallbackModule&&(l=l.concat(s.hydrateFallbackModule)),s.imports&&(l=l.concat(s.imports)),l}).flat(1))}function U4(t){return[...new Set(t)]}function z4(t){let e={},n=Object.keys(t).sort();for(let a of n)e[a]=t[a];return e}function B4(t,e){let n=new Set;return new Set(e),t.reduce((a,s)=>{let l=JSON.stringify(z4(s));return n.has(l)||(n.add(l),a.push({key:l,link:s})),a},[])}function jT(){let t=D.useContext(Zs);return fy(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function F4(){let t=D.useContext(lc);return fy(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var dy=D.createContext(void 0);dy.displayName="FrameworkContext";function kT(){let t=D.useContext(dy);return fy(t,"You must render this element inside a <HydratedRouter> element"),t}function H4(t,e){let n=D.useContext(dy),[a,s]=D.useState(!1),[l,c]=D.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:g,onMouseLeave:_,onTouchStart:w}=e,T=D.useRef(null);D.useEffect(()=>{if(t==="render"&&c(!0),t==="viewport"){let H=$=>{$.forEach(ee=>{c(ee.isIntersecting)})},O=new IntersectionObserver(H,{threshold:.5});return T.current&&O.observe(T.current),()=>{O.disconnect()}}},[t]),D.useEffect(()=>{if(a){let H=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(H)}}},[a]);let A=()=>{s(!0)},k=()=>{s(!1),c(!1)};return n?t!=="intent"?[l,T,{}]:[l,T,{onFocus:Iu(d,A),onBlur:Iu(p,k),onMouseEnter:Iu(g,A),onMouseLeave:Iu(_,k),onTouchStart:Iu(w,A)}]:[!1,T,{}]}function Iu(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function q4({page:t,...e}){let{router:n}=jT(),a=D.useMemo(()=>za(n.routes,t,n.basename),[n.routes,t,n.basename]);return a?D.createElement($4,{page:t,matches:a,...e}):null}function G4(t){let{manifest:e,routeModules:n}=kT(),[a,s]=D.useState([]);return D.useEffect(()=>{let l=!1;return V4(t,e,n).then(c=>{l||s(c)}),()=>{l=!0}},[t,e,n]),a}function $4({page:t,matches:e,...n}){let a=ss(),{manifest:s,routeModules:l}=kT(),{basename:c}=jT(),{loaderData:d,matches:p}=F4(),g=D.useMemo(()=>ab(t,e,p,s,a,"data"),[t,e,p,s,a]),_=D.useMemo(()=>ab(t,e,p,s,a,"assets"),[t,e,p,s,a]),w=D.useMemo(()=>{if(t===a.pathname+a.search+a.hash)return[];let k=new Set,H=!1;if(e.forEach($=>{let ee=s.routes[$.route.id];!ee||!ee.hasLoader||(!g.some(X=>X.route.id===$.route.id)&&$.route.id in d&&l[$.route.id]?.shouldRevalidate||ee.hasClientLoader?H=!0:k.add($.route.id))}),k.size===0)return[];let O=P4(t,c,"data");return H&&k.size>0&&O.searchParams.set("_routes",e.filter($=>k.has($.route.id)).map($=>$.route.id).join(",")),[O.pathname+O.search]},[c,d,a,s,g,e,t,l]),T=D.useMemo(()=>L4(_,s),[_,s]),A=G4(_);return D.createElement(D.Fragment,null,w.map(k=>D.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...n})),T.map(k=>D.createElement("link",{key:k,rel:"modulepreload",href:k,...n})),A.map(({key:k,link:H})=>D.createElement("link",{key:k,...H})))}function Y4(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var VT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{VT&&(window.__reactRouterVersion="7.7.0")}catch{}function K4(t,e){return VR({basename:e?.basename,unstable_getContext:e?.unstable_getContext,future:e?.future,history:nR({window:e?.window}),hydrationData:Q4(),routes:t,mapRouteProperties:v4,hydrationRouteProperties:_4,dataStrategy:e?.dataStrategy,patchRoutesOnNavigation:e?.patchRoutesOnNavigation,window:e?.window}).initialize()}function Q4(){let t=window?.__staticRouterHydrationData;return t&&t.errors&&(t={...t,errors:X4(t.errors)}),t}function X4(t){if(!t)return null;let e=Object.entries(t),n={};for(let[a,s]of e)if(s&&s.__type==="RouteErrorResponse")n[a]=new Cf(s.status,s.statusText,s.data,s.internal===!0);else if(s&&s.__type==="Error"){if(s.__subType){let l=window[s.__subType];if(typeof l=="function")try{let c=new l(s.message);c.stack="",n[a]=c}catch{}}if(n[a]==null){let l=new Error(s.message);l.stack="",n[a]=l}}else n[a]=s;return n}var LT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ud=D.forwardRef(function({onClick:e,discover:n="render",prefetch:a="none",relative:s,reloadDocument:l,replace:c,state:d,target:p,to:g,preventScrollReset:_,viewTransition:w,...T},A){let{basename:k}=D.useContext(_i),H=typeof g=="string"&&LT.test(g),O,$=!1;if(typeof g=="string"&&H&&(O=g,VT))try{let C=new URL(window.location.href),V=g.startsWith("//")?new URL(C.protocol+g):new URL(g),U=Or(V.pathname,k);V.origin===C.origin&&U!=null?g=U+V.search+V.hash:$=!0}catch{en(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ee=r4(g,{relative:s}),[X,ce,ue]=H4(a,T),z=J4(g,{replace:c,state:d,target:p,preventScrollReset:_,relative:s,viewTransition:w});function N(C){e&&e(C),C.defaultPrevented||z(C)}let R=D.createElement("a",{...T,...ue,href:O||ee,onClick:$||l?e:N,ref:Y4(A,ce),target:p,"data-discover":!H&&n==="render"?"true":void 0});return X&&!H?D.createElement(D.Fragment,null,R,D.createElement(q4,{page:ee})):R});ud.displayName="Link";var qt=D.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:a="",end:s=!1,style:l,to:c,viewTransition:d,children:p,...g},_){let w=hc(c,{relative:g.relative}),T=ss(),A=D.useContext(lc),{navigator:k,basename:H}=D.useContext(_i),O=A!=null&&iC(w)&&d===!0,$=k.encodeLocation?k.encodeLocation(w).pathname:w.pathname,ee=T.pathname,X=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;n||(ee=ee.toLowerCase(),X=X?X.toLowerCase():null,$=$.toLowerCase()),X&&H&&(X=Or(X,H)||X);const ce=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let ue=ee===$||!s&&ee.startsWith($)&&ee.charAt(ce)==="/",z=X!=null&&(X===$||!s&&X.startsWith($)&&X.charAt($.length)==="/"),N={isActive:ue,isPending:z,isTransitioning:O},R=ue?e:void 0,C;typeof a=="function"?C=a(N):C=[a,ue?"active":null,z?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let V=typeof l=="function"?l(N):l;return D.createElement(ud,{...g,"aria-current":R,className:C,ref:_,style:V,to:c,viewTransition:d},typeof p=="function"?p(N):p)});qt.displayName="NavLink";var W4=D.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:a,replace:s,state:l,method:c=cf,action:d,onSubmit:p,relative:g,preventScrollReset:_,viewTransition:w,...T},A)=>{let k=nC(),H=rC(d,{relative:g}),O=c.toLowerCase()==="get"?"get":"post",$=typeof d=="string"&&LT.test(d),ee=X=>{if(p&&p(X),X.defaultPrevented)return;X.preventDefault();let ce=X.nativeEvent.submitter,ue=ce?.getAttribute("formmethod")||c;k(ce||X.currentTarget,{fetcherKey:e,method:ue,navigate:n,replace:s,state:l,relative:g,preventScrollReset:_,viewTransition:w})};return D.createElement("form",{ref:A,method:O,action:H,onSubmit:a?p:ee,...T,"data-discover":!$&&t==="render"?"true":void 0})});W4.displayName="Form";function Z4(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function UT(t){let e=D.useContext(Zs);return et(e,Z4(t)),e}function J4(t,{target:e,replace:n,state:a,preventScrollReset:s,relative:l,viewTransition:c}={}){let d=cc(),p=ss(),g=hc(t,{relative:l});return D.useCallback(_=>{if(N4(_,e)){_.preventDefault();let w=n!==void 0?n:Za(p)===Za(g);d(t,{replace:w,state:a,preventScrollReset:s,relative:l,viewTransition:c})}},[p,d,g,n,a,e,t,s,l,c])}var eC=0,tC=()=>`__${String(++eC)}__`;function nC(){let{router:t}=UT("useSubmit"),{basename:e}=D.useContext(_i),n=p4();return D.useCallback(async(a,s={})=>{let{action:l,method:c,encType:d,formData:p,body:g}=M4(a,e);if(s.navigate===!1){let _=s.fetcherKey||tC();await t.fetch(_,n,s.action||l,{preventScrollReset:s.preventScrollReset,formData:p,body:g,formMethod:s.method||c,formEncType:s.encType||d,flushSync:s.flushSync})}else await t.navigate(s.action||l,{preventScrollReset:s.preventScrollReset,formData:p,body:g,formMethod:s.method||c,formEncType:s.encType||d,replace:s.replace,state:s.state,fromRouteId:n,flushSync:s.flushSync,viewTransition:s.viewTransition})},[t,e,n])}function rC(t,{relative:e}={}){let{basename:n}=D.useContext(_i),a=D.useContext(bi);et(a,"useFormAction must be used inside a RouteContext");let[s]=a.matches.slice(-1),l={...hc(t||".",{relative:e})},c=ss();if(t==null){l.search=c.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(_=>_==="")){d.delete("index"),p.filter(w=>w).forEach(w=>d.append("index",w));let _=d.toString();l.search=_?`?${_}`:""}}return(!t||t===".")&&s.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:hi([n,l.pathname])),Za(l)}function iC(t,e={}){let n=D.useContext(uy);et(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=UT("useViewTransitionState"),s=hc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let l=Or(n.currentLocation.pathname,a)||n.currentLocation.pathname,c=Or(n.nextLocation.pathname,a)||n.nextLocation.pathname;return Rf(s.pathname,c)!=null||Rf(s.pathname,l)!=null}var aC=dT();function sC(t){return D.createElement(E4,{flushSync:aC.flushSync,...t})}const Ge={footer:{backgroundColor:"#0a0a0a",background:"linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",color:"#fff",padding:"4rem 1rem 0",marginTop:"4rem",position:"relative",overflow:"hidden","&::before":{content:'""',position:"absolute",top:0,left:0,width:"100%",height:"4px",background:"linear-gradient(90deg, #4361ee, #f72585)"}},container:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",maxWidth:"1200px",margin:"0 auto",position:"relative",zIndex:1,gap:"2rem","@media (max-width: 768px)":{flexDirection:"column",gap:"3rem"}},section:{flex:"1 1 250px",minWidth:"200px",padding:"0 1rem",animation:"fadeIn 0.5s ease forwards",opacity:0,"&:nth-child(1)":{animationDelay:"0.1s"},"&:nth-child(2)":{animationDelay:"0.2s"},"&:nth-child(3)":{animationDelay:"0.3s"}},logoContainer:{display:"flex",alignItems:"center",marginBottom:"1.5rem",fontSize:"2rem",fontWeight:"bold",transition:"transform 0.3s ease","&:hover":{transform:"scale(1.05)"}},logoFirst:{color:"#fff",textShadow:"0 0 10px rgba(67, 97, 238, 0.5)"},logoSecond:{color:"#f72585",textShadow:"0 0 10px rgba(247, 37, 133, 0.5)"},text:{fontSize:"1rem",color:"rgba(255,255,255,0.8)",lineHeight:"1.6",marginBottom:"1.5rem",textAlign:"justify"},heading:{fontSize:"1.4rem",marginBottom:"1.8rem",color:"#fff",position:"relative",paddingBottom:"0.8rem","&::after":{content:'""',position:"absolute",bottom:0,left:0,width:"50px",height:"3px",background:"linear-gradient(90deg, #4361ee, #f72585)",borderRadius:"3px"}},list:{listStyle:"none",padding:0,margin:0},link:{display:"flex",alignItems:"center",textDecoration:"none",color:"rgba(255,255,255,0.8)",marginBottom:"1rem",transition:"all 0.3s ease",padding:"0.5rem 0.5rem 0.5rem 0",position:"relative",overflow:"hidden","&::before":{content:'""',position:"absolute",left:0,bottom:0,width:"0",height:"1px",background:"#f72585",transition:"width 0.3s ease"},"&:hover":{color:"#fff",transform:"translateX(8px)","&::before":{width:"100%"}}},contactItem:{display:"flex",alignItems:"flex-start",marginBottom:"1.5rem",color:"rgba(255,255,255,0.8)",lineHeight:"1.6"},contactIcon:{marginRight:"1rem",fontSize:"1.3rem",color:"#f72585",minWidth:"20px"},socialIcons:{display:"flex",gap:"1rem",marginTop:"2rem",flexWrap:"wrap"},iconLink:{textDecoration:"none",transition:"all 0.3s ease"},icon:{display:"flex",alignItems:"center",justifyContent:"center",padding:"0.5rem 1rem",backgroundColor:"rgba(255,255,255,0.08)",color:"#fff",borderRadius:"50px",transition:"all 0.3s ease",fontSize:"0.9rem","&:hover":{backgroundColor:"#f72585",transform:"translateY(-3px)",boxShadow:"0 5px 15px rgba(247, 37, 133, 0.3)"}},bottom:{textAlign:"center",marginTop:"4rem",padding:"2rem 0",borderTop:"1px solid rgba(255,255,255,0.1)",position:"relative",zIndex:1,background:"rgba(0,0,0,0.2)"},bottomText:{fontSize:"0.9rem",color:"rgba(255,255,255,0.7)",margin:"0.5rem 0",display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"0.5rem"},bottomLink:{color:"rgba(255,255,255,0.7)",textDecoration:"none",transition:"all 0.3s ease",position:"relative","&::after":{content:'""',position:"absolute",bottom:"-2px",left:0,width:"0",height:"1px",background:"#f72585",transition:"width 0.3s ease"},"&:hover":{color:"#fff","&::after":{width:"100%"}}},footerDecoration:{position:"absolute",width:"500px",height:"500px",borderRadius:"50%",background:"radial-gradient(circle, rgba(67,97,238,0.15) 0%, transparent 70%)",top:"-150px",right:"-150px",zIndex:0,"@media (max-width: 768px)":{width:"300px",height:"300px",top:"-50px",right:"-50px"}},footerDecoration2:{position:"absolute",width:"400px",height:"400px",borderRadius:"50%",background:"radial-gradient(circle, rgba(247,37,133,0.1) 0%, transparent 70%)",bottom:"-100px",left:"-100px",zIndex:0,"@media (max-width: 768px)":{width:"200px",height:"200px",bottom:"-50px",left:"-50px"}}},oC=()=>y.jsxs("footer",{style:Ge.footer,children:[y.jsx("div",{style:Ge.footerDecoration}),y.jsx("div",{style:Ge.footerDecoration2}),y.jsxs("div",{style:Ge.container,children:[y.jsxs("div",{style:Ge.section,children:[y.jsxs("div",{style:Ge.logoContainer,children:[y.jsx("span",{style:Ge.logoFirst,children:"Arrow"}),y.jsx("span",{style:Ge.logoSecond,children:"Sites"})]}),y.jsx("p",{style:Ge.text,children:"Building modern web experiences with colorful solutions."}),y.jsxs("div",{style:Ge.socialIcons,children:[y.jsx("a",{href:"https://github.com/INZIMAM777",target:"_blank",rel:"noreferrer",style:Ge.iconLink,children:y.jsx("span",{style:Ge.icon,children:"GitHub"})}),y.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noreferrer",style:Ge.iconLink,children:y.jsx("span",{style:Ge.icon,children:"LinkedIn"})}),y.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noreferrer",style:Ge.iconLink,children:y.jsx("span",{style:Ge.icon,children:"Twitter"})})]})]}),y.jsxs("div",{style:Ge.section,children:[y.jsx("h4",{style:Ge.heading,children:"Quick Links"}),y.jsxs("ul",{style:Ge.list,children:[y.jsx("li",{children:y.jsx(qt,{to:"/",style:({isActive:t})=>t?{...Ge.link,color:"#fff","&::before":{width:"100%"}}:Ge.link,children:"Home"})}),y.jsx("li",{children:y.jsx(qt,{to:"/about",style:({isActive:t})=>t?{...Ge.link,color:"#fff","&::before":{width:"100%"}}:Ge.link,children:"About"})}),y.jsx("li",{children:y.jsx(qt,{to:"/contact",style:({isActive:t})=>t?{...Ge.link,color:"#fff","&::before":{width:"100%"}}:Ge.link,children:"Contact"})}),y.jsx("li",{children:y.jsx(qt,{to:"/Cards",style:({isActive:t})=>t?{...Ge.link,color:"#fff","&::before":{width:"100%"}}:Ge.link,children:"Properties"})}),y.jsx("li",{children:y.jsx(qt,{to:"/AddPropr",style:({isActive:t})=>t?{...Ge.link,color:"#fff","&::before":{width:"100%"}}:Ge.link,children:"Add Properties"})})]})]}),y.jsxs("div",{style:Ge.section,children:[y.jsx("h4",{style:Ge.heading,children:"Get In Touch"}),y.jsxs("ul",{style:Ge.list,children:[y.jsxs("li",{style:Ge.contactItem,children:[y.jsx("span",{style:Ge.contactIcon,children:"📧"})," hello@arrowsites.com"]}),y.jsxs("li",{style:Ge.contactItem,children:[y.jsx("span",{style:Ge.contactIcon,children:"📱"})," +1 (555) 123-4567"]}),y.jsxs("li",{style:Ge.contactItem,children:[y.jsx("span",{style:Ge.contactIcon,children:"📍"})," San Francisco, CA"]})]})]})]}),y.jsx("div",{style:Ge.bottom,children:y.jsxs("p",{style:Ge.bottomText,children:["© ",new Date().getFullYear()," InzimamDev. All rights reserved. |",y.jsx("a",{href:"/privacy",style:Ge.bottomLink,children:" Privacy Policy"})," |",y.jsx("a",{href:"/terms",style:Ge.bottomLink,children:" Terms of Service"})]})}),y.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `})]}),lC=()=>{};var sb={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=function(t){const e=[];let n=0;for(let a=0;a<t.length;a++){let s=t.charCodeAt(a);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&a+1<t.length&&(t.charCodeAt(a+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++a)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},uC=function(t){const e=[];let n=0,a=0;for(;n<t.length;){const s=t[n++];if(s<128)e[a++]=String.fromCharCode(s);else if(s>191&&s<224){const l=t[n++];e[a++]=String.fromCharCode((s&31)<<6|l&63)}else if(s>239&&s<365){const l=t[n++],c=t[n++],d=t[n++],p=((s&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[a++]=String.fromCharCode(55296+(p>>10)),e[a++]=String.fromCharCode(56320+(p&1023))}else{const l=t[n++],c=t[n++];e[a++]=String.fromCharCode((s&15)<<12|(l&63)<<6|c&63)}}return e.join("")},BT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let s=0;s<t.length;s+=3){const l=t[s],c=s+1<t.length,d=c?t[s+1]:0,p=s+2<t.length,g=p?t[s+2]:0,_=l>>2,w=(l&3)<<4|d>>4;let T=(d&15)<<2|g>>6,A=g&63;p||(A=64,c||(T=64)),a.push(n[_],n[w],n[T],n[A])}return a.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let s=0;s<t.length;){const l=n[t.charAt(s++)],d=s<t.length?n[t.charAt(s)]:0;++s;const g=s<t.length?n[t.charAt(s)]:64;++s;const w=s<t.length?n[t.charAt(s)]:64;if(++s,l==null||d==null||g==null||w==null)throw new cC;const T=l<<2|d>>4;if(a.push(T),g!==64){const A=d<<4&240|g>>2;if(a.push(A),w!==64){const k=g<<6&192|w;a.push(k)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hC=function(t){const e=zT(t);return BT.encodeByteArray(e,!0)},Nf=function(t){return hC(t).replace(/\./g,"")},FT=function(t){try{return BT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC=()=>fC().__FIREBASE_DEFAULTS__,mC=()=>{if(typeof process>"u"||typeof sb>"u")return;const t=sb.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&FT(t[1]);return e&&JSON.parse(e)},cd=()=>{try{return lC()||dC()||mC()||pC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},HT=t=>cd()?.emulatorHosts?.[t],gC=t=>{const e=HT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),a]:[e.substring(0,n),a]},qT=()=>cd()?.config,GT=t=>cd()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,a)=>{n?this.reject(n):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,a))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function $T(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},a=e||"demo-project",s=t.iat||0,l=t.sub||t.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${a}`,aud:a,iat:s,exp:s+3600,auth_time:s,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Nf(JSON.stringify(n)),Nf(JSON.stringify(c)),""].join(".")}const Fu={};function _C(){const t={prod:[],emulator:[]};for(const e of Object.keys(Fu))Fu[e]?t.emulator.push(e):t.prod.push(e);return t}function bC(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let ob=!1;function YT(t,e){if(typeof window>"u"||typeof document>"u"||!_l(window.location.host)||Fu[t]===e||Fu[t]||ob)return;Fu[t]=e;function n(T){return`__firebase__banner__${T}`}const a="__firebase__banner",l=_C().prod.length>0;function c(){const T=document.getElementById(a);T&&T.remove()}function d(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function p(T,A){T.setAttribute("width","24"),T.setAttribute("id",A),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function g(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{ob=!0,c()},T}function _(T,A){T.setAttribute("id",A),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function w(){const T=bC(a),A=n("text"),k=document.getElementById(A)||document.createElement("span"),H=n("learnmore"),O=document.getElementById(H)||document.createElement("a"),$=n("preprendIcon"),ee=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const X=T.element;d(X),_(O,H);const ce=g();p(ee,$),X.append(ee,k,O,ce),document.body.appendChild(X)}l?(k.innerText="Preview backend disconnected.",ee.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ee.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function EC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jn())}function TC(){const t=cd()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function SC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function AC(){const t=jn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function RC(){return!TC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function CC(){try{return typeof indexedDB=="object"}catch{return!1}}function IC(){return new Promise((t,e)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(a);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(a),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC="FirebaseError";class ia extends Error{constructor(e,n,a){super(n),this.code=e,this.customData=a,this.name=NC,Object.setPrototypeOf(this,ia.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fc.prototype.create)}}class fc{constructor(e,n,a){this.service=e,this.serviceName=n,this.errors=a}create(e,...n){const a=n[0]||{},s=`${this.service}/${e}`,l=this.errors[e],c=l?DC(l,a):"Error",d=`${this.serviceName}: ${c} (${s}).`;return new ia(s,d,a)}}function DC(t,e){return t.replace(OC,(n,a)=>{const s=e[a];return s!=null?String(s):`<${a}?>`})}const OC=/\{\$([^}]+)}/g;function MC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $s(t,e){if(t===e)return!0;const n=Object.keys(t),a=Object.keys(e);for(const s of n){if(!a.includes(s))return!1;const l=t[s],c=e[s];if(lb(l)&&lb(c)){if(!$s(l,c))return!1}else if(l!==c)return!1}for(const s of a)if(!n.includes(s))return!1;return!0}function lb(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(t){const e=[];for(const[n,a]of Object.entries(t))Array.isArray(a)?a.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function ku(t){const e={};return t.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[s,l]=a.split("=");e[decodeURIComponent(s)]=decodeURIComponent(l)}}),e}function Vu(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function PC(t,e){const n=new jC(t,e);return n.subscribe.bind(n)}class jC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,a){let s;if(e===void 0&&n===void 0&&a===void 0)throw new Error("Missing Observer.");kC(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:a},s.next===void 0&&(s.next=Hp),s.error===void 0&&(s.error=Hp),s.complete===void 0&&(s.complete=Hp);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Hp(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t){return t&&t._delegate?t._delegate:t}class Ys{constructor(e,n,a){this.name=e,this.instanceFactory=n,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let VC=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const a=new yC;if(this.instancesDeferred.set(n,a),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&a.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),a=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(a)return null;throw s}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(UC(e))try{this.getOrInitializeService({instanceIdentifier:Us})}catch{}for(const[n,a]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:s});a.resolve(l)}catch{}}}}clearInstance(e=Us){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Us){return this.instances.has(e)}getOptions(e=Us){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:a,options:n});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);a===d&&c.resolve(s)}return s}onInit(e,n){const a=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(a)??new Set;s.add(e),this.onInitCallbacks.set(a,s);const l=this.instances.get(a);return l&&e(l,a),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const a=this.onInitCallbacks.get(n);if(a)for(const s of a)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:LC(e),options:n}),this.instances.set(e,a),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=Us){return this.component?this.component.multipleInstances?e:Us:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function LC(t){return t===Us?void 0:t}function UC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new VC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(tt||(tt={}));const BC={debug:tt.DEBUG,verbose:tt.VERBOSE,info:tt.INFO,warn:tt.WARN,error:tt.ERROR,silent:tt.SILENT},FC=tt.INFO,HC={[tt.DEBUG]:"log",[tt.VERBOSE]:"log",[tt.INFO]:"info",[tt.WARN]:"warn",[tt.ERROR]:"error"},qC=(t,e,...n)=>{if(e<t.logLevel)return;const a=new Date().toISOString(),s=HC[e];if(s)console[s](`[${a}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class my{constructor(e){this.name=e,this._logLevel=FC,this._logHandler=qC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in tt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,tt.DEBUG,...e),this._logHandler(this,tt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,tt.VERBOSE,...e),this._logHandler(this,tt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,tt.INFO,...e),this._logHandler(this,tt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,tt.WARN,...e),this._logHandler(this,tt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,tt.ERROR,...e),this._logHandler(this,tt.ERROR,...e)}}const GC=(t,e)=>e.some(n=>t instanceof n);let ub,cb;function $C(){return ub||(ub=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YC(){return cb||(cb=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const KT=new WeakMap,_g=new WeakMap,QT=new WeakMap,qp=new WeakMap,py=new WeakMap;function KC(t){const e=new Promise((n,a)=>{const s=()=>{t.removeEventListener("success",l),t.removeEventListener("error",c)},l=()=>{n(Ga(t.result)),s()},c=()=>{a(t.error),s()};t.addEventListener("success",l),t.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&KT.set(n,t)}).catch(()=>{}),py.set(e,t),e}function QC(t){if(_g.has(t))return;const e=new Promise((n,a)=>{const s=()=>{t.removeEventListener("complete",l),t.removeEventListener("error",c),t.removeEventListener("abort",c)},l=()=>{n(),s()},c=()=>{a(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",l),t.addEventListener("error",c),t.addEventListener("abort",c)});_g.set(t,e)}let bg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _g.get(t);if(e==="objectStoreNames")return t.objectStoreNames||QT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ga(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function XC(t){bg=t(bg)}function WC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const a=t.call(Gp(this),e,...n);return QT.set(a,e.sort?e.sort():[e]),Ga(a)}:YC().includes(t)?function(...e){return t.apply(Gp(this),e),Ga(KT.get(this))}:function(...e){return Ga(t.apply(Gp(this),e))}}function ZC(t){return typeof t=="function"?WC(t):(t instanceof IDBTransaction&&QC(t),GC(t,$C())?new Proxy(t,bg):t)}function Ga(t){if(t instanceof IDBRequest)return KC(t);if(qp.has(t))return qp.get(t);const e=ZC(t);return e!==t&&(qp.set(t,e),py.set(e,t)),e}const Gp=t=>py.get(t);function JC(t,e,{blocked:n,upgrade:a,blocking:s,terminated:l}={}){const c=indexedDB.open(t,e),d=Ga(c);return a&&c.addEventListener("upgradeneeded",p=>{a(Ga(c.result),p.oldVersion,p.newVersion,Ga(c.transaction),p)}),n&&c.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),s&&p.addEventListener("versionchange",g=>s(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const eI=["get","getKey","getAll","getAllKeys","count"],tI=["put","add","delete","clear"],$p=new Map;function hb(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($p.get(e))return $p.get(e);const n=e.replace(/FromIndex$/,""),a=e!==n,s=tI.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!(s||eI.includes(n)))return;const l=async function(c,...d){const p=this.transaction(c,s?"readwrite":"readonly");let g=p.store;return a&&(g=g.index(d.shift())),(await Promise.all([g[n](...d),s&&p.done]))[0]};return $p.set(e,l),l}XC(t=>({...t,get:(e,n,a)=>hb(e,n)||t.get(e,n,a),has:(e,n)=>!!hb(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rI(n)){const a=n.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(n=>n).join(" ")}}function rI(t){return t.getComponent()?.type==="VERSION"}const Eg="@firebase/app",fb="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=new my("@firebase/app"),iI="@firebase/app-compat",aI="@firebase/analytics-compat",sI="@firebase/analytics",oI="@firebase/app-check-compat",lI="@firebase/app-check",uI="@firebase/auth",cI="@firebase/auth-compat",hI="@firebase/database",fI="@firebase/data-connect",dI="@firebase/database-compat",mI="@firebase/functions",pI="@firebase/functions-compat",gI="@firebase/installations",yI="@firebase/installations-compat",vI="@firebase/messaging",_I="@firebase/messaging-compat",bI="@firebase/performance",EI="@firebase/performance-compat",TI="@firebase/remote-config",wI="@firebase/remote-config-compat",SI="@firebase/storage",xI="@firebase/storage-compat",AI="@firebase/firestore",RI="@firebase/ai",CI="@firebase/firestore-compat",II="firebase",NI="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg="[DEFAULT]",DI={[Eg]:"fire-core",[iI]:"fire-core-compat",[sI]:"fire-analytics",[aI]:"fire-analytics-compat",[lI]:"fire-app-check",[oI]:"fire-app-check-compat",[uI]:"fire-auth",[cI]:"fire-auth-compat",[hI]:"fire-rtdb",[fI]:"fire-data-connect",[dI]:"fire-rtdb-compat",[mI]:"fire-fn",[pI]:"fire-fn-compat",[gI]:"fire-iid",[yI]:"fire-iid-compat",[vI]:"fire-fcm",[_I]:"fire-fcm-compat",[bI]:"fire-perf",[EI]:"fire-perf-compat",[TI]:"fire-rc",[wI]:"fire-rc-compat",[SI]:"fire-gcs",[xI]:"fire-gcs-compat",[AI]:"fire-fst",[CI]:"fire-fst-compat",[RI]:"fire-vertex","fire-js":"fire-js",[II]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=new Map,OI=new Map,wg=new Map;function db(t,e){try{t.container.addComponent(e)}catch(n){Ji.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ol(t){const e=t.name;if(wg.has(e))return Ji.debug(`There were multiple attempts to register component ${e}.`),!1;wg.set(e,t);for(const n of Df.values())db(n,t);for(const n of OI.values())db(n,t);return!0}function gy(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function fr(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$a=new fc("app","Firebase",MI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e,n,a){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Ys("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $a.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl=NI;function XT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const a={name:Tg,automaticDataCollectionEnabled:!0,...e},s=a.name;if(typeof s!="string"||!s)throw $a.create("bad-app-name",{appName:String(s)});if(n||(n=qT()),!n)throw $a.create("no-options");const l=Df.get(s);if(l){if($s(n,l.options)&&$s(a,l.config))return l;throw $a.create("duplicate-app",{appName:s})}const c=new zC(s);for(const p of wg.values())c.addComponent(p);const d=new PI(n,a,c);return Df.set(s,d),d}function WT(t=Tg){const e=Df.get(t);if(!e&&t===Tg&&qT())return XT();if(!e)throw $a.create("no-app",{appName:t});return e}function Ya(t,e,n){let a=DI[t]??t;n&&(a+=`-${n}`);const s=a.match(/\s|\//),l=e.match(/\s|\//);if(s||l){const c=[`Unable to register library "${a}" with version "${e}":`];s&&c.push(`library name "${a}" contains illegal characters (whitespace or "/")`),s&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ji.warn(c.join(" "));return}ol(new Ys(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI="firebase-heartbeat-database",kI=1,Wu="firebase-heartbeat-store";let Yp=null;function ZT(){return Yp||(Yp=JC(jI,kI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Wu)}catch(n){console.warn(n)}}}}).catch(t=>{throw $a.create("idb-open",{originalErrorMessage:t.message})})),Yp}async function VI(t){try{const n=(await ZT()).transaction(Wu),a=await n.objectStore(Wu).get(JT(t));return await n.done,a}catch(e){if(e instanceof ia)Ji.warn(e.message);else{const n=$a.create("idb-get",{originalErrorMessage:e?.message});Ji.warn(n.message)}}}async function mb(t,e){try{const a=(await ZT()).transaction(Wu,"readwrite");await a.objectStore(Wu).put(e,JT(t)),await a.done}catch(n){if(n instanceof ia)Ji.warn(n.message);else{const a=$a.create("idb-set",{originalErrorMessage:n?.message});Ji.warn(a.message)}}}function JT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=1024,UI=30;class zI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FI(n),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=pb();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(s=>s.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:n}),this._heartbeatsCache.heartbeats.length>UI){const s=HI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ji.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=pb(),{heartbeatsToSend:n,unsentEntries:a}=BI(this._heartbeatsCache.heartbeats),s=Nf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Ji.warn(e),""}}}function pb(){return new Date().toISOString().substring(0,10)}function BI(t,e=LI){const n=[];let a=t.slice();for(const s of t){const l=n.find(c=>c.agent===s.agent);if(l){if(l.dates.push(s.date),gb(n)>e){l.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),gb(n)>e){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class FI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return CC()?IC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await VI(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const a=await this.read();return mb(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const a=await this.read();return mb(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function gb(t){return Nf(JSON.stringify({version:2,heartbeats:t})).length}function HI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let a=1;a<t.length;a++)t[a].date<n&&(n=t[a].date,e=a);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(t){ol(new Ys("platform-logger",e=>new nI(e),"PRIVATE")),ol(new Ys("heartbeat",e=>new zI(e),"PRIVATE")),Ya(Eg,fb,t),Ya(Eg,fb,"esm2020"),Ya("fire-js","")}qI("");var GI="firebase",$I="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ya(GI,$I,"app");var yb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ka,ew;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,R){function C(){}C.prototype=R.prototype,N.D=R.prototype,N.prototype=new C,N.prototype.constructor=N,N.C=function(V,U,B){for(var I=Array(arguments.length-2),He=2;He<arguments.length;He++)I[He-2]=arguments[He];return R.prototype[U].apply(V,I)}}function n(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(a,n),a.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(N,R,C){C||(C=0);var V=Array(16);if(typeof R=="string")for(var U=0;16>U;++U)V[U]=R.charCodeAt(C++)|R.charCodeAt(C++)<<8|R.charCodeAt(C++)<<16|R.charCodeAt(C++)<<24;else for(U=0;16>U;++U)V[U]=R[C++]|R[C++]<<8|R[C++]<<16|R[C++]<<24;R=N.g[0],C=N.g[1],U=N.g[2];var B=N.g[3],I=R+(B^C&(U^B))+V[0]+3614090360&4294967295;R=C+(I<<7&4294967295|I>>>25),I=B+(U^R&(C^U))+V[1]+3905402710&4294967295,B=R+(I<<12&4294967295|I>>>20),I=U+(C^B&(R^C))+V[2]+606105819&4294967295,U=B+(I<<17&4294967295|I>>>15),I=C+(R^U&(B^R))+V[3]+3250441966&4294967295,C=U+(I<<22&4294967295|I>>>10),I=R+(B^C&(U^B))+V[4]+4118548399&4294967295,R=C+(I<<7&4294967295|I>>>25),I=B+(U^R&(C^U))+V[5]+1200080426&4294967295,B=R+(I<<12&4294967295|I>>>20),I=U+(C^B&(R^C))+V[6]+2821735955&4294967295,U=B+(I<<17&4294967295|I>>>15),I=C+(R^U&(B^R))+V[7]+4249261313&4294967295,C=U+(I<<22&4294967295|I>>>10),I=R+(B^C&(U^B))+V[8]+1770035416&4294967295,R=C+(I<<7&4294967295|I>>>25),I=B+(U^R&(C^U))+V[9]+2336552879&4294967295,B=R+(I<<12&4294967295|I>>>20),I=U+(C^B&(R^C))+V[10]+4294925233&4294967295,U=B+(I<<17&4294967295|I>>>15),I=C+(R^U&(B^R))+V[11]+2304563134&4294967295,C=U+(I<<22&4294967295|I>>>10),I=R+(B^C&(U^B))+V[12]+1804603682&4294967295,R=C+(I<<7&4294967295|I>>>25),I=B+(U^R&(C^U))+V[13]+4254626195&4294967295,B=R+(I<<12&4294967295|I>>>20),I=U+(C^B&(R^C))+V[14]+2792965006&4294967295,U=B+(I<<17&4294967295|I>>>15),I=C+(R^U&(B^R))+V[15]+1236535329&4294967295,C=U+(I<<22&4294967295|I>>>10),I=R+(U^B&(C^U))+V[1]+4129170786&4294967295,R=C+(I<<5&4294967295|I>>>27),I=B+(C^U&(R^C))+V[6]+3225465664&4294967295,B=R+(I<<9&4294967295|I>>>23),I=U+(R^C&(B^R))+V[11]+643717713&4294967295,U=B+(I<<14&4294967295|I>>>18),I=C+(B^R&(U^B))+V[0]+3921069994&4294967295,C=U+(I<<20&4294967295|I>>>12),I=R+(U^B&(C^U))+V[5]+3593408605&4294967295,R=C+(I<<5&4294967295|I>>>27),I=B+(C^U&(R^C))+V[10]+38016083&4294967295,B=R+(I<<9&4294967295|I>>>23),I=U+(R^C&(B^R))+V[15]+3634488961&4294967295,U=B+(I<<14&4294967295|I>>>18),I=C+(B^R&(U^B))+V[4]+3889429448&4294967295,C=U+(I<<20&4294967295|I>>>12),I=R+(U^B&(C^U))+V[9]+568446438&4294967295,R=C+(I<<5&4294967295|I>>>27),I=B+(C^U&(R^C))+V[14]+3275163606&4294967295,B=R+(I<<9&4294967295|I>>>23),I=U+(R^C&(B^R))+V[3]+4107603335&4294967295,U=B+(I<<14&4294967295|I>>>18),I=C+(B^R&(U^B))+V[8]+1163531501&4294967295,C=U+(I<<20&4294967295|I>>>12),I=R+(U^B&(C^U))+V[13]+2850285829&4294967295,R=C+(I<<5&4294967295|I>>>27),I=B+(C^U&(R^C))+V[2]+4243563512&4294967295,B=R+(I<<9&4294967295|I>>>23),I=U+(R^C&(B^R))+V[7]+1735328473&4294967295,U=B+(I<<14&4294967295|I>>>18),I=C+(B^R&(U^B))+V[12]+2368359562&4294967295,C=U+(I<<20&4294967295|I>>>12),I=R+(C^U^B)+V[5]+4294588738&4294967295,R=C+(I<<4&4294967295|I>>>28),I=B+(R^C^U)+V[8]+2272392833&4294967295,B=R+(I<<11&4294967295|I>>>21),I=U+(B^R^C)+V[11]+1839030562&4294967295,U=B+(I<<16&4294967295|I>>>16),I=C+(U^B^R)+V[14]+4259657740&4294967295,C=U+(I<<23&4294967295|I>>>9),I=R+(C^U^B)+V[1]+2763975236&4294967295,R=C+(I<<4&4294967295|I>>>28),I=B+(R^C^U)+V[4]+1272893353&4294967295,B=R+(I<<11&4294967295|I>>>21),I=U+(B^R^C)+V[7]+4139469664&4294967295,U=B+(I<<16&4294967295|I>>>16),I=C+(U^B^R)+V[10]+3200236656&4294967295,C=U+(I<<23&4294967295|I>>>9),I=R+(C^U^B)+V[13]+681279174&4294967295,R=C+(I<<4&4294967295|I>>>28),I=B+(R^C^U)+V[0]+3936430074&4294967295,B=R+(I<<11&4294967295|I>>>21),I=U+(B^R^C)+V[3]+3572445317&4294967295,U=B+(I<<16&4294967295|I>>>16),I=C+(U^B^R)+V[6]+76029189&4294967295,C=U+(I<<23&4294967295|I>>>9),I=R+(C^U^B)+V[9]+3654602809&4294967295,R=C+(I<<4&4294967295|I>>>28),I=B+(R^C^U)+V[12]+3873151461&4294967295,B=R+(I<<11&4294967295|I>>>21),I=U+(B^R^C)+V[15]+530742520&4294967295,U=B+(I<<16&4294967295|I>>>16),I=C+(U^B^R)+V[2]+3299628645&4294967295,C=U+(I<<23&4294967295|I>>>9),I=R+(U^(C|~B))+V[0]+4096336452&4294967295,R=C+(I<<6&4294967295|I>>>26),I=B+(C^(R|~U))+V[7]+1126891415&4294967295,B=R+(I<<10&4294967295|I>>>22),I=U+(R^(B|~C))+V[14]+2878612391&4294967295,U=B+(I<<15&4294967295|I>>>17),I=C+(B^(U|~R))+V[5]+4237533241&4294967295,C=U+(I<<21&4294967295|I>>>11),I=R+(U^(C|~B))+V[12]+1700485571&4294967295,R=C+(I<<6&4294967295|I>>>26),I=B+(C^(R|~U))+V[3]+2399980690&4294967295,B=R+(I<<10&4294967295|I>>>22),I=U+(R^(B|~C))+V[10]+4293915773&4294967295,U=B+(I<<15&4294967295|I>>>17),I=C+(B^(U|~R))+V[1]+2240044497&4294967295,C=U+(I<<21&4294967295|I>>>11),I=R+(U^(C|~B))+V[8]+1873313359&4294967295,R=C+(I<<6&4294967295|I>>>26),I=B+(C^(R|~U))+V[15]+4264355552&4294967295,B=R+(I<<10&4294967295|I>>>22),I=U+(R^(B|~C))+V[6]+2734768916&4294967295,U=B+(I<<15&4294967295|I>>>17),I=C+(B^(U|~R))+V[13]+1309151649&4294967295,C=U+(I<<21&4294967295|I>>>11),I=R+(U^(C|~B))+V[4]+4149444226&4294967295,R=C+(I<<6&4294967295|I>>>26),I=B+(C^(R|~U))+V[11]+3174756917&4294967295,B=R+(I<<10&4294967295|I>>>22),I=U+(R^(B|~C))+V[2]+718787259&4294967295,U=B+(I<<15&4294967295|I>>>17),I=C+(B^(U|~R))+V[9]+3951481745&4294967295,N.g[0]=N.g[0]+R&4294967295,N.g[1]=N.g[1]+(U+(I<<21&4294967295|I>>>11))&4294967295,N.g[2]=N.g[2]+U&4294967295,N.g[3]=N.g[3]+B&4294967295}a.prototype.u=function(N,R){R===void 0&&(R=N.length);for(var C=R-this.blockSize,V=this.B,U=this.h,B=0;B<R;){if(U==0)for(;B<=C;)s(this,N,B),B+=this.blockSize;if(typeof N=="string"){for(;B<R;)if(V[U++]=N.charCodeAt(B++),U==this.blockSize){s(this,V),U=0;break}}else for(;B<R;)if(V[U++]=N[B++],U==this.blockSize){s(this,V),U=0;break}}this.h=U,this.o+=R},a.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var R=1;R<N.length-8;++R)N[R]=0;var C=8*this.o;for(R=N.length-8;R<N.length;++R)N[R]=C&255,C/=256;for(this.u(N),N=Array(16),R=C=0;4>R;++R)for(var V=0;32>V;V+=8)N[C++]=this.g[R]>>>V&255;return N};function l(N,R){var C=d;return Object.prototype.hasOwnProperty.call(C,N)?C[N]:C[N]=R(N)}function c(N,R){this.h=R;for(var C=[],V=!0,U=N.length-1;0<=U;U--){var B=N[U]|0;V&&B==R||(C[U]=B,V=!1)}this.g=C}var d={};function p(N){return-128<=N&&128>N?l(N,function(R){return new c([R|0],0>R?-1:0)}):new c([N|0],0>N?-1:0)}function g(N){if(isNaN(N)||!isFinite(N))return w;if(0>N)return O(g(-N));for(var R=[],C=1,V=0;N>=C;V++)R[V]=N/C|0,C*=4294967296;return new c(R,0)}function _(N,R){if(N.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(N.charAt(0)=="-")return O(_(N.substring(1),R));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=g(Math.pow(R,8)),V=w,U=0;U<N.length;U+=8){var B=Math.min(8,N.length-U),I=parseInt(N.substring(U,U+B),R);8>B?(B=g(Math.pow(R,B)),V=V.j(B).add(g(I))):(V=V.j(C),V=V.add(g(I)))}return V}var w=p(0),T=p(1),A=p(16777216);t=c.prototype,t.m=function(){if(H(this))return-O(this).m();for(var N=0,R=1,C=0;C<this.g.length;C++){var V=this.i(C);N+=(0<=V?V:4294967296+V)*R,R*=4294967296}return N},t.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(k(this))return"0";if(H(this))return"-"+O(this).toString(N);for(var R=g(Math.pow(N,6)),C=this,V="";;){var U=ce(C,R).g;C=$(C,U.j(R));var B=((0<C.g.length?C.g[0]:C.h)>>>0).toString(N);if(C=U,k(C))return B+V;for(;6>B.length;)B="0"+B;V=B+V}},t.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function k(N){if(N.h!=0)return!1;for(var R=0;R<N.g.length;R++)if(N.g[R]!=0)return!1;return!0}function H(N){return N.h==-1}t.l=function(N){return N=$(this,N),H(N)?-1:k(N)?0:1};function O(N){for(var R=N.g.length,C=[],V=0;V<R;V++)C[V]=~N.g[V];return new c(C,~N.h).add(T)}t.abs=function(){return H(this)?O(this):this},t.add=function(N){for(var R=Math.max(this.g.length,N.g.length),C=[],V=0,U=0;U<=R;U++){var B=V+(this.i(U)&65535)+(N.i(U)&65535),I=(B>>>16)+(this.i(U)>>>16)+(N.i(U)>>>16);V=I>>>16,B&=65535,I&=65535,C[U]=I<<16|B}return new c(C,C[C.length-1]&-2147483648?-1:0)};function $(N,R){return N.add(O(R))}t.j=function(N){if(k(this)||k(N))return w;if(H(this))return H(N)?O(this).j(O(N)):O(O(this).j(N));if(H(N))return O(this.j(O(N)));if(0>this.l(A)&&0>N.l(A))return g(this.m()*N.m());for(var R=this.g.length+N.g.length,C=[],V=0;V<2*R;V++)C[V]=0;for(V=0;V<this.g.length;V++)for(var U=0;U<N.g.length;U++){var B=this.i(V)>>>16,I=this.i(V)&65535,He=N.i(U)>>>16,We=N.i(U)&65535;C[2*V+2*U]+=I*We,ee(C,2*V+2*U),C[2*V+2*U+1]+=B*We,ee(C,2*V+2*U+1),C[2*V+2*U+1]+=I*He,ee(C,2*V+2*U+1),C[2*V+2*U+2]+=B*He,ee(C,2*V+2*U+2)}for(V=0;V<R;V++)C[V]=C[2*V+1]<<16|C[2*V];for(V=R;V<2*R;V++)C[V]=0;return new c(C,0)};function ee(N,R){for(;(N[R]&65535)!=N[R];)N[R+1]+=N[R]>>>16,N[R]&=65535,R++}function X(N,R){this.g=N,this.h=R}function ce(N,R){if(k(R))throw Error("division by zero");if(k(N))return new X(w,w);if(H(N))return R=ce(O(N),R),new X(O(R.g),O(R.h));if(H(R))return R=ce(N,O(R)),new X(O(R.g),R.h);if(30<N.g.length){if(H(N)||H(R))throw Error("slowDivide_ only works with positive integers.");for(var C=T,V=R;0>=V.l(N);)C=ue(C),V=ue(V);var U=z(C,1),B=z(V,1);for(V=z(V,2),C=z(C,2);!k(V);){var I=B.add(V);0>=I.l(N)&&(U=U.add(C),B=I),V=z(V,1),C=z(C,1)}return R=$(N,U.j(R)),new X(U,R)}for(U=w;0<=N.l(R);){for(C=Math.max(1,Math.floor(N.m()/R.m())),V=Math.ceil(Math.log(C)/Math.LN2),V=48>=V?1:Math.pow(2,V-48),B=g(C),I=B.j(R);H(I)||0<I.l(N);)C-=V,B=g(C),I=B.j(R);k(B)&&(B=T),U=U.add(B),N=$(N,I)}return new X(U,N)}t.A=function(N){return ce(this,N).h},t.and=function(N){for(var R=Math.max(this.g.length,N.g.length),C=[],V=0;V<R;V++)C[V]=this.i(V)&N.i(V);return new c(C,this.h&N.h)},t.or=function(N){for(var R=Math.max(this.g.length,N.g.length),C=[],V=0;V<R;V++)C[V]=this.i(V)|N.i(V);return new c(C,this.h|N.h)},t.xor=function(N){for(var R=Math.max(this.g.length,N.g.length),C=[],V=0;V<R;V++)C[V]=this.i(V)^N.i(V);return new c(C,this.h^N.h)};function ue(N){for(var R=N.g.length+1,C=[],V=0;V<R;V++)C[V]=N.i(V)<<1|N.i(V-1)>>>31;return new c(C,N.h)}function z(N,R){var C=R>>5;R%=32;for(var V=N.g.length-C,U=[],B=0;B<V;B++)U[B]=0<R?N.i(B+C)>>>R|N.i(B+C+1)<<32-R:N.i(B+C);return new c(U,N.h)}a.prototype.digest=a.prototype.v,a.prototype.reset=a.prototype.s,a.prototype.update=a.prototype.u,ew=a,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=_,Ka=c}).apply(typeof yb<"u"?yb:typeof self<"u"?self:typeof window<"u"?window:{});var qh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tw,Lu,nw,ff,Sg,rw,iw,aw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,v,b){return h==Array.prototype||h==Object.prototype||(h[v]=b.value),h};function n(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof qh=="object"&&qh];for(var v=0;v<h.length;++v){var b=h[v];if(b&&b.Math==Math)return b}throw Error("Cannot find global object")}var a=n(this);function s(h,v){if(v)e:{var b=a;h=h.split(".");for(var x=0;x<h.length-1;x++){var G=h[x];if(!(G in b))break e;b=b[G]}h=h[h.length-1],x=b[h],v=v(x),v!=x&&v!=null&&e(b,h,{configurable:!0,writable:!0,value:v})}}function l(h,v){h instanceof String&&(h+="");var b=0,x=!1,G={next:function(){if(!x&&b<h.length){var te=b++;return{value:v(te,h[te]),done:!1}}return x=!0,{done:!0,value:void 0}}};return G[Symbol.iterator]=function(){return G},G}s("Array.prototype.values",function(h){return h||function(){return l(this,function(v,b){return b})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var v=typeof h;return v=v!="object"?v:h?Array.isArray(h)?"array":v:"null",v=="array"||v=="object"&&typeof h.length=="number"}function g(h){var v=typeof h;return v=="object"&&h!=null||v=="function"}function _(h,v,b){return h.call.apply(h.bind,arguments)}function w(h,v,b){if(!h)throw Error();if(2<arguments.length){var x=Array.prototype.slice.call(arguments,2);return function(){var G=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(G,x),h.apply(v,G)}}return function(){return h.apply(v,arguments)}}function T(h,v,b){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:w,T.apply(null,arguments)}function A(h,v){var b=Array.prototype.slice.call(arguments,1);return function(){var x=b.slice();return x.push.apply(x,arguments),h.apply(this,x)}}function k(h,v){function b(){}b.prototype=v.prototype,h.aa=v.prototype,h.prototype=new b,h.prototype.constructor=h,h.Qb=function(x,G,te){for(var ge=Array(arguments.length-2),at=2;at<arguments.length;at++)ge[at-2]=arguments[at];return v.prototype[G].apply(x,ge)}}function H(h){const v=h.length;if(0<v){const b=Array(v);for(let x=0;x<v;x++)b[x]=h[x];return b}return[]}function O(h,v){for(let b=1;b<arguments.length;b++){const x=arguments[b];if(p(x)){const G=h.length||0,te=x.length||0;h.length=G+te;for(let ge=0;ge<te;ge++)h[G+ge]=x[ge]}else h.push(x)}}class ${constructor(v,b){this.i=v,this.j=b,this.h=0,this.g=null}get(){let v;return 0<this.h?(this.h--,v=this.g,this.g=v.next,v.next=null):v=this.i(),v}}function ee(h){return/^[\s\xa0]*$/.test(h)}function X(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function ce(h){return ce[" "](h),h}ce[" "]=function(){};var ue=X().indexOf("Gecko")!=-1&&!(X().toLowerCase().indexOf("webkit")!=-1&&X().indexOf("Edge")==-1)&&!(X().indexOf("Trident")!=-1||X().indexOf("MSIE")!=-1)&&X().indexOf("Edge")==-1;function z(h,v,b){for(const x in h)v.call(b,h[x],x,h)}function N(h,v){for(const b in h)v.call(void 0,h[b],b,h)}function R(h){const v={};for(const b in h)v[b]=h[b];return v}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function V(h,v){let b,x;for(let G=1;G<arguments.length;G++){x=arguments[G];for(b in x)h[b]=x[b];for(let te=0;te<C.length;te++)b=C[te],Object.prototype.hasOwnProperty.call(x,b)&&(h[b]=x[b])}}function U(h){var v=1;h=h.split(":");const b=[];for(;0<v&&h.length;)b.push(h.shift()),v--;return h.length&&b.push(h.join(":")),b}function B(h){d.setTimeout(()=>{throw h},0)}function I(){var h=Ne;let v=null;return h.g&&(v=h.g,h.g=h.g.next,h.g||(h.h=null),v.next=null),v}class He{constructor(){this.h=this.g=null}add(v,b){const x=We.get();x.set(v,b),this.h?this.h.next=x:this.g=x,this.h=x}}var We=new $(()=>new W,h=>h.reset());class W{constructor(){this.next=this.g=this.h=null}set(v,b){this.h=v,this.g=b,this.next=null}reset(){this.next=this.g=this.h=null}}let pe,ye=!1,Ne=new He,P=()=>{const h=d.Promise.resolve(void 0);pe=()=>{h.then(re)}};var re=()=>{for(var h;h=I();){try{h.h.call(h.g)}catch(b){B(b)}var v=We;v.j(h),100>v.h&&(v.h++,h.next=v.g,v.g=h)}ye=!1};function me(){this.s=this.s,this.C=this.C}me.prototype.s=!1,me.prototype.ma=function(){this.s||(this.s=!0,this.N())},me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(h,v){this.type=h,this.g=this.target=v,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var be=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,v=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const b=()=>{};d.addEventListener("test",b,v),d.removeEventListener("test",b,v)}catch{}return h}();function Ve(h,v){if(he.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var b=this.type=h.type,x=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=v,v=h.relatedTarget){if(ue){e:{try{ce(v.nodeName);var G=!0;break e}catch{}G=!1}G||(v=null)}}else b=="mouseover"?v=h.fromElement:b=="mouseout"&&(v=h.toElement);this.relatedTarget=v,x?(this.clientX=x.clientX!==void 0?x.clientX:x.pageX,this.clientY=x.clientY!==void 0?x.clientY:x.pageY,this.screenX=x.screenX||0,this.screenY=x.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Ce[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Ve.aa.h.call(this)}}k(Ve,he);var Ce={2:"touch",3:"pen",4:"mouse"};Ve.prototype.h=function(){Ve.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Dt="closure_listenable_"+(1e6*Math.random()|0),it=0;function $t(h,v,b,x,G){this.listener=h,this.proxy=null,this.src=v,this.type=b,this.capture=!!x,this.ha=G,this.key=++it,this.da=this.fa=!1}function _t(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Bt(h){this.src=h,this.g={},this.h=0}Bt.prototype.add=function(h,v,b,x,G){var te=h.toString();h=this.g[te],h||(h=this.g[te]=[],this.h++);var ge=Ei(h,v,x,G);return-1<ge?(v=h[ge],b||(v.fa=!1)):(v=new $t(v,this.src,te,!!x,G),v.fa=b,h.push(v)),v};function nn(h,v){var b=v.type;if(b in h.g){var x=h.g[b],G=Array.prototype.indexOf.call(x,v,void 0),te;(te=0<=G)&&Array.prototype.splice.call(x,G,1),te&&(_t(v),h.g[b].length==0&&(delete h.g[b],h.h--))}}function Ei(h,v,b,x){for(var G=0;G<h.length;++G){var te=h[G];if(!te.da&&te.listener==v&&te.capture==!!b&&te.ha==x)return G}return-1}var kn="closure_lm_"+(1e6*Math.random()|0),cs={};function ro(h,v,b,x,G){if(Array.isArray(v)){for(var te=0;te<v.length;te++)ro(h,v[te],b,x,G);return null}return b=oa(b),h&&h[Dt]?h.K(v,b,g(x)?!!x.capture:!1,G):Vn(h,v,b,!1,x,G)}function Vn(h,v,b,x,G,te){if(!v)throw Error("Invalid event type");var ge=g(G)?!!G.capture:!!G,at=dr(h);if(at||(h[kn]=at=new Bt(h)),b=at.add(v,b,x,ge,te),b.proxy)return b;if(x=Rl(),b.proxy=x,x.src=h,x.listener=b,h.addEventListener)be||(G=ge),G===void 0&&(G=!1),h.addEventListener(v.toString(),x,G);else if(h.attachEvent)h.attachEvent(Ti(v.toString()),x);else if(h.addListener&&h.removeListener)h.addListener(x);else throw Error("addEventListener and attachEvent are unavailable.");return b}function Rl(){function h(b){return v.call(h.src,h.listener,b)}const v=jr;return h}function hs(h,v,b,x,G){if(Array.isArray(v))for(var te=0;te<v.length;te++)hs(h,v[te],b,x,G);else x=g(x)?!!x.capture:!!x,b=oa(b),h&&h[Dt]?(h=h.i,v=String(v).toString(),v in h.g&&(te=h.g[v],b=Ei(te,b,x,G),-1<b&&(_t(te[b]),Array.prototype.splice.call(te,b,1),te.length==0&&(delete h.g[v],h.h--)))):h&&(h=dr(h))&&(v=h.g[v.toString()],h=-1,v&&(h=Ei(v,b,x,G)),(b=-1<h?v[h]:null)&&aa(b))}function aa(h){if(typeof h!="number"&&h&&!h.da){var v=h.src;if(v&&v[Dt])nn(v.i,h);else{var b=h.type,x=h.proxy;v.removeEventListener?v.removeEventListener(b,x,h.capture):v.detachEvent?v.detachEvent(Ti(b),x):v.addListener&&v.removeListener&&v.removeListener(x),(b=dr(v))?(nn(b,h),b.h==0&&(b.src=null,v[kn]=null)):_t(h)}}}function Ti(h){return h in cs?cs[h]:cs[h]="on"+h}function jr(h,v){if(h.da)h=!0;else{v=new Ve(v,this);var b=h.listener,x=h.ha||h.src;h.fa&&aa(h),h=b.call(x,v)}return h}function dr(h){return h=h[kn],h instanceof Bt?h:null}var sa="__closure_events_fn_"+(1e9*Math.random()>>>0);function oa(h){return typeof h=="function"?h:(h[sa]||(h[sa]=function(v){return h.handleEvent(v)}),h[sa])}function ht(){me.call(this),this.i=new Bt(this),this.M=this,this.F=null}k(ht,me),ht.prototype[Dt]=!0,ht.prototype.removeEventListener=function(h,v,b,x){hs(this,h,v,b,x)};function Ke(h,v){var b,x=h.F;if(x)for(b=[];x;x=x.F)b.push(x);if(h=h.M,x=v.type||v,typeof v=="string")v=new he(v,h);else if(v instanceof he)v.target=v.target||h;else{var G=v;v=new he(x,h),V(v,G)}if(G=!0,b)for(var te=b.length-1;0<=te;te--){var ge=v.g=b[te];G=Rn(ge,x,!0,v)&&G}if(ge=v.g=h,G=Rn(ge,x,!0,v)&&G,G=Rn(ge,x,!1,v)&&G,b)for(te=0;te<b.length;te++)ge=v.g=b[te],G=Rn(ge,x,!1,v)&&G}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var h=this.i,v;for(v in h.g){for(var b=h.g[v],x=0;x<b.length;x++)_t(b[x]);delete h.g[v],h.h--}}this.F=null},ht.prototype.K=function(h,v,b,x){return this.i.add(String(h),v,!1,b,x)},ht.prototype.L=function(h,v,b,x){return this.i.add(String(h),v,!0,b,x)};function Rn(h,v,b,x){if(v=h.i.g[String(v)],!v)return!0;v=v.concat();for(var G=!0,te=0;te<v.length;++te){var ge=v[te];if(ge&&!ge.da&&ge.capture==b){var at=ge.listener,rn=ge.ha||ge.src;ge.fa&&nn(h.i,ge),G=at.call(rn,x)!==!1&&G}}return G&&!x.defaultPrevented}function Yt(h,v,b){if(typeof h=="function")b&&(h=T(h,b));else if(h&&typeof h.handleEvent=="function")h=T(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(v)?-1:d.setTimeout(h,v||0)}function io(h){h.g=Yt(()=>{h.g=null,h.i&&(h.i=!1,io(h))},h.l);const v=h.h;h.h=null,h.m.apply(null,v)}class mr extends me{constructor(v,b){super(),this.m=v,this.l=b,this.h=null,this.i=!1,this.g=null}j(v){this.h=arguments,this.g?this.i=!0:io(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $r(h){me.call(this),this.h=h,this.g={}}k($r,me);var Yr=[];function Kr(h){z(h.g,function(v,b){this.g.hasOwnProperty(b)&&aa(v)},h),h.g={}}$r.prototype.N=function(){$r.aa.N.call(this),Kr(this)},$r.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Jn=d.JSON.stringify,wi=d.JSON.parse,pr=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function la(){}la.prototype.h=null;function Si(h){return h.h||(h.h=h.i())}function fs(){}var gr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function kr(){he.call(this,"d")}k(kr,he);function ua(){he.call(this,"c")}k(ua,he);var Ln={},Qr=null;function Xr(){return Qr=Qr||new ht}Ln.La="serverreachability";function ca(h){he.call(this,Ln.La,h)}k(ca,he);function j(h){const v=Xr();Ke(v,new ca(v))}Ln.STAT_EVENT="statevent";function q(h,v){he.call(this,Ln.STAT_EVENT,h),this.stat=v}k(q,he);function Q(h){const v=Xr();Ke(v,new q(v,h))}Ln.Ma="timingevent";function oe(h,v){he.call(this,Ln.Ma,h),this.size=v}k(oe,he);function de(h,v){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},v)}function ve(){this.g=!0}ve.prototype.xa=function(){this.g=!1};function Ae(h,v,b,x,G,te){h.info(function(){if(h.g)if(te)for(var ge="",at=te.split("&"),rn=0;rn<at.length;rn++){var st=at[rn].split("=");if(1<st.length){var fn=st[0];st=st[1];var an=fn.split("_");ge=2<=an.length&&an[1]=="type"?ge+(fn+"="+st+"&"):ge+(fn+"=redacted&")}}else ge=null;else ge=te;return"XMLHTTP REQ ("+x+") [attempt "+G+"]: "+v+`
`+b+`
`+ge})}function Te(h,v,b,x,G,te,ge){h.info(function(){return"XMLHTTP RESP ("+x+") [ attempt "+G+"]: "+v+`
`+b+`
`+te+" "+ge})}function we(h,v,b,x){h.info(function(){return"XMLHTTP TEXT ("+v+"): "+Se(h,b)+(x?" "+x:"")})}function De(h,v){h.info(function(){return"TIMEOUT: "+v})}ve.prototype.info=function(){};function Se(h,v){if(!h.g)return v;if(!v)return null;try{var b=JSON.parse(v);if(b){for(h=0;h<b.length;h++)if(Array.isArray(b[h])){var x=b[h];if(!(2>x.length)){var G=x[1];if(Array.isArray(G)&&!(1>G.length)){var te=G[0];if(te!="noop"&&te!="stop"&&te!="close")for(var ge=1;ge<G.length;ge++)G[ge]=""}}}}return Jn(b)}catch{return v}}var xe={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qe={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ut;function At(){}k(At,la),At.prototype.g=function(){return new XMLHttpRequest},At.prototype.i=function(){return{}},ut=new At;function ft(h,v,b,x){this.j=h,this.i=v,this.l=b,this.R=x||1,this.U=new $r(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Be}function Be(){this.i=null,this.g="",this.h=!1}var dt={},$n={};function vn(h,v,b){h.L=1,h.v=ps(nr(v)),h.m=b,h.P=!0,cn(h,null)}function cn(h,v){h.F=Date.now(),er(h),h.A=nr(h.v);var b=h.A,x=h.R;Array.isArray(x)||(x=[String(x)]),Ol(b.i,"t",x),h.C=0,b=h.j.J,h.h=new Be,h.g=Lc(h.j,b?v:null,!h.m),0<h.O&&(h.M=new mr(T(h.Y,h,h.g),h.O)),v=h.U,b=h.g,x=h.ca;var G="readystatechange";Array.isArray(G)||(G&&(Yr[0]=G.toString()),G=Yr);for(var te=0;te<G.length;te++){var ge=ro(b,G[te],x||v.handleEvent,!1,v.h||v);if(!ge)break;v.g[ge.key]=ge}v=h.H?R(h.H):{},h.m?(h.u||(h.u="POST"),v["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,v)):(h.u="GET",h.g.ea(h.A,h.u,null,v)),j(),Ae(h.i,h.u,h.A,h.l,h.R,h.m)}ft.prototype.ca=function(h){h=h.target;const v=this.M;v&&Er(h)==3?v.j():this.Y(h)},ft.prototype.Y=function(h){try{if(h==this.g)e:{const an=Er(this.g);var v=this.g.Ba();const Oi=this.g.Z();if(!(3>an)&&(an!=3||this.g&&(this.h.h||this.g.oa()||Nc(this.g)))){this.J||an!=4||v==7||(v==8||0>=Oi?j(3):j(2)),tr(this);var b=this.g.Z();this.X=b;t:if(Un(this)){var x=Nc(this.g);h="";var G=x.length,te=Er(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ue(this),zn(this);var ge="";break t}this.h.i=new d.TextDecoder}for(v=0;v<G;v++)this.h.h=!0,h+=this.h.i.decode(x[v],{stream:!(te&&v==G-1)});x.length=0,this.h.g+=h,this.C=0,ge=this.h.g}else ge=this.g.oa();if(this.o=b==200,Te(this.i,this.u,this.A,this.l,this.R,an,b),this.o){if(this.T&&!this.K){t:{if(this.g){var at,rn=this.g;if((at=rn.g?rn.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ee(at)){var st=at;break t}}st=null}if(b=st)we(this.i,this.l,b,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jt(this,b);else{this.o=!1,this.s=3,Q(12),Ue(this),zn(this);break e}}if(this.P){b=!0;let _n;for(;!this.J&&this.C<ge.length;)if(_n=ha(this,ge),_n==$n){an==4&&(this.s=4,Q(14),b=!1),we(this.i,this.l,null,"[Incomplete Response]");break}else if(_n==dt){this.s=4,Q(15),we(this.i,this.l,ge,"[Invalid Chunk]"),b=!1;break}else we(this.i,this.l,_n,null),jt(this,_n);if(Un(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),an!=4||ge.length!=0||this.h.h||(this.s=1,Q(16),b=!1),this.o=this.o&&b,!b)we(this.i,this.l,ge,"[Invalid Chunked Response]"),Ue(this),zn(this);else if(0<ge.length&&!this.W){this.W=!0;var fn=this.j;fn.g==this&&fn.ba&&!fn.M&&(fn.j.info("Great, no buffering proxy detected. Bytes received: "+ge.length),ws(fn),fn.M=!0,Q(11))}}else we(this.i,this.l,ge,null),jt(this,ge);an==4&&Ue(this),this.o&&!this.J&&(an==4?jc(this.j,this):(this.o=!1,er(this)))}else zd(this.g),b==400&&0<ge.indexOf("Unknown SID")?(this.s=3,Q(12)):(this.s=0,Q(13)),Ue(this),zn(this)}}}catch{}finally{}};function Un(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function ha(h,v){var b=h.C,x=v.indexOf(`
`,b);return x==-1?$n:(b=Number(v.substring(b,x)),isNaN(b)?dt:(x+=1,x+b>v.length?$n:(v=v.slice(x,x+b),h.C=x+b,v)))}ft.prototype.cancel=function(){this.J=!0,Ue(this)};function er(h){h.S=Date.now()+h.I,yr(h,h.I)}function yr(h,v){if(h.B!=null)throw Error("WatchDog timer not null");h.B=de(T(h.ba,h),v)}function tr(h){h.B&&(d.clearTimeout(h.B),h.B=null)}ft.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(De(this.i,this.A),this.L!=2&&(j(),Q(17)),Ue(this),this.s=2,zn(this)):yr(this,this.S-h)};function zn(h){h.j.G==0||h.J||jc(h.j,h)}function Ue(h){tr(h);var v=h.M;v&&typeof v.ma=="function"&&v.ma(),h.M=null,Kr(h.U),h.g&&(v=h.g,h.g=null,v.abort(),v.ma())}function jt(h,v){try{var b=h.j;if(b.G!=0&&(b.g==h||fa(b.h,h))){if(!h.K&&fa(b.h,h)&&b.G==3){try{var x=b.Da.g.parse(v)}catch{x=null}if(Array.isArray(x)&&x.length==3){var G=x;if(G[0]==0){e:if(!b.u){if(b.g)if(b.g.F+3e3<h.F)mo(b),ho(b);else break e;Vl(b),Q(18)}}else b.za=G[1],0<b.za-b.T&&37500>G[2]&&b.F&&b.v==0&&!b.C&&(b.C=de(T(b.Za,b),6e3));if(1>=Vr(b.h)&&b.ca){try{b.ca()}catch{}b.ca=void 0}}else Di(b,11)}else if((h.K||b.g==h)&&mo(b),!ee(v))for(G=b.Da.g.parse(v),v=0;v<G.length;v++){let st=G[v];if(b.T=st[0],st=st[1],b.G==2)if(st[0]=="c"){b.K=st[1],b.ia=st[2];const fn=st[3];fn!=null&&(b.la=fn,b.j.info("VER="+b.la));const an=st[4];an!=null&&(b.Aa=an,b.j.info("SVER="+b.Aa));const Oi=st[5];Oi!=null&&typeof Oi=="number"&&0<Oi&&(x=1.5*Oi,b.L=x,b.j.info("backChannelRequestTimeoutMs_="+x)),x=b;const _n=h.g;if(_n){const ri=_n.g?_n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ri){var te=x.h;te.g||ri.indexOf("spdy")==-1&&ri.indexOf("quic")==-1&&ri.indexOf("h2")==-1||(te.j=te.l,te.g=new Set,te.h&&(da(te,te.h),te.h=null))}if(x.D){const Ul=_n.g?_n.g.getResponseHeader("X-HTTP-Session-Id"):null;Ul&&(x.ya=Ul,Tt(x.I,x.D,Ul))}}b.G=3,b.l&&b.l.ua(),b.ba&&(b.R=Date.now()-h.F,b.j.info("Handshake RTT: "+b.R+"ms")),x=b;var ge=h;if(x.qa=Vc(x,x.J?x.ia:null,x.W),ge.K){Fn(x.h,ge);var at=ge,rn=x.L;rn&&(at.I=rn),at.B&&(tr(at),er(at)),x.g=ge}else Mc(x);0<b.i.length&&fo(b)}else st[0]!="stop"&&st[0]!="close"||Di(b,7);else b.G==3&&(st[0]=="stop"||st[0]=="close"?st[0]=="stop"?Di(b,7):jl(b):st[0]!="noop"&&b.l&&b.l.ta(st),b.v=0)}}j(4)}catch{}}var xi=class{constructor(h,v){this.g=h,this.map=v}};function Bn(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function It(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Vr(h){return h.h?1:h.g?h.g.size:0}function fa(h,v){return h.h?h.h==v:h.g?h.g.has(v):!1}function da(h,v){h.g?h.g.add(v):h.h=v}function Fn(h,v){h.h&&h.h==v?h.h=null:h.g&&h.g.has(v)&&h.g.delete(v)}Bn.prototype.cancel=function(){if(this.i=Cl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Cl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let v=h.i;for(const b of h.g.values())v=v.concat(b.D);return v}return H(h.i)}function kd(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var v=[],b=h.length,x=0;x<b;x++)v.push(h[x]);return v}v=[],b=0;for(x in h)v[b++]=h[x];return v}function ao(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var v=[];h=h.length;for(var b=0;b<h;b++)v.push(b);return v}v=[],b=0;for(const x in h)v[b++]=x;return v}}}function Il(h,v){if(h.forEach&&typeof h.forEach=="function")h.forEach(v,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,v,void 0);else for(var b=ao(h),x=kd(h),G=x.length,te=0;te<G;te++)v.call(void 0,x[te],b&&b[te],h)}var ds=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vd(h,v){if(h){h=h.split("&");for(var b=0;b<h.length;b++){var x=h[b].indexOf("="),G=null;if(0<=x){var te=h[b].substring(0,x);G=h[b].substring(x+1)}else te=h[b];v(te,G?decodeURIComponent(G.replace(/\+/g," ")):"")}}}function Kt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Kt){this.h=h.h,ms(this,h.j),this.o=h.o,this.g=h.g,ma(this,h.s),this.l=h.l;var v=h.i,b=new Ri;b.i=v.i,v.g&&(b.g=new Map(v.g),b.h=v.h),Ai(this,b),this.m=h.m}else h&&(v=String(h).match(ds))?(this.h=!1,ms(this,v[1]||"",!0),this.o=vr(v[2]||""),this.g=vr(v[3]||"",!0),ma(this,v[4]),this.l=vr(v[5]||"",!0),Ai(this,v[6]||"",!0),this.m=vr(v[7]||"")):(this.h=!1,this.i=new Ri(null,this.h))}Kt.prototype.toString=function(){var h=[],v=this.j;v&&h.push(gs(v,Nl,!0),":");var b=this.g;return(b||v=="file")&&(h.push("//"),(v=this.o)&&h.push(gs(v,Nl,!0),"@"),h.push(encodeURIComponent(String(b)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),b=this.s,b!=null&&h.push(":",String(b))),(b=this.l)&&(this.g&&b.charAt(0)!="/"&&h.push("/"),h.push(gs(b,b.charAt(0)=="/"?Ld:Dl,!0))),(b=this.i.toString())&&h.push("?",b),(b=this.m)&&h.push("#",gs(b,so)),h.join("")};function nr(h){return new Kt(h)}function ms(h,v,b){h.j=b?vr(v,!0):v,h.j&&(h.j=h.j.replace(/:$/,""))}function ma(h,v){if(v){if(v=Number(v),isNaN(v)||0>v)throw Error("Bad port number "+v);h.s=v}else h.s=null}function Ai(h,v,b){v instanceof Ri?(h.i=v,Cc(h.i,h.h)):(b||(v=gs(v,Ud)),h.i=new Ri(v,h.h))}function Tt(h,v,b){h.i.set(v,b)}function ps(h){return Tt(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function vr(h,v){return h?v?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function gs(h,v,b){return typeof h=="string"?(h=encodeURI(h).replace(v,Rc),b&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Rc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Nl=/[#\/\?@]/g,Dl=/[#\?:]/g,Ld=/[#\?]/g,Ud=/[#\?@]/g,so=/#/g;function Ri(h,v){this.h=this.g=null,this.i=h||null,this.j=!!v}function _r(h){h.g||(h.g=new Map,h.h=0,h.i&&Vd(h.i,function(v,b){h.add(decodeURIComponent(v.replace(/\+/g," ")),b)}))}t=Ri.prototype,t.add=function(h,v){_r(this),this.i=null,h=Wr(this,h);var b=this.g.get(h);return b||this.g.set(h,b=[]),b.push(v),this.h+=1,this};function Ci(h,v){_r(h),v=Wr(h,v),h.g.has(v)&&(h.i=null,h.h-=h.g.get(v).length,h.g.delete(v))}function Ii(h,v){return _r(h),v=Wr(h,v),h.g.has(v)}t.forEach=function(h,v){_r(this),this.g.forEach(function(b,x){b.forEach(function(G){h.call(v,G,x,this)},this)},this)},t.na=function(){_r(this);const h=Array.from(this.g.values()),v=Array.from(this.g.keys()),b=[];for(let x=0;x<v.length;x++){const G=h[x];for(let te=0;te<G.length;te++)b.push(v[x])}return b},t.V=function(h){_r(this);let v=[];if(typeof h=="string")Ii(this,h)&&(v=v.concat(this.g.get(Wr(this,h))));else{h=Array.from(this.g.values());for(let b=0;b<h.length;b++)v=v.concat(h[b])}return v},t.set=function(h,v){return _r(this),this.i=null,h=Wr(this,h),Ii(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[v]),this.h+=1,this},t.get=function(h,v){return h?(h=this.V(h),0<h.length?String(h[0]):v):v};function Ol(h,v,b){Ci(h,v),0<b.length&&(h.i=null,h.g.set(Wr(h,v),H(b)),h.h+=b.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],v=Array.from(this.g.keys());for(var b=0;b<v.length;b++){var x=v[b];const te=encodeURIComponent(String(x)),ge=this.V(x);for(x=0;x<ge.length;x++){var G=te;ge[x]!==""&&(G+="="+encodeURIComponent(String(ge[x]))),h.push(G)}}return this.i=h.join("&")};function Wr(h,v){return v=String(v),h.j&&(v=v.toLowerCase()),v}function Cc(h,v){v&&!h.j&&(_r(h),h.i=null,h.g.forEach(function(b,x){var G=x.toLowerCase();x!=G&&(Ci(this,x),Ol(this,G,b))},h)),h.j=v}function ys(h,v){const b=new ve;if(d.Image){const x=new Image;x.onload=A(br,b,"TestLoadImage: loaded",!0,v,x),x.onerror=A(br,b,"TestLoadImage: error",!1,v,x),x.onabort=A(br,b,"TestLoadImage: abort",!1,v,x),x.ontimeout=A(br,b,"TestLoadImage: timeout",!1,v,x),d.setTimeout(function(){x.ontimeout&&x.ontimeout()},1e4),x.src=h}else v(!1)}function Lr(h,v){const b=new ve,x=new AbortController,G=setTimeout(()=>{x.abort(),br(b,"TestPingServer: timeout",!1,v)},1e4);fetch(h,{signal:x.signal}).then(te=>{clearTimeout(G),te.ok?br(b,"TestPingServer: ok",!0,v):br(b,"TestPingServer: server error",!1,v)}).catch(()=>{clearTimeout(G),br(b,"TestPingServer: error",!1,v)})}function br(h,v,b,x,G){try{G&&(G.onload=null,G.onerror=null,G.onabort=null,G.ontimeout=null),x(b)}catch{}}function vs(){this.g=new pr}function Zr(h,v,b){const x=b||"";try{Il(h,function(G,te){let ge=G;g(G)&&(ge=Jn(G)),v.push(x+te+"="+encodeURIComponent(ge))})}catch(G){throw v.push(x+"type="+encodeURIComponent("_badmap")),G}}function pa(h){this.l=h.Ub||null,this.j=h.eb||!1}k(pa,la),pa.prototype.g=function(){return new Ni(this.l,this.j)},pa.prototype.i=function(h){return function(){return h}}({});function Ni(h,v){ht.call(this),this.D=h,this.o=v,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Ni,ht),t=Ni.prototype,t.open=function(h,v){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=v,this.readyState=1,ei(this)},t.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const v={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(v.body=h),(this.D||d).fetch(new Request(this.A,v)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jr(this)),this.readyState=0},t.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,ei(this)),this.g&&(this.readyState=3,ei(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ml(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ml(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}t.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var v=h.value?h.value:new Uint8Array(0);(v=this.v.decode(v,{stream:!h.done}))&&(this.response=this.responseText+=v)}h.done?Jr(this):ei(this),this.readyState==3&&Ml(this)}},t.Ra=function(h){this.g&&(this.response=this.responseText=h,Jr(this))},t.Qa=function(h){this.g&&(this.response=h,Jr(this))},t.ga=function(){this.g&&Jr(this)};function Jr(h){h.readyState=4,h.l=null,h.j=null,h.v=null,ei(h)}t.setRequestHeader=function(h,v){this.u.append(h,v)},t.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],v=this.h.entries();for(var b=v.next();!b.done;)b=b.value,h.push(b[0]+": "+b[1]),b=v.next();return h.join(`\r
`)};function ei(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Ni.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Pl(h){let v="";return z(h,function(b,x){v+=x,v+=":",v+=b,v+=`\r
`}),v}function hn(h,v,b){e:{for(x in b){var x=!1;break e}x=!0}x||(b=Pl(b),typeof h=="string"?b!=null&&encodeURIComponent(String(b)):Tt(h,v,b))}function pt(h){ht.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(pt,ht);var oo=/^https?$/i,_s=["POST","PUT"];t=pt.prototype,t.Ha=function(h){this.J=h},t.ea=function(h,v,b,x){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);v=v?v.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ut.g(),this.v=this.o?Si(this.o):Si(ut),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(v,String(h),!0),this.B=!1}catch(te){Ic(this,te);return}if(h=b||"",b=new Map(this.headers),x)if(Object.getPrototypeOf(x)===Object.prototype)for(var G in x)b.set(G,x[G]);else if(typeof x.keys=="function"&&typeof x.get=="function")for(const te of x.keys())b.set(te,x.get(te));else throw Error("Unknown input type for opt_headers: "+String(x));x=Array.from(b.keys()).find(te=>te.toLowerCase()=="content-type"),G=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(_s,v,void 0))||x||G||b.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[te,ge]of b)this.g.setRequestHeader(te,ge);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bs(this),this.u=!0,this.g.send(h),this.u=!1}catch(te){Ic(this,te)}};function Ic(h,v){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=v,h.m=5,lo(h),ti(h)}function lo(h){h.A||(h.A=!0,Ke(h,"complete"),Ke(h,"error"))}t.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Ke(this,"complete"),Ke(this,"abort"),ti(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ti(this,!0)),pt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?uo(this):this.bb())},t.bb=function(){uo(this)};function uo(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Er(h)!=4||h.Z()!=2)){if(h.u&&Er(h)==4)Yt(h.Ea,0,h);else if(Ke(h,"readystatechange"),Er(h)==4){h.h=!1;try{const ge=h.Z();e:switch(ge){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var v=!0;break e;default:v=!1}var b;if(!(b=v)){var x;if(x=ge===0){var G=String(h.D).match(ds)[1]||null;!G&&d.self&&d.self.location&&(G=d.self.location.protocol.slice(0,-1)),x=!oo.test(G?G.toLowerCase():"")}b=x}if(b)Ke(h,"complete"),Ke(h,"success");else{h.m=6;try{var te=2<Er(h)?h.g.statusText:""}catch{te=""}h.l=te+" ["+h.Z()+"]",lo(h)}}finally{ti(h)}}}}function ti(h,v){if(h.g){bs(h);const b=h.g,x=h.v[0]?()=>{}:null;h.g=null,h.v=null,v||Ke(h,"ready");try{b.onreadystatechange=x}catch{}}}function bs(h){h.I&&(d.clearTimeout(h.I),h.I=null)}t.isActive=function(){return!!this.g};function Er(h){return h.g?h.g.readyState:0}t.Z=function(){try{return 2<Er(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(h){if(this.g){var v=this.g.responseText;return h&&v.indexOf(h)==0&&(v=v.substring(h.length)),wi(v)}};function Nc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function zd(h){const v={};h=(h.g&&2<=Er(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let x=0;x<h.length;x++){if(ee(h[x]))continue;var b=U(h[x]);const G=b[0];if(b=b[1],typeof b!="string")continue;b=b.trim();const te=v[G]||[];v[G]=te,te.push(b)}N(v,function(x){return x.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Es(h,v,b){return b&&b.internalChannelParams&&b.internalChannelParams[h]||v}function co(h){this.Aa=0,this.i=[],this.j=new ve,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Es("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Es("baseRetryDelayMs",5e3,h),this.cb=Es("retryDelaySeedMs",1e4,h),this.Wa=Es("forwardChannelMaxRetries",2,h),this.wa=Es("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Bn(h&&h.concurrentRequestLimit),this.Da=new vs,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=co.prototype,t.la=8,t.G=1,t.connect=function(h,v,b,x){Q(0),this.W=h,this.H=v||{},b&&x!==void 0&&(this.H.OSID=b,this.H.OAID=x),this.F=this.X,this.I=Vc(this,null,this.W),fo(this)};function jl(h){if(Dc(h),h.G==3){var v=h.U++,b=nr(h.I);if(Tt(b,"SID",h.K),Tt(b,"RID",v),Tt(b,"TYPE","terminate"),Ts(h,b),v=new ft(h,h.j,v),v.L=2,v.v=ps(nr(b)),b=!1,d.navigator&&d.navigator.sendBeacon)try{b=d.navigator.sendBeacon(v.v.toString(),"")}catch{}!b&&d.Image&&(new Image().src=v.v,b=!0),b||(v.g=Lc(v.j,null),v.g.ea(v.v)),v.F=Date.now(),er(v)}kc(h)}function ho(h){h.g&&(ws(h),h.g.cancel(),h.g=null)}function Dc(h){ho(h),h.u&&(d.clearTimeout(h.u),h.u=null),mo(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function fo(h){if(!It(h.h)&&!h.s){h.s=!0;var v=h.Ga;pe||P(),ye||(pe(),ye=!0),Ne.add(v,h),h.B=0}}function Bd(h,v){return Vr(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=v.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=de(T(h.Ga,h,v),Ll(h,h.B)),h.B++,!0)}t.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const G=new ft(this,this.j,h);let te=this.o;if(this.S&&(te?(te=R(te),V(te,this.S)):te=this.S),this.m!==null||this.O||(G.H=te,te=null),this.P)e:{for(var v=0,b=0;b<this.i.length;b++){t:{var x=this.i[b];if("__data__"in x.map&&(x=x.map.__data__,typeof x=="string")){x=x.length;break t}x=void 0}if(x===void 0)break;if(v+=x,4096<v){v=b;break e}if(v===4096||b===this.i.length-1){v=b+1;break e}}v=1e3}else v=1e3;v=Oc(this,G,v),b=nr(this.I),Tt(b,"RID",h),Tt(b,"CVER",22),this.D&&Tt(b,"X-HTTP-Session-Id",this.D),Ts(this,b),te&&(this.O?v="headers="+encodeURIComponent(String(Pl(te)))+"&"+v:this.m&&hn(b,this.m,te)),da(this.h,G),this.Ua&&Tt(b,"TYPE","init"),this.P?(Tt(b,"$req",v),Tt(b,"SID","null"),G.T=!0,vn(G,b,null)):vn(G,b,v),this.G=2}}else this.G==3&&(h?kl(this,h):this.i.length==0||It(this.h)||kl(this))};function kl(h,v){var b;v?b=v.l:b=h.U++;const x=nr(h.I);Tt(x,"SID",h.K),Tt(x,"RID",b),Tt(x,"AID",h.T),Ts(h,x),h.m&&h.o&&hn(x,h.m,h.o),b=new ft(h,h.j,b,h.B+1),h.m===null&&(b.H=h.o),v&&(h.i=v.D.concat(h.i)),v=Oc(h,b,1e3),b.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),da(h.h,b),vn(b,x,v)}function Ts(h,v){h.H&&z(h.H,function(b,x){Tt(v,x,b)}),h.l&&Il({},function(b,x){Tt(v,x,b)})}function Oc(h,v,b){b=Math.min(h.i.length,b);var x=h.l?T(h.l.Na,h.l,h):null;e:{var G=h.i;let te=-1;for(;;){const ge=["count="+b];te==-1?0<b?(te=G[0].g,ge.push("ofs="+te)):te=0:ge.push("ofs="+te);let at=!0;for(let rn=0;rn<b;rn++){let st=G[rn].g;const fn=G[rn].map;if(st-=te,0>st)te=Math.max(0,G[rn].g-100),at=!1;else try{Zr(fn,ge,"req"+st+"_")}catch{x&&x(fn)}}if(at){x=ge.join("&");break e}}}return h=h.i.splice(0,b),v.D=h,x}function Mc(h){if(!h.g&&!h.u){h.Y=1;var v=h.Fa;pe||P(),ye||(pe(),ye=!0),Ne.add(v,h),h.v=0}}function Vl(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=de(T(h.Fa,h),Ll(h,h.v)),h.v++,!0)}t.Fa=function(){if(this.u=null,Pc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=de(T(this.ab,this),h)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Q(10),ho(this),Pc(this))};function ws(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function Pc(h){h.g=new ft(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var v=nr(h.qa);Tt(v,"RID","rpc"),Tt(v,"SID",h.K),Tt(v,"AID",h.T),Tt(v,"CI",h.F?"0":"1"),!h.F&&h.ja&&Tt(v,"TO",h.ja),Tt(v,"TYPE","xmlhttp"),Ts(h,v),h.m&&h.o&&hn(v,h.m,h.o),h.L&&(h.g.I=h.L);var b=h.g;h=h.ia,b.L=1,b.v=ps(nr(v)),b.m=null,b.P=!0,cn(b,h)}t.Za=function(){this.C!=null&&(this.C=null,ho(this),Vl(this),Q(19))};function mo(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function jc(h,v){var b=null;if(h.g==v){mo(h),ws(h),h.g=null;var x=2}else if(fa(h.h,v))b=v.D,Fn(h.h,v),x=1;else return;if(h.G!=0){if(v.o)if(x==1){b=v.m?v.m.length:0,v=Date.now()-v.F;var G=h.B;x=Xr(),Ke(x,new oe(x,b)),fo(h)}else Mc(h);else if(G=v.s,G==3||G==0&&0<v.X||!(x==1&&Bd(h,v)||x==2&&Vl(h)))switch(b&&0<b.length&&(v=h.h,v.i=v.i.concat(b)),G){case 1:Di(h,5);break;case 4:Di(h,10);break;case 3:Di(h,6);break;default:Di(h,2)}}}function Ll(h,v){let b=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(b*=2),b*v}function Di(h,v){if(h.j.info("Error code "+v),v==2){var b=T(h.fb,h),x=h.Xa;const G=!x;x=new Kt(x||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||ms(x,"https"),ps(x),G?ys(x.toString(),b):Lr(x.toString(),b)}else Q(2);h.G=0,h.l&&h.l.sa(v),kc(h),Dc(h)}t.fb=function(h){h?(this.j.info("Successfully pinged google.com"),Q(2)):(this.j.info("Failed to ping google.com"),Q(1))};function kc(h){if(h.G=0,h.ka=[],h.l){const v=Cl(h.h);(v.length!=0||h.i.length!=0)&&(O(h.ka,v),O(h.ka,h.i),h.h.i.length=0,H(h.i),h.i.length=0),h.l.ra()}}function Vc(h,v,b){var x=b instanceof Kt?nr(b):new Kt(b);if(x.g!="")v&&(x.g=v+"."+x.g),ma(x,x.s);else{var G=d.location;x=G.protocol,v=v?v+"."+G.hostname:G.hostname,G=+G.port;var te=new Kt(null);x&&ms(te,x),v&&(te.g=v),G&&ma(te,G),b&&(te.l=b),x=te}return b=h.D,v=h.ya,b&&v&&Tt(x,b,v),Tt(x,"VER",h.la),Ts(h,x),x}function Lc(h,v,b){if(v&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return v=h.Ca&&!h.pa?new pt(new pa({eb:b})):new pt(h.pa),v.Ha(h.J),v}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uc(){}t=Uc.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function po(){}po.prototype.g=function(h,v){return new Hn(h,v)};function Hn(h,v){ht.call(this),this.g=new co(v),this.l=h,this.h=v&&v.messageUrlParams||null,h=v&&v.messageHeaders||null,v&&v.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=v&&v.initMessageHeaders||null,v&&v.messageContentType&&(h?h["X-WebChannel-Content-Type"]=v.messageContentType:h={"X-WebChannel-Content-Type":v.messageContentType}),v&&v.va&&(h?h["X-WebChannel-Client-Profile"]=v.va:h={"X-WebChannel-Client-Profile":v.va}),this.g.S=h,(h=v&&v.Sb)&&!ee(h)&&(this.g.m=h),this.v=v&&v.supportsCrossDomainXhr||!1,this.u=v&&v.sendRawJson||!1,(v=v&&v.httpSessionIdParam)&&!ee(v)&&(this.g.D=v,h=this.h,h!==null&&v in h&&(h=this.h,v in h&&delete h[v])),this.j=new ni(this)}k(Hn,ht),Hn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Hn.prototype.close=function(){jl(this.g)},Hn.prototype.o=function(h){var v=this.g;if(typeof h=="string"){var b={};b.__data__=h,h=b}else this.u&&(b={},b.__data__=Jn(h),h=b);v.i.push(new xi(v.Ya++,h)),v.G==3&&fo(v)},Hn.prototype.N=function(){this.g.l=null,delete this.j,jl(this.g),delete this.g,Hn.aa.N.call(this)};function zc(h){kr.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var v=h.__sm__;if(v){e:{for(const b in v){h=b;break e}h=void 0}(this.i=h)&&(h=this.i,v=v!==null&&h in v?v[h]:void 0),this.data=v}else this.data=h}k(zc,kr);function Bc(){ua.call(this),this.status=1}k(Bc,ua);function ni(h){this.g=h}k(ni,Uc),ni.prototype.ua=function(){Ke(this.g,"a")},ni.prototype.ta=function(h){Ke(this.g,new zc(h))},ni.prototype.sa=function(h){Ke(this.g,new Bc)},ni.prototype.ra=function(){Ke(this.g,"b")},po.prototype.createWebChannel=po.prototype.g,Hn.prototype.send=Hn.prototype.o,Hn.prototype.open=Hn.prototype.m,Hn.prototype.close=Hn.prototype.close,aw=function(){return new po},iw=function(){return Xr()},rw=Ln,Sg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xe.NO_ERROR=0,xe.TIMEOUT=8,xe.HTTP_ERROR=6,ff=xe,qe.COMPLETE="complete",nw=qe,fs.EventType=gr,gr.OPEN="a",gr.CLOSE="b",gr.ERROR="c",gr.MESSAGE="d",ht.prototype.listen=ht.prototype.K,Lu=fs,pt.prototype.listenOnce=pt.prototype.L,pt.prototype.getLastError=pt.prototype.Ka,pt.prototype.getLastErrorCode=pt.prototype.Ba,pt.prototype.getStatus=pt.prototype.Z,pt.prototype.getResponseJson=pt.prototype.Oa,pt.prototype.getResponseText=pt.prototype.oa,pt.prototype.send=pt.prototype.ea,pt.prototype.setWithCredentials=pt.prototype.Ha,tw=pt}).apply(typeof qh<"u"?qh:typeof self<"u"?self:typeof window<"u"?window:{});const vb="@firebase/firestore",_b="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Dn.UNAUTHENTICATED=new Dn(null),Dn.GOOGLE_CREDENTIALS=new Dn("google-credentials-uid"),Dn.FIRST_PARTY=new Dn("first-party-uid"),Dn.MOCK_USER=new Dn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let El="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=new my("@firebase/firestore");function Yo(){return Ks.logLevel}function _e(t,...e){if(Ks.logLevel<=tt.DEBUG){const n=e.map(yy);Ks.debug(`Firestore (${El}): ${t}`,...n)}}function ea(t,...e){if(Ks.logLevel<=tt.ERROR){const n=e.map(yy);Ks.error(`Firestore (${El}): ${t}`,...n)}}function ll(t,...e){if(Ks.logLevel<=tt.WARN){const n=e.map(yy);Ks.warn(`Firestore (${El}): ${t}`,...n)}}function yy(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(t,e,n){let a="Unexpected state";typeof e=="string"?a=e:n=e,sw(t,a,n)}function sw(t,e,n){let a=`FIRESTORE (${El}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{a+=" CONTEXT: "+JSON.stringify(n)}catch{a+=" CONTEXT: "+n}throw ea(a),new Error(a)}function yt(t,e,n,a){let s="Unexpected state";typeof n=="string"?s=n:a=n,t||sw(e,s,a)}function Fe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Re extends ia{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class YI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Dn.UNAUTHENTICATED))}shutdown(){}}class KI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class QI{constructor(e){this.t=e,this.currentUser=Dn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){yt(this.o===void 0,42304);let a=this.i;const s=p=>this.i!==a?(a=this.i,n(p)):Promise.resolve();let l=new Qa;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Qa,e.enqueueRetryable(()=>s(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await s(this.currentUser)})},d=p=>{_e("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(_e("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Qa)}},0),c()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(a=>this.i!==e?(_e("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(yt(typeof a.accessToken=="string",31837,{l:a}),new ow(a.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return yt(e===null||typeof e=="string",2055,{h:e}),new Dn(e)}}class XI{constructor(e,n,a){this.P=e,this.T=n,this.I=a,this.type="FirstParty",this.user=Dn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class WI{constructor(e,n,a){this.P=e,this.T=n,this.I=a}getToken(){return Promise.resolve(new XI(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Dn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZI{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,fr(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){yt(this.o===void 0,3512);const a=l=>{l.error!=null&&_e("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,_e("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?n(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>a(l))};const s=l=>{_e("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>s(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?s(l):_e("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new bb(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(yt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new bb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let a=0;a<t;a++)n[a]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const s=JI(40);for(let l=0;l<s.length;++l)a.length<20&&s[l]<n&&(a+=e.charAt(s[l]%62))}return a}}function nt(t,e){return t<e?-1:t>e?1:0}function xg(t,e){const n=Math.min(t.length,e.length);for(let a=0;a<n;a++){const s=t.charAt(a),l=e.charAt(a);if(s!==l)return Kp(s)===Kp(l)?nt(s,l):Kp(s)?1:-1}return nt(t.length,e.length)}const e6=55296,t6=57343;function Kp(t){const e=t.charCodeAt(0);return e>=e6&&e<=t6}function ul(t,e,n){return t.length===e.length&&t.every((a,s)=>n(a,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb="__name__";class ui{constructor(e,n,a){n===void 0?n=0:n>e.length&&ke(637,{offset:n,range:e.length}),a===void 0?a=e.length-n:a>e.length-n&&ke(1746,{length:a,range:e.length-n}),this.segments=e,this.offset=n,this.len=a}get length(){return this.len}isEqual(e){return ui.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ui?e.forEach(a=>{n.push(a)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,a=this.limit();n<a;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const a=Math.min(e.length,n.length);for(let s=0;s<a;s++){const l=ui.compareSegments(e.get(s),n.get(s));if(l!==0)return l}return nt(e.length,n.length)}static compareSegments(e,n){const a=ui.isNumericId(e),s=ui.isNumericId(n);return a&&!s?-1:!a&&s?1:a&&s?ui.extractNumericId(e).compare(ui.extractNumericId(n)):xg(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ka.fromString(e.substring(4,e.length-2))}}class Mt extends ui{construct(e,n,a){return new Mt(e,n,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const a of e){if(a.indexOf("//")>=0)throw new Re(fe.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);n.push(...a.split("/").filter(s=>s.length>0))}return new Mt(n)}static emptyPath(){return new Mt([])}}const n6=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Sn extends ui{construct(e,n,a){return new Sn(e,n,a)}static isValidIdentifier(e){return n6.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Sn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Eb}static keyField(){return new Sn([Eb])}static fromServerFormat(e){const n=[];let a="",s=0;const l=()=>{if(a.length===0)throw new Re(fe.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(a),a=""};let c=!1;for(;s<e.length;){const d=e[s];if(d==="\\"){if(s+1===e.length)throw new Re(fe.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[s+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new Re(fe.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);a+=p,s+=2}else d==="`"?(c=!c,s++):d!=="."||c?(a+=d,s++):(l(),s++)}if(l(),c)throw new Re(fe.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Sn(n)}static emptyPath(){return new Sn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.path=e}static fromPath(e){return new Oe(Mt.fromString(e))}static fromName(e){return new Oe(Mt.fromString(e).popFirst(5))}static empty(){return new Oe(Mt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Mt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Mt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Oe(new Mt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(t,e,n){if(!n)throw new Re(fe.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function r6(t,e,n,a){if(e===!0&&a===!0)throw new Re(fe.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Tb(t){if(!Oe.isDocumentKey(t))throw new Re(fe.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function wb(t){if(Oe.isDocumentKey(t))throw new Re(fe.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function uw(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function _y(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(a){return a.constructor?a.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ke(12329,{type:typeof t})}function Of(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Re(fe.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_y(t);throw new Re(fe.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,e){const n={typeString:t};return e&&(n.value=e),n}function mc(t,e){if(!uw(t))throw new Re(fe.INVALID_ARGUMENT,"JSON must be an object");let n;for(const a in e)if(e[a]){const s=e[a].typeString,l="value"in e[a]?{value:e[a].value}:void 0;if(!(a in t)){n=`JSON missing required field: '${a}'`;break}const c=t[a];if(s&&typeof c!==s){n=`JSON field '${a}' must be a ${s}.`;break}if(l!==void 0&&c!==l.value){n=`Expected '${a}' field to equal '${l.value}'`;break}}if(n)throw new Re(fe.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb=-62135596800,xb=1e6;class Pt{static now(){return Pt.fromMillis(Date.now())}static fromDate(e){return Pt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),a=Math.floor((e-1e3*n)*xb);return new Pt(n,a)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Re(fe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Re(fe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Sb)throw new Re(fe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Re(fe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/xb}_compareTo(e){return this.seconds===e.seconds?nt(this.nanoseconds,e.nanoseconds):nt(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Pt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(mc(e,Pt._jsonSchema))return new Pt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Sb;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Pt._jsonSchemaVersion="firestore/timestamp/1.0",Pt._jsonSchema={type:Jt("string",Pt._jsonSchemaVersion),seconds:Jt("number"),nanoseconds:Jt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{static fromTimestamp(e){return new ze(e)}static min(){return new ze(new Pt(0,0))}static max(){return new ze(new Pt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=-1;function i6(t,e){const n=t.toTimestamp().seconds,a=t.toTimestamp().nanoseconds+1,s=ze.fromTimestamp(a===1e9?new Pt(n+1,0):new Pt(n,a));return new Ja(s,Oe.empty(),e)}function a6(t){return new Ja(t.readTime,t.key,Zu)}class Ja{constructor(e,n,a){this.readTime=e,this.documentKey=n,this.largestBatchId=a}static min(){return new Ja(ze.min(),Oe.empty(),Zu)}static max(){return new Ja(ze.max(),Oe.empty(),Zu)}}function s6(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Oe.comparator(t.documentKey,e.documentKey),n!==0?n:nt(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o6="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class l6{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tl(t){if(t.code!==fe.FAILED_PRECONDITION||t.message!==o6)throw t;_e("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ke(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new le((a,s)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(a,s)},this.catchCallback=l=>{this.wrapFailure(n,l).next(a,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof le?n:le.resolve(n)}catch(n){return le.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):le.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):le.reject(n)}static resolve(e){return new le((n,a)=>{n(e)})}static reject(e){return new le((n,a)=>{a(e)})}static waitFor(e){return new le((n,a)=>{let s=0,l=0,c=!1;e.forEach(d=>{++s,d.next(()=>{++l,c&&l===s&&n()},p=>a(p))}),c=!0,l===s&&n()})}static or(e){let n=le.resolve(!1);for(const a of e)n=n.next(s=>s?le.resolve(s):a());return n}static forEach(e,n){const a=[];return e.forEach((s,l)=>{a.push(n.call(this,s,l))}),this.waitFor(a)}static mapArray(e,n){return new le((a,s)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;n(e[g]).next(_=>{c[g]=_,++d,d===l&&a(c)},_=>s(_))}})}static doWhile(e,n){return new le((a,s)=>{const l=()=>{e()===!0?n().next(()=>{l()},s):a()};l()})}}function u6(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function wl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=a=>this.ae(a),this.ue=a=>n.writeSequenceNumber(a))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}hd.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=-1;function fd(t){return t==null}function Mf(t){return t===0&&1/t==-1/0}function c6(t){return typeof t=="number"&&Number.isInteger(t)&&!Mf(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw="";function h6(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ab(e)),e=f6(t.get(n),e);return Ab(e)}function f6(t,e){let n=e;const a=t.length;for(let s=0;s<a;s++){const l=t.charAt(s);switch(l){case"\0":n+="";break;case cw:n+="";break;default:n+=l}}return n}function Ab(t){return t+cw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Js(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,n){this.comparator=e,this.root=n||wn.EMPTY}insert(e,n){return new Lt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,wn.BLACK,null,null))}remove(e){return new Lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,wn.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const a=this.comparator(e,n.key);if(a===0)return n.value;a<0?n=n.left:a>0&&(n=n.right)}return null}indexOf(e){let n=0,a=this.root;for(;!a.isEmpty();){const s=this.comparator(e,a.key);if(s===0)return n+a.left.size;s<0?a=a.left:(n+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,a)=>(e(n,a),!1))}toString(){const e=[];return this.inorderTraversal((n,a)=>(e.push(`${n}:${a}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gh(this.root,e,this.comparator,!0)}}class Gh{constructor(e,n,a,s){this.isReverse=s,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=n?a(e.key,n):1,n&&s&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class wn{constructor(e,n,a,s,l){this.key=e,this.value=n,this.color=a??wn.RED,this.left=s??wn.EMPTY,this.right=l??wn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,a,s,l){return new wn(e??this.key,n??this.value,a??this.color,s??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,a){let s=this;const l=a(e,s.key);return s=l<0?s.copy(null,null,null,s.left.insert(e,n,a),null):l===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,a)),s.fixUp()}removeMin(){if(this.left.isEmpty())return wn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let a,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return wn.EMPTY;a=s.right.min(),s=s.copy(a.key,a.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,wn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,wn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ke(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ke(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ke(27949);return e+(this.isRed()?0:1)}}wn.EMPTY=null,wn.RED=!0,wn.BLACK=!1;wn.EMPTY=new class{constructor(){this.size=0}get key(){throw ke(57766)}get value(){throw ke(16141)}get color(){throw ke(16727)}get left(){throw ke(29726)}get right(){throw ke(36894)}copy(e,n,a,s,l){return this}insert(e,n,a){return new wn(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.comparator=e,this.data=new Lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,a)=>(e(n),!1))}forEachInRange(e,n){const a=this.data.getIteratorFrom(e[0]);for(;a.hasNext();){const s=a.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let a;for(a=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();a.hasNext();)if(!e(a.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cb(this.data.getIterator())}getIteratorFrom(e){return new Cb(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(a=>{n=n.add(a)}),n}isEqual(e){if(!(e instanceof un)||this.size!==e.size)return!1;const n=this.data.getIterator(),a=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,l=a.getNext().key;if(this.comparator(s,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new un(this.comparator);return n.data=e,n}}class Cb{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this.fields=e,e.sort(Sn.comparator)}static empty(){return new Fr([])}unionWith(e){let n=new un(Sn.comparator);for(const a of this.fields)n=n.add(a);for(const a of e)n=n.add(a);return new Fr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ul(this.fields,e.fields,(n,a)=>n.isEqual(a))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new fw("Invalid base64 string: "+l):l}}(e);return new An(n)}static fromUint8Array(e){const n=function(s){let l="";for(let c=0;c<s.length;++c)l+=String.fromCharCode(s[c]);return l}(e);return new An(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const a=new Uint8Array(n.length);for(let s=0;s<n.length;s++)a[s]=n.charCodeAt(s);return a}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return nt(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}An.EMPTY_BYTE_STRING=new An("");const d6=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function es(t){if(yt(!!t,39018),typeof t=="string"){let e=0;const n=d6.exec(t);if(yt(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const a=new Date(t);return{seconds:Math.floor(a.getTime()/1e3),nanos:e}}return{seconds:Gt(t.seconds),nanos:Gt(t.nanos)}}function Gt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ts(t){return typeof t=="string"?An.fromBase64String(t):An.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw="server_timestamp",mw="__type__",pw="__previous_value__",gw="__local_write_time__";function Ey(t){return(t?.mapValue?.fields||{})[mw]?.stringValue===dw}function dd(t){const e=t.mapValue.fields[pw];return Ey(e)?dd(e):e}function Ju(t){const e=es(t.mapValue.fields[gw].timestampValue);return new Pt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m6{constructor(e,n,a,s,l,c,d,p,g,_){this.databaseId=e,this.appId=n,this.persistenceKey=a,this.host=s,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=_}}const Pf="(default)";class ec{constructor(e,n){this.projectId=e,this.database=n||Pf}static empty(){return new ec("","")}get isDefaultDatabase(){return this.database===Pf}isEqual(e){return e instanceof ec&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw="__type__",p6="__max__",$h={mapValue:{}},vw="__vector__",jf="value";function ns(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ey(t)?4:y6(t)?9007199254740991:g6(t)?10:11:ke(28295,{value:t})}function yi(t,e){if(t===e)return!0;const n=ns(t);if(n!==ns(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ju(t).isEqual(Ju(e));case 3:return function(s,l){if(typeof s.timestampValue=="string"&&typeof l.timestampValue=="string"&&s.timestampValue.length===l.timestampValue.length)return s.timestampValue===l.timestampValue;const c=es(s.timestampValue),d=es(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,l){return ts(s.bytesValue).isEqual(ts(l.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,l){return Gt(s.geoPointValue.latitude)===Gt(l.geoPointValue.latitude)&&Gt(s.geoPointValue.longitude)===Gt(l.geoPointValue.longitude)}(t,e);case 2:return function(s,l){if("integerValue"in s&&"integerValue"in l)return Gt(s.integerValue)===Gt(l.integerValue);if("doubleValue"in s&&"doubleValue"in l){const c=Gt(s.doubleValue),d=Gt(l.doubleValue);return c===d?Mf(c)===Mf(d):isNaN(c)&&isNaN(d)}return!1}(t,e);case 9:return ul(t.arrayValue.values||[],e.arrayValue.values||[],yi);case 10:case 11:return function(s,l){const c=s.mapValue.fields||{},d=l.mapValue.fields||{};if(Rb(c)!==Rb(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!yi(c[p],d[p])))return!1;return!0}(t,e);default:return ke(52216,{left:t})}}function tc(t,e){return(t.values||[]).find(n=>yi(n,e))!==void 0}function cl(t,e){if(t===e)return 0;const n=ns(t),a=ns(e);if(n!==a)return nt(n,a);switch(n){case 0:case 9007199254740991:return 0;case 1:return nt(t.booleanValue,e.booleanValue);case 2:return function(l,c){const d=Gt(l.integerValue||l.doubleValue),p=Gt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(t,e);case 3:return Ib(t.timestampValue,e.timestampValue);case 4:return Ib(Ju(t),Ju(e));case 5:return xg(t.stringValue,e.stringValue);case 6:return function(l,c){const d=ts(l),p=ts(c);return d.compareTo(p)}(t.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const _=nt(d[g],p[g]);if(_!==0)return _}return nt(d.length,p.length)}(t.referenceValue,e.referenceValue);case 8:return function(l,c){const d=nt(Gt(l.latitude),Gt(c.latitude));return d!==0?d:nt(Gt(l.longitude),Gt(c.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Nb(t.arrayValue,e.arrayValue);case 10:return function(l,c){const d=l.fields||{},p=c.fields||{},g=d[jf]?.arrayValue,_=p[jf]?.arrayValue,w=nt(g?.values?.length||0,_?.values?.length||0);return w!==0?w:Nb(g,_)}(t.mapValue,e.mapValue);case 11:return function(l,c){if(l===$h.mapValue&&c===$h.mapValue)return 0;if(l===$h.mapValue)return 1;if(c===$h.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},_=Object.keys(g);p.sort(),_.sort();for(let w=0;w<p.length&&w<_.length;++w){const T=xg(p[w],_[w]);if(T!==0)return T;const A=cl(d[p[w]],g[_[w]]);if(A!==0)return A}return nt(p.length,_.length)}(t.mapValue,e.mapValue);default:throw ke(23264,{he:n})}}function Ib(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return nt(t,e);const n=es(t),a=es(e),s=nt(n.seconds,a.seconds);return s!==0?s:nt(n.nanos,a.nanos)}function Nb(t,e){const n=t.values||[],a=e.values||[];for(let s=0;s<n.length&&s<a.length;++s){const l=cl(n[s],a[s]);if(l)return l}return nt(n.length,a.length)}function hl(t){return Ag(t)}function Ag(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const a=es(n);return`time(${a.seconds},${a.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ts(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let a="[",s=!0;for(const l of n.values||[])s?s=!1:a+=",",a+=Ag(l);return a+"]"}(t.arrayValue):"mapValue"in t?function(n){const a=Object.keys(n.fields||{}).sort();let s="{",l=!0;for(const c of a)l?l=!1:s+=",",s+=`${c}:${Ag(n.fields[c])}`;return s+"}"}(t.mapValue):ke(61005,{value:t})}function df(t){switch(ns(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=dd(t);return e?16+df(e):16;case 5:return 2*t.stringValue.length;case 6:return ts(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(a){return(a.values||[]).reduce((s,l)=>s+df(l),0)}(t.arrayValue);case 10:case 11:return function(a){let s=0;return Js(a.fields,(l,c)=>{s+=l.length+df(c)}),s}(t.mapValue);default:throw ke(13486,{value:t})}}function Rg(t){return!!t&&"integerValue"in t}function Ty(t){return!!t&&"arrayValue"in t}function Db(t){return!!t&&"nullValue"in t}function Ob(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function mf(t){return!!t&&"mapValue"in t}function g6(t){return(t?.mapValue?.fields||{})[yw]?.stringValue===vw}function Hu(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Js(t.mapValue.fields,(n,a)=>e.mapValue.fields[n]=Hu(a)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hu(t.arrayValue.values[n]);return e}return{...t}}function y6(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===p6}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.value=e}static empty(){return new Nr({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let a=0;a<e.length-1;++a)if(n=(n.mapValue.fields||{})[e.get(a)],!mf(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hu(n)}setAll(e){let n=Sn.emptyPath(),a={},s=[];e.forEach((c,d)=>{if(!n.isImmediateParentOf(d)){const p=this.getFieldsMap(n);this.applyChanges(p,a,s),a={},s=[],n=d.popLast()}c?a[d.lastSegment()]=Hu(c):s.push(d.lastSegment())});const l=this.getFieldsMap(n);this.applyChanges(l,a,s)}delete(e){const n=this.field(e.popLast());mf(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let a=0;a<e.length;++a){let s=n.mapValue.fields[e.get(a)];mf(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(a)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,a){Js(n,(s,l)=>e[s]=l);for(const s of a)delete e[s]}clone(){return new Nr(Hu(this.value))}}function _w(t){const e=[];return Js(t.fields,(n,a)=>{const s=new Sn([n]);if(mf(a)){const l=_w(a.mapValue).fields;if(l.length===0)e.push(s);else for(const c of l)e.push(s.child(c))}else e.push(s)}),new Fr(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,n,a,s,l,c,d){this.key=e,this.documentType=n,this.version=a,this.readTime=s,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new On(e,0,ze.min(),ze.min(),ze.min(),Nr.empty(),0)}static newFoundDocument(e,n,a,s){return new On(e,1,n,ze.min(),a,s,0)}static newNoDocument(e,n){return new On(e,2,n,ze.min(),ze.min(),Nr.empty(),0)}static newUnknownDocument(e,n){return new On(e,3,n,ze.min(),ze.min(),Nr.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ze.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nr.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ze.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof On&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new On(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,n){this.position=e,this.inclusive=n}}function Mb(t,e,n){let a=0;for(let s=0;s<t.position.length;s++){const l=e[s],c=t.position[s];if(l.field.isKeyField()?a=Oe.comparator(Oe.fromName(c.referenceValue),n.key):a=cl(c,n.data.field(l.field)),l.dir==="desc"&&(a*=-1),a!==0)break}return a}function Pb(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yi(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,n="asc"){this.field=e,this.dir=n}}function v6(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{}class ln extends bw{constructor(e,n,a){super(),this.field=e,this.op=n,this.value=a}static create(e,n,a){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,a):new b6(e,n,a):n==="array-contains"?new w6(e,a):n==="in"?new S6(e,a):n==="not-in"?new x6(e,a):n==="array-contains-any"?new A6(e,a):new ln(e,n,a)}static createKeyFieldInFilter(e,n,a){return n==="in"?new E6(e,a):new T6(e,a)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(cl(n,this.value)):n!==null&&ns(this.value)===ns(n)&&this.matchesComparison(cl(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ke(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vi extends bw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new vi(e,n)}matches(e){return Ew(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ew(t){return t.op==="and"}function Tw(t){return _6(t)&&Ew(t)}function _6(t){for(const e of t.filters)if(e instanceof vi)return!1;return!0}function Cg(t){if(t instanceof ln)return t.field.canonicalString()+t.op.toString()+hl(t.value);if(Tw(t))return t.filters.map(e=>Cg(e)).join(",");{const e=t.filters.map(n=>Cg(n)).join(",");return`${t.op}(${e})`}}function ww(t,e){return t instanceof ln?function(a,s){return s instanceof ln&&a.op===s.op&&a.field.isEqual(s.field)&&yi(a.value,s.value)}(t,e):t instanceof vi?function(a,s){return s instanceof vi&&a.op===s.op&&a.filters.length===s.filters.length?a.filters.reduce((l,c,d)=>l&&ww(c,s.filters[d]),!0):!1}(t,e):void ke(19439)}function Sw(t){return t instanceof ln?function(n){return`${n.field.canonicalString()} ${n.op} ${hl(n.value)}`}(t):t instanceof vi?function(n){return n.op.toString()+" {"+n.getFilters().map(Sw).join(" ,")+"}"}(t):"Filter"}class b6 extends ln{constructor(e,n,a){super(e,n,a),this.key=Oe.fromName(a.referenceValue)}matches(e){const n=Oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class E6 extends ln{constructor(e,n){super(e,"in",n),this.keys=xw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class T6 extends ln{constructor(e,n){super(e,"not-in",n),this.keys=xw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function xw(t,e){return(e.arrayValue?.values||[]).map(n=>Oe.fromName(n.referenceValue))}class w6 extends ln{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ty(n)&&tc(n.arrayValue,this.value)}}class S6 extends ln{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&tc(this.value.arrayValue,n)}}class x6 extends ln{constructor(e,n){super(e,"not-in",n)}matches(e){if(tc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!tc(this.value.arrayValue,n)}}class A6 extends ln{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ty(n)||!n.arrayValue.values)&&n.arrayValue.values.some(a=>tc(this.value.arrayValue,a))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R6{constructor(e,n=null,a=[],s=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=n,this.orderBy=a,this.filters=s,this.limit=l,this.startAt=c,this.endAt=d,this.Te=null}}function jb(t,e=null,n=[],a=[],s=null,l=null,c=null){return new R6(t,e,n,a,s,l,c)}function wy(t){const e=Fe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(a=>Cg(a)).join(","),n+="|ob:",n+=e.orderBy.map(a=>function(l){return l.field.canonicalString()+l.dir}(a)).join(","),fd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(a=>hl(a)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(a=>hl(a)).join(",")),e.Te=n}return e.Te}function Sy(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!v6(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ww(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Pb(t.startAt,e.startAt)&&Pb(t.endAt,e.endAt)}function Ig(t){return Oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,n=null,a=[],s=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=a,this.filters=s,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function C6(t,e,n,a,s,l,c,d){return new md(t,e,n,a,s,l,c,d)}function Aw(t){return new md(t)}function kb(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function I6(t){return t.collectionGroup!==null}function qu(t){const e=Fe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),n.add(l.field.canonicalString());const a=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new un(Sn.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(l=>{n.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new Vf(l,a))}),n.has(Sn.keyField().canonicalString())||e.Ie.push(new Vf(Sn.keyField(),a))}return e.Ie}function fi(t){const e=Fe(t);return e.Ee||(e.Ee=N6(e,qu(t))),e.Ee}function N6(t,e){if(t.limitType==="F")return jb(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const l=s.dir==="desc"?"asc":"desc";return new Vf(s.field,l)});const n=t.endAt?new kf(t.endAt.position,t.endAt.inclusive):null,a=t.startAt?new kf(t.startAt.position,t.startAt.inclusive):null;return jb(t.path,t.collectionGroup,e,t.filters,t.limit,n,a)}}function Ng(t,e,n){return new md(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function pd(t,e){return Sy(fi(t),fi(e))&&t.limitType===e.limitType}function Rw(t){return`${wy(fi(t))}|lt:${t.limitType}`}function Ko(t){return`Query(target=${function(n){let a=n.path.canonicalString();return n.collectionGroup!==null&&(a+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(a+=`, filters: [${n.filters.map(s=>Sw(s)).join(", ")}]`),fd(n.limit)||(a+=", limit: "+n.limit),n.orderBy.length>0&&(a+=`, orderBy: [${n.orderBy.map(s=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(s)).join(", ")}]`),n.startAt&&(a+=", startAt: ",a+=n.startAt.inclusive?"b:":"a:",a+=n.startAt.position.map(s=>hl(s)).join(",")),n.endAt&&(a+=", endAt: ",a+=n.endAt.inclusive?"a:":"b:",a+=n.endAt.position.map(s=>hl(s)).join(",")),`Target(${a})`}(fi(t))}; limitType=${t.limitType})`}function gd(t,e){return e.isFoundDocument()&&function(a,s){const l=s.key.path;return a.collectionGroup!==null?s.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(l):Oe.isDocumentKey(a.path)?a.path.isEqual(l):a.path.isImmediateParentOf(l)}(t,e)&&function(a,s){for(const l of qu(a))if(!l.field.isKeyField()&&s.data.field(l.field)===null)return!1;return!0}(t,e)&&function(a,s){for(const l of a.filters)if(!l.matches(s))return!1;return!0}(t,e)&&function(a,s){return!(a.startAt&&!function(c,d,p){const g=Mb(c,d,p);return c.inclusive?g<=0:g<0}(a.startAt,qu(a),s)||a.endAt&&!function(c,d,p){const g=Mb(c,d,p);return c.inclusive?g>=0:g>0}(a.endAt,qu(a),s))}(t,e)}function D6(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Cw(t){return(e,n)=>{let a=!1;for(const s of qu(t)){const l=O6(s,e,n);if(l!==0)return l;a=a||s.field.isKeyField()}return 0}}function O6(t,e,n){const a=t.field.isKeyField()?Oe.comparator(e.key,n.key):function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?cl(p,g):ke(42886)}(t.field,e,n);switch(t.dir){case"asc":return a;case"desc":return-1*a;default:return ke(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),a=this.inner[n];if(a!==void 0){for(const[s,l]of a)if(this.equalsFn(s,e))return l}}has(e){return this.get(e)!==void 0}set(e,n){const a=this.mapKeyFn(e),s=this.inner[a];if(s===void 0)return this.inner[a]=[[e,n]],void this.innerSize++;for(let l=0;l<s.length;l++)if(this.equalsFn(s[l][0],e))return void(s[l]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),a=this.inner[n];if(a===void 0)return!1;for(let s=0;s<a.length;s++)if(this.equalsFn(a[s][0],e))return a.length===1?delete this.inner[n]:a.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Js(this.inner,(n,a)=>{for(const[s,l]of a)e(s,l)})}isEmpty(){return hw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M6=new Lt(Oe.comparator);function ta(){return M6}const Iw=new Lt(Oe.comparator);function Uu(...t){let e=Iw;for(const n of t)e=e.insert(n.key,n);return e}function Nw(t){let e=Iw;return t.forEach((n,a)=>e=e.insert(n,a.overlayedDocument)),e}function Fs(){return Gu()}function Dw(){return Gu()}function Gu(){return new eo(t=>t.toString(),(t,e)=>t.isEqual(e))}const P6=new Lt(Oe.comparator),j6=new un(Oe.comparator);function rt(...t){let e=j6;for(const n of t)e=e.add(n);return e}const k6=new un(nt);function V6(){return k6}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mf(e)?"-0":e}}function Ow(t){return{integerValue:""+t}}function L6(t,e){return c6(e)?Ow(e):xy(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(){this._=void 0}}function U6(t,e,n){return t instanceof Lf?function(s,l){const c={fields:{[mw]:{stringValue:dw},[gw]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return l&&Ey(l)&&(l=dd(l)),l&&(c.fields[pw]=l),{mapValue:c}}(n,e):t instanceof nc?Pw(t,e):t instanceof rc?jw(t,e):function(s,l){const c=Mw(s,l),d=Vb(c)+Vb(s.Ae);return Rg(c)&&Rg(s.Ae)?Ow(d):xy(s.serializer,d)}(t,e)}function z6(t,e,n){return t instanceof nc?Pw(t,e):t instanceof rc?jw(t,e):n}function Mw(t,e){return t instanceof Uf?function(a){return Rg(a)||function(l){return!!l&&"doubleValue"in l}(a)}(e)?e:{integerValue:0}:null}class Lf extends yd{}class nc extends yd{constructor(e){super(),this.elements=e}}function Pw(t,e){const n=kw(e);for(const a of t.elements)n.some(s=>yi(s,a))||n.push(a);return{arrayValue:{values:n}}}class rc extends yd{constructor(e){super(),this.elements=e}}function jw(t,e){let n=kw(e);for(const a of t.elements)n=n.filter(s=>!yi(s,a));return{arrayValue:{values:n}}}class Uf extends yd{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Vb(t){return Gt(t.integerValue||t.doubleValue)}function kw(t){return Ty(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function B6(t,e){return t.field.isEqual(e.field)&&function(a,s){return a instanceof nc&&s instanceof nc||a instanceof rc&&s instanceof rc?ul(a.elements,s.elements,yi):a instanceof Uf&&s instanceof Uf?yi(a.Ae,s.Ae):a instanceof Lf&&s instanceof Lf}(t.transform,e.transform)}class F6{constructor(e,n){this.version=e,this.transformResults=n}}class Wi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wi}static exists(e){return new Wi(void 0,e)}static updateTime(e){return new Wi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pf(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class vd{}function Vw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Uw(t.key,Wi.none()):new pc(t.key,t.data,Wi.none());{const n=t.data,a=Nr.empty();let s=new un(Sn.comparator);for(let l of e.fields)if(!s.has(l)){let c=n.field(l);c===null&&l.length>1&&(l=l.popLast(),c=n.field(l)),c===null?a.delete(l):a.set(l,c),s=s.add(l)}return new to(t.key,a,new Fr(s.toArray()),Wi.none())}}function H6(t,e,n){t instanceof pc?function(s,l,c){const d=s.value.clone(),p=Ub(s.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(t,e,n):t instanceof to?function(s,l,c){if(!pf(s.precondition,l))return void l.convertToUnknownDocument(c.version);const d=Ub(s.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(Lw(s)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(t,e,n):function(s,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,n)}function $u(t,e,n,a){return t instanceof pc?function(l,c,d,p){if(!pf(l.precondition,c))return d;const g=l.value.clone(),_=zb(l.fieldTransforms,p,c);return g.setAll(_),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(t,e,n,a):t instanceof to?function(l,c,d,p){if(!pf(l.precondition,c))return d;const g=zb(l.fieldTransforms,p,c),_=c.data;return _.setAll(Lw(l)),_.setAll(g),c.convertToFoundDocument(c.version,_).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(w=>w.field))}(t,e,n,a):function(l,c,d){return pf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(t,e,n)}function q6(t,e){let n=null;for(const a of t.fieldTransforms){const s=e.data.field(a.field),l=Mw(a.transform,s||null);l!=null&&(n===null&&(n=Nr.empty()),n.set(a.field,l))}return n||null}function Lb(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(a,s){return a===void 0&&s===void 0||!(!a||!s)&&ul(a,s,(l,c)=>B6(l,c))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class pc extends vd{constructor(e,n,a,s=[]){super(),this.key=e,this.value=n,this.precondition=a,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class to extends vd{constructor(e,n,a,s,l=[]){super(),this.key=e,this.data=n,this.fieldMask=a,this.precondition=s,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Lw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const a=t.data.field(n);e.set(n,a)}}),e}function Ub(t,e,n){const a=new Map;yt(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const l=t[s],c=l.transform,d=e.data.field(l.field);a.set(l.field,z6(c,d,n[s]))}return a}function zb(t,e,n){const a=new Map;for(const s of t){const l=s.transform,c=n.data.field(s.field);a.set(s.field,U6(l,c,e))}return a}class Uw extends vd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class G6 extends vd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $6{constructor(e,n,a,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=a,this.mutations=s}applyToRemoteDocument(e,n){const a=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const l=this.mutations[s];l.key.isEqual(e.key)&&H6(l,e,a[s])}}applyToLocalView(e,n){for(const a of this.baseMutations)a.key.isEqual(e.key)&&(n=$u(a,e,n,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(e.key)&&(n=$u(a,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const a=Dw();return this.mutations.forEach(s=>{const l=e.get(s.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=n.has(s.key)?null:d;const p=Vw(c,d);p!==null&&a.set(s.key,p),c.isValidDocument()||c.convertToNoDocument(ze.min())}),a}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),rt())}isEqual(e){return this.batchId===e.batchId&&ul(this.mutations,e.mutations,(n,a)=>Lb(n,a))&&ul(this.baseMutations,e.baseMutations,(n,a)=>Lb(n,a))}}class Ay{constructor(e,n,a,s){this.batch=e,this.commitVersion=n,this.mutationResults=a,this.docVersions=s}static from(e,n,a){yt(e.mutations.length===a.length,58842,{me:e.mutations.length,fe:a.length});let s=function(){return P6}();const l=e.mutations;for(let c=0;c<l.length;c++)s=s.insert(l[c].key,a[c].version);return new Ay(e,n,a,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y6{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K6{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wt,lt;function Q6(t){switch(t){case fe.OK:return ke(64938);case fe.CANCELLED:case fe.UNKNOWN:case fe.DEADLINE_EXCEEDED:case fe.RESOURCE_EXHAUSTED:case fe.INTERNAL:case fe.UNAVAILABLE:case fe.UNAUTHENTICATED:return!1;case fe.INVALID_ARGUMENT:case fe.NOT_FOUND:case fe.ALREADY_EXISTS:case fe.PERMISSION_DENIED:case fe.FAILED_PRECONDITION:case fe.ABORTED:case fe.OUT_OF_RANGE:case fe.UNIMPLEMENTED:case fe.DATA_LOSS:return!0;default:return ke(15467,{code:t})}}function zw(t){if(t===void 0)return ea("GRPC error has no .code"),fe.UNKNOWN;switch(t){case Wt.OK:return fe.OK;case Wt.CANCELLED:return fe.CANCELLED;case Wt.UNKNOWN:return fe.UNKNOWN;case Wt.DEADLINE_EXCEEDED:return fe.DEADLINE_EXCEEDED;case Wt.RESOURCE_EXHAUSTED:return fe.RESOURCE_EXHAUSTED;case Wt.INTERNAL:return fe.INTERNAL;case Wt.UNAVAILABLE:return fe.UNAVAILABLE;case Wt.UNAUTHENTICATED:return fe.UNAUTHENTICATED;case Wt.INVALID_ARGUMENT:return fe.INVALID_ARGUMENT;case Wt.NOT_FOUND:return fe.NOT_FOUND;case Wt.ALREADY_EXISTS:return fe.ALREADY_EXISTS;case Wt.PERMISSION_DENIED:return fe.PERMISSION_DENIED;case Wt.FAILED_PRECONDITION:return fe.FAILED_PRECONDITION;case Wt.ABORTED:return fe.ABORTED;case Wt.OUT_OF_RANGE:return fe.OUT_OF_RANGE;case Wt.UNIMPLEMENTED:return fe.UNIMPLEMENTED;case Wt.DATA_LOSS:return fe.DATA_LOSS;default:return ke(39323,{code:t})}}(lt=Wt||(Wt={}))[lt.OK=0]="OK",lt[lt.CANCELLED=1]="CANCELLED",lt[lt.UNKNOWN=2]="UNKNOWN",lt[lt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",lt[lt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",lt[lt.NOT_FOUND=5]="NOT_FOUND",lt[lt.ALREADY_EXISTS=6]="ALREADY_EXISTS",lt[lt.PERMISSION_DENIED=7]="PERMISSION_DENIED",lt[lt.UNAUTHENTICATED=16]="UNAUTHENTICATED",lt[lt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",lt[lt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",lt[lt.ABORTED=10]="ABORTED",lt[lt.OUT_OF_RANGE=11]="OUT_OF_RANGE",lt[lt.UNIMPLEMENTED=12]="UNIMPLEMENTED",lt[lt.INTERNAL=13]="INTERNAL",lt[lt.UNAVAILABLE=14]="UNAVAILABLE",lt[lt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X6(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W6=new Ka([4294967295,4294967295],0);function Bb(t){const e=X6().encode(t),n=new ew;return n.update(e),new Uint8Array(n.digest())}function Fb(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),a=e.getUint32(4,!0),s=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ka([n,a],0),new Ka([s,l],0)]}class Ry{constructor(e,n,a){if(this.bitmap=e,this.padding=n,this.hashCount=a,n<0||n>=8)throw new zu(`Invalid padding: ${n}`);if(a<0)throw new zu(`Invalid hash count: ${a}`);if(e.length>0&&this.hashCount===0)throw new zu(`Invalid hash count: ${a}`);if(e.length===0&&n!==0)throw new zu(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Ka.fromNumber(this.ge)}ye(e,n,a){let s=e.add(n.multiply(Ka.fromNumber(a)));return s.compare(W6)===1&&(s=new Ka([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Bb(e),[a,s]=Fb(n);for(let l=0;l<this.hashCount;l++){const c=this.ye(a,s,l);if(!this.we(c))return!1}return!0}static create(e,n,a){const s=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new Ry(l,s,n);return a.forEach(d=>c.insert(d)),c}insert(e){if(this.ge===0)return;const n=Bb(e),[a,s]=Fb(n);for(let l=0;l<this.hashCount;l++){const c=this.ye(a,s,l);this.Se(c)}}Se(e){const n=Math.floor(e/8),a=e%8;this.bitmap[n]|=1<<a}}class zu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,n,a,s,l){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=a,this.documentUpdates=s,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,n,a){const s=new Map;return s.set(e,gc.createSynthesizedTargetChangeForCurrentChange(e,n,a)),new _d(ze.min(),s,new Lt(nt),ta(),rt())}}class gc{constructor(e,n,a,s,l){this.resumeToken=e,this.current=n,this.addedDocuments=a,this.modifiedDocuments=s,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,n,a){return new gc(a,n,rt(),rt(),rt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,n,a,s){this.be=e,this.removedTargetIds=n,this.key=a,this.De=s}}class Bw{constructor(e,n){this.targetId=e,this.Ce=n}}class Fw{constructor(e,n,a=An.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=a,this.cause=s}}class Hb{constructor(){this.ve=0,this.Fe=qb(),this.Me=An.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=rt(),n=rt(),a=rt();return this.Fe.forEach((s,l)=>{switch(l){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:a=a.add(s);break;default:ke(38017,{changeType:l})}}),new gc(this.Me,this.xe,e,n,a)}qe(){this.Oe=!1,this.Fe=qb()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,yt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Z6{constructor(e){this.Ge=e,this.ze=new Map,this.je=ta(),this.Je=Yh(),this.He=Yh(),this.Ye=new Lt(nt)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const a=this.nt(n);switch(e.state){case 0:this.rt(n)&&a.Le(e.resumeToken);break;case 1:a.Ke(),a.Ne||a.qe(),a.Le(e.resumeToken);break;case 2:a.Ke(),a.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(a.We(),a.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),a.Le(e.resumeToken));break;default:ke(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((a,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,a=e.Ce.count,s=this.ot(n);if(s){const l=s.target;if(Ig(l))if(a===0){const c=new Oe(l.path);this.et(n,c,On.newNoDocument(c,ze.min()))}else yt(a===1,20013,{expectedCount:a});else{const c=this._t(n);if(c!==a){const d=this.ut(e),p=d?this.ct(d,e,c):1;if(p!==0){this.it(n);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,g)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:a="",padding:s=0},hashCount:l=0}=n;let c,d;try{c=ts(a).toUint8Array()}catch(p){if(p instanceof fw)return ll("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Ry(c,s,l)}catch(p){return ll(p instanceof zu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(e,n,a){return n.Ce.count===a-this.Pt(e,n.targetId)?0:2}Pt(e,n){const a=this.Ge.getRemoteKeysForTarget(n);let s=0;return a.forEach(l=>{const c=this.Ge.ht(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.et(n,l,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((l,c)=>{const d=this.ot(c);if(d){if(l.current&&Ig(d.target)){const p=new Oe(d.target.path);this.It(p).has(c)||this.Et(c,p)||this.et(c,p,On.newNoDocument(p,e))}l.Be&&(n.set(c,l.ke()),l.qe())}});let a=rt();this.He.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(a=a.add(l))}),this.je.forEach((l,c)=>c.setReadTime(e));const s=new _d(e,n,this.Ye,this.je,a);return this.je=ta(),this.Je=Yh(),this.He=Yh(),this.Ye=new Lt(nt),s}Xe(e,n){if(!this.rt(e))return;const a=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,a),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,a){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),a&&(this.je=this.je.insert(n,a))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Hb,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new un(nt),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new un(nt),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||_e("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Hb),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Yh(){return new Lt(Oe.comparator)}function qb(){return new Lt(Oe.comparator)}const J6={asc:"ASCENDING",desc:"DESCENDING"},e3={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},t3={and:"AND",or:"OR"};class n3{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Dg(t,e){return t.useProto3Json||fd(e)?e:{value:e}}function zf(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Hw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function r3(t,e){return zf(t,e.toTimestamp())}function di(t){return yt(!!t,49232),ze.fromTimestamp(function(n){const a=es(n);return new Pt(a.seconds,a.nanos)}(t))}function Cy(t,e){return Og(t,e).canonicalString()}function Og(t,e){const n=function(s){return new Mt(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function qw(t){const e=Mt.fromString(t);return yt(Qw(e),10190,{key:e.toString()}),e}function Mg(t,e){return Cy(t.databaseId,e.path)}function Qp(t,e){const n=qw(e);if(n.get(1)!==t.databaseId.projectId)throw new Re(fe.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Re(fe.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Oe($w(n))}function Gw(t,e){return Cy(t.databaseId,e)}function i3(t){const e=qw(t);return e.length===4?Mt.emptyPath():$w(e)}function Pg(t){return new Mt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $w(t){return yt(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Gb(t,e,n){return{name:Mg(t,e),fields:n.value.mapValue.fields}}function a3(t,e){let n;if("targetChange"in e){e.targetChange;const a=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:ke(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],l=function(g,_){return g.useProto3Json?(yt(_===void 0||typeof _=="string",58123),An.fromBase64String(_||"")):(yt(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),An.fromUint8Array(_||new Uint8Array))}(t,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(g){const _=g.code===void 0?fe.UNKNOWN:zw(g.code);return new Re(_,g.message||"")}(c);n=new Fw(a,s,l,d||null)}else if("documentChange"in e){e.documentChange;const a=e.documentChange;a.document,a.document.name,a.document.updateTime;const s=Qp(t,a.document.name),l=di(a.document.updateTime),c=a.document.createTime?di(a.document.createTime):ze.min(),d=new Nr({mapValue:{fields:a.document.fields}}),p=On.newFoundDocument(s,l,c,d),g=a.targetIds||[],_=a.removedTargetIds||[];n=new gf(g,_,p.key,p)}else if("documentDelete"in e){e.documentDelete;const a=e.documentDelete;a.document;const s=Qp(t,a.document),l=a.readTime?di(a.readTime):ze.min(),c=On.newNoDocument(s,l),d=a.removedTargetIds||[];n=new gf([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const a=e.documentRemove;a.document;const s=Qp(t,a.document),l=a.removedTargetIds||[];n=new gf([],l,s,null)}else{if(!("filter"in e))return ke(11601,{Rt:e});{e.filter;const a=e.filter;a.targetId;const{count:s=0,unchangedNames:l}=a,c=new K6(s,l),d=a.targetId;n=new Bw(d,c)}}return n}function s3(t,e){let n;if(e instanceof pc)n={update:Gb(t,e.key,e.value)};else if(e instanceof Uw)n={delete:Mg(t,e.key)};else if(e instanceof to)n={update:Gb(t,e.key,e.data),updateMask:p3(e.fieldMask)};else{if(!(e instanceof G6))return ke(16599,{Vt:e.type});n={verify:Mg(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(a=>function(l,c){const d=c.transform;if(d instanceof Lf)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof nc)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof rc)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Uf)return{fieldPath:c.field.canonicalString(),increment:d.Ae};throw ke(20930,{transform:c.transform})}(0,a))),e.precondition.isNone||(n.currentDocument=function(s,l){return l.updateTime!==void 0?{updateTime:r3(s,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ke(27497)}(t,e.precondition)),n}function o3(t,e){return t&&t.length>0?(yt(e!==void 0,14353),t.map(n=>function(s,l){let c=s.updateTime?di(s.updateTime):di(l);return c.isEqual(ze.min())&&(c=di(l)),new F6(c,s.transformResults||[])}(n,e))):[]}function l3(t,e){return{documents:[Gw(t,e.path)]}}function u3(t,e){const n={structuredQuery:{}},a=e.path;let s;e.collectionGroup!==null?(s=a,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=a.popLast(),n.structuredQuery.from=[{collectionId:a.lastSegment()}]),n.parent=Gw(t,s);const l=function(g){if(g.length!==0)return Kw(vi.create(g,"and"))}(e.filters);l&&(n.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(_=>function(T){return{field:Qo(T.field),direction:f3(T.dir)}}(_))}(e.orderBy);c&&(n.structuredQuery.orderBy=c);const d=Dg(t,e.limit);return d!==null&&(n.structuredQuery.limit=d),e.startAt&&(n.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ft:n,parent:s}}function c3(t){let e=i3(t.parent);const n=t.structuredQuery,a=n.from?n.from.length:0;let s=null;if(a>0){yt(a===1,65062);const _=n.from[0];_.allDescendants?s=_.collectionId:e=e.child(_.collectionId)}let l=[];n.where&&(l=function(w){const T=Yw(w);return T instanceof vi&&Tw(T)?T.getFilters():[T]}(n.where));let c=[];n.orderBy&&(c=function(w){return w.map(T=>function(k){return new Vf(Xo(k.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(T))}(n.orderBy));let d=null;n.limit&&(d=function(w){let T;return T=typeof w=="object"?w.value:w,fd(T)?null:T}(n.limit));let p=null;n.startAt&&(p=function(w){const T=!!w.before,A=w.values||[];return new kf(A,T)}(n.startAt));let g=null;return n.endAt&&(g=function(w){const T=!w.before,A=w.values||[];return new kf(A,T)}(n.endAt)),C6(e,s,c,l,d,"F",p,g)}function h3(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ke(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Yw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const a=Xo(n.unaryFilter.field);return ln.create(a,"==",{doubleValue:NaN});case"IS_NULL":const s=Xo(n.unaryFilter.field);return ln.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Xo(n.unaryFilter.field);return ln.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Xo(n.unaryFilter.field);return ln.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ke(61313);default:return ke(60726)}}(t):t.fieldFilter!==void 0?function(n){return ln.create(Xo(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ke(58110);default:return ke(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return vi.create(n.compositeFilter.filters.map(a=>Yw(a)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ke(1026)}}(n.compositeFilter.op))}(t):ke(30097,{filter:t})}function f3(t){return J6[t]}function d3(t){return e3[t]}function m3(t){return t3[t]}function Qo(t){return{fieldPath:t.canonicalString()}}function Xo(t){return Sn.fromServerFormat(t.fieldPath)}function Kw(t){return t instanceof ln?function(n){if(n.op==="=="){if(Ob(n.value))return{unaryFilter:{field:Qo(n.field),op:"IS_NAN"}};if(Db(n.value))return{unaryFilter:{field:Qo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ob(n.value))return{unaryFilter:{field:Qo(n.field),op:"IS_NOT_NAN"}};if(Db(n.value))return{unaryFilter:{field:Qo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qo(n.field),op:d3(n.op),value:n.value}}}(t):t instanceof vi?function(n){const a=n.getFilters().map(s=>Kw(s));return a.length===1?a[0]:{compositeFilter:{op:m3(n.op),filters:a}}}(t):ke(54877,{filter:t})}function p3(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Qw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,n,a,s,l=ze.min(),c=ze.min(),d=An.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=n,this.purpose=a,this.sequenceNumber=s,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new qa(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new qa(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g3{constructor(e){this.yt=e}}function y3(t){const e=c3({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ng(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v3{constructor(){this.Cn=new _3}addToCollectionParentIndex(e,n){return this.Cn.add(n),le.resolve()}getCollectionParents(e,n){return le.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return le.resolve()}deleteFieldIndex(e,n){return le.resolve()}deleteAllFieldIndexes(e){return le.resolve()}createTargetIndexes(e,n){return le.resolve()}getDocumentsMatchingTarget(e,n){return le.resolve(null)}getIndexType(e,n){return le.resolve(0)}getFieldIndexes(e,n){return le.resolve([])}getNextCollectionGroupToUpdate(e){return le.resolve(null)}getMinOffset(e,n){return le.resolve(Ja.min())}getMinOffsetFromCollectionGroup(e,n){return le.resolve(Ja.min())}updateCollectionGroup(e,n,a){return le.resolve()}updateIndexEntries(e,n){return le.resolve()}}class _3{constructor(){this.index={}}add(e){const n=e.lastSegment(),a=e.popLast(),s=this.index[n]||new un(Mt.comparator),l=!s.has(a);return this.index[n]=s.add(a),l}has(e){const n=e.lastSegment(),a=e.popLast(),s=this.index[n];return s&&s.has(a)}getEntries(e){return(this.index[e]||new un(Mt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Xw=41943040;class Xn{static withCacheSize(e){return new Xn(e,Xn.DEFAULT_COLLECTION_PERCENTILE,Xn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,a){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xn.DEFAULT_COLLECTION_PERCENTILE=10,Xn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xn.DEFAULT=new Xn(Xw,Xn.DEFAULT_COLLECTION_PERCENTILE,Xn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xn.DISABLED=new Xn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new fl(0)}static cr(){return new fl(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb="LruGarbageCollector",b3=1048576;function Kb([t,e],[n,a]){const s=nt(t,n);return s===0?nt(e,a):s}class E3{constructor(e){this.Ir=e,this.buffer=new un(Kb),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const a=this.buffer.last();Kb(n,a)<0&&(this.buffer=this.buffer.delete(a).add(n))}}get maxValue(){return this.buffer.last()[0]}}class T3{constructor(e,n,a){this.garbageCollector=e,this.asyncQueue=n,this.localStore=a,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){_e(Yb,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){wl(n)?_e(Yb,"Ignoring IndexedDB error during garbage collection: ",n):await Tl(n)}await this.Vr(3e5)})}}class w3{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(a=>Math.floor(n/100*a))}nthSequenceNumber(e,n){if(n===0)return le.resolve(hd.ce);const a=new E3(n);return this.mr.forEachTarget(e,s=>a.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>a.Ar(s))).next(()=>a.maxValue)}removeTargets(e,n,a){return this.mr.removeTargets(e,n,a)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(_e("LruGarbageCollector","Garbage collection skipped; disabled"),le.resolve($b)):this.getCacheSize(e).next(a=>a<this.params.cacheSizeCollectionThreshold?(_e("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$b):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let a,s,l,c,d,p,g;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(_e("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),s=this.params.maximumSequenceNumbersToCollect):s=w,c=Date.now(),this.nthSequenceNumber(e,s))).next(w=>(a=w,d=Date.now(),this.removeTargets(e,a,n))).next(w=>(l=w,p=Date.now(),this.removeOrphanedDocuments(e,a))).next(w=>(g=Date.now(),Yo()<=tt.DEBUG&&_e("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-_}ms
	Determined least recently used ${s} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${w} documents in `+(g-p)+`ms
Total Duration: ${g-_}ms`),le.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:l,documentsRemoved:w})))}}function S3(t,e){return new w3(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x3{constructor(){this.changes=new eo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,On.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const a=this.changes.get(n);return a!==void 0?le.resolve(a):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A3{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R3{constructor(e,n,a,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=a,this.indexManager=s}getDocument(e,n){let a=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(a=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(a!==null&&$u(a.mutation,s,Fr.empty(),Pt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(a=>this.getLocalViewOfDocuments(e,a,rt()).next(()=>a))}getLocalViewOfDocuments(e,n,a=rt()){const s=Fs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,a).next(l=>{let c=Uu();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,n){const a=Fs();return this.populateOverlays(e,a,n).next(()=>this.computeViews(e,n,a,rt()))}populateOverlays(e,n,a){const s=[];return a.forEach(l=>{n.has(l)||s.push(l)}),this.documentOverlayCache.getOverlays(e,s).next(l=>{l.forEach((c,d)=>{n.set(c,d)})})}computeViews(e,n,a,s){let l=ta();const c=Gu(),d=function(){return Gu()}();return n.forEach((p,g)=>{const _=a.get(g.key);s.has(g.key)&&(_===void 0||_.mutation instanceof to)?l=l.insert(g.key,g):_!==void 0?(c.set(g.key,_.mutation.getFieldMask()),$u(_.mutation,g,_.mutation.getFieldMask(),Pt.now())):c.set(g.key,Fr.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((g,_)=>c.set(g,_)),n.forEach((g,_)=>d.set(g,new A3(_,c.get(g)??null))),d))}recalculateAndSaveOverlays(e,n){const a=Gu();let s=new Lt((c,d)=>c-d),l=rt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(c=>{for(const d of c)d.keys().forEach(p=>{const g=n.get(p);if(g===null)return;let _=a.get(p)||Fr.empty();_=d.applyToLocalView(g,_),a.set(p,_);const w=(s.get(d.batchId)||rt()).add(p);s=s.insert(d.batchId,w)})}).next(()=>{const c=[],d=s.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,_=p.value,w=Dw();_.forEach(T=>{if(!l.has(T)){const A=Vw(n.get(T),a.get(T));A!==null&&w.set(T,A),l=l.add(T)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,w))}return le.waitFor(c)}).next(()=>a)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(a=>this.recalculateAndSaveOverlays(e,a))}getDocumentsMatchingQuery(e,n,a,s){return function(c){return Oe.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):I6(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,a,s):this.getDocumentsMatchingCollectionQuery(e,n,a,s)}getNextDocuments(e,n,a,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,a,s).next(l=>{const c=s-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,a.largestBatchId,s-l.size):le.resolve(Fs());let d=Zu,p=l;return c.next(g=>le.forEach(g,(_,w)=>(d<w.largestBatchId&&(d=w.largestBatchId),l.get(_)?le.resolve():this.remoteDocumentCache.getEntry(e,_).next(T=>{p=p.insert(_,T)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,p,g,rt())).next(_=>({batchId:d,changes:Nw(_)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Oe(n)).next(a=>{let s=Uu();return a.isFoundDocument()&&(s=s.insert(a.key,a)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,a,s){const l=n.collectionGroup;let c=Uu();return this.indexManager.getCollectionParents(e,l).next(d=>le.forEach(d,p=>{const g=function(w,T){return new md(T,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(n,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,a,s).next(_=>{_.forEach((w,T)=>{c=c.insert(w,T)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,n,a,s){let l;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,a.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,a,l,s))).next(c=>{l.forEach((p,g)=>{const _=g.getKey();c.get(_)===null&&(c=c.insert(_,On.newInvalidDocument(_)))});let d=Uu();return c.forEach((p,g)=>{const _=l.get(p);_!==void 0&&$u(_.mutation,g,Fr.empty(),Pt.now()),gd(n,g)&&(d=d.insert(p,g))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C3{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return le.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:di(s.createTime)}}(n)),le.resolve()}getNamedQuery(e,n){return le.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:y3(s.bundledQuery),readTime:di(s.readTime)}}(n)),le.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I3{constructor(){this.overlays=new Lt(Oe.comparator),this.qr=new Map}getOverlay(e,n){return le.resolve(this.overlays.get(n))}getOverlays(e,n){const a=Fs();return le.forEach(n,s=>this.getOverlay(e,s).next(l=>{l!==null&&a.set(s,l)})).next(()=>a)}saveOverlays(e,n,a){return a.forEach((s,l)=>{this.St(e,n,l)}),le.resolve()}removeOverlaysForBatchId(e,n,a){const s=this.qr.get(a);return s!==void 0&&(s.forEach(l=>this.overlays=this.overlays.remove(l)),this.qr.delete(a)),le.resolve()}getOverlaysForCollection(e,n,a){const s=Fs(),l=n.length+1,c=new Oe(n.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!n.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>a&&s.set(p.getKey(),p)}return le.resolve(s)}getOverlaysForCollectionGroup(e,n,a,s){let l=new Lt((g,_)=>g-_);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===n&&g.largestBatchId>a){let _=l.get(g.largestBatchId);_===null&&(_=Fs(),l=l.insert(g.largestBatchId,_)),_.set(g.getKey(),g)}}const d=Fs(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,_)=>d.set(g,_)),!(d.size()>=s)););return le.resolve(d)}St(e,n,a){const s=this.overlays.get(a.key);if(s!==null){const c=this.qr.get(s.largestBatchId).delete(a.key);this.qr.set(s.largestBatchId,c)}this.overlays=this.overlays.insert(a.key,new Y6(n,a));let l=this.qr.get(n);l===void 0&&(l=rt(),this.qr.set(n,l)),this.qr.set(n,l.add(a.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N3{constructor(){this.sessionToken=An.EMPTY_BYTE_STRING}getSessionToken(e){return le.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,le.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(){this.Qr=new un(gn.$r),this.Ur=new un(gn.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const a=new gn(e,n);this.Qr=this.Qr.add(a),this.Ur=this.Ur.add(a)}Wr(e,n){e.forEach(a=>this.addReference(a,n))}removeReference(e,n){this.Gr(new gn(e,n))}zr(e,n){e.forEach(a=>this.removeReference(a,n))}jr(e){const n=new Oe(new Mt([])),a=new gn(n,e),s=new gn(n,e+1),l=[];return this.Ur.forEachInRange([a,s],c=>{this.Gr(c),l.push(c.key)}),l}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new Oe(new Mt([])),a=new gn(n,e),s=new gn(n,e+1);let l=rt();return this.Ur.forEachInRange([a,s],c=>{l=l.add(c.key)}),l}containsKey(e){const n=new gn(e,0),a=this.Qr.firstAfterOrEqual(n);return a!==null&&e.isEqual(a.key)}}class gn{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return Oe.comparator(e.key,n.key)||nt(e.Yr,n.Yr)}static Kr(e,n){return nt(e.Yr,n.Yr)||Oe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D3{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new un(gn.$r)}checkEmpty(e){return le.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,a,s){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new $6(l,n,a,s);this.mutationQueue.push(c);for(const d of s)this.Zr=this.Zr.add(new gn(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return le.resolve(c)}lookupMutationBatch(e,n){return le.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const a=n+1,s=this.ei(a),l=s<0?0:s;return le.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return le.resolve(this.mutationQueue.length===0?by:this.tr-1)}getAllMutationBatches(e){return le.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const a=new gn(n,0),s=new gn(n,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([a,s],c=>{const d=this.Xr(c.Yr);l.push(d)}),le.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,n){let a=new un(nt);return n.forEach(s=>{const l=new gn(s,0),c=new gn(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,c],d=>{a=a.add(d.Yr)})}),le.resolve(this.ti(a))}getAllMutationBatchesAffectingQuery(e,n){const a=n.path,s=a.length+1;let l=a;Oe.isDocumentKey(l)||(l=l.child(""));const c=new gn(new Oe(l),0);let d=new un(nt);return this.Zr.forEachWhile(p=>{const g=p.key.path;return!!a.isPrefixOf(g)&&(g.length===s&&(d=d.add(p.Yr)),!0)},c),le.resolve(this.ti(d))}ti(e){const n=[];return e.forEach(a=>{const s=this.Xr(a);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){yt(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let a=this.Zr;return le.forEach(n.mutations,s=>{const l=new gn(s.key,n.batchId);return a=a.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=a})}ir(e){}containsKey(e,n){const a=new gn(n,0),s=this.Zr.firstAfterOrEqual(a);return le.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,le.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O3{constructor(e){this.ri=e,this.docs=function(){return new Lt(Oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const a=n.key,s=this.docs.get(a),l=s?s.size:0,c=this.ri(n);return this.docs=this.docs.insert(a,{document:n.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,a.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const a=this.docs.get(n);return le.resolve(a?a.document.mutableCopy():On.newInvalidDocument(n))}getEntries(e,n){let a=ta();return n.forEach(s=>{const l=this.docs.get(s);a=a.insert(s,l?l.document.mutableCopy():On.newInvalidDocument(s))}),le.resolve(a)}getDocumentsMatchingQuery(e,n,a,s){let l=ta();const c=n.path,d=new Oe(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:_}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||s6(a6(_),a)<=0||(s.has(_.key)||gd(n,_))&&(l=l.insert(_.key,_.mutableCopy()))}return le.resolve(l)}getAllFromCollectionGroup(e,n,a,s){ke(9500)}ii(e,n){return le.forEach(this.docs,a=>n(a))}newChangeBuffer(e){return new M3(this)}getSize(e){return le.resolve(this.size)}}class M3 extends x3{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((a,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(a)}),le.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P3{constructor(e){this.persistence=e,this.si=new eo(n=>wy(n),Sy),this.lastRemoteSnapshotVersion=ze.min(),this.highestTargetId=0,this.oi=0,this._i=new Iy,this.targetCount=0,this.ai=fl.ur()}forEachTarget(e,n){return this.si.forEach((a,s)=>n(s)),le.resolve()}getLastRemoteSnapshotVersion(e){return le.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return le.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),le.resolve(this.highestTargetId)}setTargetsMetadata(e,n,a){return a&&(this.lastRemoteSnapshotVersion=a),n>this.oi&&(this.oi=n),le.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new fl(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,le.resolve()}updateTargetData(e,n){return this.Pr(n),le.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,le.resolve()}removeTargets(e,n,a){let s=0;const l=[];return this.si.forEach((c,d)=>{d.sequenceNumber<=n&&a.get(d.targetId)===null&&(this.si.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),s++)}),le.waitFor(l).next(()=>s)}getTargetCount(e){return le.resolve(this.targetCount)}getTargetData(e,n){const a=this.si.get(n)||null;return le.resolve(a)}addMatchingKeys(e,n,a){return this._i.Wr(n,a),le.resolve()}removeMatchingKeys(e,n,a){this._i.zr(n,a);const s=this.persistence.referenceDelegate,l=[];return s&&n.forEach(c=>{l.push(s.markPotentiallyOrphaned(e,c))}),le.waitFor(l)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),le.resolve()}getMatchingKeysForTargetId(e,n){const a=this._i.Hr(n);return le.resolve(a)}containsKey(e,n){return le.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,n){this.ui={},this.overlays={},this.ci=new hd(0),this.li=!1,this.li=!0,this.hi=new N3,this.referenceDelegate=e(this),this.Pi=new P3(this),this.indexManager=new v3,this.remoteDocumentCache=function(s){return new O3(s)}(a=>this.referenceDelegate.Ti(a)),this.serializer=new g3(n),this.Ii=new C3(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new I3,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let a=this.ui[e.toKey()];return a||(a=new D3(n,this.referenceDelegate),this.ui[e.toKey()]=a),a}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,a){_e("MemoryPersistence","Starting transaction:",e);const s=new j3(this.ci.next());return this.referenceDelegate.Ei(),a(s).next(l=>this.referenceDelegate.di(s).next(()=>l)).toPromise().then(l=>(s.raiseOnCommittedEvent(),l))}Ai(e,n){return le.or(Object.values(this.ui).map(a=>()=>a.containsKey(e,n)))}}class j3 extends l6{constructor(e){super(),this.currentSequenceNumber=e}}class Ny{constructor(e){this.persistence=e,this.Ri=new Iy,this.Vi=null}static mi(e){return new Ny(e)}get fi(){if(this.Vi)return this.Vi;throw ke(60996)}addReference(e,n,a){return this.Ri.addReference(a,n),this.fi.delete(a.toString()),le.resolve()}removeReference(e,n,a){return this.Ri.removeReference(a,n),this.fi.add(a.toString()),le.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),le.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(l=>this.fi.add(l.toString()))}).next(()=>a.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return le.forEach(this.fi,a=>{const s=Oe.fromPath(a);return this.gi(e,s).next(l=>{l||n.removeEntry(s,ze.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(a=>{a?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return le.or([()=>le.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Bf{constructor(e,n){this.persistence=e,this.pi=new eo(a=>h6(a.path),(a,s)=>a.isEqual(s)),this.garbageCollector=S3(this,n)}static mi(e,n){return new Bf(e,n)}Ei(){}di(e){return le.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(a=>n.next(s=>a+s))}wr(e){let n=0;return this.pr(e,a=>{n++}).next(()=>n)}pr(e,n){return le.forEach(this.pi,(a,s)=>this.br(e,a,s).next(l=>l?le.resolve():n(s)))}removeTargets(e,n,a){return this.persistence.getTargetCache().removeTargets(e,n,a)}removeOrphanedDocuments(e,n){let a=0;const s=this.persistence.getRemoteDocumentCache(),l=s.newChangeBuffer();return s.ii(e,c=>this.br(e,c,n).next(d=>{d||(a++,l.removeEntry(c,ze.min()))})).next(()=>l.apply(e)).next(()=>a)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),le.resolve()}removeTarget(e,n){const a=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,a)}addReference(e,n,a){return this.pi.set(a,e.currentSequenceNumber),le.resolve()}removeReference(e,n,a){return this.pi.set(a,e.currentSequenceNumber),le.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),le.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=df(e.data.value)),n}br(e,n,a){return le.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return le.resolve(s!==void 0&&s>a)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,n,a,s){this.targetId=e,this.fromCache=n,this.Es=a,this.ds=s}static As(e,n){let a=rt(),s=rt();for(const l of n.docChanges)switch(l.type){case 0:a=a.add(l.doc.key);break;case 1:s=s.add(l.doc.key)}return new Dy(e,n.fromCache,a,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k3{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V3{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return RC()?8:u6(jn())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,a,s){const l={result:null};return this.ys(e,n).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.ws(e,n,s,a).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new k3;return this.Ss(e,n,c).next(d=>{if(l.result=d,this.Vs)return this.bs(e,n,c,d.size)})}).next(()=>l.result)}bs(e,n,a,s){return a.documentReadCount<this.fs?(Yo()<=tt.DEBUG&&_e("QueryEngine","SDK will not create cache indexes for query:",Ko(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),le.resolve()):(Yo()<=tt.DEBUG&&_e("QueryEngine","Query:",Ko(n),"scans",a.documentReadCount,"local documents and returns",s,"documents as results."),a.documentReadCount>this.gs*s?(Yo()<=tt.DEBUG&&_e("QueryEngine","The SDK decides to create cache indexes for query:",Ko(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fi(n))):le.resolve())}ys(e,n){if(kb(n))return le.resolve(null);let a=fi(n);return this.indexManager.getIndexType(e,a).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ng(n,null,"F"),a=fi(n)),this.indexManager.getDocumentsMatchingTarget(e,a).next(l=>{const c=rt(...l);return this.ps.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,a).next(p=>{const g=this.Ds(n,d);return this.Cs(n,g,c,p.readTime)?this.ys(e,Ng(n,null,"F")):this.vs(e,g,n,p)}))})))}ws(e,n,a,s){return kb(n)||s.isEqual(ze.min())?le.resolve(null):this.ps.getDocuments(e,a).next(l=>{const c=this.Ds(n,l);return this.Cs(n,c,a,s)?le.resolve(null):(Yo()<=tt.DEBUG&&_e("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ko(n)),this.vs(e,c,n,i6(s,Zu)).next(d=>d))})}Ds(e,n){let a=new un(Cw(e));return n.forEach((s,l)=>{gd(e,l)&&(a=a.add(l))}),a}Cs(e,n,a,s){if(e.limit===null)return!1;if(a.size!==n.size)return!0;const l=e.limitType==="F"?n.last():n.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(s)>0)}Ss(e,n,a){return Yo()<=tt.DEBUG&&_e("QueryEngine","Using full collection scan to execute query:",Ko(n)),this.ps.getDocumentsMatchingQuery(e,n,Ja.min(),a)}vs(e,n,a,s){return this.ps.getDocumentsMatchingQuery(e,a,s).next(l=>(n.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy="LocalStore",L3=3e8;class U3{constructor(e,n,a,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Lt(nt),this.xs=new eo(l=>wy(l),Sy),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(a)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new R3(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function z3(t,e,n,a){return new U3(t,e,n,a)}async function Zw(t,e){const n=Fe(t);return await n.persistence.runTransaction("Handle user change","readonly",a=>{let s;return n.mutationQueue.getAllMutationBatches(a).next(l=>(s=l,n.Bs(e),n.mutationQueue.getAllMutationBatches(a))).next(l=>{const c=[],d=[];let p=rt();for(const g of s){c.push(g.batchId);for(const _ of g.mutations)p=p.add(_.key)}for(const g of l){d.push(g.batchId);for(const _ of g.mutations)p=p.add(_.key)}return n.localDocuments.getDocuments(a,p).next(g=>({Ls:g,removedBatchIds:c,addedBatchIds:d}))})})}function B3(t,e){const n=Fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",a=>{const s=e.batch.keys(),l=n.Ns.newChangeBuffer({trackRemovals:!0});return function(d,p,g,_){const w=g.batch,T=w.keys();let A=le.resolve();return T.forEach(k=>{A=A.next(()=>_.getEntry(p,k)).next(H=>{const O=g.docVersions.get(k);yt(O!==null,48541),H.version.compareTo(O)<0&&(w.applyToRemoteDocument(H,g),H.isValidDocument()&&(H.setReadTime(g.commitVersion),_.addEntry(H)))})}),A.next(()=>d.mutationQueue.removeMutationBatch(p,w))}(n,a,e,l).next(()=>l.apply(a)).next(()=>n.mutationQueue.performConsistencyCheck(a)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(a,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,function(d){let p=rt();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p}(e))).next(()=>n.localDocuments.getDocuments(a,s))})}function Jw(t){const e=Fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function F3(t,e){const n=Fe(t),a=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const d=[];e.targetChanges.forEach((_,w)=>{const T=s.get(w);if(!T)return;d.push(n.Pi.removeMatchingKeys(l,_.removedDocuments,w).next(()=>n.Pi.addMatchingKeys(l,_.addedDocuments,w)));let A=T.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(w)!==null?A=A.withResumeToken(An.EMPTY_BYTE_STRING,ze.min()).withLastLimboFreeSnapshotVersion(ze.min()):_.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(_.resumeToken,a)),s=s.insert(w,A),function(H,O,$){return H.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-H.snapshotVersion.toMicroseconds()>=L3?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(T,A,_)&&d.push(n.Pi.updateTargetData(l,A))});let p=ta(),g=rt();if(e.documentUpdates.forEach(_=>{e.resolvedLimboDocuments.has(_)&&d.push(n.persistence.referenceDelegate.updateLimboDocument(l,_))}),d.push(H3(l,c,e.documentUpdates).next(_=>{p=_.ks,g=_.qs})),!a.isEqual(ze.min())){const _=n.Pi.getLastRemoteSnapshotVersion(l).next(w=>n.Pi.setTargetsMetadata(l,l.currentSequenceNumber,a));d.push(_)}return le.waitFor(d).next(()=>c.apply(l)).next(()=>n.localDocuments.getLocalViewOfDocuments(l,p,g)).next(()=>p)}).then(l=>(n.Ms=s,l))}function H3(t,e,n){let a=rt(),s=rt();return n.forEach(l=>a=a.add(l)),e.getEntries(t,a).next(l=>{let c=ta();return n.forEach((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(s=s.add(d)),p.isNoDocument()&&p.version.isEqual(ze.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):_e(Oy,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)}),{ks:c,qs:s}})}function q3(t,e){const n=Fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",a=>(e===void 0&&(e=by),n.mutationQueue.getNextMutationBatchAfterBatchId(a,e)))}function G3(t,e){const n=Fe(t);return n.persistence.runTransaction("Allocate target","readwrite",a=>{let s;return n.Pi.getTargetData(a,e).next(l=>l?(s=l,le.resolve(s)):n.Pi.allocateTargetId(a).next(c=>(s=new qa(e,c,"TargetPurposeListen",a.currentSequenceNumber),n.Pi.addTargetData(a,s).next(()=>s))))}).then(a=>{const s=n.Ms.get(a.targetId);return(s===null||a.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(a.targetId,a),n.xs.set(e,a.targetId)),a})}async function jg(t,e,n){const a=Fe(t),s=a.Ms.get(e),l=n?"readwrite":"readwrite-primary";try{n||await a.persistence.runTransaction("Release target",l,c=>a.persistence.referenceDelegate.removeTarget(c,s))}catch(c){if(!wl(c))throw c;_e(Oy,`Failed to update sequence numbers for target ${e}: ${c}`)}a.Ms=a.Ms.remove(e),a.xs.delete(s.target)}function Qb(t,e,n){const a=Fe(t);let s=ze.min(),l=rt();return a.persistence.runTransaction("Execute query","readwrite",c=>function(p,g,_){const w=Fe(p),T=w.xs.get(_);return T!==void 0?le.resolve(w.Ms.get(T)):w.Pi.getTargetData(g,_)}(a,c,fi(e)).next(d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,a.Pi.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>a.Fs.getDocumentsMatchingQuery(c,e,n?s:ze.min(),n?l:rt())).next(d=>($3(a,D6(e),d),{documents:d,Qs:l})))}function $3(t,e,n){let a=t.Os.get(e)||ze.min();n.forEach((s,l)=>{l.readTime.compareTo(a)>0&&(a=l.readTime)}),t.Os.set(e,a)}class Xb{constructor(){this.activeTargetIds=V6()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Y3{constructor(){this.Mo=new Xb,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,a){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,a){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Xb,Promise.resolve()}handleUserChange(e,n,a){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K3{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb="ConnectivityMonitor";class Zb{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){_e(Wb,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){_e(Wb,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kh=null;function kg(){return Kh===null?Kh=function(){return 268435456+Math.round(2147483648*Math.random())}():Kh++,"0x"+Kh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp="RestConnection",Q3={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class X3{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${a}/databases/${s}`,this.Wo=this.databaseId.database===Pf?`project_id=${a}`:`project_id=${a}&database_id=${s}`}Go(e,n,a,s,l){const c=kg(),d=this.zo(e,n.toUriEncodedString());_e(Xp,`Sending RPC '${e}' ${c}:`,d,a);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,s,l);const{host:g}=new URL(d),_=_l(g);return this.Jo(e,d,p,a,_).then(w=>(_e(Xp,`Received RPC '${e}' ${c}: `,w),w),w=>{throw ll(Xp,`RPC '${e}' ${c} failed with error: `,w,"url: ",d,"request:",a),w})}Ho(e,n,a,s,l,c){return this.Go(e,n,a,s,l)}jo(e,n,a){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+El}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,l)=>e[l]=s),a&&a.headers.forEach((s,l)=>e[l]=s)}zo(e,n){const a=Q3[e];return`${this.Uo}/v1/${n}:${a}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W3{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn="WebChannelConnection";class Z3 extends X3{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,a,s,l){const c=kg();return new Promise((d,p)=>{const g=new tw;g.setWithCredentials(!0),g.listenOnce(nw.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case ff.NO_ERROR:const w=g.getResponseJson();_e(Nn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(w)),d(w);break;case ff.TIMEOUT:_e(Nn,`RPC '${e}' ${c} timed out`),p(new Re(fe.DEADLINE_EXCEEDED,"Request time out"));break;case ff.HTTP_ERROR:const T=g.getStatus();if(_e(Nn,`RPC '${e}' ${c} failed with status:`,T,"response text:",g.getResponseText()),T>0){let A=g.getResponseJson();Array.isArray(A)&&(A=A[0]);const k=A?.error;if(k&&k.status&&k.message){const H=function($){const ee=$.toLowerCase().replace(/_/g,"-");return Object.values(fe).indexOf(ee)>=0?ee:fe.UNKNOWN}(k.status);p(new Re(H,k.message))}else p(new Re(fe.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new Re(fe.UNAVAILABLE,"Connection failed."));break;default:ke(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{_e(Nn,`RPC '${e}' ${c} completed.`)}});const _=JSON.stringify(s);_e(Nn,`RPC '${e}' ${c} sending request:`,s),g.send(n,"POST",_,a,15)})}T_(e,n,a){const s=kg(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=aw(),d=iw(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,n,a),p.encodeInitMessageHeaders=!0;const _=l.join("");_e(Nn,`Creating RPC '${e}' stream ${s}: ${_}`,p);const w=c.createWebChannel(_,p);this.I_(w);let T=!1,A=!1;const k=new W3({Yo:O=>{A?_e(Nn,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(T||(_e(Nn,`Opening RPC '${e}' stream ${s} transport.`),w.open(),T=!0),_e(Nn,`RPC '${e}' stream ${s} sending:`,O),w.send(O))},Zo:()=>w.close()}),H=(O,$,ee)=>{O.listen($,X=>{try{ee(X)}catch(ce){setTimeout(()=>{throw ce},0)}})};return H(w,Lu.EventType.OPEN,()=>{A||(_e(Nn,`RPC '${e}' stream ${s} transport opened.`),k.o_())}),H(w,Lu.EventType.CLOSE,()=>{A||(A=!0,_e(Nn,`RPC '${e}' stream ${s} transport closed`),k.a_(),this.E_(w))}),H(w,Lu.EventType.ERROR,O=>{A||(A=!0,ll(Nn,`RPC '${e}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),k.a_(new Re(fe.UNAVAILABLE,"The operation could not be completed")))}),H(w,Lu.EventType.MESSAGE,O=>{if(!A){const $=O.data[0];yt(!!$,16349);const ee=$,X=ee?.error||ee[0]?.error;if(X){_e(Nn,`RPC '${e}' stream ${s} received error:`,X);const ce=X.status;let ue=function(R){const C=Wt[R];if(C!==void 0)return zw(C)}(ce),z=X.message;ue===void 0&&(ue=fe.INTERNAL,z="Unknown error status: "+ce+" with message "+X.message),A=!0,k.a_(new Re(ue,z)),w.close()}else _e(Nn,`RPC '${e}' stream ${s} received:`,$),k.u_($)}}),H(d,rw.STAT_EVENT,O=>{O.stat===Sg.PROXY?_e(Nn,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Sg.NOPROXY&&_e(Nn,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.__()},0),k}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Wp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(t){return new n3(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,n,a=1e3,s=1.5,l=6e4){this.Mi=e,this.timerId=n,this.d_=a,this.A_=s,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),a=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-a);s>0&&_e("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${a} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb="PersistentStream";class tS{constructor(e,n,a,s,l,c,d,p){this.Mi=e,this.S_=a,this.b_=s,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new eS(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===fe.RESOURCE_EXHAUSTED?(ea(n.toString()),ea("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===fe.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([a,s])=>{this.D_===n&&this.G_(a,s)},a=>{e(()=>{const s=new Re(fe.UNKNOWN,"Fetching auth token failed: "+a.message);return this.z_(s)})})}G_(e,n){const a=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{a(()=>this.listener.Xo())}),this.stream.t_(()=>{a(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{a(()=>this.z_(s))}),this.stream.onMessage(s=>{a(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return _e(Jb,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(_e(Jb,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class J3 extends tS{constructor(e,n,a,s,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,a,s,c),this.serializer=l}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=a3(this.serializer,e),a=function(l){if(!("targetChange"in l))return ze.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?ze.min():c.readTime?di(c.readTime):ze.min()}(e);return this.listener.H_(n,a)}Y_(e){const n={};n.database=Pg(this.serializer),n.addTarget=function(l,c){let d;const p=c.target;if(d=Ig(p)?{documents:l3(l,p)}:{query:u3(l,p).ft},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=Hw(l,c.resumeToken);const g=Dg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(ze.min())>0){d.readTime=zf(l,c.snapshotVersion.toTimestamp());const g=Dg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const a=h3(this.serializer,e);a&&(n.labels=a),this.q_(n)}Z_(e){const n={};n.database=Pg(this.serializer),n.removeTarget=e,this.q_(n)}}class e5 extends tS{constructor(e,n,a,s,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,a,s,c),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return yt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,yt(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){yt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=o3(e.writeResults,e.commitTime),a=di(e.commitTime);return this.listener.na(a,n)}ra(){const e={};e.database=Pg(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(a=>s3(this.serializer,a))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t5{}class n5 extends t5{constructor(e,n,a,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=a,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Re(fe.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,a,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Go(e,Og(n,a),s,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===fe.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new Re(fe.UNKNOWN,l.toString())})}Ho(e,n,a,s,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Ho(e,Og(n,a),s,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===fe.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new Re(fe.UNKNOWN,c.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class r5{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ea(n),this.aa=!1):_e("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs="RemoteStore";class i5{constructor(e,n,a,s,l){this.localStore=e,this.datastore=n,this.asyncQueue=a,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo(c=>{a.enqueueAndForget(async()=>{no(this)&&(_e(Qs,"Restarting streams for network reachability change."),await async function(p){const g=Fe(p);g.Ea.add(4),await yc(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Ed(g)}(this))})}),this.Ra=new r5(a,s)}}async function Ed(t){if(no(t))for(const e of t.da)await e(!0)}async function yc(t){for(const e of t.da)await e(!1)}function nS(t,e){const n=Fe(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),ky(n)?jy(n):Sl(n).O_()&&Py(n,e))}function My(t,e){const n=Fe(t),a=Sl(n);n.Ia.delete(e),a.O_()&&rS(n,e),n.Ia.size===0&&(a.O_()?a.L_():no(n)&&n.Ra.set("Unknown"))}function Py(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ze.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Sl(t).Y_(e)}function rS(t,e){t.Va.Ue(e),Sl(t).Z_(e)}function jy(t){t.Va=new Z6({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Sl(t).start(),t.Ra.ua()}function ky(t){return no(t)&&!Sl(t).x_()&&t.Ia.size>0}function no(t){return Fe(t).Ea.size===0}function iS(t){t.Va=void 0}async function a5(t){t.Ra.set("Online")}async function s5(t){t.Ia.forEach((e,n)=>{Py(t,e)})}async function o5(t,e){iS(t),ky(t)?(t.Ra.ha(e),jy(t)):t.Ra.set("Unknown")}async function l5(t,e,n){if(t.Ra.set("Online"),e instanceof Fw&&e.state===2&&e.cause)try{await async function(s,l){const c=l.cause;for(const d of l.targetIds)s.Ia.has(d)&&(await s.remoteSyncer.rejectListen(d,c),s.Ia.delete(d),s.Va.removeTarget(d))}(t,e)}catch(a){_e(Qs,"Failed to remove targets %s: %s ",e.targetIds.join(","),a),await Ff(t,a)}else if(e instanceof gf?t.Va.Ze(e):e instanceof Bw?t.Va.st(e):t.Va.tt(e),!n.isEqual(ze.min()))try{const a=await Jw(t.localStore);n.compareTo(a)>=0&&await function(l,c){const d=l.Va.Tt(c);return d.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const _=l.Ia.get(g);_&&l.Ia.set(g,_.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,g)=>{const _=l.Ia.get(p);if(!_)return;l.Ia.set(p,_.withResumeToken(An.EMPTY_BYTE_STRING,_.snapshotVersion)),rS(l,p);const w=new qa(_.target,p,g,_.sequenceNumber);Py(l,w)}),l.remoteSyncer.applyRemoteEvent(d)}(t,n)}catch(a){_e(Qs,"Failed to raise snapshot:",a),await Ff(t,a)}}async function Ff(t,e,n){if(!wl(e))throw e;t.Ea.add(1),await yc(t),t.Ra.set("Offline"),n||(n=()=>Jw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{_e(Qs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Ed(t)})}function aS(t,e){return e().catch(n=>Ff(t,n,e))}async function Td(t){const e=Fe(t),n=rs(e);let a=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:by;for(;u5(e);)try{const s=await q3(e.localStore,a);if(s===null){e.Ta.length===0&&n.L_();break}a=s.batchId,c5(e,s)}catch(s){await Ff(e,s)}sS(e)&&oS(e)}function u5(t){return no(t)&&t.Ta.length<10}function c5(t,e){t.Ta.push(e);const n=rs(t);n.O_()&&n.X_&&n.ea(e.mutations)}function sS(t){return no(t)&&!rs(t).x_()&&t.Ta.length>0}function oS(t){rs(t).start()}async function h5(t){rs(t).ra()}async function f5(t){const e=rs(t);for(const n of t.Ta)e.ea(n.mutations)}async function d5(t,e,n){const a=t.Ta.shift(),s=Ay.from(a,e,n);await aS(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Td(t)}async function m5(t,e){e&&rs(t).X_&&await async function(a,s){if(function(c){return Q6(c)&&c!==fe.ABORTED}(s.code)){const l=a.Ta.shift();rs(a).B_(),await aS(a,()=>a.remoteSyncer.rejectFailedWrite(l.batchId,s)),await Td(a)}}(t,e),sS(t)&&oS(t)}async function eE(t,e){const n=Fe(t);n.asyncQueue.verifyOperationInProgress(),_e(Qs,"RemoteStore received new credentials");const a=no(n);n.Ea.add(3),await yc(n),a&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Ed(n)}async function p5(t,e){const n=Fe(t);e?(n.Ea.delete(2),await Ed(n)):e||(n.Ea.add(2),await yc(n),n.Ra.set("Unknown"))}function Sl(t){return t.ma||(t.ma=function(n,a,s){const l=Fe(n);return l.sa(),new J3(a,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,s)}(t.datastore,t.asyncQueue,{Xo:a5.bind(null,t),t_:s5.bind(null,t),r_:o5.bind(null,t),H_:l5.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),ky(t)?jy(t):t.Ra.set("Unknown")):(await t.ma.stop(),iS(t))})),t.ma}function rs(t){return t.fa||(t.fa=function(n,a,s){const l=Fe(n);return l.sa(),new e5(a,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:h5.bind(null,t),r_:m5.bind(null,t),ta:f5.bind(null,t),na:d5.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Td(t)):(await t.fa.stop(),t.Ta.length>0&&(_e(Qs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,n,a,s,l){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=a,this.op=s,this.removalCallback=l,this.deferred=new Qa,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,a,s,l){const c=Date.now()+a,d=new Vy(e,n,c,s,l);return d.start(a),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Re(fe.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ly(t,e){if(ea("AsyncQueue",`${e}: ${t}`),wl(t))return new Re(fe.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{static emptySet(e){return new Jo(e.comparator)}constructor(e){this.comparator=e?(n,a)=>e(n,a)||Oe.comparator(n.key,a.key):(n,a)=>Oe.comparator(n.key,a.key),this.keyedMap=Uu(),this.sortedSet=new Lt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,a)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Jo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),a=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,l=a.getNext().key;if(!s.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const a=new Jo;return a.comparator=this.comparator,a.keyedMap=e,a.sortedSet=n,a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(){this.ga=new Lt(Oe.comparator)}track(e){const n=e.doc.key,a=this.ga.get(n);a?e.type!==0&&a.type===3?this.ga=this.ga.insert(n,e):e.type===3&&a.type!==1?this.ga=this.ga.insert(n,{type:a.type,doc:e.doc}):e.type===2&&a.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&a.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&a.type===0?this.ga=this.ga.remove(n):e.type===1&&a.type===2?this.ga=this.ga.insert(n,{type:1,doc:a.doc}):e.type===0&&a.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ke(63341,{Rt:e,pa:a}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,a)=>{e.push(a)}),e}}class dl{constructor(e,n,a,s,l,c,d,p,g){this.query=e,this.docs=n,this.oldDocs=a,this.docChanges=s,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,n,a,s,l){const c=[];return n.forEach(d=>{c.push({type:0,doc:d})}),new dl(e,n,Jo.emptySet(n),c,a,s,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,a=e.docChanges;if(n.length!==a.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==a[s].type||!n[s].doc.isEqual(a[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g5{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class y5{constructor(){this.queries=nE(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,a){const s=Fe(n),l=s.queries;s.queries=nE(),l.forEach((c,d)=>{for(const p of d.Sa)p.onError(a)})})(this,new Re(fe.ABORTED,"Firestore shutting down"))}}function nE(){return new eo(t=>Rw(t),pd)}async function v5(t,e){const n=Fe(t);let a=3;const s=e.query;let l=n.queries.get(s);l?!l.ba()&&e.Da()&&(a=2):(l=new g5,a=e.Da()?0:1);try{switch(a){case 0:l.wa=await n.onListen(s,!0);break;case 1:l.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(c){const d=Ly(c,`Initialization of query '${Ko(e.query)}' failed`);return void e.onError(d)}n.queries.set(s,l),l.Sa.push(e),e.va(n.onlineState),l.wa&&e.Fa(l.wa)&&Uy(n)}async function _5(t,e){const n=Fe(t),a=e.query;let s=3;const l=n.queries.get(a);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?s=e.Da()?0:1:!l.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(a),n.onUnlisten(a,!0);case 1:return n.queries.delete(a),n.onUnlisten(a,!1);case 2:return n.onLastRemoteStoreUnlisten(a);default:return}}function b5(t,e){const n=Fe(t);let a=!1;for(const s of e){const l=s.query,c=n.queries.get(l);if(c){for(const d of c.Sa)d.Fa(s)&&(a=!0);c.wa=s}}a&&Uy(n)}function E5(t,e,n){const a=Fe(t),s=a.queries.get(e);if(s)for(const l of s.Sa)l.onError(n);a.queries.delete(e)}function Uy(t){t.Ca.forEach(e=>{e.next()})}var Vg,rE;(rE=Vg||(Vg={})).Ma="default",rE.Cache="cache";class T5{constructor(e,n,a){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=a||{}}Fa(e){if(!this.options.includeMetadataChanges){const a=[];for(const s of e.docChanges)s.type!==3&&a.push(s);e=new dl(e.query,e.docs,e.oldDocs,a,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const a=n!=="Offline";return(!this.options.qa||!a)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=dl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Vg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e){this.key=e}}class uS{constructor(e){this.key=e}}class w5{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=rt(),this.mutatedKeys=rt(),this.eu=Cw(e),this.tu=new Jo(this.eu)}get nu(){return this.Ya}ru(e,n){const a=n?n.iu:new tE,s=n?n.tu:this.tu;let l=n?n.mutatedKeys:this.mutatedKeys,c=s,d=!1;const p=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,g=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((_,w)=>{const T=s.get(_),A=gd(this.query,w)?w:null,k=!!T&&this.mutatedKeys.has(T.key),H=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let O=!1;T&&A?T.data.isEqual(A.data)?k!==H&&(a.track({type:3,doc:A}),O=!0):this.su(T,A)||(a.track({type:2,doc:A}),O=!0,(p&&this.eu(A,p)>0||g&&this.eu(A,g)<0)&&(d=!0)):!T&&A?(a.track({type:0,doc:A}),O=!0):T&&!A&&(a.track({type:1,doc:T}),O=!0,(p||g)&&(d=!0)),O&&(A?(c=c.add(A),l=H?l.add(_):l.delete(_)):(c=c.delete(_),l=l.delete(_)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const _=this.query.limitType==="F"?c.last():c.first();c=c.delete(_.key),l=l.delete(_.key),a.track({type:1,doc:_})}return{tu:c,iu:a,Cs:d,mutatedKeys:l}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,a,s){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort((_,w)=>function(A,k){const H=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ke(20277,{Rt:O})}};return H(A)-H(k)}(_.type,w.type)||this.eu(_.doc,w.doc)),this.ou(a),s=s??!1;const d=n&&!s?this._u():[],p=this.Xa.size===0&&this.current&&!s?1:0,g=p!==this.Za;return this.Za=p,c.length!==0||g?{snapshot:new dl(this.query,e.tu,l,c,e.mutatedKeys,p===0,g,!1,!!a&&a.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new tE,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=rt(),this.tu.forEach(a=>{this.uu(a.key)&&(this.Xa=this.Xa.add(a.key))});const n=[];return e.forEach(a=>{this.Xa.has(a)||n.push(new uS(a))}),this.Xa.forEach(a=>{e.has(a)||n.push(new lS(a))}),n}cu(e){this.Ya=e.Qs,this.Xa=rt();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return dl.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const zy="SyncEngine";class S5{constructor(e,n,a){this.query=e,this.targetId=n,this.view=a}}class x5{constructor(e){this.key=e,this.hu=!1}}class A5{constructor(e,n,a,s,l,c){this.localStore=e,this.remoteStore=n,this.eventManager=a,this.sharedClientState=s,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new eo(d=>Rw(d),pd),this.Iu=new Map,this.Eu=new Set,this.du=new Lt(Oe.comparator),this.Au=new Map,this.Ru=new Iy,this.Vu={},this.mu=new Map,this.fu=fl.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function R5(t,e,n=!0){const a=pS(t);let s;const l=a.Tu.get(e);return l?(a.sharedClientState.addLocalQueryTarget(l.targetId),s=l.view.lu()):s=await cS(a,e,n,!0),s}async function C5(t,e){const n=pS(t);await cS(n,e,!0,!1)}async function cS(t,e,n,a){const s=await G3(t.localStore,fi(e)),l=s.targetId,c=t.sharedClientState.addLocalQueryTarget(l,n);let d;return a&&(d=await I5(t,e,l,c==="current",s.resumeToken)),t.isPrimaryClient&&n&&nS(t.remoteStore,s),d}async function I5(t,e,n,a,s){t.pu=(w,T,A)=>async function(H,O,$,ee){let X=O.view.ru($);X.Cs&&(X=await Qb(H.localStore,O.query,!1).then(({documents:N})=>O.view.ru(N,X)));const ce=ee&&ee.targetChanges.get(O.targetId),ue=ee&&ee.targetMismatches.get(O.targetId)!=null,z=O.view.applyChanges(X,H.isPrimaryClient,ce,ue);return aE(H,O.targetId,z.au),z.snapshot}(t,w,T,A);const l=await Qb(t.localStore,e,!0),c=new w5(e,l.Qs),d=c.ru(l.documents),p=gc.createSynthesizedTargetChangeForCurrentChange(n,a&&t.onlineState!=="Offline",s),g=c.applyChanges(d,t.isPrimaryClient,p);aE(t,n,g.au);const _=new S5(e,n,c);return t.Tu.set(e,_),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),g.snapshot}async function N5(t,e,n){const a=Fe(t),s=a.Tu.get(e),l=a.Iu.get(s.targetId);if(l.length>1)return a.Iu.set(s.targetId,l.filter(c=>!pd(c,e))),void a.Tu.delete(e);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(s.targetId),a.sharedClientState.isActiveQueryTarget(s.targetId)||await jg(a.localStore,s.targetId,!1).then(()=>{a.sharedClientState.clearQueryState(s.targetId),n&&My(a.remoteStore,s.targetId),Lg(a,s.targetId)}).catch(Tl)):(Lg(a,s.targetId),await jg(a.localStore,s.targetId,!0))}async function D5(t,e){const n=Fe(t),a=n.Tu.get(e),s=n.Iu.get(a.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(a.targetId),My(n.remoteStore,a.targetId))}async function O5(t,e,n){const a=U5(t);try{const s=await function(c,d){const p=Fe(c),g=Pt.now(),_=d.reduce((A,k)=>A.add(k.key),rt());let w,T;return p.persistence.runTransaction("Locally write mutations","readwrite",A=>{let k=ta(),H=rt();return p.Ns.getEntries(A,_).next(O=>{k=O,k.forEach(($,ee)=>{ee.isValidDocument()||(H=H.add($))})}).next(()=>p.localDocuments.getOverlayedDocuments(A,k)).next(O=>{w=O;const $=[];for(const ee of d){const X=q6(ee,w.get(ee.key).overlayedDocument);X!=null&&$.push(new to(ee.key,X,_w(X.value.mapValue),Wi.exists(!0)))}return p.mutationQueue.addMutationBatch(A,g,$,d)}).next(O=>{T=O;const $=O.applyToLocalDocumentSet(w,H);return p.documentOverlayCache.saveOverlays(A,O.batchId,$)})}).then(()=>({batchId:T.batchId,changes:Nw(w)}))}(a.localStore,e);a.sharedClientState.addPendingMutation(s.batchId),function(c,d,p){let g=c.Vu[c.currentUser.toKey()];g||(g=new Lt(nt)),g=g.insert(d,p),c.Vu[c.currentUser.toKey()]=g}(a,s.batchId,n),await vc(a,s.changes),await Td(a.remoteStore)}catch(s){const l=Ly(s,"Failed to persist write");n.reject(l)}}async function hS(t,e){const n=Fe(t);try{const a=await F3(n.localStore,e);e.targetChanges.forEach((s,l)=>{const c=n.Au.get(l);c&&(yt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?c.hu=!0:s.modifiedDocuments.size>0?yt(c.hu,14607):s.removedDocuments.size>0&&(yt(c.hu,42227),c.hu=!1))}),await vc(n,a,e)}catch(a){await Tl(a)}}function iE(t,e,n){const a=Fe(t);if(a.isPrimaryClient&&n===0||!a.isPrimaryClient&&n===1){const s=[];a.Tu.forEach((l,c)=>{const d=c.view.va(e);d.snapshot&&s.push(d.snapshot)}),function(c,d){const p=Fe(c);p.onlineState=d;let g=!1;p.queries.forEach((_,w)=>{for(const T of w.Sa)T.va(d)&&(g=!0)}),g&&Uy(p)}(a.eventManager,e),s.length&&a.Pu.H_(s),a.onlineState=e,a.isPrimaryClient&&a.sharedClientState.setOnlineState(e)}}async function M5(t,e,n){const a=Fe(t);a.sharedClientState.updateQueryState(e,"rejected",n);const s=a.Au.get(e),l=s&&s.key;if(l){let c=new Lt(Oe.comparator);c=c.insert(l,On.newNoDocument(l,ze.min()));const d=rt().add(l),p=new _d(ze.min(),new Map,new Lt(nt),c,d);await hS(a,p),a.du=a.du.remove(l),a.Au.delete(e),By(a)}else await jg(a.localStore,e,!1).then(()=>Lg(a,e,n)).catch(Tl)}async function P5(t,e){const n=Fe(t),a=e.batch.batchId;try{const s=await B3(n.localStore,e);dS(n,a,null),fS(n,a),n.sharedClientState.updateMutationState(a,"acknowledged"),await vc(n,s)}catch(s){await Tl(s)}}async function j5(t,e,n){const a=Fe(t);try{const s=await function(c,d){const p=Fe(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let _;return p.mutationQueue.lookupMutationBatch(g,d).next(w=>(yt(w!==null,37113),_=w.keys(),p.mutationQueue.removeMutationBatch(g,w))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,_,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,_)).next(()=>p.localDocuments.getDocuments(g,_))})}(a.localStore,e);dS(a,e,n),fS(a,e),a.sharedClientState.updateMutationState(e,"rejected",n),await vc(a,s)}catch(s){await Tl(s)}}function fS(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function dS(t,e,n){const a=Fe(t);let s=a.Vu[a.currentUser.toKey()];if(s){const l=s.get(e);l&&(n?l.reject(n):l.resolve(),s=s.remove(e)),a.Vu[a.currentUser.toKey()]=s}}function Lg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const a of t.Iu.get(e))t.Tu.delete(a),n&&t.Pu.yu(a,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(a=>{t.Ru.containsKey(a)||mS(t,a)})}function mS(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(My(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),By(t))}function aE(t,e,n){for(const a of n)a instanceof lS?(t.Ru.addReference(a.key,e),k5(t,a)):a instanceof uS?(_e(zy,"Document no longer in limbo: "+a.key),t.Ru.removeReference(a.key,e),t.Ru.containsKey(a.key)||mS(t,a.key)):ke(19791,{wu:a})}function k5(t,e){const n=e.key,a=n.path.canonicalString();t.du.get(n)||t.Eu.has(a)||(_e(zy,"New document in limbo: "+n),t.Eu.add(a),By(t))}function By(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Oe(Mt.fromString(e)),a=t.fu.next();t.Au.set(a,new x5(n)),t.du=t.du.insert(n,a),nS(t.remoteStore,new qa(fi(Aw(n.path)),a,"TargetPurposeLimboResolution",hd.ce))}}async function vc(t,e,n){const a=Fe(t),s=[],l=[],c=[];a.Tu.isEmpty()||(a.Tu.forEach((d,p)=>{c.push(a.pu(p,e,n).then(g=>{if((g||n)&&a.isPrimaryClient){const _=g?!g.fromCache:n?.targetChanges.get(p.targetId)?.current;a.sharedClientState.updateQueryState(p.targetId,_?"current":"not-current")}if(g){s.push(g);const _=Dy.As(p.targetId,g);l.push(_)}}))}),await Promise.all(c),a.Pu.H_(s),await async function(p,g){const _=Fe(p);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>le.forEach(g,T=>le.forEach(T.Es,A=>_.persistence.referenceDelegate.addReference(w,T.targetId,A)).next(()=>le.forEach(T.ds,A=>_.persistence.referenceDelegate.removeReference(w,T.targetId,A)))))}catch(w){if(!wl(w))throw w;_e(Oy,"Failed to update sequence numbers: "+w)}for(const w of g){const T=w.targetId;if(!w.fromCache){const A=_.Ms.get(T),k=A.snapshotVersion,H=A.withLastLimboFreeSnapshotVersion(k);_.Ms=_.Ms.insert(T,H)}}}(a.localStore,l))}async function V5(t,e){const n=Fe(t);if(!n.currentUser.isEqual(e)){_e(zy,"User change. New user:",e.toKey());const a=await Zw(n.localStore,e);n.currentUser=e,function(l,c){l.mu.forEach(d=>{d.forEach(p=>{p.reject(new Re(fe.CANCELLED,c))})}),l.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,a.removedBatchIds,a.addedBatchIds),await vc(n,a.Ls)}}function L5(t,e){const n=Fe(t),a=n.Au.get(e);if(a&&a.hu)return rt().add(a.key);{let s=rt();const l=n.Iu.get(e);if(!l)return s;for(const c of l){const d=n.Tu.get(c);s=s.unionWith(d.view.nu)}return s}}function pS(t){const e=Fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=hS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=L5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=M5.bind(null,e),e.Pu.H_=b5.bind(null,e.eventManager),e.Pu.yu=E5.bind(null,e.eventManager),e}function U5(t){const e=Fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=P5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=j5.bind(null,e),e}class Hf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return z3(this.persistence,new V3,e.initialUser,this.serializer)}Cu(e){return new Ww(Ny.mi,this.serializer)}Du(e){return new Y3}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hf.provider={build:()=>new Hf};class z5 extends Hf{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){yt(this.persistence.referenceDelegate instanceof Bf,46915);const a=this.persistence.referenceDelegate.garbageCollector;return new T3(a,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Xn.withCacheSize(this.cacheSizeBytes):Xn.DEFAULT;return new Ww(a=>Bf.mi(a,n),this.serializer)}}class Ug{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>iE(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=V5.bind(null,this.syncEngine),await p5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new y5}()}createDatastore(e){const n=bd(e.databaseInfo.databaseId),a=function(l){return new Z3(l)}(e.databaseInfo);return function(l,c,d,p){return new n5(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,a,n)}createRemoteStore(e){return function(a,s,l,c,d){return new i5(a,s,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,n=>iE(this.syncEngine,n,0),function(){return Zb.v()?new Zb:new K3}())}createSyncEngine(e,n){return function(s,l,c,d,p,g,_){const w=new A5(s,l,c,d,p,g);return _&&(w.gu=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await async function(n){const a=Fe(n);_e(Qs,"RemoteStore shutting down."),a.Ea.add(5),await yc(a),a.Aa.shutdown(),a.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Ug.provider={build:()=>new Ug};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B5{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ea("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is="FirestoreClient";class F5{constructor(e,n,a,s,l){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=a,this.databaseInfo=s,this.user=Dn.UNAUTHENTICATED,this.clientId=vy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(a,async c=>{_e(is,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(a,c=>(_e(is,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qa;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const a=Ly(n,"Failed to shutdown persistence");e.reject(a)}}),e.promise}}async function Zp(t,e){t.asyncQueue.verifyOperationInProgress(),_e(is,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let a=n.initialUser;t.setCredentialChangeListener(async s=>{a.isEqual(s)||(await Zw(e.localStore,s),a=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function sE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await H5(t);_e(is,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(a=>eE(e.remoteStore,a)),t.setAppCheckTokenChangeListener((a,s)=>eE(e.remoteStore,s)),t._onlineComponents=e}async function H5(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){_e(is,"Using user provided OfflineComponentProvider");try{await Zp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===fe.FAILED_PRECONDITION||s.code===fe.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ll("Error using user provided cache. Falling back to memory cache: "+n),await Zp(t,new Hf)}}else _e(is,"Using default OfflineComponentProvider"),await Zp(t,new z5(void 0));return t._offlineComponents}async function gS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(_e(is,"Using user provided OnlineComponentProvider"),await sE(t,t._uninitializedComponentsProvider._online)):(_e(is,"Using default OnlineComponentProvider"),await sE(t,new Ug))),t._onlineComponents}function q5(t){return gS(t).then(e=>e.syncEngine)}async function G5(t){const e=await gS(t),n=e.eventManager;return n.onListen=R5.bind(null,e.syncEngine),n.onUnlisten=N5.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=C5.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=D5.bind(null,e.syncEngine),n}function $5(t,e,n={}){const a=new Qa;return t.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const _=new B5({next:T=>{_.Nu(),c.enqueueAndForget(()=>_5(l,w)),T.fromCache&&p.source==="server"?g.reject(new Re(fe.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(T)},error:T=>g.reject(T)}),w=new T5(d,_,{includeMetadataChanges:!0,qa:!0});return v5(l,w)}(await G5(t),t.asyncQueue,e,n,a)),a.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS="firestore.googleapis.com",lE=!0;class uE{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Re(fe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=vS,this.ssl=lE}else this.host=e.host,this.ssl=e.ssl??lE;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Xw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<b3)throw new Re(fe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}r6("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yS(e.experimentalLongPollingOptions??{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new Re(fe.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new Re(fe.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new Re(fe.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(a,s){return a.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wd{constructor(e,n,a,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=a,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Re(fe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Re(fe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uE(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new YI;switch(a.type){case"firstParty":return new WI(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new Re(fe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const a=oE.get(n);a&&(_e("ComponentProvider","Removing Datastore"),oE.delete(n),a.terminate())}(this),Promise.resolve()}}function Y5(t,e,n,a={}){t=Of(t,wd);const s=_l(e),l=t._getSettings(),c={...l,emulatorOptions:t._getEmulatorOptions()},d=`${e}:${n}`;s&&($T(`https://${d}`),YT("Firestore",!0)),l.host!==vS&&l.host!==d&&ll("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:d,ssl:s,emulatorOptions:a};if(!$s(p,c)&&(t._setSettings(p),a.mockUserToken)){let g,_;if(typeof a.mockUserToken=="string")g=a.mockUserToken,_=Dn.MOCK_USER;else{g=vC(a.mockUserToken,t._app?.options.projectId);const w=a.mockUserToken.sub||a.mockUserToken.user_id;if(!w)throw new Re(fe.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new Dn(w)}t._authCredentials=new KI(new ow(g,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,n,a){this.converter=n,this._query=a,this.type="query",this.firestore=e}withConverter(e){return new Sd(this.firestore,e,this._query)}}class xn{constructor(e,n,a){this.converter=n,this._key=a,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xn(this.firestore,e,this._key)}toJSON(){return{type:xn._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,a){if(mc(n,xn._jsonSchema))return new xn(e,a||null,new Oe(Mt.fromString(n.referencePath)))}}xn._jsonSchemaVersion="firestore/documentReference/1.0",xn._jsonSchema={type:Jt("string",xn._jsonSchemaVersion),referencePath:Jt("string")};class Xa extends Sd{constructor(e,n,a){super(e,n,Aw(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xn(this.firestore,null,new Oe(e))}withConverter(e){return new Xa(this.firestore,e,this._path)}}function _S(t,e,...n){if(t=Zn(t),lw("collection","path",e),t instanceof wd){const a=Mt.fromString(e,...n);return wb(a),new Xa(t,null,a)}{if(!(t instanceof xn||t instanceof Xa))throw new Re(fe.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=t._path.child(Mt.fromString(e,...n));return wb(a),new Xa(t.firestore,null,a)}}function K5(t,e,...n){if(t=Zn(t),arguments.length===1&&(e=vy.newId()),lw("doc","path",e),t instanceof wd){const a=Mt.fromString(e,...n);return Tb(a),new xn(t,null,new Oe(a))}{if(!(t instanceof xn||t instanceof Xa))throw new Re(fe.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=t._path.child(Mt.fromString(e,...n));return Tb(a),new xn(t.firestore,t instanceof Xa?t.converter:null,new Oe(a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE="AsyncQueue";class hE{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new eS(this,"async_queue_retry"),this._c=()=>{const a=Wp();a&&_e(cE,"Visibility state changed to "+a.visibilityState),this.M_.w_()},this.ac=e;const n=Wp();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Wp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Qa;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!wl(e))throw e;_e(cE,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(a=>{throw this.nc=a,this.rc=!1,ea("INTERNAL UNHANDLED ERROR: ",fE(a)),a}).then(a=>(this.rc=!1,a))));return this.ac=n,n}enqueueAfterDelay(e,n,a){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Vy.createAndSchedule(this,e,n,a,l=>this.hc(l));return this.tc.push(s),s}uc(){this.nc&&ke(47125,{Pc:fE(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,a)=>n.targetTimeMs-a.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function fE(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Fy extends wd{constructor(e,n,a,s){super(e,n,a,s),this.type="firestore",this._queue=new hE,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new hE(e),this._firestoreClient=void 0,await e}}}function bS(t,e){const n=typeof t=="object"?t:WT(),a=typeof t=="string"?t:Pf,s=gy(n,"firestore").getImmediate({identifier:a});if(!s._initialized){const l=gC("firestore");l&&Y5(s,...l)}return s}function ES(t){if(t._terminated)throw new Re(fe.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Q5(t),t._firestoreClient}function Q5(t){const e=t._freezeSettings(),n=function(s,l,c,d){return new m6(s,l,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,yS(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new F5(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(s){const l=s?._online.build();return{_offline:s?._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Dr(An.fromBase64String(e))}catch(n){throw new Re(fe.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Dr(An.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Dr._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(mc(e,Dr._jsonSchema))return Dr.fromBase64String(e.bytes)}}Dr._jsonSchemaVersion="firestore/bytes/1.0",Dr._jsonSchema={type:Jt("string",Dr._jsonSchemaVersion),bytes:Jt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Re(fe.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Sn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Re(fe.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Re(fe.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return nt(this._lat,e._lat)||nt(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:mi._jsonSchemaVersion}}static fromJSON(e){if(mc(e,mi._jsonSchema))return new mi(e.latitude,e.longitude)}}mi._jsonSchemaVersion="firestore/geoPoint/1.0",mi._jsonSchema={type:Jt("string",mi._jsonSchemaVersion),latitude:Jt("number"),longitude:Jt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(a,s){if(a.length!==s.length)return!1;for(let l=0;l<a.length;++l)if(a[l]!==s[l])return!1;return!0}(this._values,e._values)}toJSON(){return{type:pi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(mc(e,pi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new pi(e.vectorValues);throw new Re(fe.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}pi._jsonSchemaVersion="firestore/vectorValue/1.0",pi._jsonSchema={type:Jt("string",pi._jsonSchemaVersion),vectorValues:Jt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X5=/^__.*__$/;class W5{constructor(e,n,a){this.data=e,this.fieldMask=n,this.fieldTransforms=a}toMutation(e,n){return this.fieldMask!==null?new to(e,this.data,this.fieldMask,n,this.fieldTransforms):new pc(e,this.data,n,this.fieldTransforms)}}function wS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ke(40011,{Ac:t})}}class qy{constructor(e,n,a,s,l,c){this.settings=e,this.databaseId=n,this.serializer=a,this.ignoreUndefinedProperties=s,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new qy({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),a=this.Vc({path:n,fc:!1});return a.gc(e),a}yc(e){const n=this.path?.child(e),a=this.Vc({path:n,fc:!1});return a.Rc(),a}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return qf(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(wS(this.Ac)&&X5.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Z5{constructor(e,n,a){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=a||bd(e)}Cc(e,n,a,s=!1){return new qy({Ac:e,methodName:n,Dc:a,path:Sn.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function J5(t){const e=t._freezeSettings(),n=bd(t._databaseId);return new Z5(t._databaseId,!!e.ignoreUndefinedProperties,n)}function eN(t,e,n,a,s,l={}){const c=t.Cc(l.merge||l.mergeFields?2:0,e,n,s);RS("Data must be an object, but it was:",c,a);const d=xS(a,c);let p,g;if(l.merge)p=new Fr(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const _=[];for(const w of l.mergeFields){const T=tN(e,w,n);if(!c.contains(T))throw new Re(fe.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);rN(_,T)||_.push(T)}p=new Fr(_),g=c.fieldTransforms.filter(w=>p.covers(w.field))}else p=null,g=c.fieldTransforms;return new W5(new Nr(d),p,g)}function SS(t,e){if(AS(t=Zn(t)))return RS("Unsupported field value:",e,t),xS(t,e);if(t instanceof TS)return function(a,s){if(!wS(s.Ac))throw s.Sc(`${a._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${a._methodName}() is not currently supported inside arrays`);const l=a._toFieldTransform(s);l&&s.fieldTransforms.push(l)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(a,s){const l=[];let c=0;for(const d of a){let p=SS(d,s.wc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(t,e)}return function(a,s){if((a=Zn(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return L6(s.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const l=Pt.fromDate(a);return{timestampValue:zf(s.serializer,l)}}if(a instanceof Pt){const l=new Pt(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:zf(s.serializer,l)}}if(a instanceof mi)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof Dr)return{bytesValue:Hw(s.serializer,a._byteString)};if(a instanceof xn){const l=s.databaseId,c=a.firestore._databaseId;if(!c.isEqual(l))throw s.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Cy(a.firestore._databaseId||s.databaseId,a._key.path)}}if(a instanceof pi)return function(c,d){return{mapValue:{fields:{[yw]:{stringValue:vw},[jf]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw d.Sc("VectorValues must only contain numeric values.");return xy(d.serializer,g)})}}}}}}(a,s);throw s.Sc(`Unsupported field value: ${_y(a)}`)}(t,e)}function xS(t,e){const n={};return hw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Js(t,(a,s)=>{const l=SS(s,e.mc(a));l!=null&&(n[a]=l)}),{mapValue:{fields:n}}}function AS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Pt||t instanceof mi||t instanceof Dr||t instanceof xn||t instanceof TS||t instanceof pi)}function RS(t,e,n){if(!AS(n)||!uw(n)){const a=_y(n);throw a==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+a)}}function tN(t,e,n){if((e=Zn(e))instanceof Hy)return e._internalPath;if(typeof e=="string")return CS(t,e);throw qf("Field path arguments must be of type string or ",t,!1,void 0,n)}const nN=new RegExp("[~\\*/\\[\\]]");function CS(t,e,n){if(e.search(nN)>=0)throw qf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Hy(...e.split("."))._internalPath}catch{throw qf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function qf(t,e,n,a,s){const l=a&&!a.isEmpty(),c=s!==void 0;let d=`Function ${e}() called with invalid data`;n&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${a}`),c&&(p+=` in document ${s}`),p+=")"),new Re(fe.INVALID_ARGUMENT,d+t+p)}function rN(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,n,a,s,l){this._firestore=e,this._userDataWriter=n,this._key=a,this._document=s,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new xn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new iN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(NS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class iN extends IS{data(){return super.data()}}function NS(t,e){return typeof e=="string"?CS(t,e):e instanceof Hy?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Re(fe.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sN{convertValue(e,n="none"){switch(ns(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Gt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ts(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ke(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const a={};return Js(e,(s,l)=>{a[s]=this.convertValue(l,n)}),a}convertVectorValue(e){const n=e.fields?.[jf].arrayValue?.values?.map(a=>Gt(a.doubleValue));return new pi(n)}convertGeoPoint(e){return new mi(Gt(e.latitude),Gt(e.longitude))}convertArray(e,n){return(e.values||[]).map(a=>this.convertValue(a,n))}convertServerTimestamp(e,n){switch(n){case"previous":const a=dd(e);return a==null?null:this.convertValue(a,n);case"estimate":return this.convertTimestamp(Ju(e));default:return null}}convertTimestamp(e){const n=es(e);return new Pt(n.seconds,n.nanos)}convertDocumentKey(e,n){const a=Mt.fromString(e);yt(Qw(a),9688,{name:e});const s=new ec(a.get(1),a.get(3)),l=new Oe(a.popFirst(5));return s.isEqual(n)||ea(`Document ${l} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(t,e,n){let a;return a=t?t.toFirestore(e):e,a}class Qh{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class el extends IS{constructor(e,n,a,s,l,c){super(e,n,a,s,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new yf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const a=this._document.data.field(NS("DocumentSnapshot.get",e));if(a!==null)return this._userDataWriter.convertValue(a,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Re(fe.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=el._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}el._jsonSchemaVersion="firestore/documentSnapshot/1.0",el._jsonSchema={type:Jt("string",el._jsonSchemaVersion),bundleSource:Jt("string","DocumentSnapshot"),bundleName:Jt("string"),bundle:Jt("string")};class yf extends el{data(e={}){return super.data(e)}}class tl{constructor(e,n,a,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Qh(s.hasPendingWrites,s.fromCache),this.query=a}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(a=>{e.call(n,new yf(this._firestore,this._userDataWriter,a.key,a,new Qh(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Re(fe.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,l){if(s._snapshot.oldDocs.isEmpty()){let c=0;return s._snapshot.docChanges.map(d=>{const p=new yf(s._firestore,s._userDataWriter,d.doc.key,d.doc,new Qh(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new yf(s._firestore,s._userDataWriter,d.doc.key,d.doc,new Qh(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let g=-1,_=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),_=c.indexOf(d.doc.key)),{type:lN(d.type),doc:p,oldIndex:g,newIndex:_}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Re(fe.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=tl._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=vy.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],a=[],s=[];return this.docs.forEach(l=>{l._document!==null&&(n.push(l._document),a.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),s.push(l.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function lN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ke(61501,{type:t})}}tl._jsonSchemaVersion="firestore/querySnapshot/1.0",tl._jsonSchema={type:Jt("string",tl._jsonSchemaVersion),bundleSource:Jt("string","QuerySnapshot"),bundleName:Jt("string"),bundle:Jt("string")};class uN extends sN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xn(this.firestore,null,n)}}function cN(t){t=Of(t,Sd);const e=Of(t.firestore,Fy),n=ES(e),a=new uN(e);return aN(t._query),$5(n,t._query).then(s=>new tl(e,a,t,s))}function hN(t,e){const n=Of(t.firestore,Fy),a=K5(t),s=oN(t.converter,e);return fN(n,[eN(J5(t.firestore),"addDoc",a._key,s,t.converter!==null,{}).toMutation(a._key,Wi.exists(!1))]).then(()=>a)}function fN(t,e){return function(a,s){const l=new Qa;return a.asyncQueue.enqueueAndForget(async()=>O5(await q5(a),s,l)),l.promise}(ES(t),e)}(function(e,n=!0){(function(s){El=s})(bl),ol(new Ys("firestore",(a,{instanceIdentifier:s,options:l})=>{const c=a.getProvider("app").getImmediate(),d=new Fy(new QI(a.getProvider("auth-internal")),new ZI(c,a.getProvider("app-check-internal")),function(g,_){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new Re(fe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ec(g.options.projectId,_)}(c,s),c);return l={useFetchStreams:n,...l},d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),Ya(vb,_b,e),Ya(vb,_b,"esm2020")})();const dN={apiKey:"AIzaSyBpALqKTYCNAeA8mx5dO50_XqnmIM9xF6E",authDomain:"arrowsites.firebaseapp.com",projectId:"arrowsites",storageBucket:"arrowsites.appspot.com",messagingSenderId:"153297564349",appId:"1:153297564349:web:50e1c9cf5c48cd5f52fdd4"},Gy=XT(dN),mN=bS(Gy);function DS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pN=DS,OS=new fc("auth","Firebase",DS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=new my("@firebase/auth");function gN(t,...e){Gf.logLevel<=tt.WARN&&Gf.warn(`Auth (${bl}): ${t}`,...e)}function vf(t,...e){Gf.logLevel<=tt.ERROR&&Gf.error(`Auth (${bl}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t,...e){throw Yy(t,...e)}function qr(t,...e){return Yy(t,...e)}function $y(t,e,n){const a={...pN(),[e]:n};return new fc("auth","Firebase",a).create(e,{appName:t.name})}function Zi(t){return $y(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yN(t,e,n){const a=n;if(!(e instanceof a))throw a.name!==e.constructor.name&&Mr(t,"argument-error"),$y(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yy(t,...e){if(typeof t!="string"){const n=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=t.name),t._errorFactory.create(n,...a)}return OS.create(t,...e)}function je(t,e,...n){if(!t)throw Yy(e,...n)}function Qi(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vf(e),new Error(e)}function na(t,e){t||Qi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(){return typeof self<"u"&&self.location?.href||""}function vN(){return dE()==="http:"||dE()==="https:"}function dE(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vN()||SC()||"connection"in navigator)?navigator.onLine:!0}function bN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n){this.shortDelay=e,this.longDelay=n,na(n>e,"Short delay should be less than long delay!"),this.isMobile=EC()||xC()}get(){return _N()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(t,e){na(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{static initialize(e,n,a){this.fetchImpl=e,n&&(this.headersImpl=n),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],wN=new _c(3e4,6e4);function os(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ls(t,e,n,a,s={}){return PS(t,s,async()=>{let l={},c={};a&&(e==="GET"?c=a:l={body:JSON.stringify(a)});const d=dc({key:t.config.apiKey,...c}).slice(1),p=await t._getAdditionalHeaders();p["Content-Type"]="application/json",t.languageCode&&(p["X-Firebase-Locale"]=t.languageCode);const g={method:e,headers:p,...l};return wC()||(g.referrerPolicy="no-referrer"),t.emulatorConfig&&_l(t.emulatorConfig.host)&&(g.credentials="include"),MS.fetch()(await jS(t,t.config.apiHost,n,d),g)})}async function PS(t,e,n){t._canInitEmulator=!1;const a={...EN,...e};try{const s=new xN(t),l=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Xh(t,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xh(t,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Xh(t,"email-already-in-use",c);if(p==="USER_DISABLED")throw Xh(t,"user-disabled",c);const _=a[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw $y(t,_,g);Mr(t,_)}}catch(s){if(s instanceof ia)throw s;Mr(t,"network-request-failed",{message:String(s)})}}async function bc(t,e,n,a,s={}){const l=await ls(t,e,n,a,s);return"mfaPendingCredential"in l&&Mr(t,"multi-factor-auth-required",{_serverResponse:l}),l}async function jS(t,e,n,a){const s=`${e}${n}?${a}`,l=t,c=l.config.emulator?Ky(t.config,s):`${t.config.apiScheme}://${s}`;return TN.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function SN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,a)=>{this.timer=setTimeout(()=>a(qr(this.auth,"network-request-failed")),wN.get())})}}function Xh(t,e,n){const a={appName:t.name};n.email&&(a.email=n.email),n.phoneNumber&&(a.phoneNumber=n.phoneNumber);const s=qr(t,e,a);return s.customData._tokenResponse=n,s}function mE(t){return t!==void 0&&t.enterprise!==void 0}class AN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return SN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function RN(t,e){return ls(t,"GET","/v2/recaptchaConfig",os(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CN(t,e){return ls(t,"POST","/v1/accounts:delete",e)}async function $f(t,e){return ls(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function IN(t,e=!1){const n=Zn(t),a=await n.getIdToken(e),s=Qy(a);je(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const l=typeof s.firebase=="object"?s.firebase:void 0,c=l?.sign_in_provider;return{claims:s,token:a,authTime:Yu(Jp(s.auth_time)),issuedAtTime:Yu(Jp(s.iat)),expirationTime:Yu(Jp(s.exp)),signInProvider:c||null,signInSecondFactor:l?.sign_in_second_factor||null}}function Jp(t){return Number(t)*1e3}function Qy(t){const[e,n,a]=t.split(".");if(e===void 0||n===void 0||a===void 0)return vf("JWT malformed, contained fewer than 3 sections"),null;try{const s=FT(n);return s?JSON.parse(s):(vf("Failed to decode base64 JWT payload"),null)}catch(s){return vf("Caught error parsing JWT payload as JSON",s?.toString()),null}}function pE(t){const e=Qy(t);return je(e,"internal-error"),je(typeof e.exp<"u","internal-error"),je(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ic(t,e,n=!1){if(n)return e;try{return await e}catch(a){throw a instanceof ia&&NN(a)&&t.auth.currentUser===t&&await t.auth.signOut(),a}}function NN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const a=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yu(this.lastLoginAt),this.creationTime=Yu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yf(t){const e=t.auth,n=await t.getIdToken(),a=await ic(t,$f(e,{idToken:n}));je(a?.users.length,e,"internal-error");const s=a.users[0];t._notifyReloadListener(s);const l=s.providerUserInfo?.length?kS(s.providerUserInfo):[],c=MN(t.providerData,l),d=t.isAnonymous,p=!(t.email&&s.passwordHash)&&!c?.length,g=d?p:!1,_={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Bg(s.createdAt,s.lastLoginAt),isAnonymous:g};Object.assign(t,_)}async function ON(t){const e=Zn(t);await Yf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MN(t,e){return[...t.filter(a=>!e.some(s=>s.providerId===a.providerId)),...e]}function kS(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PN(t,e){const n=await PS(t,{},async()=>{const a=dc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:l}=t.config,c=await jS(t,s,"/v1/token",`key=${l}`),d=await t._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:a};return t.emulatorConfig&&_l(t.emulatorConfig.host)&&(p.credentials="include"),MS.fetch()(c,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function jN(t,e){return ls(t,"POST","/v2/accounts:revokeToken",os(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){je(e.idToken,"internal-error"),je(typeof e.idToken<"u","internal-error"),je(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){je(e.length!==0,"internal-error");const n=pE(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(je(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:a,refreshToken:s,expiresIn:l}=await PN(e,n);this.updateTokensAndExpiration(a,s,Number(l))}updateTokensAndExpiration(e,n,a){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,n){const{refreshToken:a,accessToken:s,expirationTime:l}=n,c=new nl;return a&&(je(typeof a=="string","internal-error",{appName:e}),c.refreshToken=a),s&&(je(typeof s=="string","internal-error",{appName:e}),c.accessToken=s),l&&(je(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nl,this.toJSON())}_performRefresh(){return Qi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(t,e){je(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Hr{constructor({uid:e,auth:n,stsTokenManager:a,...s}){this.providerId="firebase",this.proactiveRefresh=new DN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Bg(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ic(this,this.stsTokenManager.getToken(this.auth,e));return je(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return IN(this,e)}reload(){return ON(this)}_assign(e){this!==e&&(je(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Hr({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){je(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),n&&await Yf(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fr(this.auth.app))return Promise.reject(Zi(this.auth));const e=await this.getIdToken();return await ic(this,CN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const a=n.displayName??void 0,s=n.email??void 0,l=n.phoneNumber??void 0,c=n.photoURL??void 0,d=n.tenantId??void 0,p=n._redirectEventId??void 0,g=n.createdAt??void 0,_=n.lastLoginAt??void 0,{uid:w,emailVerified:T,isAnonymous:A,providerData:k,stsTokenManager:H}=n;je(w&&H,e,"internal-error");const O=nl.fromJSON(this.name,H);je(typeof w=="string",e,"internal-error"),Va(a,e.name),Va(s,e.name),je(typeof T=="boolean",e,"internal-error"),je(typeof A=="boolean",e,"internal-error"),Va(l,e.name),Va(c,e.name),Va(d,e.name),Va(p,e.name),Va(g,e.name),Va(_,e.name);const $=new Hr({uid:w,auth:e,email:s,emailVerified:T,displayName:a,isAnonymous:A,photoURL:c,phoneNumber:l,tenantId:d,stsTokenManager:O,createdAt:g,lastLoginAt:_});return k&&Array.isArray(k)&&($.providerData=k.map(ee=>({...ee}))),p&&($._redirectEventId=p),$}static async _fromIdTokenResponse(e,n,a=!1){const s=new nl;s.updateFromServerResponse(n);const l=new Hr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:a});return await Yf(l),l}static async _fromGetAccountInfoResponse(e,n,a){const s=n.users[0];je(s.localId!==void 0,"internal-error");const l=s.providerUserInfo!==void 0?kS(s.providerUserInfo):[],c=!(s.email&&s.passwordHash)&&!l?.length,d=new nl;d.updateFromIdToken(a);const p=new Hr({uid:s.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Bg(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!l?.length};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=new Map;function Xi(t){na(t instanceof Function,"Expected a class definition");let e=gE.get(t);return e?(na(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gE.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}VS.type="NONE";const yE=VS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(t,e,n){return`firebase:${t}:${e}:${n}`}class rl{constructor(e,n,a){this.persistence=e,this.auth=n,this.userKey=a;const{config:s,name:l}=this.auth;this.fullUserKey=_f(this.userKey,s.apiKey,l),this.fullPersistenceKey=_f("persistence",s.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await $f(this.auth,{idToken:e}).catch(()=>{});return n?Hr._fromGetAccountInfoResponse(this.auth,n,e):null}return Hr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,a="authUser"){if(!n.length)return new rl(Xi(yE),e,a);const s=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=s[0]||Xi(yE);const c=_f(a,e.config.apiKey,e.name);let d=null;for(const g of n)try{const _=await g._get(c);if(_){let w;if(typeof _=="string"){const T=await $f(e,{idToken:_}).catch(()=>{});if(!T)break;w=await Hr._fromGetAccountInfoResponse(e,T,_)}else w=Hr._fromJSON(e,_);g!==l&&(d=w),l=g;break}}catch{}const p=s.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new rl(l,e,a):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(n.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new rl(l,e,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(BS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(LS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(HS(e))return"Blackberry";if(qS(e))return"Webos";if(US(e))return"Safari";if((e.includes("chrome/")||zS(e))&&!e.includes("edge/"))return"Chrome";if(FS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=t.match(n);if(a?.length===2)return a[1]}return"Other"}function LS(t=jn()){return/firefox\//i.test(t)}function US(t=jn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zS(t=jn()){return/crios\//i.test(t)}function BS(t=jn()){return/iemobile/i.test(t)}function FS(t=jn()){return/android/i.test(t)}function HS(t=jn()){return/blackberry/i.test(t)}function qS(t=jn()){return/webos/i.test(t)}function Xy(t=jn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function kN(t=jn()){return Xy(t)&&!!window.navigator?.standalone}function VN(){return AC()&&document.documentMode===10}function GS(t=jn()){return Xy(t)||FS(t)||qS(t)||HS(t)||/windows phone/i.test(t)||BS(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(t,e=[]){let n;switch(t){case"Browser":n=vE(jn());break;case"Worker":n=`${vE(jn())}-${t}`;break;default:n=t}const a=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bl}/${a}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const a=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});a.onAbort=n,this.queue.push(a);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const a of this.queue)await a(e),a.onAbort&&n.push(a.onAbort)}catch(a){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UN(t,e={}){return ls(t,"GET","/v2/passwordPolicy",os(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN=6;class BN{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??zN,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const a=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;a&&(n.meetsMinPasswordLength=e.length>=a),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let a;for(let s=0;s<e.length;s++)a=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(e,n,a,s,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e,n,a,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=a,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _E(this),this.idTokenSubscription=new _E(this),this.beforeStateQueue=new LN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=OS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xi(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await rl.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await $f(this,{idToken:e}),a=await Hr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(a)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(fr(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let a=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,c=a?._redirectEventId,d=await this.tryRedirectSignIn(e);(!l||l===c)&&d?.user&&(a=d.user,s=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(a)}catch(l){a=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return je(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yf(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fr(this.app))return Promise.reject(Zi(this));const n=e?Zn(e):null;return n&&je(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&je(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fr(this.app)?Promise.reject(Zi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fr(this.app)?Promise.reject(Zi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await UN(this),n=new BN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fc("auth","Firebase",e())}onAuthStateChanged(e,n,a){return this.registerStateListener(this.authStateSubscription,e,n,a)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,a){return this.registerStateListener(this.idTokenSubscription,e,n,a)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(a.tenantId=this.tenantId),await jN(this,a)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const a=await this.getOrInitRedirectPersistenceManager(n);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xi(e)||this._popupRedirectResolver;je(n,this,"argument-error"),this.redirectPersistenceManager=await rl.create(this,[Xi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,a,s){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(je(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,a,s);return()=>{c=!0,p()}}else{const p=e.addObserver(n);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return je(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$S(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const a=await this._getAppCheckToken();return a&&(e["X-Firebase-AppCheck"]=a),e}async _getAppCheckToken(){if(fr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&gN(`Error while retrieving App Check token: ${e.error}`),e?.token}}function us(t){return Zn(t)}class _E{constructor(e){this.auth=e,this.observer=null,this.addObserver=PC(n=>this.observer=n)}get next(){return je(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function HN(t){xd=t}function YS(t){return xd.loadJS(t)}function qN(){return xd.recaptchaEnterpriseScript}function GN(){return xd.gapiScript}function $N(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class YN{constructor(){this.enterprise=new KN}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class KN{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const QN="recaptcha-enterprise",KS="NO_RECAPTCHA";class XN{constructor(e){this.type=QN,this.auth=us(e)}async verify(e="verify",n=!1){async function a(l){if(!n){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{RN(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new AN(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(p=>{d(p)})})}function s(l,c,d){const p=window.grecaptcha;mE(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(KS)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new YN().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{a(this.auth).then(d=>{if(!n&&mE(window.grecaptcha))s(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=qN();p.length!==0&&(p+=d),YS(p).then(()=>{s(d,l,c)}).catch(g=>{c(g)})}}).catch(d=>{c(d)})})}}async function bE(t,e,n,a=!1,s=!1){const l=new XN(t);let c;if(s)c=KS;else try{c=await l.verify(n)}catch{c=await l.verify(n,!0)}const d={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return a?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Fg(t,e,n,a,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await bE(t,e,n,n==="getOobCode");return a(t,l)}else return a(t,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await bE(t,e,n,n==="getOobCode");return a(t,c)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WN(t,e){const n=gy(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),l=n.getOptions();if($s(l,e??{}))return s;Mr(s,"already-initialized")}return n.initialize({options:e})}function ZN(t,e){const n=e?.persistence||[],a=(Array.isArray(n)?n:[n]).map(Xi);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(a,e?.popupRedirectResolver)}function JN(t,e,n){const a=us(t);je(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const s=!1,l=QS(e),{host:c,port:d}=eD(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},_=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!a._canInitEmulator){je(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),je($s(g,a.config.emulator)&&$s(_,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=g,a.emulatorConfig=_,a.settings.appVerificationDisabledForTesting=!0,_l(c)?($T(`${l}//${c}${p}`),YT("Auth",!0)):tD()}function QS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function eD(t){const e=QS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const a=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(a);if(s){const l=s[1];return{host:l,port:EE(a.substr(l.length+1))}}else{const[l,c]=a.split(":");return{host:l,port:EE(c)}}}function EE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qi("not implemented")}_getIdTokenResponse(e){return Qi("not implemented")}_linkToIdToken(e,n){return Qi("not implemented")}_getReauthenticationResolver(e){return Qi("not implemented")}}async function nD(t,e){return ls(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rD(t,e){return bc(t,"POST","/v1/accounts:signInWithPassword",os(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iD(t,e){return bc(t,"POST","/v1/accounts:signInWithEmailLink",os(t,e))}async function aD(t,e){return bc(t,"POST","/v1/accounts:signInWithEmailLink",os(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac extends Wy{constructor(e,n,a,s=null){super("password",a),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ac(e,n,"password")}static _fromEmailAndCode(e,n,a=null){return new ac(e,n,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fg(e,n,"signInWithPassword",rD);case"emailLink":return iD(e,{email:this._email,oobCode:this._password});default:Mr(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const a={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fg(e,a,"signUpPassword",nD);case"emailLink":return aD(e,{idToken:n,email:this._email,oobCode:this._password});default:Mr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function il(t,e){return bc(t,"POST","/v1/accounts:signInWithIdp",os(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD="http://localhost";class Xs extends Wy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:s,...l}=n;if(!a||!s)return null;const c=new Xs(a,s);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const n=this.buildRequest();return il(e,n)}_linkToIdToken(e,n){const a=this.buildRequest();return a.idToken=n,il(e,a)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,il(e,n)}buildRequest(){const e={requestUri:sD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=dc(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lD(t){const e=ku(Vu(t)).link,n=e?ku(Vu(e)).deep_link_id:null,a=ku(Vu(t)).deep_link_id;return(a?ku(Vu(a)).link:null)||a||n||e||t}class Zy{constructor(e){const n=ku(Vu(e)),a=n.apiKey??null,s=n.oobCode??null,l=oD(n.mode??null);je(a&&s&&l,"argument-error"),this.apiKey=a,this.operation=l,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=lD(e);try{return new Zy(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(){this.providerId=xl.PROVIDER_ID}static credential(e,n){return ac._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const a=Zy.parseLink(n);return je(a,"argument-error"),ac._fromEmailAndCode(e,a.code,a.tenantId)}}xl.PROVIDER_ID="password";xl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec extends Jy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba extends Ec{constructor(){super("facebook.com")}static credential(e){return Xs._fromParams({providerId:Ba.PROVIDER_ID,signInMethod:Ba.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ba.credentialFromTaggedObject(e)}static credentialFromError(e){return Ba.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ba.credential(e.oauthAccessToken)}catch{return null}}}Ba.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ba.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki extends Ec{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xs._fromParams({providerId:Ki.PROVIDER_ID,signInMethod:Ki.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ki.credentialFromTaggedObject(e)}static credentialFromError(e){return Ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:a}=e;if(!n&&!a)return null;try{return Ki.credential(n,a)}catch{return null}}}Ki.GOOGLE_SIGN_IN_METHOD="google.com";Ki.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa extends Ec{constructor(){super("github.com")}static credential(e){return Xs._fromParams({providerId:Fa.PROVIDER_ID,signInMethod:Fa.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fa.credentialFromTaggedObject(e)}static credentialFromError(e){return Fa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fa.credential(e.oauthAccessToken)}catch{return null}}}Fa.GITHUB_SIGN_IN_METHOD="github.com";Fa.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha extends Ec{constructor(){super("twitter.com")}static credential(e,n){return Xs._fromParams({providerId:Ha.PROVIDER_ID,signInMethod:Ha.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ha.credentialFromTaggedObject(e)}static credentialFromError(e){return Ha.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:a}=e;if(!n||!a)return null;try{return Ha.credential(n,a)}catch{return null}}}Ha.TWITTER_SIGN_IN_METHOD="twitter.com";Ha.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uD(t,e){return bc(t,"POST","/v1/accounts:signUp",os(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,a,s=!1){const l=await Hr._fromIdTokenResponse(e,a,s),c=TE(a);return new Ws({user:l,providerId:c,_tokenResponse:a,operationType:n})}static async _forOperation(e,n,a){await e._updateTokensIfNecessary(a,!0);const s=TE(a);return new Ws({user:e,providerId:s,_tokenResponse:a,operationType:n})}}function TE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf extends ia{constructor(e,n,a,s){super(n.code,n.message),this.operationType=a,this.user=s,Object.setPrototypeOf(this,Kf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,n,a,s){return new Kf(e,n,a,s)}}function XS(t,e,n,a){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Kf._fromErrorAndOperation(t,l,e,a):l})}async function cD(t,e,n=!1){const a=await ic(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ws._forOperation(t,"link",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hD(t,e,n=!1){const{auth:a}=t;if(fr(a.app))return Promise.reject(Zi(a));const s="reauthenticate";try{const l=await ic(t,XS(a,s,e,t),n);je(l.idToken,a,"internal-error");const c=Qy(l.idToken);je(c,a,"internal-error");const{sub:d}=c;return je(t.uid===d,a,"user-mismatch"),Ws._forOperation(t,s,l)}catch(l){throw l?.code==="auth/user-not-found"&&Mr(a,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WS(t,e,n=!1){if(fr(t.app))return Promise.reject(Zi(t));const a="signIn",s=await XS(t,a,e),l=await Ws._fromIdTokenResponse(t,a,s);return n||await t._updateCurrentUser(l.user),l}async function fD(t,e){return WS(us(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZS(t){const e=us(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function dD(t,e,n){if(fr(t.app))return Promise.reject(Zi(t));const a=us(t),c=await Fg(a,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",uD).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&ZS(t),p}),d=await Ws._fromIdTokenResponse(a,"signIn",c);return await a._updateCurrentUser(d.user),d}function mD(t,e,n){return fr(t.app)?Promise.reject(Zi(t)):fD(Zn(t),xl.credential(e,n)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&ZS(t),a})}function pD(t,e,n,a){return Zn(t).onIdTokenChanged(e,n,a)}function gD(t,e,n){return Zn(t).beforeAuthStateChanged(e,n)}function yD(t,e,n,a){return Zn(t).onAuthStateChanged(e,n,a)}function vD(t){return Zn(t).signOut()}const Qf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qf,"1"),this.storage.removeItem(Qf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D=1e3,bD=10;class ex extends JS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=GS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const a=this.storage.getItem(n),s=this.localCache[n];a!==s&&e(n,s,a)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const a=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const c=this.storage.getItem(a);!n&&this.localCache[a]===c||this.notifyListeners(a,c)},l=this.storage.getItem(a);VN()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,bD):s()}notifyListeners(e,n){this.localCache[e]=n;const a=this.listeners[e];if(a)for(const s of Array.from(a))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:a}),!0)})},_D)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ex.type="LOCAL";const ED=ex;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx extends JS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tx.type="SESSION";const nx=tx;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const a=new Ad(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:a,eventType:s,data:l}=n.data,c=this.handlersMap[s];if(!c?.size)return;n.ports[0].postMessage({status:"ack",eventId:a,eventType:s});const d=Array.from(c).map(async g=>g(n.origin,l)),p=await TD(d);n.ports[0].postMessage({status:"done",eventId:a,eventType:s,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ad.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(t="",e=10){let n="";for(let a=0;a<e;a++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,a=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=e0("",20);s.port1.start();const _=setTimeout(()=>{p(new Error("unsupported_event"))},a);c={messageChannel:s,onMessage(w){const T=w;if(T.data.eventId===g)switch(T.data.status){case"ack":clearTimeout(_),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(T.data.response);break;default:clearTimeout(_),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),s.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[s.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(){return window}function SD(t){gi().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rx(){return typeof gi().WorkerGlobalScope<"u"&&typeof gi().importScripts=="function"}async function xD(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AD(){return navigator?.serviceWorker?.controller||null}function RD(){return rx()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix="firebaseLocalStorageDb",CD=1,Xf="firebaseLocalStorage",ax="fbase_key";class Tc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Rd(t,e){return t.transaction([Xf],e?"readwrite":"readonly").objectStore(Xf)}function ID(){const t=indexedDB.deleteDatabase(ix);return new Tc(t).toPromise()}function Hg(){const t=indexedDB.open(ix,CD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const a=t.result;try{a.createObjectStore(Xf,{keyPath:ax})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const a=t.result;a.objectStoreNames.contains(Xf)?e(a):(a.close(),await ID(),e(await Hg()))})})}async function wE(t,e,n){const a=Rd(t,!0).put({[ax]:e,value:n});return new Tc(a).toPromise()}async function ND(t,e){const n=Rd(t,!1).get(e),a=await new Tc(n).toPromise();return a===void 0?null:a.value}function SE(t,e){const n=Rd(t,!0).delete(e);return new Tc(n).toPromise()}const DD=800,OD=3;class sx{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(n++>OD)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rx()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ad._getInstance(RD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await xD(),!this.activeServiceWorker)return;this.sender=new wD(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||AD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hg();return await wE(e,Qf,"1"),await SE(e,Qf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(a=>wE(a,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(a=>ND(a,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>SE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const l=Rd(s,!1).getAll();return new Tc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],a=new Set;if(e.length!==0)for(const{fbase_key:s,value:l}of e)a.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(l)&&(this.notifyListeners(s,l),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!a.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const a=this.listeners[e];if(a)for(const s of Array.from(a))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sx.type="LOCAL";const MD=sx;new _c(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ox(t,e){return e?Xi(e):(je(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0 extends Wy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return il(e,this._buildIdpRequest())}_linkToIdToken(e,n){return il(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return il(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function PD(t){return WS(t.auth,new t0(t),t.bypassAuthState)}function jD(t){const{auth:e,user:n}=t;return je(n,e,"internal-error"),hD(n,new t0(t),t.bypassAuthState)}async function kD(t){const{auth:e,user:n}=t;return je(n,e,"internal-error"),cD(n,new t0(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e,n,a,s,l=!1){this.auth=e,this.resolver=a,this.user=s,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:a,postBody:s,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:n,sessionId:a,tenantId:l||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PD;case"linkViaPopup":case"linkViaRedirect":return kD;case"reauthViaPopup":case"reauthViaRedirect":return jD;default:Mr(this.auth,"internal-error")}}resolve(e){na(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){na(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VD=new _c(2e3,1e4);async function LD(t,e,n){if(fr(t.app))return Promise.reject(qr(t,"operation-not-supported-in-this-environment"));const a=us(t);yN(t,e,Jy);const s=ox(a,n);return new Hs(a,"signInViaPopup",e,s).executeNotNull()}class Hs extends lx{constructor(e,n,a,s,l){super(e,n,s,l),this.provider=a,this.authWindow=null,this.pollId=null,Hs.currentPopupAction&&Hs.currentPopupAction.cancel(),Hs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return je(e,this.auth,"internal-error"),e}async onExecution(){na(this.filter.length===1,"Popup operations only handle one event");const e=e0();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(qr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,VD.get())};e()}}Hs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD="pendingRedirect",bf=new Map;class zD extends lx{constructor(e,n,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,a),this.eventId=null}async execute(){let e=bf.get(this.auth._key());if(!e){try{const a=await BD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(n){e=()=>Promise.reject(n)}bf.set(this.auth._key(),e)}return this.bypassAuthState||bf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BD(t,e){const n=qD(e),a=HD(t);if(!await a._isAvailable())return!1;const s=await a._get(n)==="true";return await a._remove(n),s}function FD(t,e){bf.set(t._key(),e)}function HD(t){return Xi(t._redirectPersistence)}function qD(t){return _f(UD,t.config.apiKey,t.name)}async function GD(t,e,n=!1){if(fr(t.app))return Promise.reject(Zi(t));const a=us(t),s=ox(a,e),c=await new zD(a,s,n).execute();return c&&!n&&(delete c.user._redirectEventId,await a._persistUserIfCurrent(c.user),await a._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D=10*60*1e3;class YD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(n=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!ux(e)){const a=e.error.code?.split("auth/")[1]||"internal-error";n.onError(qr(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const a=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$D&&this.cachedEventUids.clear(),this.cachedEventUids.has(xE(e))}saveEventToCache(e){this.cachedEventUids.add(xE(e)),this.lastProcessedEventTime=Date.now()}}function xE(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ux({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function KD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ux(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QD(t,e={}){return ls(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,WD=/^https?/;async function ZD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await QD(t);for(const n of e)try{if(JD(n))return}catch{}Mr(t,"unauthorized-domain")}function JD(t){const e=zg(),{protocol:n,hostname:a}=new URL(e);if(t.startsWith("chrome-extension://")){const c=new URL(t);return c.hostname===""&&a===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===a}if(!WD.test(n))return!1;if(XD.test(t))return a===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO=new _c(3e4,6e4);function AE(){const t=gi().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tO(t){return new Promise((e,n)=>{function a(){AE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{AE(),n(qr(t,"network-request-failed"))},timeout:eO.get()})}if(gi().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(gi().gapi?.load)a();else{const s=$N("iframefcb");return gi()[s]=()=>{gapi.load?a():n(qr(t,"network-request-failed"))},YS(`${GN()}?onload=${s}`).catch(l=>n(l))}}).catch(e=>{throw Ef=null,e})}let Ef=null;function nO(t){return Ef=Ef||tO(t),Ef}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO=new _c(5e3,15e3),iO="__/auth/iframe",aO="emulator/auth/iframe",sO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lO(t){const e=t.config;je(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ky(e,aO):`https://${t.config.authDomain}/${iO}`,a={apiKey:e.apiKey,appName:t.name,v:bl},s=oO.get(t.config.apiHost);s&&(a.eid=s);const l=t._getFrameworks();return l.length&&(a.fw=l.join(",")),`${n}?${dc(a).slice(1)}`}async function uO(t){const e=await nO(t),n=gi().gapi;return je(n,t,"internal-error"),e.open({where:document.body,url:lO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sO,dontclear:!0},a=>new Promise(async(s,l)=>{await a.restyle({setHideOnLeave:!1});const c=qr(t,"network-request-failed"),d=gi().setTimeout(()=>{l(c)},rO.get());function p(){gi().clearTimeout(d),s(a)}a.ping(p).then(p,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hO=500,fO=600,dO="_blank",mO="http://localhost";class RE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pO(t,e,n,a=hO,s=fO){const l=Math.max((window.screen.availHeight-s)/2,0).toString(),c=Math.max((window.screen.availWidth-a)/2,0).toString();let d="";const p={...cO,width:a.toString(),height:s.toString(),top:l,left:c},g=jn().toLowerCase();n&&(d=zS(g)?dO:n),LS(g)&&(e=e||mO,p.scrollbars="yes");const _=Object.entries(p).reduce((T,[A,k])=>`${T}${A}=${k},`,"");if(kN(g)&&d!=="_self")return gO(e||"",d),new RE(null);const w=window.open(e||"",d,_);je(w,t,"popup-blocked");try{w.focus()}catch{}return new RE(w)}function gO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yO="__/auth/handler",vO="emulator/auth/handler",_O=encodeURIComponent("fac");async function CE(t,e,n,a,s,l){je(t.config.authDomain,t,"auth-domain-config-required"),je(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:a,v:bl,eventId:s};if(e instanceof Jy){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",MC(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,w]of Object.entries({}))c[_]=w}if(e instanceof Ec){const _=e.getScopes().filter(w=>w!=="");_.length>0&&(c.scopes=_.join(","))}t.tenantId&&(c.tid=t.tenantId);const d=c;for(const _ of Object.keys(d))d[_]===void 0&&delete d[_];const p=await t._getAppCheckToken(),g=p?`#${_O}=${encodeURIComponent(p)}`:"";return`${bO(t)}?${dc(d).slice(1)}${g}`}function bO({config:t}){return t.emulator?Ky(t,vO):`https://${t.authDomain}/${yO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg="webStorageSupport";class EO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nx,this._completeRedirectFn=GD,this._overrideRedirectResult=FD}async _openPopup(e,n,a,s){na(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await CE(e,n,a,zg(),s);return pO(e,l,e0())}async _openRedirect(e,n,a,s){await this._originValidation(e);const l=await CE(e,n,a,zg(),s);return SD(l),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:l}=this.eventManagers[n];return s?Promise.resolve(s):(na(l,"If manager is not set, promise should be"),l)}const a=this.initAndGetManager(e);return this.eventManagers[n]={promise:a},a.catch(()=>{delete this.eventManagers[n]}),a}async initAndGetManager(e){const n=await uO(e),a=new YD(e);return n.register("authEvent",s=>(je(s?.authEvent,e,"invalid-auth-event"),{status:a.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=n,a}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(eg,{type:eg},s=>{const l=s?.[0]?.[eg];l!==void 0&&n(!!l),Mr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ZD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return GS()||US()||Xy()}}const TO=EO;var IE="@firebase/auth",NE="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(a=>{e(a?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){je(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xO(t){ol(new Ys("auth",(e,{options:n})=>{const a=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=a.options;je(c&&!c.includes(":"),"invalid-api-key",{appName:a.name});const p={apiKey:c,authDomain:d,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$S(t)},g=new FN(a,s,l,p);return ZN(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,a)=>{e.getProvider("auth-internal").initialize()})),ol(new Ys("auth-internal",e=>{const n=us(e.getProvider("auth").getImmediate());return(a=>new wO(a))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ya(IE,NE,SO(t)),Ya(IE,NE,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AO=5*60,RO=GT("authIdTokenMaxAge")||AO;let DE=null;const CO=t=>async e=>{const n=e&&await e.getIdTokenResult(),a=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(a&&a>RO)return;const s=n?.token;DE!==s&&(DE=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function IO(t=WT()){const e=gy(t,"auth");if(e.isInitialized())return e.getImmediate();const n=WN(t,{popupRedirectResolver:TO,persistence:[MD,ED,nx]}),a=GT("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(a,location.origin);if(location.origin===l.origin){const c=CO(l.toString());gD(n,c,()=>c(n.currentUser)),pD(n,d=>c(d))}}const s=HT("auth");return s&&JN(n,`http://${s}`),n}function NO(){return document.getElementsByTagName("head")?.[0]??document}HN({loadJS(t){return new Promise((e,n)=>{const a=document.createElement("script");a.setAttribute("src",t),a.onload=e,a.onerror=s=>{const l=qr("internal-error");l.customData=s,n(l)},a.type="text/javascript",a.charset="UTF-8",NO().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xO("Browser");const cx=D.createContext(null),wc=()=>D.useContext(cx),DO=bS(Gy),Sc=IO(Gy),OO=new Ki,MO=(t,e)=>dD(Sc,t,e),PO=(t,e)=>mD(Sc,t,e),jO=()=>LD(Sc,OO),kO=()=>vD(Sc),VO=()=>cN(_S(DO,"properties")),LO=t=>{const[e,n]=D.useState("");D.useEffect(()=>{yD(Sc,s=>{s&&n(s)})},[]);const a=!!e;return y.jsx(y.Fragment,{children:y.jsx(cx.Provider,{value:{signUpEp:MO,signInEp:PO,signGoogle:jO,removeSign:kO,getLists:VO,isLoggedIn:a},children:t.children})})},UO=()=>{const[t,e]=D.useState(!1),[n,a]=D.useState(!1),[s,l]=D.useState(window.innerWidth<=768),c=D.useRef(),d=D.useRef(),p=()=>{e(k=>!k)},g=()=>{e(!1)};D.useEffect(()=>{const k=()=>{const X=window.innerWidth<=768;l(X),X||g()},H=X=>{c.current&&!c.current.contains(X.target)&&d.current&&!d.current.contains(X.target)&&g()},O=()=>{a(window.scrollY>10),g()};let $;const ee=()=>{clearTimeout($),$=setTimeout(k,100)};return window.addEventListener("resize",ee),document.addEventListener("mousedown",H),window.addEventListener("scroll",O),()=>{window.removeEventListener("resize",ee),document.removeEventListener("mousedown",H),window.removeEventListener("scroll",O),clearTimeout($)}},[]);const _=({isActive:k})=>({textDecoration:"none",color:k?"#f72585":"#3a0ca3",fontWeight:k?"bold":"600",padding:"0.5rem 1rem",borderRadius:"50px",background:k?"rgba(247, 37, 133, 0.1)":"transparent",transition:"all 0.3s ease",":hover":{color:"#f72585",background:"rgba(247, 37, 133, 0.1)"}}),w=wc(),T=cc(),A=()=>{w.removeSign(),T("/Login")};return y.jsxs("header",{style:{...Gn.header,boxShadow:n?"0 4px 12px rgba(0, 0, 0, 0.1)":"0 2px 15px rgba(0, 0, 0, 0.1)",padding:n?"0.75rem 2rem":"1rem 2rem"},role:"banner",children:[y.jsx("div",{style:Gn.logo,children:y.jsxs(qt,{to:"/",style:Gn.logoLink,onClick:g,"aria-label":"Home",children:[y.jsx("span",{style:Gn.logoFirst,children:"Arrow"}),y.jsx("span",{style:Gn.logoSecond,children:"Sites"})]})}),s&&y.jsxs("button",{ref:d,onClick:p,style:Gn.hamburgerButton,"aria-label":"Toggle menu","aria-expanded":t,"aria-controls":"mobile-menu",children:[y.jsx("span",{style:{...Gn.hamburgerLine,transform:t?"rotate(45deg) translate(5px, 5px)":"none",top:t?"9px":"0"}}),y.jsx("span",{style:{...Gn.hamburgerLine,opacity:t?"0":"1",top:"9px"}}),y.jsx("span",{style:{...Gn.hamburgerLine,transform:t?"rotate(-45deg) translate(5px, -5px)":"none",top:t?"9px":"18px"}})]}),y.jsxs("nav",{style:{...Gn.nav,display:s?"none":"flex"},"aria-label":"Main navigation",children:[y.jsx(qt,{to:"/",style:_,children:"Home"}),y.jsx(qt,{to:"/about",style:_,children:"About"}),y.jsx(qt,{to:"/contact",style:_,children:"Contact"}),y.jsx(qt,{to:"/Cards",style:_,children:"Properties"}),y.jsx(qt,{to:"/AddPropr",children:y.jsx("button",{style:Gn.button,children:"Add property"})}),y.jsx(qt,{to:"/Login",children:y.jsx("button",{style:Gn.button,children:"Login"})}),y.jsx("button",{style:Gn.button,onClick:A,children:"LogOut"})]}),s&&t&&y.jsxs("div",{ref:c,style:{...Gn.mobileMenu,opacity:t?1:0,transform:t?"translateY(0)":"translateY(-20px)"},id:"mobile-menu","aria-modal":"true",role:"dialog","aria-label":"Mobile menu",children:[y.jsx(qt,{to:"/",style:_,onClick:g,children:"Home"}),y.jsx(qt,{to:"/about",style:_,onClick:g,children:"About"}),y.jsx(qt,{to:"/contact",style:_,onClick:g,children:"Contact"}),y.jsx(qt,{to:"/Cards",style:_,onClick:g,children:"Properties"}),y.jsx(qt,{to:"/AddPropr",onClick:g,children:y.jsx("button",{style:Gn.button,children:"Add property"})})]})]})},Gn={header:{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"rgba(255, 255, 255, 0.98)",position:"sticky",top:0,zIndex:100,flexWrap:"wrap",transition:"all 0.3s ease"},logo:{fontSize:"1.8rem",fontWeight:"bold",display:"flex",alignItems:"center",gap:"0.5rem",transition:"transform 0.3s ease"},logoLink:{textDecoration:"none",display:"flex",alignItems:"center",gap:"0.25rem",position:"relative",":focus":{outline:"2px dashed #f72585",outlineOffset:"4px",borderRadius:"4px"}},logoFirst:{color:"#4361ee",fontWeight:"700",textShadow:"1px 1px 2px rgba(0,0,0,0.1)"},logoSecond:{color:"#f72585",fontWeight:"700",textShadow:"1px 1px 2px rgba(0,0,0,0.1)"},nav:{display:"flex",gap:"1.5rem",alignItems:"center"},button:{padding:"0.75rem 1.5rem",backgroundColor:"#f72585",color:"white",border:"none",borderRadius:"50px",cursor:"pointer",fontWeight:"600",transition:"all 0.3s ease",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)",":hover":{backgroundColor:"#e51775",transform:"translateY(-2px)",boxShadow:"0 6px 8px rgba(0, 0, 0, 0.15)"},":active":{transform:"translateY(0)"},":focus":{outline:"2px dashed white",outlineOffset:"2px"}},hamburgerButton:{backgroundColor:"transparent",border:"none",cursor:"pointer",padding:"10px",position:"relative",width:"30px",height:"24px",":focus":{outline:"2px dashed #f72585",outlineOffset:"2px"}},hamburgerLine:{backgroundColor:"#4361ee",borderRadius:"2px",display:"block",height:"3px",left:"0",position:"absolute",transformOrigin:"center",transition:"all 0.3s ease",width:"100%"},mobileMenu:{display:"flex",flexDirection:"column",gap:"1.5rem",width:"100%",padding:"2rem",backgroundColor:"white",boxShadow:"0 4px 6px rgba(0,0,0,0.1)",alignItems:"center",position:"absolute",top:"100%",left:0,zIndex:99,transition:"all 0.3s ease",opacity:0,transform:"translateY(-20px)"}},zO=()=>{const{pathname:t}=ss();return D.useEffect(()=>{window.scrollTo(0,0)},[t]),null},BO=()=>y.jsxs(y.Fragment,{children:[y.jsx(zO,{}),y.jsx(UO,{}),y.jsx(S4,{}),y.jsx(oC,{})]});var hx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},OE=Mn.createContext&&Mn.createContext(hx),FO=["attr","size","title"];function HO(t,e){if(t==null)return{};var n=qO(t,e),a,s;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(s=0;s<l.length;s++)a=l[s],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function qO(t,e){if(t==null)return{};var n={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function Wf(){return Wf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Wf.apply(this,arguments)}function ME(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,a)}return n}function Zf(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ME(Object(n),!0).forEach(function(a){GO(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ME(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function GO(t,e,n){return e=$O(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function $O(t){var e=YO(t,"string");return typeof e=="symbol"?e:e+""}function YO(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function fx(t){return t&&t.map((e,n)=>Mn.createElement(e.tag,Zf({key:n},e.attr),fx(e.child)))}function tn(t){return e=>Mn.createElement(KO,Wf({attr:Zf({},t.attr)},e),fx(t.child))}function KO(t){var e=n=>{var{attr:a,size:s,title:l}=t,c=HO(t,FO),d=s||n.size||"1em",p;return n.className&&(p=n.className),t.className&&(p=(p?p+" ":"")+t.className),Mn.createElement("svg",Wf({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,c,{className:p,style:Zf(Zf({color:t.color||n.color},n.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&Mn.createElement("title",null,l),t.children)};return OE!==void 0?Mn.createElement(OE.Consumer,null,n=>e(n)):e(hx)}function QO(t){return tn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(t)}function PE(t){return tn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(t)}function dx(t){return tn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z"},child:[]}]})(t)}function mx(t){return tn({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"},child:[]}]})(t)}function qg(t){return tn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(t)}function XO(t){return tn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"},child:[]}]})(t)}function WO(t){return tn({attr:{viewBox:"0 0 288 512"},child:[{tag:"path",attr:{d:"M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"},child:[]}]})(t)}function px(t){return tn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(t)}function ZO(t){return tn({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(t)}function xc(t){return tn({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(t)}function JO(t){return tn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(t)}function gx(t){return tn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M160 288h-56c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h56v-64h-56c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h56V96h-56c-4.42 0-8-3.58-8-8V72c0-4.42 3.58-8 8-8h56V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v448c0 2.77.91 5.24 1.57 7.8L160 329.38V288zm320 64h-32v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-64v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-64v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-41.37L24.2 510.43c2.56.66 5.04 1.57 7.8 1.57h448c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z"},child:[]}]})(t)}function n0(t){return tn({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"},child:[]}]})(t)}function e8(t){return tn({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M0 224v272c0 8.84 7.16 16 16 16h80V192H32c-17.67 0-32 14.33-32 32zm360-48h-24v-40c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v64c0 4.42 3.58 8 8 8h48c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm137.75-63.96l-160-106.67a32.02 32.02 0 0 0-35.5 0l-160 106.67A32.002 32.002 0 0 0 128 138.66V512h128V368c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v144h128V138.67c0-10.7-5.35-20.7-14.25-26.63zM320 256c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zm288-64h-64v320h80c8.84 0 16-7.16 16-16V224c0-17.67-14.33-32-32-32z"},child:[]}]})(t)}function t8(t){return tn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"},child:[]}]})(t)}function n8(t){return tn({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(t)}function r8(t){return tn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 96v256c0 51.815-61.624 96-130.022 96l62.98 49.721C386.905 502.417 383.562 512 376 512H72c-7.578 0-10.892-9.594-4.957-14.279L130.022 448C61.82 448 0 403.954 0 352V96C0 42.981 64 0 128 0h192c65 0 128 42.981 128 96zM200 232V120c0-13.255-10.745-24-24-24H72c-13.255 0-24 10.745-24 24v112c0 13.255 10.745 24 24 24h104c13.255 0 24-10.745 24-24zm200 0V120c0-13.255-10.745-24-24-24H272c-13.255 0-24 10.745-24 24v112c0 13.255 10.745 24 24 24h104c13.255 0 24-10.745 24-24zm-48 56c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm-256 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"},child:[]}]})(t)}function i8(t){return tn({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M378.31 378.49L298.42 288h30.63c9.01 0 16.98-5 20.78-13.06 3.8-8.04 2.55-17.26-3.28-24.05L268.42 160h28.89c9.1 0 17.3-5.35 20.86-13.61 3.52-8.13 1.86-17.59-4.24-24.08L203.66 4.83c-6.03-6.45-17.28-6.45-23.32 0L70.06 122.31c-6.1 6.49-7.75 15.95-4.24 24.08C69.38 154.65 77.59 160 86.69 160h28.89l-78.14 90.91c-5.81 6.78-7.06 15.99-3.27 24.04C37.97 283 45.93 288 54.95 288h30.63L5.69 378.49c-6 6.79-7.36 16.09-3.56 24.26 3.75 8.05 12 13.25 21.01 13.25H160v24.45l-30.29 48.4c-5.32 10.64 2.42 23.16 14.31 23.16h95.96c11.89 0 19.63-12.52 14.31-23.16L224 440.45V416h136.86c9.01 0 17.26-5.2 21.01-13.25 3.8-8.17 2.44-17.47-3.56-24.26z"},child:[]}]})(t)}function a8(t){return tn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(t)}function s8(t){return tn({attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"},child:[]}]})(t)}const jE=[{id:1,title:"First-Time Home Buyer's Guide: Everything You Need to Know",excerpt:"A comprehensive guide to help first-time buyers navigate the complex process of purchasing a home.",date:"2023-06-10",author:"Sarah Johnson",category:"Buying",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"},{id:2,title:"5 Home Staging Tips to Sell Your Property Faster",excerpt:"Professional staging techniques that can help your home stand out in a competitive market.",date:"2023-05-28",author:"Michael Chen",category:"Selling",image:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"},{id:3,title:"Neighborhood Spotlight: Downtown Living at Its Best",excerpt:"Explore the amenities, schools, and lifestyle of our city's vibrant downtown district.",date:"2023-05-15",author:"Emily Rodriguez",category:"Neighborhoods",image:"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"}],o8=({title:t,limit:e})=>{const n=s=>{const l={year:"numeric",month:"short",day:"numeric"};return new Date(s).toLocaleDateString(void 0,l)},a=e?jE.slice(0,e):jE;return y.jsx("section",{className:"blog-highlights",children:y.jsxs("div",{className:"container",children:[y.jsx("h2",{className:"section-title",children:t}),y.jsx("div",{className:"blog-grid",children:a.map(s=>y.jsxs("div",{className:"blog-card",children:[y.jsxs("div",{className:"blog-image",children:[y.jsx("img",{src:s.image,alt:s.title}),y.jsx("div",{className:"category-tag",children:s.category})]}),y.jsxs("div",{className:"blog-content",children:[y.jsx("h3",{children:s.title}),y.jsx("p",{className:"excerpt",children:s.excerpt}),y.jsxs("div",{className:"blog-meta",children:[y.jsxs("span",{className:"meta-item",children:[y.jsx(XO,{className:"meta-icon"}),n(s.date)]}),y.jsxs("span",{className:"meta-item",children:[y.jsx(a8,{className:"meta-icon"}),s.author]})]}),y.jsx("button",{className:"read-more-btn",children:"Read More"})]})]},s.id))})]})})},l8=()=>y.jsxs("section",{className:"cta-section",children:[y.jsx("h2",{children:"Ready to Get Started?"}),y.jsx("p",{children:"Join thousands of satisfied customers today"}),y.jsxs("div",{className:"cta-buttons",children:[y.jsx("button",{className:"primary-cta",children:"Sign Up Now"}),y.jsx("button",{className:"secondary-cta",children:"Learn More"})]})]}),u8=()=>{const t=[{title:"Feature One",description:"Description of the first amazing feature",icon:"🚀"},{title:"Feature Two",description:"Description of the second great feature",icon:"✨"},{title:"Feature Three",description:"Description of the third excellent feature",icon:"🔒"}];return y.jsxs("section",{className:"features",children:[y.jsx("h2",{children:"Our Key Features"}),y.jsx("div",{className:"features-grid",children:t.map((e,n)=>y.jsxs("div",{className:"feature-card",children:[y.jsx("div",{className:"feature-icon",children:e.icon}),y.jsx("h3",{children:e.title}),y.jsx("p",{children:e.description})]},n))})]})},c8=()=>y.jsxs("section",{className:"hero",children:[y.jsxs("div",{className:"hero-content",children:[y.jsx("h1",{children:"Find Your Dream Home Today"}),y.jsx("p",{children:"Discover properties in the most desirable neighborhoods"}),y.jsxs("div",{className:"hero-search",children:[y.jsx("input",{type:"text",placeholder:"Search by location, ZIP, or address"}),y.jsx("button",{className:"search-btn",children:"Search"})]}),y.jsxs("div",{className:"hero-stats",children:[y.jsxs("div",{className:"stat-item",children:[y.jsx("span",{className:"stat-number",children:"10,000+"}),y.jsx("span",{className:"stat-label",children:"Properties"})]}),y.jsxs("div",{className:"stat-item",children:[y.jsx("span",{className:"stat-number",children:"500+"}),y.jsx("span",{className:"stat-label",children:"Locations"})]}),y.jsxs("div",{className:"stat-item",children:[y.jsx("span",{className:"stat-number",children:"1M+"}),y.jsx("span",{className:"stat-label",children:"Happy Clients"})]})]})]}),y.jsx("div",{className:"hero-image"})]}),h8=()=>{const[t,e]=D.useState(5e5),[n,a]=D.useState(1e5),[s,l]=D.useState(30),[c,d]=D.useState(3.5),g=(()=>{const T=t-n,A=c/100/12,k=s*12;return A===0?T/k:T*(A*Math.pow(1+A,k))/(Math.pow(1+A,k)-1)})(),_=g*s*12-(t-n),w=T=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}).format(T);return y.jsx("section",{className:"mortgage-calculator",children:y.jsxs("div",{className:"container",children:[y.jsx("h2",{className:"section-title",children:"Mortgage Calculator"}),y.jsxs("div",{className:"calculator-container",children:[y.jsxs("div",{className:"calculator-inputs",children:[y.jsxs("div",{className:"input-group",children:[y.jsx("label",{htmlFor:"homePrice",children:"Home Price"}),y.jsxs("div",{className:"input-with-unit",children:[y.jsx("span",{className:"unit",children:"$"}),y.jsx("input",{type:"range",id:"homePrice",min:"100000",max:"2000000",step:"10000",value:t,onChange:T=>e(parseInt(T.target.value))}),y.jsx("input",{type:"number",value:t,onChange:T=>e(parseInt(T.target.value)||0)})]})]}),y.jsxs("div",{className:"input-group",children:[y.jsx("label",{htmlFor:"downPayment",children:"Down Payment"}),y.jsxs("div",{className:"input-with-unit",children:[y.jsx("span",{className:"unit",children:"$"}),y.jsx("input",{type:"range",id:"downPayment",min:"0",max:t,step:"5000",value:n,onChange:T=>a(parseInt(T.target.value))}),y.jsx("input",{type:"number",value:n,onChange:T=>a(parseInt(T.target.value)||0)})]}),y.jsxs("div",{className:"down-payment-percent",children:[Math.round(n/t*100),"% of home price"]})]}),y.jsxs("div",{className:"input-group",children:[y.jsx("label",{htmlFor:"loanTerm",children:"Loan Term (years)"}),y.jsxs("select",{id:"loanTerm",value:s,onChange:T=>l(parseInt(T.target.value)),children:[y.jsx("option",{value:"10",children:"10 years"}),y.jsx("option",{value:"15",children:"15 years"}),y.jsx("option",{value:"20",children:"20 years"}),y.jsx("option",{value:"30",children:"30 years"})]})]}),y.jsxs("div",{className:"input-group",children:[y.jsx("label",{htmlFor:"interestRate",children:"Interest Rate"}),y.jsxs("div",{className:"input-with-unit",children:[y.jsx("input",{type:"range",id:"interestRate",min:"1",max:"10",step:"0.1",value:c,onChange:T=>d(parseFloat(T.target.value))}),y.jsx("input",{type:"number",value:c,onChange:T=>d(parseFloat(T.target.value)||0)}),y.jsx("span",{className:"unit",children:"%"})]})]})]}),y.jsxs("div",{className:"calculator-results",children:[y.jsxs("div",{className:"result-item",children:[y.jsx("span",{className:"result-label",children:"Monthly Payment"}),y.jsx("span",{className:"result-value",children:w(g)})]}),y.jsxs("div",{className:"result-item",children:[y.jsx("span",{className:"result-label",children:"Loan Amount"}),y.jsx("span",{className:"result-value",children:w(t-n)})]}),y.jsxs("div",{className:"result-item",children:[y.jsx("span",{className:"result-label",children:"Total Interest"}),y.jsx("span",{className:"result-value",children:w(_)})]}),y.jsxs("div",{className:"result-item total",children:[y.jsx("span",{className:"result-label",children:"Total Cost of Loan"}),y.jsx("span",{className:"result-value",children:w(g*s*12)})]}),y.jsx("button",{className:"get-preapproved-btn",children:"Get Pre-Approved"})]})]})]})})},f8=[{id:1,name:"Downtown District",image:"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",stats:{schools:"8.5/10",restaurants:120,parks:15,transit:"Excellent"},avgPrice:"$650,000",featured:!0},{id:2,name:"Riverside",image:"https://images.unsplash.com/photo-1437572848259-df63caa1a552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",stats:{schools:"9.2/10",restaurants:85,parks:22,transit:"Good"},avgPrice:"$720,000",featured:!0},{id:3,name:"Green Valley",image:"https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",stats:{schools:"9.8/10",restaurants:45,parks:30,transit:"Fair"},avgPrice:"$850,000",featured:!0}],d8=()=>y.jsx("section",{className:"neighborhood-highlights",children:y.jsxs("div",{className:"container",children:[y.jsx("h2",{className:"section-title",children:"Featured Neighborhoods"}),y.jsx("div",{className:"neighborhoods-grid",children:f8.map(t=>y.jsxs("div",{className:"neighborhood-card",children:[y.jsxs("div",{className:"neighborhood-image",children:[y.jsx("img",{src:t.image,alt:t.name}),y.jsx("div",{className:"neighborhood-name",children:t.name})]}),y.jsxs("div",{className:"neighborhood-stats",children:[y.jsxs("div",{className:"stat-item",children:[y.jsx(e8,{className:"stat-icon"}),y.jsxs("span",{children:["Schools: ",t.stats.schools]})]}),y.jsxs("div",{className:"stat-item",children:[y.jsx(s8,{className:"stat-icon"}),y.jsxs("span",{children:["Restaurants: ",t.stats.restaurants]})]}),y.jsxs("div",{className:"stat-item",children:[y.jsx(i8,{className:"stat-icon"}),y.jsxs("span",{children:["Parks: ",t.stats.parks]})]}),y.jsxs("div",{className:"stat-item",children:[y.jsx(r8,{className:"stat-icon"}),y.jsxs("span",{children:["Transit: ",t.stats.transit]})]})]}),y.jsxs("div",{className:"neighborhood-footer",children:[y.jsxs("span",{className:"avg-price",children:["Avg Price: ",t.avgPrice]}),y.jsx("button",{className:"explore-btn",children:"Explore Area"})]})]},t.id))})]})}),kE=[{id:1,title:"Modern Luxury Villa",price:75e4,beds:4,baths:3,sqft:2500,address:"123 Palm Street, Miami",image:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",featured:!0},{id:2,title:"Downtown Apartment",price:45e4,beds:2,baths:2,sqft:1200,address:"456 City Ave, New York",image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",featured:!0},{id:3,title:"Suburban Family Home",price:32e4,beds:3,baths:2,sqft:1800,address:"789 Oak Lane, Austin",image:"https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",featured:!0},{id:4,title:"Waterfront Cottage",price:55e4,beds:3,baths:2,sqft:1600,address:"101 Lakeview Dr, Seattle",image:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",featured:!0},{id:5,title:"Urban Loft",price:38e4,beds:1,baths:1,sqft:900,address:"202 Brick Lane, Chicago",image:"https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",featured:!0},{id:6,title:"Country Estate",price:12e5,beds:5,baths:4,sqft:4e3,address:"303 Green Acres, Nashville",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",featured:!0}],m8=({title:t,limit:e,featured:n})=>{const a=n?kE.filter(s=>s.featured).slice(0,e):kE.slice(0,e);return y.jsx("section",{className:"property-listings",children:y.jsxs("div",{className:"container",children:[y.jsx("h2",{className:"section-title",children:t}),y.jsx("div",{className:"properties-grid",children:a.map(s=>y.jsxs("div",{className:"property-card",children:[y.jsxs("div",{className:"property-image",children:[y.jsx("img",{src:s.image,alt:s.title}),y.jsx("button",{className:"favorite-btn",children:y.jsx(px,{})}),y.jsxs("div",{className:"price-tag",children:["$",s.price.toLocaleString()]})]}),y.jsxs("div",{className:"property-details",children:[y.jsx("h3",{children:s.title}),y.jsxs("div",{className:"property-address",children:[y.jsx(xc,{})," ",s.address]}),y.jsxs("div",{className:"property-features",children:[y.jsxs("span",{children:[y.jsx(mx,{})," ",s.beds]}),y.jsxs("span",{children:[y.jsx(dx,{})," ",s.baths]}),y.jsxs("span",{children:[y.jsx(gx,{})," ",s.sqft," sqft"]})]}),y.jsx("button",{className:"view-details-btn",children:"View Details"})]})]},s.id))}),y.jsx("button",{className:"view-all-btn",children:"View All Properties"})]})})},p8=[{id:1,address:"123 Maple Street",type:"Single Family",price:575e3,date:"2023-06-15",status:"Sold",daysOnMarket:12},{id:2,address:"456 Oak Avenue",type:"Condo",price:425e3,date:"2023-06-10",status:"Sold",daysOnMarket:8},{id:3,address:"789 Pine Road",type:"Townhouse",price:385e3,date:"2023-06-05",status:"Sold",daysOnMarket:21},{id:4,address:"101 Elm Boulevard",type:"Luxury Villa",price:12e5,date:"2023-05-28",status:"Sold",daysOnMarket:35}],g8=()=>{const t=n=>{const a={year:"numeric",month:"short",day:"numeric"};return new Date(n).toLocaleDateString(void 0,a)},e=n=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}).format(n);return y.jsx("section",{className:"recent-transactions",children:y.jsxs("div",{className:"container",children:[y.jsx("h2",{className:"section-title",children:"Recent Market Activity"}),y.jsxs("div",{className:"transactions-table",children:[y.jsxs("div",{className:"table-header",children:[y.jsx("div",{className:"header-item",children:"Address"}),y.jsx("div",{className:"header-item",children:"Type"}),y.jsx("div",{className:"header-item",children:"Price"}),y.jsx("div",{className:"header-item",children:"Date"}),y.jsx("div",{className:"header-item",children:"Days on Market"})]}),p8.map(n=>y.jsxs("div",{className:"table-row",children:[y.jsxs("div",{className:"row-item address",children:[y.jsx(ZO,{className:"row-icon"}),y.jsx("span",{children:n.address})]}),y.jsx("div",{className:"row-item type",children:n.type}),y.jsxs("div",{className:"row-item price",children:[y.jsx(WO,{className:"row-icon"}),y.jsx("span",{children:e(n.price)})]}),y.jsxs("div",{className:"row-item date",children:[y.jsx(qg,{className:"row-icon"}),y.jsx("span",{children:t(n.date)})]}),y.jsx("div",{className:"row-item days",children:y.jsxs("span",{className:`status-badge ${n.status.toLowerCase()}`,children:[n.daysOnMarket," days"]})})]},n.id))]}),y.jsx("button",{className:"view-market-report-btn",children:"View Full Market Report"})]})})},y8=()=>{const[t,e]=D.useState([0,1e6]),[n,a]=D.useState(""),[s,l]=D.useState(""),c=(d,p)=>{const g=[...t];g[p]=parseInt(d.target.value),e(g)};return y.jsx("section",{className:"search-filters",children:y.jsxs("div",{className:"filters-container",children:[y.jsxs("div",{className:"filter-group",children:[y.jsx("label",{children:"Location"}),y.jsx("input",{type:"text",placeholder:"City, Neighborhood, or ZIP"})]}),y.jsxs("div",{className:"filter-group",children:[y.jsx("label",{children:"Price Range"}),y.jsxs("div",{className:"price-range",children:[y.jsx("input",{type:"range",min:"0",max:"1000000",step:"50000",value:t[0],onChange:d=>c(d,0)}),y.jsx("input",{type:"range",min:"0",max:"1000000",step:"50000",value:t[1],onChange:d=>c(d,1)}),y.jsxs("div",{className:"price-values",children:[y.jsxs("span",{children:["$",t[0].toLocaleString()]}),y.jsxs("span",{children:["$",t[1].toLocaleString()]})]})]})]}),y.jsxs("div",{className:"filter-group",children:[y.jsx("label",{children:"Bedrooms"}),y.jsxs("select",{value:n,onChange:d=>a(d.target.value),children:[y.jsx("option",{value:"",children:"Any"}),y.jsx("option",{value:"1",children:"1+"}),y.jsx("option",{value:"2",children:"2+"}),y.jsx("option",{value:"3",children:"3+"}),y.jsx("option",{value:"4",children:"4+"}),y.jsx("option",{value:"5",children:"5+"})]})]}),y.jsxs("div",{className:"filter-group",children:[y.jsx("label",{children:"Property Type"}),y.jsxs("select",{value:s,onChange:d=>l(d.target.value),children:[y.jsx("option",{value:"",children:"Any"}),y.jsx("option",{value:"house",children:"House"}),y.jsx("option",{value:"apartment",children:"Apartment"}),y.jsx("option",{value:"condo",children:"Condo"}),y.jsx("option",{value:"townhouse",children:"Townhouse"}),y.jsx("option",{value:"land",children:"Land"})]})]}),y.jsx("button",{className:"search-button",children:"Search Properties"})]})})},v8=()=>{const t=[{quote:"This product changed my life!",author:"Jane Doe",role:"Happy Customer"},{quote:"I've never seen anything like this before.",author:"John Smith",role:"Satisfied User"}];return y.jsxs("section",{className:"testimonials",children:[y.jsx("h2",{children:"What Our Customers Say"}),y.jsx("div",{className:"testimonial-container",children:t.map((e,n)=>y.jsxs("div",{className:"testimonial",children:[y.jsxs("blockquote",{children:['"',e.quote,'"']}),y.jsxs("div",{className:"author-info",children:[y.jsx("p",{className:"author-name",children:e.author}),y.jsx("p",{className:"author-role",children:e.role})]})]},n))})]})},_8=[{id:1,title:"Luxury Waterfront Estate Tour",location:"Miami, FL",duration:"3:45",thumbnail:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"},{id:2,title:"Modern Downtown Apartment",location:"New York, NY",duration:"2:30",thumbnail:"https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"},{id:3,title:"Family Home in Suburban Neighborhood",location:"Austin, TX",duration:"4:15",thumbnail:"https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"}],b8=()=>y.jsx("section",{className:"video-tours",children:y.jsxs("div",{className:"container",children:[y.jsx("h2",{className:"section-title",children:"Featured Video Tours"}),y.jsx("p",{className:"section-subtitle",children:"Experience properties from the comfort of your home"}),y.jsx("div",{className:"videos-grid",children:_8.map(t=>y.jsxs("div",{className:"video-card",children:[y.jsxs("div",{className:"video-thumbnail",children:[y.jsx("img",{src:t.thumbnail,alt:t.title}),y.jsx("div",{className:"play-button",children:y.jsx(JO,{})}),y.jsx("div",{className:"video-duration",children:t.duration})]}),y.jsxs("div",{className:"video-info",children:[y.jsx("h3",{children:t.title}),y.jsx("p",{className:"video-location",children:t.location}),y.jsx("button",{className:"view-property-btn",children:"View Property Details"})]})]},t.id))})]})}),E8=()=>y.jsx("div",{className:"home-page",children:y.jsxs("main",{children:[y.jsx(c8,{}),y.jsx(y8,{}),y.jsx(m8,{title:"Featured Properties",limit:6,featured:!0}),y.jsx(d8,{}),y.jsx(u8,{}),y.jsx(b8,{}),y.jsx(h8,{}),y.jsx(g8,{}),y.jsx(v8,{}),y.jsx(o8,{title:"Real Estate Insights",limit:3}),y.jsx(l8,{})]})}),T8=()=>y.jsx(y.Fragment,{children:y.jsx("h1",{children:"Welcome to Search Page"})}),w8=()=>{const t=MT();console.error("Routing Error:",t);const e=cc(),n=()=>{e(-1)},a=()=>sl(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:"An unexpected error occurred.";return y.jsxs("div",{style:qo.container,children:[y.jsx("img",{src:"https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif",alt:"Error GIF",style:qo.gif}),y.jsx("h1",{style:qo.title,children:"Oops! Something went wrong."}),y.jsx("p",{style:qo.message,children:"Sorry, we couldn't load this page."}),y.jsx("p",{style:qo.errorInfo,children:a()}),y.jsx("button",{onClick:n,style:qo.button,children:"⬅ Back to Home"})]})},qo={container:{textAlign:"center",padding:"2rem",fontFamily:"Arial, sans-serif",color:"#333"},gif:{width:"300px",maxWidth:"100%",marginBottom:"1rem",borderRadius:"12px"},title:{fontSize:"2rem",marginBottom:"0.5rem"},message:{fontSize:"1.2rem",marginBottom:"0.5rem"},errorInfo:{fontSize:"1rem",color:"crimson",marginBottom:"1.5rem"},button:{padding:"0.75rem 1.5rem",fontSize:"1rem",borderRadius:"8px",border:"none",backgroundColor:"#007bff",color:"white",cursor:"pointer",transition:"background-color 0.3s"}};var Pn=function(){return Pn=Object.assign||function(e){for(var n,a=1,s=arguments.length;a<s;a++){n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},Pn.apply(this,arguments)};function sc(t,e,n){if(n||arguments.length===2)for(var a=0,s=e.length,l;a<s;a++)(l||!(a in e))&&(l||(l=Array.prototype.slice.call(e,0,a)),l[a]=e[a]);return t.concat(l||Array.prototype.slice.call(e))}var Ot="-ms-",Ku="-moz-",gt="-webkit-",yx="comm",Cd="rule",r0="decl",S8="@import",vx="@keyframes",x8="@layer",_x=Math.abs,i0=String.fromCharCode,Gg=Object.assign;function A8(t,e){return yn(t,0)^45?(((e<<2^yn(t,0))<<2^yn(t,1))<<2^yn(t,2))<<2^yn(t,3):0}function bx(t){return t.trim()}function Yi(t,e){return(t=e.exec(t))?t[0]:t}function Ye(t,e,n){return t.replace(e,n)}function Tf(t,e,n){return t.indexOf(e,n)}function yn(t,e){return t.charCodeAt(e)|0}function ml(t,e,n){return t.slice(e,n)}function ci(t){return t.length}function Ex(t){return t.length}function Bu(t,e){return e.push(t),t}function R8(t,e){return t.map(e).join("")}function VE(t,e){return t.filter(function(n){return!Yi(n,e)})}var Id=1,pl=1,Tx=0,Pr=0,Zt=0,Al="";function Nd(t,e,n,a,s,l,c,d){return{value:t,root:e,parent:n,type:a,props:s,children:l,line:Id,column:pl,length:c,return:"",siblings:d}}function Ua(t,e){return Gg(Nd("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Go(t){for(;t.root;)t=Ua(t.root,{children:[t]});Bu(t,t.siblings)}function C8(){return Zt}function I8(){return Zt=Pr>0?yn(Al,--Pr):0,pl--,Zt===10&&(pl=1,Id--),Zt}function Gr(){return Zt=Pr<Tx?yn(Al,Pr++):0,pl++,Zt===10&&(pl=1,Id++),Zt}function Gs(){return yn(Al,Pr)}function wf(){return Pr}function Dd(t,e){return ml(Al,t,e)}function $g(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function N8(t){return Id=pl=1,Tx=ci(Al=t),Pr=0,[]}function D8(t){return Al="",t}function tg(t){return bx(Dd(Pr-1,Yg(t===91?t+2:t===40?t+1:t)))}function O8(t){for(;(Zt=Gs())&&Zt<33;)Gr();return $g(t)>2||$g(Zt)>3?"":" "}function M8(t,e){for(;--e&&Gr()&&!(Zt<48||Zt>102||Zt>57&&Zt<65||Zt>70&&Zt<97););return Dd(t,wf()+(e<6&&Gs()==32&&Gr()==32))}function Yg(t){for(;Gr();)switch(Zt){case t:return Pr;case 34:case 39:t!==34&&t!==39&&Yg(Zt);break;case 40:t===41&&Yg(t);break;case 92:Gr();break}return Pr}function P8(t,e){for(;Gr()&&t+Zt!==57;)if(t+Zt===84&&Gs()===47)break;return"/*"+Dd(e,Pr-1)+"*"+i0(t===47?t:Gr())}function j8(t){for(;!$g(Gs());)Gr();return Dd(t,Pr)}function k8(t){return D8(Sf("",null,null,null,[""],t=N8(t),0,[0],t))}function Sf(t,e,n,a,s,l,c,d,p){for(var g=0,_=0,w=c,T=0,A=0,k=0,H=1,O=1,$=1,ee=0,X="",ce=s,ue=l,z=a,N=X;O;)switch(k=ee,ee=Gr()){case 40:if(k!=108&&yn(N,w-1)==58){Tf(N+=Ye(tg(ee),"&","&\f"),"&\f",_x(g?d[g-1]:0))!=-1&&($=-1);break}case 34:case 39:case 91:N+=tg(ee);break;case 9:case 10:case 13:case 32:N+=O8(k);break;case 92:N+=M8(wf()-1,7);continue;case 47:switch(Gs()){case 42:case 47:Bu(V8(P8(Gr(),wf()),e,n,p),p);break;default:N+="/"}break;case 123*H:d[g++]=ci(N)*$;case 125*H:case 59:case 0:switch(ee){case 0:case 125:O=0;case 59+_:$==-1&&(N=Ye(N,/\f/g,"")),A>0&&ci(N)-w&&Bu(A>32?UE(N+";",a,n,w-1,p):UE(Ye(N," ","")+";",a,n,w-2,p),p);break;case 59:N+=";";default:if(Bu(z=LE(N,e,n,g,_,s,d,X,ce=[],ue=[],w,l),l),ee===123)if(_===0)Sf(N,e,z,z,ce,l,w,d,ue);else switch(T===99&&yn(N,3)===110?100:T){case 100:case 108:case 109:case 115:Sf(t,z,z,a&&Bu(LE(t,z,z,0,0,s,d,X,s,ce=[],w,ue),ue),s,ue,w,d,a?ce:ue);break;default:Sf(N,z,z,z,[""],ue,0,d,ue)}}g=_=A=0,H=$=1,X=N="",w=c;break;case 58:w=1+ci(N),A=k;default:if(H<1){if(ee==123)--H;else if(ee==125&&H++==0&&I8()==125)continue}switch(N+=i0(ee),ee*H){case 38:$=_>0?1:(N+="\f",-1);break;case 44:d[g++]=(ci(N)-1)*$,$=1;break;case 64:Gs()===45&&(N+=tg(Gr())),T=Gs(),_=w=ci(X=N+=j8(wf())),ee++;break;case 45:k===45&&ci(N)==2&&(H=0)}}return l}function LE(t,e,n,a,s,l,c,d,p,g,_,w){for(var T=s-1,A=s===0?l:[""],k=Ex(A),H=0,O=0,$=0;H<a;++H)for(var ee=0,X=ml(t,T+1,T=_x(O=c[H])),ce=t;ee<k;++ee)(ce=bx(O>0?A[ee]+" "+X:Ye(X,/&\f/g,A[ee])))&&(p[$++]=ce);return Nd(t,e,n,s===0?Cd:d,p,g,_,w)}function V8(t,e,n,a){return Nd(t,e,n,yx,i0(C8()),ml(t,2,-2),0,a)}function UE(t,e,n,a,s){return Nd(t,e,n,r0,ml(t,0,a),ml(t,a+1,-1),a,s)}function wx(t,e,n){switch(A8(t,e)){case 5103:return gt+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return gt+t+t;case 4789:return Ku+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return gt+t+Ku+t+Ot+t+t;case 5936:switch(yn(t,e+11)){case 114:return gt+t+Ot+Ye(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return gt+t+Ot+Ye(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return gt+t+Ot+Ye(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return gt+t+Ot+t+t;case 6165:return gt+t+Ot+"flex-"+t+t;case 5187:return gt+t+Ye(t,/(\w+).+(:[^]+)/,gt+"box-$1$2"+Ot+"flex-$1$2")+t;case 5443:return gt+t+Ot+"flex-item-"+Ye(t,/flex-|-self/g,"")+(Yi(t,/flex-|baseline/)?"":Ot+"grid-row-"+Ye(t,/flex-|-self/g,""))+t;case 4675:return gt+t+Ot+"flex-line-pack"+Ye(t,/align-content|flex-|-self/g,"")+t;case 5548:return gt+t+Ot+Ye(t,"shrink","negative")+t;case 5292:return gt+t+Ot+Ye(t,"basis","preferred-size")+t;case 6060:return gt+"box-"+Ye(t,"-grow","")+gt+t+Ot+Ye(t,"grow","positive")+t;case 4554:return gt+Ye(t,/([^-])(transform)/g,"$1"+gt+"$2")+t;case 6187:return Ye(Ye(Ye(t,/(zoom-|grab)/,gt+"$1"),/(image-set)/,gt+"$1"),t,"")+t;case 5495:case 3959:return Ye(t,/(image-set\([^]*)/,gt+"$1$`$1");case 4968:return Ye(Ye(t,/(.+:)(flex-)?(.*)/,gt+"box-pack:$3"+Ot+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+gt+t+t;case 4200:if(!Yi(t,/flex-|baseline/))return Ot+"grid-column-align"+ml(t,e)+t;break;case 2592:case 3360:return Ot+Ye(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(a,s){return e=s,Yi(a.props,/grid-\w+-end/)})?~Tf(t+(n=n[e].value),"span",0)?t:Ot+Ye(t,"-start","")+t+Ot+"grid-row-span:"+(~Tf(n,"span",0)?Yi(n,/\d+/):+Yi(n,/\d+/)-+Yi(t,/\d+/))+";":Ot+Ye(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(a){return Yi(a.props,/grid-\w+-start/)})?t:Ot+Ye(Ye(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Ye(t,/(.+)-inline(.+)/,gt+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ci(t)-1-e>6)switch(yn(t,e+1)){case 109:if(yn(t,e+4)!==45)break;case 102:return Ye(t,/(.+:)(.+)-([^]+)/,"$1"+gt+"$2-$3$1"+Ku+(yn(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Tf(t,"stretch",0)?wx(Ye(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Ye(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,s,l,c,d,p,g){return Ot+s+":"+l+g+(c?Ot+s+"-span:"+(d?p:+p-+l)+g:"")+t});case 4949:if(yn(t,e+6)===121)return Ye(t,":",":"+gt)+t;break;case 6444:switch(yn(t,yn(t,14)===45?18:11)){case 120:return Ye(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+gt+(yn(t,14)===45?"inline-":"")+"box$3$1"+gt+"$2$3$1"+Ot+"$2box$3")+t;case 100:return Ye(t,":",":"+Ot)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ye(t,"scroll-","scroll-snap-")+t}return t}function Jf(t,e){for(var n="",a=0;a<t.length;a++)n+=e(t[a],a,t,e)||"";return n}function L8(t,e,n,a){switch(t.type){case x8:if(t.children.length)break;case S8:case r0:return t.return=t.return||t.value;case yx:return"";case vx:return t.return=t.value+"{"+Jf(t.children,a)+"}";case Cd:if(!ci(t.value=t.props.join(",")))return""}return ci(n=Jf(t.children,a))?t.return=t.value+"{"+n+"}":""}function U8(t){var e=Ex(t);return function(n,a,s,l){for(var c="",d=0;d<e;d++)c+=t[d](n,a,s,l)||"";return c}}function z8(t){return function(e){e.root||(e=e.return)&&t(e)}}function B8(t,e,n,a){if(t.length>-1&&!t.return)switch(t.type){case r0:t.return=wx(t.value,t.length,n);return;case vx:return Jf([Ua(t,{value:Ye(t.value,"@","@"+gt)})],a);case Cd:if(t.length)return R8(n=t.props,function(s){switch(Yi(s,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Go(Ua(t,{props:[Ye(s,/:(read-\w+)/,":"+Ku+"$1")]})),Go(Ua(t,{props:[s]})),Gg(t,{props:VE(n,a)});break;case"::placeholder":Go(Ua(t,{props:[Ye(s,/:(plac\w+)/,":"+gt+"input-$1")]})),Go(Ua(t,{props:[Ye(s,/:(plac\w+)/,":"+Ku+"$1")]})),Go(Ua(t,{props:[Ye(s,/:(plac\w+)/,Ot+"input-$1")]})),Go(Ua(t,{props:[s]})),Gg(t,{props:VE(n,a)});break}return""})}}var F8={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},cr={},gl=typeof process<"u"&&cr!==void 0&&(cr.REACT_APP_SC_ATTR||cr.SC_ATTR)||"data-styled",Sx="active",xx="data-styled-version",Od="6.1.19",a0=`/*!sc*/
`,ed=typeof window<"u"&&typeof document<"u",H8=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&cr!==void 0&&cr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&cr.REACT_APP_SC_DISABLE_SPEEDY!==""?cr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&cr.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&cr!==void 0&&cr.SC_DISABLE_SPEEDY!==void 0&&cr.SC_DISABLE_SPEEDY!==""&&cr.SC_DISABLE_SPEEDY!=="false"&&cr.SC_DISABLE_SPEEDY),q8={},Md=Object.freeze([]),yl=Object.freeze({});function Ax(t,e,n){return n===void 0&&(n=yl),t.theme!==n.theme&&t.theme||e||n.theme}var Rx=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),G8=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$8=/(^-|-$)/g;function zE(t){return t.replace(G8,"-").replace($8,"")}var Y8=/(a)(d)/gi,Wh=52,BE=function(t){return String.fromCharCode(t+(t>25?39:97))};function Kg(t){var e,n="";for(e=Math.abs(t);e>Wh;e=e/Wh|0)n=BE(e%Wh)+n;return(BE(e%Wh)+n).replace(Y8,"$1-$2")}var ng,Cx=5381,Wo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},Ix=function(t){return Wo(Cx,t)};function Nx(t){return Kg(Ix(t)>>>0)}function K8(t){return t.displayName||t.name||"Component"}function rg(t){return typeof t=="string"&&!0}var Dx=typeof Symbol=="function"&&Symbol.for,Ox=Dx?Symbol.for("react.memo"):60115,Q8=Dx?Symbol.for("react.forward_ref"):60112,X8={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},W8={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Mx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Z8=((ng={})[Q8]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ng[Ox]=Mx,ng);function FE(t){return("type"in(e=t)&&e.type.$$typeof)===Ox?Mx:"$$typeof"in t?Z8[t.$$typeof]:X8;var e}var J8=Object.defineProperty,e9=Object.getOwnPropertyNames,HE=Object.getOwnPropertySymbols,t9=Object.getOwnPropertyDescriptor,n9=Object.getPrototypeOf,qE=Object.prototype;function Px(t,e,n){if(typeof e!="string"){if(qE){var a=n9(e);a&&a!==qE&&Px(t,a,n)}var s=e9(e);HE&&(s=s.concat(HE(e)));for(var l=FE(t),c=FE(e),d=0;d<s.length;++d){var p=s[d];if(!(p in W8||n&&n[p]||c&&p in c||l&&p in l)){var g=t9(e,p);try{J8(t,p,g)}catch{}}}}return t}function vl(t){return typeof t=="function"}function s0(t){return typeof t=="object"&&"styledComponentId"in t}function qs(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Qg(t,e){if(t.length===0)return"";for(var n=t[0],a=1;a<t.length;a++)n+=t[a];return n}function oc(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Xg(t,e,n){if(n===void 0&&(n=!1),!n&&!oc(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var a=0;a<e.length;a++)t[a]=Xg(t[a],e[a]);else if(oc(e))for(var a in e)t[a]=Xg(t[a],e[a]);return t}function o0(t,e){Object.defineProperty(t,"toString",{value:e})}function Ac(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var r9=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,a=0;a<e;a++)n+=this.groupSizes[a];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var a=this.groupSizes,s=a.length,l=s;e>=l;)if((l<<=1)<0)throw Ac(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(a),this.length=l;for(var c=s;c<l;c++)this.groupSizes[c]=0}for(var d=this.indexOfGroup(e+1),p=(c=0,n.length);c<p;c++)this.tag.insertRule(d,n[c])&&(this.groupSizes[e]++,d++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],a=this.indexOfGroup(e),s=a+n;this.groupSizes[e]=0;for(var l=a;l<s;l++)this.tag.deleteRule(a)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var a=this.groupSizes[e],s=this.indexOfGroup(e),l=s+a,c=s;c<l;c++)n+="".concat(this.tag.getRule(c)).concat(a0);return n},t}(),xf=new Map,td=new Map,Af=1,Zh=function(t){if(xf.has(t))return xf.get(t);for(;td.has(Af);)Af++;var e=Af++;return xf.set(t,e),td.set(e,t),e},i9=function(t,e){Af=e+1,xf.set(t,e),td.set(e,t)},a9="style[".concat(gl,"][").concat(xx,'="').concat(Od,'"]'),s9=new RegExp("^".concat(gl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),o9=function(t,e,n){for(var a,s=n.split(","),l=0,c=s.length;l<c;l++)(a=s[l])&&t.registerName(e,a)},l9=function(t,e){for(var n,a=((n=e.textContent)!==null&&n!==void 0?n:"").split(a0),s=[],l=0,c=a.length;l<c;l++){var d=a[l].trim();if(d){var p=d.match(s9);if(p){var g=0|parseInt(p[1],10),_=p[2];g!==0&&(i9(_,g),o9(t,_,p[3]),t.getTag().insertRules(g,s)),s.length=0}else s.push(d)}}},GE=function(t){for(var e=document.querySelectorAll(a9),n=0,a=e.length;n<a;n++){var s=e[n];s&&s.getAttribute(gl)!==Sx&&(l9(t,s),s.parentNode&&s.parentNode.removeChild(s))}};function u9(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var jx=function(t){var e=document.head,n=t||e,a=document.createElement("style"),s=function(d){var p=Array.from(d.querySelectorAll("style[".concat(gl,"]")));return p[p.length-1]}(n),l=s!==void 0?s.nextSibling:null;a.setAttribute(gl,Sx),a.setAttribute(xx,Od);var c=u9();return c&&a.setAttribute("nonce",c),n.insertBefore(a,l),a},c9=function(){function t(e){this.element=jx(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var a=document.styleSheets,s=0,l=a.length;s<l;s++){var c=a[s];if(c.ownerNode===n)return c}throw Ac(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),h9=function(){function t(e){this.element=jx(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var a=document.createTextNode(n);return this.element.insertBefore(a,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),f9=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),$E=ed,d9={isServer:!ed,useCSSOMInjection:!H8},nd=function(){function t(e,n,a){e===void 0&&(e=yl),n===void 0&&(n={});var s=this;this.options=Pn(Pn({},d9),e),this.gs=n,this.names=new Map(a),this.server=!!e.isServer,!this.server&&ed&&$E&&($E=!1,GE(this)),o0(this,function(){return function(l){for(var c=l.getTag(),d=c.length,p="",g=function(w){var T=function($){return td.get($)}(w);if(T===void 0)return"continue";var A=l.names.get(T),k=c.getGroup(w);if(A===void 0||!A.size||k.length===0)return"continue";var H="".concat(gl,".g").concat(w,'[id="').concat(T,'"]'),O="";A!==void 0&&A.forEach(function($){$.length>0&&(O+="".concat($,","))}),p+="".concat(k).concat(H,'{content:"').concat(O,'"}').concat(a0)},_=0;_<d;_++)g(_);return p}(s)})}return t.registerId=function(e){return Zh(e)},t.prototype.rehydrate=function(){!this.server&&ed&&GE(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Pn(Pn({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var a=n.useCSSOMInjection,s=n.target;return n.isServer?new f9(s):a?new c9(s):new h9(s)}(this.options),new r9(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Zh(e),this.names.has(e))this.names.get(e).add(n);else{var a=new Set;a.add(n),this.names.set(e,a)}},t.prototype.insertRules=function(e,n,a){this.registerName(e,n),this.getTag().insertRules(Zh(e),a)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Zh(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),m9=/&/g,p9=/^\s*\/\/.*$/gm;function kx(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(a){return"".concat(e," ").concat(a)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=kx(n.children,e)),n})}function g9(t){var e,n,a,s=yl,l=s.options,c=l===void 0?yl:l,d=s.plugins,p=d===void 0?Md:d,g=function(T,A,k){return k.startsWith(n)&&k.endsWith(n)&&k.replaceAll(n,"").length>0?".".concat(e):T},_=p.slice();_.push(function(T){T.type===Cd&&T.value.includes("&")&&(T.props[0]=T.props[0].replace(m9,n).replace(a,g))}),c.prefix&&_.push(B8),_.push(L8);var w=function(T,A,k,H){A===void 0&&(A=""),k===void 0&&(k=""),H===void 0&&(H="&"),e=H,n=A,a=new RegExp("\\".concat(n,"\\b"),"g");var O=T.replace(p9,""),$=k8(k||A?"".concat(k," ").concat(A," { ").concat(O," }"):O);c.namespace&&($=kx($,c.namespace));var ee=[];return Jf($,U8(_.concat(z8(function(X){return ee.push(X)})))),ee};return w.hash=p.length?p.reduce(function(T,A){return A.name||Ac(15),Wo(T,A.name)},Cx).toString():"",w}var y9=new nd,Wg=g9(),Vx=Mn.createContext({shouldForwardProp:void 0,styleSheet:y9,stylis:Wg});Vx.Consumer;Mn.createContext(void 0);function Zg(){return D.useContext(Vx)}var v9=function(){function t(e,n){var a=this;this.inject=function(s,l){l===void 0&&(l=Wg);var c=a.name+l.hash;s.hasNameForId(a.id,c)||s.insertRules(a.id,c,l(a.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,o0(this,function(){throw Ac(12,String(a.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Wg),this.name+e.hash},t}(),_9=function(t){return t>="A"&&t<="Z"};function YE(t){for(var e="",n=0;n<t.length;n++){var a=t[n];if(n===1&&a==="-"&&t[0]==="-")return t;_9(a)?e+="-"+a.toLowerCase():e+=a}return e.startsWith("ms-")?"-"+e:e}var Lx=function(t){return t==null||t===!1||t===""},Ux=function(t){var e,n,a=[];for(var s in t){var l=t[s];t.hasOwnProperty(s)&&!Lx(l)&&(Array.isArray(l)&&l.isCss||vl(l)?a.push("".concat(YE(s),":"),l,";"):oc(l)?a.push.apply(a,sc(sc(["".concat(s," {")],Ux(l),!1),["}"],!1)):a.push("".concat(YE(s),": ").concat((e=s,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in F8||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return a};function Wa(t,e,n,a){if(Lx(t))return[];if(s0(t))return[".".concat(t.styledComponentId)];if(vl(t)){if(!vl(l=t)||l.prototype&&l.prototype.isReactComponent||!e)return[t];var s=t(e);return Wa(s,e,n,a)}var l;return t instanceof v9?n?(t.inject(n,a),[t.getName(a)]):[t]:oc(t)?Ux(t):Array.isArray(t)?Array.prototype.concat.apply(Md,t.map(function(c){return Wa(c,e,n,a)})):[t.toString()]}function zx(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(vl(n)&&!s0(n))return!1}return!0}var b9=Ix(Od),E9=function(){function t(e,n,a){this.rules=e,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&zx(e),this.componentId=n,this.baseHash=Wo(b9,n),this.baseStyle=a,nd.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,a){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))s=qs(s,this.staticRulesId);else{var l=Qg(Wa(this.rules,e,n,a)),c=Kg(Wo(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,c)){var d=a(l,".".concat(c),void 0,this.componentId);n.insertRules(this.componentId,c,d)}s=qs(s,c),this.staticRulesId=c}else{for(var p=Wo(this.baseHash,a.hash),g="",_=0;_<this.rules.length;_++){var w=this.rules[_];if(typeof w=="string")g+=w;else if(w){var T=Qg(Wa(w,e,n,a));p=Wo(p,T+_),g+=T}}if(g){var A=Kg(p>>>0);n.hasNameForId(this.componentId,A)||n.insertRules(this.componentId,A,a(g,".".concat(A),void 0,this.componentId)),s=qs(s,A)}}return s},t}(),l0=Mn.createContext(void 0);l0.Consumer;var ig={};function T9(t,e,n){var a=s0(t),s=t,l=!rg(t),c=e.attrs,d=c===void 0?Md:c,p=e.componentId,g=p===void 0?function(ce,ue){var z=typeof ce!="string"?"sc":zE(ce);ig[z]=(ig[z]||0)+1;var N="".concat(z,"-").concat(Nx(Od+z+ig[z]));return ue?"".concat(ue,"-").concat(N):N}(e.displayName,e.parentComponentId):p,_=e.displayName,w=_===void 0?function(ce){return rg(ce)?"styled.".concat(ce):"Styled(".concat(K8(ce),")")}(t):_,T=e.displayName&&e.componentId?"".concat(zE(e.displayName),"-").concat(e.componentId):e.componentId||g,A=a&&s.attrs?s.attrs.concat(d).filter(Boolean):d,k=e.shouldForwardProp;if(a&&s.shouldForwardProp){var H=s.shouldForwardProp;if(e.shouldForwardProp){var O=e.shouldForwardProp;k=function(ce,ue){return H(ce,ue)&&O(ce,ue)}}else k=H}var $=new E9(n,T,a?s.componentStyle:void 0);function ee(ce,ue){return function(z,N,R){var C=z.attrs,V=z.componentStyle,U=z.defaultProps,B=z.foldedComponentIds,I=z.styledComponentId,He=z.target,We=Mn.useContext(l0),W=Zg(),pe=z.shouldForwardProp||W.shouldForwardProp,ye=Ax(N,We,U)||yl,Ne=function(Ve,Ce,Dt){for(var it,$t=Pn(Pn({},Ce),{className:void 0,theme:Dt}),_t=0;_t<Ve.length;_t+=1){var Bt=vl(it=Ve[_t])?it($t):it;for(var nn in Bt)$t[nn]=nn==="className"?qs($t[nn],Bt[nn]):nn==="style"?Pn(Pn({},$t[nn]),Bt[nn]):Bt[nn]}return Ce.className&&($t.className=qs($t.className,Ce.className)),$t}(C,N,ye),P=Ne.as||He,re={};for(var me in Ne)Ne[me]===void 0||me[0]==="$"||me==="as"||me==="theme"&&Ne.theme===ye||(me==="forwardedAs"?re.as=Ne.forwardedAs:pe&&!pe(me,P)||(re[me]=Ne[me]));var he=function(Ve,Ce){var Dt=Zg(),it=Ve.generateAndInjectStyles(Ce,Dt.styleSheet,Dt.stylis);return it}(V,Ne),be=qs(B,I);return he&&(be+=" "+he),Ne.className&&(be+=" "+Ne.className),re[rg(P)&&!Rx.has(P)?"class":"className"]=be,R&&(re.ref=R),D.createElement(P,re)}(X,ce,ue)}ee.displayName=w;var X=Mn.forwardRef(ee);return X.attrs=A,X.componentStyle=$,X.displayName=w,X.shouldForwardProp=k,X.foldedComponentIds=a?qs(s.foldedComponentIds,s.styledComponentId):"",X.styledComponentId=T,X.target=a?s.target:t,Object.defineProperty(X,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ce){this._foldedDefaultProps=a?function(ue){for(var z=[],N=1;N<arguments.length;N++)z[N-1]=arguments[N];for(var R=0,C=z;R<C.length;R++)Xg(ue,C[R],!0);return ue}({},s.defaultProps,ce):ce}}),o0(X,function(){return".".concat(X.styledComponentId)}),l&&Px(X,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),X}function KE(t,e){for(var n=[t[0]],a=0,s=e.length;a<s;a+=1)n.push(e[a],t[a+1]);return n}var QE=function(t){return Object.assign(t,{isCss:!0})};function Bx(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(vl(t)||oc(t))return QE(Wa(KE(Md,sc([t],e,!0))));var a=t;return e.length===0&&a.length===1&&typeof a[0]=="string"?Wa(a):QE(Wa(KE(a,e)))}function Jg(t,e,n){if(n===void 0&&(n=yl),!e)throw Ac(1,e);var a=function(s){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];return t(e,n,Bx.apply(void 0,sc([s],l,!1)))};return a.attrs=function(s){return Jg(t,e,Pn(Pn({},n),{attrs:Array.prototype.concat(n.attrs,s).filter(Boolean)}))},a.withConfig=function(s){return Jg(t,e,Pn(Pn({},n),s))},a}var Fx=function(t){return Jg(T9,t)},ne=Fx;Rx.forEach(function(t){ne[t]=Fx(t)});var w9=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=zx(e),nd.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,a,s){var l=s(Qg(Wa(this.rules,n,a,s)),""),c=this.componentId+e;a.insertRules(c,c,l)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,a,s){e>2&&nd.registerId(this.componentId+e),this.removeStyles(e,a),this.createStyles(e,n,a,s)},t}();function Hx(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var a=Bx.apply(void 0,sc([t],e,!1)),s="sc-global-".concat(Nx(JSON.stringify(a))),l=new w9(a,s),c=function(p){var g=Zg(),_=Mn.useContext(l0),w=Mn.useRef(g.styleSheet.allocateGSInstance(s)).current;return g.styleSheet.server&&d(w,p,g.styleSheet,_,g.stylis),Mn.useLayoutEffect(function(){if(!g.styleSheet.server)return d(w,p,g.styleSheet,_,g.stylis),function(){return l.removeStyles(w,g.styleSheet)}},[w,p,g.styleSheet,_,g.stylis]),null};function d(p,g,_,w,T){if(l.isStatic)l.renderStyles(p,q8,_,T);else{var A=Pn(Pn({},g),{theme:Ax(g,w,c.defaultProps)});l.renderStyles(p,A,_,T)}}return Mn.memo(c)}const S9=ne.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f8f9fa;
`,x9=ne.main`
  flex: 1;
`,A9=ne.section`
  position: relative;
  padding: 8rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
              url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  overflow: hidden;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`,R9=ne.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`,C9=ne.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,I9=ne.p`
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`,N9=ne(qt)`
  display: inline-block;
  background-color: #4361ee;
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  text-decoration: none;
  font-weight: 600;

  &:hover {
    background-color: #3a0ca3;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  }
`,D9=ne.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 4rem 2rem;
  background-color: white;
`,Jh=ne.div`
  text-align: center;
  padding: 1rem;
  min-width: 200px;
`,ef=ne.div`
  font-size: 3rem;
  font-weight: 700;
  color: #3a0ca3;
  margin-bottom: 0.5rem;
`,tf=ne.div`
  font-size: 1.1rem;
  color: #666;
`,O9=ne.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,M9=ne.div`
  flex: 1 1 50%;
  min-width: 300px;
  padding: 2rem;
`,ag=ne.h2`
  font-size: 2.5rem;
  color: #3a0ca3;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 4px;
    background-color: #f72585;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,XE=ne.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 1.5rem;
`,P9=ne.div`
  flex: 1 1 40%;
  min-width: 300px;
  height: 400px;
  background-image: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    height: 300px;
    margin-top: 2rem;
  }
`,j9=ne.section`
  padding: 6rem 2rem;
  background-color: #f0f2f5;
  text-align: center;
`,k9=ne.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 3rem auto 0;
`,V9=ne.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  text-align: left;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
  }
`,L9=ne.p`
  font-style: italic;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  position: relative;

  &::before {
    content: '"';
    font-size: 3rem;
    color: rgba(67, 97, 238, 0.1);
    position: absolute;
    top: -1rem;
    left: -1rem;
  }
`,U9=ne.div`
  display: flex;
  align-items: center;
`,z9=ne.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #4361ee;
  margin-right: 1rem;
  background-image: url('${t=>t.image}');
  background-size: cover;
  background-position: center;
`,B9=ne.div``,F9=ne.h4`
  color: #3a0ca3;
  margin-bottom: 0.2rem;
`,H9=ne.p`
  color: #888;
  font-size: 0.9rem;
`,q9=ne.section`
  max-width: 1200px;
  margin: 6rem auto;
  padding: 0 2rem;
`,G9=ne.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`,$9=ne.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  }
`,Y9=ne.div`
  height: 200px;
  background-image: url('${t=>t.image}');
  background-size: cover;
  background-position: center;
`,K9=ne.div`
  padding: 1.5rem;
  background-color: white;
`,Q9=ne.h3`
  color: #3a0ca3;
  margin-bottom: 0.5rem;
`,X9=ne.p`
  color: #666;
  font-size: 0.9rem;
`,W9=ne.section`
  text-align: center;
  padding: 6rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
              url('https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  color: white;
`,Z9=ne.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,J9=ne.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2.5rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,eM=ne(qt)`
  display: inline-block;
  background-color: white;
  color: #3a0ca3;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  text-decoration: none;
  font-weight: 600;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  }
`,tM=[{text:"Dream Homes helped us find our perfect family house in just two weeks. Their attention to our needs was exceptional.",author:"Sarah Johnson",role:"Homeowner",image:"https://randomuser.me/api/portraits/women/44.jpg"},{text:"As an investor, I appreciate their market knowledge and negotiation skills. They've helped me build a profitable portfolio.",author:"Michael Chen",role:"Real Estate Investor",image:"https://randomuser.me/api/portraits/men/32.jpg"},{text:"The team went above and beyond to sell our property above asking price. Highly recommend their services!",author:"Emily Rodriguez",role:"Seller",image:"https://randomuser.me/api/portraits/women/68.jpg"}],nM=[{name:"Downtown District",properties:"125+ properties",image:"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},{name:"Riverside",properties:"80+ properties",image:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},{name:"Green Hills",properties:"45+ properties",image:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},{name:"Oceanview",properties:"60+ properties",image:"https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}],rM=()=>y.jsx(S9,{children:y.jsxs(x9,{children:[y.jsx(A9,{children:y.jsxs(R9,{children:[y.jsx(C9,{children:"Your Trusted Real Estate Partners"}),y.jsx(I9,{children:"With over 20 years of experience, we've helped thousands of families find their dream homes and investors build profitable portfolios."}),y.jsx(N9,{to:"/contact",children:"Get in Touch"})]})}),y.jsxs(D9,{children:[y.jsxs(Jh,{children:[y.jsx(ef,{children:"20+"}),y.jsx(tf,{children:"Years Experience"})]}),y.jsxs(Jh,{children:[y.jsx(ef,{children:"2,500+"}),y.jsx(tf,{children:"Happy Clients"})]}),y.jsxs(Jh,{children:[y.jsx(ef,{children:"$1.2B"}),y.jsx(tf,{children:"Properties Sold"})]}),y.jsxs(Jh,{children:[y.jsx(ef,{children:"98%"}),y.jsx(tf,{children:"Client Satisfaction"})]})]}),y.jsxs(O9,{children:[y.jsxs(M9,{children:[y.jsx(ag,{children:"Our Story"}),y.jsx(XE,{children:"Founded in 2002, Dream Homes Realty began as a small family business with a passion for connecting people with properties they love. What started as a local agency has grown into one of the region's most trusted real estate firms."}),y.jsx(XE,{children:"Our success comes from our client-first approach, deep market knowledge, and commitment to ethical practices. We believe buying or selling a home should be an exciting journey, not a stressful ordeal."})]}),y.jsx(P9,{})]}),y.jsxs(j9,{children:[y.jsx(ag,{children:"What Our Clients Say"}),y.jsx(k9,{children:tM.map((t,e)=>y.jsxs(V9,{children:[y.jsx(L9,{children:t.text}),y.jsxs(U9,{children:[y.jsx(z9,{image:t.image}),y.jsxs(B9,{children:[y.jsx(F9,{children:t.author}),y.jsx(H9,{children:t.role})]})]})]},e))})]}),y.jsxs(q9,{children:[y.jsx(ag,{children:"Featured Neighborhoods"}),y.jsx(G9,{children:nM.map((t,e)=>y.jsxs($9,{children:[y.jsx(Y9,{image:t.image}),y.jsxs(K9,{children:[y.jsx(Q9,{children:t.name}),y.jsx(X9,{children:t.properties})]})]},e))})]}),y.jsxs(W9,{children:[y.jsx(Z9,{children:"Ready to Find Your Dream Home?"}),y.jsx(J9,{children:"Our team of expert agents is ready to guide you through every step of the home buying or selling process. Contact us today to get started."}),y.jsx(eM,{to:"/contact",children:"Schedule a Consultation"})]})]})}),iM=ne.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f8f9fa;
`,aM=ne.main`
  flex: 1;
`,sM=ne.section`
  position: relative;
  padding: 8rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
              url('https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  overflow: hidden;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`,oM=ne.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`,lM=ne.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,uM=ne.p`
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`,cM=ne.div`
  display: flex;
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
  flex-wrap: wrap;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,hM=ne.section`
  flex: 1 1 60%;
  min-width: 300px;
  background-color: white;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
`,fM=ne.section`
  flex: 1 1 30%;
  min-width: 300px;
`,WE=ne.h2`
  font-size: 2rem;
  color: #3a0ca3;
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 4px;
    background-color: #f72585;
  }
`,dM=ne.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Nu=ne.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Du=ne.label`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`,nf=ne.input`
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    border-color: #4361ee;
    box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.2);
    outline: none;
  }
`,mM=ne.textarea`
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #4361ee;
    box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.2);
    outline: none;
  }
`,pM=ne.button`
  padding: 1rem 2rem;
  background-color: #f72585;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;

  &:hover {
    background-color: #e5177b;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(247, 37, 133, 0.3);
  }
`,gM=ne.div`
  background-color: rgba(76, 201, 240, 0.1);
  border: 1px solid rgba(76, 201, 240, 0.3);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
`,yM=ne.div`
  font-size: 3rem;
  color: #4cc9f0;
  margin-bottom: 1rem;
`,vM=ne.h3`
  font-size: 1.5rem;
  color: #3a0ca3;
  margin-bottom: 0.5rem;
`,_M=ne.p`
  color: #666;
  line-height: 1.6;
`,ZE=ne.div`
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  margin-bottom: 2rem;
`,Ou=ne.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Mu=ne.div`
  font-size: 1.5rem;
  color: #f72585;
`,Pu=ne.h3`
  font-size: 1.1rem;
  color: #3a0ca3;
  margin-bottom: 0.3rem;
`,sg=ne.a`
  color: #4361ee;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #f72585;
    text-decoration: underline;
  }
`,JE=ne.p`
  color: #666;
  line-height: 1.6;
`,bM=ne.div`
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
`,EM=ne.h3`
  font-size: 1.1rem;
  color: #3a0ca3;
  margin-bottom: 1rem;
`,TM=ne.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`,rf=ne.a`
  padding: 0.6rem 1.2rem;
  background-color: rgba(67, 97, 238, 0.1);
  color: #4361ee;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4361ee;
    color: white;
  }
`,wM=ne.section`
  width: 100%;
  padding: 0 2rem;
  margin: 4rem 0;
`,SM=ne.iframe`
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
`,xM=()=>{const[t,e]=D.useState({name:"",email:"",phone:"",message:"",propertyInterest:""}),[n,a]=D.useState(!1),s=c=>{const{name:d,value:p}=c.target;e(g=>({...g,[d]:p}))},l=c=>{c.preventDefault(),console.log("Form submitted:",t),a(!0),e({name:"",email:"",phone:"",message:"",propertyInterest:""}),setTimeout(()=>a(!1),5e3)};return y.jsx(iM,{children:y.jsxs(aM,{children:[y.jsx(sM,{children:y.jsxs(oM,{children:[y.jsx(lM,{children:"Contact Our Real Estate Team"}),y.jsx(uM,{children:"Whether you're buying, selling, or just exploring options, our experts are here to help."})]})}),y.jsxs(cM,{children:[y.jsxs(hM,{children:[y.jsx(WE,{children:"Schedule a Consultation"}),n?y.jsxs(gM,{children:[y.jsx(yM,{children:"✓"}),y.jsx(vM,{children:"Thank You!"}),y.jsx(_M,{children:"Your message has been sent successfully. One of our agents will contact you within 24 hours."})]}):y.jsxs(dM,{onSubmit:l,children:[y.jsxs(Nu,{children:[y.jsx(Du,{htmlFor:"name",children:"Your Name"}),y.jsx(nf,{type:"text",id:"name",name:"name",value:t.name,onChange:s,required:!0})]}),y.jsxs(Nu,{children:[y.jsx(Du,{htmlFor:"email",children:"Email Address"}),y.jsx(nf,{type:"email",id:"email",name:"email",value:t.email,onChange:s,required:!0})]}),y.jsxs(Nu,{children:[y.jsx(Du,{htmlFor:"phone",children:"Phone Number"}),y.jsx(nf,{type:"tel",id:"phone",name:"phone",value:t.phone,onChange:s,required:!0})]}),y.jsxs(Nu,{children:[y.jsx(Du,{htmlFor:"propertyInterest",children:"Property Interest"}),y.jsx(nf,{type:"text",id:"propertyInterest",name:"propertyInterest",value:t.propertyInterest,onChange:s,placeholder:"e.g., 3-bedroom home in Downtown"})]}),y.jsxs(Nu,{children:[y.jsx(Du,{htmlFor:"message",children:"Your Message"}),y.jsx(mM,{id:"message",name:"message",value:t.message,onChange:s,required:!0})]}),y.jsx(pM,{type:"submit",children:"Send Message"})]})]}),y.jsxs(fM,{children:[y.jsx(WE,{children:"Our Offices"}),y.jsxs(ZE,{children:[y.jsxs(Ou,{children:[y.jsx(Mu,{children:"📍"}),y.jsxs("div",{children:[y.jsx(Pu,{children:"Main Office"}),y.jsxs(JE,{children:["123 Real Estate Blvd",y.jsx("br",{}),"San Francisco, CA 94107",y.jsx("br",{}),"Open Mon-Fri: 9am-6pm"]})]})]}),y.jsxs(Ou,{children:[y.jsx(Mu,{children:"📱"}),y.jsxs("div",{children:[y.jsx(Pu,{children:"Phone"}),y.jsx(sg,{href:"tel:+15551234567",children:"+1 (555) 123-4567"})]})]}),y.jsxs(Ou,{children:[y.jsx(Mu,{children:"📧"}),y.jsxs("div",{children:[y.jsx(Pu,{children:"Email"}),y.jsx(sg,{href:"mailto:info@dreamhomes.com",children:"info@dreamhomes.com"})]})]})]}),y.jsxs(ZE,{children:[y.jsxs(Ou,{children:[y.jsx(Mu,{children:"📍"}),y.jsxs("div",{children:[y.jsx(Pu,{children:"Downtown Office"}),y.jsxs(JE,{children:["456 Urban Avenue",y.jsx("br",{}),"San Francisco, CA 94105",y.jsx("br",{}),"Open Mon-Fri: 10am-7pm"]})]})]}),y.jsxs(Ou,{children:[y.jsx(Mu,{children:"📱"}),y.jsxs("div",{children:[y.jsx(Pu,{children:"Phone"}),y.jsx(sg,{href:"tel:+15559876543",children:"+1 (555) 987-6543"})]})]})]}),y.jsxs(bM,{children:[y.jsx(EM,{children:"Follow Us"}),y.jsxs(TM,{children:[y.jsx(rf,{href:"https://facebook.com",target:"_blank",rel:"noreferrer",children:"Facebook"}),y.jsx(rf,{href:"https://instagram.com",target:"_blank",rel:"noreferrer",children:"Instagram"}),y.jsx(rf,{href:"https://linkedin.com",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),y.jsx(rf,{href:"https://twitter.com",target:"_blank",rel:"noreferrer",children:"Twitter"})]})]})]})]}),y.jsx(wM,{children:y.jsx(SM,{title:"Office Locations",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.538315496854!2d-122.4194155846826!3d37.77492997975939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus",allowFullScreen:"",loading:"lazy"})})]})})},AM=()=>{const[t,e]=D.useState({id:"",title:"",type:"Apartment",bedrooms:"",bathrooms:"",area_sqft:"",price:"",price_units:"crore",transaction_type:"Sale",furnishing:"Unfurnished",address:"",amenities:[],image:"",builder:"",year_built:"",createdAt:new Date().toISOString()}),[n,a]=D.useState(!1),[s,l]=D.useState(!1),[c,d]=D.useState(""),p=["Apartment","Villa","Commercial","Industrial","Independent Floor","Farmhouse"],g=["Unfurnished","Semi-Furnished","Fully Furnished","Luxury Furnished"],_=["Sale","Rent"],w=["crore","lakh/month","month"],T=["Swimming Pool","Gym","24/7 Security","Clubhouse","Private Garden","Modular Kitchen","Home Theater","Parking","Power Backup","Lift","Cafeteria","High-Speed Elevators","Private Terrace","Jacuzzi","Smart Home","Lawn","Servant Quarters"],A=ee=>{const{name:X,value:ce}=ee.target;e(ue=>({...ue,[X]:ce}))},k=ee=>{const X=Array.from(ee.target.selectedOptions,ce=>ce.value);e(ce=>({...ce,amenities:X}))},H=async ee=>{ee.preventDefault(),a(!0),d("");try{await hN(_S(mN,"properties"),t),l(!0),e({id:"",title:"",type:"Apartment",bedrooms:"",bathrooms:"",area_sqft:"",price:"",price_units:"crore",transaction_type:"Sale",furnishing:"Unfurnished",address:"",amenities:[],image:"",builder:"",year_built:"",createdAt:new Date().toISOString()}),setTimeout(()=>l(!1),3e3)}catch(X){console.error("Error adding property: ",X),d("Failed to add property. Please try again.")}finally{a(!1)}},O={container:{maxWidth:"800px",margin:"2rem auto",padding:"2rem",backgroundColor:"#f9f9f9",borderRadius:"8px",boxShadow:"0 0 20px rgba(0, 0, 0, 0.1)"},heading:{textAlign:"center",color:"#2c3e50",marginBottom:"2rem"},formGroup:{marginBottom:"1.5rem"},label:{display:"block",marginBottom:"0.5rem",fontWeight:"600",color:"#34495e"},input:{width:"100%",padding:"0.75rem",border:"1px solid #ddd",borderRadius:"4px",fontSize:"1rem",transition:"border-color 0.3s"},select:{width:"100%",padding:"0.75rem",border:"1px solid #ddd",borderRadius:"4px",fontSize:"1rem",backgroundColor:"white"},multiSelect:{height:"auto",minHeight:"100px"},hint:{fontSize:"0.8rem",color:"#7f8c8d",marginTop:"0.3rem"},button:{backgroundColor:"#3498db",color:"white",border:"none",padding:"0.75rem 1.5rem",fontSize:"1rem",borderRadius:"4px",cursor:"pointer",transition:"background-color 0.3s",width:"100%",marginTop:"1rem",display:"flex",justifyContent:"center",alignItems:"center"},buttonDisabled:{backgroundColor:"#95a5a6",cursor:"not-allowed"},buttonHover:{backgroundColor:"#2980b9"},flexRow:{display:"flex",gap:"1rem"},flexItem:{flex:"1"},successMessage:{backgroundColor:"#2ecc71",color:"white",padding:"1rem",borderRadius:"4px",marginBottom:"1rem",textAlign:"center"},errorMessage:{backgroundColor:"#e74c3c",color:"white",padding:"1rem",borderRadius:"4px",marginBottom:"1rem",textAlign:"center"}};return window.innerWidth<=768&&(O.flexRow={...O.flexRow,flexDirection:"column",gap:"0"},O.container={...O.container,padding:"1rem"}),y.jsxs("div",{style:O.container,children:[y.jsx("h2",{style:O.heading,children:"Add New Property"}),s&&y.jsx("div",{style:O.successMessage,children:"Property added successfully!"}),c&&y.jsx("div",{style:O.errorMessage,children:c}),y.jsxs("form",{onSubmit:H,children:[y.jsxs("div",{style:O.formGroup,children:[y.jsx("label",{style:O.label,children:"Property ID:"}),y.jsx("input",{type:"text",name:"id",value:t.id,onChange:A,style:O.input,required:!0})]}),y.jsxs("div",{style:O.formGroup,children:[y.jsx("label",{style:O.label,children:"Title:"}),y.jsx("input",{type:"text",name:"title",value:t.title,onChange:A,style:O.input,required:!0})]}),y.jsxs("div",{style:O.formGroup,children:[y.jsx("label",{style:O.label,children:"Property Type:"}),y.jsx("select",{name:"type",value:t.type,onChange:A,style:O.select,children:p.map(ee=>y.jsx("option",{value:ee,children:ee},ee))})]}),(t.type==="Apartment"||t.type==="Villa"||t.type==="Independent Floor"||t.type==="Farmhouse")&&y.jsxs("div",{style:O.flexRow,children:[y.jsxs("div",{style:{...O.formGroup,...O.flexItem},children:[y.jsx("label",{style:O.label,children:"Bedrooms:"}),y.jsx("input",{type:"number",name:"bedrooms",value:t.bedrooms,onChange:A,style:O.input,required:!0,min:"1"})]}),y.jsxs("div",{style:{...O.formGroup,...O.flexItem},children:[y.jsx("label",{style:O.label,children:"Bathrooms:"}),y.jsx("input",{type:"number",name:"bathrooms",value:t.bathrooms,onChange:A,style:O.input,required:!0,min:"1"})]})]}),y.jsxs("div",{style:O.flexRow,children:[y.jsxs("div",{style:{...O.formGroup,...O.flexItem},children:[y.jsx("label",{style:O.label,children:"Area (sqft):"}),y.jsx("input",{type:"number",name:"area_sqft",value:t.area_sqft,onChange:A,style:O.input,required:!0,min:"1"})]}),y.jsxs("div",{style:{...O.formGroup,...O.flexItem},children:[y.jsx("label",{style:O.label,children:"Transaction Type:"}),y.jsx("select",{name:"transaction_type",value:t.transaction_type,onChange:A,style:O.select,children:_.map(ee=>y.jsx("option",{value:ee,children:ee},ee))})]})]}),y.jsxs("div",{style:O.flexRow,children:[y.jsxs("div",{style:{...O.formGroup,...O.flexItem},children:[y.jsx("label",{style:O.label,children:"Price:"}),y.jsx("input",{type:"number",name:"price",value:t.price,onChange:A,style:O.input,required:!0,min:"0",step:"0.01"})]}),y.jsxs("div",{style:{...O.formGroup,...O.flexItem},children:[y.jsx("label",{style:O.label,children:"Price Units:"}),y.jsx("select",{name:"price_units",value:t.price_units,onChange:A,style:O.select,children:w.map(ee=>y.jsx("option",{value:ee,children:ee},ee))})]})]}),y.jsxs("div",{style:O.formGroup,children:[y.jsx("label",{style:O.label,children:"Furnishing:"}),y.jsx("select",{name:"furnishing",value:t.furnishing,onChange:A,style:O.select,children:g.map(ee=>y.jsx("option",{value:ee,children:ee},ee))})]}),y.jsxs("div",{style:O.formGroup,children:[y.jsx("label",{style:O.label,children:"Address:"}),y.jsx("input",{type:"text",name:"address",value:t.address,onChange:A,style:O.input,required:!0})]}),y.jsxs("div",{style:O.formGroup,children:[y.jsx("label",{style:O.label,children:"Amenities (Hold Ctrl/Cmd to select multiple):"}),y.jsx("select",{multiple:!0,name:"amenities",value:t.amenities,onChange:k,style:{...O.select,...O.multiSelect},children:T.map(ee=>y.jsx("option",{value:ee,children:ee},ee))}),y.jsxs("div",{style:O.hint,children:["Selected: ",t.amenities.join(", ")||"None"]})]}),y.jsxs("div",{style:O.flexRow,children:[y.jsxs("div",{style:{...O.formGroup,...O.flexItem},children:[y.jsx("label",{style:O.label,children:"Image URL:"}),y.jsx("input",{type:"text",name:"image",value:t.image,onChange:A,style:O.input})]}),y.jsxs("div",{style:{...O.formGroup,...O.flexItem},children:[y.jsx("label",{style:O.label,children:"Year Built:"}),y.jsx("input",{type:"number",name:"year_built",value:t.year_built,onChange:A,style:O.input,min:"1800",max:new Date().getFullYear()})]})]}),y.jsxs("div",{style:O.formGroup,children:[y.jsx("label",{style:O.label,children:"Builder (optional):"}),y.jsx("input",{type:"text",name:"builder",value:t.builder,onChange:A,style:O.input})]}),y.jsx("button",{type:"submit",style:{...O.button,...n?O.buttonDisabled:{}},onMouseEnter:ee=>!n&&(ee.target.style.backgroundColor=O.buttonHover.backgroundColor),onMouseLeave:ee=>!n&&(ee.target.style.backgroundColor=O.button.backgroundColor),disabled:n,children:n?"Adding Property...":"Add Property"})]})]})};Hx`
  body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f8f9fa;
  }
`;ne.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 2rem 1rem;
`;ne.div`
  max-width: 1100px;
  margin: 0 auto;
  background-color: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 0;
  }
`;ne(ud)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 1.5rem;
  color: #3498db;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;

  &:hover {
    color: #2980b9;
  }
`;ne.div`
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
`;ne.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;ne.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #7f8c8d;
  font-size: 1rem;
`;ne(xc)`
  color: #e74c3c;
`;ne.div`
  margin-bottom: 2rem;
`;ne.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;ne.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
  display: block;
`;ne.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  margin-bottom: 2rem;
`;ne.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;ne.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;ne(n0)`
  font-size: 1.2rem;
`;ne.span`
  font-size: 1rem;
  font-weight: 500;
  color: #7f8c8d;
  margin-left: 4px;
`;ne.div`
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
  background: ${t=>t.type==="sale"?"#e8f5e9":"#e3f2fd"};
  color: ${t=>t.type==="sale"?"#2e7d32":"#1565c0"};
`;ne.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;ne.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555;
  font-size: 1rem;
  font-weight: 500;
`;ne.div`
  color: #3498db;
  font-size: 1.1rem;
`;ne.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;ne.h3`
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 600;
  position: relative;
  padding-bottom: 8px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #3498db;
    border-radius: 3px;
  }
`;ne.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;ne.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;ne.span`
  font-size: 0.9rem;
  color: #7f8c8d;
  font-weight: 500;
`;ne.span`
  font-size: 1rem;
  color: #2c3e50;
  font-weight: 600;
`;ne.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
`;ne.div`
  padding: 10px 12px;
  background-color: #f8f9fa;
  border-radius: 6px;
  color: #444;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '✓';
    color: #27ae60;
    font-weight: bold;
  }
`;ne.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;ne.button`
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1rem;
  background-color: #3498db;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }
`;ne.button`
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1rem;
  background-color: white;
  color: #3498db;
  border: 2px solid #3498db;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: #f0f8ff;
    transform: translateY(-2px);
  }
`;ne.div`
  padding: 1rem;
  background-color: #e8f5e9;
  border-radius: 6px;
  color: #2e7d32;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
`;ne.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #f8f9fa;
`;ne.div`
  max-width: 600px;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;ne.div`
  color: #e74c3c;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #fde8e8;
  border-radius: 6px;
`;const RM=async t=>(console.log(t.params.Id),t.params.Id),CM=()=>{const[t,e]=D.useState(""),[n,a]=D.useState(""),s=wc(),l=cc();D.useEffect(()=>{s.isLoggedIn&&l("/")},[l,s]);const c=async p=>{p.preventDefault(),await s.signInEp(t,n)},d=async()=>{await s.signGoogle(t,n)};return y.jsxs(y.Fragment,{children:[y.jsx("style",{children:`
        .login-container {
          max-width: 400px;
          margin: 3rem auto;
          padding: 2rem;
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 6px 18px rgba(0,0,0,0.1);
          font-family: Arial, sans-serif;
        }

        .login-container h2 {
          text-align: center;
          margin-bottom: 2rem;
          color: #333;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
          color: #444;
          font-weight: 600;
        }

        input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 1rem;
        }

        input:focus {
          outline: none;
          border-color: #007bff;
        }

        .form-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .btn-primary,
        .btn-google,
        .btn-register {
          padding: 0.75rem;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .btn-primary {
          background-color: #007bff;
          color: white;
        }

        .btn-primary:hover {
          background-color: #0056b3;
        }

        .btn-google {
          background-color: #db4437;
          color: white;
        }

        .btn-google:hover {
          background-color: #c23321;
        }

        .btn-register {
          background-color: #28a745;
          color: white;
        }

        .btn-register:hover {
          background-color: #1e7e34;
        }

        .or-divider {
          text-align: center;
          color: #999;
        }
      `}),y.jsxs("div",{className:"login-container",children:[y.jsx("h2",{children:"Login"}),y.jsxs("form",{onSubmit:c,children:[y.jsxs("div",{className:"form-group",children:[y.jsx("label",{children:"Email"}),y.jsx("input",{type:"email",required:!0,value:t,placeholder:"Enter your email",onChange:p=>e(p.target.value)})]}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{children:"Password"}),y.jsx("input",{type:"password",required:!0,value:n,placeholder:"Enter your password",onChange:p=>a(p.target.value)})]}),y.jsxs("div",{className:"form-buttons",children:[y.jsx("button",{type:"submit",className:"btn-primary",children:"Login"}),y.jsx("div",{className:"or-divider",children:"or"}),y.jsx("button",{type:"button",className:"btn-google",onClick:d,children:"Sign in with Google"}),y.jsx("a",{href:"/Register",children:y.jsx("button",{type:"button",className:"btn-register",children:"For Register"})})]})]})]})]})};var og={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var eT;function IM(){return eT||(eT=1,function(t){(function(){var e={}.hasOwnProperty;function n(){for(var l="",c=0;c<arguments.length;c++){var d=arguments[c];d&&(l=s(l,a(d)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return n.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var c="";for(var d in l)e.call(l,d)&&l[d]&&(c=s(c,d));return c}function s(l,c){return c?l?l+" "+c:l+c:l}t.exports?(n.default=n,t.exports=n):window.classNames=n})()}(og)),og.exports}var NM=IM();const vt=ry(NM),DM=["as","disabled"];function OM(t,e){if(t==null)return{};var n={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function MM(t){return!t||t.trim()==="#"}function u0({tagName:t,disabled:e,href:n,target:a,rel:s,role:l,onClick:c,tabIndex:d=0,type:p}){t||(n!=null||a!=null||s!=null?t="a":t="button");const g={tagName:t};if(t==="button")return[{type:p||"button",disabled:e},g];const _=T=>{if((e||t==="a"&&MM(n))&&T.preventDefault(),e){T.stopPropagation();return}c?.(T)},w=T=>{T.key===" "&&(T.preventDefault(),_(T))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:l??"button",disabled:void 0,tabIndex:e?void 0:d,href:n,target:t==="a"?a:void 0,"aria-disabled":e||void 0,rel:t==="a"?s:void 0,onClick:_,onKeyDown:w},g]}const qx=D.forwardRef((t,e)=>{let{as:n,disabled:a}=t,s=OM(t,DM);const[l,{tagName:c}]=u0(Object.assign({tagName:n,disabled:a},s));return y.jsx(c,Object.assign({},s,l,{ref:e}))});qx.displayName="Button";const PM=["xxl","xl","lg","md","sm","xs"],jM="xs",Pd=D.createContext({prefixes:{},breakpoints:PM,minBreakpoint:jM}),{Consumer:ZP,Provider:JP}=Pd;function Ct(t,e){const{prefixes:n}=D.useContext(Pd);return t||n[e]||e}function kM(){const{breakpoints:t}=D.useContext(Pd);return t}function VM(){const{minBreakpoint:t}=D.useContext(Pd);return t}const Gx=D.forwardRef(({as:t,bsPrefix:e,variant:n="primary",size:a,active:s=!1,disabled:l=!1,className:c,...d},p)=>{const g=Ct(e,"btn"),[_,{tagName:w}]=u0({tagName:t,disabled:l,...d}),T=w;return y.jsx(T,{..._,...d,ref:p,disabled:l,className:vt(c,g,s&&"active",n&&`${g}-${n}`,a&&`${g}-${a}`,d.href&&l&&"disabled")})});Gx.displayName="Button";function LM({as:t,bsPrefix:e,className:n,...a}){e=Ct(e,"col");const s=kM(),l=VM(),c=[],d=[];return s.forEach(p=>{const g=a[p];delete a[p];let _,w,T;typeof g=="object"&&g!=null?{span:_,offset:w,order:T}=g:_=g;const A=p!==l?`-${p}`:"";_&&c.push(_===!0?`${e}${A}`:`${e}${A}-${_}`),T!=null&&d.push(`order${A}-${T}`),w!=null&&d.push(`offset${A}-${w}`)}),[{...a,className:vt(n,...c,...d)},{as:t,bsPrefix:e,spans:c}]}const rd=D.forwardRef((t,e)=>{const[{className:n,...a},{as:s="div",bsPrefix:l,spans:c}]=LM(t);return y.jsx(s,{...a,ref:e,className:vt(n,!c.length&&l)})});rd.displayName="Col";var lg={exports:{}},ug,tT;function UM(){if(tT)return ug;tT=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ug=t,ug}var cg,nT;function zM(){if(nT)return cg;nT=1;var t=UM();function e(){}function n(){}return n.resetWarningCache=e,cg=function(){function a(c,d,p,g,_,w){if(w!==t){var T=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw T.name="Invariant Violation",T}}a.isRequired=a;function s(){return a}var l={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:s,element:a,elementType:a,instanceOf:s,node:a,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:n,resetWarningCache:e};return l.PropTypes=l,l},cg}var rT;function BM(){return rT||(rT=1,lg.exports=zM()()),lg.exports}var FM=BM();const al=ry(FM),HM={type:al.string,tooltip:al.bool,as:al.elementType},jd=D.forwardRef(({as:t="div",className:e,type:n="valid",tooltip:a=!1,...s},l)=>y.jsx(t,{...s,ref:l,className:vt(e,`${n}-${a?"tooltip":"feedback"}`)}));jd.displayName="Feedback";jd.propTypes=HM;const ra=D.createContext({}),c0=D.forwardRef(({id:t,bsPrefix:e,className:n,type:a="checkbox",isValid:s=!1,isInvalid:l=!1,as:c="input",...d},p)=>{const{controlId:g}=D.useContext(ra);return e=Ct(e,"form-check-input"),y.jsx(c,{...d,ref:p,type:a,id:t||g,className:vt(n,e,s&&"is-valid",l&&"is-invalid")})});c0.displayName="FormCheckInput";const id=D.forwardRef(({bsPrefix:t,className:e,htmlFor:n,...a},s)=>{const{controlId:l}=D.useContext(ra);return t=Ct(t,"form-check-label"),y.jsx("label",{...a,ref:s,htmlFor:n||l,className:vt(e,t)})});id.displayName="FormCheckLabel";function qM(t,e){return D.Children.toArray(t).some(n=>D.isValidElement(n)&&n.type===e)}const $x=D.forwardRef(({id:t,bsPrefix:e,bsSwitchPrefix:n,inline:a=!1,reverse:s=!1,disabled:l=!1,isValid:c=!1,isInvalid:d=!1,feedbackTooltip:p=!1,feedback:g,feedbackType:_,className:w,style:T,title:A="",type:k="checkbox",label:H,children:O,as:$="input",...ee},X)=>{e=Ct(e,"form-check"),n=Ct(n,"form-switch");const{controlId:ce}=D.useContext(ra),ue=D.useMemo(()=>({controlId:t||ce}),[ce,t]),z=!O&&H!=null&&H!==!1||qM(O,id),N=y.jsx(c0,{...ee,type:k==="switch"?"checkbox":k,ref:X,isValid:c,isInvalid:d,disabled:l,as:$});return y.jsx(ra.Provider,{value:ue,children:y.jsx("div",{style:T,className:vt(w,z&&e,a&&`${e}-inline`,s&&`${e}-reverse`,k==="switch"&&n),children:O||y.jsxs(y.Fragment,{children:[N,z&&y.jsx(id,{title:A,children:H}),g&&y.jsx(jd,{type:_,tooltip:p,children:g})]})})})});$x.displayName="FormCheck";const ad=Object.assign($x,{Input:c0,Label:id}),Yx=D.forwardRef(({bsPrefix:t,type:e,size:n,htmlSize:a,id:s,className:l,isValid:c=!1,isInvalid:d=!1,plaintext:p,readOnly:g,as:_="input",...w},T)=>{const{controlId:A}=D.useContext(ra);return t=Ct(t,"form-control"),y.jsx(_,{...w,type:e,size:a,ref:T,readOnly:g,id:s||A,className:vt(l,p?`${t}-plaintext`:t,n&&`${t}-${n}`,e==="color"&&`${t}-color`,c&&"is-valid",d&&"is-invalid")})});Yx.displayName="FormControl";const GM=Object.assign(Yx,{Feedback:jd}),Kx=D.forwardRef(({className:t,bsPrefix:e,as:n="div",...a},s)=>(e=Ct(e,"form-floating"),y.jsx(n,{ref:s,className:vt(t,e),...a})));Kx.displayName="FormFloating";const h0=D.forwardRef(({controlId:t,as:e="div",...n},a)=>{const s=D.useMemo(()=>({controlId:t}),[t]);return y.jsx(ra.Provider,{value:s,children:y.jsx(e,{...n,ref:a})})});h0.displayName="FormGroup";const Qx=D.forwardRef(({as:t="label",bsPrefix:e,column:n=!1,visuallyHidden:a=!1,className:s,htmlFor:l,...c},d)=>{const{controlId:p}=D.useContext(ra);e=Ct(e,"form-label");let g="col-form-label";typeof n=="string"&&(g=`${g} ${g}-${n}`);const _=vt(s,e,a&&"visually-hidden",n&&g);return l=l||p,n?y.jsx(rd,{ref:d,as:"label",className:_,htmlFor:l,...c}):y.jsx(t,{ref:d,className:_,htmlFor:l,...c})});Qx.displayName="FormLabel";const Xx=D.forwardRef(({bsPrefix:t,className:e,id:n,...a},s)=>{const{controlId:l}=D.useContext(ra);return t=Ct(t,"form-range"),y.jsx("input",{...a,type:"range",ref:s,className:vt(e,t),id:n||l})});Xx.displayName="FormRange";const Wx=D.forwardRef(({bsPrefix:t,size:e,htmlSize:n,className:a,isValid:s=!1,isInvalid:l=!1,id:c,...d},p)=>{const{controlId:g}=D.useContext(ra);return t=Ct(t,"form-select"),y.jsx("select",{...d,size:n,ref:p,className:vt(a,t,e&&`${t}-${e}`,s&&"is-valid",l&&"is-invalid"),id:c||g})});Wx.displayName="FormSelect";const Zx=D.forwardRef(({bsPrefix:t,className:e,as:n="small",muted:a,...s},l)=>(t=Ct(t,"form-text"),y.jsx(n,{...s,ref:l,className:vt(e,t,a&&"text-muted")})));Zx.displayName="FormText";const Jx=D.forwardRef((t,e)=>y.jsx(ad,{...t,ref:e,type:"switch"}));Jx.displayName="Switch";const $M=Object.assign(Jx,{Input:ad.Input,Label:ad.Label}),e2=D.forwardRef(({bsPrefix:t,className:e,children:n,controlId:a,label:s,...l},c)=>(t=Ct(t,"form-floating"),y.jsxs(h0,{ref:c,className:vt(e,t),controlId:a,...l,children:[n,y.jsx("label",{htmlFor:a,children:s})]})));e2.displayName="FloatingLabel";const YM={_ref:al.any,validated:al.bool,as:al.elementType},f0=D.forwardRef(({className:t,validated:e,as:n="form",...a},s)=>y.jsx(n,{...a,ref:s,className:vt(t,e&&"was-validated")}));f0.displayName="Form";f0.propTypes=YM;const $i=Object.assign(f0,{Group:h0,Control:GM,Floating:Kx,Check:ad,Switch:$M,Label:Qx,Text:Zx,Range:Xx,Select:Wx,FloatingLabel:e2});function ey(){return ey=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)({}).hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},ey.apply(null,arguments)}function KM(t,e){if(t==null)return{};var n={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(e.indexOf(a)!==-1)continue;n[a]=t[a]}return n}function iT(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function QM(t){var e=XM(t,"string");return typeof e=="symbol"?e:String(e)}function XM(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function WM(t,e,n){var a=D.useRef(t!==void 0),s=D.useState(e),l=s[0],c=s[1],d=t!==void 0,p=a.current;return a.current=d,!d&&p&&l!==e&&c(e),[d?t:l,D.useCallback(function(g){for(var _=arguments.length,w=new Array(_>1?_-1:0),T=1;T<_;T++)w[T-1]=arguments[T];n&&n.apply(void 0,[g].concat(w)),c(g)},[n])]}function ZM(t,e){return Object.keys(e).reduce(function(n,a){var s,l=n,c=l[iT(a)],d=l[a],p=KM(l,[iT(a),a].map(QM)),g=e[a],_=WM(d,c,t[g]),w=_[0],T=_[1];return ey({},p,(s={},s[a]=w,s[g]=T,s))},t)}const t2=t=>D.forwardRef((e,n)=>y.jsx("div",{...e,ref:n,className:vt(e.className,t)}));function JM(t){const e=D.useRef(t);return D.useEffect(()=>{e.current=t},[t]),e}function n2(t){const e=JM(t);return D.useCallback(function(...n){return e.current&&e.current(...n)},[e])}const eP=["onKeyDown"];function tP(t,e){if(t==null)return{};var n={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function nP(t){return!t||t.trim()==="#"}const r2=D.forwardRef((t,e)=>{let{onKeyDown:n}=t,a=tP(t,eP);const[s]=u0(Object.assign({tagName:"a"},a)),l=n2(c=>{s.onKeyDown(c),n?.(c)});return nP(a.href)||a.role==="button"?y.jsx("a",Object.assign({ref:e},a,s,{onKeyDown:l})):y.jsx("a",Object.assign({ref:e},a,{onKeyDown:n}))});r2.displayName="Anchor";const ty=D.forwardRef(({bsPrefix:t,bg:e="primary",pill:n=!1,text:a,className:s,as:l="span",...c},d)=>{const p=Ct(t,"badge");return y.jsx(l,{ref:d,...c,className:vt(s,p,n&&"rounded-pill",a&&`text-${a}`,e&&`bg-${e}`)})});ty.displayName="Badge";const d0=D.forwardRef(({className:t,bsPrefix:e,as:n="div",...a},s)=>(e=Ct(e,"card-body"),y.jsx(n,{ref:s,className:vt(t,e),...a})));d0.displayName="CardBody";const i2=D.forwardRef(({className:t,bsPrefix:e,as:n="div",...a},s)=>(e=Ct(e,"card-footer"),y.jsx(n,{ref:s,className:vt(t,e),...a})));i2.displayName="CardFooter";const m0=D.createContext(null);m0.displayName="CardHeaderContext";const a2=D.forwardRef(({bsPrefix:t,className:e,as:n="div",...a},s)=>{const l=Ct(t,"card-header"),c=D.useMemo(()=>({cardHeaderBsPrefix:l}),[l]);return y.jsx(m0.Provider,{value:c,children:y.jsx(n,{ref:s,...a,className:vt(e,l)})})});a2.displayName="CardHeader";const s2=D.forwardRef(({bsPrefix:t,className:e,variant:n,as:a="img",...s},l)=>{const c=Ct(t,"card-img");return y.jsx(a,{ref:l,className:vt(n?`${c}-${n}`:c,e),...s})});s2.displayName="CardImg";const o2=D.forwardRef(({className:t,bsPrefix:e,as:n="div",...a},s)=>(e=Ct(e,"card-img-overlay"),y.jsx(n,{ref:s,className:vt(t,e),...a})));o2.displayName="CardImgOverlay";const l2=D.forwardRef(({className:t,bsPrefix:e,as:n="a",...a},s)=>(e=Ct(e,"card-link"),y.jsx(n,{ref:s,className:vt(t,e),...a})));l2.displayName="CardLink";const rP=t2("h6"),u2=D.forwardRef(({className:t,bsPrefix:e,as:n=rP,...a},s)=>(e=Ct(e,"card-subtitle"),y.jsx(n,{ref:s,className:vt(t,e),...a})));u2.displayName="CardSubtitle";const c2=D.forwardRef(({className:t,bsPrefix:e,as:n="p",...a},s)=>(e=Ct(e,"card-text"),y.jsx(n,{ref:s,className:vt(t,e),...a})));c2.displayName="CardText";const iP=t2("h5"),h2=D.forwardRef(({className:t,bsPrefix:e,as:n=iP,...a},s)=>(e=Ct(e,"card-title"),y.jsx(n,{ref:s,className:vt(t,e),...a})));h2.displayName="CardTitle";const f2=D.forwardRef(({bsPrefix:t,className:e,bg:n,text:a,border:s,body:l=!1,children:c,as:d="div",...p},g)=>{const _=Ct(t,"card");return y.jsx(d,{ref:g,...p,className:vt(e,_,n&&`bg-${n}`,a&&`text-${a}`,s&&`border-${s}`),children:l?y.jsx(d0,{children:c}):c})});f2.displayName="Card";const hg=Object.assign(f2,{Img:s2,Title:h2,Subtitle:u2,Body:d0,Link:l2,Text:c2,Header:a2,Footer:i2,ImgOverlay:o2});var aP=Function.prototype.bind.call(Function.prototype.call,[].slice);function sP(t,e){return aP(t.querySelectorAll(e))}function oP(){const[,t]=D.useReducer(e=>e+1,0);return t}const ny=D.createContext(null),p0=(t,e=null)=>t!=null?String(t):e||null,g0=D.createContext(null);g0.displayName="NavContext";const lP="data-rr-ui-",uP="rrUi";function y0(t){return`${lP}${t}`}function cP(t){return`${uP}${t}`}const d2=D.createContext(null);d2.displayName="NavbarContext";const aT=t=>!t||typeof t=="function"?t:e=>{t.current=e};function hP(t,e){const n=aT(t),a=aT(e);return s=>{n&&n(s),a&&a(s)}}function fP(t,e){return D.useMemo(()=>hP(t,e),[t,e])}const m2=D.createContext(null),dP=["as","active","eventKey"];function mP(t,e){if(t==null)return{};var n={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function p2({key:t,onClick:e,active:n,id:a,role:s,disabled:l}){const c=D.useContext(ny),d=D.useContext(g0),p=D.useContext(m2);let g=n;const _={role:s};if(d){!s&&d.role==="tablist"&&(_.role="tab");const w=d.getControllerId(t??null),T=d.getControlledId(t??null);_[y0("event-key")]=t,_.id=w||a,g=n==null&&t!=null?d.activeKey===t:n,(g||!(p!=null&&p.unmountOnExit)&&!(p!=null&&p.mountOnEnter))&&(_["aria-controls"]=T)}return _.role==="tab"&&(_["aria-selected"]=g,g||(_.tabIndex=-1),l&&(_.tabIndex=-1,_["aria-disabled"]=!0)),_.onClick=n2(w=>{l||(e?.(w),t!=null&&c&&!w.isPropagationStopped()&&c(t,w))}),[_,{isActive:g}]}const g2=D.forwardRef((t,e)=>{let{as:n=qx,active:a,eventKey:s}=t,l=mP(t,dP);const[c,d]=p2(Object.assign({key:p0(s,l.href),active:a},l));return c[y0("active")]=d.isActive,y.jsx(n,Object.assign({},l,c,{ref:e}))});g2.displayName="NavItem";const pP=["as","onSelect","activeKey","role","onKeyDown"];function gP(t,e){if(t==null)return{};var n={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}const sT=()=>{},oT=y0("event-key"),y2=D.forwardRef((t,e)=>{let{as:n="div",onSelect:a,activeKey:s,role:l,onKeyDown:c}=t,d=gP(t,pP);const p=oP(),g=D.useRef(!1),_=D.useContext(ny),w=D.useContext(m2);let T,A;w&&(l=l||"tablist",s=w.activeKey,T=w.getControlledId,A=w.getControllerId);const k=D.useRef(null),H=X=>{const ce=k.current;if(!ce)return null;const ue=sP(ce,`[${oT}]:not([aria-disabled=true])`),z=ce.querySelector("[aria-selected=true]");if(!z||z!==document.activeElement)return null;const N=ue.indexOf(z);if(N===-1)return null;let R=N+X;return R>=ue.length&&(R=0),R<0&&(R=ue.length-1),ue[R]},O=(X,ce)=>{X!=null&&(a?.(X,ce),_?.(X,ce))},$=X=>{if(c?.(X),!w)return;let ce;switch(X.key){case"ArrowLeft":case"ArrowUp":ce=H(-1);break;case"ArrowRight":case"ArrowDown":ce=H(1);break;default:return}ce&&(X.preventDefault(),O(ce.dataset[cP("EventKey")]||null,X),g.current=!0,p())};D.useEffect(()=>{if(k.current&&g.current){const X=k.current.querySelector(`[${oT}][aria-selected=true]`);X?.focus()}g.current=!1});const ee=fP(e,k);return y.jsx(ny.Provider,{value:O,children:y.jsx(g0.Provider,{value:{role:l,activeKey:p0(s),getControlledId:T||sT,getControllerId:A||sT},children:y.jsx(n,Object.assign({},d,{onKeyDown:$,ref:ee,role:l}))})})});y2.displayName="Nav";const yP=Object.assign(y2,{Item:g2}),v2=D.forwardRef(({className:t,bsPrefix:e,as:n="div",...a},s)=>(e=Ct(e,"nav-item"),y.jsx(n,{ref:s,className:vt(t,e),...a})));v2.displayName="NavItem";const _2=D.forwardRef(({bsPrefix:t,className:e,as:n=r2,active:a,eventKey:s,disabled:l=!1,...c},d)=>{t=Ct(t,"nav-link");const[p,g]=p2({key:p0(s,c.href),active:a,disabled:l,...c});return y.jsx(n,{...c,...p,ref:d,disabled:l,className:vt(e,t,l&&"disabled",g.isActive&&"active")})});_2.displayName="NavLink";const b2=D.forwardRef((t,e)=>{const{as:n="div",bsPrefix:a,variant:s,fill:l=!1,justify:c=!1,navbar:d,navbarScroll:p,className:g,activeKey:_,...w}=ZM(t,{activeKey:"onSelect"}),T=Ct(a,"nav");let A,k,H=!1;const O=D.useContext(d2),$=D.useContext(m0);return O?(A=O.bsPrefix,H=d??!0):$&&({cardHeaderBsPrefix:k}=$),y.jsx(yP,{as:n,ref:e,activeKey:_,className:vt(g,{[T]:!H,[`${A}-nav`]:H,[`${A}-nav-scroll`]:H&&p,[`${k}-${s}`]:!!k,[`${T}-${s}`]:!!s,[`${T}-fill`]:l,[`${T}-justified`]:c}),...w})});b2.displayName="Nav";const vP=Object.assign(b2,{Item:v2,Link:_2}),_P=()=>{const[t,e]=D.useState(!1),[n,a]=D.useState(""),[s,l]=D.useState(""),c=wc(),d=cc();D.useEffect(()=>{c.isLoggedIn&&d("/")},[d,c]);const p=async g=>{g.preventDefault(),g.currentTarget.checkValidity()===!1?g.stopPropagation():await c.signUpEp(n,s),e(!0)};return y.jsxs(y.Fragment,{children:[y.jsx("style",{children:`
        .register-container {
          max-width: 480px;
          margin: 40px auto;
          padding: 30px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
        }

        .register-container h2 {
          text-align: center;
          margin-bottom: 24px;
          font-size: 26px;
          color: #333;
        }

        .form-group {
          margin-bottom: 16px;
        }

        label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          font-size: 14px;
        }

        input[type="email"],
        input[type="password"] {
          width: 100%;
          padding: 10px 12px;
          font-size: 14px;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-sizing: border-box;
        }

        .btn {
          display: inline-block;
          width: 100%;
          padding: 12px;
          font-size: 15px;
          font-weight: bold;
          text-align: center;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 10px;
        }

        .btn-success {
          background-color: #28a745;
          color: white;
        }

        .btn-danger {
          background-color: #dc3545;
          color: white;
        }

        .btn:hover {
          opacity: 0.9;
        }

        .nav-button {
          margin-top: 12px;
        }
      `}),y.jsxs("div",{className:"register-container",children:[y.jsx("h2",{children:"Register"}),y.jsxs($i,{noValidate:!0,validated:t,onSubmit:p,children:[y.jsxs($i.Group,{as:rd,md:"12",controlId:"validationCustom01",className:"form-group",children:[y.jsx($i.Label,{children:"Email"}),y.jsx($i.Control,{required:!0,type:"email",placeholder:"Enter your email",value:n,onChange:g=>a(g.target.value)}),y.jsx($i.Control.Feedback,{type:"invalid",children:"Please enter a valid email."})]}),y.jsxs($i.Group,{as:rd,md:"12",controlId:"validationCustom02",className:"form-group",children:[y.jsx($i.Label,{children:"Password"}),y.jsx($i.Control,{required:!0,type:"password",placeholder:"Enter your password",value:s,onChange:g=>l(g.target.value)}),y.jsx($i.Control.Feedback,{type:"invalid",children:"Please enter your password."})]}),y.jsx("button",{type:"submit",className:"btn btn-success",children:"Register Now"}),y.jsx(vP.Link,{href:"/Login",className:"nav-button",children:y.jsx("button",{type:"button",className:"btn btn-danger",children:"For Login"})})]})]})]})},bP=({property:t})=>{const[e,n]=D.useState(!1),a=t.image||"/property.jpg",s=t.rating||4.5,l=Array(5).fill(0).map((c,d)=>y.jsx(n8,{className:d<Math.floor(s)?"text-warning":"text-muted",style:{fontSize:"0.95rem",marginRight:"1px"}},d));return y.jsxs(hg,{style:{width:"100%",maxWidth:"24rem",margin:"0.75rem auto",border:"none",borderRadius:"16px",overflow:"hidden",boxShadow:"0 5px 18px rgba(0,0,0,0.08)",fontFamily:"'Inter', sans-serif",transition:"transform 0.3s ease, box-shadow 0.3s ease"},children:[y.jsxs("div",{style:{position:"relative"},children:[y.jsx(hg.Img,{variant:"top",src:a,alt:t.title,style:{height:"260px",objectFit:"cover",width:"100%"}}),y.jsxs("div",{style:{position:"absolute",top:"16px",left:"16px",display:"flex",gap:"8px",flexWrap:"wrap"},children:[t.isFeatured&&y.jsx(ty,{pill:!0,bg:"danger",style:{fontSize:"0.72rem",fontWeight:"700",padding:"6px 12px"},children:"FEATURED"}),y.jsx(ty,{pill:!0,style:{fontSize:"0.72rem",fontWeight:"700",padding:"6px 12px",backgroundColor:t.transaction_type==="Rent"?"#00b894":"#0984e3"},children:t.transaction_type?.toUpperCase()||"SALE"})]}),y.jsx("button",{onClick:()=>n(!e),style:{position:"absolute",top:"16px",right:"16px",background:"rgba(255,255,255,0.95)",border:"none",borderRadius:"50%",width:"38px",height:"38px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 3px 8px rgba(0,0,0,0.15)"},children:y.jsx(px,{color:e?"#ff4757":"#555",style:{fontSize:"1.05rem"}})})]}),y.jsxs(hg.Body,{style:{padding:"1.5rem"},children:[y.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"1rem"},children:[y.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:"700",color:"#222",margin:0,lineHeight:"1.4",flex:1,paddingRight:"0.75rem"},children:t.title}),y.jsx("button",{style:{background:"none",border:"none",color:"#666",padding:"6px",borderRadius:"50%",cursor:"pointer",flexShrink:0},children:y.jsx(t8,{style:{fontSize:"1rem"}})})]}),y.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"0.9rem"},children:[y.jsx(xc,{style:{color:"#e84393",fontSize:"0.95rem",marginRight:"0.5rem"}}),y.jsx("p",{style:{fontSize:"0.92rem",color:"#555",margin:0,lineHeight:"1.5"},children:t.address})]}),y.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"1.25rem"},children:[y.jsx("div",{style:{display:"flex",marginRight:"0.5rem"},children:l}),y.jsxs("span",{style:{fontSize:"0.88rem",color:"#666",fontWeight:"500"},children:[s.toFixed(1)," (",t.reviews||12," reviews)"]})]}),y.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"0.75rem",padding:"1rem 0",borderTop:"1px solid #f0f0f0",borderBottom:"1px solid #f0f0f0"},children:[{value:t.bedrooms||3,label:"Beds"},{value:t.bathrooms||2,label:"Baths"},{value:t.area_sqft||1200,label:"Sqft"},{value:t.year_built||2020,label:"Built"}].map((c,d)=>y.jsxs("div",{style:{textAlign:"center"},children:[y.jsx("div",{style:{fontSize:"1.15rem",fontWeight:"700",color:"#0984e3"},children:c.value}),y.jsx("div",{style:{fontSize:"0.78rem",color:"#666",fontWeight:"600",textTransform:"uppercase"},children:c.label})]},d))}),y.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"1.2rem"},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[y.jsx(n0,{style:{color:"#00b894",marginRight:"0.3rem",fontSize:"1rem"}}),y.jsxs("div",{style:{fontSize:"1.35rem",fontWeight:"700",color:"#00b894"},children:[Number(t.price).toLocaleString("en-IN"),y.jsx("span",{style:{fontSize:"0.88rem",color:"#666",fontWeight:"500",marginLeft:"0.4rem"},children:t.price_units?`/${t.price_units}`:""})]})]}),y.jsx(qt,{to:`/Cards/${t.id}`,style:{textDecoration:"none"},children:y.jsx(Gx,{variant:"primary",style:{fontWeight:"600",background:"linear-gradient(135deg, #6c5ce7, #8c7ae6)",border:"none",padding:"0.55rem 1.3rem",fontSize:"0.92rem",borderRadius:"30px",boxShadow:"0 4px 12px rgba(108, 92, 231, 0.25)"},children:"View Details"})})]})]})]})},EP=()=>{const[t,e]=D.useState([]),n=wc();return D.useEffect(()=>{n.getLists().then(a=>{console.log(a);const s=a.docs.map(l=>({id:l.id,...l.data()}));e(s)})},[]),y.jsxs(y.Fragment,{children:[y.jsx("style",{children:`
                .container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 1.5rem;
                    padding: 2rem 1rem;
                    max-width: 1200px;
                    margin: auto;
                }

                h1 {
                    text-align: center;
                    margin-top: 1rem;
                    font-size: 2.5rem;
                    color: #343a40;
                }

                button {
                    display: block;
                    margin: 1rem auto;
                    padding: 0.5rem 1.2rem;
                    background-color: #dc3545;
                    border: none;
                    color: white;
                    font-size: 1rem;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                button:hover {
                    background-color: #c82333;
                }
            `}),y.jsx("h1",{children:"Welcome to Cards page"}),y.jsx("div",{className:"container",children:t.map(a=>y.jsx(bP,{property:a},a.id))})]})},TP=Hx`
  body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f8f9fa;
  }
`,wP=ne.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 2rem 1rem;
`,SP=ne.div`
  max-width: 1100px;
  margin: 0 auto;
  background-color: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 0;
  }
`,lT=ne(ud)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 1.5rem;
  color: #3498db;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;

  &:hover {
    color: #2980b9;
  }
`,xP=ne.div`
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
`,AP=ne.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`,RP=ne.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #7f8c8d;
  font-size: 1rem;
`;ne(xc)`
  color: #e74c3c;
`;const CP=ne.div`
  margin-bottom: 2rem;
`,IP=ne.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,NP=ne.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
  display: block;
`,DP=ne.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  margin-bottom: 2rem;
`,OP=ne.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,MP=ne.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`,PP=ne(n0)`
  font-size: 1.2rem;
`,jP=ne.span`
  font-size: 1rem;
  font-weight: 500;
  color: #7f8c8d;
  margin-left: 4px;
`,kP=ne.div`
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
  background: ${t=>t.type==="sale"?"#e8f5e9":"#e3f2fd"};
  color: ${t=>t.type==="sale"?"#2e7d32":"#1565c0"};
`,VP=ne.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`,fg=ne.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555;
  font-size: 1rem;
  font-weight: 500;
`,dg=ne.div`
  color: #3498db;
  font-size: 1.1rem;
`,LP=ne.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,mg=ne.h3`
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 600;
  position: relative;
  padding-bottom: 8px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #3498db;
    border-radius: 3px;
  }
`,UP=ne.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`,af=ne.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,sf=ne.span`
  font-size: 0.9rem;
  color: #7f8c8d;
  font-weight: 500;
`,of=ne.span`
  font-size: 1rem;
  color: #2c3e50;
  font-weight: 600;
`,zP=ne.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
`,BP=ne.div`
  padding: 10px 12px;
  background-color: #f8f9fa;
  border-radius: 6px;
  color: #444;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '✓';
    color: #27ae60;
    font-weight: bold;
  }
`,FP=ne.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,HP=ne.button`
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1rem;
  background-color: #3498db;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }
`,qP=ne.button`
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1rem;
  background-color: white;
  color: #3498db;
  border: 2px solid #3498db;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: #f0f8ff;
    transform: translateY(-2px);
  }
`,GP=ne.div`
  padding: 1rem;
  background-color: #e8f5e9;
  border-radius: 6px;
  color: #2e7d32;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
`,uT=ne.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #f8f9fa;
`,cT=ne.div`
  max-width: 600px;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`,hT=ne.div`
  color: #e74c3c;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #fde8e8;
  border-radius: 6px;
`,$P=()=>{const t=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],e=["10:00 AM","11:30 AM","2:00 PM","3:30 PM","5:00 PM"],n=t[Math.floor(Math.random()*t.length)],a=e[Math.floor(Math.random()*e.length)],s=new Date;let l=(t.indexOf(n)+7-s.getDay())%7;l===0&&(l=7);const c=new Date(s);c.setDate(s.getDate()+l);const d=c.toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"});return{day:n,time:a,fullDate:d,timestamp:`${d} at ${a}`}},fT=(t,e)=>{const n="+919043531165",a=`Hello, I'm interested in your property "${t.title}" (${t.address}). I would like to schedule a visit on ${e.timestamp}. Please confirm if this time works for you.`,s=encodeURIComponent(a),l=`https://wa.me/${n}?text=${s}`;window.open(l,"_blank")},YP=()=>{const t=g4(),e=wc(),[n,a]=D.useState(null),[s,l]=D.useState(null),[c,d]=D.useState(null),[p,g]=D.useState(!1);D.useEffect(()=>{e.getLists().then(T=>{const k=T.docs.map(H=>({id:H.id,...H.data()})).find(H=>H.id===t);k?a(k):l(`No property found with ID: ${t}`)}).catch(T=>{console.error(T),l("Failed to fetch property data.")})},[t,e]);const _=(T,A)=>A==="crore"?`${T} Crore`:A==="lakh/month"?`${T} Lakh/month`:A==="month"?`${T.toLocaleString("en-IN")}/month`:T;console.log(n.image);const w=()=>{const T=$P();d(T),g(!0),fT(n,T)};return s?y.jsx(uT,{children:y.jsxs(cT,{children:[y.jsxs(hT,{children:["Error: ",s]}),y.jsxs(lT,{to:"/Cards",children:[y.jsx(PE,{})," Back to Listings"]})]})}):n?y.jsxs(y.Fragment,{children:[y.jsx(TP,{}),y.jsx(wP,{children:y.jsxs(SP,{children:[y.jsxs(lT,{to:"/Cards",children:[y.jsx(PE,{})," Back to Listings"]}),y.jsxs(xP,{children:[y.jsx(AP,{children:n.title}),y.jsxs(RP,{children:[y.jsx(xc,{}),y.jsxs("span",{children:[n.address,", ",n.city,", ",n.state,", ",n.country]})]})]}),y.jsx(CP,{children:y.jsx(IP,{children:y.jsx(NP,{src:n.image,alt:n.title,onError:T=>{T.target.onerror=null,T.target.src="https://placehold.co/800x500?text=No+Image"}})})}),y.jsxs(DP,{children:[y.jsxs(OP,{children:[y.jsxs(MP,{children:[y.jsx(PP,{}),y.jsx("span",{children:_(n.price,n.price_units)}),n.transaction_type==="Rent"&&y.jsx(jP,{children:"/month"})]}),y.jsx(kP,{type:n.transaction_type.toLowerCase(),children:n.transaction_type})]}),y.jsxs(VP,{children:[n.bedrooms&&y.jsxs(fg,{children:[y.jsx(dg,{as:mx}),y.jsxs("span",{children:[n.bedrooms," Beds"]})]}),n.bathrooms&&y.jsxs(fg,{children:[y.jsx(dg,{as:dx}),y.jsxs("span",{children:[n.bathrooms," Baths"]})]}),n.area_sqft&&y.jsxs(fg,{children:[y.jsx(dg,{as:gx}),y.jsxs("span",{children:[n.area_sqft.toLocaleString("en-IN")," sq.ft."]})]})]})]}),y.jsxs(LP,{children:[y.jsxs("div",{children:[y.jsx(mg,{children:"Property Details"}),y.jsxs(UP,{children:[y.jsxs(af,{children:[y.jsx(sf,{children:"Type"}),y.jsx(of,{children:n.type})]}),y.jsxs(af,{children:[y.jsx(sf,{children:"Furnishing"}),y.jsx(of,{children:n.furnishing||"N/A"})]}),n.year_built&&y.jsxs(af,{children:[y.jsx(sf,{children:"Year Built"}),y.jsx(of,{children:n.year_built})]}),n.builder&&y.jsxs(af,{children:[y.jsx(sf,{children:"Builder"}),y.jsx(of,{children:n.builder})]})]})]}),n.amenities?.length>0&&y.jsxs("div",{children:[y.jsx(mg,{children:"Amenities"}),y.jsx(zP,{children:n.amenities.map((T,A)=>y.jsx(BP,{children:T},A))})]}),y.jsxs(FP,{children:[y.jsx(mg,{children:"Interested in this property?"}),y.jsxs(HP,{onClick:()=>fT(n,{timestamp:"soon"}),children:[y.jsx(QO,{})," Contact Agent"]}),y.jsxs(qP,{onClick:w,children:[y.jsx(qg,{})," Schedule Visit"]}),p&&c&&y.jsxs(GP,{children:[y.jsx(qg,{}),y.jsxs("span",{children:["Visit scheduled for ",c.timestamp,". WhatsApp message sent to owner."]})]})]})]})]})})]}):y.jsx(uT,{children:y.jsx(cT,{children:y.jsx(hT,{children:"Loading property details..."})})})},KP=()=>{const t=K4([{path:"/",element:y.jsx(BO,{}),errorElement:y.jsx(w8,{}),children:[{path:"/",element:y.jsx(E8,{})},{path:"/About",element:y.jsx(rM,{})},{path:"/Contact",element:y.jsx(xM,{})},{path:"/SearchPage",element:y.jsx(T8,{})},{path:"/Cards",element:y.jsx(EP,{})},{path:"/Cards/:Id",element:y.jsx(YP,{}),loader:RM},{path:"/AddPropr",element:y.jsx(AM,{})}]},{path:"/Register",element:y.jsx(_P,{})},{path:"/Login",element:y.jsx(CM,{})}]);return y.jsx(y.Fragment,{children:y.jsx(sC,{router:t})})};JA.createRoot(document.getElementById("root")).render(y.jsx(D.StrictMode,{children:y.jsx(LO,{children:y.jsx(KP,{})})}));
