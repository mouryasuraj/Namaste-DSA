// 293 - Move Zeros

const nums = [1,2,0,0,3,5,0,8]

const moveZeros = () => {
  if (!Array.isArray(nums)) return "Invalid input";

  let x = 0; //

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== x) {
            nums[x] = nums[i];
        }
      x++;
    }
  }
  for(let i=x; i<nums.length; i++){
        nums[i] = 0;
    }

//  Time Complexity = O(n) (Loop) + O(n) fill ==>O(2n) ~ O(n)
//  Space Complexity = O(1)
};

moveZeros();

console.log(nums)
