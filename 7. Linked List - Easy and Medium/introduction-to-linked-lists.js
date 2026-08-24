/*
1. Linked list - A data structure consisting of nodes, where each node contains data and a reference to the next node in the sequence.
2. Singly linked list - A type of linked list where each node points to the next node, and the last node points to null.
3. Doubly linked list - A type of linked list where each node points to both the next and previous nodes, allowing traversal in both directions.
4. Circular linked list - A type of linked list where the last node points back to the first node, forming a circular structure.
5. Head - The first node in a linked list.
6. Tail - The last node in a linked list.
7. Node - An individual element of a linked list, containing data and a reference to the next (and possibly previous) node.
8. Traversal - The process of visiting each node in a linked list, typically to access or modify the data stored in the nodes.

Difference between Array and Linked List:
1. Memory Allocation: Arrays have a fixed size and are allocated in contiguous memory locations, while linked lists can grow or shrink dynamically and are allocated in non-contiguous memory locations.
2. Insertion and Deletion: Inserting or deleting elements in an array requires shifting elements, which can be inefficient, while linked lists allow for efficient insertion and deletion by adjusting pointers.
3. Access Time: Arrays provide constant-time access to elements using indices, while linked lists require linear-time traversal to access elements.
4. Memory Overhead: Linked lists require additional memory for storing pointers, while arrays have no such overhead.

Time Complexity:
1. Access: O(n) for linked lists, O(1) for arrays.
2. Search: O(n) for linked lists, O(n) for unsorted arrays, O(log n) for sorted arrays (using binary search).
3. Insertion: O(1) for linked lists (if inserting at the head), O(n) for arrays (due to shifting).
4. Deletion: O(1) for linked lists (if deleting the head), O(n) for arrays (due to shifting).





*/