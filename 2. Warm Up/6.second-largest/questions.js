// Find the second largest number in an array

const arr = [4000,6,10,1110,888,11];

function secondLargest(arr){

    let largest = -Infinity
    let secondLar = -Infinity;
    
    // Approach 1 - Not recommendable as it find the second largest using two for loops
    // for(let i=0; i<arr.length; i++){
    //     if(arr[i]>largest){
    //         largest = arr[i]
    //     }
    // }
    // for(let i=0; i<arr.length; i++){
    //     if(arr[i]>secondLar && arr[i]<largest){
    //         secondLar = arr[i]
    //     }
    // }

    // Approach 2 - Best Practice using a single loop
    for(let i=0; i<arr.length; i++){
        if(arr[i]>largest){
            secondLar = largest
            largest = arr[i]
        }else if(arr[i]>secondLar){
            secondLar = arr[i]
        }
    }
    return secondLar

} 

const result = secondLargest(arr)
console.log(result);
