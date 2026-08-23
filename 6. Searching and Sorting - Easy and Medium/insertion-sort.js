// Insertion sort


// Tried with own approach
        //   0,1,2,3,4,5
const arr = [4,2,6,1,5,0,8,9]

const InsertionSort = (a) =>{

    const n = a.length;
    
    for (let i = 1; i < n; i++) { // i = 6 --> 2

        let temp = arr[i] // temp = 2
        
        for (let j = i; j >=0; j--) { // j = 1 --> 3

            if(j===0){
                arr[j] = temp
                break;
            }

            let prev = i - 1 /// prev = 0 --> -- 1

            if(temp<prev){ // 2<1
                arr[j] = arr[prev]
                prev--
            }else if(temp>prev){  // 2>1
                arr[j] = temp
                break;
            }    
        }
        
    }

    return arr

}


// console.log(InsertionSort(arr))




// [4,2,6,1,5,0,8,9]
// Right approach
const insertionSort1 = (a) =>{
    const n = a.length;
    
    for (let i = 1; i < n; i++) { 

        let curr = a[i]
        let p = i - 1;

        while(p >=0  && a[p] > curr){
            a[p+1] = a[p]
            p--
        }
        a[p+1] = curr
    }

    return a
} 

console.log(insertionSort1([4,2,6,1,5,0,8,9]))
