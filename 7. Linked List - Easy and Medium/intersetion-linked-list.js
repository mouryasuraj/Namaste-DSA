/*

Approach 1 using Brute force

1. Will check each element of Head1 is equal or not with Head2, if its equal then that is the intersection node


*/

const intersectionLinkedList = (headA, headB) => {
    if(!headA && !headB) return null
    let currA = headA
    while(currA){
        let currB = headB
        while(currB){
            if(currA === currB) return currA
            currB = currB.next
        }
        currA = currA.next
    }
    // Time Complexity --> O(m * n) ==> O(nsquare)
    // Space complexity --> O(1)
}


// Approach 2 using Hash map
