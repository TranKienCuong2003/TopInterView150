var findWords = function(board, words) {
    class TrieNode {
        constructor() {
            this.children = {};
            this.isWord = false;
        }
    }

    function addWord(word) {
        let node = trie;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isWord = true;
    }

    function dfs(board, i, j, node, word, result) {
        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] === '#') {
            return;
        }

        const char = board[i][j];
        if (!node.children[char]) {
            return;
        }

        node = node.children[char];
        word += char;

        if (node.isWord) {
            result.add(word);
        }

        board[i][j] = '#';

        dfs(board, i + 1, j, node, word, result);
        dfs(board, i - 1, j, node, word, result);
        dfs(board, i, j + 1, node, word, result);
        dfs(board, i, j - 1, node, word, result);

        board[i][j] = char;
    }

    let trie = new TrieNode();

    for (let word of words) {
        addWord(word);
    }

    const result = new Set();

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            dfs(board, i, j, trie, "", result);
        }
    }

    return Array.from(result);
};

// ExampleExample
let board1 = [
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"]
];
let words1 = ["oath", "pea", "eat", "rain"];
console.log(findWords(board1, words1));

let board2 = [
    ["a", "b"],
    ["c", "d"]
];
let words2 = ["abcb"];
console.log(findWords(board2, words2));
