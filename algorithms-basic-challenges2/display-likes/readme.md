# Display Likes

# Instructions

Write a function called displayLikes that takes in an array of names and returns a string of who likes the post.

```js
If no one likes it, it should return 'no one likes this'
If one person likes it, it should return '{name} likes this'
If two people like it, it should return '{name1} and {name2} like this'
If three people like it, it should return '{name1}, {name2} and {name3} like this'
If more than three people like it, it should return '{name1}, {name2} and {x} others like this'
```

# Function Signature

/\*\*

- Returns a string of who likes the post.
- @param {string[]} names - The names of the people who like the post.
- @returns {string} - A string of who likes the post.
  \*/
  function displayLikes(names: string[]): string;

# Examples

```js
displayLikes([]); // 'no one likes this'
displayLikes(['Peter']); // 'Peter likes this'
displayLikes(['Jacob', 'Alex']); // 'Jacob and Alex like this'
displayLikes(['Max', 'John', 'Mark']); // 'Max, John and Mark like this'
displayLikes(['Alex', 'Jacob', 'Mark', 'Max']); // 'Alex, Jacob and 2 others like this'
```

# test

```js
const DisplayLikes = require('./display-likes');

test('Display Likes', () => {
  expect(DisplayLikes([])).toBe('no one likes this');
  expect(DisplayLikes(['erfan', 'arman', 'mohamad', 'ali', 'ramin'])).toBe(
    'erfan, arman and 3 others like this'
  );
});
```
