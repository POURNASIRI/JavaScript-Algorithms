
// solution one
// function Palindrome(string){
//    const formatString = string.toLowerCase().replace(/[^a-z0-9]/g)
//    const reversedString = formatString.split('').reverse().join('');

//    return formatString === reversedString
// }



//solution two

function Palindrome(string){
   if(string.length <=1){
        return true
   }if(string[0] === string[string.length -1]){
        return Palindrome(string.slice(1,-1))
   }
   return false


}

module.exports = Palindrome;