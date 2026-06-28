const nums = [9,6,4,2,3,5,7,0,1]


var missingNumber = function(nums) {
    // Mine approach - Not optimized
    // for(let i=0; i<=nums.length; i++){
    //     if(!nums.includes(i)){
    //         return i
    //     }
    // }
    // Time Complexity ==> O(n) * O(n) ==> O(nsqaure)
    // Space Complexity ==> O(1)


    // Another approach
    // Time Complexity ==> O(n)
    // Space Complexity ==> O(n)

    // const set = new Set(nums)
    // for(let i=0; i<=nums.length; i++){
    //     if(!set.has(i)){
    //         return i
    //     }
    // }



    // Optimised Approach
    // Time Complexity ==> O(n)
    // Space Complexity ==> O(1)

    const n = nums.length;
    let sumOfN = 0;
    let sumOfN2 = (n * (n+1))/2;

    for(let i=0; i<n; i++){
        sumOfN = sumOfN + nums[i]
    }
    return sumOfN2 - sumOfN
};

console.log(missingNumber(nums))