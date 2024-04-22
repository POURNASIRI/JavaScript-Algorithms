function SumOfEvenSquares (array){
   const sumSquares =  array.filter(num=> num % 2 === 0)
    .map(num => num ** 2)
    .reduce((sum, square)=> sum = sum + square)
    return sumSquares
}

module.exports = SumOfEvenSquares