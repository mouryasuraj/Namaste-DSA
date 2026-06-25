/*
33 --> https://leetcode.com/problems/merge-sorted-array/description/

*/




// Try started


// 1st approach
// const nums1 = [1,2,3] // length of nums1 will always be m+n
// const nums2 = [2,5,6]

// const mergeSortedArray = () =>{
//     const num2len = nums2.length;
//     for(let i=num2len; i<nums1.length; i++){
//         nums1[i] = nums2[i-num2len]
//     }
//     console.log(nums1)
//     console.log(nums1.sort())
// } 

// mergeSortedArray()


// 2nd approach
// const nums1 = [2,7,10,0,0,0]

// const nums2 = [1,2,3]
// const m = 3
// const n = 3

// const mergeSortedArray = () =>{
//     const cp = nums1.slice(0,m)
//     let p1 = 0;
//     let p2 = 0;

//     for(let i=0; i<m+n; i++){
//         if(p1===m){
//             nums1.splice(p1, n-p2, nums2.slice(p2,n))
//             return 
//         }
//         if(p2===n){
//             nums1.splice(p2, m-p1, cp.slice(p1,m))
//             return
//         }

//         if(cp[p1]<nums2[p2]){
//             nums1[i] = cp[p1];
//             p1++;
//         }else{
//             nums1[i] = nums2[p2]
//             p2++
//         }
//     }
// } 

// mergeSortedArray()

// console.log(nums1)

// Try Ended



// Tried 2nd Correct Approach

const nums1 = [2,7,10,0,0,0]

const nums2 = [1,2,3]
const m = 3
const n = 3

const mergeSortedArray = () =>{
    const cp = nums1.slice(0,m);
    let p1=0;
    let p2=0;

    for(let i=0; i<m+n; i++){

        if(p2>=n || (p1<m && cp[p1]<nums2[p2])){
            nums1[i] = cp[p1];
            p1++
        }else{
            nums1[i] = nums2[p2];
            p2++
        }
    }
}

// Time complexity --> O(m+n)
// Space complexity = O(n)  // used extra memory

mergeSortedArray()
console.log(nums1)



// Optimized Approach (Space Complextiy --> O(1))

const nums3 = [4,6,9]

const nums4 = [6,9,11]
const x = 3
const y = 3

const OptimizedMergeSortedArray = () =>{
    let p1=x-1;
    let p2=y-1;
    for(let i=(m+n)-1; i>=0; i--){

        if(p2<0) break;
        if(p1>=0 && nums3[p1]>nums4[p2]){
            nums3[i] = nums3[p1]
            p1--
        }else{
            nums3[i] = nums4[p2]
            p2--

        }
    }
}
// Time Complexity --> O(m+n)
// Space complexity --> O(1)
OptimizedMergeSortedArray()
console.log(nums3)

