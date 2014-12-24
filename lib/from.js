module.exports = (function ( ƒ ){
	var from = ƒ.from = {};

	from.string = from.String = function ( string ) {
		if( ƒ.isnt.string( string ) ) {
			throw new TypeError("string should be string");
		}

		if( string == 'undefined' ) return undefined;
		if( string == 'null' ) return null;
		if( string == 'true' ) return true;
		if( string == 'false' ) return false;
		if( ƒ.is.number( string ) ) return parseInt( string );
		if( ƒ.is.json( string ) ) return JSON.parse( string );

		return string;
	};

});
