function fullJustify(words, maxWidth) {
    let res = [];
    let cur = [];
    let curLen = 0;

    for (let word of words) {
        if (curLen + word.length + cur.length > maxWidth) {
            let spaces = maxWidth - curLen;
            for (let i = 0; i < spaces; i++) {
                cur[i % (cur.length - 1 || 1)] += ' ';
            }
            res.push(cur.join(''));
            cur = [];
            curLen = 0;
        }
        cur.push(word);
        curLen += word.length;
    }

    res.push(cur.join(' ') + ' '.repeat(maxWidth - curLen - cur.length + 1));
    return res;
}

// Example
console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));

console.log(fullJustify(["What","must","be","acknowledgment","shall","be"], 16));

console.log(fullJustify(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], 20));
