

/*

Design Linked List


*/ 
// 1. Representation of a Node

function Node(value) {
    this.value = value;
    this.next = null;
}

// 2. Representation of a Singly Linked List

function SinglyLinkedList() {   
    this.head = null;
    this.size = 0;
}

// 3. addAtHead(value) - Adds a new node with the given value at the head of the linked list.
// 4. addAtTail(value) - Adds a new node with the given value at the tail of the linked list.
// 5. addAtIndex(index, value) - Adds a new node with the given value at the specified index in the linked list.
// 6. deleteAtIndex(index) - Deletes the node at the specified index in the linked list.
// 7. get(index) - Returns the value of the node at the specified index in the linked list.
