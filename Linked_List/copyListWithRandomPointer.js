function Node(val, next = null, random = null) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
  
  var copyRandomList = function(head) {
    if (!head) return null;
  
    let current = head;
    while (current) {
      let newNode = new Node(current.val, current.next);
      current.next = newNode;
      current = newNode.next;
    }
  
    current = head;
    while (current) {
      if (current.random) {
        current.next.random = current.random.next;
      }
      current = current.next.next;
    }
  
    let original = head;
    let copy = head.next;
    let copiedHead = head.next;
    
    while (original) {
      original.next = original.next.next;
      if (copy.next) {
        copy.next = copy.next.next;
        copy = copy.next;
      }
      original = original.next;
    }
  
    return copiedHead;
  };
  
  function printList(head) {
    let result = [];
    let current = head;
    while (current) {
      result.push([current.val, current.random ? current.random.val : null]);
      current = current.next;
    }
    return result;
  }
  
  // Example 1:
  const head1 = new Node(7, 
    new Node(13, 
      new Node(11, 
        new Node(10, 
          new Node(1)
        )
      )
    )
  );

  // Example
  head1.next.random = head1;
  head1.next.next.random = head1.next.next.next;
  head1.next.next.next.random = head1.next.next;
  head1.next.next.next.next.random = head1;
  
  console.log(printList(copyRandomList(head1)));

  const head2 = new Node(1, new Node(2));
  head2.random = head2.next;
  head2.next.random = head2.next;
  
  console.log(printList(copyRandomList(head2)));

  const head3 = new Node(3, new Node(3, new Node(3)));
  head3.random = null;
  head3.next.random = head3;
  head3.next.next.random = null;
  
  console.log(printList(copyRandomList(head3)));
  