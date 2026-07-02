

// Find the sum of first n numbers
const sumOfFirstNNumbers = (n) =>{
    if(n===0) return 0

    return n + sumOfFirstNNumbers(n-1)
}


console.log(sumOfFirstNNumbers(2));