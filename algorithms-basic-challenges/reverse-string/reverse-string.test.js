const ReverseString = require('./reverse-string')


test("Revese String",()=>{
    expect(ReverseString("hello")).toBe("olleh")
    expect(ReverseString("programmer")).toBe("remmargorp")
})