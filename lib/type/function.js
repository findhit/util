module.exports = (function ( Util ){
	var fn = Util.Function = Util.function = {};

	// is and isnt
	fn.is = Util.is.Function;
	fn.isnt = Util.isnt.Function;

	// fn that logs all arguments passed to it
	fn.debug = function () { console.log( arguments ); };

	// fn that returns a value
	fn.return = function ( value ) { return function () { return value; }; };
	fn.falsify = fn.return( false );
	fn.truthify = fn.return( true );
	fn.nullify = fn.return( null );
	fn.undefinify = fn.return( undefined );

	// fn that returns parameters names
	// Based on @Jack Allan's response at stackoverflow.com
	// http://stackoverflow.com/questions/1007981/how-to-get-function-parameter-names-values-dynamically-from-javascript
	fn.getParamNames = (function () {

		// REGEX
		var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
			ARGUMENT_NAMES = /([^\s,]+)/g;

		return function ( func ) {

			var fnStr = func.toString().replace(STRIP_COMMENTS, '');
			var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);

			if(result === null) {
				result = [];
			}

			return result;
		};

	})();

});