/*
234. Palindrome Linked List

// Approach 1 - Not a good way because it uses extra memory so space complexity will be O(n)

1. Create an array
2. Iterate through linked list and push the node value in an array
3. Find the mid length of an arr
4. Loop through array till middle of the arr
5. Create two pointer p1 and p2
6. Compare right === left using p1 ===p1
7. if all are equal then it is a palindrome
*/

const palindromeLinkedList = (head) =>{
    if(head && !head.next) return true

    let arr = [] // space = O(n)
    let curr = head
    // Push each value in an array
    while(curr){ // time = O(n)
        arr.push(curr.val)
        curr = curr.next
    }

    // Check palindrome using array
    let mid = Math.floor(arr.length/2)
    let p1 = arr.length-1
    for (let i = 0; i < mid; i++) { //time = O(n/2)
        if(arr[i]!==arr[p1]) return false
        p1--
    }
    return true
    // Time Complexity = O(n)+O(n/2) ==> O(n)
    // Space Complexity = O(n)
}

// Follow up question - Can you solve this question with time = O(n) and space = O(1)
// Approach 2 - 

const palindromeLinkedListOptm = (head) =>{
    if(head && !head.next) return true;

    // Find Mid linked list
    let slow = fast = head

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next
    }
    // after the above loops runs slow is the middle linked list
    // now we have to revered the linked list from middle
    // We will consider slow as current element

    let prev = null

    while(slow){
        let temp = slow.next
        slow.next = prev
        prev = slow
        slow = temp
    }
    // after the above loop runs prev val indicate the last element and linked list is reversed 

    // Now we have to compare the first half with second half
    // prev = lastElement
    // head = firstElement

    let firstElement = head

    while(prev){ // we are running this loops till prev is not null because reversed linked list is pointing to null at the end
        if(head.val !== prev.val) return false

        prev = prev.next
        firstElement = firstElement.next

    }

    return true
    // Time Complexity = O(n)+O(n)+O(n) ==> O(n)
    // Space Complexity = O(1)
}