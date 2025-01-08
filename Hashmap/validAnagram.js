function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const count = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    return count.every(num => num === 0);
}

// Example:
console.log(isAnagram("anagram", "nagaram"));

console.log(isAnagram("rat", "car"));
