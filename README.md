<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

<!-- lint disable maximum-heading-length -->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# sub

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Element-wise subtraction of two strided arrays.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-strided-ops-sub
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var sub = require( '@stdlib/math-strided-ops-sub' );
```

#### sub( N, dtypeX, x, strideX, dtypeY, y, strideY, dtypeZ, z, strideZ )

Subtracts each element in a strided array `x` to a corresponding element in a strided array `y` and assigns the results to elements in a strided array `z`.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var z = new Float64Array( x.length );

sub( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 );
// z => <Float64Array>[ -3.0, -1.0, 0.0, -9.0, -1.0 ]
```

The function accepts the following arguments:

-   **N**: number of indexed elements.
-   **dtypeX**: [data type][@stdlib/strided/dtypes] for `x`.
-   **x**: input array-like object.
-   **strideX**: index increment for `x`.
-   **dtypeY**: [data type][@stdlib/strided/dtypes] for `y`.
-   **y**: input array-like object.
-   **strideY**: index increment for `y`.
-   **dtypeZ**: [data type][@stdlib/strided/dtypes] for `z`.
-   **z**: output array-like object.
-   **strideZ**: index increment for `z`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to index every other value in `x` and the first `N` elements of `y` in reverse order,

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var z = new Float64Array( x.length );

sub( 3, 'float64', x, 2, 'float64', y, -1, 'float64', z, 1 );
// z => <Float64Array>[ -5.0, 1.0, 3.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

// Initial arrays...
var x0 = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0 ] );
var y0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var z0 = new Float64Array( x0.length );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element
var z1 = new Float64Array( z0.buffer, z0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

sub( 3, 'float64', x1, -2, 'float64', y1, 1, 'float64', z1, 1 );
// z0 => <Float64Array>[ 0.0, 0.0, -4.0, 0.0, -5.0, 0.0 ]
```

#### sub.ndarray( N, dtypeX, x, strideX, offsetX, dtypeY, y, strideY, offsetY, dtypeZ, z, strideZ, offsetZ )

Subtracts each element in a strided array `x` to a corresponding element in a strided array `y` and assigns the results to elements in a strided array `z` using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var z = new Float64Array( x.length );

sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 );
// z => <Float64Array>[ -3.0, -1.0, 0.0, -9.0, -1.0 ]
```

The function accepts the following additional arguments:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.
-   **offsetZ**: starting index for `z`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the offset parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `y` in reverse order,

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var z = new Float64Array( x.length );

sub.ndarray( 3, 'float64', x, 2, 1, 'float64', y, -1, y.length-1, 'float64', z, 1, 0 );
// z => <Float64Array>[ -5.0, 0.0, -4.0, 0.0, 0.0, 0.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
var filledarray = require( '@stdlib/array-filled' );
var filledarrayBy = require( '@stdlib/array-filled-by' );
var sub = require( '@stdlib/math-strided-ops-sub' );

var dt;
var x;
var y;
var z;
var i;

dt = [ 'float64', 'float32', 'int32', 'uint8', 'generic' ];

for ( i = 0; i < dt.length; i++ ) {
    x = filledarrayBy( 10, dt[ i ], uniform( 0.0, 10.0 ) );
    console.log( x );

    y = filledarrayBy( x.length, dt[ i ], uniform( 0.0, 10.0 ) );
    console.log( y );

    z = filledarray( 0.0, x.length, 'generic' );
    console.log( z );

    sub.ndarray( x.length, dt[ i ], x, 1, 0, dt[ i ], y, 1, 0, 'generic', z, -1, z.length-1 );
    console.log( z );
    console.log( '' );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-strided/ops/add`][@stdlib/math/strided/ops/add]</span><span class="delimiter">: </span><span class="description">element-wise addition of two strided arrays.</span>
-   <span class="package-name">[`@stdlib/math-strided/ops/mul`][@stdlib/math/strided/ops/mul]</span><span class="delimiter">: </span><span class="description">element-wise multiplication of two strided arrays.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-strided-ops-sub.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-strided-ops-sub

[test-image]: https://github.com/stdlib-js/math-strided-ops-sub/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-strided-ops-sub/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-strided-ops-sub/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-strided-ops-sub?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-strided-ops-sub.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-strided-ops-sub/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-strided-ops-sub/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-strided-ops-sub/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-strided-ops-sub/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-strided-ops-sub/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-strided-ops-sub/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-strided-ops-sub/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-strided-ops-sub/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-strided-ops-sub/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/strided/dtypes]: https://github.com/stdlib-js/strided-dtypes

<!-- <related-links> -->

[@stdlib/math/strided/ops/add]: https://github.com/stdlib-js/math-strided-ops-add

[@stdlib/math/strided/ops/mul]: https://github.com/stdlib-js/math-strided-ops-mul

<!-- </related-links> -->

</section>

<!-- /.links -->
