'use strict';

/**
 * To use it, you just need to import it:
 *
 * ```js
 * var Util = require('findhit-util');
 * ```
 *
 *
 * @class Util
 */
module.exports = (function () {
	var Util = {};

	require('./core')( Util );
	require('./is-isnt')( Util );
	require('./from')( Util );
	require('./to')( Util );

	return Util;
})();