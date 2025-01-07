function lengthOfLastWord(s) {
    return s.trim().split(' ').pop().length;
}

// Example
console.log(lengthOfLastWord("Hello World"));

console.log(lengthOfLastWord("   fly me   to   the moon  "));

console.log(lengthOfLastWord("luffy is still joyboy"));
