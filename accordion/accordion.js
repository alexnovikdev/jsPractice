var headers = document.getElementsByClassName("accordion");

function showPanel(event) {
    event.target.classList.toggle("active");
    event.target.nextElementSibling.classList.toggle("show");
}

for (var i = 0; i < headers.length; i++) {
    headers[i].addEventListener("click", showPanel);
}