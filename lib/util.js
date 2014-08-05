'use strict';

var Util = require('findhit-util');

/**
 * To use it, you just need to import it:
 *
 * ```js
 * var Class = require('findhit-class');
 * ```
 *
 *
 * @class Class
 */
module.exports = (function () {
	var Util = {};

	require('./core')( Util );
	require('./is-isnt')( Util );
	require('./from')( Util );
	require('./to')( Util );

	return Util;
})();