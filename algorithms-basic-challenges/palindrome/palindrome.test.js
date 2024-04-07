const Palindrome  = require("./palindrome")


test("Check for Palindrome String",()=>{
    expect(Palindrome("madam")).toBe(true);
    expect(Palindrome("hello")).toBe(false);
    expect(Palindrome("12321")).toBe(true);
})