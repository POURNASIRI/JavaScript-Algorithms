const SumOfEvenSquares = require('./sum-even-squares')


test("Test Sum of Even Squares",()=>{
    expect(SumOfEvenSquares([1,2,3,4,5])).toBe(20);
    expect(SumOfEvenSquares([1,2,3,4,5,6,7,8,9,10])).toBe(220)
})