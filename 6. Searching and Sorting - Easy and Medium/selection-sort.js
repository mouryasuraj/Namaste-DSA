

// selection sort is an sorting algorithm which finds the smallest element from the unsorted section and put the smallest element at the beginning


// ---------Initial Try-------------

const arr = [3,5,1,8,9,0,6]

const selectionSort = (arr) =>{

    const len = arr.length

    for (let i = 0; i < len - 1; i++) {

        let min = arr[i]
        let p = 0
        let isPosChanged = false

        for (let j = i+1; j < len; j++) {
            
            if(arr[j]<min){
                min = arr[j]
                p = j
                isPosChanged = true
            }
            
        }
        if(isPosChanged){
            let temp = arr[i];
            arr[i] = min
            arr[p] = temp
        }
    }

    return arr

    // TimeComplexity = O(n square)
    // SpaceComplexity = O(1)

}

// console.log(selectionSort(arr))



// Optimzed Approach - 
/*
What I improved from my initial approach:

1. In the initial approach, I tracked both the minimum element and its position.
   However, we only need to track the position (index) of the minimum element.
2. Since I was tracking both the element and its position, I also used an
   `isPosChanged` flag to determine whether a swap was required.
3. In the optimized approach, I only track the index of the minimum element
   and use that index directly while swapping.
4. I also added a condition to check whether the current index and the
   minimum element's index are the same. If they are the same, no swap is required.
*/ 
const optSelectionSort = (a) =>{

    const n = a.length

    for (let i = 0; i < n-1; i++) {
        
        let min = i
        
        for (let j = i+1; j < n; j++) {
            
            if(arr[j]<arr[min]){
                min = j
            }
        }

        if(i!==min){
            let temp = arr[i]
            arr[i] = arr[min];
            arr[min] = temp
        }
        
    }

    return arr

}

console.log(optSelectionSort(arr))

