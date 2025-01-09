var evalRPN = function(tokens) {
    const stack = [];
    
    for (let token of tokens) {
        if (token === "+" || token === "-" || token === "*" || token === "/") {
            const b = stack.pop();
            const a = stack.pop();
            
            let result;
            if (token === "+") result = a + b;
            if (token === "-") result = a - b;
            if (token === "*") result = a * b;
            if (token === "/") result = Math.trunc(a / b);
            
            stack.push(result);
        } else {
            stack.push(parseInt(token));
        }
    }
    
    return stack.pop();
};

// Example:
console.log(evalRPN(["2","1","+","3","*"]));

console.log(evalRPN(["4","13","5","/","+"]));

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));
