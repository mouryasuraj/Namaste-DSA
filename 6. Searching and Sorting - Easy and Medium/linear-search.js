

/*

// Approach

1. Loop through the array
2. Check whether the element is equal to target or not
3. If its equal then return the index

*/

const arr = [1,2,5,7,0,4,3]
const tar = 0

// Time Complexity - O(n)
// Space Complexity - O(1)
const linerSearch = (arr, tar) =>{

    for(let i=0; i<arr.length; i++){

        if(arr[i]===tar) return i

    }

    return -1

}

console.log(linerSearch(arr, tar))