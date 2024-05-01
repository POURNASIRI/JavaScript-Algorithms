const findMissingLetter = require('./find-missing-letter')


test('should return the missing letter', () => {
  expect(findMissingLetter(['a', 'b', 'c', 'd', 'f'])).toBe('e');
  expect(findMissingLetter(['O', 'Q', 'R', 'S'])).toBe('P');
  expect(findMissingLetter(['t', 'u', 'v', 'w', 'x', 'z'])).toBe('y');
})
