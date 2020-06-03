// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];



function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
}

function getLength(arr, cb) {
  return cb(arr.length);
}
getLength(items, function(length){
  console.log(length);
})
/*------------------------------------------------------------------------*/

function last(arr, cb) {
  // last passes the last item of the array into the callback.
}
function last(arr, cb) {
  return cb(arr[arr.length - 1])
}
last(items, function(lastItem){
  console.log(lastItem);
})
/*------------------------------------------------------------------------*/


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}
function add(x, y){
  return (x + y);
}
function sumNums(x, y, cb){
  return cb(x, y);
}
console.log (sumNums(1,2, add))
/*------------------------------------------------------------------------*/


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y)
}
function multiply(x, y){
  return x * y;
}
// function multiplyNums(x , y, cb){
//   return cb(x, y);
// }
console.log(multiplyNums(2, 7, multiply))
/*------------------------------------------------------------------------*/


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}
function contains(item, list, cb){
  return cb(list.includes(item))
//   if (list.includes(item)){
//     return cb(true);
//   }
//   else {
//     return cb(false);
//   }
}
contains('Pencil', list, function(doesContain){
  console.log(doesContain)
})

/*------------------------------------------------------------------------*/
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
