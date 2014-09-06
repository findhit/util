module.exports = (function ( Util ){

	Util.uniqId = function () {
		return Math.floor( Math.random() * 11 ) +''+ Math.floor( Math.random() * 1000000 );
	};

	Util.uuid = (function() {
		var s4 = function () {
			return Math.floor((1 + Math.random()) * 0x10000)
				.toString(16)
				.substring(1);
		}

		return function() {
			return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
			s4() + '-' + s4() + s4() + s4();
		};
	})();

	Util.forEach = Util.each = function ( o, fn, context ) {

		if ( Util.isnt.object( o ) && Util.isnt.array( o ) ) {
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

	Util.map = function ( o, fn, context ) {

		if ( Util.isnt.object( o ) && Util.isnt.array( o ) ) {
			throw new TypeError("o must be an object");
		}
		if ( Util.isnt.function( fn ) ) {
			throw new TypeError("fn must be a function");
		}

		var res = [], i;

		for( i in o ) {
			if ( o.hasOwnProperty( i ) ) {
				res.push( fn.call( context || o, o[ i ], i, o ) );
			}
		}

		return res;
	};

	Util.filter = function ( o, fn, context ) {

		if ( Util.isnt.object( o ) && Util.isnt.array( o ) ) {
			throw new TypeError("o must be an object");
		}
		if ( Util.isnt.function( fn ) ) {
			throw new TypeError("fn must be a function");
		}

		var isArray = Util.is.array( o ),
			res = isArray ? [] : {}, i;

		for( i in o ) {
			if ( o.hasOwnProperty( i ) ) {
				if( fn.call( context || o, o[ i ], i, o ) ) {

					if( isArray ) {
						res.push( o[ i ] );
					} else {
						res[ i ] = o[ i ];
					}

				}
			}
		}

		return res;
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

	Util.slice = function ( target, start, end ) {

		if ( Util.is.Function( target.slice ) ) {
			return target.slice( start, end );
		}

		if ( Util.is.Object( target ) ) {
			var keys = Object.keys( target ).slice( start, end );

			return Util.filter( target, function ( value, key ) {
				return keys.indexOf( key ) !== -1;
			});
		}

		return [];
	};

	Util.log = console.log;

});