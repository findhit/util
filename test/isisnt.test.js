var Util = require('../index'),

	sinon = require('sinon'),
	chai = require('chai'),
	expect = chai.expect;

describe( "Util", function () {

	describe( "is-isnt", function () {

		describe( "function", function () {

			it( "is", function () {

				expect( Util.is.function( function () {} ) ).to.be.ok
				expect( Util.is.function( {} ) ).to.not.be.ok

			});

			it( "isn't", function () {

				expect( Util.isnt.function( function () {} ) ).to.not.be.ok
				expect( Util.isnt.function( {} ) ).to.be.ok

			});

		});

		describe( "array", function () {

			it( "is", function () {

				expect( Util.is.array( [] ) ).to.be.ok
				expect( Util.is.array( {} ) ).to.not.be.ok

			});

			it( "isn't", function () {

				expect( Util.isnt.array( [] ) ).to.not.be.ok
				expect( Util.isnt.array( {} ) ).to.be.ok

			});

		});

		describe( "object", function () {

			it( "is", function () {

				expect( Util.is.object( {} ) ).to.be.ok
				expect( Util.is.object( [] ) ).to.not.be.ok
				expect( Util.is.object( 'ola' ) ).to.not.be.ok

			});

			it( "isn't", function () {

				expect( Util.isnt.object( {} ) ).to.not.be.ok
				expect( Util.isnt.object( [] ) ).to.be.ok
				expect( Util.isnt.object( 'ola' ) ).to.be.ok

			});

		});

		describe( "string", function () {

			it( "is", function () {

				expect( Util.is.string( 'hello world' ) ).to.be.ok
				expect( Util.is.string( {} ) ).to.not.be.ok

			});

			it( "isn't", function () {

				expect( Util.isnt.string( 'hello world' ) ).to.not.be.ok
				expect( Util.isnt.string( {} ) ).to.be.ok

			});

		});

		describe( "error", function () {

			it( "is", function () {

				expect( Util.is.error( new Error('yoyoyo') ) ).to.be.ok
				expect( Util.is.error( {} ) ).to.not.be.ok

			});

			it( "isn't", function () {

				expect( Util.isnt.error( new Error('yeyeye') ) ).to.not.be.ok
				expect( Util.isnt.error( {} ) ).to.be.ok

			});

		});

		describe( "undefined", function () {

			it( "is", function () {

				expect( Util.is.undefined( undefined ) ).to.be.ok
				expect( Util.is.undefined( {} ) ).to.not.be.ok

			});

			it( "isn't", function () {

				expect( Util.isnt.undefined( undefined ) ).to.not.be.ok
				expect( Util.isnt.undefined( {} ) ).to.be.ok

			});

		});

		describe( "number", function () {

			it( "is", function () {

				expect( Util.is.number( 123 ) ).to.be.ok
				expect( Util.is.number( {} ) ).to.not.be.ok

			});

			it( "isn't", function () {

				expect( Util.isnt.number( 3.14 ) ).to.not.be.ok
				expect( Util.isnt.number( {} ) ).to.be.ok

			});

		});

		describe( "true", function () {

			it( "is", function () {

				expect( Util.is.true( true ) ).to.be.ok
				expect( Util.is.true( {} ) ).to.not.be.ok

			});

			it( "isn't", function () {

				expect( Util.isnt.true( true ) ).to.not.be.ok
				expect( Util.isnt.true( {} ) ).to.be.ok

			});

		});

		describe( "false", function () {

			it( "is", function () {

				expect( Util.is.false( false ) ).to.be.ok
				expect( Util.is.false( {} ) ).to.not.be.ok

			});

			it( "isn't", function () {

				expect( Util.isnt.false( false ) ).to.not.be.ok
				expect( Util.isnt.false( {} ) ).to.be.ok

			});

		});

		describe( "null", function () {

			it( "is", function () {

				expect( Util.is.null( null ) ).to.be.ok
				expect( Util.is.null( {} ) ).to.not.be.ok

			});

			it( "isn't", function () {

				expect( Util.isnt.null( null ) ).to.not.be.ok
				expect( Util.isnt.null( {} ) ).to.be.ok

			});

		});

	});

});