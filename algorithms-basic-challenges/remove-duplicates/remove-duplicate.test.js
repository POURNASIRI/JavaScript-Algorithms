const RemoveDuplicate = require("./remove-duplicates")


test("Running RemoveDuplicate function",()=>{
    expect(RemoveDuplicate([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10])).toEqual([1,2,3,4,5,6,7,8,9,10])
    expect(RemoveDuplicate([1,1,1,1,1,"hello","hello",4,5,6,7,8])).toEqual([1,"hello",4,5,6,7,8])
    
})