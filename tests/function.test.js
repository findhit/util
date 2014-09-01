var Util = require('../index'),

	sinon = require('sinon'),
	chai = require('chai'),
	expect = chai.expect;

describe( "Util", function () {

	describe( ".function", function () {

		describe( ".getParamNames", function () {

			it( "no parameters provided", function (){

				var res = Util.function.getParamNames( function ( ) {} );

				expect( Util.is.Array( res ) ).to.be.ok;
				expect( res ).to.have.length( 0 );

			});

			it( "'a' and 'b' parameters provided", function (){

				var res = Util.function.getParamNames( function ( a, b ) {} );

				expect( Util.is.Array( res ) ).to.be.ok;
				expect( res ).to.have.length( 2 );
				expect( res[0] ).to.be.equal( 'a' );
				expect( res[1] ).to.be.equal( 'b' );

			});

		});

	});

});