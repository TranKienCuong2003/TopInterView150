class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

const mergeKLists = function(lists) {
    if (!lists || lists.length === 0) return null;

    const mergeTwoLists = (l1, l2) => {
        const dummy = new ListNode();
        let current = dummy;

        while (l1 && l2) {
            if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }

        current.next = l1 || l2;
        return dummy.next;
    };

    while (lists.length > 1) {
        const mergedLists = [];
        for (let i = 0; i < lists.length; i += 2) {
            const l1 = lists[i];
            const l2 = i + 1 < lists.length ? lists[i + 1] : null;
            mergedLists.push(mergeTwoLists(l1, l2));
        }
        lists = mergedLists;
    }

    return lists[0];
};

const arrayToList = (arr) => {
    const dummy = new ListNode();
    let current = dummy;
    for (const num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
};

const listToArray = (list) => {
    const result = [];
    while (list) {
        result.push(list.val);
        list = list.next;
    }
    return result;
};

// Example
const lists1 = [
    arrayToList([1, 4, 5]),
    arrayToList([1, 3, 4]),
    arrayToList([2, 6])
];
const result1 = mergeKLists(lists1);
console.log("Example 1 Output:", listToArray(result1));

const lists2 = [];
const result2 = mergeKLists(lists2);
console.log("Example 2 Output:", listToArray(result2));

const lists3 = [arrayToList([])];
const result3 = mergeKLists(lists3);
console.log("Example 3 Output:", listToArray(result3));
