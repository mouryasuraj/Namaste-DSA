/*



Approach to solve this question

1. Iteraion
    a. Maintain a sentinel node that points to head
    b. make head as curr
    c. make head.next as next
    d. prev should be sentinel node
    e. Iterate through the linked list till curr && next is not null
    f. shif the nodes and move curr, next and prev properly to swap other pairs as well
    g. add edge cases if head or head.next is not present just return head

2. Recursion
    a. create left and right variable and assigned head and head.next respectively
    b. add base condition to break the recursion when head or head.next is null
    c. point left.next to swapped list --> swap(right.next) --> pass new head from pairs which needs to swap
    d. point right.next to backward which is left
    e. return right



*/





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