(function(){const E=document.createElement("link").relList;if(E&&E.supports&&E.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))T(x);new MutationObserver(x=>{for(const _ of x)if(_.type==="childList")for(const j of _.addedNodes)j.tagName==="LINK"&&j.rel==="modulepreload"&&T(j)}).observe(document,{childList:!0,subtree:!0});function y(x){const _={};return x.integrity&&(_.integrity=x.integrity),x.referrerPolicy&&(_.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?_.credentials="include":x.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function T(x){if(x.ep)return;x.ep=!0;const _=y(x);fetch(x.href,_)}})();function Zf(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var Do={exports:{}},Pr={},Oo={exports:{}},G={};var $a;function bf(){if($a)return G;$a=1;var p=Symbol.for("react.element"),E=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),j=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),X=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),H=Symbol.iterator;function Q(s){return s===null||typeof s!="object"?null:(s=H&&s[H]||s["@@iterator"],typeof s=="function"?s:null)}var se={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,K={};function b(s,m,I){this.props=s,this.context=m,this.refs=K,this.updater=I||se}b.prototype.isReactComponent={},b.prototype.setState=function(s,m){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,m,"setState")},b.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function Ee(){}Ee.prototype=b.prototype;function Ce(s,m,I){this.props=s,this.context=m,this.refs=K,this.updater=I||se}var je=Ce.prototype=new Ee;je.constructor=Ce,Y(je,b.prototype),je.isPureReactComponent=!0;var ie=Array.isArray,Ie=Object.prototype.hasOwnProperty,Se={current:null},J={key:!0,ref:!0,__self:!0,__source:!0};function $e(s,m,I){var R,W={},Z=null,ae=null;if(m!=null)for(R in m.ref!==void 0&&(ae=m.ref),m.key!==void 0&&(Z=""+m.key),m)Ie.call(m,R)&&!J.hasOwnProperty(R)&&(W[R]=m[R]);var le=arguments.length-2;if(le===1)W.children=I;else if(1<le){for(var pe=Array(le),be=0;be<le;be++)pe[be]=arguments[be+2];W.children=pe}if(s&&s.defaultProps)for(R in le=s.defaultProps,le)W[R]===void 0&&(W[R]=le[R]);return{$$typeof:p,type:s,key:Z,ref:ae,props:W,_owner:Se.current}}function St(s,m){return{$$typeof:p,type:s.type,key:m,ref:s.ref,props:s.props,_owner:s._owner}}function ft(s){return typeof s=="object"&&s!==null&&s.$$typeof===p}function Nt(s){var m={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(I){return m[I]})}var q=/\/+/g;function Te(s,m){return typeof s=="object"&&s!==null&&s.key!=null?Nt(""+s.key):m.toString(36)}function We(s,m,I,R,W){var Z=typeof s;(Z==="undefined"||Z==="boolean")&&(s=null);var ae=!1;if(s===null)ae=!0;else switch(Z){case"string":case"number":ae=!0;break;case"object":switch(s.$$typeof){case p:case E:ae=!0}}if(ae)return ae=s,W=W(ae),s=R===""?"."+Te(ae,0):R,ie(W)?(I="",s!=null&&(I=s.replace(q,"$&/")+"/"),We(W,m,I,"",function(be){return be})):W!=null&&(ft(W)&&(W=St(W,I+(!W.key||ae&&ae.key===W.key?"":(""+W.key).replace(q,"$&/")+"/")+s)),m.push(W)),1;if(ae=0,R=R===""?".":R+":",ie(s))for(var le=0;le<s.length;le++){Z=s[le];var pe=R+Te(Z,le);ae+=We(Z,m,I,pe,W)}else if(pe=Q(s),typeof pe=="function")for(s=pe.call(s),le=0;!(Z=s.next()).done;)Z=Z.value,pe=R+Te(Z,le++),ae+=We(Z,m,I,pe,W);else if(Z==="object")throw m=String(s),Error("Objects are not valid as a React child (found: "+(m==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":m)+"). If you meant to render a collection of children, use an array instead.");return ae}function Ze(s,m,I){if(s==null)return s;var R=[],W=0;return We(s,R,"","",function(Z){return m.call(I,Z,W++)}),R}function Re(s){if(s._status===-1){var m=s._result;m=m(),m.then(function(I){(s._status===0||s._status===-1)&&(s._status=1,s._result=I)},function(I){(s._status===0||s._status===-1)&&(s._status=2,s._result=I)}),s._status===-1&&(s._status=0,s._result=m)}if(s._status===1)return s._result.default;throw s._result}var ne={current:null},c={transition:null},d={ReactCurrentDispatcher:ne,ReactCurrentBatchConfig:c,ReactCurrentOwner:Se};function v(){throw Error("act(...) is not supported in production builds of React.")}return G.Children={map:Ze,forEach:function(s,m,I){Ze(s,function(){m.apply(this,arguments)},I)},count:function(s){var m=0;return Ze(s,function(){m++}),m},toArray:function(s){return Ze(s,function(m){return m})||[]},only:function(s){if(!ft(s))throw Error("React.Children.only expected to receive a single React element child.");return s}},G.Component=b,G.Fragment=y,G.Profiler=x,G.PureComponent=Ce,G.StrictMode=T,G.Suspense=M,G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d,G.act=v,G.cloneElement=function(s,m,I){if(s==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+s+".");var R=Y({},s.props),W=s.key,Z=s.ref,ae=s._owner;if(m!=null){if(m.ref!==void 0&&(Z=m.ref,ae=Se.current),m.key!==void 0&&(W=""+m.key),s.type&&s.type.defaultProps)var le=s.type.defaultProps;for(pe in m)Ie.call(m,pe)&&!J.hasOwnProperty(pe)&&(R[pe]=m[pe]===void 0&&le!==void 0?le[pe]:m[pe])}var pe=arguments.length-2;if(pe===1)R.children=I;else if(1<pe){le=Array(pe);for(var be=0;be<pe;be++)le[be]=arguments[be+2];R.children=le}return{$$typeof:p,type:s.type,key:W,ref:Z,props:R,_owner:ae}},G.createContext=function(s){return s={$$typeof:j,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},s.Provider={$$typeof:_,_context:s},s.Consumer=s},G.createElement=$e,G.createFactory=function(s){var m=$e.bind(null,s);return m.type=s,m},G.createRef=function(){return{current:null}},G.forwardRef=function(s){return{$$typeof:V,render:s}},G.isValidElement=ft,G.lazy=function(s){return{$$typeof:$,_payload:{_status:-1,_result:s},_init:Re}},G.memo=function(s,m){return{$$typeof:X,type:s,compare:m===void 0?null:m}},G.startTransition=function(s){var m=c.transition;c.transition={};try{s()}finally{c.transition=m}},G.unstable_act=v,G.useCallback=function(s,m){return ne.current.useCallback(s,m)},G.useContext=function(s){return ne.current.useContext(s)},G.useDebugValue=function(){},G.useDeferredValue=function(s){return ne.current.useDeferredValue(s)},G.useEffect=function(s,m){return ne.current.useEffect(s,m)},G.useId=function(){return ne.current.useId()},G.useImperativeHandle=function(s,m,I){return ne.current.useImperativeHandle(s,m,I)},G.useInsertionEffect=function(s,m){return ne.current.useInsertionEffect(s,m)},G.useLayoutEffect=function(s,m){return ne.current.useLayoutEffect(s,m)},G.useMemo=function(s,m){return ne.current.useMemo(s,m)},G.useReducer=function(s,m,I){return ne.current.useReducer(s,m,I)},G.useRef=function(s){return ne.current.useRef(s)},G.useState=function(s){return ne.current.useState(s)},G.useSyncExternalStore=function(s,m,I){return ne.current.useSyncExternalStore(s,m,I)},G.useTransition=function(){return ne.current.useTransition()},G.version="18.3.1",G}var Wa;function Wo(){return Wa||(Wa=1,Oo.exports=bf()),Oo.exports}var Ba;function ed(){if(Ba)return Pr;Ba=1;var p=Wo(),E=Symbol.for("react.element"),y=Symbol.for("react.fragment"),T=Object.prototype.hasOwnProperty,x=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function j(V,M,X){var $,H={},Q=null,se=null;X!==void 0&&(Q=""+X),M.key!==void 0&&(Q=""+M.key),M.ref!==void 0&&(se=M.ref);for($ in M)T.call(M,$)&&!_.hasOwnProperty($)&&(H[$]=M[$]);if(V&&V.defaultProps)for($ in M=V.defaultProps,M)H[$]===void 0&&(H[$]=M[$]);return{$$typeof:E,type:V,key:Q,ref:se,props:H,_owner:x.current}}return Pr.Fragment=y,Pr.jsx=j,Pr.jsxs=j,Pr}var Ha;function td(){return Ha||(Ha=1,Do.exports=ed()),Do.exports}var w=td(),jr=Wo(),Ui={},Fo={exports:{}},Je={},Ao={exports:{}},Uo={};var Qa;function nd(){return Qa||(Qa=1,(function(p){function E(c,d){var v=c.length;c.push(d);e:for(;0<v;){var s=v-1>>>1,m=c[s];if(0<x(m,d))c[s]=d,c[v]=m,v=s;else break e}}function y(c){return c.length===0?null:c[0]}function T(c){if(c.length===0)return null;var d=c[0],v=c.pop();if(v!==d){c[0]=v;e:for(var s=0,m=c.length,I=m>>>1;s<I;){var R=2*(s+1)-1,W=c[R],Z=R+1,ae=c[Z];if(0>x(W,v))Z<m&&0>x(ae,W)?(c[s]=ae,c[Z]=v,s=Z):(c[s]=W,c[R]=v,s=R);else if(Z<m&&0>x(ae,v))c[s]=ae,c[Z]=v,s=Z;else break e}}return d}function x(c,d){var v=c.sortIndex-d.sortIndex;return v!==0?v:c.id-d.id}if(typeof performance=="object"&&typeof performance.now=="function"){var _=performance;p.unstable_now=function(){return _.now()}}else{var j=Date,V=j.now();p.unstable_now=function(){return j.now()-V}}var M=[],X=[],$=1,H=null,Q=3,se=!1,Y=!1,K=!1,b=typeof setTimeout=="function"?setTimeout:null,Ee=typeof clearTimeout=="function"?clearTimeout:null,Ce=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function je(c){for(var d=y(X);d!==null;){if(d.callback===null)T(X);else if(d.startTime<=c)T(X),d.sortIndex=d.expirationTime,E(M,d);else break;d=y(X)}}function ie(c){if(K=!1,je(c),!Y)if(y(M)!==null)Y=!0,Re(Ie);else{var d=y(X);d!==null&&ne(ie,d.startTime-c)}}function Ie(c,d){Y=!1,K&&(K=!1,Ee($e),$e=-1),se=!0;var v=Q;try{for(je(d),H=y(M);H!==null&&(!(H.expirationTime>d)||c&&!Nt());){var s=H.callback;if(typeof s=="function"){H.callback=null,Q=H.priorityLevel;var m=s(H.expirationTime<=d);d=p.unstable_now(),typeof m=="function"?H.callback=m:H===y(M)&&T(M),je(d)}else T(M);H=y(M)}if(H!==null)var I=!0;else{var R=y(X);R!==null&&ne(ie,R.startTime-d),I=!1}return I}finally{H=null,Q=v,se=!1}}var Se=!1,J=null,$e=-1,St=5,ft=-1;function Nt(){return!(p.unstable_now()-ft<St)}function q(){if(J!==null){var c=p.unstable_now();ft=c;var d=!0;try{d=J(!0,c)}finally{d?Te():(Se=!1,J=null)}}else Se=!1}var Te;if(typeof Ce=="function")Te=function(){Ce(q)};else if(typeof MessageChannel<"u"){var We=new MessageChannel,Ze=We.port2;We.port1.onmessage=q,Te=function(){Ze.postMessage(null)}}else Te=function(){b(q,0)};function Re(c){J=c,Se||(Se=!0,Te())}function ne(c,d){$e=b(function(){c(p.unstable_now())},d)}p.unstable_IdlePriority=5,p.unstable_ImmediatePriority=1,p.unstable_LowPriority=4,p.unstable_NormalPriority=3,p.unstable_Profiling=null,p.unstable_UserBlockingPriority=2,p.unstable_cancelCallback=function(c){c.callback=null},p.unstable_continueExecution=function(){Y||se||(Y=!0,Re(Ie))},p.unstable_forceFrameRate=function(c){0>c||125<c?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):St=0<c?Math.floor(1e3/c):5},p.unstable_getCurrentPriorityLevel=function(){return Q},p.unstable_getFirstCallbackNode=function(){return y(M)},p.unstable_next=function(c){switch(Q){case 1:case 2:case 3:var d=3;break;default:d=Q}var v=Q;Q=d;try{return c()}finally{Q=v}},p.unstable_pauseExecution=function(){},p.unstable_requestPaint=function(){},p.unstable_runWithPriority=function(c,d){switch(c){case 1:case 2:case 3:case 4:case 5:break;default:c=3}var v=Q;Q=c;try{return d()}finally{Q=v}},p.unstable_scheduleCallback=function(c,d,v){var s=p.unstable_now();switch(typeof v=="object"&&v!==null?(v=v.delay,v=typeof v=="number"&&0<v?s+v:s):v=s,c){case 1:var m=-1;break;case 2:m=250;break;case 5:m=1073741823;break;case 4:m=1e4;break;default:m=5e3}return m=v+m,c={id:$++,callback:d,priorityLevel:c,startTime:v,expirationTime:m,sortIndex:-1},v>s?(c.sortIndex=v,E(X,c),y(M)===null&&c===y(X)&&(K?(Ee($e),$e=-1):K=!0,ne(ie,v-s))):(c.sortIndex=m,E(M,c),Y||se||(Y=!0,Re(Ie))),c},p.unstable_shouldYield=Nt,p.unstable_wrapCallback=function(c){var d=Q;return function(){var v=Q;Q=d;try{return c.apply(this,arguments)}finally{Q=v}}}})(Uo)),Uo}var Ya;function rd(){return Ya||(Ya=1,Ao.exports=nd()),Ao.exports}var Ka;function id(){if(Ka)return Je;Ka=1;var p=Wo(),E=rd();function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var T=new Set,x={};function _(e,t){j(e,t),j(e+"Capture",t)}function j(e,t){for(x[e]=t,e=0;e<t.length;e++)T.add(t[e])}var V=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),M=Object.prototype.hasOwnProperty,X=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$={},H={};function Q(e){return M.call(H,e)?!0:M.call($,e)?!1:X.test(e)?H[e]=!0:($[e]=!0,!1)}function se(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Y(e,t,n,r){if(t===null||typeof t>"u"||se(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function K(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){b[e]=new K(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];b[t]=new K(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){b[e]=new K(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){b[e]=new K(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){b[e]=new K(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){b[e]=new K(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){b[e]=new K(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){b[e]=new K(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){b[e]=new K(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ee=/[\-:]([a-z])/g;function Ce(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ee,Ce);b[t]=new K(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ee,Ce);b[t]=new K(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ee,Ce);b[t]=new K(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){b[e]=new K(e,1,!1,e.toLowerCase(),null,!1,!1)}),b.xlinkHref=new K("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){b[e]=new K(e,1,!1,e.toLowerCase(),null,!0,!0)});function je(e,t,n,r){var i=b.hasOwnProperty(t)?b[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Y(t,n,i,r)&&(n=null),r||i===null?Q(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ie=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ie=Symbol.for("react.element"),Se=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),$e=Symbol.for("react.strict_mode"),St=Symbol.for("react.profiler"),ft=Symbol.for("react.provider"),Nt=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),Te=Symbol.for("react.suspense"),We=Symbol.for("react.suspense_list"),Ze=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),ne=Symbol.for("react.offscreen"),c=Symbol.iterator;function d(e){return e===null||typeof e!="object"?null:(e=c&&e[c]||e["@@iterator"],typeof e=="function"?e:null)}var v=Object.assign,s;function m(e){if(s===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);s=t&&t[1]||""}return`
`+s+e}var I=!1;function R(e,t){if(!e||I)return"";I=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(S){var r=S}Reflect.construct(e,[],t)}else{try{t.call()}catch(S){r=S}e.call(t.prototype)}else{try{throw Error()}catch(S){r=S}e()}}catch(S){if(S&&r&&typeof S.stack=="string"){for(var i=S.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,u=l.length-1;1<=o&&0<=u&&i[o]!==l[u];)u--;for(;1<=o&&0<=u;o--,u--)if(i[o]!==l[u]){if(o!==1||u!==1)do if(o--,u--,0>u||i[o]!==l[u]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=u);break}}}finally{I=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?m(e):""}function W(e){switch(e.tag){case 5:return m(e.type);case 16:return m("Lazy");case 13:return m("Suspense");case 19:return m("SuspenseList");case 0:case 2:case 15:return e=R(e.type,!1),e;case 11:return e=R(e.type.render,!1),e;case 1:return e=R(e.type,!0),e;default:return""}}function Z(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case J:return"Fragment";case Se:return"Portal";case St:return"Profiler";case $e:return"StrictMode";case Te:return"Suspense";case We:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Nt:return(e.displayName||"Context")+".Consumer";case ft:return(e._context.displayName||"Context")+".Provider";case q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ze:return t=e.displayName||null,t!==null?t:Z(e.type)||"Memo";case Re:t=e._payload,e=e._init;try{return Z(e(t))}catch{}}return null}function ae(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Z(t);case 8:return t===$e?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function le(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function be(e){var t=pe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ir(e){e._valueTracker||(e._valueTracker=be(e))}function Ko(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pe(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Tr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $i(e,t){var n=t.checked;return v({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Go(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=le(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function qo(e,t){t=t.checked,t!=null&&je(e,"checked",t,!1)}function Wi(e,t){qo(e,t);var n=le(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Bi(e,t.type,le(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Bi(e,t,n){(t!=="number"||Tr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Wn=Array.isArray;function hn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+le(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Hi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return v({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Jo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(Wn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:le(n)}}function Zo(e,t){var n=le(t.value),r=le(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function bo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function eu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?eu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mr,tu=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Mr=Mr||document.createElement("div"),Mr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Mr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Bn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Hn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tc=["Webkit","ms","Moz","O"];Object.keys(Hn).forEach(function(e){tc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Hn[t]=Hn[e]})});function nu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Hn.hasOwnProperty(e)&&Hn[e]?(""+t).trim():t+"px"}function ru(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var nc=v({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yi(e,t){if(t){if(nc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function Ki(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gi=null;function qi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xi=null,yn=null,vn=null;function iu(e){if(e=dr(e)){if(typeof Xi!="function")throw Error(y(280));var t=e.stateNode;t&&(t=ei(t),Xi(e.stateNode,e.type,t))}}function lu(e){yn?vn?vn.push(e):vn=[e]:yn=e}function ou(){if(yn){var e=yn,t=vn;if(vn=yn=null,iu(e),t)for(e=0;e<t.length;e++)iu(t[e])}}function uu(e,t){return e(t)}function su(){}var Ji=!1;function au(e,t,n){if(Ji)return e(t,n);Ji=!0;try{return uu(e,t,n)}finally{Ji=!1,(yn!==null||vn!==null)&&(su(),ou())}}function Qn(e,t){var n=e.stateNode;if(n===null)return null;var r=ei(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var Zi=!1;if(V)try{var Yn={};Object.defineProperty(Yn,"passive",{get:function(){Zi=!0}}),window.addEventListener("test",Yn,Yn),window.removeEventListener("test",Yn,Yn)}catch{Zi=!1}function rc(e,t,n,r,i,l,o,u,a){var S=Array.prototype.slice.call(arguments,3);try{t.apply(n,S)}catch(C){this.onError(C)}}var Kn=!1,Lr=null,zr=!1,bi=null,ic={onError:function(e){Kn=!0,Lr=e}};function lc(e,t,n,r,i,l,o,u,a){Kn=!1,Lr=null,rc.apply(ic,arguments)}function oc(e,t,n,r,i,l,o,u,a){if(lc.apply(this,arguments),Kn){if(Kn){var S=Lr;Kn=!1,Lr=null}else throw Error(y(198));zr||(zr=!0,bi=S)}}function en(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function cu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fu(e){if(en(e)!==e)throw Error(y(188))}function uc(e){var t=e.alternate;if(!t){if(t=en(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return fu(i),e;if(l===r)return fu(i),t;l=l.sibling}throw Error(y(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,u=i.child;u;){if(u===n){o=!0,n=i,r=l;break}if(u===r){o=!0,r=i,n=l;break}u=u.sibling}if(!o){for(u=l.child;u;){if(u===n){o=!0,n=l,r=i;break}if(u===r){o=!0,r=l,n=i;break}u=u.sibling}if(!o)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function du(e){return e=uc(e),e!==null?pu(e):null}function pu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=pu(e);if(t!==null)return t;e=e.sibling}return null}var mu=E.unstable_scheduleCallback,hu=E.unstable_cancelCallback,sc=E.unstable_shouldYield,ac=E.unstable_requestPaint,we=E.unstable_now,cc=E.unstable_getCurrentPriorityLevel,el=E.unstable_ImmediatePriority,yu=E.unstable_UserBlockingPriority,Rr=E.unstable_NormalPriority,fc=E.unstable_LowPriority,vu=E.unstable_IdlePriority,Dr=null,wt=null;function dc(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Dr,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:hc,pc=Math.log,mc=Math.LN2;function hc(e){return e>>>=0,e===0?32:31-(pc(e)/mc|0)|0}var Or=64,Fr=4194304;function Gn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ar(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var u=o&~i;u!==0?r=Gn(u):(l&=o,l!==0&&(r=Gn(l)))}else o=n&~i,o!==0?r=Gn(o):l!==0&&(r=Gn(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),i=1<<n,r|=e[n],t&=~i;return r}function yc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-dt(l),u=1<<o,a=i[o];a===-1?((u&n)===0||(u&r)!==0)&&(i[o]=yc(u,t)):a<=t&&(e.expiredLanes|=u),l&=~u}}function tl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gu(){var e=Or;return Or<<=1,(Or&4194240)===0&&(Or=64),e}function nl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function gc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dt(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function rl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var oe=0;function Su(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var wu,il,xu,Eu,ku,ll=!1,Ur=[],Rt=null,Dt=null,Ot=null,Xn=new Map,Jn=new Map,Ft=[],Sc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cu(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Dt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Xn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jn.delete(t.pointerId)}}function Zn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=dr(t),t!==null&&il(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function wc(e,t,n,r,i){switch(t){case"focusin":return Rt=Zn(Rt,e,t,n,r,i),!0;case"dragenter":return Dt=Zn(Dt,e,t,n,r,i),!0;case"mouseover":return Ot=Zn(Ot,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Xn.set(l,Zn(Xn.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Jn.set(l,Zn(Jn.get(l)||null,e,t,n,r,i)),!0}return!1}function Nu(e){var t=tn(e.target);if(t!==null){var n=en(t);if(n!==null){if(t=n.tag,t===13){if(t=cu(n),t!==null){e.blockedOn=t,ku(e.priority,function(){xu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ul(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Gi=r,n.target.dispatchEvent(r),Gi=null}else return t=dr(n),t!==null&&il(t),e.blockedOn=n,!1;t.shift()}return!0}function _u(e,t,n){Vr(e)&&n.delete(t)}function xc(){ll=!1,Rt!==null&&Vr(Rt)&&(Rt=null),Dt!==null&&Vr(Dt)&&(Dt=null),Ot!==null&&Vr(Ot)&&(Ot=null),Xn.forEach(_u),Jn.forEach(_u)}function bn(e,t){e.blockedOn===t&&(e.blockedOn=null,ll||(ll=!0,E.unstable_scheduleCallback(E.unstable_NormalPriority,xc)))}function er(e){function t(i){return bn(i,e)}if(0<Ur.length){bn(Ur[0],e);for(var n=1;n<Ur.length;n++){var r=Ur[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rt!==null&&bn(Rt,e),Dt!==null&&bn(Dt,e),Ot!==null&&bn(Ot,e),Xn.forEach(t),Jn.forEach(t),n=0;n<Ft.length;n++)r=Ft[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ft.length&&(n=Ft[0],n.blockedOn===null);)Nu(n),n.blockedOn===null&&Ft.shift()}var gn=ie.ReactCurrentBatchConfig,$r=!0;function Ec(e,t,n,r){var i=oe,l=gn.transition;gn.transition=null;try{oe=1,ol(e,t,n,r)}finally{oe=i,gn.transition=l}}function kc(e,t,n,r){var i=oe,l=gn.transition;gn.transition=null;try{oe=4,ol(e,t,n,r)}finally{oe=i,gn.transition=l}}function ol(e,t,n,r){if($r){var i=ul(e,t,n,r);if(i===null)Cl(e,t,r,Wr,n),Cu(e,r);else if(wc(i,e,t,n,r))r.stopPropagation();else if(Cu(e,r),t&4&&-1<Sc.indexOf(e)){for(;i!==null;){var l=dr(i);if(l!==null&&wu(l),l=ul(e,t,n,r),l===null&&Cl(e,t,r,Wr,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else Cl(e,t,r,null,n)}}var Wr=null;function ul(e,t,n,r){if(Wr=null,e=qi(r),e=tn(e),e!==null)if(t=en(e),t===null)e=null;else if(n=t.tag,n===13){if(e=cu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wr=e,null}function Pu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cc()){case el:return 1;case yu:return 4;case Rr:case fc:return 16;case vu:return 536870912;default:return 16}default:return 16}}var At=null,sl=null,Br=null;function ju(){if(Br)return Br;var e,t=sl,n=t.length,r,i="value"in At?At.value:At.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return Br=i.slice(e,1<r?1-r:void 0)}function Hr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qr(){return!0}function Iu(){return!1}function et(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Qr:Iu,this.isPropagationStopped=Iu,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qr)},persist:function(){},isPersistent:Qr}),t}var Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},al=et(Sn),tr=v({},Sn,{view:0,detail:0}),Cc=et(tr),cl,fl,nr,Yr=v({},tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nr&&(nr&&e.type==="mousemove"?(cl=e.screenX-nr.screenX,fl=e.screenY-nr.screenY):fl=cl=0,nr=e),cl)},movementY:function(e){return"movementY"in e?e.movementY:fl}}),Tu=et(Yr),Nc=v({},Yr,{dataTransfer:0}),_c=et(Nc),Pc=v({},tr,{relatedTarget:0}),dl=et(Pc),jc=v({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ic=et(jc),Tc=v({},Sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mc=et(Tc),Lc=v({},Sn,{data:0}),Mu=et(Lc),zc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Oc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Dc[e])?!!t[e]:!1}function pl(){return Oc}var Fc=v({},tr,{key:function(e){if(e.key){var t=zc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pl,charCode:function(e){return e.type==="keypress"?Hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ac=et(Fc),Uc=v({},Yr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lu=et(Uc),Vc=v({},tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pl}),$c=et(Vc),Wc=v({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bc=et(Wc),Hc=v({},Yr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qc=et(Hc),Yc=[9,13,27,32],ml=V&&"CompositionEvent"in window,rr=null;V&&"documentMode"in document&&(rr=document.documentMode);var Kc=V&&"TextEvent"in window&&!rr,zu=V&&(!ml||rr&&8<rr&&11>=rr),Ru=" ",Du=!1;function Ou(e,t){switch(e){case"keyup":return Yc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wn=!1;function Gc(e,t){switch(e){case"compositionend":return Fu(t);case"keypress":return t.which!==32?null:(Du=!0,Ru);case"textInput":return e=t.data,e===Ru&&Du?null:e;default:return null}}function qc(e,t){if(wn)return e==="compositionend"||!ml&&Ou(e,t)?(e=ju(),Br=sl=At=null,wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zu&&t.locale!=="ko"?null:t.data;default:return null}}var Xc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Xc[e.type]:t==="textarea"}function Uu(e,t,n,r){lu(r),t=Jr(t,"onChange"),0<t.length&&(n=new al("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ir=null,lr=null;function Jc(e){rs(e,0)}function Kr(e){var t=Nn(e);if(Ko(t))return e}function Zc(e,t){if(e==="change")return t}var Vu=!1;if(V){var hl;if(V){var yl="oninput"in document;if(!yl){var $u=document.createElement("div");$u.setAttribute("oninput","return;"),yl=typeof $u.oninput=="function"}hl=yl}else hl=!1;Vu=hl&&(!document.documentMode||9<document.documentMode)}function Wu(){ir&&(ir.detachEvent("onpropertychange",Bu),lr=ir=null)}function Bu(e){if(e.propertyName==="value"&&Kr(lr)){var t=[];Uu(t,lr,e,qi(e)),au(Jc,t)}}function bc(e,t,n){e==="focusin"?(Wu(),ir=t,lr=n,ir.attachEvent("onpropertychange",Bu)):e==="focusout"&&Wu()}function ef(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Kr(lr)}function tf(e,t){if(e==="click")return Kr(t)}function nf(e,t){if(e==="input"||e==="change")return Kr(t)}function rf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:rf;function or(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!M.call(t,i)||!pt(e[i],t[i]))return!1}return!0}function Hu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qu(e,t){var n=Hu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hu(n)}}function Yu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ku(){for(var e=window,t=Tr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Tr(e.document)}return t}function vl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function lf(e){var t=Ku(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Yu(n.ownerDocument.documentElement,n)){if(r!==null&&vl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Qu(n,l);var o=Qu(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var of=V&&"documentMode"in document&&11>=document.documentMode,xn=null,gl=null,ur=null,Sl=!1;function Gu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sl||xn==null||xn!==Tr(r)||(r=xn,"selectionStart"in r&&vl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ur&&or(ur,r)||(ur=r,r=Jr(gl,"onSelect"),0<r.length&&(t=new al("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=xn)))}function Gr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var En={animationend:Gr("Animation","AnimationEnd"),animationiteration:Gr("Animation","AnimationIteration"),animationstart:Gr("Animation","AnimationStart"),transitionend:Gr("Transition","TransitionEnd")},wl={},qu={};V&&(qu=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function qr(e){if(wl[e])return wl[e];if(!En[e])return e;var t=En[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qu)return wl[e]=t[n];return e}var Xu=qr("animationend"),Ju=qr("animationiteration"),Zu=qr("animationstart"),bu=qr("transitionend"),es=new Map,ts="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ut(e,t){es.set(e,t),_(t,[e])}for(var xl=0;xl<ts.length;xl++){var El=ts[xl],uf=El.toLowerCase(),sf=El[0].toUpperCase()+El.slice(1);Ut(uf,"on"+sf)}Ut(Xu,"onAnimationEnd"),Ut(Ju,"onAnimationIteration"),Ut(Zu,"onAnimationStart"),Ut("dblclick","onDoubleClick"),Ut("focusin","onFocus"),Ut("focusout","onBlur"),Ut(bu,"onTransitionEnd"),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),_("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_("onBeforeInput",["compositionend","keypress","textInput","paste"]),_("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),af=new Set("cancel close invalid load scroll toggle".split(" ").concat(sr));function ns(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,oc(r,t,void 0,e),e.currentTarget=null}function rs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var u=r[o],a=u.instance,S=u.currentTarget;if(u=u.listener,a!==l&&i.isPropagationStopped())break e;ns(i,u,S),l=a}else for(o=0;o<r.length;o++){if(u=r[o],a=u.instance,S=u.currentTarget,u=u.listener,a!==l&&i.isPropagationStopped())break e;ns(i,u,S),l=a}}}if(zr)throw e=bi,zr=!1,bi=null,e}function fe(e,t){var n=t[Tl];n===void 0&&(n=t[Tl]=new Set);var r=e+"__bubble";n.has(r)||(is(t,e,2,!1),n.add(r))}function kl(e,t,n){var r=0;t&&(r|=4),is(n,e,r,t)}var Xr="_reactListening"+Math.random().toString(36).slice(2);function ar(e){if(!e[Xr]){e[Xr]=!0,T.forEach(function(n){n!=="selectionchange"&&(af.has(n)||kl(n,!1,e),kl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xr]||(t[Xr]=!0,kl("selectionchange",!1,t))}}function is(e,t,n,r){switch(Pu(t)){case 1:var i=Ec;break;case 4:i=kc;break;default:i=ol}n=i.bind(null,t,n,e),i=void 0,!Zi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Cl(e,t,n,r,i){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;u!==null;){if(o=tn(u),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}u=u.parentNode}}r=r.return}au(function(){var S=l,C=qi(n),N=[];e:{var k=es.get(e);if(k!==void 0){var L=al,D=e;switch(e){case"keypress":if(Hr(n)===0)break e;case"keydown":case"keyup":L=Ac;break;case"focusin":D="focus",L=dl;break;case"focusout":D="blur",L=dl;break;case"beforeblur":case"afterblur":L=dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=Tu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=_c;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=$c;break;case Xu:case Ju:case Zu:L=Ic;break;case bu:L=Bc;break;case"scroll":L=Cc;break;case"wheel":L=Qc;break;case"copy":case"cut":case"paste":L=Mc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=Lu}var O=(t&4)!==0,xe=!O&&e==="scroll",h=O?k!==null?k+"Capture":null:k;O=[];for(var f=S,g;f!==null;){g=f;var P=g.stateNode;if(g.tag===5&&P!==null&&(g=P,h!==null&&(P=Qn(f,h),P!=null&&O.push(cr(f,P,g)))),xe)break;f=f.return}0<O.length&&(k=new L(k,D,null,n,C),N.push({event:k,listeners:O}))}}if((t&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",k&&n!==Gi&&(D=n.relatedTarget||n.fromElement)&&(tn(D)||D[_t]))break e;if((L||k)&&(k=C.window===C?C:(k=C.ownerDocument)?k.defaultView||k.parentWindow:window,L?(D=n.relatedTarget||n.toElement,L=S,D=D?tn(D):null,D!==null&&(xe=en(D),D!==xe||D.tag!==5&&D.tag!==6)&&(D=null)):(L=null,D=S),L!==D)){if(O=Tu,P="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(O=Lu,P="onPointerLeave",h="onPointerEnter",f="pointer"),xe=L==null?k:Nn(L),g=D==null?k:Nn(D),k=new O(P,f+"leave",L,n,C),k.target=xe,k.relatedTarget=g,P=null,tn(C)===S&&(O=new O(h,f+"enter",D,n,C),O.target=g,O.relatedTarget=xe,P=O),xe=P,L&&D)t:{for(O=L,h=D,f=0,g=O;g;g=kn(g))f++;for(g=0,P=h;P;P=kn(P))g++;for(;0<f-g;)O=kn(O),f--;for(;0<g-f;)h=kn(h),g--;for(;f--;){if(O===h||h!==null&&O===h.alternate)break t;O=kn(O),h=kn(h)}O=null}else O=null;L!==null&&ls(N,k,L,O,!1),D!==null&&xe!==null&&ls(N,xe,D,O,!0)}}e:{if(k=S?Nn(S):window,L=k.nodeName&&k.nodeName.toLowerCase(),L==="select"||L==="input"&&k.type==="file")var F=Zc;else if(Au(k))if(Vu)F=nf;else{F=ef;var A=bc}else(L=k.nodeName)&&L.toLowerCase()==="input"&&(k.type==="checkbox"||k.type==="radio")&&(F=tf);if(F&&(F=F(e,S))){Uu(N,F,n,C);break e}A&&A(e,k,S),e==="focusout"&&(A=k._wrapperState)&&A.controlled&&k.type==="number"&&Bi(k,"number",k.value)}switch(A=S?Nn(S):window,e){case"focusin":(Au(A)||A.contentEditable==="true")&&(xn=A,gl=S,ur=null);break;case"focusout":ur=gl=xn=null;break;case"mousedown":Sl=!0;break;case"contextmenu":case"mouseup":case"dragend":Sl=!1,Gu(N,n,C);break;case"selectionchange":if(of)break;case"keydown":case"keyup":Gu(N,n,C)}var U;if(ml)e:{switch(e){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else wn?Ou(e,n)&&(B="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(B="onCompositionStart");B&&(zu&&n.locale!=="ko"&&(wn||B!=="onCompositionStart"?B==="onCompositionEnd"&&wn&&(U=ju()):(At=C,sl="value"in At?At.value:At.textContent,wn=!0)),A=Jr(S,B),0<A.length&&(B=new Mu(B,e,null,n,C),N.push({event:B,listeners:A}),U?B.data=U:(U=Fu(n),U!==null&&(B.data=U)))),(U=Kc?Gc(e,n):qc(e,n))&&(S=Jr(S,"onBeforeInput"),0<S.length&&(C=new Mu("onBeforeInput","beforeinput",null,n,C),N.push({event:C,listeners:S}),C.data=U))}rs(N,t)})}function cr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Qn(e,n),l!=null&&r.unshift(cr(e,l,i)),l=Qn(e,t),l!=null&&r.push(cr(e,l,i))),e=e.return}return r}function kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ls(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var u=n,a=u.alternate,S=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&S!==null&&(u=S,i?(a=Qn(n,l),a!=null&&o.unshift(cr(n,a,u))):i||(a=Qn(n,l),a!=null&&o.push(cr(n,a,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var cf=/\r\n?/g,ff=/\u0000|\uFFFD/g;function os(e){return(typeof e=="string"?e:""+e).replace(cf,`
`).replace(ff,"")}function Zr(e,t,n){if(t=os(t),os(e)!==t&&n)throw Error(y(425))}function br(){}var Nl=null,_l=null;function Pl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jl=typeof setTimeout=="function"?setTimeout:void 0,df=typeof clearTimeout=="function"?clearTimeout:void 0,us=typeof Promise=="function"?Promise:void 0,pf=typeof queueMicrotask=="function"?queueMicrotask:typeof us<"u"?function(e){return us.resolve(null).then(e).catch(mf)}:jl;function mf(e){setTimeout(function(){throw e})}function Il(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),er(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);er(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ss(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cn=Math.random().toString(36).slice(2),xt="__reactFiber$"+Cn,fr="__reactProps$"+Cn,_t="__reactContainer$"+Cn,Tl="__reactEvents$"+Cn,hf="__reactListeners$"+Cn,yf="__reactHandles$"+Cn;function tn(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ss(e);e!==null;){if(n=e[xt])return n;e=ss(e)}return t}e=n,n=e.parentNode}return null}function dr(e){return e=e[xt]||e[_t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function ei(e){return e[fr]||null}var Ml=[],_n=-1;function $t(e){return{current:e}}function de(e){0>_n||(e.current=Ml[_n],Ml[_n]=null,_n--)}function ce(e,t){_n++,Ml[_n]=e.current,e.current=t}var Wt={},Fe=$t(Wt),Ye=$t(!1),nn=Wt;function Pn(e,t){var n=e.type.contextTypes;if(!n)return Wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(e){return e=e.childContextTypes,e!=null}function ti(){de(Ye),de(Fe)}function as(e,t,n){if(Fe.current!==Wt)throw Error(y(168));ce(Fe,t),ce(Ye,n)}function cs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(y(108,ae(e)||"Unknown",i));return v({},n,r)}function ni(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wt,nn=Fe.current,ce(Fe,e),ce(Ye,Ye.current),!0}function fs(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=cs(e,t,nn),r.__reactInternalMemoizedMergedChildContext=e,de(Ye),de(Fe),ce(Fe,e)):de(Ye),ce(Ye,n)}var Pt=null,ri=!1,Ll=!1;function ds(e){Pt===null?Pt=[e]:Pt.push(e)}function vf(e){ri=!0,ds(e)}function Bt(){if(!Ll&&Pt!==null){Ll=!0;var e=0,t=oe;try{var n=Pt;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pt=null,ri=!1}catch(i){throw Pt!==null&&(Pt=Pt.slice(e+1)),mu(el,Bt),i}finally{oe=t,Ll=!1}}return null}var jn=[],In=0,ii=null,li=0,it=[],lt=0,rn=null,jt=1,It="";function ln(e,t){jn[In++]=li,jn[In++]=ii,ii=e,li=t}function ps(e,t,n){it[lt++]=jt,it[lt++]=It,it[lt++]=rn,rn=e;var r=jt;e=It;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var l=32-dt(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,jt=1<<32-dt(t)+i|n<<i|r,It=l+e}else jt=1<<l|n<<i|r,It=e}function zl(e){e.return!==null&&(ln(e,1),ps(e,1,0))}function Rl(e){for(;e===ii;)ii=jn[--In],jn[In]=null,li=jn[--In],jn[In]=null;for(;e===rn;)rn=it[--lt],it[lt]=null,It=it[--lt],it[lt]=null,jt=it[--lt],it[lt]=null}var tt=null,nt=null,me=!1,mt=null;function ms(e,t){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function hs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,tt=e,nt=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,tt=e,nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=rn!==null?{id:jt,overflow:It}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,tt=e,nt=null,!0):!1;default:return!1}}function Dl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ol(e){if(me){var t=nt;if(t){var n=t;if(!hs(e,t)){if(Dl(e))throw Error(y(418));t=Vt(n.nextSibling);var r=tt;t&&hs(e,t)?ms(r,n):(e.flags=e.flags&-4097|2,me=!1,tt=e)}}else{if(Dl(e))throw Error(y(418));e.flags=e.flags&-4097|2,me=!1,tt=e}}}function ys(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tt=e}function oi(e){if(e!==tt)return!1;if(!me)return ys(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pl(e.type,e.memoizedProps)),t&&(t=nt)){if(Dl(e))throw vs(),Error(y(418));for(;t;)ms(e,t),t=Vt(t.nextSibling)}if(ys(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){nt=Vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}nt=null}}else nt=tt?Vt(e.stateNode.nextSibling):null;return!0}function vs(){for(var e=nt;e;)e=Vt(e.nextSibling)}function Tn(){nt=tt=null,me=!1}function Fl(e){mt===null?mt=[e]:mt.push(e)}var gf=ie.ReactCurrentBatchConfig;function pr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var u=i.refs;o===null?delete u[l]:u[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function ui(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gs(e){var t=e._init;return t(e._payload)}function Ss(e){function t(h,f){if(e){var g=h.deletions;g===null?(h.deletions=[f],h.flags|=16):g.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function i(h,f){return h=Jt(h,f),h.index=0,h.sibling=null,h}function l(h,f,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<f?(h.flags|=2,f):g):(h.flags|=2,f)):(h.flags|=1048576,f)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function u(h,f,g,P){return f===null||f.tag!==6?(f=Io(g,h.mode,P),f.return=h,f):(f=i(f,g),f.return=h,f)}function a(h,f,g,P){var F=g.type;return F===J?C(h,f,g.props.children,P,g.key):f!==null&&(f.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Re&&gs(F)===f.type)?(P=i(f,g.props),P.ref=pr(h,f,g),P.return=h,P):(P=Mi(g.type,g.key,g.props,null,h.mode,P),P.ref=pr(h,f,g),P.return=h,P)}function S(h,f,g,P){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=To(g,h.mode,P),f.return=h,f):(f=i(f,g.children||[]),f.return=h,f)}function C(h,f,g,P,F){return f===null||f.tag!==7?(f=pn(g,h.mode,P,F),f.return=h,f):(f=i(f,g),f.return=h,f)}function N(h,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Io(""+f,h.mode,g),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ie:return g=Mi(f.type,f.key,f.props,null,h.mode,g),g.ref=pr(h,null,f),g.return=h,g;case Se:return f=To(f,h.mode,g),f.return=h,f;case Re:var P=f._init;return N(h,P(f._payload),g)}if(Wn(f)||d(f))return f=pn(f,h.mode,g,null),f.return=h,f;ui(h,f)}return null}function k(h,f,g,P){var F=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return F!==null?null:u(h,f,""+g,P);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ie:return g.key===F?a(h,f,g,P):null;case Se:return g.key===F?S(h,f,g,P):null;case Re:return F=g._init,k(h,f,F(g._payload),P)}if(Wn(g)||d(g))return F!==null?null:C(h,f,g,P,null);ui(h,g)}return null}function L(h,f,g,P,F){if(typeof P=="string"&&P!==""||typeof P=="number")return h=h.get(g)||null,u(f,h,""+P,F);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Ie:return h=h.get(P.key===null?g:P.key)||null,a(f,h,P,F);case Se:return h=h.get(P.key===null?g:P.key)||null,S(f,h,P,F);case Re:var A=P._init;return L(h,f,g,A(P._payload),F)}if(Wn(P)||d(P))return h=h.get(g)||null,C(f,h,P,F,null);ui(f,P)}return null}function D(h,f,g,P){for(var F=null,A=null,U=f,B=f=0,ze=null;U!==null&&B<g.length;B++){U.index>B?(ze=U,U=null):ze=U.sibling;var te=k(h,U,g[B],P);if(te===null){U===null&&(U=ze);break}e&&U&&te.alternate===null&&t(h,U),f=l(te,f,B),A===null?F=te:A.sibling=te,A=te,U=ze}if(B===g.length)return n(h,U),me&&ln(h,B),F;if(U===null){for(;B<g.length;B++)U=N(h,g[B],P),U!==null&&(f=l(U,f,B),A===null?F=U:A.sibling=U,A=U);return me&&ln(h,B),F}for(U=r(h,U);B<g.length;B++)ze=L(U,h,B,g[B],P),ze!==null&&(e&&ze.alternate!==null&&U.delete(ze.key===null?B:ze.key),f=l(ze,f,B),A===null?F=ze:A.sibling=ze,A=ze);return e&&U.forEach(function(Zt){return t(h,Zt)}),me&&ln(h,B),F}function O(h,f,g,P){var F=d(g);if(typeof F!="function")throw Error(y(150));if(g=F.call(g),g==null)throw Error(y(151));for(var A=F=null,U=f,B=f=0,ze=null,te=g.next();U!==null&&!te.done;B++,te=g.next()){U.index>B?(ze=U,U=null):ze=U.sibling;var Zt=k(h,U,te.value,P);if(Zt===null){U===null&&(U=ze);break}e&&U&&Zt.alternate===null&&t(h,U),f=l(Zt,f,B),A===null?F=Zt:A.sibling=Zt,A=Zt,U=ze}if(te.done)return n(h,U),me&&ln(h,B),F;if(U===null){for(;!te.done;B++,te=g.next())te=N(h,te.value,P),te!==null&&(f=l(te,f,B),A===null?F=te:A.sibling=te,A=te);return me&&ln(h,B),F}for(U=r(h,U);!te.done;B++,te=g.next())te=L(U,h,B,te.value,P),te!==null&&(e&&te.alternate!==null&&U.delete(te.key===null?B:te.key),f=l(te,f,B),A===null?F=te:A.sibling=te,A=te);return e&&U.forEach(function(Jf){return t(h,Jf)}),me&&ln(h,B),F}function xe(h,f,g,P){if(typeof g=="object"&&g!==null&&g.type===J&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ie:e:{for(var F=g.key,A=f;A!==null;){if(A.key===F){if(F=g.type,F===J){if(A.tag===7){n(h,A.sibling),f=i(A,g.props.children),f.return=h,h=f;break e}}else if(A.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Re&&gs(F)===A.type){n(h,A.sibling),f=i(A,g.props),f.ref=pr(h,A,g),f.return=h,h=f;break e}n(h,A);break}else t(h,A);A=A.sibling}g.type===J?(f=pn(g.props.children,h.mode,P,g.key),f.return=h,h=f):(P=Mi(g.type,g.key,g.props,null,h.mode,P),P.ref=pr(h,f,g),P.return=h,h=P)}return o(h);case Se:e:{for(A=g.key;f!==null;){if(f.key===A)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(h,f.sibling),f=i(f,g.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=To(g,h.mode,P),f.return=h,h=f}return o(h);case Re:return A=g._init,xe(h,f,A(g._payload),P)}if(Wn(g))return D(h,f,g,P);if(d(g))return O(h,f,g,P);ui(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(h,f.sibling),f=i(f,g),f.return=h,h=f):(n(h,f),f=Io(g,h.mode,P),f.return=h,h=f),o(h)):n(h,f)}return xe}var Mn=Ss(!0),ws=Ss(!1),si=$t(null),ai=null,Ln=null,Al=null;function Ul(){Al=Ln=ai=null}function Vl(e){var t=si.current;de(si),e._currentValue=t}function $l(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zn(e,t){ai=e,Al=Ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ge=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(Al!==e)if(e={context:e,memoizedValue:t,next:null},Ln===null){if(ai===null)throw Error(y(308));Ln=e,ai.dependencies={lanes:0,firstContext:e}}else Ln=Ln.next=e;return t}var on=null;function Wl(e){on===null?on=[e]:on.push(e)}function xs(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Wl(t)):(n.next=i.next,i.next=n),t.interleaved=n,Tt(e,r)}function Tt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ht=!1;function Bl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Es(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ee&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Tt(e,n)}return i=r.interleaved,i===null?(t.next=t,Wl(r)):(t.next=i.next,i.next=t),r.interleaved=t,Tt(e,n)}function ci(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rl(e,n)}}function ks(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fi(e,t,n,r){var i=e.updateQueue;Ht=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var a=u,S=a.next;a.next=null,o===null?l=S:o.next=S,o=a;var C=e.alternate;C!==null&&(C=C.updateQueue,u=C.lastBaseUpdate,u!==o&&(u===null?C.firstBaseUpdate=S:u.next=S,C.lastBaseUpdate=a))}if(l!==null){var N=i.baseState;o=0,C=S=a=null,u=l;do{var k=u.lane,L=u.eventTime;if((r&k)===k){C!==null&&(C=C.next={eventTime:L,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var D=e,O=u;switch(k=t,L=n,O.tag){case 1:if(D=O.payload,typeof D=="function"){N=D.call(L,N,k);break e}N=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=O.payload,k=typeof D=="function"?D.call(L,N,k):D,k==null)break e;N=v({},N,k);break e;case 2:Ht=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,k=i.effects,k===null?i.effects=[u]:k.push(u))}else L={eventTime:L,lane:k,tag:u.tag,payload:u.payload,callback:u.callback,next:null},C===null?(S=C=L,a=N):C=C.next=L,o|=k;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;k=u,u=k.next,k.next=null,i.lastBaseUpdate=k,i.shared.pending=null}}while(!0);if(C===null&&(a=N),i.baseState=a,i.firstBaseUpdate=S,i.lastBaseUpdate=C,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);an|=o,e.lanes=o,e.memoizedState=N}}function Cs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(y(191,i));i.call(r)}}}var mr={},Et=$t(mr),hr=$t(mr),yr=$t(mr);function un(e){if(e===mr)throw Error(y(174));return e}function Hl(e,t){switch(ce(yr,t),ce(hr,e),ce(Et,mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Qi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Qi(t,e)}de(Et),ce(Et,t)}function Rn(){de(Et),de(hr),de(yr)}function Ns(e){un(yr.current);var t=un(Et.current),n=Qi(t,e.type);t!==n&&(ce(hr,e),ce(Et,n))}function Ql(e){hr.current===e&&(de(Et),de(hr))}var he=$t(0);function di(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yl=[];function Kl(){for(var e=0;e<Yl.length;e++)Yl[e]._workInProgressVersionPrimary=null;Yl.length=0}var pi=ie.ReactCurrentDispatcher,Gl=ie.ReactCurrentBatchConfig,sn=0,ye=null,Ne=null,Me=null,mi=!1,vr=!1,gr=0,Sf=0;function Ae(){throw Error(y(321))}function ql(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pt(e[n],t[n]))return!1;return!0}function Xl(e,t,n,r,i,l){if(sn=l,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,pi.current=e===null||e.memoizedState===null?kf:Cf,e=n(r,i),vr){l=0;do{if(vr=!1,gr=0,25<=l)throw Error(y(301));l+=1,Me=Ne=null,t.updateQueue=null,pi.current=Nf,e=n(r,i)}while(vr)}if(pi.current=vi,t=Ne!==null&&Ne.next!==null,sn=0,Me=Ne=ye=null,mi=!1,t)throw Error(y(300));return e}function Jl(){var e=gr!==0;return gr=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?ye.memoizedState=Me=e:Me=Me.next=e,Me}function ut(){if(Ne===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Me===null?ye.memoizedState:Me.next;if(t!==null)Me=t,Ne=e;else{if(e===null)throw Error(y(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Me===null?ye.memoizedState=Me=e:Me=Me.next=e}return Me}function Sr(e,t){return typeof t=="function"?t(e):t}function Zl(e){var t=ut(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=Ne,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var u=o=null,a=null,S=l;do{var C=S.lane;if((sn&C)===C)a!==null&&(a=a.next={lane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),r=S.hasEagerState?S.eagerState:e(r,S.action);else{var N={lane:C,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null};a===null?(u=a=N,o=r):a=a.next=N,ye.lanes|=C,an|=C}S=S.next}while(S!==null&&S!==l);a===null?o=r:a.next=u,pt(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,ye.lanes|=l,an|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function bl(e){var t=ut(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);pt(l,t.memoizedState)||(Ge=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function _s(){}function Ps(e,t){var n=ye,r=ut(),i=t(),l=!pt(r.memoizedState,i);if(l&&(r.memoizedState=i,Ge=!0),r=r.queue,eo(Ts.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,wr(9,Is.bind(null,n,r,i,t),void 0,null),Le===null)throw Error(y(349));(sn&30)!==0||js(n,t,i)}return i}function js(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Is(e,t,n,r){t.value=n,t.getSnapshot=r,Ms(t)&&Ls(e)}function Ts(e,t,n){return n(function(){Ms(t)&&Ls(e)})}function Ms(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pt(e,n)}catch{return!0}}function Ls(e){var t=Tt(e,1);t!==null&&gt(t,e,1,-1)}function zs(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sr,lastRenderedState:e},t.queue=e,e=e.dispatch=Ef.bind(null,ye,e),[t.memoizedState,e]}function wr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Rs(){return ut().memoizedState}function hi(e,t,n,r){var i=kt();ye.flags|=e,i.memoizedState=wr(1|t,n,void 0,r===void 0?null:r)}function yi(e,t,n,r){var i=ut();r=r===void 0?null:r;var l=void 0;if(Ne!==null){var o=Ne.memoizedState;if(l=o.destroy,r!==null&&ql(r,o.deps)){i.memoizedState=wr(t,n,l,r);return}}ye.flags|=e,i.memoizedState=wr(1|t,n,l,r)}function Ds(e,t){return hi(8390656,8,e,t)}function eo(e,t){return yi(2048,8,e,t)}function Os(e,t){return yi(4,2,e,t)}function Fs(e,t){return yi(4,4,e,t)}function As(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Us(e,t,n){return n=n!=null?n.concat([e]):null,yi(4,4,As.bind(null,t,e),n)}function to(){}function Vs(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ql(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $s(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ql(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ws(e,t,n){return(sn&21)===0?(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n):(pt(n,t)||(n=gu(),ye.lanes|=n,an|=n,e.baseState=!0),t)}function wf(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=Gl.transition;Gl.transition={};try{e(!1),t()}finally{oe=n,Gl.transition=r}}function Bs(){return ut().memoizedState}function xf(e,t,n){var r=qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hs(e))Qs(t,n);else if(n=xs(e,t,n,r),n!==null){var i=He();gt(n,e,r,i),Ys(n,t,r)}}function Ef(e,t,n){var r=qt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hs(e))Qs(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,u=l(o,n);if(i.hasEagerState=!0,i.eagerState=u,pt(u,o)){var a=t.interleaved;a===null?(i.next=i,Wl(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}n=xs(e,t,i,r),n!==null&&(i=He(),gt(n,e,r,i),Ys(n,t,r))}}function Hs(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function Qs(e,t){vr=mi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ys(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rl(e,n)}}var vi={readContext:ot,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},kf={readContext:ot,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:Ds,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,hi(4194308,4,As.bind(null,t,e),n)},useLayoutEffect:function(e,t){return hi(4194308,4,e,t)},useInsertionEffect:function(e,t){return hi(4,2,e,t)},useMemo:function(e,t){var n=kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=xf.bind(null,ye,e),[r.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:zs,useDebugValue:to,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=zs(!1),t=e[0];return e=wf.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ye,i=kt();if(me){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),Le===null)throw Error(y(349));(sn&30)!==0||js(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Ds(Ts.bind(null,r,l,e),[e]),r.flags|=2048,wr(9,Is.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=kt(),t=Le.identifierPrefix;if(me){var n=It,r=jt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=gr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Sf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Cf={readContext:ot,useCallback:Vs,useContext:ot,useEffect:eo,useImperativeHandle:Us,useInsertionEffect:Os,useLayoutEffect:Fs,useMemo:$s,useReducer:Zl,useRef:Rs,useState:function(){return Zl(Sr)},useDebugValue:to,useDeferredValue:function(e){var t=ut();return Ws(t,Ne.memoizedState,e)},useTransition:function(){var e=Zl(Sr)[0],t=ut().memoizedState;return[e,t]},useMutableSource:_s,useSyncExternalStore:Ps,useId:Bs,unstable_isNewReconciler:!1},Nf={readContext:ot,useCallback:Vs,useContext:ot,useEffect:eo,useImperativeHandle:Us,useInsertionEffect:Os,useLayoutEffect:Fs,useMemo:$s,useReducer:bl,useRef:Rs,useState:function(){return bl(Sr)},useDebugValue:to,useDeferredValue:function(e){var t=ut();return Ne===null?t.memoizedState=e:Ws(t,Ne.memoizedState,e)},useTransition:function(){var e=bl(Sr)[0],t=ut().memoizedState;return[e,t]},useMutableSource:_s,useSyncExternalStore:Ps,useId:Bs,unstable_isNewReconciler:!1};function ht(e,t){if(e&&e.defaultProps){t=v({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function no(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:v({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gi={isMounted:function(e){return(e=e._reactInternals)?en(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=He(),i=qt(e),l=Mt(r,i);l.payload=t,n!=null&&(l.callback=n),t=Qt(e,l,i),t!==null&&(gt(t,e,i,r),ci(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=He(),i=qt(e),l=Mt(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Qt(e,l,i),t!==null&&(gt(t,e,i,r),ci(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=He(),r=qt(e),i=Mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Qt(e,i,r),t!==null&&(gt(t,e,r,n),ci(t,e,r))}};function Ks(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!or(n,r)||!or(i,l):!0}function Gs(e,t,n){var r=!1,i=Wt,l=t.contextType;return typeof l=="object"&&l!==null?l=ot(l):(i=Ke(t)?nn:Fe.current,r=t.contextTypes,l=(r=r!=null)?Pn(e,i):Wt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=gi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&gi.enqueueReplaceState(t,t.state,null)}function ro(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Bl(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=ot(l):(l=Ke(t)?nn:Fe.current,i.context=Pn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(no(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&gi.enqueueReplaceState(i,i.state,null),fi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Dn(e,t){try{var n="",r=t;do n+=W(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function io(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function lo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _f=typeof WeakMap=="function"?WeakMap:Map;function Xs(e,t,n){n=Mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ni||(Ni=!0,xo=r),lo(e,t)},n}function Js(e,t,n){n=Mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){lo(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){lo(e,t),typeof r!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Zs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _f;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Vf.bind(null,e,t,n),t.then(e,e))}function bs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ea(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mt(-1,1),t.tag=2,Qt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Pf=ie.ReactCurrentOwner,Ge=!1;function Be(e,t,n,r){t.child=e===null?ws(t,null,n,r):Mn(t,e.child,n,r)}function ta(e,t,n,r,i){n=n.render;var l=t.ref;return zn(t,i),r=Xl(e,t,n,r,l,i),n=Jl(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Lt(e,t,i)):(me&&n&&zl(t),t.flags|=1,Be(e,t,r,i),t.child)}function na(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!jo(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,ra(e,t,l,r,i)):(e=Mi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&i)===0){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:or,n(o,r)&&e.ref===t.ref)return Lt(e,t,i)}return t.flags|=1,e=Jt(l,r),e.ref=t.ref,e.return=t,t.child=e}function ra(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(or(l,r)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=r=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,Lt(e,t,i)}return oo(e,t,n,r,i)}function ia(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Fn,rt),rt|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ce(Fn,rt),rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,ce(Fn,rt),rt|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,ce(Fn,rt),rt|=r;return Be(e,t,i,n),t.child}function la(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function oo(e,t,n,r,i){var l=Ke(n)?nn:Fe.current;return l=Pn(t,l),zn(t,i),n=Xl(e,t,n,r,l,i),r=Jl(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Lt(e,t,i)):(me&&r&&zl(t),t.flags|=1,Be(e,t,n,i),t.child)}function oa(e,t,n,r,i){if(Ke(n)){var l=!0;ni(t)}else l=!1;if(zn(t,i),t.stateNode===null)wi(e,t),Gs(t,n,r),ro(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,u=t.memoizedProps;o.props=u;var a=o.context,S=n.contextType;typeof S=="object"&&S!==null?S=ot(S):(S=Ke(n)?nn:Fe.current,S=Pn(t,S));var C=n.getDerivedStateFromProps,N=typeof C=="function"||typeof o.getSnapshotBeforeUpdate=="function";N||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||a!==S)&&qs(t,o,r,S),Ht=!1;var k=t.memoizedState;o.state=k,fi(t,r,o,i),a=t.memoizedState,u!==r||k!==a||Ye.current||Ht?(typeof C=="function"&&(no(t,n,C,r),a=t.memoizedState),(u=Ht||Ks(t,n,u,r,k,a,S))?(N||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=S,r=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Es(e,t),u=t.memoizedProps,S=t.type===t.elementType?u:ht(t.type,u),o.props=S,N=t.pendingProps,k=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=ot(a):(a=Ke(n)?nn:Fe.current,a=Pn(t,a));var L=n.getDerivedStateFromProps;(C=typeof L=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==N||k!==a)&&qs(t,o,r,a),Ht=!1,k=t.memoizedState,o.state=k,fi(t,r,o,i);var D=t.memoizedState;u!==N||k!==D||Ye.current||Ht?(typeof L=="function"&&(no(t,n,L,r),D=t.memoizedState),(S=Ht||Ks(t,n,S,r,k,D,a)||!1)?(C||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,D,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,D,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=D),o.props=r,o.state=D,o.context=a,r=S):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),r=!1)}return uo(e,t,n,r,l,i)}function uo(e,t,n,r,i,l){la(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&fs(t,n,!1),Lt(e,t,l);r=t.stateNode,Pf.current=t;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Mn(t,e.child,null,l),t.child=Mn(t,null,u,l)):Be(e,t,u,l),t.memoizedState=r.state,i&&fs(t,n,!0),t.child}function ua(e){var t=e.stateNode;t.pendingContext?as(e,t.pendingContext,t.pendingContext!==t.context):t.context&&as(e,t.context,!1),Hl(e,t.containerInfo)}function sa(e,t,n,r,i){return Tn(),Fl(i),t.flags|=256,Be(e,t,n,r),t.child}var so={dehydrated:null,treeContext:null,retryLane:0};function ao(e){return{baseLanes:e,cachePool:null,transitions:null}}function aa(e,t,n){var r=t.pendingProps,i=he.current,l=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ce(he,i&1),e===null)return Ol(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Li(o,r,0,null),e=pn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ao(n),t.memoizedState=so,e):co(t,o));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return jf(e,t,o,r,u,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,u=i.sibling;var a={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Jt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?l=Jt(u,l):(l=pn(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?ao(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=so,r}return l=e.child,e=l.sibling,r=Jt(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function co(e,t){return t=Li({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Si(e,t,n,r){return r!==null&&Fl(r),Mn(t,e.child,null,n),e=co(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jf(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=io(Error(y(422))),Si(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Li({mode:"visible",children:r.children},i,0,null),l=pn(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&Mn(t,e.child,null,o),t.child.memoizedState=ao(o),t.memoizedState=so,l);if((t.mode&1)===0)return Si(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(y(419)),r=io(l,r,void 0),Si(e,t,o,r)}if(u=(o&e.childLanes)!==0,Ge||u){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Tt(e,i),gt(r,e,i,-1))}return Po(),r=io(Error(y(421))),Si(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=$f.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,nt=Vt(i.nextSibling),tt=t,me=!0,mt=null,e!==null&&(it[lt++]=jt,it[lt++]=It,it[lt++]=rn,jt=e.id,It=e.overflow,rn=t),t=co(t,r.children),t.flags|=4096,t)}function ca(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$l(e.return,t,n)}function fo(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function fa(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(Be(e,t,r.children,n),r=he.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ca(e,n,t);else if(e.tag===19)ca(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ce(he,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&di(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),fo(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&di(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}fo(t,!0,n,null,l);break;case"together":fo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),an|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=Jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function If(e,t,n){switch(t.tag){case 3:ua(t),Tn();break;case 5:Ns(t);break;case 1:Ke(t.type)&&ni(t);break;case 4:Hl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ce(si,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ce(he,he.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?aa(e,t,n):(ce(he,he.current&1),e=Lt(e,t,n),e!==null?e.sibling:null);ce(he,he.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return fa(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(he,he.current),r)break;return null;case 22:case 23:return t.lanes=0,ia(e,t,n)}return Lt(e,t,n)}var da,po,pa,ma;da=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},po=function(){},pa=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,un(Et.current);var l=null;switch(n){case"input":i=$i(e,i),r=$i(e,r),l=[];break;case"select":i=v({},i,{value:void 0}),r=v({},r,{value:void 0}),l=[];break;case"textarea":i=Hi(e,i),r=Hi(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=br)}Yi(n,r);var o;n=null;for(S in i)if(!r.hasOwnProperty(S)&&i.hasOwnProperty(S)&&i[S]!=null)if(S==="style"){var u=i[S];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else S!=="dangerouslySetInnerHTML"&&S!=="children"&&S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(x.hasOwnProperty(S)?l||(l=[]):(l=l||[]).push(S,null));for(S in r){var a=r[S];if(u=i?.[S],r.hasOwnProperty(S)&&a!==u&&(a!=null||u!=null))if(S==="style")if(u){for(o in u)!u.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&u[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(l||(l=[]),l.push(S,n)),n=a;else S==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(l=l||[]).push(S,a)):S==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(S,""+a):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&(x.hasOwnProperty(S)?(a!=null&&S==="onScroll"&&fe("scroll",e),l||u===a||(l=[])):(l=l||[]).push(S,a))}n&&(l=l||[]).push("style",n);var S=l;(t.updateQueue=S)&&(t.flags|=4)}},ma=function(e,t,n,r){n!==r&&(t.flags|=4)};function xr(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Tf(e,t,n){var r=t.pendingProps;switch(Rl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return Ke(t.type)&&ti(),Ue(t),null;case 3:return r=t.stateNode,Rn(),de(Ye),de(Fe),Kl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(oi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,mt!==null&&(Co(mt),mt=null))),po(e,t),Ue(t),null;case 5:Ql(t);var i=un(yr.current);if(n=t.type,e!==null&&t.stateNode!=null)pa(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return Ue(t),null}if(e=un(Et.current),oi(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[xt]=t,r[fr]=l,e=(t.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<sr.length;i++)fe(sr[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":Go(r,l),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},fe("invalid",r);break;case"textarea":Jo(r,l),fe("invalid",r)}Yi(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&Zr(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&Zr(r.textContent,u,e),i=["children",""+u]):x.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":Ir(r),Xo(r,l,!0);break;case"textarea":Ir(r),bo(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=br)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=eu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[xt]=t,e[fr]=r,da(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ki(n,r),n){case"dialog":fe("cancel",e),fe("close",e),i=r;break;case"iframe":case"object":case"embed":fe("load",e),i=r;break;case"video":case"audio":for(i=0;i<sr.length;i++)fe(sr[i],e);i=r;break;case"source":fe("error",e),i=r;break;case"img":case"image":case"link":fe("error",e),fe("load",e),i=r;break;case"details":fe("toggle",e),i=r;break;case"input":Go(e,r),i=$i(e,r),fe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=v({},r,{value:void 0}),fe("invalid",e);break;case"textarea":Jo(e,r),i=Hi(e,r),fe("invalid",e);break;default:i=r}Yi(n,i),u=i;for(l in u)if(u.hasOwnProperty(l)){var a=u[l];l==="style"?ru(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&tu(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Bn(e,a):typeof a=="number"&&Bn(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(x.hasOwnProperty(l)?a!=null&&l==="onScroll"&&fe("scroll",e):a!=null&&je(e,l,a,o))}switch(n){case"input":Ir(e),Xo(e,r,!1);break;case"textarea":Ir(e),bo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+le(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?hn(e,!!r.multiple,l,!1):r.defaultValue!=null&&hn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=br)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ue(t),null;case 6:if(e&&t.stateNode!=null)ma(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=un(yr.current),un(Et.current),oi(t)){if(r=t.stateNode,n=t.memoizedProps,r[xt]=t,(l=r.nodeValue!==n)&&(e=tt,e!==null))switch(e.tag){case 3:Zr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=t,t.stateNode=r}return Ue(t),null;case 13:if(de(he),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&nt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)vs(),Tn(),t.flags|=98560,l=!1;else if(l=oi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(y(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(y(317));l[xt]=t}else Tn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),l=!1}else mt!==null&&(Co(mt),mt=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(he.current&1)!==0?_e===0&&(_e=3):Po())),t.updateQueue!==null&&(t.flags|=4),Ue(t),null);case 4:return Rn(),po(e,t),e===null&&ar(t.stateNode.containerInfo),Ue(t),null;case 10:return Vl(t.type._context),Ue(t),null;case 17:return Ke(t.type)&&ti(),Ue(t),null;case 19:if(de(he),l=t.memoizedState,l===null)return Ue(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)xr(l,!1);else{if(_e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=di(e),o!==null){for(t.flags|=128,xr(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ce(he,he.current&1|2),t.child}e=e.sibling}l.tail!==null&&we()>An&&(t.flags|=128,r=!0,xr(l,!1),t.lanes=4194304)}else{if(!r)if(e=di(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!me)return Ue(t),null}else 2*we()-l.renderingStartTime>An&&n!==1073741824&&(t.flags|=128,r=!0,xr(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=we(),t.sibling=null,n=he.current,ce(he,r?n&1|2:n&1),t):(Ue(t),null);case 22:case 23:return _o(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(rt&1073741824)!==0&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function Mf(e,t){switch(Rl(t),t.tag){case 1:return Ke(t.type)&&ti(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rn(),de(Ye),de(Fe),Kl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ql(t),null;case 13:if(de(he),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));Tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(he),null;case 4:return Rn(),null;case 10:return Vl(t.type._context),null;case 22:case 23:return _o(),null;case 24:return null;default:return null}}var xi=!1,Ve=!1,Lf=typeof WeakSet=="function"?WeakSet:Set,z=null;function On(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(e,t,r)}else n.current=null}function mo(e,t,n){try{n()}catch(r){ve(e,t,r)}}var ha=!1;function zf(e,t){if(Nl=$r,e=Ku(),vl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,u=-1,a=-1,S=0,C=0,N=e,k=null;t:for(;;){for(var L;N!==n||i!==0&&N.nodeType!==3||(u=o+i),N!==l||r!==0&&N.nodeType!==3||(a=o+r),N.nodeType===3&&(o+=N.nodeValue.length),(L=N.firstChild)!==null;)k=N,N=L;for(;;){if(N===e)break t;if(k===n&&++S===i&&(u=o),k===l&&++C===r&&(a=o),(L=N.nextSibling)!==null)break;N=k,k=N.parentNode}N=L}n=u===-1||a===-1?null:{start:u,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(_l={focusedElem:e,selectionRange:n},$r=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var D=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(D!==null){var O=D.memoizedProps,xe=D.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?O:ht(t.type,O),xe);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(P){ve(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return D=ha,ha=!1,D}function Er(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&mo(t,n,l)}i=i.next}while(i!==r)}}function Ei(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ho(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function ya(e){var t=e.alternate;t!==null&&(e.alternate=null,ya(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[fr],delete t[Tl],delete t[hf],delete t[yf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function va(e){return e.tag===5||e.tag===3||e.tag===4}function ga(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||va(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=br));else if(r!==4&&(e=e.child,e!==null))for(yo(e,t,n),e=e.sibling;e!==null;)yo(e,t,n),e=e.sibling}function vo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(vo(e,t,n),e=e.sibling;e!==null;)vo(e,t,n),e=e.sibling}var De=null,yt=!1;function Yt(e,t,n){for(n=n.child;n!==null;)Sa(e,t,n),n=n.sibling}function Sa(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Dr,n)}catch{}switch(n.tag){case 5:Ve||On(n,t);case 6:var r=De,i=yt;De=null,Yt(e,t,n),De=r,yt=i,De!==null&&(yt?(e=De,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(yt?(e=De,n=n.stateNode,e.nodeType===8?Il(e.parentNode,n):e.nodeType===1&&Il(e,n),er(e)):Il(De,n.stateNode));break;case 4:r=De,i=yt,De=n.stateNode.containerInfo,yt=!0,Yt(e,t,n),De=r,yt=i;break;case 0:case 11:case 14:case 15:if(!Ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&((l&2)!==0||(l&4)!==0)&&mo(n,t,o),i=i.next}while(i!==r)}Yt(e,t,n);break;case 1:if(!Ve&&(On(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){ve(n,t,u)}Yt(e,t,n);break;case 21:Yt(e,t,n);break;case 22:n.mode&1?(Ve=(r=Ve)||n.memoizedState!==null,Yt(e,t,n),Ve=r):Yt(e,t,n);break;default:Yt(e,t,n)}}function wa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Lf),t.forEach(function(r){var i=Wf.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function vt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 5:De=u.stateNode,yt=!1;break e;case 3:De=u.stateNode.containerInfo,yt=!0;break e;case 4:De=u.stateNode.containerInfo,yt=!0;break e}u=u.return}if(De===null)throw Error(y(160));Sa(l,o,i),De=null,yt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(S){ve(i,t,S)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xa(t,e),t=t.sibling}function xa(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vt(t,e),Ct(e),r&4){try{Er(3,e,e.return),Ei(3,e)}catch(O){ve(e,e.return,O)}try{Er(5,e,e.return)}catch(O){ve(e,e.return,O)}}break;case 1:vt(t,e),Ct(e),r&512&&n!==null&&On(n,n.return);break;case 5:if(vt(t,e),Ct(e),r&512&&n!==null&&On(n,n.return),e.flags&32){var i=e.stateNode;try{Bn(i,"")}catch(O){ve(e,e.return,O)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&qo(i,l),Ki(u,o);var S=Ki(u,l);for(o=0;o<a.length;o+=2){var C=a[o],N=a[o+1];C==="style"?ru(i,N):C==="dangerouslySetInnerHTML"?tu(i,N):C==="children"?Bn(i,N):je(i,C,N,S)}switch(u){case"input":Wi(i,l);break;case"textarea":Zo(i,l);break;case"select":var k=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var L=l.value;L!=null?hn(i,!!l.multiple,L,!1):k!==!!l.multiple&&(l.defaultValue!=null?hn(i,!!l.multiple,l.defaultValue,!0):hn(i,!!l.multiple,l.multiple?[]:"",!1))}i[fr]=l}catch(O){ve(e,e.return,O)}}break;case 6:if(vt(t,e),Ct(e),r&4){if(e.stateNode===null)throw Error(y(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(O){ve(e,e.return,O)}}break;case 3:if(vt(t,e),Ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{er(t.containerInfo)}catch(O){ve(e,e.return,O)}break;case 4:vt(t,e),Ct(e);break;case 13:vt(t,e),Ct(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(wo=we())),r&4&&wa(e);break;case 22:if(C=n!==null&&n.memoizedState!==null,e.mode&1?(Ve=(S=Ve)||C,vt(t,e),Ve=S):vt(t,e),Ct(e),r&8192){if(S=e.memoizedState!==null,(e.stateNode.isHidden=S)&&!C&&(e.mode&1)!==0)for(z=e,C=e.child;C!==null;){for(N=z=C;z!==null;){switch(k=z,L=k.child,k.tag){case 0:case 11:case 14:case 15:Er(4,k,k.return);break;case 1:On(k,k.return);var D=k.stateNode;if(typeof D.componentWillUnmount=="function"){r=k,n=k.return;try{t=r,D.props=t.memoizedProps,D.state=t.memoizedState,D.componentWillUnmount()}catch(O){ve(r,n,O)}}break;case 5:On(k,k.return);break;case 22:if(k.memoizedState!==null){Ca(N);continue}}L!==null?(L.return=k,z=L):Ca(N)}C=C.sibling}e:for(C=null,N=e;;){if(N.tag===5){if(C===null){C=N;try{i=N.stateNode,S?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=N.stateNode,a=N.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=nu("display",o))}catch(O){ve(e,e.return,O)}}}else if(N.tag===6){if(C===null)try{N.stateNode.nodeValue=S?"":N.memoizedProps}catch(O){ve(e,e.return,O)}}else if((N.tag!==22&&N.tag!==23||N.memoizedState===null||N===e)&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===e)break e;for(;N.sibling===null;){if(N.return===null||N.return===e)break e;C===N&&(C=null),N=N.return}C===N&&(C=null),N.sibling.return=N.return,N=N.sibling}}break;case 19:vt(t,e),Ct(e),r&4&&wa(e);break;case 21:break;default:vt(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(va(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Bn(i,""),r.flags&=-33);var l=ga(e);vo(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,u=ga(e);yo(e,u,o);break;default:throw Error(y(161))}}catch(a){ve(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rf(e,t,n){z=e,Ea(e)}function Ea(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var i=z,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||xi;if(!o){var u=i.alternate,a=u!==null&&u.memoizedState!==null||Ve;u=xi;var S=Ve;if(xi=o,(Ve=a)&&!S)for(z=i;z!==null;)o=z,a=o.child,o.tag===22&&o.memoizedState!==null?Na(i):a!==null?(a.return=o,z=a):Na(i);for(;l!==null;)z=l,Ea(l),l=l.sibling;z=i,xi=u,Ve=S}ka(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,z=l):ka(e)}}function ka(e){for(;z!==null;){var t=z;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ve||Ei(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ve)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ht(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Cs(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Cs(t,o,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var S=t.alternate;if(S!==null){var C=S.memoizedState;if(C!==null){var N=C.dehydrated;N!==null&&er(N)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}Ve||t.flags&512&&ho(t)}catch(k){ve(t,t.return,k)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function Ca(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function Na(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ei(4,t)}catch(a){ve(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){ve(t,i,a)}}var l=t.return;try{ho(t)}catch(a){ve(t,l,a)}break;case 5:var o=t.return;try{ho(t)}catch(a){ve(t,o,a)}}}catch(a){ve(t,t.return,a)}if(t===e){z=null;break}var u=t.sibling;if(u!==null){u.return=t.return,z=u;break}z=t.return}}var Df=Math.ceil,ki=ie.ReactCurrentDispatcher,go=ie.ReactCurrentOwner,st=ie.ReactCurrentBatchConfig,ee=0,Le=null,ke=null,Oe=0,rt=0,Fn=$t(0),_e=0,kr=null,an=0,Ci=0,So=0,Cr=null,qe=null,wo=0,An=1/0,zt=null,Ni=!1,xo=null,Kt=null,_i=!1,Gt=null,Pi=0,Nr=0,Eo=null,ji=-1,Ii=0;function He(){return(ee&6)!==0?we():ji!==-1?ji:ji=we()}function qt(e){return(e.mode&1)===0?1:(ee&2)!==0&&Oe!==0?Oe&-Oe:gf.transition!==null?(Ii===0&&(Ii=gu()),Ii):(e=oe,e!==0||(e=window.event,e=e===void 0?16:Pu(e.type)),e)}function gt(e,t,n,r){if(50<Nr)throw Nr=0,Eo=null,Error(y(185));qn(e,n,r),((ee&2)===0||e!==Le)&&(e===Le&&((ee&2)===0&&(Ci|=n),_e===4&&Xt(e,Oe)),Xe(e,r),n===1&&ee===0&&(t.mode&1)===0&&(An=we()+500,ri&&Bt()))}function Xe(e,t){var n=e.callbackNode;vc(e,t);var r=Ar(e,e===Le?Oe:0);if(r===0)n!==null&&hu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&hu(n),t===1)e.tag===0?vf(Pa.bind(null,e)):ds(Pa.bind(null,e)),pf(function(){(ee&6)===0&&Bt()}),n=null;else{switch(Su(r)){case 1:n=el;break;case 4:n=yu;break;case 16:n=Rr;break;case 536870912:n=vu;break;default:n=Rr}n=Da(n,_a.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _a(e,t){if(ji=-1,Ii=0,(ee&6)!==0)throw Error(y(327));var n=e.callbackNode;if(Un()&&e.callbackNode!==n)return null;var r=Ar(e,e===Le?Oe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ti(e,r);else{t=r;var i=ee;ee|=2;var l=Ia();(Le!==e||Oe!==t)&&(zt=null,An=we()+500,fn(e,t));do try{Af();break}catch(u){ja(e,u)}while(!0);Ul(),ki.current=l,ee=i,ke!==null?t=0:(Le=null,Oe=0,t=_e)}if(t!==0){if(t===2&&(i=tl(e),i!==0&&(r=i,t=ko(e,i))),t===1)throw n=kr,fn(e,0),Xt(e,r),Xe(e,we()),n;if(t===6)Xt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Of(i)&&(t=Ti(e,r),t===2&&(l=tl(e),l!==0&&(r=l,t=ko(e,l))),t===1))throw n=kr,fn(e,0),Xt(e,r),Xe(e,we()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:dn(e,qe,zt);break;case 3:if(Xt(e,r),(r&130023424)===r&&(t=wo+500-we(),10<t)){if(Ar(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){He(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=jl(dn.bind(null,e,qe,zt),t);break}dn(e,qe,zt);break;case 4:if(Xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-dt(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Df(r/1960))-r,10<r){e.timeoutHandle=jl(dn.bind(null,e,qe,zt),r);break}dn(e,qe,zt);break;case 5:dn(e,qe,zt);break;default:throw Error(y(329))}}}return Xe(e,we()),e.callbackNode===n?_a.bind(null,e):null}function ko(e,t){var n=Cr;return e.current.memoizedState.isDehydrated&&(fn(e,t).flags|=256),e=Ti(e,t),e!==2&&(t=qe,qe=n,t!==null&&Co(t)),e}function Co(e){qe===null?qe=e:qe.push.apply(qe,e)}function Of(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!pt(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xt(e,t){for(t&=~So,t&=~Ci,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function Pa(e){if((ee&6)!==0)throw Error(y(327));Un();var t=Ar(e,0);if((t&1)===0)return Xe(e,we()),null;var n=Ti(e,t);if(e.tag!==0&&n===2){var r=tl(e);r!==0&&(t=r,n=ko(e,r))}if(n===1)throw n=kr,fn(e,0),Xt(e,t),Xe(e,we()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,dn(e,qe,zt),Xe(e,we()),null}function No(e,t){var n=ee;ee|=1;try{return e(t)}finally{ee=n,ee===0&&(An=we()+500,ri&&Bt())}}function cn(e){Gt!==null&&Gt.tag===0&&(ee&6)===0&&Un();var t=ee;ee|=1;var n=st.transition,r=oe;try{if(st.transition=null,oe=1,e)return e()}finally{oe=r,st.transition=n,ee=t,(ee&6)===0&&Bt()}}function _o(){rt=Fn.current,de(Fn)}function fn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,df(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(Rl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ti();break;case 3:Rn(),de(Ye),de(Fe),Kl();break;case 5:Ql(r);break;case 4:Rn();break;case 13:de(he);break;case 19:de(he);break;case 10:Vl(r.type._context);break;case 22:case 23:_o()}n=n.return}if(Le=e,ke=e=Jt(e.current,null),Oe=rt=t,_e=0,kr=null,So=Ci=an=0,qe=Cr=null,on!==null){for(t=0;t<on.length;t++)if(n=on[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}on=null}return e}function ja(e,t){do{var n=ke;try{if(Ul(),pi.current=vi,mi){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}mi=!1}if(sn=0,Me=Ne=ye=null,vr=!1,gr=0,go.current=null,n===null||n.return===null){_e=1,kr=t,ke=null;break}e:{var l=e,o=n.return,u=n,a=t;if(t=Oe,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var S=a,C=u,N=C.tag;if((C.mode&1)===0&&(N===0||N===11||N===15)){var k=C.alternate;k?(C.updateQueue=k.updateQueue,C.memoizedState=k.memoizedState,C.lanes=k.lanes):(C.updateQueue=null,C.memoizedState=null)}var L=bs(o);if(L!==null){L.flags&=-257,ea(L,o,u,l,t),L.mode&1&&Zs(l,S,t),t=L,a=S;var D=t.updateQueue;if(D===null){var O=new Set;O.add(a),t.updateQueue=O}else D.add(a);break e}else{if((t&1)===0){Zs(l,S,t),Po();break e}a=Error(y(426))}}else if(me&&u.mode&1){var xe=bs(o);if(xe!==null){(xe.flags&65536)===0&&(xe.flags|=256),ea(xe,o,u,l,t),Fl(Dn(a,u));break e}}l=a=Dn(a,u),_e!==4&&(_e=2),Cr===null?Cr=[l]:Cr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var h=Xs(l,a,t);ks(l,h);break e;case 1:u=a;var f=l.type,g=l.stateNode;if((l.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Kt===null||!Kt.has(g)))){l.flags|=65536,t&=-t,l.lanes|=t;var P=Js(l,u,t);ks(l,P);break e}}l=l.return}while(l!==null)}Ma(n)}catch(F){t=F,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function Ia(){var e=ki.current;return ki.current=vi,e===null?vi:e}function Po(){(_e===0||_e===3||_e===2)&&(_e=4),Le===null||(an&268435455)===0&&(Ci&268435455)===0||Xt(Le,Oe)}function Ti(e,t){var n=ee;ee|=2;var r=Ia();(Le!==e||Oe!==t)&&(zt=null,fn(e,t));do try{Ff();break}catch(i){ja(e,i)}while(!0);if(Ul(),ee=n,ki.current=r,ke!==null)throw Error(y(261));return Le=null,Oe=0,_e}function Ff(){for(;ke!==null;)Ta(ke)}function Af(){for(;ke!==null&&!sc();)Ta(ke)}function Ta(e){var t=Ra(e.alternate,e,rt);e.memoizedProps=e.pendingProps,t===null?Ma(e):ke=t,go.current=null}function Ma(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Tf(n,t,rt),n!==null){ke=n;return}}else{if(n=Mf(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,ke=null;return}}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);_e===0&&(_e=5)}function dn(e,t,n){var r=oe,i=st.transition;try{st.transition=null,oe=1,Uf(e,t,n,r)}finally{st.transition=i,oe=r}return null}function Uf(e,t,n,r){do Un();while(Gt!==null);if((ee&6)!==0)throw Error(y(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(gc(e,l),e===Le&&(ke=Le=null,Oe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||_i||(_i=!0,Da(Rr,function(){return Un(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=st.transition,st.transition=null;var o=oe;oe=1;var u=ee;ee|=4,go.current=null,zf(e,n),xa(n,e),lf(_l),$r=!!Nl,_l=Nl=null,e.current=n,Rf(n),ac(),ee=u,oe=o,st.transition=l}else e.current=n;if(_i&&(_i=!1,Gt=e,Pi=i),l=e.pendingLanes,l===0&&(Kt=null),dc(n.stateNode),Xe(e,we()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ni)throw Ni=!1,e=xo,xo=null,e;return(Pi&1)!==0&&e.tag!==0&&Un(),l=e.pendingLanes,(l&1)!==0?e===Eo?Nr++:(Nr=0,Eo=e):Nr=0,Bt(),null}function Un(){if(Gt!==null){var e=Su(Pi),t=st.transition,n=oe;try{if(st.transition=null,oe=16>e?16:e,Gt===null)var r=!1;else{if(e=Gt,Gt=null,Pi=0,(ee&6)!==0)throw Error(y(331));var i=ee;for(ee|=4,z=e.current;z!==null;){var l=z,o=l.child;if((z.flags&16)!==0){var u=l.deletions;if(u!==null){for(var a=0;a<u.length;a++){var S=u[a];for(z=S;z!==null;){var C=z;switch(C.tag){case 0:case 11:case 15:Er(8,C,l)}var N=C.child;if(N!==null)N.return=C,z=N;else for(;z!==null;){C=z;var k=C.sibling,L=C.return;if(ya(C),C===S){z=null;break}if(k!==null){k.return=L,z=k;break}z=L}}}var D=l.alternate;if(D!==null){var O=D.child;if(O!==null){D.child=null;do{var xe=O.sibling;O.sibling=null,O=xe}while(O!==null)}}z=l}}if((l.subtreeFlags&2064)!==0&&o!==null)o.return=l,z=o;else e:for(;z!==null;){if(l=z,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Er(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,z=h;break e}z=l.return}}var f=e.current;for(z=f;z!==null;){o=z;var g=o.child;if((o.subtreeFlags&2064)!==0&&g!==null)g.return=o,z=g;else e:for(o=f;z!==null;){if(u=z,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:Ei(9,u)}}catch(F){ve(u,u.return,F)}if(u===o){z=null;break e}var P=u.sibling;if(P!==null){P.return=u.return,z=P;break e}z=u.return}}if(ee=i,Bt(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Dr,e)}catch{}r=!0}return r}finally{oe=n,st.transition=t}}return!1}function La(e,t,n){t=Dn(n,t),t=Xs(e,t,1),e=Qt(e,t,1),t=He(),e!==null&&(qn(e,1,t),Xe(e,t))}function ve(e,t,n){if(e.tag===3)La(e,e,n);else for(;t!==null;){if(t.tag===3){La(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kt===null||!Kt.has(r))){e=Dn(n,e),e=Js(t,e,1),t=Qt(t,e,1),e=He(),t!==null&&(qn(t,1,e),Xe(t,e));break}}t=t.return}}function Vf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&n,Le===e&&(Oe&n)===n&&(_e===4||_e===3&&(Oe&130023424)===Oe&&500>we()-wo?fn(e,0):So|=n),Xe(e,t)}function za(e,t){t===0&&((e.mode&1)===0?t=1:(t=Fr,Fr<<=1,(Fr&130023424)===0&&(Fr=4194304)));var n=He();e=Tt(e,t),e!==null&&(qn(e,t,n),Xe(e,n))}function $f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),za(e,n)}function Wf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),za(e,n)}var Ra;Ra=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ye.current)Ge=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ge=!1,If(e,t,n);Ge=(e.flags&131072)!==0}else Ge=!1,me&&(t.flags&1048576)!==0&&ps(t,li,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;wi(e,t),e=t.pendingProps;var i=Pn(t,Fe.current);zn(t,n),i=Xl(null,t,r,e,i,n);var l=Jl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(r)?(l=!0,ni(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bl(t),i.updater=gi,t.stateNode=i,i._reactInternals=t,ro(t,r,e,n),t=uo(null,t,r,!0,l,n)):(t.tag=0,me&&l&&zl(t),Be(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(wi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Hf(r),e=ht(r,e),i){case 0:t=oo(null,t,r,e,n);break e;case 1:t=oa(null,t,r,e,n);break e;case 11:t=ta(null,t,r,e,n);break e;case 14:t=na(null,t,r,ht(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),oo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),oa(e,t,r,i,n);case 3:e:{if(ua(t),e===null)throw Error(y(387));r=t.pendingProps,l=t.memoizedState,i=l.element,Es(e,t),fi(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=Dn(Error(y(423)),t),t=sa(e,t,r,n,i);break e}else if(r!==i){i=Dn(Error(y(424)),t),t=sa(e,t,r,n,i);break e}else for(nt=Vt(t.stateNode.containerInfo.firstChild),tt=t,me=!0,mt=null,n=ws(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tn(),r===i){t=Lt(e,t,n);break e}Be(e,t,r,n)}t=t.child}return t;case 5:return Ns(t),e===null&&Ol(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Pl(r,i)?o=null:l!==null&&Pl(r,l)&&(t.flags|=32),la(e,t),Be(e,t,o,n),t.child;case 6:return e===null&&Ol(t),null;case 13:return aa(e,t,n);case 4:return Hl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Mn(t,null,r,n):Be(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),ta(e,t,r,i,n);case 7:return Be(e,t,t.pendingProps,n),t.child;case 8:return Be(e,t,t.pendingProps.children,n),t.child;case 12:return Be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,ce(si,r._currentValue),r._currentValue=o,l!==null)if(pt(l.value,o)){if(l.children===i.children&&!Ye.current){t=Lt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){o=l.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=Mt(-1,n&-n),a.tag=2;var S=l.updateQueue;if(S!==null){S=S.shared;var C=S.pending;C===null?a.next=a:(a.next=C.next,C.next=a),S.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),$l(l.return,n,t),u.lanes|=n;break}a=a.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(y(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),$l(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Be(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,zn(t,n),i=ot(i),r=r(i),t.flags|=1,Be(e,t,r,n),t.child;case 14:return r=t.type,i=ht(r,t.pendingProps),i=ht(r.type,i),na(e,t,r,i,n);case 15:return ra(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),wi(e,t),t.tag=1,Ke(r)?(e=!0,ni(t)):e=!1,zn(t,n),Gs(t,r,i),ro(t,r,i,n),uo(null,t,r,!0,e,n);case 19:return fa(e,t,n);case 22:return ia(e,t,n)}throw Error(y(156,t.tag))};function Da(e,t){return mu(e,t)}function Bf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,r){return new Bf(e,t,n,r)}function jo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hf(e){if(typeof e=="function")return jo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===q)return 11;if(e===Ze)return 14}return 2}function Jt(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mi(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")jo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case J:return pn(n.children,i,l,t);case $e:o=8,i|=8;break;case St:return e=at(12,n,t,i|2),e.elementType=St,e.lanes=l,e;case Te:return e=at(13,n,t,i),e.elementType=Te,e.lanes=l,e;case We:return e=at(19,n,t,i),e.elementType=We,e.lanes=l,e;case ne:return Li(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ft:o=10;break e;case Nt:o=9;break e;case q:o=11;break e;case Ze:o=14;break e;case Re:o=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=at(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function pn(e,t,n,r){return e=at(7,e,r,t),e.lanes=n,e}function Li(e,t,n,r){return e=at(22,e,r,t),e.elementType=ne,e.lanes=n,e.stateNode={isHidden:!1},e}function Io(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function To(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Qf(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nl(0),this.expirationTimes=nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mo(e,t,n,r,i,l,o,u,a){return e=new Qf(e,t,n,u,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=at(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bl(l),e}function Yf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Se,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Oa(e){if(!e)return Wt;e=e._reactInternals;e:{if(en(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(Ke(n))return cs(e,n,t)}return t}function Fa(e,t,n,r,i,l,o,u,a){return e=Mo(n,r,!0,e,i,l,o,u,a),e.context=Oa(null),n=e.current,r=He(),i=qt(n),l=Mt(r,i),l.callback=t??null,Qt(n,l,i),e.current.lanes=i,qn(e,i,r),Xe(e,r),e}function zi(e,t,n,r){var i=t.current,l=He(),o=qt(i);return n=Oa(n),t.context===null?t.context=n:t.pendingContext=n,t=Mt(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Qt(i,t,o),e!==null&&(gt(e,i,o,l),ci(e,i,o)),o}function Ri(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function Aa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Lo(e,t){Aa(e,t),(e=e.alternate)&&Aa(e,t)}function Kf(){return null}var Ua=typeof reportError=="function"?reportError:function(e){console.error(e)};function zo(e){this._internalRoot=e}Di.prototype.render=zo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));zi(e,t,null,null)},Di.prototype.unmount=zo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cn(function(){zi(null,e,null,null)}),t[_t]=null}};function Di(e){this._internalRoot=e}Di.prototype.unstable_scheduleHydration=function(e){if(e){var t=Eu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ft.length&&t!==0&&t<Ft[n].priority;n++);Ft.splice(n,0,e),n===0&&Nu(e)}};function Ro(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Va(){}function Gf(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var S=Ri(o);l.call(S)}}var o=Fa(t,r,e,0,null,!1,!1,"",Va);return e._reactRootContainer=o,e[_t]=o.current,ar(e.nodeType===8?e.parentNode:e),cn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var S=Ri(a);u.call(S)}}var a=Mo(e,0,!1,null,null,!1,!1,"",Va);return e._reactRootContainer=a,e[_t]=a.current,ar(e.nodeType===8?e.parentNode:e),cn(function(){zi(t,a,n,r)}),a}function Fi(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var u=i;i=function(){var a=Ri(o);u.call(a)}}zi(t,o,e,i)}else o=Gf(n,t,e,i,r);return Ri(o)}wu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Gn(t.pendingLanes);n!==0&&(rl(t,n|1),Xe(t,we()),(ee&6)===0&&(An=we()+500,Bt()))}break;case 13:cn(function(){var r=Tt(e,1);if(r!==null){var i=He();gt(r,e,1,i)}}),Lo(e,1)}},il=function(e){if(e.tag===13){var t=Tt(e,134217728);if(t!==null){var n=He();gt(t,e,134217728,n)}Lo(e,134217728)}},xu=function(e){if(e.tag===13){var t=qt(e),n=Tt(e,t);if(n!==null){var r=He();gt(n,e,t,r)}Lo(e,t)}},Eu=function(){return oe},ku=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}},Xi=function(e,t,n){switch(t){case"input":if(Wi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ei(r);if(!i)throw Error(y(90));Ko(r),Wi(r,i)}}}break;case"textarea":Zo(e,n);break;case"select":t=n.value,t!=null&&hn(e,!!n.multiple,t,!1)}},uu=No,su=cn;var qf={usingClientEntryPoint:!1,Events:[dr,Nn,ei,lu,ou,No]},_r={findFiberByHostInstance:tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xf={bundleType:_r.bundleType,version:_r.version,rendererPackageName:_r.rendererPackageName,rendererConfig:_r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ie.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=du(e),e===null?null:e.stateNode},findFiberByHostInstance:_r.findFiberByHostInstance||Kf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ai.isDisabled&&Ai.supportsFiber)try{Dr=Ai.inject(Xf),wt=Ai}catch{}}return Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qf,Je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ro(t))throw Error(y(200));return Yf(e,t,null,n)},Je.createRoot=function(e,t){if(!Ro(e))throw Error(y(299));var n=!1,r="",i=Ua;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Mo(e,1,!1,null,null,n,!1,r,i),e[_t]=t.current,ar(e.nodeType===8?e.parentNode:e),new zo(t)},Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=du(t),e=e===null?null:e.stateNode,e},Je.flushSync=function(e){return cn(e)},Je.hydrate=function(e,t,n){if(!Oi(t))throw Error(y(200));return Fi(null,e,t,!0,n)},Je.hydrateRoot=function(e,t,n){if(!Ro(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=Ua;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Fa(t,null,e,1,n??null,i,!1,l,o),e[_t]=t.current,ar(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Di(t)},Je.render=function(e,t,n){if(!Oi(t))throw Error(y(200));return Fi(null,e,t,!1,n)},Je.unmountComponentAtNode=function(e){if(!Oi(e))throw Error(y(40));return e._reactRootContainer?(cn(function(){Fi(null,null,e,!1,function(){e._reactRootContainer=null,e[_t]=null})}),!0):!1},Je.unstable_batchedUpdates=No,Je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Oi(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return Fi(e,t,n,!1,r)},Je.version="18.3.1-next-f1338f8080-20240426",Je}var Ga;function ld(){if(Ga)return Fo.exports;Ga=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(E){console.error(E)}}return p(),Fo.exports=id(),Fo.exports}var qa;function od(){if(qa)return Ui;qa=1;var p=ld();return Ui.createRoot=p.createRoot,Ui.hydrateRoot=p.hydrateRoot,Ui}var ud=od();const sd=Zf(ud),ad={chevron:["M6 9l6 6 6-6"],play:["M6 4l14 8-14 8z"],download:["M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4","M7 10l5 5 5-5","M12 15V3"],clock:["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z","M12 6v6l4 2"],folder:["M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"],check:["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z","M8 12l3 3 5-6"],file:["M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z","M14 3v6h6"],filter:["M4 6h16","M7 12h10","M10 18h4"],cap:["M2 9l10-5 10 5-10 5z","M6 11v5c3 2 9 2 12 0v-5"],list:["M9 11l3 3 8-8","M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"]};function Pe({name:p,size:E=14}){return w.jsx("svg",{width:E,height:E,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:ad[p].map((y,T)=>w.jsx("path",{d:y},T))})}function cd({page:p,setPage:E}){return w.jsxs("header",{className:"nav",children:[w.jsxs("div",{className:"logo",children:[w.jsx("span",{className:"logo-mark",children:w.jsx(Pe,{name:"cap",size:16})}),w.jsxs("span",{children:["ePortfolio",w.jsx("small",{children:"COMPROG • ACADEMIC"})]})]}),w.jsxs("nav",{className:"seg",children:[w.jsx("button",{className:p==="overview"?"on":"",onClick:()=>E("overview"),children:"Overview & Intro"}),w.jsx("button",{className:p==="tasks"?"on":"",onClick:()=>E("tasks"),children:"Tasks Done"})]}),w.jsxs("a",{className:"btn",href:"/source-code.zip",download:"eportfolio-source-code.zip",children:[w.jsx(Pe,{name:"download"})," Download Source Code"]})]})}const Qe=String.raw,fd=[{tag:"JAVA",title:"Output Operations Activity",due:"08/27/2026, 01:30 PM",items:[{name:"Item 1",code:Qe`public class Main {

    public static void main(String[] args) {
        System.out.print("*\n");
        System.out.print("**\n");
        System.out.print("***\n");
        System.out.print("****\n");
        System.out.print("*****\n");
    }
}`},{name:"Item 2",code:Qe`public class Main {
    public static void main(String[] args) {
        System.out.print("            Green\n");
        System.out.print("      Yellow     Brown\n");
        System.out.print("  Orange             Indigo\n");
        System.out.print("Red                      Violet\n");

    }
}`},{name:"Item 3",code:Qe`public class Main {
    public static void main(String[] args) {
        System.out.print("CCCCC   OOOOO   DDDDD   EEEEE\n");
        System.out.print("C       O   O   D   D   E\n");
        System.out.print("C       O   O   D   D   EEE\n");
        System.out.print("C       O   O   D   D   E\n");
        System.out.print("CCCCC   OOOOO   DDDDD   EEEEE\n");
    }
}`},{name:"Item 4",code:Qe`public class Main {

    public static void main(String[] args) {
       System.out.print("Hello, World!");
    }
}`},{name:"Item 5",code:Qe`public class Main {

    public static void main(String[] args) {
       System.out.print("2\n");
       System.out.print("4\n");
       System.out.print("6\n");
       System.out.print("8\n");
       System.out.print("10\n");
    }
}`}]},{tag:"JAVA",title:"Input Operations Activity",due:"10/15/2026, 11:25 PM",items:[{name:"Item 1",input:`John
Please see the attached report.
Steven
Weekly Update
2.5
15
Active
A123
Manila
19
Acme Corp
acme.com
09123456789
Developer
IT`,code:Qe`import java.util.*;

public class Main {

    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        
        String recipitent;
        String message;
        String subject;
        String name;
        Double version;
        Double discount;
        String status;
        String code;
        String location;
        int age;
        String companyname;
        String website;
        String phone;
        String jobtitle;
        String department;
        
        
        System.out.print("Enter the recipient: ");
        recipitent = sc.nextLine();
        
        System.out.print("Enter the message: ");
        message = sc.nextLine();
        
        System.out.print("Enter the name: ");
        name = sc.nextLine();
        
        System.out.print("Enter the subject: ");
        subject = sc.nextLine();
        
        System.out.print("Enter the version: ");
        version = sc.nextDouble();
        
        sc.nextLine();
        
        System.out.print("Enter the discount: ");
        discount = sc.nextDouble();
        
        sc.nextLine();
        
        System.out.print("Enter the status: ");
        status = sc.nextLine();
        
        System.out.print("Enter the code: ");
        code = sc.nextLine();
        
        System.out.print("Enter the location: ");
        location = sc.nextLine();
        
        System.out.print("Enter the age: ");
        age = sc.nextInt();
        
        sc.nextLine();
        
        System.out.print("Enter the company name: ");
        companyname = sc.nextLine();
        
        System.out.print("Enter the website: ");
        website = sc.nextLine();
        
        System.out.print("Enter the phone: ");
        phone = sc.nextLine();
        
        System.out.print("Enter the job title: ");
        jobtitle = sc.nextLine();
        
        System.out.print("Enter the department: ");
        department = sc.nextLine();
        
        String output = String.format
        (
          "Dear %s, I hope this email finds you well.\n"+
          "%s\n"+
          "Subject: %s \n"+
          "Sender: %s \n"+
          "Version: %.1f\n"+
          "Discount: %.2f%% \n"+ 
          
          "Status: %s \n"+
          "Code: %s \n"+
          "Location: %s \n"+
          "Age: %d \n"+
          "Company: %s \n"+
          "Website: %s \n"+
          "Phone: %s \n"+
          "Job Title: %s \n"+
          "Department: %s \n",
          
          recipitent,
          message,
          subject,
          name,
          version,
          discount,
          status,
          code,
          location,
          age,
          companyname,
          website,
          phone,
          jobtitle,
          department
        );
        
        System.out.print(output);
    }
}`},{name:"Item 2",input:"Steven",code:Qe`import java.util.*;

public class Main {

    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter your name: ");
        String name = sc.nextLine();
        
        System.out.println("Welcome, " + name + "! " );
    }
}`},{name:"Item 3",input:`Steven
19
Taguig`,code:Qe`import java.util.*;

public class Main {

    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        
        String name;
        int age;
        String city;
        
        System.out.print("Enter your name: ");
        name = sc.nextLine();
        
        System.out.print("Enter your age: ");
        age = sc.nextInt();
        
        sc.nextLine();
        
        System.out.print("Enter your city: ");
        city = sc.nextLine();
        
        
        
        String output = String.format
        ( 
            "Name: %s \n"+
            "Age: %d \n"+
            "City: %s \n",
            
            name,
            age,
            city
        );
        
        
        System.out.print(output);
    }
}`},{name:"Item 4",input:`Clean Code
Robert Martin
2008
Programming
City Library
1024
11/20/2026`,code:Qe`import java.util.*;

public class Main {

    public static void main(String[] args) {
        
    Scanner sc = new Scanner(System.in);    
    
        System.out.print("Enter the book title: ");
        String booktitle = sc.nextLine();
        
        System.out.print("Enter the author: ");
        String author = sc.nextLine();
        
        System.out.print("Enter the year of publication: ");
        int yearpublic = sc.nextInt();
        
        sc.nextLine();
        
        System.out.print("Enter the genre: ");
        String genre = sc.nextLine();
        
        System.out.print("Enter the library: ");
        String liblary = sc.nextLine();
        
        System.out.print("Enter your member ID: ");
        int memberid = sc.nextInt();
        
        sc.nextLine();
        
        System.out.print("Enter the return date: ");
        String returndate = sc.nextLine();
        
        System.out.println("You have successfully reserved the book " + "\'" + booktitle + "\'" + " by " + author+ ".");
        System.out.println("Year of Publication: "+ yearpublic);
        System.out.println("Genre: "+ genre);
        System.out.println("Library: "+ liblary);
        System.out.println("Member ID: "+ memberid);
        System.out.println("Return Date: "+ returndate);
        
    }
}`},{name:"Item 5",input:`11/10/2026
8:00 PM
1500
320
45.5
A`,code:Qe`import java.util.*;

public class Main {

    public static void main(String[] args) {
     
     Scanner sc = new Scanner(System.in);
     
     System.out.print("Enter Post Date: ");
     String date = sc.nextLine();
     
     System.out.print("Enter Post Time: ");
     String time = sc.nextLine();
     
     System.out.print("Enter Post Reach: ");
     double reach = sc.nextDouble();
     
     sc.nextLine();
     
     System.out.print("Enter Post Engagement: ");
     double engagement = sc.nextDouble();
     
     sc.nextLine();
     
     System.out.print("Enter Post Duration: ");
     double duration = sc.nextDouble();
     
     sc.nextLine();
     
     System.out.print("Enter Post Category: ");
     char category = sc.next().charAt(0);
     
     System.out.println("\nPost Scheduled:");
     System.out.println("Date: "+ date);
     System.out.println("Time: "+ time);
     System.out.printf("Reach: %.2f \n", reach);
     System.out.printf("Engagement: %.2f \n", engagement);
     System.out.printf("Duration: %.2f \n", duration);
     System.out.println("Category: "+ category);
     
     
    }
}`}]},{tag:"JAVA",title:"Arithmetic Operators Activity",due:"10/15/2026, 01:15 PM",items:[{name:"Item 1",input:`10
5`,code:Qe`import java.util.*;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int x;
        int y;

        System.out.print("Enter x: ");
        x = sc.nextInt();

        System.out.print("Enter y: ");
        y = sc.nextInt();

        int answerad = x + y;
        int answermin = x - y;

        System.out.print(x + " + " + y + " = " + answerad + "\n");
        System.out.print(x + " - " + y + " = " + answermin);
    }
}`},{name:"Item 2",input:"25",code:Qe`import java.util.*;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        double cel;

        System.out.print("Enter temperature in Celsius: ");
        cel = sc.nextDouble();

        double fah = cel * (9.0f/5.0f) + 32;

        System.out.printf("Temperature in Fahrenheit: %.2f", fah);
    }
}`},{name:"Item 3",input:"",code:Qe`import java.util.*;

public class Main {

    public static void main(String[] args) {

        int ans = 1+1;

        System.out.print("1 + 1 = " + ans);

    }
}`},{name:"Item 4",input:`20
4`,code:Qe`import java.util.*;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int x;
        int y;

        System.out.print("Enter x: ");
        x = sc.nextInt();

        System.out.print("Enter y: ");
        y = sc.nextInt();

        int answerad = x / y;

        System.out.print("Quotient: " + answerad);
    }
}`},{name:"Item 5",input:`10
20
30`,code:Qe`import java.util.*;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int x;
        int y;
        int z;

        System.out.print("Enter x: ");
        x = sc.nextInt();

        System.out.print("Enter y: ");
        y = sc.nextInt();

        System.out.print("Enter z: ");
        z = sc.nextInt();

        int sum = x + y + z;

        System.out.print("Sum: " + sum);
    }
}`}]},{tag:"JAVA",title:"MP1 – MP1LastNameFirstName_NetPay",time:"11:59 PM September 24, 2026",pdf:"/pdf/MP1LastNameFirstName_NetPay.pdf",module:"Week 11 - E-Portfolio Development & Intro to Repetition Control"}].map(p=>({...p,term:"midterm"})),re=String.raw,dd=[{tag:"JAVA",title:"if Statement Activity",due:"10/19/2026, 05:40 PM",items:[{name:"Item 1",input:`5
5
5`,code:re`import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        
        int x, y, z;
        
        System.out.print("Enter x: ");
        x = sc.nextInt();
        
        System.out.print("Enter y: ");
        y = sc.nextInt();
        
        System.out.print("Enter z: ");
        z = sc.nextInt();
        
        if(x == y && x == z ){
          System.out.print("Triangle is equilateral.");
        }
    }
}`},{name:"Item 2",input:`3
4`,code:re`import java.util.*;

public class Main{
    public static void main(String[] args){
        
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter first number: ");
        int first_num = sc.nextInt();
        
        System.out.print("Enter second number: ");
        int second_num = sc.nextInt();
        
        if(first_num <= 0 && second_num <0 ){
           System.out.print("Numbers have the same sign.");  
        }
        
        if(!(first_num <= 0) && !(second_num <0) ){
           System.out.print("Numbers have the same sign.");  
        }
    }
}`},{name:"Item 3",input:"#",code:re`import java.util.*;

public class Main{
    public static void main(String[] args){
        
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter character: ");
        char karakter = sc.next().charAt(0);
        
        if(!Character.isLetterOrDigit(karakter)){
           System.out.print("Character is a special character.");
        }
    }
}`},{name:"Item 4",input:"2024",code:re`import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter the year: ");
        int year = sc.nextInt();

        
        if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
           System.out.print("Year is a leap year.");  
        }
    }
}`},{name:"Item 5",input:`7
7`,code:re`import java.util.*;

public class Main{
    public static void main(String[] args){
        
        Scanner sc = new Scanner(System.in);
        
        int x;
        int y;
        
        System.out.print("Enter x: ");
        x = sc.nextInt();
        
        System.out.print("Enter y: ");
        y = sc.nextInt();
        
        if(x == y){
            System.out.print("Numbers are equal.");
        }
    }
}`}]},{tag:"JAVA",title:"if...else Statement Activity",due:"10/19/2026, 06:40 PM",items:[{name:"Item 1",input:`2000
2026`,code:re`import java.util.*;

public class Main{
    public static void main(String[] args){
        
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter your birth year: ");
        int birth_year = sc.nextInt();
        
        System.out.print("Enter the current year: ");
        int current_year = sc.nextInt();
        
        int age = current_year - birth_year;
        double square_root_age = Math.sqrt(age);
        
        if(square_root_age == (int) square_root_age){
            System.out.print("Your age is a perfect square.");
        }
        
        else{
            System.out.print("Your age is not a perfect square.");
        }
    }
}`},{name:"Item 2",input:`12
25`,code:re`import java.util.*;

public class Main{
    public static void main(String[] args){
        
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter your birth month: ");
        int birth_month = sc.nextInt();
        
        System.out.print("Enter your birth day: ");
        int birth_day = sc.nextInt();
        
        if((birth_month == 12 && birth_day >= 22) || (birth_month == 1 && birth_day <= 19)){
            System.out.print("Your zodiac sign is Capricorn.");
        }
        
        else{
            System.out.print("Your zodiac sign is not Capricorn.");
        }
    }
}`},{name:"Item 3",input:"18",code:re`import java.util.*;

public class Main{
    public static void main(String[] args){
        
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter your age: ");
        int age = sc.nextInt();
        
        if(age >= 18){
            System.out.print("You are eligible to vote.");
        }
        
        else{
            System.out.print("You are not eligible to vote.");
        }
    }
}`},{name:"Item 4",input:"A",code:re`import java.util.*;

public class Main{
    public static void main(String[] args){
        
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter a character: ");
        char kar = sc.next().charAt(0);
        
        if(
            kar == 'a' || kar == 'e' || kar == 'i' || kar == 'o' || kar == 'u' ||
            kar == 'A' || kar == 'E' || kar == 'I' || kar == 'O' || kar == 'U'
        ){
            System.out.print("The character is a vowel.");
        }
        
        else{
            System.out.print("The character is a consonant.");
        }
    }
}`},{name:"Item 5",input:`10
10
10`,code:re`import java.util.*;

public class Main{
    public static void main(String[] args){
        
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter first number: ");
        int first_num = sc.nextInt();
        
        System.out.print("Enter second number: ");
        int second_num = sc.nextInt();
        
        System.out.print("Enter third number: ");
        int third_num = sc.nextInt();
        
        if(first_num == second_num && first_num == third_num){
            System.out.print("All numbers are equal.");
        }
        
        else{
            System.out.print("Not all numbers are equal.");
        }
    }
}`}]},{tag:"JAVA",title:"if...else if...else Statement Activity",due:"10/29/2026, 11:35 AM",items:[{name:"Item 1",input:`5
-2
8`,code:re`import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter first number: ");
        int num1 = sc.nextInt();
        
        System.out.print("Enter second number: ");
        int num2 = sc.nextInt();
        
        System.out.print("Enter third number: ");
        int num3 = sc.nextInt();
        
        if((num1 > 0) && (num2 > 0) && (num3 > 0)){
            System.out.print("All numbers are positive.");
        }
        
        else if((num1 < 0) && (num2 < 0) && (num3 < 0)){
            System.out.print("All numbers are negative.");
        }
        
        else if((num1 % 2 == 0) && (num2 % 2 == 0) && (num3 % 2 == 0)){
            System.out.print("All numbers are even.");
        }
        
        else if(!(num1 % 2 == 0) && !(num2 % 2 == 0) && !(num3 % 2 == 0)){
            System.out.print("All numbers are odd.");
        }
        
        else{
            System.out.print("Numbers are different.");
        }
    }
}`},{name:"Item 2",input:"12",code:re`import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter an integer: ");
        int num1 = sc.nextInt();
        
        if(num1 % 4 == 0){
            System.out.print("The number is divisible by 4.");
        }
        
        else if(num1 % 3 == 0){
            System.out.print("The number is divisible by 3.");
        }
        
        else if(num1 % 2 == 0){
            System.out.print("The number is divisible by 2.");
        }
        
        else{
            System.out.print("The number is not divisible by 2, 3, or 4.");
        }
    }
}`},{name:"Item 3",input:"3",code:re`import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter day: ");
        int day = sc.nextInt();
        
        if(day == 1){
            System.out.print("Monday");
        }
        
        else if(day == 2){
            System.out.print("Tuesday");
        }
        
        else if(day == 3){
            System.out.print("Wendnesday");
        }
        
        else if(day == 4){
            System.out.print("Thursday");
        }
        
        else if(day == 5){
            System.out.print("Friday");
        }
        
        else if(day == 6){
            System.out.print("Saturday");
        }
        
        else if(day == 7){
            System.out.print("Sunday");
        }
        
        else{
            System.out.print("Invalid input");
        }
    }
}`},{name:"Item 4",input:`5
-3
0
8
-1`,code:re`import java.util.*;

public class Main{
    public static void main(String[] args){
        
        Scanner sc = new Scanner(System.in);
        
        int psctr = 0;
        int ngctr = 0;
        int zeroctr = 0;
        
        System.out.print("Enter first integer: ");
        int num1 = sc.nextInt();
        sc.nextLine();
        
        System.out.print("Enter second integer: ");
        int num2 = sc.nextInt();
        sc.nextLine();
        
        System.out.print("Enter third integer: ");
        int num3 = sc.nextInt();
        sc.nextLine();
        
        System.out.print("Enter fourth integer: ");
        int num4 = sc.nextInt();
        sc.nextLine();
        
        System.out.print("Enter fifth integer: ");
        int num5 = sc.nextInt();
        sc.nextLine();
        
        if(num1 > 0){
            psctr++;
        }
        else if(num1 == 0){
            zeroctr++;
        }
        else{
            ngctr++;
        }
        
        if(num2 > 0){
            psctr++;
        }
        else if(num2 == 0){
            zeroctr++;
        }
        else{
            ngctr++;
        }
        
        if(num3 > 0){
            psctr++;
        }
        else if(num3 == 0){
            zeroctr++;
        }
        else{
            ngctr++;
        }
        
        if(num4 > 0){
            psctr++;
        }
        else if(num4 == 0){
            zeroctr++;
        }
        else{
            ngctr++;
        }
        
        if(num5 > 0){
            psctr++;
        }
        else if(num5 == 0){
            zeroctr++;
        }
        else{
            ngctr++;
        }
        
        System.out.printf(
            "Positive count: %d \n" +
            "Negative count: %d \n" +
            "Zero count: %d \n",
            psctr,
            ngctr,
            zeroctr
        );
    }
}`},{name:"Item 5",input:"1900",code:re`import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter a year: ");
        int year = sc.nextInt();
        
        if(year % 100 == 0){
            
            if(year % 400 == 0){
                System.out.print("It's a leap century year.");
            }
            
            else{
                System.out.print("It's a century year.");
            }
        }
        
        else if(year % 4 == 0){
            System.out.print("It's a leap year.");
        }
        
        else{
            System.out.print("It's neither a leap year nor a century year.");
        }
    }
}`}]},{tag:"JAVA",title:"switch Statement Activity",due:"10/29/2026, 12:30 PM",items:[{name:"Item 1 (ARRAY IS NOT SUPPORTED!)",input:"Sunny",code:re`import java.util.*;

public class Main{
   public static void main(String[] args){
       Scanner sc = new Scanner(System.in);
       
       System.out.print("Enter the weather condition: ");
       char[] weathercond = sc.nextLine().toCharArray();
       
       char charletter = weathercond[0];
       
       switch (charletter){
           case 'S':
           System.out.print("Suggestion: Enjoy the sunshine");
           break;
           
           case 'C':
           System.out.print("Suggestion: Stay indoors");
           break;
           
           case 'R':
           System.out.print("Suggestion: Bring an umbrella");
           break;
           
           case'W':
           System.out.print("Suggestion: Fly a kite");
           break;
           
           default: System.out.print("Invalid weather condition.");
       }
   }
}`},{name:"Item 2",input:"Easy",code:re`import java.util.*;

public class Main{
   public static void main(String[] args){
       Scanner sc = new Scanner(System.in);
       
       System.out.print("Enter the difficulty level (Easy, Medium, Hard): ");
       String diff = sc.nextLine();
       
       switch (diff){
           case "Easy":
           System.out.print("Message: You selected Easy difficulty. Enjoy the game!");
           break;
           
           case "Medium":
           System.out.print("Message: You selected Medium difficulty. Get ready for a challenge!");
           break;
           
           case "Hard":
           System.out.print("Message: You selected Hard difficulty. Brace yourself for a tough gameplay!");
           break;
           
           default: System.out.print("Invalid difficulty level.");
           
       }
   }
}`},{name:"Item 3",input:`E
5
5
5`,code:re`import java.util.*;

public class Main{
   public static void main(String[] args){
       Scanner sc = new Scanner(System.in);
       
       System.out.print("Enter the triangle type identifier (E for Equilateral, I for Isosceles, S for Scalene): ");
       char id = sc.next().charAt(0);
       
       System.out.print("Enter the length of side 1: ");
       int side1 = sc.nextInt();
       System.out.print("Enter the length of side 2: ");
       int side2 = sc.nextInt();
       System.out.print("Enter the length of side 3: ");
       int side3 = sc.nextInt();
       
       
       switch (id){
           case 'E': 
           case 'e':
               if(side1 == side2  && side1 == side3 ){
                 System.out.print("The given sides form an Equilateral triangle.");
               }
               
               else{
                 System.out.print("The given sides do not form an Equilateral triangle.");
               }
           break;
           
           case 'I': 
           case 'i':
               if(side1 == side2  || side1 == side3 ){
                 System.out.print("The given sides form an Isosceles triangle.");
               }
               
               else{
                 System.out.print("The given sides do not form an Isosceles triangle.");
               }
           break;
           
           case 'S': 
           case 's':
               if(!(side1 == side2)  && !(side1 == side3) ){
                 System.out.print("The given sides form a Scalene triangle.");
               }
               
               else{
                 System.out.print("The given sides do not form a Scalene triangle.");
               }
           break;
           
           
       }
       
       
   }
}`},{name:"Item 4",input:"S",code:re`import java.util.*;

public class Main{
   public static void main(String[] args){
       Scanner sc = new Scanner(System.in);
       
       System.out.print("Enter the Quadrilateral type (S for Square, R for Rectangle, P for Parallelogram, T for Trapezoid): ");
       char id = sc.next().charAt(0);
       
       
       switch (id){
           case 'S': 
           case 's':
             System.out.print("Properties of a Square");
             System.out.print("-");
             System.out.print("Properties of a Square");
           break;
           
           case 'R': 
           case 'r':
            
           break;
           
           case 'P': 
           case 'p':
            
           break;
           
           case 'T': 
           case 't':
           
           break;
           
           
       }
       
       
   }
}`},{name:"Item 5",input:"1",code:re`import java.util.*;

public class Main{
   public static void main(String[] args){
       Scanner sc = new Scanner(System.in);
       
       System.out.print("Enter a number between 1 and 7: ");
       int day = sc.nextInt();
       
       switch (day){
           case 1:
           System.out.print("Monday");
           break;
           
           case 2:
           System.out.print("Tuesday");
           break;
           
           case 3:
           System.out.print("Wednesday");
           break;
           
           case 4:
           System.out.print("Thursday");
           break;
           
           case 5:
           System.out.print("Friday");
           break;
           
           case 6:
           System.out.print("Saturday");
           break;
           
           case 7:
           System.out.print("Sunday");
           break;
           
           
           default: System.out.print("Invalid input.");
           
       }
   }
}`}]},{tag:"JAVA",title:"While Loop Activity",due:"10/26/2026, 12:40 PM",items:[{name:"Item 1",input:"12345",code:re`import java.util.*;

public class Main{
   public static void main(String[] args){
       
       Scanner sc = new Scanner(System.in);
       int ctr = 0;
       
       System.out.print("Enter a positive integer: ");
       int number = sc.nextInt();
       
       while(number > 0){
           ctr++;
           number /= 10;
       }
       
       System.out.print("Number of digits: " + ctr);
       
   }
}`},{name:"Item 2",input:"5",code:re`import java.util.*;

public class Main{
   public static void main(String[] args){
       Scanner sc = new Scanner(System.in);
       int number;
       int numctr=0;
       
       System.out.print("Enter a number: ");
       number = sc.nextInt();
       
       while(number > 0){
           numctr++;
           System.out.println(numctr);
           
           number--;
       }
       
   }
}`},{name:"Item 3",input:"10",code:re`import java.util.*;

public class Main{
   public static void main(String[] args){
       
       Scanner sc = new Scanner(System.in);
       int posnum;
       int num=1;
       
       System.out.print("Enter a positive integer: ");
       posnum = sc.nextInt();
       
       while(num <= posnum){
           if(num % 2 == 0){
             System.out.println(num);
           }
           num++;
        }
   
   
       
   }
}`},{name:"Item 4",input:"5",code:re`import java.util.*;

public class Main{
   public static void main(String[] args){
       Scanner sc = new Scanner(System.in);
       int num;
       int ctr=1;
       
       System.out.print("Enter a number: ");
       num = sc.nextInt();
       
       while(ctr <= num){
           System.out.println(ctr*ctr);
           ctr++;
       }
       
   }
}`},{name:"Item 5",input:"12345",code:re`import java.util.*;

public class Main{
  public static void main(String[] args){
      Scanner sc = new Scanner(System.in);
      
      int sum = 0;
      int num;
      
      System.out.print("Enter an integer: ");
      num = sc.nextInt();
      
      
      
      while(num > 0){
          sum += num % 10;
          num /= 10;
      }
      
      System.out.print("Sum of digits: " + sum);
      
  }
}`}]},{tag:"JAVA",title:"Do-while Loop Activity",due:"10/26/2026, 01:30 PM",items:[{name:"Item 1",input:`-5
8
0`,code:re`import java.util.*;

public class Main{
   public static void main(String[] args){
       Scanner sc = new Scanner(System.in);
       int num;
       
       do{
       System.out.print("Enter an integer: ");
       num = sc.nextInt();
       
       if(num < 0){
           System.out.println("negative");
       }
       
       else if(num > 0){
          System.out.println("positive"); 
       }
       
       } while(num != 0);
       
   }
}`},{name:"Item 2",input:"12",code:re`import java.util.*;

public class Main{
   public static void main(String[] args){
       Scanner sc = new Scanner(System.in);
       
       int num;
       int ctr=1;
       System.out.print("Enter an integer: ");
       num = sc.nextInt();
       
       System.out.print("Factors of " + num + ": ");
       do{
          if (num % ctr == 0){
          System.out.print(ctr + " ");
          }
          ctr++;
          
       }while(ctr <= num);
       
   }
}`},{name:"Item 3",input:"5",code:re`import java.util.*;

public class Main{
   public static void main(String[] args){
       Scanner sc = new Scanner(System.in);
       int ctr = 1;
       
       System.out.print("Enter a number: ");
       int num = sc.nextInt();
   
       do{
           System.out.println(ctr * 3);
           
           ctr++;
   
       } while(num >= ctr);
   }
}`},{name:"Item 4",input:`3
5
7
15
0`,code:re`import java.util.*;

public class Main{
   public static void main(String[] args){
       Scanner sc = new Scanner(System.in);
       int num;
       
       do{
           System.out.print("\nEnter a number: ");
           num = sc.nextInt();
           if(num % 3 == 0){
             System.out.print("Fizz"); 
           }
           if(num % 5 == 0){
             System.out.print("Buzz"); 
           }
           if(!(num % 5 == 0) && !(num % 3 == 0)){
             System.out.print(num);   
           }
           
       }while(num != 0);
   }
}`},{name:"Item 5",input:"5",code:re`import java.util.*;

public class Main{
   public static void main(String[] args){
       Scanner sc = new Scanner(System.in);
       
       System.out.print("Enter a number: ");
       int num = sc.nextInt();
       
       int ctr = 1;
       
       do{
           
          System.out.println(ctr);
          ctr++;
          
       }while(num >= ctr);
       
       
   }
}`}]}].map(p=>({...p,term:"final"})),pd="/assets/ProfileEportfolio-DsSjYsa8.png",bt={name:"Steven Q Maligaya",role:"Group Member",bio:"First Year BSIT Student – An aspiring IT professional who is interested in technology, programming, and game development. I enjoy learning how computers and software work and hope to develop my skills and gain experience throughout my college journey.",photo:pd,activities:["FlowChart","Coding"],responsibilities:"Inputting of answers of the team into document to be exported"},md=[["COURSE","BSIT"],["SECTION","101i"],["TEACHER","Arlene Valderama"],["COVERAGE","Prelim to Final"]],hd=[["PRELIM TASKS","7","Task Documented"],["MID TERM TASKS","4","Task Documented"],["FINAL TASK","6","Task Documented"],["ON-TIME RATE","95%","University Rubric Met"]],yd=[["Prelim","The Prelim period was a relatively easy start for me. Most of the activities focused on flowcharting, which helped me understand basic problem-solving."],["Midterm","Midterms became more challenging as we moved into coding. I underestimated how difficult it could be, which affected my grades."],["Final","For the Final period, I'm trying my best to make up for my performance during Midterms. I'm putting more effort into understanding the lessons."]],Bo=[{tag:"PPT1",title:"PPT1 - Concept of Flowcharting Symbols",module:"Prelim Term Week 1 - Orientation & Introduction to PLF & Program Dev't",pdf:"PrelimPPT1_MaligayaSteven.pdf"},{tag:"RECITATION",title:"Recitation - Week 2 - Day 1",module:"Week 2 - Program Logic Formulation - Programming Design Tools",pdf:"Recitation - Week 2 - Day 1.pdf"},{tag:"PPT2",title:"PPT2 - Program Logic Formulation - Algorithm",module:"Week 2 - Program Logic Formulation - Programming Design Tools",pdf:"PrelimPPT2_TaveraMaligaya.pdf"},{tag:"RECITATION",title:"Flowchart Recitation Week 3",module:"Week 3 - Flowcharting - Sequential Structure"},{tag:"PPT3",title:"PPT3 - Sequential Control Structure - Paired Activity",module:"Week 3 - Flowcharting - Sequential Structure",pdf:"PrelimPPT3_Lucero1Maligaya2.pdf"},{tag:"PP1",title:"PP1 - Sequential and Decision Control Structure",module:"Week 4 - Flowcharting - Decision Control",pdf:"PrelimPP1_MaligayaFloresII.pdf"},{tag:"PP2",title:"PP2 - Seat work Exercises - Flowchart -Loop",module:"Week 5 - Flowcharting - Repetition Control",pdf:"PrelimPP2_EvangelistaMaligaya.pdf"}].map(p=>({...p,term:"prelim",pdf:p.pdf?`/pdf/${p.pdf}`:null})),Ho=fd,Qo=dd,Xa=[...Bo,...Ho,...Qo];function vd(){return w.jsx("section",{className:"stats",children:hd.map(([p,E,y])=>w.jsxs("div",{children:[w.jsx("div",{className:"lbl",children:p}),w.jsx("div",{className:"n",children:E}),w.jsx("p",{children:y})]},p))})}function gd(){return bt.name.split(" ").map(p=>p[0]).slice(0,2).join(""),w.jsxs("section",{children:[w.jsx("div",{className:"rule",children:"PROJECT"}),w.jsx("h2",{className:"sec",children:"MY PORTFOLIO"}),w.jsx("p",{className:"lead",style:{maxWidth:"none",fontSize:16},children:"This portfolio contains a collection of my activities, projects, and reflections throughout the semester. It showcases the lessons and skills I gained during the Prelim, Midterm, and Final periods, along with the challenges I encountered and how I worked to overcome them. It also provides a glimpse of my progress, learning experiences, and personal growth as an IT student."}),w.jsxs("div",{className:"about",children:[w.jsxs("div",{className:"card",children:[w.jsx("div",{className:"photo",children:w.jsx("img",{src:bt.photo,alt:bt.name})}),w.jsxs("div",{className:"name",children:[bt.name,w.jsx(Pe,{name:"check",size:18})]}),w.jsx("div",{className:"role",children:bt.role}),w.jsx("p",{className:"bio",children:bt.bio}),w.jsx("div",{className:"lbl",children:"ACTIVITIES DONE"}),bt.activities.map(p=>w.jsx("span",{className:"tag",children:p},p)),w.jsxs("div",{className:"resp",children:[w.jsx("div",{className:"lbl",children:"RESPONSIBILITIES"}),bt.responsibilities]})]}),w.jsxs("div",{className:"phil",children:[w.jsx("div",{className:"lbl",children:"PHILOSOPHY"}),w.jsx("h3",{children:"Reflection"}),w.jsx("p",{children:"My experience at school has helped me develop both my technical knowledge and personal skills. Throughout the semester, I encountered different challenges that pushed me to learn, adapt, and improve. Each period gave me new experiences and lessons that contributed to my growth as an IT student."}),w.jsx("div",{className:"refl",children:yd.map(([p,E])=>w.jsxs("div",{className:"card",children:[w.jsx(Pe,{name:"list",size:20}),w.jsx("h4",{children:p}),w.jsx("p",{children:E})]},p))}),w.jsxs("div",{className:"mile",children:[w.jsxs("span",{children:[w.jsx("small",{children:"MIDTERM MILESTONE STATUS"}),w.jsx("b",{children:"100% Submission Milestones Completed"})]}),w.jsx(Pe,{name:"list",size:22})]})]})]})]})}const Sd=["cap","file","list","folder"];function wd(){return w.jsxs("main",{className:"wrap",children:[w.jsxs("div",{className:"chips",children:[w.jsx("span",{className:"chip",children:"Scholarly synthesis"}),w.jsx("span",{className:"chip white",children:"Academic portfolio 2026–2027"})]}),w.jsxs("div",{className:"hero",children:[w.jsxs("div",{children:[w.jsxs("h1",{children:["E-Portfolio: ",w.jsx("em",{children:"Computer Programming"})]}),w.jsx("p",{className:"lead",children:"A comprehensive documentation of rigorous learning journeys, laboratory deliverables, prelim, and midterm capstone milestones of academic prowess."})]}),w.jsxs("div",{className:"eval",children:[w.jsxs("b",{children:["EVALUATION GRADE STATUS ",w.jsx("span",{children:"Verified Final"})]}),w.jsx("div",{className:"bar"}),"All peer-reviewed sprints & laboratory tasks archived for university institutional repository."]})]}),w.jsx("div",{className:"info",children:md.map(([p,E],y)=>w.jsxs("div",{children:[w.jsx("span",{className:"ico",children:w.jsx(Pe,{name:Sd[y],size:18})}),w.jsxs("span",{children:[w.jsx("div",{className:"lbl",children:p}),w.jsx("div",{className:"val",children:E})]})]},p))}),w.jsx(vd,{}),w.jsx(gd,{})]})}const xd="int|long|short|byte|double|Double|float|String|char|boolean|Integer|Long|Boolean|Character|var",Ed=new Set(["int","long","short","byte","Integer","Long"]),kd=new Set(["double","Double","float"]),Ja=new RegExp(`^(?:final\\s+)?(${xd})\\s+([\\s\\S]+)$`),Cd=/^([A-Za-z_]\w*)\s*(=|\+=|-=|\*=|\/=|%=)(?!=)\s*([\s\S]+)$/,Nd=[["||"],["&&"],["==","!="],["<=",">=","<",">"],["+","-"],["*","/","%"]],_d=new Set(["Math","Integer","Double","String"]),Pd=new Set(["nextLine","next","nextInt","nextDouble","hasNext","hasNextInt","hasNextDouble","hasNextLine"]),Vn=Symbol("break"),Za=Symbol("continue"),Vi=Symbol("return"),Vo=Symbol("unset");class ue{constructor(E){this.v=E}}const ct=p=>typeof p=="number"||p instanceof ue,ge=p=>p instanceof ue?p.v:p,$o=p=>typeof p=="boolean"?"boolean":p instanceof ue?"double":typeof p=="number"?"int":typeof p=="string"?"String":"Object",jd=p=>Number.isInteger(p)?p.toFixed(1):String(p),mn=p=>p==null?"null":p instanceof ue?jd(p.v):String(p),ba=p=>p.replace(/\\(.)/g,(E,y)=>({n:`
`,t:"	",r:"\r",0:"\0"})[y]??y);function $n(p,E){const y=[];let T="",x=0,_=null;for(let j=0;j<p.length;j++){const V=p[j];if(_){T+=V,V==="\\"?T+=p[++j]??"":V===_&&(_=null);continue}if(V==='"'||V==="'"){_=V,T+=V;continue}if(V==="("?x++:V===")"&&x--,V===E&&x===0){y.push(T),T="";continue}T+=V}return y.push(T),y}function Yo(p,E){let y=0,T=null;for(let x=E;x<p.length;x++){const _=p[x];if(T){_==="\\"?x++:_===T&&(T=null);continue}if(_==='"'||_==="'"){T=_;continue}if(_==="(")y++;else if(_===")"&&--y===0)return x}return-1}function Id(p,E){let y=0,T=null,x=null;for(let _=0;_<p.length;_++){const j=p[_];if(T){j==="\\"?_++:j===T&&(T=null);continue}if(j==='"'||j==="'"){T=j;continue}if(j==="("){y++;continue}if(j===")"){y--;continue}if(y!==0)continue;if((j==="+"||j==="-")&&p[_+1]===j){_++;continue}const V=E.find(M=>p.startsWith(M,_));if(V){if(V==="+"||V==="-"){let M=_-1;for(;M>=0&&/\s/.test(p[M]);)M--;if(M<0||!((p[M]==="+"||p[M]==="-")&&p[M-1]===p[M])&&"+-*/%(<>=!&|?:".includes(p[M]))continue}x={i:_,op:V},_+=V.length-1}}return x}function Td(p){let E=0,y=null,T=-1,x=0;for(let _=0;_<p.length;_++){const j=p[_];if(y){j==="\\"?_++:j===y&&(y=null);continue}if(j==='"'||j==="'"){y=j;continue}if(j==="(")E++;else if(j===")")E--;else if(E===0){if(j==="?")T<0?T=_:x++;else if(j===":"&&T>=0){if(x===0)return[p.slice(0,T),p.slice(T+1,_),p.slice(_+1)];x--}}}return null}function Md(p){if(!p.endsWith(")"))return null;let E=0,y=null;for(let T=0;T<p.length;T++){const x=p[T];if(y){x==="\\"?T++:x===y&&(y=null);continue}if(x==='"'||x==="'"){y=x;continue}if(x==="("){E++;continue}if(x===")"){E--;continue}if(x==="."&&E===0){const _=/^\.([A-Za-z_]\w*)\(/.exec(p.slice(T));if(_){const j=T+_[0].length-1;if(Yo(p,j)===p.length-1)return{target:p.slice(0,T),name:_[1],args:p.slice(j+1,-1)}}}}return null}function ec(p,E){if(typeof p!="string")throw new Error("error: format string must be a String");let y=0;return p.replace(/%(-?)(0?)(\d+)?(?:\.(\d+))?([sdfbcn%])/g,(T,x,_,j,V,M)=>{if(M==="%")return"%";if(M==="n")return`
`;if(y>=E.length)throw new Error(`java.util.MissingFormatArgumentException: Format specifier '${T}'`);const X=E[y++];let $;if(M==="d"){if(typeof X!="number")throw new Error("java.util.IllegalFormatConversionException: d != "+(X instanceof ue?"java.lang.Double":"java.lang.String"));$=String(X)}else if(M==="f"){if(!ct(X))throw new Error("java.util.IllegalFormatConversionException: f != java.lang.String");$=ge(X).toFixed(V===void 0?6:+V)}else M==="b"?$=X===null?"false":typeof X=="boolean"?String(X):"true":$=mn(X);return j?x?$.padEnd(+j):_&&(M==="d"||M==="f")?$.startsWith("-")?"-"+$.slice(1).padStart(+j-1,"0"):$.padStart(+j,"0"):$.padStart(+j):$})}function Ld(p){let E="",y=null;for(let T=0;T<p.length;T++){const x=p[T];if(y){E+=x,x==="\\"?E+=p[++T]??"":x===y&&(y=null);continue}if(x==='"'||x==="'"){y=x,E+=x;continue}if(x==="/"&&p[T+1]==="/"){for(;T<p.length&&p[T]!==`
`;)T++;E+=`
`;continue}if(x==="/"&&p[T+1]==="*"){const _=p.indexOf("*/",T+2);T=_<0?p.length:_+1,E+=" ";continue}E+=x}return E}function zd(p){const E=Ld(p),y=E.search(/void\s+main\s*\(/);if(y<0)throw new Error("No main method found");const T=E.indexOf("{",y);if(T<0)throw new Error("error: '{' expected");let x=T+1;const _=()=>{for(;x<E.length&&/\s/.test(E[x]);)x++},j=()=>/^[A-Za-z_]\w*/.exec(E.slice(x,x+24))?.[0],V=()=>{if(_(),E[x]!=="(")throw new Error("error: '(' expected");const H=Yo(E,x);if(H<0)throw new Error("error: ')' expected");const Q=E.slice(x+1,H);return x=H+1,Q},M=()=>{let H="",Q=null,se=0;for(;x<E.length;x++){const Y=E[x];if(Q){H+=Y,Y==="\\"?H+=E[++x]??"":Y===Q&&(Q=null);continue}if(Y==='"'||Y==="'"){Q=Y,H+=Y;continue}if(Y==="("?se++:Y===")"&&se--,Y===";"&&se===0)return x++,H.trim();H+=Y}throw new Error("error: ';' expected")},X=()=>{const H=[];for(;;){if(_(),x>=E.length)throw new Error("error: reached end of file while parsing");if(E[x]==="}")return x++,{type:"block",body:H};H.push($())}},$=()=>{if(_(),x>=E.length)throw new Error("error: reached end of file while parsing");const H=E[x];if(H==="{")return x++,X();if(H===";")return x++,{type:"empty"};const Q=j();if(Q==="if"){x+=2;const se=V(),Y=$();_();let K=null;return j()==="else"&&(x+=4,K=$()),{type:"if",cond:se,then:Y,els:K}}if(Q==="while"){x+=5;const se=V(),Y=$();return{type:"while",cond:se,body:Y}}if(Q==="do"){x+=2;const se=$();if(_(),j()!=="while")throw new Error("error: 'while' expected");x+=5;const Y=V();if(_(),E[x]!==";")throw new Error("error: ';' expected");return x++,{type:"do",cond:Y,body:se}}if(Q==="for"){x+=3;const se=V(),Y=$n(se,";");if(Y.length!==3)throw new Error("error: only for (init; condition; update) loops are supported");const K=$();return{type:"for",init:Y[0].trim(),cond:Y[1].trim(),update:Y[2].trim(),body:K}}if(Q==="switch"){x+=6;const se=V();if(_(),E[x]!=="{")throw new Error("error: '{' expected");x++;const Y=[];let K=null;for(;;){if(_(),x>=E.length)throw new Error("error: reached end of file while parsing");if(E[x]==="}"){x++;break}const b=j();if(b==="case")x+=4;else if(b==="default")x+=7;else throw new Error("error: case, default, or '}' expected");let Ee="",Ce=null,je=0,ie=!1;for(;;x++){if(x>=E.length)throw new Error("error: ':' or '->' expected");const J=E[x];if(Ce){Ee+=J,J==="\\"?Ee+=E[++x]??"":J===Ce&&(Ce=null);continue}if(J==='"'||J==="'"){Ce=J,Ee+=J;continue}if(J==="("?je++:J===")"&&je--,je===0&&J===":"){x++;break}if(je===0&&J==="-"&&E[x+1]===">"){x+=2,ie=!0;break}Ee+=J}let Ie=null;if(b==="case"){if(Ie=$n(Ee,",").map(J=>J.trim()).filter(Boolean),!Ie.length)throw new Error("error: constant expression required")}else if(Ee.trim()!=="")throw new Error("error: ':' or '->' expected after default");if(K===null)K=ie;else if(K!==ie)throw new Error("error: different case kinds used in the switch");const Se=[];if(ie)Se.push($());else for(;;){if(_(),x>=E.length)throw new Error("error: reached end of file while parsing");if(E[x]==="}")break;const J=j();if(J==="case"||J==="default")break;Se.push($())}Y.push({labels:Ie,body:Se})}return{type:"switch",subject:se,arrow:!!K,cases:Y}}if(Q==="try")throw new Error(`error: '${Q}' statements are not supported yet`);return{type:"simple",text:M()}};return X()}function Rd(p,E="",y={}){const T=y.maxSteps??5e5,x=y.maxOutput??1e6;let _="",j=0,V=0,M=E.replace(/\r\n?/g,`
`);M!==""&&!M.endsWith(`
`)&&(M+=`
`);let X=!1;const $=[new Map],H=c=>{for(let d=$.length-1;d>=0;d--)if($[d].has(c))return $[d].get(c)},Q=c=>{const d=H(c);if(!d)throw new Error("error: cannot find symbol: variable "+c);if(d.value===Vo)throw new Error("error: variable "+c+" might not have been initialized");return d.value},se=(c,d,v)=>{if(H(c))throw new Error(`error: variable ${c} is already defined in method main(String[])`);$[$.length-1].set(c,{type:d,value:v})},Y=(c,d,v=!1)=>{if(d===null||d===Vo)return d;const s=()=>new Error(`error: incompatible types: ${$o(d)} cannot be converted to ${c}`);if(kd.has(c)){if(!ct(d))throw s();return d instanceof ue?d:new ue(d)}if(Ed.has(c)){if(d instanceof ue){if(v)return Math.trunc(d.v);throw new Error(`error: incompatible types: possible lossy conversion from double to ${c}`)}if(typeof d!="number")throw s();return d}if(c==="String"&&typeof d!="string"||(c==="boolean"||c==="Boolean")&&typeof d!="boolean")throw s();return d},K=()=>{if(++V>T)throw new Error("Execution stopped: too many loop iterations (possible infinite loop)");if(_.length>x)throw new Error("Execution stopped: too much output")},b=()=>{if(j>=M.length)throw new Error('Exception in thread "main" java.util.NoSuchElementException: No line found');const c=M.indexOf(`
`,j),d=c<0?M.slice(j):M.slice(j,c);return j=c<0?M.length:c+1,d===""&&X||(_+=d+`
`),X=!1,d},Ee=()=>{for(X=!1;j<M.length&&/\s/.test(M[j]);)j++;if(j>=M.length)throw new Error('Exception in thread "main" java.util.NoSuchElementException');const c=j;for(;j<M.length&&!/\s/.test(M[j]);)j++;const d=M.slice(c,j),v=M[j];return _+=d,v===`
`||j>=M.length?(_+=`
`,X=!0):v&&(_+=v),d},Ce=()=>{let c=j;for(;c<M.length&&/\s/.test(M[c]);)c++;const d=c;for(;c<M.length&&!/\s/.test(M[c]);)c++;return M.slice(d,c)},je=c=>{switch(c){case"nextLine":return b();case"next":return Ee();case"nextInt":{const d=Ee();if(!/^[+-]?\d+$/.test(d))throw new Error('Exception in thread "main" java.util.InputMismatchException: For input string: "'+d+'"');return parseInt(d,10)}case"nextDouble":{const d=Ee();if(isNaN(Number(d)))throw new Error('Exception in thread "main" java.util.InputMismatchException: For input string: "'+d+'"');return new ue(Number(d))}case"hasNext":return Ce()!=="";case"hasNextInt":return/^[+-]?\d+$/.test(Ce());case"hasNextDouble":{const d=Ce();return d!==""&&!isNaN(Number(d))}case"hasNextLine":return j<M.length}throw new Error("error: cannot find symbol: method "+c)},ie=c=>{if(typeof c!="boolean")throw new Error(`error: incompatible types: ${$o(c)} cannot be converted to boolean`);return c},Ie=(c,d,v)=>{if(c==="+"&&!(ct(d)&&ct(v)))return mn(d)+mn(v);if(!ct(d)||!ct(v))throw new Error(`error: bad operand types for binary operator '${c}'`);const s=d instanceof ue||v instanceof ue,m=ge(d),I=ge(v);let R;switch(c){case"+":R=m+I;break;case"-":R=m-I;break;case"*":R=m*I;break;case"/":if(s)R=m/I;else{if(I===0)throw new Error('Exception in thread "main" java.lang.ArithmeticException: / by zero');R=Math.trunc(m/I)}break;case"%":if(!s&&I===0)throw new Error('Exception in thread "main" java.lang.ArithmeticException: / by zero');R=m%I;break}return s?new ue(R):R},Se=(c,d,v)=>{let s,m;if(ct(d)&&ct(v))s=ge(d),m=ge(v);else if(typeof d=="string"&&typeof v=="string")s=d,m=v;else throw new Error(`error: bad operand types for binary operator '${c}'`);switch(c){case"<":return s<m;case">":return s>m;case"<=":return s<=m;default:return s>=m}},J=(c,d)=>ct(c)&&ct(d)?ge(c)===ge(d):c===d,$e=(c,d,v)=>{const s=H(c),m=Q(c);if(!ct(m))throw new Error("error: bad operand type for unary operator '++'/'--'");return s.value=m instanceof ue?new ue(m.v+d):m+d,v?s.value:m},St=(c,d,v)=>{switch(c+"."+d){case"String.format":return ec(v[0],v.slice(1));case"String.valueOf":return mn(v[0]);case"Math.abs":return v[0]instanceof ue?new ue(Math.abs(v[0].v)):Math.abs(v[0]);case"Math.max":case"Math.min":{const m=(d==="max"?Math.max:Math.min)(ge(v[0]),ge(v[1]));return v[0]instanceof ue||v[1]instanceof ue?new ue(m):m}case"Math.pow":return new ue(Math.pow(ge(v[0]),ge(v[1])));case"Math.sqrt":return new ue(Math.sqrt(ge(v[0])));case"Math.floor":return new ue(Math.floor(ge(v[0])));case"Math.ceil":return new ue(Math.ceil(ge(v[0])));case"Math.round":return Math.round(ge(v[0]));case"Math.random":return new ue(Math.random());case"Integer.parseInt":{const s=v[0];if(typeof s!="string"||!/^[+-]?\d+$/.test(s))throw new Error('Exception in thread "main" java.lang.NumberFormatException: For input string: "'+mn(s)+'"');return parseInt(s,10)}case"Double.parseDouble":{const s=v[0],m=typeof s=="string"&&s.trim()!==""?Number(s):NaN;if(isNaN(m))throw new Error('Exception in thread "main" java.lang.NumberFormatException: For input string: "'+mn(s)+'"');return new ue(m)}}throw new Error(`error: cannot find symbol: method ${d} in ${c}`)},ft=(c,d,v)=>{if(c==null)throw new Error('Exception in thread "main" java.lang.NullPointerException');if(typeof c!="string")throw new Error("error: cannot find symbol: method "+d);switch(d){case"length":return c.length;case"charAt":{const s=ge(v[0]);if(s<0||s>=c.length)throw new Error(`Exception in thread "main" java.lang.StringIndexOutOfBoundsException: Index ${s} out of bounds for length ${c.length}`);return c[s]}case"equals":return c===v[0];case"equalsIgnoreCase":return typeof v[0]=="string"&&c.toLowerCase()===v[0].toLowerCase();case"isEmpty":return c.length===0;case"toUpperCase":return c.toUpperCase();case"toLowerCase":return c.toLowerCase();case"trim":return c.trim();case"contains":return c.includes(v[0]);case"startsWith":return c.startsWith(v[0]);case"endsWith":return c.endsWith(v[0]);case"indexOf":return c.indexOf(v[0]);case"replace":return c.split(v[0]).join(v[1]);case"repeat":return c.repeat(ge(v[0]));case"substring":{const s=ge(v[0]),m=v.length>1?ge(v[1]):c.length;if(s<0||m>c.length||s>m)throw new Error(`Exception in thread "main" java.lang.StringIndexOutOfBoundsException: begin ${s}, end ${m}, length ${c.length}`);return c.slice(s,m)}case"compareTo":{const s=v[0],m=Math.min(c.length,s.length);for(let I=0;I<m;I++)if(c[I]!==s[I])return c.charCodeAt(I)-s.charCodeAt(I);return c.length-s.length}}throw new Error("error: cannot find symbol: method "+d)},Nt=c=>{const d=c.trim();let v;if((v=d.match(/^"([\s\S]*)"$/))||(v=d.match(/^'([\s\S]*)'$/)))return ba(v[1]);if(v=d.match(/^(-?\d+(?:\.\d+)?)([fFdDlL]?)$/)){const m=Number(v[1]);return v[1].includes(".")||/[fFdD]/.test(v[2])?new ue(m):m}if(d==="true")return!0;if(d==="false")return!1;if(d==="null")return null;if(v=d.match(/^\(\s*(int|long|short|byte|double|float|char)\s*\)\s*([\s\S]+)$/)){let m=q(v[2]);switch(typeof m=="string"&&m.length===1&&v[1]!=="char"&&(m=m.charCodeAt(0)),v[1]){case"double":case"float":return new ue(ge(m));case"char":return typeof m=="string"?m:String.fromCharCode(Math.trunc(ge(m)));default:return Math.trunc(ge(m))}}if(d[0]==="("&&Yo(d,0)===d.length-1)return q(d.slice(1,-1));if(v=d.match(/^([A-Za-z_]\w*)(\+\+|--)$/))return $e(v[1],v[2]==="++"?1:-1,!1);if(v=d.match(/^(\+\+|--)([A-Za-z_]\w*)$/))return $e(v[2],v[1]==="++"?1:-1,!0);const s=Md(d);if(s){const{target:m,name:I,args:R}=s,W=()=>R.trim()?$n(R,",").map(q):[];return _d.has(m)?St(m,I,W()):/^[A-Za-z_]\w*$/.test(m)&&!H(m)&&Pd.has(I)&&!R.trim()?je(I):ft(q(m),I,W())}if(/^[A-Za-z_]\w*$/.test(d))return Q(d);throw new Error("Unsupported expression: "+d)},q=c=>{const d=c.trim();let v;if(v=d.match(Cd)){const[,m,I,R]=v,W=H(m);if(!W)throw new Error("error: cannot find symbol: variable "+m);let Z=q(R);return I!=="="&&(Z=Ie(I[0],Q(m),Z)),W.value=Y(W.type,Z,I!=="="),W.value}const s=Td(d);if(s)return ie(q(s[0]))?q(s[1]):q(s[2]);for(const m of Nd){const I=Id(d,m);if(!I)continue;const R=q(d.slice(0,I.i)),W=d.slice(I.i+I.op.length);switch(I.op){case"||":return ie(R)?!0:ie(q(W));case"&&":return ie(R)?ie(q(W)):!1;case"==":return J(R,q(W));case"!=":return!J(R,q(W));case"<":case">":case"<=":case">=":return Se(I.op,R,q(W));default:return Ie(I.op,R,q(W))}}if(d[0]==="!"&&d[1]!=="=")return!ie(q(d.slice(1)));if(d[0]==="-"&&d[1]!=="-"){const m=q(d.slice(1));if(!ct(m))throw new Error("error: bad operand type for unary operator '-'");return m instanceof ue?new ue(-m.v):-m}return d[0]==="+"&&d[1]!=="+"?q(d.slice(1)):Nt(d)},Te=c=>ie(q(c)),We=c=>{let d;if(!c||/^Scanner\b/.test(c))return null;if(c==="break")return Vn;if(c==="continue")return Za;if(/^return\b/.test(c))return Vi;if(d=c.match(/^System\.out\.(print|println|printf)\s*\(([\s\S]*)\)$/)){const v=d[2].trim()?$n(d[2],","):[];return d[1]==="printf"?_+=ec(q(v[0]),v.slice(1).map(q)):_+=(v.length?mn(q(v[0])):"")+(d[1]==="println"?`
`:""),null}if(d=c.match(Ja)){for(const v of $n(d[2],",")){const s=v.trim().match(/^([A-Za-z_]\w*)(?:\s*=\s*([\s\S]+))?$/);if(!s)throw new Error("Unsupported declaration: "+v.trim());const m=s[2]===void 0?Vo:q(s[2]),I=d[1]==="var"?$o(m):d[1];se(s[1],I,Y(I,m))}return null}return q(c),null},Ze=c=>{if(c)if(Ja.test(c))We(c);else for(const d of $n(c,","))We(d.trim())},Re=c=>{$.push(new Map);try{for(const d of c){const v=ne(d);if(v)return v}return null}finally{$.pop()}},ne=c=>{switch(c.type){case"empty":return null;case"simple":return We(c.text);case"block":return Re(c.body);case"if":return Te(c.cond)?ne(c.then):c.els?ne(c.els):null;case"while":for(;Te(c.cond);){K();const d=ne(c.body);if(d===Vn)break;if(d===Vi)return d}return null;case"do":do{K();const d=ne(c.body);if(d===Vn)break;if(d===Vi)return d}while(Te(c.cond));return null;case"switch":{const d=q(c.subject);let v=-1,s=-1;e:for(let m=0;m<c.cases.length;m++){const I=c.cases[m];if(I.labels===null){s=m;continue}for(const R of I.labels)if(J(d,q(R))){v=m;break e}}if(v<0&&(v=s),v<0)return null;$.push(new Map);try{for(let m=v;m<c.cases.length;m++){for(const I of c.cases[m].body){const R=ne(I);if(R===Vn)return null;if(R)return R}if(c.arrow)break}return null}finally{$.pop()}}case"for":$.push(new Map);try{for(Ze(c.init);c.cond===""||Te(c.cond);){K();const d=ne(c.body);if(d===Vn)break;if(d===Vi)return d;Ze(c.update)}}finally{$.pop()}return null}throw new Error("Unsupported statement")};try{const c=zd(p),d=Re(c.body);if(d===Vn||d===Za)throw new Error("error: break/continue outside of a loop");return{output:_,error:null}}catch(c){return{output:_,error:c.message}}}function Dd({item:p}){const[E,y]=jr.useState(p.input||""),[T,x]=jr.useState(null),_=/Scanner/.test(p.code);return w.jsxs("div",{className:"cr-item",children:[w.jsxs("div",{className:"cr-head",children:[w.jsx("b",{children:p.name}),w.jsxs("button",{className:"cr-run",onClick:()=>x(Rd(p.code,E)),children:[w.jsx(Pe,{name:"play",size:12})," Run"]})]}),w.jsx("pre",{className:"cr-code",children:w.jsx("code",{children:p.code})}),_&&w.jsxs("label",{className:"cr-stdin",children:[w.jsx("span",{className:"lbl",children:"PROGRAM INPUT (one value per line)"}),w.jsx("textarea",{rows:Math.min(8,E.split(`
`).length+1),value:E,onChange:j=>y(j.target.value),spellCheck:!1})]}),T&&w.jsxs("div",{className:"cr-out",role:"status",children:[w.jsx("span",{className:"lbl",children:"OUTPUT"}),w.jsxs("pre",{children:[T.output,T.error&&w.jsxs("span",{className:"cr-err",children:[T.output&&!T.output.endsWith(`
`)?`
`:"",T.error]})]})]})]})}function Od({items:p}){return w.jsx("div",{className:"cr",children:p.map(E=>w.jsx(Dd,{item:E},E.name))})}function Fd({task:p}){const[E,y]=jr.useState(!1),T=Array.isArray(p.items);return w.jsxs("div",{className:"task",children:[w.jsxs("div",{className:"row",children:[w.jsxs("div",{children:[w.jsx("span",{className:"tg",children:p.tag}),w.jsx("h5",{children:p.title}),p.time&&w.jsxs("div",{className:"meta",children:[w.jsx(Pe,{name:"clock"})," Submitted at ",p.time]}),p.due&&w.jsxs("div",{className:"meta",children:[w.jsx(Pe,{name:"clock"})," Due Date: ",p.due]}),p.module&&w.jsxs("div",{className:"meta",children:[w.jsx(Pe,{name:"folder"})," Module: ",p.module]}),p.points&&w.jsx("div",{className:"pts",children:p.points})]}),w.jsxs("div",{className:"act",children:[w.jsxs("span",{className:"done",children:[w.jsx(Pe,{name:"check",size:12})," Completed"]}),T?w.jsxs("button",{className:"btn ghost run-toggle"+(E?" open":""),"aria-expanded":E,onClick:()=>y(!E),children:[w.jsx(Pe,{name:"play"})," Run Code (",p.items.length,") ",w.jsx(Pe,{name:"chevron"})]}):p.pdf?w.jsxs("a",{className:"btn"+(p.primary?"":" ghost"),href:p.pdf,download:!0,children:[w.jsx(Pe,{name:"file"})," Download PDF"]}):w.jsxs("span",{className:"btn ghost","aria-disabled":"true",style:{opacity:.5,cursor:"not-allowed"},children:[w.jsx(Pe,{name:"file"})," No PDF yet"]})]})]}),T&&E&&w.jsx("div",{className:"panel",children:w.jsx(Od,{items:p.items})})]})}const Ad=[["prelim","PRELIM","Preliminary Term Deliverables",Bo],["midterm","MIDTERM","Midterm Term Deliverables",Ho],["final","FINAL","Final Term Deliverables",Qo]];function Ud(){const[p,E]=jr.useState("all"),y=[["all",`All Submissions (${Xa.length})`],["prelim",`Prelim Term (${Bo.length})`],["midterm",`Midterm Term (${Ho.length})`],["final",`Final Term (${Qo.length})`]],T=Ad.filter(([x])=>p==="all"||p===x);return w.jsxs("main",{className:"wrap",children:[w.jsxs("div",{className:"chips",children:[w.jsxs("span",{className:"chip",children:[w.jsx(Pe,{name:"cap"})," AY 2026–2027 • Sem 1"]}),w.jsxs("span",{className:"chip",children:[w.jsx(Pe,{name:"list"})," ",Xa.length," Total Course Submissions"]}),w.jsxs("span",{className:"chip dark",children:[w.jsx(Pe,{name:"check"})," 100% Status Completed"]})]}),w.jsx("h1",{style:{fontSize:"clamp(30px, 4vw, 40px)"},children:"Coursework & Laboratory Submissions"}),w.jsx("p",{className:"lead",style:{fontSize:17},children:"Official repository of individual and paired deliverables across Preliminary, Midterm, and Final periods with verified completion records and PDF artifacts."}),w.jsxs("div",{className:"tabs",children:[w.jsx("div",{children:y.map(([x,_])=>w.jsx("button",{className:p===x?"on":"",onClick:()=>E(x),children:_},x))}),w.jsxs("span",{children:[w.jsx(Pe,{name:"filter"})," Filter by period"]})]}),T.map(([x,_,j,V])=>w.jsxs("section",{children:[w.jsxs("div",{className:"grp",children:[w.jsxs("div",{children:[w.jsx("span",{className:"pill",children:_})," ",j]}),w.jsxs("span",{className:"count",children:[V.length," Deliverables"]})]}),V.map((M,X)=>w.jsx(Fd,{task:M},X))]},x))]})}function Vd(){return w.jsx("footer",{className:"foot",children:w.jsxs("div",{className:"wrap",children:[w.jsxs("div",{className:"a",children:[w.jsx("p",{children:"All project code, laboratory submissions, and individual takeaways represent authentic coursework verified under collegiate academic honesty guidelines."}),w.jsx("span",{className:"lbl",children:"DESIGN WITH FIGMA"})]}),w.jsxs("div",{className:"b",children:[w.jsx("span",{children:"Created by Steven Q. Maligaya"}),w.jsx("span",{children:"Term: AY 2026–2027  •  Verified Peer Deliverable"})]})]})})}function $d(){const[p,E]=jr.useState("overview");return w.jsxs("div",{className:"ep",children:[w.jsx(cd,{page:p,setPage:E}),p==="overview"?w.jsx(wd,{}):w.jsx(Ud,{}),w.jsx(Vd,{})]})}sd.createRoot(document.getElementById("root")).render(w.jsx($d,{}));
