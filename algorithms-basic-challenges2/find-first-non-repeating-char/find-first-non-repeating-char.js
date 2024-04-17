function FindFirstNonRepeatingCharacter(string){

 //solution 1   
    // const charCount = {}

    // for(const char of string){
    //     charCount[char] = (charCount[char] || 0) + 1
    // }
    // for(const char of string){
    //     if(charCount[char]=== 1){
    //         return char
    //     }
    // }
    // return null


 //solution 2
 
   const charCount = new Map()

   for(const char of string){
        charCount.set(char, (charCount.get(char) || 0)  + 1)
   }

   for(const char of string){
    if(charCount.get(char) === 1){
        return char
    }
   }
   return null
}

module.exports = FindFirstNonRepeatingCharacter