const arr = [1,3,9,2]

const sumOfOddNumbers = (n) =>{
    if(n<0) return 0
    
    return arr[n]%2!==0 ? arr[n] + sumOfOddNumbers(n-1) : sumOfOddNumbers(n-1)

}

console.log(sumOfOddNumbers(arr.length-1))