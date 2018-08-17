var closeModal = document.getElementById("closeModal");
var myModal = document.getElementById("myModal");
var myImage = document.getElementById("myImage");
var caption = document.getElementById("caption");
var modalImage = document.getElementById("modalImage");

function close(event) {
  myModal.style.display = "none";
}

function openModal(event) {
  myModal.style.display = "block";
  modalImage.src = myImage.src;
  caption.innerHTML = myImage.alt;
}

function stopProp(event) {
  event.stopPropagation();
}

closeModal.addEventListener("click", close);
myImage.addEventListener("click", openModal);
myModal.addEventListener("click", close);
modalImage.addEventListener("click", stopProp);
caption.addEventListener("click", stopProp);