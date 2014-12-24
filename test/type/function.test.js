var ƒ = require('../../index'),

	sinon = require('sinon'),
	chai = require('chai'),
	expect = chai.expect;

describe( "ƒ", function () {

	describe( "type", function () {

		describe( "function", function () {

			describe( ".return", function () {

				it( "should return 'yoyoyo'", function () {

					var fn = ƒ.function.return( 'yoyoyo' );

					expect( fn() ).to.be.equal( 'yoyoyo' );

				});

			});

			describe( ".falsify", function () {

				it( "should return false", function () {
					expect( ƒ.function.falsify() ).to.be.equal( false );
				});
			});

			describe( ".truthify", function () {

				it( "should return true", function () {
					expect( ƒ.function.truthify() ).to.be.equal( true );
				});
			});

			describe( ".nullify", function () {

				it( "should return null", function () {
					expect( ƒ.function.nullify() ).to.be.equal( null );
				});
			});

			describe( ".undefinify", function () {

				it( "should return undefined", function () {
					expect( ƒ.function.undefinify() ).to.be.equal( undefined );
				});
			});

			describe( ".getParamNames", function () {

				it( "no parameters provided", function (){

					var res = ƒ.function.getParamNames( function ( ) {} );

					expect( ƒ.is.Array( res ) ).to.be.ok;
					expect( res ).to.have.length( 0 );

				});

				it( "'a' and 'b' parameters provided", function (){

					var res = ƒ.function.getParamNames( function ( a, b ) {} );

					expect( ƒ.is.Array( res ) ).to.be.ok;
					expect( res ).to.have.length( 2 );
					expect( res[0] ).to.be.equal( 'a' );
					expect( res[1] ).to.be.equal( 'b' );

				});

			});

		});

	});

});
