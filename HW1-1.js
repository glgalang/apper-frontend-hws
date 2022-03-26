//HW1-1.js.
//Write a function named transform that accepts an array of 
//integers, and returns an array in which all the elements 
//are squared and sorted in ascending order. Name this file HW1-1.js.
// [9,16,25,64,81]

const transform = (arr) => {
  if(Array.isArray(arr) === true &&
    arr.every(elem => typeof elem === 'number')){
    return arr.sort().map(elem => elem*elem)
  }else{
    return 'Not a valid array of integer'
  }
}
const nums = [4,9,5,3,8]
const sortedSquaredNums = transform(nums)
console.log(sortedSquaredNums) 