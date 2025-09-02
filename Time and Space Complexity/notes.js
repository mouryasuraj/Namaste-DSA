/*

Time Complexity - It is used to measure the algorithm running time as the input grows

1. Time Complexity !== Time taken
2. To represent time complexity we use Big O notation
3. Big O natation give the worst case, because comparing worse case give the efficient algorithm.
4. Common Time Complexity
    1. O(n)
    2. O(log n)
    3. O(n log n)
    4. O(n square)
    5. 0(2 raised to n)
    6. O(1) - Constaint Time COmplexity - Best
    7. O(n!)
5. Efficiency
    O(1) > O(log n) > O(n) > O(n log n) > O(n sqaure) > O(2 raised to n) > O(n!)


Space Complexity - Space complexity refers to how much extra memory algorithm uses.

1. If variable is fixed and constants(countable) then space complexity will be O(1), if we don't use any data structure like array
2. We ignore the smallest value:
    a. O(2n) ==> O(n)
    b. O(n2+n) ==> O(n)


Revision:

Time Complexity:
1. Time complexity is used to measure the running time of an algorithm as the size of input grows.
2. There are lots of common time complexities are there:
    1. O(1) ==> Its a constant 
        ex: If i have to find out the 5th element of an array, then i can directly access that without iterating through an array like arr[4]
    2. O(log n) ==> It is used in binary search algorithm
    3. O(n) => Used in linear search algorithm
    4. O(n log n)
    5. O(n sqaure) ==> nested loops
    6. O(2 raised to n) 
    7. O(n!)
3. Big O notation is just a symbol which is used to calculate the worst case of an algorithm
4. O means order
5. We can ignore the smallest value when calculating time complexity
    ex: O(n square + n) ==> we can ignore n as it is very less complare to square of n
        O(2n) ==> Ingnore 2

Space Complexity:
1. Space complexity of an algoithm is the amout of extra memory required an algorithm to run, as a funtion of the input size(n)
2. We can ignore the smallest value when calculating space complexity
    ex: O(n square + n) ==> we can ignore n as it is very less complare to square of n
        O(2n) ==> Ingnore 2
3. If the variable is fixed or constant(countable) then the space complexity of an algorithm will be O(1), if no data structure used.

*/