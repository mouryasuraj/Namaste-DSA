/*

// Approach

19. Remove Nth Node From End of List

1. First we have to create sentinel node because what n will come that represent first element, so to track previous element we have to create sentinel node
2. We have given head and n, now we have remove the nth element from end of the list
3. To achieve this we have to tract the length of the node, so iterate through linked list and get the lenght of the list
4. Then create previos element till length - n because we have to remove nth element then its previous element will be the previous one then just point previous.next to previous.next.next
5. Then return sentinel.next



*/

// Node
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const removeNthNode = (head, n) =>{
    let sentinel = new ListNode()
    sentinel.next = head

    // Trac length
    let length = 0;
    while(head){
        head = head.next
        length++
    }

    let prev = sentinel;
    let previousPosition = length - n;

    for (let i = 0; i < previousPosition; i++) {
        prev = prev.next
    }
    prev.next = prev.next.next
    return sentinel.next
}