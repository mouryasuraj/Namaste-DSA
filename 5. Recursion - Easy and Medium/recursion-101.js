/*


// Recursion
1. Function call itself to solve smaller version of the same problem.   

// Two parts of recursion
1. Base case: The part of the function that stops the recursion and returns a value without making any further recursive calls. It is essential to prevent infinite recursion and eventually terminate the recursive process.
2. Recursive case: The part of the function that calls itself with a smaller or simpler input.


// Real life example of recursion
1. Queue of people
2. Nested comments in reddit
3. Organization hierarchy of a company 


// Endless recursion --> It means that the function keeps calling itself indefinitely without reaching a base case, leading to a stack overflow error. This can happen if the base case is not defined correctly or if the recursive case does not progress towards the base case.


// Common Mistakes
1. Missing base case
2. Not simplifying the input in the recursive case
3. Too deep recursion leading to stack overflow
4. Keeping in mind the time and space complexity of recursive solutions, as they can be less efficient than iterative solutions for certain problems.


// When to use recursion
1. When the problem can be broken down into smaller subproblems of the same type.
2. When the problem has a natural recursive structure, such as tree traversals or divide-and-conquer algorithms.
3. When the code can be made more readable and elegant using recursion, even if an iterative solution is possible.

*/


// Stack overflow demo
function endlessRecursion() {
    console.log("This function will keep calling itself indefinitely.");
    endlessRecursion(); // Recursive call without a base case
}
// endlessRecursion(); // Uncommenting this line will cause a stack overflow error


// Print n to 1 using recursion
function printNto1(n){
    // Base case - If not written the this function becomes endless recursion
    if(n===0) return
    console.log(n)
    printNto1(n-1);
}
// printNto1(5)


// Print 1 to n using recursion
// One way
// function print1toN(n){
//     if(n===0) return
//     print1toN(n-1)
//     console.log(n)

// }
// print1toN(5) 
// Second way
let n=10
function print1toN(x){
    if(x>n) return
    console.log(x)
    print1toN(++x)

}
print1toN(1) 
