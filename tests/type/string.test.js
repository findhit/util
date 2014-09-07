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
				});

				it( "should split the akwardest phrase", function () {
					expect( Util.String.splitWords( "  	 Word1 		another-fake		Other  	" ) ).to.have.length( 3 );
				});

			});

		});

	});

});