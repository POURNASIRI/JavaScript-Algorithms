function ValidAnagrams(str1,str2){
    // const freqCount1 = str1.split('').reduce((acc,char)=>{
    //     acc[char] = (acc[char] || 0) + 1
    //     return acc
    // },{})
    // const freqCount2 = str2.split('').reduce((acc,char)=>{
    //     acc[char] = (acc[char] || 0) + 1
    //     return acc
    // },{})


    // return Object.keys(freqCount1).every((char)=>
    //     freqCount1[char] === freqCount2[char]
    // )


    // solution 2
    if(str1.length !== str2.length){
        return false
    }
    const charArray1 = str1.split('').sort()
    const charArray2 = str2.split('').sort()
    for(let i = 0; i < charArray1.length; i++){
        if(charArray1[i] !== charArray2[i]){
            return false
        }
    }
    return true

}



module.exports = ValidAnagrams