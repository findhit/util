module.exports = (function ( Util ){
	var ar = Util.Array = Util.array = {};

	// is and isnt
	ar.is = Util.is.Array;
	ar.isnt = Util.isnt.Array;

	ar.forEach = ar.each = function ( o, fn, context ) {

		if ( Util.isnt.Array( o ) ) {
			throw new TypeError("o must be an object");
		}
		if ( Util.isnt.Function( fn ) ) {
			throw new TypeError("fn must be a function");
		}

		var i;

		for( i=0; i < o.length; i++ ) {
			fn.call( context || o, o[ i ], i, o );
		}

		return o;
	};

	ar.map = function ( o, fn, context ) {

		if ( Util.isnt.Function( fn ) ) {
			throw new TypeError("fn must be a function");
		}

		var res = [], i;

		Util.each( o, function ( v, k ) {
			res.push(
				fn.call( context || o, v, k, o ) || undefined
			);
		});

		return res;
	};

});