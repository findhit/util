module.exports = (function ( Util ){
	var $ = Util.Object = Util.Object = {};

	// is and isnt
	$.is = Util.is.Object;
	$.isnt = Util.isnt.Object;

	$.forEach = $.each = function ( object, fn, context ) {

		if ( Util.isnt.Object( object ) ) {
			throw new TypeError("object must be an object");
		}
		if ( Util.isnt.Function( fn ) ) {
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

		if ( Util.isnt.Function( fn ) ) {
			throw new TypeError("fn must be a function");
		}

		var res = {}, i;

		Util.each( object, function ( v, k ) {
			res[ k ] = fn.call( context || object, v, k, object );
		});

		return res;
	};

	$.filter = function ( object, fn, context ) {

		if ( Util.isnt.Object( object ) ) {
			throw new TypeError("object must be an object");
		}
		if ( Util.isnt.Function( fn ) ) {
			throw new TypeError("fn must be a function");
		}

		var res = {}, i;

		Util.each( object, function ( v, k ) {
			if( fn.call( context || object, v, k, object ) ) {
				res[ k ] = object[ k ];
			}
		});

		return res;
	};

});