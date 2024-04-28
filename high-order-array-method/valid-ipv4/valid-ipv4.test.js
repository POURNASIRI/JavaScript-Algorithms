const validIPv4 = require('./valid-ipv4')


test("valid IPv4 function",()=>{
    expect(validIPv4('122.164.23.21')).toBe(true)
    expect(validIPv4('122.456.78.90')).toBe(false)
})