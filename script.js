// DOM
let container = document.querySelector('#root');

// Dataset
dataSum = [
    { a: 3, b: 3, sum: 6 },
    { a: 10, b: 13, sum: 23 },
    { a: 5, b: 5, sum: 10 },
    { a: 1, b: 2, sum: 3 },
    { a: 45, b: 21, sum: 66 },
    { a: 24, b: 7, sum: 31 }
];

// Checks sum data set
dataSum.map(item => {
    let sum = item.a + item.b;

    if (sum !== item.sum) {
        container.innerHTML += `
        <p>This item at position ${dataSum.indexOf(item)} in array is incorrect </p>
        `;
    }
});

// Creates random value
function random() {
    return Number(Math.random().toFixed(2));
}

// Initials random weights and biases
let w1 = random();
let w2 = random();
let w3 = random();
let w4 = random();
let w5 = random();
let w6 = random();

let b1 = random();
let b2 = random();
let b0 = random();

// console.log(w1, w2, w3, w4, w5, w6, b1, b2, b0);

// Creates sigmoid value
function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}

console.log(sigmoid(2));

