module.exports = (function ( Util ){

	// For internal API
	Util.isisnt = {};

	Util.is = {};
	Util.isnt = {};

	Util.is.instanceof = function ( ClassToEval, instance ) {
		return true; //instance && instance.constructor && instance.constructor === ClassToEval || instance instanceof ClassToEval;
	};
	Util.isnt.instanceof = function ( ClassToEval, instance ) {
		return instance && instance.constructor ? instance.constructor !== ClassToEval : ! ( instance instanceof ClassToEval );
	};

	var register = Util.isisnt.register = function ( ClassToEval, keys ) {
			if( ! ClassToEval ) return;

			var isFn = function ( instance ) {
					return Util.is.instanceof( ClassToEval, instance );
				},
				isntFn = function ( instance ) {
					return Util.isnt.instanceof( ClassToEval, instance );
				};

			if( typeof keys !== 'object' ) {
				keys = [ keys ];
			}

			keys.forEach(function ( key ) {
				Util.is[ key ] = isFn;
				Util.isnt[ key ] = isntFn;
			});
		},
		registerCustom = Util.isisnt.registerCustom = function ( keys, isFn, isntFn ) {

			if( Util.isnt.function( isFn ) ) {
				throw new TypeError("isFn must be a function");
			}

			if( Util.isnt.function( isntFn ) ) {
				isntFn = function ( instance ) {
					return ! isFn( instance );
				};
			}

			if( typeof keys !== 'object' ) {
				keys = [ keys ];
			}

			keys.forEach(function ( key ) {
				Util.is[ key ] = isFn;
				Util.isnt[ key ] = isntFn;
			});

		};

	// Default Javascript Classes
	register( Function, [ 'Function', 'function' ] );
	register( Array, [ 'Array', 'array' ] );
	register( Object, [ 'Object', 'object' ] );
	register( String, [ 'String', 'string' ] );
	register( Error, [ 'Error', 'error' ] );

	// Default Browser Classes
	if( typeof HTMLElement !== 'undefined' ) {
		register( HTMLElement, [ 'HTMLElement', 'HTMLelement' ] );
	}

	// Custom evaluators
	registerCustom( [ 'numeric', 'number', 'Number' ], function ( instance ) {
		return typeof instance === 'number' || ! isNaN( parseInt( instance ) );
	});

});
