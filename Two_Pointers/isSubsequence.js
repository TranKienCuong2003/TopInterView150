function isSubsequence(s, t) {
    let i = 0;
    for (let j = 0; j < t.length; j++) {
        if (s[i] === t[j]) {
            i++;
        }
        if (i === s.length) {
            return true;
        }
    }
    return i === s.length;
}

// Example:
console.log(isSubsequence("abc", "ahbgdc"));

console.log(isSubsequence("axc", "ahbgdc"));
