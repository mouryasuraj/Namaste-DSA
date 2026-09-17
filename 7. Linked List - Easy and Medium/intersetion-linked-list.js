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
const intersectionLinkedListUsingSet = (headA, headB) =>{
    if(!headA || !headB) return null

    // Store headA nodes
    const store = new Set()

    // Iterate through headB and store all the nodes in Set
    while(headB){
        store.add(headB)
        headB = headB.next
    }

    // Now, Iterate through headA and check headA node is present or not in store
    while(headA){
        if(store.has(headA)) return headA
        headA = headA.next
    }

    // Time Complexity --> O(m + n)
    // Space complexity --> O(n)
    return null // if no intersection then return null
}