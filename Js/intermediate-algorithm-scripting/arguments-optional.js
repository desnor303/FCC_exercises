function addTogether() {
    const [first, second] = arguments;
    if (typeof first === "number") {
        if (typeof second === "number") return first + second;
        if (arguments.length === 1)
            return (second) => addTogether(first, second);
    }
}

// function addTogether() {
//   console.log(arguments)
//   const [first, second] = arguments;

//   if (typeof (first) === "number") {
//     if (typeof (second) === "number") return first + second;
//     if (arguments.length === 1) return (second) => addTogether(first, second);
//   }
// }

addTogether(2, 3);
addTogether(5);
addTogether(5)(7);
