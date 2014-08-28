module.exports = (function ( Util ){

	Util.uniqId = function () {
		return Math.floor( Math.random() * 11 ) +''+ Math.floor( Math.random() * 1000000 );
	};

	Util.forEach = function ( o, fn, context ) {

		if ( Util.isnt.object( o ) ) {
			throw new TypeError("o must be an object");
		}
		if ( Util.isnt.function( fn ) ) {
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

	Util.extend = function ( target ) {
		var srcs,
			r = false,
			i, j, len, src;

		if ( target === true){
			target = arguments[1];
			r = true;
			srcs = Array.prototype.slice.call(arguments, 2);
		} else {
			srcs = Array.prototype.slice.call(arguments, 1);
		}

		for ( j = 0, len = srcs.length; j < len; j++ ) {
			src = srcs[j];
			for ( i in src ) {
				if ( r && typeof target[i] == 'object' )
					this.extend( target[i], src[i] );
				else
					target[i] = src[i];
			}
		}
		return target;
	};

});