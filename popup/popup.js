var popupWrap = document.getElementById("popupWrap");
var myPopup = document.getElementById("myPopup");

function showPopup(event) {
    myPopup.classList.toggle("show");
}

popupWrap.addEventListener("click", showPopup);