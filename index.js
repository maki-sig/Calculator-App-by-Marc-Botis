// marc botis
// calculator app
// 6/10/2025

const display = document.getElementById("answer-display");
let formula = "";

function updateDisplay() {
    display.scrollLeft = display.scrollWidth;
}

// first row
function cClicked() {
    formula = formula.slice(0, -1);
    display.value = formula;
    updateDisplay();
}

function acClicked() {
    formula = "";
    display.value = formula;
    updateDisplay();
}

function lpClicked() {
    formula = formula.concat('(');
    display.value = formula;
    updateDisplay();
}

function rpClicked() {
    formula = formula.concat(')');
    display.value = formula;
    updateDisplay();
}


// fourth row
function oneClicked() {
    formula = formula.concat('1');
    display.value = formula;
    updateDisplay();
}

function twoClicked() {
    formula = formula.concat('2');
    display.value = formula;
    updateDisplay();
}

function threeClicked() {
    formula = formula.concat('3');
    display.value = formula;
    updateDisplay();
}

function addClicked() {
    formula = formula.concat('+');
    display.value = formula;
    updateDisplay();
}

// third row
function fourClicked() {
    formula = formula.concat('4');
    display.value = formula;
    updateDisplay();
}

function fiveClicked() {
    formula = formula.concat('5');
    display.value = formula;
    updateDisplay();
}

function sixClicked() {
    formula = formula.concat('6');
    display.value = formula;
    updateDisplay();
}

function minusClicked() {
    formula = formula.concat('-');
    display.value = formula;
    updateDisplay();
}

// second row
function sevenClicked() {
    formula = formula.concat('7');
    display.value = formula;
    updateDisplay();
}

function eightClicked() {
    formula = formula.concat('8');
    display.value = formula;
    updateDisplay();
}

function nineClicked() {
    formula = formula.concat('9');
    display.value = formula;
    updateDisplay();
}

function timesClicked() {
    formula = formula.concat('*');
    display.value = formula;
    updateDisplay();
}

// last row
function zeroClicked() {
    formula = formula.concat('0');
    display.value = formula;
    updateDisplay();
}

function dotClicked() {
    formula = formula.concat('.');
    display.value = formula;
    updateDisplay();
}

function divideClicked() {
    formula = formula.concat('/');
    display.value = formula;
    updateDisplay();
}

// animated calculating text with the help of ChatGPT
function calculate() {
    // const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=';
    const symbols = '10'; // binary alternative

    let result;
    try {
        result = eval(formula).toString(); // Final answer as string
    } catch (error) {
        display.value = "Error";
        return;
    }

    let currentLength = display.value.length;
    const targetLength = result.length;
    const intervalTime = 60; // 60ms

    const animation = setInterval(() => {
        let shuffled = '';
        for (let i = 0; i < currentLength; i++) {
            shuffled += symbols[Math.floor(Math.random() * symbols.length)];
        }

        display.value = shuffled;

        // Gradually decrease length toward result length
        if (currentLength > targetLength) {
            currentLength--;
        } else {
            clearInterval(animation);
            display.value = result;
            formula = result; // Update formula to result for next calculation
        }
    }, intervalTime);
}