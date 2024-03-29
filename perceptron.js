// Initialize DOM
let perceptronContainer = document.createElement('div');
perceptronContainer.setAttribute('id', 'perceptron');

document.body.appendChild(perceptronContainer);

//-------------------------- Single perceptron: 2 inputs, one output

w1 = Number((Math.random()).toFixed(2));
w2 = Number((Math.random()).toFixed(2));
b0 = Number((Math.random()).toFixed(2));

// console.log(w1, w2, b0);

// Computes simple perceptron output
function computePerceptronOutput(x1, x2, w1, w2, b0) {
    let output = x1 * w1 + x2 * w2 + b0;

    return output;
}

// Computes corrected weight and bias
function updateParameters(x1, x2, trueResult, neuronResult) {
    let n = 0.01;
    let diff = trueResult - neuronResult;

    w1 += n * diff * x1;
    w2 += n * diff * x2;
    b0 += n * diff;
}

// Global variables
let x1 = 0;
let x2 = 0;
let sum = 0;
let prediction = 0;

// Renders single perceptron computing page
function renderSinglePerceptronPage() {
    perceptronContainer.innerHTML = `
    <h2>Single perceptron computing</h1>

    <input id="a" type="number" placeholder="a">
    <input id="b" type="number" placeholder="b">
    <br>
    <button id="random">Generate random values</button>
    <button id="learn">Learn</button>
    <button id="predict">Predict</button>
    <p>----------------------------------</p>
    <button id="info-button">Get more Info</button>
    <button id="clear-info">Clear Info</button>
    <p id="info">Info:</p>
    `;

    addListeners();
}

// Adds listeners
function addListeners() {
    let aIn = document.querySelector('#a');
    let bIn = document.querySelector('#b');

    let generateRandomValsButton = document.querySelector('#random');
    let predictButton = document.querySelector('#predict');
    let learnButton = document.querySelector('#learn');

    let infoContent = document.querySelector('#info');
    let infoButton = document.querySelector('#info-button');
    let clearInfo = document.querySelector('#clear-info');

    aIn.value = '0';
    bIn.value = '0';

    aIn.addEventListener('change', () => {
        x1 = Number(aIn.value);
        sum = x1 + x2;
    });

    bIn.addEventListener('change', () => {
        x2 = Number(bIn.value);
        sum = x1 + x2;
    });


    generateRandomValsButton.addEventListener('click', () => {
        x1 = Number((Math.random()).toFixed(2));
        x2 = Number((Math.random()).toFixed(2));
        sum = x1 + x2;
        sum = Number(sum.toFixed(2));

        aIn.value = x1;
        bIn.value = x2;
    });

    predictButton.addEventListener('click', () => {
        prediction = computePerceptronOutput(x1, x2, w1, w2, b0);
        prediction = Number(prediction.toFixed(2));

        generateInfo(infoContent);
    });

    learnButton.addEventListener('click', () => {
        prediction = computePerceptronOutput(x1, x2, w1, w2, b0);
        prediction = Number(prediction.toFixed(2));

        updateParameters(x1, x2, sum, prediction);

        generateInfo(infoContent);
    });


    infoButton.addEventListener('click', () => {
        generateInfo(infoContent);
    });

    clearInfo.addEventListener('click', () => {
        infoContent.innerHTML = `Info: `;
    });
}

// Generates info paragraph
function generateInfo(infoP) {
    infoP.innerHTML += `
    <br>
    >>>
    result = ${sum} //
    prediction = ${prediction} <br>
    w1 = ${w1},
    w2 = ${w2},
    b= ${b0} <br>
    `;
}

renderSinglePerceptronPage();