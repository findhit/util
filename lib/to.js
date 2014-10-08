module.exports = (function ( Util ){
	var to = Util.to = {;

	to.String = function ( variable ) {
		return ( Util.is.string( variable ) ) ? variable : JSON.stringify( variable );
	};

});
