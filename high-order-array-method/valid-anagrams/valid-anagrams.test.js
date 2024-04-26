const ValidAnagrams = require('./valid-anagrams')


test("Test Valid Anagrams",()=>{
    expect(ValidAnagrams("anagram","nagaram")).toBe(true);
    expect(ValidAnagrams("rat","car")).toBe(false);
    expect(ValidAnagrams("hello","world")).toBe(false);
})