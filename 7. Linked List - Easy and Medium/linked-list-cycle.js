
/*


// Approach

1. Create an set to track the duplicate
2. Create an curr pointer which points to head
3. Iterate through linked list until curr is null
4. While iterating, check whether curr node is already exist in set or not. If so, then return true else add node to set
5. after iterating, if curr is become null then return false because no linked list cycle is present.

*/

const linkedListCycle = (head) =>{
    let seenNode = new Set()
    let curr = head

    while(curr){
        if(seenNode.has(curr)) return true // Node already present.
        seenNode.add(curr)
        curr = curr.next
    }

    // Time Complexity: O(n)
    // Space Complexity: O(n)
    return false; // if code react at this line then its not a linked list cycle
}


// Better way using Floyd's Algorithm which is also known as Tortois and Hare algorithm
// using two pointer, slow and fast

const linkedListCycleBetter = (head) =>{
    if(!head || !head.next) return false
    let slow = head;
    let fast = head.next;

    while(slow !== fast){
        if(!fast || !fast.next) return false
        slow = slow.next
        fast = fast.next.next
    }
    return true
    // Time Complexity: O(n)
    // Space Complexity: O(n)
}


// A follow question to detect when cycle starts
const DetectCycle = (head) =>{
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next

        if(slow === fast){
            break;
        }
    }
    if(!fast || !fast.next) return null
    slow = head
    while(slow!==fast){
        slow = slow.next
        fast = fast.next
    }
    return slow
}
