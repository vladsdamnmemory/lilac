<p align="center">
 <img width="340" src="https://www.dropbox.com/s/zptl84ljv3wh4yc/lilac_small.png?raw=1" alt="logo">
</p>

# node-lilac

Powerful open source javascript library for dealing with Arrays and Strings.

Call `lilac()` which is doing all the things you don't want to spend your time on.

```javascript
// JS file

import lilac from "node-lilac"

lilac([78, 13, 6, 0, 45, [34, 55, 1, [4, 18], 6]])
    .flatten() // Make array flat so it contains no sub arrays 
    .sortNumArray() // Sort it fast
    .return(); // Return the result

// output -> [0, 1, 4, 6, 6, 13, 18, 34, 45, 55, 78]
```

## Installation

```text
npm i node-lilac
```

In your code import `lilac` as follows:

```javascript
import lilac from "node-lilac"
```

## Frameworks

### Vue

Install as a plugin in `main.js`

```javascript
import lilac from "node-lilac"

Vue.use({
    install: Vue => {
        Vue.prototype.$lilac = lilac;
    }
});
```

Usage as a plugin:

```vue
<!-- component code -->

<script>

export default {
  name: "Task",
  props: {
    description: {type: [String]}
  },
  data() {
    return {strLimit: 220}
  },
  computed: {
    getDesc() {

      return this.$lilac(this.description)
          .limitWordsUntil(this.strLimit)
          .return();

    }
  }

}

</script>
```

## Supplementary

Lilac is mostly being written on ES6. If you need to support oldest browsers versions you should use javascript compiler
by the end of your code processing such as [babel.js](https://babeljs.io)

Probably you use some front-end framework, so you don't need to worry about this.

## Documentation

### `lilac()`

The main function. Invoke `lilac()` passing the parameter you need to transform.

* Clears the local cache when used without a parameter (important if memory cleaning is needed);
* `lilac()` returns the inner object which allows to chain its methods and continue working with an output value.

___

#### `.extend()`

Staying within lilac, continue chaining everything using `.extend()` method.

* @param f A function which is executed by lilac and applied to the value being processed
* Method must have a value parameter which is output value (and a function to reassign it inside lilac if needed)

```javascript
lilac([0, 2, 3, 4, 5, 6, 7, 8, 9, 1])
    .sortNumArray(false)
    .extend(arr => arr.push("extended"))
    .return();

// output -> [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "extended"]
```

Use `.extend()` with provided function to change literals. Here's the example with `Vue.JS`:

```vue
<!-- component code -->

<template>
  <section>

    <p class="description">{{ getDesc }}</p>

  </section>
</template>

<script>
import lilac from "node-lilac"; // local instance, also possible use but less proper

export default {
  name: "Task",
  props: {
    description: {type: [String]}
  },
  computed: {
    getDesc() {
      return lilac(this.description).extend((value, setValue) => {
        // If description is an empty string, 
        // set its value to "No data provided"
        if (!value.trim().length) {
          setValue("No data provided");
        }
      }).return();
    }
  }

}
</script>
```

---

#### `.findArrayMedian()`

* Finds the median of array which is sorted by `lilac`.
* Array must be numeric.

It's sorted automatically before calculating a median.

 ```javascript
lilac([1, 2, 3, 4, "5"])
    .findArrayMedian()
    .return(); // 3

lilac([1, 2, 89, 3, 4, "5"])
    .findArrayMedian()
    .return(); // 3.5
```

---

#### `.findUsageOf()`

* Filters input object[] which now contains objects with strings matched to @param str
* @param str Searched sub string
* @param propName Property name which value is being checked

```javascript
let quotes = [
    {
        id: 1,
        data: "Clears the local cache when used without a parameter (important if memory cleaning is needed)"
    }, {
        id: 2,
        data: "Returns the same value if no chained methods were used after lilac() call"
    }, {
        id: 3,
        data: "Filters input array which now contains objects with strings matched to a @param str"
    }, {
        id: 4,
        data: "Method must have a function as an input parameter which gets output value and a function to reassign it inside lilac"
    }, {
        id: 5,
        data: "Creates a new array with same values and makes it flat no matter the depth, so it contains no sub arrays"
    },
];

lilac(quotes)
    .findUsageOf("inp")
    .return();

// output:

// [{
//     id: 3,
//     data: "Filters input array which now contains objects with strings matched to a @param str"
// }, {
//     id: 4,
//     data: "Method must have a function as an input parameter which gets output value and a function to reassign it inside lilac"
// }]
```

___

#### `.flatten()`

Creates a new array with same values and makes it flat no matter the depth, so it contains no sub arrays.

```javascript
lilac([78, 13, 6, 0, 45, [34, 55, 1, [4, 18], 6]])
    .flatten()
    .return();

// output -> [78, 13, 6, 0, 45, 34, 55, 1, 4, 18, 6]
```

___

#### `.limitWordsUntil()`

Cut off the extra of a string saving words that are left whole.

* Truncates a string to a given length saving whole words;
* @param length A value which defines the max string length;
* @param addEllipsis A value which whether to display ellipsis in the end of a string;
* Truncates to first whole word if the @param length is less than the first word length;
* Does not change the string if @param length is more than the original string length.

```javascript
lilac("Execute lilac() without any parameters to clear the cache")
    .limitWordsUntil(12)
    .return();

// output -> "Execute..."
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

---

#### `.setValue()`

Inner function used to set the private `lilac` value. This is callback which is executed inside
`.extend()` method.
___

#### `.shuffle()`

Shuffle (randomize) content of an array at place.

```javascript
lilac([0, 2, 3, 4, 5, 6, 7, 8, 9, 1])
    .shuffle()
    .return();

// output -> [9, 0, 5, 1, 2, 8, 6, 3, 4, 7]
```

---

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
