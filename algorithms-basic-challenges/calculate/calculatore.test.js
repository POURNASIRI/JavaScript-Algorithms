const Calculatore = require('./calculate');


test("Running Calculatore function",()=>{
    const num1 = 7;
    const num2 = 5;
    
    //Addition
    expect(Calculatore(num1,num2,'+')).toBe(12)

    //Subtraction
    expect(Calculatore(num1,num2,'-')).toBe(2)

    //Multiplication
    expect(Calculatore(num1,num2,'*')).toBe(35)

    //Division
    expect(Calculatore(num1,num2,'/')).toBe(1.4)
})