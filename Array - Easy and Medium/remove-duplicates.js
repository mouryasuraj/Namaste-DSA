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
