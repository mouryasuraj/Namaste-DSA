// Write a funtion to search for an element in an array and return the index, if it is not present then return -1

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
const result = searchTheElement(element, arr);
console.log(result);

