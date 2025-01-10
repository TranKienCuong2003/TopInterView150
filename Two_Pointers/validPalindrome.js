function isPalindrome(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return s === s.split('').reverse().join('');
}

// Example:
console.log(isPalindrome("A man, a plan, a canal: Panama"));

console.log(isPalindrome("race a car"));

console.log(isPalindrome(" "));
