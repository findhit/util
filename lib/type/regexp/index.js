module.exports = (function ( ƒ ){
    var rg = ƒ.Regexp = ƒ.regexp = ƒ.RegExp = {};

    // is and isnt
    rg.is = ƒ.is.RegExp;
    rg.isnt = ƒ.isnt.RegExp;

    // Load snippets from snippets file
    rg.accents = require( './accents' );
    rg.snippets = require( './snippets' );

    rg.builder = function ( snippets, options ) {

        // Check snippets
        snippets =
        ƒ.is.Array( snippets ) && snippets ||
        ƒ.is.String( snippets ) && [ snippets ] ||
            [];

        // Get options
        options = ƒ.extend( {}, rg.builder.options, ƒ.is.Object( options ) && options || {} );

        // Get only snippets that are valid
        snippets = ƒ.filter( snippets, function ( snippet ) {
            return ƒ.isnt.undefined( rg.snippets[ snippet ] );
        });

        if( ! snippets.length ) {
            throw new TypeError("snippets must contain valid snippets, check docs");
        }

        var r = ƒ.map( snippets, function ( snippet ) {
            return rg.snippets[ snippet ].toString().replace( /^\//, '' ).replace( /\/$/, '' );
        }).join('');

        if( options.encapsulate ) r = ( options.negative && '[^' || '[' ) + r +']' + ( options.entire && '*' || '' );
        if( options.optional ) r = '?('+ r +')';
        if( options.allowEmpty ) r = '('+ r +'|)';
        if( options.entire ) r = '^'+ r +'$';

        return new RegExp( r, options.flags || 'gi' );
    };

        rg.builder.options = {
            entire: true,
            encapsulate: true,
            optional: false,
            allowEmpty: false,
            negative: false,
        };

    rg.test = function ( string, snippets, options ) {
        var reg = rg.builder( snippets, options );

        if( ! reg ) {
            return false;
        }

        return reg.test( string );
    };
    rg.match = function ( string, snippets, options ) {
        var reg = rg.builder( snippets, options );

        if( ! reg ) {
            return false;
        }

        return string.match( reg );
    };

    // TODO: Don't forget to mention on docs how fucking good this fn works!!1
    rg.querify = function ( string ) {

        // escape meta characters
        string = string.replace(/([|()[{.+*?^$\\])/g,"\\$1");

        // split into words
        var words = string.split(/\s+/);

        // sort by length
        words.sort(function ( a, b ) {
            return b.length - a.length;
        });

        // replace characters by their compositors
        var accent_replacer = function ( chr ) {
            return rg.accents[ chr.toUpperCase() ] || chr;
        };

        for ( var i = 0; i < words.length; i++ ) {
            words[i] = words[i].replace(/\S/g,accent_replacer);
        }

        // join as alternatives
        return new RegExp( words.join("|") );
    };

    rg.filter = function ( regexp, object ) {
        return ƒ.filter( object, function ( value ) {
            return ƒ.is.String( value ) && value.match( regexp );
        });
    };

});
