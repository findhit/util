var Util = require('../../index'),

	sinon = require('sinon'),
	chai = require('chai'),
	expect = chai.expect;

describe( "Util", function () {

	describe( "type", function () {

		describe( "string", function () {

			describe( ".trim", function () {

				it( "should trim tabs", function () {
					expect( Util.String.trim( "			123		" ) ).to.have.length( 3 );
					expect( Util.String.trim( "			1 2 3		" ) ).to.have.length( 5 );
				});

				it( "should trim spaces", function () {
					expect( Util.String.trim( "       123         " ) ).to.have.length( 3 );
					expect( Util.String.trim( "       1 2 3         " ) ).to.have.length( 5 );
				});

				it( "should trim tabs and spaces", function () {
					expect( Util.String.trim( "   		    123         " ) ).to.have.length( 3 );
					expect( Util.String.trim( "  	     1 2 3    	  	   " ) ).to.have.length( 5 );
				});

			});

			describe( ".splitWords", function () {

				it( "should split the simplest phrase", function () {
					expect( Util.String.splitWords( "one two three" ) ).to.have.length( 3 );
				});

				it( "should ignore commas", function () {
					expect( Util.String.splitWords( "one , two , three" ) ).to.have.length( 3 );
					expect( Util.String.splitWords( "one, two, three" ) ).to.have.length( 3 );
					expect( Util.String.splitWords( "one ,two ,three" ) ).to.have.length( 3 );
					expect( Util.String.splitWords( "one,two,three" ) ).to.have.length( 3 );
				});

				it( "should split the akwardest phrase", function () {
					expect( Util.String.splitWords( "  	 Word1 		another-fake		Other  	" ) ).to.have.length( 3 );
				});

			});

			describe( ".capitalize", function () {

				it( "should capitalize the string", function () {
					var str = Util.String.capitalize( 'heyyo' );
					expect( str ).to.equal( 'Heyyo' );
				});
			});

			describe( ".decapitalize", function () {

				it( "should decapitalize the string", function () {
					var str = Util.String.decapitalize( 'Heyyo' );
					expect( str ).to.equal( 'heyyo' );
				});
			});

			describe( "Case conversions", function () {

				describe('from CamelCase to ...', function () {

					describe( ".fromCamelToUnderscore", function () {

						it('HeyYo', function () {
							var str = Util.String.fromCamelToUnderscore( 'HeyYo' );
							expect( str ).to.be.equal( 'hey_yo' );
						});

					});

					describe( ".fromCamelToDash", function () {	

						it('HeyYo', function () {
							var str = Util.String.fromCamelToDash( 'HeyYo' );
							expect( str ).to.be.equal( 'hey-yo' );
						});

					});

					describe( ".fromCamelToSpaced", function () {	

						it('HeyYo', function () {
							var str = Util.String.fromCamelToSpaced( 'HeyYo' );
							expect( str ).to.be.equal( 'Hey Yo' );
						});

					});

				});

				describe('from underscore_case to ...', function () {

					describe( ".fromUnderscoreToCamel", function () {

						it('hey_yo', function () {
							var str = Util.String.fromUnderscoreToCamel( 'hey_yo' );
							expect( str ).to.be.equal( 'HeyYo' );
						});

					});

					describe( ".fromUnderscoreToDash", function () {	

						it('hey_yo', function () {
							var str = Util.String.fromUnderscoreToDash( 'hey_yo' );
							expect( str ).to.be.equal( 'hey-yo' );
						});

					});

					describe( ".fromUnderscoreToSpaced", function () {	

						it('hey_yo', function () {
							var str = Util.String.fromUnderscoreToSpaced( 'hey_yo' );
							expect( str ).to.be.equal( 'Hey Yo' );
						});

					});

				});

				describe('from dash-case to ...', function () {

					describe( ".fromDashToCamel", function () {

						it('hey-yo', function () {
							var str = Util.String.fromDashToCamel( 'hey-yo' );
							expect( str ).to.be.equal( 'HeyYo' );
						});

					});

					describe( ".fromDashToUnderscore", function () {	

						it('hey-yo', function () {
							var str = Util.String.fromDashToUnderscore( 'hey-yo' );
							expect( str ).to.be.equal( 'hey_yo' );
						});

					});

					describe( ".fromDashToSpaced", function () {	

						it('hey-yo', function () {
							var str = Util.String.fromDashToSpaced( 'hey-yo' );
							expect( str ).to.be.equal( 'Hey Yo' );
						});

					});

				});

			});

		});

	});

});