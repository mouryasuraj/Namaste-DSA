const integer = -25554546529

const countDigit = (int) =>{
    // Early return when int is 0, because 0 is also a digit
    if(int===0) return 1

    let count = 0;
    // Convert negative number into positive number
    let n = Math.abs(int)

    while(n>0){
        n = Math.floor(n/10); //using floor method becuase n/10 will give quotient in decimal ex: 25.6
        count++;
    }

    return count;

    // String method
    // const positiveNum = Math.abs(int)
    // console.log(String(positiveNum).length);
    
} 

const result = countDigit(integer);
console.log(result)