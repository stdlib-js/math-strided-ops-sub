/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var tryRequire = require( '@stdlib/utils-try-require' );
var uniform = require( '@stdlib/random-base-uniform' ).factory;
var sub = require( '@stdlib/number-float64-base-sub' );
var Float64Array = require( '@stdlib/array-float64' );
var Uint8Array = require( '@stdlib/array-uint8' );
var resolveStr = require( '@stdlib/strided-base-dtype-resolve-str' );
var toFloat32 = require( '@stdlib/number-float64-base-to-float32' );
var types = require( './../lib/types.js' );
var data = require( './../lib/data.js' );
var filledBy = require( './fixtures/filled_by.js' );
var filled = require( './fixtures/filled.js' );
var get = require( './fixtures/getter.js' );


// VARIABLES //

var strided = tryRequire( resolve( __dirname, './../lib/sub.native.js' ) );
var opts = {
	'skip': ( strided instanceof Error )
};
var rand = uniform( 0.0, 10.0 );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof strided, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 10', opts, function test( t ) {
	t.strictEqual( strided.length, 10, 'arity of 10' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an integer', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			var z = new Float64Array( x.length );
			strided( value, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a supported dtype', opts, function test( t ) {
	var values;
	var i;

	values = [
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			var z = new Float64Array( x.length );
			strided( x.length, value, x, 1, 'float64', y, 1, 'float64', z, 1 );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not an array-like object', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			var z = new Float64Array( x.length );
			strided( x.length, 'float64', value, 1, 'float64', y, 1, 'float64', z, 1 );
		};
	}
});

tape( 'the function throws an error if provided a fourth argument which is not an integer', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			var z = new Float64Array( x.length );
			strided( x.length, 'float64', x, value, 'float64', y, 1, 'float64', z, 1 );
		};
	}
});

tape( 'the function throws an error if provided a fifth argument which is not a supported dtype', opts, function test( t ) {
	var values;
	var i;

	values = [
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			var z = new Float64Array( x.length );
			strided( x.length, 'float64', x, 1, value, y, 1, 'float64', z, 1 );
		};
	}
});

tape( 'the function throws an error if provided a sixth argument which is not an array-like object', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			var z = new Float64Array( x.length );
			strided( y.length, 'float64', x, 1, 'float64', value, 1, 'float64', z, 1 );
		};
	}
});

tape( 'the function throws an error if provided a seventh argument which is not an integer', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			var z = new Float64Array( x.length );
			strided( x.length, 'float64', x, 1, 'float64', y, value, 'float64', z, 1 );
		};
	}
});

tape( 'the function throws an error if provided an eighth argument which is not a supported dtype', opts, function test( t ) {
	var values;
	var i;

	values = [
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			var z = new Float64Array( x.length );
			strided( x.length, 'float64', x, 1, 'float64', y, 1, value, z, 1 );
		};
	}
});

tape( 'the function throws an error if provided a ninth argument which is not an array-like object', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			var z = new Float64Array( x.length );
			strided( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', value, 1 );
		};
	}
});

tape( 'the function throws an error if provided a tenth argument which is not an integer', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			var z = new Float64Array( x.length );
			strided( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, value );
		};
	}
});

tape( 'the function throws an error if provided a third argument which has insufficient elements', opts, function test( t ) {
	var values;
	var i;

	values = [
		new Float64Array( [] ),
		new Float64Array( [ rand() ] ),
		new Float64Array( [ rand(), rand() ] ),
		new Float64Array( [ rand(), rand(), rand() ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var y = new Float64Array( 10 );
			var z = new Float64Array( 10 );
			strided( y.length, 'float64', value, 1, 'float64', y, 1, 'float64', z, 1 );
		};
	}
});

tape( 'the function throws an error if provided a sixth argument which has insufficient elements', opts, function test( t ) {
	var values;
	var i;

	values = [
		new Float64Array( [] ),
		new Float64Array( [ rand() ] ),
		new Float64Array( [ rand(), rand() ] ),
		new Float64Array( [ rand(), rand(), rand() ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var z = new Float64Array( 10 );
			strided( x.length, 'float64', x, 1, 'float64', value, 1, 'float64', z, 1 );
		};
	}
});

tape( 'the function throws an error if provided a ninth argument which has insufficient elements', opts, function test( t ) {
	var values;
	var i;

	values = [
		new Float64Array( [] ),
		new Float64Array( [ rand() ] ),
		new Float64Array( [ rand(), rand() ] ),
		new Float64Array( [ rand(), rand(), rand() ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( 10 );
			strided( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', value, 1 );
		};
	}
});

tape( 'the function throws an error if provided insufficient arguments', opts, function test( t ) {
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		strided();
	}
});

tape( 'the function throws an error if provided too many arguments', opts, function test( t ) {
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		var x = new Float64Array( 10 );
		var y = new Float64Array( x.length );
		var z = new Float64Array( x.length );
		strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 );
	}
});

tape( 'the function throws an error if provided unsupported array data types', opts, function test( t ) {
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		var x = new Float64Array( 10 );
		var y = new Float64Array( x.length );
		var z = new Uint8Array( x.length );
		strided( x.length, 'float64', x, 1, 'float64', y, 1, 'uint8', z, 1, 0 );
	}
});

