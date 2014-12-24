var ƒ = require('../../index'),

	sinon = require('sinon'),
	chai = require('chai'),
	expect = chai.expect;

describe( "ƒ", function () {

	describe( "type", function () {

		describe( "array", function () {

			describe( ".map", function () {

				it( "get 3rd value of each array on array", function () {
					var t, a = [
							[ 1, 2, 3 ],
							[ 4, 5, 6 ],
							[ 7, 8, 9 ],
						];

					t = ƒ.map( a, function ( v ) { return v[ 2 ] });

					expect( t ).to.have.length( 3 );
					expect( t[0] ).to.be.equal( 3 );
					expect( t[1] ).to.be.equal( 6 );
					expect( t[2] ).to.be.equal( 9 );

				});

			});

			describe( ".empty", function () {

				it( "should empty the array", function () {
					var array = [ 1, 'foo', 'bar', 'lala', 2 ];

					ƒ.Array.empty( array );

					expect( array ).to.have.length( 0 );
				});

			});

		});

	});

});
