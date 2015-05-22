var accents = require( './accents' );

var S = module.exports = {};

// Regex data types on strings
S.INT = '\\d+';
S.MD5 = '[0-9a-f]{32}';

// Filters
S.accented = (function() {
    var i, r = "";

    for( i in accents )
        r += accents[ i ].replace(/[\[\]]/ig, '');

    return new RegExp( r );
})();

S.alpha = /a-zA-Z/;
S.numeric = /0-9/;
S.spaced = / /;
S.doted = /./;

S.brackets = /{}[]()/;
S.punctuation = /,.!?/;
S.dividers = /-_\/\\/;
S.cotters = /\"\'/;
S.monetaries = /€£$/;
S.mathematical = /%*\/+-/;
S.extra = /#@&/;
S.breaklines = /\n/;

// Regex content types
S.url = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:ww‌​w.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?‌​(?:[\w]*))?)/;
S.email = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
S.subject_email = new RegExp( '([' + (S.accented+'').replace( /\//ig, '') + ']+ )+<' + (S.email+'').replace( /\//ig, '') + '>' );
S.ipv4 = /([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])/;