tape( 'the function subtracts strided array elements', opts, function test( t ) {
	var expected;
	var len;
	var re1;
	var re2;
	var t1;
	var t2;
	var t3;
	var x;
	var y;
	var z;
	var v;
	var i;
	var j;

	re1 = /^complex/;
	re2 = /^uint/;

	len = 10;
	for ( i = 0; i < types.length; i += 3 ) {
		t1 = resolveStr( types[ i ] );
		t2 = resolveStr( types[ i+1 ] );
		t3 = resolveStr( types[ i+2 ] );

		x = filledBy( len, t1, rand );
		y = filledBy( len, t2, rand );
		z = filled( len, t3, 0.0 );

		strided( len, t1, x, 1, t2, y, 1, t3, z, 1 );
		for ( j = 0; j < len; j++ ) {
			if ( t3 === 'float32' ) {
				expected = toFloat32( data[ i/3 ]( x[ j ], y[ j ] ) );
				t.strictEqual( z[ j ], expected, 'returns expected value. x: '+x[j]+'. y: '+y[j]+'. expected: '+expected+'. actual: '+z[j]+'. dtypes: '+t1+','+t2+','+t3+'.' );
			} else if ( re1.test( t1 ) || re1.test( t2 ) || re1.test( t3 ) ) {
				expected = data[ i/3 ]( get( x, j ), get( y, j ) );
				expected = expected.toString();
				v = get( z, j ).toString();
				t.strictEqual( v, expected, 'returns expected value. x: '+get( x, j ).toString()+'. y: '+get( y, j ).toString()+'. expected: '+expected+'. actual: '+v+'. dtypes: '+t1+','+t2+','+t3+'.' );
			} else if ( re2.test( t3 ) ) {
				expected = data[ i/3 ]( x[ j ], y[ j ] );
				expected = filled( 1, t3, expected )[ 0 ];
				t.strictEqual( z[ j ], expected, 'returns expected value. x: '+x[j]+'. y: '+y[j]+'. expected: '+expected+'. actual: '+z[j]+'. dtypes: '+t1+','+t2+','+t3+'.' );
			} else {
				expected = data[ i/3 ]( x[ j ], y[ j ] );
				t.strictEqual( z[ j ], expected, 'returns expected value. x: '+x[j]+'. y: '+y[j]+'. expected: '+expected+'. actual: '+z[j]+'. dtypes: '+t1+','+t2+','+t3+'.' );
			}
		}
	}
	t.end();
});

