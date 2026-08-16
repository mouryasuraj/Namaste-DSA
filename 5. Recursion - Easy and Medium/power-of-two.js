// Power of two

// 1st Approach
// Time Complexity = O(log n)
// Space Complexity = O(log n)
// const isPowerOfTwo = (n, i=1 ) =>{

    

//     if(n===1) return true

//     if(Math.pow(2,i)>n) return false

//     if(Math.pow(2,i)===n) return true

//     return isPowerOfTwo(n,i+1)
// }

// console.log(isPowerOfTwo(5))




// Time Complexity = O(log n)
// Space Complexity = O(log n)
const isPowerOfTwo = (n) =>{

    if(n===1) return true

    if(n<1 || n%2 !==0) return false  // Checking interger is odd or even is one of the best condition to check the power of two. This saved calling function again if the integer is less than 1 or an odd number

    return isPowerOfTwo(n/2)
    
}

console.log(isPowerOfTwo(17))