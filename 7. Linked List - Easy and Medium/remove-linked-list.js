/*


// Approach

1. Create sentinel node or dummy node to track previous node
2. Point sentinel.next to head
3. Iterate through the linked list until prev && prev.next become null
4. If prev.next.val === val then directly point prev.next to prev.next.next by doing this, it will skip the match val
5. If it not equal then simply move the prev to prev.next

*/
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const removeLinkedList = (head, val) =>{
    const sentinel = new ListNode()
    sentinel.next = head

    let prev = sentinel

    while(prev.next){
        if(prev.next.val === val){
            prev.next = prev.next.next
        }else{
            prev = prev.next
        }
    }
    return sentinel.next
    // Time Complexity --> O(n)
    // Space complexity --> O(1)
}