// Bubble sort

// -----------Tried------------

const arr  = [5,2,4,1,0,3,6,9,8]

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

// console.log(bubbleSort(arr))



//------------Tried Optimised way-----------

const bubbleSort2 = (arr) =>{

    let p = arr.length

    for (let i = 0; i < arr.length; i++) {

        console.log("Hello")
        
        for(let j=0; j<p; j++){
            console.log("Hello")
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
        
        p = p - 1
    }

    return arr

}

// console.log(bubbleSort2(arr))


// Little optimized way by adding is Swap 


const bubbleSort3 = (arr) =>{

    let n = arr.length

    for (let i = 0; i < n-1; i++) {
        let isSwapped = false
        for(let j=0; j<n-1-i; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                isSwapped = true
            }
        }
        if(!isSwapped) break;
    }

    return arr


}

console.log(bubbleSort3(arr))
