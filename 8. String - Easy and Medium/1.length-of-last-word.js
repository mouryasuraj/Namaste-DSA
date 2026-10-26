
// Length of last word



// Mine Approach - Using one loop
const s = "luffy is still joboy"
var lengthOfLastWord = function(s) {
    let count = 0 // "World"
    let prev; // " "
    for(let i=s.length-1; i>=0; i--){ // i=6
        if(s[i]===" " && (prev!==" " && prev)) break;
        if(s[i]!==" "){
            count++
        }
        prev = s[i]
    }
    return count
    // Time Complexity --> O(n)
    // Space Complexity --> O(1)
};

console.log(lengthOfLastWord(s))



// Easies way

const lengthOfLastWord1 = (s) =>{
    s = s.trim()
    const arr = s.split(" ")
    return arr[arr.length-1].length

    // Time Complexity --> O(n)+O(n) --> O(2n) --> O(n)
    // Space Complexity --> O(n)
}

console.log(lengthOfLastWord1(s))


// another way

const lengthOfLastWord2 = (s) =>{
    let n = s.length - 1
    let count = 0
    while(n>=0){
        if(s[n]!==" ") break
        --n
    }

    while(n>=0){
        if(s[n]===" ") break
        --n
        count++
    }

    return  count
    // Time Complexity --> O(n)
    // Space Complexity --> O(1)
}

console.log(lengthOfLastWord2("   Suraj   Moquryea   "))