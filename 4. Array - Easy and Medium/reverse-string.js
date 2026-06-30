/*
344. Reverse String --> Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.

// Break Question
1. s is an array of character
2. in place means --> modify the existing array
3. with O(1) extra memory --> without creating extra array or memory

 
*/


// My Approach
// const s = ["H","a","w","q","c","w"]

// function reverseString (s) {
//     let x = 0;
//     for(let i=s.length-1; i>=0; i--){
//         let temp = s[i]
//         s[i] = s[x];
//         s[x] = temp
//         x++;
//         if(Math.floor(s.length/2)===i) break;
//     }
//     return s
// }

// Time Complexity = O(n)
// Space Complexity = O(1)


// const result = reverseString(s)
// console.log(result);




// My Approach - This is best approach for this question
const s = ["H","a","w","q","c","w"]

function reverseString (s) {
    const length = s.length
    for(let i=0; i<Math.floor(length/2); i++){
        let temp = s[length-(i+1)]
        s[length-(i+1)] = s[i];
        s[i] = temp
    }
    return s
}

// Time Complexity = O(n)
// Space Complexity = O(1)

const result = reverseString(s)
console.log(result);
