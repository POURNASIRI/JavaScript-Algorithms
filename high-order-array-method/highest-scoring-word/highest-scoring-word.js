function HighestScoredWord(str){

    const words = str.split(' ')
    const scores = words.map((word)=>{
        return Array.from(word).reduce((sum,letter)=> sum = sum + letter.charCodeAt(0) - 96,0)
    })

    const highestScore = Math.max(...scores)
    const highestScoreIndex = scores.indexOf(highestScore) 

    return words[highestScoreIndex]
    

     
    
    

    
}


module.exports = HighestScoredWord