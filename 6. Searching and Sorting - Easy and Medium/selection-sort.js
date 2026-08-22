

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

console.log(selectionSort(arr))