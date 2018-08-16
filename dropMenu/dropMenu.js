var nav = document.getElementById("nav");

function navOver(event) {
    if (event.target.className == "menu-item") {
        event.target.getElementsByClassName("submenu")[0].style.display = "block";
    }
}
function navOut(event) {
    if (event.target.className == "submenu") {
        event.target.style.display = "";        
    } 
    if (event.target.id == "nav") {
        var elems= event.target.getElementsByClassName("submenu");
        for (var i = 0; i < elems.length; i++) {
            elems[i].style.display = "";  
        }
    }

}

nav.addEventListener("mouseover", navOver);
nav.addEventListener("mouseout", navOut);