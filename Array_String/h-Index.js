function hIndex(citations) {
    citations.sort((a, b) => b - a);
    let h = 0;

    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            h = i + 1;
        } else {
            break;
        }
    }

    return h;
}

// Example:
let citations1 = [3, 0, 6, 1, 5];
console.log(hIndex(citations1));

let citations2 = [1, 3, 1];
console.log(hIndex(citations2));
