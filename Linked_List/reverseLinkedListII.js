function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
  }
  
  var reverseBetween = function(head, left, right) {
    if (!head || left === right) return head;
  
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    for (let i = 0; i < left - 1; i++) {
      prev = prev.next;
    }
  
    let current = prev.next;
  
    for (let i = 0; i < right - left; i++) {
      let temp = current.next;
      current.next = temp.next;
      temp.next = prev.next;
      prev.next = temp;
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
  
  // ExampleExample:
  const head1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  console.log(printList(reverseBetween(head1, 2, 4)));
  
  const head2 = new ListNode(5);
  console.log(printList(reverseBetween(head2, 1, 1)));
  