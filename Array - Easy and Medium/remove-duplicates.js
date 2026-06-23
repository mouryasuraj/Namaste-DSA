/*
26. Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Break question
1. integer --> Can hold Positive or Negative values
2. sorted in non-decreasing order --> a[i+1] >= a[i] // It means that, arrays can contain greater or equal element
    ex: [0,0,1,1,1,1,]  --> Non-decreasing order
    ex: [9,9,5,5,5,2,1] --> Non-increasing order
    ex: [1,2,5,8,9,15,45] --> Increasing order // a[i+1] > a[i]
    ex: [45,15,9,8,5,2,1] --> Increasing order // a[i+1] < a[i]
3. in-place --> We have to change the existing array not to create another array
4. kept the order same --> Do not change the order of an array. keep it original


// Approach
1. We will use two pointer approach
    a. first pointer will loop through array to get the unique element
    b. second pointer will track where to shift the unique element
2.


*/

const nums = [0,0,1,1,2,2,3,4,4,5]

function removeDuplicates(nums){
    let x = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]>nums[x]){
            x++;
            nums[x] = nums[i]
        }
    }
    return x+1
}
// Time Complexity = O(n)
// Space Complexity = O(1)

const result = removeDuplicates(nums)
console.log(result);
