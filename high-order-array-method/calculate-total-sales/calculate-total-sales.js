function CalculateTotalSalesWithTax(products,taxRate){
     const totalSales = products.reduce((sum,product)=>sum = sum + product.price * product.quantity,0)

    const taxAmount = (totalSales * taxRate) / 100

    const totalSalesWithTax = totalSales + taxAmount

    return totalSalesWithTax

     
}


module.exports = CalculateTotalSalesWithTax