


// ImpQ - 509 - Fibonacci Number


// 1st approach using recursion

// Time Complexity = O(2 raised to n) -- very bad time complexity, will optimize this using Dynamic Programming
// Space Complexity = O(2 raised to n)
// const calculateFibonacci = (n) =>{

//     if(n<0 || n>30) return "Please enter the value between 0 to 30"

//     if(n<=1) return n

//     if(n>1) return calculateFibonacci(n-1) + calculateFibonacci(n-2)

// }



// 2nd approach using iteration

// Time Complexity = O(n)
// Space Complexity = O(n)
// const calculateFibonacci = (n) =>{

//     if(n<0 || n>30) return "Please enter the value between 0 to 30"

//     if(n<=1) return n

//     let arr = [0,1]

//     for(let i=2; i<=n; i++){
//         arr[i] = arr[i-1] + arr[i-2]
//     }

//     return arr[n]
// }


// 3rd approach using iteration

// Time Complexity = O(n)
// Space Complexity = O(1)
const calculateFibonacci = (n) =>{

    if(n<0 || n>30) return "Please enter the value between 0 to 30"

    if(n<=1) return n

    let prev = 0;
    let curr = 1;

    for(let i=2; i<=n; i++){
        let next = prev + curr
         prev = curr
         curr = next
    }

    return curr
}

console.log(calculateFibonacci(5))