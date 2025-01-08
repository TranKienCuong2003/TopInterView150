var minMutation = function(start, end, bank) {
    const bankSet = new Set(bank);
    if (!bankSet.has(end)) return -1;

    const queue = [[start, 0]];
    const genes = ['A', 'C', 'G', 'T'];

    while (queue.length > 0) {
        const [current, mutations] = queue.shift();

        if (current === end) return mutations;

        for (let i = 0; i < current.length; i++) {
            for (const gene of genes) {
                if (gene !== current[i]) {
                    const mutated = current.slice(0, i) + gene + current.slice(i + 1);
                    if (bankSet.has(mutated)) {
                        queue.push([mutated, mutations + 1]);
                        bankSet.delete(mutated);
                    }
                }
            }
        }
    }

    return -1;
};

const param_1 = "AACCGGTT";
const param_2 = "AAACGGTA";
const param_3 = ["AACCGGTA", "AACCGCTA", "AAACGGTA"];

console.log(minMutation(param_1, param_2, param_3));
