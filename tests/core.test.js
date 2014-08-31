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

		describe( "filter", function () {

			it( "array - get all pair numbers", function () {
				var t, a = [
						1, 2, 3,
						4, 5, 6,
						7, 8, 9,
					];

				t = Util.filter( a, function ( num ) { return num % 2 == 0; });

				expect( t ).to.have.length( 4 );

				expect( t[0] ).to.be.equal( 2 );
				expect( t[1] ).to.be.equal( 4 );
				expect( t[2] ).to.be.equal( 6 );
				expect( t[3] ).to.be.equal( 8 );

			});

			it( "object - get values with letter 'a'", function () {
				var t, a = {
						foo: 'bar',
						bar: 'disco'
					};

				t = Util.filter( a, function ( value ) { return value.match(/a/); });

				expect( Object.keys( t ) ).to.have.length( 1 );

				expect( t.foo ).to.be.equal( 'bar' );
				expect( t.bar ).to.not.be.ok;

			});

		});

		describe( "slice", function () {

			describe( "array", function () {

				it( "from second element to the end", function () {
					var t, a = [
							'a',
							'b',
							'c',
						];

					t = Util.slice( a, 1 );

					expect( Util.is.Array( t ) ).to.be.ok;
					expect( t ).to.have.length( 2 );
					expect( t[0] ).to.be.equal( 'b' );
					expect( t[1] ).to.be.equal( 'c' );

				});


				it( "from second element to third", function () {
					var t, a = [
							'a',
							'b',
							'c',
						];

					t = Util.slice( a, 1, 2 );

					expect( Util.is.Array( t ) ).to.be.ok;
					expect( t ).to.have.length( 1 );
					expect( t[0] ).to.be.equal( 'b' );

				});

				it( "from last two to the end", function () {
					var t, a = [
							'a',
							'b',
							'c',
						];

					t = Util.slice( a, -2 );

					expect( Util.is.Array( t ) ).to.be.ok;
					expect( t ).to.have.length( 2 );
					expect( t[0] ).to.be.equal( 'b' );
					expect( t[1] ).to.be.equal( 'c' );

				});

				it( "from last two except last one", function () {
					var t, a = [
							'a',
							'b',
							'c',
						];

					t = Util.slice( a, -2, -1 );

					expect( Util.is.Array( t ) ).to.be.ok;
					expect( t ).to.have.length( 1 );
					expect( t[0] ).to.be.equal( 'b' );

				});

			});

			describe( "string", function () {

				it( "from second element to the end", function () {
					var t, a = 'abc';

					t = Util.slice( a, 1 );

					expect( Util.is.String( t ) ).to.be.ok;
					expect( t ).to.have.length( 2 );
					expect( t[0] ).to.be.equal( 'b' );
					expect( t[1] ).to.be.equal( 'c' );

				});


				it( "from second element to third", function () {
					var t, a = 'abc';

					t = Util.slice( a, 1, 2 );

					expect( Util.is.String( t ) ).to.be.ok;
					expect( t ).to.have.length( 1 );
					expect( t[0] ).to.be.equal( 'b' );

				});

				it( "from last two to the end", function () {
					var t, a = 'abc';

					t = Util.slice( a, -2 );

					expect( Util.is.String( t ) ).to.be.ok;
					expect( t ).to.have.length( 2 );
					expect( t[0] ).to.be.equal( 'b' );
					expect( t[1] ).to.be.equal( 'c' );

				});

				it( "from last two except last one", function () {
					var t, a = 'abc';

					t = Util.slice( a, -2, -1 );

					expect( Util.is.String( t ) ).to.be.ok;
					expect( t ).to.have.length( 1 );
					expect( t[0] ).to.be.equal( 'b' );

				});

			});

			describe( "object", function () {

				it( "from second element to the end", function () {
					var t, a = {
						first: 'a',
						second: 'b',
						third: 'c',
					};

					t = Util.slice( a, 1 );

					expect( Util.is.Object( t ) ).to.be.ok;
					expect( Object.keys( t ) ).to.have.length( 2 );
					expect( t.second ).to.be.equal( 'b' );
					expect( t.third ).to.be.equal( 'c' );

				});


				it( "from second element to third", function () {
					var t, a = {
						first: 'a',
						second: 'b',
						third: 'c',
					};

					t = Util.slice( a, 1, 2 );

					expect( Util.is.Object( t ) ).to.be.ok;
					expect( Object.keys( t ) ).to.have.length( 1 );
					expect( t.second ).to.be.equal( 'b' );

				});

				it( "from last two to the end", function () {
					var t, a = {
						first: 'a',
						second: 'b',
						third: 'c',
					};

					t = Util.slice( a, -2 );

					expect( Util.is.Object( t ) ).to.be.ok;
					expect( Object.keys( t ) ).to.have.length( 2 );
					expect( t.second ).to.be.equal( 'b' );
					expect( t.third ).to.be.equal( 'c' );

				});

				it( "from last two except last one", function () {
					var t, a = {
						first: 'a',
						second: 'b',
						third: 'c',
					};

					t = Util.slice( a, -2, -1 );

					expect( Util.is.Object( t ) ).to.be.ok;
					expect( Object.keys( t ) ).to.have.length( 1 );
					expect( t.second ).to.be.equal( 'b' );

				});

			});

		});

	});

});