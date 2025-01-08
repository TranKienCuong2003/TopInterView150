var findMinArrowShots = function(points) {
    points.sort((a, b) => a[1] - b[1]);
    
    let arrows = 1;
    let lastEnd = points[0][1];

    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > lastEnd) {
            arrows++;
            lastEnd = points[i][1];
        }
    }

    return arrows;
};

// Example:
let points1 = [[10,16],[2,8],[1,6],[7,12]];
console.log(findMinArrowShots(points1));

let points2 = [[1,2],[3,4],[5,6],[7,8]];
console.log(findMinArrowShots(points2));

let points3 = [[1,2],[2,3],[3,4],[4,5]];
console.log(findMinArrowShots(points3));
