var ƒ = require('../../index'),

	sinon = require('sinon'),
	chai = require('chai'),
	expect = chai.expect;

describe( "ƒ", function () {

	describe( "type", function () {

		describe( "string", function () {

			describe( ".trim", function () {

				it( "should trim tabs", function () {
					expect( ƒ.String.trim( "			123		" ) ).to.have.length( 3 );
					expect( ƒ.String.trim( "			1 2 3		" ) ).to.have.length( 5 );
				});

				it( "should trim spaces", function () {
					expect( ƒ.String.trim( "       123         " ) ).to.have.length( 3 );
					expect( ƒ.String.trim( "       1 2 3         " ) ).to.have.length( 5 );
				});

				it( "should trim tabs and spaces", function () {
					expect( ƒ.String.trim( "   		    123         " ) ).to.have.length( 3 );
					expect( ƒ.String.trim( "  	     1 2 3    	  	   " ) ).to.have.length( 5 );
				});

			});

			describe( ".splitWords", function () {

				it( "should split the simplest phrase", function () {
					expect( ƒ.String.splitWords( "one two three" ) ).to.have.length( 3 );
				});

				it( "should ignore commas", function () {
					expect( ƒ.String.splitWords( "one , two , three" ) ).to.have.length( 3 );
					expect( ƒ.String.splitWords( "one, two, three" ) ).to.have.length( 3 );
					expect( ƒ.String.splitWords( "one ,two ,three" ) ).to.have.length( 3 );
					expect( ƒ.String.splitWords( "one,two,three" ) ).to.have.length( 3 );
				});

				it( "should split the akwardest phrase", function () {
					expect( ƒ.String.splitWords( "  	 Word1 		another-fake		Other  	" ) ).to.have.length( 3 );
				});

			});

			describe( ".toHtml", function () {

				it( 'should convert breaklines to <br />', function () {
					expect( ƒ.String.toHtml( 'Should convert \n to <br />' ) ).to.be.equal( 'Should convert <br /> to <br />' );
				});

				it( 'should convert &quot; to "', function () {
					expect( ƒ.String.toHtml( 'Should convert &quot; to "' ) ).to.be.equal( 'Should convert " to "' );
				});

				it( 'should convert &lt; to <', function () {
					expect( ƒ.String.toHtml( 'Should convert &lt; to <' ) ).to.be.equal( 'Should convert < to <' );
				});

				it( 'should convert &gt; to >', function () {
					expect( ƒ.String.toHtml( 'Should convert &gt; to >' ) ).to.be.equal( 'Should convert > to >' );
				});

			});

			describe( ".toText", function () {

				it( 'should convert <br /> to breaklines', function () {
					expect( ƒ.String.toText( 'Should convert <br /> to \n' ) ).to.be.equal( 'Should convert \n to \n' );
				});

				it( 'should convert " to &quot;', function () {
					expect( ƒ.String.toText( 'Should convert " to &quot;' ) ).to.be.equal( 'Should convert &quot; to &quot;' );
				});

				it( 'should convert < to &lt;', function () {
					expect( ƒ.String.toText( 'Should convert < to &lt;' ) ).to.be.equal( 'Should convert &lt; to &lt;' );
				});

				it( 'should convert > to &gt;', function () {
					expect( ƒ.String.toText( 'Should convert > to &gt;' ) ).to.be.equal( 'Should convert &gt; to &gt;' );
				});

			});

			describe( ".capitalize", function () {

				it( "should capitalize the string", function () {
					var str = ƒ.String.capitalize( 'heyyo' );
					expect( str ).to.equal( 'Heyyo' );
				});
			});

			describe( ".decapitalize", function () {

				it( "should decapitalize the string", function () {
					var str = ƒ.String.decapitalize( 'Heyyo' );
					expect( str ).to.equal( 'heyyo' );
				});
			});

			describe( "Case conversions", function () {

				describe('from CamelCase to ...', function () {

					describe( ".fromCamelToUnderscore", function () {

						it('HeyYo', function () {
							var str = ƒ.String.fromCamelToUnderscore( 'HeyYo' );
							expect( str ).to.be.equal( 'hey_yo' );
						});

					});

					describe( ".fromCamelToDash", function () {

						it('HeyYo', function () {
							var str = ƒ.String.fromCamelToDash( 'HeyYo' );
							expect( str ).to.be.equal( 'hey-yo' );
						});

					});

					describe( ".fromCamelToSpaced", function () {

						it('HeyYo', function () {
							var str = ƒ.String.fromCamelToSpaced( 'HeyYo' );
							expect( str ).to.be.equal( 'Hey Yo' );
						});

					});

				});

				describe('from underscore_case to ...', function () {

					describe( ".fromUnderscoreToCamel", function () {

						it('hey_yo', function () {
							var str = ƒ.String.fromUnderscoreToCamel( 'hey_yo' );
							expect( str ).to.be.equal( 'HeyYo' );
						});

					});

					describe( ".fromUnderscoreToDash", function () {

						it('hey_yo', function () {
							var str = ƒ.String.fromUnderscoreToDash( 'hey_yo' );
							expect( str ).to.be.equal( 'hey-yo' );
						});

					});

					describe( ".fromUnderscoreToSpaced", function () {

						it('hey_yo', function () {
							var str = ƒ.String.fromUnderscoreToSpaced( 'hey_yo' );
							expect( str ).to.be.equal( 'Hey Yo' );
						});

					});

				});

				describe('from dash-case to ...', function () {

					describe( ".fromDashToCamel", function () {

						it('hey-yo', function () {
							var str = ƒ.String.fromDashToCamel( 'hey-yo' );
							expect( str ).to.be.equal( 'HeyYo' );
						});

					});

					describe( ".fromDashToUnderscore", function () {

						it('hey-yo', function () {
							var str = ƒ.String.fromDashToUnderscore( 'hey-yo' );
							expect( str ).to.be.equal( 'hey_yo' );
						});

					});

					describe( ".fromDashToSpaced", function () {

						it('hey-yo', function () {
							var str = ƒ.String.fromDashToSpaced( 'hey-yo' );
							expect( str ).to.be.equal( 'Hey Yo' );
						});

					});

				});

			});

		});

	});

});
