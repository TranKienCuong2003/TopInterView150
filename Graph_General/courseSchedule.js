var canFinish = function(numCourses, prerequisites) {
    const graph = new Array(numCourses).fill(0).map(() => []);
    for (let [course, prereq] of prerequisites) {
        graph[course].push(prereq);
    }
    
    const visited = new Array(numCourses).fill(0);
    
    const dfs = (course) => {
        if (visited[course] === 1) return false;
        if (visited[course] === 2) return true;
        
        visited[course] = 1;
        
        for (let prereq of graph[course]) {
            if (!dfs(prereq)) return false;
        }
        
        visited[course] = 2;
        return true;
    };
    
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }
    
    return true;
};

// Example
console.log(canFinish(2, [[1,0]]));
console.log(canFinish(2, [[1,0], [0,1]]));
