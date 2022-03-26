// Write a function called isPalindrome, that when given a string input, 
//returns true if the string input is a palindrome, else false. 
//A palindrome is a word that, when reversed, is the same word. 
//Examples include racecar, deified, civic, radar, uwu, et al. 
//Name this file HW1-4.js.

const isPalindrome = (strng) =>{
    const strngReverse = strng.split('').reverse().join('');
    return strngReverse === strng
    }

console.log(isPalindrome("racecar"))
console.log(isPalindrome("deified"))
console.log(isPalindrome("civic"))
console.log(isPalindrome("uwu"))
console.log(isPalindrome("awaw"))


