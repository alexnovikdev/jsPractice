var myBtn = document.getElementById("myBtn");
var myContainer = document.getElementById("myContainer");
var myAnimation = document.getElementById("myAnimation");

var pos, id;

function frame() {
    if (pos == 250) {
        clearInterval(id);
    } else {
        pos++;
        myAnimation.style.top = pos + "px";
        myAnimation.style.left = pos + "px";
    }
}

function myMove(event) {
    pos = 0;
    id = setInterval(frame, 10);
}

myBtn.addEventListener("click", myMove);