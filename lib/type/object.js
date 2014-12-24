module.exports = (function ( ƒ ){
	var $ = ƒ.Object = ƒ.Object = {};

	// is and isnt
	$.is = ƒ.is.Object;
	$.isnt = ƒ.isnt.Object;

	$.forEach = $.each = function ( object, fn, context ) {

		if ( ƒ.isnt.Object( object ) ) {
			throw new TypeError("object must be an object");
		}
		if ( ƒ.isnt.Function( fn ) ) {
			throw new TypeError("fn must be a function");
		}

		var i;

		for( i in object ) {
			if ( object.hasOwnProperty( i ) ) {
				fn.call( context || object, object[ i ], i, object );
			}
		}

		return object;
	};

	$.map = function ( object, fn, context ) {

		if ( ƒ.isnt.Function( fn ) ) {
			throw new TypeError("fn must be a function");
		}

		var res = {}, i;

		ƒ.each( object, function ( v, k ) {
			res[ k ] = fn.call( context || object, v, k, object );
		});

		return res;
	};

	$.filter = function ( object, fn, context ) {

		if ( ƒ.isnt.Object( object ) ) {
			throw new TypeError("object must be an object");
		}
		if ( ƒ.isnt.Function( fn ) ) {
			throw new TypeError("fn must be a function");
		}

		var res = {}, i;

		ƒ.each( object, function ( v, k ) {
			if( fn.call( context || object, v, k, object ) ) {
				res[ k ] = object[ k ];
			}
		});

		return res;
	};

});