tape( 'the function supports an `x` stride', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = new Float64Array([
		rand(), // 0
		rand(),
		rand(), // 1
		rand(),
		rand()  // 2
	]);
	y = new Float64Array([
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	]);
	z = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	strided( N, 'float64', x, 2, 'float64', y, 1, 'float64', z, 1 );

	expected = new Float64Array([
		sub( x[ 0 ], y[ 0 ] ),
		sub( x[ 2 ], y[ 1 ] ),
		sub( x[ 4 ], y[ 2 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` stride', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = new Float64Array([
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	]);
	y = new Float64Array([
		rand(), // 0
		rand(),
		rand(), // 1
		rand(),
		rand()  // 2
	]);
	z = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	strided( N, 'float64', x, 1, 'float64', y, 2, 'float64', z, 1 );

	expected = new Float64Array([
		sub( x[ 0 ], y[ 0 ] ),
		sub( x[ 1 ], y[ 2 ] ),
		sub( x[ 2 ], y[ 4 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `z` stride', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = new Float64Array([
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	]);
	y = new Float64Array([
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	]);
	z = new Float64Array([
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	]);
	N = 3;

	strided( N, 'float64', x, 1, 'float64', y, 1, 'float64', z, 2 );

	expected = new Float64Array([
		sub( x[ 0 ], y[ 0 ] ),
		0.0,
		sub( x[ 1 ], y[ 1 ] ),
		0.0,
		sub( x[ 2 ], y[ 2 ] )
	]);

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function returns a reference to the destination array', opts, function test( t ) {
	var out;
	var x;
	var y;
	var z;

	x = new Float64Array( 5 );
	y = new Float64Array( x.length );
	z = new Float64Array( x.length );

	out = strided( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 );

	t.strictEqual( out, z, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the destination array unchanged', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = new Float64Array( [ rand(), rand(), rand(), rand(), rand() ] );
	y = new Float64Array( [ rand(), rand(), rand(), rand(), rand() ] );
	z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	expected = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	strided( -1, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 );
	t.deepEqual( z, expected, 'returns expected value' );

	strided( 0, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 );
	t.deepEqual( z, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = new Float64Array([
		rand(), // 2
		rand(),
		rand(), // 1
		rand(),
		rand()  // 0
	]);
	y = new Float64Array([
		rand(), // 2
		rand(), // 1
		rand(), // 0
		rand(),
		rand()
	]);
	z = new Float64Array([
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0,
		0.0
	]);
	N = 3;

	strided( N, 'float64', x, -2, 'float64', y, -1, 'float64', z, -1 );

	expected = new Float64Array([
		sub( x[ 0 ], y[ 0 ] ),
		sub( x[ 2 ], y[ 1 ] ),
		sub( x[ 4 ], y[ 2 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports complex access patterns', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = new Float64Array([
		rand(), // 0
		rand(),
		rand(), // 1
		rand(),
		rand(), // 2
		rand()
	]);
	y = new Float64Array([
		rand(), // 2
		rand(),
		rand(), // 1
		rand(),
		rand(), // 0
		rand()
	]);
	z = new Float64Array([
		0.0,  // 2
		0.0,  // 1
		0.0,  // 0
		0.0,
		0.0,
		0.0
	]);
	N = 3;

	strided( N, 'float64', x, 2, 'float64', y, -2, 'float64', z, -1 );

	expected = new Float64Array([
		sub( x[ 4 ], y[ 0 ] ),
		sub( x[ 2 ], y[ 2 ] ),
		sub( x[ 0 ], y[ 4 ] ),
		0.0,
		0.0,
		0.0
	]);

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports view offsets', opts, function test( t ) {
	var expected;
	var x0;
	var y0;
	var z0;
	var x1;
	var y1;
	var z1;
	var N;

	// Initial arrays...
	x0 = new Float64Array([
		rand(),
		rand(), // 2
		rand(),
		rand(), // 1
		rand(),
		rand()  // 0
	]);
	y0 = new Float64Array([
		rand(),
		rand(),
		rand(),
		rand(), // 2
		rand(), // 1
		rand()  // 0
	]);
	z0 = new Float64Array([
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0
	]);

	// Create offset views...
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element
	y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // begin at the 4th element
	z1 = new Float64Array( z0.buffer, z0.BYTES_PER_ELEMENT*2 ); // begin at the 3rd element

	N = 3;

	strided( N, 'float64', x1, -2, 'float64', y1, -1, 'float64', z1, 1 );
	expected = new Float64Array([
		0.0,
		0.0,
		sub( x0[ 5 ], y0[ 5 ] ),
		sub( x0[ 3 ], y0[ 4 ] ),
		sub( x0[ 1 ], y0[ 3 ] ),
		0.0
	]);

	t.deepEqual( z0, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports array-like objects', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = {
		'length': 5,
		'0': rand(), // 0
		'1': rand(),
		'2': rand(), // 1
		'3': rand(),
		'4': rand()  // 2
	};
	y = {
		'length': 5,
		'0': rand(), // 0
		'1': rand(), // 1
		'2': rand(), // 2
		'3': rand(),
		'4': rand()
	};
	z = {
		'length': 5,
		'0': 0.0, // 0
		'1': 0.0, // 1
		'2': 0.0, // 2
		'3': 0.0,
		'4': 0.0
	};
	N = 3;

	strided( N, 'generic', x, 2, 'generic', y, 1, 'generic', z, 1 );

	expected = {
		'length': 5,
		'0': sub( x[ 0 ], y[ 0 ] ),
		'1': sub( x[ 2 ], y[ 1 ] ),
		'2': sub( x[ 4 ], y[ 2 ] ),
		'3': 0.0,
		'4': 0.0
	};

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});
