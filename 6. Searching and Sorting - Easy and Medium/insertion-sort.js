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


console.log(InsertionSort(arr))

