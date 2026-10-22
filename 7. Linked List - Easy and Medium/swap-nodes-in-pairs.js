function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}


const swapPairs = (head) =>{
    let dummy = new ListNode()
    dummy.next = head
    let curr = head
    let next = head.next
    let prev = dummy

    while(curr && prev){
        prev.next = next
        curr.next = next.next
        next.next = curr

        prev = curr
        curr = prev.next
        next = curr && curr.next
    }
    return dummy.next

    //  Time Complexity --> O(n)
    // Space Complexity --> O(1)
}



// O-->5-->4--->3-->2-->1
// p   c   n
// O-->4-->5--->3-->3-->1

const swapPairs1 = (head) =>{
    let dummy = new ListNode()

    dummy.next = head
    let c = head
    let n = head.next

    let p = dummy

    while(c && n){
        c.next = n.next
        n.next = c
        p.next = n

        p = c
        c = p.next
        n = c && c.next
    }
    
    return dummy.next
}



const swapPairsRecursion = (head) =>{
    if(!head || !head.next) return head

    let left = head
    let right = head.next

    left.next = swapPairsRecursion(right.next)
    right.next = left

    return right
}