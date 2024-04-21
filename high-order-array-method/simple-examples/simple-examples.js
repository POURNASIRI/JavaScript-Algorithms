const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */

    const dubleNumbers = numbers.map(num=>num * 2)
    // console.log(dubleNumbers) // [ 2, 4, 6, 8, 10 ]


/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */
    const evenNumbers = numbers.filter(num=> num % 2 === 0)
    // console.log(evenNumbers) //[ 2, 4 ]



/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */
    const sum = numbers.reduce((total, num)=>{
        return total + num
    },0)

    // console.log(sum) // 15


/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */
    numbers.forEach(element => {
        // console.log(element) // 1 2 3 4 5 
    });


 /**
 * find: Returns the first array element that satisfies a specified condition.
 */
    const findNumber = numbers.find(num => num > 1)
    // console.log(findNumber) // 2 

/**
 * some: Checks if at least one array element satisfies a condition.
 */
    const LastBigNumber = numbers.some(num => num % 2 === 0)
    // console.log(LastBigNumber) return true or false
 

/**
 * every: Checks if all array elements satisfy a condition.
 */
    const everyNumbers = numbers.every( num => num % 2 === 0)
    console.log(everyNumbers)  //return true or false