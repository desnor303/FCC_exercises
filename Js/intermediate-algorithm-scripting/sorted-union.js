function uniteUnique(...arr) {
    return arr
        .reduce((a, b) => a.concat(b), [])
        .reduce((acc, cur) => {
            if (!acc.includes(cur)) {
                acc.push(cur);
            }
            return acc;
        }, []);
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
