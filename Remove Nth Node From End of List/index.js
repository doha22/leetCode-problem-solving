/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // using linked list
    // increment by n times
    // length-n --> remove n from list
    // so getting the index of element to remove from list
    // make to pointer move from prev to current.next

    let temp_node = new ListNode(-1);
    temp_node.next = head;
    let result = temp_node;
    let count = 0;
    let tail = head;

    while (count < n) {
        count++;
        tail = tail.next;
    }

    let remove_node = head;
    let prev = temp_node;

    while (tail) {
        tail = tail.next;
        remove_node = remove_node.next;
        prev = prev.next;
    }
    prev.next = remove_node.next; // change the pointer after removing the node

    return result.next;
};

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Input: head = [1], n = 1
// Output: []

// Input: head = [1,2], n = 1
// Output: [1]
