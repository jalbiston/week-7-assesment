function findLongestWord(word1, word2){
 if (word1.length > word2.length) {
     return (`${word1} is a longer word than ${word2}`)
 } else if(word1.length === word2.length) {
     return (`${word1} and  ${word2} have the same length`)
 } else {
     return (`${word2} is a bigger word than ${word1}`)
 }
}


let invoked = findLongestWord("Winnie The Pooh", "Eyeore")

console.log(invoked)