// Approach 1 
/*

1. Convert linkedlist to array
2. then divide the length by 2 
3. and return the middle element

// but approach 1 is not the best approach because it will consume extra memory to create an array which ends up O(n) space complexity
*/

const middleNodeWithArray = (head) =>{
    const arr = []
    while(head){
        arr.push(head)
        head = head.next
    }    
    return arr[Math.floor(arr.length/2)]
}





// Approach 2 - Slow and Fast pointer

const middleNode = (head) =>{
    let s = f = head

    while(f && f.next){
        s = s.next
        f = f.next.next
    }
    return s
}