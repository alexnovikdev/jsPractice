var inputdol = document.getElementById("inputdol");
var output = document.getElementById("output");

var rates = 2.0508;

function count(event) {
    var res = inputdol.value * rates;
    output.innerHTML = res;
}

inputdol.addEventListener("keyup", count);