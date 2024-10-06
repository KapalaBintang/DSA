/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let curr, head;
  head = curr;

  if (l1 || l2) {
    if (l1.val === l2.val) {
      curr = new ListNode(l1.val);
      curr.next = new ListNode(l2.val);
    } else if (l1.val < l2.val) {
        curr.next = 
    }
  }
};
