function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
  }
  
  var hasCycle = function(head) {
    if (!head || !head.next) {
      return false;
    }
  
    let slow = head;
    let fast = head;
  
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  
      if (slow === fast) {
        return true;
      }
    }
  
    return false;
  };
  
  // Example
  const node4 = new ListNode(-4);
  const node3 = new ListNode(0, node4);
  const node2 = new ListNode(2, node3);
  const node1 = new ListNode(3, node2);
  node4.next = node2;
  
  console.log(hasCycle(node1)); 
  
  const node2_2 = new ListNode(2);
  const node1_2 = new ListNode(1, node2_2);
  node2_2.next = node1_2;
  
  console.log(hasCycle(node1_2)); 
  
  const node1_3 = new ListNode(1);
  
  console.log(hasCycle(node1_3)); 
  