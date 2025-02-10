function changeToYes() {
    let noButton = document.getElementById("noButton");
    noButton.innerText = "Tak";
    noButton.setAttribute("onclick", "showHeart(true)");
}

function showHeart(yes) {
    if (yes) {
        document.getElementById("questionBox").classList.add("hidden");
        document.getElementById("heartBox").classList.remove("hidden");
    }
}

function showMessage() {
    document.getElementById("message").classList.remove("hidden");
}
