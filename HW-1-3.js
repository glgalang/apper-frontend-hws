// Write a function named reverse that, when given an input string, 
//returns the reversed version of that string, e.g., "joseph" -> "hpesoj" 
//Name this file HW1-3.js.
const reverseThat = (strng) =>{
return strng
        .split('')
        .reverse()
        .join('');
}
reverseThat("Joseph")