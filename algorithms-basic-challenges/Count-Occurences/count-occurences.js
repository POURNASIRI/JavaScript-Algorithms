

// solution -1

// function CountOccurences(string,character){
//     let count = 0
//     for(const Char of string){
//         if(Char === character){
//             count ++
//         }
//     }
//     return count
// }



// solution -2 case sensetive 
const CountOccurences = (string,character) =>{
    const char = character.toLowerCase()
    const newstring = string.toLowerCase()
    return(newstring.split(char).length - 1)
}

module.exports = CountOccurences