var ƒ = require('../../index'),

	sinon = require('sinon'),
	chai = require('chai'),
	expect = chai.expect;

describe( "ƒ", function () {

	describe( "type", function () {

		describe( "object", function () {

			describe( "map", function () {

				it( "get keys of objects (PoC for objects)", function () {
					var t, a = { // Social networks
							findhit: '1',
							facebook: '2',
							instagram: '3',
							snapchat: '4',
							twitter: '5'
						};

					t = ƒ.map( a, function ( v, k ) { return k });

					expect( t ).to.deep.equal({
						findhit: 'findhit',
						facebook: 'facebook',
						instagram: 'instagram',
						snapchat: 'snapchat',
						twitter: 'twitter'
					});
				});

			});

		});

	});

});
