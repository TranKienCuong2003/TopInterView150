function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
  }
  
  var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let p = l1, q = l2, current = dummy;
    let carry = 0;
  
    while (p || q || carry) {
      let x = p ? p.val : 0;
      let y = q ? q.val : 0;
      let sum = x + y + carry;
      carry = Math.floor(sum / 10);
      current.next = new ListNode(sum % 10);
      current = current.next;
      
      if (p) p = p.next;
      if (q) q = q.next;
    }
  
    return dummy.next;
  };
  
  // Example:
  const l1_1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  const l2_1 = new ListNode(5, new ListNode(6, new ListNode(4)));
  console.log(JSON.stringify(addTwoNumbers(l1_1, l2_1)));
  
  const l1_2 = new ListNode(0);
  const l2_2 = new ListNode(0);
  console.log(JSON.stringify(addTwoNumbers(l1_2, l2_2)));
  
  const l1_3 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
  const l2_3 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
  console.log(JSON.stringify(addTwoNumbers(l1_3, l2_3)));
  