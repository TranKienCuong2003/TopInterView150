var calcEquation = function(equations, values, queries) {
    const graph = new Map();

    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        const value = values[i];
        
        if (!graph.has(a)) graph.set(a, new Map());
        if (!graph.has(b)) graph.set(b, new Map());
        
        graph.get(a).set(b, value);
        graph.get(b).set(a, 1 / value);
    }
    
    const dfs = (src, dest, visited) => {
        if (!graph.has(src)) return -1;
        if (src === dest) return 1;

        visited.add(src);
        
        for (let [neighbor, val] of graph.get(src)) {
            if (!visited.has(neighbor)) {
                const result = dfs(neighbor, dest, visited);
                if (result !== -1) return result * val;
            }
        }
        
        return -1;
    };
    
    const result = [];
    for (let [src, dest] of queries) {
        result.push(dfs(src, dest, new Set()));
    }
    
    return result;
};

// Example
const equations1 = [["a","b"],["b","c"]];
const values1 = [2.0, 3.0];
const queries1 = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]];
console.log(calcEquation(equations1, values1, queries1));

const equations2 = [["a","b"],["b","c"],["bc","cd"]];
const values2 = [1.5, 2.5, 5.0];
const queries2 = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]];
console.log(calcEquation(equations2, values2, queries2));

const equations3 = [["a","b"]];
const values3 = [0.5];
const queries3 = [["a","b"],["b","a"],["a","c"],["x","y"]];
console.log(calcEquation(equations3, values3, queries3));
