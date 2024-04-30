# Password Validation

## Instructions

Write a function called `validatePassword` that takes in a string and validates it based on the following criteria:

- The password must be at least 8 characters long.
- The password must contain at least one uppercase letter.
- The password must contain at least one lowercase letter.
- The password must contain at least one digit.

The function should return `true` if the password is valid according to the criteria, and `false` otherwise.

## Function Signature

```ts
/**
 * Validates a password based on certain criteria.
 * @param {string} password - The password to be validated.
 * @returns {boolean} - True if the password is valid, false otherwise.
 */
function validatePassword(password: string): boolean;
```

## Examples
```ts
validatePassword('Abc12345'); // should return true
validatePassword('password123'); // should return false (no uppercase letter)
validatePassword('Pass'); // should return false (length less than 8 characters)
validatePassword('HelloWorld'); // should return false (no digit)
```