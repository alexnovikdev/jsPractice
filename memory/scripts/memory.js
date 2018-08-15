"use strict";

/*Cards collection*/

var cards = ["card1", "card2", "card3", "card4", "card5", "card6",
             "card1", "card2", "card3", "card4", "card5", "card6"
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

var card1 = null,
    card2 = null,
    card3 = null,
    card4 = null,
    card5 = null,
    card6 = null,
    card7 = null,
    card8 = null,
    card9 = null,
    card10 = null,
    card11 = null,
    card12 = null,
    startShowTime = 0,
    pairShowTime = 0,
    btnStart = null,
    cardsCollection = null,
    cardBack = "",
    timerShowAll = null,
    timerShowTwo = null,
    openCard = "",
    mistakeNum = 0,
    mistakeSpan = null,
    openedCardArr = [];

function enableClick() {
    card1.addEventListener("click", showCard);
    card2.addEventListener("click", showCard);
    card3.addEventListener("click", showCard);
    card4.addEventListener("click", showCard);
    card5.addEventListener("click", showCard);
    card6.addEventListener("click", showCard);
    card7.addEventListener("click", showCard);
    card8.addEventListener("click", showCard);
    card9.addEventListener("click", showCard);
    card10.addEventListener("click", showCard);
    card11.addEventListener("click", showCard);
    card12.addEventListener("click", showCard);
}
function disableClick() {
    card1.removeEventListener("click", showCard);
    card2.removeEventListener("click", showCard);
    card3.removeEventListener("click", showCard);
    card4.removeEventListener("click", showCard);
    card5.removeEventListener("click", showCard);
    card6.removeEventListener("click", showCard);
    card7.removeEventListener("click", showCard);
    card8.removeEventListener("click", showCard);
    card9.removeEventListener("click", showCard);
    card10.removeEventListener("click", showCard);
    card11.removeEventListener("click", showCard);
    card12.removeEventListener("click", showCard);
}

function removeListener(openedCardArr) {
    for (var i = 0; i < openedCardArr.length; i++) {
        openedCardArr[i].removeEventListener("click", showCard);
    }
}

function startShow(e) {

    btnStart.disabled = "disabled";
    cards.shuffle();

    for (var i = 0; i < cardsCollection.length; i++) {
        cardsCollection[i].src = 
            cardsCollection[i].src.slice(0, -12) + cards[i] + ".jpg"; 
    }

    timerShowAll = setTimeout( function() {
        for (var i = 0; i < cardsCollection.length; i++) {
            cardsCollection[i].src = 
                cardsCollection[i].src.slice(0, -9) + cardBack + ".jpg";
                enableClick(); 
        }
    }, startShowTime * 1000);

}

function showCard(e) {
    var index = e.target.id.slice(4);
    e.target.src = e.target.src.slice(0, -12) + cards[index - 1] + ".jpg";
    e.target.removeEventListener("click", showCard);
    if (!openCard) {
        openCard = e.target;
    } else {
        if (openCard.src.slice(-9).slice(0, 5) == cards[index - 1]) {
            openedCardArr.push(openCard);
            openedCardArr.push(e.target);
            openCard = "";
        } else {
            disableClick();
            timerShowTwo = setTimeout(function() {
                openCard.src = openCard.src.slice(0, -9) + cardBack + ".jpg";
                e.target.src = e.target.src.slice(0, -9) + cardBack + ".jpg";
                openCard = "";
                mistakeNum++;
                mistakeSpan.innerHTML = mistakeNum;
                enableClick();
                removeListener(openedCardArr); 
            }, pairShowTime * 1000);
        }
    }
}

window.onload = function() {

    card1 = document.getElementById("card1");
    card2 = document.getElementById("card2");
    card3 = document.getElementById("card3");
    card4 = document.getElementById("card4");
    card5 = document.getElementById("card5");
    card6 = document.getElementById("card6");
    card7 = document.getElementById("card7");
    card8 = document.getElementById("card8");
    card9 = document.getElementById("card9");
    card10 = document.getElementById("card10");
    card11 = document.getElementById("card11");
    card12 = document.getElementById("card12");

    cardsCollection = document.getElementsByClassName("card");

    btnStart = document.getElementById("btnStart");
    mistakeSpan = document.getElementById("mistakeSpan");

    startShowTime = 5;
    pairShowTime = 2;
    cardBack = "cardBack",

    btnStart.addEventListener("click", startShow);

}