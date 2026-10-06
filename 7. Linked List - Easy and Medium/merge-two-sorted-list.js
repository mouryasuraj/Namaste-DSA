

// Approach

/*
1. Find the next smallest number between list1 and list2
2. Point the curr node to the smallest one
3. Iterate till list1 or list2 becomes null
4. return the merged sorted list 
*/

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}


const mergeTwoSortedList = (l1, l2) =>{
    const node = new ListNode()
    let curr = node

    while(l1 && l2){
        if(l1.val <= l2.val){
            curr.next = l1
            l1 = l1.next
        }else{
            curr.next = l2
            l2 = l2.next
        }
        curr = curr.next
    }
    if(!l1) curr.next = l2
    if(!l2) curr.next = l1

    return node.next
    // Time Complexity --> O(l1 + l2)
    // Space Complexity --> O(1)
}