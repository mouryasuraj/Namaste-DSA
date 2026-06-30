// For Loop

for(let i=0; i<5; i=i+1){
    console.log("Hello World!!");
}
for(let i=2; i<5; i=i+2){
    console.log("Hello World!!");
}
for(let i=2; i<=9; i=i+3){
    console.log("Hello World!!");
}

// Reverse
for(let i=5; i>0; i--){
    console.log("Hello World!! Reverse");
}

for(let i=5; i<4; i++){
    console.log("Hello World!! Not printed");
}


// Array with loop

const arr = [4,5,6,8,6,5,8,5,5,4]
const length = arr.length
for (let i = 0; i < length; i++) {
    console.log("arr",arr[i]);
}


// Prints all the even number in the array

const arr1 = [4,5,6,8,6,5,8,5,5,4]
const length1 = arr1.length
for (let i = 0; i < length1; i++) {
    const remainder = arr1[i]%2
    if(remainder===0){
        console.log("arr1",arr1[i]);
    }
}



