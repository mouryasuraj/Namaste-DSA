
const reversedLinkedList = (head) =>{
    let prev = null;
    let curr = head

    while(curr){
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    return   // returning prev because curr and temp will point to null and prev will point to last node
}