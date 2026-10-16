// const arr = [2,7,11,15]
// const target = 17

// function twoSum() {
//     const map = new Map()
    
//     for (let i = 0; i < arr.length; i++) {
        
//         const compliment = target - arr[i]
//         if(map.has(compliment)){
//             return [map.get(compliment),i]
//         }

//         map.set(arr[i], i)
//     }
//     return -1
// }

// console.log(twoSum())



function Node(val){
    this.val = val
    this.next = null
}

function MyLinkedList(){
    this.head = null
    this.size = 0
}

MyLinkedList.prototype.addAtHead = function(val){
    let newNode = new Node(val)
    newNode.next = this.head
    this.head = newNode
    this.size++
}

MyLinkedList.prototype.addAtTail = function(val){
    let newNode = new Node(val)
    let curr = this.head
    while(curr.next){
        curr = curr.next
    }
    curr.next = newNode
    this.size ++
}
// 0,1,2,3,4,5
// 2,4
// index = 1, 7
MyLinkedList.prototype.addAtIndex = function(index, val){
    let newNode = new Node(val)
    let curr = this.head
    for (let i = 0; i < index - 1; i++) {
        curr = curr.next
    }
    newNode.next = curr.next
    curr.next = newNode
    this.size++
}

MyLinkedList.prototype.getVal = function(index){
    let curr = this.head
    for (let i = 0; i < index; i++) {
        curr = curr.next 
    }
    return curr.val
}
// 0,1,2,3,4,5
// 2,4,6,9,4
// index = 1, 7
MyLinkedList.prototype.deleteAt = function(index){
    let curr = this.head
    if(index===0){
        this.head = this.head.next
        this.size--
        return
    }
    for (let i = 0; i < index - 1; i++) {
        curr = curr.next 
    }
    curr.next = curr.next.next
    this.size--
}



const linkedList = new MyLinkedList()

linkedList.addAtHead(5)
linkedList.addAtHead(3)
linkedList.addAtHead(1)
linkedList.addAtTail(5)
linkedList.addAtTail(4)
linkedList.addAtTail(1)


// 1-->8-->2-->4-->5-->7
// 




function fnc(head, n){
    

    let odd = head
    let even = head.next
    let evenStart = even

    while(odd.next && even.next){
        odd.next = odd.next.next
        even.next = even.next.next
        odd = odd.next
        even = even.next
    }
    odd.next = evenStart
    return head
    
}
console.log(fnc(linkedList.head))