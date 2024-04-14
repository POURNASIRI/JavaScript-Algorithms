const FideMissingLetter = require("./find-missing-letter")

test("find missing letter",()=>{
    expect(FideMissingLetter(["a","b","c","e"])).toBe("d")
    expect(FideMissingLetter(["a",,"c","d","e","f","g"])).toBe("b")
})