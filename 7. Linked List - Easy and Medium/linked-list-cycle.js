
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
    return false; // if code react at this line then its not a linked list cycle
}