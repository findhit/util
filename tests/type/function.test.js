var Util = require('../../index'),

	sinon = require('sinon'),
	chai = require('chai'),
	expect = chai.expect;

describe( "Util", function () {

	describe( "type", function () {

		describe( "function", function () {

			describe( ".return", function () {

				it( "should return 'yoyoyo'", function () {

					var fn = Util.function.return( 'yoyoyo' );

					expect( fn() ).to.be.equal( 'yoyoyo' );

				});

			});
			
			describe( ".falsify", function () {

				it( "should return false", function () {
					expect( Util.function.falsify() ).to.be.equal( false );
				});
			});
			
			describe( ".truthify", function () {

				it( "should return true", function () {
					expect( Util.function.truthify() ).to.be.equal( true );
				});
			});
			
			describe( ".nullify", function () {

				it( "should return null", function () {
					expect( Util.function.nullify() ).to.be.equal( null );
				});
			});
			
			describe( ".undefinify", function () {

				it( "should return undefined", function () {
					expect( Util.function.undefinify() ).to.be.equal( undefined );
				});
			});

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

});