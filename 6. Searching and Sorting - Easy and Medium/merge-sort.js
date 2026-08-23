// Merge sort
// [7,8,9] - a1
// [1,3,6] - a2

const mergeTwoSortedArr = (a1,a2) =>{

    let m = a1.length;
    let n = a2.length;

    let p1 = m-1; // -1
    let p2 = n-1 // 2

    for (let i = (m+n)-1; i >=0; i--) {

        if(p2<0) break;
        
        if(p1>=0 && a1[p1]>a2[p2]){ // 7>6
            a1[i] = a1[p1]
            p1--
        }else{
            a1[i] = a2[p2]
            p2--
        }
        
    }
    return a1

    // TimeComplexity --> O(log n) + O(n)  --> O(nlog n)
    // space complexity --> O(n)

}
const mergeSort = (arr) =>{

    if(arr.length<=1) return arr

    const mid = Math.floor(arr.length/2)

    const left = mergeSort(arr.slice(0,mid))
    const right = mergeSort(arr.slice(mid))

    return mergeTwoSortedArr(left, right)

}

console.log(mergeSort([5, 2, 8, 1, 9, 3,4]))