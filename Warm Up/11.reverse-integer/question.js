let integer = -236469

const reverInteger = (int) =>{

    // 1st approach - mine 
    // const isNegative = int<0
    // int = Math.abs(int)
    // let rev=0;
    // while(int>0){
    //     let rem = int % 10;
    //     rev = (10 * rev) + rem
    //     int = Math.floor(int/10)
    // }
    // rev = isNegative ? -rev : rev
    // if(rev>(2**31-1) || rev<-(2**31)) return 0
    // return isNegative ? -rev : rev

    // 2nd Approach - GPT
    const sign = int<0 ? -1 : 1
    const reverse = parseInt(String(Math.abs(int)).split("").reverse().join("")) * sign
    if(reverse< -(2**31) || reverse>(2**32)) return 0
    return reverse

}

const result = reverInteger(integer)
console.log(result);
