

// 485 --> Max consecutive ones


// Mine approach
const nums = [1,1,0,1,1,1,0,0,1,1,1,1,1]

const findMaxConsecutiveOnes = () =>{
    let max = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if(nums[i]===1){
            count++
        }else{
            if(max<count){
                max = count;
            }
            count = 0;
        }
    }
    return max<count ? count : max

    // Time Complexity --> O(n)
    // SPace Complexity --> O(1)
}

console.log(findMaxConsecutiveOnes())