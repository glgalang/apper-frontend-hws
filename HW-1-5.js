// Write a function that returns only the vowels of a given input string, 
//e.g., "hello world" -> "eoo". 
//Name this function convertToVowels. Name this file HW1-5.js.
const convertToVowels = (strng) => {
    let newWord = '';
    let vowels = "aeiou";
    if (typeof(strng) === "string") {
    for(let i = 0;i< strng.length; i++){
        if(vowels.indexOf(strng[i].toLowerCase()) > -1){
            newWord += strng[i];
        }
      }
    } else {
     console.log(`Not a valid input`)
    }
      return newWord;
}
console.log(convertToVowels("Hello World"))
console.log(convertToVowels("The qUick BrowN fOx jumps over the Lazy DOg12"))
console.log(convertToVowels(123123))