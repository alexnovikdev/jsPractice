var btn = document.getElementById("btn");
var myDiv = document.getElementById("myDiv");
var close = document.getElementsByClassName("closebtn");
var i;

function btnClick(event) {
    if (myDiv.style.display === "none") {
        myDiv.style.display = "block";
    } else {
        myDiv.style.display = "none";
    }
}

btn.addEventListener("click", btnClick);

function closeListener(event) {
    var div = event.target.parentElement;
    div.style.opacity = "0";
    setTimeout(function() {
        div.style.display = "none";
    }, 600);
}

for (i = 0; i < close.length; i++) {
    close[i].addEventListener("click", closeListener);
}