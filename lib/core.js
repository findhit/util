module.exports = (function ( ƒ ){

	ƒ.uniqId = function () {
		return Math.floor( Math.random() * 11 ) +''+ Math.floor( Math.random() * 1000000 );
	};

	ƒ.uuid = (function() {
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

	ƒ.forEach = ƒ.each = function ( o, fn, context ) {

		if( ƒ.is.Array( o ) ) {
			return ƒ.Array.each.apply( null, arguments );
		}

		if( ƒ.is.Object( o ) ) {
			return ƒ.Object.each.apply( null, arguments );
		}

		return false;
	};

	ƒ.map = function ( o, fn, context ) {

		if ( ƒ.isnt.Function( fn ) ) {
			throw new TypeError("fn must be a function");
		}

		if( ƒ.is.Array( o ) ) {
			return ƒ.Array.map.apply( null, arguments );
		}

		if( ƒ.is.Object( o ) ) {
			return ƒ.Object.map.apply( null, arguments );
		}

		return false;
	};

	ƒ.filter = function ( o, fn, context ) {

		if ( ƒ.isnt.Function( fn ) ) {
			throw new TypeError("fn must be a function");
		}

		if( ƒ.is.Array( o ) ) {
			return ƒ.Array.filter.apply( null, arguments );
		}

		if( ƒ.is.Object( o ) ) {
			return ƒ.Object.filter.apply( null, arguments );
		}

		return false;
	};

	ƒ.clone = function ( obj ) {
		var clone = {};
		clone.constructor = obj.constructor;
		clone.prototype = obj.prototype;
		return ƒ.extend( clone, obj );
	};

	ƒ.extend = function ( target ) {
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

	ƒ.slice = function ( target, start, end ) {

		if ( ƒ.is.Function( target.slice ) ) {
			return target.slice( start, end );
		}

		if ( ƒ.is.Object( target ) ) {
			var keys = Object.keys( target ).slice( start, end );

			return ƒ.filter( target, function ( value, key ) {
				return keys.indexOf( key ) !== -1;
			});
		}

		return [];
	};

	ƒ.stamp = (function () {
		var last_id = 0;

		return function ( obj ) {
			obj._id = obj._id || ++last_id;
			return obj._id;
		};
	})();

	ƒ.log = console.log;

});
