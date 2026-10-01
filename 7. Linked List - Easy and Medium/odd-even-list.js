

const oddEvenLinkedList = (head) =>{
    if(!head) return head

    let odd = head
    let even = firstEvenRef = head.next

    while(odd.next && even.next){
        odd.next = odd.next.next
        even.next = even.next.next
        odd = odd.next
        even = even.next
    }
    odd.next = firstEvenRef
    return head
    // Time Complexity --> O(n)
    // Space Complexity --> O(1)
}