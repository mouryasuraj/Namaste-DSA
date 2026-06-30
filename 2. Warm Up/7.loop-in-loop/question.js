let count = 1
// j<5
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        // console.log("Hello", count);
        // count++
    }
    
}
    

// j<i
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < i; j++) {
        // console.log("Hello", count);
        // count++
    }
    
}
    
// J<=i
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        // console.log("Hello", count);
        // count++
    }
    
}

// J<=i
for (let i = 0; i < 3; i++) {
    for (let j = i; j > 0; j--) {
        // console.log("Hello", count);
        // count++
    }
    
}

// J<=i and j>=0
for (let i = 0; i < 3; i++) {
    for (let j = i; j >= 0; j--) {
        // console.log("Hello", count);
        // count++
    }
    
}


for (let i = 5; i >0; i--) {
    for (let j = 0; j <i; j++) {
        console.log("Hello", count);
        count++
    }
    
}