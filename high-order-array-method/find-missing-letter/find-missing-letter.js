function findMissingLetter(array) {
    let start = array[0].charCodeAt(0)


    //solution 1
    // const missingCharCode = array.map((char)=> char.charCodeAt(0))
    // .find((current)=>{
    //     if(current - start > 1){
    //         return true
    //     }

    //     start = current
    //     return false
    // })

    // return missingCharCode ? String.fromCharCode(missingCharCode - 1) : ""

    
    //solution 2
    const missingCharCode = array.reduce((missing, char) => {
        const current = char.charCodeAt(0);
        if (current - start > 1 && missing === null) {
          missing = start + 1;
        }
        start = current;
        return missing;
      }, null);
      return missingCharCode ? String.fromCharCode(missingCharCode) : '';

}


module.exports = findMissingLetter