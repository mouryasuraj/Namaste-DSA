
// My Approach
const mergeSortedArr = (arr1, arr2) =>{
    const m = arr1.length
    const n = arr2.length

    let p1 = m - 1
    let p2 = n - 1

    for (let i = (m+n-1); i >=0; i--) {
        
        if(p2<0) break;

        if(p1>=0 && arr1[p1]>arr2[p2]){
            arr1[i] = arr1[p1]
            p1--;
        }else{
            arr1[i] = arr2[p2]
            p2--;
        }
    }
    return arr1
}

const merge = (nums) =>{
    if(nums.length===1) return nums

    const mid = Math.floor(nums.length/2)
    const left = merge(nums.slice(0,mid))
    const right = merge(nums.slice(mid))

    return mergeSortedArr(left, right)
}

const findTargetIndices = (nums, target) => {

    const sortedArr = merge(nums)
    let targetIndices = []
    for (let i = 0; i < sortedArr.length; i++) {
        if(sortedArr[i]===target){
            targetIndices.push(i)
        }
    }

    return targetIndices
}


console.log(findTargetIndices([3,2,5,7,1,6,1],2))


// Better approach 


const findTargetIndices1 = (nums, target) =>{
    let smaller = 0;
    let equal = 0;

    for (const elem of nums) {
        if(elem<target) smaller++
        else if(elem===target) equal++;
    }

    return Array.from(
        {
            length:equal
        },
        (_,i)=> smaller+i
    )
}
console.log(findTargetIndices1([3,2,5,7,1,6,1],1))