var myBar = document.getElementById("myBar");
var label = document.getElementById("label");
var start = document.getElementById("start");

function move() {
    var width = 10;
    var id = setInterval(frame, 10);

    function frame() {
        if (width < 100) {
            width++;
            myBar.style.width = width + "%";
            label.innerHTML = width + "%";
        } else {
            clearInterval(id);
        }
    } 
}

start.addEventListener("click", move);