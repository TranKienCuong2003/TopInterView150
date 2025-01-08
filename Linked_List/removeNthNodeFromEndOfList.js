function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
  }
  
  var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let fast = dummy;
    let slow = dummy;

    for (let i = 0; i <= n; i++) {
      fast = fast.next;
    }

    while (fast !== null) {
      fast = fast.next;
      slow = slow.next;
    }

    slow.next = slow.next.next;
  
    return dummy.next;
  };

  function printList(head) {
    let result = [];
    while (head) {
      result.push(head.val);
      head = head.next;
    }
    return result;
  }
  
  // Example:
  const head1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  console.log(printList(removeNthFromEnd(head1, 2)));

  const head2 = new ListNode(1);
  console.log(printList(removeNthFromEnd(head2, 1)));

  const head3 = new ListNode(1, new ListNode(2));
  console.log(printList(removeNthFromEnd(head3, 1)));
  