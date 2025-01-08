class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function rotateRight(head, k) {
    if (!head || k === 0) return head;

    let length = 1;
    let current = head;
    while (current.next) {
      length++;
      current = current.next;
    }

    current.next = head;

    k = k % length;
    if (k === 0) {
      current.next = null;
      return head;
    }

    let stepsToNewHead = length - k;
    let newTail = head;
    for (let i = 1; i < stepsToNewHead; i++) {
      newTail = newTail.next;
    }

    let newHead = newTail.next;
    newTail.next = null;
  
    return newHead;
  }

  function printList(head) {
    let result = [];
    while (head) {
      result.push(head.val);
      head = head.next;
    }
    return result;
  }
  
  // Example
  const head1 = new ListNode(1);
  head1.next = new ListNode(2);
  head1.next.next = new ListNode(3);
  head1.next.next.next = new ListNode(4);
  head1.next.next.next.next = new ListNode(5);
  
  console.log(printList(rotateRight(head1, 2)));
  
  const head2 = new ListNode(0);
  head2.next = new ListNode(1);
  head2.next.next = new ListNode(2);
  
  console.log(printList(rotateRight(head2, 4)));
  