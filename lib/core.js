module.exports = (function ( Util ){

	Util.uniqId = function () {
		return Math.floor( Math.random() * 11 ) +''+ Math.floor( Math.random() * 1000000 );
	};

	Util.forEach = function ( o, fn, context ) {

		if( Util.isnt.object( o ) ) {
			throw new TypeError("o must be an object");
		}
		if( Util.isnt.function( fn ) ) {
			throw new TypeError("fn must be a function");
		}

		var i;

		for( i in o ) {
			if( o.hasOwnProperty( i ) ) {
				fn.call( context || o, o[ i ], i, o );
			}
		}

		return o;
	};

});