var letterCombinations = function(digits) {
    if (!digits) return [];

    const phoneMap = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    };

    let result = [];
    
    function backtrack(index, currentCombination) {
        if (index === digits.length) {
            result.push(currentCombination);
            return;
        }

        const currentDigit = digits[index];
        const letters = phoneMap[currentDigit];

        for (let letter of letters) {
            backtrack(index + 1, currentCombination + letter);
        }
    }

    backtrack(0, "");

    return result;
};

// Example
let digits1 = "23";
console.log(letterCombinations(digits1));

let digits2 = "";
console.log(letterCombinations(digits2));

let digits3 = "2";
console.log(letterCombinations(digits3));
