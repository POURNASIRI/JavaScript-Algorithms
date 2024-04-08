function CountVowels(string){
    const formatString = string.toLowerCase()

    let count = 0

    for(let i = 0; i< formatString.length; i++){
        const char = formatString[i]

       if(char === "a" ||char === "o" ||char === "u" ||char === "i" ||char ==="e"){
            count++;
       }

    }
    return count
  
  

}


module.exports = CountVowels