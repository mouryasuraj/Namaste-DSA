

const arr = [1,2,3,4,5,6]

// 1st approach
// const sumOfAllNumbersInArray = (arr, index=0) =>{
//     if(index===arr.length) return 0;

//     return arr[index] + sumOfAllNumbersInArray(arr, index+1)
    

// }
// 2nd approach
const sumOfAllNumbersInArray = (n) =>{
    if(n===0) return arr[0];

    return arr[n] + sumOfAllNumbersInArray(n-1)
    

}
console.log(sumOfAllNumbersInArray(arr.length-1));