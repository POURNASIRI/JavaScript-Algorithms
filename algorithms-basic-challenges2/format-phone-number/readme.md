# Format Phone Number

# Instructions

Write a function called formatPhoneNumber that takes in an array of numbers and returns a string representing the phone number formed by concatenating the numbers in the specified format.

# Function Signature

/\*\*

- Returns a string representing a phone number.
- @param {number[]} numbers - The numbers to use in the phone number.
- @returns {string} - The formatted phone number.
  \*/
  function formatPhoneNumber(numbers: number[]): string;

# Examples

```ts
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => "(123) 456-7890"
formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]); // => "(519) 555-4468"
formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]); // => "(345) 501-2527"
```
