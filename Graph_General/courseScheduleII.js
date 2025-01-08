var findOrder = function(numCourses, prerequisites) {
    const graph = new Array(numCourses).fill(0).map(() => []);
    const inDegree = new Array(numCourses).fill(0);

    for (let [course, prereq] of prerequisites) {
        graph[prereq].push(course);
        inDegree[course]++;
    }

    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    const order = [];
    while (queue.length > 0) {
        const current = queue.shift();
        order.push(current);

        for (let neighbor of graph[current]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    return order.length === numCourses ? order : [];
};

// Example
console.log(findOrder(2, [[1, 0]]));
console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]));
console.log(findOrder(1, []));
