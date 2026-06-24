//26. Remove Duplicate from sorted array

// const int = [0,0,1,1,1,2,2,3,3,4,4,4,4,4]

// const removeDuplicates = (int) =>{
//     let x = 0;

//     for(let i=0; i<int.length; i++){
//         if(int[i]>int[x]){
//             x++;
//             int[x] = int[i]
//         }
//     }
//     console.log(int)
//     console.log(x+1)
// }

// const result = removeDuplicates(int)

// 27 - Remove occurence element

// const nums = [0,4,1,4,1,2,4,3,3]
// const val = 4

// const removeElement = () =>{
//     let x = 0;   // First Pointer "x" to track and replace the element
//     for(let i=0; i< nums.length; i++){  //Second pointer "i" to check each element equal or not
//         if(nums[i]!==val){
//             nums[x] = nums[i]
//             x++;
//         }
//     }
//     console.log(x)
// }

// removeElement()

// 334 -> Reverse string

const reverseString = () => {
  const s = ["S", "u", "r", "a", "j", "r"];
  const len = Math.floor(s.length / 2);

  for (let i = 0; i < len; i++) {
    let temp = s[i];
    s[i] = s[s.length - (i + 1)];
    s[s.length - (i + 1)] = temp;
  }

  console.log(s);
};

// Time complexity --> O(n)
// space complexity --> O(1)

reverseString();

// Best time to Buy and Sell stock

const prices = [7,1,8,4,6,5];

const calculateMaxProfit = () => {
  const len = prices.length;
  // Brute force approach - It is not optimized

  // Time complexity --> O(n to the power 2)
  // Space complextiy --> O(1)

  // let max = 0;
  // for(let i=0; i<len; i++){
  //     for(let j=i+1; j<len;j++){
  //         if(prices[j] - prices[i] > max){
  //             max = prices[j] - prices[i]
  //         }
  //     }
  // }
  // console.log(max)

  // Optimized approach
  let minPrice = prices[0];
  let max = 0;
  for (let i = 1; i < len; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    if (prices[i] - minPrice > max) {
      max = prices[i] - minPrice;
    }
  }
  console.log(max);
  // Time complexity --> O(n)
  // Space complextiy --> O(1)
};

calculateMaxProfit();
