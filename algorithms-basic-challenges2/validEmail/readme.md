# Validate Email

# Instructions

Write a function called validateEmail that takes in a string and returns whether the string is a valid email address. For the purposes of this challenge, a valid email address is defined as a string that contains an @ symbol and a . symbol.

# Function Signature

/\*\*

- Returns whether the string is a valid email address.
- @param {string} email - The email address to validate.
- @returns {boolean} - Whether the email address is valid.
  \*/
  function validateEmail(email: string): boolean;

# Examples

```ts
validateEmail('john@gmail.com'); // true
validateEmail('john@gmail'); // false
```
