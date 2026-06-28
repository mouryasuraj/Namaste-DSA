/*136 - Single Number --> Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space. 


// Question Breakdown
1. Time complexity should be O(n)
2. SPace complexity should be O(1)
3. Every element appear twice except ones. find it.


*/

const nums = [4,1,2,1,4,2,3]

const findSingleNumber = () =>{
    
    // 1st Approach
    // Time Complexity --> O(n)+O(n) ==> O(n)
    // Space Complexity --> O(n) //using extra space for obj
    // const obj = {};

    // for(let i=0; i<nums.length; i++){
    //     if(!obj[nums[i]]){
    //         obj[nums[i]] = 1;
    //     }else{
    //         obj[nums[i]]++;
    //     }
    // }
    // for(let i=0; i<nums.length;i++){
    //     if(obj[nums[i]] === 1){
    //         return nums[i]
    //     }
    // }

    
const nums = [4,1,2,1,4,2,3]


    // 2nd Approach using Bitwise XOR
    // Special about XOR 
    // a ^ 0 -> a
    // a ^ a -> 0
     // Time Complexity --> O(n) ==> O(n)
    // Space Complexity --> O(1)

    let xor = 0
    for(let i=0; i<nums.length; i++){
        xor = xor ^ nums[i]
        console.log(xor)
    }

    return xor

}

console.log(findSingleNumber())