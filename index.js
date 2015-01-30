/**
  The entry point.
  @module ƒ
**/
'use strict';

/**
 * To use it, you just need to import it:
 *
 * ```js
 * var ƒ = require('findhit-util');
 * // OR
 * var Util = require('findhit-util');
 * ```
 *
 *
 * @class ƒ
 */

var ƒ = {};

require('./lib/core')( ƒ );
require('./lib/isisnt')( ƒ );
require('./lib/from')( ƒ );
require('./lib/to')( ƒ );

// Load utils by type
require('./lib/type/array')( ƒ );
require('./lib/type/function')( ƒ );
require('./lib/type/object')( ƒ );
require('./lib/type/string')( ƒ );
require('./lib/type/regexp')( ƒ );
require('./lib/type/date')( ƒ );

// Export it
module.exports = ƒ;

// TODO: AMDify
