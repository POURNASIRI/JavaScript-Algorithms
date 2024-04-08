const CountVowels = require('./count-vowels')


test("Check vowles number",()=>{
    expect(CountVowels("hello")).toBe(2);
    expect(CountVowels("JavaScript")).toBe(3);

})