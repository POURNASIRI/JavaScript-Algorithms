# Highest Scoring Word

## Instructions

-Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3, and so on.

-You need to return the highest scoring word as a string.

-If two words score the same, return the word that appears earliest in the original string.

- All letters will be lowercase and all inputs will be valid.

## Function Signature

```ts
/**
 * Returns the highest scoring word from a string.
 * @param {string} str - The input string.
 * @returns {string} - The highest scoring word.
 */
function highestScoringWord(str: string): string;
```

## Examples

```ts
highestScoringWord('man i need a taxi up to ubud'); // 'taxi'
highestScoringWord('what time are we climbing up the volcano'); // 'volcano'
highestScoringWord('take me to semynak'); // 'semynak'
```