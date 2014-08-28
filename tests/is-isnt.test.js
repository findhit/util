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
				expect( Util.is.object( 'ola' ) ).to.not.be.ok

			});

			it( "isn't", function () {

				expect( Util.isnt.object( {} ) ).to.not.be.ok
				expect( Util.isnt.object( 'ola' ) ).to.be.ok

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
	});

});