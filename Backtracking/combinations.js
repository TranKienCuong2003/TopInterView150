var combine = function(n, k) {
    let result = [];
    
    function backtrack(start, currentCombination) {
        if (currentCombination.length === k) {
            result.push([...currentCombination]);
            return;
        }

        for (let i = start; i <= n; i++) {
            currentCombination.push(i);
            backtrack(i + 1, currentCombination);
            currentCombination.pop();
        }
    }
    
    backtrack(1, []);
    
    return result;
};

// Example
let n1 = 4, k1 = 2;
console.log(combine(n1, k1));

let n2 = 1, k2 = 1;
console.log(combine(n2, k2));
