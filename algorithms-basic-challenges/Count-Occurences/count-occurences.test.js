const CountOccurences = require("./count-occurences")

test("Count Occurences of Character",()=>{
    expect(CountOccurences("hello","l")).toBe(2),
    expect(CountOccurences("programming","m")).toBe(2)
})