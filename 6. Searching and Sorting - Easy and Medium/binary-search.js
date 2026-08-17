// 704 - Binary Search


const arr = [1,4,6,8,9,11,45,78]
const tar = 1



// Tried to solve the Binary search question

const binarySearch = (arr, tar) =>{

    let arrLen = arr.length


    for(let i=0; i<arrLen; i++){

        let halfLen = Math.floor(arr.length/2)
        
        if(arr[halfLen]===tar) {
            return halfLen
        }
        else if(arr[halfLen]>tar){
            arr.splice(halfLen+1)
        }else{
            arr.splice(0,halfLen)
        }
        
        if(halfLen===0) return -1
    }
    return -1
}

console.log(binarySearch(arr, tar))