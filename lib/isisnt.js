module.exports = (function ( Util ){

	// For internal API
	Util.isisnt = Util.IsIsnt = {};

	Util.is = Util.Is = {};
	Util.isnt = Util.Isnt = {};

	Util.is.instanceof = function ( ClassToEval, instance ) {
		return instance && instance.constructor ? instance.constructor === ClassToEval : instance instanceof ClassToEval;
	};
	Util.isnt.instanceof = function ( ClassToEval, instance ) {
		return instance && instance.constructor ? instance.constructor !== ClassToEval : ! ( instance instanceof ClassToEval );
	};

	var register = Util.IsIsnt.register = function ( ClassToEval, keys ) {
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
		registerCustom = Util.IsIsnt.registerCustom = function ( keys, isFn, isntFn ) {

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
	registerCustom( [ 'numeric', 'number', 'Number' ], function ( variable ) {
		return typeof variable === 'number' || ! isNaN( parseInt( variable ) );
	});
	registerCustom( [ 'undefined', 'Undefined', 'notDefined', 'notdefined' ], function ( variable ) {
		return typeof variable === 'undefined';
	});
	registerCustom( [ 'ok', 'true' ], function ( variable ) {
		return variable === true;
	});
	registerCustom( [ 'bad', 'false' ], function ( variable ) {
		return variable === false;
	});
	registerCustom( [ 'Null', 'null', 'NULL' ], function ( variable ) {
		return variable === null;
	});
	registerCustom( [ 'json' ], function ( variable ) {
		try { JSON.parse( variable ); } catch (e) { return false; }
	    return true;
	});

});