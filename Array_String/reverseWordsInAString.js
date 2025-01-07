function reverseWords(s) {
    let words = s.trim().split(/\s+/);
    
    let reversedWords = words.reverse();

    return reversedWords.join(' ');
}

// Example:
console.log(reverseWords("the sky is blue"));

console.log(reverseWords("  hello world  "));

console.log(reverseWords("a good   example"));
