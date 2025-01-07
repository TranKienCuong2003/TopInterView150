class Node {
    constructor(val = 0, left = null, right = null, next = null) {
      this.val = val;
      this.left = left;
      this.right = right;
      this.next = next;
    }
  }

  var connect = function(root) {
    if (!root) return null;
  
    let queue = [root];
  
    while (queue.length > 0) {
      let size = queue.length;
      
      for (let i = 0; i < size; i++) {
        let node = queue.shift();
  
        if (i < size - 1) {
          node.next = queue[0];
        }
  
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
  
    return root;
  };
  
  // Example
  const root1 = new Node(1);
  root1.left = new Node(2);
  root1.right = new Node(3);
  root1.left.left = new Node(4);
  root1.left.right = new Node(5);
  root1.right.right = new Node(7);
  
  console.log(connect(root1));
  
  const root2 = null;
  console.log(connect(root2));
  