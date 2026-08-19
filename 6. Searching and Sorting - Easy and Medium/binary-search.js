// 704 - Binary Search


const arr = [1,4]
const tar = 4

// Time Complexity --> 
// Space Complexity --> O(1)

// const binarySearch = (arr, tar) =>{

//     let p1 = 0
//     let p2 = arr.length-1

//     for(let i=0; i<arr.length; i++){

//         //if(p1>p2) //return -1   // this is the base condition to terminate from the loop, because at this point we know that the element does not exist in the array, so looping futher will not help.
        
//         const mid = Math.floor((p1+p2)/2)
         
//         if(arr[mid]===tar) return mid

//         if(p1===p2) return -1 // This is also an base condition

//         if(arr[mid]<tar){
//             p1 = mid + 1
//         }else{
//             p2 = mid - 1
//         }

//     }

//     return -1
// }



// Using While loop
const binarySearch = (arr, tar) =>{

    let p1 = 0
    let p2 = arr.length-1

    while(p2>p1){
        
        const mid = Math.floor((p1+p2)/2)
         
        if(arr[mid]===tar) return mid

        if(arr[mid]<tar){
            p1 = mid + 1
        }else{
            p2 = mid - 1
        }

    }

    if(arr[p1]===tar) return p1

    return -1
}


console.log(binarySearch(arr, tar))