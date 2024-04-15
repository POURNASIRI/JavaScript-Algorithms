const AreAllCharsUnique = require("./are-all-chars-unique")

test("Unique Characters in a String",()=>{
    expect(AreAllCharsUnique("abcdefg")).toBe(true)
    expect(AreAllCharsUnique("abacdefg")).toBe(false)
})