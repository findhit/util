module.exports = (function ( Util ){
	var fn = Util.function = {},

		// REGEX
		STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
		ARGUMENT_NAMES = /([^\s,]+)/g;

	// Based on @Jack Allan's response at stackoverflow.com
	// http://stackoverflow.com/questions/1007981/how-to-get-function-parameter-names-values-dynamically-from-javascript
	fn.getParamNames = function ( func ) {

		var fnStr = func.toString().replace(STRIP_COMMENTS, '');
		var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);

		if(result === null) {
			result = [];
		}

		return result;
	};

});