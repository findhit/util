module.exports = (function ( Util ){
	var from = Util.from = {};

	from.String = function ( string ) {
		if( Util.isnt.string( string ) ) {
			throw new TypeError("string should be string");
		}

		if( string == 'undefined' ) return undefined;
		if( string == 'null' ) return null;
		if( string == 'true' ) return true;
		if( string == 'false' ) return false;
		if( Util.is.number( string ) ) return parseInt( string );
		if( Util.is.json( string ) ) return JSON.parse( d );

		return d;
	};

});