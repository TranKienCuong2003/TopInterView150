function findSubstring(s, words) {
    const wordLength = words[0].length;
    const wordCount = words.length;
    const wordMap = new Map();

    for (let word of words) {
        wordMap.set(word, (wordMap.get(word) || 0) + 1);
    }

    const result = [];
    
    for (let i = 0; i <= s.length - wordLength * wordCount; i++) {
        const seenWords = new Map();
        let j = 0;
        
        while (j < wordCount) {
            const word = s.slice(i + j * wordLength, i + (j + 1) * wordLength);
            
            if (!wordMap.has(word) || (seenWords.get(word) || 0) >= wordMap.get(word)) {
                break;
            }
            
            seenWords.set(word, (seenWords.get(word) || 0) + 1);
            j++;
        }
        
        if (j === wordCount) {
            result.push(i);
        }
    }

    return result;
}

// Example:
console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]));

console.log(findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"]));

console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]));
