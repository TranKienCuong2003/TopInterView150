function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
  }
  
  var reverseKGroup = function(head, k) {
    let count = 0;
    let current = head;
    while (current) {
      count++;
      current = current.next;
    }
  
    if (count < k) return head;
  
    function reverseLinkedList(start, k) {
      let prev = null;
      let current = start;
      while (k > 0) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        k--;
      }
      return prev;
    }
  
    let dummy = new ListNode(0);
    dummy.next = head;
    let groupPrev = dummy;
  
    while (count >= k) {
      let groupStart = groupPrev.next;
      let groupEnd = groupStart;
      for (let i = 0; i < k - 1; i++) {
        groupEnd = groupEnd.next;
      }
  
      let nextGroup = groupEnd.next;
      groupEnd.next = null;
  
      groupPrev.next = reverseLinkedList(groupStart, k);
  
      groupStart.next = nextGroup;
      groupPrev = groupStart;
  
      count -= k;
    }
  
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
  console.log(printList(reverseKGroup(head1, 2)));
  
  const head2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  console.log(printList(reverseKGroup(head2, 3)));
  