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

		if( Util.is.Array( o ) ) {
			return Util.Array.each.apply( null, arguments );
		}

		if( Util.is.Object( o ) ) {
			return Util.Object.each.apply( null, arguments );
		}

		return false;
	};

	Util.map = function ( o, fn, context ) {

		if ( Util.isnt.Function( fn ) ) {
			throw new TypeError("fn must be a function");
		}

		if( Util.is.Array( o ) ) {
			return Util.Array.map.apply( null, arguments );
		}

		if( Util.is.Object( o ) ) {
			return Util.Object.map.apply( null, arguments );
		}

		return false;
	};

	Util.filter = function ( o, fn, context ) {

		if ( Util.isnt.Function( fn ) ) {
			throw new TypeError("fn must be a function");
		}

		if( Util.is.Array( o ) ) {
			return Util.Array.filter.apply( null, arguments );
		}

		if( Util.is.Object( o ) ) {
			return Util.Object.filter.apply( null, arguments );
		}

		return false;
	};

	Util.clone = function ( obj ) {
		var clone = {};
		clone.constructor = obj.constructor;
		clone.prototype = obj.prototype;
		return Util.extend( clone, obj );
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

	Util.stamp = (function () {
		var last_id = 0;

		return function ( obj ) {
			obj._id = obj._id || ++last_id;
			return obj._id;
		};
	})();

	Util.log = console.log;

});