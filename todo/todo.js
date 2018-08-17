var btn = document.getElementById("btn");
var myNodelist = document.getElementsByTagName("LI");
var i;
var list = document.querySelector("ul");
var myInput = document.getElementById("myInput");
var close;

function ulListenet(event) {
    if (event.target.tagName == "LI") {
        event.target.classList.toggle("checked");
    }
}

list.addEventListener("click", ulListenet);

function addSpan() {
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var text = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(text);
        myNodelist[i].appendChild(span);
    }
    close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
        close[i].addEventListener("click", closeListener);
    }
}

addSpan();

function closeListener(event) {
    var li = event.target.parentElement;
    li.style.display = "none";
}


function onBtn(even) {
    var newLi = document.createElement("li");
    var inputValue = myInput.value;
    var newText = document.createTextNode(inputValue);
    newLi.appendChild(newText);
    if (inputValue === "") {
        alert("Empty task");
    } else {
        list.appendChild(newLi);
        myInput.value = "";
        addSpan();
    }
}

btn.addEventListener("click", onBtn);