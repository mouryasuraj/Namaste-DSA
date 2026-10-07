





const rotateList = (head, k) =>{
    if(!head || !head.next || !k) return head
    let len = 0
    let curr = head

    while(curr){
        curr = curr.next
    }

    k = k % len

    if(len===k || !k) return head

    let s = head
    let f = head
    while(f.next){
        s = s.next
        f = f.next
    }

    let newHead = s.next
    s.next = null
    f.next = head
    return newHead
}