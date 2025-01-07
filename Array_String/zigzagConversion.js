function convert(s, numRows) {
    if (numRows === 1) return s;
    const rows = Array(Math.min(numRows, s.length)).fill("");
    let curRow = 0;
    let goingDown = false;

    for (let char of s) {
        rows[curRow] += char;
        if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
        curRow += goingDown ? 1 : -1;
    }

    return rows.join("");
}

// Example
console.log(convert("PAYPALISHIRING", 3));

console.log(convert("PAYPALISHIRING", 4));

console.log(convert("A", 1));
