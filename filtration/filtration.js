var myInput = document.getElementById("myInput");
var myUl = document.getElementById("myUl");
var li = document.getElementsByTagName("li");
var filter, a, i;

function inputListener(event) {
    filter = myInput.value.toUpperCase();

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

myInput.addEventListener("keyup", inputListener);