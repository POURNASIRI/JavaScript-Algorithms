const CalculateTotalSalesWithTax = require('./calculate-total-sales')


const result = CalculateTotalSalesWithTax([
    {name:'Apple',price:0.5,quantity:10},
    {name:'Banana',price:0.3,quantity:20},
    {name:'Orange',price:0.6,quantity:15},
],8)


console.log(result)