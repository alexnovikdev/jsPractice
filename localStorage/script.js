let green = document.getElementById("green");
let red = document.getElementById("red");

if (localStorage.getItem("bgcolor")) {
    document.body.style.background = localStorage.getItem("bgcolor");
}

green.onclick = function(e) {
    document.body.style.background = "green";
    localStorage.setItem("bgcolor", "green");
}
red.onclick = function(e) {
    document.body.style.background = "red";
    localStorage.setItem("bgcolor", "red");
}