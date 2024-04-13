const FindMissNumber = require('./find-missing-number')


test("check Find Missing Number function ",()=>{
    expect(FindMissNumber([1,2,3,4,6,7,8,9,10])).toBe(5);
    expect(FindMissNumber([10, 8, 6, 7, 5, 4, 2, 3, 1])).toBe(9);
    expect(FindMissNumber([10, 5, 1, 2, 4, 6, 8, 3, 9])).toBe(7)
})