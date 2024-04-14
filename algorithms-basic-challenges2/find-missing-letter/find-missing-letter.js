
//  //solution 1  ----> alphabet  
// function FideMissingLetter(array){
//     const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     const startIndex = alphabet.indexOf(array[0])

//    for(let i = 0; i< array.length; i ++){
//     if(array[i] !== alphabet[startIndex + i]){
//         return alphabet[startIndex + i]
//     }
// }

//    return "";
// }



//solution 2  ----> charCodeAt

function FideMissingLetter(array){
    let start = array[0].charCodeAt(0)
for(let i= 0; i<array.length; i++ ){
     let current = array[i].charCodeAt(0)

     if(current - start > 1){
        return String.fromCharCode( start + 1)
     }

}

return " ";

    
}

module.exports = FideMissingLetter