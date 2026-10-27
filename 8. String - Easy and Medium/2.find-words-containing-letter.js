/*

// Find words containing letter

1. Approach

a. Loop through the array and perform a nested loop on each element 
b. check the letter in the element
c. If its containing then push the indices into another arr
d. Return the arr of indices which contains letter x

*/


const findWordsContainingLetter = (words, x) =>{
    const indices = []
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if(words[i][j]===x){
                indices.push(i)
                break;
            }
        }
    }
    return indices
    // Time COmplexity --> O(m) * O(n) ==> O(m*n)
    // Space Complexity --> O(n)
}

console.log(findWordsContainingLetter(["Suraj", "Moury", "Dhiraj"],"a"));
