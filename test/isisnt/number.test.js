var Util = require('../../index'),

sinon = require('sinon'),
chai = require('chai'),
expect = chai.expect;

describe( "Util", function () {

    describe( "is-isnt", function () {

        describe( "number", function () {

            it( 'Number', function () {
                expect( Util.is.number( 123 ) ).to.be.ok
                expect( Util.isnt.number( 123 ) ).to.not.be.ok
            });

            it( 'NaN', function () {
                expect( Util.is.number( NaN ) ).to.not.be.ok
                expect( Util.isnt.number( NaN ) ).to.be.ok
            });

            it( 'Object', function () {
                expect( Util.is.number( {} ) ).to.not.be.ok
                expect( Util.isnt.number( {} ) ).to.be.ok
            });

        });

    });

});
