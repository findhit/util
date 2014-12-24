var ƒ = require('../index'),

	sinon = require('sinon'),
	chai = require('chai'),
	expect = chai.expect;

describe( "ƒ", function () {

	describe( "is-isnt", function () {

		describe( "function", function () {

			it( "is", function () {

				expect( ƒ.is.function( function () {} ) ).to.be.ok
				expect( ƒ.is.function( {} ) ).to.not.be.ok

			});

			it( "isn't", function () {

				expect( ƒ.isnt.function( function () {} ) ).to.not.be.ok
				expect( ƒ.isnt.function( {} ) ).to.be.ok

			});

		});

		describe( "array", function () {

			it( "is", function () {

				expect( ƒ.is.array( [] ) ).to.be.ok
				expect( ƒ.is.array( {} ) ).to.not.be.ok

			});

			it( "isn't", function () {

				expect( ƒ.isnt.array( [] ) ).to.not.be.ok
				expect( ƒ.isnt.array( {} ) ).to.be.ok

			});

		});

		describe( "object", function () {

			it( "is", function () {

				expect( ƒ.is.object( {} ) ).to.be.ok
				expect( ƒ.is.object( [] ) ).to.not.be.ok
				expect( ƒ.is.object( 'ola' ) ).to.not.be.ok

			});

			it( "isn't", function () {

				expect( ƒ.isnt.object( {} ) ).to.not.be.ok
				expect( ƒ.isnt.object( [] ) ).to.be.ok
				expect( ƒ.isnt.object( 'ola' ) ).to.be.ok

			});

		});

		describe( "string", function () {

			it( "is", function () {

				expect( ƒ.is.string( 'hello world' ) ).to.be.ok
				expect( ƒ.is.string( {} ) ).to.not.be.ok

			});

			it( "isn't", function () {

				expect( ƒ.isnt.string( 'hello world' ) ).to.not.be.ok
				expect( ƒ.isnt.string( {} ) ).to.be.ok

			});

		});

		describe( "error", function () {

			it( "is", function () {

				expect( ƒ.is.error( new Error('yoyoyo') ) ).to.be.ok
				expect( ƒ.is.error( {} ) ).to.not.be.ok

			});

			it( "isn't", function () {

				expect( ƒ.isnt.error( new Error('yeyeye') ) ).to.not.be.ok
				expect( ƒ.isnt.error( {} ) ).to.be.ok

			});

		});

		describe( "RegExp", function () {

			it( "is", function () {

				expect( ƒ.is.RegExp( /^hello$/i ) ).to.be.ok
				expect( ƒ.is.RegExp( {} ) ).to.not.be.ok

			});

			it( "isn't", function () {

				expect( ƒ.isnt.RegExp( /^hello$/i ) ).to.not.be.ok
				expect( ƒ.isnt.RegExp( {} ) ).to.be.ok

			});

		});

		describe( "undefined", function () {

			it( "is", function () {

				expect( ƒ.is.undefined( undefined ) ).to.be.ok
				expect( ƒ.is.undefined( {} ) ).to.not.be.ok

			});

			it( "isn't", function () {

				expect( ƒ.isnt.undefined( undefined ) ).to.not.be.ok
				expect( ƒ.isnt.undefined( {} ) ).to.be.ok

			});

		});

		describe( "true", function () {

			it( "is", function () {

				expect( ƒ.is.true( true ) ).to.be.ok
				expect( ƒ.is.true( {} ) ).to.not.be.ok

			});

			it( "isn't", function () {

				expect( ƒ.isnt.true( true ) ).to.not.be.ok
				expect( ƒ.isnt.true( {} ) ).to.be.ok

			});

		});

		describe( "false", function () {

			it( "is", function () {

				expect( ƒ.is.false( false ) ).to.be.ok
				expect( ƒ.is.false( {} ) ).to.not.be.ok

			});

			it( "isn't", function () {

				expect( ƒ.isnt.false( false ) ).to.not.be.ok
				expect( ƒ.isnt.false( {} ) ).to.be.ok

			});

		});

		describe( "null", function () {

			it( "is", function () {

				expect( ƒ.is.null( null ) ).to.be.ok
				expect( ƒ.is.null( {} ) ).to.not.be.ok

			});

			it( "isn't", function () {

				expect( ƒ.isnt.null( null ) ).to.not.be.ok
				expect( ƒ.isnt.null( {} ) ).to.be.ok

			});

		});

		describe( "json", function () {

			it( "is", function () {

				var json = JSON.stringify(["JSON Test Pattern pass1", {"object with 1 member":["array with 1 element"]}, {}, [], -42, true, false, null, {"integer": 1234567890, "real": -9876.543210, "e": 0.123456789e-12, "E": 1.234567890E+34, "":  23456789012E66, "zero": 0, "one": 1, "space": " ", "quote": "\"", "backslash": "\\", "controls": "\b\f\n\r\t", "slash": "/ & \/", "alpha": "abcdefghijklmnopqrstuvwyz", "ALPHA": "ABCDEFGHIJKLMNOPQRSTUVWYZ", "digit": "0123456789", "0123456789": "digit", "special": "`1~!@#$%^&*()_+-={':[,]}|;.</>?", "hex": "\u0123\u4567\u89AB\uCDEF\uabcd\uef4A", "true": true, "false": false, "null": null, "array":[  ], "object":{  }, "address": "50 St. James Street", "url": "http://www.JSON.org/", "comment": "// /* <!-- --", "# -- --> */": " ", " s p a c e d " :[1,2 , 3 , 4 , 5        ,          6           ,7        ],"compact":[1,2,3,4,5,6,7], "jsontext": "{\"object with 1 member\":[\"array with 1 element\"]}", "quotes": "&#34; \u0022 %22 0x22 034 &#x22;", "\/\\\"\uCAFE\uBABE\uAB98\uFCDE\ubcda\uef4A\b\f\n\r\t`1~!@#$%^&*()_+-=[]{}|;:',./<>?": "A key can be any string"}, 0.5 ,98.6 , 99.44 , 1066, 1e1, 0.1e1, 1e-1, 1e00,2e+00,2e-00 ,"rosebud"]),
					notJson = '{ "employees" [' + '{ "firstName":"John" , "lastName":"Doe" },' + '{ "firstName":"Anna" , "lastName":"Smith" },' + '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

				expect( ƒ.is.json( json ) ).to.be.ok
				expect( ƒ.is.json( notJson ) ).to.not.be.ok

			});

			it( "isn't", function () {

				var json = JSON.stringify(["JSON Test Pattern pass1", {"object with 1 member":["array with 1 element"]}, {}, [], -42, true, false, null, {"integer": 1234567890, "real": -9876.543210, "e": 0.123456789e-12, "E": 1.234567890E+34, "":  23456789012E66, "zero": 0, "one": 1, "space": " ", "quote": "\"", "backslash": "\\", "controls": "\b\f\n\r\t", "slash": "/ & \/", "alpha": "abcdefghijklmnopqrstuvwyz", "ALPHA": "ABCDEFGHIJKLMNOPQRSTUVWYZ", "digit": "0123456789", "0123456789": "digit", "special": "`1~!@#$%^&*()_+-={':[,]}|;.</>?", "hex": "\u0123\u4567\u89AB\uCDEF\uabcd\uef4A", "true": true, "false": false, "null": null, "array":[  ], "object":{  }, "address": "50 St. James Street", "url": "http://www.JSON.org/", "comment": "// /* <!-- --", "# -- --> */": " ", " s p a c e d " :[1,2 , 3 , 4 , 5        ,          6           ,7        ],"compact":[1,2,3,4,5,6,7], "jsontext": "{\"object with 1 member\":[\"array with 1 element\"]}", "quotes": "&#34; \u0022 %22 0x22 034 &#x22;", "\/\\\"\uCAFE\uBABE\uAB98\uFCDE\ubcda\uef4A\b\f\n\r\t`1~!@#$%^&*()_+-=[]{}|;:',./<>?": "A key can be any string"}, 0.5 ,98.6 , 99.44 , 1066, 1e1, 0.1e1, 1e-1, 1e00,2e+00,2e-00 ,"rosebud"]),
					notJson = '{ "employees" [' + '{ "firstName":"John" , "lastName":"Doe" },' + '{ "firstName":"Anna" , "lastName":"Smith" },' + '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

				expect( ƒ.isnt.json( notJson ) ).to.be.ok
				expect( ƒ.isnt.json( json ) ).to.not.be.ok

			});

		});


	});

});
