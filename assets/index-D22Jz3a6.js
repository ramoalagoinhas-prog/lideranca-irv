(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function dR(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var z0={exports:{}},lh={},B0={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ku=Symbol.for("react.element"),hR=Symbol.for("react.portal"),fR=Symbol.for("react.fragment"),pR=Symbol.for("react.strict_mode"),mR=Symbol.for("react.profiler"),gR=Symbol.for("react.provider"),yR=Symbol.for("react.context"),_R=Symbol.for("react.forward_ref"),vR=Symbol.for("react.suspense"),wR=Symbol.for("react.memo"),IR=Symbol.for("react.lazy"),F_=Symbol.iterator;function ER(n){return n===null||typeof n!="object"?null:(n=F_&&n[F_]||n["@@iterator"],typeof n=="function"?n:null)}var $0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q0=Object.assign,W0={};function fa(n,e,t){this.props=n,this.context=e,this.refs=W0,this.updater=t||$0}fa.prototype.isReactComponent={};fa.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};fa.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function G0(){}G0.prototype=fa.prototype;function Um(n,e,t){this.props=n,this.context=e,this.refs=W0,this.updater=t||$0}var zm=Um.prototype=new G0;zm.constructor=Um;q0(zm,fa.prototype);zm.isPureReactComponent=!0;var U_=Array.isArray,K0=Object.prototype.hasOwnProperty,Bm={current:null},H0={key:!0,ref:!0,__self:!0,__source:!0};function Q0(n,e,t){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)K0.call(e,r)&&!H0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(n&&n.defaultProps)for(r in a=n.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ku,type:n,key:s,ref:o,props:i,_owner:Bm.current}}function TR(n,e){return{$$typeof:ku,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function $m(n){return typeof n=="object"&&n!==null&&n.$$typeof===ku}function xR(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var z_=/\/+/g;function pf(n,e){return typeof n=="object"&&n!==null&&n.key!=null?xR(""+n.key):e.toString(36)}function Kc(n,e,t,r,i){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case ku:case hR:o=!0}}if(o)return o=n,i=i(o),n=r===""?"."+pf(o,0):r,U_(i)?(t="",n!=null&&(t=n.replace(z_,"$&/")+"/"),Kc(i,e,t,"",function(c){return c})):i!=null&&($m(i)&&(i=TR(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(z_,"$&/")+"/")+n)),e.push(i)),1;if(o=0,r=r===""?".":r+":",U_(n))for(var a=0;a<n.length;a++){s=n[a];var u=r+pf(s,a);o+=Kc(s,e,t,u,i)}else if(u=ER(n),typeof u=="function")for(n=u.call(n),a=0;!(s=n.next()).done;)s=s.value,u=r+pf(s,a++),o+=Kc(s,e,t,u,i);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ec(n,e,t){if(n==null)return n;var r=[],i=0;return Kc(n,r,"","",function(s){return e.call(t,s,i++)}),r}function SR(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Xt={current:null},Hc={transition:null},AR={ReactCurrentDispatcher:Xt,ReactCurrentBatchConfig:Hc,ReactCurrentOwner:Bm};function Y0(){throw Error("act(...) is not supported in production builds of React.")}fe.Children={map:Ec,forEach:function(n,e,t){Ec(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Ec(n,function(){e++}),e},toArray:function(n){return Ec(n,function(e){return e})||[]},only:function(n){if(!$m(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};fe.Component=fa;fe.Fragment=fR;fe.Profiler=mR;fe.PureComponent=Um;fe.StrictMode=pR;fe.Suspense=vR;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AR;fe.act=Y0;fe.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var r=q0({},n.props),i=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Bm.current),e.key!==void 0&&(i=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(u in e)K0.call(e,u)&&!H0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ku,type:n.type,key:i,ref:s,props:r,_owner:o}};fe.createContext=function(n){return n={$$typeof:yR,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:gR,_context:n},n.Consumer=n};fe.createElement=Q0;fe.createFactory=function(n){var e=Q0.bind(null,n);return e.type=n,e};fe.createRef=function(){return{current:null}};fe.forwardRef=function(n){return{$$typeof:_R,render:n}};fe.isValidElement=$m;fe.lazy=function(n){return{$$typeof:IR,_payload:{_status:-1,_result:n},_init:SR}};fe.memo=function(n,e){return{$$typeof:wR,type:n,compare:e===void 0?null:e}};fe.startTransition=function(n){var e=Hc.transition;Hc.transition={};try{n()}finally{Hc.transition=e}};fe.unstable_act=Y0;fe.useCallback=function(n,e){return Xt.current.useCallback(n,e)};fe.useContext=function(n){return Xt.current.useContext(n)};fe.useDebugValue=function(){};fe.useDeferredValue=function(n){return Xt.current.useDeferredValue(n)};fe.useEffect=function(n,e){return Xt.current.useEffect(n,e)};fe.useId=function(){return Xt.current.useId()};fe.useImperativeHandle=function(n,e,t){return Xt.current.useImperativeHandle(n,e,t)};fe.useInsertionEffect=function(n,e){return Xt.current.useInsertionEffect(n,e)};fe.useLayoutEffect=function(n,e){return Xt.current.useLayoutEffect(n,e)};fe.useMemo=function(n,e){return Xt.current.useMemo(n,e)};fe.useReducer=function(n,e,t){return Xt.current.useReducer(n,e,t)};fe.useRef=function(n){return Xt.current.useRef(n)};fe.useState=function(n){return Xt.current.useState(n)};fe.useSyncExternalStore=function(n,e,t){return Xt.current.useSyncExternalStore(n,e,t)};fe.useTransition=function(){return Xt.current.useTransition()};fe.version="18.3.1";B0.exports=fe;var se=B0.exports;const RR=dR(se);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kR=se,bR=Symbol.for("react.element"),PR=Symbol.for("react.fragment"),NR=Object.prototype.hasOwnProperty,CR=kR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,DR={key:!0,ref:!0,__self:!0,__source:!0};function J0(n,e,t){var r,i={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)NR.call(e,r)&&!DR.hasOwnProperty(r)&&(i[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:bR,type:n,key:s,ref:o,props:i,_owner:CR.current}}lh.Fragment=PR;lh.jsx=J0;lh.jsxs=J0;z0.exports=lh;var h=z0.exports,sp={},X0={exports:{}},En={},Z0={exports:{}},eI={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(H,ie){var $=H.length;H.push(ie);e:for(;0<$;){var ae=$-1>>>1,ye=H[ae];if(0<i(ye,ie))H[ae]=ie,H[$]=ye,$=ae;else break e}}function t(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var ie=H[0],$=H.pop();if($!==ie){H[0]=$;e:for(var ae=0,ye=H.length,de=ye>>>1;ae<de;){var fn=2*(ae+1)-1,at=H[fn],en=fn+1,Sn=H[en];if(0>i(at,$))en<ye&&0>i(Sn,at)?(H[ae]=Sn,H[en]=$,ae=en):(H[ae]=at,H[fn]=$,ae=fn);else if(en<ye&&0>i(Sn,$))H[ae]=Sn,H[en]=$,ae=en;else break e}}return ie}function i(H,ie){var $=H.sortIndex-ie.sortIndex;return $!==0?$:H.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var u=[],c=[],f=1,m=null,g=3,E=!1,b=!1,P=!1,M=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(H){for(var ie=t(c);ie!==null;){if(ie.callback===null)r(c);else if(ie.startTime<=H)r(c),ie.sortIndex=ie.expirationTime,e(u,ie);else break;ie=t(c)}}function V(H){if(P=!1,A(H),!b)if(t(u)!==null)b=!0,xt(z);else{var ie=t(c);ie!==null&&xn(V,ie.startTime-H)}}function z(H,ie){b=!1,P&&(P=!1,S(_),_=-1),E=!0;var $=g;try{for(A(ie),m=t(u);m!==null&&(!(m.expirationTime>ie)||H&&!k());){var ae=m.callback;if(typeof ae=="function"){m.callback=null,g=m.priorityLevel;var ye=ae(m.expirationTime<=ie);ie=n.unstable_now(),typeof ye=="function"?m.callback=ye:m===t(u)&&r(u),A(ie)}else r(u);m=t(u)}if(m!==null)var de=!0;else{var fn=t(c);fn!==null&&xn(V,fn.startTime-ie),de=!1}return de}finally{m=null,g=$,E=!1}}var j=!1,w=null,_=-1,I=5,T=-1;function k(){return!(n.unstable_now()-T<I)}function N(){if(w!==null){var H=n.unstable_now();T=H;var ie=!0;try{ie=w(!0,H)}finally{ie?x():(j=!1,w=null)}}else j=!1}var x;if(typeof v=="function")x=function(){v(N)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,Kn=ve.port2;ve.port1.onmessage=N,x=function(){Kn.postMessage(null)}}else x=function(){M(N,0)};function xt(H){w=H,j||(j=!0,x())}function xn(H,ie){_=M(function(){H(n.unstable_now())},ie)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(H){H.callback=null},n.unstable_continueExecution=function(){b||E||(b=!0,xt(z))},n.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<H?Math.floor(1e3/H):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(u)},n.unstable_next=function(H){switch(g){case 1:case 2:case 3:var ie=3;break;default:ie=g}var $=g;g=ie;try{return H()}finally{g=$}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(H,ie){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var $=g;g=H;try{return ie()}finally{g=$}},n.unstable_scheduleCallback=function(H,ie,$){var ae=n.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ae+$:ae):$=ae,H){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=$+ye,H={id:f++,callback:ie,priorityLevel:H,startTime:$,expirationTime:ye,sortIndex:-1},$>ae?(H.sortIndex=$,e(c,H),t(u)===null&&H===t(c)&&(P?(S(_),_=-1):P=!0,xn(V,$-ae))):(H.sortIndex=ye,e(u,H),b||E||(b=!0,xt(z))),H},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(H){var ie=g;return function(){var $=g;g=ie;try{return H.apply(this,arguments)}finally{g=$}}}})(eI);Z0.exports=eI;var VR=Z0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OR=se,wn=VR;function B(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tI=new Set,Bl={};function zs(n,e){$o(n,e),$o(n+"Capture",e)}function $o(n,e){for(Bl[n]=e,n=0;n<e.length;n++)tI.add(e[n])}var Lr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),op=Object.prototype.hasOwnProperty,LR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,B_={},$_={};function MR(n){return op.call($_,n)?!0:op.call(B_,n)?!1:LR.test(n)?$_[n]=!0:(B_[n]=!0,!1)}function jR(n,e,t,r){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function FR(n,e,t,r){if(e===null||typeof e>"u"||jR(n,e,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(n,e,t,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Dt[n]=new Zt(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Dt[e]=new Zt(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Dt[n]=new Zt(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Dt[n]=new Zt(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Dt[n]=new Zt(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Dt[n]=new Zt(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Dt[n]=new Zt(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Dt[n]=new Zt(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Dt[n]=new Zt(n,5,!1,n.toLowerCase(),null,!1,!1)});var qm=/[\-:]([a-z])/g;function Wm(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(qm,Wm);Dt[e]=new Zt(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(qm,Wm);Dt[e]=new Zt(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(qm,Wm);Dt[e]=new Zt(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Dt[n]=new Zt(n,1,!1,n.toLowerCase(),null,!1,!1)});Dt.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Dt[n]=new Zt(n,1,!1,n.toLowerCase(),null,!0,!0)});function Gm(n,e,t,r){var i=Dt.hasOwnProperty(e)?Dt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(FR(e,t,i,r)&&(t=null),r||i===null?MR(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):i.mustUseProperty?n[i.propertyName]=t===null?i.type===3?!1:"":t:(e=i.attributeName,r=i.attributeNamespace,t===null?n.removeAttribute(e):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?n.setAttributeNS(r,e,t):n.setAttribute(e,t))))}var qr=OR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tc=Symbol.for("react.element"),_o=Symbol.for("react.portal"),vo=Symbol.for("react.fragment"),Km=Symbol.for("react.strict_mode"),ap=Symbol.for("react.profiler"),nI=Symbol.for("react.provider"),rI=Symbol.for("react.context"),Hm=Symbol.for("react.forward_ref"),lp=Symbol.for("react.suspense"),up=Symbol.for("react.suspense_list"),Qm=Symbol.for("react.memo"),ci=Symbol.for("react.lazy"),iI=Symbol.for("react.offscreen"),q_=Symbol.iterator;function Ja(n){return n===null||typeof n!="object"?null:(n=q_&&n[q_]||n["@@iterator"],typeof n=="function"?n:null)}var Ke=Object.assign,mf;function fl(n){if(mf===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);mf=e&&e[1]||""}return`
`+mf+n}var gf=!1;function yf(n,e){if(!n||gf)return"";gf=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){r=c}n.call(e.prototype)}else{try{throw Error()}catch(c){r=c}n()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return n.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",n.displayName)),u}while(1<=o&&0<=a);break}}}finally{gf=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?fl(n):""}function UR(n){switch(n.tag){case 5:return fl(n.type);case 16:return fl("Lazy");case 13:return fl("Suspense");case 19:return fl("SuspenseList");case 0:case 2:case 15:return n=yf(n.type,!1),n;case 11:return n=yf(n.type.render,!1),n;case 1:return n=yf(n.type,!0),n;default:return""}}function cp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case vo:return"Fragment";case _o:return"Portal";case ap:return"Profiler";case Km:return"StrictMode";case lp:return"Suspense";case up:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case rI:return(n.displayName||"Context")+".Consumer";case nI:return(n._context.displayName||"Context")+".Provider";case Hm:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Qm:return e=n.displayName||null,e!==null?e:cp(n.type)||"Memo";case ci:e=n._payload,n=n._init;try{return cp(n(e))}catch{}}return null}function zR(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cp(e);case 8:return e===Km?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Pi(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function sI(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function BR(n){var e=sI(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),r=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function xc(n){n._valueTracker||(n._valueTracker=BR(n))}function oI(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return n&&(r=sI(n)?n.checked?"true":"false":n.value),n=r,n!==t?(e.setValue(n),!0):!1}function yd(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function dp(n,e){var t=e.checked;return Ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function W_(n,e){var t=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;t=Pi(e.value!=null?e.value:t),n._wrapperState={initialChecked:r,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function aI(n,e){e=e.checked,e!=null&&Gm(n,"checked",e,!1)}function hp(n,e){aI(n,e);var t=Pi(e.value),r=e.type;if(t!=null)r==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(r==="submit"||r==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?fp(n,e.type,t):e.hasOwnProperty("defaultValue")&&fp(n,e.type,Pi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function G_(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function fp(n,e,t){(e!=="number"||yd(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var pl=Array.isArray;function No(n,e,t,r){if(n=n.options,e){e={};for(var i=0;i<t.length;i++)e["$"+t[i]]=!0;for(t=0;t<n.length;t++)i=e.hasOwnProperty("$"+n[t].value),n[t].selected!==i&&(n[t].selected=i),i&&r&&(n[t].defaultSelected=!0)}else{for(t=""+Pi(t),e=null,i=0;i<n.length;i++){if(n[i].value===t){n[i].selected=!0,r&&(n[i].defaultSelected=!0);return}e!==null||n[i].disabled||(e=n[i])}e!==null&&(e.selected=!0)}}function pp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Ke({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function K_(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(B(92));if(pl(t)){if(1<t.length)throw Error(B(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Pi(t)}}function lI(n,e){var t=Pi(e.value),r=Pi(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),r!=null&&(n.defaultValue=""+r)}function H_(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function uI(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?uI(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Sc,cI=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,r,i){MSApp.execUnsafeLocalFunction(function(){return n(e,t,r,i)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Sc=Sc||document.createElement("div"),Sc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Sc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function $l(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var xl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$R=["Webkit","ms","Moz","O"];Object.keys(xl).forEach(function(n){$R.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),xl[e]=xl[n]})});function dI(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||xl.hasOwnProperty(n)&&xl[n]?(""+e).trim():e+"px"}function hI(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=dI(t,e[t],r);t==="float"&&(t="cssFloat"),r?n.setProperty(t,i):n[t]=i}}var qR=Ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gp(n,e){if(e){if(qR[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function yp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _p=null;function Ym(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var vp=null,Co=null,Do=null;function Q_(n){if(n=Nu(n)){if(typeof vp!="function")throw Error(B(280));var e=n.stateNode;e&&(e=fh(e),vp(n.stateNode,n.type,e))}}function fI(n){Co?Do?Do.push(n):Do=[n]:Co=n}function pI(){if(Co){var n=Co,e=Do;if(Do=Co=null,Q_(n),e)for(n=0;n<e.length;n++)Q_(e[n])}}function mI(n,e){return n(e)}function gI(){}var _f=!1;function yI(n,e,t){if(_f)return n(e,t);_f=!0;try{return mI(n,e,t)}finally{_f=!1,(Co!==null||Do!==null)&&(gI(),pI())}}function ql(n,e){var t=n.stateNode;if(t===null)return null;var r=fh(t);if(r===null)return null;t=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(n=n.type,r=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!r;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(B(231,e,typeof t));return t}var wp=!1;if(Lr)try{var Xa={};Object.defineProperty(Xa,"passive",{get:function(){wp=!0}}),window.addEventListener("test",Xa,Xa),window.removeEventListener("test",Xa,Xa)}catch{wp=!1}function WR(n,e,t,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(f){this.onError(f)}}var Sl=!1,_d=null,vd=!1,Ip=null,GR={onError:function(n){Sl=!0,_d=n}};function KR(n,e,t,r,i,s,o,a,u){Sl=!1,_d=null,WR.apply(GR,arguments)}function HR(n,e,t,r,i,s,o,a,u){if(KR.apply(this,arguments),Sl){if(Sl){var c=_d;Sl=!1,_d=null}else throw Error(B(198));vd||(vd=!0,Ip=c)}}function Bs(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function _I(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Y_(n){if(Bs(n)!==n)throw Error(B(188))}function QR(n){var e=n.alternate;if(!e){if(e=Bs(n),e===null)throw Error(B(188));return e!==n?null:n}for(var t=n,r=e;;){var i=t.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===t)return Y_(i),n;if(s===r)return Y_(i),e;s=s.sibling}throw Error(B(188))}if(t.return!==r.return)t=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===t){o=!0,t=i,r=s;break}if(a===r){o=!0,r=i,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,r=i;break}if(a===r){o=!0,r=s,t=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(t.alternate!==r)throw Error(B(190))}if(t.tag!==3)throw Error(B(188));return t.stateNode.current===t?n:e}function vI(n){return n=QR(n),n!==null?wI(n):null}function wI(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=wI(n);if(e!==null)return e;n=n.sibling}return null}var II=wn.unstable_scheduleCallback,J_=wn.unstable_cancelCallback,YR=wn.unstable_shouldYield,JR=wn.unstable_requestPaint,rt=wn.unstable_now,XR=wn.unstable_getCurrentPriorityLevel,Jm=wn.unstable_ImmediatePriority,EI=wn.unstable_UserBlockingPriority,wd=wn.unstable_NormalPriority,ZR=wn.unstable_LowPriority,TI=wn.unstable_IdlePriority,uh=null,ur=null;function ek(n){if(ur&&typeof ur.onCommitFiberRoot=="function")try{ur.onCommitFiberRoot(uh,n,void 0,(n.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:rk,tk=Math.log,nk=Math.LN2;function rk(n){return n>>>=0,n===0?32:31-(tk(n)/nk|0)|0}var Ac=64,Rc=4194304;function ml(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Id(n,e){var t=n.pendingLanes;if(t===0)return 0;var r=0,i=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~i;a!==0?r=ml(a):(s&=o,s!==0&&(r=ml(s)))}else o=t&~i,o!==0?r=ml(o):s!==0&&(r=ml(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=r;0<e;)t=31-Bn(e),i=1<<t,r|=n[t],e&=~i;return r}function ik(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sk(n,e){for(var t=n.suspendedLanes,r=n.pingedLanes,i=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Bn(s),a=1<<o,u=i[o];u===-1?(!(a&t)||a&r)&&(i[o]=ik(a,e)):u<=e&&(n.expiredLanes|=a),s&=~a}}function Ep(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function xI(){var n=Ac;return Ac<<=1,!(Ac&4194240)&&(Ac=64),n}function vf(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function bu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Bn(e),n[e]=t}function ok(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var r=n.eventTimes;for(n=n.expirationTimes;0<t;){var i=31-Bn(t),s=1<<i;e[i]=0,r[i]=-1,n[i]=-1,t&=~s}}function Xm(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var r=31-Bn(t),i=1<<r;i&e|n[r]&e&&(n[r]|=e),t&=~i}}var ke=0;function SI(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var AI,Zm,RI,kI,bI,Tp=!1,kc=[],wi=null,Ii=null,Ei=null,Wl=new Map,Gl=new Map,hi=[],ak="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function X_(n,e){switch(n){case"focusin":case"focusout":wi=null;break;case"dragenter":case"dragleave":Ii=null;break;case"mouseover":case"mouseout":Ei=null;break;case"pointerover":case"pointerout":Wl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gl.delete(e.pointerId)}}function Za(n,e,t,r,i,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Nu(e),e!==null&&Zm(e)),n):(n.eventSystemFlags|=r,e=n.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),n)}function lk(n,e,t,r,i){switch(e){case"focusin":return wi=Za(wi,n,e,t,r,i),!0;case"dragenter":return Ii=Za(Ii,n,e,t,r,i),!0;case"mouseover":return Ei=Za(Ei,n,e,t,r,i),!0;case"pointerover":var s=i.pointerId;return Wl.set(s,Za(Wl.get(s)||null,n,e,t,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Gl.set(s,Za(Gl.get(s)||null,n,e,t,r,i)),!0}return!1}function PI(n){var e=fs(n.target);if(e!==null){var t=Bs(e);if(t!==null){if(e=t.tag,e===13){if(e=_I(t),e!==null){n.blockedOn=e,bI(n.priority,function(){RI(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Qc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=xp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var r=new t.constructor(t.type,t);_p=r,t.target.dispatchEvent(r),_p=null}else return e=Nu(t),e!==null&&Zm(e),n.blockedOn=t,!1;e.shift()}return!0}function Z_(n,e,t){Qc(n)&&t.delete(e)}function uk(){Tp=!1,wi!==null&&Qc(wi)&&(wi=null),Ii!==null&&Qc(Ii)&&(Ii=null),Ei!==null&&Qc(Ei)&&(Ei=null),Wl.forEach(Z_),Gl.forEach(Z_)}function el(n,e){n.blockedOn===e&&(n.blockedOn=null,Tp||(Tp=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,uk)))}function Kl(n){function e(i){return el(i,n)}if(0<kc.length){el(kc[0],n);for(var t=1;t<kc.length;t++){var r=kc[t];r.blockedOn===n&&(r.blockedOn=null)}}for(wi!==null&&el(wi,n),Ii!==null&&el(Ii,n),Ei!==null&&el(Ei,n),Wl.forEach(e),Gl.forEach(e),t=0;t<hi.length;t++)r=hi[t],r.blockedOn===n&&(r.blockedOn=null);for(;0<hi.length&&(t=hi[0],t.blockedOn===null);)PI(t),t.blockedOn===null&&hi.shift()}var Vo=qr.ReactCurrentBatchConfig,Ed=!0;function ck(n,e,t,r){var i=ke,s=Vo.transition;Vo.transition=null;try{ke=1,eg(n,e,t,r)}finally{ke=i,Vo.transition=s}}function dk(n,e,t,r){var i=ke,s=Vo.transition;Vo.transition=null;try{ke=4,eg(n,e,t,r)}finally{ke=i,Vo.transition=s}}function eg(n,e,t,r){if(Ed){var i=xp(n,e,t,r);if(i===null)bf(n,e,r,Td,t),X_(n,r);else if(lk(i,n,e,t,r))r.stopPropagation();else if(X_(n,r),e&4&&-1<ak.indexOf(n)){for(;i!==null;){var s=Nu(i);if(s!==null&&AI(s),s=xp(n,e,t,r),s===null&&bf(n,e,r,Td,t),s===i)break;i=s}i!==null&&r.stopPropagation()}else bf(n,e,r,null,t)}}var Td=null;function xp(n,e,t,r){if(Td=null,n=Ym(r),n=fs(n),n!==null)if(e=Bs(n),e===null)n=null;else if(t=e.tag,t===13){if(n=_I(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Td=n,null}function NI(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(XR()){case Jm:return 1;case EI:return 4;case wd:case ZR:return 16;case TI:return 536870912;default:return 16}default:return 16}}var gi=null,tg=null,Yc=null;function CI(){if(Yc)return Yc;var n,e=tg,t=e.length,r,i="value"in gi?gi.value:gi.textContent,s=i.length;for(n=0;n<t&&e[n]===i[n];n++);var o=t-n;for(r=1;r<=o&&e[t-r]===i[s-r];r++);return Yc=i.slice(n,1<r?1-r:void 0)}function Jc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function bc(){return!0}function ev(){return!1}function Tn(n){function e(t,r,i,s,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?bc:ev,this.isPropagationStopped=ev,this}return Ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=bc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=bc)},persist:function(){},isPersistent:bc}),e}var pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ng=Tn(pa),Pu=Ke({},pa,{view:0,detail:0}),hk=Tn(Pu),wf,If,tl,ch=Ke({},Pu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rg,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==tl&&(tl&&n.type==="mousemove"?(wf=n.screenX-tl.screenX,If=n.screenY-tl.screenY):If=wf=0,tl=n),wf)},movementY:function(n){return"movementY"in n?n.movementY:If}}),tv=Tn(ch),fk=Ke({},ch,{dataTransfer:0}),pk=Tn(fk),mk=Ke({},Pu,{relatedTarget:0}),Ef=Tn(mk),gk=Ke({},pa,{animationName:0,elapsedTime:0,pseudoElement:0}),yk=Tn(gk),_k=Ke({},pa,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),vk=Tn(_k),wk=Ke({},pa,{data:0}),nv=Tn(wk),Ik={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ek={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xk(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Tk[n])?!!e[n]:!1}function rg(){return xk}var Sk=Ke({},Pu,{key:function(n){if(n.key){var e=Ik[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Jc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ek[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rg,charCode:function(n){return n.type==="keypress"?Jc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Jc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ak=Tn(Sk),Rk=Ke({},ch,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rv=Tn(Rk),kk=Ke({},Pu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rg}),bk=Tn(kk),Pk=Ke({},pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nk=Tn(Pk),Ck=Ke({},ch,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Dk=Tn(Ck),Vk=[9,13,27,32],ig=Lr&&"CompositionEvent"in window,Al=null;Lr&&"documentMode"in document&&(Al=document.documentMode);var Ok=Lr&&"TextEvent"in window&&!Al,DI=Lr&&(!ig||Al&&8<Al&&11>=Al),iv=" ",sv=!1;function VI(n,e){switch(n){case"keyup":return Vk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function OI(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var wo=!1;function Lk(n,e){switch(n){case"compositionend":return OI(e);case"keypress":return e.which!==32?null:(sv=!0,iv);case"textInput":return n=e.data,n===iv&&sv?null:n;default:return null}}function Mk(n,e){if(wo)return n==="compositionend"||!ig&&VI(n,e)?(n=CI(),Yc=tg=gi=null,wo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return DI&&e.locale!=="ko"?null:e.data;default:return null}}var jk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ov(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!jk[n.type]:e==="textarea"}function LI(n,e,t,r){fI(r),e=xd(e,"onChange"),0<e.length&&(t=new ng("onChange","change",null,t,r),n.push({event:t,listeners:e}))}var Rl=null,Hl=null;function Fk(n){KI(n,0)}function dh(n){var e=To(n);if(oI(e))return n}function Uk(n,e){if(n==="change")return e}var MI=!1;if(Lr){var Tf;if(Lr){var xf="oninput"in document;if(!xf){var av=document.createElement("div");av.setAttribute("oninput","return;"),xf=typeof av.oninput=="function"}Tf=xf}else Tf=!1;MI=Tf&&(!document.documentMode||9<document.documentMode)}function lv(){Rl&&(Rl.detachEvent("onpropertychange",jI),Hl=Rl=null)}function jI(n){if(n.propertyName==="value"&&dh(Hl)){var e=[];LI(e,Hl,n,Ym(n)),yI(Fk,e)}}function zk(n,e,t){n==="focusin"?(lv(),Rl=e,Hl=t,Rl.attachEvent("onpropertychange",jI)):n==="focusout"&&lv()}function Bk(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return dh(Hl)}function $k(n,e){if(n==="click")return dh(e)}function qk(n,e){if(n==="input"||n==="change")return dh(e)}function Wk(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Wn=typeof Object.is=="function"?Object.is:Wk;function Ql(n,e){if(Wn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!op.call(e,i)||!Wn(n[i],e[i]))return!1}return!0}function uv(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function cv(n,e){var t=uv(n);n=0;for(var r;t;){if(t.nodeType===3){if(r=n+t.textContent.length,n<=e&&r>=e)return{node:t,offset:e-n};n=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=uv(t)}}function FI(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?FI(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function UI(){for(var n=window,e=yd();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=yd(n.document)}return e}function sg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Gk(n){var e=UI(),t=n.focusedElem,r=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&FI(t.ownerDocument.documentElement,t)){if(r!==null&&sg(t)){if(e=r.start,n=r.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var i=t.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!n.extend&&s>r&&(i=r,r=s,s=i),i=cv(t,s);var o=cv(t,r);i&&o&&(n.rangeCount!==1||n.anchorNode!==i.node||n.anchorOffset!==i.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),n.removeAllRanges(),s>r?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Kk=Lr&&"documentMode"in document&&11>=document.documentMode,Io=null,Sp=null,kl=null,Ap=!1;function dv(n,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ap||Io==null||Io!==yd(r)||(r=Io,"selectionStart"in r&&sg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),kl&&Ql(kl,r)||(kl=r,r=xd(Sp,"onSelect"),0<r.length&&(e=new ng("onSelect","select",null,e,t),n.push({event:e,listeners:r}),e.target=Io)))}function Pc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Eo={animationend:Pc("Animation","AnimationEnd"),animationiteration:Pc("Animation","AnimationIteration"),animationstart:Pc("Animation","AnimationStart"),transitionend:Pc("Transition","TransitionEnd")},Sf={},zI={};Lr&&(zI=document.createElement("div").style,"AnimationEvent"in window||(delete Eo.animationend.animation,delete Eo.animationiteration.animation,delete Eo.animationstart.animation),"TransitionEvent"in window||delete Eo.transitionend.transition);function hh(n){if(Sf[n])return Sf[n];if(!Eo[n])return n;var e=Eo[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in zI)return Sf[n]=e[t];return n}var BI=hh("animationend"),$I=hh("animationiteration"),qI=hh("animationstart"),WI=hh("transitionend"),GI=new Map,hv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(n,e){GI.set(n,e),zs(e,[n])}for(var Af=0;Af<hv.length;Af++){var Rf=hv[Af],Hk=Rf.toLowerCase(),Qk=Rf[0].toUpperCase()+Rf.slice(1);$i(Hk,"on"+Qk)}$i(BI,"onAnimationEnd");$i($I,"onAnimationIteration");$i(qI,"onAnimationStart");$i("dblclick","onDoubleClick");$i("focusin","onFocus");$i("focusout","onBlur");$i(WI,"onTransitionEnd");$o("onMouseEnter",["mouseout","mouseover"]);$o("onMouseLeave",["mouseout","mouseover"]);$o("onPointerEnter",["pointerout","pointerover"]);$o("onPointerLeave",["pointerout","pointerover"]);zs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zs("onBeforeInput",["compositionend","keypress","textInput","paste"]);zs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yk=new Set("cancel close invalid load scroll toggle".split(" ").concat(gl));function fv(n,e,t){var r=n.type||"unknown-event";n.currentTarget=t,HR(r,e,void 0,n),n.currentTarget=null}function KI(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var r=n[t],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;fv(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;fv(i,a,c),s=u}}}if(vd)throw n=Ip,vd=!1,Ip=null,n}function Ve(n,e){var t=e[Np];t===void 0&&(t=e[Np]=new Set);var r=n+"__bubble";t.has(r)||(HI(e,n,2,!1),t.add(r))}function kf(n,e,t){var r=0;e&&(r|=4),HI(t,n,r,e)}var Nc="_reactListening"+Math.random().toString(36).slice(2);function Yl(n){if(!n[Nc]){n[Nc]=!0,tI.forEach(function(t){t!=="selectionchange"&&(Yk.has(t)||kf(t,!1,n),kf(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Nc]||(e[Nc]=!0,kf("selectionchange",!1,e))}}function HI(n,e,t,r){switch(NI(e)){case 1:var i=ck;break;case 4:i=dk;break;default:i=eg}t=i.bind(null,e,t,n),i=void 0,!wp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?n.addEventListener(e,t,{capture:!0,passive:i}):n.addEventListener(e,t,!0):i!==void 0?n.addEventListener(e,t,{passive:i}):n.addEventListener(e,t,!1)}function bf(n,e,t,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=fs(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}yI(function(){var c=s,f=Ym(t),m=[];e:{var g=GI.get(n);if(g!==void 0){var E=ng,b=n;switch(n){case"keypress":if(Jc(t)===0)break e;case"keydown":case"keyup":E=Ak;break;case"focusin":b="focus",E=Ef;break;case"focusout":b="blur",E=Ef;break;case"beforeblur":case"afterblur":E=Ef;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=tv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=pk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=bk;break;case BI:case $I:case qI:E=yk;break;case WI:E=Nk;break;case"scroll":E=hk;break;case"wheel":E=Dk;break;case"copy":case"cut":case"paste":E=vk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=rv}var P=(e&4)!==0,M=!P&&n==="scroll",S=P?g!==null?g+"Capture":null:g;P=[];for(var v=c,A;v!==null;){A=v;var V=A.stateNode;if(A.tag===5&&V!==null&&(A=V,S!==null&&(V=ql(v,S),V!=null&&P.push(Jl(v,V,A)))),M)break;v=v.return}0<P.length&&(g=new E(g,b,null,t,f),m.push({event:g,listeners:P}))}}if(!(e&7)){e:{if(g=n==="mouseover"||n==="pointerover",E=n==="mouseout"||n==="pointerout",g&&t!==_p&&(b=t.relatedTarget||t.fromElement)&&(fs(b)||b[Mr]))break e;if((E||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,E?(b=t.relatedTarget||t.toElement,E=c,b=b?fs(b):null,b!==null&&(M=Bs(b),b!==M||b.tag!==5&&b.tag!==6)&&(b=null)):(E=null,b=c),E!==b)){if(P=tv,V="onMouseLeave",S="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(P=rv,V="onPointerLeave",S="onPointerEnter",v="pointer"),M=E==null?g:To(E),A=b==null?g:To(b),g=new P(V,v+"leave",E,t,f),g.target=M,g.relatedTarget=A,V=null,fs(f)===c&&(P=new P(S,v+"enter",b,t,f),P.target=A,P.relatedTarget=M,V=P),M=V,E&&b)t:{for(P=E,S=b,v=0,A=P;A;A=so(A))v++;for(A=0,V=S;V;V=so(V))A++;for(;0<v-A;)P=so(P),v--;for(;0<A-v;)S=so(S),A--;for(;v--;){if(P===S||S!==null&&P===S.alternate)break t;P=so(P),S=so(S)}P=null}else P=null;E!==null&&pv(m,g,E,P,!1),b!==null&&M!==null&&pv(m,M,b,P,!0)}}e:{if(g=c?To(c):window,E=g.nodeName&&g.nodeName.toLowerCase(),E==="select"||E==="input"&&g.type==="file")var z=Uk;else if(ov(g))if(MI)z=qk;else{z=Bk;var j=zk}else(E=g.nodeName)&&E.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(z=$k);if(z&&(z=z(n,c))){LI(m,z,t,f);break e}j&&j(n,g,c),n==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&fp(g,"number",g.value)}switch(j=c?To(c):window,n){case"focusin":(ov(j)||j.contentEditable==="true")&&(Io=j,Sp=c,kl=null);break;case"focusout":kl=Sp=Io=null;break;case"mousedown":Ap=!0;break;case"contextmenu":case"mouseup":case"dragend":Ap=!1,dv(m,t,f);break;case"selectionchange":if(Kk)break;case"keydown":case"keyup":dv(m,t,f)}var w;if(ig)e:{switch(n){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else wo?VI(n,t)&&(_="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(DI&&t.locale!=="ko"&&(wo||_!=="onCompositionStart"?_==="onCompositionEnd"&&wo&&(w=CI()):(gi=f,tg="value"in gi?gi.value:gi.textContent,wo=!0)),j=xd(c,_),0<j.length&&(_=new nv(_,n,null,t,f),m.push({event:_,listeners:j}),w?_.data=w:(w=OI(t),w!==null&&(_.data=w)))),(w=Ok?Lk(n,t):Mk(n,t))&&(c=xd(c,"onBeforeInput"),0<c.length&&(f=new nv("onBeforeInput","beforeinput",null,t,f),m.push({event:f,listeners:c}),f.data=w))}KI(m,e)})}function Jl(n,e,t){return{instance:n,listener:e,currentTarget:t}}function xd(n,e){for(var t=e+"Capture",r=[];n!==null;){var i=n,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ql(n,t),s!=null&&r.unshift(Jl(n,s,i)),s=ql(n,e),s!=null&&r.push(Jl(n,s,i))),n=n.return}return r}function so(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function pv(n,e,t,r,i){for(var s=e._reactName,o=[];t!==null&&t!==r;){var a=t,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=ql(t,s),u!=null&&o.unshift(Jl(t,u,a))):i||(u=ql(t,s),u!=null&&o.push(Jl(t,u,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Jk=/\r\n?/g,Xk=/\u0000|\uFFFD/g;function mv(n){return(typeof n=="string"?n:""+n).replace(Jk,`
`).replace(Xk,"")}function Cc(n,e,t){if(e=mv(e),mv(n)!==e&&t)throw Error(B(425))}function Sd(){}var Rp=null,kp=null;function bp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pp=typeof setTimeout=="function"?setTimeout:void 0,Zk=typeof clearTimeout=="function"?clearTimeout:void 0,gv=typeof Promise=="function"?Promise:void 0,eb=typeof queueMicrotask=="function"?queueMicrotask:typeof gv<"u"?function(n){return gv.resolve(null).then(n).catch(tb)}:Pp;function tb(n){setTimeout(function(){throw n})}function Pf(n,e){var t=e,r=0;do{var i=t.nextSibling;if(n.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){n.removeChild(i),Kl(e);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Kl(e)}function Ti(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function yv(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ma=Math.random().toString(36).slice(2),tr="__reactFiber$"+ma,Xl="__reactProps$"+ma,Mr="__reactContainer$"+ma,Np="__reactEvents$"+ma,nb="__reactListeners$"+ma,rb="__reactHandles$"+ma;function fs(n){var e=n[tr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Mr]||t[tr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=yv(n);n!==null;){if(t=n[tr])return t;n=yv(n)}return e}n=t,t=n.parentNode}return null}function Nu(n){return n=n[tr]||n[Mr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function To(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(B(33))}function fh(n){return n[Xl]||null}var Cp=[],xo=-1;function qi(n){return{current:n}}function Le(n){0>xo||(n.current=Cp[xo],Cp[xo]=null,xo--)}function Ne(n,e){xo++,Cp[xo]=n.current,n.current=e}var Ni={},zt=qi(Ni),cn=qi(!1),xs=Ni;function qo(n,e){var t=n.type.contextTypes;if(!t)return Ni;var r=n.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in t)i[s]=e[s];return r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=i),i}function dn(n){return n=n.childContextTypes,n!=null}function Ad(){Le(cn),Le(zt)}function _v(n,e,t){if(zt.current!==Ni)throw Error(B(168));Ne(zt,e),Ne(cn,t)}function QI(n,e,t){var r=n.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,zR(n)||"Unknown",i));return Ke({},t,r)}function Rd(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ni,xs=zt.current,Ne(zt,n),Ne(cn,cn.current),!0}function vv(n,e,t){var r=n.stateNode;if(!r)throw Error(B(169));t?(n=QI(n,e,xs),r.__reactInternalMemoizedMergedChildContext=n,Le(cn),Le(zt),Ne(zt,n)):Le(cn),Ne(cn,t)}var kr=null,ph=!1,Nf=!1;function YI(n){kr===null?kr=[n]:kr.push(n)}function ib(n){ph=!0,YI(n)}function Wi(){if(!Nf&&kr!==null){Nf=!0;var n=0,e=ke;try{var t=kr;for(ke=1;n<t.length;n++){var r=t[n];do r=r(!0);while(r!==null)}kr=null,ph=!1}catch(i){throw kr!==null&&(kr=kr.slice(n+1)),II(Jm,Wi),i}finally{ke=e,Nf=!1}}return null}var So=[],Ao=0,kd=null,bd=0,An=[],Rn=0,Ss=null,br=1,Pr="";function is(n,e){So[Ao++]=bd,So[Ao++]=kd,kd=n,bd=e}function JI(n,e,t){An[Rn++]=br,An[Rn++]=Pr,An[Rn++]=Ss,Ss=n;var r=br;n=Pr;var i=32-Bn(r)-1;r&=~(1<<i),t+=1;var s=32-Bn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,br=1<<32-Bn(e)+i|t<<i|r,Pr=s+n}else br=1<<s|t<<i|r,Pr=n}function og(n){n.return!==null&&(is(n,1),JI(n,1,0))}function ag(n){for(;n===kd;)kd=So[--Ao],So[Ao]=null,bd=So[--Ao],So[Ao]=null;for(;n===Ss;)Ss=An[--Rn],An[Rn]=null,Pr=An[--Rn],An[Rn]=null,br=An[--Rn],An[Rn]=null}var vn=null,yn=null,Ue=!1,zn=null;function XI(n,e){var t=kn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function wv(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,vn=n,yn=Ti(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,vn=n,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ss!==null?{id:br,overflow:Pr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=kn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,vn=n,yn=null,!0):!1;default:return!1}}function Dp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Vp(n){if(Ue){var e=yn;if(e){var t=e;if(!wv(n,e)){if(Dp(n))throw Error(B(418));e=Ti(t.nextSibling);var r=vn;e&&wv(n,e)?XI(r,t):(n.flags=n.flags&-4097|2,Ue=!1,vn=n)}}else{if(Dp(n))throw Error(B(418));n.flags=n.flags&-4097|2,Ue=!1,vn=n}}}function Iv(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;vn=n}function Dc(n){if(n!==vn)return!1;if(!Ue)return Iv(n),Ue=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!bp(n.type,n.memoizedProps)),e&&(e=yn)){if(Dp(n))throw ZI(),Error(B(418));for(;e;)XI(n,e),e=Ti(e.nextSibling)}if(Iv(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(B(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){yn=Ti(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}yn=null}}else yn=vn?Ti(n.stateNode.nextSibling):null;return!0}function ZI(){for(var n=yn;n;)n=Ti(n.nextSibling)}function Wo(){yn=vn=null,Ue=!1}function lg(n){zn===null?zn=[n]:zn.push(n)}var sb=qr.ReactCurrentBatchConfig;function nl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(B(309));var r=t.stateNode}if(!r)throw Error(B(147,n));var i=r,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(B(284));if(!t._owner)throw Error(B(290,n))}return n}function Vc(n,e){throw n=Object.prototype.toString.call(e),Error(B(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Ev(n){var e=n._init;return e(n._payload)}function eE(n){function e(S,v){if(n){var A=S.deletions;A===null?(S.deletions=[v],S.flags|=16):A.push(v)}}function t(S,v){if(!n)return null;for(;v!==null;)e(S,v),v=v.sibling;return null}function r(S,v){for(S=new Map;v!==null;)v.key!==null?S.set(v.key,v):S.set(v.index,v),v=v.sibling;return S}function i(S,v){return S=Ri(S,v),S.index=0,S.sibling=null,S}function s(S,v,A){return S.index=A,n?(A=S.alternate,A!==null?(A=A.index,A<v?(S.flags|=2,v):A):(S.flags|=2,v)):(S.flags|=1048576,v)}function o(S){return n&&S.alternate===null&&(S.flags|=2),S}function a(S,v,A,V){return v===null||v.tag!==6?(v=jf(A,S.mode,V),v.return=S,v):(v=i(v,A),v.return=S,v)}function u(S,v,A,V){var z=A.type;return z===vo?f(S,v,A.props.children,V,A.key):v!==null&&(v.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===ci&&Ev(z)===v.type)?(V=i(v,A.props),V.ref=nl(S,v,A),V.return=S,V):(V=id(A.type,A.key,A.props,null,S.mode,V),V.ref=nl(S,v,A),V.return=S,V)}function c(S,v,A,V){return v===null||v.tag!==4||v.stateNode.containerInfo!==A.containerInfo||v.stateNode.implementation!==A.implementation?(v=Ff(A,S.mode,V),v.return=S,v):(v=i(v,A.children||[]),v.return=S,v)}function f(S,v,A,V,z){return v===null||v.tag!==7?(v=ws(A,S.mode,V,z),v.return=S,v):(v=i(v,A),v.return=S,v)}function m(S,v,A){if(typeof v=="string"&&v!==""||typeof v=="number")return v=jf(""+v,S.mode,A),v.return=S,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Tc:return A=id(v.type,v.key,v.props,null,S.mode,A),A.ref=nl(S,null,v),A.return=S,A;case _o:return v=Ff(v,S.mode,A),v.return=S,v;case ci:var V=v._init;return m(S,V(v._payload),A)}if(pl(v)||Ja(v))return v=ws(v,S.mode,A,null),v.return=S,v;Vc(S,v)}return null}function g(S,v,A,V){var z=v!==null?v.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return z!==null?null:a(S,v,""+A,V);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Tc:return A.key===z?u(S,v,A,V):null;case _o:return A.key===z?c(S,v,A,V):null;case ci:return z=A._init,g(S,v,z(A._payload),V)}if(pl(A)||Ja(A))return z!==null?null:f(S,v,A,V,null);Vc(S,A)}return null}function E(S,v,A,V,z){if(typeof V=="string"&&V!==""||typeof V=="number")return S=S.get(A)||null,a(v,S,""+V,z);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Tc:return S=S.get(V.key===null?A:V.key)||null,u(v,S,V,z);case _o:return S=S.get(V.key===null?A:V.key)||null,c(v,S,V,z);case ci:var j=V._init;return E(S,v,A,j(V._payload),z)}if(pl(V)||Ja(V))return S=S.get(A)||null,f(v,S,V,z,null);Vc(v,V)}return null}function b(S,v,A,V){for(var z=null,j=null,w=v,_=v=0,I=null;w!==null&&_<A.length;_++){w.index>_?(I=w,w=null):I=w.sibling;var T=g(S,w,A[_],V);if(T===null){w===null&&(w=I);break}n&&w&&T.alternate===null&&e(S,w),v=s(T,v,_),j===null?z=T:j.sibling=T,j=T,w=I}if(_===A.length)return t(S,w),Ue&&is(S,_),z;if(w===null){for(;_<A.length;_++)w=m(S,A[_],V),w!==null&&(v=s(w,v,_),j===null?z=w:j.sibling=w,j=w);return Ue&&is(S,_),z}for(w=r(S,w);_<A.length;_++)I=E(w,S,_,A[_],V),I!==null&&(n&&I.alternate!==null&&w.delete(I.key===null?_:I.key),v=s(I,v,_),j===null?z=I:j.sibling=I,j=I);return n&&w.forEach(function(k){return e(S,k)}),Ue&&is(S,_),z}function P(S,v,A,V){var z=Ja(A);if(typeof z!="function")throw Error(B(150));if(A=z.call(A),A==null)throw Error(B(151));for(var j=z=null,w=v,_=v=0,I=null,T=A.next();w!==null&&!T.done;_++,T=A.next()){w.index>_?(I=w,w=null):I=w.sibling;var k=g(S,w,T.value,V);if(k===null){w===null&&(w=I);break}n&&w&&k.alternate===null&&e(S,w),v=s(k,v,_),j===null?z=k:j.sibling=k,j=k,w=I}if(T.done)return t(S,w),Ue&&is(S,_),z;if(w===null){for(;!T.done;_++,T=A.next())T=m(S,T.value,V),T!==null&&(v=s(T,v,_),j===null?z=T:j.sibling=T,j=T);return Ue&&is(S,_),z}for(w=r(S,w);!T.done;_++,T=A.next())T=E(w,S,_,T.value,V),T!==null&&(n&&T.alternate!==null&&w.delete(T.key===null?_:T.key),v=s(T,v,_),j===null?z=T:j.sibling=T,j=T);return n&&w.forEach(function(N){return e(S,N)}),Ue&&is(S,_),z}function M(S,v,A,V){if(typeof A=="object"&&A!==null&&A.type===vo&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Tc:e:{for(var z=A.key,j=v;j!==null;){if(j.key===z){if(z=A.type,z===vo){if(j.tag===7){t(S,j.sibling),v=i(j,A.props.children),v.return=S,S=v;break e}}else if(j.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===ci&&Ev(z)===j.type){t(S,j.sibling),v=i(j,A.props),v.ref=nl(S,j,A),v.return=S,S=v;break e}t(S,j);break}else e(S,j);j=j.sibling}A.type===vo?(v=ws(A.props.children,S.mode,V,A.key),v.return=S,S=v):(V=id(A.type,A.key,A.props,null,S.mode,V),V.ref=nl(S,v,A),V.return=S,S=V)}return o(S);case _o:e:{for(j=A.key;v!==null;){if(v.key===j)if(v.tag===4&&v.stateNode.containerInfo===A.containerInfo&&v.stateNode.implementation===A.implementation){t(S,v.sibling),v=i(v,A.children||[]),v.return=S,S=v;break e}else{t(S,v);break}else e(S,v);v=v.sibling}v=Ff(A,S.mode,V),v.return=S,S=v}return o(S);case ci:return j=A._init,M(S,v,j(A._payload),V)}if(pl(A))return b(S,v,A,V);if(Ja(A))return P(S,v,A,V);Vc(S,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,v!==null&&v.tag===6?(t(S,v.sibling),v=i(v,A),v.return=S,S=v):(t(S,v),v=jf(A,S.mode,V),v.return=S,S=v),o(S)):t(S,v)}return M}var Go=eE(!0),tE=eE(!1),Pd=qi(null),Nd=null,Ro=null,ug=null;function cg(){ug=Ro=Nd=null}function dg(n){var e=Pd.current;Le(Pd),n._currentValue=e}function Op(n,e,t){for(;n!==null;){var r=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),n===t)break;n=n.return}}function Oo(n,e){Nd=n,ug=Ro=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(on=!0),n.firstContext=null)}function Cn(n){var e=n._currentValue;if(ug!==n)if(n={context:n,memoizedValue:e,next:null},Ro===null){if(Nd===null)throw Error(B(308));Ro=n,Nd.dependencies={lanes:0,firstContext:n}}else Ro=Ro.next=n;return e}var ps=null;function hg(n){ps===null?ps=[n]:ps.push(n)}function nE(n,e,t,r){var i=e.interleaved;return i===null?(t.next=t,hg(e)):(t.next=i.next,i.next=t),e.interleaved=t,jr(n,r)}function jr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var di=!1;function fg(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rE(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Vr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function xi(n,e,t){var r=n.updateQueue;if(r===null)return null;if(r=r.shared,Ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,jr(n,t)}return i=r.interleaved,i===null?(e.next=e,hg(r)):(e.next=i.next,i.next=e),r.interleaved=e,jr(n,t)}function Xc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,Xm(n,t)}}function Tv(n,e){var t=n.updateQueue,r=n.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?i=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?i=s=e:s=s.next=e}else i=s=e;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Cd(n,e,t,r){var i=n.updateQueue;di=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=n.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=c=u=null,a=s;do{var g=a.lane,E=a.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:E,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var b=n,P=a;switch(g=e,E=t,P.tag){case 1:if(b=P.payload,typeof b=="function"){m=b.call(E,m,g);break e}m=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=P.payload,g=typeof b=="function"?b.call(E,m,g):b,g==null)break e;m=Ke({},m,g);break e;case 2:di=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else E={eventTime:E,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=E,u=m):f=f.next=E,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Rs|=o,n.lanes=o,n.memoizedState=m}}function xv(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var r=n[e],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var Cu={},cr=qi(Cu),Zl=qi(Cu),eu=qi(Cu);function ms(n){if(n===Cu)throw Error(B(174));return n}function pg(n,e){switch(Ne(eu,e),Ne(Zl,n),Ne(cr,Cu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:mp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=mp(e,n)}Le(cr),Ne(cr,e)}function Ko(){Le(cr),Le(Zl),Le(eu)}function iE(n){ms(eu.current);var e=ms(cr.current),t=mp(e,n.type);e!==t&&(Ne(Zl,n),Ne(cr,t))}function mg(n){Zl.current===n&&(Le(cr),Le(Zl))}var qe=qi(0);function Dd(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cf=[];function gg(){for(var n=0;n<Cf.length;n++)Cf[n]._workInProgressVersionPrimary=null;Cf.length=0}var Zc=qr.ReactCurrentDispatcher,Df=qr.ReactCurrentBatchConfig,As=0,We=null,ft=null,wt=null,Vd=!1,bl=!1,tu=0,ob=0;function Mt(){throw Error(B(321))}function yg(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Wn(n[t],e[t]))return!1;return!0}function _g(n,e,t,r,i,s){if(As=s,We=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zc.current=n===null||n.memoizedState===null?cb:db,n=t(r,i),bl){s=0;do{if(bl=!1,tu=0,25<=s)throw Error(B(301));s+=1,wt=ft=null,e.updateQueue=null,Zc.current=hb,n=t(r,i)}while(bl)}if(Zc.current=Od,e=ft!==null&&ft.next!==null,As=0,wt=ft=We=null,Vd=!1,e)throw Error(B(300));return n}function vg(){var n=tu!==0;return tu=0,n}function er(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?We.memoizedState=wt=n:wt=wt.next=n,wt}function Dn(){if(ft===null){var n=We.alternate;n=n!==null?n.memoizedState:null}else n=ft.next;var e=wt===null?We.memoizedState:wt.next;if(e!==null)wt=e,ft=n;else{if(n===null)throw Error(B(310));ft=n,n={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},wt===null?We.memoizedState=wt=n:wt=wt.next=n}return wt}function nu(n,e){return typeof e=="function"?e(n):e}function Vf(n){var e=Dn(),t=e.queue;if(t===null)throw Error(B(311));t.lastRenderedReducer=n;var r=ft,i=r.baseQueue,s=t.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,t.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var f=c.lane;if((As&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:n(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=m,o=r):u=u.next=m,We.lanes|=f,Rs|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Wn(r,e.memoizedState)||(on=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,t.lastRenderedState=r}if(n=t.interleaved,n!==null){i=n;do s=i.lane,We.lanes|=s,Rs|=s,i=i.next;while(i!==n)}else i===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Of(n){var e=Dn(),t=e.queue;if(t===null)throw Error(B(311));t.lastRenderedReducer=n;var r=t.dispatch,i=t.pending,s=e.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do s=n(s,o.action),o=o.next;while(o!==i);Wn(s,e.memoizedState)||(on=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,r]}function sE(){}function oE(n,e){var t=We,r=Dn(),i=e(),s=!Wn(r.memoizedState,i);if(s&&(r.memoizedState=i,on=!0),r=r.queue,wg(uE.bind(null,t,r,n),[n]),r.getSnapshot!==e||s||wt!==null&&wt.memoizedState.tag&1){if(t.flags|=2048,ru(9,lE.bind(null,t,r,i,e),void 0,null),Et===null)throw Error(B(349));As&30||aE(t,e,i)}return i}function aE(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=We.updateQueue,e===null?(e={lastEffect:null,stores:null},We.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function lE(n,e,t,r){e.value=t,e.getSnapshot=r,cE(e)&&dE(n)}function uE(n,e,t){return t(function(){cE(e)&&dE(n)})}function cE(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Wn(n,t)}catch{return!0}}function dE(n){var e=jr(n,1);e!==null&&$n(e,n,1,-1)}function Sv(n){var e=er();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nu,lastRenderedState:n},e.queue=n,n=n.dispatch=ub.bind(null,We,n),[e.memoizedState,n]}function ru(n,e,t,r){return n={tag:n,create:e,destroy:t,deps:r,next:null},e=We.updateQueue,e===null?(e={lastEffect:null,stores:null},We.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(r=t.next,t.next=n,n.next=r,e.lastEffect=n)),n}function hE(){return Dn().memoizedState}function ed(n,e,t,r){var i=er();We.flags|=n,i.memoizedState=ru(1|e,t,void 0,r===void 0?null:r)}function mh(n,e,t,r){var i=Dn();r=r===void 0?null:r;var s=void 0;if(ft!==null){var o=ft.memoizedState;if(s=o.destroy,r!==null&&yg(r,o.deps)){i.memoizedState=ru(e,t,s,r);return}}We.flags|=n,i.memoizedState=ru(1|e,t,s,r)}function Av(n,e){return ed(8390656,8,n,e)}function wg(n,e){return mh(2048,8,n,e)}function fE(n,e){return mh(4,2,n,e)}function pE(n,e){return mh(4,4,n,e)}function mE(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function gE(n,e,t){return t=t!=null?t.concat([n]):null,mh(4,4,mE.bind(null,e,n),t)}function Ig(){}function yE(n,e){var t=Dn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&yg(e,r[1])?r[0]:(t.memoizedState=[n,e],n)}function _E(n,e){var t=Dn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&yg(e,r[1])?r[0]:(n=n(),t.memoizedState=[n,e],n)}function vE(n,e,t){return As&21?(Wn(t,e)||(t=xI(),We.lanes|=t,Rs|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,on=!0),n.memoizedState=t)}function ab(n,e){var t=ke;ke=t!==0&&4>t?t:4,n(!0);var r=Df.transition;Df.transition={};try{n(!1),e()}finally{ke=t,Df.transition=r}}function wE(){return Dn().memoizedState}function lb(n,e,t){var r=Ai(n);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},IE(n))EE(e,t);else if(t=nE(n,e,t,r),t!==null){var i=Kt();$n(t,n,r,i),TE(t,e,r)}}function ub(n,e,t){var r=Ai(n),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(IE(n))EE(e,i);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(i.hasEagerState=!0,i.eagerState=a,Wn(a,o)){var u=e.interleaved;u===null?(i.next=i,hg(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}t=nE(n,e,i,r),t!==null&&(i=Kt(),$n(t,n,r,i),TE(t,e,r))}}function IE(n){var e=n.alternate;return n===We||e!==null&&e===We}function EE(n,e){bl=Vd=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function TE(n,e,t){if(t&4194240){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,Xm(n,t)}}var Od={readContext:Cn,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},cb={readContext:Cn,useCallback:function(n,e){return er().memoizedState=[n,e===void 0?null:e],n},useContext:Cn,useEffect:Av,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,ed(4194308,4,mE.bind(null,e,n),t)},useLayoutEffect:function(n,e){return ed(4194308,4,n,e)},useInsertionEffect:function(n,e){return ed(4,2,n,e)},useMemo:function(n,e){var t=er();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var r=er();return e=t!==void 0?t(e):e,r.memoizedState=r.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},r.queue=n,n=n.dispatch=lb.bind(null,We,n),[r.memoizedState,n]},useRef:function(n){var e=er();return n={current:n},e.memoizedState=n},useState:Sv,useDebugValue:Ig,useDeferredValue:function(n){return er().memoizedState=n},useTransition:function(){var n=Sv(!1),e=n[0];return n=ab.bind(null,n[1]),er().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var r=We,i=er();if(Ue){if(t===void 0)throw Error(B(407));t=t()}else{if(t=e(),Et===null)throw Error(B(349));As&30||aE(r,e,t)}i.memoizedState=t;var s={value:t,getSnapshot:e};return i.queue=s,Av(uE.bind(null,r,s,n),[n]),r.flags|=2048,ru(9,lE.bind(null,r,s,t,e),void 0,null),t},useId:function(){var n=er(),e=Et.identifierPrefix;if(Ue){var t=Pr,r=br;t=(r&~(1<<32-Bn(r)-1)).toString(32)+t,e=":"+e+"R"+t,t=tu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=ob++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},db={readContext:Cn,useCallback:yE,useContext:Cn,useEffect:wg,useImperativeHandle:gE,useInsertionEffect:fE,useLayoutEffect:pE,useMemo:_E,useReducer:Vf,useRef:hE,useState:function(){return Vf(nu)},useDebugValue:Ig,useDeferredValue:function(n){var e=Dn();return vE(e,ft.memoizedState,n)},useTransition:function(){var n=Vf(nu)[0],e=Dn().memoizedState;return[n,e]},useMutableSource:sE,useSyncExternalStore:oE,useId:wE,unstable_isNewReconciler:!1},hb={readContext:Cn,useCallback:yE,useContext:Cn,useEffect:wg,useImperativeHandle:gE,useInsertionEffect:fE,useLayoutEffect:pE,useMemo:_E,useReducer:Of,useRef:hE,useState:function(){return Of(nu)},useDebugValue:Ig,useDeferredValue:function(n){var e=Dn();return ft===null?e.memoizedState=n:vE(e,ft.memoizedState,n)},useTransition:function(){var n=Of(nu)[0],e=Dn().memoizedState;return[n,e]},useMutableSource:sE,useSyncExternalStore:oE,useId:wE,unstable_isNewReconciler:!1};function Fn(n,e){if(n&&n.defaultProps){e=Ke({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Lp(n,e,t,r){e=n.memoizedState,t=t(r,e),t=t==null?e:Ke({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var gh={isMounted:function(n){return(n=n._reactInternals)?Bs(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var r=Kt(),i=Ai(n),s=Vr(r,i);s.payload=e,t!=null&&(s.callback=t),e=xi(n,s,i),e!==null&&($n(e,n,i,r),Xc(e,n,i))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var r=Kt(),i=Ai(n),s=Vr(r,i);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=xi(n,s,i),e!==null&&($n(e,n,i,r),Xc(e,n,i))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Kt(),r=Ai(n),i=Vr(t,r);i.tag=2,e!=null&&(i.callback=e),e=xi(n,i,r),e!==null&&($n(e,n,r,t),Xc(e,n,r))}};function Rv(n,e,t,r,i,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ql(t,r)||!Ql(i,s):!0}function xE(n,e,t){var r=!1,i=Ni,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(i=dn(e)?xs:zt.current,r=e.contextTypes,s=(r=r!=null)?qo(n,i):Ni),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gh,n.stateNode=e,e._reactInternals=n,r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=s),e}function kv(n,e,t,r){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==n&&gh.enqueueReplaceState(e,e.state,null)}function Mp(n,e,t,r){var i=n.stateNode;i.props=t,i.state=n.memoizedState,i.refs={},fg(n);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Cn(s):(s=dn(e)?xs:zt.current,i.context=qo(n,s)),i.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Lp(n,e,s,t),i.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&gh.enqueueReplaceState(i,i.state,null),Cd(n,t,i,r),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308)}function Ho(n,e){try{var t="",r=e;do t+=UR(r),r=r.return;while(r);var i=t}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:i,digest:null}}function Lf(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function jp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var fb=typeof WeakMap=="function"?WeakMap:Map;function SE(n,e,t){t=Vr(-1,t),t.tag=3,t.payload={element:null};var r=e.value;return t.callback=function(){Md||(Md=!0,Hp=r),jp(n,e)},t}function AE(n,e,t){t=Vr(-1,t),t.tag=3;var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;t.payload=function(){return r(i)},t.callback=function(){jp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){jp(n,e),typeof r!="function"&&(Si===null?Si=new Set([this]):Si.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function bv(n,e,t){var r=n.pingCache;if(r===null){r=n.pingCache=new fb;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(t)||(i.add(t),n=Rb.bind(null,n,e,t),e.then(n,n))}function Pv(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Nv(n,e,t,r,i){return n.mode&1?(n.flags|=65536,n.lanes=i,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Vr(-1,1),e.tag=2,xi(t,e,1))),t.lanes|=1),n)}var pb=qr.ReactCurrentOwner,on=!1;function qt(n,e,t,r){e.child=n===null?tE(e,null,t,r):Go(e,n.child,t,r)}function Cv(n,e,t,r,i){t=t.render;var s=e.ref;return Oo(e,i),r=_g(n,e,t,r,s,i),t=vg(),n!==null&&!on?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i,Fr(n,e,i)):(Ue&&t&&og(e),e.flags|=1,qt(n,e,r,i),e.child)}function Dv(n,e,t,r,i){if(n===null){var s=t.type;return typeof s=="function"&&!bg(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,RE(n,e,s,r,i)):(n=id(t.type,null,r,e,e.mode,i),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&i)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Ql,t(o,r)&&n.ref===e.ref)return Fr(n,e,i)}return e.flags|=1,n=Ri(s,r),n.ref=e.ref,n.return=e,e.child=n}function RE(n,e,t,r,i){if(n!==null){var s=n.memoizedProps;if(Ql(s,r)&&n.ref===e.ref)if(on=!1,e.pendingProps=r=s,(n.lanes&i)!==0)n.flags&131072&&(on=!0);else return e.lanes=n.lanes,Fr(n,e,i)}return Fp(n,e,t,r,i)}function kE(n,e,t){var r=e.pendingProps,i=r.children,s=n!==null?n.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(bo,mn),mn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Ne(bo,mn),mn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:t,Ne(bo,mn),mn|=r}else s!==null?(r=s.baseLanes|t,e.memoizedState=null):r=t,Ne(bo,mn),mn|=r;return qt(n,e,i,t),e.child}function bE(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Fp(n,e,t,r,i){var s=dn(t)?xs:zt.current;return s=qo(e,s),Oo(e,i),t=_g(n,e,t,r,s,i),r=vg(),n!==null&&!on?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i,Fr(n,e,i)):(Ue&&r&&og(e),e.flags|=1,qt(n,e,t,i),e.child)}function Vv(n,e,t,r,i){if(dn(t)){var s=!0;Rd(e)}else s=!1;if(Oo(e,i),e.stateNode===null)td(n,e),xE(e,t,r),Mp(e,t,r,i),r=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Cn(c):(c=dn(t)?xs:zt.current,c=qo(e,c));var f=t.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&kv(e,o,r,c),di=!1;var g=e.memoizedState;o.state=g,Cd(e,r,o,i),u=e.memoizedState,a!==r||g!==u||cn.current||di?(typeof f=="function"&&(Lp(e,t,f,r),u=e.memoizedState),(a=di||Rv(e,t,a,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,rE(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Fn(e.type,a),o.props=c,m=e.pendingProps,g=o.context,u=t.contextType,typeof u=="object"&&u!==null?u=Cn(u):(u=dn(t)?xs:zt.current,u=qo(e,u));var E=t.getDerivedStateFromProps;(f=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||g!==u)&&kv(e,o,r,u),di=!1,g=e.memoizedState,o.state=g,Cd(e,r,o,i);var b=e.memoizedState;a!==m||g!==b||cn.current||di?(typeof E=="function"&&(Lp(e,t,E,r),b=e.memoizedState),(c=di||Rv(e,t,c,r,g,b,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,b,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,b,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&g===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&g===n.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=b),o.props=r,o.state=b,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&g===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&g===n.memoizedState||(e.flags|=1024),r=!1)}return Up(n,e,t,r,s,i)}function Up(n,e,t,r,i,s){bE(n,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&vv(e,t,!1),Fr(n,e,s);r=e.stateNode,pb.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,n!==null&&o?(e.child=Go(e,n.child,null,s),e.child=Go(e,null,a,s)):qt(n,e,a,s),e.memoizedState=r.state,i&&vv(e,t,!0),e.child}function PE(n){var e=n.stateNode;e.pendingContext?_v(n,e.pendingContext,e.pendingContext!==e.context):e.context&&_v(n,e.context,!1),pg(n,e.containerInfo)}function Ov(n,e,t,r,i){return Wo(),lg(i),e.flags|=256,qt(n,e,t,r),e.child}var zp={dehydrated:null,treeContext:null,retryLane:0};function Bp(n){return{baseLanes:n,cachePool:null,transitions:null}}function NE(n,e,t){var r=e.pendingProps,i=qe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(i|=1),Ne(qe,i&1),n===null)return Vp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,n=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vh(o,r,0,null),n=ws(n,r,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Bp(t),e.memoizedState=zp,n):Eg(e,o));if(i=n.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return mb(n,e,o,r,a,i,t);if(s){s=r.fallback,o=e.mode,i=n.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Ri(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ri(a,s):(s=ws(s,o,t,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=n.child.memoizedState,o=o===null?Bp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=zp,r}return s=n.child,n=s.sibling,r=Ri(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=t),r.return=e,r.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=r,e.memoizedState=null,r}function Eg(n,e){return e=vh({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Oc(n,e,t,r){return r!==null&&lg(r),Go(e,n.child,null,t),n=Eg(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function mb(n,e,t,r,i,s,o){if(t)return e.flags&256?(e.flags&=-257,r=Lf(Error(B(422))),Oc(n,e,o,r)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=vh({mode:"visible",children:r.children},i,0,null),s=ws(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Go(e,n.child,null,o),e.child.memoizedState=Bp(o),e.memoizedState=zp,s);if(!(e.mode&1))return Oc(n,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=Lf(s,r,void 0),Oc(n,e,o,r)}if(a=(o&n.childLanes)!==0,on||a){if(r=Et,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,jr(n,i),$n(r,n,i,-1))}return kg(),r=Lf(Error(B(421))),Oc(n,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=n.child,e=kb.bind(null,n),i._reactRetry=e,null):(n=s.treeContext,yn=Ti(i.nextSibling),vn=e,Ue=!0,zn=null,n!==null&&(An[Rn++]=br,An[Rn++]=Pr,An[Rn++]=Ss,br=n.id,Pr=n.overflow,Ss=e),e=Eg(e,r.children),e.flags|=4096,e)}function Lv(n,e,t){n.lanes|=e;var r=n.alternate;r!==null&&(r.lanes|=e),Op(n.return,e,t)}function Mf(n,e,t,r,i){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=t,s.tailMode=i)}function CE(n,e,t){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(qt(n,e,r.children,t),r=qe.current,r&2)r=r&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Lv(n,t,e);else if(n.tag===19)Lv(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}r&=1}if(Ne(qe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(t=e.child,i=null;t!==null;)n=t.alternate,n!==null&&Dd(n)===null&&(i=t),t=t.sibling;t=i,t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null),Mf(e,!1,i,t,s);break;case"backwards":for(t=null,i=e.child,e.child=null;i!==null;){if(n=i.alternate,n!==null&&Dd(n)===null){e.child=i;break}n=i.sibling,i.sibling=t,t=i,i=n}Mf(e,!0,t,null,s);break;case"together":Mf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function td(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Fr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Rs|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(B(153));if(e.child!==null){for(n=e.child,t=Ri(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ri(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function gb(n,e,t){switch(e.tag){case 3:PE(e),Wo();break;case 5:iE(e);break;case 1:dn(e.type)&&Rd(e);break;case 4:pg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ne(Pd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ne(qe,qe.current&1),e.flags|=128,null):t&e.child.childLanes?NE(n,e,t):(Ne(qe,qe.current&1),n=Fr(n,e,t),n!==null?n.sibling:null);Ne(qe,qe.current&1);break;case 19:if(r=(t&e.childLanes)!==0,n.flags&128){if(r)return CE(n,e,t);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ne(qe,qe.current),r)break;return null;case 22:case 23:return e.lanes=0,kE(n,e,t)}return Fr(n,e,t)}var DE,$p,VE,OE;DE=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};$p=function(){};VE=function(n,e,t,r){var i=n.memoizedProps;if(i!==r){n=e.stateNode,ms(cr.current);var s=null;switch(t){case"input":i=dp(n,i),r=dp(n,r),s=[];break;case"select":i=Ke({},i,{value:void 0}),r=Ke({},r,{value:void 0}),s=[];break;case"textarea":i=pp(n,i),r=pp(n,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(n.onclick=Sd)}gp(t,r);var o;t=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Bl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(s||(s=[]),s.push(c,t)),t=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Bl.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ve("scroll",n),s||a===u||(s=[])):(s=s||[]).push(c,u))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};OE=function(n,e,t,r){t!==r&&(e.flags|=4)};function rl(n,e){if(!Ue)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:r.sibling=null}}function jt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,r=0;if(e)for(var i=n.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=n,i=i.sibling;else for(i=n.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=n,i=i.sibling;return n.subtreeFlags|=r,n.childLanes=t,e}function yb(n,e,t){var r=e.pendingProps;switch(ag(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return dn(e.type)&&Ad(),jt(e),null;case 3:return r=e.stateNode,Ko(),Le(cn),Le(zt),gg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(Dc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zn!==null&&(Jp(zn),zn=null))),$p(n,e),jt(e),null;case 5:mg(e);var i=ms(eu.current);if(t=e.type,n!==null&&e.stateNode!=null)VE(n,e,t,r,i),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return jt(e),null}if(n=ms(cr.current),Dc(e)){r=e.stateNode,t=e.type;var s=e.memoizedProps;switch(r[tr]=e,r[Xl]=s,n=(e.mode&1)!==0,t){case"dialog":Ve("cancel",r),Ve("close",r);break;case"iframe":case"object":case"embed":Ve("load",r);break;case"video":case"audio":for(i=0;i<gl.length;i++)Ve(gl[i],r);break;case"source":Ve("error",r);break;case"img":case"image":case"link":Ve("error",r),Ve("load",r);break;case"details":Ve("toggle",r);break;case"input":W_(r,s),Ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ve("invalid",r);break;case"textarea":K_(r,s),Ve("invalid",r)}gp(t,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Cc(r.textContent,a,n),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Cc(r.textContent,a,n),i=["children",""+a]):Bl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ve("scroll",r)}switch(t){case"input":xc(r),G_(r,s,!0);break;case"textarea":xc(r),H_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Sd)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=uI(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof r.is=="string"?n=o.createElement(t,{is:r.is}):(n=o.createElement(t),t==="select"&&(o=n,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):n=o.createElementNS(n,t),n[tr]=e,n[Xl]=r,DE(n,e,!1,!1),e.stateNode=n;e:{switch(o=yp(t,r),t){case"dialog":Ve("cancel",n),Ve("close",n),i=r;break;case"iframe":case"object":case"embed":Ve("load",n),i=r;break;case"video":case"audio":for(i=0;i<gl.length;i++)Ve(gl[i],n);i=r;break;case"source":Ve("error",n),i=r;break;case"img":case"image":case"link":Ve("error",n),Ve("load",n),i=r;break;case"details":Ve("toggle",n),i=r;break;case"input":W_(n,r),i=dp(n,r),Ve("invalid",n);break;case"option":i=r;break;case"select":n._wrapperState={wasMultiple:!!r.multiple},i=Ke({},r,{value:void 0}),Ve("invalid",n);break;case"textarea":K_(n,r),i=pp(n,r),Ve("invalid",n);break;default:i=r}gp(t,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?hI(n,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&cI(n,u)):s==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&$l(n,u):typeof u=="number"&&$l(n,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Bl.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ve("scroll",n):u!=null&&Gm(n,s,u,o))}switch(t){case"input":xc(n),G_(n,r,!1);break;case"textarea":xc(n),H_(n);break;case"option":r.value!=null&&n.setAttribute("value",""+Pi(r.value));break;case"select":n.multiple=!!r.multiple,s=r.value,s!=null?No(n,!!r.multiple,s,!1):r.defaultValue!=null&&No(n,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(n.onclick=Sd)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(n&&e.stateNode!=null)OE(n,e,n.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(t=ms(eu.current),ms(cr.current),Dc(e)){if(r=e.stateNode,t=e.memoizedProps,r[tr]=e,(s=r.nodeValue!==t)&&(n=vn,n!==null))switch(n.tag){case 3:Cc(r.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Cc(r.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[tr]=e,e.stateNode=r}return jt(e),null;case 13:if(Le(qe),r=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ue&&yn!==null&&e.mode&1&&!(e.flags&128))ZI(),Wo(),e.flags|=98560,s=!1;else if(s=Dc(e),r!==null&&r.dehydrated!==null){if(n===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[tr]=e}else Wo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else zn!==null&&(Jp(zn),zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(r=r!==null,r!==(n!==null&&n.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(n===null||qe.current&1?pt===0&&(pt=3):kg())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return Ko(),$p(n,e),n===null&&Yl(e.stateNode.containerInfo),jt(e),null;case 10:return dg(e.type._context),jt(e),null;case 17:return dn(e.type)&&Ad(),jt(e),null;case 19:if(Le(qe),s=e.memoizedState,s===null)return jt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)rl(s,!1);else{if(pt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Dd(n),o!==null){for(e.flags|=128,rl(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=t,t=e.child;t!==null;)s=t,n=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Ne(qe,qe.current&1|2),e.child}n=n.sibling}s.tail!==null&&rt()>Qo&&(e.flags|=128,r=!0,rl(s,!1),e.lanes=4194304)}else{if(!r)if(n=Dd(o),n!==null){if(e.flags|=128,r=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),rl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ue)return jt(e),null}else 2*rt()-s.renderingStartTime>Qo&&t!==1073741824&&(e.flags|=128,r=!0,rl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=rt(),e.sibling=null,t=qe.current,Ne(qe,r?t&1|2:t&1),e):(jt(e),null);case 22:case 23:return Rg(),r=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?mn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function _b(n,e){switch(ag(e),e.tag){case 1:return dn(e.type)&&Ad(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ko(),Le(cn),Le(zt),gg(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return mg(e),null;case 13:if(Le(qe),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Wo()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Le(qe),null;case 4:return Ko(),null;case 10:return dg(e.type._context),null;case 22:case 23:return Rg(),null;case 24:return null;default:return null}}var Lc=!1,Ut=!1,vb=typeof WeakSet=="function"?WeakSet:Set,X=null;function ko(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Ye(n,e,r)}else t.current=null}function qp(n,e,t){try{t()}catch(r){Ye(n,e,r)}}var Mv=!1;function wb(n,e){if(Rp=Ed,n=UI(),sg(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,u=-1,c=0,f=0,m=n,g=null;t:for(;;){for(var E;m!==t||i!==0&&m.nodeType!==3||(a=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(E=m.firstChild)!==null;)g=m,m=E;for(;;){if(m===n)break t;if(g===t&&++c===i&&(a=o),g===s&&++f===r&&(u=o),(E=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=E}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(kp={focusedElem:n,selectionRange:t},Ed=!1,X=e;X!==null;)if(e=X,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,X=n;else for(;X!==null;){e=X;try{var b=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var P=b.memoizedProps,M=b.memoizedState,S=e.stateNode,v=S.getSnapshotBeforeUpdate(e.elementType===e.type?P:Fn(e.type,P),M);S.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(V){Ye(e,e.return,V)}if(n=e.sibling,n!==null){n.return=e.return,X=n;break}X=e.return}return b=Mv,Mv=!1,b}function Pl(n,e,t){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&n)===n){var s=i.destroy;i.destroy=void 0,s!==void 0&&qp(e,t,s)}i=i.next}while(i!==r)}}function yh(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}}function Wp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function LE(n){var e=n.alternate;e!==null&&(n.alternate=null,LE(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[tr],delete e[Xl],delete e[Np],delete e[nb],delete e[rb])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function ME(n){return n.tag===5||n.tag===3||n.tag===4}function jv(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||ME(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Gp(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Sd));else if(r!==4&&(n=n.child,n!==null))for(Gp(n,e,t),n=n.sibling;n!==null;)Gp(n,e,t),n=n.sibling}function Kp(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(r!==4&&(n=n.child,n!==null))for(Kp(n,e,t),n=n.sibling;n!==null;)Kp(n,e,t),n=n.sibling}var kt=null,Un=!1;function ri(n,e,t){for(t=t.child;t!==null;)jE(n,e,t),t=t.sibling}function jE(n,e,t){if(ur&&typeof ur.onCommitFiberUnmount=="function")try{ur.onCommitFiberUnmount(uh,t)}catch{}switch(t.tag){case 5:Ut||ko(t,e);case 6:var r=kt,i=Un;kt=null,ri(n,e,t),kt=r,Un=i,kt!==null&&(Un?(n=kt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):kt.removeChild(t.stateNode));break;case 18:kt!==null&&(Un?(n=kt,t=t.stateNode,n.nodeType===8?Pf(n.parentNode,t):n.nodeType===1&&Pf(n,t),Kl(n)):Pf(kt,t.stateNode));break;case 4:r=kt,i=Un,kt=t.stateNode.containerInfo,Un=!0,ri(n,e,t),kt=r,Un=i;break;case 0:case 11:case 14:case 15:if(!Ut&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&qp(t,e,o),i=i.next}while(i!==r)}ri(n,e,t);break;case 1:if(!Ut&&(ko(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){Ye(t,e,a)}ri(n,e,t);break;case 21:ri(n,e,t);break;case 22:t.mode&1?(Ut=(r=Ut)||t.memoizedState!==null,ri(n,e,t),Ut=r):ri(n,e,t);break;default:ri(n,e,t)}}function Fv(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new vb),e.forEach(function(r){var i=bb.bind(null,n,r);t.has(r)||(t.add(r),r.then(i,i))})}}function jn(n,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,Un=!1;break e;case 3:kt=a.stateNode.containerInfo,Un=!0;break e;case 4:kt=a.stateNode.containerInfo,Un=!0;break e}a=a.return}if(kt===null)throw Error(B(160));jE(s,o,i),kt=null,Un=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ye(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)FE(e,n),e=e.sibling}function FE(n,e){var t=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(jn(e,n),Zn(n),r&4){try{Pl(3,n,n.return),yh(3,n)}catch(P){Ye(n,n.return,P)}try{Pl(5,n,n.return)}catch(P){Ye(n,n.return,P)}}break;case 1:jn(e,n),Zn(n),r&512&&t!==null&&ko(t,t.return);break;case 5:if(jn(e,n),Zn(n),r&512&&t!==null&&ko(t,t.return),n.flags&32){var i=n.stateNode;try{$l(i,"")}catch(P){Ye(n,n.return,P)}}if(r&4&&(i=n.stateNode,i!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,u=n.updateQueue;if(n.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&aI(i,s),yp(a,o);var c=yp(a,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?hI(i,m):f==="dangerouslySetInnerHTML"?cI(i,m):f==="children"?$l(i,m):Gm(i,f,m,c)}switch(a){case"input":hp(i,s);break;case"textarea":lI(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?No(i,!!s.multiple,E,!1):g!==!!s.multiple&&(s.defaultValue!=null?No(i,!!s.multiple,s.defaultValue,!0):No(i,!!s.multiple,s.multiple?[]:"",!1))}i[Xl]=s}catch(P){Ye(n,n.return,P)}}break;case 6:if(jn(e,n),Zn(n),r&4){if(n.stateNode===null)throw Error(B(162));i=n.stateNode,s=n.memoizedProps;try{i.nodeValue=s}catch(P){Ye(n,n.return,P)}}break;case 3:if(jn(e,n),Zn(n),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Kl(e.containerInfo)}catch(P){Ye(n,n.return,P)}break;case 4:jn(e,n),Zn(n);break;case 13:jn(e,n),Zn(n),i=n.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Sg=rt())),r&4&&Fv(n);break;case 22:if(f=t!==null&&t.memoizedState!==null,n.mode&1?(Ut=(c=Ut)||f,jn(e,n),Ut=c):jn(e,n),Zn(n),r&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!f&&n.mode&1)for(X=n,f=n.child;f!==null;){for(m=X=f;X!==null;){switch(g=X,E=g.child,g.tag){case 0:case 11:case 14:case 15:Pl(4,g,g.return);break;case 1:ko(g,g.return);var b=g.stateNode;if(typeof b.componentWillUnmount=="function"){r=g,t=g.return;try{e=r,b.props=e.memoizedProps,b.state=e.memoizedState,b.componentWillUnmount()}catch(P){Ye(r,t,P)}}break;case 5:ko(g,g.return);break;case 22:if(g.memoizedState!==null){zv(m);continue}}E!==null?(E.return=g,X=E):zv(m)}f=f.sibling}e:for(f=null,m=n;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=dI("display",o))}catch(P){Ye(n,n.return,P)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(P){Ye(n,n.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===n)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===n)break e;for(;m.sibling===null;){if(m.return===null||m.return===n)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:jn(e,n),Zn(n),r&4&&Fv(n);break;case 21:break;default:jn(e,n),Zn(n)}}function Zn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(ME(t)){var r=t;break e}t=t.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($l(i,""),r.flags&=-33);var s=jv(n);Kp(n,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=jv(n);Gp(n,a,o);break;default:throw Error(B(161))}}catch(u){Ye(n,n.return,u)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Ib(n,e,t){X=n,UE(n)}function UE(n,e,t){for(var r=(n.mode&1)!==0;X!==null;){var i=X,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Lc;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Ut;a=Lc;var c=Ut;if(Lc=o,(Ut=u)&&!c)for(X=i;X!==null;)o=X,u=o.child,o.tag===22&&o.memoizedState!==null?Bv(i):u!==null?(u.return=o,X=u):Bv(i);for(;s!==null;)X=s,UE(s),s=s.sibling;X=i,Lc=a,Ut=c}Uv(n)}else i.subtreeFlags&8772&&s!==null?(s.return=i,X=s):Uv(n)}}function Uv(n){for(;X!==null;){var e=X;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ut||yh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ut)if(t===null)r.componentDidMount();else{var i=e.elementType===e.type?t.memoizedProps:Fn(e.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&xv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}xv(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Kl(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Ut||e.flags&512&&Wp(e)}catch(g){Ye(e,e.return,g)}}if(e===n){X=null;break}if(t=e.sibling,t!==null){t.return=e.return,X=t;break}X=e.return}}function zv(n){for(;X!==null;){var e=X;if(e===n){X=null;break}var t=e.sibling;if(t!==null){t.return=e.return,X=t;break}X=e.return}}function Bv(n){for(;X!==null;){var e=X;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{yh(4,e)}catch(u){Ye(e,t,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ye(e,i,u)}}var s=e.return;try{Wp(e)}catch(u){Ye(e,s,u)}break;case 5:var o=e.return;try{Wp(e)}catch(u){Ye(e,o,u)}}}catch(u){Ye(e,e.return,u)}if(e===n){X=null;break}var a=e.sibling;if(a!==null){a.return=e.return,X=a;break}X=e.return}}var Eb=Math.ceil,Ld=qr.ReactCurrentDispatcher,Tg=qr.ReactCurrentOwner,Pn=qr.ReactCurrentBatchConfig,Ee=0,Et=null,dt=null,Nt=0,mn=0,bo=qi(0),pt=0,iu=null,Rs=0,_h=0,xg=0,Nl=null,sn=null,Sg=0,Qo=1/0,Rr=null,Md=!1,Hp=null,Si=null,Mc=!1,yi=null,jd=0,Cl=0,Qp=null,nd=-1,rd=0;function Kt(){return Ee&6?rt():nd!==-1?nd:nd=rt()}function Ai(n){return n.mode&1?Ee&2&&Nt!==0?Nt&-Nt:sb.transition!==null?(rd===0&&(rd=xI()),rd):(n=ke,n!==0||(n=window.event,n=n===void 0?16:NI(n.type)),n):1}function $n(n,e,t,r){if(50<Cl)throw Cl=0,Qp=null,Error(B(185));bu(n,t,r),(!(Ee&2)||n!==Et)&&(n===Et&&(!(Ee&2)&&(_h|=t),pt===4&&fi(n,Nt)),hn(n,r),t===1&&Ee===0&&!(e.mode&1)&&(Qo=rt()+500,ph&&Wi()))}function hn(n,e){var t=n.callbackNode;sk(n,e);var r=Id(n,n===Et?Nt:0);if(r===0)t!==null&&J_(t),n.callbackNode=null,n.callbackPriority=0;else if(e=r&-r,n.callbackPriority!==e){if(t!=null&&J_(t),e===1)n.tag===0?ib($v.bind(null,n)):YI($v.bind(null,n)),eb(function(){!(Ee&6)&&Wi()}),t=null;else{switch(SI(r)){case 1:t=Jm;break;case 4:t=EI;break;case 16:t=wd;break;case 536870912:t=TI;break;default:t=wd}t=HE(t,zE.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function zE(n,e){if(nd=-1,rd=0,Ee&6)throw Error(B(327));var t=n.callbackNode;if(Lo()&&n.callbackNode!==t)return null;var r=Id(n,n===Et?Nt:0);if(r===0)return null;if(r&30||r&n.expiredLanes||e)e=Fd(n,r);else{e=r;var i=Ee;Ee|=2;var s=$E();(Et!==n||Nt!==e)&&(Rr=null,Qo=rt()+500,vs(n,e));do try{Sb();break}catch(a){BE(n,a)}while(!0);cg(),Ld.current=s,Ee=i,dt!==null?e=0:(Et=null,Nt=0,e=pt)}if(e!==0){if(e===2&&(i=Ep(n),i!==0&&(r=i,e=Yp(n,i))),e===1)throw t=iu,vs(n,0),fi(n,r),hn(n,rt()),t;if(e===6)fi(n,r);else{if(i=n.current.alternate,!(r&30)&&!Tb(i)&&(e=Fd(n,r),e===2&&(s=Ep(n),s!==0&&(r=s,e=Yp(n,s))),e===1))throw t=iu,vs(n,0),fi(n,r),hn(n,rt()),t;switch(n.finishedWork=i,n.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:ss(n,sn,Rr);break;case 3:if(fi(n,r),(r&130023424)===r&&(e=Sg+500-rt(),10<e)){if(Id(n,0)!==0)break;if(i=n.suspendedLanes,(i&r)!==r){Kt(),n.pingedLanes|=n.suspendedLanes&i;break}n.timeoutHandle=Pp(ss.bind(null,n,sn,Rr),e);break}ss(n,sn,Rr);break;case 4:if(fi(n,r),(r&4194240)===r)break;for(e=n.eventTimes,i=-1;0<r;){var o=31-Bn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=rt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Eb(r/1960))-r,10<r){n.timeoutHandle=Pp(ss.bind(null,n,sn,Rr),r);break}ss(n,sn,Rr);break;case 5:ss(n,sn,Rr);break;default:throw Error(B(329))}}}return hn(n,rt()),n.callbackNode===t?zE.bind(null,n):null}function Yp(n,e){var t=Nl;return n.current.memoizedState.isDehydrated&&(vs(n,e).flags|=256),n=Fd(n,e),n!==2&&(e=sn,sn=t,e!==null&&Jp(e)),n}function Jp(n){sn===null?sn=n:sn.push.apply(sn,n)}function Tb(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],s=i.getSnapshot;i=i.value;try{if(!Wn(s(),i))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fi(n,e){for(e&=~xg,e&=~_h,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Bn(e),r=1<<t;n[t]=-1,e&=~r}}function $v(n){if(Ee&6)throw Error(B(327));Lo();var e=Id(n,0);if(!(e&1))return hn(n,rt()),null;var t=Fd(n,e);if(n.tag!==0&&t===2){var r=Ep(n);r!==0&&(e=r,t=Yp(n,r))}if(t===1)throw t=iu,vs(n,0),fi(n,e),hn(n,rt()),t;if(t===6)throw Error(B(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,ss(n,sn,Rr),hn(n,rt()),null}function Ag(n,e){var t=Ee;Ee|=1;try{return n(e)}finally{Ee=t,Ee===0&&(Qo=rt()+500,ph&&Wi())}}function ks(n){yi!==null&&yi.tag===0&&!(Ee&6)&&Lo();var e=Ee;Ee|=1;var t=Pn.transition,r=ke;try{if(Pn.transition=null,ke=1,n)return n()}finally{ke=r,Pn.transition=t,Ee=e,!(Ee&6)&&Wi()}}function Rg(){mn=bo.current,Le(bo)}function vs(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Zk(t)),dt!==null)for(t=dt.return;t!==null;){var r=t;switch(ag(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ad();break;case 3:Ko(),Le(cn),Le(zt),gg();break;case 5:mg(r);break;case 4:Ko();break;case 13:Le(qe);break;case 19:Le(qe);break;case 10:dg(r.type._context);break;case 22:case 23:Rg()}t=t.return}if(Et=n,dt=n=Ri(n.current,null),Nt=mn=e,pt=0,iu=null,xg=_h=Rs=0,sn=Nl=null,ps!==null){for(e=0;e<ps.length;e++)if(t=ps[e],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,s=t.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}t.pending=r}ps=null}return n}function BE(n,e){do{var t=dt;try{if(cg(),Zc.current=Od,Vd){for(var r=We.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vd=!1}if(As=0,wt=ft=We=null,bl=!1,tu=0,Tg.current=null,t===null||t.return===null){pt=1,iu=e,dt=null;break}e:{var s=n,o=t.return,a=t,u=e;if(e=Nt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=a,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var E=Pv(o);if(E!==null){E.flags&=-257,Nv(E,o,a,s,e),E.mode&1&&bv(s,c,e),e=E,u=c;var b=e.updateQueue;if(b===null){var P=new Set;P.add(u),e.updateQueue=P}else b.add(u);break e}else{if(!(e&1)){bv(s,c,e),kg();break e}u=Error(B(426))}}else if(Ue&&a.mode&1){var M=Pv(o);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Nv(M,o,a,s,e),lg(Ho(u,a));break e}}s=u=Ho(u,a),pt!==4&&(pt=2),Nl===null?Nl=[s]:Nl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=SE(s,u,e);Tv(s,S);break e;case 1:a=u;var v=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Si===null||!Si.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=AE(s,a,e);Tv(s,V);break e}}s=s.return}while(s!==null)}WE(t)}catch(z){e=z,dt===t&&t!==null&&(dt=t=t.return);continue}break}while(!0)}function $E(){var n=Ld.current;return Ld.current=Od,n===null?Od:n}function kg(){(pt===0||pt===3||pt===2)&&(pt=4),Et===null||!(Rs&268435455)&&!(_h&268435455)||fi(Et,Nt)}function Fd(n,e){var t=Ee;Ee|=2;var r=$E();(Et!==n||Nt!==e)&&(Rr=null,vs(n,e));do try{xb();break}catch(i){BE(n,i)}while(!0);if(cg(),Ee=t,Ld.current=r,dt!==null)throw Error(B(261));return Et=null,Nt=0,pt}function xb(){for(;dt!==null;)qE(dt)}function Sb(){for(;dt!==null&&!YR();)qE(dt)}function qE(n){var e=KE(n.alternate,n,mn);n.memoizedProps=n.pendingProps,e===null?WE(n):dt=e,Tg.current=null}function WE(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=_b(t,e),t!==null){t.flags&=32767,dt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{pt=6,dt=null;return}}else if(t=yb(t,e,mn),t!==null){dt=t;return}if(e=e.sibling,e!==null){dt=e;return}dt=e=n}while(e!==null);pt===0&&(pt=5)}function ss(n,e,t){var r=ke,i=Pn.transition;try{Pn.transition=null,ke=1,Ab(n,e,t,r)}finally{Pn.transition=i,ke=r}return null}function Ab(n,e,t,r){do Lo();while(yi!==null);if(Ee&6)throw Error(B(327));t=n.finishedWork;var i=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(B(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(ok(n,s),n===Et&&(dt=Et=null,Nt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Mc||(Mc=!0,HE(wd,function(){return Lo(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Pn.transition,Pn.transition=null;var o=ke;ke=1;var a=Ee;Ee|=4,Tg.current=null,wb(n,t),FE(t,n),Gk(kp),Ed=!!Rp,kp=Rp=null,n.current=t,Ib(t),JR(),Ee=a,ke=o,Pn.transition=s}else n.current=t;if(Mc&&(Mc=!1,yi=n,jd=i),s=n.pendingLanes,s===0&&(Si=null),ek(t.stateNode),hn(n,rt()),e!==null)for(r=n.onRecoverableError,t=0;t<e.length;t++)i=e[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Md)throw Md=!1,n=Hp,Hp=null,n;return jd&1&&n.tag!==0&&Lo(),s=n.pendingLanes,s&1?n===Qp?Cl++:(Cl=0,Qp=n):Cl=0,Wi(),null}function Lo(){if(yi!==null){var n=SI(jd),e=Pn.transition,t=ke;try{if(Pn.transition=null,ke=16>n?16:n,yi===null)var r=!1;else{if(n=yi,yi=null,jd=0,Ee&6)throw Error(B(331));var i=Ee;for(Ee|=4,X=n.current;X!==null;){var s=X,o=s.child;if(X.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(X=c;X!==null;){var f=X;switch(f.tag){case 0:case 11:case 15:Pl(8,f,s)}var m=f.child;if(m!==null)m.return=f,X=m;else for(;X!==null;){f=X;var g=f.sibling,E=f.return;if(LE(f),f===c){X=null;break}if(g!==null){g.return=E,X=g;break}X=E}}}var b=s.alternate;if(b!==null){var P=b.child;if(P!==null){b.child=null;do{var M=P.sibling;P.sibling=null,P=M}while(P!==null)}}X=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,X=o;else e:for(;X!==null;){if(s=X,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Pl(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,X=S;break e}X=s.return}}var v=n.current;for(X=v;X!==null;){o=X;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,X=A;else e:for(o=v;X!==null;){if(a=X,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:yh(9,a)}}catch(z){Ye(a,a.return,z)}if(a===o){X=null;break e}var V=a.sibling;if(V!==null){V.return=a.return,X=V;break e}X=a.return}}if(Ee=i,Wi(),ur&&typeof ur.onPostCommitFiberRoot=="function")try{ur.onPostCommitFiberRoot(uh,n)}catch{}r=!0}return r}finally{ke=t,Pn.transition=e}}return!1}function qv(n,e,t){e=Ho(t,e),e=SE(n,e,1),n=xi(n,e,1),e=Kt(),n!==null&&(bu(n,1,e),hn(n,e))}function Ye(n,e,t){if(n.tag===3)qv(n,n,t);else for(;e!==null;){if(e.tag===3){qv(e,n,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Si===null||!Si.has(r))){n=Ho(t,n),n=AE(e,n,1),e=xi(e,n,1),n=Kt(),e!==null&&(bu(e,1,n),hn(e,n));break}}e=e.return}}function Rb(n,e,t){var r=n.pingCache;r!==null&&r.delete(e),e=Kt(),n.pingedLanes|=n.suspendedLanes&t,Et===n&&(Nt&t)===t&&(pt===4||pt===3&&(Nt&130023424)===Nt&&500>rt()-Sg?vs(n,0):xg|=t),hn(n,e)}function GE(n,e){e===0&&(n.mode&1?(e=Rc,Rc<<=1,!(Rc&130023424)&&(Rc=4194304)):e=1);var t=Kt();n=jr(n,e),n!==null&&(bu(n,e,t),hn(n,t))}function kb(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),GE(n,t)}function bb(n,e){var t=0;switch(n.tag){case 13:var r=n.stateNode,i=n.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=n.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),GE(n,t)}var KE;KE=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||cn.current)on=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return on=!1,gb(n,e,t);on=!!(n.flags&131072)}else on=!1,Ue&&e.flags&1048576&&JI(e,bd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;td(n,e),n=e.pendingProps;var i=qo(e,zt.current);Oo(e,t),i=_g(null,e,r,n,i,t);var s=vg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(r)?(s=!0,Rd(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fg(e),i.updater=gh,e.stateNode=i,i._reactInternals=e,Mp(e,r,n,t),e=Up(null,e,r,!0,s,t)):(e.tag=0,Ue&&s&&og(e),qt(null,e,i,t),e=e.child),e;case 16:r=e.elementType;e:{switch(td(n,e),n=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Nb(r),n=Fn(r,n),i){case 0:e=Fp(null,e,r,n,t);break e;case 1:e=Vv(null,e,r,n,t);break e;case 11:e=Cv(null,e,r,n,t);break e;case 14:e=Dv(null,e,r,Fn(r.type,n),t);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Fn(r,i),Fp(n,e,r,i,t);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Fn(r,i),Vv(n,e,r,i,t);case 3:e:{if(PE(e),n===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,rE(n,e),Cd(e,r,null,t);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ho(Error(B(423)),e),e=Ov(n,e,r,t,i);break e}else if(r!==i){i=Ho(Error(B(424)),e),e=Ov(n,e,r,t,i);break e}else for(yn=Ti(e.stateNode.containerInfo.firstChild),vn=e,Ue=!0,zn=null,t=tE(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Wo(),r===i){e=Fr(n,e,t);break e}qt(n,e,r,t)}e=e.child}return e;case 5:return iE(e),n===null&&Vp(e),r=e.type,i=e.pendingProps,s=n!==null?n.memoizedProps:null,o=i.children,bp(r,i)?o=null:s!==null&&bp(r,s)&&(e.flags|=32),bE(n,e),qt(n,e,o,t),e.child;case 6:return n===null&&Vp(e),null;case 13:return NE(n,e,t);case 4:return pg(e,e.stateNode.containerInfo),r=e.pendingProps,n===null?e.child=Go(e,null,r,t):qt(n,e,r,t),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Fn(r,i),Cv(n,e,r,i,t);case 7:return qt(n,e,e.pendingProps,t),e.child;case 8:return qt(n,e,e.pendingProps.children,t),e.child;case 12:return qt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ne(Pd,r._currentValue),r._currentValue=o,s!==null)if(Wn(s.value,o)){if(s.children===i.children&&!cn.current){e=Fr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Vr(-1,t&-t),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=t,u=s.alternate,u!==null&&(u.lanes|=t),Op(s.return,t,e),a.lanes|=t;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Op(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qt(n,e,i.children,t),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Oo(e,t),i=Cn(i),r=r(i),e.flags|=1,qt(n,e,r,t),e.child;case 14:return r=e.type,i=Fn(r,e.pendingProps),i=Fn(r.type,i),Dv(n,e,r,i,t);case 15:return RE(n,e,e.type,e.pendingProps,t);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Fn(r,i),td(n,e),e.tag=1,dn(r)?(n=!0,Rd(e)):n=!1,Oo(e,t),xE(e,r,i),Mp(e,r,i,t),Up(null,e,r,!0,n,t);case 19:return CE(n,e,t);case 22:return kE(n,e,t)}throw Error(B(156,e.tag))};function HE(n,e){return II(n,e)}function Pb(n,e,t,r){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(n,e,t,r){return new Pb(n,e,t,r)}function bg(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Nb(n){if(typeof n=="function")return bg(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Hm)return 11;if(n===Qm)return 14}return 2}function Ri(n,e){var t=n.alternate;return t===null?(t=kn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function id(n,e,t,r,i,s){var o=2;if(r=n,typeof n=="function")bg(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case vo:return ws(t.children,i,s,e);case Km:o=8,i|=8;break;case ap:return n=kn(12,t,e,i|2),n.elementType=ap,n.lanes=s,n;case lp:return n=kn(13,t,e,i),n.elementType=lp,n.lanes=s,n;case up:return n=kn(19,t,e,i),n.elementType=up,n.lanes=s,n;case iI:return vh(t,i,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case nI:o=10;break e;case rI:o=9;break e;case Hm:o=11;break e;case Qm:o=14;break e;case ci:o=16,r=null;break e}throw Error(B(130,n==null?n:typeof n,""))}return e=kn(o,t,e,i),e.elementType=n,e.type=r,e.lanes=s,e}function ws(n,e,t,r){return n=kn(7,n,r,e),n.lanes=t,n}function vh(n,e,t,r){return n=kn(22,n,r,e),n.elementType=iI,n.lanes=t,n.stateNode={isHidden:!1},n}function jf(n,e,t){return n=kn(6,n,null,e),n.lanes=t,n}function Ff(n,e,t){return e=kn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Cb(n,e,t,r,i){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vf(0),this.expirationTimes=vf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pg(n,e,t,r,i,s,o,a,u){return n=new Cb(n,e,t,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},fg(s),n}function Db(n,e,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_o,key:r==null?null:""+r,children:n,containerInfo:e,implementation:t}}function QE(n){if(!n)return Ni;n=n._reactInternals;e:{if(Bs(n)!==n||n.tag!==1)throw Error(B(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(n.tag===1){var t=n.type;if(dn(t))return QI(n,t,e)}return e}function YE(n,e,t,r,i,s,o,a,u){return n=Pg(t,r,!0,n,i,s,o,a,u),n.context=QE(null),t=n.current,r=Kt(),i=Ai(t),s=Vr(r,i),s.callback=e??null,xi(t,s,i),n.current.lanes=i,bu(n,i,r),hn(n,r),n}function wh(n,e,t,r){var i=e.current,s=Kt(),o=Ai(i);return t=QE(t),e.context===null?e.context=t:e.pendingContext=t,e=Vr(s,o),e.payload={element:n},r=r===void 0?null:r,r!==null&&(e.callback=r),n=xi(i,e,o),n!==null&&($n(n,i,o,s),Xc(n,i,o)),o}function Ud(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Wv(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Ng(n,e){Wv(n,e),(n=n.alternate)&&Wv(n,e)}function Vb(){return null}var JE=typeof reportError=="function"?reportError:function(n){console.error(n)};function Cg(n){this._internalRoot=n}Ih.prototype.render=Cg.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(B(409));wh(n,e,null,null)};Ih.prototype.unmount=Cg.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ks(function(){wh(null,n,null,null)}),e[Mr]=null}};function Ih(n){this._internalRoot=n}Ih.prototype.unstable_scheduleHydration=function(n){if(n){var e=kI();n={blockedOn:null,target:n,priority:e};for(var t=0;t<hi.length&&e!==0&&e<hi[t].priority;t++);hi.splice(t,0,n),t===0&&PI(n)}};function Dg(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Eh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Gv(){}function Ob(n,e,t,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Ud(o);s.call(c)}}var o=YE(e,r,n,0,null,!1,!1,"",Gv);return n._reactRootContainer=o,n[Mr]=o.current,Yl(n.nodeType===8?n.parentNode:n),ks(),o}for(;i=n.lastChild;)n.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Ud(u);a.call(c)}}var u=Pg(n,0,!1,null,null,!1,!1,"",Gv);return n._reactRootContainer=u,n[Mr]=u.current,Yl(n.nodeType===8?n.parentNode:n),ks(function(){wh(e,u,t,r)}),u}function Th(n,e,t,r,i){var s=t._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Ud(o);a.call(u)}}wh(e,o,n,i)}else o=Ob(t,e,n,i,r);return Ud(o)}AI=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ml(e.pendingLanes);t!==0&&(Xm(e,t|1),hn(e,rt()),!(Ee&6)&&(Qo=rt()+500,Wi()))}break;case 13:ks(function(){var r=jr(n,1);if(r!==null){var i=Kt();$n(r,n,1,i)}}),Ng(n,1)}};Zm=function(n){if(n.tag===13){var e=jr(n,134217728);if(e!==null){var t=Kt();$n(e,n,134217728,t)}Ng(n,134217728)}};RI=function(n){if(n.tag===13){var e=Ai(n),t=jr(n,e);if(t!==null){var r=Kt();$n(t,n,e,r)}Ng(n,e)}};kI=function(){return ke};bI=function(n,e){var t=ke;try{return ke=n,e()}finally{ke=t}};vp=function(n,e,t){switch(e){case"input":if(hp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==n&&r.form===n.form){var i=fh(r);if(!i)throw Error(B(90));oI(r),hp(r,i)}}}break;case"textarea":lI(n,t);break;case"select":e=t.value,e!=null&&No(n,!!t.multiple,e,!1)}};mI=Ag;gI=ks;var Lb={usingClientEntryPoint:!1,Events:[Nu,To,fh,fI,pI,Ag]},il={findFiberByHostInstance:fs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mb={bundleType:il.bundleType,version:il.version,rendererPackageName:il.rendererPackageName,rendererConfig:il.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=vI(n),n===null?null:n.stateNode},findFiberByHostInstance:il.findFiberByHostInstance||Vb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jc.isDisabled&&jc.supportsFiber)try{uh=jc.inject(Mb),ur=jc}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lb;En.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dg(e))throw Error(B(200));return Db(n,e,null,t)};En.createRoot=function(n,e){if(!Dg(n))throw Error(B(299));var t=!1,r="",i=JE;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Pg(n,1,!1,null,null,t,!1,r,i),n[Mr]=e.current,Yl(n.nodeType===8?n.parentNode:n),new Cg(e)};En.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(B(188)):(n=Object.keys(n).join(","),Error(B(268,n)));return n=vI(e),n=n===null?null:n.stateNode,n};En.flushSync=function(n){return ks(n)};En.hydrate=function(n,e,t){if(!Eh(e))throw Error(B(200));return Th(null,n,e,!0,t)};En.hydrateRoot=function(n,e,t){if(!Dg(n))throw Error(B(405));var r=t!=null&&t.hydratedSources||null,i=!1,s="",o=JE;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=YE(e,null,n,1,t??null,i,!1,s,o),n[Mr]=e.current,Yl(n),r)for(n=0;n<r.length;n++)t=r[n],i=t._getVersion,i=i(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,i]:e.mutableSourceEagerHydrationData.push(t,i);return new Ih(e)};En.render=function(n,e,t){if(!Eh(e))throw Error(B(200));return Th(null,n,e,!1,t)};En.unmountComponentAtNode=function(n){if(!Eh(n))throw Error(B(40));return n._reactRootContainer?(ks(function(){Th(null,null,n,!1,function(){n._reactRootContainer=null,n[Mr]=null})}),!0):!1};En.unstable_batchedUpdates=Ag;En.unstable_renderSubtreeIntoContainer=function(n,e,t,r){if(!Eh(t))throw Error(B(200));if(n==null||n._reactInternals===void 0)throw Error(B(38));return Th(n,e,t,!1,r)};En.version="18.3.1-next-f1338f8080-20240426";function XE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(XE)}catch(n){console.error(n)}}XE(),X0.exports=En;var jb=X0.exports,Kv=jb;sp.createRoot=Kv.createRoot,sp.hydrateRoot=Kv.hydrateRoot;var oe=(n=>(n.STUDIES="studies",n.PASTOR_WORD="pastor_word",n.ANNOUNCEMENTS="announcements",n.CELL_MEMBERS="cell_members",n.CELL_REGISTRY="cell_registry",n.MUSIC_PLAYER="music_player",n.REPORTS="reports",n.LEADERS="leaders",n.MINISTRIES="ministries",n.BIRTHDAYS="birthdays",n))(oe||{});/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Fb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),_e=(n,e)=>{const t=se.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:u,...c},f)=>se.createElement("svg",{ref:f,...Fb,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${Ub(n)}`,a].join(" "),...c},[...e.map(([m,g])=>se.createElement(m,g)),...Array.isArray(u)?u:[u]]));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=_e("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=_e("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=_e("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=_e("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=_e("Cake",[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h0.01",key:"hsw7lv"}],["path",{d:"M12 4h0.01",key:"1e3d8f"}],["path",{d:"M17 4h0.01",key:"p7cxgy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=_e("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=_e("Church",[["path",{d:"m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2",key:"gy5gyo"}],["path",{d:"M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4",key:"cpkuc4"}],["path",{d:"M18 22V5l-6-3-6 3v17",key:"1hsnhq"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M10 9h4",key:"u4k05v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=_e("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=_e("CloudOff",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193",key:"yfwify"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07",key:"jlfiyv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=_e("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=_e("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=_e("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=_e("FileBarChart",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-2",key:"qcmpov"}],["path",{d:"M12 18v-4",key:"q1q25u"}],["path",{d:"M16 18v-6",key:"15y0np"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=_e("FileSpreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=_e("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=_e("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=_e("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=_e("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=_e("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=_e("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=_e("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=_e("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eP=_e("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=_e("MessageSquareQuote",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8",key:"1jfesj"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2",key:"1dq9mh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=_e("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=_e("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=_e("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=_e("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tP=_e("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=_e("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nP=_e("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=_e("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rP=_e("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=_e("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iP=_e("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),sP=({currentView:n,onNavigate:e,onLogout:t})=>{const r=[{id:oe.CELL_REGISTRY,label:"Células",icon:h.jsx(tm,{size:20})},{id:oe.CELL_MEMBERS,label:"Membros",icon:h.jsx(rT,{size:20})},{id:oe.LEADERS,label:"Líderes",icon:h.jsx(rm,{size:20})},{id:oe.BIRTHDAYS,label:"Aniversariantes",icon:h.jsx(em,{size:20})},{id:oe.MINISTRIES,label:"Ministérios",icon:h.jsx(Zp,{size:20})},{id:oe.STUDIES,label:"Estudos",icon:h.jsx(ZE,{size:20})},{id:oe.PASTOR_WORD,label:"Palavra do Pastor",icon:h.jsx(nT,{size:20})},{id:oe.ANNOUNCEMENTS,label:"Avisos",icon:h.jsx(Xp,{size:20})},{id:oe.MUSIC_PLAYER,label:"Louvor",icon:h.jsx(nm,{size:20})},{id:oe.REPORTS,label:"Relatórios",icon:h.jsx(tT,{size:20})}];return h.jsxs("aside",{className:"w-64 bg-indigo-950 text-white h-screen fixed left-0 top-0 hidden md:flex flex-col shadow-2xl z-40",children:[h.jsxs("div",{className:"p-6 flex items-center gap-3 border-b border-indigo-900/50",children:[h.jsx("div",{className:"p-2 bg-indigo-600 rounded-xl shadow-lg shadow-indigo-500/20",children:h.jsx(eT,{className:"text-white",size:24})}),h.jsx("h1",{className:"font-black text-xl tracking-tighter italic",children:"Liderança IRV"})]}),h.jsx("nav",{className:"flex-1 p-4 space-y-1 mt-4 overflow-y-auto scrollbar-hide",children:r.map(i=>h.jsxs("button",{onClick:()=>e(i.id),className:`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${n===i.id?"bg-indigo-600 text-white shadow-xl shadow-indigo-600/20 scale-[1.02]":"text-indigo-200 hover:bg-white/5 hover:text-white"}`,children:[i.icon,h.jsx("span",{className:"font-bold text-sm",children:i.label})]},i.id))}),h.jsxs("div",{className:"p-4 border-t border-indigo-900/50 space-y-4",children:[h.jsx("div",{className:"bg-white/5 p-4 rounded-2xl text-[10px] text-indigo-300 uppercase tracking-[0.2em] font-black text-center",children:"Gestão Pastoral"}),h.jsxs("button",{onClick:t,className:"w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300 font-bold text-sm",children:[h.jsx(Xb,{size:18}),h.jsx("span",{children:"Sair do Sistema"})]})]})]})};var Qv={};/**
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
 */const iT=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},oP=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},sT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,u=i+2<n.length,c=u?n[i+2]:0,f=s>>2,m=(s&3)<<4|a>>4;let g=(a&15)<<2|c>>6,E=c&63;u||(E=64,o||(g=64)),r.push(t[f],t[m],t[g],t[E])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(iT(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):oP(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const m=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||m==null)throw new aP;const g=s<<2|a>>4;if(r.push(g),c!==64){const E=a<<4&240|c>>2;if(r.push(E),m!==64){const b=c<<6&192|m;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class aP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lP=function(n){const e=iT(n);return sT.encodeByteArray(e,!0)},zd=function(n){return lP(n).replace(/\./g,"")},oT=function(n){try{return sT.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Bd(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!uP(t)||(n[t]=Bd(n[t],e[t]));return n}function uP(n){return n!=="__proto__"}/**
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
 */function aT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const cP=()=>aT().__FIREBASE_DEFAULTS__,dP=()=>{if(typeof process>"u"||typeof Qv>"u")return;const n=Qv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},hP=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&oT(n[1]);return e&&JSON.parse(e)},Vg=()=>{try{return cP()||dP()||hP()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},lT=()=>{var n;return(n=Vg())===null||n===void 0?void 0:n.config},fP=n=>{var e;return(e=Vg())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class pP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function mP(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[zd(JSON.stringify(t)),zd(JSON.stringify(o)),""].join(".")}/**
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
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function Og(){var n;const e=(n=Vg())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yP(){return typeof window<"u"||uT()}function uT(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function _P(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function cT(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Lg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dT(){const n=He();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function hT(){return!Og()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function su(){try{return typeof indexedDB=="object"}catch{return!1}}function vP(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const wP="FirebaseError";class Ht extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=wP,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$s.prototype.create)}}class $s{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?IP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ht(i,a,r)}}function IP(n,e){return n.replace(EP,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const EP=/\{\$([^}]+)}/g;/**
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
 */function Yv(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function TP(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ou(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Jv(s)&&Jv(o)){if(!ou(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Jv(n){return n!==null&&typeof n=="object"}/**
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
 */function ga(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Po(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function yl(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function fT(n,e){const t=new xP(n,e);return t.subscribe.bind(t)}class xP{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");SP(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Bf),i.error===void 0&&(i.error=Bf),i.complete===void 0&&(i.complete=Bf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SP(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Bf(){}/**
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
 */function re(n){return n&&n._delegate?n._delegate:n}class fr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const os="[DEFAULT]";/**
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
 */class AP{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new pP;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kP(e))try{this.getOrInitializeService({instanceIdentifier:os})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=os){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=os){return this.instances.has(e)}getOptions(e=os){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RP(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=os){return this.component?this.component.multipleInstances?e:os:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RP(n){return n===os?void 0:n}function kP(n){return n.instantiationMode==="EAGER"}/**
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
 */class pT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new AP(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Mg=[];var he;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(he||(he={}));const mT={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},bP=he.INFO,PP={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},NP=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=PP[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xh{constructor(e){this.name=e,this._logLevel=bP,this._logHandler=NP,this._userLogHandler=null,Mg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}function CP(n){Mg.forEach(e=>{e.setLogLevel(n)})}function DP(n,e){for(const t of Mg){let r=null;e&&e.level&&(r=mT[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&n({level:he[s].toLowerCase(),message:a,args:o,type:i.name})}}}const VP=(n,e)=>e.some(t=>n instanceof t);let Xv,Zv;function OP(){return Xv||(Xv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LP(){return Zv||(Zv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gT=new WeakMap,im=new WeakMap,yT=new WeakMap,$f=new WeakMap,jg=new WeakMap;function MP(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(ki(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&gT.set(t,n)}).catch(()=>{}),jg.set(e,n),e}function jP(n){if(im.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});im.set(n,e)}let sm={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return im.get(n);if(e==="objectStoreNames")return n.objectStoreNames||yT.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ki(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function FP(n){sm=n(sm)}function UP(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(qf(this),e,...t);return yT.set(r,e.sort?e.sort():[e]),ki(r)}:LP().includes(n)?function(...e){return n.apply(qf(this),e),ki(gT.get(this))}:function(...e){return ki(n.apply(qf(this),e))}}function zP(n){return typeof n=="function"?UP(n):(n instanceof IDBTransaction&&jP(n),VP(n,OP())?new Proxy(n,sm):n)}function ki(n){if(n instanceof IDBRequest)return MP(n);if($f.has(n))return $f.get(n);const e=zP(n);return e!==n&&($f.set(n,e),jg.set(e,n)),e}const qf=n=>jg.get(n);function BP(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=ki(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ki(o.result),u.oldVersion,u.newVersion,ki(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const $P=["get","getKey","getAll","getAllKeys","count"],qP=["put","add","delete","clear"],Wf=new Map;function ew(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Wf.get(e))return Wf.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=qP.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||$P.includes(t)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&u.done]))[0]};return Wf.set(e,s),s}FP(n=>({...n,get:(e,t,r)=>ew(e,t)||n.get(e,t,r),has:(e,t)=>!!ew(e,t)||n.has(e,t)}));/**
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
 */class WP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(GP(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function GP(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $d="@firebase/app",om="0.10.13";/**
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
 */const Ur=new xh("@firebase/app"),KP="@firebase/app-compat",HP="@firebase/analytics-compat",QP="@firebase/analytics",YP="@firebase/app-check-compat",JP="@firebase/app-check",XP="@firebase/auth",ZP="@firebase/auth-compat",e1="@firebase/database",t1="@firebase/data-connect",n1="@firebase/database-compat",r1="@firebase/functions",i1="@firebase/functions-compat",s1="@firebase/installations",o1="@firebase/installations-compat",a1="@firebase/messaging",l1="@firebase/messaging-compat",u1="@firebase/performance",c1="@firebase/performance-compat",d1="@firebase/remote-config",h1="@firebase/remote-config-compat",f1="@firebase/storage",p1="@firebase/storage-compat",m1="@firebase/firestore",g1="@firebase/vertexai-preview",y1="@firebase/firestore-compat",_1="firebase",v1="10.14.1";/**
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
 */const Ci="[DEFAULT]",w1={[$d]:"fire-core",[KP]:"fire-core-compat",[QP]:"fire-analytics",[HP]:"fire-analytics-compat",[JP]:"fire-app-check",[YP]:"fire-app-check-compat",[XP]:"fire-auth",[ZP]:"fire-auth-compat",[e1]:"fire-rtdb",[t1]:"fire-data-connect",[n1]:"fire-rtdb-compat",[r1]:"fire-fn",[i1]:"fire-fn-compat",[s1]:"fire-iid",[o1]:"fire-iid-compat",[a1]:"fire-fcm",[l1]:"fire-fcm-compat",[u1]:"fire-perf",[c1]:"fire-perf-compat",[d1]:"fire-rc",[h1]:"fire-rc-compat",[f1]:"fire-gcs",[p1]:"fire-gcs-compat",[m1]:"fire-fst",[y1]:"fire-fst-compat",[g1]:"fire-vertex","fire-js":"fire-js",[_1]:"fire-js-all"};/**
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
 */const Di=new Map,Yo=new Map,Jo=new Map;function au(n,e){try{n.container.addComponent(e)}catch(t){Ur.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function _T(n,e){n.container.addOrOverwriteComponent(e)}function Vi(n){const e=n.name;if(Jo.has(e))return Ur.debug(`There were multiple attempts to register component ${e}.`),!1;Jo.set(e,n);for(const t of Di.values())au(t,n);for(const t of Yo.values())au(t,n);return!0}function vT(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function I1(n,e,t=Ci){vT(n,e).clearInstance(t)}function wT(n){return n.options!==void 0}function Je(n){return n.settings!==void 0}function E1(){Jo.clear()}/**
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
 */const T1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nn=new $s("app","Firebase",T1);/**
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
 */let IT=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nn.create("app-deleted",{appName:this._name})}};/**
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
 */class x1 extends IT{constructor(e,t,r,i){const s=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},t),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,qn($d,om,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Ug(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Nn.create("server-app-deleted")}}/**
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
 */const Gi=v1;function Fg(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ci,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Nn.create("bad-app-name",{appName:String(i)});if(t||(t=lT()),!t)throw Nn.create("no-options");const s=Di.get(i);if(s){if(ou(t,s.options)&&ou(r,s.config))return s;throw Nn.create("duplicate-app",{appName:i})}const o=new pT(i);for(const u of Jo.values())o.addComponent(u);const a=new IT(t,r,o);return Di.set(i,a),a}function S1(n,e){if(yP()&&!uT())throw Nn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;wT(n)?t=n.options:t=n;const r=Object.assign(Object.assign({},e),t);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((f,m)=>Math.imul(31,f)+m.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Nn.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=Yo.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new pT(s);for(const c of Jo.values())a.addComponent(c);const u=new x1(t,e,s,a);return Yo.set(s,u),u}function A1(n=Ci){const e=Di.get(n);if(!e&&n===Ci&&lT())return Fg();if(!e)throw Nn.create("no-app",{appName:n});return e}function R1(){return Array.from(Di.values())}async function Ug(n){let e=!1;const t=n.name;Di.has(t)?(e=!0,Di.delete(t)):Yo.has(t)&&n.decRefCount()<=0&&(Yo.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function qn(n,e,t){var r;let i=(r=w1[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ur.warn(a.join(" "));return}Vi(new fr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function ET(n,e){if(n!==null&&typeof n!="function")throw Nn.create("invalid-log-argument");DP(n,e)}function TT(n){CP(n)}/**
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
 */const k1="firebase-heartbeat-database",b1=1,lu="firebase-heartbeat-store";let Gf=null;function xT(){return Gf||(Gf=BP(k1,b1,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(lu)}catch(t){console.warn(t)}}}}).catch(n=>{throw Nn.create("idb-open",{originalErrorMessage:n.message})})),Gf}async function P1(n){try{const t=(await xT()).transaction(lu),r=await t.objectStore(lu).get(ST(n));return await t.done,r}catch(e){if(e instanceof Ht)Ur.warn(e.message);else{const t=Nn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ur.warn(t.message)}}}async function tw(n,e){try{const r=(await xT()).transaction(lu,"readwrite");await r.objectStore(lu).put(e,ST(n)),await r.done}catch(t){if(t instanceof Ht)Ur.warn(t.message);else{const r=Nn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ur.warn(r.message)}}}function ST(n){return`${n.name}!${n.options.appId}`}/**
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
 */const N1=1024,C1=30*24*60*60*1e3;class D1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new O1(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nw();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=C1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ur.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=nw(),{heartbeatsToSend:r,unsentEntries:i}=V1(this._heartbeatsCache.heartbeats),s=zd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Ur.warn(t),""}}}function nw(){return new Date().toISOString().substring(0,10)}function V1(n,e=N1){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),rw(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),rw(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class O1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return su()?vP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await P1(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return tw(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return tw(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function rw(n){return zd(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function L1(n){Vi(new fr("platform-logger",e=>new WP(e),"PRIVATE")),Vi(new fr("heartbeat",e=>new D1(e),"PRIVATE")),qn($d,om,n),qn($d,om,"esm2017"),qn("fire-js","")}L1("");const M1=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Ht,SDK_VERSION:Gi,_DEFAULT_ENTRY_NAME:Ci,_addComponent:au,_addOrOverwriteComponent:_T,_apps:Di,_clearComponents:E1,_components:Jo,_getProvider:vT,_isFirebaseApp:wT,_isFirebaseServerApp:Je,_registerComponent:Vi,_removeServiceInstance:I1,_serverApps:Yo,deleteApp:Ug,getApp:A1,getApps:R1,initializeApp:Fg,initializeServerApp:S1,onLog:ET,registerVersion:qn,setLogLevel:TT},Symbol.toStringTag,{value:"Module"}));/**
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
 */class j1{constructor(e,t){this._delegate=e,this.firebase=t,au(e,new fr("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Ug(this._delegate)))}_getService(e,t=Ci){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Ci){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){au(this._delegate,e)}_addOrOverwriteComponent(e){_T(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const F1={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},iw=new $s("app-compat","Firebase",F1);/**
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
 */function U1(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:qn,setLogLevel:TT,onLog:ET,apps:null,SDK_VERSION:Gi,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:M1}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||Ci,!Yv(e,c))throw iw.create("no-app",{appName:c});return e[c]}i.App=n;function s(c,f={}){const m=Fg(c,f);if(Yv(e,m.name))return e[m.name];const g=new n(m,t);return e[m.name]=g,g}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const f=c.name,m=f.replace("-compat","");if(Vi(c)&&c.type==="PUBLIC"){const g=(E=i())=>{if(typeof E[m]!="function")throw iw.create("invalid-app-argument",{appName:f});return E[m]()};c.serviceProps!==void 0&&Bd(g,c.serviceProps),t[m]=g,n.prototype[m]=function(...E){return this._getService.bind(this,f).apply(this,c.multipleInstances?E:[])}}return c.type==="PUBLIC"?t[m]:null}function u(c,f){return f==="serverAuth"?null:f}return t}/**
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
 */function AT(){const n=U1(j1);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:AT,extendNamespace:e,createSubscribe:fT,ErrorFactory:$s,deepExtend:Bd});function e(t){Bd(n,t)}return n}const z1=AT();/**
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
 */const sw=new xh("@firebase/app-compat"),B1="@firebase/app-compat",$1="0.2.43";/**
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
 */function q1(n){qn(B1,$1,n)}/**
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
 */try{const n=aT();if(n.firebase!==void 0){sw.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&sw.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const ya=z1;q1();var W1="firebase",G1="10.14.1";/**
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
 */ya.registerVersion(W1,G1,"app-compat");function zg(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const sl={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},ao={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function K1(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function RT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const H1=K1,Q1=RT,kT=new $s("auth","Firebase",RT());/**
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
 */const qd=new xh("@firebase/auth");function Y1(n,...e){qd.logLevel<=he.WARN&&qd.warn(`Auth (${Gi}): ${n}`,...e)}function sd(n,...e){qd.logLevel<=he.ERROR&&qd.error(`Auth (${Gi}): ${n}`,...e)}/**
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
 */function Vt(n,...e){throw $g(n,...e)}function mt(n,...e){return $g(n,...e)}function Bg(n,e,t){const r=Object.assign(Object.assign({},Q1()),{[e]:t});return new $s("auth","Firebase",r).create(e,{appName:n.name})}function Tt(n){return Bg(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _a(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Vt(n,"argument-error"),Bg(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $g(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return kT.create(n,...e)}function q(n,e,...t){if(!n)throw $g(e,...t)}function or(n){const e="INTERNAL ASSERTION FAILED: "+n;throw sd(e),new Error(e)}function Gn(n,e){n||or(e)}/**
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
 */function uu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function qg(){return ow()==="http:"||ow()==="https:"}function ow(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function J1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qg()||cT()||"connection"in navigator)?navigator.onLine:!0}function X1(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Du{constructor(e,t){this.shortDelay=e,this.longDelay=t,Gn(t>e,"Short delay should be less than long delay!"),this.isMobile=gP()||Lg()}get(){return J1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Wg(n,e){Gn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class bT{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const eN=new Du(3e4,6e4);function et(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function tt(n,e,t,r,i={}){return PT(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ga(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const c=Object.assign({method:e,headers:u},s);return _P()||(c.referrerPolicy="no-referrer"),bT.fetch()(NT(n,n.config.apiHost,t,a),c)})}async function PT(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Z1),e);try{const i=new nN(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw _l(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw _l(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw _l(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw _l(n,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Bg(n,f,c);Vt(n,f)}}catch(i){if(i instanceof Ht)throw i;Vt(n,"network-request-failed",{message:String(i)})}}async function Wr(n,e,t,r,i={}){const s=await tt(n,e,t,r,i);return"mfaPendingCredential"in s&&Vt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function NT(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Wg(n.config,i):`${n.config.apiScheme}://${i}`}function tN(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class nN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(mt(this.auth,"network-request-failed")),eN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _l(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=mt(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */function aw(n){return n!==void 0&&n.getResponse!==void 0}function lw(n){return n!==void 0&&n.enterprise!==void 0}class rN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return tN(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function iN(n){return(await tt(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function sN(n,e){return tt(n,"GET","/v2/recaptchaConfig",et(n,e))}/**
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
 */async function oN(n,e){return tt(n,"POST","/v1/accounts:delete",e)}async function aN(n,e){return tt(n,"POST","/v1/accounts:update",e)}async function CT(n,e){return tt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Dl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lN(n,e=!1){const t=re(n),r=await t.getIdToken(e),i=Sh(r);q(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Dl(Kf(i.auth_time)),issuedAtTime:Dl(Kf(i.iat)),expirationTime:Dl(Kf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Kf(n){return Number(n)*1e3}function Sh(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return sd("JWT malformed, contained fewer than 3 sections"),null;try{const i=oT(t);return i?JSON.parse(i):(sd("Failed to decode base64 JWT payload"),null)}catch(i){return sd("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function uw(n){const e=Sh(n);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function zr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ht&&uN(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function uN({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class am{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Dl(this.lastLoginAt),this.creationTime=Dl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function cu(n){var e;const t=n.auth,r=await n.getIdToken(),i=await zr(n,CT(t,{idToken:r}));q(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?DT(s.providerUserInfo):[],a=hN(n.providerData,o),u=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),f=u?c:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new am(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function dN(n){const e=re(n);await cu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hN(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function DT(n){return n.map(e=>{var{providerId:t}=e,r=zg(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function fN(n,e){const t=await PT(n,{},async()=>{const r=ga({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=NT(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function pN(n,e){return tt(n,"POST","/v2/accounts:revokeToken",et(n,e))}/**
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
 */class Mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,"internal-error");const t=uw(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await fN(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Mo;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mo,this.toJSON())}_performRefresh(){return or("not implemented")}}/**
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
 */function oi(n,e){q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Nr{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=zg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new am(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await zr(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return lN(this,e)}reload(){return dN(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await cu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Je(this.auth.app))return Promise.reject(Tt(this.auth));const e=await this.getIdToken();return await zr(this,oN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,u,c,f;const m=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(i=t.email)!==null&&i!==void 0?i:void 0,E=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,b=(o=t.photoURL)!==null&&o!==void 0?o:void 0,P=(a=t.tenantId)!==null&&a!==void 0?a:void 0,M=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,S=(c=t.createdAt)!==null&&c!==void 0?c:void 0,v=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:A,emailVerified:V,isAnonymous:z,providerData:j,stsTokenManager:w}=t;q(A&&w,e,"internal-error");const _=Mo.fromJSON(this.name,w);q(typeof A=="string",e,"internal-error"),oi(m,e.name),oi(g,e.name),q(typeof V=="boolean",e,"internal-error"),q(typeof z=="boolean",e,"internal-error"),oi(E,e.name),oi(b,e.name),oi(P,e.name),oi(M,e.name),oi(S,e.name),oi(v,e.name);const I=new Nr({uid:A,auth:e,email:g,emailVerified:V,displayName:m,isAnonymous:z,photoURL:b,phoneNumber:E,tenantId:P,stsTokenManager:_,createdAt:S,lastLoginAt:v});return j&&Array.isArray(j)&&(I.providerData=j.map(T=>Object.assign({},T))),M&&(I._redirectEventId=M),I}static async _fromIdTokenResponse(e,t,r=!1){const i=new Mo;i.updateFromServerResponse(t);const s=new Nr({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await cu(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?DT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Mo;a.updateFromIdToken(r);const u=new Nr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new am(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const cw=new Map;function _n(n){Gn(n instanceof Function,"Expected a class definition");let e=cw.get(n);return e?(Gn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,cw.set(n,e),e)}/**
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
 */class VT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}VT.type="NONE";const Xo=VT;/**
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
 */function Is(n,e,t){return`firebase:${n}:${e}:${t}`}class jo{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Is(this.userKey,i.apiKey,s),this.fullPersistenceKey=Is("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new jo(_n(Xo),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||_n(Xo);const o=Is(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const f=await c._get(o);if(f){const m=Nr._fromJSON(e,f);c!==s&&(a=m),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new jo(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new jo(s,e,r))}}/**
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
 */function dw(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(OT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(FT(e))return"Blackberry";if(UT(e))return"Webos";if(LT(e))return"Safari";if((e.includes("chrome/")||MT(e))&&!e.includes("edge/"))return"Chrome";if(Vu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function OT(n=He()){return/firefox\//i.test(n)}function LT(n=He()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function MT(n=He()){return/crios\//i.test(n)}function jT(n=He()){return/iemobile/i.test(n)}function Vu(n=He()){return/android/i.test(n)}function FT(n=He()){return/blackberry/i.test(n)}function UT(n=He()){return/webos/i.test(n)}function Ou(n=He()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function mN(n=He()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function gN(n=He()){var e;return Ou(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yN(){return dT()&&document.documentMode===10}function zT(n=He()){return Ou(n)||Vu(n)||UT(n)||FT(n)||/windows phone/i.test(n)||jT(n)}/**
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
 */function BT(n,e=[]){let t;switch(n){case"Browser":t=dw(He());break;case"Worker":t=`${dw(He())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Gi}/${r}`}/**
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
 */async function vN(n,e={}){return tt(n,"GET","/v2/passwordPolicy",et(n,e))}/**
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
 */class EN{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hw(this),this.idTokenSubscription=new hw(this),this.beforeStateQueue=new _N(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_n(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await jo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await CT(this,{idToken:e}),r=await Nr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Je(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await cu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=X1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Je(this.app))return Promise.reject(Tt(this));const t=e?re(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Je(this.app)?Promise.reject(Tt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Je(this.app)?Promise.reject(Tt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vN(this),t=new IN(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $s("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await pN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_n(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await jo.create(this,[_n(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=BT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Y1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Xe(n){return re(n)}class hw{constructor(e){this.auth=e,this.observer=null,this.addObserver=fT(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Lu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function TN(n){Lu=n}function Gg(n){return Lu.loadJS(n)}function xN(){return Lu.recaptchaV2Script}function SN(){return Lu.recaptchaEnterpriseScript}function AN(){return Lu.gapiScript}function $T(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const RN="recaptcha-enterprise",kN="NO_RECAPTCHA";class bN{constructor(e){this.type=RN,this.auth=Xe(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{sN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new rN(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;lw(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(kN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&lw(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=SN();u.length!==0&&(u+=a),Gg(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function fw(n,e,t,r=!1){const i=new bN(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function du(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await fw(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await fw(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(s)})}function PN(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(_n);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function NN(n,e,t){const r=Xe(n);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=qT(e),{host:o,port:a}=CN(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||DN()}function qT(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function CN(n){const e=qT(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:pw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:pw(o)}}}function pw(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function DN(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class va{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return or("not implemented")}_getIdTokenResponse(e){return or("not implemented")}_linkToIdToken(e,t){return or("not implemented")}_getReauthenticationResolver(e){return or("not implemented")}}/**
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
 */async function WT(n,e){return tt(n,"POST","/v1/accounts:resetPassword",et(n,e))}async function VN(n,e){return tt(n,"POST","/v1/accounts:update",e)}async function ON(n,e){return tt(n,"POST","/v1/accounts:signUp",e)}async function LN(n,e){return tt(n,"POST","/v1/accounts:update",et(n,e))}/**
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
 */async function MN(n,e){return Wr(n,"POST","/v1/accounts:signInWithPassword",et(n,e))}async function Ah(n,e){return tt(n,"POST","/v1/accounts:sendOobCode",et(n,e))}async function jN(n,e){return Ah(n,e)}async function FN(n,e){return Ah(n,e)}async function UN(n,e){return Ah(n,e)}async function zN(n,e){return Ah(n,e)}/**
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
 */async function BN(n,e){return Wr(n,"POST","/v1/accounts:signInWithEmailLink",et(n,e))}async function $N(n,e){return Wr(n,"POST","/v1/accounts:signInWithEmailLink",et(n,e))}/**
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
 */class hu extends va{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new hu(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new hu(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return du(e,t,"signInWithPassword",MN);case"emailLink":return BN(e,{email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return du(e,r,"signUpPassword",ON);case"emailLink":return $N(e,{idToken:t,email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Or(n,e){return Wr(n,"POST","/v1/accounts:signInWithIdp",et(n,e))}/**
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
 */const qN="http://localhost";class pr extends va{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Vt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=zg(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new pr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Or(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Or(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Or(e,t)}buildRequest(){const e={requestUri:qN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ga(t)}return e}}/**
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
 */async function WN(n,e){return tt(n,"POST","/v1/accounts:sendVerificationCode",et(n,e))}async function GN(n,e){return Wr(n,"POST","/v1/accounts:signInWithPhoneNumber",et(n,e))}async function KN(n,e){const t=await Wr(n,"POST","/v1/accounts:signInWithPhoneNumber",et(n,e));if(t.temporaryProof)throw _l(n,"account-exists-with-different-credential",t);return t}const HN={USER_NOT_FOUND:"user-not-found"};async function QN(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Wr(n,"POST","/v1/accounts:signInWithPhoneNumber",et(n,t),HN)}/**
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
 */class Es extends va{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Es({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Es({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return GN(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return KN(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return QN(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new Es({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function YN(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function JN(n){const e=Po(yl(n)).link,t=e?Po(yl(e)).deep_link_id:null,r=Po(yl(n)).deep_link_id;return(r?Po(yl(r)).link:null)||r||t||e||n}class Rh{constructor(e){var t,r,i,s,o,a;const u=Po(yl(e)),c=(t=u.apiKey)!==null&&t!==void 0?t:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=YN((i=u.mode)!==null&&i!==void 0?i:null);q(c&&f&&m,"argument-error"),this.apiKey=c,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=JN(e);try{return new Rh(t)}catch{return null}}}/**
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
 */class Ki{constructor(){this.providerId=Ki.PROVIDER_ID}static credential(e,t){return hu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Rh.parseLink(t);return q(r,"argument-error"),hu._fromEmailAndCode(e,r.code,r.tenantId)}}Ki.PROVIDER_ID="password";Ki.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ki.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Gr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wa extends Gr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Fo extends wa{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return q("providerId"in t&&"signInMethod"in t,"argument-error"),pr._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return q(e.idToken||e.accessToken,"argument-error"),pr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Fo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Fo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new Fo(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class nr extends wa{constructor(){super("facebook.com")}static credential(e){return pr._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";nr.PROVIDER_ID="facebook.com";/**
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
 */class rr extends wa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return pr._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return rr.credential(t,r)}catch{return null}}}rr.GOOGLE_SIGN_IN_METHOD="google.com";rr.PROVIDER_ID="google.com";/**
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
 */class ir extends wa{constructor(){super("github.com")}static credential(e){return pr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.GITHUB_SIGN_IN_METHOD="github.com";ir.PROVIDER_ID="github.com";/**
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
 */const XN="http://localhost";class Zo extends va{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Or(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Or(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Or(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new Zo(r,s)}static _create(e,t){return new Zo(e,t)}buildRequest(){return{requestUri:XN,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const ZN="saml.";class Wd extends Gr{constructor(e){q(e.startsWith(ZN),"argument-error"),super(e)}static credentialFromResult(e){return Wd.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Wd.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Zo.fromJSON(e);return q(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return Zo._create(r,t)}catch{return null}}}/**
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
 */class sr extends wa{constructor(){super("twitter.com")}static credential(e,t){return pr._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return sr.credential(t,r)}catch{return null}}}sr.TWITTER_SIGN_IN_METHOD="twitter.com";sr.PROVIDER_ID="twitter.com";/**
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
 */async function GT(n,e){return Wr(n,"POST","/v1/accounts:signUp",et(n,e))}/**
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
 */class Vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Nr._fromIdTokenResponse(e,r,i),o=mw(r);return new Vn({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=mw(r);return new Vn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function mw(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function eC(n){var e;if(Je(n.app))return Promise.reject(Tt(n));const t=Xe(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Vn({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await GT(t,{returnSecureToken:!0}),i=await Vn._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
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
 */class Gd extends Ht{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Gd.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Gd(e,t,r,i)}}function KT(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Gd._fromErrorAndOperation(n,s,e,r):s})}/**
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
 */function HT(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function tC(n,e){const t=re(n);await kh(!0,t,e);const{providerUserInfo:r}=await aN(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=HT(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Kg(n,e,t=!1){const r=await zr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Vn._forOperation(n,"link",r)}async function kh(n,e,t){await cu(e);const r=HT(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";q(r.has(t)===n,e.auth,i)}/**
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
 */async function QT(n,e,t=!1){const{auth:r}=n;if(Je(r.app))return Promise.reject(Tt(r));const i="reauthenticate";try{const s=await zr(n,KT(r,i,e,n),t);q(s.idToken,r,"internal-error");const o=Sh(s.idToken);q(o,r,"internal-error");const{sub:a}=o;return q(n.uid===a,r,"user-mismatch"),Vn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Vt(r,"user-mismatch"),s}}/**
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
 */async function YT(n,e,t=!1){if(Je(n.app))return Promise.reject(Tt(n));const r="signIn",i=await KT(n,r,e),s=await Vn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function bh(n,e){return YT(Xe(n),e)}async function JT(n,e){const t=re(n);return await kh(!1,t,e.providerId),Kg(t,e)}async function XT(n,e){return QT(re(n),e)}/**
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
 */async function nC(n,e){return Wr(n,"POST","/v1/accounts:signInWithCustomToken",et(n,e))}/**
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
 */async function rC(n,e){if(Je(n.app))return Promise.reject(Tt(n));const t=Xe(n),r=await nC(t,{token:e,returnSecureToken:!0}),i=await Vn._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
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
 */class Mu{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Hg._fromServerResponse(e,t):"totpInfo"in t?Qg._fromServerResponse(e,t):Vt(e,"internal-error")}}class Hg extends Mu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Hg(t)}}class Qg extends Mu{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Qg(t)}}/**
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
 */function Ph(n,e,t){var r;q(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),q(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(q(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(q(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function Yg(n){const e=Xe(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function iC(n,e,t){const r=Xe(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Ph(r,i,t),await du(r,i,"getOobCode",FN)}async function sC(n,e,t){await WT(re(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Yg(n),r})}async function oC(n,e){await LN(re(n),{oobCode:e})}async function ZT(n,e){const t=re(n),r=await WT(t,{oobCode:e}),i=r.requestType;switch(q(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":q(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":q(r.mfaInfo,t,"internal-error");default:q(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=Mu._fromServerResponse(Xe(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function aC(n,e){const{data:t}=await ZT(re(n),e);return t.email}async function lC(n,e,t){if(Je(n.app))return Promise.reject(Tt(n));const r=Xe(n),o=await du(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",GT).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Yg(n),u}),a=await Vn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function uC(n,e,t){return Je(n.app)?Promise.reject(Tt(n)):bh(re(n),Ki.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Yg(n),r})}/**
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
 */async function cC(n,e,t){const r=Xe(n),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){q(a.handleCodeInApp,r,"argument-error"),a&&Ph(r,o,a)}s(i,t),await du(r,i,"getOobCode",UN)}function dC(n,e){const t=Rh.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function hC(n,e,t){if(Je(n.app))return Promise.reject(Tt(n));const r=re(n),i=Ki.credentialWithLink(e,t||uu());return q(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),bh(r,i)}/**
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
 */async function fC(n,e){return tt(n,"POST","/v1/accounts:createAuthUri",et(n,e))}/**
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
 */async function pC(n,e){const t=qg()?uu():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await fC(re(n),r);return i||[]}async function mC(n,e){const t=re(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Ph(t.auth,i,e);const{email:s}=await jN(t.auth,i);s!==n.email&&await n.reload()}async function gC(n,e,t){const r=re(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&Ph(r.auth,s,t);const{email:o}=await zN(r.auth,s);o!==n.email&&await n.reload()}/**
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
 */async function yC(n,e){return tt(n,"POST","/v1/accounts:update",e)}/**
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
 */async function _C(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=re(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await zr(r,yC(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function vC(n,e){const t=re(n);return Je(t.auth.app)?Promise.reject(Tt(t.auth)):ex(t,e,null)}function wC(n,e){return ex(re(n),null,e)}async function ex(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await zr(n,VN(r,s));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function IC(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=Sh(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Uo(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new EC(s,i);case"github.com":return new TC(s,i);case"google.com":return new xC(s,i);case"twitter.com":return new SC(s,i,n.screenName||null);case"custom":case"anonymous":return new Uo(s,null);default:return new Uo(s,r,i)}}class Uo{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class tx extends Uo{constructor(e,t,r,i){super(e,t,r),this.username=i}}class EC extends Uo{constructor(e,t){super(e,"facebook.com",t)}}class TC extends tx{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class xC extends Uo{constructor(e,t){super(e,"google.com",t)}}class SC extends tx{constructor(e,t,r){super(e,"twitter.com",t,r)}}function AC(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:IC(t)}/**
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
 */class gs{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new gs("enroll",e,t)}static _fromMfaPendingCredential(e){return new gs("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return gs._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return gs._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Jg{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=Xe(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Mu._fromServerResponse(r,a));q(i.mfaPendingCredential,r,"internal-error");const o=gs._fromMfaPendingCredential(i.mfaPendingCredential);return new Jg(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(t.operationType){case"signIn":const f=await Vn._fromIdTokenResponse(r,t.operationType,c);return await r._updateCurrentUser(f.user),f;case"reauthenticate":return q(t.user,r,"internal-error"),Vn._forOperation(t.user,t.operationType,c);default:Vt(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function RC(n,e){var t;const r=re(n),i=e;return q(e.customData.operationType,r,"argument-error"),q((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),Jg._fromError(r,i)}/**
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
 */function kC(n,e){return tt(n,"POST","/v2/accounts/mfaEnrollment:start",et(n,e))}function bC(n,e){return tt(n,"POST","/v2/accounts/mfaEnrollment:finalize",et(n,e))}function PC(n,e){return tt(n,"POST","/v2/accounts/mfaEnrollment:withdraw",et(n,e))}class Xg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>Mu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Xg(e)}async getSession(){return gs._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,i=await this.getSession(),s=await zr(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await zr(this.user,PC(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Hf=new WeakMap;function NC(n){const e=re(n);return Hf.has(e)||Hf.set(e,Xg._fromUser(e)),Hf.get(e)}const Kd="__sak";/**
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
 */class nx{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Kd,"1"),this.storage.removeItem(Kd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const CC=1e3,DC=10;class rx extends nx{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);yN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,DC):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},CC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}rx.type="LOCAL";const Zg=rx;/**
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
 */class ix extends nx{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ix.type="SESSION";const bs=ix;/**
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
 */class Nh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Nh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,s)),u=await VC(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nh.receivers=[];/**
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
 */function ju(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class OC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=ju("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ct(){return window}function LC(n){ct().location.href=n}/**
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
 */function ey(){return typeof ct().WorkerGlobalScope<"u"&&typeof ct().importScripts=="function"}async function MC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jC(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function FC(){return ey()?self:null}/**
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
 */const sx="firebaseLocalStorageDb",UC=1,Hd="firebaseLocalStorage",ox="fbase_key";class Fu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ch(n,e){return n.transaction([Hd],e?"readwrite":"readonly").objectStore(Hd)}function zC(){const n=indexedDB.deleteDatabase(sx);return new Fu(n).toPromise()}function lm(){const n=indexedDB.open(sx,UC);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Hd,{keyPath:ox})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Hd)?e(r):(r.close(),await zC(),e(await lm()))})})}async function gw(n,e,t){const r=Ch(n,!0).put({[ox]:e,value:t});return new Fu(r).toPromise()}async function BC(n,e){const t=Ch(n,!1).get(e),r=await new Fu(t).toPromise();return r===void 0?null:r.value}function yw(n,e){const t=Ch(n,!0).delete(e);return new Fu(t).toPromise()}const $C=800,qC=3;class ax{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>qC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ey()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nh._getInstance(FC()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await MC(),!this.activeServiceWorker)return;this.sender=new OC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lm();return await gw(e,Kd,"1"),await yw(e,Kd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>gw(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>BC(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>yw(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ch(i,!1).getAll();return new Fu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$C)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ax.type="LOCAL";const fu=ax;/**
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
 */function WC(n,e){return tt(n,"POST","/v2/accounts/mfaSignIn:start",et(n,e))}function GC(n,e){return tt(n,"POST","/v2/accounts/mfaSignIn:finalize",et(n,e))}/**
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
 */const KC=500,HC=6e4,Fc=1e12;class QC{constructor(e){this.auth=e,this.counter=Fc,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new YC(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||Fc;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||Fc;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||Fc;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class YC{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;q(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=JC(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},HC)},KC))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function JC(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const Qf=$T("rcb"),XC=new Du(3e4,6e4);class ZC{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=ct().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return q(eD(t),e,"argument-error"),this.shouldResolveImmediately(t)&&aw(ct().grecaptcha)?Promise.resolve(ct().grecaptcha):new Promise((r,i)=>{const s=ct().setTimeout(()=>{i(mt(e,"network-request-failed"))},XC.get());ct()[Qf]=()=>{ct().clearTimeout(s),delete ct()[Qf];const a=ct().grecaptcha;if(!a||!aw(a)){i(mt(e,"internal-error"));return}const u=a.render;a.render=(c,f)=>{const m=u(c,f);return this.counter++,m},this.hostLanguage=t,r(a)};const o=`${xN()}?${ga({onload:Qf,render:"explicit",hl:t})}`;Gg(o).catch(()=>{clearTimeout(s),i(mt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=ct().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function eD(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class tD{async load(e){return new QC(e)}clearedOneInstance(){}}/**
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
 */const lx="recaptcha",nD={theme:"light",type:"image"};let rD=class{constructor(e,t,r=Object.assign({},nD)){this.parameters=r,this.type=lx,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Xe(e),this.isInvisible=this.parameters.size==="invisible",q(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;q(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new tD:new ZC,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){q(!this.parameters.sitekey,this.auth,"argument-error"),q(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),q(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=ct()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){q(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){q(qg()&&!ey(),this.auth,"internal-error"),await iD(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await iN(this.auth);q(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return q(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function iD(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class ty{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Es._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function sD(n,e,t){if(Je(n.app))return Promise.reject(Tt(n));const r=Xe(n),i=await Dh(r,e,re(t));return new ty(i,s=>bh(r,s))}async function oD(n,e,t){const r=re(n);await kh(!1,r,"phone");const i=await Dh(r.auth,e,re(t));return new ty(i,s=>JT(r,s))}async function aD(n,e,t){const r=re(n);if(Je(r.auth.app))return Promise.reject(Tt(r.auth));const i=await Dh(r.auth,e,re(t));return new ty(i,s=>XT(r,s))}async function Dh(n,e,t){var r;const i=await t.verify();try{q(typeof i=="string",n,"argument-error"),q(t.type===lx,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return q(o.type==="enroll",n,"internal-error"),(await kC(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{q(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return q(a,n,"missing-multi-factor-info"),(await WC(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await WN(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function lD(n,e){const t=re(n);if(Je(t.auth.app))return Promise.reject(Tt(t.auth));await Kg(t,e)}/**
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
 */let Ps=class od{constructor(e){this.providerId=od.PROVIDER_ID,this.auth=Xe(e)}verifyPhoneNumber(e,t){return Dh(this.auth,e,re(t))}static credential(e,t){return Es._fromVerification(e,t)}static credentialFromResult(e){const t=e;return od.credentialFromTaggedObject(t)}static credentialFromError(e){return od.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?Es._fromTokenResponse(t,r):null}};Ps.PROVIDER_ID="phone";Ps.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function qs(n,e){return e?_n(e):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ny extends va{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Or(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Or(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Or(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function uD(n){return YT(n.auth,new ny(n),n.bypassAuthState)}function cD(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),QT(t,new ny(n),n.bypassAuthState)}async function dD(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),Kg(t,new ny(n),n.bypassAuthState)}/**
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
 */class ux{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uD;case"linkViaPopup":case"linkViaRedirect":return dD;case"reauthViaPopup":case"reauthViaRedirect":return cD;default:Vt(this.auth,"internal-error")}}resolve(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const hD=new Du(2e3,1e4);async function fD(n,e,t){if(Je(n.app))return Promise.reject(mt(n,"operation-not-supported-in-this-environment"));const r=Xe(n);_a(n,e,Gr);const i=qs(r,t);return new Cr(r,"signInViaPopup",e,i).executeNotNull()}async function pD(n,e,t){const r=re(n);if(Je(r.auth.app))return Promise.reject(mt(r.auth,"operation-not-supported-in-this-environment"));_a(r.auth,e,Gr);const i=qs(r.auth,t);return new Cr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function mD(n,e,t){const r=re(n);_a(r.auth,e,Gr);const i=qs(r.auth,t);return new Cr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Cr extends ux{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Cr.currentPopupAction&&Cr.currentPopupAction.cancel(),Cr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Gn(this.filter.length===1,"Popup operations only handle one event");const e=ju();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hD.get())};e()}}Cr.currentPopupAction=null;/**
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
 */const gD="pendingRedirect",Vl=new Map;class yD extends ux{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Vl.get(this.auth._key());if(!e){try{const r=await _D(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Vl.set(this.auth._key(),e)}return this.bypassAuthState||Vl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _D(n,e){const t=dx(e),r=cx(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function ry(n,e){return cx(n)._set(dx(e),"true")}function vD(){Vl.clear()}function iy(n,e){Vl.set(n._key(),e)}function cx(n){return _n(n._redirectPersistence)}function dx(n){return Is(gD,n.config.apiKey,n.name)}/**
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
 */function wD(n,e,t){return ID(n,e,t)}async function ID(n,e,t){if(Je(n.app))return Promise.reject(Tt(n));const r=Xe(n);_a(n,e,Gr),await r._initializationPromise;const i=qs(r,t);return await ry(i,r),i._openRedirect(r,e,"signInViaRedirect")}function ED(n,e,t){return TD(n,e,t)}async function TD(n,e,t){const r=re(n);if(_a(r.auth,e,Gr),Je(r.auth.app))return Promise.reject(Tt(r.auth));await r.auth._initializationPromise;const i=qs(r.auth,t);await ry(i,r.auth);const s=await hx(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function xD(n,e,t){return SD(n,e,t)}async function SD(n,e,t){const r=re(n);_a(r.auth,e,Gr),await r.auth._initializationPromise;const i=qs(r.auth,t);await kh(!1,r,e.providerId),await ry(i,r.auth);const s=await hx(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function AD(n,e){return await Xe(n)._initializationPromise,Vh(n,e,!1)}async function Vh(n,e,t=!1){if(Je(n.app))return Promise.reject(Tt(n));const r=Xe(n),i=qs(r,e),o=await new yD(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function hx(n){const e=ju(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
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
 */const RD=10*60*1e3;class fx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kD(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!px(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(mt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RD&&this.cachedEventUids.clear(),this.cachedEventUids.has(_w(e))}saveEventToCache(e){this.cachedEventUids.add(_w(e)),this.lastProcessedEventTime=Date.now()}}function _w(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function px({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kD(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return px(n);default:return!1}}/**
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
 */async function mx(n,e={}){return tt(n,"GET","/v1/projects",e)}/**
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
 */const bD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PD=/^https?/;async function ND(n){if(n.config.emulator)return;const{authorizedDomains:e}=await mx(n);for(const t of e)try{if(CD(t))return}catch{}Vt(n,"unauthorized-domain")}function CD(n){const e=uu(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!PD.test(t))return!1;if(bD.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const DD=new Du(3e4,6e4);function vw(){const n=ct().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function VD(n){return new Promise((e,t)=>{var r,i,s;function o(){vw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vw(),t(mt(n,"network-request-failed"))},timeout:DD.get()})}if(!((i=(r=ct().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ct().gapi)===null||s===void 0)&&s.load)o();else{const a=$T("iframefcb");return ct()[a]=()=>{gapi.load?o():t(mt(n,"network-request-failed"))},Gg(`${AN()}?onload=${a}`).catch(u=>t(u))}}).catch(e=>{throw ad=null,e})}let ad=null;function OD(n){return ad=ad||VD(n),ad}/**
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
 */const LD=new Du(5e3,15e3),MD="__/auth/iframe",jD="emulator/auth/iframe",FD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zD(n){const e=n.config;q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Wg(e,jD):`https://${n.config.authDomain}/${MD}`,r={apiKey:e.apiKey,appName:n.name,v:Gi},i=UD.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${ga(r).slice(1)}`}async function BD(n){const e=await OD(n),t=ct().gapi;return q(t,n,"internal-error"),e.open({where:document.body,url:zD(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=mt(n,"network-request-failed"),a=ct().setTimeout(()=>{s(o)},LD.get());function u(){ct().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const $D={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qD=500,WD=600,GD="_blank",KD="http://localhost";class ww{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function HD(n,e,t,r=qD,i=WD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},$D),{width:r.toString(),height:i.toString(),top:s,left:o}),c=He().toLowerCase();t&&(a=MT(c)?GD:t),OT(c)&&(e=e||KD,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[E,b])=>`${g}${E}=${b},`,"");if(gN(c)&&a!=="_self")return QD(e||"",a),new ww(null);const m=window.open(e||"",a,f);q(m,n,"popup-blocked");try{m.focus()}catch{}return new ww(m)}function QD(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const YD="__/auth/handler",JD="emulator/auth/handler",XD=encodeURIComponent("fac");async function um(n,e,t,r,i,s){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Gi,eventId:i};if(e instanceof Gr){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",TP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries(s||{}))o[f]=m}if(e instanceof wa){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const u=await n._getAppCheckToken(),c=u?`#${XD}=${encodeURIComponent(u)}`:"";return`${ZD(n)}?${ga(a).slice(1)}${c}`}function ZD({config:n}){return n.emulator?Wg(n,JD):`https://${n.authDomain}/${YD}`}/**
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
 */const Yf="webStorageSupport";class e2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bs,this._completeRedirectFn=Vh,this._overrideRedirectResult=iy}async _openPopup(e,t,r,i){var s;Gn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await um(e,t,r,uu(),i);return HD(e,o,ju())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await um(e,t,r,uu(),i);return LC(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Gn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await BD(e),r=new fx(e);return t.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Yf,{type:Yf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Yf];o!==void 0&&t(!!o),Vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ND(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return zT()||LT()||Ou()}}const t2=e2;class n2{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return or("unexpected MultiFactorSessionType")}}}class sy extends n2{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new sy(e)}_finalizeEnroll(e,t,r){return bC(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return GC(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class gx{constructor(){}static assertion(e){return sy._fromCredential(e)}}gx.FACTOR_ID="phone";var Iw="@firebase/auth",Ew="1.7.9";/**
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
 */function i2(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function s2(n){Vi(new fr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:BT(n)},c=new EN(r,i,s,u);return PN(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Vi(new fr("auth-internal",e=>{const t=Xe(e.getProvider("auth").getImmediate());return(r=>new r2(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),qn(Iw,Ew,i2(n)),qn(Iw,Ew,"esm2017")}/**
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
 */const o2=5*60;fP("authIdTokenMaxAge");function a2(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}TN({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=mt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",a2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});s2("Browser");/**
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
 */function Ns(){return window}/**
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
 */const l2=2e3;async function u2(n,e,t){var r;const{BuildInfo:i}=Ns();Gn(e.sessionId,"AuthEvent did not contain a session ID");const s=await p2(e.sessionId),o={};return Ou()?o.ibi=i.packageName:Vu()?o.apn=i.packageName:Vt(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,um(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function c2(n){const{BuildInfo:e}=Ns(),t={};Ou()?t.iosBundleId=e.packageName:Vu()?t.androidPackageName=e.packageName:Vt(n,"operation-not-supported-in-this-environment"),await mx(n,t)}function d2(n){const{cordova:e}=Ns();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,mN()?"_blank":"_system","location=yes"),t(i)})})}async function h2(n,e,t){const{cordova:r}=Ns();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var m;s();const g=(m=r.plugins.browsertab)===null||m===void 0?void 0:m.close;typeof g=="function"&&g(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function c(){a||(a=window.setTimeout(()=>{o(mt(n,"redirect-cancelled-by-user"))},l2))}function f(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(u),document.addEventListener("resume",c,!1),Vu()&&document.addEventListener("visibilitychange",f,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",f,!1),a&&window.clearTimeout(a)}})}finally{i()}}function f2(n){var e,t,r,i,s,o,a,u,c,f;const m=Ns();q(typeof((e=m==null?void 0:m.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),q(typeof((t=m==null?void 0:m.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),q(typeof((s=(i=(r=m==null?void 0:m.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),q(typeof((u=(a=(o=m==null?void 0:m.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),q(typeof((f=(c=m==null?void 0:m.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||f===void 0?void 0:f.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function p2(n){const e=m2(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function m2(n){if(Gn(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
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
 */const g2=20;class y2 extends fx{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function _2(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:I2(),postBody:null,tenantId:n.tenantId,error:mt(n,"no-auth-event")}}function v2(n,e){return cm()._set(dm(n),e)}async function Tw(n){const e=await cm()._get(dm(n));return e&&await cm()._remove(dm(n)),e}function w2(n,e){var t,r;const i=T2(e);if(i.includes("/__/auth/callback")){const s=ld(i),o=s.firebaseError?E2(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],u=a?mt(a):null;return u?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function I2(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<g2;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function cm(){return _n(Zg)}function dm(n){return Is("authEvent",n.config.apiKey,n.name)}function E2(n){try{return JSON.parse(n)}catch{return null}}function T2(n){const e=ld(n),t=e.link?decodeURIComponent(e.link):void 0,r=ld(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return ld(i).link||i||r||t||n}function ld(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return Po(t.join("?"))}/**
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
 */const x2=500;class S2{constructor(){this._redirectPersistence=bs,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Vh,this._overrideRedirectResult=iy}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new y2(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Vt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){f2(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),vD(),await this._originValidation(e);const o=_2(e,r,i);await v2(e,o);const a=await u2(e,o,t),u=await d2(a);return h2(e,s,u)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=c2(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Ns(),o=setTimeout(async()=>{await Tw(e),t.onEvent(xw())},x2),a=async f=>{clearTimeout(o);const m=await Tw(e);let g=null;m&&(f!=null&&f.url)&&(g=w2(m,f.url)),t.onEvent(g||xw())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,c=`${s.packageName.toLowerCase()}://`;Ns().handleOpenURL=async f=>{if(f.toLowerCase().startsWith(c)&&a({url:f}),typeof u=="function")try{u(f)}catch(m){console.error(m)}}}}const A2=S2;function xw(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:mt("no-auth-event")}}/**
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
 */function R2(n,e){Xe(n)._logFramework(e)}var k2="@firebase/auth-compat",b2="0.5.14";/**
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
 */const P2=1e3;function Ol(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function N2(){return Ol()==="http:"||Ol()==="https:"}function yx(n=He()){return!!((Ol()==="file:"||Ol()==="ionic:"||Ol()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function C2(){return Lg()||Og()}function D2(){return dT()&&(document==null?void 0:document.documentMode)===11}function V2(n=He()){return/Edge\/\d+/.test(n)}function O2(n=He()){return D2()||V2(n)}function _x(){try{const n=self.localStorage,e=ju();if(n)return n.setItem(e,"1"),n.removeItem(e),O2()?su():!0}catch{return oy()&&su()}return!1}function oy(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Jf(){return(N2()||cT()||yx())&&!C2()&&_x()&&!oy()}function vx(){return yx()&&typeof document<"u"}async function L2(){return vx()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},P2);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function M2(){return typeof window<"u"?window:null}/**
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
 */const gn={LOCAL:"local",NONE:"none",SESSION:"session"},ol=q,wx="persistence";function j2(n,e){if(ol(Object.values(gn).includes(e),n,"invalid-persistence-type"),Lg()){ol(e!==gn.SESSION,n,"unsupported-persistence-type");return}if(Og()){ol(e===gn.NONE,n,"unsupported-persistence-type");return}if(oy()){ol(e===gn.NONE||e===gn.LOCAL&&su(),n,"unsupported-persistence-type");return}ol(e===gn.NONE||_x(),n,"unsupported-persistence-type")}async function hm(n){await n._initializationPromise;const e=Ix(),t=Is(wx,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function F2(n,e){const t=Ix();if(!t)return[];const r=Is(wx,n,e);switch(t.getItem(r)){case gn.NONE:return[Xo];case gn.LOCAL:return[fu,bs];case gn.SESSION:return[bs];default:return[]}}function Ix(){var n;try{return((n=M2())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
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
 */const U2=q;class _i{constructor(){this.browserResolver=_n(t2),this.cordovaResolver=_n(A2),this.underlyingResolver=null,this._redirectPersistence=bs,this._completeRedirectFn=Vh,this._overrideRedirectResult=iy}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return vx()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return U2(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await L2();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function Ex(n){return n.unwrap()}function z2(n){return n.wrapped()}/**
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
 */function B2(n){return Tx(n)}function $2(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new q2(n,RC(n,e))}else if(r){const i=Tx(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Tx(n){const{_tokenResponse:e}=n instanceof Ht?n.customData:n;if(!e)return null;if(!(n instanceof Ht)&&"temporaryProof"in e&&"phoneNumber"in e)return Ps.credentialFromResult(n);const t=e.providerId;if(!t||t===sl.PASSWORD)return null;let r;switch(t){case sl.GOOGLE:r=rr;break;case sl.FACEBOOK:r=nr;break;case sl.GITHUB:r=ir;break;case sl.TWITTER:r=sr;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?Zo._create(t,a):pr._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new Fo(t).credential({idToken:i,accessToken:s,rawNonce:u})}return n instanceof Ht?r.credentialFromError(n):r.credentialFromResult(n)}function nn(n,e){return e.catch(t=>{throw t instanceof Ht&&$2(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:B2(t),additionalUserInfo:AC(t),user:Oh.getOrCreate(i)}})}async function fm(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>nn(n,t.confirm(r))}}class q2{constructor(e,t){this.resolver=t,this.auth=z2(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return nn(Ex(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */let Oh=class vl{constructor(e){this._delegate=e,this.multiFactor=NC(e)}static getOrCreate(e){return vl.USER_MAP.has(e)||vl.USER_MAP.set(e,new vl(e)),vl.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return nn(this.auth,JT(this._delegate,e))}async linkWithPhoneNumber(e,t){return fm(this.auth,oD(this._delegate,e,t))}async linkWithPopup(e){return nn(this.auth,mD(this._delegate,e,_i))}async linkWithRedirect(e){return await hm(Xe(this.auth)),xD(this._delegate,e,_i)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return nn(this.auth,XT(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return fm(this.auth,aD(this._delegate,e,t))}reauthenticateWithPopup(e){return nn(this.auth,pD(this._delegate,e,_i))}async reauthenticateWithRedirect(e){return await hm(Xe(this.auth)),ED(this._delegate,e,_i)}sendEmailVerification(e){return mC(this._delegate,e)}async unlink(e){return await tC(this._delegate,e),this}updateEmail(e){return vC(this._delegate,e)}updatePassword(e){return wC(this._delegate,e)}updatePhoneNumber(e){return lD(this._delegate,e)}updateProfile(e){return _C(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return gC(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Oh.USER_MAP=new WeakMap;/**
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
 */const al=q;class pm{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;al(r,"invalid-api-key",{appName:e.name}),al(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?_i:void 0;this._delegate=t.initialize({options:{persistence:W2(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(H1),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Oh.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){NN(this._delegate,e,t)}applyActionCode(e){return oC(this._delegate,e)}checkActionCode(e){return ZT(this._delegate,e)}confirmPasswordReset(e,t){return sC(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return nn(this._delegate,lC(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return pC(this._delegate,e)}isSignInWithEmailLink(e){return dC(this._delegate,e)}async getRedirectResult(){al(Jf(),this._delegate,"operation-not-supported-in-this-environment");const e=await AD(this._delegate,_i);return e?nn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){R2(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=Sw(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=Sw(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return cC(this._delegate,e,t)}sendPasswordResetEmail(e,t){return iC(this._delegate,e,t||void 0)}async setPersistence(e){j2(this._delegate,e);let t;switch(e){case gn.SESSION:t=bs;break;case gn.LOCAL:t=await _n(fu)._isAvailable()?fu:Zg;break;case gn.NONE:t=Xo;break;default:return Vt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return nn(this._delegate,eC(this._delegate))}signInWithCredential(e){return nn(this._delegate,bh(this._delegate,e))}signInWithCustomToken(e){return nn(this._delegate,rC(this._delegate,e))}signInWithEmailAndPassword(e,t){return nn(this._delegate,uC(this._delegate,e,t))}signInWithEmailLink(e,t){return nn(this._delegate,hC(this._delegate,e,t))}signInWithPhoneNumber(e,t){return fm(this._delegate,sD(this._delegate,e,t))}async signInWithPopup(e){return al(Jf(),this._delegate,"operation-not-supported-in-this-environment"),nn(this._delegate,fD(this._delegate,e,_i))}async signInWithRedirect(e){return al(Jf(),this._delegate,"operation-not-supported-in-this-environment"),await hm(this._delegate),wD(this._delegate,e,_i)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return aC(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}pm.Persistence=gn;function Sw(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&Oh.getOrCreate(o)),error:e,complete:t}}function W2(n,e){const t=F2(n,e);if(typeof self<"u"&&!t.includes(fu)&&t.push(fu),typeof window<"u")for(const r of[Zg,bs])t.includes(r)||t.push(r);return t.includes(Xo)||t.push(Xo),t}/**
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
 */class ay{constructor(){this.providerId="phone",this._delegate=new Ps(Ex(ya.auth()))}static credential(e,t){return Ps.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}ay.PHONE_SIGN_IN_METHOD=Ps.PHONE_SIGN_IN_METHOD;ay.PROVIDER_ID=Ps.PROVIDER_ID;/**
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
 */const H2="auth-compat";function Q2(n){n.INTERNAL.registerComponent(new fr(H2,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new pm(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ao.EMAIL_SIGNIN,PASSWORD_RESET:ao.PASSWORD_RESET,RECOVER_EMAIL:ao.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ao.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ao.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ao.VERIFY_EMAIL}},EmailAuthProvider:Ki,FacebookAuthProvider:nr,GithubAuthProvider:ir,GoogleAuthProvider:rr,OAuthProvider:Fo,SAMLAuthProvider:Wd,PhoneAuthProvider:ay,PhoneMultiFactorGenerator:gx,RecaptchaVerifier:K2,TwitterAuthProvider:sr,Auth:pm,AuthCredential:va,Error:Ht}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(k2,b2)}Q2(ya);var Aw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ts,xx;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function I(){}I.prototype=_.prototype,w.D=_.prototype,w.prototype=new I,w.prototype.constructor=w,w.C=function(T,k,N){for(var x=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)x[ve-2]=arguments[ve];return _.prototype[k].apply(T,x)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,_,I){I||(I=0);var T=Array(16);if(typeof _=="string")for(var k=0;16>k;++k)T[k]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(k=0;16>k;++k)T[k]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=w.g[0],I=w.g[1],k=w.g[2];var N=w.g[3],x=_+(N^I&(k^N))+T[0]+3614090360&4294967295;_=I+(x<<7&4294967295|x>>>25),x=N+(k^_&(I^k))+T[1]+3905402710&4294967295,N=_+(x<<12&4294967295|x>>>20),x=k+(I^N&(_^I))+T[2]+606105819&4294967295,k=N+(x<<17&4294967295|x>>>15),x=I+(_^k&(N^_))+T[3]+3250441966&4294967295,I=k+(x<<22&4294967295|x>>>10),x=_+(N^I&(k^N))+T[4]+4118548399&4294967295,_=I+(x<<7&4294967295|x>>>25),x=N+(k^_&(I^k))+T[5]+1200080426&4294967295,N=_+(x<<12&4294967295|x>>>20),x=k+(I^N&(_^I))+T[6]+2821735955&4294967295,k=N+(x<<17&4294967295|x>>>15),x=I+(_^k&(N^_))+T[7]+4249261313&4294967295,I=k+(x<<22&4294967295|x>>>10),x=_+(N^I&(k^N))+T[8]+1770035416&4294967295,_=I+(x<<7&4294967295|x>>>25),x=N+(k^_&(I^k))+T[9]+2336552879&4294967295,N=_+(x<<12&4294967295|x>>>20),x=k+(I^N&(_^I))+T[10]+4294925233&4294967295,k=N+(x<<17&4294967295|x>>>15),x=I+(_^k&(N^_))+T[11]+2304563134&4294967295,I=k+(x<<22&4294967295|x>>>10),x=_+(N^I&(k^N))+T[12]+1804603682&4294967295,_=I+(x<<7&4294967295|x>>>25),x=N+(k^_&(I^k))+T[13]+4254626195&4294967295,N=_+(x<<12&4294967295|x>>>20),x=k+(I^N&(_^I))+T[14]+2792965006&4294967295,k=N+(x<<17&4294967295|x>>>15),x=I+(_^k&(N^_))+T[15]+1236535329&4294967295,I=k+(x<<22&4294967295|x>>>10),x=_+(k^N&(I^k))+T[1]+4129170786&4294967295,_=I+(x<<5&4294967295|x>>>27),x=N+(I^k&(_^I))+T[6]+3225465664&4294967295,N=_+(x<<9&4294967295|x>>>23),x=k+(_^I&(N^_))+T[11]+643717713&4294967295,k=N+(x<<14&4294967295|x>>>18),x=I+(N^_&(k^N))+T[0]+3921069994&4294967295,I=k+(x<<20&4294967295|x>>>12),x=_+(k^N&(I^k))+T[5]+3593408605&4294967295,_=I+(x<<5&4294967295|x>>>27),x=N+(I^k&(_^I))+T[10]+38016083&4294967295,N=_+(x<<9&4294967295|x>>>23),x=k+(_^I&(N^_))+T[15]+3634488961&4294967295,k=N+(x<<14&4294967295|x>>>18),x=I+(N^_&(k^N))+T[4]+3889429448&4294967295,I=k+(x<<20&4294967295|x>>>12),x=_+(k^N&(I^k))+T[9]+568446438&4294967295,_=I+(x<<5&4294967295|x>>>27),x=N+(I^k&(_^I))+T[14]+3275163606&4294967295,N=_+(x<<9&4294967295|x>>>23),x=k+(_^I&(N^_))+T[3]+4107603335&4294967295,k=N+(x<<14&4294967295|x>>>18),x=I+(N^_&(k^N))+T[8]+1163531501&4294967295,I=k+(x<<20&4294967295|x>>>12),x=_+(k^N&(I^k))+T[13]+2850285829&4294967295,_=I+(x<<5&4294967295|x>>>27),x=N+(I^k&(_^I))+T[2]+4243563512&4294967295,N=_+(x<<9&4294967295|x>>>23),x=k+(_^I&(N^_))+T[7]+1735328473&4294967295,k=N+(x<<14&4294967295|x>>>18),x=I+(N^_&(k^N))+T[12]+2368359562&4294967295,I=k+(x<<20&4294967295|x>>>12),x=_+(I^k^N)+T[5]+4294588738&4294967295,_=I+(x<<4&4294967295|x>>>28),x=N+(_^I^k)+T[8]+2272392833&4294967295,N=_+(x<<11&4294967295|x>>>21),x=k+(N^_^I)+T[11]+1839030562&4294967295,k=N+(x<<16&4294967295|x>>>16),x=I+(k^N^_)+T[14]+4259657740&4294967295,I=k+(x<<23&4294967295|x>>>9),x=_+(I^k^N)+T[1]+2763975236&4294967295,_=I+(x<<4&4294967295|x>>>28),x=N+(_^I^k)+T[4]+1272893353&4294967295,N=_+(x<<11&4294967295|x>>>21),x=k+(N^_^I)+T[7]+4139469664&4294967295,k=N+(x<<16&4294967295|x>>>16),x=I+(k^N^_)+T[10]+3200236656&4294967295,I=k+(x<<23&4294967295|x>>>9),x=_+(I^k^N)+T[13]+681279174&4294967295,_=I+(x<<4&4294967295|x>>>28),x=N+(_^I^k)+T[0]+3936430074&4294967295,N=_+(x<<11&4294967295|x>>>21),x=k+(N^_^I)+T[3]+3572445317&4294967295,k=N+(x<<16&4294967295|x>>>16),x=I+(k^N^_)+T[6]+76029189&4294967295,I=k+(x<<23&4294967295|x>>>9),x=_+(I^k^N)+T[9]+3654602809&4294967295,_=I+(x<<4&4294967295|x>>>28),x=N+(_^I^k)+T[12]+3873151461&4294967295,N=_+(x<<11&4294967295|x>>>21),x=k+(N^_^I)+T[15]+530742520&4294967295,k=N+(x<<16&4294967295|x>>>16),x=I+(k^N^_)+T[2]+3299628645&4294967295,I=k+(x<<23&4294967295|x>>>9),x=_+(k^(I|~N))+T[0]+4096336452&4294967295,_=I+(x<<6&4294967295|x>>>26),x=N+(I^(_|~k))+T[7]+1126891415&4294967295,N=_+(x<<10&4294967295|x>>>22),x=k+(_^(N|~I))+T[14]+2878612391&4294967295,k=N+(x<<15&4294967295|x>>>17),x=I+(N^(k|~_))+T[5]+4237533241&4294967295,I=k+(x<<21&4294967295|x>>>11),x=_+(k^(I|~N))+T[12]+1700485571&4294967295,_=I+(x<<6&4294967295|x>>>26),x=N+(I^(_|~k))+T[3]+2399980690&4294967295,N=_+(x<<10&4294967295|x>>>22),x=k+(_^(N|~I))+T[10]+4293915773&4294967295,k=N+(x<<15&4294967295|x>>>17),x=I+(N^(k|~_))+T[1]+2240044497&4294967295,I=k+(x<<21&4294967295|x>>>11),x=_+(k^(I|~N))+T[8]+1873313359&4294967295,_=I+(x<<6&4294967295|x>>>26),x=N+(I^(_|~k))+T[15]+4264355552&4294967295,N=_+(x<<10&4294967295|x>>>22),x=k+(_^(N|~I))+T[6]+2734768916&4294967295,k=N+(x<<15&4294967295|x>>>17),x=I+(N^(k|~_))+T[13]+1309151649&4294967295,I=k+(x<<21&4294967295|x>>>11),x=_+(k^(I|~N))+T[4]+4149444226&4294967295,_=I+(x<<6&4294967295|x>>>26),x=N+(I^(_|~k))+T[11]+3174756917&4294967295,N=_+(x<<10&4294967295|x>>>22),x=k+(_^(N|~I))+T[2]+718787259&4294967295,k=N+(x<<15&4294967295|x>>>17),x=I+(N^(k|~_))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(k+(x<<21&4294967295|x>>>11))&4294967295,w.g[2]=w.g[2]+k&4294967295,w.g[3]=w.g[3]+N&4294967295}r.prototype.u=function(w,_){_===void 0&&(_=w.length);for(var I=_-this.blockSize,T=this.B,k=this.h,N=0;N<_;){if(k==0)for(;N<=I;)i(this,w,N),N+=this.blockSize;if(typeof w=="string"){for(;N<_;)if(T[k++]=w.charCodeAt(N++),k==this.blockSize){i(this,T),k=0;break}}else for(;N<_;)if(T[k++]=w[N++],k==this.blockSize){i(this,T),k=0;break}}this.h=k,this.o+=_},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;var I=8*this.o;for(_=w.length-8;_<w.length;++_)w[_]=I&255,I/=256;for(this.u(w),w=Array(16),_=I=0;4>_;++_)for(var T=0;32>T;T+=8)w[I++]=this.g[_]>>>T&255;return w};function s(w,_){var I=a;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=_(w)}function o(w,_){this.h=_;for(var I=[],T=!0,k=w.length-1;0<=k;k--){var N=w[k]|0;T&&N==_||(I[k]=N,T=!1)}this.g=I}var a={};function u(w){return-128<=w&&128>w?s(w,function(_){return new o([_|0],0>_?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return M(c(-w));for(var _=[],I=1,T=0;w>=I;T++)_[T]=w/I|0,I*=4294967296;return new o(_,0)}function f(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return M(f(w.substring(1),_));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(_,8)),T=m,k=0;k<w.length;k+=8){var N=Math.min(8,w.length-k),x=parseInt(w.substring(k,k+N),_);8>N?(N=c(Math.pow(_,N)),T=T.j(N).add(c(x))):(T=T.j(I),T=T.add(c(x)))}return T}var m=u(0),g=u(1),E=u(16777216);n=o.prototype,n.m=function(){if(P(this))return-M(this).m();for(var w=0,_=1,I=0;I<this.g.length;I++){var T=this.i(I);w+=(0<=T?T:4294967296+T)*_,_*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(b(this))return"0";if(P(this))return"-"+M(this).toString(w);for(var _=c(Math.pow(w,6)),I=this,T="";;){var k=V(I,_).g;I=S(I,k.j(_));var N=((0<I.g.length?I.g[0]:I.h)>>>0).toString(w);if(I=k,b(I))return N+T;for(;6>N.length;)N="0"+N;T=N+T}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function b(w){if(w.h!=0)return!1;for(var _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function P(w){return w.h==-1}n.l=function(w){return w=S(this,w),P(w)?-1:b(w)?0:1};function M(w){for(var _=w.g.length,I=[],T=0;T<_;T++)I[T]=~w.g[T];return new o(I,~w.h).add(g)}n.abs=function(){return P(this)?M(this):this},n.add=function(w){for(var _=Math.max(this.g.length,w.g.length),I=[],T=0,k=0;k<=_;k++){var N=T+(this.i(k)&65535)+(w.i(k)&65535),x=(N>>>16)+(this.i(k)>>>16)+(w.i(k)>>>16);T=x>>>16,N&=65535,x&=65535,I[k]=x<<16|N}return new o(I,I[I.length-1]&-2147483648?-1:0)};function S(w,_){return w.add(M(_))}n.j=function(w){if(b(this)||b(w))return m;if(P(this))return P(w)?M(this).j(M(w)):M(M(this).j(w));if(P(w))return M(this.j(M(w)));if(0>this.l(E)&&0>w.l(E))return c(this.m()*w.m());for(var _=this.g.length+w.g.length,I=[],T=0;T<2*_;T++)I[T]=0;for(T=0;T<this.g.length;T++)for(var k=0;k<w.g.length;k++){var N=this.i(T)>>>16,x=this.i(T)&65535,ve=w.i(k)>>>16,Kn=w.i(k)&65535;I[2*T+2*k]+=x*Kn,v(I,2*T+2*k),I[2*T+2*k+1]+=N*Kn,v(I,2*T+2*k+1),I[2*T+2*k+1]+=x*ve,v(I,2*T+2*k+1),I[2*T+2*k+2]+=N*ve,v(I,2*T+2*k+2)}for(T=0;T<_;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=_;T<2*_;T++)I[T]=0;return new o(I,0)};function v(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function A(w,_){this.g=w,this.h=_}function V(w,_){if(b(_))throw Error("division by zero");if(b(w))return new A(m,m);if(P(w))return _=V(M(w),_),new A(M(_.g),M(_.h));if(P(_))return _=V(w,M(_)),new A(M(_.g),_.h);if(30<w.g.length){if(P(w)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var I=g,T=_;0>=T.l(w);)I=z(I),T=z(T);var k=j(I,1),N=j(T,1);for(T=j(T,2),I=j(I,2);!b(T);){var x=N.add(T);0>=x.l(w)&&(k=k.add(I),N=x),T=j(T,1),I=j(I,1)}return _=S(w,k.j(_)),new A(k,_)}for(k=m;0<=w.l(_);){for(I=Math.max(1,Math.floor(w.m()/_.m())),T=Math.ceil(Math.log(I)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),N=c(I),x=N.j(_);P(x)||0<x.l(w);)I-=T,N=c(I),x=N.j(_);b(N)&&(N=g),k=k.add(N),w=S(w,x)}return new A(k,w)}n.A=function(w){return V(this,w).h},n.and=function(w){for(var _=Math.max(this.g.length,w.g.length),I=[],T=0;T<_;T++)I[T]=this.i(T)&w.i(T);return new o(I,this.h&w.h)},n.or=function(w){for(var _=Math.max(this.g.length,w.g.length),I=[],T=0;T<_;T++)I[T]=this.i(T)|w.i(T);return new o(I,this.h|w.h)},n.xor=function(w){for(var _=Math.max(this.g.length,w.g.length),I=[],T=0;T<_;T++)I[T]=this.i(T)^w.i(T);return new o(I,this.h^w.h)};function z(w){for(var _=w.g.length+1,I=[],T=0;T<_;T++)I[T]=w.i(T)<<1|w.i(T-1)>>>31;return new o(I,w.h)}function j(w,_){var I=_>>5;_%=32;for(var T=w.g.length-I,k=[],N=0;N<T;N++)k[N]=0<_?w.i(N+I)>>>_|w.i(N+I+1)<<32-_:w.i(N+I);return new o(k,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,xx=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Ts=o}).apply(typeof Aw<"u"?Aw:typeof self<"u"?self:typeof window<"u"?window:{});var Uc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sx,wl,Ax,ud,mm,Rx,kx,bx;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Uc=="object"&&Uc];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function i(l,d){if(d)e:{var p=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var C=l[y];if(!(C in p))break e;p=p[C]}l=l[l.length-1],y=p[l],d=d(y),d!=y&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var p=0,y=!1,C={next:function(){if(!y&&p<l.length){var L=p++;return{value:d(L,l[L]),done:!1}}return y=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function f(l,d,p){return l.call.apply(l.bind,arguments)}function m(l,d,p){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,y),l.apply(d,C)}}return function(){return l.apply(d,arguments)}}function g(l,d,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function E(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function b(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(y,C,L){for(var W=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)W[Pe-2]=arguments[Pe];return d.prototype[C].apply(y,W)}}function P(l){const d=l.length;if(0<d){const p=Array(d);for(let y=0;y<d;y++)p[y]=l[y];return p}return[]}function M(l,d){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(u(y)){const C=l.length||0,L=y.length||0;l.length=C+L;for(let W=0;W<L;W++)l[C+W]=y[W]}else l.push(y)}}class S{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function v(l){return/^[\s\xa0]*$/.test(l)}function A(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function V(l){return V[" "](l),l}V[" "]=function(){};var z=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function j(l,d,p){for(const y in l)d.call(p,l[y],y,l)}function w(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function _(l){const d={};for(const p in l)d[p]=l[p];return d}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(l,d){let p,y;for(let C=1;C<arguments.length;C++){y=arguments[C];for(p in y)l[p]=y[p];for(let L=0;L<I.length;L++)p=I[L],Object.prototype.hasOwnProperty.call(y,p)&&(l[p]=y[p])}}function k(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function N(l){a.setTimeout(()=>{throw l},0)}function x(){var l=ie;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class ve{constructor(){this.h=this.g=null}add(d,p){const y=Kn.get();y.set(d,p),this.h?this.h.next=y:this.g=y,this.h=y}}var Kn=new S(()=>new xt,l=>l.reset());class xt{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let xn,H=!1,ie=new ve,$=()=>{const l=a.Promise.resolve(void 0);xn=()=>{l.then(ae)}};var ae=()=>{for(var l;l=x();){try{l.h.call(l.g)}catch(p){N(p)}var d=Kn;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}H=!1};function ye(){this.s=this.s,this.C=this.C}ye.prototype.s=!1,ye.prototype.ma=function(){this.s||(this.s=!0,this.N())},ye.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var fn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return l}();function at(l,d){if(de.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(z){e:{try{V(d.nodeName);var C=!0;break e}catch{}C=!1}C||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:en[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&at.aa.h.call(this)}}b(at,de);var en={2:"touch",3:"pen",4:"mouse"};at.prototype.h=function(){at.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Sn="closure_listenable_"+(1e6*Math.random()|0),_r=0;function ba(l,d,p,y,C){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!y,this.ha=C,this.key=++_r,this.da=this.fa=!1}function tn(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function $t(l){this.src=l,this.g={},this.h=0}$t.prototype.add=function(l,d,p,y,C){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var W=Ys(l,d,y,C);return-1<W?(d=l[W],p||(d.fa=!1)):(d=new ba(d,this.src,L,!!y,C),d.fa=p,l.push(d)),d};function lt(l,d){var p=d.type;if(p in l.g){var y=l.g[p],C=Array.prototype.indexOf.call(y,d,void 0),L;(L=0<=C)&&Array.prototype.splice.call(y,C,1),L&&(tn(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function Ys(l,d,p,y){for(var C=0;C<l.length;++C){var L=l[C];if(!L.da&&L.listener==d&&L.capture==!!p&&L.ha==y)return C}return-1}var vr="closure_lm_"+(1e6*Math.random()|0),Yr={};function Zu(l,d,p,y,C){if(Array.isArray(d)){for(var L=0;L<d.length;L++)Zu(l,d[L],p,y,C);return null}return p=rc(p),l&&l[Sn]?l.K(d,p,c(y)?!!y.capture:!1,C):of(l,d,p,!1,y,C)}function of(l,d,p,y,C,L){if(!d)throw Error("Invalid event type");var W=c(C)?!!C.capture:!!C,Pe=nc(l);if(Pe||(l[vr]=Pe=new $t(l)),p=Pe.add(d,p,y,W,L),p.proxy)return p;if(y=af(),p.proxy=y,y.src=l,y.listener=p,l.addEventListener)fn||(C=W),C===void 0&&(C=!1),l.addEventListener(d.toString(),y,C);else if(l.attachEvent)l.attachEvent(tc(d.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function af(){function l(p){return d.call(l.src,l.listener,p)}const d=Pa;return l}function ec(l,d,p,y,C){if(Array.isArray(d))for(var L=0;L<d.length;L++)ec(l,d[L],p,y,C);else y=c(y)?!!y.capture:!!y,p=rc(p),l&&l[Sn]?(l=l.i,d=String(d).toString(),d in l.g&&(L=l.g[d],p=Ys(L,p,y,C),-1<p&&(tn(L[p]),Array.prototype.splice.call(L,p,1),L.length==0&&(delete l.g[d],l.h--)))):l&&(l=nc(l))&&(d=l.g[d.toString()],l=-1,d&&(l=Ys(d,p,y,C)),(p=-1<l?d[l]:null)&&Hn(p))}function Hn(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[Sn])lt(d.i,l);else{var p=l.type,y=l.proxy;d.removeEventListener?d.removeEventListener(p,y,l.capture):d.detachEvent?d.detachEvent(tc(p),y):d.addListener&&d.removeListener&&d.removeListener(y),(p=nc(d))?(lt(p,l),p.h==0&&(p.src=null,d[vr]=null)):tn(l)}}}function tc(l){return l in Yr?Yr[l]:Yr[l]="on"+l}function Pa(l,d){if(l.da)l=!0;else{d=new at(d,this);var p=l.listener,y=l.ha||l.src;l.fa&&Hn(l),l=p.call(y,d)}return l}function nc(l){return l=l[vr],l instanceof $t?l:null}var Jr="__closure_events_fn_"+(1e9*Math.random()>>>0);function rc(l){return typeof l=="function"?l:(l[Jr]||(l[Jr]=function(d){return l.handleEvent(d)}),l[Jr])}function nt(){ye.call(this),this.i=new $t(this),this.M=this,this.F=null}b(nt,ye),nt.prototype[Sn]=!0,nt.prototype.removeEventListener=function(l,d,p,y){ec(this,l,d,p,y)};function yt(l,d){var p,y=l.F;if(y)for(p=[];y;y=y.F)p.push(y);if(l=l.M,y=d.type||d,typeof d=="string")d=new de(d,l);else if(d instanceof de)d.target=d.target||l;else{var C=d;d=new de(y,l),T(d,C)}if(C=!0,p)for(var L=p.length-1;0<=L;L--){var W=d.g=p[L];C=wr(W,y,!0,d)&&C}if(W=d.g=l,C=wr(W,y,!0,d)&&C,C=wr(W,y,!1,d)&&C,p)for(L=0;L<p.length;L++)W=d.g=p[L],C=wr(W,y,!1,d)&&C}nt.prototype.N=function(){if(nt.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],y=0;y<p.length;y++)tn(p[y]);delete l.g[d],l.h--}}this.F=null},nt.prototype.K=function(l,d,p,y){return this.i.add(String(l),d,!1,p,y)},nt.prototype.L=function(l,d,p,y){return this.i.add(String(l),d,!0,p,y)};function wr(l,d,p,y){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var C=!0,L=0;L<d.length;++L){var W=d[L];if(W&&!W.da&&W.capture==p){var Pe=W.listener,Rt=W.ha||W.src;W.fa&&lt(l.i,W),C=Pe.call(Rt,y)!==!1&&C}}return C&&!y.defaultPrevented}function Na(l,d,p){if(typeof l=="function")p&&(l=g(l,p));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function Qn(l){l.g=Na(()=>{l.g=null,l.i&&(l.i=!1,Qn(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class ic extends ye{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Qn(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ir(l){ye.call(this),this.h=l,this.g={}}b(Ir,ye);var Ca=[];function sc(l){j(l.g,function(d,p){this.g.hasOwnProperty(p)&&Hn(d)},l),l.g={}}Ir.prototype.N=function(){Ir.aa.N.call(this),sc(this)},Ir.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Da=a.JSON.stringify,Yn=a.JSON.parse,lf=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Va(){}Va.prototype.h=null;function J(l){return l.h||(l.h=l.i())}function Q(){}var Z={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ae(){de.call(this,"d")}b(Ae,de);function we(){de.call(this,"c")}b(we,de);var ne={},pe=null;function Me(){return pe=pe||new nt}ne.La="serverreachability";function ue(l){de.call(this,ne.La,l)}b(ue,de);function ht(l){const d=Me();yt(d,new ue(d))}ne.STAT_EVENT="statevent";function On(l,d){de.call(this,ne.STAT_EVENT,l),this.stat=d}b(On,de);function _t(l){const d=Me();yt(d,new On(d,l))}ne.Ma="timingevent";function Oa(l,d){de.call(this,ne.Ma,l),this.size=d}b(Oa,de);function Xr(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Zr(){this.g=!0}Zr.prototype.xa=function(){this.g=!1};function oc(l,d,p,y,C,L){l.info(function(){if(l.g)if(L)for(var W="",Pe=L.split("&"),Rt=0;Rt<Pe.length;Rt++){var Te=Pe[Rt].split("=");if(1<Te.length){var Ot=Te[0];Te=Te[1];var Lt=Ot.split("_");W=2<=Lt.length&&Lt[1]=="type"?W+(Ot+"="+Te+"&"):W+(Ot+"=redacted&")}}else W=null;else W=L;return"XMLHTTP REQ ("+y+") [attempt "+C+"]: "+d+`
`+p+`
`+W})}function ac(l,d,p,y,C,L,W){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+C+"]: "+d+`
`+p+`
`+L+" "+W})}function Er(l,d,p,y){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+uc(l,p)+(y?" "+y:"")})}function lc(l,d){l.info(function(){return"TIMEOUT: "+d})}Zr.prototype.info=function(){};function uc(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var y=p[l];if(!(2>y.length)){var C=y[1];if(Array.isArray(C)&&!(1>C.length)){var L=C[0];if(L!="noop"&&L!="stop"&&L!="close")for(var W=1;W<C.length;W++)C[W]=""}}}}return Da(p)}catch{return d}}var Xi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},La={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Js;function Zi(){}b(Zi,Va),Zi.prototype.g=function(){return new XMLHttpRequest},Zi.prototype.i=function(){return{}},Js=new Zi;function Ln(l,d,p,y){this.j=l,this.i=d,this.l=p,this.R=y||1,this.U=new Ir(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ma}function Ma(){this.i=null,this.g="",this.h=!1}var ja={},Xs={};function Zs(l,d,p){l.L=1,l.v=fc(Sr(d)),l.m=p,l.P=!0,Fa(l,null)}function Fa(l,d){l.F=Date.now(),es(l),l.A=Sr(l.v);var p=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),y_(p.i,"t",y),l.C=0,p=l.j.J,l.h=new Ma,l.g=O_(l.j,p?d:null,!l.m),0<l.O&&(l.M=new ic(g(l.Y,l,l.g),l.O)),d=l.U,p=l.g,y=l.ca;var C="readystatechange";Array.isArray(C)||(C&&(Ca[0]=C.toString()),C=Ca);for(var L=0;L<C.length;L++){var W=Zu(p,C[L],y||d.handleEvent,!1,d.h||d);if(!W)break;d.g[W.key]=W}d=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),ht(),oc(l.i,l.u,l.A,l.l,l.R,l.m)}Ln.prototype.ca=function(l){l=l.target;const d=this.M;d&&Ar(l)==3?d.j():this.Y(l)},Ln.prototype.Y=function(l){try{if(l==this.g)e:{const Lt=Ar(this.g);var d=this.g.Ba();const io=this.g.Z();if(!(3>Lt)&&(Lt!=3||this.g&&(this.h.h||this.g.oa()||x_(this.g)))){this.J||Lt!=4||d==7||(d==8||0>=io?ht(3):ht(2)),eo(this);var p=this.g.Z();this.X=p;t:if(Ua(this)){var y=x_(this.g);l="";var C=y.length,L=Ar(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jn(this),ei(this);var W="";break t}this.h.i=new a.TextDecoder}for(d=0;d<C;d++)this.h.h=!0,l+=this.h.i.decode(y[d],{stream:!(L&&d==C-1)});y.length=0,this.h.g+=l,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=p==200,ac(this.i,this.u,this.A,this.l,this.R,Lt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,Rt=this.g;if((Pe=Rt.g?Rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(Pe)){var Te=Pe;break t}}Te=null}if(p=Te)Er(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ba(this,p);else{this.o=!1,this.s=3,_t(12),Jn(this),ei(this);break e}}if(this.P){p=!0;let Mn;for(;!this.J&&this.C<W.length;)if(Mn=cc(this,W),Mn==Xs){Lt==4&&(this.s=4,_t(14),p=!1),Er(this.i,this.l,null,"[Incomplete Response]");break}else if(Mn==ja){this.s=4,_t(15),Er(this.i,this.l,W,"[Invalid Chunk]"),p=!1;break}else Er(this.i,this.l,Mn,null),Ba(this,Mn);if(Ua(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Lt!=4||W.length!=0||this.h.h||(this.s=1,_t(16),p=!1),this.o=this.o&&p,!p)Er(this.i,this.l,W,"[Invalid Chunked Response]"),Jn(this),ei(this);else if(0<W.length&&!this.W){this.W=!0;var Ot=this.j;Ot.g==this&&Ot.ba&&!Ot.M&&(Ot.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),hf(Ot),Ot.M=!0,_t(11))}}else Er(this.i,this.l,W,null),Ba(this,W);Lt==4&&Jn(this),this.o&&!this.J&&(Lt==4?N_(this.j,this):(this.o=!1,es(this)))}else uR(this.g),p==400&&0<W.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),Jn(this),ei(this)}}}catch{}finally{}};function Ua(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function cc(l,d){var p=l.C,y=d.indexOf(`
`,p);return y==-1?Xs:(p=Number(d.substring(p,y)),isNaN(p)?ja:(y+=1,y+p>d.length?Xs:(d=d.slice(y,y+p),l.C=y+p,d)))}Ln.prototype.cancel=function(){this.J=!0,Jn(this)};function es(l){l.S=Date.now()+l.I,za(l,l.I)}function za(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Xr(g(l.ba,l),d)}function eo(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Ln.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(lc(this.i,this.A),this.L!=2&&(ht(),_t(17)),Jn(this),this.s=2,ei(this)):za(this,this.S-l)};function ei(l){l.j.G==0||l.J||N_(l.j,l)}function Jn(l){eo(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,sc(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function Ba(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||Tr(p.h,l))){if(!l.K&&Tr(p.h,l)&&p.G==3){try{var y=p.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var C=y;if(C[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)vc(p),yc(p);else break e;df(p),_t(18)}}else p.za=C[1],0<p.za-p.T&&37500>C[2]&&p.F&&p.v==0&&!p.C&&(p.C=Xr(g(p.Za,p),6e3));if(1>=Xn(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else ns(p,11)}else if((l.K||p.g==l)&&vc(p),!v(d))for(C=p.Da.g.parse(d),d=0;d<C.length;d++){let Te=C[d];if(p.T=Te[0],Te=Te[1],p.G==2)if(Te[0]=="c"){p.K=Te[1],p.ia=Te[2];const Ot=Te[3];Ot!=null&&(p.la=Ot,p.j.info("VER="+p.la));const Lt=Te[4];Lt!=null&&(p.Aa=Lt,p.j.info("SVER="+p.Aa));const io=Te[5];io!=null&&typeof io=="number"&&0<io&&(y=1.5*io,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const Mn=l.g;if(Mn){const Ic=Mn.g?Mn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ic){var L=y.h;L.g||Ic.indexOf("spdy")==-1&&Ic.indexOf("quic")==-1&&Ic.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(to(L,L.h),L.h=null))}if(y.D){const ff=Mn.g?Mn.g.getResponseHeader("X-HTTP-Session-Id"):null;ff&&(y.ya=ff,De(y.I,y.D,ff))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var W=l;if(y.qa=V_(y,y.J?y.ia:null,y.W),W.K){je(y.h,W);var Pe=W,Rt=y.L;Rt&&(Pe.I=Rt),Pe.B&&(eo(Pe),es(Pe)),y.g=W}else b_(y);0<p.i.length&&_c(p)}else Te[0]!="stop"&&Te[0]!="close"||ns(p,7);else p.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?ns(p,7):cf(p):Te[0]!="noop"&&p.l&&p.l.ta(Te),p.v=0)}}ht(4)}catch{}}var R=class{constructor(l,d){this.g=l,this.map=d}};function Se(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function St(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Xn(l){return l.h?1:l.g?l.g.size:0}function Tr(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function to(l,d){l.g?l.g.add(d):l.h=d}function je(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Se.prototype.cancel=function(){if(this.i=At(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function At(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return P(l.i)}function xr(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],p=l.length,y=0;y<p;y++)d.push(l[y]);return d}d=[],p=0;for(y in l)d[p++]=l[y];return d}function $a(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const y in l)d[p++]=y;return d}}}function d_(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=$a(l),y=xr(l),C=y.length,L=0;L<C;L++)d.call(void 0,y[L],p&&p[L],l)}var h_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function YA(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var y=l[p].indexOf("="),C=null;if(0<=y){var L=l[p].substring(0,y);C=l[p].substring(y+1)}else L=l[p];d(L,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function ts(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ts){this.h=l.h,dc(this,l.j),this.o=l.o,this.g=l.g,hc(this,l.s),this.l=l.l;var d=l.i,p=new Ga;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),f_(this,p),this.m=l.m}else l&&(d=String(l).match(h_))?(this.h=!1,dc(this,d[1]||"",!0),this.o=qa(d[2]||""),this.g=qa(d[3]||"",!0),hc(this,d[4]),this.l=qa(d[5]||"",!0),f_(this,d[6]||"",!0),this.m=qa(d[7]||"")):(this.h=!1,this.i=new Ga(null,this.h))}ts.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Wa(d,p_,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Wa(d,p_,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Wa(p,p.charAt(0)=="/"?ZA:XA,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Wa(p,tR)),l.join("")};function Sr(l){return new ts(l)}function dc(l,d,p){l.j=p?qa(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function hc(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function f_(l,d,p){d instanceof Ga?(l.i=d,nR(l.i,l.h)):(p||(d=Wa(d,eR)),l.i=new Ga(d,l.h))}function De(l,d,p){l.i.set(d,p)}function fc(l){return De(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function qa(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Wa(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,JA),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function JA(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var p_=/[#\/\?@]/g,XA=/[#\?:]/g,ZA=/[#\?]/g,eR=/[#\?@]/g,tR=/#/g;function Ga(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function ti(l){l.g||(l.g=new Map,l.h=0,l.i&&YA(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}n=Ga.prototype,n.add=function(l,d){ti(this),this.i=null,l=no(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function m_(l,d){ti(l),d=no(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function g_(l,d){return ti(l),d=no(l,d),l.g.has(d)}n.forEach=function(l,d){ti(this),this.g.forEach(function(p,y){p.forEach(function(C){l.call(d,C,y,this)},this)},this)},n.na=function(){ti(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let y=0;y<d.length;y++){const C=l[y];for(let L=0;L<C.length;L++)p.push(d[y])}return p},n.V=function(l){ti(this);let d=[];if(typeof l=="string")g_(this,l)&&(d=d.concat(this.g.get(no(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},n.set=function(l,d){return ti(this),this.i=null,l=no(this,l),g_(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},n.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function y_(l,d,p){m_(l,d),0<p.length&&(l.i=null,l.g.set(no(l,d),P(p)),l.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var y=d[p];const L=encodeURIComponent(String(y)),W=this.V(y);for(y=0;y<W.length;y++){var C=L;W[y]!==""&&(C+="="+encodeURIComponent(String(W[y]))),l.push(C)}}return this.i=l.join("&")};function no(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function nR(l,d){d&&!l.j&&(ti(l),l.i=null,l.g.forEach(function(p,y){var C=y.toLowerCase();y!=C&&(m_(this,y),y_(this,C,p))},l)),l.j=d}function rR(l,d){const p=new Zr;if(a.Image){const y=new Image;y.onload=E(ni,p,"TestLoadImage: loaded",!0,d,y),y.onerror=E(ni,p,"TestLoadImage: error",!1,d,y),y.onabort=E(ni,p,"TestLoadImage: abort",!1,d,y),y.ontimeout=E(ni,p,"TestLoadImage: timeout",!1,d,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else d(!1)}function iR(l,d){const p=new Zr,y=new AbortController,C=setTimeout(()=>{y.abort(),ni(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:y.signal}).then(L=>{clearTimeout(C),L.ok?ni(p,"TestPingServer: ok",!0,d):ni(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(C),ni(p,"TestPingServer: error",!1,d)})}function ni(l,d,p,y,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),y(p)}catch{}}function sR(){this.g=new lf}function oR(l,d,p){const y=p||"";try{d_(l,function(C,L){let W=C;c(C)&&(W=Da(C)),d.push(y+L+"="+encodeURIComponent(W))})}catch(C){throw d.push(y+"type="+encodeURIComponent("_badmap")),C}}function pc(l){this.l=l.Ub||null,this.j=l.eb||!1}b(pc,Va),pc.prototype.g=function(){return new mc(this.l,this.j)},pc.prototype.i=function(l){return function(){return l}}({});function mc(l,d){nt.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(mc,nt),n=mc.prototype,n.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Ha(this)},n.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ka(this)),this.readyState=0},n.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Ha(this)),this.g&&(this.readyState=3,Ha(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;__(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function __(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}n.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Ka(this):Ha(this),this.readyState==3&&__(this)}},n.Ra=function(l){this.g&&(this.response=this.responseText=l,Ka(this))},n.Qa=function(l){this.g&&(this.response=l,Ka(this))},n.ga=function(){this.g&&Ka(this)};function Ka(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Ha(l)}n.setRequestHeader=function(l,d){this.u.append(l,d)},n.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function Ha(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(mc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function v_(l){let d="";return j(l,function(p,y){d+=y,d+=":",d+=p,d+=`\r
`}),d}function uf(l,d,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=v_(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):De(l,d,p))}function Qe(l){nt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(Qe,nt);var aR=/^https?$/i,lR=["POST","PUT"];n=Qe.prototype,n.Ha=function(l){this.J=l},n.ea=function(l,d,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Js.g(),this.v=this.o?J(this.o):J(Js),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(L){w_(this,L);return}if(l=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var C in y)p.set(C,y[C]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())p.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),C=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(lR,d,void 0))||y||C||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,W]of p)this.g.setRequestHeader(L,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{T_(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){w_(this,L)}};function w_(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,I_(l),gc(l)}function I_(l){l.A||(l.A=!0,yt(l,"complete"),yt(l,"error"))}n.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,yt(this,"complete"),yt(this,"abort"),gc(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gc(this,!0)),Qe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?E_(this):this.bb())},n.bb=function(){E_(this)};function E_(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Ar(l)!=4||l.Z()!=2)){if(l.u&&Ar(l)==4)Na(l.Ea,0,l);else if(yt(l,"readystatechange"),Ar(l)==4){l.h=!1;try{const W=l.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var y;if(y=W===0){var C=String(l.D).match(h_)[1]||null;!C&&a.self&&a.self.location&&(C=a.self.location.protocol.slice(0,-1)),y=!aR.test(C?C.toLowerCase():"")}p=y}if(p)yt(l,"complete"),yt(l,"success");else{l.m=6;try{var L=2<Ar(l)?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.Z()+"]",I_(l)}}finally{gc(l)}}}}function gc(l,d){if(l.g){T_(l);const p=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||yt(l,"ready");try{p.onreadystatechange=y}catch{}}}function T_(l){l.I&&(a.clearTimeout(l.I),l.I=null)}n.isActive=function(){return!!this.g};function Ar(l){return l.g?l.g.readyState:0}n.Z=function(){try{return 2<Ar(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),Yn(d)}};function x_(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function uR(l){const d={};l=(l.g&&2<=Ar(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(v(l[y]))continue;var p=k(l[y]);const C=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=d[C]||[];d[C]=L,L.push(p)}w(d,function(y){return y.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qa(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function S_(l){this.Aa=0,this.i=[],this.j=new Zr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qa("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qa("baseRetryDelayMs",5e3,l),this.cb=Qa("retryDelaySeedMs",1e4,l),this.Wa=Qa("forwardChannelMaxRetries",2,l),this.wa=Qa("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Se(l&&l.concurrentRequestLimit),this.Da=new sR,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=S_.prototype,n.la=8,n.G=1,n.connect=function(l,d,p,y){_t(0),this.W=l,this.H=d||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=V_(this,null,this.W),_c(this)};function cf(l){if(A_(l),l.G==3){var d=l.U++,p=Sr(l.I);if(De(p,"SID",l.K),De(p,"RID",d),De(p,"TYPE","terminate"),Ya(l,p),d=new Ln(l,l.j,d),d.L=2,d.v=fc(Sr(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=O_(d.j,null),d.g.ea(d.v)),d.F=Date.now(),es(d)}D_(l)}function yc(l){l.g&&(hf(l),l.g.cancel(),l.g=null)}function A_(l){yc(l),l.u&&(a.clearTimeout(l.u),l.u=null),vc(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function _c(l){if(!St(l.h)&&!l.s){l.s=!0;var d=l.Ga;xn||$(),H||(xn(),H=!0),ie.add(d,l),l.B=0}}function cR(l,d){return Xn(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Xr(g(l.Ga,l,d),C_(l,l.B)),l.B++,!0)}n.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const C=new Ln(this,this.j,l);let L=this.o;if(this.S&&(L?(L=_(L),T(L,this.S)):L=this.S),this.m!==null||this.O||(C.H=L,L=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=k_(this,C,d),p=Sr(this.I),De(p,"RID",l),De(p,"CVER",22),this.D&&De(p,"X-HTTP-Session-Id",this.D),Ya(this,p),L&&(this.O?d="headers="+encodeURIComponent(String(v_(L)))+"&"+d:this.m&&uf(p,this.m,L)),to(this.h,C),this.Ua&&De(p,"TYPE","init"),this.P?(De(p,"$req",d),De(p,"SID","null"),C.T=!0,Zs(C,p,null)):Zs(C,p,d),this.G=2}}else this.G==3&&(l?R_(this,l):this.i.length==0||St(this.h)||R_(this))};function R_(l,d){var p;d?p=d.l:p=l.U++;const y=Sr(l.I);De(y,"SID",l.K),De(y,"RID",p),De(y,"AID",l.T),Ya(l,y),l.m&&l.o&&uf(y,l.m,l.o),p=new Ln(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=k_(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),to(l.h,p),Zs(p,y,d)}function Ya(l,d){l.H&&j(l.H,function(p,y){De(d,y,p)}),l.l&&d_({},function(p,y){De(d,y,p)})}function k_(l,d,p){p=Math.min(l.i.length,p);var y=l.l?g(l.l.Na,l.l,l):null;e:{var C=l.i;let L=-1;for(;;){const W=["count="+p];L==-1?0<p?(L=C[0].g,W.push("ofs="+L)):L=0:W.push("ofs="+L);let Pe=!0;for(let Rt=0;Rt<p;Rt++){let Te=C[Rt].g;const Ot=C[Rt].map;if(Te-=L,0>Te)L=Math.max(0,C[Rt].g-100),Pe=!1;else try{oR(Ot,W,"req"+Te+"_")}catch{y&&y(Ot)}}if(Pe){y=W.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,y}function b_(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;xn||$(),H||(xn(),H=!0),ie.add(d,l),l.v=0}}function df(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Xr(g(l.Fa,l),C_(l,l.v)),l.v++,!0)}n.Fa=function(){if(this.u=null,P_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Xr(g(this.ab,this),l)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),yc(this),P_(this))};function hf(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function P_(l){l.g=new Ln(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Sr(l.qa);De(d,"RID","rpc"),De(d,"SID",l.K),De(d,"AID",l.T),De(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&De(d,"TO",l.ja),De(d,"TYPE","xmlhttp"),Ya(l,d),l.m&&l.o&&uf(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=fc(Sr(d)),p.m=null,p.P=!0,Fa(p,l)}n.Za=function(){this.C!=null&&(this.C=null,yc(this),df(this),_t(19))};function vc(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function N_(l,d){var p=null;if(l.g==d){vc(l),hf(l),l.g=null;var y=2}else if(Tr(l.h,d))p=d.D,je(l.h,d),y=1;else return;if(l.G!=0){if(d.o)if(y==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var C=l.B;y=Me(),yt(y,new Oa(y,p)),_c(l)}else b_(l);else if(C=d.s,C==3||C==0&&0<d.X||!(y==1&&cR(l,d)||y==2&&df(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),C){case 1:ns(l,5);break;case 4:ns(l,10);break;case 3:ns(l,6);break;default:ns(l,2)}}}function C_(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function ns(l,d){if(l.j.info("Error code "+d),d==2){var p=g(l.fb,l),y=l.Xa;const C=!y;y=new ts(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||dc(y,"https"),fc(y),C?rR(y.toString(),p):iR(y.toString(),p)}else _t(2);l.G=0,l.l&&l.l.sa(d),D_(l),A_(l)}n.fb=function(l){l?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function D_(l){if(l.G=0,l.ka=[],l.l){const d=At(l.h);(d.length!=0||l.i.length!=0)&&(M(l.ka,d),M(l.ka,l.i),l.h.i.length=0,P(l.i),l.i.length=0),l.l.ra()}}function V_(l,d,p){var y=p instanceof ts?Sr(p):new ts(p);if(y.g!="")d&&(y.g=d+"."+y.g),hc(y,y.s);else{var C=a.location;y=C.protocol,d=d?d+"."+C.hostname:C.hostname,C=+C.port;var L=new ts(null);y&&dc(L,y),d&&(L.g=d),C&&hc(L,C),p&&(L.l=p),y=L}return p=l.D,d=l.ya,p&&d&&De(y,p,d),De(y,"VER",l.la),Ya(l,y),y}function O_(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Qe(new pc({eb:p})):new Qe(l.pa),d.Ha(l.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function L_(){}n=L_.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function wc(){}wc.prototype.g=function(l,d){return new pn(l,d)};function pn(l,d){nt.call(this),this.g=new S_(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!v(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!v(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new ro(this)}b(pn,nt),pn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pn.prototype.close=function(){cf(this.g)},pn.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=Da(l),l=p);d.i.push(new R(d.Ya++,l)),d.G==3&&_c(d)},pn.prototype.N=function(){this.g.l=null,delete this.j,cf(this.g),delete this.g,pn.aa.N.call(this)};function M_(l){Ae.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}b(M_,Ae);function j_(){we.call(this),this.status=1}b(j_,we);function ro(l){this.g=l}b(ro,L_),ro.prototype.ua=function(){yt(this.g,"a")},ro.prototype.ta=function(l){yt(this.g,new M_(l))},ro.prototype.sa=function(l){yt(this.g,new j_)},ro.prototype.ra=function(){yt(this.g,"b")},wc.prototype.createWebChannel=wc.prototype.g,pn.prototype.send=pn.prototype.o,pn.prototype.open=pn.prototype.m,pn.prototype.close=pn.prototype.close,bx=function(){return new wc},kx=function(){return Me()},Rx=ne,mm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xi.NO_ERROR=0,Xi.TIMEOUT=8,Xi.HTTP_ERROR=6,ud=Xi,La.COMPLETE="complete",Ax=La,Q.EventType=Z,Z.OPEN="a",Z.CLOSE="b",Z.ERROR="c",Z.MESSAGE="d",nt.prototype.listen=nt.prototype.K,wl=Q,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,Sx=Qe}).apply(typeof Uc<"u"?Uc:typeof self<"u"?self:typeof window<"u"?window:{});const Rw="@firebase/firestore";/**
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
 */class It{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
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
 */const Oi=new xh("@firebase/firestore");function fo(){return Oi.logLevel}function Y2(n){Oi.setLogLevel(n)}function U(n,...e){if(Oi.logLevel<=he.DEBUG){const t=e.map(ly);Oi.debug(`Firestore (${Ia}): ${n}`,...t)}}function it(n,...e){if(Oi.logLevel<=he.ERROR){const t=e.map(ly);Oi.error(`Firestore (${Ia}): ${n}`,...t)}}function mr(n,...e){if(Oi.logLevel<=he.WARN){const t=e.map(ly);Oi.warn(`Firestore (${Ia}): ${n}`,...t)}}function ly(n){if(typeof n=="string")return n;try{/**
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
 */function Y(n="Unexpected state"){const e=`FIRESTORE (${Ia}) INTERNAL ASSERTION FAILED: `+n;throw it(e),new Error(e)}function ee(n,e){n||Y()}function J2(n,e){n||Y()}function K(n,e){return n}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends Ht{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ct{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Px{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class X2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(It.UNAUTHENTICATED))}shutdown(){}}class Z2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class eV{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ee(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new Ct;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ct,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ct)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ee(typeof r.accessToken=="string"),new Px(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ee(e===null||typeof e=="string"),new It(e)}}class tV{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class nV{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new tV(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rV{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iV{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){ee(this.o===void 0);const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ee(typeof t.token=="string"),this.R=t.token,new rV(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class Nx{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=sV(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function le(n,e){return n<e?-1:n>e?1:0}function ea(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function Cx(n){return n+"\0"}/**
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
 */class $e{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new F(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new $e(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new $e(0,0))}static max(){return new te(new $e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class pu{constructor(e,t,r){t===void 0?t=0:t>e.length&&Y(),r===void 0?r=e.length-t:r>e.length-t&&Y(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return pu.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof pu?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class me extends pu{construct(e,t,r){return new me(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new me(t)}static emptyPath(){return new me([])}}const oV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends pu{construct(e,t,r){return new ze(e,t,r)}static isValidIdentifier(e){return oV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new F(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new F(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new F(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new F(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(t)}static emptyPath(){return new ze([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(me.fromString(e))}static fromName(e){return new G(me.fromString(e).popFirst(5))}static empty(){return new G(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return me.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new me(e.slice()))}}/**
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
 */class Qd{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function gm(n){return n.fields.find(e=>e.kind===2)}function as(n){return n.fields.filter(e=>e.kind!==2)}Qd.UNKNOWN_ID=-1;class cd{constructor(e,t){this.fieldPath=e,this.kind=t}}class mu{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new mu(0,In.min())}}function Dx(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new $e(t+1,0):new $e(t,r));return new In(i,G.empty(),e)}function Vx(n){return new In(n.readTime,n.key,-1)}class In{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new In(te.min(),G.empty(),-1)}static max(){return new In(te.max(),G.empty(),-1)}}function uy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=G.comparator(n.documentKey,e.documentKey),t!==0?t:le(n.largestBatchId,e.largestBatchId))}/**
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
 */const Ox="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Lx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Hi(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==Ox)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Lh{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new Ct,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Ll(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=cy(r.target.error);this.V.reject(new Ll(e,i))}}static open(e,t,r,i){try{return new Lh(t,e.transaction(i,r))}catch(s){throw new Ll(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(U("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new lV(t)}}class dr{constructor(e,t,r){this.name=e,this.version=t,this.p=r,dr.S(He())===12.2&&it("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return U("SimpleDb","Removing database:",e),ls(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!su())return!1;if(dr.v())return!0;const e=He(),t=dr.S(e),r=0<t&&t<10,i=Mx(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(U("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new Ll(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new F(O.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new F(O.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ll(e,o))},i.onupgradeneeded=s=>{U("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{U("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Lh.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),D.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(U("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Mx(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class aV{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return ls(this.B.delete())}}class Ll extends F{constructor(e,t){super(O.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Qi(n){return n.name==="IndexedDbTransactionError"}class lV{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(U("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(U("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ls(r)}add(e){return U("SimpleDb","ADD",this.store.name,e,e),ls(this.store.add(e))}get(e){return ls(this.store.get(e)).next(t=>(t===void 0&&(t=null),U("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return U("SimpleDb","DELETE",this.store.name,e),ls(this.store.delete(e))}count(){return U("SimpleDb","COUNT",this.store.name),ls(this.store.count())}U(e,t){const r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new D((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,u)=>{o.push(u)}).next(()=>o)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new D((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,t){U("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.W(i,t)}Y(e){const t=this.cursor({});return new D((r,i)=>{t.onerror=s=>{const o=cy(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new D((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new aV(a),c=t(a.primaryKey,a.value,u);if(c instanceof D){const f=c.catch(m=>(u.done(),D.reject(m)));r.push(f)}u.isDone?i():u.K===null?a.continue():a.continue(u.K)}}).next(()=>D.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function ls(n){return new D((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=cy(r.target.error);t(i)}})}let kw=!1;function cy(n){const e=dr.S(He());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new F("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return kw||(kw=!0,setTimeout(()=>{throw r},0)),r}}return n}class uV{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){U("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{U("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Qi(t)?U("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await Hi(t)}await this.X(6e4)})}}class cV{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let i=t,s=!0;return D.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return U("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(U("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=Vx(s);uy(o,r)>0&&(r=o)}),new In(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class an{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}an.oe=-1;function Uu(n){return n==null}function gu(n){return n===0&&1/n==-1/0}function jx(n){return typeof n=="number"&&Number.isInteger(n)&&!gu(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Qt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=bw(e)),e=dV(n.get(t),e);return bw(e)}function dV(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function bw(n){return n+""}function ar(n){const e=n.length;if(ee(e>=2),e===2)return ee(n.charAt(0)===""&&n.charAt(1)===""),me.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&Y(),n.charAt(o+1)){case"":const a=n.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:Y()}s=o+2}return new me(r)}/**
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
 */const Pw=["userId","batchId"];/**
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
 */function dd(n,e){return[n,Qt(e)]}function Fx(n,e,t){return[n,Qt(e),t]}const hV={},fV=["prefixPath","collectionGroup","readTime","documentId"],pV=["prefixPath","collectionGroup","documentId"],mV=["collectionGroup","readTime","prefixPath","documentId"],gV=["canonicalId","targetId"],yV=["targetId","path"],_V=["path","targetId"],vV=["collectionId","parent"],wV=["indexId","uid"],IV=["uid","sequenceNumber"],EV=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],TV=["indexId","uid","orderedDocumentKey"],xV=["userId","collectionPath","documentId"],SV=["userId","collectionPath","largestBatchId"],AV=["userId","collectionGroup","largestBatchId"],Ux=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],RV=[...Ux,"documentOverlays"],zx=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Bx=zx,dy=[...Bx,"indexConfiguration","indexState","indexEntries"],kV=dy,bV=[...dy,"globals"];/**
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
 */class ym extends Lx{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function gt(n,e){const t=K(n);return dr.F(t._e,e)}/**
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
 */function Nw(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ws(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function $x(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Ce{constructor(e,t){this.comparator=e,this.root=t||bt.EMPTY}insert(e,t){return new Ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zc(this.root,e,this.comparator,!1)}getReverseIterator(){return new zc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zc(this.root,e,this.comparator,!0)}}class zc{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class bt{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??bt.RED,this.left=i??bt.EMPTY,this.right=s??bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new bt(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return bt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,t,r,i,s){return this}insert(e,t,r){return new bt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class be{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Cw(this.data.getIterator())}getIteratorFrom(e){return new Cw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof be)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new be(this.comparator);return t.data=e,t}}class Cw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function lo(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class ln{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new ln([])}unionWith(e){let t=new be(ze.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ln(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ea(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class qx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function PV(){return typeof atob<"u"}/**
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
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new qx("Invalid base64 string: "+s):s}}(e);return new Ze(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ze(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const NV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Br(n){if(ee(!!n),typeof n=="string"){let e=0;const t=NV.exec(n);if(ee(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(n.seconds),nanos:Fe(n.nanos)}}function Fe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Li(n){return typeof n=="string"?Ze.fromBase64String(n):Ze.fromUint8Array(n)}/**
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
 */function Mh(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function hy(n){const e=n.mapValue.fields.__previous_value__;return Mh(e)?hy(e):e}function yu(n){const e=Br(n.mapValue.fields.__local_write_time__.timestampValue);return new $e(e.seconds,e.nanos)}/**
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
 */class CV{constructor(e,t,r,i,s,o,a,u,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Mi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Mi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Mi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const vi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},hd={nullValue:"NULL_VALUE"};function Cs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Mh(n)?4:Wx(n)?9007199254740991:jh(n)?10:11:Y()}function gr(n,e){if(n===e)return!0;const t=Cs(n);if(t!==Cs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return yu(n).isEqual(yu(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Br(i.timestampValue),a=Br(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Li(i.bytesValue).isEqual(Li(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Fe(i.geoPointValue.latitude)===Fe(s.geoPointValue.latitude)&&Fe(i.geoPointValue.longitude)===Fe(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Fe(i.integerValue)===Fe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Fe(i.doubleValue),a=Fe(s.doubleValue);return o===a?gu(o)===gu(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return ea(n.arrayValue.values||[],e.arrayValue.values||[],gr);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Nw(o)!==Nw(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!gr(o[u],a[u])))return!1;return!0}(n,e);default:return Y()}}function _u(n,e){return(n.values||[]).find(t=>gr(t,e))!==void 0}function ji(n,e){if(n===e)return 0;const t=Cs(n),r=Cs(e);if(t!==r)return le(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return le(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Fe(s.integerValue||s.doubleValue),u=Fe(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(n,e);case 3:return Dw(n.timestampValue,e.timestampValue);case 4:return Dw(yu(n),yu(e));case 5:return le(n.stringValue,e.stringValue);case 6:return function(s,o){const a=Li(s),u=Li(o);return a.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const f=le(a[c],u[c]);if(f!==0)return f}return le(a.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=le(Fe(s.latitude),Fe(o.latitude));return a!==0?a:le(Fe(s.longitude),Fe(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Vw(n.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,f;const m=s.fields||{},g=o.fields||{},E=(a=m.value)===null||a===void 0?void 0:a.arrayValue,b=(u=g.value)===null||u===void 0?void 0:u.arrayValue,P=le(((c=E==null?void 0:E.values)===null||c===void 0?void 0:c.length)||0,((f=b==null?void 0:b.values)===null||f===void 0?void 0:f.length)||0);return P!==0?P:Vw(E,b)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===vi.mapValue&&o===vi.mapValue)return 0;if(s===vi.mapValue)return 1;if(o===vi.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=le(u[m],f[m]);if(g!==0)return g;const E=ji(a[u[m]],c[f[m]]);if(E!==0)return E}return le(u.length,f.length)}(n.mapValue,e.mapValue);default:throw Y()}}function Dw(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return le(n,e);const t=Br(n),r=Br(e),i=le(t.seconds,r.seconds);return i!==0?i:le(t.nanos,r.nanos)}function Vw(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=ji(t[i],r[i]);if(s)return s}return le(t.length,r.length)}function ta(n){return _m(n)}function _m(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Br(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Li(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return G.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=_m(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${_m(t.fields[o])}`;return i+"}"}(n.mapValue):Y()}function Ds(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function vm(n){return!!n&&"integerValue"in n}function vu(n){return!!n&&"arrayValue"in n}function Ow(n){return!!n&&"nullValue"in n}function Lw(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function fd(n){return!!n&&"mapValue"in n}function jh(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ml(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ws(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ml(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ml(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Wx(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const Gx={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function DV(n){return"nullValue"in n?hd:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Ds(Mi.empty(),G.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?jh(n)?Gx:{mapValue:{}}:Y()}function VV(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Ds(Mi.empty(),G.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?Gx:"mapValue"in n?jh(n)?{mapValue:{}}:vi:Y()}function Mw(n,e){const t=ji(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function jw(n,e){const t=ji(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!fd(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ml(t)}setAll(e){let t=ze.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=Ml(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());fd(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return gr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];fd(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Ws(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Pt(Ml(this.value))}}function Kx(n){const e=[];return Ws(n.fields,(t,r)=>{const i=new ze([t]);if(fd(r)){const s=Kx(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new ln(e)}/**
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
 */class Oe{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Oe(e,0,te.min(),te.min(),te.min(),Pt.empty(),0)}static newFoundDocument(e,t,r,i){return new Oe(e,1,t,te.min(),r,i,0)}static newNoDocument(e,t){return new Oe(e,2,t,te.min(),te.min(),Pt.empty(),0)}static newUnknownDocument(e,t){return new Oe(e,3,t,te.min(),te.min(),Pt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Oe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Oe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Fi{constructor(e,t){this.position=e,this.inclusive=t}}function Fw(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),t.key):r=ji(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Uw(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!gr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class wu{constructor(e,t="asc"){this.field=e,this.dir=t}}function OV(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Hx{}class ge extends Hx{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new LV(e,t,r):t==="array-contains"?new FV(e,r):t==="in"?new eS(e,r):t==="not-in"?new UV(e,r):t==="array-contains-any"?new zV(e,r):new ge(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new MV(e,r):new jV(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ji(t,this.value)):t!==null&&Cs(this.value)===Cs(t)&&this.matchesComparison(ji(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Re extends Hx{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Re(e,t)}matches(e){return na(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function na(n){return n.op==="and"}function wm(n){return n.op==="or"}function fy(n){return Qx(n)&&na(n)}function Qx(n){for(const e of n.filters)if(e instanceof Re)return!1;return!0}function Im(n){if(n instanceof ge)return n.field.canonicalString()+n.op.toString()+ta(n.value);if(fy(n))return n.filters.map(e=>Im(e)).join(",");{const e=n.filters.map(t=>Im(t)).join(",");return`${n.op}(${e})`}}function Yx(n,e){return n instanceof ge?function(r,i){return i instanceof ge&&r.op===i.op&&r.field.isEqual(i.field)&&gr(r.value,i.value)}(n,e):n instanceof Re?function(r,i){return i instanceof Re&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Yx(o,i.filters[a]),!0):!1}(n,e):void Y()}function Jx(n,e){const t=n.filters.concat(e);return Re.create(t,n.op)}function Xx(n){return n instanceof ge?function(t){return`${t.field.canonicalString()} ${t.op} ${ta(t.value)}`}(n):n instanceof Re?function(t){return t.op.toString()+" {"+t.getFilters().map(Xx).join(" ,")+"}"}(n):"Filter"}class LV extends ge{constructor(e,t,r){super(e,t,r),this.key=G.fromName(r.referenceValue)}matches(e){const t=G.comparator(e.key,this.key);return this.matchesComparison(t)}}class MV extends ge{constructor(e,t){super(e,"in",t),this.keys=Zx("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class jV extends ge{constructor(e,t){super(e,"not-in",t),this.keys=Zx("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Zx(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>G.fromName(r.referenceValue))}class FV extends ge{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return vu(t)&&_u(t.arrayValue,this.value)}}class eS extends ge{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&_u(this.value.arrayValue,t)}}class UV extends ge{constructor(e,t){super(e,"not-in",t)}matches(e){if(_u(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!_u(this.value.arrayValue,t)}}class zV extends ge{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!vu(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>_u(this.value.arrayValue,r))}}/**
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
 */class BV{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Em(n,e=null,t=[],r=[],i=null,s=null,o=null){return new BV(n,e,t,r,i,s,o)}function Vs(n){const e=K(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Im(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Uu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ta(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ta(r)).join(",")),e.ue=t}return e.ue}function zu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!OV(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Yx(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Uw(n.startAt,e.startAt)&&Uw(n.endAt,e.endAt)}function Yd(n){return G.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Jd(n,e){return n.filters.filter(t=>t instanceof ge&&t.field.isEqual(e))}function zw(n,e,t){let r=hd,i=!0;for(const s of Jd(n,e)){let o=hd,a=!0;switch(s.op){case"<":case"<=":o=DV(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=hd}Mw({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Mw({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function Bw(n,e,t){let r=vi,i=!0;for(const s of Jd(n,e)){let o=vi,a=!0;switch(s.op){case">=":case">":o=VV(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=vi}jw({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];jw({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Kr{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function tS(n,e,t,r,i,s,o,a){return new Kr(n,e,t,r,i,s,o,a)}function Ea(n){return new Kr(n)}function $w(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function py(n){return n.collectionGroup!==null}function zo(n){const e=K(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new be(ze.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new wu(s,r))}),t.has(ze.keyField().canonicalString())||e.ce.push(new wu(ze.keyField(),r))}return e.ce}function Yt(n){const e=K(n);return e.le||(e.le=$V(e,zo(n))),e.le}function $V(n,e){if(n.limitType==="F")return Em(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new wu(i.field,s)});const t=n.endAt?new Fi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Fi(n.startAt.position,n.startAt.inclusive):null;return Em(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Tm(n,e){const t=n.filters.concat([e]);return new Kr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Xd(n,e,t){return new Kr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Bu(n,e){return zu(Yt(n),Yt(e))&&n.limitType===e.limitType}function nS(n){return`${Vs(Yt(n))}|lt:${n.limitType}`}function po(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Xx(i)).join(", ")}]`),Uu(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>ta(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>ta(i)).join(",")),`Target(${r})`}(Yt(n))}; limitType=${n.limitType})`}function $u(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of zo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=Fw(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,zo(r),i)||r.endAt&&!function(o,a,u){const c=Fw(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,zo(r),i))}(n,e)}function rS(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function iS(n){return(e,t)=>{let r=!1;for(const i of zo(n)){const s=qV(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function qV(n,e,t){const r=n.field.isKeyField()?G.comparator(e.key,t.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?ji(u,c):Y()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */class Yi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ws(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return $x(this.inner)}size(){return this.innerSize}}/**
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
 */const WV=new Ce(G.comparator);function un(){return WV}const sS=new Ce(G.comparator);function Il(...n){let e=sS;for(const t of n)e=e.insert(t.key,t);return e}function oS(n){let e=sS;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function lr(){return jl()}function aS(){return jl()}function jl(){return new Yi(n=>n.toString(),(n,e)=>n.isEqual(e))}const GV=new Ce(G.comparator),KV=new be(G.comparator);function ce(...n){let e=KV;for(const t of n)e=e.add(t);return e}const HV=new be(le);function my(){return HV}/**
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
 */function gy(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gu(e)?"-0":e}}function lS(n){return{integerValue:""+n}}function uS(n,e){return jx(e)?lS(e):gy(n,e)}/**
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
 */class Fh{constructor(){this._=void 0}}function QV(n,e,t){return n instanceof ra?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Mh(s)&&(s=hy(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof Os?dS(n,e):n instanceof Ls?hS(n,e):function(i,s){const o=cS(i,s),a=qw(o)+qw(i.Pe);return vm(o)&&vm(i.Pe)?lS(a):gy(i.serializer,a)}(n,e)}function YV(n,e,t){return n instanceof Os?dS(n,e):n instanceof Ls?hS(n,e):t}function cS(n,e){return n instanceof ia?function(r){return vm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ra extends Fh{}class Os extends Fh{constructor(e){super(),this.elements=e}}function dS(n,e){const t=fS(e);for(const r of n.elements)t.some(i=>gr(i,r))||t.push(r);return{arrayValue:{values:t}}}class Ls extends Fh{constructor(e){super(),this.elements=e}}function hS(n,e){let t=fS(e);for(const r of n.elements)t=t.filter(i=>!gr(i,r));return{arrayValue:{values:t}}}class ia extends Fh{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function qw(n){return Fe(n.integerValue||n.doubleValue)}function fS(n){return vu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class qu{constructor(e,t){this.field=e,this.transform=t}}function JV(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Os&&i instanceof Os||r instanceof Ls&&i instanceof Ls?ea(r.elements,i.elements,gr):r instanceof ia&&i instanceof ia?gr(r.Pe,i.Pe):r instanceof ra&&i instanceof ra}(n.transform,e.transform)}class XV{constructor(e,t){this.version=e,this.transformResults=t}}class Be{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Be}static exists(e){return new Be(void 0,e)}static updateTime(e){return new Be(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pd(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Uh{}function pS(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new xa(n.key,Be.none()):new Ta(n.key,n.data,Be.none());{const t=n.data,r=Pt.empty();let i=new be(ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Hr(n.key,r,new ln(i.toArray()),Be.none())}}function ZV(n,e,t){n instanceof Ta?function(i,s,o){const a=i.value.clone(),u=Gw(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof Hr?function(i,s,o){if(!pd(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Gw(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(mS(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Fl(n,e,t,r){return n instanceof Ta?function(s,o,a,u){if(!pd(s.precondition,o))return a;const c=s.value.clone(),f=Kw(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof Hr?function(s,o,a,u){if(!pd(s.precondition,o))return a;const c=Kw(s.fieldTransforms,u,o),f=o.data;return f.setAll(mS(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(s,o,a){return pd(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function eO(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=cS(r.transform,i||null);s!=null&&(t===null&&(t=Pt.empty()),t.set(r.field,s))}return t||null}function Ww(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ea(r,i,(s,o)=>JV(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ta extends Uh{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Hr extends Uh{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function mS(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Gw(n,e,t){const r=new Map;ee(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,YV(o,a,t[i]))}return r}function Kw(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,QV(s,o,e))}return r}class xa extends Uh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yy extends Uh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class _y{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ZV(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Fl(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Fl(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=aS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const u=pS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ce())}isEqual(e){return this.batchId===e.batchId&&ea(this.mutations,e.mutations,(t,r)=>Ww(t,r))&&ea(this.baseMutations,e.baseMutations,(t,r)=>Ww(t,r))}}class vy{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ee(e.mutations.length===r.length);let i=function(){return GV}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new vy(e,t,r,i)}}/**
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
 */class wy{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var ut,Ie;function gS(n){switch(n){default:return Y();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function yS(n){if(n===void 0)return it("GRPC error has no .code"),O.UNKNOWN;switch(n){case ut.OK:return O.OK;case ut.CANCELLED:return O.CANCELLED;case ut.UNKNOWN:return O.UNKNOWN;case ut.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case ut.INTERNAL:return O.INTERNAL;case ut.UNAVAILABLE:return O.UNAVAILABLE;case ut.UNAUTHENTICATED:return O.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case ut.NOT_FOUND:return O.NOT_FOUND;case ut.ALREADY_EXISTS:return O.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return O.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case ut.ABORTED:return O.ABORTED;case ut.OUT_OF_RANGE:return O.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return O.UNIMPLEMENTED;case ut.DATA_LOSS:return O.DATA_LOSS;default:return Y()}}(Ie=ut||(ut={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function _S(){return new TextEncoder}/**
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
 */const nO=new Ts([4294967295,4294967295],0);function Hw(n){const e=_S().encode(n),t=new xx;return t.update(e),new Uint8Array(t.digest())}function Qw(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ts([t,r],0),new Ts([i,s],0)]}class Iy{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new El(`Invalid padding: ${t}`);if(r<0)throw new El(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new El(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new El(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Ts.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(Ts.fromNumber(r)));return i.compare(nO)===1&&(i=new Ts([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Hw(e),[r,i]=Qw(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Iy(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const t=Hw(e),[r,i]=Qw(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class El extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Wu{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Gu.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Wu(te.min(),i,new Ce(le),un(),ce())}}class Gu{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Gu(r,t,ce(),ce(),ce())}}/**
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
 */class md{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class vS{constructor(e,t){this.targetId=e,this.me=t}}class wS{constructor(e,t,r=Ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Yw{constructor(){this.fe=0,this.ge=Xw(),this.pe=Ze.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ce(),t=ce(),r=ce();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new Gu(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Xw()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ee(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class rO{constructor(e){this.Le=e,this.Be=new Map,this.ke=un(),this.qe=Jw(),this.Qe=new Ce(le)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(Yd(s))if(r===0){const o=new G(s.path);this.Ue(t,o,Oe.newNoDocument(o,te.min()))}else ee(r===1);else{const o=this.Ye(t);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,c)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,a;try{o=Li(r).toUint8Array()}catch(u){if(u instanceof qx)return mr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Iy(o,i,s)}catch(u){return mr(u instanceof El?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Yd(a.target)){const u=new G(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Oe.newNoDocument(u,e))}s.be&&(t.set(o,s.ve()),s.Ce())}});let r=ce();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Wu(e,t,this.Qe,this.ke,r);return this.ke=un(),this.qe=Jw(),this.Qe=new Ce(le),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Yw,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new be(le),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||U("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Yw),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Jw(){return new Ce(G.comparator)}function Xw(){return new Ce(G.comparator)}const iO={asc:"ASCENDING",desc:"DESCENDING"},sO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},oO={and:"AND",or:"OR"};class aO{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function xm(n,e){return n.useProto3Json||Uu(e)?e:{value:e}}function sa(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function IS(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function lO(n,e){return sa(n,e.toTimestamp())}function st(n){return ee(!!n),te.fromTimestamp(function(t){const r=Br(t);return new $e(r.seconds,r.nanos)}(n))}function Ey(n,e){return Sm(n,e).canonicalString()}function Sm(n,e){const t=function(i){return new me(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function ES(n){const e=me.fromString(n);return ee(CS(e)),e}function Iu(n,e){return Ey(n.databaseId,e.path)}function hr(n,e){const t=ES(e);if(t.get(1)!==n.databaseId.projectId)throw new F(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new F(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new G(SS(t))}function TS(n,e){return Ey(n.databaseId,e)}function xS(n){const e=ES(n);return e.length===4?me.emptyPath():SS(e)}function Am(n){return new me(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function SS(n){return ee(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Zw(n,e,t){return{name:Iu(n,e),fields:t.value.mapValue.fields}}function AS(n,e,t){const r=hr(n,e.name),i=st(e.updateTime),s=e.createTime?st(e.createTime):te.min(),o=new Pt({mapValue:{fields:e.fields}}),a=Oe.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function uO(n,e){return"found"in e?function(r,i){ee(!!i.found),i.found.name,i.found.updateTime;const s=hr(r,i.found.name),o=st(i.found.updateTime),a=i.found.createTime?st(i.found.createTime):te.min(),u=new Pt({mapValue:{fields:i.found.fields}});return Oe.newFoundDocument(s,o,a,u)}(n,e):"missing"in e?function(r,i){ee(!!i.missing),ee(!!i.readTime);const s=hr(r,i.missing),o=st(i.readTime);return Oe.newNoDocument(s,o)}(n,e):Y()}function cO(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(ee(f===void 0||typeof f=="string"),Ze.fromBase64String(f||"")):(ee(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ze.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const f=c.code===void 0?O.UNKNOWN:yS(c.code);return new F(f,c.message||"")}(o);t=new wS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=hr(n,r.document.name),s=st(r.document.updateTime),o=r.document.createTime?st(r.document.createTime):te.min(),a=new Pt({mapValue:{fields:r.document.fields}}),u=Oe.newFoundDocument(i,s,o,a),c=r.targetIds||[],f=r.removedTargetIds||[];t=new md(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=hr(n,r.document),s=r.readTime?st(r.readTime):te.min(),o=Oe.newNoDocument(i,s),a=r.removedTargetIds||[];t=new md([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=hr(n,r.document),s=r.removedTargetIds||[];t=new md([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new tO(i,s),a=r.targetId;t=new vS(a,o)}}return t}function Eu(n,e){let t;if(e instanceof Ta)t={update:Zw(n,e.key,e.value)};else if(e instanceof xa)t={delete:Iu(n,e.key)};else if(e instanceof Hr)t={update:Zw(n,e.key,e.data),updateMask:gO(e.fieldMask)};else{if(!(e instanceof yy))return Y();t={verify:Iu(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ra)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Os)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ls)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ia)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Y()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:lO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(n,e.precondition)),t}function Rm(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Be.updateTime(st(s.updateTime)):s.exists!==void 0?Be.exists(s.exists):Be.none()}(e.currentDocument):Be.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let u=null;if("setToServerValue"in a)ee(a.setToServerValue==="REQUEST_TIME"),u=new ra;else if("appendMissingElements"in a){const f=a.appendMissingElements.values||[];u=new Os(f)}else if("removeAllFromArray"in a){const f=a.removeAllFromArray.values||[];u=new Ls(f)}else"increment"in a?u=new ia(o,a.increment):Y();const c=ze.fromServerFormat(a.fieldPath);return new qu(c,u)}(n,i)):[];if(e.update){e.update.name;const i=hr(n,e.update.name),s=new Pt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const c=u.fieldPaths||[];return new ln(c.map(f=>ze.fromServerFormat(f)))}(e.updateMask);return new Hr(i,s,o,t,r)}return new Ta(i,s,t,r)}if(e.delete){const i=hr(n,e.delete);return new xa(i,t)}if(e.verify){const i=hr(n,e.verify);return new yy(i,t)}return Y()}function dO(n,e){return n&&n.length>0?(ee(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?st(i.updateTime):st(s);return o.isEqual(te.min())&&(o=st(s)),new XV(o,i.transformResults||[])}(t,e))):[]}function RS(n,e){return{documents:[TS(n,e.path)]}}function kS(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=TS(n,i);const s=function(c){if(c.length!==0)return NS(Re.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:mo(g.field),direction:fO(g.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=xm(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:t,parent:i}}function bS(n){let e=xS(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ee(r===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(m){const g=PS(m);return g instanceof Re&&fy(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(m){return m.map(g=>function(b){return new wu(go(b.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(g))}(t.orderBy));let a=null;t.limit&&(a=function(m){let g;return g=typeof m=="object"?m.value:m,Uu(g)?null:g}(t.limit));let u=null;t.startAt&&(u=function(m){const g=!!m.before,E=m.values||[];return new Fi(E,g)}(t.startAt));let c=null;return t.endAt&&(c=function(m){const g=!m.before,E=m.values||[];return new Fi(E,g)}(t.endAt)),tS(e,i,o,s,a,"F",u,c)}function hO(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function PS(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=go(t.unaryFilter.field);return ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=go(t.unaryFilter.field);return ge.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=go(t.unaryFilter.field);return ge.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=go(t.unaryFilter.field);return ge.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(n):n.fieldFilter!==void 0?function(t){return ge.create(go(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Re.create(t.compositeFilter.filters.map(r=>PS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(t.compositeFilter.op))}(n):Y()}function fO(n){return iO[n]}function pO(n){return sO[n]}function mO(n){return oO[n]}function mo(n){return{fieldPath:n.canonicalString()}}function go(n){return ze.fromServerFormat(n.fieldPath)}function NS(n){return n instanceof ge?function(t){if(t.op==="=="){if(Lw(t.value))return{unaryFilter:{field:mo(t.field),op:"IS_NAN"}};if(Ow(t.value))return{unaryFilter:{field:mo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Lw(t.value))return{unaryFilter:{field:mo(t.field),op:"IS_NOT_NAN"}};if(Ow(t.value))return{unaryFilter:{field:mo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mo(t.field),op:pO(t.op),value:t.value}}}(n):n instanceof Re?function(t){const r=t.getFilters().map(i=>NS(i));return r.length===1?r[0]:{compositeFilter:{op:mO(t.op),filters:r}}}(n):Y()}function gO(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function CS(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Dr{constructor(e,t,r,i,s=te.min(),o=te.min(),a=Ze.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class DS{constructor(e){this.ct=e}}function yO(n,e){let t;if(e.document)t=AS(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=G.fromSegments(e.noDocument.path),i=js(e.noDocument.readTime);t=Oe.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return Y();{const r=G.fromSegments(e.unknownDocument.path),i=js(e.unknownDocument.version);t=Oe.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new $e(i[0],i[1]);return te.fromTimestamp(s)}(e.readTime)),t}function e0(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Zd(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Iu(s,o.key),fields:o.data.value.mapValue.fields,updateTime:sa(s,o.version.toTimestamp()),createTime:sa(s,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Ms(e.version)};else{if(!e.isUnknownDocument())return Y();r.unknownDocument={path:t.path.toArray(),version:Ms(e.version)}}return r}function Zd(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Ms(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function js(n){const e=new $e(n.seconds,n.nanoseconds);return te.fromTimestamp(e)}function us(n,e){const t=(e.baseMutations||[]).map(s=>Rm(n.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Rm(n.ct,s)),i=$e.fromMillis(e.localWriteTimeMs);return new _y(e.batchId,i,t,r)}function Tl(n){const e=js(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?js(n.lastLimboFreeSnapshotVersion):te.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return ee(s.documents.length===1),Yt(Ea(xS(s.documents[0])))}(n.query):function(s){return Yt(bS(s))}(n.query),new Dr(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Ze.fromBase64String(n.resumeToken))}function VS(n,e){const t=Ms(e.snapshotVersion),r=Ms(e.lastLimboFreeSnapshotVersion);let i;i=Yd(e.target)?RS(n.ct,e.target):kS(n.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Vs(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Ty(n){const e=bS({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Xd(e,e.limit,"L"):e}function Xf(n,e){return new wy(e.largestBatchId,Rm(n.ct,e.overlayMutation))}function t0(n,e){const t=e.path.lastSegment();return[n,Qt(e.path.popLast()),t]}function n0(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Ms(r.readTime),documentKey:Qt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class _O{getBundleMetadata(e,t){return r0(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:js(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return r0(e).put(function(i){return{bundleId:i.id,createTime:Ms(st(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return i0(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:Ty(s.bundledQuery),readTime:js(s.readTime)}}(r)})}saveNamedQuery(e,t){return i0(e).put(function(i){return{name:i.name,readTime:Ms(st(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function r0(n){return gt(n,"bundles")}function i0(n){return gt(n,"namedQueries")}/**
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
 */class zh{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new zh(e,r)}getOverlay(e,t){return ll(e).get(t0(this.userId,t)).next(r=>r?Xf(this.serializer,r):null)}getOverlays(e,t){const r=lr();return D.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new wy(t,o);i.push(this.ht(e,a))}),D.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Qt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(ll(e).j("collectionPathOverlayIndex",a))}),D.waitFor(s)}getOverlaysForCollection(e,t,r){const i=lr(),s=Qt(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ll(e).U("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const c=Xf(this.serializer,u);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=lr();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ll(e).J({index:"collectionGroupOverlayIndex",range:a},(u,c,f)=>{const m=Xf(this.serializer,c);s.size()<i||m.largestBatchId===o?(s.set(m.getKey(),m),o=m.largestBatchId):f.done()}).next(()=>s)}ht(e,t){return ll(e).put(function(i,s,o){const[a,u,c]=t0(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Eu(i.ct,o.mutation)}}(this.serializer,this.userId,t))}}function ll(n){return gt(n,"documentOverlays")}/**
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
 */class vO{Pt(e){return gt(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Ze.fromUint8Array(r):Ze.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class cs{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(Fe(e.integerValue));else if("doubleValue"in e){const r=Fe(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),gu(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=Br(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Li(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?Wx(e)?this.dt(t,Number.MAX_SAFE_INTEGER):jh(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):Y()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const r=e.fields||{};this.dt(t,55);for(const i of Object.keys(r))this.Vt(i,t),this.Tt(r[i],t)}wt(e,t){var r,i;const s=e.fields||{};this.dt(t,53);const o="value",a=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(t,15),t.At(Fe(a)),this.Vt(o,t),this.Tt(s[o],t)}bt(e,t){const r=e.values||[];this.dt(t,50);for(const i of r)this.Tt(i,t)}yt(e,t){this.dt(t,37),G.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}cs.vt=new cs;function wO(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function s0(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=wO(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class IO{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=t.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=t.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const t=this.qt(e),r=s0(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Kt(e){const t=this.qt(e),r=s0(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class EO{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class TO{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class ul{constructor(){this.jt=new IO,this.Ht=new EO(this.jt),this.Jt=new TO(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class ds{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ds(this.indexId,this.documentKey,this.arrayValue,r)}}function ai(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=o0(n.arrayValue,e.arrayValue),t!==0?t:(t=o0(n.directionalValue,e.directionalValue),t!==0?t:G.comparator(n.documentKey,e.documentKey)))}function o0(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class a0{constructor(e){this.Xt=new be((t,r)=>ze.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(ee(e.collectionGroup===this.collectionId),this.nn)return!1;const t=gm(e);if(t!==void 0&&!this.sn(t))return!1;const r=as(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const u=r[s];if(!this.on(a,u)||!this._n(this.en[o++],u))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new be(ze.comparator);const t=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new cd(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new cd(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new cd(r.field,r.dir==="asc"?0:1)));return new Qd(Qd.UNKNOWN_ID,this.collectionId,t,mu.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function OS(n){var e,t;if(ee(n instanceof ge||n instanceof Re),n instanceof ge){if(n instanceof eS){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>ge.create(n.field,"==",s)))||[];return Re.create(i,"or")}return n}const r=n.filters.map(i=>OS(i));return Re.create(r,n.op)}function xO(n){if(n.getFilters().length===0)return[];const e=Pm(OS(n));return ee(LS(e)),km(e)||bm(e)?[e]:e.getFilters()}function km(n){return n instanceof ge}function bm(n){return n instanceof Re&&fy(n)}function LS(n){return km(n)||bm(n)||function(t){if(t instanceof Re&&wm(t)){for(const r of t.getFilters())if(!km(r)&&!bm(r))return!1;return!0}return!1}(n)}function Pm(n){if(ee(n instanceof ge||n instanceof Re),n instanceof ge)return n;if(n.filters.length===1)return Pm(n.filters[0]);const e=n.filters.map(r=>Pm(r));let t=Re.create(e,n.op);return t=eh(t),LS(t)?t:(ee(t instanceof Re),ee(na(t)),ee(t.filters.length>1),t.filters.reduce((r,i)=>xy(r,i)))}function xy(n,e){let t;return ee(n instanceof ge||n instanceof Re),ee(e instanceof ge||e instanceof Re),t=n instanceof ge?e instanceof ge?function(i,s){return Re.create([i,s],"and")}(n,e):l0(n,e):e instanceof ge?l0(e,n):function(i,s){if(ee(i.filters.length>0&&s.filters.length>0),na(i)&&na(s))return Jx(i,s.getFilters());const o=wm(i)?i:s,a=wm(i)?s:i,u=o.filters.map(c=>xy(c,a));return Re.create(u,"or")}(n,e),eh(t)}function l0(n,e){if(na(e))return Jx(e,n.getFilters());{const t=e.filters.map(r=>xy(n,r));return Re.create(t,"or")}}function eh(n){if(ee(n instanceof ge||n instanceof Re),n instanceof ge)return n;const e=n.getFilters();if(e.length===1)return eh(e[0]);if(Qx(n))return n;const t=e.map(i=>eh(i)),r=[];return t.forEach(i=>{i instanceof ge?r.push(i):i instanceof Re&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:Re.create(r,n.op)}/**
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
 */class SO{constructor(){this.un=new Sy}addToCollectionParentIndex(e,t){return this.un.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(In.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(In.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class Sy{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new be(me.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new be(me.comparator)).toArray()}}/**
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
 */const Bc=new Uint8Array(0);class AO{constructor(e,t){this.databaseId=t,this.cn=new Sy,this.ln=new Yi(r=>Vs(r),(r,i)=>zu(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const s={collectionId:r,parent:Qt(i)};return u0(e).put(s)}return D.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[Cx(t),""],!1,!0);return u0(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(ar(o.parent))}return r})}addFieldIndex(e,t){const r=cl(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=co(e);return s.next(a=>{o.put(n0(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=cl(e),i=co(e),s=uo(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=cl(e),r=uo(e),i=co(e);return t.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,t){return D.forEach(this.hn(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new a0(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const r=uo(e);let i=!0;const s=new Map;return D.forEach(this.hn(t),o=>this.Pn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=ce();const a=[];return D.forEach(s,(u,c)=>{U("IndexedDbIndexManager",`Using index ${function(A){return`id=${A.indexId}|cg=${A.collectionGroup}|f=${A.fields.map(V=>`${V.fieldPath}:${V.kind}`).join(",")}`}(u)} to execute ${Vs(t)}`);const f=function(A,V){const z=gm(V);if(z===void 0)return null;for(const j of Jd(A,z.fieldPath))switch(j.op){case"array-contains-any":return j.value.arrayValue.values||[];case"array-contains":return[j.value]}return null}(c,u),m=function(A,V){const z=new Map;for(const j of as(V))for(const w of Jd(A,j.fieldPath))switch(w.op){case"==":case"in":z.set(j.fieldPath.canonicalString(),w.value);break;case"not-in":case"!=":return z.set(j.fieldPath.canonicalString(),w.value),Array.from(z.values())}return null}(c,u),g=function(A,V){const z=[];let j=!0;for(const w of as(V)){const _=w.kind===0?zw(A,w.fieldPath,A.startAt):Bw(A,w.fieldPath,A.startAt);z.push(_.value),j&&(j=_.inclusive)}return new Fi(z,j)}(c,u),E=function(A,V){const z=[];let j=!0;for(const w of as(V)){const _=w.kind===0?Bw(A,w.fieldPath,A.endAt):zw(A,w.fieldPath,A.endAt);z.push(_.value),j&&(j=_.inclusive)}return new Fi(z,j)}(c,u),b=this.In(u,c,g),P=this.In(u,c,E),M=this.Tn(u,c,m),S=this.En(u.indexId,f,b,g.inclusive,P,E.inclusive,M);return D.forEach(S,v=>r.G(v,t.limit).next(A=>{A.forEach(V=>{const z=G.fromSegments(V.documentKey);o.has(z)||(o=o.add(z),a.push(z))})}))}).next(()=>a)}return D.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=xO(Re.create(e.filters,"and")).map(r=>Em(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,i,s,o,a){const u=(t!=null?t.length:1)*Math.max(r.length,s.length),c=u/(t!=null?t.length:1),f=[];for(let m=0;m<u;++m){const g=t?this.dn(t[m/c]):Bc,E=this.An(e,g,r[m%c],i),b=this.Rn(e,g,s[m%c],o),P=a.map(M=>this.An(e,g,M,!0));f.push(...this.createRange(E,b,P))}return f}An(e,t,r,i){const s=new ds(e,G.empty(),t,r);return i?s:s.Zt()}Rn(e,t,r,i){const s=new ds(e,G.empty(),t,r);return i?s.Zt():s}Pn(e,t){const r=new a0(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.hn(t);return D.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let c=new be(ze.comparator),f=!1;for(const m of u.filters)for(const g of m.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?f=!0:c=c.add(g.field));for(const m of u.orderBy)m.field.isKeyField()||(c=c.add(m.field));return c.size+(f?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}Vn(e,t){const r=new ul;for(const i of as(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);cs.vt.It(s,o)}return r.zt()}dn(e){const t=new ul;return cs.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const r=new ul;return cs.vt.It(Ds(this.databaseId,t),r.Yt(function(s){const o=as(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let i=[];i.push(new ul);let s=0;for(const o of as(e)){const a=r[s++];for(const u of i)if(this.fn(t,o.fieldPath)&&vu(a))i=this.gn(i,o,a);else{const c=u.Yt(o.kind);cs.vt.It(a,c)}}return this.pn(i)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new ul;u.seed(a.zt()),cs.vt.It(o,u.Yt(t.kind)),s.push(u)}return s}fn(e,t){return!!e.filters.find(r=>r instanceof ge&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=cl(e),i=co(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(s=>{const o=[];return D.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(f,m){const g=m?new mu(m.sequenceNumber,new In(js(m.readTime),new G(ar(m.documentKey)),m.largestBatchId)):mu.empty(),E=f.fields.map(([b,P])=>new cd(ze.fromServerFormat(b),P));return new Qd(f.indexId,f.collectionGroup,E,g)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:le(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=cl(e),s=co(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>D.forEach(a,u=>s.put(n0(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return D.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?D.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),D.forEach(a,u=>this.wn(e,i,u).next(c=>{const f=this.Sn(s,u);return c.isEqual(f)?D.resolve():this.bn(e,s,u,c,f)}))))})}Dn(e,t,r,i){return uo(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,i){return uo(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){const i=uo(e);let s=new be(ai);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(o,a)=>{s=s.add(new ds(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}Sn(e,t){let r=new be(ai);const i=this.Vn(t,e);if(i==null)return r;const s=gm(t);if(s!=null){const o=e.data.field(s.fieldPath);if(vu(o))for(const a of o.arrayValue.values||[])r=r.add(new ds(t.indexId,e.key,this.dn(a),i))}else r=r.add(new ds(t.indexId,e.key,Bc,i));return r}bn(e,t,r,i,s){U("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(u,c,f,m,g){const E=u.getIterator(),b=c.getIterator();let P=lo(E),M=lo(b);for(;P||M;){let S=!1,v=!1;if(P&&M){const A=f(P,M);A<0?v=!0:A>0&&(S=!0)}else P!=null?v=!0:S=!0;S?(m(M),M=lo(b)):v?(g(P),P=lo(E)):(P=lo(E),M=lo(b))}}(i,s,ai,a=>{o.push(this.Dn(e,t,r,a))},a=>{o.push(this.vn(e,t,r,a))}),D.waitFor(o)}yn(e){let t=1;return co(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>ai(o,a)).filter((o,a,u)=>!a||ai(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=ai(o,e),u=ai(o,t);if(a===0)i[0]=e.Zt();else if(a>0&&u<0)i.push(o),i.push(o.Zt());else if(u>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Bc,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Bc,[]];s.push(IDBKeyRange.bound(a,u))}return s}Cn(e,t){return ai(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(c0)}getMinOffset(e,t){return D.mapArray(this.hn(t),r=>this.Pn(e,r).next(i=>i||Y())).next(c0)}}function u0(n){return gt(n,"collectionParents")}function uo(n){return gt(n,"indexEntries")}function cl(n){return gt(n,"indexConfiguration")}function co(n){return gt(n,"indexState")}function c0(n){ee(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;uy(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new In(e.readTime,e.documentKey,t)}/**
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
 */const d0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class rn{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new rn(e,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function MS(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const u=r.J({range:o},(f,m,g)=>(a++,g.delete()));s.push(u.next(()=>{ee(a===1)}));const c=[];for(const f of t.mutations){const m=Fx(e,f.key.path,t.batchId);s.push(i.delete(m)),c.push(f.key)}return D.waitFor(s).next(()=>c)}function th(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw Y();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */rn.DEFAULT_COLLECTION_PERCENTILE=10,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rn.DEFAULT=new rn(41943040,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rn.DISABLED=new rn(-1,0,0);class Bh{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,t,r,i){ee(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Bh(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return li(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=yo(e),o=li(e);return o.add({}).next(a=>{ee(typeof a=="number");const u=new _y(a,t,r,i),c=function(E,b,P){const M=P.baseMutations.map(v=>Eu(E.ct,v)),S=P.mutations.map(v=>Eu(E.ct,v));return{userId:b,batchId:P.batchId,localWriteTimeMs:P.localWriteTime.toMillis(),baseMutations:M,mutations:S}}(this.serializer,this.userId,u),f=[];let m=new be((g,E)=>le(g.canonicalString(),E.canonicalString()));for(const g of i){const E=Fx(this.userId,g.key.path,a);m=m.add(g.key.path.popLast()),f.push(o.put(c)),f.push(s.put(E,hV))}return m.forEach(g=>{f.push(this.indexManager.addToCollectionParentIndex(e,g))}),e.addOnCommittedListener(()=>{this.Fn[a]=u.keys()}),D.waitFor(f).next(()=>u)})}lookupMutationBatch(e,t){return li(e).get(t).next(r=>r?(ee(r.userId===this.userId),us(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?D.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Fn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return li(e).J({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(ee(a.batchId>=r),s=us(this.serializer,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return li(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return li(e).U("userMutationsIndex",t).next(r=>r.map(i=>us(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=dd(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return yo(e).J({range:i},(o,a,u)=>{const[c,f,m]=o,g=ar(f);if(c===this.userId&&t.path.isEqual(g))return li(e).get(m).next(E=>{if(!E)throw Y();ee(E.userId===this.userId),s.push(us(this.serializer,E))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new be(le);const i=[];return t.forEach(s=>{const o=dd(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=yo(e).J({range:a},(c,f,m)=>{const[g,E,b]=c,P=ar(E);g===this.userId&&s.path.isEqual(P)?r=r.add(b):m.done()});i.push(u)}),D.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=dd(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new be(le);return yo(e).J({range:o},(u,c,f)=>{const[m,g,E]=u,b=ar(g);m===this.userId&&r.isPrefixOf(b)?b.length===i&&(a=a.add(E)):f.done()}).next(()=>this.xn(e,a))}xn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(li(e).get(s).next(o=>{if(o===null)throw Y();ee(o.userId===this.userId),r.push(us(this.serializer,o))}))}),D.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return MS(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),D.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return D.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return yo(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=ar(s[1]);i.push(u)}else a.done()}).next(()=>{ee(i.length===0)})})}containsKey(e,t){return jS(e,this.userId,t)}Nn(e){return FS(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function jS(n,e,t){const r=dd(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return yo(n).J({range:s,H:!0},(a,u,c)=>{const[f,m,g]=a;f===e&&m===i&&(o=!0),c.done()}).next(()=>o)}function li(n){return gt(n,"mutations")}function yo(n){return gt(n,"documentMutations")}function FS(n){return gt(n,"mutationQueues")}/**
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
 */class Fs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Fs(0)}static kn(){return new Fs(-1)}}/**
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
 */class RO{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const r=new Fs(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>te.fromTimestamp(new $e(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Qn(e,i)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>ho(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(ee(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return ho(e).J((o,a)=>{const u=Tl(a);u.sequenceNumber<=t&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>D.waitFor(s)).next(()=>i)}forEachTarget(e,t){return ho(e).J((r,i)=>{const s=Tl(i);t(s)})}qn(e){return h0(e).get("targetGlobalKey").next(t=>(ee(t!==null),t))}Qn(e,t){return h0(e).put("targetGlobalKey",t)}Kn(e,t){return ho(e).put(VS(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Vs(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ho(e).J({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const c=Tl(a);zu(t,c.target)&&(s=c,u.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=pi(e);return t.forEach(o=>{const a=Qt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),D.waitFor(i)}removeMatchingKeys(e,t,r){const i=pi(e);return D.forEach(t,s=>{const o=Qt(s.path);return D.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=pi(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=pi(e);let s=ce();return i.J({range:r,H:!0},(o,a,u)=>{const c=ar(o[1]),f=new G(c);s=s.add(f)}).next(()=>s)}containsKey(e,t){const r=Qt(t.path),i=IDBKeyRange.bound([r],[Cx(r)],!1,!0);let s=0;return pi(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],u,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,t){return ho(e).get(t).next(r=>r?Tl(r):null)}}function ho(n){return gt(n,"targets")}function h0(n){return gt(n,"targetGlobal")}function pi(n){return gt(n,"targetDocuments")}/**
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
 */function f0([n,e],[t,r]){const i=le(n,t);return i===0?le(e,r):i}class kO{constructor(e){this.Un=e,this.buffer=new be(f0),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();f0(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class bO{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){U("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Qi(t)?U("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Hi(t)}await this.Hn(3e5)})}}class PO{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return D.resolve(an.oe);const r=new kO(t);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(d0)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),d0):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,i,s,o,a,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,a=Date.now(),this.removeTargets(e,r,t))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),fo()<=he.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function NO(n,e){return new PO(n,e)}/**
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
 */class CO{constructor(e,t){this.db=e,this.garbageCollector=NO(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,i)=>t(i))}addReference(e,t,r){return $c(e,r)}removeReference(e,t,r){return $c(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return $c(e,t)}nr(e,t){return function(i,s){let o=!1;return FS(i).Y(a=>jS(i,a,s).next(u=>(u&&(o=!0),D.resolve(!u)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,a)=>{if(a<=t){const u=this.nr(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,te.min()),pi(e).delete(function(m){return[0,Qt(m.path)]}(o))))});i.push(u)}}).next(()=>D.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return $c(e,t)}tr(e,t){const r=pi(e);let i,s=an.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:c})=>{o===0?(s!==an.oe&&t(new G(ar(i)),s),s=c,i=u):s=an.oe}).next(()=>{s!==an.oe&&t(new G(ar(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function $c(n,e){return pi(n).put(function(r,i){return{targetId:0,path:Qt(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
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
 */class US{constructor(){this.changes=new Yi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Oe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class DO{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return rs(e).put(r)}removeEntry(e,t,r){return rs(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Zd(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=Oe.newInvalidDocument(t);return rs(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(dl(t))},(i,s)=>{r=this.ir(t,s)}).next(()=>r)}sr(e,t){let r={size:0,document:Oe.newInvalidDocument(t)};return rs(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(dl(t))},(i,s)=>{r={document:this.ir(t,s),size:th(s)}}).next(()=>r)}getEntries(e,t){let r=un();return this._r(e,t,(i,s)=>{const o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,t){let r=un(),i=new Ce(G.comparator);return this._r(e,t,(s,o)=>{const a=this.ir(s,o);r=r.insert(s,a),i=i.insert(s,th(o))}).next(()=>({documents:r,ur:i}))}_r(e,t,r){if(t.isEmpty())return D.resolve();let i=new be(g0);t.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(dl(i.first()),dl(i.last())),o=i.getIterator();let a=o.getNext();return rs(e).J({index:"documentKeyIndex",range:s},(u,c,f)=>{const m=G.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&g0(a,m)<0;)r(a,null),a=o.getNext();a&&a.isEqual(m)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?f.$(dl(a)):f.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),Zd(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return rs(e).U(IDBKeyRange.bound(a,u,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let f=un();for(const m of c){const g=this.ir(G.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);g.isFoundDocument()&&($u(t,g)||i.has(g.key))&&(f=f.insert(g.key,g))}return f})}getAllFromCollectionGroup(e,t,r,i){let s=un();const o=m0(t,r),a=m0(t,In.max());return rs(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,c,f)=>{const m=this.ir(G.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(m.key,m),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new VO(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return p0(e).get("remoteDocumentGlobalKey").next(t=>(ee(!!t),t))}rr(e,t){return p0(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const r=yO(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(te.min())))return r}return Oe.newInvalidDocument(e)}}function zS(n){return new DO(n)}class VO extends US{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new Yi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new be((s,o)=>le(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.lr.get(s);if(t.push(this.cr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=e0(this.cr.serializer,o);i=i.add(s.path.popLast());const c=th(u);r+=c-a.size,t.push(this.cr.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=e0(this.cr.serializer,o.convertToNoDocument(te.min()));t.push(this.cr.addEntry(e,s,u))}}),i.forEach(s=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.cr.updateMetadata(e,r)),D.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function p0(n){return gt(n,"remoteDocumentGlobal")}function rs(n){return gt(n,"remoteDocumentsV14")}function dl(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function m0(n,e){const t=e.documentKey.path.toArray();return[n,Zd(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function g0(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=le(t[s],r[s]),i)return i;return i=le(t.length,r.length),i||(i=le(t[t.length-2],r[r.length-2]),i||le(t[t.length-1],r[r.length-1]))}/**
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
 */class BS{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Fl(r.mutation,i,ln.empty(),$e.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ce()){const i=lr();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Il();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=lr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ce()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=un();const o=jl(),a=function(){return jl()}();return t.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof Hr)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),Fl(f.mutation,c,f.mutation.getFieldMask(),$e.now())):o.set(c.key,ln.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),t.forEach((c,f)=>{var m;return a.set(c,new OO(f,(m=o.get(c))!==null&&m!==void 0?m:null))}),a))}recalculateAndSaveOverlays(e,t){const r=jl();let i=new Ce((o,a)=>o-a),s=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let f=r.get(u)||ln.empty();f=a.applyToLocalView(c,f),r.set(u,f);const m=(i.get(a.batchId)||ce()).add(u);i=i.insert(a.batchId,m)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,f=u.value,m=aS();f.forEach(g=>{if(!s.has(g)){const E=pS(t.get(g),r.get(g));E!==null&&m.set(g,E),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):py(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):D.resolve(lr());let a=-1,u=s;return o.next(c=>D.forEach(c,(f,m)=>(a<m.largestBatchId&&(a=m.largestBatchId),s.get(f)?D.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ce())).next(f=>({batchId:a,changes:oS(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new G(t)).next(r=>{let i=Il();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=Il();return this.indexManager.getCollectionParents(e,s).next(a=>D.forEach(a,u=>{const c=function(m,g){return new Kr(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,Oe.newInvalidDocument(f)))});let a=Il();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&Fl(f.mutation,c,ln.empty(),$e.now()),$u(t,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class LO{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return D.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:st(i.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:Ty(i.bundledQuery),readTime:st(i.readTime)}}(t)),D.resolve()}}/**
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
 */class MO{constructor(){this.overlays=new Ce(G.comparator),this.Ir=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=lr();return D.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),D.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const i=lr(),s=t.length+1,o=new G(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return D.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Ce((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=lr(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const a=lr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>a.set(c,f)),!(a.size()>=i)););return D.resolve(a)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new wy(t,r));let s=this.Ir.get(t);s===void 0&&(s=ce(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}}/**
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
 */class jO{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
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
 */class Ay{constructor(){this.Tr=new be(vt.Er),this.dr=new be(vt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new vt(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new vt(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new G(new me([])),r=new vt(t,e),i=new vt(t,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new G(new me([])),r=new vt(t,e),i=new vt(t,e+1);let s=ce();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new vt(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class vt{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return G.comparator(e.key,t.key)||le(e.wr,t.wr)}static Ar(e,t){return le(e.wr,t.wr)||G.comparator(e.key,t.key)}}/**
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
 */class FO{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new be(vt.Er)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _y(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new vt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,t){return D.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new vt(t,0),i=new vt(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new be(le);return t.forEach(i=>{const s=new vt(i,0),o=new vt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),D.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new vt(new G(s),0);let a=new be(le);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),D.resolve(this.Cr(a))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ee(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return D.forEach(t.mutations,i=>{const s=new vt(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new vt(t,0),i=this.br.firstAfterOrEqual(r);return D.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class UO{constructor(e){this.Mr=e,this.docs=function(){return new Ce(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():Oe.newInvalidDocument(t))}getEntries(e,t){let r=un();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Oe.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=un();const o=t.path,a=new G(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||uy(Vx(f),r)<=0||(i.has(f.key)||$u(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,t,r,i){Y()}Or(e,t){return D.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new zO(this)}getSize(e){return D.resolve(this.size)}}class zO extends US{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),D.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class BO{constructor(e){this.persistence=e,this.Nr=new Yi(t=>Vs(t),zu),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ay,this.targetCount=0,this.kr=Fs.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),D.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Fs(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.Kn(t),D.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),D.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.Br.containsKey(t))}}/**
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
 */class $S{constructor(e,t){this.qr={},this.overlays={},this.Qr=new an(0),this.Kr=!1,this.Kr=!0,this.$r=new jO,this.referenceDelegate=e(this),this.Ur=new BO(this),this.indexManager=new SO,this.remoteDocumentCache=function(i){return new UO(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new DS(t),this.Gr=new LO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new MO,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new FO(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){U("MemoryPersistence","Starting transaction:",e);const i=new $O(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return D.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class $O extends Lx{constructor(e){super(),this.currentSequenceNumber=e}}class $h{constructor(e){this.persistence=e,this.Jr=new Ay,this.Yr=null}static Zr(e){return new $h(e)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),D.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Xr,r=>{const i=G.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,te.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return D.or([()=>D.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class qO{constructor(e){this.serializer=e}O(e,t,r,i){const s=new Lh("createOrUpgrade",t);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Pw,{unique:!0}),u.createObjectStore("documentMutations")}(e),y0(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=D.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),y0(e)),o=o.next(()=>function(u){const c=u.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:te.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",f)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,c){return c.store("mutations").U().next(f=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Pw,{unique:!0});const m=c.store("mutations"),g=f.map(E=>m.put(E));return D.waitFor(g)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore("documentOverlays",{keyPath:xV});c.createIndex("collectionPathOverlayIndex",SV,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",AV,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore("remoteDocumentsV14",{keyPath:fV});c.createIndex("documentKeyIndex",pV),c.createIndex("collectionGroupIndex",mV)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:wV}).createIndex("sequenceNumberIndex",IV,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:EV}).createIndex("documentKeyIndex",TV,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((r,i)=>{t+=th(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(i=>D.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>D.forEach(a,u=>{ee(u.userId===s.userId);const c=us(this.serializer,u);return MS(e,s.userId,c).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const u=new me(o),c=function(m){return[0,Qt(m)]}(u);s.push(t.get(c).next(f=>f?D.resolve():(m=>t.put({targetId:0,path:Qt(m),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>D.waitFor(s))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:vV});const r=t.store("collectionParents"),i=new Sy,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:Qt(u)})}};return t.store("remoteDocuments").J({H:!0},(o,a)=>{const u=new me(o);return s(u.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,a,u],c)=>{const f=ar(a);return s(f.popLast())}))}oi(e){const t=e.store("targets");return t.J((r,i)=>{const s=Tl(i),o=VS(this.serializer,s);return t.put(o)})}_i(e,t){const r=t.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=t.store("remoteDocumentsV14"),u=function(m){return m.document?new G(me.fromString(m.document.name).popFirst(5)):m.noDocument?G.fromSegments(m.noDocument.path):m.unknownDocument?G.fromSegments(m.unknownDocument.path):Y()}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>D.waitFor(i))}ai(e,t){const r=t.store("mutations"),i=zS(this.serializer),s=new $S($h.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(u=>{var c;let f=(c=a.get(u.userId))!==null&&c!==void 0?c:ce();us(this.serializer,u).keys().forEach(m=>f=f.add(m)),a.set(u.userId,f)}),D.forEach(a,(u,c)=>{const f=new It(c),m=zh.lt(this.serializer,f),g=s.getIndexManager(f),E=Bh.lt(f,this.serializer,g,s.referenceDelegate);return new BS(i,E,m,g).recalculateAndSaveOverlaysForDocumentKeys(new ym(t,an.oe),u).next()})})}}function y0(n){n.createObjectStore("targetDocuments",{keyPath:yV}).createIndex("documentTargetsIndex",_V,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",gV,{unique:!0}),n.createObjectStore("targetGlobal")}const Zf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Ry{constructor(e,t,r,i,s,o,a,u,c,f,m=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=s,this.window=o,this.document=a,this.ci=c,this.li=f,this.hi=m,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=g=>Promise.resolve(),!Ry.D())throw new F(O.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new CO(this,i),this.Ai=t+"main",this.serializer=new DS(u),this.Ri=new dr(this.Ai,this.hi,new qO(this.serializer)),this.$r=new vO,this.Ur=new RO(this.referenceDelegate,this.serializer),this.remoteDocumentCache=zS(this.serializer),this.Gr=new _O,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&it("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new F(O.FAILED_PRECONDITION,Zf);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new an(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>qc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(Qi(e))return U("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return U("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return hl(e).get("owner").next(t=>D.resolve(this.vi(t)))}Ci(e){return qc(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=gt(t,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return D.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?D.resolve(!0):hl(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new F(O.FAILED_PRECONDITION,Zf);return!1}}return!(!this.networkEnabled||!this.inForeground)||qc(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&U("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new ym(e,an.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>qc(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return Bh.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new AO(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return zh.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){U("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(u){return u===17?bV:u===16?kV:u===15?dy:u===14?Bx:u===13?zx:u===12?RV:u===11?Ux:void Y()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,a=>(o=new ym(a,this.Qr?this.Qr.next():an.oe),t==="readwrite-primary"?this.wi(o).next(u=>!!u||this.Si(o)).next(u=>{if(!u)throw it(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new F(O.FAILED_PRECONDITION,Ox);return r(o)}).next(u=>this.Di(o).next(()=>u)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return hl(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new F(O.FAILED_PRECONDITION,Zf)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return hl(e).put("owner",t)}static D(){return dr.D()}bi(e){const t=hl(e);return t.get("owner").next(r=>this.vi(r)?(U("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):D.resolve())}Mi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(it(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;hT()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return U("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return it("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){it("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function hl(n){return gt(n,"owner")}function qc(n){return gt(n,"clientMetadata")}function ky(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class by{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=ce(),i=ce();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new by(e,t.fromCache,r,i)}}/**
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
 */class qS{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return hT()?8:Mx(He())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Yi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new WO;return this.Xi(e,t,o).next(a=>{if(s.result=a,this.zi)return this.es(e,t,o,a.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(fo()<=he.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",po(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),D.resolve()):(fo()<=he.DEBUG&&U("QueryEngine","Query:",po(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(fo()<=he.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",po(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yt(t))):D.resolve())}Yi(e,t){if($w(t))return D.resolve(null);let r=Yt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Xd(t,null,"F"),r=Yt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ce(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(t,a);return this.ns(t,c,o,u.readTime)?this.Yi(e,Xd(t,null,"F")):this.rs(e,c,t,u)}))})))}Zi(e,t,r,i){return $w(t)||i.isEqual(te.min())?D.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(t,s);return this.ns(t,o,r,i)?D.resolve(null):(fo()<=he.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),po(t)),this.rs(e,o,t,Dx(i,-1)).next(a=>a))})}ts(e,t){let r=new be(iS(e));return t.forEach((i,s)=>{$u(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return fo()<=he.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",po(t)),this.Ji.getDocumentsMatchingQuery(e,t,In.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class GO{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new Ce(le),this._s=new Yi(s=>Vs(s),zu),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BS(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function WS(n,e,t,r){return new GO(n,e,t,r)}async function GS(n,e){const t=K(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=ce();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){a.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function KO(n,e){const t=K(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,f){const m=c.batch,g=m.keys();let E=D.resolve();return g.forEach(b=>{E=E.next(()=>f.getEntry(u,b)).next(P=>{const M=c.docVersions.get(b);ee(M!==null),P.version.compareTo(M)<0&&(m.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),f.addEntry(P)))})}),E.next(()=>a.mutationQueue.removeMutationBatch(u,m))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ce();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function KS(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function HO(n,e){const t=K(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const a=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;a.push(t.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>t.Ur.addMatchingKeys(s,f.addedDocuments,m)));let E=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?E=E.withResumeToken(Ze.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),i=i.insert(m,E),function(P,M,S){return P.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(g,E,f)&&a.push(t.Ur.updateTargetData(s,E))});let u=un(),c=ce();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),a.push(HS(s,o,e.documentUpdates).next(f=>{u=f.Ps,c=f.Is})),!r.isEqual(te.min())){const f=t.Ur.getLastRemoteSnapshotVersion(s).next(m=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(f)}return D.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(t.os=i,s))}function HS(n,e,t){let r=ce(),i=ce();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=un();return t.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function QO(n,e){const t=K(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function oa(n,e){const t=K(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,D.resolve(i)):t.Ur.allocateTargetId(r).next(o=>(i=new Dr(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function aa(n,e,t){const r=K(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Qi(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function nh(n,e,t){const r=K(n);let i=te.min(),s=ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const m=K(u),g=m._s.get(f);return g!==void 0?D.resolve(m.os.get(g)):m.Ur.getTargetData(c,f)}(r,o,Yt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?i:te.min(),t?s:ce())).next(a=>(JS(r,rS(e),a),{documents:a,Ts:s})))}function QS(n,e){const t=K(n),r=K(t.Ur),i=t.os.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function YS(n,e){const t=K(n),r=t.us.get(e)||te.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.cs.getAllFromCollectionGroup(i,e,Dx(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(JS(t,e,i),i))}function JS(n,e,t){let r=n.us.get(e)||te.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}async function YO(n,e,t,r){const i=K(n);let s=ce(),o=un();for(const c of t){const f=e.Es(c.metadata.name);c.document&&(s=s.add(f));const m=e.ds(c);m.setReadTime(e.As(c.metadata.readTime)),o=o.insert(f,m)}const a=i.cs.newChangeBuffer({trackRemovals:!0}),u=await oa(i,function(f){return Yt(Ea(me.fromString(`__bundle__/docs/${f}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>HS(c,a,o).next(f=>(a.apply(c),f)).next(f=>i.Ur.removeMatchingKeysForTargetId(c,u.targetId).next(()=>i.Ur.addMatchingKeys(c,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,f.Ps,f.Is)).next(()=>f.Ps)))}async function JO(n,e,t=ce()){const r=await oa(n,Yt(Ty(e.bundledQuery))),i=K(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=st(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Gr.saveNamedQuery(s,e);const a=r.withResumeToken(Ze.EMPTY_BYTE_STRING,o);return i.os=i.os.insert(a.targetId,a),i.Ur.updateTargetData(s,a).next(()=>i.Ur.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Ur.addMatchingKeys(s,t,r.targetId)).next(()=>i.Gr.saveNamedQuery(s,e))})}function _0(n,e){return`firestore_clients_${n}_${e}`}function v0(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function ep(n,e){return`firestore_targets_${n}_${e}`}class rh{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Rs(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new F(i.error.code,i.error.message))),o?new rh(e,t,i.state,s):(it("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ul{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Rs(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new F(r.error.code,r.error.message))),s?new Ul(e,r.state,i):(it("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ih{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=my();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=jx(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new ih(e,s):(it("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Py{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Py(t.clientId,t.onlineState):(it("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Nm{constructor(){this.activeTargetIds=my()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tp{constructor(e,t,r,i,s){this.window=e,this.ui=t,this.persistenceKey=r,this.ps=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new Ce(le),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ds=_0(this.persistenceKey,this.ps),this.vs=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new Nm),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.Os=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const i=this.getItem(_0(this.persistenceKey,r));if(i){const s=ih.Rs(r,i);s&&(this.Ss=this.Ss.insert(s.clientId,s))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const r=this.Ls(t);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,r){this.qs(e,t,r),this.Qs(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(ep(this.persistenceKey,e));if(i){const s=Ul.Rs(e,i);s&&(r=s.state)}}return t&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ep(this.persistenceKey,e))}updateQueryState(e,t,r){this.$s(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Qs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return U("SharedClientState","READ",e,t),t}setItem(e,t){U("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){U("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(U("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void it("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const r=this.Gs(t.key);return this.zs(r,null)}{const r=this.js(t.key,t.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const r=this.Hs(t.key,t.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const r=this.Ys(t.key,t.newValue);if(r)return this.Zs(r)}}else if(t.key===this.xs){if(t.newValue!==null){const r=this.Ls(t.newValue);if(r)return this.Bs(r)}}else if(t.key===this.vs){const r=function(s){let o=an.oe;if(s!=null)try{const a=JSON.parse(s);ee(typeof a=="number"),o=a}catch(a){it("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==an.oe&&this.sequenceNumberHandler(r)}else if(t.key===this.Os){const r=this.Xs(t.newValue);await Promise.all(r.map(i=>this.syncEngine.eo(i)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,r){const i=new rh(this.currentUser,e,t,r),s=v0(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Vs())}Qs(e){const t=v0(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,r){const i=ep(this.persistenceKey,e),s=new Ul(e,t,r);this.setItem(i,s.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const r=this.Gs(e);return ih.Rs(r,t)}Hs(e,t){const r=this.Fs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return rh.Rs(new It(s),i,t)}Ys(e,t){const r=this.Ms.exec(e),i=Number(r[1]);return Ul.Rs(i,t)}Ls(e){return Py.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);U("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const r=t?this.Ss.insert(e,t):this.Ss.remove(e),i=this.ks(this.Ss),s=this.ks(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.io(o,a).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=my();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class XS{constructor(){this.so=new Nm,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Nm,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class w0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Wc=null;function np(){return Wc===null?Wc=function(){return 268435456+Math.round(2147483648*Math.random())}():Wc++,"0x"+Wc.toString(16)}/**
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
 */const Ft="WebChannelConnection";class tL extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,o){const a=np(),u=this.xo(t,r.toUriEncodedString());U("RestConnection",`Sending RPC '${t}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(t,u,c,i).then(f=>(U("RestConnection",`Received RPC '${t}' ${a}: `,f),f),f=>{throw mr("RestConnection",`RPC '${t}' ${a} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(t,r,i,s,o,a){return this.Mo(t,r,i,s,o)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ia}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}xo(t,r){const i=ZO[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const s=np();return new Promise((o,a)=>{const u=new Sx;u.setWithCredentials(!0),u.listenOnce(Ax.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ud.NO_ERROR:const f=u.getResponseJson();U(Ft,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case ud.TIMEOUT:U(Ft,`RPC '${e}' ${s} timed out`),a(new F(O.DEADLINE_EXCEEDED,"Request time out"));break;case ud.HTTP_ERROR:const m=u.getStatus();if(U(Ft,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const E=g==null?void 0:g.error;if(E&&E.status&&E.message){const b=function(M){const S=M.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(S)>=0?S:O.UNKNOWN}(E.status);a(new F(b,E.message))}else a(new F(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new F(O.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{U(Ft,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);U(Ft,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",c,r,15)})}Bo(e,t,r){const i=np(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=bx(),a=kx(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=s.join("");U(Ft,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);let g=!1,E=!1;const b=new eL({Io:M=>{E?U(Ft,`Not sending because RPC '${e}' stream ${i} is closed:`,M):(g||(U(Ft,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),U(Ft,`RPC '${e}' stream ${i} sending:`,M),m.send(M))},To:()=>m.close()}),P=(M,S,v)=>{M.listen(S,A=>{try{v(A)}catch(V){setTimeout(()=>{throw V},0)}})};return P(m,wl.EventType.OPEN,()=>{E||(U(Ft,`RPC '${e}' stream ${i} transport opened.`),b.yo())}),P(m,wl.EventType.CLOSE,()=>{E||(E=!0,U(Ft,`RPC '${e}' stream ${i} transport closed`),b.So())}),P(m,wl.EventType.ERROR,M=>{E||(E=!0,mr(Ft,`RPC '${e}' stream ${i} transport errored:`,M),b.So(new F(O.UNAVAILABLE,"The operation could not be completed")))}),P(m,wl.EventType.MESSAGE,M=>{var S;if(!E){const v=M.data[0];ee(!!v);const A=v,V=A.error||((S=A[0])===null||S===void 0?void 0:S.error);if(V){U(Ft,`RPC '${e}' stream ${i} received error:`,V);const z=V.status;let j=function(I){const T=ut[I];if(T!==void 0)return yS(T)}(z),w=V.message;j===void 0&&(j=O.INTERNAL,w="Unknown error status: "+z+" with message "+V.message),E=!0,b.So(new F(j,w)),m.close()}else U(Ft,`RPC '${e}' stream ${i} received:`,v),b.bo(v)}}),P(a,Rx.STAT_EVENT,M=>{M.stat===mm.PROXY?U(Ft,`RPC '${e}' stream ${i} detected buffering proxy`):M.stat===mm.NOPROXY&&U(Ft,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{b.wo()},0),b}}/**
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
 */function ZS(){return typeof window<"u"?window:null}function gd(){return typeof document<"u"?document:null}/**
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
 */function Ku(n){return new aO(n,!0)}/**
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
 */class Ny{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class eA{constructor(e,t,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ny(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(it(t.toString()),it("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new F(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nL extends eA{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=cO(this.serializer,e),r=function(s){if(!("targetChange"in s))return te.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?st(o.readTime):te.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Am(this.serializer),t.addTarget=function(s,o){let a;const u=o.target;if(a=Yd(u)?{documents:RS(s,u)}:{query:kS(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=IS(s,o.resumeToken);const c=xm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(te.min())>0){a.readTime=sa(s,o.snapshotVersion.toTimestamp());const c=xm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=hO(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Am(this.serializer),t.removeTarget=e,this.a_(t)}}class rL extends eA{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return ee(!!e.streamToken),this.lastStreamToken=e.streamToken,ee(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=dO(e.writeResults,e.commitTime),r=st(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Am(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Eu(this.serializer,r))};this.a_(t)}}/**
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
 */class iL extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new F(O.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Sm(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(O.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Sm(t,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new F(O.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class sL{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(it(t),this.D_=!1):U("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class oL{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ji(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=K(u);c.L_.add(4),await Sa(c),c.q_.set("Unknown"),c.L_.delete(4),await Hu(c)}(this))})}),this.q_=new sL(r,i)}}async function Hu(n){if(Ji(n))for(const e of n.B_)await e(!0)}async function Sa(n){for(const e of n.B_)await e(!1)}function qh(n,e){const t=K(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Vy(t)?Dy(t):Ra(t).r_()&&Cy(t,e))}function la(n,e){const t=K(n),r=Ra(t);t.N_.delete(e),r.r_()&&tA(t,e),t.N_.size===0&&(r.r_()?r.o_():Ji(t)&&t.q_.set("Unknown"))}function Cy(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ra(n).A_(e)}function tA(n,e){n.Q_.xe(e),Ra(n).R_(e)}function Dy(n){n.Q_=new rO({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Ra(n).start(),n.q_.v_()}function Vy(n){return Ji(n)&&!Ra(n).n_()&&n.N_.size>0}function Ji(n){return K(n).L_.size===0}function nA(n){n.Q_=void 0}async function aL(n){n.q_.set("Online")}async function lL(n){n.N_.forEach((e,t)=>{Cy(n,e)})}async function uL(n,e){nA(n),Vy(n)?(n.q_.M_(e),Dy(n)):n.q_.set("Unknown")}async function cL(n,e,t){if(n.q_.set("Online"),e instanceof wS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(n,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await sh(n,r)}else if(e instanceof md?n.Q_.Ke(e):e instanceof vS?n.Q_.He(e):n.Q_.We(e),!t.isEqual(te.min()))try{const r=await KS(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(c);f&&s.N_.set(c,f.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(Ze.EMPTY_BYTE_STRING,f.snapshotVersion)),tA(s,u);const m=new Dr(f.target,u,c,f.sequenceNumber);Cy(s,m)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await sh(n,r)}}async function sh(n,e,t){if(!Qi(e))throw e;n.L_.add(1),await Sa(n),n.q_.set("Offline"),t||(t=()=>KS(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Hu(n)})}function rA(n,e){return e().catch(t=>sh(n,t,e))}async function Aa(n){const e=K(n),t=Ui(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;dL(e);)try{const i=await QO(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,hL(e,i)}catch(i){await sh(e,i)}iA(e)&&sA(e)}function dL(n){return Ji(n)&&n.O_.length<10}function hL(n,e){n.O_.push(e);const t=Ui(n);t.r_()&&t.V_&&t.m_(e.mutations)}function iA(n){return Ji(n)&&!Ui(n).n_()&&n.O_.length>0}function sA(n){Ui(n).start()}async function fL(n){Ui(n).p_()}async function pL(n){const e=Ui(n);for(const t of n.O_)e.m_(t.mutations)}async function mL(n,e,t){const r=n.O_.shift(),i=vy.from(r,e,t);await rA(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Aa(n)}async function gL(n,e){e&&Ui(n).V_&&await async function(r,i){if(function(o){return gS(o)&&o!==O.ABORTED}(i.code)){const s=r.O_.shift();Ui(r).s_(),await rA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Aa(r)}}(n,e),iA(n)&&sA(n)}async function I0(n,e){const t=K(n);t.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=Ji(t);t.L_.add(3),await Sa(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Hu(t)}async function Cm(n,e){const t=K(n);e?(t.L_.delete(2),await Hu(t)):e||(t.L_.add(2),await Sa(t),t.q_.set("Unknown"))}function Ra(n){return n.K_||(n.K_=function(t,r,i){const s=K(t);return s.w_(),new nL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:aL.bind(null,n),Ro:lL.bind(null,n),mo:uL.bind(null,n),d_:cL.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Vy(n)?Dy(n):n.q_.set("Unknown")):(await n.K_.stop(),nA(n))})),n.K_}function Ui(n){return n.U_||(n.U_=function(t,r,i){const s=K(t);return s.w_(),new rL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:fL.bind(null,n),mo:gL.bind(null,n),f_:pL.bind(null,n),g_:mL.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Aa(n)):(await n.U_.stop(),n.O_.length>0&&(U("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Oy{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ct,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new Oy(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ka(n,e){if(it("AsyncQueue",`${e}: ${n}`),Qi(n))return new F(O.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Bo{constructor(e){this.comparator=e?(t,r)=>e(t,r)||G.comparator(t.key,r.key):(t,r)=>G.comparator(t.key,r.key),this.keyedMap=Il(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new Bo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Bo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Bo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class E0{constructor(){this.W_=new Ce(G.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Y():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class ua{constructor(e,t,r,i,s,o,a,u,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new ua(e,t,Bo.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class yL{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class _L{constructor(){this.queries=T0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=K(t),s=i.queries;i.queries=T0(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new F(O.ABORTED,"Firestore shutting down"))}}function T0(){return new Yi(n=>nS(n),Bu)}async function Ly(n,e){const t=K(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new yL,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const a=ka(o,`Initialization of query '${po(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&jy(t)}async function My(n,e){const t=K(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function vL(n,e){const t=K(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&jy(t)}function wL(n,e,t){const r=K(n),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(t);r.queries.delete(e)}function jy(n){n.Y_.forEach(e=>{e.next()})}var Dm,x0;(x0=Dm||(Dm={})).ea="default",x0.Cache="cache";class Fy{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ua(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=ua.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Dm.Cache}}/**
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
 */class S0{constructor(e){this.serializer=e}Es(e){return hr(this.serializer,e)}ds(e){return e.metadata.exists?AS(this.serializer,e.document,!1):Oe.newNoDocument(this.Es(e.metadata.name),this.As(e.metadata.readTime))}As(e){return st(e)}}class EL{constructor(e,t,r){this.ca=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=oA(e)}la(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.aa.namedQuery)this.queries.push(e.aa.namedQuery);else if(e.aa.documentMetadata){this.documents.push({metadata:e.aa.documentMetadata}),e.aa.documentMetadata.exists||++t;const r=me.fromString(e.aa.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.aa.document&&(this.documents[this.documents.length-1].document=e.aa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ha(e){const t=new Map,r=new S0(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Es(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||ce()).add(s);t.set(o,a)}}return t}async complete(){const e=await YO(this.localStore,new S0(this.serializer),this.documents,this.ca.id),t=this.ha(this.documents);for(const r of this.queries)await JO(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:e}}}function oA(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class aA{constructor(e){this.key=e}}class lA{constructor(e){this.key=e}}class uA{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ce(),this.mutatedKeys=ce(),this.Aa=iS(e),this.Ra=new Bo(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new E0,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),E=$u(this.query,m)?m:null,b=!!g&&this.mutatedKeys.has(g.key),P=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let M=!1;g&&E?g.data.isEqual(E.data)?b!==P&&(r.track({type:3,doc:E}),M=!0):this.ga(g,E)||(r.track({type:2,doc:E}),M=!0,(u&&this.Aa(E,u)>0||c&&this.Aa(E,c)<0)&&(a=!0)):!g&&E?(r.track({type:0,doc:E}),M=!0):g&&!E&&(r.track({type:1,doc:g}),M=!0,(u||c)&&(a=!0)),M&&(E?(o=o.add(E),s=P?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(E,b){const P=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return P(E)-P(b)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const a=t&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new ua(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new E0,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ce(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new lA(r))}),this.da.forEach(r=>{e.has(r)||t.push(new aA(r))}),t}ba(e){this.Ta=e.Ts,this.da=ce();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return ua.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class TL{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class xL{constructor(e){this.key=e,this.va=!1}}class SL{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Yi(a=>nS(a),Bu),this.Ma=new Map,this.xa=new Set,this.Oa=new Ce(G.comparator),this.Na=new Map,this.La=new Ay,this.Ba={},this.ka=new Map,this.qa=Fs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function AL(n,e,t=!0){const r=Wh(n);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await cA(r,e,t,!0),i}async function RL(n,e){const t=Wh(n);await cA(t,e,!0,!1)}async function cA(n,e,t,r){const i=await oa(n.localStore,Yt(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let a;return r&&(a=await Uy(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&qh(n.remoteStore,i),a}async function Uy(n,e,t,r,i){n.Ka=(m,g,E)=>async function(P,M,S,v){let A=M.view.ma(S);A.ns&&(A=await nh(P.localStore,M.query,!1).then(({documents:w})=>M.view.ma(w,A)));const V=v&&v.targetChanges.get(M.targetId),z=v&&v.targetMismatches.get(M.targetId)!=null,j=M.view.applyChanges(A,P.isPrimaryClient,V,z);return Vm(P,M.targetId,j.wa),j.snapshot}(n,m,g,E);const s=await nh(n.localStore,e,!0),o=new uA(e,s.Ts),a=o.ma(s.documents),u=Gu.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),c=o.applyChanges(a,n.isPrimaryClient,u);Vm(n,t,c.wa);const f=new TL(e,t,o);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),c.snapshot}async function kL(n,e,t){const r=K(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Bu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await aa(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&la(r.remoteStore,i.targetId),ca(r,i.targetId)}).catch(Hi)):(ca(r,i.targetId),await aa(r.localStore,i.targetId,!0))}async function bL(n,e){const t=K(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),la(t.remoteStore,r.targetId))}async function PL(n,e,t){const r=qy(n);try{const i=await function(o,a){const u=K(o),c=$e.now(),f=a.reduce((E,b)=>E.add(b.key),ce());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let b=un(),P=ce();return u.cs.getEntries(E,f).next(M=>{b=M,b.forEach((S,v)=>{v.isValidDocument()||(P=P.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,b)).next(M=>{m=M;const S=[];for(const v of a){const A=eO(v,m.get(v.key).overlayedDocument);A!=null&&S.push(new Hr(v.key,A,Kx(A.value.mapValue),Be.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,S,a)}).next(M=>{g=M;const S=M.applyToLocalDocumentSet(m,P);return u.documentOverlayCache.saveOverlays(E,M.batchId,S)})}).then(()=>({batchId:g.batchId,changes:oS(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ce(le)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,t),await Qr(r,i.changes),await Aa(r.remoteStore)}catch(i){const s=ka(i,"Failed to persist write");t.reject(s)}}async function dA(n,e){const t=K(n);try{const r=await HO(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Na.get(s);o&&(ee(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ee(o.va):i.removedDocuments.size>0&&(ee(o.va),o.va=!1))}),await Qr(t,r,e)}catch(r){await Hi(r)}}function A0(n,e,t){const r=K(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=K(o);u.onlineState=a;let c=!1;u.queries.forEach((f,m)=>{for(const g of m.j_)g.Z_(a)&&(c=!0)}),c&&jy(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function NL(n,e,t){const r=K(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ce(G.comparator);o=o.insert(s,Oe.newNoDocument(s,te.min()));const a=ce().add(s),u=new Wu(te.min(),new Map,new Ce(le),o,a);await dA(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),$y(r)}else await aa(r.localStore,e,!1).then(()=>ca(r,e,t)).catch(Hi)}async function CL(n,e){const t=K(n),r=e.batch.batchId;try{const i=await KO(t.localStore,e);By(t,r,null),zy(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Qr(t,i)}catch(i){await Hi(i)}}async function DL(n,e,t){const r=K(n);try{const i=await function(o,a){const u=K(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,a).next(m=>(ee(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);By(r,e,t),zy(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Qr(r,i)}catch(i){await Hi(i)}}async function VL(n,e){const t=K(n);Ji(t.remoteStore)||U("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=K(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",u=>a.mutationQueue.getHighestUnacknowledgedBatchId(u))}(t.localStore);if(r===-1)return void e.resolve();const i=t.ka.get(r)||[];i.push(e),t.ka.set(r,i)}catch(r){const i=ka(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function zy(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function By(n,e,t){const r=K(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function ca(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||hA(n,r)})}function hA(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(la(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),$y(n))}function Vm(n,e,t){for(const r of t)r instanceof aA?(n.La.addReference(r.key,e),OL(n,r)):r instanceof lA?(U("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||hA(n,r.key)):Y()}function OL(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(U("SyncEngine","New document in limbo: "+t),n.xa.add(r),$y(n))}function $y(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new G(me.fromString(e)),r=n.qa.next();n.Na.set(r,new xL(t)),n.Oa=n.Oa.insert(t,r),qh(n.remoteStore,new Dr(Yt(Ea(t.path)),r,"TargetPurposeLimboResolution",an.oe))}}async function Qr(n,e,t){const r=K(n),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,t).then(c=>{var f;if((c||t)&&r.isPrimaryClient){const m=c?!c.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){i.push(c);const m=by.Wi(u.targetId,c);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const f=K(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>D.forEach(c,g=>D.forEach(g.$i,E=>f.persistence.referenceDelegate.addReference(m,g.targetId,E)).next(()=>D.forEach(g.Ui,E=>f.persistence.referenceDelegate.removeReference(m,g.targetId,E)))))}catch(m){if(!Qi(m))throw m;U("LocalStore","Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const E=f.os.get(g),b=E.snapshotVersion,P=E.withLastLimboFreeSnapshotVersion(b);f.os=f.os.insert(g,P)}}}(r.localStore,s))}async function LL(n,e){const t=K(n);if(!t.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await GS(t.localStore,e);t.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new F(O.CANCELLED,o))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Qr(t,r.hs)}}function ML(n,e){const t=K(n),r=t.Na.get(e);if(r&&r.va)return ce().add(r.key);{let i=ce();const s=t.Ma.get(e);if(!s)return i;for(const o of s){const a=t.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}async function jL(n,e){const t=K(n),r=await nh(t.localStore,e.query,!0),i=e.view.ba(r);return t.isPrimaryClient&&Vm(t,e.targetId,i.wa),i}async function FL(n,e){const t=K(n);return YS(t.localStore,e).then(r=>Qr(t,r))}async function UL(n,e,t,r){const i=K(n),s=await function(a,u){const c=K(a),f=K(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",m=>f.Mn(m,u).next(g=>g?c.localDocuments.getDocuments(m,g):D.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await Aa(i.remoteStore):t==="acknowledged"||t==="rejected"?(By(i,e,r||null),zy(i,e),function(a,u){K(K(a).mutationQueue).On(u)}(i.localStore,e)):Y(),await Qr(i,s)):U("SyncEngine","Cannot apply mutation batch with id: "+e)}async function zL(n,e){const t=K(n);if(Wh(t),qy(t),e===!0&&t.Qa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await R0(t,r.toArray());t.Qa=!0,await Cm(t.remoteStore,!0);for(const s of i)qh(t.remoteStore,s)}else if(e===!1&&t.Qa!==!1){const r=[];let i=Promise.resolve();t.Ma.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(ca(t,o),aa(t.localStore,o,!0))),la(t.remoteStore,o)}),await i,await R0(t,r),function(o){const a=K(o);a.Na.forEach((u,c)=>{la(a.remoteStore,c)}),a.La.pr(),a.Na=new Map,a.Oa=new Ce(G.comparator)}(t),t.Qa=!1,await Cm(t.remoteStore,!1)}}async function R0(n,e,t){const r=K(n),i=[],s=[];for(const o of e){let a;const u=r.Ma.get(o);if(u&&u.length!==0){a=await oa(r.localStore,Yt(u[0]));for(const c of u){const f=r.Fa.get(c),m=await jL(r,f);m.snapshot&&s.push(m.snapshot)}}else{const c=await QS(r.localStore,o);a=await oa(r.localStore,c),await Uy(r,fA(c),o,!1,a.resumeToken)}i.push(a)}return r.Ca.d_(s),i}function fA(n){return tS(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function BL(n){return function(t){return K(K(t).persistence).Qi()}(K(n).localStore)}async function $L(n,e,t,r){const i=K(n);if(i.Qa)return void U("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ma.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await YS(i.localStore,rS(s[0])),a=Wu.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Ze.EMPTY_BYTE_STRING);await Qr(i,o,a);break}case"rejected":await aa(i.localStore,e,!0),ca(i,e,r);break;default:Y()}}async function qL(n,e,t){const r=Wh(n);if(r.Qa){for(const i of e){if(r.Ma.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){U("SyncEngine","Adding an already active target "+i);continue}const s=await QS(r.localStore,i),o=await oa(r.localStore,s);await Uy(r,fA(s),o.targetId,!1,o.resumeToken),qh(r.remoteStore,o)}for(const i of t)r.Ma.has(i)&&await aa(r.localStore,i,!1).then(()=>{la(r.remoteStore,i),ca(r,i)}).catch(Hi)}}function Wh(n){const e=K(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=dA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ML.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=NL.bind(null,e),e.Ca.d_=vL.bind(null,e.eventManager),e.Ca.$a=wL.bind(null,e.eventManager),e}function qy(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=CL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DL.bind(null,e),e}function WL(n,e,t){const r=K(n);(async function(s,o,a){try{const u=await o.getMetadata();if(await function(E,b){const P=K(E),M=st(b.createTime);return P.persistence.runTransaction("hasNewerBundle","readonly",S=>P.Gr.getBundleMetadata(S,b.id)).then(S=>!!S&&S.createTime.compareTo(M)>=0)}(s.localStore,u))return await o.close(),a._completeWith(function(E){return{taskState:"Success",documentsLoaded:E.totalDocuments,bytesLoaded:E.totalBytes,totalDocuments:E.totalDocuments,totalBytes:E.totalBytes}}(u)),Promise.resolve(new Set);a._updateProgress(oA(u));const c=new EL(u,s.localStore,o.serializer);let f=await o.Ua();for(;f;){const g=await c.la(f);g&&a._updateProgress(g),f=await o.Ua()}const m=await c.complete();return await Qr(s,m.Ia,void 0),await function(E,b){const P=K(E);return P.persistence.runTransaction("Save bundle","readwrite",M=>P.Gr.saveBundleMetadata(M,b))}(s.localStore,u),a._completeWith(m.progress),Promise.resolve(m.Pa)}catch(u){return mr("SyncEngine",`Loading bundle failed with ${u}`),a._failWith(u),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Tu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ku(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return WS(this.persistence,new qS,e.initialUser,this.serializer)}Ga(e){return new $S($h.Zr,this.serializer)}Wa(e){return new XS}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Tu.provider={build:()=>new Tu};class pA extends Tu{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await qy(this.Ja.syncEngine),await Aa(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return WS(this.persistence,new qS,e.initialUser,this.serializer)}ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new bO(r,e.asyncQueue,t)}Ha(e,t){const r=new cV(t,this.persistence);return new uV(e.asyncQueue,r)}Ga(e){const t=ky(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?rn.withCacheSize(this.cacheSizeBytes):rn.DEFAULT;return new Ry(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,ZS(),gd(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new XS}}class GL extends pA{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof tp&&(this.sharedClientState.syncEngine={no:UL.bind(null,t),ro:$L.bind(null,t),io:qL.bind(null,t),Qi:BL.bind(null,t),eo:FL.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await zL(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const t=ZS();if(!tp.D(t))throw new F(O.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=ky(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new tp(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class xu{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>A0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=LL.bind(null,this.syncEngine),await Cm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _L}()}createDatastore(e){const t=Ku(e.databaseInfo.databaseId),r=function(s){return new tL(s)}(e.databaseInfo);return function(s,o,a,u){return new iL(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new oL(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>A0(this.syncEngine,t,0),function(){return w0.D()?new w0:new XO}())}createSyncEngine(e,t){return function(i,s,o,a,u,c,f){const m=new SL(i,s,o,a,u,c);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=K(i);U("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Sa(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}xu.provider={build:()=>new xu};function k0(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class Gh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):it("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class KL{constructor(e,t){this.Xa=e,this.serializer=t,this.metadata=new Ct,this.buffer=new Uint8Array,this.eu=function(){return new TextDecoder("utf-8")}(),this.tu().then(r=>{r&&r.ua()?this.metadata.resolve(r.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
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
 */class HL{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new F(O.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(i,s){const o=K(i),a={documents:s.map(m=>Iu(o.serializer,m))},u=await o.Lo("BatchGetDocuments",o.serializer.databaseId,me.emptyPath(),a,s.length),c=new Map;u.forEach(m=>{const g=uO(o.serializer,m);c.set(g.key.toString(),g)});const f=[];return s.forEach(m=>{const g=c.get(m.toString());ee(!!g),f.push(g)}),f}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new xa(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=G.fromPath(r);this.mutations.push(new yy(i,this.precondition(i)))}),await async function(r,i){const s=K(r),o={writes:i.map(a=>Eu(s.serializer,a))};await s.Mo("Commit",s.serializer.databaseId,me.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Y();t=te.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new F(O.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(te.min())?Be.exists(!1):Be.updateTime(t):Be.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(te.min()))throw new F(O.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Be.updateTime(t)}return Be.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class QL{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this._u=r.maxAttempts,this.t_=new Ny(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new HL(this.datastore),t=this.cu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const t=this.updateFunction(e);return!Uu(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!gS(t)}return!1}}/**
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
 */class YL{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=It.UNAUTHENTICATED,this.clientId=Nx.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{U("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(U("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ct;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ka(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function rp(n,e){n.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await GS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function b0(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Wy(n);U("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>I0(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>I0(e.remoteStore,i)),n._onlineComponents=e}async function Wy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await rp(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;mr("Error using user provided cache. Falling back to memory cache: "+t),await rp(n,new Tu)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await rp(n,new Tu);return n._offlineComponents}async function Kh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await b0(n,n._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await b0(n,new xu))),n._onlineComponents}function mA(n){return Wy(n).then(e=>e.persistence)}function Gy(n){return Wy(n).then(e=>e.localStore)}function gA(n){return Kh(n).then(e=>e.remoteStore)}function Ky(n){return Kh(n).then(e=>e.syncEngine)}function JL(n){return Kh(n).then(e=>e.datastore)}async function da(n){const e=await Kh(n),t=e.eventManager;return t.onListen=AL.bind(null,e.syncEngine),t.onUnlisten=kL.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=RL.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=bL.bind(null,e.syncEngine),t}function XL(n){return n.asyncQueue.enqueue(async()=>{const e=await mA(n),t=await gA(n);return e.setNetworkEnabled(!0),function(i){const s=K(i);return s.L_.delete(0),Hu(s)}(t)})}function ZL(n){return n.asyncQueue.enqueue(async()=>{const e=await mA(n),t=await gA(n);return e.setNetworkEnabled(!1),async function(i){const s=K(i);s.L_.add(0),await Sa(s),s.q_.set("Offline")}(t)})}function eM(n,e){const t=new Ct;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,f){const m=K(c);return m.persistence.runTransaction("read document","readonly",g=>m.localDocuments.getDocument(g,f))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new F(O.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const u=ka(a,`Failed to get document '${s} from cache`);o.reject(u)}}(await Gy(n),e,t)),t.promise}function yA(n,e,t={}){const r=new Ct;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const f=new Gh({next:g=>{f.Za(),o.enqueueAndForget(()=>My(s,m));const E=g.docs.has(a);!E&&g.fromCache?c.reject(new F(O.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&g.fromCache&&u&&u.source==="server"?c.reject(new F(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new Fy(Ea(a.path),f,{includeMetadataChanges:!0,_a:!0});return Ly(s,m)}(await da(n),n.asyncQueue,e,t,r)),r.promise}function tM(n,e){const t=new Ct;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await nh(i,s,!0),u=new uA(s,a.Ts),c=u.ma(a.documents),f=u.applyChanges(c,!1);o.resolve(f.snapshot)}catch(a){const u=ka(a,`Failed to execute query '${s} against cache`);o.reject(u)}}(await Gy(n),e,t)),t.promise}function _A(n,e,t={}){const r=new Ct;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const f=new Gh({next:g=>{f.Za(),o.enqueueAndForget(()=>My(s,m)),g.fromCache&&u.source==="server"?c.reject(new F(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new Fy(a,f,{includeMetadataChanges:!0,_a:!0});return Ly(s,m)}(await da(n),n.asyncQueue,e,t,r)),r.promise}function nM(n,e){const t=new Gh(e);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){K(i).Y_.add(s),s.next()}(await da(n),t)),()=>{t.Za(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){K(i).Y_.delete(s)}(await da(n),t))}}function rM(n,e,t,r){const i=function(o,a){let u;return u=typeof o=="string"?_S().encode(o):o,function(f,m){return new KL(f,m)}(function(f,m){if(f instanceof Uint8Array)return k0(f,m);if(f instanceof ArrayBuffer)return k0(new Uint8Array(f),m);if(f instanceof ReadableStream)return f.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(u),a)}(t,Ku(e));n.asyncQueue.enqueueAndForget(async()=>{WL(await Ky(n),i,r)})}function iM(n,e){return n.asyncQueue.enqueue(async()=>function(r,i){const s=K(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Gr.getNamedQuery(o,i))}(await Gy(n),e))}/**
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
 */function vA(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const P0=new Map;/**
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
 */function Hy(n,e,t){if(!t)throw new F(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function wA(n,e,t,r){if(e===!0&&r===!0)throw new F(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function N0(n){if(!G.isDocumentKey(n))throw new F(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function C0(n){if(G.isDocumentKey(n))throw new F(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Hh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Y()}function xe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new F(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Hh(n);throw new F(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function IA(n,e){if(e<=0)throw new F(O.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class D0{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new F(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new F(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new F(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new F(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qu{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new D0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new D0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new X2;switch(r.type){case"firstParty":return new nV(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=P0.get(t);r&&(U("ComponentProvider","Removing Datastore"),P0.delete(t),r.terminate())}(this),Promise.resolve()}}function sM(n,e,t,r={}){var i;const s=(n=xe(n,Qu))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&mr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=It.MOCK_USER;else{a=mP(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new F(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new It(c)}n._authCredentials=new Z2(new Px(a,u))}}/**
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
 */let Jt=class EA{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new EA(this.firestore,e,this._query)}},Ge=class TA{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new TA(this.firestore,e,this._key)}},bi=class xA extends Jt{constructor(e,t,r){super(e,t,Ea(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new G(e))}withConverter(e){return new xA(this.firestore,e,this._path)}};function SA(n,e,...t){if(n=re(n),Hy("collection","path",e),n instanceof Qu){const r=me.fromString(e,...t);return C0(r),new bi(n,null,r)}{if(!(n instanceof Ge||n instanceof bi))throw new F(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(me.fromString(e,...t));return C0(r),new bi(n.firestore,null,r)}}function oM(n,e){if(n=xe(n,Qu),Hy("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new F(O.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Jt(n,null,function(r){return new Kr(me.emptyPath(),r)}(e))}function oh(n,e,...t){if(n=re(n),arguments.length===1&&(e=Nx.newId()),Hy("doc","path",e),n instanceof Qu){const r=me.fromString(e,...t);return N0(r),new Ge(n,null,new G(r))}{if(!(n instanceof Ge||n instanceof bi))throw new F(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(me.fromString(e,...t));return N0(r),new Ge(n.firestore,n instanceof bi?n.converter:null,new G(r))}}function AA(n,e){return n=re(n),e=re(e),(n instanceof Ge||n instanceof bi)&&(e instanceof Ge||e instanceof bi)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function RA(n,e){return n=re(n),e=re(e),n instanceof Jt&&e instanceof Jt&&n.firestore===e.firestore&&Bu(n._query,e._query)&&n.converter===e.converter}/**
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
 */class V0{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ny(this,"async_queue_retry"),this.Vu=()=>{const r=gd();r&&U("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=gd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=gd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Ct;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Qi(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw it("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=Oy.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Y()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Om(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class aM{constructor(){this._progressObserver={},this._taskCompletionResolver=new Ct,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const lM=-1;let ot=class extends Qu{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new V0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new V0(e),this._firestoreClient=void 0,await e}}};function Bt(n){if(n._terminated)throw new F(O.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||kA(n),n._firestoreClient}function kA(n){var e,t,r;const i=n._freezeSettings(),s=function(a,u,c,f){return new CV(a,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,vA(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new YL(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(n._componentsProvider))}function uM(n,e){mr("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return bA(n,xu.provider,{build:r=>new pA(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function cM(n){mr("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();bA(n,xu.provider,{build:t=>new GL(t,e.cacheSizeBytes)})}function bA(n,e,t){if((n=xe(n,ot))._firestoreClient||n._terminated)throw new F(O.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new F(O.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},kA(n)}function dM(n){if(n._initialized&&!n._terminated)throw new F(O.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Ct;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!dr.D())return Promise.resolve();const i=r+"main";await dr.delete(i)}(ky(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function hM(n){return function(t){const r=new Ct;return t.asyncQueue.enqueueAndForget(async()=>VL(await Ky(t),r)),r.promise}(Bt(n=xe(n,ot)))}function fM(n){return XL(Bt(n=xe(n,ot)))}function pM(n){return ZL(Bt(n=xe(n,ot)))}function mM(n,e){const t=Bt(n=xe(n,ot)),r=new aM;return rM(t,n._databaseId,e,r),r}function gM(n,e){return iM(Bt(n=xe(n,ot)),e).then(t=>t?new Jt(n,null,t.query):null)}/**
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
 */class yr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yr(Ze.fromBase64String(e))}catch(t){throw new F(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new yr(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let zi=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let Gs=class{constructor(e){this._methodName=e}};/**
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
 */class Qh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
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
 */class Qy{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const yM=/^__.*__$/;class _M{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Hr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ta(e,this.data,t,this.fieldTransforms)}}class PA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Hr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function NA(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Yh{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Yh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ah(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(NA(this.Cu)&&yM.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class vM{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ku(e)}Qu(e,t,r,i=!1){return new Yh({Cu:e,methodName:t,qu:r,path:ze.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ks(n){const e=n._freezeSettings(),t=Ku(n._databaseId);return new vM(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Jh(n,e,t,r,i,s={}){const o=n.Qu(s.merge||s.mergeFields?2:0,e,t,i);n_("Data must be an object, but it was:",o,r);const a=VA(r,o);let u,c;if(s.merge)u=new ln(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=Lm(e,m,t);if(!o.contains(g))throw new F(O.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);LA(f,g)||f.push(g)}u=new ln(f),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new _M(new Pt(a),u,c)}class Yu extends Gs{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Yu}}function CA(n,e,t){return new Yh({Cu:3,qu:e.settings.qu,methodName:n._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Yy extends Gs{_toFieldTransform(e){return new qu(e.path,new ra)}isEqual(e){return e instanceof Yy}}class Jy extends Gs{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=CA(this,e,!0),r=this.Ku.map(s=>Hs(s,t)),i=new Os(r);return new qu(e.path,i)}isEqual(e){return e instanceof Jy&&ou(this.Ku,e.Ku)}}class Xy extends Gs{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=CA(this,e,!0),r=this.Ku.map(s=>Hs(s,t)),i=new Ls(r);return new qu(e.path,i)}isEqual(e){return e instanceof Xy&&ou(this.Ku,e.Ku)}}class Zy extends Gs{constructor(e,t){super(e),this.$u=t}_toFieldTransform(e){const t=new ia(e.serializer,uS(e.serializer,this.$u));return new qu(e.path,t)}isEqual(e){return e instanceof Zy&&this.$u===e.$u}}function e_(n,e,t,r){const i=n.Qu(1,e,t);n_("Data must be an object, but it was:",i,r);const s=[],o=Pt.empty();Ws(r,(u,c)=>{const f=r_(e,u,t);c=re(c);const m=i.Nu(f);if(c instanceof Yu)s.push(f);else{const g=Hs(c,m);g!=null&&(s.push(f),o.set(f,g))}});const a=new ln(s);return new PA(o,a,i.fieldTransforms)}function t_(n,e,t,r,i,s){const o=n.Qu(1,e,t),a=[Lm(e,r,t)],u=[i];if(s.length%2!=0)throw new F(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)a.push(Lm(e,s[g])),u.push(s[g+1]);const c=[],f=Pt.empty();for(let g=a.length-1;g>=0;--g)if(!LA(c,a[g])){const E=a[g];let b=u[g];b=re(b);const P=o.Nu(E);if(b instanceof Yu)c.push(E);else{const M=Hs(b,P);M!=null&&(c.push(E),f.set(E,M))}}const m=new ln(c);return new PA(f,m,o.fieldTransforms)}function DA(n,e,t,r=!1){return Hs(t,n.Qu(r?4:3,e))}function Hs(n,e){if(OA(n=re(n)))return n_("Unsupported field value:",e,n),VA(n,e);if(n instanceof Gs)return function(r,i){if(!NA(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Hs(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uS(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=$e.fromDate(r);return{timestampValue:sa(i.serializer,s)}}if(r instanceof $e){const s=new $e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:sa(i.serializer,s)}}if(r instanceof Qh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof yr)return{bytesValue:IS(i.serializer,r._byteString)};if(r instanceof Ge){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ey(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Qy)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return gy(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Hh(r)}`)}(n,e)}function VA(n,e){const t={};return $x(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ws(n,(r,i)=>{const s=Hs(i,e.Mu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function OA(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof $e||n instanceof Qh||n instanceof yr||n instanceof Ge||n instanceof Gs||n instanceof Qy)}function n_(n,e,t){if(!OA(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Hh(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Lm(n,e,t){if((e=re(e))instanceof zi)return e._internalPath;if(typeof e=="string")return r_(n,e);throw ah("Field path arguments must be of type string or ",n,!1,void 0,t)}const wM=new RegExp("[~\\*/\\[\\]]");function r_(n,e,t){if(e.search(wM)>=0)throw ah(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new zi(...e.split("."))._internalPath}catch{throw ah(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ah(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new F(O.INVALID_ARGUMENT,a+n+u)}function LA(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Su{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new IM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Xh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class IM extends Su{data(){return super.data()}}function Xh(n,e){return typeof e=="string"?r_(n,e):e instanceof zi?e._internalPath:e._delegate._internalPath}/**
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
 */function MA(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class i_{}class Ju extends i_{}function ui(n,e,...t){let r=[];e instanceof i_&&r.push(e),r=r.concat(t),function(s){const o=s.filter(u=>u instanceof s_).length,a=s.filter(u=>u instanceof Zh).length;if(o>1||o>0&&a>0)throw new F(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Zh extends Ju{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Zh(e,t,r)}_apply(e){const t=this._parse(e);return FA(e._query,t),new Jt(e.firestore,e.converter,Tm(e._query,t))}_parse(e){const t=Ks(e.firestore);return function(s,o,a,u,c,f,m){let g;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new F(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){L0(m,f);const E=[];for(const b of m)E.push(O0(u,s,b));g={arrayValue:{values:E}}}else g=O0(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||L0(m,f),g=DA(a,o,m,f==="in"||f==="not-in");return ge.create(c,f,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function EM(n,e,t){const r=e,i=Xh("where",n);return Zh._create(i,r,t)}class s_ extends i_{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new s_(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Re.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)FA(o,u),o=Tm(o,u)}(e._query,t),new Jt(e.firestore,e.converter,Tm(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class o_ extends Ju{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new o_(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new F(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new F(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new wu(s,o)}(e._query,this._field,this._direction);return new Jt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Kr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function TM(n,e="asc"){const t=e,r=Xh("orderBy",n);return o_._create(r,t)}class ef extends Ju{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new ef(e,t,r)}_apply(e){return new Jt(e.firestore,e.converter,Xd(e._query,this._limit,this._limitType))}}function xM(n){return IA("limit",n),ef._create("limit",n,"F")}function SM(n){return IA("limitToLast",n),ef._create("limitToLast",n,"L")}class tf extends Ju{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new tf(e,t,r)}_apply(e){const t=jA(e,this.type,this._docOrFields,this._inclusive);return new Jt(e.firestore,e.converter,function(i,s){return new Kr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function AM(...n){return tf._create("startAt",n,!0)}function RM(...n){return tf._create("startAfter",n,!1)}class nf extends Ju{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new nf(e,t,r)}_apply(e){const t=jA(e,this.type,this._docOrFields,this._inclusive);return new Jt(e.firestore,e.converter,function(i,s){return new Kr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function kM(...n){return nf._create("endBefore",n,!1)}function bM(...n){return nf._create("endAt",n,!0)}function jA(n,e,t,r){if(t[0]=re(t[0]),t[0]instanceof Su)return function(s,o,a,u,c){if(!u)throw new F(O.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const f=[];for(const m of zo(s))if(m.field.isKeyField())f.push(Ds(o,u.key));else{const g=u.data.field(m.field);if(Mh(g))throw new F(O.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+m.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const E=m.field.canonicalString();throw new F(O.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${E}' (used as the orderBy) does not exist.`)}f.push(g)}return new Fi(f,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=Ks(n.firestore);return function(o,a,u,c,f,m){const g=o.explicitOrderBy;if(f.length>g.length)throw new F(O.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const E=[];for(let b=0;b<f.length;b++){const P=f[b];if(g[b].field.isKeyField()){if(typeof P!="string")throw new F(O.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof P}`);if(!py(o)&&P.indexOf("/")!==-1)throw new F(O.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${P}' contains a slash.`);const M=o.path.child(me.fromString(P));if(!G.isDocumentKey(M))throw new F(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${M}' is not because it contains an odd number of segments.`);const S=new G(M);E.push(Ds(a,S))}else{const M=DA(u,c,P);E.push(M)}}return new Fi(E,m)}(n._query,n.firestore._databaseId,i,e,t,r)}}function O0(n,e,t){if(typeof(t=re(t))=="string"){if(t==="")throw new F(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!py(e)&&t.indexOf("/")!==-1)throw new F(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(me.fromString(t));if(!G.isDocumentKey(r))throw new F(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ds(n,new G(r))}if(t instanceof Ge)return Ds(n,t._key);throw new F(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hh(t)}.`)}function L0(n,e){if(!Array.isArray(n)||n.length===0)throw new F(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function FA(n,e){const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new F(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class a_{convertValue(e,t="none"){switch(Cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Li(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ws(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Fe(o.doubleValue));return new Qy(s)}convertGeoPoint(e){return new Qh(Fe(e.latitude),Fe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=hy(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(yu(e));default:return null}}convertTimestamp(e){const t=Br(e);return new $e(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=me.fromString(e);ee(CS(r));const i=new Mi(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(t)||it(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function rf(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class PM extends a_{constructor(e){super(),this.firestore=e}convertBytes(e){return new yr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,t)}}/**
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
 */class ys{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let $r=class extends Su{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new zl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Xh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},zl=class extends $r{data(e={}){return super.data(e)}},Bi=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ys(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new zl(this._firestore,this._userDataWriter,r.key,r,new ys(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new zl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ys(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new zl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ys(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:NM(a.type),doc:u,oldIndex:c,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function NM(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}function UA(n,e){return n instanceof $r&&e instanceof $r?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Bi&&e instanceof Bi&&n._firestore===e._firestore&&RA(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function CM(n){n=xe(n,Ge);const e=xe(n.firestore,ot);return yA(Bt(e),n._key).then(t=>l_(e,n,t))}class Qs extends a_{constructor(e){super(),this.firestore=e}convertBytes(e){return new yr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,t)}}function DM(n){n=xe(n,Ge);const e=xe(n.firestore,ot),t=Bt(e),r=new Qs(e);return eM(t,n._key).then(i=>new $r(e,r,n._key,i,new ys(i!==null&&i.hasLocalMutations,!0),n.converter))}function VM(n){n=xe(n,Ge);const e=xe(n.firestore,ot);return yA(Bt(e),n._key,{source:"server"}).then(t=>l_(e,n,t))}function OM(n){n=xe(n,Jt);const e=xe(n.firestore,ot),t=Bt(e),r=new Qs(e);return MA(n._query),_A(t,n._query).then(i=>new Bi(e,r,n,i))}function LM(n){n=xe(n,Jt);const e=xe(n.firestore,ot),t=Bt(e),r=new Qs(e);return tM(t,n._query).then(i=>new Bi(e,r,n,i))}function MM(n){n=xe(n,Jt);const e=xe(n.firestore,ot),t=Bt(e),r=new Qs(e);return _A(t,n._query,{source:"server"}).then(i=>new Bi(e,r,n,i))}function M0(n,e,t){n=xe(n,Ge);const r=xe(n.firestore,ot),i=rf(n.converter,e,t);return Xu(r,[Jh(Ks(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Be.none())])}function j0(n,e,t,...r){n=xe(n,Ge);const i=xe(n.firestore,ot),s=Ks(i);let o;return o=typeof(e=re(e))=="string"||e instanceof zi?t_(s,"updateDoc",n._key,e,t,r):e_(s,"updateDoc",n._key,e),Xu(i,[o.toMutation(n._key,Be.exists(!0))])}function jM(n){return Xu(xe(n.firestore,ot),[new xa(n._key,Be.none())])}function FM(n,e){const t=xe(n.firestore,ot),r=oh(n),i=rf(n.converter,e);return Xu(t,[Jh(Ks(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Be.exists(!1))]).then(()=>r)}function zA(n,...e){var t,r,i;n=re(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Om(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Om(e[o])){const m=e[o];e[o]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,c,f;if(n instanceof Ge)c=xe(n.firestore,ot),f=Ea(n._key.path),u={next:m=>{e[o]&&e[o](l_(c,n,m))},error:e[o+1],complete:e[o+2]};else{const m=xe(n,Jt);c=xe(m.firestore,ot),f=m._query;const g=new Qs(c);u={next:E=>{e[o]&&e[o](new Bi(c,g,m,E))},error:e[o+1],complete:e[o+2]},MA(n._query)}return function(g,E,b,P){const M=new Gh(P),S=new Fy(E,M,b);return g.asyncQueue.enqueueAndForget(async()=>Ly(await da(g),S)),()=>{M.Za(),g.asyncQueue.enqueueAndForget(async()=>My(await da(g),S))}}(Bt(c),f,a,u)}function UM(n,e){return nM(Bt(n=xe(n,ot)),Om(e)?e:{next:e})}function Xu(n,e){return function(r,i){const s=new Ct;return r.asyncQueue.enqueueAndForget(async()=>PL(await Ky(r),i,s)),s.promise}(Bt(n),e)}function l_(n,e,t){const r=t.docs.get(e._key),i=new Qs(n);return new $r(n,i,e._key,r,new ys(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const zM={maxAttempts:5};/**
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
 */let BM=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Ks(e)}set(e,t,r){this._verifyNotCommitted();const i=mi(e,this._firestore),s=rf(i.converter,t,r),o=Jh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Be.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=mi(e,this._firestore);let o;return o=typeof(t=re(t))=="string"||t instanceof zi?t_(this._dataReader,"WriteBatch.update",s._key,t,r,i):e_(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Be.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=mi(e,this._firestore);return this._mutations=this._mutations.concat(new xa(t._key,Be.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new F(O.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function mi(n,e){if((n=re(n)).firestore!==e)throw new F(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */let $M=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=Ks(t)}get(t){const r=mi(t,this._firestore),i=new PM(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return Y();const o=s[0];if(o.isFoundDocument())return new Su(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Su(this._firestore,i,r._key,null,r.converter);throw Y()})}set(t,r,i){const s=mi(t,this._firestore),o=rf(s.converter,r,i),a=Jh(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(t,r,i,...s){const o=mi(t,this._firestore);let a;return a=typeof(r=re(r))=="string"||r instanceof zi?t_(this._dataReader,"Transaction.update",o._key,r,i,s):e_(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(t){const r=mi(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=mi(e,this._firestore),r=new Qs(this._firestore);return super.get(e).then(i=>new $r(this._firestore,r,t._key,i._document,new ys(!1,!1),t.converter))}};function qM(n,e,t){n=xe(n,ot);const r=Object.assign(Object.assign({},zM),t);return function(s){if(s.maxAttempts<1)throw new F(O.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new Ct;return s.asyncQueue.enqueueAndForget(async()=>{const c=await JL(s);new QL(s.asyncQueue,c,a,o,u).au()}),u.promise}(Bt(n),i=>e(new $M(n,i)),r)}/**
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
 */function WM(){return new Yu("deleteField")}function GM(){return new Yy("serverTimestamp")}function KM(...n){return new Jy("arrayUnion",n)}function HM(...n){return new Xy("arrayRemove",n)}function QM(n){return new Zy("increment",n)}(function(e,t=!0){(function(i){Ia=i})(Gi),Vi(new fr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ot(new eV(r.getProvider("auth-internal")),new iV(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new F(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mi(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),qn(Rw,"4.7.3",e),qn(Rw,"4.7.3","esm2017")})();const YM="@firebase/firestore-compat",JM="0.3.38";/**
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
 */function u_(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new F("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function F0(){if(typeof Uint8Array>"u")throw new F("unimplemented","Uint8Arrays are not available in this environment.")}function U0(){if(!PV())throw new F("unimplemented","Blobs are unavailable in Firestore in this environment.")}let BA=class Mm{constructor(e){this._delegate=e}static fromBase64String(e){return U0(),new Mm(yr.fromBase64String(e))}static fromUint8Array(e){return F0(),new Mm(yr.fromUint8Array(e))}toBase64(){return U0(),this._delegate.toBase64()}toUint8Array(){return F0(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
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
 */function jm(n){return XM(n,["next","error","complete"])}function XM(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
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
 */class ZM{enableIndexedDbPersistence(e,t){return uM(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return cM(e._delegate)}clearIndexedDbPersistence(e){return dM(e._delegate)}}class $A{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Mi||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&mr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){sM(this._delegate,e,t,r)}enableNetwork(){return fM(this._delegate)}disableNetwork(){return pM(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,wA("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return hM(this._delegate)}onSnapshotsInSync(e){return UM(this._delegate,e)}get app(){if(!this._appCompat)throw new F("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ha(this,SA(this._delegate,e))}catch(t){throw Gt(t,"collection()","Firestore.collection()")}}doc(e){try{return new bn(this,oh(this._delegate,e))}catch(t){throw Gt(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Wt(this,oM(this._delegate,e))}catch(t){throw Gt(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return qM(this._delegate,t=>e(new qA(this,t)))}batch(){return Bt(this._delegate),new WA(new BM(this._delegate,e=>Xu(this._delegate,e)))}loadBundle(e){return mM(this._delegate,e)}namedQuery(e){return gM(this._delegate,e).then(t=>t?new Wt(this,t):null)}}class sf extends a_{constructor(e){super(),this.firestore=e}convertBytes(e){return new BA(new yr(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return bn.forKey(t,this.firestore,null)}}function ej(n){Y2(n)}class qA{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new sf(e)}get(e){const t=_s(e);return this._delegate.get(t).then(r=>new Au(this._firestore,new $r(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=_s(e);return r?(u_("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=_s(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=_s(e);return this._delegate.delete(t),this}}class WA{constructor(e){this._delegate=e}set(e,t,r){const i=_s(e);return r?(u_("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=_s(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=_s(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Us{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new zl(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Ru(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Us.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new Us(e,new sf(e),t),i.set(t,s)),s}}Us.INSTANCES=new WeakMap;class bn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new sf(e)}static forPath(e,t,r){if(e.length%2!==0)throw new F("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new bn(t,new Ge(t._delegate,r,new G(e)))}static forKey(e,t,r){return new bn(t,new Ge(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new ha(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ha(this.firestore,SA(this._delegate,e))}catch(t){throw Gt(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=re(e),e instanceof Ge?AA(this._delegate,e):!1}set(e,t){t=u_("DocumentReference.set",t);try{return t?M0(this._delegate,e,t):M0(this._delegate,e)}catch(r){throw Gt(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?j0(this._delegate,e):j0(this._delegate,e,t,...r)}catch(i){throw Gt(i,"updateDoc()","DocumentReference.update()")}}delete(){return jM(this._delegate)}onSnapshot(...e){const t=GA(e),r=KA(e,i=>new Au(this.firestore,new $r(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return zA(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=DM(this._delegate):(e==null?void 0:e.source)==="server"?t=VM(this._delegate):t=CM(this._delegate),t.then(r=>new Au(this.firestore,new $r(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new bn(this.firestore,e?this._delegate.withConverter(Us.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Gt(n,e,t){return n.message=n.message.replace(e,t),n}function GA(n){for(const e of n)if(typeof e=="object"&&!jm(e))return e;return{}}function KA(n,e){var t,r;let i;return jm(n[0])?i=n[0]:jm(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Au{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new bn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return UA(this._delegate,e._delegate)}}class Ru extends Au{data(e){const t=this._delegate.data(e);return this._delegate._converter||J2(t!==void 0),t}}class Wt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new sf(e)}where(e,t,r){try{return new Wt(this.firestore,ui(this._delegate,EM(e,t,r)))}catch(i){throw Gt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Wt(this.firestore,ui(this._delegate,TM(e,t)))}catch(r){throw Gt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Wt(this.firestore,ui(this._delegate,xM(e)))}catch(t){throw Gt(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Wt(this.firestore,ui(this._delegate,SM(e)))}catch(t){throw Gt(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Wt(this.firestore,ui(this._delegate,AM(...e)))}catch(t){throw Gt(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Wt(this.firestore,ui(this._delegate,RM(...e)))}catch(t){throw Gt(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Wt(this.firestore,ui(this._delegate,kM(...e)))}catch(t){throw Gt(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Wt(this.firestore,ui(this._delegate,bM(...e)))}catch(t){throw Gt(t,"endAt()","Query.endAt()")}}isEqual(e){return RA(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=LM(this._delegate):(e==null?void 0:e.source)==="server"?t=MM(this._delegate):t=OM(this._delegate),t.then(r=>new Fm(this.firestore,new Bi(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=GA(e),r=KA(e,i=>new Fm(this.firestore,new Bi(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return zA(this._delegate,t,r)}withConverter(e){return new Wt(this.firestore,e?this._delegate.withConverter(Us.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class tj{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Ru(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Fm{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Wt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Ru(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new tj(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new Ru(this._firestore,r))})}isEqual(e){return UA(this._delegate,e._delegate)}}class ha extends Wt{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new bn(this.firestore,e):null}doc(e){try{return e===void 0?new bn(this.firestore,oh(this._delegate)):new bn(this.firestore,oh(this._delegate,e))}catch(t){throw Gt(t,"doc()","CollectionReference.doc()")}}add(e){return FM(this._delegate,e).then(t=>new bn(this.firestore,t))}isEqual(e){return AA(this._delegate,e._delegate)}withConverter(e){return new ha(this.firestore,e?this._delegate.withConverter(Us.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function _s(n){return xe(n,Ge)}/**
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
 */class c_{constructor(...e){this._delegate=new zi(...e)}static documentId(){return new c_(ze.keyField().canonicalString())}isEqual(e){return e=re(e),e instanceof zi?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class hs{constructor(e){this._delegate=e}static serverTimestamp(){const e=GM();return e._methodName="FieldValue.serverTimestamp",new hs(e)}static delete(){const e=WM();return e._methodName="FieldValue.delete",new hs(e)}static arrayUnion(...e){const t=KM(...e);return t._methodName="FieldValue.arrayUnion",new hs(t)}static arrayRemove(...e){const t=HM(...e);return t._methodName="FieldValue.arrayRemove",new hs(t)}static increment(e){const t=QM(e);return t._methodName="FieldValue.increment",new hs(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const nj={Firestore:$A,GeoPoint:Qh,Timestamp:$e,Blob:BA,Transaction:qA,WriteBatch:WA,DocumentReference:bn,DocumentSnapshot:Au,Query:Wt,QueryDocumentSnapshot:Ru,QuerySnapshot:Fm,CollectionReference:ha,FieldPath:c_,FieldValue:hs,setLogLevel:ej,CACHE_SIZE_UNLIMITED:lM};function rj(n,e){n.INTERNAL.registerComponent(new fr("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},nj)))}/**
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
 */function ij(n){rj(n,(e,t)=>new $A(e,t,new ZM)),n.registerVersion(YM,JM)}ij(ya);const sj={apiKey:"AIzaSyBwriza4xTWn0kT-clamqFWQOmZenk8oQ8",authDomain:"lideranca-irv.firebaseapp.com",projectId:"lideranca-irv",storageBucket:"lideranca-irv.firebasestorage.app",messagingSenderId:"420842927514",appId:"1:420842927514:web:1508be5f38c7c824ea3623",measurementId:"G-HWPGGE7SBX"},HA=ya.initializeApp(sj),Gc=HA.firestore(),ip=HA.auth(),oj=()=>{const[n,e]=se.useState(null),[t,r]=se.useState(!0),[i,s]=se.useState(""),[o,a]=se.useState(""),[u,c]=se.useState(""),[f,m]=se.useState(!1);se.useEffect(()=>{const J=ip.onAuthStateChanged(Q=>{e(Q),r(!1)});return()=>J()},[]);const g=async J=>{J.preventDefault(),m(!0),c("");try{await ip.signInWithEmailAndPassword(i,o)}catch(Q){console.error("Login error:",Q),c("Credenciais inválidas. Verifique seu e-mail e senha.")}finally{m(!1)}},E=async()=>{try{await ip.signOut()}catch(J){console.error("Logout error:",J)}},[b,P]=se.useState(oe.CELL_REGISTRY),[M,S]=se.useState(!1),[v,A]=se.useState([]),[V,z]=se.useState([]),[j,w]=se.useState([]),[_,I]=se.useState([]),[T,k]=se.useState([]),[N,x]=se.useState([]),[ve,Kn]=se.useState([]),[xt,xn]=se.useState([]),[H,ie]=se.useState(!0),[$,ae]=se.useState(null),[ye,de]=se.useState(!1),[fn,at]=se.useState(null),[en,Sn]=se.useState(null),[_r,ba]=se.useState(null),[tn,$t]=se.useState(null),[lt,Ys]=se.useState(!1),[vr,Yr]=se.useState(null),Zu=se.useRef(null),of=se.useRef(null),af=se.useRef(null),ec=se.useRef(null),[Hn,tc]=se.useState("all"),[Pa,nc]=se.useState("all"),[Jr,rc]=se.useState(""),[nt,yt]=se.useState(""),[wr,Na]=se.useState("");se.useEffect(()=>{if(!n){A([]),z([]),w([]),I([]),k([]),x([]),Kn([]),xn([]);return}ie(!0);const J=(Z,Ae)=>Gc.collection(Z).onSnapshot(we=>{const ne=we.docs.map(pe=>({id:pe.id,...pe.data()}));Ae(ne)},we=>{console.error(`Erro ao carregar ${Z}:`,we),$t({title:"Erro de Conexão",message:`Falha ao sincronizar ${Z}.`,type:"alert"})}),Q=[J("members",A),J("cells",z),J("announcements",w),J("studies",I),J("tracks",k),J("pastorWords",x),J("leaders",Kn),J("ministries",xn)];return ie(!1),()=>{Q.forEach(Z=>Z())}},[n]),se.useEffect(()=>{if(!n||H)return;const J=setTimeout(()=>{const Q=new Date,Z=Q.getMonth(),Ae=Q.getDate(),we=pe=>{if(!pe)return!1;const Me=pe.split("-");if(Me.length!==3)return!1;const ue=parseInt(Me[1],10)-1,ht=parseInt(Me[2],10);return ue===Z&&ht===Ae},ne=[...v.filter(pe=>we(pe.birthday)).map(pe=>pe.name),...ve.filter(pe=>we(pe.birthday)).map(pe=>pe.name)];if(ne.length>0){const pe=ne.map(Me=>Me.split(" ")[0]).join(", ");$t({title:"🎉 Aniversariantes do Dia!",message:`Hoje é dia de festa! Parabéns para: ${pe}.`,type:"success"})}},3e3);return()=>clearTimeout(J)},[v,ve,n,H]),se.useEffect(()=>{if(tn){const J=setTimeout(()=>$t(null),6e3);return()=>clearTimeout(J)}},[tn]);const Qn=J=>{if(!J)return"";const Q=J.split("-");if(Q.length===3){const[Z,Ae,we]=Q;return`${we}/${Ae}/${Z}`}return J},ic=J=>{switch(J){case oe.CELL_MEMBERS:return"members";case oe.CELL_REGISTRY:return"cells";case oe.LEADERS:return"leaders";case oe.MINISTRIES:return"ministries";case oe.STUDIES:return"studies";case oe.ANNOUNCEMENTS:return"announcements";case oe.MUSIC_PLAYER:return"tracks";case oe.PASTOR_WORD:return"pastorWords";default:return""}},Ir=se.useMemo(()=>Hn==="all"?v:v.filter(J=>J.cellId===Hn),[v,Hn]);se.useMemo(()=>Pa==="all"?ve:ve.filter(J=>J.ministryId===Pa),[ve,Pa]);const Ca=se.useMemo(()=>{if(!Jr)return j;const J=Jr.split("-");if(J.length===3){const[Q,Z,Ae]=J,we=`${Ae}/${Z}/${Q}`;return j.filter(ne=>ne.date===we)}return j},[j,Jr]),sc=J=>{let Q="";J==="members"?(Q=`Nome;Telefone;Aniversario;Celula;Funcao
`,v.forEach(ne=>{var Me;const pe=((Me=V.find(ue=>ue.id===ne.cellId))==null?void 0:Me.name)||"N/A";Q+=`${ne.name};${ne.phone};${Qn(ne.birthday)};${pe};${ne.role}
`})):J==="cells"?(Q=`Nome;Lider;Co-Lider;Endereco;Dia;Hora;Tipo
`,V.forEach(ne=>{Q+=`${ne.name};${ne.leader};${ne.coLeader||""};${ne.address};${ne.meetingDay};${ne.meetingTime};${ne.meetingType}
`})):J==="leaders"?(Q=`Nome;Telefone;Aniversario;Ministerio;Funcao
`,ve.forEach(ne=>{var Me;const pe=((Me=xt.find(ue=>ue.id===ne.ministryId))==null?void 0:Me.name)||"N/A";Q+=`${ne.name};${ne.phone};${Qn(ne.birthday)};${pe};${ne.role}
`})):J==="ministries"?(Q=`Nome;Lider Responsavel;Descricao
`,xt.forEach(ne=>{var Me;const pe=((Me=ve.find(ue=>ue.id===ne.leaderId))==null?void 0:Me.name)||"NÃO DEFINIDO";Q+=`${ne.name};${pe};${ne.description}
`})):J==="announcements"&&(Q=`Data;Categoria;Titulo;Conteudo
`,j.forEach(ne=>{const pe=ne.content?ne.content.replace(/\n/g," "):"";Q+=`${ne.date};${ne.category};${ne.title};${pe}
`}));const Z=new Blob(["\uFEFF"+Q],{type:"text/csv;charset=utf-8;"}),Ae=URL.createObjectURL(Z),we=document.createElement("a");we.href=Ae,we.setAttribute("download",`relatorio_${J}_irv.csv`),we.click(),$t({title:"Download Iniciado",message:`Relatório de ${J} gerado.`,type:"success"})},Da=J=>{const Q=window.open("","_blank");if(!Q)return;const Z=new Date().toLocaleDateString("pt-BR"),Ae=`
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1e293b; padding: 40px; max-width: 1000px; margin: 0 auto; }
        .header { margin-bottom: 30px; border-bottom: 2px solid #312e81; padding-bottom: 15px; }
        h1 { color: #312e81; font-size: 24px; margin: 0; text-transform: uppercase; letter-spacing: -0.5px; }
        h2 { font-size: 14px; color: #64748b; font-weight: normal; margin-top: 5px; }
        table { width: 100%; border-collapse: collapse; font-size: 12px; margin-top: 10px; }
        th { background: #f1f5f9; text-align: left; padding: 10px 8px; font-weight: 700; text-transform: uppercase; color: #475569; border-bottom: 2px solid #cbd5e1; font-size: 11px; }
        td { padding: 10px 8px; border-bottom: 1px solid #e2e8f0; color: #334155; vertical-align: top; }
        tr:nth-child(even) { background-color: #f8fafc; }
        .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: right; font-size: 10px; color: #94a3b8; font-style: italic; }
        .tag { display: inline-block; padding: 2px 8px; border-radius: 99px; font-weight: 600; font-size: 10px; text-transform: uppercase; }
        .tag-blue { background: #eff6ff; color: #2563eb; }
        .tag-indigo { background: #eef2ff; color: #4f46e5; }
        .tag-gray { background: #f1f5f9; color: #64748b; }
        @media print {
          body { padding: 0; }
          .no-print { display: none; }
          table { page-break-inside: auto; }
          tr { page-break-inside: avoid; page-break-after: auto; }
        }
      </style>
    `;let we="",ne="",pe=!0;J==="members"?(we="Relatório Geral de Membros",pe=v.length>0,ne=`
        <thead>
          <tr>
            <th style="width: 25%">Nome</th>
            <th style="width: 20%">Contato</th>
            <th style="width: 15%">Aniversário</th>
            <th style="width: 25%">Célula</th>
            <th style="width: 15%">Função</th>
          </tr>
        </thead>
        <tbody>
          ${v.map(ue=>{var ht;return`
            <tr>
              <td><strong>${ue.name}</strong></td>
              <td>${ue.phone}</td>
              <td>${Qn(ue.birthday)}</td>
              <td>${((ht=V.find(On=>On.id===ue.cellId))==null?void 0:ht.name)||"-"}</td>
              <td><span class="tag tag-indigo">${ue.role}</span></td>
            </tr>
          `}).join("")}
        </tbody>
      `):J==="cells"?(we="Relatório de Células",pe=V.length>0,ne=`
        <thead>
          <tr>
            <th style="width: 25%">Nome da Célula</th>
            <th style="width: 25%">Liderança</th>
            <th style="width: 25%">Endereço</th>
            <th style="width: 15%">Dia e Hora</th>
            <th style="width: 10%">Tipo</th>
          </tr>
        </thead>
        <tbody>
          ${V.map(ue=>`
            <tr>
              <td><strong>${ue.name}</strong></td>
              <td>Líder: ${ue.leader}<br/><span style="color:#94a3b8; font-size:10px">Co: ${ue.coLeader||"-"}</span></td>
              <td>${ue.address}</td>
              <td>${ue.meetingDay} às ${ue.meetingTime}</td>
              <td><span class="tag tag-gray">${ue.meetingType}</span></td>
            </tr>
          `).join("")}
        </tbody>
      `):J==="leaders"?(we="Relatório de Líderes",pe=ve.length>0,ne=`
        <thead>
          <tr>
            <th style="width: 25%">Nome</th>
            <th style="width: 20%">Contato</th>
            <th style="width: 15%">Aniversário</th>
            <th style="width: 25%">Ministério</th>
            <th style="width: 15%">Cargo</th>
          </tr>
        </thead>
        <tbody>
          ${ve.map(ue=>{var ht;return`
            <tr>
              <td><strong>${ue.name}</strong></td>
              <td>${ue.phone}</td>
              <td>${Qn(ue.birthday)}</td>
              <td>${((ht=xt.find(On=>On.id===ue.ministryId))==null?void 0:ht.name)||"-"}</td>
              <td><span class="tag tag-blue">${ue.role}</span></td>
            </tr>
          `}).join("")}
        </tbody>
      `):J==="ministries"?(we="Relatório de Ministérios",pe=xt.length>0,ne=`
        <thead>
          <tr>
            <th style="width: 30%">Departamento</th>
            <th style="width: 30%">Líder Responsável</th>
            <th style="width: 40%">Descrição</th>
          </tr>
        </thead>
        <tbody>
          ${xt.map(ue=>{var ht;return`
            <tr>
              <td><strong>${ue.name}</strong></td>
              <td>${((ht=ve.find(On=>On.id===ue.leaderId))==null?void 0:ht.name)||'<span style="color:#cbd5e1">VAGO</span>'}</td>
              <td>${ue.description}</td>
            </tr>
          `}).join("")}
        </tbody>
      `):J==="announcements"&&(we="Relatório de Avisos",pe=j.length>0,ne=`
        <thead>
          <tr>
            <th style="width: 15%">Data</th>
            <th style="width: 15%">Categoria</th>
            <th style="width: 25%">Título</th>
            <th style="width: 45%">Conteúdo</th>
          </tr>
        </thead>
        <tbody>
          ${j.map(ue=>`
            <tr>
              <td>${ue.date}</td>
              <td><span class="tag tag-blue">${ue.category}</span></td>
              <td><strong>${ue.title}</strong></td>
              <td>${ue.content}</td>
            </tr>
          `).join("")}
        </tbody>
      `);const Me=`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Relatório - Liderança IRV</title>
        ${Ae}
      </head>
      <body>
        <div class="header">
          <h1>${we}</h1>
          <h2>Gerado em ${Z} | Sistema Liderança IRV</h2>
        </div>
        
        ${pe?`<table>${ne}</table>`:'<div style="text-align:center; padding: 40px; color: #94a3b8; background: #f8fafc; border-radius: 8px;">Nenhum registro encontrado para este relatório.</div>'}
        
        <div class="footer">
          Documento gerado automaticamente pelo Sistema de Gestão Liderança IRV.<br>
          Uso interno exclusivo da liderança.
        </div>
        
        <script>
          // Aguarda o carregamento para imprimir e fecha a janela (opcional)
          window.onload = function() { 
            setTimeout(function() {
              window.print();
            }, 500); 
          }
        <\/script>
      </body>
      </html>
    `;Q.document.write(Me),Q.document.close()},Yn=async(J,Q)=>{const Z=ic(J);if(Z){Ys(!0);try{let Ae={...Q};if(J===oe.STUDIES){if(vr){const we=URL.createObjectURL(vr);Ae={...Ae,pdfUrl:we,pdfName:vr.name}}else if($){const we=_.find(ne=>ne.id===$);we&&(Ae.pdfUrl=we.pdfUrl||"",Ae.pdfName=we.pdfName||"")}}$?(await Gc.collection(Z).doc($).update(Ae),$t({title:"Atualizado",message:"Registro salvo com sucesso.",type:"success"})):(await Gc.collection(Z).add(Ae),$t({title:"Criado",message:"Novo registro adicionado.",type:"success"})),ae(null),de(!1),Yr(null)}catch(Ae){console.error("Erro ao salvar:",Ae),$t({title:"Erro",message:"Não foi possível salvar no banco de dados.",type:"alert"})}finally{Ys(!1)}}},lf=async()=>{if(!fn)return;const{view:J,id:Q}=fn,Z=ic(J);if(Z)try{await Gc.collection(Z).doc(Q).delete(),$t({title:"Removido",message:"Registro excluído do banco de dados.",type:"alert"})}catch(Ae){console.error("Erro ao deletar:",Ae),$t({title:"Erro",message:"Falha ao excluir o registro.",type:"alert"})}at(null)},Va=()=>{var Ae,we,ne,pe,Me,ue,ht,On,_t,Oa,Xr,Zr,oc,ac,Er,lc,uc,Xi,La,Js,Zi,Ln,Ma,ja,Xs,Zs,Fa,Ua,cc,es,za,eo,ei,Jn;const J="bg-white p-6 rounded-3xl shadow-xl border-2 border-indigo-100 animate-in zoom-in-95 mb-8",Q="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-indigo-400 text-sm transition-all",Z="block text-xs font-black text-slate-400 uppercase mb-2 tracking-[0.1em]";switch(b){case oe.CELL_REGISTRY:return h.jsxs("div",{className:"space-y-6",children:[h.jsxs("header",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8",children:[h.jsxs("div",{children:[h.jsx("h2",{className:"text-3xl font-black text-slate-900 tracking-tight",children:"Células IRV"}),h.jsx("p",{className:"text-slate-500 font-medium",children:"Gestão estratégica das comunidades."})]}),h.jsxs("button",{type:"button",onClick:()=>{ae(null),de(!0)},className:"bg-indigo-600 text-white px-6 py-3.5 rounded-2xl font-black flex items-center gap-2 hover:bg-indigo-700 shadow-xl transition-all w-full md:w-auto justify-center",children:[h.jsx(oo,{size:20})," Nova Célula"]})]}),(ye||$)&&h.jsxs("form",{className:J,onSubmit:R=>{R.preventDefault();const Se=new FormData(R.currentTarget);Yn(oe.CELL_REGISTRY,Object.fromEntries(Se))},children:[" ",h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[" ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Nome da Célula"})," ",h.jsx("input",{name:"name",required:!0,className:Q,defaultValue:(Ae=V.find(R=>R.id===$))==null?void 0:Ae.name})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Líder"})," ",h.jsx("input",{name:"leader",required:!0,className:Q,defaultValue:(we=V.find(R=>R.id===$))==null?void 0:we.leader})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Co-Líder"})," ",h.jsx("input",{name:"coLeader",className:Q,defaultValue:(ne=V.find(R=>R.id===$))==null?void 0:ne.coLeader,placeholder:"Opcional"})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Endereço ou Link Digital"})," ",h.jsx("input",{name:"address",required:!0,className:Q,defaultValue:(pe=V.find(R=>R.id===$))==null?void 0:pe.address})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Dia"})," ",h.jsxs("select",{name:"meetingDay",className:Q,defaultValue:(Me=V.find(R=>R.id===$))==null?void 0:Me.meetingDay,children:[" ",h.jsx("option",{children:"Segunda-feira"})," ",h.jsx("option",{children:"Terça-feira"})," ",h.jsx("option",{children:"Quarta-feira"})," ",h.jsx("option",{children:"Quinta-feira"})," ",h.jsx("option",{children:"Sexta-feira"})," ",h.jsx("option",{children:"Sábado"})," ",h.jsx("option",{children:"Domingo"})," "]})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Hora"})," ",h.jsx("input",{name:"meetingTime",type:"time",required:!0,className:Q,defaultValue:(ue=V.find(R=>R.id===$))==null?void 0:ue.meetingTime})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Modalidade"})," ",h.jsxs("select",{name:"meetingType",className:Q,defaultValue:(ht=V.find(R=>R.id===$))==null?void 0:ht.meetingType,children:[" ",h.jsx("option",{value:"Presencial",children:"Presencial"})," ",h.jsx("option",{value:"Online",children:"Online"})," "]})," "]})," "]})," ",h.jsxs("div",{className:"flex justify-end gap-3 mt-10",children:[" ",h.jsx("button",{type:"button",onClick:()=>{de(!1),ae(null)},className:"px-6 py-3.5 font-bold text-slate-400",children:"Cancelar"})," ",h.jsxs("button",{type:"submit",disabled:lt,className:"bg-indigo-600 text-white px-10 py-3.5 rounded-2xl font-black shadow-lg flex items-center gap-2",children:[" ",lt&&h.jsx(Uf,{className:"animate-spin",size:16})," Salvar Célula "]})," "]})," "]}),h.jsxs("div",{className:"bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-sm",children:[" ",h.jsxs("div",{className:"w-full",children:[" ",h.jsxs("table",{className:"w-full text-left border-collapse",children:[" ",h.jsxs("thead",{className:"bg-slate-50 border-b border-slate-100",children:[" ",h.jsxs("tr",{children:[" ",h.jsx("th",{className:"px-4 py-3 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Célula"})," ",h.jsx("th",{className:"px-4 py-3 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Liderança"})," ",h.jsx("th",{className:"px-4 py-3 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Local/Horário"})," ",h.jsx("th",{className:"px-4 py-3 text-xs font-black text-slate-400 uppercase tracking-widest text-right",children:"Ações"})," "]})," "]})," ",h.jsxs("tbody",{className:"divide-y divide-slate-50",children:[" ",V.length===0?h.jsx("tr",{children:h.jsx("td",{colSpan:4,className:"p-10 text-center text-slate-300 font-black italic",children:"Nenhuma célula cadastrada."})}):V.map(R=>h.jsxs("tr",{className:"hover:bg-slate-50/50 transition-colors",children:[" ",h.jsxs("td",{className:"px-4 py-3 align-top",children:[" ",h.jsx("div",{className:"font-black text-slate-900 text-sm",children:R.name})," ",h.jsxs("span",{className:`mt-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wide inline-flex items-center gap-1 w-fit ${R.meetingType==="Online"?"bg-blue-50 text-blue-600":"bg-indigo-50 text-indigo-600"}`,children:[" ",R.meetingType==="Online"?h.jsx(rP,{size:10}):h.jsx(tm,{size:10})," ",R.meetingType," "]})," "]})," ",h.jsxs("td",{className:"px-4 py-3 align-top",children:[" ",h.jsx("div",{className:"text-xs font-bold text-indigo-600",children:R.leader})," ",R.coLeader&&h.jsxs("div",{className:"text-xs font-medium text-slate-400 mt-0.5",children:["Co: ",R.coLeader]})," "]})," ",h.jsxs("td",{className:"px-4 py-3 align-top",children:[" ",h.jsxs("div",{className:"flex flex-col gap-1 text-xs font-medium text-slate-500",children:[" ",h.jsxs("div",{className:"flex items-start gap-1",children:[h.jsx(Zb,{size:12,className:"text-slate-400 shrink-0 mt-0.5"})," ",h.jsx("span",{className:"whitespace-normal leading-tight",children:R.address})]})," ",h.jsxs("div",{className:"flex items-center gap-1",children:[h.jsx(Bb,{size:12,className:"text-slate-400 shrink-0"})," ",h.jsxs("span",{children:[R.meetingDay," às ",R.meetingTime]})]})," "]})," "]})," ",h.jsxs("td",{className:"px-4 py-3 align-top text-right",children:[" ",h.jsxs("div",{className:"flex justify-end gap-1",children:[" ",h.jsx("button",{type:"button",onClick:()=>ae(R.id),className:"p-2 text-slate-300 hover:text-indigo-600 transition-colors",children:h.jsx(ii,{size:16})})," ",h.jsx("button",{type:"button",onClick:()=>at({view:oe.CELL_REGISTRY,id:R.id}),className:"p-2 text-slate-300 hover:text-red-500 transition-colors",children:h.jsx(si,{size:16})})," "]})," "]})," "]},R.id))," "]})," "]})," "]})," "]})]});case oe.CELL_MEMBERS:return h.jsxs("div",{className:"space-y-6",children:[" ",h.jsxs("header",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8",children:[" ",h.jsxs("div",{children:[" ",h.jsx("h2",{className:"text-3xl font-black text-slate-900",children:"Membros da Célula"})," ",h.jsx("p",{className:"text-slate-500 font-medium",children:"Nossa família em crescimento espiritual."})," "]})," ",h.jsxs("div",{className:"flex gap-2 w-full md:w-auto",children:[" ",h.jsxs("div",{className:"relative flex-1 md:w-64",children:[" ",h.jsx(Hb,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400",size:16})," ",h.jsxs("select",{value:Hn,onChange:R=>tc(R.target.value),className:`${Q} !pl-10 !py-2.5 !text-xs !font-bold !uppercase`,children:[" ",h.jsx("option",{value:"all",children:"Todas as Células"})," ",V.map(R=>h.jsx("option",{value:R.id,children:R.name},R.id))," "]})," "]})," ",h.jsxs("button",{type:"button",onClick:()=>{ae(null),de(!0)},className:"bg-emerald-600 text-white px-6 py-3 rounded-2xl font-black flex items-center gap-2 hover:bg-emerald-700 shadow-xl transition-all shrink-0",children:[" ",h.jsx(nP,{size:20})," Novo Membro "]})," "]})," "]})," ",h.jsxs("div",{className:"bg-emerald-50 text-emerald-700 px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest flex justify-between items-center",children:[" ",h.jsxs("span",{children:["Filtro Ativo: ",Hn==="all"?"Todos os Membros":(On=V.find(R=>R.id===Hn))==null?void 0:On.name]})," ",h.jsxs("span",{className:"opacity-60",children:[Ir.length," registros"]})," "]})," ",(ye||$)&&h.jsxs("form",{className:`${J} border-emerald-100`,onSubmit:R=>{var St;R.preventDefault();const Se=new FormData(R.currentTarget);Yn(oe.CELL_MEMBERS,{...Object.fromEntries(Se),joinedAt:$?(St=v.find(Xn=>Xn.id===$))==null?void 0:St.joinedAt:new Date().toLocaleDateString()})},children:[" ",h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[" ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Nome do Membro"})," ",h.jsx("input",{name:"name",required:!0,className:Q,defaultValue:(_t=v.find(R=>R.id===$))==null?void 0:_t.name})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Telefone"})," ",h.jsx("input",{name:"phone",required:!0,className:Q,defaultValue:(Oa=v.find(R=>R.id===$))==null?void 0:Oa.phone})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Aniversário"})," ",h.jsx("input",{name:"birthday",type:"date",required:!0,className:Q,defaultValue:(Xr=v.find(R=>R.id===$))==null?void 0:Xr.birthday})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Vínculo de Célula"})," ",h.jsxs("select",{name:"cellId",className:Q,defaultValue:(Zr=v.find(R=>R.id===$))==null?void 0:Zr.cellId,children:[" ",V.map(R=>h.jsx("option",{value:R.id,children:R.name},R.id))," "]})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Função / Papel"})," ",h.jsxs("select",{name:"role",className:Q,defaultValue:(oc=v.find(R=>R.id===$))==null?void 0:oc.role,children:[" ",h.jsx("option",{value:"Membro",children:"Membro"})," ",h.jsx("option",{value:"Líder",children:"Líder de Célula"})," ",h.jsx("option",{value:"Co-Líder",children:"Auxiliar / Co-Líder"})," ",h.jsx("option",{value:"Visitante",children:"Visitante"})," "]})," "]})," "]})," ",h.jsxs("div",{className:"flex justify-end gap-3 mt-10",children:[" ",h.jsx("button",{type:"button",onClick:()=>{de(!1),ae(null)},className:"px-6 py-3.5 font-bold text-slate-400",children:"Cancelar"})," ",h.jsxs("button",{type:"submit",disabled:lt,className:"bg-emerald-600 text-white px-10 py-3.5 rounded-2xl font-black",children:[" ",lt?"Salvando...":"Salvar Membro"," "]})," "]})," "]})," ",h.jsxs("div",{className:"bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-sm",children:[" ",h.jsxs("div",{className:"w-full",children:[" ",h.jsxs("table",{className:"w-full text-left",children:[" ",h.jsxs("thead",{className:"bg-slate-50 border-b border-slate-100",children:[" ",h.jsxs("tr",{children:[" ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Nome do Membro"})," ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Célula e Cargo"})," ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest text-right",children:"Ações"})," "]})," "]})," ",h.jsxs("tbody",{className:"divide-y divide-slate-50",children:[" ",Ir.length===0?h.jsx("tr",{children:h.jsx("td",{colSpan:3,className:"p-20 text-center text-slate-300 font-black italic uppercase",children:"Nenhum registro nesta categoria"})}):Ir.map(R=>{var Se;return h.jsxs("tr",{className:"hover:bg-slate-50/50 transition-colors",children:[" ",h.jsxs("td",{className:"px-8 py-6",children:[" ",h.jsx("div",{className:"font-black text-slate-900 text-lg",children:R.name})," ",h.jsxs("div",{className:"text-[11px] text-slate-400 flex gap-4 mt-1 font-bold",children:[" ",h.jsxs("span",{children:["📱 ",R.phone]})," ",h.jsxs("span",{children:["🎂 ",Qn(R.birthday)]})," "]})," "]})," ",h.jsxs("td",{className:"px-8 py-6",children:[" ",h.jsxs("div",{className:"flex flex-col gap-1.5",children:[" ",h.jsxs("span",{className:"text-xs font-black text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-xl w-fit",children:[" ",((Se=V.find(St=>St.id===R.cellId))==null?void 0:Se.name)||"N/A"," "]})," ",h.jsx("span",{className:"text-[10px] font-black text-slate-400 ml-2 uppercase tracking-widest",children:R.role})," "]})," "]})," ",h.jsxs("td",{className:"px-8 py-6 text-right",children:[" ",h.jsxs("div",{className:"flex justify-end gap-3",children:[" ",h.jsx("button",{type:"button",onClick:()=>ae(R.id),className:"p-3 text-slate-300 hover:text-indigo-600 transition-colors",children:h.jsx(ii,{size:18})})," ",h.jsx("button",{type:"button",onClick:()=>at({view:oe.CELL_MEMBERS,id:R.id}),className:"p-3 text-slate-300 hover:text-red-500 transition-colors",children:h.jsx(si,{size:18})})," "]})," "]})," "]},R.id)})," "]})," "]})," "]})," "]})," "]});case oe.LEADERS:return h.jsxs("div",{className:"space-y-6",children:[" ",h.jsxs("header",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8",children:[" ",h.jsxs("div",{children:[" ",h.jsx("h2",{className:"text-3xl font-black text-slate-900 tracking-tight",children:"Cadastro de Líderes"})," ",h.jsx("p",{className:"text-slate-500 font-medium",children:"Base central de oficiais da igreja."})," "]})," ",h.jsxs("button",{type:"button",onClick:()=>{ae(null),de(!0)},className:"bg-indigo-600 text-white px-6 py-3.5 rounded-2xl font-black flex items-center gap-2 shadow-xl hover:bg-indigo-700 transition-all",children:[" ",h.jsx(oo,{size:20})," Novo Líder "]})," "]})," ",(ye||$)&&h.jsxs("form",{className:J,onSubmit:R=>{var St;R.preventDefault();const Se=new FormData(R.currentTarget);Yn(oe.LEADERS,{...Object.fromEntries(Se),joinedAt:$?(St=ve.find(Xn=>Xn.id===$))==null?void 0:St.joinedAt:new Date().toLocaleDateString()})},children:[" ",h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[" ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Nome Completo"})," ",h.jsx("input",{name:"name",required:!0,className:Q,defaultValue:(ac=ve.find(R=>R.id===$))==null?void 0:ac.name})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Telefone"})," ",h.jsx("input",{name:"phone",required:!0,className:Q,defaultValue:(Er=ve.find(R=>R.id===$))==null?void 0:Er.phone})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Data de Aniversário"})," ",h.jsx("input",{name:"birthday",type:"date",required:!0,className:Q,defaultValue:(lc=ve.find(R=>R.id===$))==null?void 0:lc.birthday})," "]})," ",h.jsxs("div",{className:"md:col-span-1",children:[" ",h.jsx("label",{className:Z,children:"Função Hierárquica"})," ",h.jsx("input",{name:"role",required:!0,className:Q,defaultValue:(uc=ve.find(R=>R.id===$))==null?void 0:uc.role,placeholder:"Ex: Pastor, Diácono, Presbítero..."})," "]})," "]})," ",h.jsxs("div",{className:"flex justify-end gap-3 mt-10",children:[" ",h.jsx("button",{type:"button",onClick:()=>{de(!1),ae(null)},className:"px-6 py-3.5 font-bold text-slate-400",children:"Cancelar"})," ",h.jsxs("button",{type:"submit",disabled:lt,className:"bg-indigo-600 text-white px-10 py-3.5 rounded-2xl font-black shadow-lg",children:[" ",lt?"Salvando...":"Salvar Líder"," "]})," "]})," "]})," ",h.jsxs("div",{className:"bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-sm",children:[" ",h.jsxs("div",{className:"w-full",children:[" ",h.jsxs("table",{className:"w-full text-left",children:[" ",h.jsxs("thead",{className:"bg-slate-50 border-b border-slate-100",children:[" ",h.jsxs("tr",{children:[" ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Líder"})," ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Informações de Contato"})," ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest text-right",children:"Ações"})," "]})," "]})," ",h.jsxs("tbody",{className:"divide-y divide-slate-50",children:[" ",ve.length===0?h.jsx("tr",{children:h.jsx("td",{colSpan:3,className:"p-20 text-center text-slate-300 font-black italic",children:"Nenhum líder cadastrado no sistema."})}):ve.map(R=>h.jsxs("tr",{className:"hover:bg-slate-50/50 transition-colors",children:[" ",h.jsxs("td",{className:"px-8 py-6",children:[" ",h.jsx("div",{className:"font-black text-slate-900 text-lg",children:R.name})," ",h.jsx("span",{className:"text-[10px] font-black text-indigo-500 uppercase tracking-widest",children:R.role})," "]})," ",h.jsxs("td",{className:"px-8 py-6",children:[" ",h.jsxs("div",{className:"text-xs text-slate-400 font-bold flex flex-col gap-1",children:[" ",h.jsxs("span",{className:"flex items-center gap-2",children:["📱 ",R.phone]})," ",h.jsxs("span",{className:"flex items-center gap-2",children:["🎂 ",Qn(R.birthday)]})," "]})," "]})," ",h.jsxs("td",{className:"px-8 py-6 text-right",children:[" ",h.jsxs("div",{className:"flex justify-end gap-3",children:[" ",h.jsx("button",{type:"button",onClick:()=>ae(R.id),className:"p-3 text-slate-300 hover:text-indigo-600 transition-colors",children:h.jsx(ii,{size:18})})," ",h.jsx("button",{type:"button",onClick:()=>at({view:oe.LEADERS,id:R.id}),className:"p-3 text-slate-300 hover:text-red-500 transition-colors",children:h.jsx(si,{size:18})})," "]})," "]})," "]},R.id))," "]})," "]})," "]})," "]})," "]});case oe.MINISTRIES:return h.jsxs("div",{className:"space-y-6",children:[" ",h.jsxs("header",{className:"flex justify-between items-center mb-8",children:[" ",h.jsxs("div",{children:[" ",h.jsx("h2",{className:"text-3xl font-black text-slate-900 tracking-tight",children:"Gestão de Ministérios"})," ",h.jsx("p",{className:"text-slate-500 font-medium",children:"Defina departamentos e atribua líderes oficiais."})," "]})," ",h.jsxs("button",{type:"button",onClick:()=>{ae(null),de(!0)},className:"bg-indigo-600 text-white px-6 py-3.5 rounded-2xl font-black flex items-center gap-2 shadow-xl hover:bg-indigo-700 transition-all",children:[" ",h.jsx(oo,{size:20})," Adicionar Ministério "]})," "]})," ",(ye||$)&&h.jsxs("form",{className:J,onSubmit:R=>{R.preventDefault();const Se=new FormData(R.currentTarget);Yn(oe.MINISTRIES,Object.fromEntries(Se))},children:[" ",h.jsxs("div",{className:"space-y-6",children:[" ",h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[" ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Nome do Ministério"})," ",h.jsx("input",{name:"name",required:!0,className:Q,defaultValue:(Xi=xt.find(R=>R.id===$))==null?void 0:Xi.name,placeholder:"Ex: Louvor, Mídia, Infantil..."})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Líder Responsável"})," ",h.jsxs("select",{name:"leaderId",className:Q,defaultValue:(La=xt.find(R=>R.id===$))==null?void 0:La.leaderId,children:[" ",h.jsx("option",{value:"",children:"Selecione um líder cadastrado..."})," ",ve.length===0?h.jsx("option",{value:"",disabled:!0,children:"Nenhum líder cadastrado"}):ve.map(R=>h.jsx("option",{value:R.id,children:R.name},R.id))," "]})," "]})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Descrição"})," ",h.jsx("textarea",{name:"description",required:!0,className:`${Q} h-32 rounded-3xl`,defaultValue:(Js=xt.find(R=>R.id===$))==null?void 0:Js.description,placeholder:"Metas do departamento..."})," "]})," "]})," ",h.jsxs("div",{className:"flex justify-end gap-3 mt-10",children:[" ",h.jsx("button",{type:"button",onClick:()=>{de(!1),ae(null)},className:"px-6 py-3.5 font-bold text-slate-400",children:"Cancelar"})," ",h.jsxs("button",{type:"submit",disabled:lt,className:"bg-indigo-600 text-white px-10 py-3.5 rounded-2xl font-black shadow-lg",children:[" ",lt?"Salvando...":"Salvar Ministério"," "]})," "]})," "]})," ",h.jsxs("div",{className:"bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-sm",children:[" ",h.jsxs("table",{className:"w-full text-left",children:[" ",h.jsxs("thead",{className:"bg-slate-50 border-b border-slate-100",children:[" ",h.jsxs("tr",{children:[" ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Departamento"})," ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Líder Responsável"})," ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest text-right",children:"Gerenciar"})," "]})," "]})," ",h.jsxs("tbody",{className:"divide-y divide-slate-50",children:[" ",xt.length===0?h.jsx("tr",{children:h.jsx("td",{colSpan:3,className:"p-20 text-center text-slate-300 font-black italic uppercase",children:"Nenhum ministério configurado"})}):xt.map(R=>{var Se;return h.jsxs("tr",{className:"hover:bg-slate-50/50 transition-colors",children:[" ",h.jsxs("td",{className:"px-8 py-6",children:[" ",h.jsxs("div",{className:"font-black text-slate-900 text-lg flex items-center gap-3",children:[" ",h.jsx(Zp,{className:"text-indigo-600",size:18})," ",R.name," "]})," "]})," ",h.jsxs("td",{className:"px-8 py-6",children:[" ",h.jsxs("div",{className:"flex items-center gap-2 text-sm font-bold text-indigo-600 bg-indigo-50 w-fit px-4 py-1.5 rounded-full",children:[" ",h.jsx(rm,{size:14})," ",((Se=ve.find(St=>St.id===R.leaderId))==null?void 0:Se.name)||h.jsx("span",{className:"text-slate-300",children:"LÍDER NÃO VINCULADO"})," "]})," "]})," ",h.jsxs("td",{className:"px-8 py-6 text-right",children:[" ",h.jsxs("div",{className:"flex justify-end gap-3",children:[" ",h.jsx("button",{type:"button",onClick:()=>ae(R.id),className:"p-3 text-slate-300 hover:text-indigo-600 transition-colors",children:h.jsx(ii,{size:18})})," ",h.jsx("button",{type:"button",onClick:()=>at({view:oe.MINISTRIES,id:R.id}),className:"p-3 text-slate-300 hover:text-red-500 transition-colors",children:h.jsx(si,{size:18})})," "]})," "]})," "]},R.id)})," "]})," "]})," "]})," "]});case oe.BIRTHDAYS:{const R=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],Se=new Date,St=Se.getMonth(),Xn=Se.getDate(),Tr=je=>{if(!je)return 0;const At=je.split("-");return parseInt(At[2],10)},to=[...v.map(je=>{var At;return{...je,type:"Membro",origin:((At=V.find(xr=>xr.id===je.cellId))==null?void 0:At.name)||"Sem Célula"}}),...ve.map(je=>{var At;return{...je,type:"Líder",origin:((At=xt.find(xr=>xr.id===je.ministryId))==null?void 0:At.name)||"Sem Ministério"}})].filter(je=>{if(!je.birthday)return!1;const At=je.birthday.split("-");return At.length!==3?!1:parseInt(At[1],10)-1===St}).sort((je,At)=>Tr(je.birthday)-Tr(At.birthday));return h.jsxs("div",{className:"space-y-8",children:[" ",h.jsxs("header",{className:"text-center mb-10",children:[" ",h.jsxs("div",{className:"inline-flex items-center justify-center p-4 bg-pink-50 text-pink-500 rounded-full mb-4 shadow-lg shadow-pink-100",children:[" ",h.jsx(em,{size:40})," "]})," ",h.jsxs("h2",{className:"text-4xl font-black text-slate-900 tracking-tight",children:["Aniversariantes de ",R[St]]})," ",h.jsx("p",{className:"text-slate-500 font-medium mt-2",children:"Celebre a vida da nossa comunidade!"})," "]})," ",h.jsxs("div",{className:"bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-sm",children:[" ",h.jsxs("div",{className:"w-full",children:[" ",h.jsxs("table",{className:"w-full text-left",children:[" ",h.jsxs("thead",{className:"bg-slate-50 border-b border-slate-100",children:[" ",h.jsxs("tr",{children:[" ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest text-center w-24",children:"Dia"})," ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Aniversariante"})," ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Tipo"})," ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest text-right",children:"Ação"})," "]})," "]})," ",h.jsxs("tbody",{className:"divide-y divide-slate-50",children:[" ",to.length===0?h.jsx("tr",{children:h.jsx("td",{colSpan:4,className:"p-20 text-center text-slate-300 font-black italic uppercase",children:"Nenhum aniversariante neste mês"})}):to.map((je,At)=>{const xr=Tr(je.birthday),$a=xr===Xn;return h.jsxs("tr",{className:`transition-colors ${$a?"bg-pink-50/50":"hover:bg-slate-50/50"}`,children:[" ",h.jsxs("td",{className:"px-8 py-6 text-center",children:[" ",h.jsxs("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center font-black mx-auto ${$a?"bg-pink-500 text-white shadow-lg shadow-pink-300":"bg-slate-100 text-slate-500"}`,children:[" ",xr," "]})," "]})," ",h.jsxs("td",{className:"px-8 py-6",children:[" ",h.jsx("div",{className:"font-black text-slate-900 text-lg",children:je.name})," ",$a&&h.jsx("span",{className:"text-[10px] font-black text-pink-500 uppercase tracking-widest animate-pulse",children:"É Hoje! 🎉"})," "]})," ",h.jsxs("td",{className:"px-8 py-6",children:[" ",h.jsxs("div",{className:"text-sm font-medium text-slate-500",children:[je.type," • ",je.origin]})," "]})," ",h.jsxs("td",{className:"px-8 py-6 text-right",children:[" ",h.jsxs("a",{href:`https://wa.me/55${je.phone.replace(/\D/g,"")}?text=Olá ${je.name}, parabéns pelo seu aniversário!`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-xl text-xs font-black uppercase hover:bg-emerald-100 transition-colors",children:[" ",h.jsx(eP,{size:16})," Parabenizar "]})," "]})," "]},`${je.id}-${At}`)})," "]})," "]})," "]})," "]})," "]})}case oe.REPORTS:const Ba=[{id:"members",label:"Membros",desc:"Lista completa de membros e visitantes",icon:h.jsx(rT,{size:20})},{id:"cells",label:"Células",desc:"Registro de encontros e locais",icon:h.jsx(tm,{size:20})},{id:"leaders",label:"Líderes",desc:"Cadastro de liderança oficial",icon:h.jsx(rm,{size:20})},{id:"ministries",label:"Ministérios",desc:"Departamentos e responsáveis",icon:h.jsx(Zp,{size:20})},{id:"announcements",label:"Avisos",desc:"Histórico de avisos e eventos",icon:h.jsx(Xp,{size:20})}];return h.jsxs("div",{className:"space-y-8",children:[" ",h.jsxs("header",{className:"text-center",children:[" ",h.jsx("h2",{className:"text-4xl font-black text-slate-900 mb-2 tracking-tight",children:"Relatórios da Liderança"})," ",h.jsx("p",{className:"text-slate-500 font-medium",children:"Dados consolidados."})," "]})," ",h.jsxs("div",{className:"bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-sm",children:[" ",h.jsxs("table",{className:"w-full text-left",children:[" ",h.jsxs("thead",{className:"bg-slate-50 border-b border-slate-100",children:[" ",h.jsxs("tr",{children:[" ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Tipo"})," ",h.jsx("th",{className:"px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Descrição"})," ",h.jsx("th",{className:"px-4 py-5 text-xs font-black text-slate-400 uppercase tracking-widest text-right",children:"Ações"})," "]})," "]})," ",h.jsxs("tbody",{className:"divide-y divide-slate-50",children:[" ",Ba.map(R=>h.jsxs("tr",{className:"hover:bg-slate-50/50 transition-colors",children:[" ",h.jsxs("td",{className:"px-8 py-6",children:[" ",h.jsxs("div",{className:"flex items-center gap-4",children:[" ",h.jsx("div",{className:"w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center",children:R.icon})," ",h.jsx("span",{className:"font-black text-slate-900 text-lg",children:R.label})," "]})," "]})," ",h.jsx("td",{className:"px-8 py-6",children:h.jsx("span",{className:"text-sm font-medium text-slate-500",children:R.desc})})," ",h.jsxs("td",{className:"px-4 py-6 text-right whitespace-nowrap",children:[" ",h.jsxs("div",{className:"flex justify-end gap-2",children:[" ",h.jsxs("button",{onClick:()=>sc(R.id),className:"flex items-center gap-2 px-3 py-2 bg-emerald-50 text-emerald-600 rounded-xl font-bold hover:bg-emerald-100 transition-colors text-xs uppercase whitespace-nowrap",children:[h.jsx(Kb,{size:16})," Excel"]})," ",h.jsxs("button",{onClick:()=>Da(R.id),className:"flex items-center gap-2 px-3 py-2 bg-red-50 text-red-600 rounded-xl font-bold hover:bg-red-100 transition-colors text-xs uppercase whitespace-nowrap",children:[h.jsx(tT,{size:16})," PDF"]})," "]})," "]})," "]},R.id))," "]})," "]})," "]})," "]});case oe.STUDIES:return h.jsxs("div",{className:"space-y-6",children:[" ",h.jsxs("header",{className:"flex justify-between items-center mb-8",children:[" ",h.jsxs("div",{children:[" ",h.jsx("h2",{className:"text-3xl font-black text-slate-900 tracking-tight",children:"Estudos Bíblicos"})," ",h.jsx("p",{className:"text-slate-500 font-medium",children:"Material de apoio em PDF."})," "]})," ",h.jsxs("button",{type:"button",onClick:()=>{ae(null),de(!0),Yr(null)},className:"bg-indigo-600 text-white px-6 py-3.5 rounded-2xl font-black flex items-center gap-2 shadow-xl hover:bg-indigo-700 transition-all",children:[" ",h.jsx(oo,{size:20})," Novo Estudo "]})," "]})," ",(ye||$)&&h.jsxs("form",{className:J,onSubmit:R=>{R.preventDefault();const Se=new FormData(R.currentTarget);Yn(oe.STUDIES,Object.fromEntries(Se))},children:[" ",h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[" ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Título do Estudo"})," ",h.jsx("input",{name:"title",ref:of,required:!0,className:Q,defaultValue:(Zi=_.find(R=>R.id===$))==null?void 0:Zi.title})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Data do Estudo"})," ",h.jsx("input",{name:"date",type:"date",required:!0,className:Q,defaultValue:(Ln=_.find(R=>R.id===$))==null?void 0:Ln.date})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Referência Bíblica"})," ",h.jsx("input",{name:"reference",ref:af,required:!0,className:Q,defaultValue:(Ma=_.find(R=>R.id===$))==null?void 0:Ma.reference,placeholder:"Ex: João 3:16"})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Sugestão de Louvor"})," ",h.jsx("input",{name:"suggestedPraise",className:Q,defaultValue:(ja=_.find(R=>R.id===$))==null?void 0:ja.suggestedPraise,placeholder:"Ex: Bondade de Deus"})," "]})," ",h.jsxs("div",{className:"md:col-span-2",children:[" ",h.jsx("label",{className:Z,children:"Roteiro / Resumo do Estudo"})," ",h.jsx("textarea",{name:"summary",ref:ec,className:`${Q} h-32 rounded-3xl`,defaultValue:(Xs=_.find(R=>R.id===$))==null?void 0:Xs.summary,placeholder:"Digite o roteiro do estudo..."})," "]})," ",h.jsxs("div",{className:"md:col-span-2",children:[" ",h.jsx("label",{className:Z,children:"Arquivo PDF (Opcional)"})," ",h.jsxs("div",{className:"relative",children:[" ",h.jsx("input",{type:"file",accept:"application/pdf",ref:Zu,onChange:R=>{R.target.files&&R.target.files[0]&&Yr(R.target.files[0])},className:"hidden",id:"pdf-upload"})," ",h.jsxs("label",{htmlFor:"pdf-upload",className:"w-full bg-slate-50 border border-slate-200 border-dashed rounded-2xl px-4 py-3.5 flex items-center justify-center gap-2 cursor-pointer hover:bg-slate-100 transition-colors text-sm font-medium text-slate-500",children:[" ",h.jsx(tP,{size:18})," ",vr?vr.name:$&&((Zs=_.find(R=>R.id===$))!=null&&Zs.pdfName)?(Fa=_.find(R=>R.id===$))==null?void 0:Fa.pdfName:"Clique para selecionar PDF"," "]})," "]})," "]})," "]})," ",h.jsxs("div",{className:"flex justify-end gap-3 mt-10",children:[" ",h.jsx("button",{type:"button",onClick:()=>{de(!1),ae(null),Yr(null)},className:"px-6 py-3.5 font-bold text-slate-400",children:"Cancelar"})," ",h.jsxs("button",{type:"submit",disabled:lt,className:"bg-indigo-600 text-white px-10 py-3.5 rounded-2xl font-black shadow-lg",children:[" ",lt?"Salvando...":"Salvar Estudo"," "]})," "]})," "]},$||"new")," ",h.jsxs("div",{className:"bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-sm",children:[" ",h.jsxs("div",{className:"w-full",children:[" ",h.jsxs("table",{className:"w-full text-left border-collapse",children:[" ",h.jsxs("thead",{className:"bg-slate-50 border-b border-slate-100",children:[" ",h.jsxs("tr",{children:[" ",h.jsx("th",{className:"px-4 py-3 text-xs font-black text-slate-400 uppercase tracking-widest w-24",children:"Data"})," ",h.jsx("th",{className:"px-4 py-3 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Estudo"})," ",h.jsx("th",{className:"px-4 py-3 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Ref."})," ",h.jsx("th",{className:"px-4 py-3 text-xs font-black text-slate-400 uppercase tracking-widest",children:"Louvor"})," ",h.jsx("th",{className:"px-4 py-3 text-xs font-black text-slate-400 uppercase tracking-widest text-right",children:"Ações"})," "]})," "]})," ",h.jsxs("tbody",{className:"divide-y divide-slate-50",children:[" ",_.length===0?h.jsx("tr",{children:h.jsx("td",{colSpan:5,className:"p-10 text-center text-slate-300 font-black italic",children:"Nenhum estudo cadastrado."})}):_.map(R=>h.jsxs("tr",{className:"hover:bg-slate-50/50 transition-colors",children:[" ",h.jsxs("td",{className:"px-4 py-3 align-top",children:[" ",h.jsx("span",{className:"text-xs font-bold text-slate-400",children:Qn(R.date)})," "]})," ",h.jsxs("td",{className:"px-4 py-3 align-top",children:[" ",h.jsxs("div",{className:"font-black text-slate-900 text-sm flex items-center gap-2",children:[h.jsx(ZE,{size:14,className:"text-indigo-600 shrink-0"}),R.title]})," ",R.summary&&h.jsx("div",{className:"mt-1 text-[10px] text-slate-500 line-clamp-2 italic",children:R.summary})," ",R.pdfName&&h.jsx("div",{className:"mt-1 flex items-center gap-1 text-[10px] text-red-500 font-bold bg-red-50 w-fit px-2 py-0.5 rounded",children:"PDF ANEXADO"})," "]})," ",h.jsxs("td",{className:"px-4 py-3 align-top",children:[" ",h.jsx("div",{className:"text-xs font-bold text-indigo-500 bg-indigo-50 w-fit px-2 py-0.5 rounded italic",children:R.reference})," "]})," ",h.jsxs("td",{className:"px-4 py-3 align-top",children:[" ",h.jsxs("div",{className:"flex items-center gap-1 text-xs font-medium text-slate-500",children:[h.jsx(nm,{size:12,className:"text-slate-400"})," ",R.suggestedPraise||"-"]})," "]})," ",h.jsxs("td",{className:"px-4 py-3 align-top text-right",children:[" ",h.jsxs("div",{className:"flex justify-end gap-1",children:[" ",R.pdfUrl?h.jsx("a",{href:R.pdfUrl,download:R.pdfName||"estudo.pdf",className:"p-2 text-emerald-600 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-all",title:"Baixar PDF",children:h.jsx(qb,{size:14})}):h.jsx("span",{className:"p-2 text-slate-300",title:"Sem PDF",children:h.jsx($b,{size:14})})," ",h.jsx("button",{type:"button",onClick:()=>ae(R.id),className:"p-2 text-slate-400 hover:text-indigo-600 bg-slate-50 rounded-xl transition-colors",children:h.jsx(ii,{size:14})})," ",h.jsx("button",{type:"button",onClick:()=>at({view:oe.STUDIES,id:R.id}),className:"p-2 text-slate-400 hover:text-red-500 bg-slate-50 rounded-xl transition-colors",children:h.jsx(si,{size:14})})," "]})," "]})," "]},R.id))," "]})," "]})," "]})," "]})," "]});case oe.ANNOUNCEMENTS:return h.jsxs("div",{className:"space-y-6",children:[" ",h.jsxs("header",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8",children:[" ",h.jsxs("div",{children:[" ",h.jsx("h2",{className:"text-3xl font-black text-slate-900 tracking-tight",children:"Quadro de Avisos"})," ",h.jsx("p",{className:"text-slate-500 font-medium",children:"Comunicação oficial."})," "]})," ",h.jsxs("div",{className:"flex flex-col md:flex-row gap-2 w-full md:w-auto",children:[" ",h.jsx("input",{type:"date",placeholder:"Filtrar data...",value:Jr,onChange:R=>rc(R.target.value),className:`${Q} !py-3.5 !w-full md:!w-48`})," ",h.jsxs("button",{type:"button",onClick:()=>{ae(null),de(!0)},className:"bg-indigo-600 text-white px-6 py-3.5 rounded-2xl font-black flex items-center justify-center gap-2 shadow-xl hover:bg-indigo-700 transition-all",children:[" ",h.jsx(oo,{size:20})," Novo Aviso "]})," "]})," "]})," ",(ye||$)&&h.jsxs("form",{className:J,onSubmit:R=>{R.preventDefault();const Se=new FormData(R.currentTarget);Yn(oe.ANNOUNCEMENTS,{...Object.fromEntries(Se),date:new Date().toLocaleDateString()})},children:[" ",h.jsxs("div",{className:"space-y-6",children:[" ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Título do Aviso"})," ",h.jsx("input",{name:"title",required:!0,className:Q,defaultValue:(Ua=j.find(R=>R.id===$))==null?void 0:Ua.title})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Categoria"})," ",h.jsxs("select",{name:"category",className:Q,defaultValue:(cc=j.find(R=>R.id===$))==null?void 0:cc.category,children:[" ",h.jsx("option",{value:"Aviso",children:"Aviso Geral"})," ",h.jsx("option",{value:"Evento",children:"Evento"})," ",h.jsx("option",{value:"Celebração",children:"Celebração"})," "]})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Conteúdo"})," ",h.jsx("textarea",{name:"content",required:!0,className:`${Q} h-32 rounded-3xl`,defaultValue:(es=j.find(R=>R.id===$))==null?void 0:es.content})," "]})," "]})," ",h.jsxs("div",{className:"flex justify-end gap-3 mt-10",children:[" ",h.jsx("button",{type:"button",onClick:()=>{de(!1),ae(null)},className:"px-6 py-3.5 font-bold text-slate-400",children:"Cancelar"})," ",h.jsxs("button",{type:"submit",disabled:lt,className:"bg-indigo-600 text-white px-10 py-3.5 rounded-2xl font-black shadow-lg",children:[" ",lt?"Salvando...":"Salvar Aviso"," "]})," "]})," "]})," ",h.jsxs("div",{className:"flex flex-col gap-3",children:[" ",Ca.length===0?h.jsx("div",{className:"p-20 text-center text-slate-300 font-black italic",children:"Nenhum aviso encontrado."}):Ca.map(R=>{const Se=R.date.split("/"),St=Se[0]||"DD",Xn=Se[1]||"MM",Tr=Se[2]||"YYYY";return h.jsxs("div",{className:"bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-4 hover:border-indigo-100 transition-all shadow-sm",children:[" ",h.jsxs("div",{className:"shrink-0 text-center w-16 p-2 bg-slate-50 rounded-xl border border-slate-100",children:[" ",h.jsxs("div",{className:"text-[10px] font-black uppercase text-slate-400",children:[Xn,"/",Tr]})," ",h.jsx("div",{className:"text-xl font-black text-slate-900",children:St})," "]})," ",h.jsxs("div",{className:"flex-1 min-w-0",children:[" ",h.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[" ",h.jsx("h3",{className:"font-black text-slate-900 text-lg truncate",children:R.title})," ",h.jsx("span",{className:`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wide shrink-0 ${R.category==="Evento"?"bg-emerald-50 text-emerald-600":R.category==="Celebração"?"bg-amber-50 text-amber-600":"bg-slate-100 text-slate-500"}`,children:R.category})," "]})," ",h.jsx("p",{className:"text-sm text-slate-500 line-clamp-1 truncate",children:R.content})," "]})," ",h.jsxs("div",{className:"flex gap-1 shrink-0",children:[" ",h.jsx("button",{onClick:()=>ba(R),className:"p-2 text-indigo-600 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-all",title:"Ver completo",children:h.jsx(Gb,{size:18})})," ",h.jsx("button",{onClick:()=>ae(R.id),className:"p-2 text-slate-300 hover:text-indigo-600 transition-colors",children:h.jsx(ii,{size:18})})," ",h.jsx("button",{onClick:()=>at({view:oe.ANNOUNCEMENTS,id:R.id}),className:"p-2 text-slate-300 hover:text-red-500 transition-colors",children:h.jsx(si,{size:18})})," "]})," "]},R.id)})," "]})," "]});case oe.PASTOR_WORD:return h.jsxs("div",{className:"space-y-6",children:[" ",h.jsxs("header",{className:"mb-8",children:[" ",h.jsx("h2",{className:"text-3xl font-black text-slate-900 tracking-tight",children:"Palavra Pastoral"})," ",h.jsx("p",{className:"text-slate-500 font-medium",children:"Compartilhe sua mensagem semanal."})," "]})," ",h.jsxs("div",{className:J,children:[" ",h.jsxs("h3",{className:"text-lg font-bold mb-4 flex items-center gap-2",children:[h.jsx(ii,{className:"text-indigo-500"})," Adicionar Nova Palavra"]})," ",h.jsxs("div",{className:"space-y-4",children:[" ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Tema / Título"})," ",h.jsx("input",{value:nt,onChange:R=>yt(R.target.value),className:Q,placeholder:"Ex: Esperança em tempos difíceis"})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Mensagem"})," ",h.jsx("textarea",{value:wr,onChange:R=>Na(R.target.value),className:`${Q} h-48 rounded-3xl mb-4`,placeholder:"Escreva sua mensagem aqui..."})," "]})," ",h.jsxs("div",{className:"flex justify-end",children:[" ",h.jsxs("button",{onClick:async()=>{!nt||!wr||(await Yn(oe.PASTOR_WORD,{theme:nt,content:wr,date:new Date().toLocaleDateString()}),Na(""),yt(""))},disabled:!nt||!wr||lt,className:"bg-emerald-600 text-white px-8 py-3 rounded-2xl font-black hover:bg-emerald-700 transition-all shadow-lg disabled:opacity-50",children:[" ",lt?"Enviando...":"Salvar Mensagem"," "]})," "]})," "]})," "]})," ",h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[" ",N.map(R=>h.jsxs("div",{className:"bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer group",onClick:()=>Sn(R),children:[" ",h.jsxs("div",{className:"flex justify-between items-start mb-4",children:[" ",h.jsx("span",{className:"text-xs font-bold text-slate-400",children:R.date})," ",h.jsx("button",{onClick:Se=>{Se.stopPropagation(),at({view:oe.PASTOR_WORD,id:R.id})},className:"text-slate-300 hover:text-red-500 transition-colors",children:h.jsx(si,{size:16})})," "]})," ",h.jsx("h4",{className:"font-black text-lg text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors",children:R.theme})," ",h.jsx("p",{className:"text-sm text-slate-500 line-clamp-3",children:R.content})," "]},R.id))," "]})," "]});case oe.MUSIC_PLAYER:return h.jsxs("div",{className:"space-y-6",children:[" ",h.jsxs("header",{className:"flex justify-between items-center mb-8",children:[" ",h.jsxs("div",{children:[" ",h.jsx("h2",{className:"text-3xl font-black text-slate-900 tracking-tight",children:"Repertório de Louvor"})," ",h.jsx("p",{className:"text-slate-500 font-medium",children:"Setlist e referências."})," "]})," ",h.jsxs("button",{type:"button",onClick:()=>{ae(null),de(!0)},className:"bg-indigo-600 text-white px-6 py-3.5 rounded-2xl font-black flex items-center gap-2 shadow-xl hover:bg-indigo-700 transition-all",children:[" ",h.jsx(oo,{size:20})," Nova Música "]})," "]})," ",(ye||$)&&h.jsxs("form",{className:J,onSubmit:R=>{R.preventDefault();const Se=new FormData(R.currentTarget);Yn(oe.MUSIC_PLAYER,Object.fromEntries(Se))},children:[" ",h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[" ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Título da Música"})," ",h.jsx("input",{name:"title",required:!0,className:Q,defaultValue:(za=T.find(R=>R.id===$))==null?void 0:za.title})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Artista / Banda"})," ",h.jsx("input",{name:"artist",required:!0,className:Q,defaultValue:(eo=T.find(R=>R.id===$))==null?void 0:eo.artist})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Link Spotify"})," ",h.jsx("input",{name:"spotifyUrl",className:Q,defaultValue:(ei=T.find(R=>R.id===$))==null?void 0:ei.spotifyUrl,placeholder:"https://open.spotify.com/..."})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("label",{className:Z,children:"Link YouTube"})," ",h.jsx("input",{name:"youtubeUrl",className:Q,defaultValue:(Jn=T.find(R=>R.id===$))==null?void 0:Jn.youtubeUrl,placeholder:"https://youtube.com/..."})," "]})," "]})," ",h.jsxs("div",{className:"flex justify-end gap-3 mt-10",children:[" ",h.jsx("button",{type:"button",onClick:()=>{de(!1),ae(null)},className:"px-6 py-3.5 font-bold text-slate-400",children:"Cancelar"})," ",h.jsxs("button",{type:"submit",disabled:lt,className:"bg-indigo-600 text-white px-10 py-3.5 rounded-2xl font-black shadow-lg",children:[" ",lt?"Salvando...":"Salvar Música"," "]})," "]})," "]})," ",h.jsxs("div",{className:"bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-sm",children:[" ",h.jsxs("div",{className:"divide-y divide-slate-50",children:[" ",T.length===0?h.jsx("div",{className:"p-20 text-center text-slate-300 font-black italic",children:"Nenhuma música cadastrada."}):T.map(R=>h.jsxs("div",{className:"p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors group",children:[" ",h.jsxs("div",{className:"flex items-center gap-4",children:[" ",h.jsxs("div",{className:"w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shadow-sm",children:[" ",h.jsx(nm,{size:20})," "]})," ",h.jsxs("div",{children:[" ",h.jsx("div",{className:"font-black text-slate-900 text-lg",children:R.title})," ",h.jsx("div",{className:"text-sm font-medium text-slate-500",children:R.artist})," "]})," "]})," ",h.jsxs("div",{className:"flex items-center gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity",children:[" ",R.spotifyUrl&&h.jsxs("a",{href:R.spotifyUrl,target:"_blank",rel:"noreferrer",className:"p-2 text-green-600 bg-green-50 rounded-xl hover:bg-green-100 transition-colors",title:"Abrir no Spotify",children:[" ",h.jsx(Wb,{size:18})," "]})," ",R.youtubeUrl&&h.jsxs("a",{href:R.youtubeUrl,target:"_blank",rel:"noreferrer",className:"p-2 text-red-600 bg-red-50 rounded-xl hover:bg-red-100 transition-colors",title:"Ver no YouTube",children:[" ",h.jsx(iP,{size:18})," "]})," ",h.jsx("div",{className:"w-px h-6 bg-slate-200 mx-2"})," ",h.jsx("button",{onClick:()=>ae(R.id),className:"p-2 text-slate-300 hover:text-indigo-600 transition-colors",children:h.jsx(ii,{size:18})})," ",h.jsx("button",{onClick:()=>at({view:oe.MUSIC_PLAYER,id:R.id}),className:"p-2 text-slate-300 hover:text-red-500 transition-colors",children:h.jsx(si,{size:18})})," "]})," "]},R.id))," "]})," "]})," "]})}};return t?h.jsx("div",{className:"min-h-screen bg-indigo-950 flex items-center justify-center text-white",children:h.jsx(Uf,{size:48,className:"animate-spin text-indigo-500"})}):n?h.jsxs("div",{className:"flex bg-slate-100 min-h-screen font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-700",children:[h.jsx(sP,{currentView:b,onNavigate:P,onLogout:E,isOpen:M,onClose:()=>S(!1)}),h.jsx("main",{className:"flex-1 md:ml-64 p-4 md:p-8 overflow-y-auto h-screen scroll-smooth relative",children:h.jsxs("div",{className:"max-w-7xl mx-auto pb-20",children:[h.jsxs("div",{className:"md:hidden flex items-center justify-between mb-6",children:[h.jsx("h1",{className:"font-black text-xl tracking-tighter italic text-indigo-900",children:"Liderança IRV"}),h.jsx("button",{onClick:()=>S(!0),className:"p-2 bg-indigo-600 text-white rounded-lg",children:h.jsx(Qb,{size:20})})]}),Va()]})}),fn&&h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200",children:h.jsxs("div",{className:"bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl animate-in zoom-in-95 duration-200",children:[h.jsx("div",{className:"w-12 h-12 bg-red-100 text-red-500 rounded-2xl flex items-center justify-center mb-4 mx-auto",children:h.jsx(Hv,{size:24})}),h.jsx("h3",{className:"text-xl font-black text-center text-slate-900 mb-2",children:"Confirmar Exclusão"}),h.jsx("p",{className:"text-slate-500 text-center text-sm mb-6",children:"Tem certeza que deseja remover este item do Banco de Dados? Ação irreversível."}),h.jsxs("div",{className:"flex gap-3",children:[h.jsx("button",{onClick:()=>at(null),className:"flex-1 py-3 font-bold text-slate-400 hover:bg-slate-50 rounded-xl transition-colors",children:"Cancelar"}),h.jsx("button",{onClick:lf,className:"flex-1 py-3 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 shadow-lg shadow-red-500/30 transition-all",children:"Excluir"})]})]})}),tn&&h.jsxs("div",{className:`fixed top-4 right-4 z-50 p-4 rounded-2xl shadow-2xl flex items-center gap-4 max-w-md animate-in slide-in-from-right duration-300 border ${tn.type==="success"?"bg-emerald-50 border-emerald-100 text-emerald-800":"bg-white border-slate-100 text-slate-900"}`,children:[h.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${tn.type==="success"?"bg-emerald-100 text-emerald-600":"bg-amber-100 text-amber-600"}`,children:tn.title.includes("Aniversariantes")?h.jsx(em,{size:20}):tn.type==="success"?h.jsx(zb,{size:20}):h.jsx(Xp,{size:20})}),h.jsxs("div",{children:[h.jsx("h4",{className:"font-black text-sm",children:tn.title}),h.jsx("p",{className:"text-xs opacity-80 mt-0.5",children:tn.message})]}),h.jsx("button",{onClick:()=>$t(null),className:"text-current opacity-40 hover:opacity-100",children:h.jsx(zf,{size:16})})]}),en&&h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in",children:h.jsxs("div",{className:"bg-white rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden animate-in zoom-in-95",children:[h.jsxs("div",{className:"p-6 border-b border-slate-100 flex justify-between items-center bg-indigo-50",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("div",{className:"p-2 bg-white rounded-xl text-indigo-600",children:h.jsx(nT,{size:20})}),h.jsxs("div",{children:[h.jsx("p",{className:"text-xs font-bold text-indigo-400 uppercase tracking-widest",children:"Palavra Pastoral"}),h.jsx("h3",{className:"font-black text-xl text-indigo-900",children:en.theme})]})]}),h.jsx("button",{onClick:()=>Sn(null),className:"p-2 bg-white/50 hover:bg-white rounded-xl transition-colors text-indigo-900",children:h.jsx(zf,{size:20})})]}),h.jsxs("div",{className:"p-8 overflow-y-auto max-h-[60vh]",children:[h.jsx("p",{className:"text-slate-600 leading-relaxed whitespace-pre-wrap text-lg font-serif",children:en.content}),h.jsxs("p",{className:"mt-8 text-right text-xs font-black text-slate-300 uppercase tracking-widest",children:["Gerado em ",en.date]})]})]})}),_r&&h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in",children:h.jsxs("div",{className:"bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95",children:[h.jsxs("div",{className:"p-6 border-b border-slate-100 flex justify-between items-start",children:[h.jsxs("div",{children:[h.jsx("span",{className:`px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wide ${_r.category==="Evento"?"bg-emerald-100 text-emerald-700":_r.category==="Celebração"?"bg-amber-100 text-amber-700":"bg-slate-100 text-slate-600"}`,children:_r.category}),h.jsx("h3",{className:"font-black text-2xl text-slate-900 mt-3 leading-tight",children:_r.title}),h.jsx("p",{className:"text-xs font-bold text-slate-400 mt-1",children:_r.date})]}),h.jsx("button",{onClick:()=>ba(null),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors text-slate-400 hover:text-slate-900",children:h.jsx(zf,{size:20})})]}),h.jsx("div",{className:"p-6 overflow-y-auto max-h-[60vh]",children:h.jsx("p",{className:"text-slate-600 leading-relaxed whitespace-pre-wrap",children:_r.content})}),h.jsx("div",{className:"p-4 bg-slate-50 border-t border-slate-100 flex justify-end",children:h.jsx("button",{onClick:()=>ba(null),className:"px-6 py-2 bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-700 transition-all",children:"Entendido"})})]})})]}):h.jsx("div",{className:"min-h-screen bg-slate-100 flex items-center justify-center p-4",children:h.jsxs("div",{className:"bg-white p-8 md:p-12 rounded-[40px] shadow-2xl max-w-md w-full border border-slate-200",children:[h.jsxs("div",{className:"flex flex-col items-center mb-8",children:[h.jsx("div",{className:"p-4 bg-indigo-600 rounded-3xl shadow-xl shadow-indigo-600/30 mb-6",children:h.jsx(eT,{className:"text-white",size:40})}),h.jsx("h1",{className:"text-3xl font-black text-indigo-950 tracking-tight text-center",children:"Liderança IRV"}),h.jsx("p",{className:"text-slate-500 font-medium text-center mt-2",children:"Acesso restrito à liderança."})]}),h.jsxs("form",{onSubmit:g,className:"space-y-6",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-black text-slate-400 uppercase mb-2 tracking-[0.1em]",children:"Email"}),h.jsx("input",{type:"email",required:!0,value:i,onChange:J=>s(J.target.value),className:"w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-400 font-medium transition-all",placeholder:"seu@email.com"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-black text-slate-400 uppercase mb-2 tracking-[0.1em]",children:"Senha"}),h.jsxs("div",{className:"relative",children:[h.jsx("input",{type:"password",required:!0,value:o,onChange:J=>a(J.target.value),className:"w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-400 font-medium transition-all",placeholder:"••••••••"}),h.jsx(Yb,{className:"absolute right-5 top-1/2 -translate-y-1/2 text-slate-400",size:18})]})]}),u&&h.jsxs("div",{className:"p-4 bg-red-50 text-red-600 text-sm font-bold rounded-2xl flex items-center gap-2",children:[h.jsx(Hv,{size:18})," ",u]}),h.jsx("button",{type:"submit",disabled:f,className:"w-full bg-indigo-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-indigo-600/20 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed",children:f?h.jsx(Uf,{className:"animate-spin"}):h.jsxs(h.Fragment,{children:[h.jsx(Jb,{size:20})," Entrar"]})})]})]})})},QA=document.getElementById("root");if(!QA)throw new Error("Could not find root element to mount to");const aj=sp.createRoot(QA);aj.render(h.jsx(RR.StrictMode,{children:h.jsx(oj,{})}));
