/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let finalSum, head;

  let addition = 0;

  while (l1 || l2) {
    let sum = 0;

    if (addition) {
      sum += addition;
      addition = 0;
    }

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.val;
    }

    if (sum >= 10) {
      sum -= 10;
      addition = 1;
    }

    if (!finalSum) {
      finalSum = new ListNode(sum);
      head = finalSum;
    } else {
      finalSum.next = new ListNode(sum);
      finalSum = finalSum.next;
    }
  }

  if (addition) {
    finalSum.next = new ListNode(addition);
  }

  return head;
};
