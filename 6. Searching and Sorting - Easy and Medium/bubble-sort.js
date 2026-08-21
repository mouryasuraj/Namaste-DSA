// Bubble sort

// -----------Tried------------

const arr  = [5,3,7,1,9,0]

const bubbleSort = (arr) =>{

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = i; j < arr.length; j++) {
            
            if(arr[i]>arr[j]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }

        }
    }

    return arr
    // Time Complexity = O(n square)  
    // Space Complexity = O(1)  
}

console.log(bubbleSort(arr))



// -----------Tried------------

