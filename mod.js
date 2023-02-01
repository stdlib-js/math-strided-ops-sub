// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,e=Object.defineProperty,r=Object.prototype,i=r.toString,o=r.__defineGetter__,u=r.__defineSetter__,a=r.__lookupGetter__,l=r.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,n,e){var f,c,p,m;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(a.call(t,n)||l.call(t,n)?(f=t.__proto__,t.__proto__=r,delete t[n],t[n]=e.value,t.__proto__=f):t[n]=e.value),p="get"in e,m="set"in e,c&&(p||m))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,n,e.get),m&&u&&u.call(t,n,e.set),t};var f=n;function c(t,n,e){f(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p=Math.floor;function m(t){return p(t)===t}function s(t){return"number"==typeof t}var g="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return g&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var h=Object.prototype.hasOwnProperty;function v(t,n){return null!=t&&h.call(t,n)}var d="function"==typeof Symbol?Symbol.toStringTag:"";var w=y()?function(t){var n,e,r;if(null==t)return b.call(t);e=t[d],n=v(t,d);try{t[d]=void 0}catch(n){return b.call(t)}return r=b.call(t),n?t[d]=e:delete t[d],r}:function(t){return b.call(t)},x=Number,E=x.prototype.toString;var j=y();function T(t){return"object"==typeof t&&(t instanceof x||(j?function(t){try{return E.call(t),!0}catch(t){return!1}}(t):"[object Number]"===w(t)))}function O(t){return s(t)||T(t)}c(O,"isPrimitive",s),c(O,"isObject",T);var _=Number.POSITIVE_INFINITY,S=x.NEGATIVE_INFINITY;function V(t){return t<_&&t>S&&m(t)}function I(t){return s(t)&&V(t)}function P(t){return T(t)&&V(t.valueOf())}function F(t){return I(t)||P(t)}function A(t){return I(t)&&t>=0}function k(t){return P(t)&&t.valueOf()>=0}function N(t){return A(t)||k(t)}function B(t){return Object.keys(Object(t))}c(F,"isPrimitive",I),c(F,"isObject",P),c(N,"isPrimitive",A),c(N,"isObject",k);var R=void 0!==Object.keys;function M(t){return"[object Arguments]"===w(t)}var L=function(){return M(arguments)}();function Y(t){return"string"==typeof t}var C=String.prototype.valueOf;var U=y();function G(t){return"object"==typeof t&&(t instanceof String||(U?function(t){try{return C.call(t),!0}catch(t){return!1}}(t):"[object String]"===w(t)))}function X(t){return Y(t)||G(t)}function H(t){return t!=t}function J(t){return s(t)&&H(t)}function W(t){return T(t)&&H(t.valueOf())}function q(t){return J(t)||W(t)}c(X,"isPrimitive",Y),c(X,"isObject",G),c(q,"isPrimitive",J),c(q,"isObject",W);var z=Object.prototype.propertyIsEnumerable;var D=!z.call("beep","0");function K(t,n){var e;return null!=t&&(!(e=z.call(t,n))&&D&&X(t)?!J(n=+n)&&I(n)&&n>=0&&n<t.length:e)}var Q=Array.isArray?Array.isArray:function(t){return"[object Array]"===w(t)};var Z=L?M:function(t){return null!==t&&"object"==typeof t&&!Q(t)&&"number"==typeof t.length&&m(t.length)&&t.length>=0&&t.length<=4294967295&&v(t,"callee")&&!K(t,"callee")},$=Array.prototype.slice;function tt(t){return null!==t&&"object"==typeof t}c(tt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!Q(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(tt));var nt=K((function(){}),"prototype"),et=!K({toString:null},"toString");function rt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&m(t.length)&&t.length>=0&&t.length<=9007199254740991}function it(t,n,e){var r,i;if(!rt(t)&&!Y(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!I(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(q(n)){for(;i<r;i++)if(q(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1}var ot=/./;function ut(t){return"boolean"==typeof t}var at=Boolean.prototype.toString;var lt=y();function ft(t){return"object"==typeof t&&(t instanceof Boolean||(lt?function(t){try{return at.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===w(t)))}function ct(t){return ut(t)||ft(t)}function pt(){return new Function("return this;")()}c(ct,"isPrimitive",ut),c(ct,"isObject",ft);var mt="object"==typeof self?self:null,st="object"==typeof window?window:null,gt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},yt="object"==typeof gt?gt:null;var bt=function(t){if(arguments.length){if(!ut(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return pt()}if(mt)return mt;if(st)return st;if(yt)return yt;throw new Error("unexpected error. Unable to resolve global object.")}(),ht=bt.document&&bt.document.childNodes,vt=Int8Array;function dt(){return/^\s*function\s*([^(]*)/i}var wt=/^\s*function\s*([^(]*)/i;function xt(t){var n,e,r,i;if(("Object"===(e=w(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=wt.exec(r.toString()))return n[1]}return tt(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}c(dt,"REGEXP",wt);var Et="function"==typeof ot||"object"==typeof vt||"function"==typeof ht?function(t){return xt(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?xt(t).toLowerCase():n};function jt(t){return t.constructor&&t.constructor.prototype===t}var Tt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Ot="undefined"==typeof window?void 0:window;var _t=function(){var t;if("undefined"===Et(Ot))return!1;for(t in Ot)try{-1===it(Tt,t)&&v(Ot,t)&&null!==Ot[t]&&"object"===Et(Ot[t])&&jt(Ot[t])}catch(t){return!0}return!1}(),St="undefined"!=typeof window;var Vt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var It=R?function(){return 2!==(B(arguments)||"").length}(1,2)?function(t){return Z(t)?B($.call(t)):B(t)}:B:function(t){var n,e,r,i,o,u,a;if(i=[],Z(t)){for(a=0;a<t.length;a++)i.push(a.toString());return i}if("string"==typeof t){if(t.length>0&&!v(t,"0"))for(a=0;a<t.length;a++)i.push(a.toString())}else{if(!1==(r="function"==typeof t)&&!tt(t))return i;e=nt&&r}for(o in t)e&&"prototype"===o||!v(t,o)||i.push(String(o));if(et)for(n=function(t){if(!1===St&&!_t)return jt(t);try{return jt(t)}catch(t){return!1}}(t),a=0;a<Vt.length;a++)u=Vt[a],n&&"constructor"===u||!v(t,u)||i.push(String(u));return i};function Pt(t){return"function"===Et(t)}var Ft,At=Object.getPrototypeOf;Ft=Pt(Object.getPrototypeOf)?At:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===w(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var kt=Ft;var Nt=Object.prototype;function Bt(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!Q(t)}(t)&&(n=function(t){return null==t?null:(t=Object(t),kt(t))}(t),!n||!v(t,"constructor")&&v(n,"constructor")&&Pt(n.constructor)&&"[object Function]"===w(n.constructor)&&v(n,"isPrototypeOf")&&Pt(n.isPrototypeOf)&&(n===Nt||function(t){var n;for(n in t)if(!v(t,n))return!1;return!0}(t)))}function Rt(t,n){var e,r,i,o,u,a,l,f=!0;if(!tt(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!Bt(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(v(n,"duplicates")&&!ut(f=n.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+f+"`.")}if(r=(e=It(t)).length,u={},f)for(l=0;l<r;l++)v(u,o=t[i=e[l]])?(a=u[o],Q(a)?u[o].push(i):u[o]=[a,i]):u[o]=i;else for(l=0;l<r;l++)u[t[i=e[l]]]=i;return u}var Mt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Lt(){return Mt.slice()}var Yt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Ct(){return Yt.slice()}function Ut(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Gt(t,n,e){f(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}c(Ct,"enum",Ut),function(t,n){var e,r,i;for(e=It(n),i=0;i<e.length;i++)Gt(t,r=e[i],n[r])}(Ct,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Xt={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Ht(){return{bool:Xt.bool,int8:Xt.int8,uint8:Xt.uint8,uint8c:Xt.uint8c,int16:Xt.int16,uint16:Xt.uint16,int32:Xt.int32,uint32:Xt.uint32,int64:Xt.int64,uint64:Xt.uint64,float32:Xt.float32,float64:Xt.float64,complex64:Xt.complex64,complex128:Xt.complex128,binary:Xt.binary,generic:Xt.generic,notype:Xt.notype,userdefined_type:Xt.userdefined_type}}c(Lt,"enum",Ht),function(t,n){var e,r,i;for(e=It(n),i=0;i<e.length;i++)Gt(t,r=e[i],n[r])}(Lt,Ht());var Jt=Rt(Ht(),{duplicates:!1});var Wt={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function qt(t){var n=typeof t;return"string"===n?null===function(t){var n=Wt[t];return"number"==typeof n?n:null}(t)?null:t:"number"===n?function(t){var n=Jt[t];return"string"==typeof n?n:null}(t):null}function zt(t,n,e){var r,i,o,u,a,l,f,c,p;if(!("object"==typeof(p=t)&&null!==p&&"number"==typeof p.length&&m(p.length)&&p.length>=0&&p.length<=4294967295))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(!A(n))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+n+"`.");if(!A(e))throw new TypeError("invalid argument. Third argument must be a nonnegative integer. Value: `"+e+"`.");if(0===(r=t.length))throw new RangeError("invalid argument. First argument must contain at least one element.");if(r%(a=n+e)!=0)throw new RangeError("invalid arguments. The length of the first argument is incompatible with the second and third arguments.");for(i=[],o=[],l=2*a,c=2*n,f=0;f<=l;f++)0===f?f===c?o.push("() => ("):o.push("("):f===l?f===c?o.push(") => ()"):o.push(")"):f===c?o.push(") => ("):f%2==1?o.push(""):o.push(", ");for(f=0;f<r;f++)null===(u=qt(t[f]))&&(u=t[f]),o[2*(c=f%a)+1]=u,c===a-1&&i.push(o.join(""));return i}function Dt(t,n,e,r){return c(e,"nargs",r?t.nargs+t.nin+t.nout:t.nargs),c(e,"nin",t.nin),c(e,"nout",t.nout),function(t,n,e){f(t,n,{configurable:!1,enumerable:!1,get:e})}(e,"types",(function(){return zt(n,t.nin,t.nout)})),e}var Kt={nargs:10,nin:2,nout:1},Qt={float64:{float64:"float64",float32:"float64",int32:"float64",int16:"float64",int8:"float64",uint32:"float64",uint16:"float64",uint8:"float64",uint8c:"float64",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},float32:{float64:"float64",float32:"float32",int32:"float64",int16:"float32",int8:"float32",uint32:"float64",uint16:"float32",uint8:"float32",uint8c:"float32",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},int32:{float64:"float64",float32:"float64",int32:"int32",int16:"int32",int8:"int32",uint32:"float64",uint16:"int32",uint8:"int32",uint8c:"int32",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},int16:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"float64",uint16:"int32",uint8:"int16",uint8c:"int16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},int8:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int8",uint32:"float64",uint16:"int32",uint8:"int16",uint8c:"int16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},uint32:{float64:"float64",float32:"float64",int32:"float64",int16:"float64",int8:"float64",uint32:"uint32",uint16:"uint32",uint8:"uint32",uint8c:"uint32",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},uint16:{float64:"float64",float32:"float32",int32:"int32",int16:"int32",int8:"int32",uint32:"uint32",uint16:"uint16",uint8:"uint16",uint8c:"uint16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},uint8:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"uint32",uint16:"uint16",uint8:"uint8",uint8c:"uint8",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},uint8c:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"uint32",uint16:"uint16",uint8:"uint8",uint8c:"uint8c",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},complex128:{float64:"complex128",float32:"complex128",int32:"complex128",int16:"complex128",int8:"complex128",uint32:"complex128",uint16:"complex128",uint8:"complex128",uint8c:"complex128",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},complex64:{float64:"complex128",float32:"complex64",int32:"complex128",int16:"complex64",int8:"complex64",uint32:"complex128",uint16:"complex64",uint8:"complex64",uint8c:"complex64",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},generic:{float64:"generic",float32:"generic",int32:"generic",int16:"generic",int8:"generic",uint32:"generic",uint16:"generic",uint8:"generic",uint8c:"generic",complex64:"generic",complex128:"generic",binary:-1,generic:"generic"},binary:{float64:-1,float32:-1,int32:-1,int16:-1,int8:-1,uint32:-1,uint16:-1,uint8:-1,uint8c:-1,complex64:-1,complex128:-1,binary:"binary",generic:-1}};function Zt(){var t,n,e,r,i,o,u,a,l;for(e={},n=(t=It(Qt)).length,l=0;l<n;l++){for(i=t[l],u=Qt[i],r={},a=0;a<n;a++)r[o=t[a]]=u[o];e[i]=r}return e}function $t(t,n){var e;return 0===arguments.length?Zt():(t=qt(t),v(Qt,t)&&v(e=Qt[t],n=qt(n))?e[n]:null)}var tn,nn={float64:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int32:{float64:1,float32:0,int32:1,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1},binary:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:1,generic:0}};function en(){var t,n,e,r,i,o,u,a,l;for(e={},n=(t=It(nn)).length,l=0;l<n;l++){for(i=t[l],u=nn[i],r={},a=0;a<n;a++)r[o=t[a]]=u[o];e[i]=r}return e}function rn(){var t,n,e,r,i,o,u,a,l;for(e={},n=(t=It(nn)).length,l=0;l<n;l++){for(i=t[l],u=nn[i],r=[],a=0;a<n;a++)1===u[o=t[a]]&&r.push(o);e[i]=r}return e}function on(t){return 0===arguments.length?en():(void 0===tn&&(tn=rn()),t=qt(t),v(tn,t)?tn[t].slice():null)}var un=Rt(Ht(),{duplicates:!1});function an(t){var n=un[t];return"string"==typeof n?n:null}var ln=Ht();function fn(t){var n=ln[t];return"number"==typeof n?n:null}function cn(t){var n=typeof t;return"number"===n?an(t)?t:null:"string"===n?fn(t):null}function pn(t){var n=typeof t;return"string"===n?fn(t)?t:null:"number"===n?an(t):null}function mn(t,n){var e,r,i,o,u,a,l;for(r=t.length,i=n.length,e=[],l=0,u=0;u<r&&!(l>=i);u++)for(o=t[u],a=l;a<i;a++)if(o===n[a]){l=a+1,e.push(o);break}return e}function sn(t){var n,e,r;for(n=[],r=0;r<t.length;r++){if(null===(e=pn(t[r])))return new TypeError("invalid argument. Must provided recognized data types. Unable to resolve a data type string. Value: `"+t[r]+"`.");n.push(e)}return n}var gn=[[12,13,10,11,15,4,6,1,5,7,2],[12,13,10,11,15,4,6,1,5,7,2],[12,13,10,11,15,4,6,1,5,7,2]],yn=function(t,n,e,r){var i,o,u,a,l,f,c,p,m,s,g,y,b,h,v,d,w;if(u=arguments.length>3?r:{},(f=sn(t))instanceof Error)throw f;if(n===t)c=f;else if((c=sn(n))instanceof Error)throw c;if(e===t)p=f;else if(e===n)p=c;else if((p=sn(e))instanceof Error)throw p;for(p.sort(),i={},b=f.length,h=c.length,l=[],v=0;v<b;v++)for(m=f[v],d=0;d<h;d++)if(-1!==(g=$t(m,s=c[d]))&&null!==g)for(l.push(m,s,g),void 0===(o=i[g])&&(o=mn(p,(o=on(g)).sort()),i[g]=o),w=0;w<o.length;w++)(y=o[w])!==g&&l.push(m,s,y);if(u.enums){for(a=[],v=0;v<l.length;v++)a.push(cn(l[v]));l=a}return l}(gn[0],gn[1],gn[2],{enums:!0});function bn(t){return I(t)&&t>0}function hn(t){return P(t)&&t.valueOf()>0}function vn(t){return bn(t)||hn(t)}c(vn,"isPrimitive",bn),c(vn,"isObject",hn);var dn=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!function(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&m(t.length)&&t.length>=0&&t.length<=4294967295}(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(Pt);function wn(t){return Math.abs(t)}function xn(t,n,e,r,i,o,u,a,l){var f,c,p,m;for(f=o,p=0;p<t;p++){for(c=l,m=0;m<n&&e[f+m*i]===u[c];m++)c+=a;if(m===n)return p;f+=r}return-1}function En(t,n,e,r,i,o){var u,a,l,f,c,p;if(Pt(t))p=t;else if(!dn(t))throw new TypeError("invalid argument. First argument must be either a function or an array of functions. Value: `"+t+"`.");if(!rt(n))throw new TypeError("invalid argument. Second argument must be an array-like object. Value: `"+n+"`.");if(!rt(e)&&null!==e)throw new TypeError("invalid argument. Third argument must be an array-like object or `null`. Value: `"+e+"`.");if(!vn(r))throw new TypeError("invalid argument. Fourth argument must be a positive integer. Value: `"+r+"`.");if(!A(i))throw new TypeError("invalid argument. Fifth argument must be a nonnegative integer. Value: `"+i+"`.");if(!A(o))throw new TypeError("invalid argument. Sixth argument must be a nonnegative integer. Value: `"+o+"`.");if(0===(l=i+o))throw new Error("invalid arguments. Interface must accept at least one strided input and/or output array. Based on the provided arguments, `nin+nout` equals `0`.");if(p){if(!I(f=n.length/l))throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.")}else if(f=t.length,n.length!==f*l)throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.");if(e&&e.length!==f)throw new Error("invalid argument. The third argument must have the same number of elements as the first argument.");if(3*l+1===r)a=!1;else{if(4*l+1!==r)throw new Error("invalid argument. Fourth argument is incompatible with the number of strided input and output arrays.");a=!0}return c=i*(u=a?4:3)+1,function(){var m,s,g,y,b,h,v,d,w,x,E,j;if((h=arguments.length)!==r){if(h<r)throw new Error("invalid invocation. Insufficient arguments.");throw new Error("invalid invocation. Too many arguments.")}if(!I(d=arguments[0]))throw new TypeError("invalid argument. First argument must be an integer.");for(b=[d],y=[],E=1;E<r;E+=u)y.push(arguments[E]);for(m=[],E=3;E<r;E+=u){if(!I(w=arguments[E]))throw E<c?new TypeError("invalid argument. Input array stride argument must be an integer."):new TypeError("invalid argument. Output array stride argument must be an integer.");m.push(w)}if(a)for(s=[],E=4;E<r;E+=u){if(!A(w=arguments[E]))throw E<c?new TypeError("invalid argument. Input array offset argument must be a nonnegative integer."):new TypeError("invalid argument. Output array offset argument must be a nonnegative integer.");s.push(w)}for(g=[],E=2;E<r;E+=u){if(!rt(w=arguments[E]))throw E<c?new TypeError("invalid argument. Input array argument must be an array-like object."):new TypeError("invalid argument. Output array argument must be an array-like object.");if(j=(E-2)/u,a){if(v=s[j]+(d-1)*m[j],d>0&&(v<0||v>=w.length))throw E<c?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.")}else if((d-1)*wn(m[j])>=w.length)throw E<c?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.");g.push(w)}if((v=xn(f,l,n,l,1,0,y,1,0))<0)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");x=p||t[v];e?a?x(g,b,m,s,e[v]):x(g,b,m,e[v]):a?x(g,b,m,s):x(g,b,m);if(1===o)return g[l-1];if(0===o)return;return g.slice(i)}}function jn(t,n){return t[n]}function Tn(t,n){return t.get(n)}function On(t,n,e){t[n]=e}function _n(t,n,e){t.set(e,n)}function Sn(t,n,e,r){var i,o,u,a,l,f;return(a=t[0]).get&&a.set&&(i=Tn),(l=t[1]).get&&l.set&&(o=Tn),(f=t[2]).get&&f.set&&(u=_n),i||o||u?function(t,n,e,r,i){var o,u,a,l,f,c,p,m,s,g,y,b,h,v;if(!((h=n[0])<=0))for(p=(l=e[0])<0?(1-h)*l:0,m=(f=e[1])<0?(1-h)*f:0,s=(c=e[2])<0?(1-h)*c:0,g=t[0],y=t[1],b=t[2],o=r[0],u=r[1],a=r[2],v=0;v<h;v++)a(b,s,i(o(g,p),u(y,m))),p+=l,m+=f,s+=c}(t,n,e,[i=i||jn,o=o||jn,u=u||On],r):function(t,n,e,r){var i,o,u,a,l,f,c,p,m,s,g;if(!((s=n[0])<=0))for(a=(i=e[0])<0?(1-s)*i:0,l=(o=e[1])<0?(1-s)*o:0,f=(u=e[2])<0?(1-s)*u:0,c=t[0],p=t[1],m=t[2],g=0;g<s;g++)m[f]=r(c[a],p[l]),a+=i,l+=o,f+=u}(t,n,e,r)}function Vn(t,n,e,r,i){var o,u,a,l,f,c;return(l=t[0]).get&&l.set&&(o=Tn),(f=t[1]).get&&f.set&&(u=Tn),(c=t[2]).get&&c.set&&(a=_n),o||u||a?function(t,n,e,r,i,o){var u,a,l,f,c,p,m,s,g,y,b,h,v,d;if(!((v=n[0])<=0))for(m=r[0],s=r[1],g=r[2],f=e[0],c=e[1],p=e[2],y=t[0],b=t[1],h=t[2],u=i[0],a=i[1],l=i[2],d=0;d<v;d++)l(h,g,o(u(y,m),a(b,s))),m+=f,s+=c,g+=p}(t,n,e,r,[o=o||jn,u=u||jn,a=a||On],i):function(t,n,e,r,i){var o,u,a,l,f,c,p,m,s,g,y;if(!((g=n[0])<=0))for(l=r[0],f=r[1],c=r[2],o=e[0],u=e[1],a=e[2],p=t[0],m=t[1],s=t[2],y=0;y<g;y++)s[c]=i(p[l],m[f]),l+=o,f+=u,c+=a}(t,n,e,r,i)}function In(t,n){if(!(this instanceof In))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!s(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!s(n))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+n+"`.");return f(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),f(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:n}),this}function Pn(t){return t.re}function Fn(t){return t.im}c(Sn,"ndarray",Vn),c(In,"BYTES_PER_ELEMENT",8),c(In.prototype,"BYTES_PER_ELEMENT",8),c(In.prototype,"byteLength",16),c(In.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),c(In.prototype,"toJSON",(function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t}));var An="function"==typeof Math.fround?Math.fround:null,kn="function"==typeof Float32Array;var Nn="function"==typeof Float32Array?Float32Array:null;var Bn,Rn="function"==typeof Float32Array?Float32Array:void 0;Bn=function(){var t,n,e;if("function"!=typeof Nn)return!1;try{n=new Nn([1,3.14,-3.14,5e40]),e=n,t=(kn&&e instanceof Float32Array||"[object Float32Array]"===w(e))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===_}catch(n){t=!1}return t}()?Rn:function(){throw new Error("not implemented")};var Mn=new Bn(1);var Ln="function"==typeof An?An:function(t){return Mn[0]=t,Mn[0]};function Yn(t,n){if(!(this instanceof Yn))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!s(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!s(n))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+n+"`.");return f(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Ln(t)}),f(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Ln(n)}),this}function Cn(t){return t.re}function Un(t){return t.im}c(Yn,"BYTES_PER_ELEMENT",4),c(Yn.prototype,"BYTES_PER_ELEMENT",4),c(Yn.prototype,"byteLength",8),c(Yn.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),c(Yn.prototype,"toJSON",(function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t}));var Gn="number";function Xn(t,n,e){var r;if(!Pt(t))throw new TypeError("invalid argument. First argument must be a function. Value: `"+t+"`.");if(!A(n))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+n+"`.");if(!Pt(e))throw new TypeError("invalid argument. Third argument must be a constructor function. Value: `"+e+"`.");return r=[function(){return t()},function(n){typeof n===Gn&&(n=new e(n,0));return t(n)},function(n,r){typeof n===Gn&&(n=new e(n,0));typeof r===Gn&&(r=new e(r,0));return t(n,r)},function(n,r,i){typeof n===Gn&&(n=new e(n,0));typeof r===Gn&&(r=new e(r,0));typeof i===Gn&&(i=new e(i,0));return t(n,r,i)},function(n,r,i,o){typeof n===Gn&&(n=new e(n,0));typeof r===Gn&&(r=new e(r,0));typeof i===Gn&&(i=new e(i,0));typeof o===Gn&&(o=new e(o,0));return t(n,r,i,o)},function(n,r,i,o,u){typeof n===Gn&&(n=new e(n,0));typeof r===Gn&&(r=new e(r,0));typeof i===Gn&&(i=new e(i,0));typeof o===Gn&&(o=new e(o,0));typeof u===Gn&&(u=new e(u,0));return t(n,r,i,o,u)}],n<=5?r[n]:function(){var n,r,i;for(n=[],i=0;i<arguments.length;i++)typeof(r=arguments[i])===Gn&&(r=new e(r,0)),n.push(r);return t.apply(null,n)}}var Hn="complex64",Jn="complex128",Wn={complex64:Yn,complex128:In};function qn(t,n,e,r){if(r===Hn||r===Jn)return n===e&&e===r?t[r]:Xn(t[r],2,Wn[r]);if("generic"===r){if(n===Jn||e===Jn)return n===e?t[n]:Xn(t[Jn],2,Wn[Jn]);if(n===Hn||e===Hn)return n===e?t[n]:Xn(t[Hn],2,Wn[Hn])}return t.default}var zn=function(t,n){var e,r,i,o,u;for(e=[],u=0;u<n.length;u+=3)r=pn(n[u]),i=pn(n[u+1]),o=pn(n[u+2]),e.push(qn(t,r,i,o));return e}({default:function(t,n){return t-n},complex64:function(t,n){var e=Cn(t),r=Cn(n),i=Un(t),o=Un(n);return new Yn(Ln(e-r),Ln(i-o))},complex128:function(t,n){return new In(Pn(t)-Pn(n),Fn(t)-Fn(n))}},yn),Dn=En(Sn,yn,zn,Kt.nargs,Kt.nin,Kt.nout);function Kn(t,n,e,r,i,o,u,a,l,f){return Dn(t,cn(n),e,r,cn(i),o,u,cn(a),l,f)}var Qn=En(Vn,yn,zn,Kt.nargs+Kt.nin+Kt.nout,Kt.nin,Kt.nout);function Zn(t,n,e,r,i,o,u,a,l,f,c,p,m){return Qn(t,cn(n),e,r,i,cn(o),u,a,l,cn(f),c,p,m)}c(Kn,"ndarray",Zn),Dt(Kt,yn,Kn,!1),Dt(Kt,yn,Kn.ndarray,!0);export{Kn as default,Zn as ndarray};
//# sourceMappingURL=mod.js.map
