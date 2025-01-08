function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
  }
  
  var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0);
    let current = dummy;
  
    while (list1 !== null && list2 !== null) {
      if (list1.val <= list2.val) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next;
    }
  
    // If one of the lists is not exhausted
    if (list1 !== null) {
      current.next = list1;
    } else {
      current.next = list2;
    }
  
    return dummy.next;
  };
  
  // Example:
  const list1_1 = new ListNode(1, new ListNode(2, new ListNode(4)));
  const list2_1 = new ListNode(1, new ListNode(3, new ListNode(4)));
  console.log(JSON.stringify(mergeTwoLists(list1_1, list2_1)));
  
  const list1_2 = null;
  const list2_2 = null;
  console.log(JSON.stringify(mergeTwoLists(list1_2, list2_2)));

  const list1_3 = null;
  const list2_3 = new ListNode(0);
  console.log(JSON.stringify(mergeTwoLists(list1_3, list2_3)));
  