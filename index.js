// marc botis
// calculator app
// 6/10/2025

const display = document.getElementById("answer-display");
let formula = "";

// first row
function cClicked() {
    formula = formula.slice(0, -1);
    display.value = formula;
}

function acClicked() {
    formula = "";
    display.value = formula;
}

function lpClicked() {
    formula = formula.concat('(');
    display.value = formula;
}

function rpClicked() {
    formula = formula.concat(')');
    display.value = formula;
}


// second row
function oneClicked() {
    formula = formula.concat('1');
    display.value = formula;
}

function twoClicked() {
    formula = formula.concat('2');
    display.value = formula;
}

function threeClicked() {
    formula = formula.concat('3');
    display.value = formula;
}

function addClicked() {
    formula = formula.concat(' + ');
    display.value = formula;
}

// third row
function fourClicked() {
    formula = formula.concat('4');
    display.value = formula;
}

function fiveClicked() {
    formula = formula.concat('5');
    display.value = formula;
}

function sixClicked() {
    formula = formula.concat('6');
    display.value = formula;
}

function minusClicked() {
    formula = formula.concat(' - ');
    display.value = formula;
}

// fourth row
function sevenClicked() {
    formula = formula.concat('7');
    display.value = formula;
}

function eightClicked() {
    formula = formula.concat('8');
    display.value = formula;
}

function nineClicked() {
    formula = formula.concat('9');
    display.value = formula;
}

function timesClicked() {
    formula = formula.concat(' * ');
    display.value = formula;
}

// last row
function zeroClicked() {
    formula = formula.concat('0');
    display.value = formula;
}

function dotClicked() {
    formula = formula.concat('.');
    display.value = formula;
}

function divideClicked() {
    formula = formula.concat(' / ');
    display.value = formula;
}

// animated calculating text with the help of ChatGPT
function calculate() {
    const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=';
    
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