var prevLink = document.getElementById("prevLink");
var nextLink = document.getElementById("nextLink");

var slides = document.getElementsByClassName("mySlides");

var dotCollection = document.getElementsByClassName("dot");

var slideIndex = 1;

showSlides(slideIndex);

function nextSlide(event) {
    if (event.target == prevLink) {
        showSlides(slideIndex -= 1);
    } 
    if (event.target == nextLink) {
        showSlides(slideIndex += 1);
    } 
}

function currentSlide(event) {
    for (var i = 0; i < dotCollection.length; i++) {
        if (event.target == dotCollection[i]) {
            showSlides(slideIndex = i + 1);
        }
    }
}

function showSlides(index) {
    var i;
    if (index > slides.length) {
        slideIndex = 1;
    }
    if (index < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dotCollection.length; i++) {
        dotCollection[i].className = dotCollection[i].className.replace("active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dotCollection[slideIndex - 1].className += " active";
}

prevLink.addEventListener("click", nextSlide);
nextLink.addEventListener("click", nextSlide);

for (var i = 0; i < dotCollection.length; i++) {
    dotCollection[i].addEventListener("click", currentSlide);
}