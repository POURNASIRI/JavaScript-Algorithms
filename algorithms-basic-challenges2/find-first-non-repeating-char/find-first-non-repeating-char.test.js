const FindFirstNonRepeatingCharacter = require('./find-first-non-repeating-char')



test("Find First Non-Repeating Character",()=>{
    expect(FindFirstNonRepeatingCharacter("aabccdeff")).toBe("b");
    expect(FindFirstNonRepeatingCharacter("aabbcc")).toBe(null);
})