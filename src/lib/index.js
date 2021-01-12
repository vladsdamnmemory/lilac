export default (() => {
    /**
     * lilac v. 1.1.0
     * author vladsdamnmemory | suazdee
     * */
    let
        temp = 'lilac is ready!',
        lilac = Object.create({
            /**
             * Cut off the extra of a string saving words that are left whole. Use limitWordsUntil().
             *
             * Truncates a string to a given length saving whole words;
             * @param length A value which defines the max string length;
             * @param addEllipsis A value which whether to display ellipsis in the end of a string;
             * Truncates to first whole word if the @param length is less than the first word length;
             * Does not change the string if @param length is more than the original string length.
             */
            limitWordsUntil: (length = 0, addEllipsis = true) => {
                if (typeof length !== "number") {
                    throw new TypeError('Length is not a number');
                }
                if (typeof temp !== "string") {
                    throw new TypeError("Input value is not an instance of String");
                }
                temp = temp.trim();
                let newString = temp.substring(0, length).trim(), words = newString.split(/\s+/);
                if (temp[newString.length] && temp[newString.length].match(/[\d\w(){}]/)) {
                    words.pop(); // removed incomplete word
                    if (words.length) {
                        newString = words.join(" ");
                    } else {
                        let firstSpaceIndex = temp.indexOf(" ");
                        newString = temp.substring(0, firstSpaceIndex > -1 ? firstSpaceIndex : temp.length);
                    }
                }
                addEllipsis ? newString += temp[newString.length] ? "..." : "" : null;
                temp = newString;
                return lilac;
            },
            /**
             * Sort a numeric array in ascending or descending order at place. Method uses parseFloat() beneath, so each value in the array will be converted to a number.
             *
             * Does not return new created array but sorts everything at place with bubble method;
             * @param toLargerNumber A value which defines the sorting sequence. Default - true;
             * @param toLargerNumber may be true/false.
             */
            sortNumArray: (toLargerNumber = true) => {
                if (Array.isArray(temp)) {
                    let
                        // The length will reduce as the right values are found
                        length = temp.length,
                        i = 0;

                    while (i < length - 1) {

                        let
                            a = parseFloat(temp[i]),
                            b = parseFloat(temp[i + 1]);

                        if (isNaN(a) || isNaN(b)) {
                            throw new TypeError("Array is not numeric");
                        }

                        if (toLargerNumber ? a > b : b > a) {
                            temp[i + 1] = a;
                            temp[i] = b;
                        }

                        if (++i === length - 1) {
                            // If last element reached
                            length--;
                            i = 0;
                        }
                    }

                } else {
                    throw new TypeError("Gotten value is not instance of Array");
                }

                return lilac;

            },
            /**
             * Creates a new array with same values and makes it flat no matter the depth, so it contains no sub arrays. Use flatten().
             */
            flatten: () => {
                if (Array.isArray(temp)) {
                    temp = [...temp];

                    for (let i = 0; i < temp.length;) {
                        if (Array.isArray(temp[i])) {
                            temp.splice(i, 1, ...temp[i]);
                        } else {
                            i++;
                        }
                    }

                } else {
                    throw new TypeError("Gotten value is not instance of Array");
                }

                return lilac;
            },
            /**
             * Shuffle (randomize) content of an array at place
             * */
            shuffle: () => {
                if (Array.isArray(temp)) {
                    let r, c;
                    for (let [i, v] of temp.entries()) {
                        r = Math.floor(Math.random() * temp.length);
                        c = v;
                        temp[i] = temp[r];
                        temp[r] = c;
                    }

                } else {
                    throw new TypeError("Gotten value is not instance of Array");
                }

                return lilac;
            },
            /**
             * Staying within lilac, continue chaining everything using .extend() method
             * @param f A function which is executed by lilac and applied to the value being processed
             * Method must have a function as an input parameter which gets output value and a function to reassign it inside lilac
             * */
            extend: f => {
                if (typeof f === 'function') {
                    f(temp, lilac.setValue);
                } else {
                    throw new TypeError("Gotten value is not a Function");
                }
                return lilac;
            },

            /**
             * Inner function used to set the inner stored lilac value
             * */
            setValue: value => {
                temp = value;
            },

            /**
             * Simply returns the value after all chained methods used before.
             * Returns the same value if no chained methods were used after lilac() call.
             */
            return: () => temp
        });

    /**
     * The main function. Invoke lilac() passing the parameter you need to transform.
     *
     * Clears the local cache when used without a parameter (important if memory cleaning is needed);
     * lilac() returns the inner object which allows to chain its methods and continue working with an output value.
     */
    return (param = undefined) => {
        temp = param;
        return lilac;
    };
})();


