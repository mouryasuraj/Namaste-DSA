function Node(val){
    this.val = val,
    this.next = null
}

function MyLinkedList(){
    this.head = null,
    this.size = 0
}

MyLinkedList.prototype.addAtHead = function(val){
    const newNode = new Node(val)
    newNode.next = this.head
    this.head = newNode
    this.size++
}
// 0,1,2,3,4
// 4,5,2,6,7


MyLinkedList.prototype.deleteAtIndex = function(index){

    if(index<0 || index>this.size-1) return -1
    let curr = this.head

    if(index===0){
        this.head = curr.next
        this.size--
        return
    }

    for (let i = 0; i < index-1; i++) {
        curr = curr.next
    }
    if(index===this.size-1){
        curr.next = null
    }else{
        curr.next = curr.next.next
    }
    this.size--
}



MyLinkedList.prototype.get = function(index){
    if(index<0 || index>this.size-1) return -1
    let curr = this.head
    for (let i = 0; i < index; i++) {
        curr = curr.next
    }
    return curr.val
}

// index = 2, val = 1
MyLinkedList.prototype.addAtIndex = function(index,val){

    if(index>this.size-1) return 

    let newNode = new Node(val)
    let curr = this.head

    if(index===0){
        this.addAtHead(val)
    }else if(index===this.size){
        this.addAtTail(val)
    }else{
        for (let i = 0; i < index-1; i++) {
           curr = curr.next
        }
        newNode.next = curr.next
        curr.next = newNode
    }

    this.size++
}


MyLinkedList.prototype.addAtTail = function(val){
    let newNode = new Node(val)
    let curr = this.head

    // if my linkedlist is empty then we have point this.head to newNode and increase the size 
    if(!curr){
        this.head = newNode
        this.size++
        return
    }

    // Loop through the linkedlist until reached to last element and point the curr element to last element and points the curr.next element to newNode along with increasing the size
    while(curr.next !==null){
        curr = curr.next
    }

    curr.next = newNode
    this.size++
}

const linkedList = new MyLinkedList()

linkedList.addAtHead(5)
linkedList.addAtHead(4)
linkedList.addAtTail(2)
linkedList.addAtTail(6)
// linkedList.addAtTail(8)
linkedList.addAtIndex(1,1)
linkedList.deleteAtIndex(4)

console.log(linkedList.size)
console.log(linkedList.head)
console.log(linkedList.get(4))