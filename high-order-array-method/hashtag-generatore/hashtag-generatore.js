function HashTagGeneratore (string){


//solution 1
    // if(string.trim() === ""){
    //     return false
    // }
    // const words = string.trim().split(' ')
    
    // const capitalWords = words.map((word)=>(
    //     word.charAt(0).toUpperCase() + word.slice(1)
    // ))

    // const hashtag = '#' + capitalWords.join('')

    // return hashtag.length > 140 ? false : hashtag



 // solution 2
  const hashtag = string.split(' ').reduce(function(tag,word){
    return tag + word.charAt(0).toUpperCase() + word.substring(1)
  },'#')   
  return hashtag.length === 1 || hashtag.length > 140 ? false : hashtag
}

module.exports = HashTagGeneratore