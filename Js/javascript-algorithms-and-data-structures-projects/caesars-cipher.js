function rot13(str) {
    let alphabet = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];
    let dtc = 13;
    // if( curIndex + distance <= length) {
    //   return alphabet[curIndex+distance]
    // }
    //   if( curIndex + distance < length) {
    //   return alphabet[]
    // }
    return str
        .split("")
        .map((ele) => {
            let regex = /[A-Z]/gi;
            if (regex.test(ele)) {
                let curIndex = alphabet.findIndex((char) => char === ele);
                let length = alphabet.length;
                if (curIndex + dtc < length) {
                    return alphabet[curIndex + dtc];
                } else if (curIndex + dtc >= length) {
                    return alphabet[curIndex + dtc - length];
                }
            }
            return ele;
        })
        .join("");
}

rot13("SERR PBQR PNZC");
console.log(rot13("SERR PBQR PNZC"));
