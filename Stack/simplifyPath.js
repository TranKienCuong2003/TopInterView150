var simplifyPath = function(path) {
    const stack = [];
    const parts = path.split('/');

    for (let part of parts) {
        if (part === '' || part === '.') {
            continue;
        } else if (part === '..') {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(part);
        }
    }

    return '/' + stack.join('/');
};

// Example:
let path1 = "/home/";
console.log(simplifyPath(path1));

let path2 = "/home//foo/";
console.log(simplifyPath(path2));

let path3 = "/home/user/Documents/../Pictures";
console.log(simplifyPath(path3));

let path4 = "/../";
console.log(simplifyPath(path4));

let path5 = "/.../a/../b/c/../d/./";
console.log(simplifyPath(path5));
