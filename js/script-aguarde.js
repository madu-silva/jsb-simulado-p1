var num = Math.floor(Math.random() * (10-5+1)) + 5;

var message = document.getElementById("messagem");
var nro = document.getElementById("numero");

function updateMessage() {
    if (num > 0) {
        nro.textContent = num;
        if (num <= 3) {
            nro.classList.add("red-text");
        } else {
            nro.classList.remove("red-text");
        }
        num--;
    } else {
        clearInterval(interval);
        window.location.href = "verVeiculo.html";
    }
}

var interval = setInterval(updateMessage, 1000);
updateMessage();
