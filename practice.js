// const arr = [3, 45, 23, 25, 7643, 43, 22];
// const element = 37;


// function searchTheElement(){
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]===element) return i
//     }
//     return -1
// }


// console.log(searchTheElement())

// const negPosArr = [4,-8,9,-45,56,45,-74,52,-56,-85]

// function countNegativeNumer(){
//     let count = 0;

//     for (let i = 0; i < negPosArr.length; i++) {
//         if(negPosArr[i]<0){
//             count++
//         }
//     }
//     return count
// }


// const array = [52,34,777,59,91,885,22,506]

// function findLargestElement(){
//     let maxElem = -Infinity
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]>maxElem){
//             maxElem = array[i]
//         } 
//     }
//     return maxElem
// }

// console.log(findLargestElement())



// const array = [52,34,777,59,1,885,2,506]

// function findSmalletElement(){
//     let minElem = Infinity
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]<minElem){
//             minElem = array[i]
//         } 
//     }
//     return minElem
// }

// console.log(findSmalletElement())


// const array = [52,34,777,859,1,885,2,506]

// function findSecondLargestElem(){
//     let largest = -Infinity
//     let secLargest = -Infinity

//     for (let i = 0; i < array.length; i++) {
//         if(array[i]>largest){
//             secLargest = largest
//             largest = array[i]
//         }else if(array[i]>secLargest){
//             secLargest = array[i]
//         }   
//     }
//     return secLargest
// }

// // console.log(findSecondLargestElem())

// let count = 1
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < i; j++) {
//         console.log("1", count);
//         count++
//     }
// }



//26. Remove Duplicate from sorted array

// const int = [0,0,1,1,1,2,2,3,3,4,4,4,4,4]

// const removeDuplicates = (int) =>{
//     let x = 0;

//     for(let i=0; i<int.length; i++){
//         if(int[i]>int[x]){
//             x++;
//             int[x] = int[i]
//         }
//     }
//     console.log(int)
//     console.log(x+1)
// }

// const result = removeDuplicates(int)

// 27 - Remove occurence element

const nums = [0,4,1,4,1,2,4,3,3]
const val = 4

const removeElement = () =>{
    let x = 0;   // First Pointer "x" to track and replace the element
    for(let i=0; i< nums.length; i++){  //Second pointer "i" to check each element equal or not
        if(nums[i]!==val){
            nums[x] = nums[i]
            x++;
        }
    }
    console.log(x)
}

removeElement()