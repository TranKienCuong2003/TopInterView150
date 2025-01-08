function maxPoints(points) {
    if (points.length <= 2) {
        return points.length;
    }

    function gcd(a, b) {
        while (b !== 0) {
            let temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    }

    function getSlope(p1, p2) {
        const dx = p2[0] - p1[0];
        const dy = p2[1] - p1[1];
        if (dx === 0) {
            return ['inf', 0];
        }
        const g = gcd(dy, dx);
        return [dy / g, dx / g];
    }

    let maxPoints = 1;

    for (let i = 0; i < points.length; i++) {
        let slopes = {};
        let duplicate = 1;
        let localMax = 0;

        for (let j = i + 1; j < points.length; j++) {
            if (points[i][0] === points[j][0] && points[i][1] === points[j][1]) {
                duplicate++;
            } else {
                const slope = getSlope(points[i], points[j]);
                const slopeKey = slope.toString();
                slopes[slopeKey] = (slopes[slopeKey] || 0) + 1;
                localMax = Math.max(localMax, slopes[slopeKey]);
            }
        }

        maxPoints = Math.max(maxPoints, localMax + duplicate);
    }

    return maxPoints;
}

// ExampleExample
console.log(maxPoints([[1,1], [2,2], [3,3]]));
console.log(maxPoints([[1,1], [3,2], [5,3], [4,1], [2,3], [1,4]]));
