

// Solution one use Math.max
// function FindMaxNumber(numbersArray){
//     return Math.max(...numbersArray)
// }


function FindMaxNumber(numbersArray){
  let Max = numbersArray[0]
  for(let i = 0; i< numbersArray.length; i++){
    if(numbersArray[i] > Max){
        Max = numbersArray[i]
    }
  }
  return Max
}

module.exports = FindMaxNumber;