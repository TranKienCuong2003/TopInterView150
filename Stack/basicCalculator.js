var calculate = function(s) {
    let stack = [];
    let currentNum = 0;
    let sign = 1;
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char === ' ') continue;

        if (/\d/.test(char)) {
            currentNum = currentNum * 10 + parseInt(char);
        }

        if (char === '+' || char === '-' || i === s.length - 1 || char === '(' || char === ')') {
            if (char === '+' || char === '-') {
                result += sign * currentNum;
                currentNum = 0;
            }

            if (char === '+') {
                sign = 1;
            } else if (char === '-') {
                sign = -1;
            }

            if (char === '(') {
                stack.push(result);
                stack.push(sign);
                result = 0;
                sign = 1;
            }

            if (char === ')') {
                result += sign * currentNum;
                currentNum = 0;
                result *= stack.pop();
                result += stack.pop();
            }
        }
    }

    result += sign * currentNum;

    return result;
};

// Example:
console.log(calculate("1 + 1"));

console.log(calculate(" 2-1 + 2 "));

console.log(calculate("(1+(4+5+2)-3)+(6+8)"));
