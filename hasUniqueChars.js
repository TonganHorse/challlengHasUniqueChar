// Write your code below



function hasUniqueChars(word) {

    let split = word.split('')
    let returned = true
    for(let i in split) {
        for(let j = i+1; j < split.length; j++) {
           if(split[i] === split[j]) {
            return false
           }
        }
    }
    return returned
}

console.log(hasUniqueChars('Tult'))