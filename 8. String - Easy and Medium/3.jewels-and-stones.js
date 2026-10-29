


// My approach - Brute force approach

const jewelsStones = (j, s) =>{
    let count = 0;

    for (let i = 0; i < j.length; i++) {
        for (let k = 0; k < s.length; k++) {
            if(j[i]===s[k]){
                count++;
            }
        }
    }
    return count

    // Time Complexity --> O(m*n)
    // Space Complexity --> O(1)
}
console.log(jewelsStones("aA","aAAbbbb"))



//  Optimized way

const jewelsStones1 = (j, s) =>{
    const obj = {}

    let count = 0;

    for (let i = 0; i < j.length; i++) {
        obj[j[i]] = 0
    }

    for (let i = 0; i < s.length; i++) {
        if(obj[s[i]]===0){
            count++
        }
    }
    return count

    // Time Complexity --> O(n)
    // Space Complexity --> O(n)
}

console.log(jewelsStones1("aA", "aAAbbbbb"))



//  Another Optimized way

const jewelsStones2 = (j, s) =>{
    const set = new Set()

    let count = 0;

    for (let i = 0; i < j.length; i++) {
        set.add(j[i]) 
    }

    for (let i = 0; i < s.length; i++) {
        if(set.has(s[i])){
            count++
        }
    }
    return count
    // Time Complexity --> O(n)
    // Space Complexity --> O(1) because of limited elements in set
    
}

console.log(jewelsStones2("aA", "aAAbbbbb"))