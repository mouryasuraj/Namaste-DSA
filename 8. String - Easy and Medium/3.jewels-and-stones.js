


// My approach

const jewelsStones = (j, s) =>{
    let count = 0;

    for (let i = 0; i < j.length; i++) {
        for (let k = 0; k < s.length; k++) {
            if(j[i]===s[k]){
                count++
            }
        }
    }
    return count

    // Time Complexity --> O(n square)
    // Space Complexity --> O(1)
}
console.log(jewelsStones("aA","aAAbbbb"))