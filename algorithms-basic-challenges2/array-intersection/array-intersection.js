
//solution1
// function ArrayIntersection(arry1,arry2){
//     const intersectionArray = []

//     for(let i = 0; i < arry1.length; i++){
//         if(arry2.includes(arry1[i])){
//             intersectionArray.push(arry1[i])
//         }
//     }

//     return intersectionArray
// }





//solution2
function ArrayIntersection(arry1,arry2){
    const set1 = new Set(arry1)

    const intersectionArray = []

    for(let num of arry2){
        if(set1.has(num)){
            intersectionArray.push(num)
        }
    }
    return intersectionArray
}

module.exports = ArrayIntersection