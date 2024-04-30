const validPassword = require('./valid-password')


test("Test Valid Password",()=>{
    expect(validPassword(`Abc12345`)).toBe(true);
    expect(validPassword(`bcd12345`)).toBe(false);
    expect(validPassword(`bcd12345`)).toBe(false);
})