function whatIsInAName(collection, source) {
    let keySource = Object.keys(source);
    return collection.filter((ele) =>
        keySource.every((key) => source[key] === ele[key])
    );
}

whatIsInAName(
    [
        { first: "Romeo", last: "Montague" },
        { first: "Mercutio", last: null },
        { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
);
