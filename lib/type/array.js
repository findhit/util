module.exports = (function ( Util ){
	var $ = Util.Array = Util.array = {};

	// is and isnt
	$.is = Util.is.Array;
	$.isnt = Util.isnt.Array;

	$.forEach = $.each = function ( array, fn, context ) {

		if ( Util.isnt.Array( array ) ) {
			throw new TypeError("array must be an array");
		}
		if ( Util.isnt.Function( fn ) ) {
			throw new TypeError("fn must be a function");
		}

		var i;

		for( i=0; i < array.length; i++ ) {
			fn.call( context || array, array[ i ], i, array );
		}

		return array;
	};

	$.map = function ( array, fn, context ) {

		if ( Util.isnt.Function( fn ) ) {
			throw new TypeError("fn must be a function");
		}

		var res = [], i;

		Util.each( array, function ( v, k ) {
			res.push(
				fn.call( context || array, v, k, array ) || undefined
			);
		});

		return res;
	};

	$.filter = function ( o, fn, context ) {

		if ( Util.isnt.Array( o ) ) {
			throw new TypeError("o must be an object");
		}
		if ( Util.isnt.Function( fn ) ) {
			throw new TypeError("fn must be a function");
		}

		var res = [], i;

		for( i in o ) {
			if ( o.hasOwnProperty( i ) ) {
				if( fn.call( context || o, o[ i ], i, o ) ) {
					res.push( o[ i ] );
				}
			}
		}

		return res;
	};

	$.randomFilter = function ( array, limit ) {

		if ( Util.isnt.Array( array ) ) {
			throw new TypeError("array must be an array");
		}

		if( ! parseInt( limit ) > 0 || array.length <= limit ) {
			return array || false;
		}

		var newArray = [], i;

		// Copy all the options to target
		for( i in array ) {
			newArray[ i ] = array[ i ];
		}

		while ( newArray.length > limit ) {

			// Itenerator to decrement
			i = Math.floor( Math.random() * newArray.length );

			newArray.splice( i, 1 );

		}

		return newArray;
	};

});