/**
  The entry point.
  @module Util
**/
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

	require('./lib/core')( Util );
	require('./lib/function')( Util );
	require('./lib/is-isnt')( Util );
	require('./lib/from')( Util );
	require('./lib/to')( Util );

	return Util;
})();
