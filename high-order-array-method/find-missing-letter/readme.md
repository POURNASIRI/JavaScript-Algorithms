# Find Missing Letter Refactor

## Instructions

In the last section, we created a function called `findMissingLetter` that takes in an array of consecutive (increasing) letters as input and returns the missing letter in the array.

I want to do that same thing using high order array methods. It is possible to do it using `map`, `filter`, `reduce`, or `forEach`.

## Function Signature

```js
/**
 * Returns the missing letter in an array of consecutive letters.
 * @param {string[]} arr - An array of consecutive letters.
 * @returns {string} - The missing letter.
 */
function findMissingLetter(arr: string[]): string;
```


## Examples

```js
findMissingLetter(['a', 'b', 'c', 'd', 'f']); // => "e"
findMissingLetter(['O', 'Q', 'R', 'S']); // => "P"
findMissingLetter(['t', 'u', 'v', 'w', 'x', 'z']); // => "y"
```