var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var mul = document.getElementById("mul");
var divis = document.getElementById("divis");
var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var answerValue = document.getElementById("answerValue");

function onPlus(event) {
    var number1 = +n1.value;
    var number2 = +n2.value;
    
    var answer = number1 + number2;

    answerValue.innerHTML = answer;
}

function onMinus(event) {
    var number1 = +n1.value;
    var number2 = +n2.value;
    
    var answer = number1 - number2;

    answerValue.innerHTML = answer;
}

function onMul(event) {
    var number1 = +n1.value;
    var number2 = +n2.value;
    
    var answer = number1 * number2;

    answerValue.innerHTML = answer;
}

function onDivis(event) {
    var number1 = +n1.value;
    var number2 = +n2.value;
    
    var answer = number1 / number2;

    answerValue.innerHTML = answer;
}

plus.addEventListener("click", onPlus);
minus.addEventListener("click", onMinus);
mul.addEventListener("click", onMul);
divis.addEventListener("click", onDivis);