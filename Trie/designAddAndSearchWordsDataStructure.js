class WordDictionary {
    constructor() {
        this.trie = {};
    }

    addWord(word) {
        let node = this.trie;
        for (let char of word) {
            if (!node[char]) {
                node[char] = {};
            }
            node = node[char];
        }
        node.isWord = true;
    }

    search(word) {
        return this._searchHelper(word, 0, this.trie);
    }

    _searchHelper(word, index, node) {
        if (index === word.length) {
            return node.isWord === true;
        }

        let char = word[index];
        if (char === '.') {
            for (let key in node) {
                if (key !== 'isWord' && this._searchHelper(word, index + 1, node[key])) {
                    return true;
                }
            }
            return false;
        } else {
            if (!node[char]) {
                return false;
            }
            return this._searchHelper(word, index + 1, node[char]);
        }
    }
}

// Example:
let wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");

console.log(wordDictionary.search("pad"));
console.log(wordDictionary.search("bad"));
console.log(wordDictionary.search(".ad"));
console.log(wordDictionary.search("b.."));
