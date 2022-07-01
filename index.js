// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).sub=n()}(this,(function(){"use strict";function t(t){var n=t.default;if("function"==typeof n){var e=function(){return n.apply(this,arguments)};e.prototype=n.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(n){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})})),e}var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return n({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,i=Object.prototype,o=i.toString,u=i.__defineGetter__,a=i.__defineSetter__,l=i.__lookupGetter__,f=i.__lookupSetter__;var c=function(t,n,e){var r,c,p,m;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(l.call(t,n)||f.call(t,n)?(r=t.__proto__,t.__proto__=i,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),p="get"in e,m="set"in e,c&&(p||m))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,n,e.get),m&&a&&a.call(t,n,e.set),t},p=r,m=c,s=e()?p:m,v=s;var g=function(t,n,e){v(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})},y=g,b=s;var h=function(t,n,e){b(t,n,{configurable:!1,enumerable:!1,get:e})},d=h,w=Math.floor;var x=function(t){return w(t)===t},E=x;var j=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&E(t.length)&&t.length>=0&&t.length<=4294967295};var O=function(t){return"number"==typeof t};var T=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var _=function(){return T&&"symbol"==typeof Symbol.toStringTag},P=Object.prototype.toString,S=P;var V=function(t){return S.call(t)},I=Object.prototype.hasOwnProperty;var F=function(t,n){return null!=t&&I.call(t,n)},A="function"==typeof Symbol?Symbol.toStringTag:"",k=F,N=A,R=P;var B=V,M=function(t){var n,e,r;if(null==t)return R.call(t);e=t[N],n=k(t,N);try{t[N]=void 0}catch(n){return R.call(t)}return r=R.call(t),n?t[N]=e:delete t[N],r},L=_()?M:B,Y=Number,C=Y.prototype.toString;var G=L,U=Y,X=function(t){try{return C.call(t),!0}catch(t){return!1}},z=_();var D=function(t){return"object"==typeof t&&(t instanceof U||(z?X(t):"[object Number]"===G(t)))},H=O,J=D;var W=y,q=function(t){return H(t)||J(t)},K=D;W(q,"isPrimitive",O),W(q,"isObject",K);var Q=q,Z=Number.POSITIVE_INFINITY,$=Y.NEGATIVE_INFINITY,tt=Z,nt=$,et=x;var rt=function(t){return t<tt&&t>nt&&et(t)},it=Q.isPrimitive,ot=rt;var ut=function(t){return it(t)&&ot(t)},at=Q.isObject,lt=rt;var ft=function(t){return at(t)&&lt(t.valueOf())},ct=ut,pt=ft;var mt=y,st=function(t){return ct(t)||pt(t)},vt=ft;mt(st,"isPrimitive",ut),mt(st,"isObject",vt);var gt=st,yt=gt.isPrimitive;var bt=function(t){return yt(t)&&t>=0},ht=gt.isObject;var dt=function(t){return ht(t)&&t.valueOf()>=0},wt=bt,xt=dt;var Et=y,jt=function(t){return wt(t)||xt(t)},Ot=dt;Et(jt,"isPrimitive",bt),Et(jt,"isObject",Ot);var Tt=jt;var _t=function(t){return Object.keys(Object(t))},Pt=_t;var St=function(){return function(){return 2!==(Pt(arguments)||"").length}(1,2)},Vt=void 0!==Object.keys,It=L;var Ft,At=function(t){return"[object Arguments]"===It(t)},kt=At;Ft=function(){return kt(arguments)}();var Nt=Ft;var Rt=function(t){return"string"==typeof t},Bt=String.prototype.valueOf;var Mt=L,Lt=function(t){try{return Bt.call(t),!0}catch(t){return!1}},Yt=_();var Ct=function(t){return"object"==typeof t&&(t instanceof String||(Yt?Lt(t):"[object String]"===Mt(t)))},Gt=Rt,Ut=Ct;var Xt=y,zt=function(t){return Gt(t)||Ut(t)},Dt=Ct;Xt(zt,"isPrimitive",Rt),Xt(zt,"isObject",Dt);var Ht=zt;var Jt=function(t){return t!=t},Wt=Q.isPrimitive,qt=Jt;var Kt=function(t){return Wt(t)&&qt(t)},Qt=Q.isObject,Zt=Jt;var $t=function(t){return Qt(t)&&Zt(t.valueOf())},tn=Kt,nn=$t;var en=y,rn=function(t){return tn(t)||nn(t)},on=$t;en(rn,"isPrimitive",Kt),en(rn,"isObject",on);var un,an=rn,ln=Object.prototype.propertyIsEnumerable;un=!ln.call("beep","0");var fn=Ht,cn=an.isPrimitive,pn=gt.isPrimitive,mn=ln,sn=un;var vn=function(t,n){var e;return null!=t&&(!(e=mn.call(t,n))&&sn&&fn(t)?!cn(n=+n)&&pn(n)&&n>=0&&n<t.length:e)},gn=vn,yn=L;var bn=Array.isArray?Array.isArray:function(t){return"[object Array]"===yn(t)},hn=F,dn=gn,wn=bn,xn=x;var En=Nt?At:function(t){return null!==t&&"object"==typeof t&&!wn(t)&&"number"==typeof t.length&&xn(t.length)&&t.length>=0&&t.length<=4294967295&&hn(t,"callee")&&!dn(t,"callee")},jn=En,On=_t,Tn=Array.prototype.slice;var _n=function(t){return jn(t)?On(Tn.call(t)):On(t)},Pn=bn;var Sn=function(t){return null!==t&&"object"==typeof t};y(Sn,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!Pn(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(Sn));var Vn=Sn;var In=gn((function(){}),"prototype"),Fn=!gn({toString:null},"toString"),An=x;var kn=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&An(t.length)&&t.length>=0&&t.length<=9007199254740991},Nn=an,Rn=kn,Bn=Ht.isPrimitive,Mn=gt.isPrimitive;var Ln=function(t,n,e){var r,i;if(!Rn(t)&&!Bn(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!Mn(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(Nn(n)){for(;i<r;i++)if(Nn(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1},Yn=Ln,Cn=/./;var Gn=function(t){return"boolean"==typeof t},Un=Boolean.prototype.toString;var Xn=L,zn=function(t){try{return Un.call(t),!0}catch(t){return!1}},Dn=_();var Hn=function(t){return"object"==typeof t&&(t instanceof Boolean||(Dn?zn(t):"[object Boolean]"===Xn(t)))},Jn=Gn,Wn=Hn;var qn=y,Kn=function(t){return Jn(t)||Wn(t)},Qn=Hn;qn(Kn,"isPrimitive",Gn),qn(Kn,"isObject",Qn);var Zn=Kn;var $n=function(){return new Function("return this;")()},te="object"==typeof self?self:null,ne="object"==typeof window?window:null,ee="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},re="object"==typeof ee?ee:null;module.exports=re;var ie=Zn.isPrimitive,oe=$n,ue=te,ae=ne,le=t(Object.freeze({__proto__:null}));var fe=function(t){if(arguments.length){if(!ie(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return oe()}if(ue)return ue;if(ae)return ae;if(le)return le;throw new Error("unexpected error. Unable to resolve global object.")},ce=fe(),pe=ce.document&&ce.document.childNodes,me=Int8Array,se=Cn,ve=pe,ge=me;var ye=function(){return"function"==typeof se||"object"==typeof ge||"function"==typeof ve};var be=function(){return/^\s*function\s*([^(]*)/i},he=be;y(he,"REGEXP",be());var de=Vn;var we=L,xe=he.REGEXP,Ee=function(t){return de(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var je=function(t){var n,e,r;if(("Object"===(e=we(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=xe.exec(r.toString()))return n[1]}return Ee(t)?"Buffer":e},Oe=je;var Te=je;var _e=function(t){var n;return null===t?"null":"object"===(n=typeof t)?Oe(t).toLowerCase():n},Pe=function(t){return Te(t).toLowerCase()},Se=ye()?Pe:_e;var Ve,Ie=function(t){return t.constructor&&t.constructor.prototype===t},Fe="undefined"==typeof window?void 0:window,Ae=F,ke=Yn,Ne=Se,Re=Ie,Be=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Me=Fe;Ve=function(){var t;if("undefined"===Ne(Me))return!1;for(t in Me)try{-1===ke(Be,t)&&Ae(Me,t)&&null!==Me[t]&&"object"===Ne(Me[t])&&Re(Me[t])}catch(t){return!0}return!1}();var Le="undefined"!=typeof window,Ye=Ve,Ce=Ie,Ge=Le;var Ue=Vn,Xe=F,ze=En,De=In,He=Fn,Je=function(t){if(!1===Ge&&!Ye)return Ce(t);try{return Ce(t)}catch(t){return!1}},We=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var qe=_t,Ke=_n,Qe=function(t){var n,e,r,i,o,u,a;if(i=[],ze(t)){for(a=0;a<t.length;a++)i.push(a.toString());return i}if("string"==typeof t){if(t.length>0&&!Xe(t,"0"))for(a=0;a<t.length;a++)i.push(a.toString())}else{if(!1===(r="function"==typeof t)&&!Ue(t))return i;e=De&&r}for(o in t)e&&"prototype"===o||!Xe(t,o)||i.push(String(o));if(He)for(n=Je(t),a=0;a<We.length;a++)u=We[a],n&&"constructor"===u||!Xe(t,u)||i.push(String(u));return i},Ze=Vt?St()?Ke:qe:Qe,$e=bn;var tr=function(t){return"object"==typeof t&&null!==t&&!$e(t)},nr=Se;var er=function(t){return"function"===nr(t)},rr=Object.getPrototypeOf;var ir=function(t){return t.__proto__},or=L,ur=ir;var ar=function(t){var n=ur(t);return n||null===n?n:"[object Function]"===or(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},lr=rr,fr=ar,cr=er(Object.getPrototypeOf)?lr:fr;var pr=tr,mr=er,sr=function(t){return null==t?null:(t=Object(t),cr(t))},vr=F,gr=L,yr=Object.prototype;var br=function(t){var n;return!!pr(t)&&(!(n=sr(t))||!vr(t,"constructor")&&vr(n,"constructor")&&mr(n.constructor)&&"[object Function]"===gr(n.constructor)&&vr(n,"isPrototypeOf")&&mr(n.isPrototypeOf)&&(n===yr||function(t){var n;for(n in t)if(!vr(t,n))return!1;return!0}(t)))},hr=Ze,dr=bn,wr=br,xr=Vn,Er=Zn.isPrimitive,jr=F;var Or=function(t,n){var e,r,i,o,u,a,l,f=!0;if(!xr(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!wr(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(jr(n,"duplicates")&&(f=n.duplicates,!Er(f)))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+f+"`.")}if(r=(e=hr(t)).length,u={},f)for(l=0;l<r;l++)o=t[i=e[l]],jr(u,o)?(a=u[o],dr(a)?u[o].push(i):u[o]=[a,i]):u[o]=i;else for(l=0;l<r;l++)u[t[i=e[l]]]=i;return u},Tr=Or,_r=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var Pr=function(){return _r.slice()},Sr=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var Vr=s;var Ir=function(t,n,e){Vr(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})},Fr=Ir,Ar=Fr,kr=Ze;var Nr=function(t,n){var e,r,i;for(e=kr(n),i=0;i<e.length;i++)r=e[i],Ar(t,r,n[r]);return t},Rr=function(){return Sr.slice()},Br=function(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}},Mr=Nr;y(Rr,"enum",Br),Mr(Rr,Br());var Lr=Rr,Yr=(0,Lr.enum)();var Cr=Fr,Gr=Ze;var Ur=function(t,n){var e,r,i;for(e=Gr(n),i=0;i<e.length;i++)r=e[i],Cr(t,r,n[r]);return t},Xr=Pr,zr=function(){return{bool:Yr.bool,int8:Yr.int8,uint8:Yr.uint8,uint8c:Yr.uint8c,int16:Yr.int16,uint16:Yr.uint16,int32:Yr.int32,uint32:Yr.uint32,int64:Yr.int64,uint64:Yr.uint64,float32:Yr.float32,float64:Yr.float64,complex64:Yr.complex64,complex128:Yr.complex128,binary:Yr.binary,generic:Yr.generic,notype:Yr.notype,userdefined_type:Yr.userdefined_type}},Dr=Ur;y(Xr,"enum",zr),Dr(Xr,zr());var Hr=Xr,Jr=Tr((0,Hr.enum)(),{duplicates:!1});var Wr=function(t){var n=Jr[t];return"string"==typeof n?n:null},qr=(0,Lr.enum)();var Kr=Wr,Qr=function(t){var n=qr[t];return"number"==typeof n?n:null};var Zr=function(t){var n=typeof t;return"string"===n?null===Qr(t)?null:t:"number"===n?Kr(t):null},$r=j,ti=Tt.isPrimitive,ni=Zr;var ei=function(t,n,e){var r,i,o,u,a,l,f,c;if(!$r(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(!ti(n))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+n+"`.");if(!ti(e))throw new TypeError("invalid argument. Third argument must be a nonnegative integer. Value: `"+e+"`.");if(0===(r=t.length))throw new RangeError("invalid argument. First argument must contain at least one element.");if(r%(a=n+e)!=0)throw new RangeError("invalid arguments. The length of the first argument is incompatible with the second and third arguments.");for(i=[],o=[],l=2*a,c=2*n,f=0;f<=l;f++)0===f?f===c?o.push("() => ("):o.push("("):f===l?f===c?o.push(") => ()"):o.push(")"):f===c?o.push(") => ("):f%2==1?o.push(""):o.push(", ");for(f=0;f<r;f++)null===(u=ni(t[f]))&&(u=t[f]),o[2*(c=f%a)+1]=u,c===a-1&&i.push(o.join(""));return i},ri=y,ii=d,oi=ei;var ui=function(t,n,e,r){return ri(e,"nargs",r?t.nargs+t.nin+t.nout:t.nargs),ri(e,"nin",t.nin),ri(e,"nout",t.nout),ii(e,"types",(function(){return oi(n,t.nin,t.nout)})),e},ai=ui,li={nargs:10,nin:2,nout:1},fi=Ze,ci=F,pi=Zr,mi={float64:{float64:"float64",float32:"float64",int32:"float64",int16:"float64",int8:"float64",uint32:"float64",uint16:"float64",uint8:"float64",uint8c:"float64",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},float32:{float64:"float64",float32:"float32",int32:"float64",int16:"float32",int8:"float32",uint32:"float64",uint16:"float32",uint8:"float32",uint8c:"float32",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},int32:{float64:"float64",float32:"float64",int32:"int32",int16:"int32",int8:"int32",uint32:"float64",uint16:"int32",uint8:"int32",uint8c:"int32",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},int16:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"float64",uint16:"int32",uint8:"int16",uint8c:"int16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},int8:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int8",uint32:"float64",uint16:"int32",uint8:"int16",uint8c:"int16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},uint32:{float64:"float64",float32:"float64",int32:"float64",int16:"float64",int8:"float64",uint32:"uint32",uint16:"uint32",uint8:"uint32",uint8c:"uint32",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},uint16:{float64:"float64",float32:"float32",int32:"int32",int16:"int32",int8:"int32",uint32:"uint32",uint16:"uint16",uint8:"uint16",uint8c:"uint16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},uint8:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"uint32",uint16:"uint16",uint8:"uint8",uint8c:"uint8",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},uint8c:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"uint32",uint16:"uint16",uint8:"uint8",uint8c:"uint8c",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},complex128:{float64:"complex128",float32:"complex128",int32:"complex128",int16:"complex128",int8:"complex128",uint32:"complex128",uint16:"complex128",uint8:"complex128",uint8c:"complex128",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},complex64:{float64:"complex128",float32:"complex64",int32:"complex128",int16:"complex64",int8:"complex64",uint32:"complex128",uint16:"complex64",uint8:"complex64",uint8c:"complex64",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},generic:{float64:"generic",float32:"generic",int32:"generic",int16:"generic",int8:"generic",uint32:"generic",uint16:"generic",uint8:"generic",uint8c:"generic",complex64:"generic",complex128:"generic",binary:-1,generic:"generic"},binary:{float64:-1,float32:-1,int32:-1,int16:-1,int8:-1,uint32:-1,uint16:-1,uint8:-1,uint8c:-1,complex64:-1,complex128:-1,binary:"binary",generic:-1}};function si(){var t,n,e,r,i,o,u,a,l;for(e={},n=(t=fi(mi)).length,l=0;l<n;l++){for(i=t[l],u=mi[i],r={},a=0;a<n;a++)r[o=t[a]]=u[o];e[i]=r}return e}var vi,gi=function(t,n){var e;return 0===arguments.length?si():(t=pi(t),ci(mi,t)&&(e=mi[t],n=pi(n),ci(e,n))?e[n]:null)},yi=gi,bi=Ze,hi=F,di=Zr,wi={float64:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int32:{float64:1,float32:0,int32:1,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1},binary:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:1,generic:0}};function xi(){var t,n,e,r,i,o,u,a,l;for(e={},n=(t=bi(wi)).length,l=0;l<n;l++){for(i=t[l],u=wi[i],r={},a=0;a<n;a++)r[o=t[a]]=u[o];e[i]=r}return e}function Ei(){var t,n,e,r,i,o,u,a,l;for(e={},n=(t=bi(wi)).length,l=0;l<n;l++){for(i=t[l],u=wi[i],r=[],a=0;a<n;a++)1===u[o=t[a]]&&r.push(o);e[i]=r}return e}var ji=function(t){return 0===arguments.length?xi():(void 0===vi&&(vi=Ei()),t=di(t),hi(vi,t)?vi[t].slice():null)},Oi=ji,Ti=Tr((0,Hr.enum)(),{duplicates:!1});var _i=function(t){var n=Ti[t];return"string"==typeof n?n:null},Pi=(0,Hr.enum)();var Si=function(t){var n=Pi[t];return"number"==typeof n?n:null},Vi=_i,Ii=Si;var Fi=function(t){var n=typeof t;return"number"===n?Vi(t)?t:null:"string"===n?Ii(t):null},Ai=_i,ki=Si;var Ni=function(t){var n=typeof t;return"string"===n?ki(t)?t:null:"number"===n?Ai(t):null},Ri=yi,Bi=Oi,Mi=Fi,Li=Ni;function Yi(t,n){var e,r,i,o,u,a,l;for(r=t.length,i=n.length,e=[],l=0,u=0;u<r&&!(l>=i);u++)for(o=t[u],a=l;a<i;a++)if(o===n[a]){l=a+1,e.push(o);break}return e}function Ci(t){var n,e,r;for(n=[],r=0;r<t.length;r++){if(null===(e=Li(t[r])))return new TypeError("invalid argument. Must provided recognized data types. Unable to resolve a data type string. Value: `"+t[r]+"`.");n.push(e)}return n}var Gi=function(t,n,e,r){var i,o,u,a,l,f,c,p,m,s,v,g,y,b,h,d,w;if(u=arguments.length>3?r:{},(f=Ci(t))instanceof Error)throw f;if(n===t)c=f;else if((c=Ci(n))instanceof Error)throw c;if(e===t)p=f;else if(e===n)p=c;else if((p=Ci(e))instanceof Error)throw p;for(p.sort(),i={},y=f.length,b=c.length,l=[],h=0;h<y;h++)for(m=f[h],d=0;d<b;d++)if(s=c[d],-1!==(v=Ri(m,s))&&null!==v)for(l.push(m,s,v),void 0===(o=i[v])&&(o=Yi(p,(o=Bi(v)).sort()),i[v]=o),w=0;w<o.length;w++)(g=o[w])!==v&&l.push(m,s,g);if(u.enums){for(a=[],h=0;h<l.length;h++)a.push(Mi(l[h]));l=a}return l},Ui=[[12,13,10,11,15,4,6,1,5,7,2],[12,13,10,11,15,4,6,1,5,7,2],[12,13,10,11,15,4,6,1,5,7,2]],Xi=Gi(Ui[0],Ui[1],Ui[2],{enums:!0}),zi=gt.isPrimitive;var Di=function(t){return zi(t)&&t>0},Hi=gt.isObject;var Ji=function(t){return Hi(t)&&t.valueOf()>0},Wi=Di,qi=Ji;var Ki=y,Qi=function(t){return Wi(t)||qi(t)},Zi=Ji;Ki(Qi,"isPrimitive",Di),Ki(Qi,"isObject",Zi);var $i=Qi,to=x;var no=function(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&to(t.length)&&t.length>=0&&t.length<=4294967295};var eo=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!no(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(er);var ro=Tt.isPrimitive,io=$i,oo=gt.isPrimitive,uo=eo,ao=er,lo=kn,fo=function(t){return Math.abs(t)},co=function(t,n,e,r,i,o,u,a,l){var f,c,p,m;for(f=o,p=0;p<t;p++){for(c=l,m=0;m<n&&e[f+m*i]===u[c];m++)c+=a;if(m===n)return p;f+=r}return-1};var po=function(t,n,e,r,i,o){var u,a,l,f,c,p;if(ao(t))p=t;else if(!uo(t))throw new TypeError("invalid argument. First argument must be either a function or an array of functions. Value: `"+t+"`.");if(!lo(n))throw new TypeError("invalid argument. Second argument must be an array-like object. Value: `"+n+"`.");if(!lo(e)&&null!==e)throw new TypeError("invalid argument. Third argument must be an array-like object or `null`. Value: `"+e+"`.");if(!io(r))throw new TypeError("invalid argument. Fourth argument must be a positive integer. Value: `"+r+"`.");if(!ro(i))throw new TypeError("invalid argument. Fifth argument must be a nonnegative integer. Value: `"+i+"`.");if(!ro(o))throw new TypeError("invalid argument. Sixth argument must be a nonnegative integer. Value: `"+o+"`.");if(0===(l=i+o))throw new Error("invalid arguments. Interface must accept at least one strided input and/or output array. Based on the provided arguments, `nin+nout` equals `0`.");if(p){if(f=n.length/l,!oo(f))throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.")}else if(f=t.length,n.length!==f*l)throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.");if(e&&e.length!==f)throw new Error("invalid argument. The third argument must have the same number of elements as the first argument.");if(3*l+1===r)a=!1;else{if(4*l+1!==r)throw new Error("invalid argument. Fourth argument is incompatible with the number of strided input and output arrays.");a=!0}return c=i*(u=a?4:3)+1,function(){var m,s,v,g,y,b,h,d,w,x,E,j;if((b=arguments.length)!==r){if(b<r)throw new Error("invalid invocation. Insufficient arguments.");throw new Error("invalid invocation. Too many arguments.")}if(!oo(d=arguments[0]))throw new TypeError("invalid argument. First argument must be an integer.");for(y=[d],g=[],E=1;E<r;E+=u)g.push(arguments[E]);for(m=[],E=3;E<r;E+=u){if(!oo(w=arguments[E]))throw E<c?new TypeError("invalid argument. Input array stride argument must be an integer."):new TypeError("invalid argument. Output array stride argument must be an integer.");m.push(w)}if(a)for(s=[],E=4;E<r;E+=u){if(!ro(w=arguments[E]))throw E<c?new TypeError("invalid argument. Input array offset argument must be a nonnegative integer."):new TypeError("invalid argument. Output array offset argument must be a nonnegative integer.");s.push(w)}for(v=[],E=2;E<r;E+=u){if(!lo(w=arguments[E]))throw E<c?new TypeError("invalid argument. Input array argument must be an array-like object."):new TypeError("invalid argument. Output array argument must be an array-like object.");if(j=(E-2)/u,a){if(h=s[j]+(d-1)*m[j],d>0&&(h<0||h>=w.length))throw E<c?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.")}else if((d-1)*fo(m[j])>=w.length)throw E<c?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.");v.push(w)}if((h=co(f,l,n,l,1,0,g,1,0))<0)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");x=p||t[h];e?a?x(v,y,m,s,e[h]):x(v,y,m,e[h]):a?x(v,y,m,s):x(v,y,m);if(1===o)return v[l-1];if(0===o)return;return v.slice(i)}},mo=po;var so=function(t,n,e,r){var i,o,u,a,l,f,c,p,m,s,v;if(!((s=n[0])<=0))for(a=(i=e[0])<0?(1-s)*i:0,l=(o=e[1])<0?(1-s)*o:0,f=(u=e[2])<0?(1-s)*u:0,c=t[0],p=t[1],m=t[2],v=0;v<s;v++)m[f]=r(c[a],p[l]),a+=i,l+=o,f+=u};var vo=function(t,n,e,r,i){var o,u,a,l,f,c,p,m,s,v,g,y,b,h;if(!((b=n[0])<=0))for(p=(l=e[0])<0?(1-b)*l:0,m=(f=e[1])<0?(1-b)*f:0,s=(c=e[2])<0?(1-b)*c:0,v=t[0],g=t[1],y=t[2],o=r[0],u=r[1],a=r[2],h=0;h<b;h++)a(y,s,i(o(v,p),u(g,m))),p+=l,m+=f,s+=c};var go=function(t,n){return t[n]};var yo=function(t,n){return t.get(n)};var bo=function(t,n,e){t[n]=e};var ho=function(t,n,e){t.set(e,n)},wo=so,xo=vo,Eo=go,jo=yo,Oo=bo,To=ho;var _o=function(t,n,e,r){var i,o,u,a,l,f;return(a=t[0]).get&&a.set&&(i=jo),(l=t[1]).get&&l.set&&(o=jo),(f=t[2]).get&&f.set&&(u=To),i||o||u?xo(t,n,e,[i=i||Eo,o=o||Eo,u=u||Oo],r):wo(t,n,e,r)};var Po=function(t,n,e,r,i){var o,u,a,l,f,c,p,m,s,v,g;if(!((v=n[0])<=0))for(l=r[0],f=r[1],c=r[2],o=e[0],u=e[1],a=e[2],p=t[0],m=t[1],s=t[2],g=0;g<v;g++)s[c]=i(p[l],m[f]),l+=o,f+=u,c+=a};var So=function(t,n,e,r,i,o){var u,a,l,f,c,p,m,s,v,g,y,b,h,d;if(!((h=n[0])<=0))for(m=r[0],s=r[1],v=r[2],f=e[0],c=e[1],p=e[2],g=t[0],y=t[1],b=t[2],u=i[0],a=i[1],l=i[2],d=0;d<h;d++)l(b,v,o(u(g,m),a(y,s))),m+=f,s+=c,v+=p},Vo=Po,Io=So,Fo=go,Ao=yo,ko=bo,No=ho;var Ro=function(t,n,e,r,i){var o,u,a,l,f,c;return(l=t[0]).get&&l.set&&(o=Ao),(f=t[1]).get&&f.set&&(u=Ao),(c=t[2]).get&&c.set&&(a=No),o||u||a?Io(t,n,e,r,[o=o||Fo,u=u||Fo,a=a||ko],i):Vo(t,n,e,r,i)},Bo=_o;y(Bo,"ndarray",Ro);var Mo=Bo;var Lo=function(t,n){return t-n};var Yo=function(t){return t.re};var Co=function(t){return t.im},Go=Yo,Uo=Co;var Xo=function(t,n){var e=Go(t)-Go(n),r=Uo(t)-Uo(n);return new t.constructor(e,r)},zo=Xo,Do=Yo,Ho=Co;var Jo=function(t,n){var e=Do(t)-Do(n),r=Ho(t)-Ho(n);return new t.constructor(e,r)},Wo=Jo,qo="function"==typeof Math.fround?Math.fround:null,Ko=L,Qo="function"==typeof Float32Array;var Zo="function"==typeof Float32Array?Float32Array:null,$o=function(t){return Qo&&t instanceof Float32Array||"[object Float32Array]"===Ko(t)},tu=Z,nu=Zo;var eu=function(){var t,n;if("function"!=typeof nu)return!1;try{n=new nu([1,3.14,-3.14,5e40]),t=$o(n)&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===tu}catch(n){t=!1}return t};var ru="function"==typeof Float32Array?Float32Array:void 0,iu=function(){throw new Error("not implemented")},ou=new(eu()?ru:iu)(1);var uu=qo;"function"!=typeof uu&&(uu=function(t){return ou[0]=t,ou[0]});var au=Q.isPrimitive,lu=s,fu=y,cu=uu,pu=function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"},mu=function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t};function su(t,n){if(!(this instanceof su))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!au(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!au(n))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+n+"`.");return lu(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:cu(t)}),lu(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:cu(n)}),this}fu(su,"BYTES_PER_ELEMENT",4),fu(su.prototype,"BYTES_PER_ELEMENT",4),fu(su.prototype,"byteLength",8),fu(su.prototype,"toString",pu),fu(su.prototype,"toJSON",mu);var vu=su;var gu=Q.isPrimitive,yu=s,bu=y,hu=function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"},du=function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t};function wu(t,n){if(!(this instanceof wu))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!gu(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!gu(n))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+n+"`.");return yu(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),yu(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:n}),this}bu(wu,"BYTES_PER_ELEMENT",8),bu(wu.prototype,"BYTES_PER_ELEMENT",8),bu(wu.prototype,"byteLength",16),bu(wu.prototype,"toString",hu),bu(wu.prototype,"toJSON",du);var xu=er,Eu=Tt.isPrimitive,ju="number";var Ou=function(t,n,e){var r;if(!xu(t))throw new TypeError("invalid argument. First argument must be a function. Value: `"+t+"`.");if(!Eu(n))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+n+"`.");if(!xu(e))throw new TypeError("invalid argument. Third argument must be a constructor function. Value: `"+e+"`.");return r=[function(){return t()},function(n){typeof n===ju&&(n=new e(n,0));return t(n)},function(n,r){typeof n===ju&&(n=new e(n,0));typeof r===ju&&(r=new e(r,0));return t(n,r)},function(n,r,i){typeof n===ju&&(n=new e(n,0));typeof r===ju&&(r=new e(r,0));typeof i===ju&&(i=new e(i,0));return t(n,r,i)},function(n,r,i,o){typeof n===ju&&(n=new e(n,0));typeof r===ju&&(r=new e(r,0));typeof i===ju&&(i=new e(i,0));typeof o===ju&&(o=new e(o,0));return t(n,r,i,o)},function(n,r,i,o,u){typeof n===ju&&(n=new e(n,0));typeof r===ju&&(r=new e(r,0));typeof i===ju&&(i=new e(i,0));typeof o===ju&&(o=new e(o,0));typeof u===ju&&(u=new e(u,0));return t(n,r,i,o,u)}],n<=5?r[n]:function(){var n,r,i;for(n=[],i=0;i<arguments.length;i++)typeof(r=arguments[i])===ju&&(r=new e(r,0)),n.push(r);return t.apply(null,n)}},Tu=Ni,_u=Ou,Pu="complex64",Su="complex128",Vu={complex64:vu,complex128:wu};function Iu(t,n,e,r){if(r===Pu||r===Su)return n===e&&e===r?t[r]:_u(t[r],2,Vu[r]);if("generic"===r){if(n===Su||e===Su)return n===e?t[n]:_u(t[Su],2,Vu[Su]);if(n===Pu||e===Pu)return n===e?t[n]:_u(t[Pu],2,Vu[Pu])}return t.default}var Fu=function(t,n){var e,r,i,o,u;for(e=[],u=0;u<n.length;u+=3)r=Tu(n[u]),i=Tu(n[u+1]),o=Tu(n[u+2]),e.push(Iu(t,r,i,o));return e},Au=Fu({default:Lo,complex64:Wo,complex128:zo},Xi),ku=mo(Mo,Xi,Au,li.nargs,li.nin,li.nout);function Nu(t,n,e,r,i,o,u,a,l,f){return ku(t,Fi(n),e,r,Fi(i),o,u,Fi(a),l,f)}var Ru=mo(Mo.ndarray,Xi,Au,li.nargs+li.nin+li.nout,li.nin,li.nout);return y(Nu,"ndarray",(function(t,n,e,r,i,o,u,a,l,f,c,p,m){return Ru(t,Fi(n),e,r,i,Fi(o),u,a,l,Fi(f),c,p,m)})),ai(li,Xi,Nu,!1),ai(li,Xi,Nu.ndarray,!0),Nu}));
//# sourceMappingURL=index.js.map
