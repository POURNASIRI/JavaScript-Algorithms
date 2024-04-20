const ValidEmail = require('./validemail')



test("Valid Email", ()=>{
    expect(ValidEmail('erfan@gmail.com')).toBe(true)
    expect(ValidEmail('erfan@gmail')).toBe(false)
})