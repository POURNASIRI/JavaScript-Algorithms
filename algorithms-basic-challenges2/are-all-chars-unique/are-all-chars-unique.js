function AreAllCharsUnique(string){


// solution 1

//    const CharCount = {}
//    for(let i = 0; i< string.length; i++){
//     const char = string[i]
//     if(CharCount[char]){
//         return false
//     }
//     CharCount[char] = true
// }
// return true

//solution 2
    const charSet = new Set()
    for(let i = 0; i< string.length; i++){
        const char = string[i]
        if(charSet.has(char)){
            return false
        }
        charSet.add(char)
    }
    return true
}
module.exports = AreAllCharsUnique