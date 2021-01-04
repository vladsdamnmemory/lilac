# lilac

Powerful library for dealing with Arrays and Strings.

Call `lilac()` which is doing all the things you don't wanna spend your time on.

```javascript
import lilac from "@lilac"

/**
 * Lilac v. 1
 * Author vladsdamnmemory
 * */

lilac([78, 13, 6, 0, 45, [34, 55, 1, [4, 18], 6]])
    .flatten() // Make array flat so it contains no sub arrays 
    .sortNumArray() // Sort it fast
    .return(); // Return the result

// output -> [0, 1, 4, 6, 6, 13, 18, 34, 45, 55, 78]


```

## Installation

Installation via `npm` will be added later

## Documentation

### Flatten

Creates a new array with same values and makes it flat no matter the depth, so it contains no sub arrays. Use `flatten()`.

```javascript
lilac([78, 13, 6, 0, 45, [34, 55, 1, [4, 18], 6]])
    .flatten()
    .return();

// output -> [78, 13, 6, 0, 45, 34, 55, 1, 4, 18, 6]
```

### LimitWordsUntil

Cut off the extras of strings saving whole words with `limitWordsUntil()`.

* limitWordsUntil() truncates a string to a given length saving whole words;
* @param length A value which defines the max string length;
* Truncates to first whole word if the @param length is less than the first word length;
* Does not change the string if @param length is more than the original string length.

```javascript
lilac("Execute lilac() without any parameters to clear the cache")
    .limitWordsUntil(12)
    .return();

// output -> "Execute"
```

### SortNumArray

Sort a numeric array in ascending or descending order at place. Method uses
`parseFloat()` beneath, so each value in the array will be converted to a number.

* Does not return new created array but sorts everything at place with bubble method;
* @param toLargerNumber A value which defines the sorting sequence. Default - true;
* @param accepts true/false.

```javascript
lilac([6, 3, 9, '5', 35])
    .flatten()
    .sortNumArray()
    .return();

// output -> "Execute"
```
