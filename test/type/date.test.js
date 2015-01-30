var ƒ = require('../../index'),

    sinon = require('sinon'),
    chai = require('chai'),
    expect = chai.expect;

describe( "ƒ", function () {

    describe( "date", function () {

        describe( "format", function () {

            it( "formats new Date(2013,0,1) (1st January 2013) into 'Y/m/d'", function () {
                var currentDate = new Date(2013,0,1);

                expect(
                    ƒ.date.format( currentDate, 'Y/m/d' )
                ).to.be.equal( '2013/01/01' );

            });

            it( "formats new Date(2013,0,1) (1st January 2013) into 'd-m-Y'", function () {
                var currentDate = new Date(2013,0,1);

                expect(
                    ƒ.date.format( currentDate, 'd-m-Y' )
                ).to.be.equal( '01-01-2013' );

            });

        });

    });

});
