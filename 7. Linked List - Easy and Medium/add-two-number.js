

function ListNode(val, next){
    this.val = (val===undefined) ? 0 : val
    this.next = (next===undefined) ? null : next
}

const addTwoNumbers = (l1, l2) =>{
    let dummyNode = new ListNode()
    let curr = dummyNode
    let carry = 0

    while(l1 || l2 || carry){
        // Sum with Carry
        let sum = (l1?.val || 0) + (l2?.val || 0) + carry
        // Save carry
        carry = Math.floor(sum / 10)
        // Get last digit
        let digit = sum % 10

        // attached digit with node
        curr.next = new ListNode(digit)
        // move curr, l1 and l2 node to next to sum others
        curr = curr.next
        l1 = l1 && l1.next
        l2 = l2 && l2.next
    }
    return dummyNode.next
}