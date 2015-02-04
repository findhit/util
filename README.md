# ƒ

[![Test Status](http://strider.findhit.com/findhit/findhit-util/badge)](http://strider.findhit.com/findhit/findhit-util) [![Dependency Status](https://david-dm.org/findhit/findhit-util.svg)](https://david-dm.org/findhit/findhit-util)

ƒ is a library of daily-needed utils for javascript developers.

Used on our own libraries, and maybe on yours, no one wants to reinvent the wheel everytime they need it.

Why ƒ?
------

- Represent mathematical function!
- Was used on older Apple systems to represent a folder.
- **ƒ** is easier to write: (at least at Mac OS)
  - Mac - Alt + Shift + f
  - Windows - Alt + 159
  - Linux - CHANGEME :D

If you don't want to use **ƒ** as variable name, we advise you to use `Util` (capitalized, so you won't have problems in case you use nodejs's `util`)


Instalation
-----------

```bash

	npm install findhit-util --save

```

Usage
-----

```js

var ƒ = require( 'findhit-util' );
// OR
// var Util = require( 'findhit-util' );

// Everyday use

	ƒ.uniqId()
	ƒ.uuid()

	ƒ.extend()
	ƒ.clone()
	ƒ.filter()
	ƒ.slice()
	ƒ.splice()

	// Dynamic methods (that calls inner ones)

		ƒ.each() <- ƒ.forEach()
			* ƒ.Array.each() <- ƒ.Array.forEach()
			* ƒ.Object.each() <- ƒ.Object.forEach()

		ƒ.map()
			* ƒ.Array.map()
			* ƒ.Object.map()

// IsIsnt - Type validation

	// Is

	ƒ.is.instanceof( Promise, variable );

		// Default registered Constructors

		ƒ.is.Function( variable );
		ƒ.is.Object( variable );
		ƒ.is.Array( variable );
		ƒ.is.String( variable );
		ƒ.is.Error( variable );
		ƒ.is.Number( variable );
		ƒ.is.JSON( variable );

		ƒ.is.true( variable );
		ƒ.is.false( variable );
		ƒ.is.undefined( variable );
		ƒ.is.null( variable );


	// Isnt

	ƒ.isnt.instanceof( Promise, promise );

		// Default registered Constructors

		ƒ.isnt.Function( variable );
		ƒ.isnt.Object( variable );
		ƒ.isnt.Array( variable );
		ƒ.isnt.String( variable );
		ƒ.isnt.Error( variable );
		ƒ.isnt.Number( variable );
		ƒ.isnt.JSON( variable );

		ƒ.isnt.true( variable );
		ƒ.isnt.false( variable );
		ƒ.isnt.undefined( variable );
		ƒ.isnt.null( variable );

	// Custom constructor register
	// This is great, not just to use on your app, but to be used also by who uses your app

		// You could easily register your plugin's constructor on ƒ
		// We use this lib on `findhit-promise`, and we have registered it on IsIsnt like this:
		ƒ.isisnt.register( Promise, [ 'Promise', 'promise' ] );

		// Now, if someone uses `findhit-promise` and also `findhit-util` can check without
		// having to register it again!! :)

		ƒ.is.Promise( myAwesomePromiseInstance )

		// We have added also a custom register that accepts one or two functions for evaluation

			// ƒ.isisnt.registerCustom( keys, isFn, [ isntFn ] );

			// You could bind it to one key
			ƒ.isisnt.registerCustom( 'even', function ( variable ) {
				return ƒ.is.Number( variable ) && num % 2;
			});

			// or bind it to multiple
			ƒ.isisnt.registerCustom( [ 'Odd', 'odd' ], function ( variable ) {
				return ƒ.is.Number( variable ) && ! num % 2;
			});

				// This would make available:
				ƒ.is.even( 2 ) // true
				ƒ.isnt.even( 2 ) // false
				ƒ.is.even( 3 ) // false
				ƒ.isnt.even( 3 ) // true

				ƒ.is.odd( 2 ) // false
				ƒ.isnt.odd( 2 ) // true
				ƒ.is.Odd( 3 ) // true
				ƒ.isnt.Odd( 3 ) // false

			// if isnt evaluation is different than is, you could supply isnt function
			ƒ.isisnt.registerCustom(
				'coolest',
				function ( variable ) {
					return variable === 'cuss';
				},
				function ( variable ) {
					return variable === 'cuss' ? 'how do you dare?' : false; // should return bool, this is just for POC
				}
			);

// By Type

	// Array utils
		// ƒ.array OR ƒ.Array

		// is / isnt binds
		ƒ.Array.is( variable )
		ƒ.Array.isnt( variable )

		ƒ.Array.each() <- ƒ.Array.forEach()
		ƒ.Array.map()
		ƒ.Array.empty()

	// String utils
		// ƒ.string OR ƒ.String

		// is / isnt binds
		ƒ.String.is( variable )
		ƒ.String.isnt( variable )

		ƒ.String.trim( variable )
		ƒ.String.splitWords( variable )
		ƒ.String.capitalize( 'heyyo' ) // Heyyo
		ƒ.String.decapitalize( 'Heyyo' ) // heyyo

		// Case conversions

			// from CamelCase to ...
			ƒ.String.fromCamelToUnderscore( 'HeyYo' ) // 'hey_yo'
			ƒ.String.fromCamelToDash( 'HeyYo' ) // 'hey-yo'
			ƒ.String.fromCamelToSpaced( 'HeyYo' ) // 'Hey Yo'

			// from underscore_case to ...
			ƒ.String.fromUnderscoreToCamel( 'hey_yo' ) // 'HeyYo'
			ƒ.String.fromUnderscoreToDash( 'hey_yo' ) // 'hey-yo'
			ƒ.String.fromUnderscoreToSpaced( 'hey_yo' ) // 'Hey Yo'

			// from dash-case to ...
			ƒ.String.fromDashToCamel( 'hey-yo' ) // 'HeyYo'
			ƒ.String.fromDashToUnderscore( 'hey-yo' ) // 'hey_yo'
			ƒ.String.fromDashToSpaced( 'hey-yo' ) // 'Hey Yo'

	// Function utils
		// ƒ.function OR ƒ.Function

		// is / isnt binds
		ƒ.Function.is( variable )
		ƒ.Function.isnt( variable )

		// Analysis
		ƒ.Function.debug( 'hello', 'petit', 'de', 'moiselle' ) // logs all arguments into console.log;

		// Return returners
		ƒ.Function.return( value ) // Returns a function that returns the value on each execution

		ƒ.Function.falsify() // false
		ƒ.Function.truthify() // true
		ƒ.Function.nullify() // null
		ƒ.Function.undefinify() // undefined

		// get function parameter names
		ƒ.Function.getParamNames('function ( a, b, c )') // [ 'a', 'b', 'c' ]
		ƒ.Function.getParamNames( function ( a, b, c ) {}) // [ 'a', 'b', 'c' ]
		ƒ.Function.getParamNames('function ( a, /* b, */ c )') // [ 'a', 'c' ]
		ƒ.Function.getParamNames( function ( a, /* b, */ c ) {}) // [ 'a', 'c' ]

	// Object utils
		// ƒ.object OR ƒ.Object

		// is / isnt binds
		ƒ.Object.is( variable )
		ƒ.Object.isnt( variable )

		ƒ.Object.each() <- ƒ.Object.forEach()
		ƒ.Object.map()

	// RegExp utils
		// ƒ.RegExp OR ƒ.regexp OR ƒ.Regexp

		ƒ.RegExp.builder( [ 'alpha', 'numeric', 'spaced' ]) // Return a regex to match alphanumeric-spaced strings

		ƒ.RegExp.test( 'as876asdf6 sdf as69876', [ 'alpha', 'numeric', 'spaced' ]) // true
		ƒ.RegExp.test( 'as876asdf###df as69876', [ 'alpha', 'numeric', 'spaced' ]) // false

		ƒ.RegExp.match( 'as876asdf6 sdf as69876', [ 'alpha', 'numeric', 'spaced' ]) // Array with matches
		ƒ.RegExp.match( 'as876asdf###df as69876', [ 'alpha', 'numeric', 'spaced' ]) // false

		// Now, the most exciting thing arround RegExp, the querifier!!
		// Imagine that you need, on a clever way to filter strings
		// Here is the solution: ƒ.RegExp.querifier()

		var regexp = ƒ.RegExp.querifier( 'john doe' ); // magical regexp

		ƒ.RegExp.filter( regexp, [
			'José Moreira',
			'John Something Doe',
			'João Alto',
		]); // [ 'John Something Doe' ]

```
