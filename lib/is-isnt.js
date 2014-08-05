module.exports = (function ( Util ){
	Util.is = {};
	Util.isnt = {};

	Util.is.instanceof = function ( class, instance ) {
		return instance instanceof class;
	};
	Util.isnt.instanceof = function ( class, instance ) {
		return ! ( instance instanceof class );
	};

	var addEvaluator = function ( class, keys ) {
			if( ! class ) return;

			var isFn = function ( instance ) {
					return Util.is.instanceof( class, instance );
				},
				isntFn = function ( instance ) {
					return Util.isnt.instanceof( class, instance );
				};

			if( typeof keys !== 'object' ) {
				keys = [ keys ];
			}

			keys.forEach(function ( key ) {
				Util.is[ key ] = isFn;
				Util.isnt[ key ] = isntFn;
			});
		}),
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
	addEvaluator( Array, [ 'Array', 'array' ] );
	addEvaluator( Object, [ 'Object', 'object' ] );
	addEvaluator( String, [ 'String', 'string' ] );
	addEvaluator( Error, [ 'Error', 'error' ] );

	// Default Browser Classes
	addEvaluator( HTMLElement, [ 'HTMLElement', 'HTMLelement' ] );

	// Custom evaluators
	addCustomEvaluator( [ 'numeric', 'number' ], function ( instance ) {
		return typeof instance === 'number' || ! isNaN( parseInt( instance ) );
	});

});