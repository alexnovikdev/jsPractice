var sel = document.getElementById("sel");
var opts = sel.options;

function onChange(event) {
    alert("select option with index " + sel.selectedIndex +
            " and text " + opts[sel.selectedIndex].text +
            " and value " + opts[sel.selectedIndex].value
         );
}

sel.addEventListener("change", onChange);


var myRange = document.getElementById("myRange");
var rangeValue = document.getElementById("rangeValue");
var myText = document.getElementById("myText");
var testBlock = document.getElementById("testBlock");

function rangeChange(event) {
    var currentValue = myRange.value;
    rangeValue.innerHTML = currentValue;
    myText.value = currentValue;
    testBlock.style.width = currentValue * 100 + "px";
}

myRange.addEventListener("input", rangeChange);