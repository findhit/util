findhit-util
============

general propose utils for javascript, to score on top of underscore!

Used on multiple libraries, no one want to reinvent the wheel everytime we need it.

## Instalation

```bash
npm install findhit/findhit-util --save
```

## Usage

```js

var Util = require('findhit-util');

```

### Core
```

var id = Util.uniqId();

Util.forEach( obj, function ( key ) {
	// ...
});

Util.map( obj, function ( key ) {
	// return ...
});

```

### Is / Isn't

```js

// Fast variable checks

if( Util.is.function( callback ) ) {
	// ...
}

if( Util.isnt.function( callback ) ) {
	// throw new Error
}

/*

	We also support other checks like:

	- Util.is.array
	- Util.is.object
	- Util.is.error
	- Util.is.string
	- Util.is.number // Util.is.numeric

*/

```

### From

```js

// Parse from a variable type to the most probably type

var obj = Util.from.String( '{"foo":"bar"}' ); // returns (object) { foo: 'bar' }

var bool = Util.from.String( 'true' ); // returns (bool) true

```

### To

```js

// Convert to a variable to a specific type

var json = Util.to.String( { foo: 'bar' } ); // returns (string) '{"foo":"bar"}'


```
test
test
