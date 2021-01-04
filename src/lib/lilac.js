export default (() => {
    /**
     * Powerful library for strings and arrays
     * Lilac version 1
     * */
    let temp = undefined, lilac = Object.create({
        /**
         * Truncates a string to a given length saving whole words
         * @param length A value which defines the max string length
         * Truncates to first whole word if the @param length is less than the first word length
         * Does not change the string if @param length is more than the original string length
         */
        limitWordsUntil: (length = 0) => {
            if (typeof length !== "number") {
                throw new TypeError('Length is not a number');
            }

            if (typeof temp === "string") {
                temp = temp.trim();

                let
                    newString = temp.substring(0, length).trim(),
                    words = newString.split(/\s+/);

                if (temp[newString.length] && temp[newString.length].match(/[\d\w(){}]/)) {
                    words.pop();
                    if (words.length) {
                        temp = words.join(" ");
                    } else {
                        temp = temp.substring(0, temp.indexOf(" "));
                    }
                } else {
                    temp = newString;
                }

            } else {
                throw new TypeError("Gotten value is not an instance of String");
            }
            return lilac;
        },
        /**
         * Does not return new created array but sorts everything in place with bubble method
         * @param toLargerNumber A value which defines the sorting sequence
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
         * Makes array flat with no sub arrays saving the order of elements
         */
        flatten: () => {
            if (Array.isArray(temp)) {

                temp = temp.slice();

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
         * Returns final value after all the rest methods of chain behind
         */
        return: () => temp
    });
    /**
     * Execute lilac() without any parameters if you want to clear the cache
     */
    return (param = undefined) => {
        temp = param;
        return lilac;
    };

})();


