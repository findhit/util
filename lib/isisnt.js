module.exports = (function ( ƒ ){

	// For internal API
	ƒ.isisnt = ƒ.IsIsnt = {};

	ƒ.is = ƒ.Is = {};
	ƒ.isnt = ƒ.Isnt = {};

	ƒ.is.instanceof = function ( ClassToEval, instance ) {
		return instance && instance.constructor ? instance.constructor === ClassToEval : instance instanceof ClassToEval;
	};
	ƒ.isnt.instanceof = function ( ClassToEval, instance ) {
		return instance && instance.constructor ? instance.constructor !== ClassToEval : ! ( instance instanceof ClassToEval );
	};

	var register = ƒ.IsIsnt.register = function ( ClassToEval, keys ) {
			if( ! ClassToEval ) return;

			var isFn = function ( instance ) {
					return ƒ.is.instanceof( ClassToEval, instance );
				},
				isntFn = function ( instance ) {
					return ƒ.isnt.instanceof( ClassToEval, instance );
				};

			if( typeof keys !== 'object' ) {
				keys = [ keys ];
			}

			keys.forEach(function ( key ) {
				ƒ.is[ key ] = isFn;
				ƒ.isnt[ key ] = isntFn;
			});
		},
		registerCustom = ƒ.IsIsnt.registerCustom = function ( keys, isFn, isntFn ) {

			if( ƒ.isnt.function( isFn ) ) {
				throw new TypeError("isFn must be a function");
			}

			if( ƒ.isnt.function( isntFn ) ) {
				isntFn = function ( instance ) {
					return ! isFn( instance );
				};
			}

			if( typeof keys !== 'object' ) {
				keys = [ keys ];
			}

			keys.forEach(function ( key ) {
				ƒ.is[ key ] = isFn;
				ƒ.isnt[ key ] = isntFn;
			});

		};

	// Default Javascript Classes
	register( Function, [ 'Function', 'function' ] );
	register( Array, [ 'Array', 'array' ] );
	register( Object, [ 'Object', 'object' ] );
	register( String, [ 'String', 'string' ] );
	register( Error, [ 'Error', 'error' ] );
	register( RegExp, [ 'RegExp', 'Regexp', 'regExp', 'regexp' ] );

	// Default Browser Classes
	if( typeof HTMLElement !== 'undefined' ) {
		register( HTMLElement, [ 'HTMLElement', 'HTMLelement' ] );
	}

	// Custom evaluators
	registerCustom( [ 'numeric', 'number', 'Number' ], function ( variable ) {

		// Parse it to a number if it isn't
		variable = typeof variable === 'number' ? variable : parseInt( variable );

		// We don't want to tell that "Not a Number" is a Number...
		return ! isNaN( variable );
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
	registerCustom( [ 'json', 'JSON', 'Json' ], function ( variable ) {
		if (/^[\],:{}\s]*$/
				.test( variable
					.replace( /\\["\\\/bfnrtu]/g, '@')
					.replace( /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']' )
					.replace( /(?:^|:|,)(?:\s*\[)+/g, '' )
				)
			) return true;

		return false;
	});

});
