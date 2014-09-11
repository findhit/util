module.exports = (function ( Util ){
	var ob = Util.Object = Util.object = {};

	// is and isnt
	ob.is = Util.is.Object;
	ob.isnt = Util.isnt.Object;

	ob.forEach = ob.each = function ( o, fn, context ) {

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

	ob.map = function ( o, fn, context ) {

		if ( Util.isnt.Function( fn ) ) {
			throw new TypeError("fn must be a function");
		}

		var res = {}, i;

		Util.each( o, function ( v, k ) {
			res[ k ] = fn.call( context || o, o[ i ], i, o );
		});

		return res;
	};

});