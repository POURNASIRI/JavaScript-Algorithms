const FizzBuzz = require("./fizz-buzz-array")


test('Testing FizzBuzz Function',()=>{
    expect(FizzBuzz(15)).toEqual([1,2,"Fizz",4,"Buzz","Fizz",7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz'])
    expect(FizzBuzz(5)).toEqual([1, 2, "Fizz", 4, "Buzz"])
})