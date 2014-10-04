var Util = require('../../index'),

    sinon = require('sinon'),
    chai = require('chai'),
    expect = chai.expect;

describe( "Util", function () {

    describe( "RegExp", function () {

        describe( "build", function () {

            describe( "alphanumeric", function () {
                before(function () {
                    this.regexp = Util.RegExp.builder( [ 'alpha', 'numeric' ] );
                });

                it( "matching", function () {
                    expect( "dsgiuysg7ysgdiustd87werkjhgqwer23512" ).to.match( this.regexp );
                });
                it( "non-matching", function () {
                    expect( "dsgi uysg7ysgdiu std87werk jhg/qwer23512" ).to.not.match( this.regexp );
                });
            });

            describe( "spaced alphanumeric", function () {
                before(function () {
                    this.regexp = Util.RegExp.builder( [ 'alpha', 'numeric', 'spaced' ] );
                });

                it( "matching", function () {
                    expect( "dsgiuy sg7ysgdius td87we rkjhgq wer2 3512" ).to.match( this.regexp );
                });
                it( "non-matching", function () {
                    expect( "dsgi uysg7ysgdiu std87werk jhg/qwer23512" ).to.not.match( this.regexp );
                });
            });

        });

        describe( "test", function () {

            it( "matching", function () {
                var res = Util.RegExp.test( "dsgiuysg7ysgdiustd87werkjhgqwer23512", [ 'alpha', 'numeric' ] );
                expect( res ).to.be.ok;
            });

            it( "non-matching", function () {
                var res = Util.RegExp.test( "dsgiu ysg7ysgdiustd8 7werkjhgqw er23512", [ 'alpha', 'numeric' ] );
                expect( res ).to.not.be.ok;
            });

        });

        describe( "match", function () {

            it( "matching", function () {
                var res = Util.RegExp.match( "dsgiuysg7ysgdiustd87werkjhgqwer23512", [ 'alpha', 'numeric' ] );
                expect( res ).to.be.ok;
            });

            it( "non-matching", function () {
                var res = Util.RegExp.match( "dsgiu ysg7ysgdiustd8 7werkjhgqw er23512", [ 'alpha', 'numeric' ] );
                expect( res ).to.not.be.ok;
            });

        });

        describe( "querifier", function () {

            before(function () {
                this.names = [
                    'João Alto',
                    'José Pereira',
                    'José Moreira',
                    'Teresa Morais',
                    'Bruno Casanova',
                    'Alvaro Pontes',
                    'Alvaro Lopes Pontes',
                    'António Alves',
                    'Bita Pontes',
                    'Gabriel Conceição',
                    'Fernando Neto'
                ];
            });

            it( "check 'jose' matches we have on our names array", function () {

                var regexp = Util.RegExp.querify( 'jose' ),
                    results = Util.RegExp.filter( regexp, this.names );

                expect( results ).to.deep.equal([
                    'José Pereira',
                    'José Moreira',
                ]);

            });

            it( "check 'al' matches we have on our names array", function () {

                var regexp = Util.RegExp.querify( 'al' ),
                    results = Util.RegExp.filter( regexp, this.names );

                expect( results ).to.deep.equal([
                    'João Alto',
                    'Alvaro Pontes',
                    'Alvaro Lopes Pontes',
                    'António Alves',
                ]);

            });

            it( "check 'asa uno' matches we have on our names array", function () {

                var regexp = Util.RegExp.querify( 'asa uno' ),
                    results = Util.RegExp.filter( regexp, this.names );

                expect( results ).to.deep.equal([
                    'Bruno Casanova',
                ]);

            });

        });

    });

});
