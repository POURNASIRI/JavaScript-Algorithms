const TitleCase = require("./title-case")

test("check title Case function", ()=>{
    expect(TitleCase("hello world")).toBe("Hello World")
})

