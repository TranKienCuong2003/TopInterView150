function canCompleteCircuit(gas, cost) {
    const n = gas.length;
    let totalTank = 0;
    let currentTank = 0;
    let startIndex = 0;

    for (let i = 0; i < n; i++) {
        totalTank += gas[i] - cost[i];
        currentTank += gas[i] - cost[i];

        if (currentTank < 0) {
            startIndex = i + 1;
            currentTank = 0;
        }
    }

    return totalTank >= 0 ? startIndex : -1;
}

//  Example:
console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]));

console.log(canCompleteCircuit([2,3,4], [3,4,3]));
