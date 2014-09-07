findhit-util
============

Util is a library of daily-needed utils for javascript developers.

Used on our own libraries, and maybe on yours, no one wants to reinvent the wheel everytime they need it.

## Instalation

```bash
npm install findhit-util --save
```

## Usage

```js

var Util = require('findhit-util');

// Everyday use
	
	Util.uniqId()
	Util.uuid()

	Util.extend()
	Util.clone()
	Util.each() <- Util.forEach()
	Util.map()
	Util.filter()
	Util.slice()
	Util.splice()

	Util.log() // same as console.log()

// IsIsnt - Type validation

	// Is

		Util.is.instanceof( Promise, variable );

		// Default registered Classes

		Util.is.Function( variable );
		Util.is.Object( variable );
		Util.is.Array( variable );
		Util.is.String( variable );
		Util.is.Error( variable );
		Util.is.Number( variable );

	// Isnt

		Util.isnt.instanceof( Promise, promise );

		// Default registered Classes

		Util.isnt.Function( variable );
		Util.isnt.Object( variable );
		Util.isnt.Array( variable );
		Util.isnt.String( variable );
		Util.isnt.Error( variable );
		Util.isnt.Number( variable );

	// Custom registers
	// This is great, not just to use on your app, but to be used also by who uses your app

		// We use on `findhit-promise` this lib, and we have registered it on IsIsnt like this:
		Util.isisnt.register( Promise, [ 'Promise', 'promise' ] );

		// Now, if someone uses `findhit-promise` and also `findhit-util` can check without
		// having to register it again!! :)

		Util.is.Promise( myAwesomePromiseInstance )

		// We have added also a custom register that accepts one or two functions for evaluation

			// Util.isisnt.registerCustom( keys, isFn, [ isntFn ] );

			// You could bind it to one key
			Util.isisnt.registerCustom( 'even', function ( variable ) {
				return Util.is.Number( variable ) && num % 2;
			});

			// or bind it to multiple
			Util.isisnt.registerCustom( [ 'Odd', 'odd' ], function ( variable ) {
				return Util.is.Number( variable ) && ! num % 2;
			});

				// This would make available:
				Util.is.even( 2 ) // true
				Util.isnt.even( 2 ) // false
				Util.is.even( 3 ) // false
				Util.isnt.even( 3 ) // true

				Util.is.odd( 2 ) // false
				Util.isnt.odd( 2 ) // true
				Util.is.Odd( 3 ) // true
				Util.isnt.Odd( 3 ) // false

			// if isnt evaluation is different than is, you could supply isnt function
			Util.isisnt.registerCustom(
				'coolest',
				function ( variable ) {
					return variable === 'cuss';
				},
				function ( variable ) {
					return variable === 'cuss' ? 'how do you dare?' : false; // should return bool, this is just for POC
				}
			);

// By Type

	// String utils
		// Util.string OR Util.String

		// is / isnt binds
		Util.String.is( variable )
		Util.String.isnt( variable )

		Util.String.trim( variable )
		Util.String.splitWords( variable )

	// Function utils
		// Util.function OR Util.Function

		// is / isnt binds
		Util.Function.is( variable )
		Util.Function.isnt( variable )

		// Analysis
		Util.Function.debug( 'hello', 'petit', 'de', 'moiselle' ) // logs all arguments into console.log;

		// Return returners
		Util.Function.return( value ) // Returns a function that returns the value on each execution

		Util.Function.falsify() // false
		Util.Function.truthify() // true
		Util.Function.nullify() // null
		Util.Function.undefinify() // undefined

		// get function parameter names
		Util.Function.getParamNames('function ( a, b, c )') // [ 'a', 'b', 'c' ]
		Util.Function.getParamNames( function ( a, b, c ) {}) // [ 'a', 'b', 'c' ]
		Util.Function.getParamNames('function ( a, /* b, */ c )') // [ 'a', 'c' ]
		Util.Function.getParamNames( function ( a, /* b, */ c ) {}) // [ 'a', 'c' ]

```
