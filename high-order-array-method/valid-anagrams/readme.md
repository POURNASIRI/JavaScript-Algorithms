## Valid Anagrams

## Instructions

Write a function called `validAnagrams` that takes in two strings and determines whether they are valid anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## Function Signature

```ts
/**
 * Determines whether two strings are valid anagrams.
 * @param {string} str1 - The first string.
 * @param {string} str2 - The second string.
 * @returns {boolean} - True if the strings are valid anagrams, false otherwise.
 */
function validAnagrams(str1: string, str2: string): boolean;
```

## Examples

```ts
validAnagrams('listen', 'silent'); // true
validAnagrams('hello', 'world'); // false
validAnagrams('astronomer', 'moonstarer'); // true
```
