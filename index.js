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

function calculate() {

    try {
        display.value = eval(formula);
        formula = display.value;
    } catch (error) {
        display.value = "Error";
    }
}