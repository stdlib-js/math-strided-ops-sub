// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-meta-data-props@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-binary-dtype-signatures@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-dispatch@v0.2.1-esm/index.mjs";import d,{ndarray as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-binary@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-dtype-resolve-enum@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-sub@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-csub@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-csubf@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-binary-signature-callbacks@v0.2.1-esm/index.mjs";var j={nargs:10,nin:2,nout:1},l=[[12,13,10,11,15,4,6,1,5,7,2],[12,13,10,11,15,4,6,1,5,7,2],[12,13,10,11,15,4,6,1,5,7,2]],b=e(l[0],l[1],l[2],{enums:!0}),h=p({default:m,complex64:o,complex128:a},b),v=n(d,b,h,j.nargs,j.nin,j.nout);function c(s,t,e,n,d,r,m,a,o,p){return v(s,i(t),e,n,i(d),r,m,i(a),o,p)}var u=n(r,b,h,j.nargs+j.nin+j.nout,j.nin,j.nout);function f(s,t,e,n,d,r,m,a,o,p,j,l,b){return u(s,i(t),e,n,d,i(r),m,a,o,i(p),j,l,b)}s(c,"ndarray",f),t(j,b,c,!1),t(j,b,c.ndarray,!0);export{c as default,f as ndarray};
//# sourceMappingURL=index.mjs.map
