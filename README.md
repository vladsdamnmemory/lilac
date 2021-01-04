# `Lilac`

```# Powerful library for dealing with Arrays and Strings :shipit:```

Call `lilac()` which is doing all the things you don't wanna spend your time on.

```javascript
import lilac from "@lilac"

/**
 * Lilac v. 1
 * Author vladsdamnmemory@outlook.com
 * */

lilac([78, 13, 6, 0, 45, [34, 55, 1, [4, 18], 6]])
    .flatten() // Make array flat so it contains no sub arrays 
    .sortNumArray() // Sort it fast
    .return(); // Return the result

// output -> [0, 1, 4, 6, 6, 13, 18, 34, 45, 55, 78]


```

Cut off the extras of strings saving whole words with `limitWordsUntil()`

```javascript
lilac("Execute lilac() without any parameters to clear the cache")
    .limitWordsUntil(12)
    .return();

// output -> "Execute"
```

## Installation

Installation via `npm` will be added later