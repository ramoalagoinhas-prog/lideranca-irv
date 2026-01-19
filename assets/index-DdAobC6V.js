(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function dR(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var F0={exports:{}},oh={},U0={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pu=Symbol.for("react.element"),hR=Symbol.for("react.portal"),fR=Symbol.for("react.fragment"),pR=Symbol.for("react.strict_mode"),mR=Symbol.for("react.profiler"),gR=Symbol.for("react.provider"),yR=Symbol.for("react.context"),_R=Symbol.for("react.forward_ref"),vR=Symbol.for("react.suspense"),wR=Symbol.for("react.memo"),IR=Symbol.for("react.lazy"),M_=Symbol.iterator;function ER(n){return n===null||typeof n!="object"?null:(n=M_&&n[M_]||n["@@iterator"],typeof n=="function"?n:null)}var B0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z0=Object.assign,$0={};function fa(n,e,t){this.props=n,this.context=e,this.refs=$0,this.updater=t||B0}fa.prototype.isReactComponent={};fa.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};fa.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function q0(){}q0.prototype=fa.prototype;function jm(n,e,t){this.props=n,this.context=e,this.refs=$0,this.updater=t||B0}var Fm=jm.prototype=new q0;Fm.constructor=jm;z0(Fm,fa.prototype);Fm.isPureReactComponent=!0;var j_=Array.isArray,W0=Object.prototype.hasOwnProperty,Um={current:null},G0={key:!0,ref:!0,__self:!0,__source:!0};function K0(n,e,t){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)W0.call(e,r)&&!G0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(n&&n.defaultProps)for(r in a=n.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Pu,type:n,key:s,ref:o,props:i,_owner:Um.current}}function TR(n,e){return{$$typeof:Pu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Bm(n){return typeof n=="object"&&n!==null&&n.$$typeof===Pu}function xR(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var F_=/\/+/g;function hf(n,e){return typeof n=="object"&&n!==null&&n.key!=null?xR(""+n.key):e.toString(36)}function Wc(n,e,t,r,i){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Pu:case hR:o=!0}}if(o)return o=n,i=i(o),n=r===""?"."+hf(o,0):r,j_(i)?(t="",n!=null&&(t=n.replace(F_,"$&/")+"/"),Wc(i,e,t,"",function(c){return c})):i!=null&&(Bm(i)&&(i=TR(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(F_,"$&/")+"/")+n)),e.push(i)),1;if(o=0,r=r===""?".":r+":",j_(n))for(var a=0;a<n.length;a++){s=n[a];var u=r+hf(s,a);o+=Wc(s,e,t,u,i)}else if(u=ER(n),typeof u=="function")for(n=u.call(n),a=0;!(s=n.next()).done;)s=s.value,u=r+hf(s,a++),o+=Wc(s,e,t,u,i);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wc(n,e,t){if(n==null)return n;var r=[],i=0;return Wc(n,r,"","",function(s){return e.call(t,s,i++)}),r}function SR(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Ht={current:null},Gc={transition:null},AR={ReactCurrentDispatcher:Ht,ReactCurrentBatchConfig:Gc,ReactCurrentOwner:Um};function H0(){throw Error("act(...) is not supported in production builds of React.")}de.Children={map:wc,forEach:function(n,e,t){wc(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return wc(n,function(){e++}),e},toArray:function(n){return wc(n,function(e){return e})||[]},only:function(n){if(!Bm(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};de.Component=fa;de.Fragment=fR;de.Profiler=mR;de.PureComponent=jm;de.StrictMode=pR;de.Suspense=vR;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AR;de.act=H0;de.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var r=z0({},n.props),i=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Um.current),e.key!==void 0&&(i=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(u in e)W0.call(e,u)&&!G0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Pu,type:n.type,key:i,ref:s,props:r,_owner:o}};de.createContext=function(n){return n={$$typeof:yR,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:gR,_context:n},n.Consumer=n};de.createElement=K0;de.createFactory=function(n){var e=K0.bind(null,n);return e.type=n,e};de.createRef=function(){return{current:null}};de.forwardRef=function(n){return{$$typeof:_R,render:n}};de.isValidElement=Bm;de.lazy=function(n){return{$$typeof:IR,_payload:{_status:-1,_result:n},_init:SR}};de.memo=function(n,e){return{$$typeof:wR,type:n,compare:e===void 0?null:e}};de.startTransition=function(n){var e=Gc.transition;Gc.transition={};try{n()}finally{Gc.transition=e}};de.unstable_act=H0;de.useCallback=function(n,e){return Ht.current.useCallback(n,e)};de.useContext=function(n){return Ht.current.useContext(n)};de.useDebugValue=function(){};de.useDeferredValue=function(n){return Ht.current.useDeferredValue(n)};de.useEffect=function(n,e){return Ht.current.useEffect(n,e)};de.useId=function(){return Ht.current.useId()};de.useImperativeHandle=function(n,e,t){return Ht.current.useImperativeHandle(n,e,t)};de.useInsertionEffect=function(n,e){return Ht.current.useInsertionEffect(n,e)};de.useLayoutEffect=function(n,e){return Ht.current.useLayoutEffect(n,e)};de.useMemo=function(n,e){return Ht.current.useMemo(n,e)};de.useReducer=function(n,e,t){return Ht.current.useReducer(n,e,t)};de.useRef=function(n){return Ht.current.useRef(n)};de.useState=function(n){return Ht.current.useState(n)};de.useSyncExternalStore=function(n,e,t){return Ht.current.useSyncExternalStore(n,e,t)};de.useTransition=function(){return Ht.current.useTransition()};de.version="18.3.1";U0.exports=de;var se=U0.exports;const RR=dR(se);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kR=se,PR=Symbol.for("react.element"),bR=Symbol.for("react.fragment"),NR=Object.prototype.hasOwnProperty,CR=kR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,DR={key:!0,ref:!0,__self:!0,__source:!0};function Q0(n,e,t){var r,i={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)NR.call(e,r)&&!DR.hasOwnProperty(r)&&(i[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:PR,type:n,key:s,ref:o,props:i,_owner:CR.current}}oh.Fragment=bR;oh.jsx=Q0;oh.jsxs=Q0;F0.exports=oh;var h=F0.exports,rp={},Y0={exports:{}},_n={},J0={exports:{}},X0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(j,Q){var re=j.length;j.push(Q);e:for(;0<re;){var ue=re-1>>>1,Ie=j[ue];if(0<i(Ie,Q))j[ue]=Q,j[re]=Ie,re=ue;else break e}}function t(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var Q=j[0],re=j.pop();if(re!==Q){j[0]=re;e:for(var ue=0,Ie=j.length,ye=Ie>>>1;ue<ye;){var Yt=2*(ue+1)-1,In=j[Yt],Et=Yt+1,ln=j[Et];if(0>i(In,re))Et<Ie&&0>i(ln,In)?(j[ue]=ln,j[Et]=re,ue=Et):(j[ue]=In,j[Yt]=re,ue=Yt);else if(Et<Ie&&0>i(ln,re))j[ue]=ln,j[Et]=re,ue=Et;else break e}}return Q}function i(j,Q){var re=j.sortIndex-Q.sortIndex;return re!==0?re:j.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var u=[],c=[],f=1,m=null,g=3,E=!1,b=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(j){for(var Q=t(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=j)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=t(c)}}function L(j){if(N=!1,A(j),!b)if(t(u)!==null)b=!0,zr(z);else{var Q=t(c);Q!==null&&wn(L,Q.startTime-j)}}function z(j,Q){b=!1,N&&(N=!1,S(_),_=-1),E=!0;var re=g;try{for(A(Q),m=t(u);m!==null&&(!(m.expirationTime>Q)||j&&!k());){var ue=m.callback;if(typeof ue=="function"){m.callback=null,g=m.priorityLevel;var Ie=ue(m.expirationTime<=Q);Q=n.unstable_now(),typeof Ie=="function"?m.callback=Ie:m===t(u)&&r(u),A(Q)}else r(u);m=t(u)}if(m!==null)var ye=!0;else{var Yt=t(c);Yt!==null&&wn(L,Yt.startTime-Q),ye=!1}return ye}finally{m=null,g=re,E=!1}}var F=!1,w=null,_=-1,I=5,x=-1;function k(){return!(n.unstable_now()-x<I)}function P(){if(w!==null){var j=n.unstable_now();x=j;var Q=!0;try{Q=w(!0,j)}finally{Q?T():(F=!1,w=null)}}else F=!1}var T;if(typeof v=="function")T=function(){v(P)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,Wn=et.port2;et.port1.onmessage=P,T=function(){Wn.postMessage(null)}}else T=function(){O(P,0)};function zr(j){w=j,F||(F=!0,T())}function wn(j,Q){_=O(function(){j(n.unstable_now())},Q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(j){j.callback=null},n.unstable_continueExecution=function(){b||E||(b=!0,zr(z))},n.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<j?Math.floor(1e3/j):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(u)},n.unstable_next=function(j){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var re=g;g=Q;try{return j()}finally{g=re}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(j,Q){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var re=g;g=j;try{return Q()}finally{g=re}},n.unstable_scheduleCallback=function(j,Q,re){var ue=n.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?ue+re:ue):re=ue,j){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=re+Ie,j={id:f++,callback:Q,priorityLevel:j,startTime:re,expirationTime:Ie,sortIndex:-1},re>ue?(j.sortIndex=re,e(c,j),t(u)===null&&j===t(c)&&(N?(S(_),_=-1):N=!0,wn(L,re-ue))):(j.sortIndex=Ie,e(u,j),b||E||(b=!0,zr(z))),j},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(j){var Q=g;return function(){var re=g;g=Q;try{return j.apply(this,arguments)}finally{g=re}}}})(X0);J0.exports=X0;var VR=J0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OR=se,gn=VR;function $(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Z0=new Set,$l={};function Us(n,e){$o(n,e),$o(n+"Capture",e)}function $o(n,e){for($l[n]=e,n=0;n<e.length;n++)Z0.add(e[n])}var kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ip=Object.prototype.hasOwnProperty,LR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,U_={},B_={};function MR(n){return ip.call(B_,n)?!0:ip.call(U_,n)?!1:LR.test(n)?B_[n]=!0:(U_[n]=!0,!1)}function jR(n,e,t,r){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function FR(n,e,t,r){if(e===null||typeof e>"u"||jR(n,e,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(n,e,t,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Pt[n]=new Qt(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Pt[e]=new Qt(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Pt[n]=new Qt(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Pt[n]=new Qt(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Pt[n]=new Qt(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Pt[n]=new Qt(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Pt[n]=new Qt(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Pt[n]=new Qt(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Pt[n]=new Qt(n,5,!1,n.toLowerCase(),null,!1,!1)});var zm=/[\-:]([a-z])/g;function $m(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(zm,$m);Pt[e]=new Qt(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(zm,$m);Pt[e]=new Qt(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(zm,$m);Pt[e]=new Qt(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Pt[n]=new Qt(n,1,!1,n.toLowerCase(),null,!1,!1)});Pt.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Pt[n]=new Qt(n,1,!1,n.toLowerCase(),null,!0,!0)});function qm(n,e,t,r){var i=Pt.hasOwnProperty(e)?Pt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(FR(e,t,i,r)&&(t=null),r||i===null?MR(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):i.mustUseProperty?n[i.propertyName]=t===null?i.type===3?!1:"":t:(e=i.attributeName,r=i.attributeNamespace,t===null?n.removeAttribute(e):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?n.setAttributeNS(r,e,t):n.setAttribute(e,t))))}var Lr=OR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ic=Symbol.for("react.element"),_o=Symbol.for("react.portal"),vo=Symbol.for("react.fragment"),Wm=Symbol.for("react.strict_mode"),sp=Symbol.for("react.profiler"),eI=Symbol.for("react.provider"),tI=Symbol.for("react.context"),Gm=Symbol.for("react.forward_ref"),op=Symbol.for("react.suspense"),ap=Symbol.for("react.suspense_list"),Km=Symbol.for("react.memo"),si=Symbol.for("react.lazy"),nI=Symbol.for("react.offscreen"),z_=Symbol.iterator;function Xa(n){return n===null||typeof n!="object"?null:(n=z_&&n[z_]||n["@@iterator"],typeof n=="function"?n:null)}var We=Object.assign,ff;function pl(n){if(ff===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);ff=e&&e[1]||""}return`
`+ff+n}var pf=!1;function mf(n,e){if(!n||pf)return"";pf=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){r=c}n.call(e.prototype)}else{try{throw Error()}catch(c){r=c}n()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return n.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",n.displayName)),u}while(1<=o&&0<=a);break}}}finally{pf=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?pl(n):""}function UR(n){switch(n.tag){case 5:return pl(n.type);case 16:return pl("Lazy");case 13:return pl("Suspense");case 19:return pl("SuspenseList");case 0:case 2:case 15:return n=mf(n.type,!1),n;case 11:return n=mf(n.type.render,!1),n;case 1:return n=mf(n.type,!0),n;default:return""}}function lp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case vo:return"Fragment";case _o:return"Portal";case sp:return"Profiler";case Wm:return"StrictMode";case op:return"Suspense";case ap:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case tI:return(n.displayName||"Context")+".Consumer";case eI:return(n._context.displayName||"Context")+".Provider";case Gm:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Km:return e=n.displayName||null,e!==null?e:lp(n.type)||"Memo";case si:e=n._payload,n=n._init;try{return lp(n(e))}catch{}}return null}function BR(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lp(e);case 8:return e===Wm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Si(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function rI(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zR(n){var e=rI(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),r=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ec(n){n._valueTracker||(n._valueTracker=zR(n))}function iI(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return n&&(r=rI(n)?n.checked?"true":"false":n.value),n=r,n!==t?(e.setValue(n),!0):!1}function md(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function up(n,e){var t=e.checked;return We({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function $_(n,e){var t=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;t=Si(e.value!=null?e.value:t),n._wrapperState={initialChecked:r,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sI(n,e){e=e.checked,e!=null&&qm(n,"checked",e,!1)}function cp(n,e){sI(n,e);var t=Si(e.value),r=e.type;if(t!=null)r==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(r==="submit"||r==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?dp(n,e.type,t):e.hasOwnProperty("defaultValue")&&dp(n,e.type,Si(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function q_(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function dp(n,e,t){(e!=="number"||md(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var ml=Array.isArray;function No(n,e,t,r){if(n=n.options,e){e={};for(var i=0;i<t.length;i++)e["$"+t[i]]=!0;for(t=0;t<n.length;t++)i=e.hasOwnProperty("$"+n[t].value),n[t].selected!==i&&(n[t].selected=i),i&&r&&(n[t].defaultSelected=!0)}else{for(t=""+Si(t),e=null,i=0;i<n.length;i++){if(n[i].value===t){n[i].selected=!0,r&&(n[i].defaultSelected=!0);return}e!==null||n[i].disabled||(e=n[i])}e!==null&&(e.selected=!0)}}function hp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return We({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function W_(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error($(92));if(ml(t)){if(1<t.length)throw Error($(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Si(t)}}function oI(n,e){var t=Si(e.value),r=Si(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),r!=null&&(n.defaultValue=""+r)}function G_(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function aI(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?aI(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Tc,lI=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,r,i){MSApp.execUnsafeLocalFunction(function(){return n(e,t,r,i)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Tc=Tc||document.createElement("div"),Tc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Tc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ql(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Sl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$R=["Webkit","ms","Moz","O"];Object.keys(Sl).forEach(function(n){$R.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Sl[e]=Sl[n]})});function uI(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Sl.hasOwnProperty(n)&&Sl[n]?(""+e).trim():e+"px"}function cI(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=uI(t,e[t],r);t==="float"&&(t="cssFloat"),r?n.setProperty(t,i):n[t]=i}}var qR=We({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pp(n,e){if(e){if(qR[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function mp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gp=null;function Hm(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var yp=null,Co=null,Do=null;function K_(n){if(n=Cu(n)){if(typeof yp!="function")throw Error($(280));var e=n.stateNode;e&&(e=dh(e),yp(n.stateNode,n.type,e))}}function dI(n){Co?Do?Do.push(n):Do=[n]:Co=n}function hI(){if(Co){var n=Co,e=Do;if(Do=Co=null,K_(n),e)for(n=0;n<e.length;n++)K_(e[n])}}function fI(n,e){return n(e)}function pI(){}var gf=!1;function mI(n,e,t){if(gf)return n(e,t);gf=!0;try{return fI(n,e,t)}finally{gf=!1,(Co!==null||Do!==null)&&(pI(),hI())}}function Wl(n,e){var t=n.stateNode;if(t===null)return null;var r=dh(t);if(r===null)return null;t=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(n=n.type,r=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!r;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error($(231,e,typeof t));return t}var _p=!1;if(kr)try{var Za={};Object.defineProperty(Za,"passive",{get:function(){_p=!0}}),window.addEventListener("test",Za,Za),window.removeEventListener("test",Za,Za)}catch{_p=!1}function WR(n,e,t,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(f){this.onError(f)}}var Al=!1,gd=null,yd=!1,vp=null,GR={onError:function(n){Al=!0,gd=n}};function KR(n,e,t,r,i,s,o,a,u){Al=!1,gd=null,WR.apply(GR,arguments)}function HR(n,e,t,r,i,s,o,a,u){if(KR.apply(this,arguments),Al){if(Al){var c=gd;Al=!1,gd=null}else throw Error($(198));yd||(yd=!0,vp=c)}}function Bs(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function gI(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function H_(n){if(Bs(n)!==n)throw Error($(188))}function QR(n){var e=n.alternate;if(!e){if(e=Bs(n),e===null)throw Error($(188));return e!==n?null:n}for(var t=n,r=e;;){var i=t.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===t)return H_(i),n;if(s===r)return H_(i),e;s=s.sibling}throw Error($(188))}if(t.return!==r.return)t=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===t){o=!0,t=i,r=s;break}if(a===r){o=!0,r=i,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,r=i;break}if(a===r){o=!0,r=s,t=i;break}a=a.sibling}if(!o)throw Error($(189))}}if(t.alternate!==r)throw Error($(190))}if(t.tag!==3)throw Error($(188));return t.stateNode.current===t?n:e}function yI(n){return n=QR(n),n!==null?_I(n):null}function _I(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=_I(n);if(e!==null)return e;n=n.sibling}return null}var vI=gn.unstable_scheduleCallback,Q_=gn.unstable_cancelCallback,YR=gn.unstable_shouldYield,JR=gn.unstable_requestPaint,rt=gn.unstable_now,XR=gn.unstable_getCurrentPriorityLevel,Qm=gn.unstable_ImmediatePriority,wI=gn.unstable_UserBlockingPriority,_d=gn.unstable_NormalPriority,ZR=gn.unstable_LowPriority,II=gn.unstable_IdlePriority,ah=null,sr=null;function ek(n){if(sr&&typeof sr.onCommitFiberRoot=="function")try{sr.onCommitFiberRoot(ah,n,void 0,(n.current.flags&128)===128)}catch{}}var Un=Math.clz32?Math.clz32:rk,tk=Math.log,nk=Math.LN2;function rk(n){return n>>>=0,n===0?32:31-(tk(n)/nk|0)|0}var xc=64,Sc=4194304;function gl(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function vd(n,e){var t=n.pendingLanes;if(t===0)return 0;var r=0,i=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~i;a!==0?r=gl(a):(s&=o,s!==0&&(r=gl(s)))}else o=t&~i,o!==0?r=gl(o):s!==0&&(r=gl(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=r;0<e;)t=31-Un(e),i=1<<t,r|=n[t],e&=~i;return r}function ik(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sk(n,e){for(var t=n.suspendedLanes,r=n.pingedLanes,i=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Un(s),a=1<<o,u=i[o];u===-1?(!(a&t)||a&r)&&(i[o]=ik(a,e)):u<=e&&(n.expiredLanes|=a),s&=~a}}function wp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function EI(){var n=xc;return xc<<=1,!(xc&4194240)&&(xc=64),n}function yf(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function bu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Un(e),n[e]=t}function ok(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var r=n.eventTimes;for(n=n.expirationTimes;0<t;){var i=31-Un(t),s=1<<i;e[i]=0,r[i]=-1,n[i]=-1,t&=~s}}function Ym(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var r=31-Un(t),i=1<<r;i&e|n[r]&e&&(n[r]|=e),t&=~i}}var Se=0;function TI(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var xI,Jm,SI,AI,RI,Ip=!1,Ac=[],mi=null,gi=null,yi=null,Gl=new Map,Kl=new Map,ai=[],ak="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Y_(n,e){switch(n){case"focusin":case"focusout":mi=null;break;case"dragenter":case"dragleave":gi=null;break;case"mouseover":case"mouseout":yi=null;break;case"pointerover":case"pointerout":Gl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kl.delete(e.pointerId)}}function el(n,e,t,r,i,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Cu(e),e!==null&&Jm(e)),n):(n.eventSystemFlags|=r,e=n.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),n)}function lk(n,e,t,r,i){switch(e){case"focusin":return mi=el(mi,n,e,t,r,i),!0;case"dragenter":return gi=el(gi,n,e,t,r,i),!0;case"mouseover":return yi=el(yi,n,e,t,r,i),!0;case"pointerover":var s=i.pointerId;return Gl.set(s,el(Gl.get(s)||null,n,e,t,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Kl.set(s,el(Kl.get(s)||null,n,e,t,r,i)),!0}return!1}function kI(n){var e=hs(n.target);if(e!==null){var t=Bs(e);if(t!==null){if(e=t.tag,e===13){if(e=gI(t),e!==null){n.blockedOn=e,RI(n.priority,function(){SI(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Kc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Ep(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var r=new t.constructor(t.type,t);gp=r,t.target.dispatchEvent(r),gp=null}else return e=Cu(t),e!==null&&Jm(e),n.blockedOn=t,!1;e.shift()}return!0}function J_(n,e,t){Kc(n)&&t.delete(e)}function uk(){Ip=!1,mi!==null&&Kc(mi)&&(mi=null),gi!==null&&Kc(gi)&&(gi=null),yi!==null&&Kc(yi)&&(yi=null),Gl.forEach(J_),Kl.forEach(J_)}function tl(n,e){n.blockedOn===e&&(n.blockedOn=null,Ip||(Ip=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,uk)))}function Hl(n){function e(i){return tl(i,n)}if(0<Ac.length){tl(Ac[0],n);for(var t=1;t<Ac.length;t++){var r=Ac[t];r.blockedOn===n&&(r.blockedOn=null)}}for(mi!==null&&tl(mi,n),gi!==null&&tl(gi,n),yi!==null&&tl(yi,n),Gl.forEach(e),Kl.forEach(e),t=0;t<ai.length;t++)r=ai[t],r.blockedOn===n&&(r.blockedOn=null);for(;0<ai.length&&(t=ai[0],t.blockedOn===null);)kI(t),t.blockedOn===null&&ai.shift()}var Vo=Lr.ReactCurrentBatchConfig,wd=!0;function ck(n,e,t,r){var i=Se,s=Vo.transition;Vo.transition=null;try{Se=1,Xm(n,e,t,r)}finally{Se=i,Vo.transition=s}}function dk(n,e,t,r){var i=Se,s=Vo.transition;Vo.transition=null;try{Se=4,Xm(n,e,t,r)}finally{Se=i,Vo.transition=s}}function Xm(n,e,t,r){if(wd){var i=Ep(n,e,t,r);if(i===null)Rf(n,e,r,Id,t),Y_(n,r);else if(lk(i,n,e,t,r))r.stopPropagation();else if(Y_(n,r),e&4&&-1<ak.indexOf(n)){for(;i!==null;){var s=Cu(i);if(s!==null&&xI(s),s=Ep(n,e,t,r),s===null&&Rf(n,e,r,Id,t),s===i)break;i=s}i!==null&&r.stopPropagation()}else Rf(n,e,r,null,t)}}var Id=null;function Ep(n,e,t,r){if(Id=null,n=Hm(r),n=hs(n),n!==null)if(e=Bs(n),e===null)n=null;else if(t=e.tag,t===13){if(n=gI(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Id=n,null}function PI(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(XR()){case Qm:return 1;case wI:return 4;case _d:case ZR:return 16;case II:return 536870912;default:return 16}default:return 16}}var di=null,Zm=null,Hc=null;function bI(){if(Hc)return Hc;var n,e=Zm,t=e.length,r,i="value"in di?di.value:di.textContent,s=i.length;for(n=0;n<t&&e[n]===i[n];n++);var o=t-n;for(r=1;r<=o&&e[t-r]===i[s-r];r++);return Hc=i.slice(n,1<r?1-r:void 0)}function Qc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Rc(){return!0}function X_(){return!1}function vn(n){function e(t,r,i,s,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Rc:X_,this.isPropagationStopped=X_,this}return We(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Rc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Rc)},persist:function(){},isPersistent:Rc}),e}var pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eg=vn(pa),Nu=We({},pa,{view:0,detail:0}),hk=vn(Nu),_f,vf,nl,lh=We({},Nu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tg,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==nl&&(nl&&n.type==="mousemove"?(_f=n.screenX-nl.screenX,vf=n.screenY-nl.screenY):vf=_f=0,nl=n),_f)},movementY:function(n){return"movementY"in n?n.movementY:vf}}),Z_=vn(lh),fk=We({},lh,{dataTransfer:0}),pk=vn(fk),mk=We({},Nu,{relatedTarget:0}),wf=vn(mk),gk=We({},pa,{animationName:0,elapsedTime:0,pseudoElement:0}),yk=vn(gk),_k=We({},pa,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),vk=vn(_k),wk=We({},pa,{data:0}),ev=vn(wk),Ik={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ek={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xk(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Tk[n])?!!e[n]:!1}function tg(){return xk}var Sk=We({},Nu,{key:function(n){if(n.key){var e=Ik[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Qc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ek[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tg,charCode:function(n){return n.type==="keypress"?Qc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Qc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ak=vn(Sk),Rk=We({},lh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tv=vn(Rk),kk=We({},Nu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tg}),Pk=vn(kk),bk=We({},pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nk=vn(bk),Ck=We({},lh,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Dk=vn(Ck),Vk=[9,13,27,32],ng=kr&&"CompositionEvent"in window,Rl=null;kr&&"documentMode"in document&&(Rl=document.documentMode);var Ok=kr&&"TextEvent"in window&&!Rl,NI=kr&&(!ng||Rl&&8<Rl&&11>=Rl),nv=" ",rv=!1;function CI(n,e){switch(n){case"keyup":return Vk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function DI(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var wo=!1;function Lk(n,e){switch(n){case"compositionend":return DI(e);case"keypress":return e.which!==32?null:(rv=!0,nv);case"textInput":return n=e.data,n===nv&&rv?null:n;default:return null}}function Mk(n,e){if(wo)return n==="compositionend"||!ng&&CI(n,e)?(n=bI(),Hc=Zm=di=null,wo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return NI&&e.locale!=="ko"?null:e.data;default:return null}}var jk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function iv(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!jk[n.type]:e==="textarea"}function VI(n,e,t,r){dI(r),e=Ed(e,"onChange"),0<e.length&&(t=new eg("onChange","change",null,t,r),n.push({event:t,listeners:e}))}var kl=null,Ql=null;function Fk(n){WI(n,0)}function uh(n){var e=To(n);if(iI(e))return n}function Uk(n,e){if(n==="change")return e}var OI=!1;if(kr){var If;if(kr){var Ef="oninput"in document;if(!Ef){var sv=document.createElement("div");sv.setAttribute("oninput","return;"),Ef=typeof sv.oninput=="function"}If=Ef}else If=!1;OI=If&&(!document.documentMode||9<document.documentMode)}function ov(){kl&&(kl.detachEvent("onpropertychange",LI),Ql=kl=null)}function LI(n){if(n.propertyName==="value"&&uh(Ql)){var e=[];VI(e,Ql,n,Hm(n)),mI(Fk,e)}}function Bk(n,e,t){n==="focusin"?(ov(),kl=e,Ql=t,kl.attachEvent("onpropertychange",LI)):n==="focusout"&&ov()}function zk(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return uh(Ql)}function $k(n,e){if(n==="click")return uh(e)}function qk(n,e){if(n==="input"||n==="change")return uh(e)}function Wk(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var $n=typeof Object.is=="function"?Object.is:Wk;function Yl(n,e){if($n(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!ip.call(e,i)||!$n(n[i],e[i]))return!1}return!0}function av(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function lv(n,e){var t=av(n);n=0;for(var r;t;){if(t.nodeType===3){if(r=n+t.textContent.length,n<=e&&r>=e)return{node:t,offset:e-n};n=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=av(t)}}function MI(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?MI(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function jI(){for(var n=window,e=md();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=md(n.document)}return e}function rg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Gk(n){var e=jI(),t=n.focusedElem,r=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&MI(t.ownerDocument.documentElement,t)){if(r!==null&&rg(t)){if(e=r.start,n=r.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var i=t.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!n.extend&&s>r&&(i=r,r=s,s=i),i=lv(t,s);var o=lv(t,r);i&&o&&(n.rangeCount!==1||n.anchorNode!==i.node||n.anchorOffset!==i.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),n.removeAllRanges(),s>r?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Kk=kr&&"documentMode"in document&&11>=document.documentMode,Io=null,Tp=null,Pl=null,xp=!1;function uv(n,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;xp||Io==null||Io!==md(r)||(r=Io,"selectionStart"in r&&rg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pl&&Yl(Pl,r)||(Pl=r,r=Ed(Tp,"onSelect"),0<r.length&&(e=new eg("onSelect","select",null,e,t),n.push({event:e,listeners:r}),e.target=Io)))}function kc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Eo={animationend:kc("Animation","AnimationEnd"),animationiteration:kc("Animation","AnimationIteration"),animationstart:kc("Animation","AnimationStart"),transitionend:kc("Transition","TransitionEnd")},Tf={},FI={};kr&&(FI=document.createElement("div").style,"AnimationEvent"in window||(delete Eo.animationend.animation,delete Eo.animationiteration.animation,delete Eo.animationstart.animation),"TransitionEvent"in window||delete Eo.transitionend.transition);function ch(n){if(Tf[n])return Tf[n];if(!Eo[n])return n;var e=Eo[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in FI)return Tf[n]=e[t];return n}var UI=ch("animationend"),BI=ch("animationiteration"),zI=ch("animationstart"),$I=ch("transitionend"),qI=new Map,cv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ji(n,e){qI.set(n,e),Us(e,[n])}for(var xf=0;xf<cv.length;xf++){var Sf=cv[xf],Hk=Sf.toLowerCase(),Qk=Sf[0].toUpperCase()+Sf.slice(1);ji(Hk,"on"+Qk)}ji(UI,"onAnimationEnd");ji(BI,"onAnimationIteration");ji(zI,"onAnimationStart");ji("dblclick","onDoubleClick");ji("focusin","onFocus");ji("focusout","onBlur");ji($I,"onTransitionEnd");$o("onMouseEnter",["mouseout","mouseover"]);$o("onMouseLeave",["mouseout","mouseover"]);$o("onPointerEnter",["pointerout","pointerover"]);$o("onPointerLeave",["pointerout","pointerover"]);Us("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Us("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Us("onBeforeInput",["compositionend","keypress","textInput","paste"]);Us("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Us("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Us("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yk=new Set("cancel close invalid load scroll toggle".split(" ").concat(yl));function dv(n,e,t){var r=n.type||"unknown-event";n.currentTarget=t,HR(r,e,void 0,n),n.currentTarget=null}function WI(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var r=n[t],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;dv(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;dv(i,a,c),s=u}}}if(yd)throw n=vp,yd=!1,vp=null,n}function Ve(n,e){var t=e[Pp];t===void 0&&(t=e[Pp]=new Set);var r=n+"__bubble";t.has(r)||(GI(e,n,2,!1),t.add(r))}function Af(n,e,t){var r=0;e&&(r|=4),GI(t,n,r,e)}var Pc="_reactListening"+Math.random().toString(36).slice(2);function Jl(n){if(!n[Pc]){n[Pc]=!0,Z0.forEach(function(t){t!=="selectionchange"&&(Yk.has(t)||Af(t,!1,n),Af(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Pc]||(e[Pc]=!0,Af("selectionchange",!1,e))}}function GI(n,e,t,r){switch(PI(e)){case 1:var i=ck;break;case 4:i=dk;break;default:i=Xm}t=i.bind(null,e,t,n),i=void 0,!_p||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?n.addEventListener(e,t,{capture:!0,passive:i}):n.addEventListener(e,t,!0):i!==void 0?n.addEventListener(e,t,{passive:i}):n.addEventListener(e,t,!1)}function Rf(n,e,t,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=hs(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}mI(function(){var c=s,f=Hm(t),m=[];e:{var g=qI.get(n);if(g!==void 0){var E=eg,b=n;switch(n){case"keypress":if(Qc(t)===0)break e;case"keydown":case"keyup":E=Ak;break;case"focusin":b="focus",E=wf;break;case"focusout":b="blur",E=wf;break;case"beforeblur":case"afterblur":E=wf;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Z_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=pk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Pk;break;case UI:case BI:case zI:E=yk;break;case $I:E=Nk;break;case"scroll":E=hk;break;case"wheel":E=Dk;break;case"copy":case"cut":case"paste":E=vk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=tv}var N=(e&4)!==0,O=!N&&n==="scroll",S=N?g!==null?g+"Capture":null:g;N=[];for(var v=c,A;v!==null;){A=v;var L=A.stateNode;if(A.tag===5&&L!==null&&(A=L,S!==null&&(L=Wl(v,S),L!=null&&N.push(Xl(v,L,A)))),O)break;v=v.return}0<N.length&&(g=new E(g,b,null,t,f),m.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=n==="mouseover"||n==="pointerover",E=n==="mouseout"||n==="pointerout",g&&t!==gp&&(b=t.relatedTarget||t.fromElement)&&(hs(b)||b[Pr]))break e;if((E||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,E?(b=t.relatedTarget||t.toElement,E=c,b=b?hs(b):null,b!==null&&(O=Bs(b),b!==O||b.tag!==5&&b.tag!==6)&&(b=null)):(E=null,b=c),E!==b)){if(N=Z_,L="onMouseLeave",S="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(N=tv,L="onPointerLeave",S="onPointerEnter",v="pointer"),O=E==null?g:To(E),A=b==null?g:To(b),g=new N(L,v+"leave",E,t,f),g.target=O,g.relatedTarget=A,L=null,hs(f)===c&&(N=new N(S,v+"enter",b,t,f),N.target=A,N.relatedTarget=O,L=N),O=L,E&&b)t:{for(N=E,S=b,v=0,A=N;A;A=so(A))v++;for(A=0,L=S;L;L=so(L))A++;for(;0<v-A;)N=so(N),v--;for(;0<A-v;)S=so(S),A--;for(;v--;){if(N===S||S!==null&&N===S.alternate)break t;N=so(N),S=so(S)}N=null}else N=null;E!==null&&hv(m,g,E,N,!1),b!==null&&O!==null&&hv(m,O,b,N,!0)}}e:{if(g=c?To(c):window,E=g.nodeName&&g.nodeName.toLowerCase(),E==="select"||E==="input"&&g.type==="file")var z=Uk;else if(iv(g))if(OI)z=qk;else{z=zk;var F=Bk}else(E=g.nodeName)&&E.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(z=$k);if(z&&(z=z(n,c))){VI(m,z,t,f);break e}F&&F(n,g,c),n==="focusout"&&(F=g._wrapperState)&&F.controlled&&g.type==="number"&&dp(g,"number",g.value)}switch(F=c?To(c):window,n){case"focusin":(iv(F)||F.contentEditable==="true")&&(Io=F,Tp=c,Pl=null);break;case"focusout":Pl=Tp=Io=null;break;case"mousedown":xp=!0;break;case"contextmenu":case"mouseup":case"dragend":xp=!1,uv(m,t,f);break;case"selectionchange":if(Kk)break;case"keydown":case"keyup":uv(m,t,f)}var w;if(ng)e:{switch(n){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else wo?CI(n,t)&&(_="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(NI&&t.locale!=="ko"&&(wo||_!=="onCompositionStart"?_==="onCompositionEnd"&&wo&&(w=bI()):(di=f,Zm="value"in di?di.value:di.textContent,wo=!0)),F=Ed(c,_),0<F.length&&(_=new ev(_,n,null,t,f),m.push({event:_,listeners:F}),w?_.data=w:(w=DI(t),w!==null&&(_.data=w)))),(w=Ok?Lk(n,t):Mk(n,t))&&(c=Ed(c,"onBeforeInput"),0<c.length&&(f=new ev("onBeforeInput","beforeinput",null,t,f),m.push({event:f,listeners:c}),f.data=w))}WI(m,e)})}function Xl(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ed(n,e){for(var t=e+"Capture",r=[];n!==null;){var i=n,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Wl(n,t),s!=null&&r.unshift(Xl(n,s,i)),s=Wl(n,e),s!=null&&r.push(Xl(n,s,i))),n=n.return}return r}function so(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function hv(n,e,t,r,i){for(var s=e._reactName,o=[];t!==null&&t!==r;){var a=t,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Wl(t,s),u!=null&&o.unshift(Xl(t,u,a))):i||(u=Wl(t,s),u!=null&&o.push(Xl(t,u,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Jk=/\r\n?/g,Xk=/\u0000|\uFFFD/g;function fv(n){return(typeof n=="string"?n:""+n).replace(Jk,`
`).replace(Xk,"")}function bc(n,e,t){if(e=fv(e),fv(n)!==e&&t)throw Error($(425))}function Td(){}var Sp=null,Ap=null;function Rp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kp=typeof setTimeout=="function"?setTimeout:void 0,Zk=typeof clearTimeout=="function"?clearTimeout:void 0,pv=typeof Promise=="function"?Promise:void 0,eP=typeof queueMicrotask=="function"?queueMicrotask:typeof pv<"u"?function(n){return pv.resolve(null).then(n).catch(tP)}:kp;function tP(n){setTimeout(function(){throw n})}function kf(n,e){var t=e,r=0;do{var i=t.nextSibling;if(n.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){n.removeChild(i),Hl(e);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Hl(e)}function _i(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function mv(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ma=Math.random().toString(36).slice(2),Jn="__reactFiber$"+ma,Zl="__reactProps$"+ma,Pr="__reactContainer$"+ma,Pp="__reactEvents$"+ma,nP="__reactListeners$"+ma,rP="__reactHandles$"+ma;function hs(n){var e=n[Jn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Pr]||t[Jn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=mv(n);n!==null;){if(t=n[Jn])return t;n=mv(n)}return e}n=t,t=n.parentNode}return null}function Cu(n){return n=n[Jn]||n[Pr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function To(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error($(33))}function dh(n){return n[Zl]||null}var bp=[],xo=-1;function Fi(n){return{current:n}}function Le(n){0>xo||(n.current=bp[xo],bp[xo]=null,xo--)}function Pe(n,e){xo++,bp[xo]=n.current,n.current=e}var Ai={},jt=Fi(Ai),sn=Fi(!1),Ts=Ai;function qo(n,e){var t=n.type.contextTypes;if(!t)return Ai;var r=n.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in t)i[s]=e[s];return r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=i),i}function on(n){return n=n.childContextTypes,n!=null}function xd(){Le(sn),Le(jt)}function gv(n,e,t){if(jt.current!==Ai)throw Error($(168));Pe(jt,e),Pe(sn,t)}function KI(n,e,t){var r=n.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error($(108,BR(n)||"Unknown",i));return We({},t,r)}function Sd(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ai,Ts=jt.current,Pe(jt,n),Pe(sn,sn.current),!0}function yv(n,e,t){var r=n.stateNode;if(!r)throw Error($(169));t?(n=KI(n,e,Ts),r.__reactInternalMemoizedMergedChildContext=n,Le(sn),Le(jt),Pe(jt,n)):Le(sn),Pe(sn,t)}var wr=null,hh=!1,Pf=!1;function HI(n){wr===null?wr=[n]:wr.push(n)}function iP(n){hh=!0,HI(n)}function Ui(){if(!Pf&&wr!==null){Pf=!0;var n=0,e=Se;try{var t=wr;for(Se=1;n<t.length;n++){var r=t[n];do r=r(!0);while(r!==null)}wr=null,hh=!1}catch(i){throw wr!==null&&(wr=wr.slice(n+1)),vI(Qm,Ui),i}finally{Se=e,Pf=!1}}return null}var So=[],Ao=0,Ad=null,Rd=0,Tn=[],xn=0,xs=null,Ir=1,Er="";function rs(n,e){So[Ao++]=Rd,So[Ao++]=Ad,Ad=n,Rd=e}function QI(n,e,t){Tn[xn++]=Ir,Tn[xn++]=Er,Tn[xn++]=xs,xs=n;var r=Ir;n=Er;var i=32-Un(r)-1;r&=~(1<<i),t+=1;var s=32-Un(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ir=1<<32-Un(e)+i|t<<i|r,Er=s+n}else Ir=1<<s|t<<i|r,Er=n}function ig(n){n.return!==null&&(rs(n,1),QI(n,1,0))}function sg(n){for(;n===Ad;)Ad=So[--Ao],So[Ao]=null,Rd=So[--Ao],So[Ao]=null;for(;n===xs;)xs=Tn[--xn],Tn[xn]=null,Er=Tn[--xn],Tn[xn]=null,Ir=Tn[--xn],Tn[xn]=null}var mn=null,fn=null,je=!1,Fn=null;function YI(n,e){var t=Sn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function _v(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,mn=n,fn=_i(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,mn=n,fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=xs!==null?{id:Ir,overflow:Er}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Sn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,mn=n,fn=null,!0):!1;default:return!1}}function Np(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Cp(n){if(je){var e=fn;if(e){var t=e;if(!_v(n,e)){if(Np(n))throw Error($(418));e=_i(t.nextSibling);var r=mn;e&&_v(n,e)?YI(r,t):(n.flags=n.flags&-4097|2,je=!1,mn=n)}}else{if(Np(n))throw Error($(418));n.flags=n.flags&-4097|2,je=!1,mn=n}}}function vv(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;mn=n}function Nc(n){if(n!==mn)return!1;if(!je)return vv(n),je=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Rp(n.type,n.memoizedProps)),e&&(e=fn)){if(Np(n))throw JI(),Error($(418));for(;e;)YI(n,e),e=_i(e.nextSibling)}if(vv(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error($(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){fn=_i(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}fn=null}}else fn=mn?_i(n.stateNode.nextSibling):null;return!0}function JI(){for(var n=fn;n;)n=_i(n.nextSibling)}function Wo(){fn=mn=null,je=!1}function og(n){Fn===null?Fn=[n]:Fn.push(n)}var sP=Lr.ReactCurrentBatchConfig;function rl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error($(309));var r=t.stateNode}if(!r)throw Error($(147,n));var i=r,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error($(284));if(!t._owner)throw Error($(290,n))}return n}function Cc(n,e){throw n=Object.prototype.toString.call(e),Error($(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function wv(n){var e=n._init;return e(n._payload)}function XI(n){function e(S,v){if(n){var A=S.deletions;A===null?(S.deletions=[v],S.flags|=16):A.push(v)}}function t(S,v){if(!n)return null;for(;v!==null;)e(S,v),v=v.sibling;return null}function r(S,v){for(S=new Map;v!==null;)v.key!==null?S.set(v.key,v):S.set(v.index,v),v=v.sibling;return S}function i(S,v){return S=Ei(S,v),S.index=0,S.sibling=null,S}function s(S,v,A){return S.index=A,n?(A=S.alternate,A!==null?(A=A.index,A<v?(S.flags|=2,v):A):(S.flags|=2,v)):(S.flags|=1048576,v)}function o(S){return n&&S.alternate===null&&(S.flags|=2),S}function a(S,v,A,L){return v===null||v.tag!==6?(v=Lf(A,S.mode,L),v.return=S,v):(v=i(v,A),v.return=S,v)}function u(S,v,A,L){var z=A.type;return z===vo?f(S,v,A.props.children,L,A.key):v!==null&&(v.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===si&&wv(z)===v.type)?(L=i(v,A.props),L.ref=rl(S,v,A),L.return=S,L):(L=nd(A.type,A.key,A.props,null,S.mode,L),L.ref=rl(S,v,A),L.return=S,L)}function c(S,v,A,L){return v===null||v.tag!==4||v.stateNode.containerInfo!==A.containerInfo||v.stateNode.implementation!==A.implementation?(v=Mf(A,S.mode,L),v.return=S,v):(v=i(v,A.children||[]),v.return=S,v)}function f(S,v,A,L,z){return v===null||v.tag!==7?(v=vs(A,S.mode,L,z),v.return=S,v):(v=i(v,A),v.return=S,v)}function m(S,v,A){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Lf(""+v,S.mode,A),v.return=S,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ic:return A=nd(v.type,v.key,v.props,null,S.mode,A),A.ref=rl(S,null,v),A.return=S,A;case _o:return v=Mf(v,S.mode,A),v.return=S,v;case si:var L=v._init;return m(S,L(v._payload),A)}if(ml(v)||Xa(v))return v=vs(v,S.mode,A,null),v.return=S,v;Cc(S,v)}return null}function g(S,v,A,L){var z=v!==null?v.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return z!==null?null:a(S,v,""+A,L);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Ic:return A.key===z?u(S,v,A,L):null;case _o:return A.key===z?c(S,v,A,L):null;case si:return z=A._init,g(S,v,z(A._payload),L)}if(ml(A)||Xa(A))return z!==null?null:f(S,v,A,L,null);Cc(S,A)}return null}function E(S,v,A,L,z){if(typeof L=="string"&&L!==""||typeof L=="number")return S=S.get(A)||null,a(v,S,""+L,z);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Ic:return S=S.get(L.key===null?A:L.key)||null,u(v,S,L,z);case _o:return S=S.get(L.key===null?A:L.key)||null,c(v,S,L,z);case si:var F=L._init;return E(S,v,A,F(L._payload),z)}if(ml(L)||Xa(L))return S=S.get(A)||null,f(v,S,L,z,null);Cc(v,L)}return null}function b(S,v,A,L){for(var z=null,F=null,w=v,_=v=0,I=null;w!==null&&_<A.length;_++){w.index>_?(I=w,w=null):I=w.sibling;var x=g(S,w,A[_],L);if(x===null){w===null&&(w=I);break}n&&w&&x.alternate===null&&e(S,w),v=s(x,v,_),F===null?z=x:F.sibling=x,F=x,w=I}if(_===A.length)return t(S,w),je&&rs(S,_),z;if(w===null){for(;_<A.length;_++)w=m(S,A[_],L),w!==null&&(v=s(w,v,_),F===null?z=w:F.sibling=w,F=w);return je&&rs(S,_),z}for(w=r(S,w);_<A.length;_++)I=E(w,S,_,A[_],L),I!==null&&(n&&I.alternate!==null&&w.delete(I.key===null?_:I.key),v=s(I,v,_),F===null?z=I:F.sibling=I,F=I);return n&&w.forEach(function(k){return e(S,k)}),je&&rs(S,_),z}function N(S,v,A,L){var z=Xa(A);if(typeof z!="function")throw Error($(150));if(A=z.call(A),A==null)throw Error($(151));for(var F=z=null,w=v,_=v=0,I=null,x=A.next();w!==null&&!x.done;_++,x=A.next()){w.index>_?(I=w,w=null):I=w.sibling;var k=g(S,w,x.value,L);if(k===null){w===null&&(w=I);break}n&&w&&k.alternate===null&&e(S,w),v=s(k,v,_),F===null?z=k:F.sibling=k,F=k,w=I}if(x.done)return t(S,w),je&&rs(S,_),z;if(w===null){for(;!x.done;_++,x=A.next())x=m(S,x.value,L),x!==null&&(v=s(x,v,_),F===null?z=x:F.sibling=x,F=x);return je&&rs(S,_),z}for(w=r(S,w);!x.done;_++,x=A.next())x=E(w,S,_,x.value,L),x!==null&&(n&&x.alternate!==null&&w.delete(x.key===null?_:x.key),v=s(x,v,_),F===null?z=x:F.sibling=x,F=x);return n&&w.forEach(function(P){return e(S,P)}),je&&rs(S,_),z}function O(S,v,A,L){if(typeof A=="object"&&A!==null&&A.type===vo&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Ic:e:{for(var z=A.key,F=v;F!==null;){if(F.key===z){if(z=A.type,z===vo){if(F.tag===7){t(S,F.sibling),v=i(F,A.props.children),v.return=S,S=v;break e}}else if(F.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===si&&wv(z)===F.type){t(S,F.sibling),v=i(F,A.props),v.ref=rl(S,F,A),v.return=S,S=v;break e}t(S,F);break}else e(S,F);F=F.sibling}A.type===vo?(v=vs(A.props.children,S.mode,L,A.key),v.return=S,S=v):(L=nd(A.type,A.key,A.props,null,S.mode,L),L.ref=rl(S,v,A),L.return=S,S=L)}return o(S);case _o:e:{for(F=A.key;v!==null;){if(v.key===F)if(v.tag===4&&v.stateNode.containerInfo===A.containerInfo&&v.stateNode.implementation===A.implementation){t(S,v.sibling),v=i(v,A.children||[]),v.return=S,S=v;break e}else{t(S,v);break}else e(S,v);v=v.sibling}v=Mf(A,S.mode,L),v.return=S,S=v}return o(S);case si:return F=A._init,O(S,v,F(A._payload),L)}if(ml(A))return b(S,v,A,L);if(Xa(A))return N(S,v,A,L);Cc(S,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,v!==null&&v.tag===6?(t(S,v.sibling),v=i(v,A),v.return=S,S=v):(t(S,v),v=Lf(A,S.mode,L),v.return=S,S=v),o(S)):t(S,v)}return O}var Go=XI(!0),ZI=XI(!1),kd=Fi(null),Pd=null,Ro=null,ag=null;function lg(){ag=Ro=Pd=null}function ug(n){var e=kd.current;Le(kd),n._currentValue=e}function Dp(n,e,t){for(;n!==null;){var r=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),n===t)break;n=n.return}}function Oo(n,e){Pd=n,ag=Ro=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(en=!0),n.firstContext=null)}function Pn(n){var e=n._currentValue;if(ag!==n)if(n={context:n,memoizedValue:e,next:null},Ro===null){if(Pd===null)throw Error($(308));Ro=n,Pd.dependencies={lanes:0,firstContext:n}}else Ro=Ro.next=n;return e}var fs=null;function cg(n){fs===null?fs=[n]:fs.push(n)}function eE(n,e,t,r){var i=e.interleaved;return i===null?(t.next=t,cg(e)):(t.next=i.next,i.next=t),e.interleaved=t,br(n,r)}function br(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var oi=!1;function dg(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tE(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ar(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function vi(n,e,t){var r=n.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,br(n,t)}return i=r.interleaved,i===null?(e.next=e,cg(r)):(e.next=i.next,i.next=e),r.interleaved=e,br(n,t)}function Yc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,Ym(n,t)}}function Iv(n,e){var t=n.updateQueue,r=n.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?i=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?i=s=e:s=s.next=e}else i=s=e;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function bd(n,e,t,r){var i=n.updateQueue;oi=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=n.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=c=u=null,a=s;do{var g=a.lane,E=a.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:E,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var b=n,N=a;switch(g=e,E=t,N.tag){case 1:if(b=N.payload,typeof b=="function"){m=b.call(E,m,g);break e}m=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=N.payload,g=typeof b=="function"?b.call(E,m,g):b,g==null)break e;m=We({},m,g);break e;case 2:oi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else E={eventTime:E,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=E,u=m):f=f.next=E,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);As|=o,n.lanes=o,n.memoizedState=m}}function Ev(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var r=n[e],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error($(191,i));i.call(r)}}}var Du={},or=Fi(Du),eu=Fi(Du),tu=Fi(Du);function ps(n){if(n===Du)throw Error($(174));return n}function hg(n,e){switch(Pe(tu,e),Pe(eu,n),Pe(or,Du),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=fp(e,n)}Le(or),Pe(or,e)}function Ko(){Le(or),Le(eu),Le(tu)}function nE(n){ps(tu.current);var e=ps(or.current),t=fp(e,n.type);e!==t&&(Pe(eu,n),Pe(or,t))}function fg(n){eu.current===n&&(Le(or),Le(eu))}var ze=Fi(0);function Nd(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bf=[];function pg(){for(var n=0;n<bf.length;n++)bf[n]._workInProgressVersionPrimary=null;bf.length=0}var Jc=Lr.ReactCurrentDispatcher,Nf=Lr.ReactCurrentBatchConfig,Ss=0,$e=null,ct=null,_t=null,Cd=!1,bl=!1,nu=0,oP=0;function Vt(){throw Error($(321))}function mg(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!$n(n[t],e[t]))return!1;return!0}function gg(n,e,t,r,i,s){if(Ss=s,$e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Jc.current=n===null||n.memoizedState===null?cP:dP,n=t(r,i),bl){s=0;do{if(bl=!1,nu=0,25<=s)throw Error($(301));s+=1,_t=ct=null,e.updateQueue=null,Jc.current=hP,n=t(r,i)}while(bl)}if(Jc.current=Dd,e=ct!==null&&ct.next!==null,Ss=0,_t=ct=$e=null,Cd=!1,e)throw Error($(300));return n}function yg(){var n=nu!==0;return nu=0,n}function Yn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?$e.memoizedState=_t=n:_t=_t.next=n,_t}function bn(){if(ct===null){var n=$e.alternate;n=n!==null?n.memoizedState:null}else n=ct.next;var e=_t===null?$e.memoizedState:_t.next;if(e!==null)_t=e,ct=n;else{if(n===null)throw Error($(310));ct=n,n={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},_t===null?$e.memoizedState=_t=n:_t=_t.next=n}return _t}function ru(n,e){return typeof e=="function"?e(n):e}function Cf(n){var e=bn(),t=e.queue;if(t===null)throw Error($(311));t.lastRenderedReducer=n;var r=ct,i=r.baseQueue,s=t.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,t.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var f=c.lane;if((Ss&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:n(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=m,o=r):u=u.next=m,$e.lanes|=f,As|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,$n(r,e.memoizedState)||(en=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,t.lastRenderedState=r}if(n=t.interleaved,n!==null){i=n;do s=i.lane,$e.lanes|=s,As|=s,i=i.next;while(i!==n)}else i===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Df(n){var e=bn(),t=e.queue;if(t===null)throw Error($(311));t.lastRenderedReducer=n;var r=t.dispatch,i=t.pending,s=e.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do s=n(s,o.action),o=o.next;while(o!==i);$n(s,e.memoizedState)||(en=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,r]}function rE(){}function iE(n,e){var t=$e,r=bn(),i=e(),s=!$n(r.memoizedState,i);if(s&&(r.memoizedState=i,en=!0),r=r.queue,_g(aE.bind(null,t,r,n),[n]),r.getSnapshot!==e||s||_t!==null&&_t.memoizedState.tag&1){if(t.flags|=2048,iu(9,oE.bind(null,t,r,i,e),void 0,null),wt===null)throw Error($(349));Ss&30||sE(t,e,i)}return i}function sE(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=$e.updateQueue,e===null?(e={lastEffect:null,stores:null},$e.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function oE(n,e,t,r){e.value=t,e.getSnapshot=r,lE(e)&&uE(n)}function aE(n,e,t){return t(function(){lE(e)&&uE(n)})}function lE(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!$n(n,t)}catch{return!0}}function uE(n){var e=br(n,1);e!==null&&Bn(e,n,1,-1)}function Tv(n){var e=Yn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ru,lastRenderedState:n},e.queue=n,n=n.dispatch=uP.bind(null,$e,n),[e.memoizedState,n]}function iu(n,e,t,r){return n={tag:n,create:e,destroy:t,deps:r,next:null},e=$e.updateQueue,e===null?(e={lastEffect:null,stores:null},$e.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(r=t.next,t.next=n,n.next=r,e.lastEffect=n)),n}function cE(){return bn().memoizedState}function Xc(n,e,t,r){var i=Yn();$e.flags|=n,i.memoizedState=iu(1|e,t,void 0,r===void 0?null:r)}function fh(n,e,t,r){var i=bn();r=r===void 0?null:r;var s=void 0;if(ct!==null){var o=ct.memoizedState;if(s=o.destroy,r!==null&&mg(r,o.deps)){i.memoizedState=iu(e,t,s,r);return}}$e.flags|=n,i.memoizedState=iu(1|e,t,s,r)}function xv(n,e){return Xc(8390656,8,n,e)}function _g(n,e){return fh(2048,8,n,e)}function dE(n,e){return fh(4,2,n,e)}function hE(n,e){return fh(4,4,n,e)}function fE(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function pE(n,e,t){return t=t!=null?t.concat([n]):null,fh(4,4,fE.bind(null,e,n),t)}function vg(){}function mE(n,e){var t=bn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&mg(e,r[1])?r[0]:(t.memoizedState=[n,e],n)}function gE(n,e){var t=bn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&mg(e,r[1])?r[0]:(n=n(),t.memoizedState=[n,e],n)}function yE(n,e,t){return Ss&21?($n(t,e)||(t=EI(),$e.lanes|=t,As|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,en=!0),n.memoizedState=t)}function aP(n,e){var t=Se;Se=t!==0&&4>t?t:4,n(!0);var r=Nf.transition;Nf.transition={};try{n(!1),e()}finally{Se=t,Nf.transition=r}}function _E(){return bn().memoizedState}function lP(n,e,t){var r=Ii(n);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},vE(n))wE(e,t);else if(t=eE(n,e,t,r),t!==null){var i=$t();Bn(t,n,r,i),IE(t,e,r)}}function uP(n,e,t){var r=Ii(n),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(vE(n))wE(e,i);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(i.hasEagerState=!0,i.eagerState=a,$n(a,o)){var u=e.interleaved;u===null?(i.next=i,cg(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}t=eE(n,e,i,r),t!==null&&(i=$t(),Bn(t,n,r,i),IE(t,e,r))}}function vE(n){var e=n.alternate;return n===$e||e!==null&&e===$e}function wE(n,e){bl=Cd=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function IE(n,e,t){if(t&4194240){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,Ym(n,t)}}var Dd={readContext:Pn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},cP={readContext:Pn,useCallback:function(n,e){return Yn().memoizedState=[n,e===void 0?null:e],n},useContext:Pn,useEffect:xv,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Xc(4194308,4,fE.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Xc(4194308,4,n,e)},useInsertionEffect:function(n,e){return Xc(4,2,n,e)},useMemo:function(n,e){var t=Yn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var r=Yn();return e=t!==void 0?t(e):e,r.memoizedState=r.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},r.queue=n,n=n.dispatch=lP.bind(null,$e,n),[r.memoizedState,n]},useRef:function(n){var e=Yn();return n={current:n},e.memoizedState=n},useState:Tv,useDebugValue:vg,useDeferredValue:function(n){return Yn().memoizedState=n},useTransition:function(){var n=Tv(!1),e=n[0];return n=aP.bind(null,n[1]),Yn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var r=$e,i=Yn();if(je){if(t===void 0)throw Error($(407));t=t()}else{if(t=e(),wt===null)throw Error($(349));Ss&30||sE(r,e,t)}i.memoizedState=t;var s={value:t,getSnapshot:e};return i.queue=s,xv(aE.bind(null,r,s,n),[n]),r.flags|=2048,iu(9,oE.bind(null,r,s,t,e),void 0,null),t},useId:function(){var n=Yn(),e=wt.identifierPrefix;if(je){var t=Er,r=Ir;t=(r&~(1<<32-Un(r)-1)).toString(32)+t,e=":"+e+"R"+t,t=nu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=oP++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},dP={readContext:Pn,useCallback:mE,useContext:Pn,useEffect:_g,useImperativeHandle:pE,useInsertionEffect:dE,useLayoutEffect:hE,useMemo:gE,useReducer:Cf,useRef:cE,useState:function(){return Cf(ru)},useDebugValue:vg,useDeferredValue:function(n){var e=bn();return yE(e,ct.memoizedState,n)},useTransition:function(){var n=Cf(ru)[0],e=bn().memoizedState;return[n,e]},useMutableSource:rE,useSyncExternalStore:iE,useId:_E,unstable_isNewReconciler:!1},hP={readContext:Pn,useCallback:mE,useContext:Pn,useEffect:_g,useImperativeHandle:pE,useInsertionEffect:dE,useLayoutEffect:hE,useMemo:gE,useReducer:Df,useRef:cE,useState:function(){return Df(ru)},useDebugValue:vg,useDeferredValue:function(n){var e=bn();return ct===null?e.memoizedState=n:yE(e,ct.memoizedState,n)},useTransition:function(){var n=Df(ru)[0],e=bn().memoizedState;return[n,e]},useMutableSource:rE,useSyncExternalStore:iE,useId:_E,unstable_isNewReconciler:!1};function Mn(n,e){if(n&&n.defaultProps){e=We({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Vp(n,e,t,r){e=n.memoizedState,t=t(r,e),t=t==null?e:We({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var ph={isMounted:function(n){return(n=n._reactInternals)?Bs(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var r=$t(),i=Ii(n),s=Ar(r,i);s.payload=e,t!=null&&(s.callback=t),e=vi(n,s,i),e!==null&&(Bn(e,n,i,r),Yc(e,n,i))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var r=$t(),i=Ii(n),s=Ar(r,i);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=vi(n,s,i),e!==null&&(Bn(e,n,i,r),Yc(e,n,i))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=$t(),r=Ii(n),i=Ar(t,r);i.tag=2,e!=null&&(i.callback=e),e=vi(n,i,r),e!==null&&(Bn(e,n,r,t),Yc(e,n,r))}};function Sv(n,e,t,r,i,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Yl(t,r)||!Yl(i,s):!0}function EE(n,e,t){var r=!1,i=Ai,s=e.contextType;return typeof s=="object"&&s!==null?s=Pn(s):(i=on(e)?Ts:jt.current,r=e.contextTypes,s=(r=r!=null)?qo(n,i):Ai),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ph,n.stateNode=e,e._reactInternals=n,r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=s),e}function Av(n,e,t,r){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==n&&ph.enqueueReplaceState(e,e.state,null)}function Op(n,e,t,r){var i=n.stateNode;i.props=t,i.state=n.memoizedState,i.refs={},dg(n);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Pn(s):(s=on(e)?Ts:jt.current,i.context=qo(n,s)),i.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vp(n,e,s,t),i.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ph.enqueueReplaceState(i,i.state,null),bd(n,t,i,r),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308)}function Ho(n,e){try{var t="",r=e;do t+=UR(r),r=r.return;while(r);var i=t}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:i,digest:null}}function Vf(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Lp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var fP=typeof WeakMap=="function"?WeakMap:Map;function TE(n,e,t){t=Ar(-1,t),t.tag=3,t.payload={element:null};var r=e.value;return t.callback=function(){Od||(Od=!0,Gp=r),Lp(n,e)},t}function xE(n,e,t){t=Ar(-1,t),t.tag=3;var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;t.payload=function(){return r(i)},t.callback=function(){Lp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Lp(n,e),typeof r!="function"&&(wi===null?wi=new Set([this]):wi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Rv(n,e,t){var r=n.pingCache;if(r===null){r=n.pingCache=new fP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(t)||(i.add(t),n=RP.bind(null,n,e,t),e.then(n,n))}function kv(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Pv(n,e,t,r,i){return n.mode&1?(n.flags|=65536,n.lanes=i,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Ar(-1,1),e.tag=2,vi(t,e,1))),t.lanes|=1),n)}var pP=Lr.ReactCurrentOwner,en=!1;function Ut(n,e,t,r){e.child=n===null?ZI(e,null,t,r):Go(e,n.child,t,r)}function bv(n,e,t,r,i){t=t.render;var s=e.ref;return Oo(e,i),r=gg(n,e,t,r,s,i),t=yg(),n!==null&&!en?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i,Nr(n,e,i)):(je&&t&&ig(e),e.flags|=1,Ut(n,e,r,i),e.child)}function Nv(n,e,t,r,i){if(n===null){var s=t.type;return typeof s=="function"&&!Rg(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,SE(n,e,s,r,i)):(n=nd(t.type,null,r,e,e.mode,i),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&i)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Yl,t(o,r)&&n.ref===e.ref)return Nr(n,e,i)}return e.flags|=1,n=Ei(s,r),n.ref=e.ref,n.return=e,e.child=n}function SE(n,e,t,r,i){if(n!==null){var s=n.memoizedProps;if(Yl(s,r)&&n.ref===e.ref)if(en=!1,e.pendingProps=r=s,(n.lanes&i)!==0)n.flags&131072&&(en=!0);else return e.lanes=n.lanes,Nr(n,e,i)}return Mp(n,e,t,r,i)}function AE(n,e,t){var r=e.pendingProps,i=r.children,s=n!==null?n.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(Po,dn),dn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Pe(Po,dn),dn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:t,Pe(Po,dn),dn|=r}else s!==null?(r=s.baseLanes|t,e.memoizedState=null):r=t,Pe(Po,dn),dn|=r;return Ut(n,e,i,t),e.child}function RE(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Mp(n,e,t,r,i){var s=on(t)?Ts:jt.current;return s=qo(e,s),Oo(e,i),t=gg(n,e,t,r,s,i),r=yg(),n!==null&&!en?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i,Nr(n,e,i)):(je&&r&&ig(e),e.flags|=1,Ut(n,e,t,i),e.child)}function Cv(n,e,t,r,i){if(on(t)){var s=!0;Sd(e)}else s=!1;if(Oo(e,i),e.stateNode===null)Zc(n,e),EE(e,t,r),Op(e,t,r,i),r=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Pn(c):(c=on(t)?Ts:jt.current,c=qo(e,c));var f=t.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Av(e,o,r,c),oi=!1;var g=e.memoizedState;o.state=g,bd(e,r,o,i),u=e.memoizedState,a!==r||g!==u||sn.current||oi?(typeof f=="function"&&(Vp(e,t,f,r),u=e.memoizedState),(a=oi||Sv(e,t,a,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,tE(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Mn(e.type,a),o.props=c,m=e.pendingProps,g=o.context,u=t.contextType,typeof u=="object"&&u!==null?u=Pn(u):(u=on(t)?Ts:jt.current,u=qo(e,u));var E=t.getDerivedStateFromProps;(f=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||g!==u)&&Av(e,o,r,u),oi=!1,g=e.memoizedState,o.state=g,bd(e,r,o,i);var b=e.memoizedState;a!==m||g!==b||sn.current||oi?(typeof E=="function"&&(Vp(e,t,E,r),b=e.memoizedState),(c=oi||Sv(e,t,c,r,g,b,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,b,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,b,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&g===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&g===n.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=b),o.props=r,o.state=b,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&g===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&g===n.memoizedState||(e.flags|=1024),r=!1)}return jp(n,e,t,r,s,i)}function jp(n,e,t,r,i,s){RE(n,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&yv(e,t,!1),Nr(n,e,s);r=e.stateNode,pP.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,n!==null&&o?(e.child=Go(e,n.child,null,s),e.child=Go(e,null,a,s)):Ut(n,e,a,s),e.memoizedState=r.state,i&&yv(e,t,!0),e.child}function kE(n){var e=n.stateNode;e.pendingContext?gv(n,e.pendingContext,e.pendingContext!==e.context):e.context&&gv(n,e.context,!1),hg(n,e.containerInfo)}function Dv(n,e,t,r,i){return Wo(),og(i),e.flags|=256,Ut(n,e,t,r),e.child}var Fp={dehydrated:null,treeContext:null,retryLane:0};function Up(n){return{baseLanes:n,cachePool:null,transitions:null}}function PE(n,e,t){var r=e.pendingProps,i=ze.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(i|=1),Pe(ze,i&1),n===null)return Cp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,n=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=yh(o,r,0,null),n=vs(n,r,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Up(t),e.memoizedState=Fp,n):wg(e,o));if(i=n.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return mP(n,e,o,r,a,i,t);if(s){s=r.fallback,o=e.mode,i=n.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Ei(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ei(a,s):(s=vs(s,o,t,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=n.child.memoizedState,o=o===null?Up(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Fp,r}return s=n.child,n=s.sibling,r=Ei(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=t),r.return=e,r.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=r,e.memoizedState=null,r}function wg(n,e){return e=yh({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Dc(n,e,t,r){return r!==null&&og(r),Go(e,n.child,null,t),n=wg(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function mP(n,e,t,r,i,s,o){if(t)return e.flags&256?(e.flags&=-257,r=Vf(Error($(422))),Dc(n,e,o,r)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=yh({mode:"visible",children:r.children},i,0,null),s=vs(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Go(e,n.child,null,o),e.child.memoizedState=Up(o),e.memoizedState=Fp,s);if(!(e.mode&1))return Dc(n,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error($(419)),r=Vf(s,r,void 0),Dc(n,e,o,r)}if(a=(o&n.childLanes)!==0,en||a){if(r=wt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,br(n,i),Bn(r,n,i,-1))}return Ag(),r=Vf(Error($(421))),Dc(n,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=n.child,e=kP.bind(null,n),i._reactRetry=e,null):(n=s.treeContext,fn=_i(i.nextSibling),mn=e,je=!0,Fn=null,n!==null&&(Tn[xn++]=Ir,Tn[xn++]=Er,Tn[xn++]=xs,Ir=n.id,Er=n.overflow,xs=e),e=wg(e,r.children),e.flags|=4096,e)}function Vv(n,e,t){n.lanes|=e;var r=n.alternate;r!==null&&(r.lanes|=e),Dp(n.return,e,t)}function Of(n,e,t,r,i){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=t,s.tailMode=i)}function bE(n,e,t){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ut(n,e,r.children,t),r=ze.current,r&2)r=r&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Vv(n,t,e);else if(n.tag===19)Vv(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}r&=1}if(Pe(ze,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(t=e.child,i=null;t!==null;)n=t.alternate,n!==null&&Nd(n)===null&&(i=t),t=t.sibling;t=i,t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null),Of(e,!1,i,t,s);break;case"backwards":for(t=null,i=e.child,e.child=null;i!==null;){if(n=i.alternate,n!==null&&Nd(n)===null){e.child=i;break}n=i.sibling,i.sibling=t,t=i,i=n}Of(e,!0,t,null,s);break;case"together":Of(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zc(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Nr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),As|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error($(153));if(e.child!==null){for(n=e.child,t=Ei(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ei(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function gP(n,e,t){switch(e.tag){case 3:kE(e),Wo();break;case 5:nE(e);break;case 1:on(e.type)&&Sd(e);break;case 4:hg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Pe(kd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Pe(ze,ze.current&1),e.flags|=128,null):t&e.child.childLanes?PE(n,e,t):(Pe(ze,ze.current&1),n=Nr(n,e,t),n!==null?n.sibling:null);Pe(ze,ze.current&1);break;case 19:if(r=(t&e.childLanes)!==0,n.flags&128){if(r)return bE(n,e,t);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Pe(ze,ze.current),r)break;return null;case 22:case 23:return e.lanes=0,AE(n,e,t)}return Nr(n,e,t)}var NE,Bp,CE,DE;NE=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Bp=function(){};CE=function(n,e,t,r){var i=n.memoizedProps;if(i!==r){n=e.stateNode,ps(or.current);var s=null;switch(t){case"input":i=up(n,i),r=up(n,r),s=[];break;case"select":i=We({},i,{value:void 0}),r=We({},r,{value:void 0}),s=[];break;case"textarea":i=hp(n,i),r=hp(n,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(n.onclick=Td)}pp(t,r);var o;t=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($l.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(s||(s=[]),s.push(c,t)),t=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($l.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ve("scroll",n),s||a===u||(s=[])):(s=s||[]).push(c,u))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};DE=function(n,e,t,r){t!==r&&(e.flags|=4)};function il(n,e){if(!je)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:r.sibling=null}}function Ot(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,r=0;if(e)for(var i=n.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=n,i=i.sibling;else for(i=n.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=n,i=i.sibling;return n.subtreeFlags|=r,n.childLanes=t,e}function yP(n,e,t){var r=e.pendingProps;switch(sg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return on(e.type)&&xd(),Ot(e),null;case 3:return r=e.stateNode,Ko(),Le(sn),Le(jt),pg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(Nc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(Qp(Fn),Fn=null))),Bp(n,e),Ot(e),null;case 5:fg(e);var i=ps(tu.current);if(t=e.type,n!==null&&e.stateNode!=null)CE(n,e,t,r,i),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return Ot(e),null}if(n=ps(or.current),Nc(e)){r=e.stateNode,t=e.type;var s=e.memoizedProps;switch(r[Jn]=e,r[Zl]=s,n=(e.mode&1)!==0,t){case"dialog":Ve("cancel",r),Ve("close",r);break;case"iframe":case"object":case"embed":Ve("load",r);break;case"video":case"audio":for(i=0;i<yl.length;i++)Ve(yl[i],r);break;case"source":Ve("error",r);break;case"img":case"image":case"link":Ve("error",r),Ve("load",r);break;case"details":Ve("toggle",r);break;case"input":$_(r,s),Ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ve("invalid",r);break;case"textarea":W_(r,s),Ve("invalid",r)}pp(t,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&bc(r.textContent,a,n),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&bc(r.textContent,a,n),i=["children",""+a]):$l.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ve("scroll",r)}switch(t){case"input":Ec(r),q_(r,s,!0);break;case"textarea":Ec(r),G_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Td)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=aI(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof r.is=="string"?n=o.createElement(t,{is:r.is}):(n=o.createElement(t),t==="select"&&(o=n,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):n=o.createElementNS(n,t),n[Jn]=e,n[Zl]=r,NE(n,e,!1,!1),e.stateNode=n;e:{switch(o=mp(t,r),t){case"dialog":Ve("cancel",n),Ve("close",n),i=r;break;case"iframe":case"object":case"embed":Ve("load",n),i=r;break;case"video":case"audio":for(i=0;i<yl.length;i++)Ve(yl[i],n);i=r;break;case"source":Ve("error",n),i=r;break;case"img":case"image":case"link":Ve("error",n),Ve("load",n),i=r;break;case"details":Ve("toggle",n),i=r;break;case"input":$_(n,r),i=up(n,r),Ve("invalid",n);break;case"option":i=r;break;case"select":n._wrapperState={wasMultiple:!!r.multiple},i=We({},r,{value:void 0}),Ve("invalid",n);break;case"textarea":W_(n,r),i=hp(n,r),Ve("invalid",n);break;default:i=r}pp(t,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?cI(n,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&lI(n,u)):s==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&ql(n,u):typeof u=="number"&&ql(n,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($l.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ve("scroll",n):u!=null&&qm(n,s,u,o))}switch(t){case"input":Ec(n),q_(n,r,!1);break;case"textarea":Ec(n),G_(n);break;case"option":r.value!=null&&n.setAttribute("value",""+Si(r.value));break;case"select":n.multiple=!!r.multiple,s=r.value,s!=null?No(n,!!r.multiple,s,!1):r.defaultValue!=null&&No(n,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(n.onclick=Td)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ot(e),null;case 6:if(n&&e.stateNode!=null)DE(n,e,n.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(t=ps(tu.current),ps(or.current),Nc(e)){if(r=e.stateNode,t=e.memoizedProps,r[Jn]=e,(s=r.nodeValue!==t)&&(n=mn,n!==null))switch(n.tag){case 3:bc(r.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&bc(r.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Jn]=e,e.stateNode=r}return Ot(e),null;case 13:if(Le(ze),r=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(je&&fn!==null&&e.mode&1&&!(e.flags&128))JI(),Wo(),e.flags|=98560,s=!1;else if(s=Nc(e),r!==null&&r.dehydrated!==null){if(n===null){if(!s)throw Error($(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[Jn]=e}else Wo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ot(e),s=!1}else Fn!==null&&(Qp(Fn),Fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(r=r!==null,r!==(n!==null&&n.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(n===null||ze.current&1?dt===0&&(dt=3):Ag())),e.updateQueue!==null&&(e.flags|=4),Ot(e),null);case 4:return Ko(),Bp(n,e),n===null&&Jl(e.stateNode.containerInfo),Ot(e),null;case 10:return ug(e.type._context),Ot(e),null;case 17:return on(e.type)&&xd(),Ot(e),null;case 19:if(Le(ze),s=e.memoizedState,s===null)return Ot(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)il(s,!1);else{if(dt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Nd(n),o!==null){for(e.flags|=128,il(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=t,t=e.child;t!==null;)s=t,n=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Pe(ze,ze.current&1|2),e.child}n=n.sibling}s.tail!==null&&rt()>Qo&&(e.flags|=128,r=!0,il(s,!1),e.lanes=4194304)}else{if(!r)if(n=Nd(o),n!==null){if(e.flags|=128,r=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),il(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!je)return Ot(e),null}else 2*rt()-s.renderingStartTime>Qo&&t!==1073741824&&(e.flags|=128,r=!0,il(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=rt(),e.sibling=null,t=ze.current,Pe(ze,r?t&1|2:t&1),e):(Ot(e),null);case 22:case 23:return Sg(),r=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?dn&1073741824&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function _P(n,e){switch(sg(e),e.tag){case 1:return on(e.type)&&xd(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ko(),Le(sn),Le(jt),pg(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return fg(e),null;case 13:if(Le(ze),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error($(340));Wo()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Le(ze),null;case 4:return Ko(),null;case 10:return ug(e.type._context),null;case 22:case 23:return Sg(),null;case 24:return null;default:return null}}var Vc=!1,Mt=!1,vP=typeof WeakSet=="function"?WeakSet:Set,J=null;function ko(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){He(n,e,r)}else t.current=null}function zp(n,e,t){try{t()}catch(r){He(n,e,r)}}var Ov=!1;function wP(n,e){if(Sp=wd,n=jI(),rg(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,u=-1,c=0,f=0,m=n,g=null;t:for(;;){for(var E;m!==t||i!==0&&m.nodeType!==3||(a=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(E=m.firstChild)!==null;)g=m,m=E;for(;;){if(m===n)break t;if(g===t&&++c===i&&(a=o),g===s&&++f===r&&(u=o),(E=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=E}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ap={focusedElem:n,selectionRange:t},wd=!1,J=e;J!==null;)if(e=J,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,J=n;else for(;J!==null;){e=J;try{var b=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var N=b.memoizedProps,O=b.memoizedState,S=e.stateNode,v=S.getSnapshotBeforeUpdate(e.elementType===e.type?N:Mn(e.type,N),O);S.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(L){He(e,e.return,L)}if(n=e.sibling,n!==null){n.return=e.return,J=n;break}J=e.return}return b=Ov,Ov=!1,b}function Nl(n,e,t){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&n)===n){var s=i.destroy;i.destroy=void 0,s!==void 0&&zp(e,t,s)}i=i.next}while(i!==r)}}function mh(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}}function $p(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function VE(n){var e=n.alternate;e!==null&&(n.alternate=null,VE(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Jn],delete e[Zl],delete e[Pp],delete e[nP],delete e[rP])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function OE(n){return n.tag===5||n.tag===3||n.tag===4}function Lv(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||OE(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function qp(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Td));else if(r!==4&&(n=n.child,n!==null))for(qp(n,e,t),n=n.sibling;n!==null;)qp(n,e,t),n=n.sibling}function Wp(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(r!==4&&(n=n.child,n!==null))for(Wp(n,e,t),n=n.sibling;n!==null;)Wp(n,e,t),n=n.sibling}var xt=null,jn=!1;function Xr(n,e,t){for(t=t.child;t!==null;)LE(n,e,t),t=t.sibling}function LE(n,e,t){if(sr&&typeof sr.onCommitFiberUnmount=="function")try{sr.onCommitFiberUnmount(ah,t)}catch{}switch(t.tag){case 5:Mt||ko(t,e);case 6:var r=xt,i=jn;xt=null,Xr(n,e,t),xt=r,jn=i,xt!==null&&(jn?(n=xt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):xt.removeChild(t.stateNode));break;case 18:xt!==null&&(jn?(n=xt,t=t.stateNode,n.nodeType===8?kf(n.parentNode,t):n.nodeType===1&&kf(n,t),Hl(n)):kf(xt,t.stateNode));break;case 4:r=xt,i=jn,xt=t.stateNode.containerInfo,jn=!0,Xr(n,e,t),xt=r,jn=i;break;case 0:case 11:case 14:case 15:if(!Mt&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zp(t,e,o),i=i.next}while(i!==r)}Xr(n,e,t);break;case 1:if(!Mt&&(ko(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){He(t,e,a)}Xr(n,e,t);break;case 21:Xr(n,e,t);break;case 22:t.mode&1?(Mt=(r=Mt)||t.memoizedState!==null,Xr(n,e,t),Mt=r):Xr(n,e,t);break;default:Xr(n,e,t)}}function Mv(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new vP),e.forEach(function(r){var i=PP.bind(null,n,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Ln(n,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:xt=a.stateNode,jn=!1;break e;case 3:xt=a.stateNode.containerInfo,jn=!0;break e;case 4:xt=a.stateNode.containerInfo,jn=!0;break e}a=a.return}if(xt===null)throw Error($(160));LE(s,o,i),xt=null,jn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){He(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ME(e,n),e=e.sibling}function ME(n,e){var t=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ln(e,n),Qn(n),r&4){try{Nl(3,n,n.return),mh(3,n)}catch(N){He(n,n.return,N)}try{Nl(5,n,n.return)}catch(N){He(n,n.return,N)}}break;case 1:Ln(e,n),Qn(n),r&512&&t!==null&&ko(t,t.return);break;case 5:if(Ln(e,n),Qn(n),r&512&&t!==null&&ko(t,t.return),n.flags&32){var i=n.stateNode;try{ql(i,"")}catch(N){He(n,n.return,N)}}if(r&4&&(i=n.stateNode,i!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,u=n.updateQueue;if(n.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&sI(i,s),mp(a,o);var c=mp(a,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?cI(i,m):f==="dangerouslySetInnerHTML"?lI(i,m):f==="children"?ql(i,m):qm(i,f,m,c)}switch(a){case"input":cp(i,s);break;case"textarea":oI(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?No(i,!!s.multiple,E,!1):g!==!!s.multiple&&(s.defaultValue!=null?No(i,!!s.multiple,s.defaultValue,!0):No(i,!!s.multiple,s.multiple?[]:"",!1))}i[Zl]=s}catch(N){He(n,n.return,N)}}break;case 6:if(Ln(e,n),Qn(n),r&4){if(n.stateNode===null)throw Error($(162));i=n.stateNode,s=n.memoizedProps;try{i.nodeValue=s}catch(N){He(n,n.return,N)}}break;case 3:if(Ln(e,n),Qn(n),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Hl(e.containerInfo)}catch(N){He(n,n.return,N)}break;case 4:Ln(e,n),Qn(n);break;case 13:Ln(e,n),Qn(n),i=n.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Tg=rt())),r&4&&Mv(n);break;case 22:if(f=t!==null&&t.memoizedState!==null,n.mode&1?(Mt=(c=Mt)||f,Ln(e,n),Mt=c):Ln(e,n),Qn(n),r&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!f&&n.mode&1)for(J=n,f=n.child;f!==null;){for(m=J=f;J!==null;){switch(g=J,E=g.child,g.tag){case 0:case 11:case 14:case 15:Nl(4,g,g.return);break;case 1:ko(g,g.return);var b=g.stateNode;if(typeof b.componentWillUnmount=="function"){r=g,t=g.return;try{e=r,b.props=e.memoizedProps,b.state=e.memoizedState,b.componentWillUnmount()}catch(N){He(r,t,N)}}break;case 5:ko(g,g.return);break;case 22:if(g.memoizedState!==null){Fv(m);continue}}E!==null?(E.return=g,J=E):Fv(m)}f=f.sibling}e:for(f=null,m=n;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=uI("display",o))}catch(N){He(n,n.return,N)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(N){He(n,n.return,N)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===n)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===n)break e;for(;m.sibling===null;){if(m.return===null||m.return===n)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ln(e,n),Qn(n),r&4&&Mv(n);break;case 21:break;default:Ln(e,n),Qn(n)}}function Qn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(OE(t)){var r=t;break e}t=t.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ql(i,""),r.flags&=-33);var s=Lv(n);Wp(n,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Lv(n);qp(n,a,o);break;default:throw Error($(161))}}catch(u){He(n,n.return,u)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function IP(n,e,t){J=n,jE(n)}function jE(n,e,t){for(var r=(n.mode&1)!==0;J!==null;){var i=J,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Vc;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Mt;a=Vc;var c=Mt;if(Vc=o,(Mt=u)&&!c)for(J=i;J!==null;)o=J,u=o.child,o.tag===22&&o.memoizedState!==null?Uv(i):u!==null?(u.return=o,J=u):Uv(i);for(;s!==null;)J=s,jE(s),s=s.sibling;J=i,Vc=a,Mt=c}jv(n)}else i.subtreeFlags&8772&&s!==null?(s.return=i,J=s):jv(n)}}function jv(n){for(;J!==null;){var e=J;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Mt||mh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Mt)if(t===null)r.componentDidMount();else{var i=e.elementType===e.type?t.memoizedProps:Mn(e.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ev(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Ev(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Hl(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}Mt||e.flags&512&&$p(e)}catch(g){He(e,e.return,g)}}if(e===n){J=null;break}if(t=e.sibling,t!==null){t.return=e.return,J=t;break}J=e.return}}function Fv(n){for(;J!==null;){var e=J;if(e===n){J=null;break}var t=e.sibling;if(t!==null){t.return=e.return,J=t;break}J=e.return}}function Uv(n){for(;J!==null;){var e=J;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{mh(4,e)}catch(u){He(e,t,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){He(e,i,u)}}var s=e.return;try{$p(e)}catch(u){He(e,s,u)}break;case 5:var o=e.return;try{$p(e)}catch(u){He(e,o,u)}}}catch(u){He(e,e.return,u)}if(e===n){J=null;break}var a=e.sibling;if(a!==null){a.return=e.return,J=a;break}J=e.return}}var EP=Math.ceil,Vd=Lr.ReactCurrentDispatcher,Ig=Lr.ReactCurrentOwner,Rn=Lr.ReactCurrentBatchConfig,ge=0,wt=null,ut=null,Rt=0,dn=0,Po=Fi(0),dt=0,su=null,As=0,gh=0,Eg=0,Cl=null,Zt=null,Tg=0,Qo=1/0,vr=null,Od=!1,Gp=null,wi=null,Oc=!1,hi=null,Ld=0,Dl=0,Kp=null,ed=-1,td=0;function $t(){return ge&6?rt():ed!==-1?ed:ed=rt()}function Ii(n){return n.mode&1?ge&2&&Rt!==0?Rt&-Rt:sP.transition!==null?(td===0&&(td=EI()),td):(n=Se,n!==0||(n=window.event,n=n===void 0?16:PI(n.type)),n):1}function Bn(n,e,t,r){if(50<Dl)throw Dl=0,Kp=null,Error($(185));bu(n,t,r),(!(ge&2)||n!==wt)&&(n===wt&&(!(ge&2)&&(gh|=t),dt===4&&li(n,Rt)),an(n,r),t===1&&ge===0&&!(e.mode&1)&&(Qo=rt()+500,hh&&Ui()))}function an(n,e){var t=n.callbackNode;sk(n,e);var r=vd(n,n===wt?Rt:0);if(r===0)t!==null&&Q_(t),n.callbackNode=null,n.callbackPriority=0;else if(e=r&-r,n.callbackPriority!==e){if(t!=null&&Q_(t),e===1)n.tag===0?iP(Bv.bind(null,n)):HI(Bv.bind(null,n)),eP(function(){!(ge&6)&&Ui()}),t=null;else{switch(TI(r)){case 1:t=Qm;break;case 4:t=wI;break;case 16:t=_d;break;case 536870912:t=II;break;default:t=_d}t=GE(t,FE.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function FE(n,e){if(ed=-1,td=0,ge&6)throw Error($(327));var t=n.callbackNode;if(Lo()&&n.callbackNode!==t)return null;var r=vd(n,n===wt?Rt:0);if(r===0)return null;if(r&30||r&n.expiredLanes||e)e=Md(n,r);else{e=r;var i=ge;ge|=2;var s=BE();(wt!==n||Rt!==e)&&(vr=null,Qo=rt()+500,_s(n,e));do try{SP();break}catch(a){UE(n,a)}while(!0);lg(),Vd.current=s,ge=i,ut!==null?e=0:(wt=null,Rt=0,e=dt)}if(e!==0){if(e===2&&(i=wp(n),i!==0&&(r=i,e=Hp(n,i))),e===1)throw t=su,_s(n,0),li(n,r),an(n,rt()),t;if(e===6)li(n,r);else{if(i=n.current.alternate,!(r&30)&&!TP(i)&&(e=Md(n,r),e===2&&(s=wp(n),s!==0&&(r=s,e=Hp(n,s))),e===1))throw t=su,_s(n,0),li(n,r),an(n,rt()),t;switch(n.finishedWork=i,n.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:is(n,Zt,vr);break;case 3:if(li(n,r),(r&130023424)===r&&(e=Tg+500-rt(),10<e)){if(vd(n,0)!==0)break;if(i=n.suspendedLanes,(i&r)!==r){$t(),n.pingedLanes|=n.suspendedLanes&i;break}n.timeoutHandle=kp(is.bind(null,n,Zt,vr),e);break}is(n,Zt,vr);break;case 4:if(li(n,r),(r&4194240)===r)break;for(e=n.eventTimes,i=-1;0<r;){var o=31-Un(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=rt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*EP(r/1960))-r,10<r){n.timeoutHandle=kp(is.bind(null,n,Zt,vr),r);break}is(n,Zt,vr);break;case 5:is(n,Zt,vr);break;default:throw Error($(329))}}}return an(n,rt()),n.callbackNode===t?FE.bind(null,n):null}function Hp(n,e){var t=Cl;return n.current.memoizedState.isDehydrated&&(_s(n,e).flags|=256),n=Md(n,e),n!==2&&(e=Zt,Zt=t,e!==null&&Qp(e)),n}function Qp(n){Zt===null?Zt=n:Zt.push.apply(Zt,n)}function TP(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],s=i.getSnapshot;i=i.value;try{if(!$n(s(),i))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function li(n,e){for(e&=~Eg,e&=~gh,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Un(e),r=1<<t;n[t]=-1,e&=~r}}function Bv(n){if(ge&6)throw Error($(327));Lo();var e=vd(n,0);if(!(e&1))return an(n,rt()),null;var t=Md(n,e);if(n.tag!==0&&t===2){var r=wp(n);r!==0&&(e=r,t=Hp(n,r))}if(t===1)throw t=su,_s(n,0),li(n,e),an(n,rt()),t;if(t===6)throw Error($(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,is(n,Zt,vr),an(n,rt()),null}function xg(n,e){var t=ge;ge|=1;try{return n(e)}finally{ge=t,ge===0&&(Qo=rt()+500,hh&&Ui())}}function Rs(n){hi!==null&&hi.tag===0&&!(ge&6)&&Lo();var e=ge;ge|=1;var t=Rn.transition,r=Se;try{if(Rn.transition=null,Se=1,n)return n()}finally{Se=r,Rn.transition=t,ge=e,!(ge&6)&&Ui()}}function Sg(){dn=Po.current,Le(Po)}function _s(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Zk(t)),ut!==null)for(t=ut.return;t!==null;){var r=t;switch(sg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xd();break;case 3:Ko(),Le(sn),Le(jt),pg();break;case 5:fg(r);break;case 4:Ko();break;case 13:Le(ze);break;case 19:Le(ze);break;case 10:ug(r.type._context);break;case 22:case 23:Sg()}t=t.return}if(wt=n,ut=n=Ei(n.current,null),Rt=dn=e,dt=0,su=null,Eg=gh=As=0,Zt=Cl=null,fs!==null){for(e=0;e<fs.length;e++)if(t=fs[e],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,s=t.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}t.pending=r}fs=null}return n}function UE(n,e){do{var t=ut;try{if(lg(),Jc.current=Dd,Cd){for(var r=$e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Cd=!1}if(Ss=0,_t=ct=$e=null,bl=!1,nu=0,Ig.current=null,t===null||t.return===null){dt=1,su=e,ut=null;break}e:{var s=n,o=t.return,a=t,u=e;if(e=Rt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=a,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var E=kv(o);if(E!==null){E.flags&=-257,Pv(E,o,a,s,e),E.mode&1&&Rv(s,c,e),e=E,u=c;var b=e.updateQueue;if(b===null){var N=new Set;N.add(u),e.updateQueue=N}else b.add(u);break e}else{if(!(e&1)){Rv(s,c,e),Ag();break e}u=Error($(426))}}else if(je&&a.mode&1){var O=kv(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Pv(O,o,a,s,e),og(Ho(u,a));break e}}s=u=Ho(u,a),dt!==4&&(dt=2),Cl===null?Cl=[s]:Cl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=TE(s,u,e);Iv(s,S);break e;case 1:a=u;var v=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(wi===null||!wi.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=xE(s,a,e);Iv(s,L);break e}}s=s.return}while(s!==null)}$E(t)}catch(z){e=z,ut===t&&t!==null&&(ut=t=t.return);continue}break}while(!0)}function BE(){var n=Vd.current;return Vd.current=Dd,n===null?Dd:n}function Ag(){(dt===0||dt===3||dt===2)&&(dt=4),wt===null||!(As&268435455)&&!(gh&268435455)||li(wt,Rt)}function Md(n,e){var t=ge;ge|=2;var r=BE();(wt!==n||Rt!==e)&&(vr=null,_s(n,e));do try{xP();break}catch(i){UE(n,i)}while(!0);if(lg(),ge=t,Vd.current=r,ut!==null)throw Error($(261));return wt=null,Rt=0,dt}function xP(){for(;ut!==null;)zE(ut)}function SP(){for(;ut!==null&&!YR();)zE(ut)}function zE(n){var e=WE(n.alternate,n,dn);n.memoizedProps=n.pendingProps,e===null?$E(n):ut=e,Ig.current=null}function $E(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=_P(t,e),t!==null){t.flags&=32767,ut=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dt=6,ut=null;return}}else if(t=yP(t,e,dn),t!==null){ut=t;return}if(e=e.sibling,e!==null){ut=e;return}ut=e=n}while(e!==null);dt===0&&(dt=5)}function is(n,e,t){var r=Se,i=Rn.transition;try{Rn.transition=null,Se=1,AP(n,e,t,r)}finally{Rn.transition=i,Se=r}return null}function AP(n,e,t,r){do Lo();while(hi!==null);if(ge&6)throw Error($(327));t=n.finishedWork;var i=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error($(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(ok(n,s),n===wt&&(ut=wt=null,Rt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Oc||(Oc=!0,GE(_d,function(){return Lo(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Rn.transition,Rn.transition=null;var o=Se;Se=1;var a=ge;ge|=4,Ig.current=null,wP(n,t),ME(t,n),Gk(Ap),wd=!!Sp,Ap=Sp=null,n.current=t,IP(t),JR(),ge=a,Se=o,Rn.transition=s}else n.current=t;if(Oc&&(Oc=!1,hi=n,Ld=i),s=n.pendingLanes,s===0&&(wi=null),ek(t.stateNode),an(n,rt()),e!==null)for(r=n.onRecoverableError,t=0;t<e.length;t++)i=e[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Od)throw Od=!1,n=Gp,Gp=null,n;return Ld&1&&n.tag!==0&&Lo(),s=n.pendingLanes,s&1?n===Kp?Dl++:(Dl=0,Kp=n):Dl=0,Ui(),null}function Lo(){if(hi!==null){var n=TI(Ld),e=Rn.transition,t=Se;try{if(Rn.transition=null,Se=16>n?16:n,hi===null)var r=!1;else{if(n=hi,hi=null,Ld=0,ge&6)throw Error($(331));var i=ge;for(ge|=4,J=n.current;J!==null;){var s=J,o=s.child;if(J.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(J=c;J!==null;){var f=J;switch(f.tag){case 0:case 11:case 15:Nl(8,f,s)}var m=f.child;if(m!==null)m.return=f,J=m;else for(;J!==null;){f=J;var g=f.sibling,E=f.return;if(VE(f),f===c){J=null;break}if(g!==null){g.return=E,J=g;break}J=E}}}var b=s.alternate;if(b!==null){var N=b.child;if(N!==null){b.child=null;do{var O=N.sibling;N.sibling=null,N=O}while(N!==null)}}J=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,J=o;else e:for(;J!==null;){if(s=J,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Nl(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,J=S;break e}J=s.return}}var v=n.current;for(J=v;J!==null;){o=J;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,J=A;else e:for(o=v;J!==null;){if(a=J,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:mh(9,a)}}catch(z){He(a,a.return,z)}if(a===o){J=null;break e}var L=a.sibling;if(L!==null){L.return=a.return,J=L;break e}J=a.return}}if(ge=i,Ui(),sr&&typeof sr.onPostCommitFiberRoot=="function")try{sr.onPostCommitFiberRoot(ah,n)}catch{}r=!0}return r}finally{Se=t,Rn.transition=e}}return!1}function zv(n,e,t){e=Ho(t,e),e=TE(n,e,1),n=vi(n,e,1),e=$t(),n!==null&&(bu(n,1,e),an(n,e))}function He(n,e,t){if(n.tag===3)zv(n,n,t);else for(;e!==null;){if(e.tag===3){zv(e,n,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wi===null||!wi.has(r))){n=Ho(t,n),n=xE(e,n,1),e=vi(e,n,1),n=$t(),e!==null&&(bu(e,1,n),an(e,n));break}}e=e.return}}function RP(n,e,t){var r=n.pingCache;r!==null&&r.delete(e),e=$t(),n.pingedLanes|=n.suspendedLanes&t,wt===n&&(Rt&t)===t&&(dt===4||dt===3&&(Rt&130023424)===Rt&&500>rt()-Tg?_s(n,0):Eg|=t),an(n,e)}function qE(n,e){e===0&&(n.mode&1?(e=Sc,Sc<<=1,!(Sc&130023424)&&(Sc=4194304)):e=1);var t=$t();n=br(n,e),n!==null&&(bu(n,e,t),an(n,t))}function kP(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),qE(n,t)}function PP(n,e){var t=0;switch(n.tag){case 13:var r=n.stateNode,i=n.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=n.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),qE(n,t)}var WE;WE=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||sn.current)en=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return en=!1,gP(n,e,t);en=!!(n.flags&131072)}else en=!1,je&&e.flags&1048576&&QI(e,Rd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Zc(n,e),n=e.pendingProps;var i=qo(e,jt.current);Oo(e,t),i=gg(null,e,r,n,i,t);var s=yg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(r)?(s=!0,Sd(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,dg(e),i.updater=ph,e.stateNode=i,i._reactInternals=e,Op(e,r,n,t),e=jp(null,e,r,!0,s,t)):(e.tag=0,je&&s&&ig(e),Ut(null,e,i,t),e=e.child),e;case 16:r=e.elementType;e:{switch(Zc(n,e),n=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=NP(r),n=Mn(r,n),i){case 0:e=Mp(null,e,r,n,t);break e;case 1:e=Cv(null,e,r,n,t);break e;case 11:e=bv(null,e,r,n,t);break e;case 14:e=Nv(null,e,r,Mn(r.type,n),t);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mn(r,i),Mp(n,e,r,i,t);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mn(r,i),Cv(n,e,r,i,t);case 3:e:{if(kE(e),n===null)throw Error($(387));r=e.pendingProps,s=e.memoizedState,i=s.element,tE(n,e),bd(e,r,null,t);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ho(Error($(423)),e),e=Dv(n,e,r,t,i);break e}else if(r!==i){i=Ho(Error($(424)),e),e=Dv(n,e,r,t,i);break e}else for(fn=_i(e.stateNode.containerInfo.firstChild),mn=e,je=!0,Fn=null,t=ZI(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Wo(),r===i){e=Nr(n,e,t);break e}Ut(n,e,r,t)}e=e.child}return e;case 5:return nE(e),n===null&&Cp(e),r=e.type,i=e.pendingProps,s=n!==null?n.memoizedProps:null,o=i.children,Rp(r,i)?o=null:s!==null&&Rp(r,s)&&(e.flags|=32),RE(n,e),Ut(n,e,o,t),e.child;case 6:return n===null&&Cp(e),null;case 13:return PE(n,e,t);case 4:return hg(e,e.stateNode.containerInfo),r=e.pendingProps,n===null?e.child=Go(e,null,r,t):Ut(n,e,r,t),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mn(r,i),bv(n,e,r,i,t);case 7:return Ut(n,e,e.pendingProps,t),e.child;case 8:return Ut(n,e,e.pendingProps.children,t),e.child;case 12:return Ut(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Pe(kd,r._currentValue),r._currentValue=o,s!==null)if($n(s.value,o)){if(s.children===i.children&&!sn.current){e=Nr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Ar(-1,t&-t),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=t,u=s.alternate,u!==null&&(u.lanes|=t),Dp(s.return,t,e),a.lanes|=t;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Dp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ut(n,e,i.children,t),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Oo(e,t),i=Pn(i),r=r(i),e.flags|=1,Ut(n,e,r,t),e.child;case 14:return r=e.type,i=Mn(r,e.pendingProps),i=Mn(r.type,i),Nv(n,e,r,i,t);case 15:return SE(n,e,e.type,e.pendingProps,t);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mn(r,i),Zc(n,e),e.tag=1,on(r)?(n=!0,Sd(e)):n=!1,Oo(e,t),EE(e,r,i),Op(e,r,i,t),jp(null,e,r,!0,n,t);case 19:return bE(n,e,t);case 22:return AE(n,e,t)}throw Error($(156,e.tag))};function GE(n,e){return vI(n,e)}function bP(n,e,t,r){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(n,e,t,r){return new bP(n,e,t,r)}function Rg(n){return n=n.prototype,!(!n||!n.isReactComponent)}function NP(n){if(typeof n=="function")return Rg(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Gm)return 11;if(n===Km)return 14}return 2}function Ei(n,e){var t=n.alternate;return t===null?(t=Sn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function nd(n,e,t,r,i,s){var o=2;if(r=n,typeof n=="function")Rg(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case vo:return vs(t.children,i,s,e);case Wm:o=8,i|=8;break;case sp:return n=Sn(12,t,e,i|2),n.elementType=sp,n.lanes=s,n;case op:return n=Sn(13,t,e,i),n.elementType=op,n.lanes=s,n;case ap:return n=Sn(19,t,e,i),n.elementType=ap,n.lanes=s,n;case nI:return yh(t,i,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case eI:o=10;break e;case tI:o=9;break e;case Gm:o=11;break e;case Km:o=14;break e;case si:o=16,r=null;break e}throw Error($(130,n==null?n:typeof n,""))}return e=Sn(o,t,e,i),e.elementType=n,e.type=r,e.lanes=s,e}function vs(n,e,t,r){return n=Sn(7,n,r,e),n.lanes=t,n}function yh(n,e,t,r){return n=Sn(22,n,r,e),n.elementType=nI,n.lanes=t,n.stateNode={isHidden:!1},n}function Lf(n,e,t){return n=Sn(6,n,null,e),n.lanes=t,n}function Mf(n,e,t){return e=Sn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function CP(n,e,t,r,i){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yf(0),this.expirationTimes=yf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function kg(n,e,t,r,i,s,o,a,u){return n=new CP(n,e,t,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Sn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},dg(s),n}function DP(n,e,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_o,key:r==null?null:""+r,children:n,containerInfo:e,implementation:t}}function KE(n){if(!n)return Ai;n=n._reactInternals;e:{if(Bs(n)!==n||n.tag!==1)throw Error($(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(n.tag===1){var t=n.type;if(on(t))return KI(n,t,e)}return e}function HE(n,e,t,r,i,s,o,a,u){return n=kg(t,r,!0,n,i,s,o,a,u),n.context=KE(null),t=n.current,r=$t(),i=Ii(t),s=Ar(r,i),s.callback=e??null,vi(t,s,i),n.current.lanes=i,bu(n,i,r),an(n,r),n}function _h(n,e,t,r){var i=e.current,s=$t(),o=Ii(i);return t=KE(t),e.context===null?e.context=t:e.pendingContext=t,e=Ar(s,o),e.payload={element:n},r=r===void 0?null:r,r!==null&&(e.callback=r),n=vi(i,e,o),n!==null&&(Bn(n,i,o,s),Yc(n,i,o)),o}function jd(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function $v(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Pg(n,e){$v(n,e),(n=n.alternate)&&$v(n,e)}function VP(){return null}var QE=typeof reportError=="function"?reportError:function(n){console.error(n)};function bg(n){this._internalRoot=n}vh.prototype.render=bg.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error($(409));_h(n,e,null,null)};vh.prototype.unmount=bg.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Rs(function(){_h(null,n,null,null)}),e[Pr]=null}};function vh(n){this._internalRoot=n}vh.prototype.unstable_scheduleHydration=function(n){if(n){var e=AI();n={blockedOn:null,target:n,priority:e};for(var t=0;t<ai.length&&e!==0&&e<ai[t].priority;t++);ai.splice(t,0,n),t===0&&kI(n)}};function Ng(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function wh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function qv(){}function OP(n,e,t,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=jd(o);s.call(c)}}var o=HE(e,r,n,0,null,!1,!1,"",qv);return n._reactRootContainer=o,n[Pr]=o.current,Jl(n.nodeType===8?n.parentNode:n),Rs(),o}for(;i=n.lastChild;)n.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=jd(u);a.call(c)}}var u=kg(n,0,!1,null,null,!1,!1,"",qv);return n._reactRootContainer=u,n[Pr]=u.current,Jl(n.nodeType===8?n.parentNode:n),Rs(function(){_h(e,u,t,r)}),u}function Ih(n,e,t,r,i){var s=t._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=jd(o);a.call(u)}}_h(e,o,n,i)}else o=OP(t,e,n,i,r);return jd(o)}xI=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=gl(e.pendingLanes);t!==0&&(Ym(e,t|1),an(e,rt()),!(ge&6)&&(Qo=rt()+500,Ui()))}break;case 13:Rs(function(){var r=br(n,1);if(r!==null){var i=$t();Bn(r,n,1,i)}}),Pg(n,1)}};Jm=function(n){if(n.tag===13){var e=br(n,134217728);if(e!==null){var t=$t();Bn(e,n,134217728,t)}Pg(n,134217728)}};SI=function(n){if(n.tag===13){var e=Ii(n),t=br(n,e);if(t!==null){var r=$t();Bn(t,n,e,r)}Pg(n,e)}};AI=function(){return Se};RI=function(n,e){var t=Se;try{return Se=n,e()}finally{Se=t}};yp=function(n,e,t){switch(e){case"input":if(cp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==n&&r.form===n.form){var i=dh(r);if(!i)throw Error($(90));iI(r),cp(r,i)}}}break;case"textarea":oI(n,t);break;case"select":e=t.value,e!=null&&No(n,!!t.multiple,e,!1)}};fI=xg;pI=Rs;var LP={usingClientEntryPoint:!1,Events:[Cu,To,dh,dI,hI,xg]},sl={findFiberByHostInstance:hs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},MP={bundleType:sl.bundleType,version:sl.version,rendererPackageName:sl.rendererPackageName,rendererConfig:sl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=yI(n),n===null?null:n.stateNode},findFiberByHostInstance:sl.findFiberByHostInstance||VP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lc.isDisabled&&Lc.supportsFiber)try{ah=Lc.inject(MP),sr=Lc}catch{}}_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=LP;_n.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ng(e))throw Error($(200));return DP(n,e,null,t)};_n.createRoot=function(n,e){if(!Ng(n))throw Error($(299));var t=!1,r="",i=QE;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=kg(n,1,!1,null,null,t,!1,r,i),n[Pr]=e.current,Jl(n.nodeType===8?n.parentNode:n),new bg(e)};_n.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error($(188)):(n=Object.keys(n).join(","),Error($(268,n)));return n=yI(e),n=n===null?null:n.stateNode,n};_n.flushSync=function(n){return Rs(n)};_n.hydrate=function(n,e,t){if(!wh(e))throw Error($(200));return Ih(null,n,e,!0,t)};_n.hydrateRoot=function(n,e,t){if(!Ng(n))throw Error($(405));var r=t!=null&&t.hydratedSources||null,i=!1,s="",o=QE;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=HE(e,null,n,1,t??null,i,!1,s,o),n[Pr]=e.current,Jl(n),r)for(n=0;n<r.length;n++)t=r[n],i=t._getVersion,i=i(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,i]:e.mutableSourceEagerHydrationData.push(t,i);return new vh(e)};_n.render=function(n,e,t){if(!wh(e))throw Error($(200));return Ih(null,n,e,!1,t)};_n.unmountComponentAtNode=function(n){if(!wh(n))throw Error($(40));return n._reactRootContainer?(Rs(function(){Ih(null,null,n,!1,function(){n._reactRootContainer=null,n[Pr]=null})}),!0):!1};_n.unstable_batchedUpdates=xg;_n.unstable_renderSubtreeIntoContainer=function(n,e,t,r){if(!wh(t))throw Error($(200));if(n==null||n._reactInternals===void 0)throw Error($(38));return Ih(n,e,t,!1,r)};_n.version="18.3.1-next-f1338f8080-20240426";function YE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(YE)}catch(n){console.error(n)}}YE(),Y0.exports=_n;var jP=Y0.exports,Wv=jP;rp.createRoot=Wv.createRoot,rp.hydrateRoot=Wv.hydrateRoot;var ie=(n=>(n.STUDIES="studies",n.PASTOR_WORD="pastor_word",n.ANNOUNCEMENTS="announcements",n.CELL_MEMBERS="cell_members",n.CELL_REGISTRY="cell_registry",n.MUSIC_PLAYER="music_player",n.REPORTS="reports",n.LEADERS="leaders",n.MINISTRIES="ministries",n.BIRTHDAYS="birthdays",n))(ie||{});/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var FP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UP=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),pe=(n,e)=>{const t=se.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:u,...c},f)=>se.createElement("svg",{ref:f,...FP,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${UP(n)}`,a].join(" "),...c},[...e.map(([m,g])=>se.createElement(m,g)),...Array.isArray(u)?u:[u]]));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=pe("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=pe("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=pe("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=pe("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=pe("Cake",[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h0.01",key:"hsw7lv"}],["path",{d:"M12 4h0.01",key:"1e3d8f"}],["path",{d:"M17 4h0.01",key:"p7cxgy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BP=pe("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=pe("Church",[["path",{d:"m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2",key:"gy5gyo"}],["path",{d:"M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4",key:"cpkuc4"}],["path",{d:"M18 22V5l-6-3-6 3v17",key:"1hsnhq"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M10 9h4",key:"u4k05v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zP=pe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $P=pe("CloudOff",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193",key:"yfwify"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07",key:"jlfiyv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qP=pe("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WP=pe("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GP=pe("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=pe("FileBarChart",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-2",key:"qcmpov"}],["path",{d:"M12 18v-4",key:"q1q25u"}],["path",{d:"M16 18v-6",key:"15y0np"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KP=pe("FileSpreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HP=pe("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=pe("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QP=pe("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=pe("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YP=pe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JP=pe("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XP=pe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZP=pe("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=pe("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=pe("MessageSquareQuote",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8",key:"1jfesj"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2",key:"1dq9mh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=pe("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=pe("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=pe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=pe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=pe("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=pe("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=pe("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=pe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=pe("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=pe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=pe("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),sb=({currentView:n,onNavigate:e,onLogout:t})=>{const r=[{id:ie.CELL_REGISTRY,label:"Células",icon:h.jsx(Zp,{size:20})},{id:ie.CELL_MEMBERS,label:"Membros",icon:h.jsx(tT,{size:20})},{id:ie.LEADERS,label:"Líderes",icon:h.jsx(tm,{size:20})},{id:ie.BIRTHDAYS,label:"Aniversariantes",icon:h.jsx(Xp,{size:20})},{id:ie.MINISTRIES,label:"Ministérios",icon:h.jsx(Jp,{size:20})},{id:ie.STUDIES,label:"Estudos",icon:h.jsx(JE,{size:20})},{id:ie.PASTOR_WORD,label:"Palavra do Pastor",icon:h.jsx(eT,{size:20})},{id:ie.ANNOUNCEMENTS,label:"Avisos",icon:h.jsx(Yp,{size:20})},{id:ie.MUSIC_PLAYER,label:"Louvor",icon:h.jsx(em,{size:20})},{id:ie.REPORTS,label:"Relatórios",icon:h.jsx(ZE,{size:20})}];return h.jsxs("aside",{className:"w-64 bg-indigo-950 text-white h-screen fixed left-0 top-0 hidden md:flex flex-col shadow-2xl z-40",children:[h.jsxs("div",{className:"p-6 flex items-center gap-3 border-b border-indigo-900/50",children:[h.jsx("div",{className:"p-2 bg-indigo-600 rounded-xl shadow-lg shadow-indigo-500/20",children:h.jsx(XE,{className:"text-white",size:24})}),h.jsx("h1",{className:"font-black text-xl tracking-tighter italic",children:"Liderança IRV"})]}),h.jsx("nav",{className:"flex-1 p-4 space-y-1 mt-4 overflow-y-auto scrollbar-hide",children:r.map(i=>h.jsxs("button",{onClick:()=>e(i.id),className:`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${n===i.id?"bg-indigo-600 text-white shadow-xl shadow-indigo-600/20 scale-[1.02]":"text-indigo-200 hover:bg-white/5 hover:text-white"}`,children:[i.icon,h.jsx("span",{className:"font-bold text-sm",children:i.label})]},i.id))}),h.jsxs("div",{className:"p-4 border-t border-indigo-900/50 space-y-4",children:[h.jsx("div",{className:"bg-white/5 p-4 rounded-2xl text-[10px] text-indigo-300 uppercase tracking-[0.2em] font-black text-center",children:"Gestão Pastoral"}),h.jsxs("button",{onClick:t,className:"w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300 font-bold text-sm",children:[h.jsx(XP,{size:18}),h.jsx("span",{children:"Sair do Sistema"})]})]})]})};var Kv={};/**
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
 */const nT=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ob=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},rT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,u=i+2<n.length,c=u?n[i+2]:0,f=s>>2,m=(s&3)<<4|a>>4;let g=(a&15)<<2|c>>6,E=c&63;u||(E=64,o||(g=64)),r.push(t[f],t[m],t[g],t[E])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(nT(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ob(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const m=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||m==null)throw new ab;const g=s<<2|a>>4;if(r.push(g),c!==64){const E=a<<4&240|c>>2;if(r.push(E),m!==64){const b=c<<6&192|m;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ab extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lb=function(n){const e=nT(n);return rT.encodeByteArray(e,!0)},Fd=function(n){return lb(n).replace(/\./g,"")},iT=function(n){try{return rT.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Ud(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!ub(t)||(n[t]=Ud(n[t],e[t]));return n}function ub(n){return n!=="__proto__"}/**
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
 */function sT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const cb=()=>sT().__FIREBASE_DEFAULTS__,db=()=>{if(typeof process>"u"||typeof Kv>"u")return;const n=Kv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},hb=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&iT(n[1]);return e&&JSON.parse(e)},Cg=()=>{try{return cb()||db()||hb()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},oT=()=>{var n;return(n=Cg())===null||n===void 0?void 0:n.config},fb=n=>{var e;return(e=Cg())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class pb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function mb(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Fd(JSON.stringify(t)),Fd(JSON.stringify(o)),""].join(".")}/**
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
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function Dg(){var n;const e=(n=Cg())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yb(){return typeof window<"u"||aT()}function aT(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function _b(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function lT(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Vg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uT(){const n=Ge();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function cT(){return!Dg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ou(){try{return typeof indexedDB=="object"}catch{return!1}}function vb(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const wb="FirebaseError";class qt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=wb,Object.setPrototypeOf(this,qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zs.prototype.create)}}class zs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Ib(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new qt(i,a,r)}}function Ib(n,e){return n.replace(Eb,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Eb=/\{\$([^}]+)}/g;/**
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
 */function Hv(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Tb(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function au(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Qv(s)&&Qv(o)){if(!au(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Qv(n){return n!==null&&typeof n=="object"}/**
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
 */function ga(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bo(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function _l(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function dT(n,e){const t=new xb(n,e);return t.subscribe.bind(t)}class xb{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Sb(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Uf),i.error===void 0&&(i.error=Uf),i.complete===void 0&&(i.complete=Uf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Sb(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Uf(){}/**
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
 */function ne(n){return n&&n._delegate?n._delegate:n}class ur{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ss="[DEFAULT]";/**
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
 */class Ab{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new pb;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kb(e))try{this.getOrInitializeService({instanceIdentifier:ss})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ss){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ss){return this.instances.has(e)}getOptions(e=ss){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rb(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ss){return this.component?this.component.multipleInstances?e:ss:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rb(n){return n===ss?void 0:n}function kb(n){return n.instantiationMode==="EAGER"}/**
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
 */class hT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ab(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Og=[];var ce;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ce||(ce={}));const fT={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Pb=ce.INFO,bb={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},Nb=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=bb[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Eh{constructor(e){this.name=e,this._logLevel=Pb,this._logHandler=Nb,this._userLogHandler=null,Og.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}function Cb(n){Og.forEach(e=>{e.setLogLevel(n)})}function Db(n,e){for(const t of Og){let r=null;e&&e.level&&(r=fT[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&n({level:ce[s].toLowerCase(),message:a,args:o,type:i.name})}}}const Vb=(n,e)=>e.some(t=>n instanceof t);let Yv,Jv;function Ob(){return Yv||(Yv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lb(){return Jv||(Jv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pT=new WeakMap,nm=new WeakMap,mT=new WeakMap,Bf=new WeakMap,Lg=new WeakMap;function Mb(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Ti(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&pT.set(t,n)}).catch(()=>{}),Lg.set(e,n),e}function jb(n){if(nm.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});nm.set(n,e)}let rm={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return nm.get(n);if(e==="objectStoreNames")return n.objectStoreNames||mT.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ti(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Fb(n){rm=n(rm)}function Ub(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(zf(this),e,...t);return mT.set(r,e.sort?e.sort():[e]),Ti(r)}:Lb().includes(n)?function(...e){return n.apply(zf(this),e),Ti(pT.get(this))}:function(...e){return Ti(n.apply(zf(this),e))}}function Bb(n){return typeof n=="function"?Ub(n):(n instanceof IDBTransaction&&jb(n),Vb(n,Ob())?new Proxy(n,rm):n)}function Ti(n){if(n instanceof IDBRequest)return Mb(n);if(Bf.has(n))return Bf.get(n);const e=Bb(n);return e!==n&&(Bf.set(n,e),Lg.set(e,n)),e}const zf=n=>Lg.get(n);function zb(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Ti(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Ti(o.result),u.oldVersion,u.newVersion,Ti(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const $b=["get","getKey","getAll","getAllKeys","count"],qb=["put","add","delete","clear"],$f=new Map;function Xv(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if($f.get(e))return $f.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=qb.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||$b.includes(t)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&u.done]))[0]};return $f.set(e,s),s}Fb(n=>({...n,get:(e,t,r)=>Xv(e,t)||n.get(e,t,r),has:(e,t)=>!!Xv(e,t)||n.has(e,t)}));/**
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
 */class Wb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Gb(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Gb(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bd="@firebase/app",im="0.10.13";/**
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
 */const Cr=new Eh("@firebase/app"),Kb="@firebase/app-compat",Hb="@firebase/analytics-compat",Qb="@firebase/analytics",Yb="@firebase/app-check-compat",Jb="@firebase/app-check",Xb="@firebase/auth",Zb="@firebase/auth-compat",e1="@firebase/database",t1="@firebase/data-connect",n1="@firebase/database-compat",r1="@firebase/functions",i1="@firebase/functions-compat",s1="@firebase/installations",o1="@firebase/installations-compat",a1="@firebase/messaging",l1="@firebase/messaging-compat",u1="@firebase/performance",c1="@firebase/performance-compat",d1="@firebase/remote-config",h1="@firebase/remote-config-compat",f1="@firebase/storage",p1="@firebase/storage-compat",m1="@firebase/firestore",g1="@firebase/vertexai-preview",y1="@firebase/firestore-compat",_1="firebase",v1="10.14.1";/**
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
 */const Ri="[DEFAULT]",w1={[Bd]:"fire-core",[Kb]:"fire-core-compat",[Qb]:"fire-analytics",[Hb]:"fire-analytics-compat",[Jb]:"fire-app-check",[Yb]:"fire-app-check-compat",[Xb]:"fire-auth",[Zb]:"fire-auth-compat",[e1]:"fire-rtdb",[t1]:"fire-data-connect",[n1]:"fire-rtdb-compat",[r1]:"fire-fn",[i1]:"fire-fn-compat",[s1]:"fire-iid",[o1]:"fire-iid-compat",[a1]:"fire-fcm",[l1]:"fire-fcm-compat",[u1]:"fire-perf",[c1]:"fire-perf-compat",[d1]:"fire-rc",[h1]:"fire-rc-compat",[f1]:"fire-gcs",[p1]:"fire-gcs-compat",[m1]:"fire-fst",[y1]:"fire-fst-compat",[g1]:"fire-vertex","fire-js":"fire-js",[_1]:"fire-js-all"};/**
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
 */const ki=new Map,Yo=new Map,Jo=new Map;function lu(n,e){try{n.container.addComponent(e)}catch(t){Cr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function gT(n,e){n.container.addOrOverwriteComponent(e)}function Pi(n){const e=n.name;if(Jo.has(e))return Cr.debug(`There were multiple attempts to register component ${e}.`),!1;Jo.set(e,n);for(const t of ki.values())lu(t,n);for(const t of Yo.values())lu(t,n);return!0}function yT(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function I1(n,e,t=Ri){yT(n,e).clearInstance(t)}function _T(n){return n.options!==void 0}function Qe(n){return n.settings!==void 0}function E1(){Jo.clear()}/**
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
 */const T1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kn=new zs("app","Firebase",T1);/**
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
 */let vT=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ur("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kn.create("app-deleted",{appName:this._name})}};/**
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
 */class x1 extends vT{constructor(e,t,r,i){const s=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},t),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,zn(Bd,im,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){jg(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw kn.create("server-app-deleted")}}/**
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
 */const Bi=v1;function Mg(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ri,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw kn.create("bad-app-name",{appName:String(i)});if(t||(t=oT()),!t)throw kn.create("no-options");const s=ki.get(i);if(s){if(au(t,s.options)&&au(r,s.config))return s;throw kn.create("duplicate-app",{appName:i})}const o=new hT(i);for(const u of Jo.values())o.addComponent(u);const a=new vT(t,r,o);return ki.set(i,a),a}function S1(n,e){if(yb()&&!aT())throw kn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;_T(n)?t=n.options:t=n;const r=Object.assign(Object.assign({},e),t);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((f,m)=>Math.imul(31,f)+m.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw kn.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=Yo.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new hT(s);for(const c of Jo.values())a.addComponent(c);const u=new x1(t,e,s,a);return Yo.set(s,u),u}function A1(n=Ri){const e=ki.get(n);if(!e&&n===Ri&&oT())return Mg();if(!e)throw kn.create("no-app",{appName:n});return e}function R1(){return Array.from(ki.values())}async function jg(n){let e=!1;const t=n.name;ki.has(t)?(e=!0,ki.delete(t)):Yo.has(t)&&n.decRefCount()<=0&&(Yo.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function zn(n,e,t){var r;let i=(r=w1[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cr.warn(a.join(" "));return}Pi(new ur(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function wT(n,e){if(n!==null&&typeof n!="function")throw kn.create("invalid-log-argument");Db(n,e)}function IT(n){Cb(n)}/**
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
 */const k1="firebase-heartbeat-database",P1=1,uu="firebase-heartbeat-store";let qf=null;function ET(){return qf||(qf=zb(k1,P1,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(uu)}catch(t){console.warn(t)}}}}).catch(n=>{throw kn.create("idb-open",{originalErrorMessage:n.message})})),qf}async function b1(n){try{const t=(await ET()).transaction(uu),r=await t.objectStore(uu).get(TT(n));return await t.done,r}catch(e){if(e instanceof qt)Cr.warn(e.message);else{const t=kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cr.warn(t.message)}}}async function Zv(n,e){try{const r=(await ET()).transaction(uu,"readwrite");await r.objectStore(uu).put(e,TT(n)),await r.done}catch(t){if(t instanceof qt)Cr.warn(t.message);else{const r=kn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Cr.warn(r.message)}}}function TT(n){return`${n.name}!${n.options.appId}`}/**
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
 */const N1=1024,C1=30*24*60*60*1e3;class D1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new O1(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ew();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=C1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Cr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ew(),{heartbeatsToSend:r,unsentEntries:i}=V1(this._heartbeatsCache.heartbeats),s=Fd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Cr.warn(t),""}}}function ew(){return new Date().toISOString().substring(0,10)}function V1(n,e=N1){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),tw(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),tw(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class O1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ou()?vb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await b1(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function tw(n){return Fd(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function L1(n){Pi(new ur("platform-logger",e=>new Wb(e),"PRIVATE")),Pi(new ur("heartbeat",e=>new D1(e),"PRIVATE")),zn(Bd,im,n),zn(Bd,im,"esm2017"),zn("fire-js","")}L1("");const M1=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:qt,SDK_VERSION:Bi,_DEFAULT_ENTRY_NAME:Ri,_addComponent:lu,_addOrOverwriteComponent:gT,_apps:ki,_clearComponents:E1,_components:Jo,_getProvider:yT,_isFirebaseApp:_T,_isFirebaseServerApp:Qe,_registerComponent:Pi,_removeServiceInstance:I1,_serverApps:Yo,deleteApp:jg,getApp:A1,getApps:R1,initializeApp:Mg,initializeServerApp:S1,onLog:wT,registerVersion:zn,setLogLevel:IT},Symbol.toStringTag,{value:"Module"}));/**
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
 */class j1{constructor(e,t){this._delegate=e,this.firebase=t,lu(e,new ur("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),jg(this._delegate)))}_getService(e,t=Ri){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Ri){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){lu(this._delegate,e)}_addOrOverwriteComponent(e){gT(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const F1={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},nw=new zs("app-compat","Firebase",F1);/**
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
 */function U1(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:zn,setLogLevel:IT,onLog:wT,apps:null,SDK_VERSION:Bi,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:M1}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||Ri,!Hv(e,c))throw nw.create("no-app",{appName:c});return e[c]}i.App=n;function s(c,f={}){const m=Mg(c,f);if(Hv(e,m.name))return e[m.name];const g=new n(m,t);return e[m.name]=g,g}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const f=c.name,m=f.replace("-compat","");if(Pi(c)&&c.type==="PUBLIC"){const g=(E=i())=>{if(typeof E[m]!="function")throw nw.create("invalid-app-argument",{appName:f});return E[m]()};c.serviceProps!==void 0&&Ud(g,c.serviceProps),t[m]=g,n.prototype[m]=function(...E){return this._getService.bind(this,f).apply(this,c.multipleInstances?E:[])}}return c.type==="PUBLIC"?t[m]:null}function u(c,f){return f==="serverAuth"?null:f}return t}/**
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
 */function xT(){const n=U1(j1);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:xT,extendNamespace:e,createSubscribe:dT,ErrorFactory:zs,deepExtend:Ud});function e(t){Ud(n,t)}return n}const B1=xT();/**
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
 */const rw=new Eh("@firebase/app-compat"),z1="@firebase/app-compat",$1="0.2.43";/**
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
 */function q1(n){zn(z1,$1,n)}/**
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
 */try{const n=sT();if(n.firebase!==void 0){rw.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&rw.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const ya=B1;q1();var W1="firebase",G1="10.14.1";/**
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
 */ya.registerVersion(W1,G1,"app-compat");function Fg(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const ol={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},ao={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function K1(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function ST(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const H1=K1,Q1=ST,AT=new zs("auth","Firebase",ST());/**
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
 */const zd=new Eh("@firebase/auth");function Y1(n,...e){zd.logLevel<=ce.WARN&&zd.warn(`Auth (${Bi}): ${n}`,...e)}function rd(n,...e){zd.logLevel<=ce.ERROR&&zd.error(`Auth (${Bi}): ${n}`,...e)}/**
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
 */function bt(n,...e){throw Bg(n,...e)}function ht(n,...e){return Bg(n,...e)}function Ug(n,e,t){const r=Object.assign(Object.assign({},Q1()),{[e]:t});return new zs("auth","Firebase",r).create(e,{appName:n.name})}function It(n){return Ug(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _a(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&bt(n,"argument-error"),Ug(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bg(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return AT.create(n,...e)}function q(n,e,...t){if(!n)throw Bg(e,...t)}function nr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw rd(e),new Error(e)}function qn(n,e){n||nr(e)}/**
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
 */function cu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function zg(){return iw()==="http:"||iw()==="https:"}function iw(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function J1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zg()||lT()||"connection"in navigator)?navigator.onLine:!0}function X1(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Vu{constructor(e,t){this.shortDelay=e,this.longDelay=t,qn(t>e,"Short delay should be less than long delay!"),this.isMobile=gb()||Vg()}get(){return J1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $g(n,e){qn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class RT{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Z1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const eN=new Vu(3e4,6e4);function Xe(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ze(n,e,t,r,i={}){return kT(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ga(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const c=Object.assign({method:e,headers:u},s);return _b()||(c.referrerPolicy="no-referrer"),RT.fetch()(PT(n,n.config.apiHost,t,a),c)})}async function kT(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Z1),e);try{const i=new nN(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw vl(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw vl(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw vl(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw vl(n,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ug(n,f,c);bt(n,f)}}catch(i){if(i instanceof qt)throw i;bt(n,"network-request-failed",{message:String(i)})}}async function Mr(n,e,t,r,i={}){const s=await Ze(n,e,t,r,i);return"mfaPendingCredential"in s&&bt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function PT(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?$g(n.config,i):`${n.config.apiScheme}://${i}`}function tN(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class nN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ht(this.auth,"network-request-failed")),eN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vl(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=ht(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */function sw(n){return n!==void 0&&n.getResponse!==void 0}function ow(n){return n!==void 0&&n.enterprise!==void 0}class rN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return tN(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function iN(n){return(await Ze(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function sN(n,e){return Ze(n,"GET","/v2/recaptchaConfig",Xe(n,e))}/**
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
 */async function oN(n,e){return Ze(n,"POST","/v1/accounts:delete",e)}async function aN(n,e){return Ze(n,"POST","/v1/accounts:update",e)}async function bT(n,e){return Ze(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Vl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lN(n,e=!1){const t=ne(n),r=await t.getIdToken(e),i=Th(r);q(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Vl(Wf(i.auth_time)),issuedAtTime:Vl(Wf(i.iat)),expirationTime:Vl(Wf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Wf(n){return Number(n)*1e3}function Th(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return rd("JWT malformed, contained fewer than 3 sections"),null;try{const i=iT(t);return i?JSON.parse(i):(rd("Failed to decode base64 JWT payload"),null)}catch(i){return rd("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function aw(n){const e=Th(n);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Dr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof qt&&uN(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function uN({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class cN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class sm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vl(this.lastLoginAt),this.creationTime=Vl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function du(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Dr(n,bT(t,{idToken:r}));q(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?NT(s.providerUserInfo):[],a=hN(n.providerData,o),u=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),f=u?c:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new sm(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function dN(n){const e=ne(n);await du(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hN(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function NT(n){return n.map(e=>{var{providerId:t}=e,r=Fg(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function fN(n,e){const t=await kT(n,{},async()=>{const r=ga({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=PT(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",RT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function pN(n,e){return Ze(n,"POST","/v2/accounts:revokeToken",Xe(n,e))}/**
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
 */class Mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):aw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,"internal-error");const t=aw(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await fN(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Mo;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mo,this.toJSON())}_performRefresh(){return nr("not implemented")}}/**
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
 */function ti(n,e){q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Tr{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Fg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new sm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Dr(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return lN(this,e)}reload(){return dN(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await du(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qe(this.auth.app))return Promise.reject(It(this.auth));const e=await this.getIdToken();return await Dr(this,oN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,u,c,f;const m=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(i=t.email)!==null&&i!==void 0?i:void 0,E=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,b=(o=t.photoURL)!==null&&o!==void 0?o:void 0,N=(a=t.tenantId)!==null&&a!==void 0?a:void 0,O=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,S=(c=t.createdAt)!==null&&c!==void 0?c:void 0,v=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:A,emailVerified:L,isAnonymous:z,providerData:F,stsTokenManager:w}=t;q(A&&w,e,"internal-error");const _=Mo.fromJSON(this.name,w);q(typeof A=="string",e,"internal-error"),ti(m,e.name),ti(g,e.name),q(typeof L=="boolean",e,"internal-error"),q(typeof z=="boolean",e,"internal-error"),ti(E,e.name),ti(b,e.name),ti(N,e.name),ti(O,e.name),ti(S,e.name),ti(v,e.name);const I=new Tr({uid:A,auth:e,email:g,emailVerified:L,displayName:m,isAnonymous:z,photoURL:b,phoneNumber:E,tenantId:N,stsTokenManager:_,createdAt:S,lastLoginAt:v});return F&&Array.isArray(F)&&(I.providerData=F.map(x=>Object.assign({},x))),O&&(I._redirectEventId=O),I}static async _fromIdTokenResponse(e,t,r=!1){const i=new Mo;i.updateFromServerResponse(t);const s=new Tr({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await du(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?NT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Mo;a.updateFromIdToken(r);const u=new Tr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new sm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const lw=new Map;function pn(n){qn(n instanceof Function,"Expected a class definition");let e=lw.get(n);return e?(qn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,lw.set(n,e),e)}/**
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
 */class CT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}CT.type="NONE";const Xo=CT;/**
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
 */function ws(n,e,t){return`firebase:${n}:${e}:${t}`}class jo{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ws(this.userKey,i.apiKey,s),this.fullPersistenceKey=ws("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new jo(pn(Xo),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||pn(Xo);const o=ws(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const f=await c._get(o);if(f){const m=Tr._fromJSON(e,f);c!==s&&(a=m),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new jo(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new jo(s,e,r))}}/**
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
 */function uw(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(LT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(DT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(MT(e))return"Blackberry";if(jT(e))return"Webos";if(VT(e))return"Safari";if((e.includes("chrome/")||OT(e))&&!e.includes("edge/"))return"Chrome";if(Ou(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function DT(n=Ge()){return/firefox\//i.test(n)}function VT(n=Ge()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function OT(n=Ge()){return/crios\//i.test(n)}function LT(n=Ge()){return/iemobile/i.test(n)}function Ou(n=Ge()){return/android/i.test(n)}function MT(n=Ge()){return/blackberry/i.test(n)}function jT(n=Ge()){return/webos/i.test(n)}function Lu(n=Ge()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function mN(n=Ge()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function gN(n=Ge()){var e;return Lu(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yN(){return uT()&&document.documentMode===10}function FT(n=Ge()){return Lu(n)||Ou(n)||jT(n)||MT(n)||/windows phone/i.test(n)||LT(n)}/**
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
 */function UT(n,e=[]){let t;switch(n){case"Browser":t=uw(Ge());break;case"Worker":t=`${uw(Ge())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Bi}/${r}`}/**
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
 */class _N{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function vN(n,e={}){return Ze(n,"GET","/v2/passwordPolicy",Xe(n,e))}/**
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
 */const wN=6;class IN{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:wN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class EN{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cw(this),this.idTokenSubscription=new cw(this),this.beforeStateQueue=new _N(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=AT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=pn(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await jo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await bT(this,{idToken:e}),r=await Tr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Qe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await du(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=X1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qe(this.app))return Promise.reject(It(this));const t=e?ne(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qe(this.app)?Promise.reject(It(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qe(this.app)?Promise.reject(It(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vN(this),t=new IN(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await pN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&pn(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await jo.create(this,[pn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=UT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Y1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ye(n){return ne(n)}class cw{constructor(e){this.auth=e,this.observer=null,this.addObserver=dT(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Mu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function TN(n){Mu=n}function qg(n){return Mu.loadJS(n)}function xN(){return Mu.recaptchaV2Script}function SN(){return Mu.recaptchaEnterpriseScript}function AN(){return Mu.gapiScript}function BT(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const RN="recaptcha-enterprise",kN="NO_RECAPTCHA";class PN{constructor(e){this.type=RN,this.auth=Ye(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{sN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new rN(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;ow(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(kN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&ow(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=SN();u.length!==0&&(u+=a),qg(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function dw(n,e,t,r=!1){const i=new PN(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function hu(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await dw(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await dw(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(s)})}function bN(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(pn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function NN(n,e,t){const r=Ye(n);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=zT(e),{host:o,port:a}=CN(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||DN()}function zT(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function CN(n){const e=zT(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:hw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:hw(o)}}}function hw(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function DN(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class va{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return nr("not implemented")}_getIdTokenResponse(e){return nr("not implemented")}_linkToIdToken(e,t){return nr("not implemented")}_getReauthenticationResolver(e){return nr("not implemented")}}/**
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
 */async function $T(n,e){return Ze(n,"POST","/v1/accounts:resetPassword",Xe(n,e))}async function VN(n,e){return Ze(n,"POST","/v1/accounts:update",e)}async function ON(n,e){return Ze(n,"POST","/v1/accounts:signUp",e)}async function LN(n,e){return Ze(n,"POST","/v1/accounts:update",Xe(n,e))}/**
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
 */async function MN(n,e){return Mr(n,"POST","/v1/accounts:signInWithPassword",Xe(n,e))}async function xh(n,e){return Ze(n,"POST","/v1/accounts:sendOobCode",Xe(n,e))}async function jN(n,e){return xh(n,e)}async function FN(n,e){return xh(n,e)}async function UN(n,e){return xh(n,e)}async function BN(n,e){return xh(n,e)}/**
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
 */async function zN(n,e){return Mr(n,"POST","/v1/accounts:signInWithEmailLink",Xe(n,e))}async function $N(n,e){return Mr(n,"POST","/v1/accounts:signInWithEmailLink",Xe(n,e))}/**
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
 */class fu extends va{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new fu(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new fu(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hu(e,t,"signInWithPassword",MN);case"emailLink":return zN(e,{email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hu(e,r,"signUpPassword",ON);case"emailLink":return $N(e,{idToken:t,email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Rr(n,e){return Mr(n,"POST","/v1/accounts:signInWithIdp",Xe(n,e))}/**
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
 */const qN="http://localhost";class cr extends va{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):bt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Fg(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new cr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Rr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Rr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Rr(e,t)}buildRequest(){const e={requestUri:qN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ga(t)}return e}}/**
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
 */async function WN(n,e){return Ze(n,"POST","/v1/accounts:sendVerificationCode",Xe(n,e))}async function GN(n,e){return Mr(n,"POST","/v1/accounts:signInWithPhoneNumber",Xe(n,e))}async function KN(n,e){const t=await Mr(n,"POST","/v1/accounts:signInWithPhoneNumber",Xe(n,e));if(t.temporaryProof)throw vl(n,"account-exists-with-different-credential",t);return t}const HN={USER_NOT_FOUND:"user-not-found"};async function QN(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Mr(n,"POST","/v1/accounts:signInWithPhoneNumber",Xe(n,t),HN)}/**
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
 */class Is extends va{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Is({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Is({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return GN(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return KN(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return QN(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new Is({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function YN(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function JN(n){const e=bo(_l(n)).link,t=e?bo(_l(e)).deep_link_id:null,r=bo(_l(n)).deep_link_id;return(r?bo(_l(r)).link:null)||r||t||e||n}class Sh{constructor(e){var t,r,i,s,o,a;const u=bo(_l(e)),c=(t=u.apiKey)!==null&&t!==void 0?t:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=YN((i=u.mode)!==null&&i!==void 0?i:null);q(c&&f&&m,"argument-error"),this.apiKey=c,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=JN(e);try{return new Sh(t)}catch{return null}}}/**
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
 */class zi{constructor(){this.providerId=zi.PROVIDER_ID}static credential(e,t){return fu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Sh.parseLink(t);return q(r,"argument-error"),fu._fromEmailAndCode(e,r.code,r.tenantId)}}zi.PROVIDER_ID="password";zi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class jr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wa extends jr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Fo extends wa{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return q("providerId"in t&&"signInMethod"in t,"argument-error"),cr._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return q(e.idToken||e.accessToken,"argument-error"),cr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Fo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Fo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new Fo(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class Xn extends wa{constructor(){super("facebook.com")}static credential(e){return cr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xn.PROVIDER_ID="facebook.com";/**
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
 */class Zn extends wa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return cr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Zn.credential(t,r)}catch{return null}}}Zn.GOOGLE_SIGN_IN_METHOD="google.com";Zn.PROVIDER_ID="google.com";/**
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
 */class er extends wa{constructor(){super("github.com")}static credential(e){return cr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.GITHUB_SIGN_IN_METHOD="github.com";er.PROVIDER_ID="github.com";/**
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
 */const XN="http://localhost";class Zo extends va{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Rr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Rr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Rr(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new Zo(r,s)}static _create(e,t){return new Zo(e,t)}buildRequest(){return{requestUri:XN,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const ZN="saml.";class $d extends jr{constructor(e){q(e.startsWith(ZN),"argument-error"),super(e)}static credentialFromResult(e){return $d.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return $d.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Zo.fromJSON(e);return q(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return Zo._create(r,t)}catch{return null}}}/**
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
 */class tr extends wa{constructor(){super("twitter.com")}static credential(e,t){return cr._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return tr.credential(t,r)}catch{return null}}}tr.TWITTER_SIGN_IN_METHOD="twitter.com";tr.PROVIDER_ID="twitter.com";/**
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
 */async function qT(n,e){return Mr(n,"POST","/v1/accounts:signUp",Xe(n,e))}/**
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
 */class Nn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Tr._fromIdTokenResponse(e,r,i),o=fw(r);return new Nn({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=fw(r);return new Nn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function fw(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function eC(n){var e;if(Qe(n.app))return Promise.reject(It(n));const t=Ye(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Nn({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await qT(t,{returnSecureToken:!0}),i=await Nn._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
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
 */class qd extends qt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qd.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new qd(e,t,r,i)}}function WT(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?qd._fromErrorAndOperation(n,s,e,r):s})}/**
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
 */function GT(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function tC(n,e){const t=ne(n);await Ah(!0,t,e);const{providerUserInfo:r}=await aN(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=GT(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Wg(n,e,t=!1){const r=await Dr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Nn._forOperation(n,"link",r)}async function Ah(n,e,t){await du(e);const r=GT(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";q(r.has(t)===n,e.auth,i)}/**
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
 */async function KT(n,e,t=!1){const{auth:r}=n;if(Qe(r.app))return Promise.reject(It(r));const i="reauthenticate";try{const s=await Dr(n,WT(r,i,e,n),t);q(s.idToken,r,"internal-error");const o=Th(s.idToken);q(o,r,"internal-error");const{sub:a}=o;return q(n.uid===a,r,"user-mismatch"),Nn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),s}}/**
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
 */async function HT(n,e,t=!1){if(Qe(n.app))return Promise.reject(It(n));const r="signIn",i=await WT(n,r,e),s=await Nn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Rh(n,e){return HT(Ye(n),e)}async function QT(n,e){const t=ne(n);return await Ah(!1,t,e.providerId),Wg(t,e)}async function YT(n,e){return KT(ne(n),e)}/**
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
 */async function nC(n,e){return Mr(n,"POST","/v1/accounts:signInWithCustomToken",Xe(n,e))}/**
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
 */async function rC(n,e){if(Qe(n.app))return Promise.reject(It(n));const t=Ye(n),r=await nC(t,{token:e,returnSecureToken:!0}),i=await Nn._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
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
 */class ju{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Gg._fromServerResponse(e,t):"totpInfo"in t?Kg._fromServerResponse(e,t):bt(e,"internal-error")}}class Gg extends ju{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Gg(t)}}class Kg extends ju{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Kg(t)}}/**
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
 */function kh(n,e,t){var r;q(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),q(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(q(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(q(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function Hg(n){const e=Ye(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function iC(n,e,t){const r=Ye(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&kh(r,i,t),await hu(r,i,"getOobCode",FN)}async function sC(n,e,t){await $T(ne(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Hg(n),r})}async function oC(n,e){await LN(ne(n),{oobCode:e})}async function JT(n,e){const t=ne(n),r=await $T(t,{oobCode:e}),i=r.requestType;switch(q(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":q(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":q(r.mfaInfo,t,"internal-error");default:q(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=ju._fromServerResponse(Ye(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function aC(n,e){const{data:t}=await JT(ne(n),e);return t.email}async function lC(n,e,t){if(Qe(n.app))return Promise.reject(It(n));const r=Ye(n),o=await hu(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qT).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Hg(n),u}),a=await Nn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function uC(n,e,t){return Qe(n.app)?Promise.reject(It(n)):Rh(ne(n),zi.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Hg(n),r})}/**
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
 */async function cC(n,e,t){const r=Ye(n),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){q(a.handleCodeInApp,r,"argument-error"),a&&kh(r,o,a)}s(i,t),await hu(r,i,"getOobCode",UN)}function dC(n,e){const t=Sh.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function hC(n,e,t){if(Qe(n.app))return Promise.reject(It(n));const r=ne(n),i=zi.credentialWithLink(e,t||cu());return q(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Rh(r,i)}/**
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
 */async function fC(n,e){return Ze(n,"POST","/v1/accounts:createAuthUri",Xe(n,e))}/**
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
 */async function pC(n,e){const t=zg()?cu():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await fC(ne(n),r);return i||[]}async function mC(n,e){const t=ne(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&kh(t.auth,i,e);const{email:s}=await jN(t.auth,i);s!==n.email&&await n.reload()}async function gC(n,e,t){const r=ne(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&kh(r.auth,s,t);const{email:o}=await BN(r.auth,s);o!==n.email&&await n.reload()}/**
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
 */async function yC(n,e){return Ze(n,"POST","/v1/accounts:update",e)}/**
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
 */async function _C(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=ne(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Dr(r,yC(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function vC(n,e){const t=ne(n);return Qe(t.auth.app)?Promise.reject(It(t.auth)):XT(t,e,null)}function wC(n,e){return XT(ne(n),null,e)}async function XT(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await Dr(n,VN(r,s));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function IC(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=Th(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Uo(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new EC(s,i);case"github.com":return new TC(s,i);case"google.com":return new xC(s,i);case"twitter.com":return new SC(s,i,n.screenName||null);case"custom":case"anonymous":return new Uo(s,null);default:return new Uo(s,r,i)}}class Uo{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class ZT extends Uo{constructor(e,t,r,i){super(e,t,r),this.username=i}}class EC extends Uo{constructor(e,t){super(e,"facebook.com",t)}}class TC extends ZT{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class xC extends Uo{constructor(e,t){super(e,"google.com",t)}}class SC extends ZT{constructor(e,t,r){super(e,"twitter.com",t,r)}}function AC(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:IC(t)}/**
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
 */class ms{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new ms("enroll",e,t)}static _fromMfaPendingCredential(e){return new ms("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return ms._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return ms._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Qg{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=Ye(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>ju._fromServerResponse(r,a));q(i.mfaPendingCredential,r,"internal-error");const o=ms._fromMfaPendingCredential(i.mfaPendingCredential);return new Qg(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(t.operationType){case"signIn":const f=await Nn._fromIdTokenResponse(r,t.operationType,c);return await r._updateCurrentUser(f.user),f;case"reauthenticate":return q(t.user,r,"internal-error"),Nn._forOperation(t.user,t.operationType,c);default:bt(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function RC(n,e){var t;const r=ne(n),i=e;return q(e.customData.operationType,r,"argument-error"),q((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),Qg._fromError(r,i)}/**
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
 */function kC(n,e){return Ze(n,"POST","/v2/accounts/mfaEnrollment:start",Xe(n,e))}function PC(n,e){return Ze(n,"POST","/v2/accounts/mfaEnrollment:finalize",Xe(n,e))}function bC(n,e){return Ze(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Xe(n,e))}class Yg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>ju._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Yg(e)}async getSession(){return ms._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,i=await this.getSession(),s=await Dr(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Dr(this.user,bC(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Gf=new WeakMap;function NC(n){const e=ne(n);return Gf.has(e)||Gf.set(e,Yg._fromUser(e)),Gf.get(e)}const Wd="__sak";/**
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
 */class ex{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Wd,"1"),this.storage.removeItem(Wd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const CC=1e3,DC=10;class tx extends ex{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=FT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);yN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,DC):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},CC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}tx.type="LOCAL";const Jg=tx;/**
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
 */class nx extends ex{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}nx.type="SESSION";const ks=nx;/**
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
 */function VC(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ph{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Ph(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,s)),u=await VC(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ph.receivers=[];/**
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
 */function Fu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class OC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Fu("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function lt(){return window}function LC(n){lt().location.href=n}/**
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
 */function Xg(){return typeof lt().WorkerGlobalScope<"u"&&typeof lt().importScripts=="function"}async function MC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jC(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function FC(){return Xg()?self:null}/**
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
 */const rx="firebaseLocalStorageDb",UC=1,Gd="firebaseLocalStorage",ix="fbase_key";class Uu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function bh(n,e){return n.transaction([Gd],e?"readwrite":"readonly").objectStore(Gd)}function BC(){const n=indexedDB.deleteDatabase(rx);return new Uu(n).toPromise()}function om(){const n=indexedDB.open(rx,UC);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Gd,{keyPath:ix})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Gd)?e(r):(r.close(),await BC(),e(await om()))})})}async function pw(n,e,t){const r=bh(n,!0).put({[ix]:e,value:t});return new Uu(r).toPromise()}async function zC(n,e){const t=bh(n,!1).get(e),r=await new Uu(t).toPromise();return r===void 0?null:r.value}function mw(n,e){const t=bh(n,!0).delete(e);return new Uu(t).toPromise()}const $C=800,qC=3;class sx{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await om(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>qC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ph._getInstance(FC()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await MC(),!this.activeServiceWorker)return;this.sender=new OC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await om();return await pw(e,Wd,"1"),await mw(e,Wd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>pw(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>zC(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>mw(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=bh(i,!1).getAll();return new Uu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$C)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sx.type="LOCAL";const pu=sx;/**
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
 */function WC(n,e){return Ze(n,"POST","/v2/accounts/mfaSignIn:start",Xe(n,e))}function GC(n,e){return Ze(n,"POST","/v2/accounts/mfaSignIn:finalize",Xe(n,e))}/**
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
 */const KC=500,HC=6e4,Mc=1e12;class QC{constructor(e){this.auth=e,this.counter=Mc,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new YC(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||Mc;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||Mc;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||Mc;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class YC{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;q(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=JC(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},HC)},KC))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function JC(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const Kf=BT("rcb"),XC=new Vu(3e4,6e4);class ZC{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=lt().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return q(eD(t),e,"argument-error"),this.shouldResolveImmediately(t)&&sw(lt().grecaptcha)?Promise.resolve(lt().grecaptcha):new Promise((r,i)=>{const s=lt().setTimeout(()=>{i(ht(e,"network-request-failed"))},XC.get());lt()[Kf]=()=>{lt().clearTimeout(s),delete lt()[Kf];const a=lt().grecaptcha;if(!a||!sw(a)){i(ht(e,"internal-error"));return}const u=a.render;a.render=(c,f)=>{const m=u(c,f);return this.counter++,m},this.hostLanguage=t,r(a)};const o=`${xN()}?${ga({onload:Kf,render:"explicit",hl:t})}`;qg(o).catch(()=>{clearTimeout(s),i(ht(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=lt().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function eD(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class tD{async load(e){return new QC(e)}clearedOneInstance(){}}/**
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
 */const ox="recaptcha",nD={theme:"light",type:"image"};let rD=class{constructor(e,t,r=Object.assign({},nD)){this.parameters=r,this.type=ox,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ye(e),this.isInvisible=this.parameters.size==="invisible",q(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;q(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new tD:new ZC,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){q(!this.parameters.sitekey,this.auth,"argument-error"),q(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),q(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=lt()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){q(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){q(zg()&&!Xg(),this.auth,"internal-error"),await iD(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await iN(this.auth);q(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return q(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function iD(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class Zg{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Is._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function sD(n,e,t){if(Qe(n.app))return Promise.reject(It(n));const r=Ye(n),i=await Nh(r,e,ne(t));return new Zg(i,s=>Rh(r,s))}async function oD(n,e,t){const r=ne(n);await Ah(!1,r,"phone");const i=await Nh(r.auth,e,ne(t));return new Zg(i,s=>QT(r,s))}async function aD(n,e,t){const r=ne(n);if(Qe(r.auth.app))return Promise.reject(It(r.auth));const i=await Nh(r.auth,e,ne(t));return new Zg(i,s=>YT(r,s))}async function Nh(n,e,t){var r;const i=await t.verify();try{q(typeof i=="string",n,"argument-error"),q(t.type===ox,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return q(o.type==="enroll",n,"internal-error"),(await kC(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{q(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return q(a,n,"missing-multi-factor-info"),(await WC(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await WN(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function lD(n,e){const t=ne(n);if(Qe(t.auth.app))return Promise.reject(It(t.auth));await Wg(t,e)}/**
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
 */let Ps=class id{constructor(e){this.providerId=id.PROVIDER_ID,this.auth=Ye(e)}verifyPhoneNumber(e,t){return Nh(this.auth,e,ne(t))}static credential(e,t){return Is._fromVerification(e,t)}static credentialFromResult(e){const t=e;return id.credentialFromTaggedObject(t)}static credentialFromError(e){return id.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?Is._fromTokenResponse(t,r):null}};Ps.PROVIDER_ID="phone";Ps.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function $s(n,e){return e?pn(e):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ey extends va{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Rr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Rr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function uD(n){return HT(n.auth,new ey(n),n.bypassAuthState)}function cD(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),KT(t,new ey(n),n.bypassAuthState)}async function dD(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),Wg(t,new ey(n),n.bypassAuthState)}/**
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
 */class ax{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uD;case"linkViaPopup":case"linkViaRedirect":return dD;case"reauthViaPopup":case"reauthViaRedirect":return cD;default:bt(this.auth,"internal-error")}}resolve(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const hD=new Vu(2e3,1e4);async function fD(n,e,t){if(Qe(n.app))return Promise.reject(ht(n,"operation-not-supported-in-this-environment"));const r=Ye(n);_a(n,e,jr);const i=$s(r,t);return new xr(r,"signInViaPopup",e,i).executeNotNull()}async function pD(n,e,t){const r=ne(n);if(Qe(r.auth.app))return Promise.reject(ht(r.auth,"operation-not-supported-in-this-environment"));_a(r.auth,e,jr);const i=$s(r.auth,t);return new xr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function mD(n,e,t){const r=ne(n);_a(r.auth,e,jr);const i=$s(r.auth,t);return new xr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class xr extends ax{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xr.currentPopupAction&&xr.currentPopupAction.cancel(),xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){qn(this.filter.length===1,"Popup operations only handle one event");const e=Fu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hD.get())};e()}}xr.currentPopupAction=null;/**
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
 */const gD="pendingRedirect",Ol=new Map;class yD extends ax{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ol.get(this.auth._key());if(!e){try{const r=await _D(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ol.set(this.auth._key(),e)}return this.bypassAuthState||Ol.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _D(n,e){const t=ux(e),r=lx(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function ty(n,e){return lx(n)._set(ux(e),"true")}function vD(){Ol.clear()}function ny(n,e){Ol.set(n._key(),e)}function lx(n){return pn(n._redirectPersistence)}function ux(n){return ws(gD,n.config.apiKey,n.name)}/**
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
 */function wD(n,e,t){return ID(n,e,t)}async function ID(n,e,t){if(Qe(n.app))return Promise.reject(It(n));const r=Ye(n);_a(n,e,jr),await r._initializationPromise;const i=$s(r,t);return await ty(i,r),i._openRedirect(r,e,"signInViaRedirect")}function ED(n,e,t){return TD(n,e,t)}async function TD(n,e,t){const r=ne(n);if(_a(r.auth,e,jr),Qe(r.auth.app))return Promise.reject(It(r.auth));await r.auth._initializationPromise;const i=$s(r.auth,t);await ty(i,r.auth);const s=await cx(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function xD(n,e,t){return SD(n,e,t)}async function SD(n,e,t){const r=ne(n);_a(r.auth,e,jr),await r.auth._initializationPromise;const i=$s(r.auth,t);await Ah(!1,r,e.providerId),await ty(i,r.auth);const s=await cx(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function AD(n,e){return await Ye(n)._initializationPromise,Ch(n,e,!1)}async function Ch(n,e,t=!1){if(Qe(n.app))return Promise.reject(It(n));const r=Ye(n),i=$s(r,e),o=await new yD(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function cx(n){const e=Fu(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
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
 */const RD=10*60*1e3;class dx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kD(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!hx(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ht(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RD&&this.cachedEventUids.clear(),this.cachedEventUids.has(gw(e))}saveEventToCache(e){this.cachedEventUids.add(gw(e)),this.lastProcessedEventTime=Date.now()}}function gw(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function hx({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kD(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hx(n);default:return!1}}/**
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
 */async function fx(n,e={}){return Ze(n,"GET","/v1/projects",e)}/**
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
 */const PD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bD=/^https?/;async function ND(n){if(n.config.emulator)return;const{authorizedDomains:e}=await fx(n);for(const t of e)try{if(CD(t))return}catch{}bt(n,"unauthorized-domain")}function CD(n){const e=cu(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!bD.test(t))return!1;if(PD.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const DD=new Vu(3e4,6e4);function yw(){const n=lt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function VD(n){return new Promise((e,t)=>{var r,i,s;function o(){yw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yw(),t(ht(n,"network-request-failed"))},timeout:DD.get()})}if(!((i=(r=lt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=lt().gapi)===null||s===void 0)&&s.load)o();else{const a=BT("iframefcb");return lt()[a]=()=>{gapi.load?o():t(ht(n,"network-request-failed"))},qg(`${AN()}?onload=${a}`).catch(u=>t(u))}}).catch(e=>{throw sd=null,e})}let sd=null;function OD(n){return sd=sd||VD(n),sd}/**
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
 */const LD=new Vu(5e3,15e3),MD="__/auth/iframe",jD="emulator/auth/iframe",FD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BD(n){const e=n.config;q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?$g(e,jD):`https://${n.config.authDomain}/${MD}`,r={apiKey:e.apiKey,appName:n.name,v:Bi},i=UD.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${ga(r).slice(1)}`}async function zD(n){const e=await OD(n),t=lt().gapi;return q(t,n,"internal-error"),e.open({where:document.body,url:BD(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ht(n,"network-request-failed"),a=lt().setTimeout(()=>{s(o)},LD.get());function u(){lt().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const $D={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qD=500,WD=600,GD="_blank",KD="http://localhost";class _w{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function HD(n,e,t,r=qD,i=WD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},$D),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ge().toLowerCase();t&&(a=OT(c)?GD:t),DT(c)&&(e=e||KD,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[E,b])=>`${g}${E}=${b},`,"");if(gN(c)&&a!=="_self")return QD(e||"",a),new _w(null);const m=window.open(e||"",a,f);q(m,n,"popup-blocked");try{m.focus()}catch{}return new _w(m)}function QD(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const YD="__/auth/handler",JD="emulator/auth/handler",XD=encodeURIComponent("fac");async function am(n,e,t,r,i,s){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Bi,eventId:i};if(e instanceof jr){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Tb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries(s||{}))o[f]=m}if(e instanceof wa){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const u=await n._getAppCheckToken(),c=u?`#${XD}=${encodeURIComponent(u)}`:"";return`${ZD(n)}?${ga(a).slice(1)}${c}`}function ZD({config:n}){return n.emulator?$g(n,JD):`https://${n.authDomain}/${YD}`}/**
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
 */const Hf="webStorageSupport";class e2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ks,this._completeRedirectFn=Ch,this._overrideRedirectResult=ny}async _openPopup(e,t,r,i){var s;qn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await am(e,t,r,cu(),i);return HD(e,o,Fu())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await am(e,t,r,cu(),i);return LC(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(qn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await zD(e),r=new dx(e);return t.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Hf,{type:Hf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Hf];o!==void 0&&t(!!o),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ND(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return FT()||VT()||Lu()}}const t2=e2;class n2{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return nr("unexpected MultiFactorSessionType")}}}class ry extends n2{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ry(e)}_finalizeEnroll(e,t,r){return PC(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return GC(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class px{constructor(){}static assertion(e){return ry._fromCredential(e)}}px.FACTOR_ID="phone";var vw="@firebase/auth",ww="1.7.9";/**
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
 */class r2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function i2(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function s2(n){Pi(new ur("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:UT(n)},c=new EN(r,i,s,u);return bN(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Pi(new ur("auth-internal",e=>{const t=Ye(e.getProvider("auth").getImmediate());return(r=>new r2(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),zn(vw,ww,i2(n)),zn(vw,ww,"esm2017")}/**
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
 */const o2=5*60;fb("authIdTokenMaxAge");function a2(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}TN({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=ht("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",a2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});s2("Browser");/**
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
 */function bs(){return window}/**
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
 */const l2=2e3;async function u2(n,e,t){var r;const{BuildInfo:i}=bs();qn(e.sessionId,"AuthEvent did not contain a session ID");const s=await p2(e.sessionId),o={};return Lu()?o.ibi=i.packageName:Ou()?o.apn=i.packageName:bt(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,am(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function c2(n){const{BuildInfo:e}=bs(),t={};Lu()?t.iosBundleId=e.packageName:Ou()?t.androidPackageName=e.packageName:bt(n,"operation-not-supported-in-this-environment"),await fx(n,t)}function d2(n){const{cordova:e}=bs();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,mN()?"_blank":"_system","location=yes"),t(i)})})}async function h2(n,e,t){const{cordova:r}=bs();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var m;s();const g=(m=r.plugins.browsertab)===null||m===void 0?void 0:m.close;typeof g=="function"&&g(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function c(){a||(a=window.setTimeout(()=>{o(ht(n,"redirect-cancelled-by-user"))},l2))}function f(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(u),document.addEventListener("resume",c,!1),Ou()&&document.addEventListener("visibilitychange",f,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",f,!1),a&&window.clearTimeout(a)}})}finally{i()}}function f2(n){var e,t,r,i,s,o,a,u,c,f;const m=bs();q(typeof((e=m==null?void 0:m.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),q(typeof((t=m==null?void 0:m.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),q(typeof((s=(i=(r=m==null?void 0:m.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),q(typeof((u=(a=(o=m==null?void 0:m.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),q(typeof((f=(c=m==null?void 0:m.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||f===void 0?void 0:f.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function p2(n){const e=m2(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function m2(n){if(qn(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
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
 */const g2=20;class y2 extends dx{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function _2(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:I2(),postBody:null,tenantId:n.tenantId,error:ht(n,"no-auth-event")}}function v2(n,e){return lm()._set(um(n),e)}async function Iw(n){const e=await lm()._get(um(n));return e&&await lm()._remove(um(n)),e}function w2(n,e){var t,r;const i=T2(e);if(i.includes("/__/auth/callback")){const s=od(i),o=s.firebaseError?E2(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],u=a?ht(a):null;return u?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function I2(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<g2;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function lm(){return pn(Jg)}function um(n){return ws("authEvent",n.config.apiKey,n.name)}function E2(n){try{return JSON.parse(n)}catch{return null}}function T2(n){const e=od(n),t=e.link?decodeURIComponent(e.link):void 0,r=od(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return od(i).link||i||r||t||n}function od(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return bo(t.join("?"))}/**
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
 */const x2=500;class S2{constructor(){this._redirectPersistence=ks,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Ch,this._overrideRedirectResult=ny}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new y2(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){bt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){f2(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),vD(),await this._originValidation(e);const o=_2(e,r,i);await v2(e,o);const a=await u2(e,o,t),u=await d2(a);return h2(e,s,u)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=c2(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=bs(),o=setTimeout(async()=>{await Iw(e),t.onEvent(Ew())},x2),a=async f=>{clearTimeout(o);const m=await Iw(e);let g=null;m&&(f!=null&&f.url)&&(g=w2(m,f.url)),t.onEvent(g||Ew())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,c=`${s.packageName.toLowerCase()}://`;bs().handleOpenURL=async f=>{if(f.toLowerCase().startsWith(c)&&a({url:f}),typeof u=="function")try{u(f)}catch(m){console.error(m)}}}}const A2=S2;function Ew(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ht("no-auth-event")}}/**
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
 */function R2(n,e){Ye(n)._logFramework(e)}var k2="@firebase/auth-compat",P2="0.5.14";/**
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
 */const b2=1e3;function Ll(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function N2(){return Ll()==="http:"||Ll()==="https:"}function mx(n=Ge()){return!!((Ll()==="file:"||Ll()==="ionic:"||Ll()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function C2(){return Vg()||Dg()}function D2(){return uT()&&(document==null?void 0:document.documentMode)===11}function V2(n=Ge()){return/Edge\/\d+/.test(n)}function O2(n=Ge()){return D2()||V2(n)}function gx(){try{const n=self.localStorage,e=Fu();if(n)return n.setItem(e,"1"),n.removeItem(e),O2()?ou():!0}catch{return iy()&&ou()}return!1}function iy(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Qf(){return(N2()||lT()||mx())&&!C2()&&gx()&&!iy()}function yx(){return mx()&&typeof document<"u"}async function L2(){return yx()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},b2);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function M2(){return typeof window<"u"?window:null}/**
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
 */const hn={LOCAL:"local",NONE:"none",SESSION:"session"},al=q,_x="persistence";function j2(n,e){if(al(Object.values(hn).includes(e),n,"invalid-persistence-type"),Vg()){al(e!==hn.SESSION,n,"unsupported-persistence-type");return}if(Dg()){al(e===hn.NONE,n,"unsupported-persistence-type");return}if(iy()){al(e===hn.NONE||e===hn.LOCAL&&ou(),n,"unsupported-persistence-type");return}al(e===hn.NONE||gx(),n,"unsupported-persistence-type")}async function cm(n){await n._initializationPromise;const e=vx(),t=ws(_x,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function F2(n,e){const t=vx();if(!t)return[];const r=ws(_x,n,e);switch(t.getItem(r)){case hn.NONE:return[Xo];case hn.LOCAL:return[pu,ks];case hn.SESSION:return[ks];default:return[]}}function vx(){var n;try{return((n=M2())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
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
 */const U2=q;class fi{constructor(){this.browserResolver=pn(t2),this.cordovaResolver=pn(A2),this.underlyingResolver=null,this._redirectPersistence=ks,this._completeRedirectFn=Ch,this._overrideRedirectResult=ny}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return yx()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return U2(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await L2();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function wx(n){return n.unwrap()}function B2(n){return n.wrapped()}/**
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
 */function z2(n){return Ix(n)}function $2(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new q2(n,RC(n,e))}else if(r){const i=Ix(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Ix(n){const{_tokenResponse:e}=n instanceof qt?n.customData:n;if(!e)return null;if(!(n instanceof qt)&&"temporaryProof"in e&&"phoneNumber"in e)return Ps.credentialFromResult(n);const t=e.providerId;if(!t||t===ol.PASSWORD)return null;let r;switch(t){case ol.GOOGLE:r=Zn;break;case ol.FACEBOOK:r=Xn;break;case ol.GITHUB:r=er;break;case ol.TWITTER:r=tr;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?Zo._create(t,a):cr._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new Fo(t).credential({idToken:i,accessToken:s,rawNonce:u})}return n instanceof qt?r.credentialFromError(n):r.credentialFromResult(n)}function Jt(n,e){return e.catch(t=>{throw t instanceof qt&&$2(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:z2(t),additionalUserInfo:AC(t),user:Dh.getOrCreate(i)}})}async function dm(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>Jt(n,t.confirm(r))}}class q2{constructor(e,t){this.resolver=t,this.auth=B2(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Jt(wx(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */let Dh=class wl{constructor(e){this._delegate=e,this.multiFactor=NC(e)}static getOrCreate(e){return wl.USER_MAP.has(e)||wl.USER_MAP.set(e,new wl(e)),wl.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Jt(this.auth,QT(this._delegate,e))}async linkWithPhoneNumber(e,t){return dm(this.auth,oD(this._delegate,e,t))}async linkWithPopup(e){return Jt(this.auth,mD(this._delegate,e,fi))}async linkWithRedirect(e){return await cm(Ye(this.auth)),xD(this._delegate,e,fi)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Jt(this.auth,YT(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return dm(this.auth,aD(this._delegate,e,t))}reauthenticateWithPopup(e){return Jt(this.auth,pD(this._delegate,e,fi))}async reauthenticateWithRedirect(e){return await cm(Ye(this.auth)),ED(this._delegate,e,fi)}sendEmailVerification(e){return mC(this._delegate,e)}async unlink(e){return await tC(this._delegate,e),this}updateEmail(e){return vC(this._delegate,e)}updatePassword(e){return wC(this._delegate,e)}updatePhoneNumber(e){return lD(this._delegate,e)}updateProfile(e){return _C(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return gC(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Dh.USER_MAP=new WeakMap;/**
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
 */const ll=q;class hm{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;ll(r,"invalid-api-key",{appName:e.name}),ll(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?fi:void 0;this._delegate=t.initialize({options:{persistence:W2(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(H1),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Dh.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){NN(this._delegate,e,t)}applyActionCode(e){return oC(this._delegate,e)}checkActionCode(e){return JT(this._delegate,e)}confirmPasswordReset(e,t){return sC(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Jt(this._delegate,lC(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return pC(this._delegate,e)}isSignInWithEmailLink(e){return dC(this._delegate,e)}async getRedirectResult(){ll(Qf(),this._delegate,"operation-not-supported-in-this-environment");const e=await AD(this._delegate,fi);return e?Jt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){R2(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=Tw(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=Tw(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return cC(this._delegate,e,t)}sendPasswordResetEmail(e,t){return iC(this._delegate,e,t||void 0)}async setPersistence(e){j2(this._delegate,e);let t;switch(e){case hn.SESSION:t=ks;break;case hn.LOCAL:t=await pn(pu)._isAvailable()?pu:Jg;break;case hn.NONE:t=Xo;break;default:return bt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Jt(this._delegate,eC(this._delegate))}signInWithCredential(e){return Jt(this._delegate,Rh(this._delegate,e))}signInWithCustomToken(e){return Jt(this._delegate,rC(this._delegate,e))}signInWithEmailAndPassword(e,t){return Jt(this._delegate,uC(this._delegate,e,t))}signInWithEmailLink(e,t){return Jt(this._delegate,hC(this._delegate,e,t))}signInWithPhoneNumber(e,t){return dm(this._delegate,sD(this._delegate,e,t))}async signInWithPopup(e){return ll(Qf(),this._delegate,"operation-not-supported-in-this-environment"),Jt(this._delegate,fD(this._delegate,e,fi))}async signInWithRedirect(e){return ll(Qf(),this._delegate,"operation-not-supported-in-this-environment"),await cm(this._delegate),wD(this._delegate,e,fi)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return aC(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}hm.Persistence=hn;function Tw(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&Dh.getOrCreate(o)),error:e,complete:t}}function W2(n,e){const t=F2(n,e);if(typeof self<"u"&&!t.includes(pu)&&t.push(pu),typeof window<"u")for(const r of[Jg,ks])t.includes(r)||t.push(r);return t.includes(Xo)||t.push(Xo),t}/**
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
 */class sy{constructor(){this.providerId="phone",this._delegate=new Ps(wx(ya.auth()))}static credential(e,t){return Ps.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}sy.PHONE_SIGN_IN_METHOD=Ps.PHONE_SIGN_IN_METHOD;sy.PROVIDER_ID=Ps.PROVIDER_ID;/**
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
 */const G2=q;class K2{constructor(e,t,r=ya.app()){var i;G2((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new rD(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const H2="auth-compat";function Q2(n){n.INTERNAL.registerComponent(new ur(H2,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new hm(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ao.EMAIL_SIGNIN,PASSWORD_RESET:ao.PASSWORD_RESET,RECOVER_EMAIL:ao.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ao.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ao.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ao.VERIFY_EMAIL}},EmailAuthProvider:zi,FacebookAuthProvider:Xn,GithubAuthProvider:er,GoogleAuthProvider:Zn,OAuthProvider:Fo,SAMLAuthProvider:$d,PhoneAuthProvider:sy,PhoneMultiFactorGenerator:px,RecaptchaVerifier:K2,TwitterAuthProvider:tr,Auth:hm,AuthCredential:va,Error:qt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(k2,P2)}Q2(ya);var xw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Es,Ex;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function I(){}I.prototype=_.prototype,w.D=_.prototype,w.prototype=new I,w.prototype.constructor=w,w.C=function(x,k,P){for(var T=Array(arguments.length-2),et=2;et<arguments.length;et++)T[et-2]=arguments[et];return _.prototype[k].apply(x,T)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,_,I){I||(I=0);var x=Array(16);if(typeof _=="string")for(var k=0;16>k;++k)x[k]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(k=0;16>k;++k)x[k]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=w.g[0],I=w.g[1],k=w.g[2];var P=w.g[3],T=_+(P^I&(k^P))+x[0]+3614090360&4294967295;_=I+(T<<7&4294967295|T>>>25),T=P+(k^_&(I^k))+x[1]+3905402710&4294967295,P=_+(T<<12&4294967295|T>>>20),T=k+(I^P&(_^I))+x[2]+606105819&4294967295,k=P+(T<<17&4294967295|T>>>15),T=I+(_^k&(P^_))+x[3]+3250441966&4294967295,I=k+(T<<22&4294967295|T>>>10),T=_+(P^I&(k^P))+x[4]+4118548399&4294967295,_=I+(T<<7&4294967295|T>>>25),T=P+(k^_&(I^k))+x[5]+1200080426&4294967295,P=_+(T<<12&4294967295|T>>>20),T=k+(I^P&(_^I))+x[6]+2821735955&4294967295,k=P+(T<<17&4294967295|T>>>15),T=I+(_^k&(P^_))+x[7]+4249261313&4294967295,I=k+(T<<22&4294967295|T>>>10),T=_+(P^I&(k^P))+x[8]+1770035416&4294967295,_=I+(T<<7&4294967295|T>>>25),T=P+(k^_&(I^k))+x[9]+2336552879&4294967295,P=_+(T<<12&4294967295|T>>>20),T=k+(I^P&(_^I))+x[10]+4294925233&4294967295,k=P+(T<<17&4294967295|T>>>15),T=I+(_^k&(P^_))+x[11]+2304563134&4294967295,I=k+(T<<22&4294967295|T>>>10),T=_+(P^I&(k^P))+x[12]+1804603682&4294967295,_=I+(T<<7&4294967295|T>>>25),T=P+(k^_&(I^k))+x[13]+4254626195&4294967295,P=_+(T<<12&4294967295|T>>>20),T=k+(I^P&(_^I))+x[14]+2792965006&4294967295,k=P+(T<<17&4294967295|T>>>15),T=I+(_^k&(P^_))+x[15]+1236535329&4294967295,I=k+(T<<22&4294967295|T>>>10),T=_+(k^P&(I^k))+x[1]+4129170786&4294967295,_=I+(T<<5&4294967295|T>>>27),T=P+(I^k&(_^I))+x[6]+3225465664&4294967295,P=_+(T<<9&4294967295|T>>>23),T=k+(_^I&(P^_))+x[11]+643717713&4294967295,k=P+(T<<14&4294967295|T>>>18),T=I+(P^_&(k^P))+x[0]+3921069994&4294967295,I=k+(T<<20&4294967295|T>>>12),T=_+(k^P&(I^k))+x[5]+3593408605&4294967295,_=I+(T<<5&4294967295|T>>>27),T=P+(I^k&(_^I))+x[10]+38016083&4294967295,P=_+(T<<9&4294967295|T>>>23),T=k+(_^I&(P^_))+x[15]+3634488961&4294967295,k=P+(T<<14&4294967295|T>>>18),T=I+(P^_&(k^P))+x[4]+3889429448&4294967295,I=k+(T<<20&4294967295|T>>>12),T=_+(k^P&(I^k))+x[9]+568446438&4294967295,_=I+(T<<5&4294967295|T>>>27),T=P+(I^k&(_^I))+x[14]+3275163606&4294967295,P=_+(T<<9&4294967295|T>>>23),T=k+(_^I&(P^_))+x[3]+4107603335&4294967295,k=P+(T<<14&4294967295|T>>>18),T=I+(P^_&(k^P))+x[8]+1163531501&4294967295,I=k+(T<<20&4294967295|T>>>12),T=_+(k^P&(I^k))+x[13]+2850285829&4294967295,_=I+(T<<5&4294967295|T>>>27),T=P+(I^k&(_^I))+x[2]+4243563512&4294967295,P=_+(T<<9&4294967295|T>>>23),T=k+(_^I&(P^_))+x[7]+1735328473&4294967295,k=P+(T<<14&4294967295|T>>>18),T=I+(P^_&(k^P))+x[12]+2368359562&4294967295,I=k+(T<<20&4294967295|T>>>12),T=_+(I^k^P)+x[5]+4294588738&4294967295,_=I+(T<<4&4294967295|T>>>28),T=P+(_^I^k)+x[8]+2272392833&4294967295,P=_+(T<<11&4294967295|T>>>21),T=k+(P^_^I)+x[11]+1839030562&4294967295,k=P+(T<<16&4294967295|T>>>16),T=I+(k^P^_)+x[14]+4259657740&4294967295,I=k+(T<<23&4294967295|T>>>9),T=_+(I^k^P)+x[1]+2763975236&4294967295,_=I+(T<<4&4294967295|T>>>28),T=P+(_^I^k)+x[4]+1272893353&4294967295,P=_+(T<<11&4294967295|T>>>21),T=k+(P^_^I)+x[7]+4139469664&4294967295,k=P+(T<<16&4294967295|T>>>16),T=I+(k^P^_)+x[10]+3200236656&4294967295,I=k+(T<<23&4294967295|T>>>9),T=_+(I^k^P)+x[13]+681279174&4294967295,_=I+(T<<4&4294967295|T>>>28),T=P+(_^I^k)+x[0]+3936430074&4294967295,P=_+(T<<11&4294967295|T>>>21),T=k+(P^_^I)+x[3]+3572445317&4294967295,k=P+(T<<16&4294967295|T>>>16),T=I+(k^P^_)+x[6]+76029189&4294967295,I=k+(T<<23&4294967295|T>>>9),T=_+(I^k^P)+x[9]+3654602809&4294967295,_=I+(T<<4&4294967295|T>>>28),T=P+(_^I^k)+x[12]+3873151461&4294967295,P=_+(T<<11&4294967295|T>>>21),T=k+(P^_^I)+x[15]+530742520&4294967295,k=P+(T<<16&4294967295|T>>>16),T=I+(k^P^_)+x[2]+3299628645&4294967295,I=k+(T<<23&4294967295|T>>>9),T=_+(k^(I|~P))+x[0]+4096336452&4294967295,_=I+(T<<6&4294967295|T>>>26),T=P+(I^(_|~k))+x[7]+1126891415&4294967295,P=_+(T<<10&4294967295|T>>>22),T=k+(_^(P|~I))+x[14]+2878612391&4294967295,k=P+(T<<15&4294967295|T>>>17),T=I+(P^(k|~_))+x[5]+4237533241&4294967295,I=k+(T<<21&4294967295|T>>>11),T=_+(k^(I|~P))+x[12]+1700485571&4294967295,_=I+(T<<6&4294967295|T>>>26),T=P+(I^(_|~k))+x[3]+2399980690&4294967295,P=_+(T<<10&4294967295|T>>>22),T=k+(_^(P|~I))+x[10]+4293915773&4294967295,k=P+(T<<15&4294967295|T>>>17),T=I+(P^(k|~_))+x[1]+2240044497&4294967295,I=k+(T<<21&4294967295|T>>>11),T=_+(k^(I|~P))+x[8]+1873313359&4294967295,_=I+(T<<6&4294967295|T>>>26),T=P+(I^(_|~k))+x[15]+4264355552&4294967295,P=_+(T<<10&4294967295|T>>>22),T=k+(_^(P|~I))+x[6]+2734768916&4294967295,k=P+(T<<15&4294967295|T>>>17),T=I+(P^(k|~_))+x[13]+1309151649&4294967295,I=k+(T<<21&4294967295|T>>>11),T=_+(k^(I|~P))+x[4]+4149444226&4294967295,_=I+(T<<6&4294967295|T>>>26),T=P+(I^(_|~k))+x[11]+3174756917&4294967295,P=_+(T<<10&4294967295|T>>>22),T=k+(_^(P|~I))+x[2]+718787259&4294967295,k=P+(T<<15&4294967295|T>>>17),T=I+(P^(k|~_))+x[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(k+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+k&4294967295,w.g[3]=w.g[3]+P&4294967295}r.prototype.u=function(w,_){_===void 0&&(_=w.length);for(var I=_-this.blockSize,x=this.B,k=this.h,P=0;P<_;){if(k==0)for(;P<=I;)i(this,w,P),P+=this.blockSize;if(typeof w=="string"){for(;P<_;)if(x[k++]=w.charCodeAt(P++),k==this.blockSize){i(this,x),k=0;break}}else for(;P<_;)if(x[k++]=w[P++],k==this.blockSize){i(this,x),k=0;break}}this.h=k,this.o+=_},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;var I=8*this.o;for(_=w.length-8;_<w.length;++_)w[_]=I&255,I/=256;for(this.u(w),w=Array(16),_=I=0;4>_;++_)for(var x=0;32>x;x+=8)w[I++]=this.g[_]>>>x&255;return w};function s(w,_){var I=a;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=_(w)}function o(w,_){this.h=_;for(var I=[],x=!0,k=w.length-1;0<=k;k--){var P=w[k]|0;x&&P==_||(I[k]=P,x=!1)}this.g=I}var a={};function u(w){return-128<=w&&128>w?s(w,function(_){return new o([_|0],0>_?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return O(c(-w));for(var _=[],I=1,x=0;w>=I;x++)_[x]=w/I|0,I*=4294967296;return new o(_,0)}function f(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return O(f(w.substring(1),_));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(_,8)),x=m,k=0;k<w.length;k+=8){var P=Math.min(8,w.length-k),T=parseInt(w.substring(k,k+P),_);8>P?(P=c(Math.pow(_,P)),x=x.j(P).add(c(T))):(x=x.j(I),x=x.add(c(T)))}return x}var m=u(0),g=u(1),E=u(16777216);n=o.prototype,n.m=function(){if(N(this))return-O(this).m();for(var w=0,_=1,I=0;I<this.g.length;I++){var x=this.i(I);w+=(0<=x?x:4294967296+x)*_,_*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(b(this))return"0";if(N(this))return"-"+O(this).toString(w);for(var _=c(Math.pow(w,6)),I=this,x="";;){var k=L(I,_).g;I=S(I,k.j(_));var P=((0<I.g.length?I.g[0]:I.h)>>>0).toString(w);if(I=k,b(I))return P+x;for(;6>P.length;)P="0"+P;x=P+x}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function b(w){if(w.h!=0)return!1;for(var _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function N(w){return w.h==-1}n.l=function(w){return w=S(this,w),N(w)?-1:b(w)?0:1};function O(w){for(var _=w.g.length,I=[],x=0;x<_;x++)I[x]=~w.g[x];return new o(I,~w.h).add(g)}n.abs=function(){return N(this)?O(this):this},n.add=function(w){for(var _=Math.max(this.g.length,w.g.length),I=[],x=0,k=0;k<=_;k++){var P=x+(this.i(k)&65535)+(w.i(k)&65535),T=(P>>>16)+(this.i(k)>>>16)+(w.i(k)>>>16);x=T>>>16,P&=65535,T&=65535,I[k]=T<<16|P}return new o(I,I[I.length-1]&-2147483648?-1:0)};function S(w,_){return w.add(O(_))}n.j=function(w){if(b(this)||b(w))return m;if(N(this))return N(w)?O(this).j(O(w)):O(O(this).j(w));if(N(w))return O(this.j(O(w)));if(0>this.l(E)&&0>w.l(E))return c(this.m()*w.m());for(var _=this.g.length+w.g.length,I=[],x=0;x<2*_;x++)I[x]=0;for(x=0;x<this.g.length;x++)for(var k=0;k<w.g.length;k++){var P=this.i(x)>>>16,T=this.i(x)&65535,et=w.i(k)>>>16,Wn=w.i(k)&65535;I[2*x+2*k]+=T*Wn,v(I,2*x+2*k),I[2*x+2*k+1]+=P*Wn,v(I,2*x+2*k+1),I[2*x+2*k+1]+=T*et,v(I,2*x+2*k+1),I[2*x+2*k+2]+=P*et,v(I,2*x+2*k+2)}for(x=0;x<_;x++)I[x]=I[2*x+1]<<16|I[2*x];for(x=_;x<2*_;x++)I[x]=0;return new o(I,0)};function v(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function A(w,_){this.g=w,this.h=_}function L(w,_){if(b(_))throw Error("division by zero");if(b(w))return new A(m,m);if(N(w))return _=L(O(w),_),new A(O(_.g),O(_.h));if(N(_))return _=L(w,O(_)),new A(O(_.g),_.h);if(30<w.g.length){if(N(w)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var I=g,x=_;0>=x.l(w);)I=z(I),x=z(x);var k=F(I,1),P=F(x,1);for(x=F(x,2),I=F(I,2);!b(x);){var T=P.add(x);0>=T.l(w)&&(k=k.add(I),P=T),x=F(x,1),I=F(I,1)}return _=S(w,k.j(_)),new A(k,_)}for(k=m;0<=w.l(_);){for(I=Math.max(1,Math.floor(w.m()/_.m())),x=Math.ceil(Math.log(I)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),P=c(I),T=P.j(_);N(T)||0<T.l(w);)I-=x,P=c(I),T=P.j(_);b(P)&&(P=g),k=k.add(P),w=S(w,T)}return new A(k,w)}n.A=function(w){return L(this,w).h},n.and=function(w){for(var _=Math.max(this.g.length,w.g.length),I=[],x=0;x<_;x++)I[x]=this.i(x)&w.i(x);return new o(I,this.h&w.h)},n.or=function(w){for(var _=Math.max(this.g.length,w.g.length),I=[],x=0;x<_;x++)I[x]=this.i(x)|w.i(x);return new o(I,this.h|w.h)},n.xor=function(w){for(var _=Math.max(this.g.length,w.g.length),I=[],x=0;x<_;x++)I[x]=this.i(x)^w.i(x);return new o(I,this.h^w.h)};function z(w){for(var _=w.g.length+1,I=[],x=0;x<_;x++)I[x]=w.i(x)<<1|w.i(x-1)>>>31;return new o(I,w.h)}function F(w,_){var I=_>>5;_%=32;for(var x=w.g.length-I,k=[],P=0;P<x;P++)k[P]=0<_?w.i(P+I)>>>_|w.i(P+I+1)<<32-_:w.i(P+I);return new o(k,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ex=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Es=o}).apply(typeof xw<"u"?xw:typeof self<"u"?self:typeof window<"u"?window:{});var jc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tx,Il,xx,ad,fm,Sx,Ax,Rx;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof jc=="object"&&jc];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function i(l,d){if(d)e:{var p=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var C=l[y];if(!(C in p))break e;p=p[C]}l=l[l.length-1],y=p[l],d=d(y),d!=y&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var p=0,y=!1,C={next:function(){if(!y&&p<l.length){var M=p++;return{value:d(M,l[M]),done:!1}}return y=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function f(l,d,p){return l.call.apply(l.bind,arguments)}function m(l,d,p){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,y),l.apply(d,C)}}return function(){return l.apply(d,arguments)}}function g(l,d,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function E(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function b(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(y,C,M){for(var W=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)W[Re-2]=arguments[Re];return d.prototype[C].apply(y,W)}}function N(l){const d=l.length;if(0<d){const p=Array(d);for(let y=0;y<d;y++)p[y]=l[y];return p}return[]}function O(l,d){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(u(y)){const C=l.length||0,M=y.length||0;l.length=C+M;for(let W=0;W<M;W++)l[C+W]=y[W]}else l.push(y)}}class S{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function v(l){return/^[\s\xa0]*$/.test(l)}function A(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function L(l){return L[" "](l),l}L[" "]=function(){};var z=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function F(l,d,p){for(const y in l)d.call(p,l[y],y,l)}function w(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function _(l){const d={};for(const p in l)d[p]=l[p];return d}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(l,d){let p,y;for(let C=1;C<arguments.length;C++){y=arguments[C];for(p in y)l[p]=y[p];for(let M=0;M<I.length;M++)p=I[M],Object.prototype.hasOwnProperty.call(y,p)&&(l[p]=y[p])}}function k(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function P(l){a.setTimeout(()=>{throw l},0)}function T(){var l=Q;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class et{constructor(){this.h=this.g=null}add(d,p){const y=Wn.get();y.set(d,p),this.h?this.h.next=y:this.g=y,this.h=y}}var Wn=new S(()=>new zr,l=>l.reset());class zr{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let wn,j=!1,Q=new et,re=()=>{const l=a.Promise.resolve(void 0);wn=()=>{l.then(ue)}};var ue=()=>{for(var l;l=T();){try{l.h.call(l.g)}catch(p){P(p)}var d=Wn;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}j=!1};function Ie(){this.s=this.s,this.C=this.C}Ie.prototype.s=!1,Ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ye(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var Yt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return l}();function In(l,d){if(ye.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(z){e:{try{L(d.nodeName);var C=!0;break e}catch{}C=!1}C||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Et[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&In.aa.h.call(this)}}b(In,ye);var Et={2:"touch",3:"pen",4:"mouse"};In.prototype.h=function(){In.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var ln="closure_listenable_"+(1e6*Math.random()|0),Cn=0;function En(l,d,p,y,C){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!y,this.ha=C,this.key=++Cn,this.da=this.fa=!1}function tt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ki(l){this.src=l,this.g={},this.h=0}Ki.prototype.add=function(l,d,p,y,C){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var W=$r(l,d,y,C);return-1<W?(d=l[W],p||(d.fa=!1)):(d=new En(d,this.src,M,!!y,C),d.fa=p,l.push(d)),d};function pr(l,d){var p=d.type;if(p in l.g){var y=l.g[p],C=Array.prototype.indexOf.call(y,d,void 0),M;(M=0<=C)&&Array.prototype.splice.call(y,C,1),M&&(tt(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function $r(l,d,p,y){for(var C=0;C<l.length;++C){var M=l[C];if(!M.da&&M.listener==d&&M.capture==!!p&&M.ha==y)return C}return-1}var Pa="closure_lm_"+(1e6*Math.random()|0),ba={};function ec(l,d,p,y,C){if(Array.isArray(d)){for(var M=0;M<d.length;M++)ec(l,d[M],p,y,C);return null}return p=Ca(p),l&&l[ln]?l.K(d,p,c(y)?!!y.capture:!1,C):rf(l,d,p,!1,y,C)}function rf(l,d,p,y,C,M){if(!d)throw Error("Invalid event type");var W=c(C)?!!C.capture:!!C,Re=Na(l);if(Re||(l[Pa]=Re=new Ki(l)),p=Re.add(d,p,y,W,M),p.proxy)return p;if(y=qr(),p.proxy=y,y.src=l,y.listener=p,l.addEventListener)Yt||(C=W),C===void 0&&(C=!1),l.addEventListener(d.toString(),y,C);else if(l.attachEvent)l.attachEvent(sf(d.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function qr(){function l(p){return d.call(l.src,l.listener,p)}const d=Qs;return l}function tc(l,d,p,y,C){if(Array.isArray(d))for(var M=0;M<d.length;M++)tc(l,d[M],p,y,C);else y=c(y)?!!y.capture:!!y,p=Ca(p),l&&l[ln]?(l=l.i,d=String(d).toString(),d in l.g&&(M=l.g[d],p=$r(M,p,y,C),-1<p&&(tt(M[p]),Array.prototype.splice.call(M,p,1),M.length==0&&(delete l.g[d],l.h--)))):l&&(l=Na(l))&&(d=l.g[d.toString()],l=-1,d&&(l=$r(d,p,y,C)),(p=-1<l?d[l]:null)&&Hi(p))}function Hi(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[ln])pr(d.i,l);else{var p=l.type,y=l.proxy;d.removeEventListener?d.removeEventListener(p,y,l.capture):d.detachEvent?d.detachEvent(sf(p),y):d.addListener&&d.removeListener&&d.removeListener(y),(p=Na(d))?(pr(p,l),p.h==0&&(p.src=null,d[Pa]=null)):tt(l)}}}function sf(l){return l in ba?ba[l]:ba[l]="on"+l}function Qs(l,d){if(l.da)l=!0;else{d=new In(d,this);var p=l.listener,y=l.ha||l.src;l.fa&&Hi(l),l=p.call(y,d)}return l}function Na(l){return l=l[Pa],l instanceof Ki?l:null}var Wr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ca(l){return typeof l=="function"?l:(l[Wr]||(l[Wr]=function(d){return l.handleEvent(d)}),l[Wr])}function nt(){Ie.call(this),this.i=new Ki(this),this.M=this,this.F=null}b(nt,Ie),nt.prototype[ln]=!0,nt.prototype.removeEventListener=function(l,d,p,y){tc(this,l,d,p,y)};function pt(l,d){var p,y=l.F;if(y)for(p=[];y;y=y.F)p.push(y);if(l=l.M,y=d.type||d,typeof d=="string")d=new ye(d,l);else if(d instanceof ye)d.target=d.target||l;else{var C=d;d=new ye(y,l),x(d,C)}if(C=!0,p)for(var M=p.length-1;0<=M;M--){var W=d.g=p[M];C=Gn(W,y,!0,d)&&C}if(W=d.g=l,C=Gn(W,y,!0,d)&&C,C=Gn(W,y,!1,d)&&C,p)for(M=0;M<p.length;M++)W=d.g=p[M],C=Gn(W,y,!1,d)&&C}nt.prototype.N=function(){if(nt.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],y=0;y<p.length;y++)tt(p[y]);delete l.g[d],l.h--}}this.F=null},nt.prototype.K=function(l,d,p,y){return this.i.add(String(l),d,!1,p,y)},nt.prototype.L=function(l,d,p,y){return this.i.add(String(l),d,!0,p,y)};function Gn(l,d,p,y){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var C=!0,M=0;M<d.length;++M){var W=d[M];if(W&&!W.da&&W.capture==p){var Re=W.listener,Tt=W.ha||W.src;W.fa&&pr(l.i,W),C=Re.call(Tt,y)!==!1&&C}}return C&&!y.defaultPrevented}function Da(l,d,p){if(typeof l=="function")p&&(l=g(l,p));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function Ys(l){l.g=Da(()=>{l.g=null,l.i&&(l.i=!1,Ys(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class nc extends Ie{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Ys(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qi(l){Ie.call(this),this.h=l,this.g={}}b(Qi,Ie);var rc=[];function Dn(l){F(l.g,function(d,p){this.g.hasOwnProperty(p)&&Hi(d)},l),l.g={}}Qi.prototype.N=function(){Qi.aa.N.call(this),Dn(this)},Qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Va=a.JSON.stringify,of=a.JSON.parse,Z=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function H(){}H.prototype.h=null;function ee(l){return l.h||(l.h=l.i())}function ke(){}var Te={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function oe(){ye.call(this,"d")}b(oe,ye);function Ee(){ye.call(this,"c")}b(Ee,ye);var Ne={},un=null;function mr(){return un=un||new nt}Ne.La="serverreachability";function Oa(l){ye.call(this,Ne.La,l)}b(Oa,ye);function Gr(l){const d=mr();pt(d,new Oa(d))}Ne.STAT_EVENT="statevent";function La(l,d){ye.call(this,Ne.STAT_EVENT,l),this.stat=d}b(La,ye);function mt(l){const d=mr();pt(d,new La(d,l))}Ne.Ma="timingevent";function Ma(l,d){ye.call(this,Ne.Ma,l),this.size=d}b(Ma,ye);function Kr(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Hr(){this.g=!0}Hr.prototype.xa=function(){this.g=!1};function ic(l,d,p,y,C,M){l.info(function(){if(l.g)if(M)for(var W="",Re=M.split("&"),Tt=0;Tt<Re.length;Tt++){var ve=Re[Tt].split("=");if(1<ve.length){var Ct=ve[0];ve=ve[1];var Dt=Ct.split("_");W=2<=Dt.length&&Dt[1]=="type"?W+(Ct+"="+ve+"&"):W+(Ct+"=redacted&")}}else W=null;else W=M;return"XMLHTTP REQ ("+y+") [attempt "+C+"]: "+d+`
`+p+`
`+W})}function sc(l,d,p,y,C,M,W){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+C+"]: "+d+`
`+p+`
`+M+" "+W})}function gr(l,d,p,y){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+ac(l,p)+(y?" "+y:"")})}function oc(l,d){l.info(function(){return"TIMEOUT: "+d})}Hr.prototype.info=function(){};function ac(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var y=p[l];if(!(2>y.length)){var C=y[1];if(Array.isArray(C)&&!(1>C.length)){var M=C[0];if(M!="noop"&&M!="stop"&&M!="close")for(var W=1;W<C.length;W++)C[W]=""}}}}return Va(p)}catch{return d}}var Yi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ja={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Js;function Ji(){}b(Ji,H),Ji.prototype.g=function(){return new XMLHttpRequest},Ji.prototype.i=function(){return{}},Js=new Ji;function Vn(l,d,p,y){this.j=l,this.i=d,this.l=p,this.R=y||1,this.U=new Qi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fa}function Fa(){this.i=null,this.g="",this.h=!1}var Ua={},Xs={};function Zs(l,d,p){l.L=1,l.v=dc(yr(d)),l.m=p,l.P=!0,Ba(l,null)}function Ba(l,d){l.F=Date.now(),Xi(l),l.A=yr(l.v);var p=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),m_(p.i,"t",y),l.C=0,p=l.j.J,l.h=new Fa,l.g=D_(l.j,p?d:null,!l.m),0<l.O&&(l.M=new nc(g(l.Y,l,l.g),l.O)),d=l.U,p=l.g,y=l.ca;var C="readystatechange";Array.isArray(C)||(C&&(rc[0]=C.toString()),C=rc);for(var M=0;M<C.length;M++){var W=ec(p,C[M],y||d.handleEvent,!1,d.h||d);if(!W)break;d.g[W.key]=W}d=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),Gr(),ic(l.i,l.u,l.A,l.l,l.R,l.m)}Vn.prototype.ca=function(l){l=l.target;const d=this.M;d&&_r(l)==3?d.j():this.Y(l)},Vn.prototype.Y=function(l){try{if(l==this.g)e:{const Dt=_r(this.g);var d=this.g.Ba();const io=this.g.Z();if(!(3>Dt)&&(Dt!=3||this.g&&(this.h.h||this.g.oa()||E_(this.g)))){this.J||Dt!=4||d==7||(d==8||0>=io?Gr(3):Gr(2)),eo(this);var p=this.g.Z();this.X=p;t:if(za(this)){var y=E_(this.g);l="";var C=y.length,M=_r(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){R(this),Zi(this);var W="";break t}this.h.i=new a.TextDecoder}for(d=0;d<C;d++)this.h.h=!0,l+=this.h.i.decode(y[d],{stream:!(M&&d==C-1)});y.length=0,this.h.g+=l,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=p==200,sc(this.i,this.u,this.A,this.l,this.R,Dt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Re,Tt=this.g;if((Re=Tt.g?Tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(Re)){var ve=Re;break t}}ve=null}if(p=ve)gr(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_e(this,p);else{this.o=!1,this.s=3,mt(12),R(this),Zi(this);break e}}if(this.P){p=!0;let On;for(;!this.J&&this.C<W.length;)if(On=lc(this,W),On==Xs){Dt==4&&(this.s=4,mt(14),p=!1),gr(this.i,this.l,null,"[Incomplete Response]");break}else if(On==Ua){this.s=4,mt(15),gr(this.i,this.l,W,"[Invalid Chunk]"),p=!1;break}else gr(this.i,this.l,On,null),_e(this,On);if(za(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Dt!=4||W.length!=0||this.h.h||(this.s=1,mt(16),p=!1),this.o=this.o&&p,!p)gr(this.i,this.l,W,"[Invalid Chunked Response]"),R(this),Zi(this);else if(0<W.length&&!this.W){this.W=!0;var Ct=this.j;Ct.g==this&&Ct.ba&&!Ct.M&&(Ct.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),cf(Ct),Ct.M=!0,mt(11))}}else gr(this.i,this.l,W,null),_e(this,W);Dt==4&&R(this),this.o&&!this.J&&(Dt==4?P_(this.j,this):(this.o=!1,Xi(this)))}else uR(this.g),p==400&&0<W.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),R(this),Zi(this)}}}catch{}finally{}};function za(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function lc(l,d){var p=l.C,y=d.indexOf(`
`,p);return y==-1?Xs:(p=Number(d.substring(p,y)),isNaN(p)?Ua:(y+=1,y+p>d.length?Xs:(d=d.slice(y,y+p),l.C=y+p,d)))}Vn.prototype.cancel=function(){this.J=!0,R(this)};function Xi(l){l.S=Date.now()+l.I,$a(l,l.I)}function $a(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Kr(g(l.ba,l),d)}function eo(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Vn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(oc(this.i,this.A),this.L!=2&&(Gr(),mt(17)),R(this),this.s=2,Zi(this)):$a(this,this.S-l)};function Zi(l){l.j.G==0||l.J||P_(l.j,l)}function R(l){eo(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,Dn(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function _e(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||Ce(p.h,l))){if(!l.K&&Ce(p.h,l)&&p.G==3){try{var y=p.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var C=y;if(C[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)yc(p),mc(p);else break e;uf(p),mt(18)}}else p.za=C[1],0<p.za-p.T&&37500>C[2]&&p.F&&p.v==0&&!p.C&&(p.C=Kr(g(p.Za,p),6e3));if(1>=qa(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else ts(p,11)}else if((l.K||p.g==l)&&yc(p),!v(d))for(C=p.Da.g.parse(d),d=0;d<C.length;d++){let ve=C[d];if(p.T=ve[0],ve=ve[1],p.G==2)if(ve[0]=="c"){p.K=ve[1],p.ia=ve[2];const Ct=ve[3];Ct!=null&&(p.la=Ct,p.j.info("VER="+p.la));const Dt=ve[4];Dt!=null&&(p.Aa=Dt,p.j.info("SVER="+p.Aa));const io=ve[5];io!=null&&typeof io=="number"&&0<io&&(y=1.5*io,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const On=l.g;if(On){const vc=On.g?On.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vc){var M=y.h;M.g||vc.indexOf("spdy")==-1&&vc.indexOf("quic")==-1&&vc.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(gt(M,M.h),M.h=null))}if(y.D){const df=On.g?On.g.getResponseHeader("X-HTTP-Session-Id"):null;df&&(y.ya=df,De(y.I,y.D,df))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var W=l;if(y.qa=C_(y,y.J?y.ia:null,y.W),W.K){Hn(y.h,W);var Re=W,Tt=y.L;Tt&&(Re.I=Tt),Re.B&&(eo(Re),Xi(Re)),y.g=W}else R_(y);0<p.i.length&&gc(p)}else ve[0]!="stop"&&ve[0]!="close"||ts(p,7);else p.G==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?ts(p,7):lf(p):ve[0]!="noop"&&p.l&&p.l.ta(ve),p.v=0)}}Gr(4)}catch{}}var Nt=class{constructor(l,d){this.g=l,this.map=d}};function Kn(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qr(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function qa(l){return l.h?1:l.g?l.g.size:0}function Ce(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function gt(l,d){l.g?l.g.add(d):l.h=d}function Hn(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Kn.prototype.cancel=function(){if(this.i=to(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function to(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return N(l.i)}function HA(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],p=l.length,y=0;y<p;y++)d.push(l[y]);return d}d=[],p=0;for(y in l)d[p++]=l[y];return d}function QA(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const y in l)d[p++]=y;return d}}}function u_(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=QA(l),y=HA(l),C=y.length,M=0;M<C;M++)d.call(void 0,y[M],p&&p[M],l)}var c_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function YA(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var y=l[p].indexOf("="),C=null;if(0<=y){var M=l[p].substring(0,y);C=l[p].substring(y+1)}else M=l[p];d(M,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function es(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof es){this.h=l.h,uc(this,l.j),this.o=l.o,this.g=l.g,cc(this,l.s),this.l=l.l;var d=l.i,p=new Ka;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),d_(this,p),this.m=l.m}else l&&(d=String(l).match(c_))?(this.h=!1,uc(this,d[1]||"",!0),this.o=Wa(d[2]||""),this.g=Wa(d[3]||"",!0),cc(this,d[4]),this.l=Wa(d[5]||"",!0),d_(this,d[6]||"",!0),this.m=Wa(d[7]||"")):(this.h=!1,this.i=new Ka(null,this.h))}es.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Ga(d,h_,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Ga(d,h_,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Ga(p,p.charAt(0)=="/"?ZA:XA,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Ga(p,tR)),l.join("")};function yr(l){return new es(l)}function uc(l,d,p){l.j=p?Wa(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function cc(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function d_(l,d,p){d instanceof Ka?(l.i=d,nR(l.i,l.h)):(p||(d=Ga(d,eR)),l.i=new Ka(d,l.h))}function De(l,d,p){l.i.set(d,p)}function dc(l){return De(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Wa(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Ga(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,JA),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function JA(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var h_=/[#\/\?@]/g,XA=/[#\?:]/g,ZA=/[#\?]/g,eR=/[#\?@]/g,tR=/#/g;function Ka(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function Yr(l){l.g||(l.g=new Map,l.h=0,l.i&&YA(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}n=Ka.prototype,n.add=function(l,d){Yr(this),this.i=null,l=no(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function f_(l,d){Yr(l),d=no(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function p_(l,d){return Yr(l),d=no(l,d),l.g.has(d)}n.forEach=function(l,d){Yr(this),this.g.forEach(function(p,y){p.forEach(function(C){l.call(d,C,y,this)},this)},this)},n.na=function(){Yr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let y=0;y<d.length;y++){const C=l[y];for(let M=0;M<C.length;M++)p.push(d[y])}return p},n.V=function(l){Yr(this);let d=[];if(typeof l=="string")p_(this,l)&&(d=d.concat(this.g.get(no(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},n.set=function(l,d){return Yr(this),this.i=null,l=no(this,l),p_(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},n.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function m_(l,d,p){f_(l,d),0<p.length&&(l.i=null,l.g.set(no(l,d),N(p)),l.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var y=d[p];const M=encodeURIComponent(String(y)),W=this.V(y);for(y=0;y<W.length;y++){var C=M;W[y]!==""&&(C+="="+encodeURIComponent(String(W[y]))),l.push(C)}}return this.i=l.join("&")};function no(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function nR(l,d){d&&!l.j&&(Yr(l),l.i=null,l.g.forEach(function(p,y){var C=y.toLowerCase();y!=C&&(f_(this,y),m_(this,C,p))},l)),l.j=d}function rR(l,d){const p=new Hr;if(a.Image){const y=new Image;y.onload=E(Jr,p,"TestLoadImage: loaded",!0,d,y),y.onerror=E(Jr,p,"TestLoadImage: error",!1,d,y),y.onabort=E(Jr,p,"TestLoadImage: abort",!1,d,y),y.ontimeout=E(Jr,p,"TestLoadImage: timeout",!1,d,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else d(!1)}function iR(l,d){const p=new Hr,y=new AbortController,C=setTimeout(()=>{y.abort(),Jr(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:y.signal}).then(M=>{clearTimeout(C),M.ok?Jr(p,"TestPingServer: ok",!0,d):Jr(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(C),Jr(p,"TestPingServer: error",!1,d)})}function Jr(l,d,p,y,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),y(p)}catch{}}function sR(){this.g=new Z}function oR(l,d,p){const y=p||"";try{u_(l,function(C,M){let W=C;c(C)&&(W=Va(C)),d.push(y+M+"="+encodeURIComponent(W))})}catch(C){throw d.push(y+"type="+encodeURIComponent("_badmap")),C}}function hc(l){this.l=l.Ub||null,this.j=l.eb||!1}b(hc,H),hc.prototype.g=function(){return new fc(this.l,this.j)},hc.prototype.i=function(l){return function(){return l}}({});function fc(l,d){nt.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(fc,nt),n=fc.prototype,n.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Qa(this)},n.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ha(this)),this.readyState=0},n.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Qa(this)),this.g&&(this.readyState=3,Qa(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;g_(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function g_(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}n.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Ha(this):Qa(this),this.readyState==3&&g_(this)}},n.Ra=function(l){this.g&&(this.response=this.responseText=l,Ha(this))},n.Qa=function(l){this.g&&(this.response=l,Ha(this))},n.ga=function(){this.g&&Ha(this)};function Ha(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Qa(l)}n.setRequestHeader=function(l,d){this.u.append(l,d)},n.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function Qa(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(fc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function y_(l){let d="";return F(l,function(p,y){d+=y,d+=":",d+=p,d+=`\r
`}),d}function af(l,d,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=y_(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):De(l,d,p))}function Ke(l){nt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(Ke,nt);var aR=/^https?$/i,lR=["POST","PUT"];n=Ke.prototype,n.Ha=function(l){this.J=l},n.ea=function(l,d,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Js.g(),this.v=this.o?ee(this.o):ee(Js),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(M){__(this,M);return}if(l=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var C in y)p.set(C,y[C]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const M of y.keys())p.set(M,y.get(M));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),C=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(lR,d,void 0))||y||C||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,W]of p)this.g.setRequestHeader(M,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{I_(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){__(this,M)}};function __(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,v_(l),pc(l)}function v_(l){l.A||(l.A=!0,pt(l,"complete"),pt(l,"error"))}n.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,pt(this,"complete"),pt(this,"abort"),pc(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pc(this,!0)),Ke.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?w_(this):this.bb())},n.bb=function(){w_(this)};function w_(l){if(l.h&&typeof o<"u"&&(!l.v[1]||_r(l)!=4||l.Z()!=2)){if(l.u&&_r(l)==4)Da(l.Ea,0,l);else if(pt(l,"readystatechange"),_r(l)==4){l.h=!1;try{const W=l.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var y;if(y=W===0){var C=String(l.D).match(c_)[1]||null;!C&&a.self&&a.self.location&&(C=a.self.location.protocol.slice(0,-1)),y=!aR.test(C?C.toLowerCase():"")}p=y}if(p)pt(l,"complete"),pt(l,"success");else{l.m=6;try{var M=2<_r(l)?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.Z()+"]",v_(l)}}finally{pc(l)}}}}function pc(l,d){if(l.g){I_(l);const p=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||pt(l,"ready");try{p.onreadystatechange=y}catch{}}}function I_(l){l.I&&(a.clearTimeout(l.I),l.I=null)}n.isActive=function(){return!!this.g};function _r(l){return l.g?l.g.readyState:0}n.Z=function(){try{return 2<_r(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),of(d)}};function E_(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function uR(l){const d={};l=(l.g&&2<=_r(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(v(l[y]))continue;var p=k(l[y]);const C=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=d[C]||[];d[C]=M,M.push(p)}w(d,function(y){return y.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ya(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function T_(l){this.Aa=0,this.i=[],this.j=new Hr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ya("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ya("baseRetryDelayMs",5e3,l),this.cb=Ya("retryDelaySeedMs",1e4,l),this.Wa=Ya("forwardChannelMaxRetries",2,l),this.wa=Ya("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Kn(l&&l.concurrentRequestLimit),this.Da=new sR,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=T_.prototype,n.la=8,n.G=1,n.connect=function(l,d,p,y){mt(0),this.W=l,this.H=d||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=C_(this,null,this.W),gc(this)};function lf(l){if(x_(l),l.G==3){var d=l.U++,p=yr(l.I);if(De(p,"SID",l.K),De(p,"RID",d),De(p,"TYPE","terminate"),Ja(l,p),d=new Vn(l,l.j,d),d.L=2,d.v=dc(yr(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=D_(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Xi(d)}N_(l)}function mc(l){l.g&&(cf(l),l.g.cancel(),l.g=null)}function x_(l){mc(l),l.u&&(a.clearTimeout(l.u),l.u=null),yc(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function gc(l){if(!Qr(l.h)&&!l.s){l.s=!0;var d=l.Ga;wn||re(),j||(wn(),j=!0),Q.add(d,l),l.B=0}}function cR(l,d){return qa(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Kr(g(l.Ga,l,d),b_(l,l.B)),l.B++,!0)}n.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const C=new Vn(this,this.j,l);let M=this.o;if(this.S&&(M?(M=_(M),x(M,this.S)):M=this.S),this.m!==null||this.O||(C.H=M,M=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=A_(this,C,d),p=yr(this.I),De(p,"RID",l),De(p,"CVER",22),this.D&&De(p,"X-HTTP-Session-Id",this.D),Ja(this,p),M&&(this.O?d="headers="+encodeURIComponent(String(y_(M)))+"&"+d:this.m&&af(p,this.m,M)),gt(this.h,C),this.Ua&&De(p,"TYPE","init"),this.P?(De(p,"$req",d),De(p,"SID","null"),C.T=!0,Zs(C,p,null)):Zs(C,p,d),this.G=2}}else this.G==3&&(l?S_(this,l):this.i.length==0||Qr(this.h)||S_(this))};function S_(l,d){var p;d?p=d.l:p=l.U++;const y=yr(l.I);De(y,"SID",l.K),De(y,"RID",p),De(y,"AID",l.T),Ja(l,y),l.m&&l.o&&af(y,l.m,l.o),p=new Vn(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=A_(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),gt(l.h,p),Zs(p,y,d)}function Ja(l,d){l.H&&F(l.H,function(p,y){De(d,y,p)}),l.l&&u_({},function(p,y){De(d,y,p)})}function A_(l,d,p){p=Math.min(l.i.length,p);var y=l.l?g(l.l.Na,l.l,l):null;e:{var C=l.i;let M=-1;for(;;){const W=["count="+p];M==-1?0<p?(M=C[0].g,W.push("ofs="+M)):M=0:W.push("ofs="+M);let Re=!0;for(let Tt=0;Tt<p;Tt++){let ve=C[Tt].g;const Ct=C[Tt].map;if(ve-=M,0>ve)M=Math.max(0,C[Tt].g-100),Re=!1;else try{oR(Ct,W,"req"+ve+"_")}catch{y&&y(Ct)}}if(Re){y=W.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,y}function R_(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;wn||re(),j||(wn(),j=!0),Q.add(d,l),l.v=0}}function uf(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Kr(g(l.Fa,l),b_(l,l.v)),l.v++,!0)}n.Fa=function(){if(this.u=null,k_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Kr(g(this.ab,this),l)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),mc(this),k_(this))};function cf(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function k_(l){l.g=new Vn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=yr(l.qa);De(d,"RID","rpc"),De(d,"SID",l.K),De(d,"AID",l.T),De(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&De(d,"TO",l.ja),De(d,"TYPE","xmlhttp"),Ja(l,d),l.m&&l.o&&af(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=dc(yr(d)),p.m=null,p.P=!0,Ba(p,l)}n.Za=function(){this.C!=null&&(this.C=null,mc(this),uf(this),mt(19))};function yc(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function P_(l,d){var p=null;if(l.g==d){yc(l),cf(l),l.g=null;var y=2}else if(Ce(l.h,d))p=d.D,Hn(l.h,d),y=1;else return;if(l.G!=0){if(d.o)if(y==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var C=l.B;y=mr(),pt(y,new Ma(y,p)),gc(l)}else R_(l);else if(C=d.s,C==3||C==0&&0<d.X||!(y==1&&cR(l,d)||y==2&&uf(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),C){case 1:ts(l,5);break;case 4:ts(l,10);break;case 3:ts(l,6);break;default:ts(l,2)}}}function b_(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function ts(l,d){if(l.j.info("Error code "+d),d==2){var p=g(l.fb,l),y=l.Xa;const C=!y;y=new es(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||uc(y,"https"),dc(y),C?rR(y.toString(),p):iR(y.toString(),p)}else mt(2);l.G=0,l.l&&l.l.sa(d),N_(l),x_(l)}n.fb=function(l){l?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function N_(l){if(l.G=0,l.ka=[],l.l){const d=to(l.h);(d.length!=0||l.i.length!=0)&&(O(l.ka,d),O(l.ka,l.i),l.h.i.length=0,N(l.i),l.i.length=0),l.l.ra()}}function C_(l,d,p){var y=p instanceof es?yr(p):new es(p);if(y.g!="")d&&(y.g=d+"."+y.g),cc(y,y.s);else{var C=a.location;y=C.protocol,d=d?d+"."+C.hostname:C.hostname,C=+C.port;var M=new es(null);y&&uc(M,y),d&&(M.g=d),C&&cc(M,C),p&&(M.l=p),y=M}return p=l.D,d=l.ya,p&&d&&De(y,p,d),De(y,"VER",l.la),Ja(l,y),y}function D_(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Ke(new hc({eb:p})):new Ke(l.pa),d.Ha(l.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function V_(){}n=V_.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function _c(){}_c.prototype.g=function(l,d){return new cn(l,d)};function cn(l,d){nt.call(this),this.g=new T_(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!v(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!v(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new ro(this)}b(cn,nt),cn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},cn.prototype.close=function(){lf(this.g)},cn.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=Va(l),l=p);d.i.push(new Nt(d.Ya++,l)),d.G==3&&gc(d)},cn.prototype.N=function(){this.g.l=null,delete this.j,lf(this.g),delete this.g,cn.aa.N.call(this)};function O_(l){oe.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}b(O_,oe);function L_(){Ee.call(this),this.status=1}b(L_,Ee);function ro(l){this.g=l}b(ro,V_),ro.prototype.ua=function(){pt(this.g,"a")},ro.prototype.ta=function(l){pt(this.g,new O_(l))},ro.prototype.sa=function(l){pt(this.g,new L_)},ro.prototype.ra=function(){pt(this.g,"b")},_c.prototype.createWebChannel=_c.prototype.g,cn.prototype.send=cn.prototype.o,cn.prototype.open=cn.prototype.m,cn.prototype.close=cn.prototype.close,Rx=function(){return new _c},Ax=function(){return mr()},Sx=Ne,fm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Yi.NO_ERROR=0,Yi.TIMEOUT=8,Yi.HTTP_ERROR=6,ad=Yi,ja.COMPLETE="complete",xx=ja,ke.EventType=Te,Te.OPEN="a",Te.CLOSE="b",Te.ERROR="c",Te.MESSAGE="d",nt.prototype.listen=nt.prototype.K,Il=ke,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,Tx=Ke}).apply(typeof jc<"u"?jc:typeof self<"u"?self:typeof window<"u"?window:{});const Sw="@firebase/firestore";/**
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
 */class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
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
 */let Ia="10.14.0";/**
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
 */const bi=new Eh("@firebase/firestore");function fo(){return bi.logLevel}function Y2(n){bi.setLogLevel(n)}function B(n,...e){if(bi.logLevel<=ce.DEBUG){const t=e.map(oy);bi.debug(`Firestore (${Ia}): ${n}`,...t)}}function it(n,...e){if(bi.logLevel<=ce.ERROR){const t=e.map(oy);bi.error(`Firestore (${Ia}): ${n}`,...t)}}function dr(n,...e){if(bi.logLevel<=ce.WARN){const t=e.map(oy);bi.warn(`Firestore (${Ia}): ${n}`,...t)}}function oy(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function Y(n="Unexpected state"){const e=`FIRESTORE (${Ia}) INTERNAL ASSERTION FAILED: `+n;throw it(e),new Error(e)}function X(n,e){n||Y()}function J2(n,e){n||Y()}function K(n,e){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends qt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class kt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class kx{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class X2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(vt.UNAUTHENTICATED))}shutdown(){}}class Z2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class eV{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){X(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new kt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new kt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new kt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string"),new kx(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string"),new vt(e)}}class tV{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class nV{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new tV(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rV{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iV{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){X(this.o===void 0);const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(X(typeof t.token=="string"),this.R=t.token,new rV(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function sV(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Px{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=sV(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(n,e){return n<e?-1:n>e?1:0}function ea(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function bx(n){return n+"\0"}/**
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
 */class Be{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new U(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new U(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new U(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Be(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Be(0,0))}static max(){return new te(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class mu{constructor(e,t,r){t===void 0?t=0:t>e.length&&Y(),r===void 0?r=e.length-t:r>e.length-t&&Y(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return mu.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof mu?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class he extends mu{construct(e,t,r){return new he(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new he(t)}static emptyPath(){return new he([])}}const oV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends mu{construct(e,t,r){return new Fe(e,t,r)}static isValidIdentifier(e){return oV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Fe(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new U(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new U(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new U(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new U(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(t)}static emptyPath(){return new Fe([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(he.fromString(e))}static fromName(e){return new G(he.fromString(e).popFirst(5))}static empty(){return new G(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return he.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new he(e.slice()))}}/**
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
 */class Kd{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function pm(n){return n.fields.find(e=>e.kind===2)}function os(n){return n.fields.filter(e=>e.kind!==2)}Kd.UNKNOWN_ID=-1;class ld{constructor(e,t){this.fieldPath=e,this.kind=t}}class gu{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new gu(0,yn.min())}}function Nx(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new Be(t+1,0):new Be(t,r));return new yn(i,G.empty(),e)}function Cx(n){return new yn(n.readTime,n.key,-1)}class yn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new yn(te.min(),G.empty(),-1)}static max(){return new yn(te.max(),G.empty(),-1)}}function ay(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=G.comparator(n.documentKey,e.documentKey),t!==0?t:ae(n.largestBatchId,e.largestBatchId))}/**
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
 */const Dx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Vx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function $i(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==Dx)throw n;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):D.reject(t)}static resolve(e){return new D((t,r)=>{t(e)})}static reject(e){return new D((t,r)=>{r(e)})}static waitFor(e){return new D((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},u=>r(u))}),o=!0,s===i&&t()})}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next(i=>i?D.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new D((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;t(e[c]).next(f=>{o[c]=f,++a,a===s&&r(o)},f=>i(f))}})}static doWhile(e,t){return new D((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
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
 */class Vh{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new kt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Ml(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=ly(r.target.error);this.V.reject(new Ml(e,i))}}static open(e,t,r,i){try{return new Vh(t,e.transaction(i,r))}catch(s){throw new Ml(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(B("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new lV(t)}}class ar{constructor(e,t,r){this.name=e,this.version=t,this.p=r,ar.S(Ge())===12.2&&it("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return B("SimpleDb","Removing database:",e),as(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!ou())return!1;if(ar.v())return!0;const e=Ge(),t=ar.S(e),r=0<t&&t<10,i=Ox(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(B("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new Ml(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new U(V.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new U(V.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ml(e,o))},i.onupgradeneeded=s=>{B("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{B("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Vh.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),D.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(B("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Ox(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class aV{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return as(this.B.delete())}}class Ml extends U{constructor(e,t){super(V.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function qi(n){return n.name==="IndexedDbTransactionError"}class lV{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(B("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(B("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),as(r)}add(e){return B("SimpleDb","ADD",this.store.name,e,e),as(this.store.add(e))}get(e){return as(this.store.get(e)).next(t=>(t===void 0&&(t=null),B("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return B("SimpleDb","DELETE",this.store.name,e),as(this.store.delete(e))}count(){return B("SimpleDb","COUNT",this.store.name),as(this.store.count())}U(e,t){const r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new D((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,u)=>{o.push(u)}).next(()=>o)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new D((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,t){B("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.W(i,t)}Y(e){const t=this.cursor({});return new D((r,i)=>{t.onerror=s=>{const o=ly(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new D((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new aV(a),c=t(a.primaryKey,a.value,u);if(c instanceof D){const f=c.catch(m=>(u.done(),D.reject(m)));r.push(f)}u.isDone?i():u.K===null?a.continue():a.continue(u.K)}}).next(()=>D.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function as(n){return new D((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=ly(r.target.error);t(i)}})}let Aw=!1;function ly(n){const e=ar.S(Ge());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new U("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Aw||(Aw=!0,setTimeout(()=>{throw r},0)),r}}return n}class uV{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){B("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{B("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){qi(t)?B("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await $i(t)}await this.X(6e4)})}}class cV{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let i=t,s=!0;return D.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return B("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(B("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=Cx(s);ay(o,r)>0&&(r=o)}),new yn(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class tn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}tn.oe=-1;function Bu(n){return n==null}function yu(n){return n===0&&1/n==-1/0}function Lx(n){return typeof n=="number"&&Number.isInteger(n)&&!yu(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Wt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Rw(e)),e=dV(n.get(t),e);return Rw(e)}function dV(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function Rw(n){return n+""}function rr(n){const e=n.length;if(X(e>=2),e===2)return X(n.charAt(0)===""&&n.charAt(1)===""),he.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&Y(),n.charAt(o+1)){case"":const a=n.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:Y()}s=o+2}return new he(r)}/**
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
 */const kw=["userId","batchId"];/**
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
 */function ud(n,e){return[n,Wt(e)]}function Mx(n,e,t){return[n,Wt(e),t]}const hV={},fV=["prefixPath","collectionGroup","readTime","documentId"],pV=["prefixPath","collectionGroup","documentId"],mV=["collectionGroup","readTime","prefixPath","documentId"],gV=["canonicalId","targetId"],yV=["targetId","path"],_V=["path","targetId"],vV=["collectionId","parent"],wV=["indexId","uid"],IV=["uid","sequenceNumber"],EV=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],TV=["indexId","uid","orderedDocumentKey"],xV=["userId","collectionPath","documentId"],SV=["userId","collectionPath","largestBatchId"],AV=["userId","collectionGroup","largestBatchId"],jx=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],RV=[...jx,"documentOverlays"],Fx=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ux=Fx,uy=[...Ux,"indexConfiguration","indexState","indexEntries"],kV=uy,PV=[...uy,"globals"];/**
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
 */class mm extends Vx{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function ft(n,e){const t=K(n);return ar.F(t._e,e)}/**
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
 */function Pw(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function qs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Bx(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class be{constructor(e,t){this.comparator=e,this.root=t||St.EMPTY}insert(e,t){return new be(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,St.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,St.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fc(this.root,e,this.comparator,!0)}}class Fc{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class St{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??St.RED,this.left=i??St.EMPTY,this.right=s??St.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new St(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return St.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return St.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,St.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,St.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}St.EMPTY=null,St.RED=!0,St.BLACK=!1;St.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,t,r,i,s){return this}insert(e,t,r){return new St(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ae{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new bw(this.data.getIterator())}getIteratorFrom(e){return new bw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ae)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ae(this.comparator);return t.data=e,t}}class bw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function lo(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class nn{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new nn([])}unionWith(e){let t=new Ae(Fe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new nn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ea(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class zx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function bV(){return typeof atob<"u"}/**
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
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new zx("Invalid base64 string: "+s):s}}(e);return new Je(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Je(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const NV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vr(n){if(X(!!n),typeof n=="string"){let e=0;const t=NV.exec(n);if(X(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(n.seconds),nanos:Me(n.nanos)}}function Me(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ni(n){return typeof n=="string"?Je.fromBase64String(n):Je.fromUint8Array(n)}/**
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
 */function Oh(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function cy(n){const e=n.mapValue.fields.__previous_value__;return Oh(e)?cy(e):e}function _u(n){const e=Vr(n.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
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
 */class CV{constructor(e,t,r,i,s,o,a,u,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Ci{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ci("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ci&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const pi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},cd={nullValue:"NULL_VALUE"};function Ns(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Oh(n)?4:$x(n)?9007199254740991:Lh(n)?10:11:Y()}function hr(n,e){if(n===e)return!0;const t=Ns(n);if(t!==Ns(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return _u(n).isEqual(_u(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Vr(i.timestampValue),a=Vr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Ni(i.bytesValue).isEqual(Ni(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Me(i.geoPointValue.latitude)===Me(s.geoPointValue.latitude)&&Me(i.geoPointValue.longitude)===Me(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Me(i.integerValue)===Me(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Me(i.doubleValue),a=Me(s.doubleValue);return o===a?yu(o)===yu(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return ea(n.arrayValue.values||[],e.arrayValue.values||[],hr);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Pw(o)!==Pw(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!hr(o[u],a[u])))return!1;return!0}(n,e);default:return Y()}}function vu(n,e){return(n.values||[]).find(t=>hr(t,e))!==void 0}function Di(n,e){if(n===e)return 0;const t=Ns(n),r=Ns(e);if(t!==r)return ae(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ae(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Me(s.integerValue||s.doubleValue),u=Me(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(n,e);case 3:return Nw(n.timestampValue,e.timestampValue);case 4:return Nw(_u(n),_u(e));case 5:return ae(n.stringValue,e.stringValue);case 6:return function(s,o){const a=Ni(s),u=Ni(o);return a.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const f=ae(a[c],u[c]);if(f!==0)return f}return ae(a.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ae(Me(s.latitude),Me(o.latitude));return a!==0?a:ae(Me(s.longitude),Me(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Cw(n.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,f;const m=s.fields||{},g=o.fields||{},E=(a=m.value)===null||a===void 0?void 0:a.arrayValue,b=(u=g.value)===null||u===void 0?void 0:u.arrayValue,N=ae(((c=E==null?void 0:E.values)===null||c===void 0?void 0:c.length)||0,((f=b==null?void 0:b.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:Cw(E,b)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===pi.mapValue&&o===pi.mapValue)return 0;if(s===pi.mapValue)return 1;if(o===pi.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=ae(u[m],f[m]);if(g!==0)return g;const E=Di(a[u[m]],c[f[m]]);if(E!==0)return E}return ae(u.length,f.length)}(n.mapValue,e.mapValue);default:throw Y()}}function Nw(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ae(n,e);const t=Vr(n),r=Vr(e),i=ae(t.seconds,r.seconds);return i!==0?i:ae(t.nanos,r.nanos)}function Cw(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Di(t[i],r[i]);if(s)return s}return ae(t.length,r.length)}function ta(n){return gm(n)}function gm(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Vr(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ni(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return G.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=gm(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${gm(t.fields[o])}`;return i+"}"}(n.mapValue):Y()}function Cs(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ym(n){return!!n&&"integerValue"in n}function wu(n){return!!n&&"arrayValue"in n}function Dw(n){return!!n&&"nullValue"in n}function Vw(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function dd(n){return!!n&&"mapValue"in n}function Lh(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function jl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return qs(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=jl(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=jl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function $x(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const qx={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function DV(n){return"nullValue"in n?cd:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Cs(Ci.empty(),G.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Lh(n)?qx:{mapValue:{}}:Y()}function VV(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Cs(Ci.empty(),G.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?qx:"mapValue"in n?Lh(n)?{mapValue:{}}:pi:Y()}function Ow(n,e){const t=Di(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Lw(n,e){const t=Di(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!dd(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=jl(t)}setAll(e){let t=Fe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=jl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());dd(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return hr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];dd(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){qs(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new At(jl(this.value))}}function Wx(n){const e=[];return qs(n.fields,(t,r)=>{const i=new Fe([t]);if(dd(r)){const s=Wx(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new nn(e)}/**
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
 */class Oe{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Oe(e,0,te.min(),te.min(),te.min(),At.empty(),0)}static newFoundDocument(e,t,r,i){return new Oe(e,1,t,te.min(),r,i,0)}static newNoDocument(e,t){return new Oe(e,2,t,te.min(),te.min(),At.empty(),0)}static newUnknownDocument(e,t){return new Oe(e,3,t,te.min(),te.min(),At.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Oe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Oe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vi{constructor(e,t){this.position=e,this.inclusive=t}}function Mw(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),t.key):r=Di(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function jw(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!hr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Iu{constructor(e,t="asc"){this.field=e,this.dir=t}}function OV(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Gx{}class fe extends Gx{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new LV(e,t,r):t==="array-contains"?new FV(e,r):t==="in"?new Xx(e,r):t==="not-in"?new UV(e,r):t==="array-contains-any"?new BV(e,r):new fe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new MV(e,r):new jV(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Di(t,this.value)):t!==null&&Ns(this.value)===Ns(t)&&this.matchesComparison(Di(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xe extends Gx{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new xe(e,t)}matches(e){return na(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function na(n){return n.op==="and"}function _m(n){return n.op==="or"}function dy(n){return Kx(n)&&na(n)}function Kx(n){for(const e of n.filters)if(e instanceof xe)return!1;return!0}function vm(n){if(n instanceof fe)return n.field.canonicalString()+n.op.toString()+ta(n.value);if(dy(n))return n.filters.map(e=>vm(e)).join(",");{const e=n.filters.map(t=>vm(t)).join(",");return`${n.op}(${e})`}}function Hx(n,e){return n instanceof fe?function(r,i){return i instanceof fe&&r.op===i.op&&r.field.isEqual(i.field)&&hr(r.value,i.value)}(n,e):n instanceof xe?function(r,i){return i instanceof xe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Hx(o,i.filters[a]),!0):!1}(n,e):void Y()}function Qx(n,e){const t=n.filters.concat(e);return xe.create(t,n.op)}function Yx(n){return n instanceof fe?function(t){return`${t.field.canonicalString()} ${t.op} ${ta(t.value)}`}(n):n instanceof xe?function(t){return t.op.toString()+" {"+t.getFilters().map(Yx).join(" ,")+"}"}(n):"Filter"}class LV extends fe{constructor(e,t,r){super(e,t,r),this.key=G.fromName(r.referenceValue)}matches(e){const t=G.comparator(e.key,this.key);return this.matchesComparison(t)}}class MV extends fe{constructor(e,t){super(e,"in",t),this.keys=Jx("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class jV extends fe{constructor(e,t){super(e,"not-in",t),this.keys=Jx("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Jx(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>G.fromName(r.referenceValue))}class FV extends fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return wu(t)&&vu(t.arrayValue,this.value)}}class Xx extends fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&vu(this.value.arrayValue,t)}}class UV extends fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(vu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!vu(this.value.arrayValue,t)}}class BV extends fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!wu(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>vu(this.value.arrayValue,r))}}/**
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
 */class zV{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function wm(n,e=null,t=[],r=[],i=null,s=null,o=null){return new zV(n,e,t,r,i,s,o)}function Ds(n){const e=K(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>vm(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Bu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ta(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ta(r)).join(",")),e.ue=t}return e.ue}function zu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!OV(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Hx(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!jw(n.startAt,e.startAt)&&jw(n.endAt,e.endAt)}function Hd(n){return G.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Qd(n,e){return n.filters.filter(t=>t instanceof fe&&t.field.isEqual(e))}function Fw(n,e,t){let r=cd,i=!0;for(const s of Qd(n,e)){let o=cd,a=!0;switch(s.op){case"<":case"<=":o=DV(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=cd}Ow({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Ow({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function Uw(n,e,t){let r=pi,i=!0;for(const s of Qd(n,e)){let o=pi,a=!0;switch(s.op){case">=":case">":o=VV(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=pi}Lw({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Lw({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Fr{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Zx(n,e,t,r,i,s,o,a){return new Fr(n,e,t,r,i,s,o,a)}function Ea(n){return new Fr(n)}function Bw(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function hy(n){return n.collectionGroup!==null}function Bo(n){const e=K(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ae(Fe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Iu(s,r))}),t.has(Fe.keyField().canonicalString())||e.ce.push(new Iu(Fe.keyField(),r))}return e.ce}function Gt(n){const e=K(n);return e.le||(e.le=$V(e,Bo(n))),e.le}function $V(n,e){if(n.limitType==="F")return wm(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Iu(i.field,s)});const t=n.endAt?new Vi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Vi(n.startAt.position,n.startAt.inclusive):null;return wm(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Im(n,e){const t=n.filters.concat([e]);return new Fr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Yd(n,e,t){return new Fr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function $u(n,e){return zu(Gt(n),Gt(e))&&n.limitType===e.limitType}function eS(n){return`${Ds(Gt(n))}|lt:${n.limitType}`}function po(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Yx(i)).join(", ")}]`),Bu(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>ta(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>ta(i)).join(",")),`Target(${r})`}(Gt(n))}; limitType=${n.limitType})`}function qu(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Bo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=Mw(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Bo(r),i)||r.endAt&&!function(o,a,u){const c=Mw(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Bo(r),i))}(n,e)}function tS(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function nS(n){return(e,t)=>{let r=!1;for(const i of Bo(n)){const s=qV(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function qV(n,e,t){const r=n.field.isKeyField()?G.comparator(e.key,t.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Di(u,c):Y()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */class Wi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){qs(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Bx(this.inner)}size(){return this.innerSize}}/**
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
 */const WV=new be(G.comparator);function rn(){return WV}const rS=new be(G.comparator);function El(...n){let e=rS;for(const t of n)e=e.insert(t.key,t);return e}function iS(n){let e=rS;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ir(){return Fl()}function sS(){return Fl()}function Fl(){return new Wi(n=>n.toString(),(n,e)=>n.isEqual(e))}const GV=new be(G.comparator),KV=new Ae(G.comparator);function le(...n){let e=KV;for(const t of n)e=e.add(t);return e}const HV=new Ae(ae);function fy(){return HV}/**
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
 */function py(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yu(e)?"-0":e}}function oS(n){return{integerValue:""+n}}function aS(n,e){return Lx(e)?oS(e):py(n,e)}/**
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
 */class Mh{constructor(){this._=void 0}}function QV(n,e,t){return n instanceof ra?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Oh(s)&&(s=cy(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof Vs?uS(n,e):n instanceof Os?cS(n,e):function(i,s){const o=lS(i,s),a=zw(o)+zw(i.Pe);return ym(o)&&ym(i.Pe)?oS(a):py(i.serializer,a)}(n,e)}function YV(n,e,t){return n instanceof Vs?uS(n,e):n instanceof Os?cS(n,e):t}function lS(n,e){return n instanceof ia?function(r){return ym(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ra extends Mh{}class Vs extends Mh{constructor(e){super(),this.elements=e}}function uS(n,e){const t=dS(e);for(const r of n.elements)t.some(i=>hr(i,r))||t.push(r);return{arrayValue:{values:t}}}class Os extends Mh{constructor(e){super(),this.elements=e}}function cS(n,e){let t=dS(e);for(const r of n.elements)t=t.filter(i=>!hr(i,r));return{arrayValue:{values:t}}}class ia extends Mh{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function zw(n){return Me(n.integerValue||n.doubleValue)}function dS(n){return wu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Wu{constructor(e,t){this.field=e,this.transform=t}}function JV(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Vs&&i instanceof Vs||r instanceof Os&&i instanceof Os?ea(r.elements,i.elements,hr):r instanceof ia&&i instanceof ia?hr(r.Pe,i.Pe):r instanceof ra&&i instanceof ra}(n.transform,e.transform)}class XV{constructor(e,t){this.version=e,this.transformResults=t}}class Ue{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ue}static exists(e){return new Ue(void 0,e)}static updateTime(e){return new Ue(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hd(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class jh{}function hS(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new xa(n.key,Ue.none()):new Ta(n.key,n.data,Ue.none());{const t=n.data,r=At.empty();let i=new Ae(Fe.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ur(n.key,r,new nn(i.toArray()),Ue.none())}}function ZV(n,e,t){n instanceof Ta?function(i,s,o){const a=i.value.clone(),u=qw(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof Ur?function(i,s,o){if(!hd(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=qw(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(fS(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Ul(n,e,t,r){return n instanceof Ta?function(s,o,a,u){if(!hd(s.precondition,o))return a;const c=s.value.clone(),f=Ww(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ur?function(s,o,a,u){if(!hd(s.precondition,o))return a;const c=Ww(s.fieldTransforms,u,o),f=o.data;return f.setAll(fS(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(s,o,a){return hd(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function eO(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=lS(r.transform,i||null);s!=null&&(t===null&&(t=At.empty()),t.set(r.field,s))}return t||null}function $w(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ea(r,i,(s,o)=>JV(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ta extends jh{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ur extends jh{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function fS(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function qw(n,e,t){const r=new Map;X(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,YV(o,a,t[i]))}return r}function Ww(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,QV(s,o,e))}return r}class xa extends jh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class my extends jh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class gy{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ZV(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ul(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ul(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=sS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const u=hS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),le())}isEqual(e){return this.batchId===e.batchId&&ea(this.mutations,e.mutations,(t,r)=>$w(t,r))&&ea(this.baseMutations,e.baseMutations,(t,r)=>$w(t,r))}}class yy{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){X(e.mutations.length===r.length);let i=function(){return GV}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new yy(e,t,r,i)}}/**
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
 */class _y{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class tO{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var at,me;function pS(n){switch(n){default:return Y();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function mS(n){if(n===void 0)return it("GRPC error has no .code"),V.UNKNOWN;switch(n){case at.OK:return V.OK;case at.CANCELLED:return V.CANCELLED;case at.UNKNOWN:return V.UNKNOWN;case at.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case at.INTERNAL:return V.INTERNAL;case at.UNAVAILABLE:return V.UNAVAILABLE;case at.UNAUTHENTICATED:return V.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case at.NOT_FOUND:return V.NOT_FOUND;case at.ALREADY_EXISTS:return V.ALREADY_EXISTS;case at.PERMISSION_DENIED:return V.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case at.ABORTED:return V.ABORTED;case at.OUT_OF_RANGE:return V.OUT_OF_RANGE;case at.UNIMPLEMENTED:return V.UNIMPLEMENTED;case at.DATA_LOSS:return V.DATA_LOSS;default:return Y()}}(me=at||(at={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function gS(){return new TextEncoder}/**
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
 */const nO=new Es([4294967295,4294967295],0);function Gw(n){const e=gS().encode(n),t=new Ex;return t.update(e),new Uint8Array(t.digest())}function Kw(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Es([t,r],0),new Es([i,s],0)]}class vy{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Tl(`Invalid padding: ${t}`);if(r<0)throw new Tl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Tl(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Tl(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Es.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(Es.fromNumber(r)));return i.compare(nO)===1&&(i=new Es([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Gw(e),[r,i]=Kw(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new vy(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const t=Gw(e),[r,i]=Kw(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Tl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Gu{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Ku.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Gu(te.min(),i,new be(ae),rn(),le())}}class Ku{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ku(r,t,le(),le(),le())}}/**
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
 */class fd{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class yS{constructor(e,t){this.targetId=e,this.me=t}}class _S{constructor(e,t,r=Je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Hw{constructor(){this.fe=0,this.ge=Yw(),this.pe=Je.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=le(),t=le(),r=le();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new Ku(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Yw()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,X(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class rO{constructor(e){this.Le=e,this.Be=new Map,this.ke=rn(),this.qe=Qw(),this.Qe=new be(ae)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(Hd(s))if(r===0){const o=new G(s.path);this.Ue(t,o,Oe.newNoDocument(o,te.min()))}else X(r===1);else{const o=this.Ye(t);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,c)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,a;try{o=Ni(r).toUint8Array()}catch(u){if(u instanceof zx)return dr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new vy(o,i,s)}catch(u){return dr(u instanceof Tl?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Hd(a.target)){const u=new G(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Oe.newNoDocument(u,e))}s.be&&(t.set(o,s.ve()),s.Ce())}});let r=le();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Gu(e,t,this.Qe,this.ke,r);return this.ke=rn(),this.qe=Qw(),this.Qe=new be(ae),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Hw,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ae(ae),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||B("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Hw),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Qw(){return new be(G.comparator)}function Yw(){return new be(G.comparator)}const iO={asc:"ASCENDING",desc:"DESCENDING"},sO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},oO={and:"AND",or:"OR"};class aO{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Em(n,e){return n.useProto3Json||Bu(e)?e:{value:e}}function sa(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vS(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function lO(n,e){return sa(n,e.toTimestamp())}function st(n){return X(!!n),te.fromTimestamp(function(t){const r=Vr(t);return new Be(r.seconds,r.nanos)}(n))}function wy(n,e){return Tm(n,e).canonicalString()}function Tm(n,e){const t=function(i){return new he(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function wS(n){const e=he.fromString(n);return X(bS(e)),e}function Eu(n,e){return wy(n.databaseId,e.path)}function lr(n,e){const t=wS(e);if(t.get(1)!==n.databaseId.projectId)throw new U(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new U(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new G(TS(t))}function IS(n,e){return wy(n.databaseId,e)}function ES(n){const e=wS(n);return e.length===4?he.emptyPath():TS(e)}function xm(n){return new he(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function TS(n){return X(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Jw(n,e,t){return{name:Eu(n,e),fields:t.value.mapValue.fields}}function xS(n,e,t){const r=lr(n,e.name),i=st(e.updateTime),s=e.createTime?st(e.createTime):te.min(),o=new At({mapValue:{fields:e.fields}}),a=Oe.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function uO(n,e){return"found"in e?function(r,i){X(!!i.found),i.found.name,i.found.updateTime;const s=lr(r,i.found.name),o=st(i.found.updateTime),a=i.found.createTime?st(i.found.createTime):te.min(),u=new At({mapValue:{fields:i.found.fields}});return Oe.newFoundDocument(s,o,a,u)}(n,e):"missing"in e?function(r,i){X(!!i.missing),X(!!i.readTime);const s=lr(r,i.missing),o=st(i.readTime);return Oe.newNoDocument(s,o)}(n,e):Y()}function cO(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(X(f===void 0||typeof f=="string"),Je.fromBase64String(f||"")):(X(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Je.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const f=c.code===void 0?V.UNKNOWN:mS(c.code);return new U(f,c.message||"")}(o);t=new _S(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=lr(n,r.document.name),s=st(r.document.updateTime),o=r.document.createTime?st(r.document.createTime):te.min(),a=new At({mapValue:{fields:r.document.fields}}),u=Oe.newFoundDocument(i,s,o,a),c=r.targetIds||[],f=r.removedTargetIds||[];t=new fd(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=lr(n,r.document),s=r.readTime?st(r.readTime):te.min(),o=Oe.newNoDocument(i,s),a=r.removedTargetIds||[];t=new fd([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=lr(n,r.document),s=r.removedTargetIds||[];t=new fd([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new tO(i,s),a=r.targetId;t=new yS(a,o)}}return t}function Tu(n,e){let t;if(e instanceof Ta)t={update:Jw(n,e.key,e.value)};else if(e instanceof xa)t={delete:Eu(n,e.key)};else if(e instanceof Ur)t={update:Jw(n,e.key,e.data),updateMask:gO(e.fieldMask)};else{if(!(e instanceof my))return Y();t={verify:Eu(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ra)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Vs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Os)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ia)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Y()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:lO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(n,e.precondition)),t}function Sm(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Ue.updateTime(st(s.updateTime)):s.exists!==void 0?Ue.exists(s.exists):Ue.none()}(e.currentDocument):Ue.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let u=null;if("setToServerValue"in a)X(a.setToServerValue==="REQUEST_TIME"),u=new ra;else if("appendMissingElements"in a){const f=a.appendMissingElements.values||[];u=new Vs(f)}else if("removeAllFromArray"in a){const f=a.removeAllFromArray.values||[];u=new Os(f)}else"increment"in a?u=new ia(o,a.increment):Y();const c=Fe.fromServerFormat(a.fieldPath);return new Wu(c,u)}(n,i)):[];if(e.update){e.update.name;const i=lr(n,e.update.name),s=new At({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const c=u.fieldPaths||[];return new nn(c.map(f=>Fe.fromServerFormat(f)))}(e.updateMask);return new Ur(i,s,o,t,r)}return new Ta(i,s,t,r)}if(e.delete){const i=lr(n,e.delete);return new xa(i,t)}if(e.verify){const i=lr(n,e.verify);return new my(i,t)}return Y()}function dO(n,e){return n&&n.length>0?(X(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?st(i.updateTime):st(s);return o.isEqual(te.min())&&(o=st(s)),new XV(o,i.transformResults||[])}(t,e))):[]}function SS(n,e){return{documents:[IS(n,e.path)]}}function AS(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=IS(n,i);const s=function(c){if(c.length!==0)return PS(xe.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:mo(g.field),direction:fO(g.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=Em(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:t,parent:i}}function RS(n){let e=ES(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){X(r===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(m){const g=kS(m);return g instanceof xe&&dy(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(m){return m.map(g=>function(b){return new Iu(go(b.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(g))}(t.orderBy));let a=null;t.limit&&(a=function(m){let g;return g=typeof m=="object"?m.value:m,Bu(g)?null:g}(t.limit));let u=null;t.startAt&&(u=function(m){const g=!!m.before,E=m.values||[];return new Vi(E,g)}(t.startAt));let c=null;return t.endAt&&(c=function(m){const g=!m.before,E=m.values||[];return new Vi(E,g)}(t.endAt)),Zx(e,i,o,s,a,"F",u,c)}function hO(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function kS(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=go(t.unaryFilter.field);return fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=go(t.unaryFilter.field);return fe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=go(t.unaryFilter.field);return fe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=go(t.unaryFilter.field);return fe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(n):n.fieldFilter!==void 0?function(t){return fe.create(go(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return xe.create(t.compositeFilter.filters.map(r=>kS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(t.compositeFilter.op))}(n):Y()}function fO(n){return iO[n]}function pO(n){return sO[n]}function mO(n){return oO[n]}function mo(n){return{fieldPath:n.canonicalString()}}function go(n){return Fe.fromServerFormat(n.fieldPath)}function PS(n){return n instanceof fe?function(t){if(t.op==="=="){if(Vw(t.value))return{unaryFilter:{field:mo(t.field),op:"IS_NAN"}};if(Dw(t.value))return{unaryFilter:{field:mo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Vw(t.value))return{unaryFilter:{field:mo(t.field),op:"IS_NOT_NAN"}};if(Dw(t.value))return{unaryFilter:{field:mo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mo(t.field),op:pO(t.op),value:t.value}}}(n):n instanceof xe?function(t){const r=t.getFilters().map(i=>PS(i));return r.length===1?r[0]:{compositeFilter:{op:mO(t.op),filters:r}}}(n):Y()}function gO(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function bS(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Sr{constructor(e,t,r,i,s=te.min(),o=te.min(),a=Je.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Sr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class NS{constructor(e){this.ct=e}}function yO(n,e){let t;if(e.document)t=xS(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=G.fromSegments(e.noDocument.path),i=Ms(e.noDocument.readTime);t=Oe.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return Y();{const r=G.fromSegments(e.unknownDocument.path),i=Ms(e.unknownDocument.version);t=Oe.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new Be(i[0],i[1]);return te.fromTimestamp(s)}(e.readTime)),t}function Xw(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Jd(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Eu(s,o.key),fields:o.data.value.mapValue.fields,updateTime:sa(s,o.version.toTimestamp()),createTime:sa(s,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Ls(e.version)};else{if(!e.isUnknownDocument())return Y();r.unknownDocument={path:t.path.toArray(),version:Ls(e.version)}}return r}function Jd(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Ls(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ms(n){const e=new Be(n.seconds,n.nanoseconds);return te.fromTimestamp(e)}function ls(n,e){const t=(e.baseMutations||[]).map(s=>Sm(n.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Sm(n.ct,s)),i=Be.fromMillis(e.localWriteTimeMs);return new gy(e.batchId,i,t,r)}function xl(n){const e=Ms(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Ms(n.lastLimboFreeSnapshotVersion):te.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return X(s.documents.length===1),Gt(Ea(ES(s.documents[0])))}(n.query):function(s){return Gt(RS(s))}(n.query),new Sr(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Je.fromBase64String(n.resumeToken))}function CS(n,e){const t=Ls(e.snapshotVersion),r=Ls(e.lastLimboFreeSnapshotVersion);let i;i=Hd(e.target)?SS(n.ct,e.target):AS(n.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ds(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Iy(n){const e=RS({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Yd(e,e.limit,"L"):e}function Yf(n,e){return new _y(e.largestBatchId,Sm(n.ct,e.overlayMutation))}function Zw(n,e){const t=e.path.lastSegment();return[n,Wt(e.path.popLast()),t]}function e0(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Ls(r.readTime),documentKey:Wt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class _O{getBundleMetadata(e,t){return t0(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Ms(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return t0(e).put(function(i){return{bundleId:i.id,createTime:Ls(st(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return n0(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:Iy(s.bundledQuery),readTime:Ms(s.readTime)}}(r)})}saveNamedQuery(e,t){return n0(e).put(function(i){return{name:i.name,readTime:Ls(st(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function t0(n){return ft(n,"bundles")}function n0(n){return ft(n,"namedQueries")}/**
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
 */class Fh{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new Fh(e,r)}getOverlay(e,t){return ul(e).get(Zw(this.userId,t)).next(r=>r?Yf(this.serializer,r):null)}getOverlays(e,t){const r=ir();return D.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new _y(t,o);i.push(this.ht(e,a))}),D.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Wt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(ul(e).j("collectionPathOverlayIndex",a))}),D.waitFor(s)}getOverlaysForCollection(e,t,r){const i=ir(),s=Wt(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ul(e).U("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const c=Yf(this.serializer,u);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=ir();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ul(e).J({index:"collectionGroupOverlayIndex",range:a},(u,c,f)=>{const m=Yf(this.serializer,c);s.size()<i||m.largestBatchId===o?(s.set(m.getKey(),m),o=m.largestBatchId):f.done()}).next(()=>s)}ht(e,t){return ul(e).put(function(i,s,o){const[a,u,c]=Zw(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Tu(i.ct,o.mutation)}}(this.serializer,this.userId,t))}}function ul(n){return ft(n,"documentOverlays")}/**
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
 */class vO{Pt(e){return ft(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Je.fromUint8Array(r):Je.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class us{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(Me(e.integerValue));else if("doubleValue"in e){const r=Me(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),yu(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=Vr(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Ni(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?$x(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Lh(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):Y()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const r=e.fields||{};this.dt(t,55);for(const i of Object.keys(r))this.Vt(i,t),this.Tt(r[i],t)}wt(e,t){var r,i;const s=e.fields||{};this.dt(t,53);const o="value",a=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(t,15),t.At(Me(a)),this.Vt(o,t),this.Tt(s[o],t)}bt(e,t){const r=e.values||[];this.dt(t,50);for(const i of r)this.Tt(i,t)}yt(e,t){this.dt(t,37),G.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}us.vt=new us;function wO(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function r0(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=wO(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class IO{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=t.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=t.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const t=this.qt(e),r=r0(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Kt(e){const t=this.qt(e),r=r0(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class EO{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class TO{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class cl{constructor(){this.jt=new IO,this.Ht=new EO(this.jt),this.Jt=new TO(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class cs{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new cs(this.indexId,this.documentKey,this.arrayValue,r)}}function ni(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=i0(n.arrayValue,e.arrayValue),t!==0?t:(t=i0(n.directionalValue,e.directionalValue),t!==0?t:G.comparator(n.documentKey,e.documentKey)))}function i0(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class s0{constructor(e){this.Xt=new Ae((t,r)=>Fe.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(X(e.collectionGroup===this.collectionId),this.nn)return!1;const t=pm(e);if(t!==void 0&&!this.sn(t))return!1;const r=os(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const u=r[s];if(!this.on(a,u)||!this._n(this.en[o++],u))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new Ae(Fe.comparator);const t=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new ld(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new ld(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new ld(r.field,r.dir==="asc"?0:1)));return new Kd(Kd.UNKNOWN_ID,this.collectionId,t,gu.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function DS(n){var e,t;if(X(n instanceof fe||n instanceof xe),n instanceof fe){if(n instanceof Xx){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>fe.create(n.field,"==",s)))||[];return xe.create(i,"or")}return n}const r=n.filters.map(i=>DS(i));return xe.create(r,n.op)}function xO(n){if(n.getFilters().length===0)return[];const e=km(DS(n));return X(VS(e)),Am(e)||Rm(e)?[e]:e.getFilters()}function Am(n){return n instanceof fe}function Rm(n){return n instanceof xe&&dy(n)}function VS(n){return Am(n)||Rm(n)||function(t){if(t instanceof xe&&_m(t)){for(const r of t.getFilters())if(!Am(r)&&!Rm(r))return!1;return!0}return!1}(n)}function km(n){if(X(n instanceof fe||n instanceof xe),n instanceof fe)return n;if(n.filters.length===1)return km(n.filters[0]);const e=n.filters.map(r=>km(r));let t=xe.create(e,n.op);return t=Xd(t),VS(t)?t:(X(t instanceof xe),X(na(t)),X(t.filters.length>1),t.filters.reduce((r,i)=>Ey(r,i)))}function Ey(n,e){let t;return X(n instanceof fe||n instanceof xe),X(e instanceof fe||e instanceof xe),t=n instanceof fe?e instanceof fe?function(i,s){return xe.create([i,s],"and")}(n,e):o0(n,e):e instanceof fe?o0(e,n):function(i,s){if(X(i.filters.length>0&&s.filters.length>0),na(i)&&na(s))return Qx(i,s.getFilters());const o=_m(i)?i:s,a=_m(i)?s:i,u=o.filters.map(c=>Ey(c,a));return xe.create(u,"or")}(n,e),Xd(t)}function o0(n,e){if(na(e))return Qx(e,n.getFilters());{const t=e.filters.map(r=>Ey(n,r));return xe.create(t,"or")}}function Xd(n){if(X(n instanceof fe||n instanceof xe),n instanceof fe)return n;const e=n.getFilters();if(e.length===1)return Xd(e[0]);if(Kx(n))return n;const t=e.map(i=>Xd(i)),r=[];return t.forEach(i=>{i instanceof fe?r.push(i):i instanceof xe&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:xe.create(r,n.op)}/**
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
 */class SO{constructor(){this.un=new Ty}addToCollectionParentIndex(e,t){return this.un.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(yn.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(yn.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class Ty{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ae(he.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ae(he.comparator)).toArray()}}/**
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
 */const Uc=new Uint8Array(0);class AO{constructor(e,t){this.databaseId=t,this.cn=new Ty,this.ln=new Wi(r=>Ds(r),(r,i)=>zu(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const s={collectionId:r,parent:Wt(i)};return a0(e).put(s)}return D.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[bx(t),""],!1,!0);return a0(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(rr(o.parent))}return r})}addFieldIndex(e,t){const r=dl(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=co(e);return s.next(a=>{o.put(e0(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=dl(e),i=co(e),s=uo(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=dl(e),r=uo(e),i=co(e);return t.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,t){return D.forEach(this.hn(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new s0(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const r=uo(e);let i=!0;const s=new Map;return D.forEach(this.hn(t),o=>this.Pn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=le();const a=[];return D.forEach(s,(u,c)=>{B("IndexedDbIndexManager",`Using index ${function(A){return`id=${A.indexId}|cg=${A.collectionGroup}|f=${A.fields.map(L=>`${L.fieldPath}:${L.kind}`).join(",")}`}(u)} to execute ${Ds(t)}`);const f=function(A,L){const z=pm(L);if(z===void 0)return null;for(const F of Qd(A,z.fieldPath))switch(F.op){case"array-contains-any":return F.value.arrayValue.values||[];case"array-contains":return[F.value]}return null}(c,u),m=function(A,L){const z=new Map;for(const F of os(L))for(const w of Qd(A,F.fieldPath))switch(w.op){case"==":case"in":z.set(F.fieldPath.canonicalString(),w.value);break;case"not-in":case"!=":return z.set(F.fieldPath.canonicalString(),w.value),Array.from(z.values())}return null}(c,u),g=function(A,L){const z=[];let F=!0;for(const w of os(L)){const _=w.kind===0?Fw(A,w.fieldPath,A.startAt):Uw(A,w.fieldPath,A.startAt);z.push(_.value),F&&(F=_.inclusive)}return new Vi(z,F)}(c,u),E=function(A,L){const z=[];let F=!0;for(const w of os(L)){const _=w.kind===0?Uw(A,w.fieldPath,A.endAt):Fw(A,w.fieldPath,A.endAt);z.push(_.value),F&&(F=_.inclusive)}return new Vi(z,F)}(c,u),b=this.In(u,c,g),N=this.In(u,c,E),O=this.Tn(u,c,m),S=this.En(u.indexId,f,b,g.inclusive,N,E.inclusive,O);return D.forEach(S,v=>r.G(v,t.limit).next(A=>{A.forEach(L=>{const z=G.fromSegments(L.documentKey);o.has(z)||(o=o.add(z),a.push(z))})}))}).next(()=>a)}return D.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=xO(xe.create(e.filters,"and")).map(r=>wm(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,i,s,o,a){const u=(t!=null?t.length:1)*Math.max(r.length,s.length),c=u/(t!=null?t.length:1),f=[];for(let m=0;m<u;++m){const g=t?this.dn(t[m/c]):Uc,E=this.An(e,g,r[m%c],i),b=this.Rn(e,g,s[m%c],o),N=a.map(O=>this.An(e,g,O,!0));f.push(...this.createRange(E,b,N))}return f}An(e,t,r,i){const s=new cs(e,G.empty(),t,r);return i?s:s.Zt()}Rn(e,t,r,i){const s=new cs(e,G.empty(),t,r);return i?s.Zt():s}Pn(e,t){const r=new s0(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.hn(t);return D.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let c=new Ae(Fe.comparator),f=!1;for(const m of u.filters)for(const g of m.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?f=!0:c=c.add(g.field));for(const m of u.orderBy)m.field.isKeyField()||(c=c.add(m.field));return c.size+(f?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}Vn(e,t){const r=new cl;for(const i of os(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);us.vt.It(s,o)}return r.zt()}dn(e){const t=new cl;return us.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const r=new cl;return us.vt.It(Cs(this.databaseId,t),r.Yt(function(s){const o=os(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let i=[];i.push(new cl);let s=0;for(const o of os(e)){const a=r[s++];for(const u of i)if(this.fn(t,o.fieldPath)&&wu(a))i=this.gn(i,o,a);else{const c=u.Yt(o.kind);us.vt.It(a,c)}}return this.pn(i)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new cl;u.seed(a.zt()),us.vt.It(o,u.Yt(t.kind)),s.push(u)}return s}fn(e,t){return!!e.filters.find(r=>r instanceof fe&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=dl(e),i=co(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(s=>{const o=[];return D.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(f,m){const g=m?new gu(m.sequenceNumber,new yn(Ms(m.readTime),new G(rr(m.documentKey)),m.largestBatchId)):gu.empty(),E=f.fields.map(([b,N])=>new ld(Fe.fromServerFormat(b),N));return new Kd(f.indexId,f.collectionGroup,E,g)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ae(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=dl(e),s=co(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>D.forEach(a,u=>s.put(e0(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return D.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?D.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),D.forEach(a,u=>this.wn(e,i,u).next(c=>{const f=this.Sn(s,u);return c.isEqual(f)?D.resolve():this.bn(e,s,u,c,f)}))))})}Dn(e,t,r,i){return uo(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,i){return uo(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){const i=uo(e);let s=new Ae(ni);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(o,a)=>{s=s.add(new cs(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}Sn(e,t){let r=new Ae(ni);const i=this.Vn(t,e);if(i==null)return r;const s=pm(t);if(s!=null){const o=e.data.field(s.fieldPath);if(wu(o))for(const a of o.arrayValue.values||[])r=r.add(new cs(t.indexId,e.key,this.dn(a),i))}else r=r.add(new cs(t.indexId,e.key,Uc,i));return r}bn(e,t,r,i,s){B("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(u,c,f,m,g){const E=u.getIterator(),b=c.getIterator();let N=lo(E),O=lo(b);for(;N||O;){let S=!1,v=!1;if(N&&O){const A=f(N,O);A<0?v=!0:A>0&&(S=!0)}else N!=null?v=!0:S=!0;S?(m(O),O=lo(b)):v?(g(N),N=lo(E)):(N=lo(E),O=lo(b))}}(i,s,ni,a=>{o.push(this.Dn(e,t,r,a))},a=>{o.push(this.vn(e,t,r,a))}),D.waitFor(o)}yn(e){let t=1;return co(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>ni(o,a)).filter((o,a,u)=>!a||ni(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=ni(o,e),u=ni(o,t);if(a===0)i[0]=e.Zt();else if(a>0&&u<0)i.push(o),i.push(o.Zt());else if(u>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Uc,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Uc,[]];s.push(IDBKeyRange.bound(a,u))}return s}Cn(e,t){return ni(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(l0)}getMinOffset(e,t){return D.mapArray(this.hn(t),r=>this.Pn(e,r).next(i=>i||Y())).next(l0)}}function a0(n){return ft(n,"collectionParents")}function uo(n){return ft(n,"indexEntries")}function dl(n){return ft(n,"indexConfiguration")}function co(n){return ft(n,"indexState")}function l0(n){X(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;ay(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new yn(e.readTime,e.documentKey,t)}/**
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
 */const u0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Xt{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function OS(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const u=r.J({range:o},(f,m,g)=>(a++,g.delete()));s.push(u.next(()=>{X(a===1)}));const c=[];for(const f of t.mutations){const m=Mx(e,f.key.path,t.batchId);s.push(i.delete(m)),c.push(f.key)}return D.waitFor(s).next(()=>c)}function Zd(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw Y();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(41943040,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);class Uh{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,t,r,i){X(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Uh(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ri(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=yo(e),o=ri(e);return o.add({}).next(a=>{X(typeof a=="number");const u=new gy(a,t,r,i),c=function(E,b,N){const O=N.baseMutations.map(v=>Tu(E.ct,v)),S=N.mutations.map(v=>Tu(E.ct,v));return{userId:b,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:O,mutations:S}}(this.serializer,this.userId,u),f=[];let m=new Ae((g,E)=>ae(g.canonicalString(),E.canonicalString()));for(const g of i){const E=Mx(this.userId,g.key.path,a);m=m.add(g.key.path.popLast()),f.push(o.put(c)),f.push(s.put(E,hV))}return m.forEach(g=>{f.push(this.indexManager.addToCollectionParentIndex(e,g))}),e.addOnCommittedListener(()=>{this.Fn[a]=u.keys()}),D.waitFor(f).next(()=>u)})}lookupMutationBatch(e,t){return ri(e).get(t).next(r=>r?(X(r.userId===this.userId),ls(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?D.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Fn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return ri(e).J({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(X(a.batchId>=r),s=ls(this.serializer,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return ri(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ri(e).U("userMutationsIndex",t).next(r=>r.map(i=>ls(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=ud(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return yo(e).J({range:i},(o,a,u)=>{const[c,f,m]=o,g=rr(f);if(c===this.userId&&t.path.isEqual(g))return ri(e).get(m).next(E=>{if(!E)throw Y();X(E.userId===this.userId),s.push(ls(this.serializer,E))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ae(ae);const i=[];return t.forEach(s=>{const o=ud(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=yo(e).J({range:a},(c,f,m)=>{const[g,E,b]=c,N=rr(E);g===this.userId&&s.path.isEqual(N)?r=r.add(b):m.done()});i.push(u)}),D.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=ud(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Ae(ae);return yo(e).J({range:o},(u,c,f)=>{const[m,g,E]=u,b=rr(g);m===this.userId&&r.isPrefixOf(b)?b.length===i&&(a=a.add(E)):f.done()}).next(()=>this.xn(e,a))}xn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(ri(e).get(s).next(o=>{if(o===null)throw Y();X(o.userId===this.userId),r.push(ls(this.serializer,o))}))}),D.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return OS(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),D.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return D.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return yo(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=rr(s[1]);i.push(u)}else a.done()}).next(()=>{X(i.length===0)})})}containsKey(e,t){return LS(e,this.userId,t)}Nn(e){return MS(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function LS(n,e,t){const r=ud(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return yo(n).J({range:s,H:!0},(a,u,c)=>{const[f,m,g]=a;f===e&&m===i&&(o=!0),c.done()}).next(()=>o)}function ri(n){return ft(n,"mutations")}function yo(n){return ft(n,"documentMutations")}function MS(n){return ft(n,"mutationQueues")}/**
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
 */class js{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new js(0)}static kn(){return new js(-1)}}/**
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
 */class RO{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const r=new js(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>te.fromTimestamp(new Be(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Qn(e,i)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>ho(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(X(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return ho(e).J((o,a)=>{const u=xl(a);u.sequenceNumber<=t&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>D.waitFor(s)).next(()=>i)}forEachTarget(e,t){return ho(e).J((r,i)=>{const s=xl(i);t(s)})}qn(e){return c0(e).get("targetGlobalKey").next(t=>(X(t!==null),t))}Qn(e,t){return c0(e).put("targetGlobalKey",t)}Kn(e,t){return ho(e).put(CS(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Ds(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ho(e).J({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const c=xl(a);zu(t,c.target)&&(s=c,u.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=ui(e);return t.forEach(o=>{const a=Wt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),D.waitFor(i)}removeMatchingKeys(e,t,r){const i=ui(e);return D.forEach(t,s=>{const o=Wt(s.path);return D.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=ui(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=ui(e);let s=le();return i.J({range:r,H:!0},(o,a,u)=>{const c=rr(o[1]),f=new G(c);s=s.add(f)}).next(()=>s)}containsKey(e,t){const r=Wt(t.path),i=IDBKeyRange.bound([r],[bx(r)],!1,!0);let s=0;return ui(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],u,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,t){return ho(e).get(t).next(r=>r?xl(r):null)}}function ho(n){return ft(n,"targets")}function c0(n){return ft(n,"targetGlobal")}function ui(n){return ft(n,"targetDocuments")}/**
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
 */function d0([n,e],[t,r]){const i=ae(n,t);return i===0?ae(e,r):i}class kO{constructor(e){this.Un=e,this.buffer=new Ae(d0),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();d0(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class PO{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){B("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){qi(t)?B("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await $i(t)}await this.Hn(3e5)})}}class bO{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return D.resolve(tn.oe);const r=new kO(t);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(u0)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),u0):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,i,s,o,a,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,a=Date.now(),this.removeTargets(e,r,t))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),fo()<=ce.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function NO(n,e){return new bO(n,e)}/**
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
 */class CO{constructor(e,t){this.db=e,this.garbageCollector=NO(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,i)=>t(i))}addReference(e,t,r){return Bc(e,r)}removeReference(e,t,r){return Bc(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Bc(e,t)}nr(e,t){return function(i,s){let o=!1;return MS(i).Y(a=>LS(i,a,s).next(u=>(u&&(o=!0),D.resolve(!u)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,a)=>{if(a<=t){const u=this.nr(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,te.min()),ui(e).delete(function(m){return[0,Wt(m.path)]}(o))))});i.push(u)}}).next(()=>D.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Bc(e,t)}tr(e,t){const r=ui(e);let i,s=tn.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:c})=>{o===0?(s!==tn.oe&&t(new G(rr(i)),s),s=c,i=u):s=tn.oe}).next(()=>{s!==tn.oe&&t(new G(rr(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Bc(n,e){return ui(n).put(function(r,i){return{targetId:0,path:Wt(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
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
 */class jS{constructor(){this.changes=new Wi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Oe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class DO{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return ns(e).put(r)}removeEntry(e,t,r){return ns(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Jd(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=Oe.newInvalidDocument(t);return ns(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(hl(t))},(i,s)=>{r=this.ir(t,s)}).next(()=>r)}sr(e,t){let r={size:0,document:Oe.newInvalidDocument(t)};return ns(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(hl(t))},(i,s)=>{r={document:this.ir(t,s),size:Zd(s)}}).next(()=>r)}getEntries(e,t){let r=rn();return this._r(e,t,(i,s)=>{const o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,t){let r=rn(),i=new be(G.comparator);return this._r(e,t,(s,o)=>{const a=this.ir(s,o);r=r.insert(s,a),i=i.insert(s,Zd(o))}).next(()=>({documents:r,ur:i}))}_r(e,t,r){if(t.isEmpty())return D.resolve();let i=new Ae(p0);t.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(hl(i.first()),hl(i.last())),o=i.getIterator();let a=o.getNext();return ns(e).J({index:"documentKeyIndex",range:s},(u,c,f)=>{const m=G.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&p0(a,m)<0;)r(a,null),a=o.getNext();a&&a.isEqual(m)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?f.$(hl(a)):f.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),Jd(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ns(e).U(IDBKeyRange.bound(a,u,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let f=rn();for(const m of c){const g=this.ir(G.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);g.isFoundDocument()&&(qu(t,g)||i.has(g.key))&&(f=f.insert(g.key,g))}return f})}getAllFromCollectionGroup(e,t,r,i){let s=rn();const o=f0(t,r),a=f0(t,yn.max());return ns(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,c,f)=>{const m=this.ir(G.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(m.key,m),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new VO(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return h0(e).get("remoteDocumentGlobalKey").next(t=>(X(!!t),t))}rr(e,t){return h0(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const r=yO(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(te.min())))return r}return Oe.newInvalidDocument(e)}}function FS(n){return new DO(n)}class VO extends jS{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new Wi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new Ae((s,o)=>ae(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.lr.get(s);if(t.push(this.cr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=Xw(this.cr.serializer,o);i=i.add(s.path.popLast());const c=Zd(u);r+=c-a.size,t.push(this.cr.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=Xw(this.cr.serializer,o.convertToNoDocument(te.min()));t.push(this.cr.addEntry(e,s,u))}}),i.forEach(s=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.cr.updateMetadata(e,r)),D.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function h0(n){return ft(n,"remoteDocumentGlobal")}function ns(n){return ft(n,"remoteDocumentsV14")}function hl(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function f0(n,e){const t=e.documentKey.path.toArray();return[n,Jd(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function p0(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=ae(t[s],r[s]),i)return i;return i=ae(t.length,r.length),i||(i=ae(t[t.length-2],r[r.length-2]),i||ae(t[t.length-1],r[r.length-1]))}/**
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
 */class OO{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class US{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Ul(r.mutation,i,nn.empty(),Be.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,t,r=le()){const i=ir();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=El();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=ir();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,le()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=rn();const o=Fl(),a=function(){return Fl()}();return t.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof Ur)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),Ul(f.mutation,c,f.mutation.getFieldMask(),Be.now())):o.set(c.key,nn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),t.forEach((c,f)=>{var m;return a.set(c,new OO(f,(m=o.get(c))!==null&&m!==void 0?m:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Fl();let i=new be((o,a)=>o-a),s=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let f=r.get(u)||nn.empty();f=a.applyToLocalView(c,f),r.set(u,f);const m=(i.get(a.batchId)||le()).add(u);i=i.insert(a.batchId,m)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,f=u.value,m=sS();f.forEach(g=>{if(!s.has(g)){const E=hS(t.get(g),r.get(g));E!==null&&m.set(g,E),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):hy(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):D.resolve(ir());let a=-1,u=s;return o.next(c=>D.forEach(c,(f,m)=>(a<m.largestBatchId&&(a=m.largestBatchId),s.get(f)?D.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,le())).next(f=>({batchId:a,changes:iS(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new G(t)).next(r=>{let i=El();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=El();return this.indexManager.getCollectionParents(e,s).next(a=>D.forEach(a,u=>{const c=function(m,g){return new Fr(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,Oe.newInvalidDocument(f)))});let a=El();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&Ul(f.mutation,c,nn.empty(),Be.now()),qu(t,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class LO{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return D.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:st(i.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:Iy(i.bundledQuery),readTime:st(i.readTime)}}(t)),D.resolve()}}/**
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
 */class MO{constructor(){this.overlays=new be(G.comparator),this.Ir=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ir();return D.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),D.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const i=ir(),s=t.length+1,o=new G(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return D.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new be((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=ir(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const a=ir(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>a.set(c,f)),!(a.size()>=i)););return D.resolve(a)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new _y(t,r));let s=this.Ir.get(t);s===void 0&&(s=le(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}}/**
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
 */class jO{constructor(){this.sessionToken=Je.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
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
 */class xy{constructor(){this.Tr=new Ae(yt.Er),this.dr=new Ae(yt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new yt(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new yt(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new G(new he([])),r=new yt(t,e),i=new yt(t,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new G(new he([])),r=new yt(t,e),i=new yt(t,e+1);let s=le();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new yt(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class yt{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return G.comparator(e.key,t.key)||ae(e.wr,t.wr)}static Ar(e,t){return ae(e.wr,t.wr)||G.comparator(e.key,t.key)}}/**
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
 */class FO{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ae(yt.Er)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gy(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new yt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,t){return D.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new yt(t,0),i=new yt(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ae(ae);return t.forEach(i=>{const s=new yt(i,0),o=new yt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),D.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new yt(new G(s),0);let a=new Ae(ae);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),D.resolve(this.Cr(a))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){X(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return D.forEach(t.mutations,i=>{const s=new yt(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new yt(t,0),i=this.br.firstAfterOrEqual(r);return D.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class UO{constructor(e){this.Mr=e,this.docs=function(){return new be(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():Oe.newInvalidDocument(t))}getEntries(e,t){let r=rn();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Oe.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=rn();const o=t.path,a=new G(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||ay(Cx(f),r)<=0||(i.has(f.key)||qu(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,t,r,i){Y()}Or(e,t){return D.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new BO(this)}getSize(e){return D.resolve(this.size)}}class BO extends jS{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),D.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class zO{constructor(e){this.persistence=e,this.Nr=new Wi(t=>Ds(t),zu),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Lr=0,this.Br=new xy,this.targetCount=0,this.kr=js.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),D.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new js(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.Kn(t),D.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),D.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.Br.containsKey(t))}}/**
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
 */class BS{constructor(e,t){this.qr={},this.overlays={},this.Qr=new tn(0),this.Kr=!1,this.Kr=!0,this.$r=new jO,this.referenceDelegate=e(this),this.Ur=new zO(this),this.indexManager=new SO,this.remoteDocumentCache=function(i){return new UO(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new NS(t),this.Gr=new LO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new MO,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new FO(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){B("MemoryPersistence","Starting transaction:",e);const i=new $O(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return D.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class $O extends Vx{constructor(e){super(),this.currentSequenceNumber=e}}class Bh{constructor(e){this.persistence=e,this.Jr=new xy,this.Yr=null}static Zr(e){return new Bh(e)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),D.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Xr,r=>{const i=G.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,te.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return D.or([()=>D.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class qO{constructor(e){this.serializer=e}O(e,t,r,i){const s=new Vh("createOrUpgrade",t);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",kw,{unique:!0}),u.createObjectStore("documentMutations")}(e),m0(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=D.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),m0(e)),o=o.next(()=>function(u){const c=u.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:te.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",f)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,c){return c.store("mutations").U().next(f=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",kw,{unique:!0});const m=c.store("mutations"),g=f.map(E=>m.put(E));return D.waitFor(g)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore("documentOverlays",{keyPath:xV});c.createIndex("collectionPathOverlayIndex",SV,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",AV,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore("remoteDocumentsV14",{keyPath:fV});c.createIndex("documentKeyIndex",pV),c.createIndex("collectionGroupIndex",mV)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:wV}).createIndex("sequenceNumberIndex",IV,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:EV}).createIndex("documentKeyIndex",TV,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((r,i)=>{t+=Zd(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(i=>D.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>D.forEach(a,u=>{X(u.userId===s.userId);const c=ls(this.serializer,u);return OS(e,s.userId,c).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const u=new he(o),c=function(m){return[0,Wt(m)]}(u);s.push(t.get(c).next(f=>f?D.resolve():(m=>t.put({targetId:0,path:Wt(m),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>D.waitFor(s))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:vV});const r=t.store("collectionParents"),i=new Ty,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:Wt(u)})}};return t.store("remoteDocuments").J({H:!0},(o,a)=>{const u=new he(o);return s(u.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,a,u],c)=>{const f=rr(a);return s(f.popLast())}))}oi(e){const t=e.store("targets");return t.J((r,i)=>{const s=xl(i),o=CS(this.serializer,s);return t.put(o)})}_i(e,t){const r=t.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=t.store("remoteDocumentsV14"),u=function(m){return m.document?new G(he.fromString(m.document.name).popFirst(5)):m.noDocument?G.fromSegments(m.noDocument.path):m.unknownDocument?G.fromSegments(m.unknownDocument.path):Y()}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>D.waitFor(i))}ai(e,t){const r=t.store("mutations"),i=FS(this.serializer),s=new BS(Bh.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(u=>{var c;let f=(c=a.get(u.userId))!==null&&c!==void 0?c:le();ls(this.serializer,u).keys().forEach(m=>f=f.add(m)),a.set(u.userId,f)}),D.forEach(a,(u,c)=>{const f=new vt(c),m=Fh.lt(this.serializer,f),g=s.getIndexManager(f),E=Uh.lt(f,this.serializer,g,s.referenceDelegate);return new US(i,E,m,g).recalculateAndSaveOverlaysForDocumentKeys(new mm(t,tn.oe),u).next()})})}}function m0(n){n.createObjectStore("targetDocuments",{keyPath:yV}).createIndex("documentTargetsIndex",_V,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",gV,{unique:!0}),n.createObjectStore("targetGlobal")}const Jf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Sy{constructor(e,t,r,i,s,o,a,u,c,f,m=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=s,this.window=o,this.document=a,this.ci=c,this.li=f,this.hi=m,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=g=>Promise.resolve(),!Sy.D())throw new U(V.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new CO(this,i),this.Ai=t+"main",this.serializer=new NS(u),this.Ri=new ar(this.Ai,this.hi,new qO(this.serializer)),this.$r=new vO,this.Ur=new RO(this.referenceDelegate,this.serializer),this.remoteDocumentCache=FS(this.serializer),this.Gr=new _O,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&it("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new U(V.FAILED_PRECONDITION,Jf);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new tn(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>zc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(qi(e))return B("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return B("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return fl(e).get("owner").next(t=>D.resolve(this.vi(t)))}Ci(e){return zc(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=ft(t,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return D.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?D.resolve(!0):fl(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new U(V.FAILED_PRECONDITION,Jf);return!1}}return!(!this.networkEnabled||!this.inForeground)||zc(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&B("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new mm(e,tn.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>zc(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return Uh.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new AO(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Fh.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){B("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(u){return u===17?PV:u===16?kV:u===15?uy:u===14?Ux:u===13?Fx:u===12?RV:u===11?jx:void Y()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,a=>(o=new mm(a,this.Qr?this.Qr.next():tn.oe),t==="readwrite-primary"?this.wi(o).next(u=>!!u||this.Si(o)).next(u=>{if(!u)throw it(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new U(V.FAILED_PRECONDITION,Dx);return r(o)}).next(u=>this.Di(o).next(()=>u)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return fl(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new U(V.FAILED_PRECONDITION,Jf)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return fl(e).put("owner",t)}static D(){return ar.D()}bi(e){const t=fl(e);return t.get("owner").next(r=>this.vi(r)?(B("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):D.resolve())}Mi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(it(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;cT()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return B("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return it("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){it("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function fl(n){return ft(n,"owner")}function zc(n){return ft(n,"clientMetadata")}function Ay(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Ry{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=le(),i=le();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ry(e,t.fromCache,r,i)}}/**
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
 */class WO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class zS{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return cT()?8:Ox(Ge())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Yi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new WO;return this.Xi(e,t,o).next(a=>{if(s.result=a,this.zi)return this.es(e,t,o,a.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(fo()<=ce.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",po(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),D.resolve()):(fo()<=ce.DEBUG&&B("QueryEngine","Query:",po(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(fo()<=ce.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",po(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Gt(t))):D.resolve())}Yi(e,t){if(Bw(t))return D.resolve(null);let r=Gt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Yd(t,null,"F"),r=Gt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=le(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(t,a);return this.ns(t,c,o,u.readTime)?this.Yi(e,Yd(t,null,"F")):this.rs(e,c,t,u)}))})))}Zi(e,t,r,i){return Bw(t)||i.isEqual(te.min())?D.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(t,s);return this.ns(t,o,r,i)?D.resolve(null):(fo()<=ce.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),po(t)),this.rs(e,o,t,Nx(i,-1)).next(a=>a))})}ts(e,t){let r=new Ae(nS(e));return t.forEach((i,s)=>{qu(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return fo()<=ce.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",po(t)),this.Ji.getDocumentsMatchingQuery(e,t,yn.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class GO{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new be(ae),this._s=new Wi(s=>Ds(s),zu),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new US(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function $S(n,e,t,r){return new GO(n,e,t,r)}async function qS(n,e){const t=K(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=le();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){a.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function KO(n,e){const t=K(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,f){const m=c.batch,g=m.keys();let E=D.resolve();return g.forEach(b=>{E=E.next(()=>f.getEntry(u,b)).next(N=>{const O=c.docVersions.get(b);X(O!==null),N.version.compareTo(O)<0&&(m.applyToRemoteDocument(N,c),N.isValidDocument()&&(N.setReadTime(c.commitVersion),f.addEntry(N)))})}),E.next(()=>a.mutationQueue.removeMutationBatch(u,m))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=le();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function WS(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function HO(n,e){const t=K(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const a=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;a.push(t.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>t.Ur.addMatchingKeys(s,f.addedDocuments,m)));let E=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?E=E.withResumeToken(Je.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),i=i.insert(m,E),function(N,O,S){return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(g,E,f)&&a.push(t.Ur.updateTargetData(s,E))});let u=rn(),c=le();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),a.push(GS(s,o,e.documentUpdates).next(f=>{u=f.Ps,c=f.Is})),!r.isEqual(te.min())){const f=t.Ur.getLastRemoteSnapshotVersion(s).next(m=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(f)}return D.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(t.os=i,s))}function GS(n,e,t){let r=le(),i=le();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=rn();return t.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function QO(n,e){const t=K(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function oa(n,e){const t=K(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,D.resolve(i)):t.Ur.allocateTargetId(r).next(o=>(i=new Sr(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function aa(n,e,t){const r=K(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!qi(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function eh(n,e,t){const r=K(n);let i=te.min(),s=le();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const m=K(u),g=m._s.get(f);return g!==void 0?D.resolve(m.os.get(g)):m.Ur.getTargetData(c,f)}(r,o,Gt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?i:te.min(),t?s:le())).next(a=>(QS(r,tS(e),a),{documents:a,Ts:s})))}function KS(n,e){const t=K(n),r=K(t.Ur),i=t.os.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function HS(n,e){const t=K(n),r=t.us.get(e)||te.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.cs.getAllFromCollectionGroup(i,e,Nx(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(QS(t,e,i),i))}function QS(n,e,t){let r=n.us.get(e)||te.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}async function YO(n,e,t,r){const i=K(n);let s=le(),o=rn();for(const c of t){const f=e.Es(c.metadata.name);c.document&&(s=s.add(f));const m=e.ds(c);m.setReadTime(e.As(c.metadata.readTime)),o=o.insert(f,m)}const a=i.cs.newChangeBuffer({trackRemovals:!0}),u=await oa(i,function(f){return Gt(Ea(he.fromString(`__bundle__/docs/${f}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>GS(c,a,o).next(f=>(a.apply(c),f)).next(f=>i.Ur.removeMatchingKeysForTargetId(c,u.targetId).next(()=>i.Ur.addMatchingKeys(c,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,f.Ps,f.Is)).next(()=>f.Ps)))}async function JO(n,e,t=le()){const r=await oa(n,Gt(Iy(e.bundledQuery))),i=K(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=st(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Gr.saveNamedQuery(s,e);const a=r.withResumeToken(Je.EMPTY_BYTE_STRING,o);return i.os=i.os.insert(a.targetId,a),i.Ur.updateTargetData(s,a).next(()=>i.Ur.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Ur.addMatchingKeys(s,t,r.targetId)).next(()=>i.Gr.saveNamedQuery(s,e))})}function g0(n,e){return`firestore_clients_${n}_${e}`}function y0(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Xf(n,e){return`firestore_targets_${n}_${e}`}class th{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Rs(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new U(i.error.code,i.error.message))),o?new th(e,t,i.state,s):(it("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Bl{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Rs(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new U(r.error.code,r.error.message))),s?new Bl(e,r.state,i):(it("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class nh{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=fy();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=Lx(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new nh(e,s):(it("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class ky{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new ky(t.clientId,t.onlineState):(it("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Pm{constructor(){this.activeTargetIds=fy()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Zf{constructor(e,t,r,i,s){this.window=e,this.ui=t,this.persistenceKey=r,this.ps=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new be(ae),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ds=g0(this.persistenceKey,this.ps),this.vs=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new Pm),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.Os=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const i=this.getItem(g0(this.persistenceKey,r));if(i){const s=nh.Rs(r,i);s&&(this.Ss=this.Ss.insert(s.clientId,s))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const r=this.Ls(t);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,r){this.qs(e,t,r),this.Qs(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(Xf(this.persistenceKey,e));if(i){const s=Bl.Rs(e,i);s&&(r=s.state)}}return t&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Xf(this.persistenceKey,e))}updateQueryState(e,t,r){this.$s(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Qs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return B("SharedClientState","READ",e,t),t}setItem(e,t){B("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){B("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(B("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void it("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const r=this.Gs(t.key);return this.zs(r,null)}{const r=this.js(t.key,t.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const r=this.Hs(t.key,t.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const r=this.Ys(t.key,t.newValue);if(r)return this.Zs(r)}}else if(t.key===this.xs){if(t.newValue!==null){const r=this.Ls(t.newValue);if(r)return this.Bs(r)}}else if(t.key===this.vs){const r=function(s){let o=tn.oe;if(s!=null)try{const a=JSON.parse(s);X(typeof a=="number"),o=a}catch(a){it("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==tn.oe&&this.sequenceNumberHandler(r)}else if(t.key===this.Os){const r=this.Xs(t.newValue);await Promise.all(r.map(i=>this.syncEngine.eo(i)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,r){const i=new th(this.currentUser,e,t,r),s=y0(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Vs())}Qs(e){const t=y0(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,r){const i=Xf(this.persistenceKey,e),s=new Bl(e,t,r);this.setItem(i,s.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const r=this.Gs(e);return nh.Rs(r,t)}Hs(e,t){const r=this.Fs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return th.Rs(new vt(s),i,t)}Ys(e,t){const r=this.Ms.exec(e),i=Number(r[1]);return Bl.Rs(i,t)}Ls(e){return ky.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);B("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const r=t?this.Ss.insert(e,t):this.Ss.remove(e),i=this.ks(this.Ss),s=this.ks(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.io(o,a).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=fy();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class YS{constructor(){this.so=new Pm,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Pm,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class XO{_o(e){}shutdown(){}}/**
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
 */class _0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let $c=null;function ep(){return $c===null?$c=function(){return 268435456+Math.round(2147483648*Math.random())}():$c++,"0x"+$c.toString(16)}/**
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
 */const ZO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class eL{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Lt="WebChannelConnection";class tL extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,o){const a=ep(),u=this.xo(t,r.toUriEncodedString());B("RestConnection",`Sending RPC '${t}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(t,u,c,i).then(f=>(B("RestConnection",`Received RPC '${t}' ${a}: `,f),f),f=>{throw dr("RestConnection",`RPC '${t}' ${a} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(t,r,i,s,o,a){return this.Mo(t,r,i,s,o)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ia}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}xo(t,r){const i=ZO[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const s=ep();return new Promise((o,a)=>{const u=new Tx;u.setWithCredentials(!0),u.listenOnce(xx.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ad.NO_ERROR:const f=u.getResponseJson();B(Lt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case ad.TIMEOUT:B(Lt,`RPC '${e}' ${s} timed out`),a(new U(V.DEADLINE_EXCEEDED,"Request time out"));break;case ad.HTTP_ERROR:const m=u.getStatus();if(B(Lt,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const E=g==null?void 0:g.error;if(E&&E.status&&E.message){const b=function(O){const S=O.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(S)>=0?S:V.UNKNOWN}(E.status);a(new U(b,E.message))}else a(new U(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new U(V.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{B(Lt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);B(Lt,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",c,r,15)})}Bo(e,t,r){const i=ep(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Rx(),a=Ax(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=s.join("");B(Lt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);let g=!1,E=!1;const b=new eL({Io:O=>{E?B(Lt,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(g||(B(Lt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),B(Lt,`RPC '${e}' stream ${i} sending:`,O),m.send(O))},To:()=>m.close()}),N=(O,S,v)=>{O.listen(S,A=>{try{v(A)}catch(L){setTimeout(()=>{throw L},0)}})};return N(m,Il.EventType.OPEN,()=>{E||(B(Lt,`RPC '${e}' stream ${i} transport opened.`),b.yo())}),N(m,Il.EventType.CLOSE,()=>{E||(E=!0,B(Lt,`RPC '${e}' stream ${i} transport closed`),b.So())}),N(m,Il.EventType.ERROR,O=>{E||(E=!0,dr(Lt,`RPC '${e}' stream ${i} transport errored:`,O),b.So(new U(V.UNAVAILABLE,"The operation could not be completed")))}),N(m,Il.EventType.MESSAGE,O=>{var S;if(!E){const v=O.data[0];X(!!v);const A=v,L=A.error||((S=A[0])===null||S===void 0?void 0:S.error);if(L){B(Lt,`RPC '${e}' stream ${i} received error:`,L);const z=L.status;let F=function(I){const x=at[I];if(x!==void 0)return mS(x)}(z),w=L.message;F===void 0&&(F=V.INTERNAL,w="Unknown error status: "+z+" with message "+L.message),E=!0,b.So(new U(F,w)),m.close()}else B(Lt,`RPC '${e}' stream ${i} received:`,v),b.bo(v)}}),N(a,Sx.STAT_EVENT,O=>{O.stat===fm.PROXY?B(Lt,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===fm.NOPROXY&&B(Lt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{b.wo()},0),b}}/**
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
 */function JS(){return typeof window<"u"?window:null}function pd(){return typeof document<"u"?document:null}/**
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
 */function Hu(n){return new aO(n,!0)}/**
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
 */class Py{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class XS{constructor(e,t,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Py(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(it(t.toString()),it("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new U(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nL extends XS{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=cO(this.serializer,e),r=function(s){if(!("targetChange"in s))return te.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?st(o.readTime):te.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=xm(this.serializer),t.addTarget=function(s,o){let a;const u=o.target;if(a=Hd(u)?{documents:SS(s,u)}:{query:AS(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=vS(s,o.resumeToken);const c=Em(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(te.min())>0){a.readTime=sa(s,o.snapshotVersion.toTimestamp());const c=Em(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=hO(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=xm(this.serializer),t.removeTarget=e,this.a_(t)}}class rL extends XS{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return X(!!e.streamToken),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){X(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=dO(e.writeResults,e.commitTime),r=st(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=xm(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Tu(this.serializer,r))};this.a_(t)}}/**
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
 */class iL extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new U(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Tm(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(V.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Tm(t,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new U(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class sL{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(it(t),this.D_=!1):B("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class oL{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Gi(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=K(u);c.L_.add(4),await Sa(c),c.q_.set("Unknown"),c.L_.delete(4),await Qu(c)}(this))})}),this.q_=new sL(r,i)}}async function Qu(n){if(Gi(n))for(const e of n.B_)await e(!0)}async function Sa(n){for(const e of n.B_)await e(!1)}function zh(n,e){const t=K(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Cy(t)?Ny(t):Ra(t).r_()&&by(t,e))}function la(n,e){const t=K(n),r=Ra(t);t.N_.delete(e),r.r_()&&ZS(t,e),t.N_.size===0&&(r.r_()?r.o_():Gi(t)&&t.q_.set("Unknown"))}function by(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ra(n).A_(e)}function ZS(n,e){n.Q_.xe(e),Ra(n).R_(e)}function Ny(n){n.Q_=new rO({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Ra(n).start(),n.q_.v_()}function Cy(n){return Gi(n)&&!Ra(n).n_()&&n.N_.size>0}function Gi(n){return K(n).L_.size===0}function eA(n){n.Q_=void 0}async function aL(n){n.q_.set("Online")}async function lL(n){n.N_.forEach((e,t)=>{by(n,e)})}async function uL(n,e){eA(n),Cy(n)?(n.q_.M_(e),Ny(n)):n.q_.set("Unknown")}async function cL(n,e,t){if(n.q_.set("Online"),e instanceof _S&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(n,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await rh(n,r)}else if(e instanceof fd?n.Q_.Ke(e):e instanceof yS?n.Q_.He(e):n.Q_.We(e),!t.isEqual(te.min()))try{const r=await WS(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(c);f&&s.N_.set(c,f.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(Je.EMPTY_BYTE_STRING,f.snapshotVersion)),ZS(s,u);const m=new Sr(f.target,u,c,f.sequenceNumber);by(s,m)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await rh(n,r)}}async function rh(n,e,t){if(!qi(e))throw e;n.L_.add(1),await Sa(n),n.q_.set("Offline"),t||(t=()=>WS(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Qu(n)})}function tA(n,e){return e().catch(t=>rh(n,t,e))}async function Aa(n){const e=K(n),t=Oi(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;dL(e);)try{const i=await QO(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,hL(e,i)}catch(i){await rh(e,i)}nA(e)&&rA(e)}function dL(n){return Gi(n)&&n.O_.length<10}function hL(n,e){n.O_.push(e);const t=Oi(n);t.r_()&&t.V_&&t.m_(e.mutations)}function nA(n){return Gi(n)&&!Oi(n).n_()&&n.O_.length>0}function rA(n){Oi(n).start()}async function fL(n){Oi(n).p_()}async function pL(n){const e=Oi(n);for(const t of n.O_)e.m_(t.mutations)}async function mL(n,e,t){const r=n.O_.shift(),i=yy.from(r,e,t);await tA(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Aa(n)}async function gL(n,e){e&&Oi(n).V_&&await async function(r,i){if(function(o){return pS(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();Oi(r).s_(),await tA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Aa(r)}}(n,e),nA(n)&&rA(n)}async function v0(n,e){const t=K(n);t.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=Gi(t);t.L_.add(3),await Sa(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Qu(t)}async function bm(n,e){const t=K(n);e?(t.L_.delete(2),await Qu(t)):e||(t.L_.add(2),await Sa(t),t.q_.set("Unknown"))}function Ra(n){return n.K_||(n.K_=function(t,r,i){const s=K(t);return s.w_(),new nL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:aL.bind(null,n),Ro:lL.bind(null,n),mo:uL.bind(null,n),d_:cL.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Cy(n)?Ny(n):n.q_.set("Unknown")):(await n.K_.stop(),eA(n))})),n.K_}function Oi(n){return n.U_||(n.U_=function(t,r,i){const s=K(t);return s.w_(),new rL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:fL.bind(null,n),mo:gL.bind(null,n),f_:pL.bind(null,n),g_:mL.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Aa(n)):(await n.U_.stop(),n.O_.length>0&&(B("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Dy{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new Dy(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ka(n,e){if(it("AsyncQueue",`${e}: ${n}`),qi(n))return new U(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class zo{constructor(e){this.comparator=e?(t,r)=>e(t,r)||G.comparator(t.key,r.key):(t,r)=>G.comparator(t.key,r.key),this.keyedMap=El(),this.sortedSet=new be(this.comparator)}static emptySet(e){return new zo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof zo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new zo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class w0{constructor(){this.W_=new be(G.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Y():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class ua{constructor(e,t,r,i,s,o,a,u,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new ua(e,t,zo.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$u(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class yL{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class _L{constructor(){this.queries=I0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=K(t),s=i.queries;i.queries=I0(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new U(V.ABORTED,"Firestore shutting down"))}}function I0(){return new Wi(n=>eS(n),$u)}async function Vy(n,e){const t=K(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new yL,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const a=ka(o,`Initialization of query '${po(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&Ly(t)}async function Oy(n,e){const t=K(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function vL(n,e){const t=K(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&Ly(t)}function wL(n,e,t){const r=K(n),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(t);r.queries.delete(e)}function Ly(n){n.Y_.forEach(e=>{e.next()})}var Nm,E0;(E0=Nm||(Nm={})).ea="default",E0.Cache="cache";class My{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ua(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=ua.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Nm.Cache}}/**
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
 */class IL{constructor(e,t){this.aa=e,this.byteLength=t}ua(){return"metadata"in this.aa}}/**
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
 */class T0{constructor(e){this.serializer=e}Es(e){return lr(this.serializer,e)}ds(e){return e.metadata.exists?xS(this.serializer,e.document,!1):Oe.newNoDocument(this.Es(e.metadata.name),this.As(e.metadata.readTime))}As(e){return st(e)}}class EL{constructor(e,t,r){this.ca=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=iA(e)}la(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.aa.namedQuery)this.queries.push(e.aa.namedQuery);else if(e.aa.documentMetadata){this.documents.push({metadata:e.aa.documentMetadata}),e.aa.documentMetadata.exists||++t;const r=he.fromString(e.aa.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.aa.document&&(this.documents[this.documents.length-1].document=e.aa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ha(e){const t=new Map,r=new T0(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Es(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||le()).add(s);t.set(o,a)}}return t}async complete(){const e=await YO(this.localStore,new T0(this.serializer),this.documents,this.ca.id),t=this.ha(this.documents);for(const r of this.queries)await JO(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:e}}}function iA(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class sA{constructor(e){this.key=e}}class oA{constructor(e){this.key=e}}class aA{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=le(),this.mutatedKeys=le(),this.Aa=nS(e),this.Ra=new zo(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new w0,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),E=qu(this.query,m)?m:null,b=!!g&&this.mutatedKeys.has(g.key),N=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let O=!1;g&&E?g.data.isEqual(E.data)?b!==N&&(r.track({type:3,doc:E}),O=!0):this.ga(g,E)||(r.track({type:2,doc:E}),O=!0,(u&&this.Aa(E,u)>0||c&&this.Aa(E,c)<0)&&(a=!0)):!g&&E?(r.track({type:0,doc:E}),O=!0):g&&!E&&(r.track({type:1,doc:g}),O=!0,(u||c)&&(a=!0)),O&&(E?(o=o.add(E),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(E,b){const N=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return N(E)-N(b)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const a=t&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new ua(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new w0,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=le(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new oA(r))}),this.da.forEach(r=>{e.has(r)||t.push(new sA(r))}),t}ba(e){this.Ta=e.Ts,this.da=le();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return ua.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class TL{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class xL{constructor(e){this.key=e,this.va=!1}}class SL{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Wi(a=>eS(a),$u),this.Ma=new Map,this.xa=new Set,this.Oa=new be(G.comparator),this.Na=new Map,this.La=new xy,this.Ba={},this.ka=new Map,this.qa=js.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function AL(n,e,t=!0){const r=$h(n);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await lA(r,e,t,!0),i}async function RL(n,e){const t=$h(n);await lA(t,e,!0,!1)}async function lA(n,e,t,r){const i=await oa(n.localStore,Gt(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let a;return r&&(a=await jy(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&zh(n.remoteStore,i),a}async function jy(n,e,t,r,i){n.Ka=(m,g,E)=>async function(N,O,S,v){let A=O.view.ma(S);A.ns&&(A=await eh(N.localStore,O.query,!1).then(({documents:w})=>O.view.ma(w,A)));const L=v&&v.targetChanges.get(O.targetId),z=v&&v.targetMismatches.get(O.targetId)!=null,F=O.view.applyChanges(A,N.isPrimaryClient,L,z);return Cm(N,O.targetId,F.wa),F.snapshot}(n,m,g,E);const s=await eh(n.localStore,e,!0),o=new aA(e,s.Ts),a=o.ma(s.documents),u=Ku.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),c=o.applyChanges(a,n.isPrimaryClient,u);Cm(n,t,c.wa);const f=new TL(e,t,o);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),c.snapshot}async function kL(n,e,t){const r=K(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!$u(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await aa(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&la(r.remoteStore,i.targetId),ca(r,i.targetId)}).catch($i)):(ca(r,i.targetId),await aa(r.localStore,i.targetId,!0))}async function PL(n,e){const t=K(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),la(t.remoteStore,r.targetId))}async function bL(n,e,t){const r=zy(n);try{const i=await function(o,a){const u=K(o),c=Be.now(),f=a.reduce((E,b)=>E.add(b.key),le());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let b=rn(),N=le();return u.cs.getEntries(E,f).next(O=>{b=O,b.forEach((S,v)=>{v.isValidDocument()||(N=N.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,b)).next(O=>{m=O;const S=[];for(const v of a){const A=eO(v,m.get(v.key).overlayedDocument);A!=null&&S.push(new Ur(v.key,A,Wx(A.value.mapValue),Ue.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,S,a)}).next(O=>{g=O;const S=O.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(E,O.batchId,S)})}).then(()=>({batchId:g.batchId,changes:iS(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new be(ae)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,t),await Br(r,i.changes),await Aa(r.remoteStore)}catch(i){const s=ka(i,"Failed to persist write");t.reject(s)}}async function uA(n,e){const t=K(n);try{const r=await HO(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Na.get(s);o&&(X(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?X(o.va):i.removedDocuments.size>0&&(X(o.va),o.va=!1))}),await Br(t,r,e)}catch(r){await $i(r)}}function x0(n,e,t){const r=K(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=K(o);u.onlineState=a;let c=!1;u.queries.forEach((f,m)=>{for(const g of m.j_)g.Z_(a)&&(c=!0)}),c&&Ly(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function NL(n,e,t){const r=K(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new be(G.comparator);o=o.insert(s,Oe.newNoDocument(s,te.min()));const a=le().add(s),u=new Gu(te.min(),new Map,new be(ae),o,a);await uA(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),By(r)}else await aa(r.localStore,e,!1).then(()=>ca(r,e,t)).catch($i)}async function CL(n,e){const t=K(n),r=e.batch.batchId;try{const i=await KO(t.localStore,e);Uy(t,r,null),Fy(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Br(t,i)}catch(i){await $i(i)}}async function DL(n,e,t){const r=K(n);try{const i=await function(o,a){const u=K(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,a).next(m=>(X(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);Uy(r,e,t),Fy(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Br(r,i)}catch(i){await $i(i)}}async function VL(n,e){const t=K(n);Gi(t.remoteStore)||B("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=K(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",u=>a.mutationQueue.getHighestUnacknowledgedBatchId(u))}(t.localStore);if(r===-1)return void e.resolve();const i=t.ka.get(r)||[];i.push(e),t.ka.set(r,i)}catch(r){const i=ka(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Fy(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Uy(n,e,t){const r=K(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function ca(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||cA(n,r)})}function cA(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(la(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),By(n))}function Cm(n,e,t){for(const r of t)r instanceof sA?(n.La.addReference(r.key,e),OL(n,r)):r instanceof oA?(B("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||cA(n,r.key)):Y()}function OL(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(B("SyncEngine","New document in limbo: "+t),n.xa.add(r),By(n))}function By(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new G(he.fromString(e)),r=n.qa.next();n.Na.set(r,new xL(t)),n.Oa=n.Oa.insert(t,r),zh(n.remoteStore,new Sr(Gt(Ea(t.path)),r,"TargetPurposeLimboResolution",tn.oe))}}async function Br(n,e,t){const r=K(n),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,t).then(c=>{var f;if((c||t)&&r.isPrimaryClient){const m=c?!c.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){i.push(c);const m=Ry.Wi(u.targetId,c);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const f=K(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>D.forEach(c,g=>D.forEach(g.$i,E=>f.persistence.referenceDelegate.addReference(m,g.targetId,E)).next(()=>D.forEach(g.Ui,E=>f.persistence.referenceDelegate.removeReference(m,g.targetId,E)))))}catch(m){if(!qi(m))throw m;B("LocalStore","Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const E=f.os.get(g),b=E.snapshotVersion,N=E.withLastLimboFreeSnapshotVersion(b);f.os=f.os.insert(g,N)}}}(r.localStore,s))}async function LL(n,e){const t=K(n);if(!t.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await qS(t.localStore,e);t.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new U(V.CANCELLED,o))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Br(t,r.hs)}}function ML(n,e){const t=K(n),r=t.Na.get(e);if(r&&r.va)return le().add(r.key);{let i=le();const s=t.Ma.get(e);if(!s)return i;for(const o of s){const a=t.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}async function jL(n,e){const t=K(n),r=await eh(t.localStore,e.query,!0),i=e.view.ba(r);return t.isPrimaryClient&&Cm(t,e.targetId,i.wa),i}async function FL(n,e){const t=K(n);return HS(t.localStore,e).then(r=>Br(t,r))}async function UL(n,e,t,r){const i=K(n),s=await function(a,u){const c=K(a),f=K(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",m=>f.Mn(m,u).next(g=>g?c.localDocuments.getDocuments(m,g):D.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await Aa(i.remoteStore):t==="acknowledged"||t==="rejected"?(Uy(i,e,r||null),Fy(i,e),function(a,u){K(K(a).mutationQueue).On(u)}(i.localStore,e)):Y(),await Br(i,s)):B("SyncEngine","Cannot apply mutation batch with id: "+e)}async function BL(n,e){const t=K(n);if($h(t),zy(t),e===!0&&t.Qa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await S0(t,r.toArray());t.Qa=!0,await bm(t.remoteStore,!0);for(const s of i)zh(t.remoteStore,s)}else if(e===!1&&t.Qa!==!1){const r=[];let i=Promise.resolve();t.Ma.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(ca(t,o),aa(t.localStore,o,!0))),la(t.remoteStore,o)}),await i,await S0(t,r),function(o){const a=K(o);a.Na.forEach((u,c)=>{la(a.remoteStore,c)}),a.La.pr(),a.Na=new Map,a.Oa=new be(G.comparator)}(t),t.Qa=!1,await bm(t.remoteStore,!1)}}async function S0(n,e,t){const r=K(n),i=[],s=[];for(const o of e){let a;const u=r.Ma.get(o);if(u&&u.length!==0){a=await oa(r.localStore,Gt(u[0]));for(const c of u){const f=r.Fa.get(c),m=await jL(r,f);m.snapshot&&s.push(m.snapshot)}}else{const c=await KS(r.localStore,o);a=await oa(r.localStore,c),await jy(r,dA(c),o,!1,a.resumeToken)}i.push(a)}return r.Ca.d_(s),i}function dA(n){return Zx(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function zL(n){return function(t){return K(K(t).persistence).Qi()}(K(n).localStore)}async function $L(n,e,t,r){const i=K(n);if(i.Qa)return void B("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ma.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await HS(i.localStore,tS(s[0])),a=Gu.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Je.EMPTY_BYTE_STRING);await Br(i,o,a);break}case"rejected":await aa(i.localStore,e,!0),ca(i,e,r);break;default:Y()}}async function qL(n,e,t){const r=$h(n);if(r.Qa){for(const i of e){if(r.Ma.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){B("SyncEngine","Adding an already active target "+i);continue}const s=await KS(r.localStore,i),o=await oa(r.localStore,s);await jy(r,dA(s),o.targetId,!1,o.resumeToken),zh(r.remoteStore,o)}for(const i of t)r.Ma.has(i)&&await aa(r.localStore,i,!1).then(()=>{la(r.remoteStore,i),ca(r,i)}).catch($i)}}function $h(n){const e=K(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=uA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ML.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=NL.bind(null,e),e.Ca.d_=vL.bind(null,e.eventManager),e.Ca.$a=wL.bind(null,e.eventManager),e}function zy(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=CL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DL.bind(null,e),e}function WL(n,e,t){const r=K(n);(async function(s,o,a){try{const u=await o.getMetadata();if(await function(E,b){const N=K(E),O=st(b.createTime);return N.persistence.runTransaction("hasNewerBundle","readonly",S=>N.Gr.getBundleMetadata(S,b.id)).then(S=>!!S&&S.createTime.compareTo(O)>=0)}(s.localStore,u))return await o.close(),a._completeWith(function(E){return{taskState:"Success",documentsLoaded:E.totalDocuments,bytesLoaded:E.totalBytes,totalDocuments:E.totalDocuments,totalBytes:E.totalBytes}}(u)),Promise.resolve(new Set);a._updateProgress(iA(u));const c=new EL(u,s.localStore,o.serializer);let f=await o.Ua();for(;f;){const g=await c.la(f);g&&a._updateProgress(g),f=await o.Ua()}const m=await c.complete();return await Br(s,m.Ia,void 0),await function(E,b){const N=K(E);return N.persistence.runTransaction("Save bundle","readwrite",O=>N.Gr.saveBundleMetadata(O,b))}(s.localStore,u),a._completeWith(m.progress),Promise.resolve(m.Pa)}catch(u){return dr("SyncEngine",`Loading bundle failed with ${u}`),a._failWith(u),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class xu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Hu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return $S(this.persistence,new zS,e.initialUser,this.serializer)}Ga(e){return new BS(Bh.Zr,this.serializer)}Wa(e){return new YS}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xu.provider={build:()=>new xu};class hA extends xu{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await zy(this.Ja.syncEngine),await Aa(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return $S(this.persistence,new zS,e.initialUser,this.serializer)}ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new PO(r,e.asyncQueue,t)}Ha(e,t){const r=new cV(t,this.persistence);return new uV(e.asyncQueue,r)}Ga(e){const t=Ay(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new Sy(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,JS(),pd(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new YS}}class GL extends hA{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof Zf&&(this.sharedClientState.syncEngine={no:UL.bind(null,t),ro:$L.bind(null,t),io:qL.bind(null,t),Qi:zL.bind(null,t),eo:FL.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await BL(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const t=JS();if(!Zf.D(t))throw new U(V.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Ay(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Zf(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Su{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>x0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=LL.bind(null,this.syncEngine),await bm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _L}()}createDatastore(e){const t=Hu(e.databaseInfo.databaseId),r=function(s){return new tL(s)}(e.databaseInfo);return function(s,o,a,u){return new iL(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new oL(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>x0(this.syncEngine,t,0),function(){return _0.D()?new _0:new XO}())}createSyncEngine(e,t){return function(i,s,o,a,u,c,f){const m=new SL(i,s,o,a,u,c);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=K(i);B("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Sa(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Su.provider={build:()=>new Su};function A0(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class qh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):it("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class KL{constructor(e,t){this.Xa=e,this.serializer=t,this.metadata=new kt,this.buffer=new Uint8Array,this.eu=function(){return new TextDecoder("utf-8")}(),this.tu().then(r=>{r&&r.ua()?this.metadata.resolve(r.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.aa)}`))},r=>this.metadata.reject(r))}close(){return this.Xa.cancel()}async getMetadata(){return this.metadata.promise}async Ua(){return await this.getMetadata(),this.tu()}async tu(){const e=await this.nu();if(e===null)return null;const t=this.eu.decode(e),r=Number(t);isNaN(r)&&this.ru(`length string (${t}) is not valid number`);const i=await this.iu(r);return new IL(JSON.parse(i),e.length+r)}su(){return this.buffer.findIndex(e=>e===123)}async nu(){for(;this.su()<0&&!await this.ou(););if(this.buffer.length===0)return null;const e=this.su();e<0&&this.ru("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async iu(e){for(;this.buffer.length<e;)await this.ou()&&this.ru("Reached the end of bundle when more is expected.");const t=this.eu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}ru(e){throw this.Xa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ou(){const e=await this.Xa.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class HL{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new U(V.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(i,s){const o=K(i),a={documents:s.map(m=>Eu(o.serializer,m))},u=await o.Lo("BatchGetDocuments",o.serializer.databaseId,he.emptyPath(),a,s.length),c=new Map;u.forEach(m=>{const g=uO(o.serializer,m);c.set(g.key.toString(),g)});const f=[];return s.forEach(m=>{const g=c.get(m.toString());X(!!g),f.push(g)}),f}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new xa(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=G.fromPath(r);this.mutations.push(new my(i,this.precondition(i)))}),await async function(r,i){const s=K(r),o={writes:i.map(a=>Tu(s.serializer,a))};await s.Mo("Commit",s.serializer.databaseId,he.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Y();t=te.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new U(V.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(te.min())?Ue.exists(!1):Ue.updateTime(t):Ue.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(te.min()))throw new U(V.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ue.updateTime(t)}return Ue.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class QL{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this._u=r.maxAttempts,this.t_=new Py(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new HL(this.datastore),t=this.cu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const t=this.updateFunction(e);return!Bu(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!pS(t)}return!1}}/**
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
 */class YL{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=vt.UNAUTHENTICATED,this.clientId=Px.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{B("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(B("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ka(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function tp(n,e){n.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await qS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function R0(n,e){n.asyncQueue.verifyOperationInProgress();const t=await $y(n);B("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>v0(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>v0(e.remoteStore,i)),n._onlineComponents=e}async function $y(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await tp(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;dr("Error using user provided cache. Falling back to memory cache: "+t),await tp(n,new xu)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await tp(n,new xu);return n._offlineComponents}async function Wh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await R0(n,n._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await R0(n,new Su))),n._onlineComponents}function fA(n){return $y(n).then(e=>e.persistence)}function qy(n){return $y(n).then(e=>e.localStore)}function pA(n){return Wh(n).then(e=>e.remoteStore)}function Wy(n){return Wh(n).then(e=>e.syncEngine)}function JL(n){return Wh(n).then(e=>e.datastore)}async function da(n){const e=await Wh(n),t=e.eventManager;return t.onListen=AL.bind(null,e.syncEngine),t.onUnlisten=kL.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=RL.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=PL.bind(null,e.syncEngine),t}function XL(n){return n.asyncQueue.enqueue(async()=>{const e=await fA(n),t=await pA(n);return e.setNetworkEnabled(!0),function(i){const s=K(i);return s.L_.delete(0),Qu(s)}(t)})}function ZL(n){return n.asyncQueue.enqueue(async()=>{const e=await fA(n),t=await pA(n);return e.setNetworkEnabled(!1),async function(i){const s=K(i);s.L_.add(0),await Sa(s),s.q_.set("Offline")}(t)})}function eM(n,e){const t=new kt;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,f){const m=K(c);return m.persistence.runTransaction("read document","readonly",g=>m.localDocuments.getDocument(g,f))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new U(V.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const u=ka(a,`Failed to get document '${s} from cache`);o.reject(u)}}(await qy(n),e,t)),t.promise}function mA(n,e,t={}){const r=new kt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const f=new qh({next:g=>{f.Za(),o.enqueueAndForget(()=>Oy(s,m));const E=g.docs.has(a);!E&&g.fromCache?c.reject(new U(V.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&g.fromCache&&u&&u.source==="server"?c.reject(new U(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new My(Ea(a.path),f,{includeMetadataChanges:!0,_a:!0});return Vy(s,m)}(await da(n),n.asyncQueue,e,t,r)),r.promise}function tM(n,e){const t=new kt;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await eh(i,s,!0),u=new aA(s,a.Ts),c=u.ma(a.documents),f=u.applyChanges(c,!1);o.resolve(f.snapshot)}catch(a){const u=ka(a,`Failed to execute query '${s} against cache`);o.reject(u)}}(await qy(n),e,t)),t.promise}function gA(n,e,t={}){const r=new kt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const f=new qh({next:g=>{f.Za(),o.enqueueAndForget(()=>Oy(s,m)),g.fromCache&&u.source==="server"?c.reject(new U(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new My(a,f,{includeMetadataChanges:!0,_a:!0});return Vy(s,m)}(await da(n),n.asyncQueue,e,t,r)),r.promise}function nM(n,e){const t=new qh(e);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){K(i).Y_.add(s),s.next()}(await da(n),t)),()=>{t.Za(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){K(i).Y_.delete(s)}(await da(n),t))}}function rM(n,e,t,r){const i=function(o,a){let u;return u=typeof o=="string"?gS().encode(o):o,function(f,m){return new KL(f,m)}(function(f,m){if(f instanceof Uint8Array)return A0(f,m);if(f instanceof ArrayBuffer)return A0(new Uint8Array(f),m);if(f instanceof ReadableStream)return f.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(u),a)}(t,Hu(e));n.asyncQueue.enqueueAndForget(async()=>{WL(await Wy(n),i,r)})}function iM(n,e){return n.asyncQueue.enqueue(async()=>function(r,i){const s=K(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Gr.getNamedQuery(o,i))}(await qy(n),e))}/**
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
 */function yA(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const k0=new Map;/**
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
 */function Gy(n,e,t){if(!t)throw new U(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function _A(n,e,t,r){if(e===!0&&r===!0)throw new U(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function P0(n){if(!G.isDocumentKey(n))throw new U(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function b0(n){if(G.isDocumentKey(n))throw new U(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Gh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Y()}function we(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new U(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Gh(n);throw new U(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function vA(n,e){if(e<=0)throw new U(V.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class N0{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new U(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_A("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new U(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new U(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new U(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yu{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new N0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new N0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new X2;switch(r.type){case"firstParty":return new nV(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=k0.get(t);r&&(B("ComponentProvider","Removing Datastore"),k0.delete(t),r.terminate())}(this),Promise.resolve()}}function sM(n,e,t,r={}){var i;const s=(n=we(n,Yu))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&dr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=vt.MOCK_USER;else{a=mb(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new U(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new vt(c)}n._authCredentials=new Z2(new kx(a,u))}}/**
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
 */let Kt=class wA{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new wA(this.firestore,e,this._query)}},qe=class IA{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new IA(this.firestore,e,this._key)}},xi=class EA extends Kt{constructor(e,t,r){super(e,t,Ea(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new G(e))}withConverter(e){return new EA(this.firestore,e,this._path)}};function TA(n,e,...t){if(n=ne(n),Gy("collection","path",e),n instanceof Yu){const r=he.fromString(e,...t);return b0(r),new xi(n,null,r)}{if(!(n instanceof qe||n instanceof xi))throw new U(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(he.fromString(e,...t));return b0(r),new xi(n.firestore,null,r)}}function oM(n,e){if(n=we(n,Yu),Gy("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new U(V.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Kt(n,null,function(r){return new Fr(he.emptyPath(),r)}(e))}function ih(n,e,...t){if(n=ne(n),arguments.length===1&&(e=Px.newId()),Gy("doc","path",e),n instanceof Yu){const r=he.fromString(e,...t);return P0(r),new qe(n,null,new G(r))}{if(!(n instanceof qe||n instanceof xi))throw new U(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(he.fromString(e,...t));return P0(r),new qe(n.firestore,n instanceof xi?n.converter:null,new G(r))}}function xA(n,e){return n=ne(n),e=ne(e),(n instanceof qe||n instanceof xi)&&(e instanceof qe||e instanceof xi)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function SA(n,e){return n=ne(n),e=ne(e),n instanceof Kt&&e instanceof Kt&&n.firestore===e.firestore&&$u(n._query,e._query)&&n.converter===e.converter}/**
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
 */class C0{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Py(this,"async_queue_retry"),this.Vu=()=>{const r=pd();r&&B("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=pd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=pd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new kt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!qi(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw it("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=Dy.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Y()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Dm(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class aM{constructor(){this._progressObserver={},this._taskCompletionResolver=new kt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const lM=-1;let ot=class extends Yu{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new C0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new C0(e),this._firestoreClient=void 0,await e}}};function Ft(n){if(n._terminated)throw new U(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||AA(n),n._firestoreClient}function AA(n){var e,t,r;const i=n._freezeSettings(),s=function(a,u,c,f){return new CV(a,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,yA(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new YL(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(n._componentsProvider))}function uM(n,e){dr("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return RA(n,Su.provider,{build:r=>new hA(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function cM(n){dr("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();RA(n,Su.provider,{build:t=>new GL(t,e.cacheSizeBytes)})}function RA(n,e,t){if((n=we(n,ot))._firestoreClient||n._terminated)throw new U(V.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new U(V.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},AA(n)}function dM(n){if(n._initialized&&!n._terminated)throw new U(V.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new kt;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!ar.D())return Promise.resolve();const i=r+"main";await ar.delete(i)}(Ay(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function hM(n){return function(t){const r=new kt;return t.asyncQueue.enqueueAndForget(async()=>VL(await Wy(t),r)),r.promise}(Ft(n=we(n,ot)))}function fM(n){return XL(Ft(n=we(n,ot)))}function pM(n){return ZL(Ft(n=we(n,ot)))}function mM(n,e){const t=Ft(n=we(n,ot)),r=new aM;return rM(t,n._databaseId,e,r),r}function gM(n,e){return iM(Ft(n=we(n,ot)),e).then(t=>t?new Kt(n,null,t.query):null)}/**
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
 */class fr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fr(Je.fromBase64String(e))}catch(t){throw new U(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new fr(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let Li=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new U(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let Ws=class{constructor(e){this._methodName=e}};/**
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
 */class Kh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
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
 */class Ky{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const yM=/^__.*__$/;class _M{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ur(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ta(e,this.data,t,this.fieldTransforms)}}class kA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ur(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function PA(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Hh{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Hh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return sh(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(PA(this.Cu)&&yM.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class vM{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Hu(e)}Qu(e,t,r,i=!1){return new Hh({Cu:e,methodName:t,qu:r,path:Fe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gs(n){const e=n._freezeSettings(),t=Hu(n._databaseId);return new vM(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Qh(n,e,t,r,i,s={}){const o=n.Qu(s.merge||s.mergeFields?2:0,e,t,i);e_("Data must be an object, but it was:",o,r);const a=CA(r,o);let u,c;if(s.merge)u=new nn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=Vm(e,m,t);if(!o.contains(g))throw new U(V.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);VA(f,g)||f.push(g)}u=new nn(f),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new _M(new At(a),u,c)}class Ju extends Ws{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ju}}function bA(n,e,t){return new Hh({Cu:3,qu:e.settings.qu,methodName:n._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Hy extends Ws{_toFieldTransform(e){return new Wu(e.path,new ra)}isEqual(e){return e instanceof Hy}}class Qy extends Ws{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=bA(this,e,!0),r=this.Ku.map(s=>Ks(s,t)),i=new Vs(r);return new Wu(e.path,i)}isEqual(e){return e instanceof Qy&&au(this.Ku,e.Ku)}}class Yy extends Ws{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=bA(this,e,!0),r=this.Ku.map(s=>Ks(s,t)),i=new Os(r);return new Wu(e.path,i)}isEqual(e){return e instanceof Yy&&au(this.Ku,e.Ku)}}class Jy extends Ws{constructor(e,t){super(e),this.$u=t}_toFieldTransform(e){const t=new ia(e.serializer,aS(e.serializer,this.$u));return new Wu(e.path,t)}isEqual(e){return e instanceof Jy&&this.$u===e.$u}}function Xy(n,e,t,r){const i=n.Qu(1,e,t);e_("Data must be an object, but it was:",i,r);const s=[],o=At.empty();qs(r,(u,c)=>{const f=t_(e,u,t);c=ne(c);const m=i.Nu(f);if(c instanceof Ju)s.push(f);else{const g=Ks(c,m);g!=null&&(s.push(f),o.set(f,g))}});const a=new nn(s);return new kA(o,a,i.fieldTransforms)}function Zy(n,e,t,r,i,s){const o=n.Qu(1,e,t),a=[Vm(e,r,t)],u=[i];if(s.length%2!=0)throw new U(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)a.push(Vm(e,s[g])),u.push(s[g+1]);const c=[],f=At.empty();for(let g=a.length-1;g>=0;--g)if(!VA(c,a[g])){const E=a[g];let b=u[g];b=ne(b);const N=o.Nu(E);if(b instanceof Ju)c.push(E);else{const O=Ks(b,N);O!=null&&(c.push(E),f.set(E,O))}}const m=new nn(c);return new kA(f,m,o.fieldTransforms)}function NA(n,e,t,r=!1){return Ks(t,n.Qu(r?4:3,e))}function Ks(n,e){if(DA(n=ne(n)))return e_("Unsupported field value:",e,n),CA(n,e);if(n instanceof Ws)return function(r,i){if(!PA(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Ks(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return aS(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Be.fromDate(r);return{timestampValue:sa(i.serializer,s)}}if(r instanceof Be){const s=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:sa(i.serializer,s)}}if(r instanceof Kh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof fr)return{bytesValue:vS(i.serializer,r._byteString)};if(r instanceof qe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:wy(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ky)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return py(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Gh(r)}`)}(n,e)}function CA(n,e){const t={};return Bx(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qs(n,(r,i)=>{const s=Ks(i,e.Mu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function DA(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Be||n instanceof Kh||n instanceof fr||n instanceof qe||n instanceof Ws||n instanceof Ky)}function e_(n,e,t){if(!DA(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Gh(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Vm(n,e,t){if((e=ne(e))instanceof Li)return e._internalPath;if(typeof e=="string")return t_(n,e);throw sh("Field path arguments must be of type string or ",n,!1,void 0,t)}const wM=new RegExp("[~\\*/\\[\\]]");function t_(n,e,t){if(e.search(wM)>=0)throw sh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Li(...e.split("."))._internalPath}catch{throw sh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function sh(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new U(V.INVALID_ARGUMENT,a+n+u)}function VA(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Au{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new IM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Yh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class IM extends Au{data(){return super.data()}}function Yh(n,e){return typeof e=="string"?t_(n,e):e instanceof Li?e._internalPath:e._delegate._internalPath}/**
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
 */function OA(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new U(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class n_{}class Xu extends n_{}function ii(n,e,...t){let r=[];e instanceof n_&&r.push(e),r=r.concat(t),function(s){const o=s.filter(u=>u instanceof r_).length,a=s.filter(u=>u instanceof Jh).length;if(o>1||o>0&&a>0)throw new U(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Jh extends Xu{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Jh(e,t,r)}_apply(e){const t=this._parse(e);return MA(e._query,t),new Kt(e.firestore,e.converter,Im(e._query,t))}_parse(e){const t=Gs(e.firestore);return function(s,o,a,u,c,f,m){let g;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new U(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){V0(m,f);const E=[];for(const b of m)E.push(D0(u,s,b));g={arrayValue:{values:E}}}else g=D0(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||V0(m,f),g=NA(a,o,m,f==="in"||f==="not-in");return fe.create(c,f,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function EM(n,e,t){const r=e,i=Yh("where",n);return Jh._create(i,r,t)}class r_ extends n_{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new r_(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:xe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)MA(o,u),o=Im(o,u)}(e._query,t),new Kt(e.firestore,e.converter,Im(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class i_ extends Xu{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new i_(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new U(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new U(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Iu(s,o)}(e._query,this._field,this._direction);return new Kt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Fr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function TM(n,e="asc"){const t=e,r=Yh("orderBy",n);return i_._create(r,t)}class Xh extends Xu{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Xh(e,t,r)}_apply(e){return new Kt(e.firestore,e.converter,Yd(e._query,this._limit,this._limitType))}}function xM(n){return vA("limit",n),Xh._create("limit",n,"F")}function SM(n){return vA("limitToLast",n),Xh._create("limitToLast",n,"L")}class Zh extends Xu{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Zh(e,t,r)}_apply(e){const t=LA(e,this.type,this._docOrFields,this._inclusive);return new Kt(e.firestore,e.converter,function(i,s){return new Fr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function AM(...n){return Zh._create("startAt",n,!0)}function RM(...n){return Zh._create("startAfter",n,!1)}class ef extends Xu{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new ef(e,t,r)}_apply(e){const t=LA(e,this.type,this._docOrFields,this._inclusive);return new Kt(e.firestore,e.converter,function(i,s){return new Fr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function kM(...n){return ef._create("endBefore",n,!1)}function PM(...n){return ef._create("endAt",n,!0)}function LA(n,e,t,r){if(t[0]=ne(t[0]),t[0]instanceof Au)return function(s,o,a,u,c){if(!u)throw new U(V.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const f=[];for(const m of Bo(s))if(m.field.isKeyField())f.push(Cs(o,u.key));else{const g=u.data.field(m.field);if(Oh(g))throw new U(V.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+m.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const E=m.field.canonicalString();throw new U(V.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${E}' (used as the orderBy) does not exist.`)}f.push(g)}return new Vi(f,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=Gs(n.firestore);return function(o,a,u,c,f,m){const g=o.explicitOrderBy;if(f.length>g.length)throw new U(V.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const E=[];for(let b=0;b<f.length;b++){const N=f[b];if(g[b].field.isKeyField()){if(typeof N!="string")throw new U(V.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof N}`);if(!hy(o)&&N.indexOf("/")!==-1)throw new U(V.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${N}' contains a slash.`);const O=o.path.child(he.fromString(N));if(!G.isDocumentKey(O))throw new U(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${O}' is not because it contains an odd number of segments.`);const S=new G(O);E.push(Cs(a,S))}else{const O=NA(u,c,N);E.push(O)}}return new Vi(E,m)}(n._query,n.firestore._databaseId,i,e,t,r)}}function D0(n,e,t){if(typeof(t=ne(t))=="string"){if(t==="")throw new U(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hy(e)&&t.indexOf("/")!==-1)throw new U(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(he.fromString(t));if(!G.isDocumentKey(r))throw new U(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Cs(n,new G(r))}if(t instanceof qe)return Cs(n,t._key);throw new U(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gh(t)}.`)}function V0(n,e){if(!Array.isArray(n)||n.length===0)throw new U(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function MA(n,e){const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new U(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class s_{convertValue(e,t="none"){switch(Ns(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ni(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return qs(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Me(o.doubleValue));return new Ky(s)}convertGeoPoint(e){return new Kh(Me(e.latitude),Me(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=cy(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(_u(e));default:return null}}convertTimestamp(e){const t=Vr(e);return new Be(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=he.fromString(e);X(bS(r));const i=new Ci(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(t)||it(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function tf(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class bM extends s_{constructor(e){super(),this.firestore=e}convertBytes(e){return new fr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,t)}}/**
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
 */class gs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Or=class extends Au{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new zl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Yh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},zl=class extends Or{data(e={}){return super.data(e)}},Mi=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new gs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new zl(this._firestore,this._userDataWriter,r.key,r,new gs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new U(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new zl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new gs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new zl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new gs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:NM(a.type),doc:u,oldIndex:c,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function NM(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}function jA(n,e){return n instanceof Or&&e instanceof Or?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Mi&&e instanceof Mi&&n._firestore===e._firestore&&SA(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function CM(n){n=we(n,qe);const e=we(n.firestore,ot);return mA(Ft(e),n._key).then(t=>o_(e,n,t))}class Hs extends s_{constructor(e){super(),this.firestore=e}convertBytes(e){return new fr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,t)}}function DM(n){n=we(n,qe);const e=we(n.firestore,ot),t=Ft(e),r=new Hs(e);return eM(t,n._key).then(i=>new Or(e,r,n._key,i,new gs(i!==null&&i.hasLocalMutations,!0),n.converter))}function VM(n){n=we(n,qe);const e=we(n.firestore,ot);return mA(Ft(e),n._key,{source:"server"}).then(t=>o_(e,n,t))}function OM(n){n=we(n,Kt);const e=we(n.firestore,ot),t=Ft(e),r=new Hs(e);return OA(n._query),gA(t,n._query).then(i=>new Mi(e,r,n,i))}function LM(n){n=we(n,Kt);const e=we(n.firestore,ot),t=Ft(e),r=new Hs(e);return tM(t,n._query).then(i=>new Mi(e,r,n,i))}function MM(n){n=we(n,Kt);const e=we(n.firestore,ot),t=Ft(e),r=new Hs(e);return gA(t,n._query,{source:"server"}).then(i=>new Mi(e,r,n,i))}function O0(n,e,t){n=we(n,qe);const r=we(n.firestore,ot),i=tf(n.converter,e,t);return Zu(r,[Qh(Gs(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Ue.none())])}function L0(n,e,t,...r){n=we(n,qe);const i=we(n.firestore,ot),s=Gs(i);let o;return o=typeof(e=ne(e))=="string"||e instanceof Li?Zy(s,"updateDoc",n._key,e,t,r):Xy(s,"updateDoc",n._key,e),Zu(i,[o.toMutation(n._key,Ue.exists(!0))])}function jM(n){return Zu(we(n.firestore,ot),[new xa(n._key,Ue.none())])}function FM(n,e){const t=we(n.firestore,ot),r=ih(n),i=tf(n.converter,e);return Zu(t,[Qh(Gs(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Ue.exists(!1))]).then(()=>r)}function FA(n,...e){var t,r,i;n=ne(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Dm(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Dm(e[o])){const m=e[o];e[o]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,c,f;if(n instanceof qe)c=we(n.firestore,ot),f=Ea(n._key.path),u={next:m=>{e[o]&&e[o](o_(c,n,m))},error:e[o+1],complete:e[o+2]};else{const m=we(n,Kt);c=we(m.firestore,ot),f=m._query;const g=new Hs(c);u={next:E=>{e[o]&&e[o](new Mi(c,g,m,E))},error:e[o+1],complete:e[o+2]},OA(n._query)}return function(g,E,b,N){const O=new qh(N),S=new My(E,O,b);return g.asyncQueue.enqueueAndForget(async()=>Vy(await da(g),S)),()=>{O.Za(),g.asyncQueue.enqueueAndForget(async()=>Oy(await da(g),S))}}(Ft(c),f,a,u)}function UM(n,e){return nM(Ft(n=we(n,ot)),Dm(e)?e:{next:e})}function Zu(n,e){return function(r,i){const s=new kt;return r.asyncQueue.enqueueAndForget(async()=>bL(await Wy(r),i,s)),s.promise}(Ft(n),e)}function o_(n,e,t){const r=t.docs.get(e._key),i=new Hs(n);return new Or(n,i,e._key,r,new gs(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const BM={maxAttempts:5};/**
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
 */let zM=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Gs(e)}set(e,t,r){this._verifyNotCommitted();const i=ci(e,this._firestore),s=tf(i.converter,t,r),o=Qh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ue.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=ci(e,this._firestore);let o;return o=typeof(t=ne(t))=="string"||t instanceof Li?Zy(this._dataReader,"WriteBatch.update",s._key,t,r,i):Xy(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Ue.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=ci(e,this._firestore);return this._mutations=this._mutations.concat(new xa(t._key,Ue.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new U(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function ci(n,e){if((n=ne(n)).firestore!==e)throw new U(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */let $M=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=Gs(t)}get(t){const r=ci(t,this._firestore),i=new bM(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return Y();const o=s[0];if(o.isFoundDocument())return new Au(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Au(this._firestore,i,r._key,null,r.converter);throw Y()})}set(t,r,i){const s=ci(t,this._firestore),o=tf(s.converter,r,i),a=Qh(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(t,r,i,...s){const o=ci(t,this._firestore);let a;return a=typeof(r=ne(r))=="string"||r instanceof Li?Zy(this._dataReader,"Transaction.update",o._key,r,i,s):Xy(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(t){const r=ci(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=ci(e,this._firestore),r=new Hs(this._firestore);return super.get(e).then(i=>new Or(this._firestore,r,t._key,i._document,new gs(!1,!1),t.converter))}};function qM(n,e,t){n=we(n,ot);const r=Object.assign(Object.assign({},BM),t);return function(s){if(s.maxAttempts<1)throw new U(V.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new kt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await JL(s);new QL(s.asyncQueue,c,a,o,u).au()}),u.promise}(Ft(n),i=>e(new $M(n,i)),r)}/**
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
 */function WM(){return new Ju("deleteField")}function GM(){return new Hy("serverTimestamp")}function KM(...n){return new Qy("arrayUnion",n)}function HM(...n){return new Yy("arrayRemove",n)}function QM(n){return new Jy("increment",n)}(function(e,t=!0){(function(i){Ia=i})(Bi),Pi(new ur("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ot(new eV(r.getProvider("auth-internal")),new iV(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new U(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ci(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),zn(Sw,"4.7.3",e),zn(Sw,"4.7.3","esm2017")})();const YM="@firebase/firestore-compat",JM="0.3.38";/**
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
 */function a_(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new U("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function M0(){if(typeof Uint8Array>"u")throw new U("unimplemented","Uint8Arrays are not available in this environment.")}function j0(){if(!bV())throw new U("unimplemented","Blobs are unavailable in Firestore in this environment.")}let UA=class Om{constructor(e){this._delegate=e}static fromBase64String(e){return j0(),new Om(fr.fromBase64String(e))}static fromUint8Array(e){return M0(),new Om(fr.fromUint8Array(e))}toBase64(){return j0(),this._delegate.toBase64()}toUint8Array(){return M0(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
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
 */function Lm(n){return XM(n,["next","error","complete"])}function XM(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
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
 */class ZM{enableIndexedDbPersistence(e,t){return uM(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return cM(e._delegate)}clearIndexedDbPersistence(e){return dM(e._delegate)}}class BA{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Ci||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&dr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){sM(this._delegate,e,t,r)}enableNetwork(){return fM(this._delegate)}disableNetwork(){return pM(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,_A("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return hM(this._delegate)}onSnapshotsInSync(e){return UM(this._delegate,e)}get app(){if(!this._appCompat)throw new U("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ha(this,TA(this._delegate,e))}catch(t){throw zt(t,"collection()","Firestore.collection()")}}doc(e){try{return new An(this,ih(this._delegate,e))}catch(t){throw zt(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Bt(this,oM(this._delegate,e))}catch(t){throw zt(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return qM(this._delegate,t=>e(new zA(this,t)))}batch(){return Ft(this._delegate),new $A(new zM(this._delegate,e=>Zu(this._delegate,e)))}loadBundle(e){return mM(this._delegate,e)}namedQuery(e){return gM(this._delegate,e).then(t=>t?new Bt(this,t):null)}}class nf extends s_{constructor(e){super(),this.firestore=e}convertBytes(e){return new UA(new fr(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return An.forKey(t,this.firestore,null)}}function ej(n){Y2(n)}class zA{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new nf(e)}get(e){const t=ys(e);return this._delegate.get(t).then(r=>new Ru(this._firestore,new Or(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=ys(e);return r?(a_("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=ys(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=ys(e);return this._delegate.delete(t),this}}class $A{constructor(e){this._delegate=e}set(e,t,r){const i=ys(e);return r?(a_("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=ys(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=ys(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Fs{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new zl(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new ku(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Fs.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new Fs(e,new nf(e),t),i.set(t,s)),s}}Fs.INSTANCES=new WeakMap;class An{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new nf(e)}static forPath(e,t,r){if(e.length%2!==0)throw new U("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new An(t,new qe(t._delegate,r,new G(e)))}static forKey(e,t,r){return new An(t,new qe(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new ha(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ha(this.firestore,TA(this._delegate,e))}catch(t){throw zt(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=ne(e),e instanceof qe?xA(this._delegate,e):!1}set(e,t){t=a_("DocumentReference.set",t);try{return t?O0(this._delegate,e,t):O0(this._delegate,e)}catch(r){throw zt(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?L0(this._delegate,e):L0(this._delegate,e,t,...r)}catch(i){throw zt(i,"updateDoc()","DocumentReference.update()")}}delete(){return jM(this._delegate)}onSnapshot(...e){const t=qA(e),r=WA(e,i=>new Ru(this.firestore,new Or(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return FA(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=DM(this._delegate):(e==null?void 0:e.source)==="server"?t=VM(this._delegate):t=CM(this._delegate),t.then(r=>new Ru(this.firestore,new Or(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new An(this.firestore,e?this._delegate.withConverter(Fs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function zt(n,e,t){return n.message=n.message.replace(e,t),n}function qA(n){for(const e of n)if(typeof e=="object"&&!Lm(e))return e;return{}}function WA(n,e){var t,r;let i;return Lm(n[0])?i=n[0]:Lm(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Ru{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new An(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return jA(this._delegate,e._delegate)}}class ku extends Ru{data(e){const t=this._delegate.data(e);return this._delegate._converter||J2(t!==void 0),t}}class Bt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new nf(e)}where(e,t,r){try{return new Bt(this.firestore,ii(this._delegate,EM(e,t,r)))}catch(i){throw zt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Bt(this.firestore,ii(this._delegate,TM(e,t)))}catch(r){throw zt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Bt(this.firestore,ii(this._delegate,xM(e)))}catch(t){throw zt(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Bt(this.firestore,ii(this._delegate,SM(e)))}catch(t){throw zt(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Bt(this.firestore,ii(this._delegate,AM(...e)))}catch(t){throw zt(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Bt(this.firestore,ii(this._delegate,RM(...e)))}catch(t){throw zt(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Bt(this.firestore,ii(this._delegate,kM(...e)))}catch(t){throw zt(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Bt(this.firestore,ii(this._delegate,PM(...e)))}catch(t){throw zt(t,"endAt()","Query.endAt()")}}isEqual(e){return SA(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=LM(this._delegate):(e==null?void 0:e.source)==="server"?t=MM(this._delegate):t=OM(this._delegate),t.then(r=>new Mm(this.firestore,new Mi(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=qA(e),r=WA(e,i=>new Mm(this.firestore,new Mi(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return FA(this._delegate,t,r)}withConverter(e){return new Bt(this.firestore,e?this._delegate.withConverter(Fs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class tj{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new ku(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Mm{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Bt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new ku(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new tj(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new ku(this._firestore,r))})}isEqual(e){return jA(this._delegate,e._delegate)}}class ha extends Bt{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new An(this.firestore,e):null}doc(e){try{return e===void 0?new An(this.firestore,ih(this._delegate)):new An(this.firestore,ih(this._delegate,e))}catch(t){throw zt(t,"doc()","CollectionReference.doc()")}}add(e){return FM(this._delegate,e).then(t=>new An(this.firestore,t))}isEqual(e){return xA(this._delegate,e._delegate)}withConverter(e){return new ha(this.firestore,e?this._delegate.withConverter(Fs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ys(n){return we(n,qe)}/**
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
 */class l_{constructor(...e){this._delegate=new Li(...e)}static documentId(){return new l_(Fe.keyField().canonicalString())}isEqual(e){return e=ne(e),e instanceof Li?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class ds{constructor(e){this._delegate=e}static serverTimestamp(){const e=GM();return e._methodName="FieldValue.serverTimestamp",new ds(e)}static delete(){const e=WM();return e._methodName="FieldValue.delete",new ds(e)}static arrayUnion(...e){const t=KM(...e);return t._methodName="FieldValue.arrayUnion",new ds(t)}static arrayRemove(...e){const t=HM(...e);return t._methodName="FieldValue.arrayRemove",new ds(t)}static increment(e){const t=QM(e);return t._methodName="FieldValue.increment",new ds(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const nj={Firestore:BA,GeoPoint:Kh,Timestamp:Be,Blob:UA,Transaction:zA,WriteBatch:$A,DocumentReference:An,DocumentSnapshot:Ru,Query:Bt,QueryDocumentSnapshot:ku,QuerySnapshot:Mm,CollectionReference:ha,FieldPath:l_,FieldValue:ds,setLogLevel:ej,CACHE_SIZE_UNLIMITED:lM};function rj(n,e){n.INTERNAL.registerComponent(new ur("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},nj)))}/**
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
 */function ij(n){rj(n,(e,t)=>new BA(e,t,new ZM)),n.registerVersion(YM,JM)}ij(ya);const sj={apiKey:"AIzaSyBwriza4xTWn0kT-clamqFWQOmZenk8oQ8",authDomain:"lideranca-irv.firebaseapp.com",projectId:"lideranca-irv",storageBucket:"lideranca-irv.firebasestorage.app",messagingSenderId:"420842927514",appId:"1:420842927514:web:1508be5f38c7c824ea3623",measurementId:"G-HWPGGE7SBX"},GA=ya.initializeApp(sj),qc=GA.firestore(),np=GA.auth(),oj=()=>{const[n,e]=se.useState(null),[t,r]=se.useState(!0),[i,s]=se.useState(""),[o,a]=se.useState(""),[u,c]=se.useState(""),[f,m]=se.useState(!1);se.useEffect(()=>{const Z=np.onAuthStateChanged(H=>{e(H),r(!1)});return()=>Z()},[]);const g=async Z=>{Z.preventDefault(),m(!0),c("");try{await np.signInWithEmailAndPassword(i,o)}catch(H){console.error("Login error:",H),c("Credenciais inválidas. Verifique seu e-mail e senha.")}finally{m(!1)}},E=async()=>{try{await np.signOut()}catch(Z){console.error("Logout error:",Z)}},[b,N]=se.useState(ie.CELL_REGISTRY),[O,S]=se.useState([]),[v,A]=se.useState([]),[L,z]=se.useState([]),[F,w]=se.useState([]),[_,I]=se.useState([]),[x,k]=se.useState([]),[P,T]=se.useState([]),[et,Wn]=se.useState([]),[zr,wn]=se.useState(!0),[j,Q]=se.useState(null),[re,ue]=se.useState(!1),[Ie,ye]=se.useState(null),[Yt,In]=se.useState(null),[Et,ln]=se.useState(null),[Cn,En]=se.useState(null),[tt,Ki]=se.useState(!1),[pr,$r]=se.useState(null),Pa=se.useRef(null),ba=se.useRef(null),ec=se.useRef(null),rf=se.useRef(null),[qr,tc]=se.useState("all"),[Hi,sf]=se.useState("all"),[Qs,Na]=se.useState(""),[Wr,Ca]=se.useState(""),[nt,pt]=se.useState("");se.useEffect(()=>{if(!n){S([]),A([]),z([]),w([]),I([]),k([]),T([]),Wn([]);return}wn(!0);const Z=(ee,ke)=>qc.collection(ee).onSnapshot(Te=>{const oe=Te.docs.map(Ee=>({id:Ee.id,...Ee.data()}));ke(oe)},Te=>{console.error(`Erro ao carregar ${ee}:`,Te),En({title:"Erro de Conexão",message:`Falha ao sincronizar ${ee}.`,type:"alert"})}),H=[Z("members",S),Z("cells",A),Z("announcements",z),Z("studies",w),Z("tracks",I),Z("pastorWords",k),Z("leaders",T),Z("ministries",Wn)];return wn(!1),()=>{H.forEach(ee=>ee())}},[n]),se.useEffect(()=>{if(!n||zr)return;const Z=setTimeout(()=>{const H=new Date,ee=H.getMonth(),ke=H.getDate(),Te=Ee=>{if(!Ee)return!1;const Ne=Ee.split("-");if(Ne.length!==3)return!1;const un=parseInt(Ne[1],10)-1,mr=parseInt(Ne[2],10);return un===ee&&mr===ke},oe=[...O.filter(Ee=>Te(Ee.birthday)).map(Ee=>Ee.name),...P.filter(Ee=>Te(Ee.birthday)).map(Ee=>Ee.name)];if(oe.length>0){const Ee=oe.map(Ne=>Ne.split(" ")[0]).join(", ");En({title:"🎉 Aniversariantes do Dia!",message:`Hoje é dia de festa! Parabéns para: ${Ee}.`,type:"success"})}},3e3);return()=>clearTimeout(Z)},[O,P,n,zr]),se.useEffect(()=>{if(Cn){const Z=setTimeout(()=>En(null),6e3);return()=>clearTimeout(Z)}},[Cn]);const Gn=Z=>{if(!Z)return"";const H=Z.split("-");if(H.length===3){const[ee,ke,Te]=H;return`${Te}/${ke}/${ee}`}return Z},Da=Z=>{switch(Z){case ie.CELL_MEMBERS:return"members";case ie.CELL_REGISTRY:return"cells";case ie.LEADERS:return"leaders";case ie.MINISTRIES:return"ministries";case ie.STUDIES:return"studies";case ie.ANNOUNCEMENTS:return"announcements";case ie.MUSIC_PLAYER:return"tracks";case ie.PASTOR_WORD:return"pastorWords";default:return""}},Ys=se.useMemo(()=>qr==="all"?O:O.filter(Z=>Z.cellId===qr),[O,qr]);se.useMemo(()=>Hi==="all"?P:P.filter(Z=>Z.ministryId===Hi),[P,Hi]);const nc=se.useMemo(()=>{if(!Qs)return L;const Z=Qs.split("-");if(Z.length===3){const[H,ee,ke]=Z,Te=`${ke}/${ee}/${H}`;return L.filter(oe=>oe.date===Te)}return L},[L,Qs]),Qi=Z=>{let H="";Z==="members"?(H=`Nome;Telefone;Aniversario;Celula;Funcao
`,O.forEach(oe=>{var Ne;const Ee=((Ne=v.find(un=>un.id===oe.cellId))==null?void 0:Ne.name)||"N/A";H+=`${oe.name};${oe.phone};${Gn(oe.birthday)};${Ee};${oe.role}
`})):Z==="cells"?(H=`Nome;Lider;Co-Lider;Endereco;Dia;Hora;Tipo
`,v.forEach(oe=>{H+=`${oe.name};${oe.leader};${oe.coLeader||""};${oe.address};${oe.meetingDay};${oe.meetingTime};${oe.meetingType}
`})):Z==="leaders"?(H=`Nome;Telefone;Aniversario;Ministerio;Funcao
`,P.forEach(oe=>{var Ne;const Ee=((Ne=et.find(un=>un.id===oe.ministryId))==null?void 0:Ne.name)||"N/A";H+=`${oe.name};${oe.phone};${Gn(oe.birthday)};${Ee};${oe.role}
`})):Z==="ministries"?(H=`Nome;Lider Responsavel;Descricao
`,et.forEach(oe=>{var Ne;const Ee=((Ne=P.find(un=>un.id===oe.leaderId))==null?void 0:Ne.name)||"NÃO DEFINIDO";H+=`${oe.name};${Ee};${oe.description}
`})):Z==="announcements"&&(H=`Data;Categoria;Titulo;Conteudo
`,L.forEach(oe=>{const Ee=oe.content?oe.content.replace(/\n/g," "):"";H+=`${oe.date};${oe.category};${oe.title};${Ee}
`}));const ee=new Blob(["\uFEFF"+H],{type:"text/csv;charset=utf-8;"}),ke=URL.createObjectURL(ee),Te=document.createElement("a");Te.href=ke,Te.setAttribute("download",`relatorio_${Z}_irv.csv`),Te.click(),En({title:"Download Iniciado",message:`Relatório de ${Z} gerado.`,type:"success"})},rc=Z=>{const H=window.open("","_blank");H&&(H.document.write("<html><body><h1>Relatório</h1><p>Funcionalidade de impressão simplificada para demonstração.</p></body></html>"),H.document.close(),H.print())},Dn=async(Z,H)=>{const ee=Da(Z);if(ee){Ki(!0);try{let ke={...H};if(Z===ie.STUDIES){if(pr){const Te=URL.createObjectURL(pr);ke={...ke,pdfUrl:Te,pdfName:pr.name}}else if(j){const Te=F.find(oe=>oe.id===j);Te&&(ke.pdfUrl=Te.pdfUrl||"",ke.pdfName=Te.pdfName||"")}}j?(await qc.collection(ee).doc(j).update(ke),En({title:"Atualizado",message:"Registro salvo com sucesso.",type:"success"})):(await qc.collection(ee).add(ke),En({title:"Criado",message:"Novo registro adicionado.",type:"success"})),Q(null),ue(!1),$r(null)}catch(ke){console.error("Erro ao salvar:",ke),En({title:"Erro",message:"Não foi possível salvar no banco de dados.",type:"alert"})}finally{Ki(!1)}}},Va=async()=>{if(!Ie)return;const{view:Z,id:H}=Ie,ee=Da(Z);if(ee)try{await qc.collection(ee).doc(H).delete(),En({title:"Removido",message:"Registro excluído do banco de dados.",type:"alert"})}catch(ke){console.error("Erro ao deletar:",ke),En({title:"Erro",message:"Falha ao excluir o registro.",type:"alert"})}ye(null)},of=()=>{var ke,Te,oe,Ee,Ne,un,mr,Oa,Gr,La,mt,Ma,Kr,Hr,ic,sc,gr,oc,ac,Yi,ja,Js,Ji,Vn,Fa,Ua,Xs,Zs,Ba,za,lc,Xi,$a,eo;const Z="bg-white p-6 rounded-3xl shadow-xl border-2 border-indigo-100 animate-in zoom-in-95 mb-8",H="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-indigo-400 text-sm transition-all",ee="block text-xs font-black text-slate-400 uppercase mb-2 tracking-[0.1em]";switch(b){case ie.CELL_REGISTRY:return h.jsxs("div",{className:"space-y-6",children:[h.jsxs("header",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8",children:[h.jsxs("div",{children:[h.jsx("h2",{className:"text-3xl font-black text-slate-900 tracking-tight",children:"Células IRV"}),h.jsx("p",{className:"text-slate-500 font-medium",children:"Gestão estratégica das comunidades."})]}),h.jsxs("button",{type:"button",onClick:()=>{Q(null),ue(!0)},className:"bg-indigo-600 text-white px-6 py-3.5 rounded-2xl font-black flex items-center gap-2 hover:bg-indigo-700 shadow-xl transition-all w-full md:w-auto justify-center",children:[h.jsx(oo,{size:20})," Nova Célula"]})]}),(re||j)&&h.jsxs("form",{className:Z,onSubmit:R=>{R.preventDefault();const _e=new FormData(R.currentTarget);Dn(ie.CELL_REGISTRY,Object.fromEntries(_e))},children:[" ",h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[" ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Nome da Célula"})," ",h.jsx("input",{name:"name",required:!0,className:H,defaultValue:(ke=v.find(R=>R.id===j))==null?void 0:ke.name})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Líder"})," ",h.jsx("input",{name:"leader",required:!0,className:H,defaultValue:(Te=v.find(R=>R.id===j))==null?void 0:Te.leader})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Co-Líder"})," ",h.jsx("input",{name:"coLeader",className:H,defaultValue:(oe=v.find(R=>R.id===j))==null?void 0:oe.coLeader,placeholder:"Opcional"})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Endereço ou Link Digital"})," ",h.jsx("input",{name:"address",required:!0,className:H,defaultValue:(Ee=v.find(R=>R.id===j))==null?void 0:Ee.address})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Dia"})," ",h.jsxs("select",{name:"meetingDay",className:H,defaultValue:(Ne=v.find(R=>R.id===j))==null?void 0:Ne.meetingDay,children:[" ",h.jsx("option",{children:"Segunda-feira"})," ",h.jsx("option",{children:"Terça-feira"})," ",h.jsx("option",{children:"Quarta-feira"})," ",h.jsx("option",{children:"Quinta-feira"})," ",h.jsx("option",{children:"Sexta-feira"})," ",h.jsx("option",{children:"Sábado"})," ",h.jsx("option",{children:"Domingo"})," "]})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Hora"})," ",h.jsx("input",{name:"meetingTime",type:"time",required:!0,className:H,defaultValue:(un=v.find(R=>R.id===j))==null?void 0:un.meetingTime})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Modalidade"})," ",h.jsxs("select",{name:"meetingType",className:H,defaultValue:(mr=v.find(R=>R.id===j))==null?void 0:mr.meetingType,children:[" ",h.jsx("option",{value:"Presencial",children:"Presencial"})," ",h.jsx("option",{value:"Online",children:"Online"})," "]})," "]})," "]})," ",h.jsxs("div",{className:"flex justify-end gap-3 mt-10",children:[" ",h.jsx("button",{type:"button",onClick:()=>{ue(!1),Q(null)},className:"px-6 py-3.5 font-bold text-slate-400",children:"Cancelar"})," ",h.jsxs("button",{type:"submit",disabled:tt,className:"bg-indigo-600 text-white px-10 py-3.5 rounded-2xl font-black shadow-lg flex items-center gap-2",children:[" ",tt&&h.jsx(jf,{className:"animate-spin",size:16})," Salvar Célula "]})," "]})," "]}),h.jsxs("div",{className:"bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-sm",children:[" ",h.jsxs("div",{className:"w-full",children:[" ",h.jsxs("table",{className:"w-full text-left border-collapse",children:[" ",h.jsxs("thead",{className:"bg-slate-50 border-b border-slate-100",children:[" ",h.jsxs("tr",{children:[" ",h.jsx("th",{className:"px-4 py-3 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Célula"})," ",h.jsx("th",{className:"px-4 py-3 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Liderança"})," ",h.jsx("th",{className:"px-4 py-3 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Local/Horário"})," ",h.jsx("th",{className:"px-4 py-3 text-xs font-black text-slate-400 uppercase tracking-widest text-right",children:"Ações"})," "]})," "]})," ",h.jsxs("tbody",{className:"divide-y divide-slate-50",children:[" ",v.length===0?h.jsx("tr",{children:h.jsx("td",{colSpan:4,className:"p-10 text-center text-slate-300 font-black italic",children:"Nenhuma célula cadastrada."})}):v.map(R=>h.jsxs("tr",{className:"hover:bg-slate-50/50 transition-colors",children:[" ",h.jsxs("td",{className:"px-4 py-3 align-top",children:[" ",h.jsx("div",{className:"font-black text-slate-900 text-sm",children:R.name})," ",h.jsxs("span",{className:`mt-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wide inline-flex items-center gap-1 w-fit ${R.meetingType==="Online"?"bg-blue-50 text-blue-600":"bg-indigo-50 text-indigo-600"}`,children:[" ",R.meetingType==="Online"?h.jsx(rb,{size:10}):h.jsx(Zp,{size:10})," ",R.meetingType," "]})," "]})," ",h.jsxs("td",{className:"px-4 py-3 align-top",children:[" ",h.jsx("div",{className:"text-xs font-bold text-indigo-600",children:R.leader})," ",R.coLeader&&h.jsxs("div",{className:"text-xs font-medium text-slate-400 mt-0.5",children:["Co: ",R.coLeader]})," "]})," ",h.jsxs("td",{className:"px-4 py-3 align-top",children:[" ",h.jsxs("div",{className:"flex flex-col gap-1 text-xs font-medium text-slate-500",children:[" ",h.jsxs("div",{className:"flex items-start gap-1",children:[h.jsx(ZP,{size:12,className:"text-slate-400 shrink-0 mt-0.5"})," ",h.jsx("span",{className:"whitespace-normal leading-tight",children:R.address})]})," ",h.jsxs("div",{className:"flex items-center gap-1",children:[h.jsx(zP,{size:12,className:"text-slate-400 shrink-0"})," ",h.jsxs("span",{children:[R.meetingDay," às ",R.meetingTime]})]})," "]})," "]})," ",h.jsxs("td",{className:"px-4 py-3 align-top text-right",children:[" ",h.jsxs("div",{className:"flex justify-end gap-1",children:[" ",h.jsx("button",{type:"button",onClick:()=>Q(R.id),className:"p-2 text-slate-300 hover:text-indigo-600 transition-colors",children:h.jsx(Zr,{size:16})})," ",h.jsx("button",{type:"button",onClick:()=>ye({view:ie.CELL_REGISTRY,id:R.id}),className:"p-2 text-slate-300 hover:text-red-500 transition-colors",children:h.jsx(ei,{size:16})})," "]})," "]})," "]},R.id))," "]})," "]})," "]})," "]})]});case ie.CELL_MEMBERS:return h.jsxs("div",{className:"space-y-6",children:[" ",h.jsxs("header",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8",children:[" ",h.jsxs("div",{children:[" ",h.jsx("h2",{className:"text-3xl font-black text-slate-900",children:"Membros da Célula"})," ",h.jsx("p",{className:"text-slate-500 font-medium",children:"Nossa família em crescimento espiritual."})," "]})," ",h.jsxs("div",{className:"flex gap-2 w-full md:w-auto",children:[" ",h.jsxs("div",{className:"relative flex-1 md:w-64",children:[" ",h.jsx(HP,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400",size:16})," ",h.jsxs("select",{value:qr,onChange:R=>tc(R.target.value),className:`${H} !pl-10 !py-2.5 !text-xs !font-bold !uppercase`,children:[" ",h.jsx("option",{value:"all",children:"Todas as Células"})," ",v.map(R=>h.jsx("option",{value:R.id,children:R.name},R.id))," "]})," "]})," ",h.jsxs("button",{type:"button",onClick:()=>{Q(null),ue(!0)},className:"bg-emerald-600 text-white px-6 py-3 rounded-2xl font-black flex items-center gap-2 hover:bg-emerald-700 shadow-xl transition-all shrink-0",children:[" ",h.jsx(nb,{size:20})," Novo Membro "]})," "]})," "]})," ",h.jsxs("div",{className:"bg-emerald-50 text-emerald-700 px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest flex justify-between items-center",children:[" ",h.jsxs("span",{children:["Filtro Ativo: ",qr==="all"?"Todos os Membros":(Oa=v.find(R=>R.id===qr))==null?void 0:Oa.name]})," ",h.jsxs("span",{className:"opacity-60",children:[Ys.length," registros"]})," "]})," ",(re||j)&&h.jsxs("form",{className:`${Z} border-emerald-100`,onSubmit:R=>{var Nt;R.preventDefault();const _e=new FormData(R.currentTarget);Dn(ie.CELL_MEMBERS,{...Object.fromEntries(_e),joinedAt:j?(Nt=O.find(Kn=>Kn.id===j))==null?void 0:Nt.joinedAt:new Date().toLocaleDateString()})},children:[" ",h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[" ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Nome do Membro"})," ",h.jsx("input",{name:"name",required:!0,className:H,defaultValue:(Gr=O.find(R=>R.id===j))==null?void 0:Gr.name})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Telefone"})," ",h.jsx("input",{name:"phone",required:!0,className:H,defaultValue:(La=O.find(R=>R.id===j))==null?void 0:La.phone})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Aniversário"})," ",h.jsx("input",{name:"birthday",type:"date",required:!0,className:H,defaultValue:(mt=O.find(R=>R.id===j))==null?void 0:mt.birthday})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Vínculo de Célula"})," ",h.jsxs("select",{name:"cellId",className:H,defaultValue:(Ma=O.find(R=>R.id===j))==null?void 0:Ma.cellId,children:[" ",v.map(R=>h.jsx("option",{value:R.id,children:R.name},R.id))," "]})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Função / Papel"})," ",h.jsxs("select",{name:"role",className:H,defaultValue:(Kr=O.find(R=>R.id===j))==null?void 0:Kr.role,children:[" ",h.jsx("option",{value:"Membro",children:"Membro"})," ",h.jsx("option",{value:"Líder",children:"Líder de Célula"})," ",h.jsx("option",{value:"Co-Líder",children:"Auxiliar / Co-Líder"})," ",h.jsx("option",{value:"Visitante",children:"Visitante"})," "]})," "]})," "]})," ",h.jsxs("div",{className:"flex justify-end gap-3 mt-10",children:[" ",h.jsx("button",{type:"button",onClick:()=>{ue(!1),Q(null)},className:"px-6 py-3.5 font-bold text-slate-400",children:"Cancelar"})," ",h.jsxs("button",{type:"submit",disabled:tt,className:"bg-emerald-600 text-white px-10 py-3.5 rounded-2xl font-black",children:[" ",tt?"Salvando...":"Salvar Membro"," "]})," "]})," "]})," ",h.jsxs("div",{className:"bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-sm",children:[" ",h.jsxs("div",{className:"w-full",children:[" ",h.jsxs("table",{className:"w-full text-left",children:[" ",h.jsxs("thead",{className:"bg-slate-50 border-b border-slate-100",children:[" ",h.jsxs("tr",{children:[" ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Nome do Membro"})," ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Célula e Cargo"})," ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest text-right",children:"Ações"})," "]})," "]})," ",h.jsxs("tbody",{className:"divide-y divide-slate-50",children:[" ",Ys.length===0?h.jsx("tr",{children:h.jsx("td",{colSpan:3,className:"p-20 text-center text-slate-300 font-black italic uppercase",children:"Nenhum registro nesta categoria"})}):Ys.map(R=>{var _e;return h.jsxs("tr",{className:"hover:bg-slate-50/50 transition-colors",children:[" ",h.jsxs("td",{className:"px-8 py-6",children:[" ",h.jsx("div",{className:"font-black text-slate-900 text-lg",children:R.name})," ",h.jsxs("div",{className:"text-[11px] text-slate-400 flex gap-4 mt-1 font-bold",children:[" ",h.jsxs("span",{children:["📱 ",R.phone]})," ",h.jsxs("span",{children:["🎂 ",Gn(R.birthday)]})," "]})," "]})," ",h.jsxs("td",{className:"px-8 py-6",children:[" ",h.jsxs("div",{className:"flex flex-col gap-1.5",children:[" ",h.jsxs("span",{className:"text-xs font-black text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-xl w-fit",children:[" ",((_e=v.find(Nt=>Nt.id===R.cellId))==null?void 0:_e.name)||"N/A"," "]})," ",h.jsx("span",{className:"text-[10px] font-black text-slate-400 ml-2 uppercase tracking-widest",children:R.role})," "]})," "]})," ",h.jsxs("td",{className:"px-8 py-6 text-right",children:[" ",h.jsxs("div",{className:"flex justify-end gap-3",children:[" ",h.jsx("button",{type:"button",onClick:()=>Q(R.id),className:"p-3 text-slate-300 hover:text-indigo-600 transition-colors",children:h.jsx(Zr,{size:18})})," ",h.jsx("button",{type:"button",onClick:()=>ye({view:ie.CELL_MEMBERS,id:R.id}),className:"p-3 text-slate-300 hover:text-red-500 transition-colors",children:h.jsx(ei,{size:18})})," "]})," "]})," "]},R.id)})," "]})," "]})," "]})," "]})," "]});case ie.LEADERS:return h.jsxs("div",{className:"space-y-6",children:[" ",h.jsxs("header",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8",children:[" ",h.jsxs("div",{children:[" ",h.jsx("h2",{className:"text-3xl font-black text-slate-900 tracking-tight",children:"Cadastro de Líderes"})," ",h.jsx("p",{className:"text-slate-500 font-medium",children:"Base central de oficiais da igreja."})," "]})," ",h.jsxs("button",{type:"button",onClick:()=>{Q(null),ue(!0)},className:"bg-indigo-600 text-white px-6 py-3.5 rounded-2xl font-black flex items-center gap-2 shadow-xl hover:bg-indigo-700 transition-all",children:[" ",h.jsx(oo,{size:20})," Novo Líder "]})," "]})," ",(re||j)&&h.jsxs("form",{className:Z,onSubmit:R=>{var Nt;R.preventDefault();const _e=new FormData(R.currentTarget);Dn(ie.LEADERS,{...Object.fromEntries(_e),joinedAt:j?(Nt=P.find(Kn=>Kn.id===j))==null?void 0:Nt.joinedAt:new Date().toLocaleDateString()})},children:[" ",h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[" ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Nome Completo"})," ",h.jsx("input",{name:"name",required:!0,className:H,defaultValue:(Hr=P.find(R=>R.id===j))==null?void 0:Hr.name})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Telefone"})," ",h.jsx("input",{name:"phone",required:!0,className:H,defaultValue:(ic=P.find(R=>R.id===j))==null?void 0:ic.phone})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Data de Aniversário"})," ",h.jsx("input",{name:"birthday",type:"date",required:!0,className:H,defaultValue:(sc=P.find(R=>R.id===j))==null?void 0:sc.birthday})," "]})," ",h.jsxs("div",{className:"md:col-span-1",children:[" ",h.jsx("label",{className:ee,children:"Função Hierárquica"})," ",h.jsx("input",{name:"role",required:!0,className:H,defaultValue:(gr=P.find(R=>R.id===j))==null?void 0:gr.role,placeholder:"Ex: Pastor, Diácono, Presbítero..."})," "]})," "]})," ",h.jsxs("div",{className:"flex justify-end gap-3 mt-10",children:[" ",h.jsx("button",{type:"button",onClick:()=>{ue(!1),Q(null)},className:"px-6 py-3.5 font-bold text-slate-400",children:"Cancelar"})," ",h.jsxs("button",{type:"submit",disabled:tt,className:"bg-indigo-600 text-white px-10 py-3.5 rounded-2xl font-black shadow-lg",children:[" ",tt?"Salvando...":"Salvar Líder"," "]})," "]})," "]})," ",h.jsxs("div",{className:"bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-sm",children:[" ",h.jsxs("div",{className:"w-full",children:[" ",h.jsxs("table",{className:"w-full text-left",children:[" ",h.jsxs("thead",{className:"bg-slate-50 border-b border-slate-100",children:[" ",h.jsxs("tr",{children:[" ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Líder"})," ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Informações de Contato"})," ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest text-right",children:"Ações"})," "]})," "]})," ",h.jsxs("tbody",{className:"divide-y divide-slate-50",children:[" ",P.length===0?h.jsx("tr",{children:h.jsx("td",{colSpan:3,className:"p-20 text-center text-slate-300 font-black italic",children:"Nenhum líder cadastrado no sistema."})}):P.map(R=>h.jsxs("tr",{className:"hover:bg-slate-50/50 transition-colors",children:[" ",h.jsxs("td",{className:"px-8 py-6",children:[" ",h.jsx("div",{className:"font-black text-slate-900 text-lg",children:R.name})," ",h.jsx("span",{className:"text-[10px] font-black text-indigo-500 uppercase tracking-widest",children:R.role})," "]})," ",h.jsxs("td",{className:"px-8 py-6",children:[" ",h.jsxs("div",{className:"text-xs text-slate-400 font-bold flex flex-col gap-1",children:[" ",h.jsxs("span",{className:"flex items-center gap-2",children:["📱 ",R.phone]})," ",h.jsxs("span",{className:"flex items-center gap-2",children:["🎂 ",Gn(R.birthday)]})," "]})," "]})," ",h.jsxs("td",{className:"px-8 py-6 text-right",children:[" ",h.jsxs("div",{className:"flex justify-end gap-3",children:[" ",h.jsx("button",{type:"button",onClick:()=>Q(R.id),className:"p-3 text-slate-300 hover:text-indigo-600 transition-colors",children:h.jsx(Zr,{size:18})})," ",h.jsx("button",{type:"button",onClick:()=>ye({view:ie.LEADERS,id:R.id}),className:"p-3 text-slate-300 hover:text-red-500 transition-colors",children:h.jsx(ei,{size:18})})," "]})," "]})," "]},R.id))," "]})," "]})," "]})," "]})," "]});case ie.MINISTRIES:return h.jsxs("div",{className:"space-y-6",children:[" ",h.jsxs("header",{className:"flex justify-between items-center mb-8",children:[" ",h.jsxs("div",{children:[" ",h.jsx("h2",{className:"text-3xl font-black text-slate-900 tracking-tight",children:"Gestão de Ministérios"})," ",h.jsx("p",{className:"text-slate-500 font-medium",children:"Defina departamentos e atribua líderes oficiais."})," "]})," ",h.jsxs("button",{type:"button",onClick:()=>{Q(null),ue(!0)},className:"bg-indigo-600 text-white px-6 py-3.5 rounded-2xl font-black flex items-center gap-2 shadow-xl hover:bg-indigo-700 transition-all",children:[" ",h.jsx(oo,{size:20})," Adicionar Ministério "]})," "]})," ",(re||j)&&h.jsxs("form",{className:Z,onSubmit:R=>{R.preventDefault();const _e=new FormData(R.currentTarget);Dn(ie.MINISTRIES,Object.fromEntries(_e))},children:[" ",h.jsxs("div",{className:"space-y-6",children:[" ",h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[" ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Nome do Ministério"})," ",h.jsx("input",{name:"name",required:!0,className:H,defaultValue:(oc=et.find(R=>R.id===j))==null?void 0:oc.name,placeholder:"Ex: Louvor, Mídia, Infantil..."})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Líder Responsável"})," ",h.jsxs("select",{name:"leaderId",className:H,defaultValue:(ac=et.find(R=>R.id===j))==null?void 0:ac.leaderId,children:[" ",h.jsx("option",{value:"",children:"Selecione um líder cadastrado..."})," ",P.length===0?h.jsx("option",{value:"",disabled:!0,children:"Nenhum líder cadastrado"}):P.map(R=>h.jsx("option",{value:R.id,children:R.name},R.id))," "]})," "]})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Descrição"})," ",h.jsx("textarea",{name:"description",required:!0,className:`${H} h-32 rounded-3xl`,defaultValue:(Yi=et.find(R=>R.id===j))==null?void 0:Yi.description,placeholder:"Metas do departamento..."})," "]})," "]})," ",h.jsxs("div",{className:"flex justify-end gap-3 mt-10",children:[" ",h.jsx("button",{type:"button",onClick:()=>{ue(!1),Q(null)},className:"px-6 py-3.5 font-bold text-slate-400",children:"Cancelar"})," ",h.jsxs("button",{type:"submit",disabled:tt,className:"bg-indigo-600 text-white px-10 py-3.5 rounded-2xl font-black shadow-lg",children:[" ",tt?"Salvando...":"Salvar Ministério"," "]})," "]})," "]})," ",h.jsxs("div",{className:"bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-sm",children:[" ",h.jsxs("table",{className:"w-full text-left",children:[" ",h.jsxs("thead",{className:"bg-slate-50 border-b border-slate-100",children:[" ",h.jsxs("tr",{children:[" ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Departamento"})," ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Líder Responsável"})," ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest text-right",children:"Gerenciar"})," "]})," "]})," ",h.jsxs("tbody",{className:"divide-y divide-slate-50",children:[" ",et.length===0?h.jsx("tr",{children:h.jsx("td",{colSpan:3,className:"p-20 text-center text-slate-300 font-black italic uppercase",children:"Nenhum ministério configurado"})}):et.map(R=>{var _e;return h.jsxs("tr",{className:"hover:bg-slate-50/50 transition-colors",children:[" ",h.jsxs("td",{className:"px-8 py-6",children:[" ",h.jsxs("div",{className:"font-black text-slate-900 text-lg flex items-center gap-3",children:[" ",h.jsx(Jp,{className:"text-indigo-600",size:18})," ",R.name," "]})," "]})," ",h.jsxs("td",{className:"px-8 py-6",children:[" ",h.jsxs("div",{className:"flex items-center gap-2 text-sm font-bold text-indigo-600 bg-indigo-50 w-fit px-4 py-1.5 rounded-full",children:[" ",h.jsx(tm,{size:14})," ",((_e=P.find(Nt=>Nt.id===R.leaderId))==null?void 0:_e.name)||h.jsx("span",{className:"text-slate-300",children:"LÍDER NÃO VINCULADO"})," "]})," "]})," ",h.jsxs("td",{className:"px-8 py-6 text-right",children:[" ",h.jsxs("div",{className:"flex justify-end gap-3",children:[" ",h.jsx("button",{type:"button",onClick:()=>Q(R.id),className:"p-3 text-slate-300 hover:text-indigo-600 transition-colors",children:h.jsx(Zr,{size:18})})," ",h.jsx("button",{type:"button",onClick:()=>ye({view:ie.MINISTRIES,id:R.id}),className:"p-3 text-slate-300 hover:text-red-500 transition-colors",children:h.jsx(ei,{size:18})})," "]})," "]})," "]},R.id)})," "]})," "]})," "]})," "]});case ie.BIRTHDAYS:{const R=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],_e=new Date,Nt=_e.getMonth(),Kn=_e.getDate(),Qr=Ce=>{if(!Ce)return 0;const gt=Ce.split("-");return parseInt(gt[2],10)},qa=[...O.map(Ce=>{var gt;return{...Ce,type:"Membro",origin:((gt=v.find(Hn=>Hn.id===Ce.cellId))==null?void 0:gt.name)||"Sem Célula"}}),...P.map(Ce=>{var gt;return{...Ce,type:"Líder",origin:((gt=et.find(Hn=>Hn.id===Ce.ministryId))==null?void 0:gt.name)||"Sem Ministério"}})].filter(Ce=>{if(!Ce.birthday)return!1;const gt=Ce.birthday.split("-");return gt.length!==3?!1:parseInt(gt[1],10)-1===Nt}).sort((Ce,gt)=>Qr(Ce.birthday)-Qr(gt.birthday));return h.jsxs("div",{className:"space-y-8",children:[" ",h.jsxs("header",{className:"text-center mb-10",children:[" ",h.jsxs("div",{className:"inline-flex items-center justify-center p-4 bg-pink-50 text-pink-500 rounded-full mb-4 shadow-lg shadow-pink-100",children:[" ",h.jsx(Xp,{size:40})," "]})," ",h.jsxs("h2",{className:"text-4xl font-black text-slate-900 tracking-tight",children:["Aniversariantes de ",R[Nt]]})," ",h.jsx("p",{className:"text-slate-500 font-medium mt-2",children:"Celebre a vida da nossa comunidade!"})," "]})," ",h.jsxs("div",{className:"bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-sm",children:[" ",h.jsxs("div",{className:"w-full",children:[" ",h.jsxs("table",{className:"w-full text-left",children:[" ",h.jsxs("thead",{className:"bg-slate-50 border-b border-slate-100",children:[" ",h.jsxs("tr",{children:[" ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest text-center w-24",children:"Dia"})," ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Aniversariante"})," ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Tipo"})," ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest text-right",children:"Ação"})," "]})," "]})," ",h.jsxs("tbody",{className:"divide-y divide-slate-50",children:[" ",qa.length===0?h.jsx("tr",{children:h.jsx("td",{colSpan:4,className:"p-20 text-center text-slate-300 font-black italic uppercase",children:"Nenhum aniversariante neste mês"})}):qa.map((Ce,gt)=>{const Hn=Qr(Ce.birthday),to=Hn===Kn;return h.jsxs("tr",{className:`transition-colors ${to?"bg-pink-50/50":"hover:bg-slate-50/50"}`,children:[" ",h.jsxs("td",{className:"px-8 py-6 text-center",children:[" ",h.jsxs("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center font-black mx-auto ${to?"bg-pink-500 text-white shadow-lg shadow-pink-300":"bg-slate-100 text-slate-500"}`,children:[" ",Hn," "]})," "]})," ",h.jsxs("td",{className:"px-8 py-6",children:[" ",h.jsx("div",{className:"font-black text-slate-900 text-lg",children:Ce.name})," ",to&&h.jsx("span",{className:"text-[10px] font-black text-pink-500 uppercase tracking-widest animate-pulse",children:"É Hoje! 🎉"})," "]})," ",h.jsxs("td",{className:"px-8 py-6",children:[" ",h.jsxs("div",{className:"text-sm font-medium text-slate-500",children:[Ce.type," • ",Ce.origin]})," "]})," ",h.jsxs("td",{className:"px-8 py-6 text-right",children:[" ",h.jsxs("a",{href:`https://wa.me/55${Ce.phone.replace(/\D/g,"")}?text=Olá ${Ce.name}, parabéns pelo seu aniversário!`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-xl text-xs font-black uppercase hover:bg-emerald-100 transition-colors",children:[" ",h.jsx(eb,{size:16})," Parabenizar "]})," "]})," "]},`${Ce.id}-${gt}`)})," "]})," "]})," "]})," "]})," "]})}case ie.REPORTS:const Zi=[{id:"members",label:"Membros",desc:"Lista completa de membros e visitantes",icon:h.jsx(tT,{size:20})},{id:"cells",label:"Células",desc:"Registro de encontros e locais",icon:h.jsx(Zp,{size:20})},{id:"leaders",label:"Líderes",desc:"Cadastro de liderança oficial",icon:h.jsx(tm,{size:20})},{id:"ministries",label:"Ministérios",desc:"Departamentos e responsáveis",icon:h.jsx(Jp,{size:20})},{id:"announcements",label:"Avisos",desc:"Histórico de avisos e eventos",icon:h.jsx(Yp,{size:20})}];return h.jsxs("div",{className:"space-y-8",children:[" ",h.jsxs("header",{className:"text-center",children:[" ",h.jsx("h2",{className:"text-4xl font-black text-slate-900 mb-2 tracking-tight",children:"Relatórios da Liderança"})," ",h.jsx("p",{className:"text-slate-500 font-medium",children:"Dados consolidados."})," "]})," ",h.jsxs("div",{className:"bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-sm",children:[" ",h.jsxs("table",{className:"w-full text-left",children:[" ",h.jsxs("thead",{className:"bg-slate-50 border-b border-slate-100",children:[" ",h.jsxs("tr",{children:[" ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Tipo"})," ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Descrição"})," ",h.jsx("th",{className:"px-4 py-5 text-xs font-black text-slate-400 uppercase tracking-widest text-right",children:"Ações"})," "]})," "]})," ",h.jsxs("tbody",{className:"divide-y divide-slate-50",children:[" ",Zi.map(R=>h.jsxs("tr",{className:"hover:bg-slate-50/50 transition-colors",children:[" ",h.jsxs("td",{className:"px-8 py-6",children:[" ",h.jsxs("div",{className:"flex items-center gap-4",children:[" ",h.jsx("div",{className:"w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center",children:R.icon})," ",h.jsx("span",{className:"font-black text-slate-900 text-lg",children:R.label})," "]})," "]})," ",h.jsx("td",{className:"px-8 py-6",children:h.jsx("span",{className:"text-sm font-medium text-slate-500",children:R.desc})})," ",h.jsxs("td",{className:"px-4 py-6 text-right whitespace-nowrap",children:[" ",h.jsxs("div",{className:"flex justify-end gap-2",children:[" ",h.jsxs("button",{onClick:()=>Qi(R.id),className:"flex items-center gap-2 px-3 py-2 bg-emerald-50 text-emerald-600 rounded-xl font-bold hover:bg-emerald-100 transition-colors text-xs uppercase whitespace-nowrap",children:[h.jsx(KP,{size:16})," Excel"]})," ",h.jsxs("button",{onClick:()=>rc(R.id),className:"flex items-center gap-2 px-3 py-2 bg-red-50 text-red-600 rounded-xl font-bold hover:bg-red-100 transition-colors text-xs uppercase whitespace-nowrap",children:[h.jsx(ZE,{size:16})," PDF"]})," "]})," "]})," "]},R.id))," "]})," "]})," "]})," "]});case ie.STUDIES:return h.jsxs("div",{className:"space-y-6",children:[" ",h.jsxs("header",{className:"flex justify-between items-center mb-8",children:[" ",h.jsxs("div",{children:[" ",h.jsx("h2",{className:"text-3xl font-black text-slate-900 tracking-tight",children:"Estudos Bíblicos"})," ",h.jsx("p",{className:"text-slate-500 font-medium",children:"Material de apoio em PDF."})," "]})," ",h.jsxs("button",{type:"button",onClick:()=>{Q(null),ue(!0),$r(null)},className:"bg-indigo-600 text-white px-6 py-3.5 rounded-2xl font-black flex items-center gap-2 shadow-xl hover:bg-indigo-700 transition-all",children:[" ",h.jsx(oo,{size:20})," Novo Estudo "]})," "]})," ",(re||j)&&h.jsxs("form",{className:Z,onSubmit:R=>{R.preventDefault();const _e=new FormData(R.currentTarget);Dn(ie.STUDIES,Object.fromEntries(_e))},children:[" ",h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[" ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Título do Estudo"})," ",h.jsx("input",{name:"title",ref:ba,required:!0,className:H,defaultValue:(ja=F.find(R=>R.id===j))==null?void 0:ja.title})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Data do Estudo"})," ",h.jsx("input",{name:"date",type:"date",required:!0,className:H,defaultValue:(Js=F.find(R=>R.id===j))==null?void 0:Js.date})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Referência Bíblica"})," ",h.jsx("input",{name:"reference",ref:ec,required:!0,className:H,defaultValue:(Ji=F.find(R=>R.id===j))==null?void 0:Ji.reference,placeholder:"Ex: João 3:16"})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Sugestão de Louvor"})," ",h.jsx("input",{name:"suggestedPraise",className:H,defaultValue:(Vn=F.find(R=>R.id===j))==null?void 0:Vn.suggestedPraise,placeholder:"Ex: Bondade de Deus"})," "]})," ",h.jsxs("div",{className:"md:col-span-2",children:[" ",h.jsx("label",{className:ee,children:"Roteiro / Resumo do Estudo"})," ",h.jsx("textarea",{name:"summary",ref:rf,className:`${H} h-32 rounded-3xl`,defaultValue:(Fa=F.find(R=>R.id===j))==null?void 0:Fa.summary,placeholder:"Digite o roteiro do estudo..."})," "]})," ",h.jsxs("div",{className:"md:col-span-2",children:[" ",h.jsx("label",{className:ee,children:"Arquivo PDF (Opcional)"})," ",h.jsxs("div",{className:"relative",children:[" ",h.jsx("input",{type:"file",accept:"application/pdf",ref:Pa,onChange:R=>{R.target.files&&R.target.files[0]&&$r(R.target.files[0])},className:"hidden",id:"pdf-upload"})," ",h.jsxs("label",{htmlFor:"pdf-upload",className:"w-full bg-slate-50 border border-slate-200 border-dashed rounded-2xl px-4 py-3.5 flex items-center justify-center gap-2 cursor-pointer hover:bg-slate-100 transition-colors text-sm font-medium text-slate-500",children:[" ",h.jsx(tb,{size:18})," ",pr?pr.name:j&&((Ua=F.find(R=>R.id===j))!=null&&Ua.pdfName)?(Xs=F.find(R=>R.id===j))==null?void 0:Xs.pdfName:"Clique para selecionar PDF"," "]})," "]})," "]})," "]})," ",h.jsxs("div",{className:"flex justify-end gap-3 mt-10",children:[" ",h.jsx("button",{type:"button",onClick:()=>{ue(!1),Q(null),$r(null)},className:"px-6 py-3.5 font-bold text-slate-400",children:"Cancelar"})," ",h.jsxs("button",{type:"submit",disabled:tt,className:"bg-indigo-600 text-white px-10 py-3.5 rounded-2xl font-black shadow-lg",children:[" ",tt?"Salvando...":"Salvar Estudo"," "]})," "]})," "]},j||"new")," ",h.jsxs("div",{className:"bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-sm",children:[" ",h.jsxs("div",{className:"w-full",children:[" ",h.jsxs("table",{className:"w-full text-left border-collapse",children:[" ",h.jsxs("thead",{className:"bg-slate-50 border-b border-slate-100",children:[" ",h.jsxs("tr",{children:[" ",h.jsx("th",{className:"px-4 py-3 text-xs font-black text-slate-400 uppercase tracking-widest w-24",children:"Data"})," ",h.jsx("th",{className:"px-4 py-3 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Estudo"})," ",h.jsx("th",{className:"px-4 py-3 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Ref."})," ",h.jsx("th",{className:"px-4 py-3 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Louvor"})," ",h.jsx("th",{className:"px-4 py-3 text-xs font-black text-slate-400 uppercase tracking-widest text-right",children:"Ações"})," "]})," "]})," ",h.jsxs("tbody",{className:"divide-y divide-slate-50",children:[" ",F.length===0?h.jsx("tr",{children:h.jsx("td",{colSpan:5,className:"p-10 text-center text-slate-300 font-black italic",children:"Nenhum estudo cadastrado."})}):F.map(R=>h.jsxs("tr",{className:"hover:bg-slate-50/50 transition-colors",children:[" ",h.jsxs("td",{className:"px-4 py-3 align-top",children:[" ",h.jsx("span",{className:"text-xs font-bold text-slate-400",children:Gn(R.date)})," "]})," ",h.jsxs("td",{className:"px-4 py-3 align-top",children:[" ",h.jsxs("div",{className:"font-black text-slate-900 text-sm flex items-center gap-2",children:[h.jsx(JE,{size:14,className:"text-indigo-600 shrink-0"}),R.title]})," ",R.summary&&h.jsx("div",{className:"mt-1 text-[10px] text-slate-500 line-clamp-2 italic",children:R.summary})," ",R.pdfName&&h.jsx("div",{className:"mt-1 flex items-center gap-1 text-[10px] text-red-500 font-bold bg-red-50 w-fit px-2 py-0.5 rounded",children:"PDF ANEXADO"})," "]})," ",h.jsxs("td",{className:"px-4 py-3 align-top",children:[" ",h.jsx("div",{className:"text-xs font-bold text-indigo-500 bg-indigo-50 w-fit px-2 py-0.5 rounded italic",children:R.reference})," "]})," ",h.jsxs("td",{className:"px-4 py-3 align-top",children:[" ",h.jsxs("div",{className:"flex items-center gap-1 text-xs font-medium text-slate-500",children:[h.jsx(em,{size:12,className:"text-slate-400"})," ",R.suggestedPraise||"-"]})," "]})," ",h.jsxs("td",{className:"px-4 py-3 align-top text-right",children:[" ",h.jsxs("div",{className:"flex justify-end gap-1",children:[" ",R.pdfUrl?h.jsx("a",{href:R.pdfUrl,download:R.pdfName||"estudo.pdf",className:"p-2 text-emerald-600 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-all",title:"Baixar PDF",children:h.jsx(qP,{size:14})}):h.jsx("span",{className:"p-2 text-slate-300",title:"Sem PDF",children:h.jsx($P,{size:14})})," ",h.jsx("button",{type:"button",onClick:()=>Q(R.id),className:"p-2 text-slate-400 hover:text-indigo-600 bg-slate-50 rounded-xl transition-colors",children:h.jsx(Zr,{size:14})})," ",h.jsx("button",{type:"button",onClick:()=>ye({view:ie.STUDIES,id:R.id}),className:"p-2 text-slate-400 hover:text-red-500 bg-slate-50 rounded-xl transition-colors",children:h.jsx(ei,{size:14})})," "]})," "]})," "]},R.id))," "]})," "]})," "]})," "]})," "]});case ie.ANNOUNCEMENTS:return h.jsxs("div",{className:"space-y-6",children:[" ",h.jsxs("header",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8",children:[" ",h.jsxs("div",{children:[" ",h.jsx("h2",{className:"text-3xl font-black text-slate-900 tracking-tight",children:"Quadro de Avisos"})," ",h.jsx("p",{className:"text-slate-500 font-medium",children:"Comunicação oficial."})," "]})," ",h.jsxs("div",{className:"flex flex-col md:flex-row gap-2 w-full md:w-auto",children:[" ",h.jsx("input",{type:"date",placeholder:"Filtrar data...",value:Qs,onChange:R=>Na(R.target.value),className:`${H} !py-3.5 !w-full md:!w-48`})," ",h.jsxs("button",{type:"button",onClick:()=>{Q(null),ue(!0)},className:"bg-indigo-600 text-white px-6 py-3.5 rounded-2xl font-black flex items-center justify-center gap-2 shadow-xl hover:bg-indigo-700 transition-all",children:[" ",h.jsx(oo,{size:20})," Novo Aviso "]})," "]})," "]})," ",(re||j)&&h.jsxs("form",{className:Z,onSubmit:R=>{R.preventDefault();const _e=new FormData(R.currentTarget);Dn(ie.ANNOUNCEMENTS,{...Object.fromEntries(_e),date:new Date().toLocaleDateString()})},children:[" ",h.jsxs("div",{className:"space-y-6",children:[" ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Título do Aviso"})," ",h.jsx("input",{name:"title",required:!0,className:H,defaultValue:(Zs=L.find(R=>R.id===j))==null?void 0:Zs.title})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Categoria"})," ",h.jsxs("select",{name:"category",className:H,defaultValue:(Ba=L.find(R=>R.id===j))==null?void 0:Ba.category,children:[" ",h.jsx("option",{value:"Aviso",children:"Aviso Geral"})," ",h.jsx("option",{value:"Evento",children:"Evento"})," ",h.jsx("option",{value:"Celebração",children:"Celebração"})," "]})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Conteúdo"})," ",h.jsx("textarea",{name:"content",required:!0,className:`${H} h-32 rounded-3xl`,defaultValue:(za=L.find(R=>R.id===j))==null?void 0:za.content})," "]})," "]})," ",h.jsxs("div",{className:"flex justify-end gap-3 mt-10",children:[" ",h.jsx("button",{type:"button",onClick:()=>{ue(!1),Q(null)},className:"px-6 py-3.5 font-bold text-slate-400",children:"Cancelar"})," ",h.jsxs("button",{type:"submit",disabled:tt,className:"bg-indigo-600 text-white px-10 py-3.5 rounded-2xl font-black shadow-lg",children:[" ",tt?"Salvando...":"Salvar Aviso"," "]})," "]})," "]})," ",h.jsxs("div",{className:"flex flex-col gap-3",children:[" ",nc.length===0?h.jsx("div",{className:"p-20 text-center text-slate-300 font-black italic",children:"Nenhum aviso encontrado."}):nc.map(R=>{const _e=R.date.split("/"),Nt=_e[0]||"DD",Kn=_e[1]||"MM",Qr=_e[2]||"YYYY";return h.jsxs("div",{className:"bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-4 hover:border-indigo-100 transition-all shadow-sm",children:[" ",h.jsxs("div",{className:"shrink-0 text-center w-16 p-2 bg-slate-50 rounded-xl border border-slate-100",children:[" ",h.jsxs("div",{className:"text-[10px] font-black uppercase text-slate-400",children:[Kn,"/",Qr]})," ",h.jsx("div",{className:"text-xl font-black text-slate-900",children:Nt})," "]})," ",h.jsxs("div",{className:"flex-1 min-w-0",children:[" ",h.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[" ",h.jsx("h3",{className:"font-black text-slate-900 text-lg truncate",children:R.title})," ",h.jsx("span",{className:`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wide shrink-0 ${R.category==="Evento"?"bg-emerald-50 text-emerald-600":R.category==="Celebração"?"bg-amber-50 text-amber-600":"bg-slate-100 text-slate-500"}`,children:R.category})," "]})," ",h.jsx("p",{className:"text-sm text-slate-500 line-clamp-1 truncate",children:R.content})," "]})," ",h.jsxs("div",{className:"flex gap-1 shrink-0",children:[" ",h.jsx("button",{onClick:()=>ln(R),className:"p-2 text-indigo-600 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-all",title:"Ver completo",children:h.jsx(GP,{size:18})})," ",h.jsx("button",{onClick:()=>Q(R.id),className:"p-2 text-slate-300 hover:text-indigo-600 transition-colors",children:h.jsx(Zr,{size:18})})," ",h.jsx("button",{onClick:()=>ye({view:ie.ANNOUNCEMENTS,id:R.id}),className:"p-2 text-slate-300 hover:text-red-500 transition-colors",children:h.jsx(ei,{size:18})})," "]})," "]},R.id)})," "]})," "]});case ie.PASTOR_WORD:return h.jsxs("div",{className:"space-y-6",children:[" ",h.jsxs("header",{className:"mb-8",children:[" ",h.jsx("h2",{className:"text-3xl font-black text-slate-900 tracking-tight",children:"Palavra Pastoral"})," ",h.jsx("p",{className:"text-slate-500 font-medium",children:"Compartilhe sua mensagem semanal."})," "]})," ",h.jsxs("div",{className:Z,children:[" ",h.jsxs("h3",{className:"text-lg font-bold mb-4 flex items-center gap-2",children:[h.jsx(Zr,{className:"text-indigo-500"})," Adicionar Nova Palavra"]})," ",h.jsxs("div",{className:"space-y-4",children:[" ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Tema / Título"})," ",h.jsx("input",{value:Wr,onChange:R=>Ca(R.target.value),className:H,placeholder:"Ex: Esperança em tempos difíceis"})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Mensagem"})," ",h.jsx("textarea",{value:nt,onChange:R=>pt(R.target.value),className:`${H} h-48 rounded-3xl mb-4`,placeholder:"Escreva sua mensagem aqui..."})," "]})," ",h.jsxs("div",{className:"flex justify-end",children:[" ",h.jsxs("button",{onClick:async()=>{!Wr||!nt||(await Dn(ie.PASTOR_WORD,{theme:Wr,content:nt,date:new Date().toLocaleDateString()}),pt(""),Ca(""))},disabled:!Wr||!nt||tt,className:"bg-emerald-600 text-white px-8 py-3 rounded-2xl font-black hover:bg-emerald-700 transition-all shadow-lg disabled:opacity-50",children:[" ",tt?"Enviando...":"Salvar Mensagem"," "]})," "]})," "]})," "]})," ",h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[" ",x.map(R=>h.jsxs("div",{className:"bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer group",onClick:()=>In(R),children:[" ",h.jsxs("div",{className:"flex justify-between items-start mb-4",children:[" ",h.jsx("span",{className:"text-xs font-bold text-slate-400",children:R.date})," ",h.jsx("button",{onClick:_e=>{_e.stopPropagation(),ye({view:ie.PASTOR_WORD,id:R.id})},className:"text-slate-300 hover:text-red-500 transition-colors",children:h.jsx(ei,{size:16})})," "]})," ",h.jsx("h4",{className:"font-black text-lg text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors",children:R.theme})," ",h.jsx("p",{className:"text-sm text-slate-500 line-clamp-3",children:R.content})," "]},R.id))," "]})," "]});case ie.MUSIC_PLAYER:return h.jsxs("div",{className:"space-y-6",children:[" ",h.jsxs("header",{className:"flex justify-between items-center mb-8",children:[" ",h.jsxs("div",{children:[" ",h.jsx("h2",{className:"text-3xl font-black text-slate-900 tracking-tight",children:"Repertório de Louvor"})," ",h.jsx("p",{className:"text-slate-500 font-medium",children:"Setlist e referências."})," "]})," ",h.jsxs("button",{type:"button",onClick:()=>{Q(null),ue(!0)},className:"bg-indigo-600 text-white px-6 py-3.5 rounded-2xl font-black flex items-center gap-2 shadow-xl hover:bg-indigo-700 transition-all",children:[" ",h.jsx(oo,{size:20})," Nova Música "]})," "]})," ",(re||j)&&h.jsxs("form",{className:Z,onSubmit:R=>{R.preventDefault();const _e=new FormData(R.currentTarget);Dn(ie.MUSIC_PLAYER,Object.fromEntries(_e))},children:[" ",h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[" ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Título da Música"})," ",h.jsx("input",{name:"title",required:!0,className:H,defaultValue:(lc=_.find(R=>R.id===j))==null?void 0:lc.title})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Artista / Banda"})," ",h.jsx("input",{name:"artist",required:!0,className:H,defaultValue:(Xi=_.find(R=>R.id===j))==null?void 0:Xi.artist})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Link Spotify"})," ",h.jsx("input",{name:"spotifyUrl",className:H,defaultValue:($a=_.find(R=>R.id===j))==null?void 0:$a.spotifyUrl,placeholder:"https://open.spotify.com/..."})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:ee,children:"Link YouTube"})," ",h.jsx("input",{name:"youtubeUrl",className:H,defaultValue:(eo=_.find(R=>R.id===j))==null?void 0:eo.youtubeUrl,placeholder:"https://youtube.com/..."})," "]})," "]})," ",h.jsxs("div",{className:"flex justify-end gap-3 mt-10",children:[" ",h.jsx("button",{type:"button",onClick:()=>{ue(!1),Q(null)},className:"px-6 py-3.5 font-bold text-slate-400",children:"Cancelar"})," ",h.jsxs("button",{type:"submit",disabled:tt,className:"bg-indigo-600 text-white px-10 py-3.5 rounded-2xl font-black shadow-lg",children:[" ",tt?"Salvando...":"Salvar Música"," "]})," "]})," "]})," ",h.jsxs("div",{className:"bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-sm",children:[" ",h.jsxs("div",{className:"divide-y divide-slate-50",children:[" ",_.length===0?h.jsx("div",{className:"p-20 text-center text-slate-300 font-black italic",children:"Nenhuma música cadastrada."}):_.map(R=>h.jsxs("div",{className:"p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors group",children:[" ",h.jsxs("div",{className:"flex items-center gap-4",children:[" ",h.jsxs("div",{className:"w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shadow-sm",children:[" ",h.jsx(em,{size:20})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("div",{className:"font-black text-slate-900 text-lg",children:R.title})," ",h.jsx("div",{className:"text-sm font-medium text-slate-500",children:R.artist})," "]})," "]})," ",h.jsxs("div",{className:"flex items-center gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity",children:[" ",R.spotifyUrl&&h.jsxs("a",{href:R.spotifyUrl,target:"_blank",rel:"noreferrer",className:"p-2 text-green-600 bg-green-50 rounded-xl hover:bg-green-100 transition-colors",title:"Abrir no Spotify",children:[" ",h.jsx(WP,{size:18})," "]})," ",R.youtubeUrl&&h.jsxs("a",{href:R.youtubeUrl,target:"_blank",rel:"noreferrer",className:"p-2 text-red-600 bg-red-50 rounded-xl hover:bg-red-100 transition-colors",title:"Ver no YouTube",children:[" ",h.jsx(ib,{size:18})," "]})," ",h.jsx("div",{className:"w-px h-6 bg-slate-200 mx-2"})," ",h.jsx("button",{onClick:()=>Q(R.id),className:"p-2 text-slate-300 hover:text-indigo-600 transition-colors",children:h.jsx(Zr,{size:18})})," ",h.jsx("button",{onClick:()=>ye({view:ie.MUSIC_PLAYER,id:R.id}),className:"p-2 text-slate-300 hover:text-red-500 transition-colors",children:h.jsx(ei,{size:18})})," "]})," "]},R.id))," "]})," "]})," "]})}};return t?h.jsx("div",{className:"min-h-screen bg-indigo-950 flex items-center justify-center text-white",children:h.jsx(jf,{size:48,className:"animate-spin text-indigo-500"})}):n?h.jsxs("div",{className:"flex bg-slate-100 min-h-screen font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-700",children:[h.jsx(sb,{currentView:b,onNavigate:N,onLogout:E}),h.jsx("main",{className:"flex-1 md:ml-64 p-4 md:p-8 overflow-y-auto h-screen scroll-smooth relative",children:h.jsxs("div",{className:"max-w-7xl mx-auto pb-20",children:[h.jsxs("div",{className:"md:hidden flex items-center justify-between mb-6",children:[h.jsx("h1",{className:"font-black text-xl tracking-tighter italic text-indigo-900",children:"Liderança IRV"}),h.jsx("button",{className:"p-2 bg-indigo-600 text-white rounded-lg",children:h.jsx(QP,{size:20})})]}),of()]})}),Ie&&h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200",children:h.jsxs("div",{className:"bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl animate-in zoom-in-95 duration-200",children:[h.jsx("div",{className:"w-12 h-12 bg-red-100 text-red-500 rounded-2xl flex items-center justify-center mb-4 mx-auto",children:h.jsx(Gv,{size:24})}),h.jsx("h3",{className:"text-xl font-black text-center text-slate-900 mb-2",children:"Confirmar Exclusão"}),h.jsx("p",{className:"text-slate-500 text-center text-sm mb-6",children:"Tem certeza que deseja remover este item do Banco de Dados? Ação irreversível."}),h.jsxs("div",{className:"flex gap-3",children:[h.jsx("button",{onClick:()=>ye(null),className:"flex-1 py-3 font-bold text-slate-400 hover:bg-slate-50 rounded-xl transition-colors",children:"Cancelar"}),h.jsx("button",{onClick:Va,className:"flex-1 py-3 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 shadow-lg shadow-red-500/30 transition-all",children:"Excluir"})]})]})}),Cn&&h.jsxs("div",{className:`fixed top-4 right-4 z-50 p-4 rounded-2xl shadow-2xl flex items-center gap-4 max-w-md animate-in slide-in-from-right duration-300 border ${Cn.type==="success"?"bg-emerald-50 border-emerald-100 text-emerald-800":"bg-white border-slate-100 text-slate-900"}`,children:[h.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${Cn.type==="success"?"bg-emerald-100 text-emerald-600":"bg-amber-100 text-amber-600"}`,children:Cn.title.includes("Aniversariantes")?h.jsx(Xp,{size:20}):Cn.type==="success"?h.jsx(BP,{size:20}):h.jsx(Yp,{size:20})}),h.jsxs("div",{children:[h.jsx("h4",{className:"font-black text-sm",children:Cn.title}),h.jsx("p",{className:"text-xs opacity-80 mt-0.5",children:Cn.message})]}),h.jsx("button",{onClick:()=>En(null),className:"text-current opacity-40 hover:opacity-100",children:h.jsx(Ff,{size:16})})]}),Yt&&h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in",children:h.jsxs("div",{className:"bg-white rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden animate-in zoom-in-95",children:[h.jsxs("div",{className:"p-6 border-b border-slate-100 flex justify-between items-center bg-indigo-50",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("div",{className:"p-2 bg-white rounded-xl text-indigo-600",children:h.jsx(eT,{size:20})}),h.jsxs("div",{children:[h.jsx("p",{className:"text-xs font-bold text-indigo-400 uppercase tracking-widest",children:"Palavra Pastoral"}),h.jsx("h3",{className:"font-black text-xl text-indigo-900",children:Yt.theme})]})]}),h.jsx("button",{onClick:()=>In(null),className:"p-2 bg-white/50 hover:bg-white rounded-xl transition-colors text-indigo-900",children:h.jsx(Ff,{size:20})})]}),h.jsxs("div",{className:"p-8 overflow-y-auto max-h-[60vh]",children:[h.jsx("p",{className:"text-slate-600 leading-relaxed whitespace-pre-wrap text-lg font-serif",children:Yt.content}),h.jsxs("p",{className:"mt-8 text-right text-xs font-black text-slate-300 uppercase tracking-widest",children:["Gerado em ",Yt.date]})]})]})}),Et&&h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in",children:h.jsxs("div",{className:"bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95",children:[h.jsxs("div",{className:"p-6 border-b border-slate-100 flex justify-between items-start",children:[h.jsxs("div",{children:[h.jsx("span",{className:`px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wide ${Et.category==="Evento"?"bg-emerald-100 text-emerald-700":Et.category==="Celebração"?"bg-amber-100 text-amber-700":"bg-slate-100 text-slate-600"}`,children:Et.category}),h.jsx("h3",{className:"font-black text-2xl text-slate-900 mt-3 leading-tight",children:Et.title}),h.jsx("p",{className:"text-xs font-bold text-slate-400 mt-1",children:Et.date})]}),h.jsx("button",{onClick:()=>ln(null),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors text-slate-400 hover:text-slate-900",children:h.jsx(Ff,{size:20})})]}),h.jsx("div",{className:"p-6 overflow-y-auto max-h-[60vh]",children:h.jsx("p",{className:"text-slate-600 leading-relaxed whitespace-pre-wrap",children:Et.content})}),h.jsx("div",{className:"p-4 bg-slate-50 border-t border-slate-100 flex justify-end",children:h.jsx("button",{onClick:()=>ln(null),className:"px-6 py-2 bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-700 transition-all",children:"Entendido"})})]})})]}):h.jsx("div",{className:"min-h-screen bg-slate-100 flex items-center justify-center p-4",children:h.jsxs("div",{className:"bg-white p-8 md:p-12 rounded-[40px] shadow-2xl max-w-md w-full border border-slate-200",children:[h.jsxs("div",{className:"flex flex-col items-center mb-8",children:[h.jsx("div",{className:"p-4 bg-indigo-600 rounded-3xl shadow-xl shadow-indigo-600/30 mb-6",children:h.jsx(XE,{className:"text-white",size:40})}),h.jsx("h1",{className:"text-3xl font-black text-indigo-950 tracking-tight text-center",children:"Liderança IRV"}),h.jsx("p",{className:"text-slate-500 font-medium text-center mt-2",children:"Acesso restrito à liderança."})]}),h.jsxs("form",{onSubmit:g,className:"space-y-6",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-black text-slate-400 uppercase mb-2 tracking-[0.1em]",children:"Email"}),h.jsx("input",{type:"email",required:!0,value:i,onChange:Z=>s(Z.target.value),className:"w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-400 font-medium transition-all",placeholder:"seu@email.com"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-black text-slate-400 uppercase mb-2 tracking-[0.1em]",children:"Senha"}),h.jsxs("div",{className:"relative",children:[h.jsx("input",{type:"password",required:!0,value:o,onChange:Z=>a(Z.target.value),className:"w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-400 font-medium transition-all",placeholder:"••••••••"}),h.jsx(YP,{className:"absolute right-5 top-1/2 -translate-y-1/2 text-slate-400",size:18})]})]}),u&&h.jsxs("div",{className:"p-4 bg-red-50 text-red-600 text-sm font-bold rounded-2xl flex items-center gap-2",children:[h.jsx(Gv,{size:18})," ",u]}),h.jsx("button",{type:"submit",disabled:f,className:"w-full bg-indigo-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-indigo-600/20 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed",children:f?h.jsx(jf,{className:"animate-spin"}):h.jsxs(h.Fragment,{children:[h.jsx(JP,{size:20})," Entrar"]})})]})]})})},KA=document.getElementById("root");if(!KA)throw new Error("Could not find root element to mount to");const aj=rp.createRoot(KA);aj.render(h.jsx(RR.StrictMode,{children:h.jsx(oj,{})}));
