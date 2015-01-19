var ƒ = require('../../../index'),

    sinon = require('sinon'),
    chai = require('chai'),
    expect = chai.expect;

describe( "ƒ", function () {

    describe( "RegExp", function () {

        describe( "snippets", function () {

            describe( "email", function () {

                it( "should work with a basic email", function () {
                    var res = ƒ.RegExp.test( 'example@example.com', 'email', {
                            entire: true,
                            encapsulate: false,
                        });

                    expect( res ).to.be.ok;
                });

                it( "shouldn't allow spaces before email when entire", function () {
                    var res = ƒ.RegExp.test( ' example@example.com', 'email', {
                        entire: true,
                        encapsulate: false,
                    });

                    expect( res ).to.not.be.ok;
                });

                it( "shouldn't allow spaces after email when entire", function () {
                    var res = ƒ.RegExp.test( 'example@example.com ', 'email', {
                        entire: true,
                        encapsulate: false,
                    });

                    expect( res ).to.not.be.ok;
                });

                it( "shouldn't allow spaces before and after email when entire", function () {
                    var res = ƒ.RegExp.test( ' example@example.com ', 'email', {
                        entire: true,
                        encapsulate: false,
                    });

                    expect( res ).to.not.be.ok;
                });

            });

            describe( "subject_email", function () {

                it( "should work with a basic email", function () {
                    var res = ƒ.RegExp.test( 'José Moreira <example@example.com>', 'subject_email', {
                        entire: true,
                        encapsulate: false,
                    });

                    expect( res ).to.be.ok;
                });

                it( "shouldn't allow spaces before email when entire", function () {
                    var res = ƒ.RegExp.test( ' José Moreira <example@example.com>', 'subject_email', {
                        entire: true,
                        encapsulate: false,
                    });

                    expect( res ).to.not.be.ok;
                });

                it( "shouldn't allow spaces after email when entire", function () {
                    var res = ƒ.RegExp.test( 'José Moreira <example@example.com> ', 'subject_email', {
                        entire: true,
                        encapsulate: false,
                    });

                    expect( res ).to.not.be.ok;
                });

                it( "shouldn't allow spaces before and after email when entire", function () {
                    var res = ƒ.RegExp.test( ' José Moreira <example@example.com> ', 'subject_email', {
                        entire: true,
                        encapsulate: false,
                    });

                    expect( res ).to.not.be.ok;
                });

                it( "shouldn't select if only an email is provided", function () {
                    var res = ƒ.RegExp.test( 'example@example.com', 'subject_email', {
                        entire: true,
                        encapsulate: false,
                    });

                    expect( res ).to.not.be.ok;
                });

                it( "shouldn't select if only an email between lower and greater is provided", function () {
                    var res = ƒ.RegExp.test( '<example@example.com>', 'subject_email', {
                        entire: true,
                        encapsulate: false,
                    });

                    expect( res ).to.not.be.ok;
                });

            });

        });

    });

});
