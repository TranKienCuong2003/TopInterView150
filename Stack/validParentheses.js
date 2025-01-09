var isValid = function(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (map[char]) {
            stack.push(char);
        } else {
            const last = stack.pop();
            if (map[last] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

// Example:
let s1 = "()";
console.log(isValid(s1));

let s2 = "()[]{}";
console.log(isValid(s2));

let s3 = "(]";
console.log(isValid(s3));

let s4 = "([])";
console.log(isValid(s4));
