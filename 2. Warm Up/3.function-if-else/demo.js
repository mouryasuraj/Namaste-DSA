//Functions

// Create a function to add two numbers
function add(a, b) {
  const sum = a + b;
  return sum;
}

add(2, 5);

// If Else
// Create a function to check the voting eligibility
function eligibleToVote(age) {
    if(age<0){
        console.log("Invalid input");
    } else if(age<18){
        console.log("Not eligible to vote");
    } else if(age>=18){
        console.log("Eligible to vote");
    }
}
eligibleToVote(-5)

// Create a function to check if a number is even or odd

function isEvenOdd (num) {
    if(num%2===0){
        console.log("Number is Even");
    } else{
        console.log("Number is Odd");
    }
}

isEvenOdd(24)