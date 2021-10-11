function fromRange ( min, max) {
    const output = [];
    for (let i=min ; i<=max ; i++)  output.push(i);
    return output ;
}

const range = fromRange (-7,+3);
console.log(range);
// (11) [-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3]