var myBtn = document.getElementById("myBtn");
var myModal = document.getElementById("myModal");
var closeModal = document.getElementById("closeModal");

function closeModalListener(event) {
    myModal.style.display = "none";
}

function myBtnListener(event) {
    myModal.style.display = "block";
}

function windowListener(event) {
    if (event.target == myModal) {
        myModal.style.display = "none";
    }
}

closeModal.addEventListener("click", closeModalListener);
myBtn.addEventListener("click", myBtnListener);
window.addEventListener("click", windowListener);
