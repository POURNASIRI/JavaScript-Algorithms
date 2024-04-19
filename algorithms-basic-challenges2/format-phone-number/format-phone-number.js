function FormatPhoneNumber(numbers){

//solution 1
    const areaCode = numbers.slice(0,3).join('')
    const prefix = numbers.slice(3,6).join('')
    const lineNumber = numbers.slice(6).join('')
    return `(${areaCode}) ${prefix}-${lineNumber}`


//solutiom 2
    // const formatNumber = numbers.join('')

    // return`(${formatNumber.substring(0,3)}) ${formatNumber.substring(3,6)}-${formatNumber.substring(6)}`


}




module.exports = FormatPhoneNumber