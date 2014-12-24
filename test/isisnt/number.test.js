var ƒ = require('../../index'),

sinon = require('sinon'),
chai = require('chai'),
expect = chai.expect;

describe( "ƒ", function () {

    describe( "is-isnt", function () {

        describe( "number", function () {

            it( 'Number', function () {
                expect( ƒ.is.number( 123 ) ).to.be.ok
                expect( ƒ.isnt.number( 123 ) ).to.not.be.ok
            });

            it( 'NaN', function () {
                expect( ƒ.is.number( NaN ) ).to.not.be.ok
                expect( ƒ.isnt.number( NaN ) ).to.be.ok
            });

            it( 'Object', function () {
                expect( ƒ.is.number( {} ) ).to.not.be.ok
                expect( ƒ.isnt.number( {} ) ).to.be.ok
            });

        });

    });

});
