function printValues(max, min = 1, steps) {
    min = min < 1 ? 1 : min;
    max = max <= min ? min + 1 : max;
    const arrValues = [];
    for (let index = min; index <= max; index++) {
        if (index === min) {
            arrValues.push(index);
        } else {
            const item = (steps && steps > 0) ? arrValues[arrValues.length - 1] + steps : index;
            arrValues.push(item);
        }
    }
    return arrValues.map((curr) => {
        let value = curr;
        if (curr % 3 === 0) {
            value = 'Visual';
        }
        if (curr % 5 === 0) {
            value = 'Nuts';
        }
        if ((curr % 3 === 0) && (curr % 5 === 0)) {
            value = 'Visual Nuts';
        }
        return value;
    });
}

const result = printValues(100);
// const result = printValues(500);
// const result = printValues(100, 2);
// const result = printValues(100, 1, 5);
// const result = printValues(100, 5, 5);
console.log(result);