# Find Missing Letter

# Instructions

Write a function called findMissingLetter that takes in an array of consecutive (increasing) letters as input and returns the missing letter in the array.

# Function Signature

/\*\*

- Returns the missing letter in an array of consecutive letters.
- @param {string[]} arr - An array of consecutive letters.
- @returns {string} - The missing letter.
  \*/
  function findMissingLetter(arr: string[]): string;

# Examples

```ts
FindMissingLetter(['a', 'b', 'c', 'd', 'f']); // => "e"
FindMissingLetter(['O', 'Q', 'R', 'S']); // => "P"
FindMissingLetter(['t', 'u', 'v', 'w', 'x', 'z']); // => "y"
```
