# lilac

Powerful javascript library for dealing with Arrays and Strings.

Call `lilac()` which is doing all the things you don't want to spend your time on.

```javascript
import lilac from "@lilac"

/**
 * lilac v. 1
 * author vladsdamnmemory
 * */

lilac([78, 13, 6, 0, 45, [34, 55, 1, [4, 18], 6]])
    .flatten() // Make array flat so it contains no sub arrays 
    .sortNumArray() // Sort it fast
    .return(); // Return the result

// output -> [0, 1, 4, 6, 6, 13, 18, 34, 45, 55, 78]


```

## Installation

Installation via `npm` will be added later

## Supplementary

Lilac is being written on ES6. If you need to support old browsers versions you should use javascript compiler after all
such as [babel.js](https://babeljs.io)

## Documentation

### `lilac()`

The main function. Invoke `lilac()` passing the parameter you need to transform.

* Clears the local cache when used without a parameter (important if memory cleaning is needed);
* `lilac()` returns the inner object which allows to chain its methods and continue working with an output value.

___

#### `.flatten()`

Creates a new array with same values and makes it flat no matter the depth, so it contains no sub arrays.
Use `flatten()`.

```javascript
lilac([78, 13, 6, 0, 45, [34, 55, 1, [4, 18], 6]])
    .flatten()
    .return();

// output -> [78, 13, 6, 0, 45, 34, 55, 1, 4, 18, 6]
```

___

#### `.limitWordsUntil()`

Cut off the extra of a string saving words that are left whole. Use `limitWordsUntil()`.

* Truncates a string to a given length saving whole words;
* @param length A value which defines the max string length;
* Truncates to first whole word if the @param length is less than the first word length;
* Does not change the string if @param length is more than the original string length.

```javascript
lilac("Execute lilac() without any parameters to clear the cache")
    .limitWordsUntil(12)
    .return();

// output -> "Execute"
```

___

#### `.return()`

Simply returns the value after all chained methods used before. Returns the same value if no chained methods were used
after `lilac()` call.

```javascript
lilac("This string will not have been changed anyhow in this case. There was no methods used.")
    .return();

// output -> "This string will not have been changed anyhow in this case. There was no methods used."
```

___

#### `.sortNumArray()`

Sort a numeric array in ascending or descending order at place. Method uses
`parseFloat()` beneath, so each value in the array will be converted to a number.

* Does not return new created array but sorts everything at place with bubble method;
* @param toLargerNumber A value which defines the sorting sequence. Default - true;
* @param toLargerNumber may be true/false.

```javascript
lilac([6, 3, 9, '5', 35])
    .sortNumArray()
    .return();

// output -> [ 3, 5, 6, 9, 35 ]
```
