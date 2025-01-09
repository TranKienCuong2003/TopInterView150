class Trie {
    constructor() {
        this.trie = {};
    }

    insert(word) {
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
        let node = this.trie;
        for (let char of word) {
            if (!node[char]) {
                return false;
            }
            node = node[char];
        }
        return node.isWord === true;
    }

    startsWith(prefix) {
        let node = this.trie;
        for (let char of prefix) {
            if (!node[char]) {
                return false;
            }
            node = node[char];
        }
        return true;
    }
}

// Example:
let trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));
console.log(trie.search("app"));
console.log(trie.startsWith("app"));
trie.insert("app");
console.log(trie.search("app"));
