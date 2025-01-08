function wordPattern(pattern, s) {
    const words = s.split(" ");
    if (pattern.length !== words.length) return false;

    const mapPatternToWord = new Map();
    const mapWordToPattern = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const pChar = pattern[i];
        const word = words[i];

        if (mapPatternToWord.has(pChar)) {
            if (mapPatternToWord.get(pChar) !== word) {
                return false;
            }
        } else {
            mapPatternToWord.set(pChar, word);
        }

        if (mapWordToPattern.has(word)) {
            if (mapWordToPattern.get(word) !== pChar) {
                return false;
            }
        } else {
            mapWordToPattern.set(word, pChar);
        }
    }

    return true;
}

// Example:
console.log(wordPattern("abba", "dog cat cat dog"));

console.log(wordPattern("abba", "dog cat cat fish"));

console.log(wordPattern("aaaa", "dog cat cat dog"));
