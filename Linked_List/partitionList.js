class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function partition(head, x) {
    let smallerHead = new ListNode(0);
    let greaterHead = new ListNode(0);
    let smaller = smallerHead;
    let greater = greaterHead;
    
    while (head !== null) {
      if (head.val < x) {
        smaller.next = head;
        smaller = smaller.next;
      } else {
        greater.next = head;
        greater = greater.next;
      }
      head = head.next;
    }

    greater.next = null;
    smaller.next = greaterHead.next;
    
    return smallerHead.next;
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
  head1.next = new ListNode(4);
  head1.next.next = new ListNode(3);
  head1.next.next.next = new ListNode(2);
  head1.next.next.next.next = new ListNode(5);
  head1.next.next.next.next.next = new ListNode(2);
  
  console.log(printList(partition(head1, 3)));

  const head2 = new ListNode(2);
  head2.next = new ListNode(1);
  
  console.log(printList(partition(head2, 2)));
  