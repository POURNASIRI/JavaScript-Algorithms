# Are all characters unique?


# Instructions
Write a function called areAllCharactersUnique that takes in a string and returns true or false depending on whether all characters in the string are unique (i.e., no character is repeated).

# Function Signature
/**
 * Returns true if all characters in a string are unique.
 * @param {string} str - The string to check.
 * @returns {boolean} - Whether all characters in the string are unique.
 */
function areAllCharactersUnique(str: string): boolean;

# Examples

```ts
areAllCharactersUnique('abcdefg'); // true
areAllCharactersUnique('abcdefgA'); // true
areAllCharactersUnique('programming'); // false
areAllCharactersUnique(''); // true
areAllCharactersUnique('a'); // true
```