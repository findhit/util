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

var Util = {};

require('./lib/core')( Util );
require('./lib/isisnt')( Util );
require('./lib/from')( Util );
require('./lib/to')( Util );

// Load utils by type
require('./lib/type/array')( Util );
require('./lib/type/function')( Util );
require('./lib/type/object')( Util );
require('./lib/type/string')( Util );
require('./lib/type/regexp')( Util );

// Export it
module.exports = Util;

// TODO: AMDify
