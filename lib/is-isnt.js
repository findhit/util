module.exports = (function ( Util ){
	Util.is = {};
	Util.isnt = {};

	Util.is.instanceof = function ( ClassToEval, instance ) {
		return instance && instance.constructor && instance.constructor === ClassToEval || instance instanceof ClassToEval;
	};
	Util.isnt.instanceof = function ( ClassToEval, instance ) {
		return instance && instance.constructor ? instance.constructor !== ClassToEval : ! ( instance instanceof ClassToEval );
	};

	var addEvaluator = function ( ClassToEval, keys ) {
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
		addCustomEvaluator = function ( keys, isFn, isntFn ) {

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
	addEvaluator( Function, [ 'Function', 'function' ] );
	addEvaluator( Array, [ 'Array', 'array' ] );
	addEvaluator( Object, [ 'Object', 'object' ] );
	addEvaluator( String, [ 'String', 'string' ] );
	addEvaluator( Error, [ 'Error', 'error' ] );

	// Default Browser Classes
	if( typeof HTMLElement !== 'undefined' ) {
		addEvaluator( HTMLElement, [ 'HTMLElement', 'HTMLelement' ] );
	}

	// Custom evaluators
	addCustomEvaluator( [ 'numeric', 'number' ], function ( instance ) {
		return typeof instance === 'number' || ! isNaN( parseInt( instance ) );
	});

});