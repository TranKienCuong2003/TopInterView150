function minWindow(s, t) {
    if (s.length < t.length) return "";

    const tMap = new Map();
    for (let char of t) {
        tMap.set(char, (tMap.get(char) || 0) + 1);
    }

    const windowMap = new Map();
    let left = 0, right = 0, matched = 0;
    let minLength = Infinity, minLeft = 0;

    while (right < s.length) {
        const rightChar = s[right];
        windowMap.set(rightChar, (windowMap.get(rightChar) || 0) + 1);

        if (windowMap.get(rightChar) <= tMap.get(rightChar)) {
            matched++;
        }

        while (matched === t.length) {
            const windowLength = right - left + 1;
            if (windowLength < minLength) {
                minLength = windowLength;
                minLeft = left;
            }

            const leftChar = s[left];
            windowMap.set(leftChar, windowMap.get(leftChar) - 1);
            if (windowMap.get(leftChar) < tMap.get(leftChar)) {
                matched--;
            }
            left++;
        }

        right++;
    }

    return minLength === Infinity ? "" : s.slice(minLeft, minLeft + minLength);
}

// Example:
console.log(minWindow("ADOBECODEBANC", "ABC"));

console.log(minWindow("a", "a"));

console.log(minWindow("a", "aa"));
