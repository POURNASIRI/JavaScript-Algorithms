# Valid IPv4 Addresses

## Instructions

Write a function called isValidIPv4 that takes a string as input and returns `true` if the input is a valid IPv4 address in dot-decimal format, and `false` otherwise. An IPv4 address should consist of four octets, with values between 0 and 255, inclusive.

## Function Signature

```ts
/**
 * Checks if a given string is a valid IPv4 address.
 * @param {string} input - The input string to check.
 * @returns {boolean} - True if the input is a valid IPv4 address, false otherwise.
 */
function isValidIPv4(input: string): boolean;
```

## Examples

```ts
validIPv4('122.164.23.21'); // true
validIPv4('122.456.78.90'); // false
```

## Constraints

- The input will be a single string.
