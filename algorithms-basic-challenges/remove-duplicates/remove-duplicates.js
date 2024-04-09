

// solution 1
function RemoveDuplicate(array){
    // return [...new Set(array)]
    return Array.from(new Set(array)) 
}


// //solution 2
// function RemoveDuplicate(array){
//     return array.filter((value,index)=>array.indexOf(value)===index)
// }



// solution 3
// function RemoveDuplicate(array){
//     const unique = []

//     for(let i = 0; i< array.length; i++){
//         if(!unique.includes(array[i])){
//             unique.push(array[i])
//         }
//     }
//     return unique
// }





module.exports = RemoveDuplicate