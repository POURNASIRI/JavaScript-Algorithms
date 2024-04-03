const GetSum = require("./get-sum")


test("Running Get sum function",()=>{
    const num1 = 10;
    const num2 = 85;
    const result = GetSum(10,85)

    expect(result).toBe(95)
})