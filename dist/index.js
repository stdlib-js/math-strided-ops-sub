"use strict";var e=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var t=e(function(pr,H){H.exports={nargs:10,nin:2,nout:1}});var j=e(function(yr,I){I.exports=[[12,13,10,11,15,4,6,1,5,7,2],[12,13,10,11,15,4,6,1,5,7,2],[12,13,10,11,15,4,6,1,5,7,2]]});var i=e(function(dr,h){
var J=require('@stdlib/strided-base-binary-dtype-signatures/dist'),l=j(),K=J(l[0],l[1],l[2],{enums:!0});h.exports=K
});var b=e(function(lr,R){
var L=require('@stdlib/number-float64-base-sub/dist'),M=require('@stdlib/math-base-ops-csub/dist'),N=require('@stdlib/math-base-ops-csubf/dist'),Q=require('@stdlib/strided-base-binary-signature-callbacks/dist'),S=i(),T={default:L,complex64:N,complex128:M},U=Q(T,S);R.exports=U
});var k=e(function(br,_){
var V=require('@stdlib/strided-dispatch/dist'),W=require('@stdlib/strided-base-binary/dist'),f=require('@stdlib/strided-base-dtype-resolve-enum/dist'),X=i(),m=t(),Y=b(),Z=V(W,X,Y,m.nargs,m.nin,m.nout);function $(a,r,n,v,q,o,c,p,y,d){return Z(a,f(r),n,v,f(q),o,c,f(p),y,d)}_.exports=$
});var O=e(function(fr,E){
var rr=require('@stdlib/strided-dispatch/dist'),er=require('@stdlib/strided-base-binary/dist').ndarray,x=require('@stdlib/strided-base-dtype-resolve-enum/dist'),ar=i(),u=t(),ir=b(),ur=rr(er,ar,ir,u.nargs+u.nin+u.nout,u.nin,u.nout);function tr(a,r,n,v,q,o,c,p,y,d,D,F,G){return ur(a,x(r),n,v,q,x(o),c,p,y,x(d),D,F,G)}E.exports=tr
});var B=e(function(mr,A){
var sr=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=require('@stdlib/strided-base-meta-data-props/dist'),w=t(),z=i(),s=k(),nr=O();sr(s,"ndarray",nr);P(w,z,s,!1);P(w,z,s.ndarray,!0);A.exports=s
});var vr=require("path").join,qr=require('@stdlib/utils-try-require/dist'),or=B(),g,C=qr(vr(__dirname,"./native.js"));C instanceof Error?g=or:g=C;module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
