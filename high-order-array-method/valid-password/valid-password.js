function validPassword (password){
    const passwordLength = password.length >= 8;
    const upperCase = password.split('').some((char)=>char === char.toUpperCase() && char !== char.toLowerCase())
    const lowerCase = password.split('').some((char)=>char === char.toLowerCase() && char !== char.toUpperCase())
    const Digits = password.split('').some((char)=> !isNaN(parseInt(char, 10)))

    return passwordLength && upperCase && lowerCase && Digits

}

module.exports = validPassword