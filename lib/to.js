module.exports = (function ( ƒ ){
	var to = ƒ.to = {};

	to.String = function ( variable ) {
		return ( ƒ.is.string( variable ) ) ? variable : JSON.stringify( variable );
	};

});
