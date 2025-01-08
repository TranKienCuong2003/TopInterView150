function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

var sortList = function(head) {
    if (!head || !head.next) return head;

    function getMiddle(head) {
        let slow = head;
        let fast = head;
        let prev = null;
        
        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        
        if (prev) prev.next = null;
        return slow;
    }

    function merge(list1, list2) {
        let dummy = new ListNode(0);
        let current = dummy;

        while (list1 && list2) {
            if (list1.val < list2.val) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }

        if (list1) current.next = list1;
        if (list2) current.next = list2;

        return dummy.next;
    }

    function mergeSort(head) {
        if (!head || !head.next) return head;

        let mid = getMiddle(head);
        let left = mergeSort(head);
        let right = mergeSort(mid);

        return merge(left, right);
    }

    return mergeSort(head);
};

// Example
let head1 = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))));
let sorted1 = sortList(head1);
console.log("Sorted List 1:");
while (sorted1) {
    console.log(sorted1.val);
    sorted1 = sorted1.next;
}

let head2 = new ListNode(-1, new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0)))));
let sorted2 = sortList(head2);
console.log("Sorted List 2:");
while (sorted2) {
    console.log(sorted2.val);
    sorted2 = sorted2.next;
}
