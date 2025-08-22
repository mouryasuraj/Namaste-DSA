// Write a function to search for an element in an array and return the index, if it is not present then return -1
const arr = [3, 45, 23, 25, 7643, 43, 22];
const element = 0;

function searchTheElement(elm, arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === elm) {
      return i;
    }
  }
  return -1
}
searchTheElement(element, arr);


// Write a function to return the count of negative numbers in an array
const negPosArr = [4,-8,9,-45,56,45,-74,-52,-56,-85]

function countNegativeNumer(arr) {
  const len = arr.length;
  let count = 0
  for(let i=0; i<len; i++){
    if(arr[i]<0){
      count++;
    }
  }
  return count;
}
countNegativeNumer(negPosArr)


// Write a function to find the largest element in an array.
const array = [52,34,77,59,91,85,22,506]

function findLargestElement(arr){
  let maxElem = -Infinity; // here we can initial with least number putting -Infinity or we can assign the first element as maxElem array[0]
  for(let i=0; i<arr.length; i++){
    if(arr[i]>maxElem){
      maxElem = arr[i];
    }
  }
  return maxElem;
}
const result1 = findLargestElement(array)
console.log(result1);



// Write a function to find the smallest element in an array.
const array1 = [52,34,7,59,91,85,22,506]

function findSmalletElement(arr){
  let smallestElem = Infinity; // here we can initial with most number putting Infinity or we can assign the first element as smallestElem array[0]
  for(let i=0; i<arr.length; i++){
    if(arr[i]<smallestElem){
      smallestElem = arr[i];
    }
  }
  return smallestElem;
}
const result = findSmalletElement(array1)
console.log(result);

