"use strict";

/*  Words collection*/ 
var wordList = ["АНТИЛОПА", "БЕГЕМОТ", "АВТОМОБИЛЬ", "ФУТБОЛ",
                "ПАРОВОЗ", "КОРОБКА", "ПИАНИНО", "ТЕЛЕВИЗОР",
                "РЕСТОРАН", "ОЛИМПИАДА"
                ];

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
Array.prototype.shuffle = function () {
    var j, x, i;
    for (i = this.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = this[i];
        this[i] = this[j];
        this[j] = x;
    }
    return this;
}

var currentWord = "",
    numWin = 0,
    numLose = 0,
    TTL = 15,
    secondLeft = 0,
    timer = null,
    btnStart = null,
    timeLeft = null,
    strTimer = null,
    strWord = null,
    txtResult = null,
    strWin = null,
    strLose = null;

function getNewWord(e) {
    if (!wordList.length) {
        timeLeft.innerHTML = "Game over";
        return;
    }
    secondLeft = TTL;
    pasteTimeLeft();
    currentWord = wordList.shuffle().shift();
    strWord.innerHTML = currentWord.split("").shuffle().join("");
    txtResult.value = "";
    txtResult.focus();
    btnStart.disabled = "disabled";
    timer = setInterval(getTime, 1000);
}

function checkInput(e) {
    if (txtResult.value.toUpperCase() == currentWord) {
        clearInterval(timer);
        numWin++;
        strWin.innerHTML = numWin;
        btnStart.disabled = "";
        getNewWord();
    }
}

function getTime() {
    secondLeft--;
    pasteTimeLeft();
    if (secondLeft == 0) {
        clearInterval(timer);
        numLose++;
        strLose.innerHTML = numLose;
        btnStart.disabled = "";
    }
}

function pasteTimeLeft() {
    strTimer.innerHTML = secondLeft;
}

window.onload = function() {
    btnStart = document.getElementById("btnStart");
    timeLeft = document.getElementById("timeLeft");
    strTimer = document.getElementById("strTimer");
    strWord = document.getElementById("strWord");
    txtResult = document.getElementById("txtResult");
    strWin = document.getElementById("strWin");
    strLose = document.getElementById("strLose");

    txtResult.addEventListener("keyup", checkInput);
    btnStart.addEventListener("click", getNewWord);

    pasteTimeLeft();

}