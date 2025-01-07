var combinationSum = function(candidates, target) {
    let result = [];

    function backtrack(start, target, currentCombination) {
        if (target === 0) {
            result.push([...currentCombination]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            let num = candidates[i];
            
            if (target - num < 0) continue;

            currentCombination.push(num);

            backtrack(i, target - num, currentCombination);

            currentCombination.pop();
        }
    }

    backtrack(0, target, []);

    return result;
};

// Example
let candidates1 = [2, 3, 6, 7];
let target1 = 7;
console.log(combinationSum(candidates1, target1));

let candidates2 = [2, 3, 5];
let target2 = 8;
console.log(combinationSum(candidates2, target2));

let candidates3 = [2];
let target3 = 1;
console.log(combinationSum(candidates3, target3));
