module.exports = (function ( Util ){
	var $ = Util.Object = Util.object = {};

	// is and isnt
	$.is = Util.is.Object;
	$.isnt = Util.isnt.Object;

	$.forEach = $.each = function ( o, fn, context ) {

		if ( Util.isnt.Object( o ) ) {
			throw new TypeError("o must be an object");
		}
		if ( Util.isnt.Function( fn ) ) {
			throw new TypeError("fn must be a function");
		}

		var i;

		for( i in o ) {
			if ( o.hasOwnProperty( i ) ) {
				fn.call( context || o, o[ i ], i, o );
			}
		}

		return o;
	};

	$.map = function ( o, fn, context ) {

		if ( Util.isnt.Function( fn ) ) {
			throw new TypeError("fn must be a function");
		}

		var res = {}, i;

		Util.each( o, function ( v, k ) {
			res[ k ] = fn.call( context || o, o[ i ], i, o );
		});

		return res;
	};

	$.filter = function ( o, fn, context ) {

		if ( Util.isnt.object( o ) && Util.isnt.array( o ) ) {
			throw new TypeError("o must be an object");
		}
		if ( Util.isnt.function( fn ) ) {
			throw new TypeError("fn must be a function");
		}

		var res = {}, i;

		for( i in o ) {
			if ( o.hasOwnProperty( i ) ) {
				if( fn.call( context || o, o[ i ], i, o ) ) {
					res[ i ] = o[ i ];
				}
			}
		}

		return res;
	};

});