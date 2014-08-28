var Util = require('../index'),

	sinon = require('sinon'),
	chai = require('chai'),
	expect = chai.expect;

describe( "Util", function () {

	describe( "core", function () {

		describe( "extend", function () {

			it( "extend a from b", function () {
				var a = { foo: 'boo' },
					b = { foo: 'bar' },
					t;

				t = Util.extend( a, b );

				expect( a.foo ).to.be.equal( 'bar' );
				expect( t.foo ).to.be.equal( 'bar' );

			});

			it( "extend multiple into t", function () {
				var t = {},
					a = { foo: 'boo' },
					b = { foo: 'bar' },
					c = { heyhey: 'yoyo' };

				Util.extend( t, a, b, c );

				expect( a.foo ).to.be.equal( 'boo' );
				expect( b.foo ).to.be.equal( 'bar' );

				expect( t.foo ).to.be.equal( 'bar' );
				expect( t.heyhey ).to.be.equal( 'yoyo' );

			})

		});

		describe( "map", function () {

			it( "get 3rd value of each array on array", function () {
				var t, a = [
						[ 1, 2, 3 ],
						[ 4, 5, 6 ],
						[ 7, 8, 9 ],
					];

				t = Util.map( a, function ( v ) { return v[ 2 ] });

				expect( t ).to.have.length( 3 );
				expect( t[0] ).to.be.equal( 3 );
				expect( t[1] ).to.be.equal( 6 );
				expect( t[2] ).to.be.equal( 9 );

			});

		});

	});

});