function FindMissNumber(arr){
    if(arr.length === 0) return 1
    const numberOfEle = arr.length + 1
    const sumBaseNumbeOfEle = numberOfEle *(numberOfEle + 1) / 2
    const sum = arr.reduce((a,b)=>a = a +b, 0)
    return sumBaseNumbeOfEle - sum
}

module.exports = FindMissNumber