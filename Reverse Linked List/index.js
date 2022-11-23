/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function reverseList(head) {
    let prev = null;
    let curr = head;
    let nextTemp = null;

    while (curr != null) {
        // update currentNode
        nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev; // is the last node
}

console.log(reverseList([(1, 2)]));
