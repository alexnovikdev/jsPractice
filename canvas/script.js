let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    isMouseDown = false,
    coords = [],
    radius = 5,
    color = "magenta";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


canvas.addEventListener("mousedown", e => isMouseDown = true);

canvas.addEventListener("mouseup", e => {
    isMouseDown = false;
    context.beginPath();
    coords.push("mouseup");
});


canvas.addEventListener("mousemove", e => {
    context.fillStyle = color;
    context.strokeStyle = color;
    context.lineWidth = radius * 2;
    if (isMouseDown) {
        coords.push([e.clientX, e.clientY]);

        context.lineTo(e.clientX, e.clientY);
        context.stroke();

        context.beginPath();
        context.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
        context.fill();

        context.beginPath();
        context.moveTo(e.clientX, e.clientY);

    }
});


function clear() {
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.fillStyle = "black";
}


function save() {
    localStorage.setItem("coords", JSON.stringify(coords));
}


function replay() {
    context.fillStyle = color;
    context.strokeStyle = color;

    var timer = setInterval(() => {
        if (!coords || !coords.length) {
            clearInterval(timer);
            context.beginPath();
            return;
        }

        let crd = coords.shift(),
        e = {
            clientX: crd[0],
            clientY: crd[1]
        };
        context.lineTo(e.clientX, e.clientY);
        context.stroke();

        context.beginPath();
        context.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
        context.fill();

        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    }, 30);
}


document.addEventListener("keydown", e => {
    if (e.keyCode === 83) {
        // save
        save();
        console.log("Saved");
    } else if (e.keyCode === 82) {
        // replay
        coords = JSON.parse(localStorage.getItem("coords"));
        clear();
        replay();
        console.log("Replaying...");
    } else if (e.keyCode === 67) {
        // clear
        clear();
        console.log("Cleared");
    } 
});


alert("Press S to save stroke. Press R to repeat saved stroke. Press C to clear window.");


// context.fillStyle = "magenta";
// context.fillRect(50, 50, 300, 150);


// let x = y = 50;
// setInterval(() => {
//     context.fillStyle = "white";
//     context.fillRect(0, 0, canvas.width, canvas.height);
//     context.fillStyle = "magenta";
//     context.fillRect(x++, y++, 300, 150);
// }, 10);


// context.strokeStyle = "red";
// context.lineWidth = 10;
// context.strokeRect(50, 50, 300, 150);


// context.fillStyle = "magenta";
// context.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * 2, false);
// context.fill();


// context.scale(1.1, 1.1);
// context.rotate(0.1);


// context.strokeStyle = "red";
// context.fillStyle = "magenta";
// context.lineWidth = 10;
// context.beginPath();
// context.moveTo(300, 50);
// context.lineTo(200, 250);
// context.lineTo(400, 250);
// context.closePath();
// context.stroke();
// context.fill();


// let grad = context.createLinearGradient(300, 500, 900, 500);
// grad.addColorStop("0", "magenta");
// grad.addColorStop("0.50", "blue");
// grad.addColorStop("1", "red");
// context.fillStyle = grad;
// context.font = "bold 30px Georgia";
// context.textAlign = "center"
// context.fillText("Hello world!", canvas.width / 2, canvas.height / 2);