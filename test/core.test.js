var ƒ = require('../index'),

	sinon = require('sinon'),
	chai = require('chai'),
	expect = chai.expect;

describe( "ƒ", function () {

	describe( "core", function () {

		describe( "extend", function () {

			it( "extend a from b", function () {
				var a = { foo: 'boo' },
					b = { foo: 'bar' },
					t;

				t = ƒ.extend( a, b );

				expect( a.foo ).to.be.equal( 'bar' );
				expect( t.foo ).to.be.equal( 'bar' );

			});

			it( "extend multiple into t", function () {
				var t = {},
					a = { foo: 'boo' },
					b = { foo: 'bar' },
					c = { heyhey: 'yoyo' };

					ƒ.extend( t, a, b, c );

				expect( a.foo ).to.be.equal( 'boo' );
				expect( b.foo ).to.be.equal( 'bar' );

				expect( t.foo ).to.be.equal( 'bar' );
				expect( t.heyhey ).to.be.equal( 'yoyo' );

			})

		});

		describe( "map", function () {

			it( "should return an array when array is given", function () {
				var t, a = [];

				t = ƒ.map( a, function ( v ) { return v });

				expect( ƒ.is.Array( t ) ).to.be.ok;
			});

			it( "should return an object when object is given", function () {
				var t, a = {};

				t = ƒ.map( a, function ( v ) { return v });

				expect( ƒ.is.Object( t ) ).to.be.ok;
			});

		});

		describe( "filter", function () {

			it( "array - get all pair numbers", function () {
				var t, a = [
						1, 2, 3,
						4, 5, 6,
						7, 8, 9,
					];

				t = ƒ.filter( a, function ( num ) { return num % 2 == 0; });

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

				t = ƒ.filter( a, function ( value ) { return value.match(/a/); });

				expect( t ).to.deep.equal({
					foo: 'bar'
				});
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

					t = ƒ.slice( a, 1 );

					expect( ƒ.is.Array( t ) ).to.be.ok;
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

					t = ƒ.slice( a, 1, 2 );

					expect( ƒ.is.Array( t ) ).to.be.ok;
					expect( t ).to.have.length( 1 );
					expect( t[0] ).to.be.equal( 'b' );

				});

				it( "from last two to the end", function () {
					var t, a = [
							'a',
							'b',
							'c',
						];

					t = ƒ.slice( a, -2 );

					expect( ƒ.is.Array( t ) ).to.be.ok;
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

					t = ƒ.slice( a, -2, -1 );

					expect( ƒ.is.Array( t ) ).to.be.ok;
					expect( t ).to.have.length( 1 );
					expect( t[0] ).to.be.equal( 'b' );

				});

			});

			describe( "string", function () {

				it( "from second element to the end", function () {
					var t, a = 'abc';

					t = ƒ.slice( a, 1 );

					expect( ƒ.is.String( t ) ).to.be.ok;
					expect( t ).to.have.length( 2 );
					expect( t[0] ).to.be.equal( 'b' );
					expect( t[1] ).to.be.equal( 'c' );

				});


				it( "from second element to third", function () {
					var t, a = 'abc';

					t = ƒ.slice( a, 1, 2 );

					expect( ƒ.is.String( t ) ).to.be.ok;
					expect( t ).to.have.length( 1 );
					expect( t[0] ).to.be.equal( 'b' );

				});

				it( "from last two to the end", function () {
					var t, a = 'abc';

					t = ƒ.slice( a, -2 );

					expect( ƒ.is.String( t ) ).to.be.ok;
					expect( t ).to.have.length( 2 );
					expect( t[0] ).to.be.equal( 'b' );
					expect( t[1] ).to.be.equal( 'c' );

				});

				it( "from last two except last one", function () {
					var t, a = 'abc';

					t = ƒ.slice( a, -2, -1 );

					expect( ƒ.is.String( t ) ).to.be.ok;
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

					t = ƒ.slice( a, 1 );

					expect( ƒ.is.Object( t ) ).to.be.ok;
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

					t = ƒ.slice( a, 1, 2 );

					expect( ƒ.is.Object( t ) ).to.be.ok;
					expect( Object.keys( t ) ).to.have.length( 1 );
					expect( t.second ).to.be.equal( 'b' );

				});

				it( "from last two to the end", function () {
					var t, a = {
						first: 'a',
						second: 'b',
						third: 'c',
					};

					t = ƒ.slice( a, -2 );

					expect( ƒ.is.Object( t ) ).to.be.ok;
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

					t = ƒ.slice( a, -2, -1 );

					expect( ƒ.is.Object( t ) ).to.be.ok;
					expect( Object.keys( t ) ).to.have.length( 1 );
					expect( t.second ).to.be.equal( 'b' );

				});

			});

		});

	});

});
