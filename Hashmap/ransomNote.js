function canConstruct(ransomNote, magazine) {
    const countRansomNote = new Array(26).fill(0);
    const countMagazine = new Array(26).fill(0);

    for (let char of ransomNote) {
        countRansomNote[char.charCodeAt(0) - 97]++;
    }
    for (let char of magazine) {
        countMagazine[char.charCodeAt(0) - 97]++;
    }

    for (let i = 0; i < 26; i++) {
        if (countRansomNote[i] > countMagazine[i]) {
            return false;
        }
    }

    return true;
}

// Example:
console.log(canConstruct("a", "b"));

console.log(canConstruct("aa", "ab"));

console.log(canConstruct("aa", "aab"));
