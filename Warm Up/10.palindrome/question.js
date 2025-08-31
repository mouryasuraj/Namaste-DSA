// Palindrome String

const str = "nitin"

const isPalidromeString = (str) => {

    str = String(str)

    let reversedStr = ""

    for(let i=str.length-1; i>=0; i--){
        reversedStr += str[i]
    }
    if(str===reversedStr){
        return true
    }
    return false
}

const result = isPalidromeString(str)
// console.log(result);


// Palindrome Number

let integer = 1458541;

const isPalidromeNumber = (int) =>{
    if(int<0) return false;
    let n = int
    let reverse = 0;
    while(n>0){
        let rem = n % 10;
        reverse = (reverse * 10) + rem;
        n = Math.floor(n/10)
    }
    return reverse===int
}

const res = isPalidromeNumber(integer)
console.log(res);
