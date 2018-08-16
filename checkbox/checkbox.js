var check, rad1, rad2, rad3, checkBtn;

check = document.getElementById("check");
rads = document.getElementsByName("rad");
checkBtn = document.getElementById("checkBtn");

function change(event) {
    if (check.checked) {
        alert("checked");
    } else {
        alert("not checked");
    }
}

function findChecked(event) {
    for (var i = 0; i < rads.length; i++) {
        if (rads[i].checked) {
            alert(i + 1 + " radio checked");
            return;
        }
    }
    alert("radio not checked");
}

check.addEventListener("change", change);
checkBtn.addEventListener("click", findChecked);