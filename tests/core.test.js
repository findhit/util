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

	});

});