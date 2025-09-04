// Q. 27 - Remove Element 


//Approach
/*

1. We have to use two pointer method.
2. First pointer will track the last element which was equal and then we will replace that element with equal one, by doing this, we will successfull remove the val from the array
3. We will initial x to index 0 by default
4. we will check using i and if nums[i]!==val then we will replace the value to nums[x] = nums[i] and then will increment x by 1. if its equal then don't change the position
5. After the loops end the value of x will be the elemest which is not equal to the val

*/



const nums = [0,1,2,2,3,0,4,2]
const val = 2
function removeElement(nums, val){
    let x = 0;   // First Pointer "x" to track and replace the element
    for(let i=0; i< nums.length; i++){  //Second pointer "i" to check each element equal or not
        if(nums[i]!==val){
            nums[x] = nums[i]
            x++;
        }
    }
    return x
}

// Time Complexity = O(n)
// Space Complexity = O(1)

const result = removeElement(nums, val)
console.log(result)